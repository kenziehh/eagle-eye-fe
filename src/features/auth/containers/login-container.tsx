"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { log } from "console"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const loginSchema = z
    .object({
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        password: z.string().min(8, {
            message: "Password must be at least 8 characters.",
        }),
    })

export type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginContainer() {
    const router = useRouter()
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        try {
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            })

            if (result?.ok) {
                toast.success("Login successful")
                router.push("/docs")
            } else {
                toast.error(result?.error || "Invalid email or password")
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message || "Login failed")
            } else {
                toast.error("Login failed")
            }
        }

    }

    return (


        <div className="max-w-[500px] self-center z-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
                <p className="text-purple-200">Make sure it is filled in correctly</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-purple-200">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-[#211B4B] border-purple-600/50 text-white placeholder:text-purple-300 focus:border-purple-400 h-12 rounded-full px-6"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-purple-200">Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        className="bg-[#211B4B] border-purple-600/50 text-white placeholder:text-purple-300 focus:border-purple-400 h-12 rounded-full px-6"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        )}
                    />



                    <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold h-12 rounded-full text-lg"
                    >
                        Login
                    </Button>
                </form>
            </Form>

            <div className="text-center mt-6">
                <p className="text-purple-200">
                    Don't have an account?                   <Link href="/auth/register" className="text-white font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>

    )
}
