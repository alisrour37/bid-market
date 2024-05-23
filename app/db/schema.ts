import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const bids =pgTable("bm_bids",{
    id: serial("id").primaryKey(),
});