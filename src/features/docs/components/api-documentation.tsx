"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

interface ApiDocumentationProps {
  title: string
  description: string
  endpoint: string
  curlExample: string
  responses: {
    real: any
    deepfake: any
  }
  fileType: string
  maxSize: string
}

export function ApiDocumentation({
  title,
  description,
  endpoint,
  curlExample,
  responses,
  fileType,
  maxSize,
}: ApiDocumentationProps) {
  const [copiedCode, setCopiedCode] = useState("")

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-purple-200">{description}</p>
        <Separator className="bg-purple-600/30 mt-4" />
      </div>

      <Card className="bg-purple-800/30 border-purple-600/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Badge className="bg-green-600 hover:bg-green-600">POST</Badge>
            <code className="text-purple-200 font-mono text-lg break-all">{endpoint}</code>
          </div>
          <p className="text-purple-200">{description}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Headers */}
          <div>
            <h4 className="text-white font-semibold mb-3">Headers</h4>
            <div className="bg-purple-900/50 rounded-lg p-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="text-purple-300">x-api-key</span>
                <span className="text-purple-200">string (required)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="text-purple-300">Content-Type</span>
                <span className="text-purple-200">multipart/form-data</span>
              </div>
            </div>
          </div>

          {/* Request Body */}
          <div>
            <h4 className="text-white font-semibold mb-3">Request Body</h4>
            <div className="bg-purple-900/50 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="text-purple-300">file</span>
                <span className="text-purple-200">
                  {fileType} - max {maxSize}
                </span>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
              <h4 className="text-white font-semibold">cURL Example</h4>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(curlExample, "curl")}
                className="border-purple-600/50 text-purple-200 hover:bg-purple-700/50 w-fit"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copiedCode === "curl" ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{curlExample}</code>
              </pre>
            </div>
          </div>

          {/* Response Examples */}
          <div>
            <h4 className="text-white font-semibold mb-3">Response Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-purple-300 mb-2">Real</h5>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-blue-400 text-sm">
                    <code>{JSON.stringify(responses.real, null, 2)}</code>
                  </pre>
                </div>
              </div>
              <div>
                <h5 className="text-purple-300 mb-2">Deepfake Detected</h5>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-red-400 text-sm">
                    <code>{JSON.stringify(responses.deepfake, null, 2)}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
