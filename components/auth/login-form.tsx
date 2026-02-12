"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginSchema } from "@/lib/schemas/auth";

// TODO: User to implement form submission logic
export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    // TODO: Implement login logic
    console.log(values);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Welcome Back
          </h1>
          <p className='text-gray-600'>Sign in to access your dashboard</p>
        </div>

        <Card className='border border-gray-200'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-xl'>Login</CardTitle>
            <CardDescription>
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* TODO: Implement form using react-hook-form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  {...form.register("email")}
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  disabled={isPending}
                  className='w-full'
                />
                {form.formState.errors.email && (
                  <p className='text-sm text-red-500'>
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  {...form.register("password")}
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  disabled={isPending}
                  className='w-full'
                />
                {form.formState.errors.password && (
                  <p className='text-sm text-red-500'>
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              <Button
                type='submit'
                disabled={isPending}
                className='w-full bg-black text-white hover:bg-gray-800'
              >
                {isPending ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className='mt-6 pt-6 border-t border-gray-200'>
              <p className='text-sm text-gray-600 text-center'>
                Don't have an account?{" "}
                <Link
                  href='/register'
                  className='font-semibold text-black hover:underline'
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className='text-xs text-gray-500 text-center mt-4'>
          Demo: Use any email and password to login
        </p>
      </div>
    </div>
  );
};
