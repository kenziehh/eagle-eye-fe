"use client"

import { ApiDocumentation } from "../components/api-documentation"
import { curlExamples, apiResponses } from "../data/mock-data"

export function AudioDocumentation() {
  return (
    <ApiDocumentation
      title="API Deteksi Deepfake - Audio"
      description="Dokumentasi API untuk deteksi deepfake pada file audio menggunakan teknologi AI EagleEye"
      endpoint="/v1/detect/audio"
      curlExample={curlExamples.audio}
      responses={apiResponses.audio}
      fileType="audio file (mp3, wav, m4a)"
      maxSize="50MB"
    />
  )
}
