import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { MonitoringContainer } from '@/features/monitoring/containers/monitoring-container'
import React from 'react'

export default function MonitoringPage() {
    return (
        <>
            <Navbar />
            <MonitoringContainer />
            <Footer />
        </>
    )
}
