"use client"

import { SidebarSection } from "../types"


interface SidebarProps {
  sections: SidebarSection[]
  activeItem: string
  onItemClick: (itemId: string) => void
}

export function Sidebar({ sections, activeItem, onItemClick }: SidebarProps) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.title} className="space-y-3">
          <div className="flex items-center gap-2 text-purple-300 text-sm font-semibold">
            <section.icon className="w-4 h-4" />
            {section.title}
          </div>
          <div className="space-y-1 ml-6">
            {section.items.map((item) => (
              <button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeItem === item.id
                    ? "bg-[#251F4E]/20"
                    : "text-white/50 hover:bg-primary bg-[#251F4E]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
