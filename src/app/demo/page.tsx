import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import Demo from '@/features/home/containers/demo'
import React from 'react'

export default function DemoPage() {
    return (
        <>  <Navbar />
            <Demo />
            <Footer />
        </>
    )
}
