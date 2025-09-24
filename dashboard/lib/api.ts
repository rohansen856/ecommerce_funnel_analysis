import axios from "axios"
import { getDemoData } from "./demo-data"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // 5 second timeout
})

// Add response interceptor to handle fallback to demo data
api.interceptors.response.use(
  (response) => {
    // Emit live mode event when backend is available
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('live-mode-active'))
    }
    return response
  },
  (error) => {
    if (error.code === 'ECONNREFUSED' ||
        error.code === 'ENETUNREACH' ||
        error.code === 'ENOTFOUND' ||
        error.message?.includes('Network Error') ||
        error.message?.includes('timeout') ||
        !navigator.onLine) {

      console.warn('🔌 Backend unavailable, falling back to demo data:', error.message)

      // Emit demo mode event for status indicator
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('demo-mode-active'))
      }

      // Extract endpoint from the failed request
      const endpoint = error.config?.url
      const params = error.config?.params

      // Return demo data response
      return Promise.resolve(getDemoData(endpoint, params))
    }
    return Promise.reject(error)
  }
)

// API endpoints
export const dashboardAPI = {
  // Dashboard metrics
  getDashboardMetrics: (startDate?: string, endDate?: string) =>
    api.get("/dashboard/metrics", { params: { start_date: startDate, end_date: endDate } }),

  // Funnel analysis
  getFunnelAnalysis: (deviceType?: string, startDate?: string, endDate?: string) =>
    api.get("/funnel/analysis", {
      params: { device_type: deviceType, start_date: startDate, end_date: endDate },
    }),

  getDropoffAnalysis: (deviceType?: string, limit?: number) =>
    api.get("/funnel/dropoff", { params: { device_type: deviceType, limit } }),

  // User behavior
  getUserBehavior: (userId: string) => api.get(`/users/${userId}/behavior`),

  getSimilarUsers: (userId: string, limit?: number, deviceFilter?: string) =>
    api.get(`/users/similar/${userId}`, {
      params: { limit, device_filter: deviceFilter },
    }),

  // Sentiment analysis
  getSentimentAnalysis: (page?: string, startDate?: string, endDate?: string) =>
    api.get("/sentiment/analysis", {
      params: { page, start_date: startDate, end_date: endDate },
    }),

  // Analytics
  getConversionTrends: (period?: string, deviceType?: string, startDate?: string, endDate?: string) =>
    api.get("/analytics/conversion-trends", {
      params: { period, device_type: deviceType, start_date: startDate, end_date: endDate },
    }),

  getUserJourneyPatterns: (deviceType?: string, minSessions?: number) =>
    api.get("/analytics/user-journey", {
      params: { device_type: deviceType, min_sessions: minSessions },
    }),

  getCohortAnalysis: (cohortType?: string, deviceType?: string) =>
    api.get("/analytics/cohort", {
      params: { cohort_type: cohortType, device_type: deviceType },
    }),

  // Model operations
  refreshAnalytics: () => api.post("/analytics/refresh"),
  retrainModels: () => api.post("/models/retrain"),
}
