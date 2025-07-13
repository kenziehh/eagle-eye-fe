"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Eye, Shield, ShieldOff } from "lucide-react"
import { ApiCall, DetectionItem } from "../types"

interface ApiCallsTableProps {
  title: string
  calls: DetectionItem[]
  searchPlaceholder?: string
}

export function ApiCallsTable({ title, calls, searchPlaceholder = "Cari disini..." }: ApiCallsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCalls = calls.filter(
    (call) =>
      call.ip_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleBlockIP = (ipAddress: string) => {
    console.log("Blocking IP:", ipAddress)
  }

  const handleUnblockIP = (ipAddress: string) => {
    console.log("Unblocking IP:", ipAddress)
  }

  const handleViewDetails = (callId: string) => {
    console.log("Viewing details for call:", callId)
  }

  return (
    <Card className="bg-purple-800/30 border-purple-600/50">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-white text-xl">{title}</CardTitle>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-4 h-4" />
            <Input
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-purple-900/50 border-purple-600/50 text-white placeholder:text-purple-300 focus:border-purple-400"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-600/30">
                <th className="text-left py-3 px-4 text-purple-200 font-semibold">IP Address</th>
                <th className="text-left py-3 px-4 text-purple-200 font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-purple-200 font-semibold">Pilihan Tindakan</th>
                <th className="text-left py-3 px-4 text-purple-200 font-semibold">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {filteredCalls.map((call) => (
                <tr key={call.id} className="border-b border-purple-600/20 hover:bg-purple-800/20">
                  <td className="py-3 px-4 text-white font-mono text-sm">{call.ip_address}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant={call.status === "accepted" ? "default" : "destructive"}
                      className={
                        call.status === "Diterima"
                          ? "bg-green-600 hover:bg-green-600 text-white"
                          : "bg-red-600 hover:bg-red-600 text-white"
                      }
                    >
                      {call.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-2">
                      {call.status === "Diterima" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleBlockIP(call.ip_address)}
                          className="text-xs bg-primary text-white hover:bg-primary-dark"
                        >
                          Block IP
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUnblockIP(call.ip_address)}
                          className="text-xs bg-primary text-white hover:bg-primary-dark"
                        >
                          Unblock IP
                        </Button>
                      )}
                      {/* <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleViewDetails(call.id)}
                        className="bg-primary text-white hover:bg-primary-dark"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        Lihat Detail
                      </Button> */}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-purple-200 text-sm">
                    {call.status === "Ditolak"
                      ? call.path === "/api/v1/detections/detect-image"
                        ? "Ditolak pada API image"
                        : "Ditolak pada API audio"
                      : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredCalls.length === 0 && (
            <div className="text-center py-8 text-purple-300">Tidak ada data yang ditemukan</div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
