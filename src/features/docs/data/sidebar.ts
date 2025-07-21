import { Lock, Shield, User } from "lucide-react"
import { SidebarSection } from "../types"

export const sidebarSections: SidebarSection[] = [
  // {
  //   title: "PENGENALAN",
  //   icon: User,
  //   items: [{ name: "Account Overview", href: "/account", id: "account" }],
  // },
  {
    title: "VERIFIKASI",
    icon: Shield,
    items: [
      { name: "Deteksi Deepfake - Image", href: "/image-detection", id: "image-detection" },
      { name: "Deteksi Deepfake - Audio", href: "/audio-detection", id: "audio-detection" },
    ],
  },
  {
    title: "KEAMANAN",
    icon: Lock,
    items: [
      { name: "Manajemen API Key", href: "/api-keys", id: "api-keys" },
      // { name: "Webhook & Notifikasi", href: "/webhooks", id: "webhooks" },
    ],
  },
]
