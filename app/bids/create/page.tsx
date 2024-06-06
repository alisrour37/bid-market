import Image from "next/image";
import { database } from "@/db/database";
import { items } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { createItemAction } from "./actions";
export default async function CreatePage() {
 
 
  return (
    <main className="container mx-auto py-12 space-y-8">
      <form
      className="flex flex-col border p-8 rounded-xl space-y-4 w-fit max-w-lg"
        action={createItemAction}
      >
       <Input
          required
          className="max-w-lg"
          name="name"
          placeholder="Name your item"
        />
        <Input
          required
          className="max-w-lg"
          name="startingPrice"
          type="number"
          step="0.01"
          placeholder="What to start your auction at"
        /> <Button className="self-end" type="submit">Post Item</Button>
      </form>
    
    </main>
  );
}
