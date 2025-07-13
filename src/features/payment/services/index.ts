import { api } from "@/lib/axios"
import { CreatePaymentResponse, LatestPaymentStatusResponse } from "../types"
import { tryCatch } from "@/lib/try-catch"

export async function createPayment(tier_order: string) {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.post<CreatePaymentResponse>('/payments/create-payment', { tier_order })
            return response.data
        }
    )
    if (error) {
        throw error
    }
    return data
}

export async function getLatestPaymentStatus() {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.get<LatestPaymentStatusResponse>('/payments/latest-status')
            return response.data
        }
    )
    if (error) {
        throw error
    }
    return data
}