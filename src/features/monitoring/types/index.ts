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


export interface DetectionItem {
    id: number;
    ip_address: string;
    path: string;
    method: string;
    status: string;
    description: string;
    accessed_at: string;
}

export interface Detections {
    current_page: number;
    items: DetectionItem[];
    limit: number;
    total_page: number;
}

export interface GetListDetectionResponse {
    detections: Detections;
    message: string;
}
