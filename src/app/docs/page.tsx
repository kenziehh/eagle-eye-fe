import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import DocumentationContainer from '@/features/docs/containers/documentation-container'
import React from 'react'

export default function DocumentationPage() {
    return (
        <>
            <Navbar />
            <DocumentationContainer />
            <Footer />
        </>
    )
}
