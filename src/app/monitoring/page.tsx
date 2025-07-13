import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { getApiCalls } from '@/features/docs/services'
import { MonitoringContainer } from '@/features/monitoring/containers/monitoring-container'
import React from 'react'

export default async function MonitoringPage() {

    const apiCalls = await getApiCalls()

    return (
        <>
            <Navbar />
            {apiCalls && <MonitoringContainer apiCalls={apiCalls ?? { customers: [], message: '' }} />}
            <Footer />
        </>
    )
}
