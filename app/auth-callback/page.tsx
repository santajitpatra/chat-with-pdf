'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";

const Page = () => {
const router = useRouter()

const searchParams = useSearchParams()
const origin = searchParams.get('origin')

// normal way 
// const apiResponse = await fetch('/api/whatever')
// const data = await apiResponse.json()

// trpc way 
const {data ,isLoading} = trpc.authCallback.useQuery(undefined, {
  onSuccess: ({success}) =>{
    if (success) {
      router.push(origin ? `${origin}`: '/dashboard')
    }
  },
  onError: (error) => {
    if (error.data?.code === 'UNAUTHORIZED') {
      router.push('/sign-in')
    }
  },
  retry: true,
  retryDelay: 500,

})

return (
  <div className="w-full mt-24 flex justify-center">
    <div className="flex flex-col items-center gap-2">
      <Loader2 className="h-8 w-8 animate-spin text-zinc-800"/>
      <h3 className="font-semibold text-xl">setting up your account...</h3>
      <p>You will be redirected automatically.</p>
    </div>
  </div>
)

};

export default Page;
