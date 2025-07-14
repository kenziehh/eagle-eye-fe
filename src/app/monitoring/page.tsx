import { getListDetection, getListDeepfake } from '@/features/monitoring/services'
import { getApiCalls } from '@/features/docs/services'
import { MonitoringContainer } from '@/features/monitoring/containers/monitoring-container'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'

interface MonitoringPageProps {
    searchParams?: {
        detection_page?: string
        deepfake_page?: string
    }
}

export const dynamic = 'force-dynamic'

export default async function MonitoringPage({ searchParams }: MonitoringPageProps) {
    const { detection_page, deepfake_page } = await searchParams || {}
    const detectionPage = parseInt(detection_page || '1', 10)
    const deepfakePage = parseInt(deepfake_page || '1', 10)

    const apiCalls = await getApiCalls()
    const detectionLists = await getListDetection(detectionPage)
    const deepfakeLists = await getListDeepfake(deepfakePage)

    return (
        <>
            <Navbar />
            {apiCalls && (
                <MonitoringContainer
                    apiCalls={apiCalls ?? { customers: [], message: '' }}
                    detectionLists={detectionLists ?? { detections: { current_page: 1, items: [], limit: 10, total_page: 0 }, message: '' }}
                    deepfakeLists={deepfakeLists ?? { detections: { current_page: 1, items: [], limit: 10, total_page: 0 }, message: '' }}
                />
            )}
            <Footer />
        </>
    )
}
