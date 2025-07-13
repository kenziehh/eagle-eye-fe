"use client"

import { useState } from "react"
import { ImageDocumentation } from "./image-documentation"
import { AudioDocumentation } from "./audio-documentation"
import { ApiKeyManagement } from "./api-key-management"
import { Sidebar } from "../components/sidebar"
import { sidebarSections } from "../data/sidebar"
import { MobileHeader } from "../components/mobile-header"


export default function DocumentationContainer() {
  const [activeItem, setActiveItem] = useState("image-detection")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleMenuItemClick = (itemId: string) => {
    setActiveItem(itemId)
    setSidebarOpen(false) // Close sidebar on mobile after selection
  }

  const renderContent = () => {
    switch (activeItem) {
      case "image-detection":
        return <ImageDocumentation/>
      case "audio-detection":
        return <AudioDocumentation/>
      case "api-keys":
        return <ApiKeyManagement />
      case "account":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white">Account Overview</h1>
            <p className="text-purple-200">Halaman overview akun akan ditampilkan di sini.</p>
          </div>
        )
      // case "webhooks":
      //   return (
      //     <div className="space-y-6">
      //       <h1 className="text-3xl font-bold text-white">Webhook & Notifikasi</h1>
      //       <p className="text-purple-200">Halaman webhook dan notifikasi akan ditampilkan di sini.</p>
      //     </div>
      //   )
      default:
        return <ImageDocumentation/>
    }
  }

  return (
    <div className="min-h-screen bg-[#251F4E] flex py-20">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-80 bg-[#251F4E] backdrop-blur-sm border-r border-purple-600/30 p-6">
        <Sidebar sections={sidebarSections} activeItem={activeItem} onItemClick={handleMenuItemClick} />
      </div>

      {/* Mobile Sidebar */}
      {/* Removed mobile sidebar as it's now handled by MobileHeader */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <MobileHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sidebarSections={sidebarSections}
          activeItem={activeItem}
          onItemClick={handleMenuItemClick}
        />

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-8 overflow-auto">
          <div className="max-w-5xl mx-auto">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
