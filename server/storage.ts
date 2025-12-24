import { type User, type InsertUser, type ContactForm, type InsertContactForm, type Product, type InsertProduct } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactFormData(contactForm: InsertContactForm): Promise<ContactForm>;
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private contactForms: Map<number, ContactForm> = new Map();
  private products: Map<number, Product> = new Map();
  private nextUserId = 1;
  private nextContactFormId = 1;
  private nextProductId = 1;

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

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const product: Product = {
      id: this.nextProductId++,
      name: insertProduct.name,
      category: insertProduct.category,
      description: insertProduct.description || null,
      price: insertProduct.price,
      image: insertProduct.image || null,
      stock: insertProduct.stock || 0,
    };
    this.products.set(product.id, product);
    return product;
  }
}

export const storage = new MemStorage();
