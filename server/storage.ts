import { users, type User, type InsertUser, contactForms, type ContactForm, type InsertContactForm } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactFormData(contactForm: InsertContactForm): Promise<ContactForm>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  async saveContactFormData(contactForm: InsertContactForm): Promise<ContactForm> {
    const [savedContactForm] = await db
      .insert(contactForms)
      .values(contactForm)
      .returning();
    
    console.log("Contact form saved:", savedContactForm);
    return savedContactForm;
  }
}

export const storage = new DatabaseStorage();
