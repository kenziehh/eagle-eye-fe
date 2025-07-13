"use client"

import { ApiCallsResponse } from "@/features/docs/types"
import { ApiCallsTable } from "../components/api-calls-table"
import { ApiUsageChart } from "../components/api-usage-chart"
import { mockApiCalls, mockStats, mockSuspiciousCalls } from "../data/monitoring-data"
import { useRouter } from "next/navigation"


export function MonitoringContainer({ apiCalls }: { apiCalls: ApiCallsResponse }) {
  const router = useRouter()
  const handleAddQuota = () => {
    router.push('/pricing')
  }

  return (
    <div className="min-h-screen container">
      <div className=" space-y-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - API Usage Chart */}
          <div className="lg:col-span-1">
            <ApiUsageChart totalCalls={Number.parseInt(apiCalls.customers.total_calls)} onAddQuota={handleAddQuota} />
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
