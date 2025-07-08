"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ApiKeyFormProps {
  newKeyName: string
  setNewKeyName: (name: string) => void
  newKeyEnvironment: string
  setNewKeyEnvironment: (env: string) => void
  onSubmit: () => void
  onCancel: () => void
}

export function ApiKeyForm({
  newKeyName,
  setNewKeyName,
  newKeyEnvironment,
  setNewKeyEnvironment,
  onSubmit,
  onCancel,
}: ApiKeyFormProps) {
  return (
    <Card className="bg-purple-800/30 border-purple-600/50">
      <CardHeader>
        <CardTitle className="text-white">Buat API Key Baru</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="keyName" className="text-purple-200">
              Nama API Key
            </Label>
            <Input
              id="keyName"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="Masukkan nama API key"
              className="bg-purple-900/50 border-purple-600/50 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="environment" className="text-purple-200">
              Environment
            </Label>
            <Select value={newKeyEnvironment} onValueChange={setNewKeyEnvironment}>
              <SelectTrigger className="bg-purple-900/50 border-purple-600/50 text-white">
                <SelectValue placeholder="Pilih environment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="production">Production</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-4">
          <Button onClick={onSubmit} className="bg-purple-600 hover:bg-purple-700">
            Buat API Key
          </Button>
          <Button
            variant="outline"
            onClick={onCancel}
            className="border-purple-600/50 text-purple-200 hover:bg-purple-700/50 bg-transparent"
          >
            Batal
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
