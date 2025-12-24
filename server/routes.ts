import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, insertProductSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the contact form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact form data
      const savedContact = await storage.saveContactFormData(validatedData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: savedContact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation error
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        // Return server error
        res.status(500).json({ 
          success: false, 
          message: "Server error"
        });
      }
    }
  });

  // Get all products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  // Get single product
  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(Number(req.params.id));
      if (!product) {
        res.status(404).json({ success: false, message: "Product not found" });
        return;
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  // Create product (for admin/testing)
  app.post("/api/products", async (req, res) => {
    try {
      const validatedData = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validatedData);
      res.status(201).json(product);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Server error" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
