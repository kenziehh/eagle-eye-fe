export interface ApiCall {
  id: string
  ipAddress: string
  status: "accepted" | "rejected"
  timestamp: string
  description?: string
  type: "normal" | "suspicious"
}

export interface ApiUsageData {
  date: string
  calls: number
}

export interface MonitoringStats {
  totalCalls: number
  acceptedCalls: number
  rejectedCalls: number
  suspiciousCalls: number
}
