"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface ApiUsageChartProps {
  totalCalls: number
  onAddQuota: () => void
}

export function ApiUsageChart({ totalCalls, onAddQuota }: ApiUsageChartProps) {
  return (
    <div className="space-y-6">
      <Card className="bg-[#251F4E] border-0">
        <CardHeader>
          <CardTitle className="text-primary text-xl">Grafik Penggunaan API</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Chart Placeholder - In real implementation, use a charting library like recharts */}
          <div className="h-64 rounded-lg border border-purple-600/30 flex items-center justify-center relative overflow-hidden">
            {/* Simple SVG chart simulation */}
            <svg width="100%" height="100%" viewBox="0 0 400 200" className="absolute inset-0">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M 20 150 Q 80 100 120 120 T 200 80 T 280 100 T 360 130"
                stroke="#a855f7"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M 20 150 Q 80 100 120 120 T 200 80 T 280 100 T 360 130 L 360 180 L 20 180 Z"
                fill="url(#chartGradient)"
              />
              {/* Data points */}
              <circle cx="20" cy="150" r="4" fill="#a855f7" />
              <circle cx="120" cy="120" r="4" fill="#a855f7" />
              <circle cx="200" cy="80" r="4" fill="#a855f7" />
              <circle cx="280" cy="100" r="4" fill="#a855f7" />
              <circle cx="360" cy="130" r="4" fill="#a855f7" />
            </svg>
          </div>
        </CardContent>
      </Card>

      <div className="text-center space-y-4">
        <Button onClick={onAddQuota} className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full">
          <Plus className="w-5 h-5 mr-2" />
          Tambah kuota verifikasi API
        </Button>

        <div className="text-white">
          <p className="text-sm text-purple-200 mb-1">
            Verifikasi yang telah digunakan pada platform anda adalah sebanyak
          </p>
          <p className="text-2xl font-bold">{totalCalls.toLocaleString()} pemanggilan</p>
        </div>
      </div>
    </div>
  )
}
