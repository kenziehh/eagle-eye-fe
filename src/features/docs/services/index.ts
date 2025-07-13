import { api } from "@/lib/axios"
import { tryCatch } from "@/lib/try-catch"
import { ApiCallsResponse, APIKeyResponse, GetKeyStatusResponse } from "../types"
import { AxiosError } from "axios"

export async function createApiKey({ prefix }: { prefix: string }) {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.post<APIKeyResponse>(
                `/customers/generate-key`, { prefix, customer_tier: "basic" }
            )
            return response.data
        }
    )
    if (error) {
        if (error instanceof AxiosError && error.response?.data?.message) {
            throw error.response.data.message;
        }
        throw "Update Api key failed";
    }

    return data
}


export async function updateApiKey({ prefix }: { prefix: string }) {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.patch<APIKeyResponse>(
                `/customers/update-key`, { prefix, customer_tier: "basic" }
            )
            return response.data
        }
    )
    if (error) {
        if (error instanceof AxiosError && error.response?.data?.message) {
            throw error.response.data.message;
        }
        throw "Update Api key failed";
    }

    return data
}

export async function getApiKeyStatus() {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.get<GetKeyStatusResponse>(
                `/customers/key-status`
            )
            return response.data
        }
    )

    if (error) {
        throw new Error(error.message)
    }
    return data
}

export async function getApiCalls() {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.get<ApiCallsResponse>(
                `/customers/api-calls`
            )
            return response.data
        }
    )

    if (error) {
        throw new Error(error.message)
    }
    return data
}