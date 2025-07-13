
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import DocumentationContainer from '@/features/docs/containers/documentation-container'
import { getApiCalls, getApiKeyStatus } from '@/features/docs/services'
import React from 'react'

export const dynamic = 'force-dynamic'


export default async function DocumentationPage() {
    const status = await getApiKeyStatus()
    const apiCalls = await getApiCalls()


    if (!status || !apiCalls) {
        return (
            <>
                <Navbar />
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <DocumentationContainer apiKeyStatus={status} apiCalls={apiCalls} />
            <Footer />
        </>
    )
}
