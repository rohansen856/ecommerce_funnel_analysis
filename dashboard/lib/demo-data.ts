import type {
  DashboardMetrics,
  FunnelAnalysis,
  SentimentAnalysis,
  ConversionTrend,
  UserJourneyPattern,
  CohortData,
  UserBehavior,
  SimilarUser,
  DropoffPoint
} from "@/lib/types"

export const demoData = {
  dashboardMetrics: {
    total_users: 12847,
    total_sessions: 28594,
    overall_conversion_rate: 4.2,
    mobile_vs_desktop_conversion: {
      Mobile: 3.8,
      Desktop: 4.7,
      Tablet: 3.2
    },
    top_drop_off_points: [
      {
        from_step: "product_view",
        to_step: "add_to_cart",
        dropoff_count: 3421,
        dropoff_rate: 67.2,
        users_at_step: 5089,
        users_continued: 1668
      },
      {
        from_step: "cart",
        to_step: "checkout",
        dropoff_count: 892,
        dropoff_rate: 53.5,
        users_at_step: 1668,
        users_continued: 776
      },
      {
        from_step: "checkout",
        to_step: "payment",
        dropoff_count: 234,
        dropoff_rate: 30.2,
        users_at_step: 776,
        users_continued: 542
      },
      {
        from_step: "payment",
        to_step: "confirmation",
        dropoff_count: 89,
        dropoff_rate: 16.4,
        users_at_step: 542,
        users_continued: 453
      }
    ] as DropoffPoint[],
    daily_metrics: [
      { date: "2015-01-01", sessions: 234, conversions: 12, unique_users: 187, conversion_rate: 5.1 },
      { date: "2015-01-02", sessions: 278, conversions: 8, unique_users: 221, conversion_rate: 2.9 },
      { date: "2015-01-03", sessions: 312, conversions: 15, unique_users: 245, conversion_rate: 4.8 },
      { date: "2015-01-04", sessions: 289, conversions: 11, unique_users: 198, conversion_rate: 3.8 },
      { date: "2015-01-05", sessions: 345, conversions: 18, unique_users: 267, conversion_rate: 5.2 }
    ],
    sentiment_distribution: {
      Positive: 42.3,
      Neutral: 38.7,
      Negative: 19.0
    }
  } as DashboardMetrics,

  funnelAnalysis: [
    {
      device_type: "Mobile",
      total_users: 7234,
      overall_conversion_rate: 3.8,
      steps: [
        { step: "landing", total_users: 7234, conversion_rate: 100.0, drop_off_rate: 0.0, avg_time_spent: 45.2 },
        { step: "product_view", total_users: 4567, conversion_rate: 63.1, drop_off_rate: 36.9, avg_time_spent: 89.7 },
        { step: "add_to_cart", total_users: 1234, conversion_rate: 27.0, drop_off_rate: 73.0, avg_time_spent: 67.3 },
        { step: "checkout", total_users: 567, conversion_rate: 45.9, drop_off_rate: 54.1, avg_time_spent: 156.8 },
        { step: "payment", total_users: 345, conversion_rate: 60.8, drop_off_rate: 39.2, avg_time_spent: 78.4 },
        { step: "confirmation", total_users: 275, conversion_rate: 79.7, drop_off_rate: 20.3, avg_time_spent: 23.1 }
      ]
    },
    {
      device_type: "Desktop",
      total_users: 5613,
      overall_conversion_rate: 4.7,
      steps: [
        { step: "landing", total_users: 5613, conversion_rate: 100.0, drop_off_rate: 0.0, avg_time_spent: 52.8 },
        { step: "product_view", total_users: 3789, conversion_rate: 67.5, drop_off_rate: 32.5, avg_time_spent: 112.3 },
        { step: "add_to_cart", total_users: 1456, conversion_rate: 38.4, drop_off_rate: 61.6, avg_time_spent: 89.2 },
        { step: "checkout", total_users: 892, conversion_rate: 61.3, drop_off_rate: 38.7, avg_time_spent: 189.6 },
        { step: "payment", total_users: 634, conversion_rate: 71.1, drop_off_rate: 28.9, avg_time_spent: 94.7 },
        { step: "confirmation", total_users: 264, conversion_rate: 41.6, drop_off_rate: 58.4, avg_time_spent: 31.2 }
      ]
    }
  ] as FunnelAnalysis[],

  sentimentAnalysis: [
    {
      page: "landing",
      overall_sentiment: 0.23,
      sentiment_distribution: { Positive: 45.2, Neutral: 39.8, Negative: 15.0 },
      avg_confidence: 0.78,
      total_interactions: 12847
    },
    {
      page: "product_view",
      overall_sentiment: 0.31,
      sentiment_distribution: { Positive: 52.1, Neutral: 34.7, Negative: 13.2 },
      avg_confidence: 0.82,
      total_interactions: 8356
    },
    {
      page: "cart",
      overall_sentiment: 0.18,
      sentiment_distribution: { Positive: 38.9, Neutral: 42.3, Negative: 18.8 },
      avg_confidence: 0.74,
      total_interactions: 2690
    },
    {
      page: "checkout",
      overall_sentiment: -0.12,
      sentiment_distribution: { Positive: 28.4, Neutral: 46.2, Negative: 25.4 },
      avg_confidence: 0.69,
      total_interactions: 1459
    },
    {
      page: "payment",
      overall_sentiment: -0.08,
      sentiment_distribution: { Positive: 31.7, Neutral: 43.6, Negative: 24.7 },
      avg_confidence: 0.71,
      total_interactions: 979
    }
  ] as SentimentAnalysis[],

  conversionTrends: [
    { date: "2015-01-01", period: "daily", total_sessions: 234, conversions: 12, unique_users: 187, conversion_rate: 5.1 },
    { date: "2015-01-02", period: "daily", total_sessions: 278, conversions: 8, unique_users: 221, conversion_rate: 2.9 },
    { date: "2015-01-03", period: "daily", total_sessions: 312, conversions: 15, unique_users: 245, conversion_rate: 4.8 },
    { date: "2015-01-04", period: "daily", total_sessions: 289, conversions: 11, unique_users: 198, conversion_rate: 3.8 },
    { date: "2015-01-05", period: "daily", total_sessions: 345, conversions: 18, unique_users: 267, conversion_rate: 5.2 },
    { date: "2015-01-06", period: "daily", total_sessions: 298, conversions: 14, unique_users: 234, conversion_rate: 4.7 },
    { date: "2015-01-07", period: "daily", total_sessions: 367, conversions: 19, unique_users: 289, conversion_rate: 5.2 },
    { date: "2015-01-08", period: "daily", total_sessions: 423, conversions: 16, unique_users: 342, conversion_rate: 3.8 },
    { date: "2015-01-09", period: "daily", total_sessions: 389, conversions: 21, unique_users: 298, conversion_rate: 5.4 },
    { date: "2015-01-10", period: "daily", total_sessions: 345, conversions: 13, unique_users: 267, conversion_rate: 3.8 },
    { date: "2015-01-11", period: "daily", total_sessions: 298, conversions: 17, unique_users: 234, conversion_rate: 5.7 },
    { date: "2015-01-12", period: "daily", total_sessions: 456, conversions: 22, unique_users: 367, conversion_rate: 4.8 },
    { date: "2015-01-13", period: "daily", total_sessions: 389, conversions: 18, unique_users: 298, conversion_rate: 4.6 },
    { date: "2015-01-14", period: "daily", total_sessions: 534, conversions: 25, unique_users: 423, conversion_rate: 4.7 },
    { date: "2015-01-15", period: "daily", total_sessions: 467, conversions: 23, unique_users: 378, conversion_rate: 4.9 }
  ] as ConversionTrend[],

  userJourneyPatterns: [
    {
      pattern: ["landing", "product_view", "add_to_cart", "checkout", "payment", "confirmation"],
      frequency: 275,
      conversion_rate: 100.0,
      avg_session_duration: 445.2
    },
    {
      pattern: ["landing", "product_view", "add_to_cart", "checkout"],
      frequency: 892,
      conversion_rate: 30.8,
      avg_session_duration: 298.7
    },
    {
      pattern: ["landing", "product_view", "add_to_cart"],
      frequency: 2690,
      conversion_rate: 10.2,
      avg_session_duration: 156.3
    },
    {
      pattern: ["landing", "product_view"],
      frequency: 8356,
      conversion_rate: 3.3,
      avg_session_duration: 89.7
    },
    {
      pattern: ["landing"],
      frequency: 12847,
      conversion_rate: 2.1,
      avg_session_duration: 45.2
    }
  ] as UserJourneyPattern[],

  cohortAnalysis: [
    { cohort: "2015-01", period: 0, users: 3421, retention_rate: 100.0 },
    { cohort: "2015-01", period: 1, users: 2134, retention_rate: 62.4 },
    { cohort: "2015-01", period: 2, users: 1567, retention_rate: 45.8 },
    { cohort: "2015-01", period: 3, users: 1234, retention_rate: 36.1 },
    { cohort: "2015-02", period: 0, users: 3789, retention_rate: 100.0 },
    { cohort: "2015-02", period: 1, users: 2456, retention_rate: 64.8 },
    { cohort: "2015-02", period: 2, users: 1789, retention_rate: 47.2 },
    { cohort: "2015-03", period: 0, users: 4123, retention_rate: 100.0 },
    { cohort: "2015-03", period: 1, users: 2678, retention_rate: 64.9 }
  ] as CohortData[],

  userBehavior: [
    {
      user_id: "demo_user_12345",
      device: "Mobile",
      total_sessions: 7,
      total_interactions: 143,
      pages_visited: ["landing", "product_view", "add_to_cart", "checkout", "payment", "confirmation"],
      conversion_completed: true,
      sentiment_score: 0.23
    },
    {
      user_id: "user_78901",
      device: "Desktop",
      total_sessions: 4,
      total_interactions: 89,
      pages_visited: ["landing", "product_view", "add_to_cart", "checkout"],
      conversion_completed: false,
      sentiment_score: -0.12
    },
    {
      user_id: "user_23456",
      device: "Mobile",
      total_sessions: 9,
      total_interactions: 234,
      pages_visited: ["landing", "product_view", "add_to_cart", "checkout", "payment", "confirmation"],
      conversion_completed: true,
      sentiment_score: 0.45
    },
    {
      user_id: "user_34567",
      device: "Tablet",
      total_sessions: 2,
      total_interactions: 34,
      pages_visited: ["landing", "product_view"],
      conversion_completed: false,
      sentiment_score: 0.08
    }
  ] as UserBehavior[],

  similarUsers: [
    {
      user_id: "user_78901",
      similarity_score: 0.94,
      device: "Mobile",
      conversion_completed: true,
      total_sessions: 6
    },
    {
      user_id: "user_23456",
      similarity_score: 0.89,
      device: "Mobile",
      conversion_completed: false,
      total_sessions: 8
    },
    {
      user_id: "user_34567",
      similarity_score: 0.87,
      device: "Desktop",
      conversion_completed: true,
      total_sessions: 4
    },
    {
      user_id: "user_45678",
      similarity_score: 0.85,
      device: "Mobile",
      conversion_completed: false,
      total_sessions: 5
    },
    {
      user_id: "user_56789",
      similarity_score: 0.82,
      device: "Tablet",
      conversion_completed: true,
      total_sessions: 3
    }
  ] as SimilarUser[]
}

export const getDemoData = (endpoint: string, params?: Record<string, any>) => {
  console.log(`🎭 Using demo data for ${endpoint}`, params)

  switch (endpoint) {
    case "/dashboard/metrics":
      return { data: demoData.dashboardMetrics }
    case "/funnel/analysis":
      return { data: demoData.funnelAnalysis }
    case "/funnel/dropoff":
      return { data: demoData.dashboardMetrics.top_drop_off_points.slice(0, params?.limit || 10) }
    case "/sentiment/analysis":
      if (params?.page) {
        const pageData = demoData.sentimentAnalysis.find(s => s.page === params.page)
        return { data: pageData ? [pageData] : [] }
      }
      return { data: demoData.sentimentAnalysis }
    case "/analytics/conversion-trends":
      return { data: demoData.conversionTrends }
    case "/analytics/user-journey":
      return { data: demoData.userJourneyPatterns }
    case "/analytics/cohort":
      return { data: demoData.cohortAnalysis }
    case "/users/similar":
      return { data: demoData.similarUsers }
    default:
      if (endpoint.startsWith("/users/") && endpoint.endsWith("/behavior")) {
        const userId = endpoint.split("/")[2]
        const user = demoData.userBehavior.find(u => u.user_id === userId)
        return { data: user || demoData.userBehavior[0] }
      }
      return { data: null }
  }
}