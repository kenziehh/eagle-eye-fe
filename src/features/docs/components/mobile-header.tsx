"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Sidebar } from "./sidebar"
import { SidebarSection } from "../types"

interface MobileHeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  sidebarSections: SidebarSection[]
  activeItem: string
  onItemClick: (itemId: string) => void
}

export function MobileHeader({
  sidebarOpen,
  setSidebarOpen,
  sidebarSections,
  activeItem,
  onItemClick,
}: MobileHeaderProps) {
  return (
    <>
      <div className="md:hidden bg-[#251F4E] backdrop-blur-sm border-b  p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-semibold">EagleEye Dashboard</h2>
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white ">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-[#251F4E] backdrop-blur-sm border-purple-600/30 p-6">
              <Sidebar sections={sidebarSections} activeItem={activeItem} onItemClick={onItemClick} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}
