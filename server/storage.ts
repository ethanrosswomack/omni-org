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
    try {
      const [user] = await db.select().from(users).where(eq(users.id, id));
      return user || undefined;
    } catch (error) {
      console.error('Error getting user:', error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const [user] = await db.select().from(users).where(eq(users.username, username));
      return user || undefined;
    } catch (error) {
      console.error('Error getting user by username:', error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const [user] = await db
        .insert(users)
        .values(insertUser)
        .returning();
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
  
  async saveContactFormData(contactForm: InsertContactForm): Promise<ContactForm> {
    try {
      const [savedContactForm] = await db
        .insert(contactForms)
        .values(contactForm)
        .returning();
      
      console.log("Contact form saved:", savedContactForm);
      return savedContactForm;
    } catch (error) {
      console.error('Error saving contact form:', error);
      throw error;
    }
  }
}

export const storage = new DatabaseStorage();
