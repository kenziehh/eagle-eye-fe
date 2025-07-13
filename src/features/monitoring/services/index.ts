import { tryCatch } from "@/lib/try-catch"
import { GetListDetectionResponse } from "../types"
import { api } from "@/lib/axios"

export async function getListDetection() {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.get<GetListDetectionResponse>(
                `/detections/get-detections?current=1&limit=10`
            )
            return response.data
        }
    )

    if (error) {
        throw new Error(error.message)
    }
    return data
}

export async function getListDeepfake() {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.get<GetListDetectionResponse>(
                `/detections/get-detected?current=1&limit=10`
            )
            return response.data
        }
    )

    if (error) {
        throw new Error(error.message)
    }
    return data
}