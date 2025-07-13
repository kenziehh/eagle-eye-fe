import { ApiKey } from "../types"

// export const mockApiKeys: ApiKey[] = [
//   {
//     id: "1",
//     name: "Production API Key",
//     key: "eak_live_1234567890abcdef",
//     status: "active",
//     createdAt: "2025-01-01",
//     lastUsed: "2025-01-08",
//     requests: 15420,
//   },
//   {
//     id: "2",
//     name: "Development API Key",
//     key: "eak_test_abcdef1234567890",
//     status: "active",
//     createdAt: "2024-12-15",
//     lastUsed: "2025-01-09",
//     requests: 892,
//   },
// ]

export const curlExamples = {
  image: `curl -X POST "https://karsa-api.bccdev.id/api/detections/detect-image" \\
  -H "x-api-key: your_api_key_here" \\
  -F "file=@/path/to/your/image.jpg"`,

  audio: `curl -X POST "https://karsa-api.bccdev.id/api/detections/detect-audio" \\
  -H "x-api-key: your_api_key_here" \\
  -F "file=@/path/to/your/audio.wav"`,
}

export const apiResponses = {
  image: {
    real: {
      detections: {
        "filename": "image.jpg",
        "prediction": "real",
        "confidence": 0.95,
      },
      message: "success",

    },
    deepfake: {
      detections: {
        "filename": "image.jpg",
        "prediction": "real",
        "confidence": 0.95,
      },
      message: "success",
    }
  },
  audio: {
     real: {
      detections: {
        "filename": "image.jpg",
        "prediction": "real",
        "confidence": 0.95,
      },
      message: "success",

    },
    deepfake: {
      detections: {
        "filename": "image.jpg",
        "prediction": "real",
        "confidence": 0.95,
      },
      message: "success",
    }
  },
}
