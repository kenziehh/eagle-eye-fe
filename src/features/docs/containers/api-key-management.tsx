"use client"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ApiKeyForm } from "../components/api-key-form"
import { ApiKeyCard } from "../components/api-key-card"
import { mockApiKeys } from "../data/mock-data"

export function ApiKeyManagement() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingKey, setEditingKey] = useState<string | null>(null)
  const [showApiKey, setShowApiKey] = useState<{ [key: string]: boolean }>({})
  const [newKeyName, setNewKeyName] = useState("")
  const [newKeyEnvironment, setNewKeyEnvironment] = useState("")

  const toggleApiKeyVisibility = (keyId: string) => {
    setShowApiKey((prev) => ({ ...prev, [keyId]: !prev[keyId] }))
  }

  const handleCreateApiKey = () => {
    console.log("Creating API key:", { name: newKeyName, environment: newKeyEnvironment })
    setShowCreateForm(false)
    setNewKeyName("")
    setNewKeyEnvironment("")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Manajemen API Key</h1>
            <p className="text-purple-200">Kelola API key untuk mengakses layanan EagleEye</p>
          </div>
          <Button onClick={() => setShowCreateForm(true)} className="bg-[#251F4E] w-fit">
            <Plus className="w-4 h-4 mr-2" />
            Buat API Key Baru
          </Button>
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
        {mockApiKeys.map((apiKey) => (
          <ApiKeyCard
            key={apiKey.id}
            apiKey={apiKey}
            showApiKey={showApiKey[apiKey.id] || false}
            editingKey={editingKey === apiKey.id}
            onToggleVisibility={() => toggleApiKeyVisibility(apiKey.id)}
            onCopy={copyToClipboard}
            onEdit={() => setEditingKey(apiKey.id)}
            onSave={() => setEditingKey(null)}
            onCancelEdit={() => setEditingKey(null)}
            onDelete={() => console.log("Delete key:", apiKey.id)}
          />
        ))}
      </div>
    </div>
  )
}
