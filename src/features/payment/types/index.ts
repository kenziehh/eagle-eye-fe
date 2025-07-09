export interface CreatePaymentResponse {
    message: string;
    payments: {
        snap_url: string;
        order_id: string;
        status: string;
    }
}

export interface LatestPaymentStatusResponse {
    message: string;
    payments: {
        order_id: string;
        status: string;
    }
}