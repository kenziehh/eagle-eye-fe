import { tryCatch } from "@/lib/try-catch"
import { GetListDetectionResponse } from "../types"
import { api } from "@/lib/axios"
import { AxiosError } from "axios"

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

export async function blockIP(ipAddress: string) {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.delete(`/detections/ban-ip/${ipAddress}`)
            return response.data
        }
    )

    if (error) {
        if (error instanceof AxiosError && error.response?.data?.message) {
            throw error.response.data.message;
        }
        throw "Failed to block IP";
    }
    return data
}

export async function unblockIP(ipAddress: string) {
    const { data, error } = await tryCatch(
        async () => {
            const response = await api.patch(`/detections/unban-ip/${ipAddress}`)
            return response.data
        }
    )

    if (error) {
        if (error instanceof AxiosError && error.response?.data?.message) {
            throw error.response.data.message;
        }
        throw "Failed to unblock IP";
    }
    return data
}

export async function getCustomerUsageHourly() {
    const { data, error } = await tryCatch(
        async () => {
            const now = new Date();
            const dateString = now.toISOString().split('T')[0];
            const response = await api.get(`/detections/get-customer-usage?mode=hourly&date=${dateString}`)
            return response.data
        }
    )

    if (error instanceof AxiosError && error.response?.data?.message) {
        throw error.response.data.message;
    }
    return data

}

export async function getCustomerUsageMonthly() {
    const { data, error } = await tryCatch(
        async () => {

            const response = await api.get(`/detections/get-customer-usage?mode=daily&days=30`)
            return response.data
        }
    )

    if (error instanceof AxiosError && error.response?.data?.message) {
        throw error.response.data.message;
    }
    return data

}


export async function getCustomerUsageWeekly() {
    const { data, error } = await tryCatch(
        async () => {

            const response = await api.get(`/detections/get-customer-usage?mode=weekly`)
            return response.data
        }
    )

    if (error instanceof AxiosError && error.response?.data?.message) {
        throw error.response.data.message;
    }
    return data

}

