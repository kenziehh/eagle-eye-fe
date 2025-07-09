"use client"

import { ApiCallsTable } from "../components/api-calls-table"
import { ApiUsageChart } from "../components/api-usage-chart"
import { mockApiCalls, mockStats, mockSuspiciousCalls } from "../data/monitoring-data"


export function MonitoringContainer() {
  const handleAddQuota = () => {
    console.log("Adding API quota...")
    // Handle quota addition logic
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - API Usage Chart */}
          <div className="lg:col-span-1">
            <ApiUsageChart totalCalls={mockStats.totalCalls} onAddQuota={handleAddQuota} />
          </div>

          {/* Right Column - API Calls Tables */}
          <div className="lg:col-span-2 space-y-8">
            <ApiCallsTable title="List Pemanggilan API" calls={mockApiCalls} searchPlaceholder="Cari disini..." />

            <ApiCallsTable
              title="List Percobaan Mencurigakan"
              calls={mockSuspiciousCalls}
              searchPlaceholder="Cari disini..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
