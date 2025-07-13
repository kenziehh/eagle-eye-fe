export interface ApiKey {
  id: string
  name: string
  key: string
  status: "active" | "inactive"
  createdAt: string
  lastUsed: string
  requests: number
}

export interface SidebarSection {
  title: string
  icon: any
  items: SidebarItem[]
}

export interface SidebarItem {
  name: string
  href: string
  id: string
}

export interface ApiResponse {
  success: boolean
  result: "original" | "fake" | "unknown"
  confidence: number
  message: string
  timestamp: string
}


export interface GetKeyStatusResponse {
  customers: {
    is_customer: boolean
    expires_at: string
  }
  message: string
}

export interface APIKeyResponse {
  customers: {
    api_key: string
    expires_at: string
  }
  message: string
}



