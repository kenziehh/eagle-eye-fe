"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Edit, Eye, EyeOff } from "lucide-react"
import { ApiKey } from "../types"

interface ApiKeyCardProps {
  apiKey?: ApiKey
  showApiKey?: boolean
  editingKey?: boolean
  editingValue: string
  onToggleVisibility: () => void
  onCopy: (key: string) => void
  onEdit: () => void
  onSave: () => void
  onCancelEdit: () => void
  onChangeEditingValue: (value: string) => void
  onDelete?: () => void
}

export function ApiKeyCard({
  apiKey,
  showApiKey,
  editingKey,
  editingValue,
  onToggleVisibility,
  onCopy,
  onEdit,
  onSave,
  onCancelEdit,
  onChangeEditingValue,
  onDelete,
}: ApiKeyCardProps) {
  return (
    <Card className="bg-purple-800/30 border-purple-600/50">
      <CardContent className="pt-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <h3 className="text-white font-semibold">API Key</h3>
              <Badge variant="default" className="bg-green-600 w-fit">active</Badge>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-purple-200">
              <span>
                Berlaku hingga: {apiKey?.expires_at ? new Date(apiKey.expires_at).toLocaleDateString() : "-"}
              </span>
              <span>Total Penggunaan: {apiKey?.total_calls}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <code className="bg-purple-900/50 px-3 py-1 rounded text-purple-200 font-mono text-sm break-all">
               ••••••••••••••••••••••••••••••••••••••••
              </code>
             
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onEdit}
              className="border-purple-600/50 text-purple-200 hover:bg-purple-700/50 bg-transparent"
            >
              <Edit className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Edit Form */}
        {editingKey && (
          <div className="mt-4 pt-4 border-t border-purple-600/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-purple-200">Custom Prefix API Key</Label>
                <Input
                  value={editingValue}
                  onChange={(e) => onChangeEditingValue(e.target.value)}
                  className="bg-purple-900/50 border-purple-600/50 text-white"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Button size="sm" onClick={onSave} className="bg-purple-600 hover:bg-purple-700">
                Simpan Perubahan
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onCancelEdit}
                className="border-purple-600/50 text-purple-200 hover:bg-purple-700/50 bg-transparent"
              >
                Batal
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
