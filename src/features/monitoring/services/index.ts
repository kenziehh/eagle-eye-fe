import { tryCatch } from "@/lib/try-catch"
import { GetListDetectionResponse } from "../types"
import { api } from "@/lib/axios"

export async function getListDetection(currentPage: number = 1) {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.get<GetListDetectionResponse>(
                `/detections/get-detections?current=${currentPage}&limit=10`
            )
            console.log(response.data.detections)
            return response.data
        }
    )

    if (error) {
        throw new Error(error.message)
    }
    return data
}

export async function getListDeepfake(currentPage: number = 1) {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.get<GetListDetectionResponse>(
                `/detections/get-detected?current=${currentPage}&limit=10`
            )
            return response.data
        }
    )

    if (error) {
        throw new Error(error.message)
    }
    return data
}