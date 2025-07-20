"use client"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ApiKeyForm } from "../components/api-key-form"
import { ApiKeyCard } from "../components/api-key-card"
import { ApiCallsResponse, GetKeyStatusResponse } from "../types"
import { createApiKey, updateApiKey } from "../services"
import { toast } from "sonner"
import { downloadApiKeyTxt } from "@/lib/download"

export function ApiKeyManagement({
  apiKeyStatus,
  apiCalls,
}: {
  apiKeyStatus: GetKeyStatusResponse
  apiCalls: ApiCallsResponse
}) {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingKeyId, setEditingKeyId] = useState<string | null>(null)
  const [editingValue, setEditingValue] = useState("")
  const [showApiKey, setShowApiKey] = useState<{ [key: string]: boolean }>({})
  const [newKeyName, setNewKeyName] = useState("")
  const [newKeyEnvironment, setNewKeyEnvironment] = useState("")

  const toggleApiKeyVisibility = (keyId: string) => {
    setShowApiKey((prev) => ({ ...prev, [keyId]: !prev[keyId] }))
  }

  const handleCreateApiKey = async () => {
    try {
      const response = await createApiKey({ prefix: newKeyName })
      const apiKey = response?.customers.api_key
      if (apiKey) {
        downloadApiKeyTxt(apiKey)
        toast.success("API Key created successfully")
      } else {
        toast.error("API Key is undefined")
      }
      setShowCreateForm(false)
      setNewKeyName("")
      setNewKeyEnvironment("")
      toast.success("API Key created successfully")
    } catch (error) {
      toast.error(error as unknown as string)
    }
  }

  const handleUpdateApiKey = async () => {
    try {
      if (!editingKeyId) return
      const response = await updateApiKey({ prefix: editingValue })
      const apiKey = response?.customers.api_key
      if (apiKey) {
        downloadApiKeyTxt(apiKey)
        toast.success("API Key updated successfully")
      } else {
        toast.error("API Key is undefined")
      }
      setEditingKeyId(null)
      setEditingValue("")
    } catch (error) {
      toast.error(error as unknown as string)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
  }

  const customerKey = apiCalls.customers

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Manajemen API Key</h1>
            <p className="text-purple-200">Kelola API key untuk mengakses layanan EagleEye</p>
          </div>
          {apiKeyStatus.customers.expires_at && apiKeyStatus.customers.is_customer &&
            new Date(apiKeyStatus.customers.expires_at) > new Date() ? null : (
            <Button onClick={() => setShowCreateForm(true)} className="bg-[#251F4E] w-fit">
              <Plus className="w-4 h-4 mr-2" />
              Buat API Key Baru
            </Button>
          )}
        </div>
        <Separator className="bg-purple-600/30 mt-4" />
      </div>

      {/* Create API Key Form */}
      {showCreateForm && (
        <ApiKeyForm
          newKeyName={newKeyName}
          setNewKeyName={setNewKeyName}
          newKeyEnvironment={newKeyEnvironment}
          setNewKeyEnvironment={setNewKeyEnvironment}
          onSubmit={handleCreateApiKey}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      {/* API Keys List */}
      <div className="space-y-4">
        {
          apiKeyStatus.customers.is_customer ? (
            <ApiKeyCard
          apiKey={customerKey}
          showApiKey={showApiKey["customers"] ?? false}
          editingKey={editingKeyId === "customers"}
          editingValue={editingValue}
          onToggleVisibility={() => toggleApiKeyVisibility("customers")}
          onCopy={copyToClipboard}
          onEdit={() => {
            setEditingKeyId("customers")
            setEditingValue("") // Optional: setEditingValue(customerKey.prefix || "")
          }}
          onSave={handleUpdateApiKey}
          onCancelEdit={() => {
            setEditingKeyId(null)
            setEditingValue("")
          }}
          onChangeEditingValue={setEditingValue}
        />
          ):(
            <div className="text-gray-400">
              Anda belum memiliki API Key. Silakan buat API Key baru untuk mengakses layanan.
            </div>
          )
        }

      </div>
    </div>
  )
}
