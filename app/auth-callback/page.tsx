import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = async () => {
const router = useRouter()

const searchParams = useSearchParams()
const origin = searchParams.get('origin')

// normal way 
// const apiResponse = await fetch('/api/search')
// const data = await apiResponse.json()

// trpc way 
const {data ,isLoading} = trpc.test.useQuery()

};

export default Page;
