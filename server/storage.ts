import { users, type User, type InsertUser, contactForms, type ContactForm, type InsertContactForm } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactFormData(contactForm: InsertContactForm): Promise<ContactForm>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactForm>;
  userCurrentId: number;
  contactFormCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.userCurrentId = 1;
    this.contactFormCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async saveContactFormData(contactForm: InsertContactForm): Promise<ContactForm> {
    const id = this.contactFormCurrentId++;
    const now = new Date();
    
    const savedContactForm: ContactForm = {
      ...contactForm,
      id,
      createdAt: now
    };
    
    this.contactForms.set(id, savedContactForm);
    console.log("Contact form saved:", savedContactForm);
    return savedContactForm;
  }
}

export const storage = new MemStorage();
