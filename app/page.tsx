import Image from "next/image";
import {database} from '@/db/database'
import {bids as bidsSchema} from '@/db/schema'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
export default async function Home() {

  const bids= await database.query.bids.findMany()
  return (
    <main className="container mx-auto py-12">
     <form action={async (formData: FormData) => {
      'use server'
      //const bid = formData.get('bid') as string
      await database.insert(bidsSchema).values({});
      revalidatePath("/")
     }}>
      <Input name="bid" placeholder="Bid" />
      <button type="submit">Place Bid</button>
     </form>
     {bids.map(bid=>(
      <div key={bid.id}>{bid.id}</div>
     ))}

    </main>
  );
}
