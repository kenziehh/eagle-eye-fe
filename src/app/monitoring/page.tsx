import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { getApiCalls } from '@/features/docs/services'
import { MonitoringContainer } from '@/features/monitoring/containers/monitoring-container'
import { getListDeepfake, getListDetection } from '@/features/monitoring/services'
import React from 'react'

export const dynamic = 'force-dynamic'

export default async function MonitoringPage() {

    const apiCalls = await getApiCalls()
    const detectionLists = await getListDetection()
    console.log(detectionLists)
    const deepfakeLists = await getListDeepfake()

    return (
        <>
            <Navbar />
            {apiCalls && (
                <MonitoringContainer
                    apiCalls={apiCalls ?? { customers: [], message: '' }}
                    detectionLists={detectionLists ?? { detections: { current_page: 1, total_items: [], limit: 10 }, message: '' }}
                    deepfakeLists={deepfakeLists ?? { detections: { current_page: 1, total_items: [], limit: 10 }, message: '' }}
                />
            )}
            <Footer />
        </>
    )
}
