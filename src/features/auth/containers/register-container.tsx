"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { register } from "../service"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const registerSchema = z
    .object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        password: z.string().min(8, {
            message: "Password must be at least 8 characters.",
        }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })

export type RegisterFormValues = z.infer<typeof registerSchema>

export default function RegisterContainer() {
    const router = useRouter()
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    async function onSubmit(values: z.infer<typeof registerSchema>) {
        try {
            await register(values)
            toast.success("Registration Successful|")
            router.push("/auth/login")
        } catch (error) {
            toast.error(error as unknown as string)
        }

    }

    return (


        <div className="max-w-[500px] self-center z-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Register</h2>
                <p className="text-purple-200">Make sure it is filled in correctly</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-purple-200">Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your full name"
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

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-purple-200">Confirm Password</FormLabel>
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
                        Register
                    </Button>
                </form>
            </Form>

            <div className="text-center mt-6">
                <p className="text-purple-200">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-white font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>

    )
}
