"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import {
  getCustomerUsageHourly,
  getCustomerUsageMonthly,
  getCustomerUsageWeekly
} from "../services"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"

type DetectionData = {
  time: string
  usage: number
}

interface ApiUsageChartProps {
  totalCalls: number
  onAddQuota: () => void
}

export function ApiUsageChart({ totalCalls, onAddQuota }: ApiUsageChartProps) {
  const [mode, setMode] = useState<"hourly" | "daily" | "weekly">("daily")
  const [chartData, setChartData] = useState<DetectionData[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchChartData = async () => {
      setIsLoading(true)
      try {
        let response
        if (mode === "hourly") {
          response = await getCustomerUsageHourly()
        } else if (mode === "daily") {
          response = await getCustomerUsageMonthly()
        } else {
          response = await getCustomerUsageWeekly()
        }

        if (response?.detections?.details) {
          setChartData(response.detections.details)
        } else {
          setChartData([])
        }
      } catch (error) {
        console.error("Error fetching chart data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchChartData()
  }, [mode])

  return (
    <div className="space-y-6">
      <Card className="bg-[#251F4E] border-0">
        <CardHeader className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <CardTitle className="text-primary text-xl">Grafik Penggunaan API</CardTitle>
          <Select value={mode} onValueChange={(val) => setMode(val as any)}>
            <SelectTrigger className="w-[150px] text-black bg-white border-none">
              <SelectValue placeholder="Pilih mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hourly">24 Jam Terakhir</SelectItem>
              <SelectItem value="daily">30 Hari Terakhir</SelectItem>
              <SelectItem value="weekly">7 Minggu Terakhir</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent>
          <div className="h-64 rounded-lg bg-purple-800/10 p-4">
            {isLoading ? (
              <div className="text-white text-center pt-20">Loading chart...</div>
            ) : chartData.length === 0 ? (
              <div className="text-white text-center pt-20">Tidak ada data</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#a855f7" />
                  <XAxis dataKey="time" stroke="#a855f7" />
                  <YAxis stroke="#a855f7" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="usage"
                    stroke="#a855f7"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
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
