import { ApiKey } from "../types"

export const mockApiKeys: ApiKey[] = [
  {
    id: "1",
    name: "Production API Key",
    key: "eak_live_1234567890abcdef",
    status: "active",
    createdAt: "2025-01-01",
    lastUsed: "2025-01-08",
    requests: 15420,
  },
  {
    id: "2",
    name: "Development API Key",
    key: "eak_test_abcdef1234567890",
    status: "active",
    createdAt: "2024-12-15",
    lastUsed: "2025-01-09",
    requests: 892,
  },
]

export const curlExamples = {
  image: `curl -X POST "https://karsa-api.bccdev.id/api/detections/detect-image" \\
  -H "x-api-key: your_api_key_here" \\
  -F "file=@/path/to/your/image.jpg"`,

  audio: `curl -X POST "https://karsa-api.bccdev.id/api/detections/detect-image" \\
  -H "x-api-key: your_api_key_here" \\
  -F "file=@/path/to/your/audio.wav"`,
}

export const apiResponses = {
  image: {
    success: {
      success: true,
      result: "original" as const,
      confidence: 0.95,
      message: "Image is authentic",
      timestamp: "2025-01-09T02:22:27Z",
    },
    deepfake: {
      success: true,
      result: "fake" as const,
      confidence: 0.87,
      message: "Deepfake detected",
      timestamp: "2025-01-09T02:22:27Z",
    },
  },
  audio: {
    success: {
      success: true,
      result: "original" as const,
      confidence: 0.92,
      message: "Audio is authentic",
      timestamp: "2025-01-09T02:22:27Z",
    },
    deepfake: {
      success: true,
      result: "fake" as const,
      confidence: 0.89,
      message: "Deepfake audio detected",
      timestamp: "2025-01-09T02:22:27Z",
    },
  },
}
