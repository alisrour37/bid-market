import Image from "next/image";
import { database } from "@/db/database";
import { items } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
export default async function Home() {
 
  const session = await auth();
  const allItems = await database.query.items.findMany();
  if(!session || !session.user) return null;
  
  return (
    <main className="container mx-auto py-12 space-y-8">
      
      <h2 className="text-2xl font-bold">Items For Sale</h2>
      <div className="grid grid-cols-4 gap-6">
        {allItems.map((item) => (
          <div className="border p-6 rounded-xl" key={item.id}>{item.name} {"\n"} starting price: ${item.startingPrice}</div>
        ))}
      </div>
    </main>
  );
}
