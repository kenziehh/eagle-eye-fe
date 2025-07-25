"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AddQuotaButton() {
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [quota, setQuota] = useState("")

    const handleSubmit = () => {
        router.push(`/pricing?add_quota=${quota}`)
        setOpen(false)
        setQuota("")
    }

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                className="px-8 py-3 rounded-full"
            >
                <Plus className="w-5 h-5 mr-2" />
                Tambah kuota verifikasi API
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[600px] bg-white/05">
                    <DialogHeader>
                        <DialogTitle>Tambah Kuota Verifikasi</DialogTitle>
                    </DialogHeader>
                    <div className="py-2">
                        <Input
                            type="number"
                            className="bg-white text-black"
                            placeholder="Masukkan jumlah kuota"
                            value={quota}
                            onChange={(e) => setQuota(e.target.value)}
                        />
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700">
                            Simpan
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
