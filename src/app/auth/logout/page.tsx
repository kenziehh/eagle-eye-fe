"use client"
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

export default function LogoutPage() {
    const router = useRouter()
    useEffect(() => {
        const logout = async () => {
            try {
                await signOut({ redirect: false })
                toast.success("Logged out successfully")
                router.push('/')
            } catch (error) {
                toast.error("Failed to log out")
            }
        }
        logout()
    }, [])
    return null
}
