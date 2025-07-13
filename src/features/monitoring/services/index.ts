export interface DetectionItem {
    id: number;
    ip_address: string;
    path: string;
    method: string;
    status: string;
    description: string;
    accessed_at: string;
}

export interface Detections {
    current_page: number;
    total_items: DetectionItem[];
    limit: number;
}

export interface GetListDetectionResponse {
    detections: Detections;
    message: string;
}
