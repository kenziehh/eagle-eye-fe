"use client"

import { ApiDocumentation } from "../components/api-documentation"
import { apiResponses, curlExamples } from "../data/mock-data"

export function ImageDocumentation() {
  return (
    <ApiDocumentation
      title="API Deteksi Deepfake - Image"
      description="Dokumentasi API untuk deteksi deepfake pada gambar menggunakan teknologi AI EagleEye"
      endpoint="https://karsa-api.bccdev.id/api/v1/detections/detect-image"
      curlExample={curlExamples.image}
      responses={apiResponses.image}
      fileType="image file (jpg, png, jpeg)"
      maxSize="10MB"
    />
  )
}
