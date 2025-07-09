"use client"
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

export default function LogoutPage() {
    const router = useRouter()
    useEffect(() => {
        signOut()
        toast.success("You have been logged out successfully.")
        router.push('/auth/login')
    }, [])
    return null
}
