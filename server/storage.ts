import { type User, type InsertUser, type ContactForm, type InsertContactForm } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactFormData(contactForm: InsertContactForm): Promise<ContactForm>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private contactForms: Map<number, ContactForm> = new Map();
  private nextUserId = 1;
  private nextContactFormId = 1;

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    for (const user of Array.from(this.users.values())) {
      if (user.username === username) {
        return user;
      }
    }
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: this.nextUserId++,
      ...insertUser,
    };
    this.users.set(user.id, user);
    return user;
  }
  
  async saveContactFormData(contactForm: InsertContactForm): Promise<ContactForm> {
    const savedContactForm: ContactForm = {
      id: this.nextContactFormId++,
      ...contactForm,
      createdAt: new Date(),
    };
    
    this.contactForms.set(savedContactForm.id, savedContactForm);
    console.log("Contact form saved:", savedContactForm);
    return savedContactForm;
  }
}

export const storage = new MemStorage();
