import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import DocumentationContainer from '@/features/docs/containers/documentation-container'
import { getApiKeyStatus } from '@/features/docs/services'
import React from 'react'

export default async function DocumentationPage() {
    const status = await getApiKeyStatus()
    if (!status) {
        return (
            <>
                <Navbar />
                <div>Unable to fetch API key status.</div>
                <Footer />
            </>
        )
    }
    return (
        <>
            <Navbar />
            <DocumentationContainer apiKeyStatus={status} />
            <Footer />
        </>
    )
}
