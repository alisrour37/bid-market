"use server";

import { auth } from "@/auth";
import { items } from "@/db/schema";
import { database } from "@/db/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createItemAction(formData: FormData) {
  const session = await auth();
  if(!session){
    throw new Error("Unanuthorized")
  }
  await database.insert(items).values({
    name: formData.get("name") as string,
    startingPrice: Number(formData.get("startingPrice")),    
    userId: session?.user?.id!,
  });
  redirect("/")
}
