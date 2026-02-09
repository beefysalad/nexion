"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import { useTest, useUpdateTest } from "./shared/hooks/test/useTest";

export default function Home() {
  const { data, isLoading, isError } = useTest();
  const updateTestMutation = useUpdateTest();
  const [optimisticValue, setOptimisticValue] = useState(data?.value || 0);

  const onButtonClick = () => {
    setOptimisticValue((prev: number) => prev + 1);
    updateTestMutation.mutateAsync();
  };

  // useEffect(() => {
  //   if (!data) return;
  //   if (optimisticValue !== null) return; // 👈 key line

  //   setOptimisticValue(data.value);
  // }, [data, optimisticValue]);

  if (isError) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950'>
        <div className='text-center space-y-4'>
          <div className='text-6xl'>⚠️</div>
          <h2 className='text-2xl font-bold text-zinc-900 dark:text-zinc-100'>
            Something went wrong
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Failed to load test data
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-zinc-950'>
      <main className='flex min-h-screen items-center justify-center px-4 py-16'>
        <div className='w-full max-w-2xl space-y-8'>
          <div className='text-center space-y-3'>
            <h1 className='text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100'>
              Boilerplate Test
            </h1>
            <p className='text-lg text-zinc-600 dark:text-zinc-400'>
              Next.js + TanStack Query + Prisma
            </p>
          </div>

          <div className='bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 shadow-sm'>
            {isLoading ? (
              <div className='flex flex-col items-center justify-center py-12 space-y-4'>
                <Spinner className='size-12 text-zinc-900 dark:text-zinc-100' />
                <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                  Loading test data...
                </p>
              </div>
            ) : (
              <div className='space-y-8'>
                <div className='text-center space-y-2'>
                  <p className='text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400'>
                    DB Test Value - {data?.message}
                  </p>
                  <h2 className='text-7xl md:text-8xl font-black text-zinc-900 dark:text-zinc-100'>
                    {data?.value || "N/A"}
                  </h2>
                </div>

                <div className='grid grid-cols-3 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800'>
                  <div className='text-center space-y-1'>
                    <p className='text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400'>
                      Status
                    </p>
                    <div className='flex items-center justify-center gap-2'>
                      <div className='w-2 h-2 bg-green-500 rounded-full' />
                      <p className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                        Active
                      </p>
                    </div>
                  </div>

                  <div className='text-center space-y-1'>
                    <p className='text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400'>
                      ID
                    </p>
                    <p className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                      {data?.id || 0}
                    </p>
                  </div>

                  <div className='text-center space-y-1'>
                    <p className='text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400'>
                      Type
                    </p>
                    <p className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                      Test
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='flex flex-wrap gap-4 justify-center'>
            <Button
              disabled={updateTestMutation.isPending}
              onClick={onButtonClick}
              size='lg'
              className='bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 px-8 font-semibold'
            >
              {updateTestMutation.isPending ? "Liking..." : "Like"}
            </Button>

            <Button
              size='lg'
              variant='outline'
              className='border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-8 font-semibold'
            >
              Refresh
            </Button>
          </div>

          <div className='text-center space-y-2'>
            <p className='text-xs text-zinc-500 dark:text-zinc-400'>
              Powered by Next.js 15, TanStack Query & Prisma
            </p>
            <div className='flex items-center justify-center gap-2 text-xs text-zinc-400 dark:text-zinc-500'>
              <div className='w-1.5 h-1.5 bg-green-500 rounded-full' />
              <span>Database connected</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
