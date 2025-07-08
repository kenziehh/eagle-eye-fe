import { api } from "@/lib/axios"
import { tryCatch } from "@/lib/try-catch"
import { LoginFormValues } from "../containers/login-container"

export async function login(data: LoginFormValues) {
    const { data: responseData, error } = await tryCatch(
        async () => {
            const response = await api.post('/auth/login', data)
            return response.data
        }
    )
    if (error) {
        throw error
    }
    return responseData
}

export async function register(data: LoginFormValues) {
    const { data: responseData, error } = await tryCatch(
        async () => {
            const response = await api.post('/auth/login', data)
            return response.data
        }
    )
    if (error) {
        throw error
    }
    return responseData
}