import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertEnquirySchema } from "@shared/schema";
import { saveContactToExcel, saveEnquiryToExcel } from "./excel";
import { saveContactToGoogleSheetsSimple, saveEnquiryToGoogleSheetsSimple } from "./googleSheetsSimple";
import { z } from "zod";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Prepare data for saving
      const saveData = {
        id: contact.id,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message,
        submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };
      
      // Save to Excel file
      saveContactToExcel(saveData);
      
      // Save to Google Sheets (real-time online save)
      await saveContactToGoogleSheetsSimple(saveData);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: contact 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.toString() 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, data: contacts });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  app.post("/api/enquiry", async (req, res) => {
    try {
      const validatedData = insertEnquirySchema.parse(req.body);
      const enquiry = await storage.createEnquiry(validatedData);
      
      // Prepare data for saving
      const saveData = {
        id: enquiry.id,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        pumpType: validatedData.pumpType,
        quantity: validatedData.quantity,
        message: validatedData.message,
        submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };
      
      // Save to Excel file
      saveEnquiryToExcel(saveData);
      
      // Save to Google Sheets (real-time online save)
      await saveEnquiryToGoogleSheetsSimple(saveData);
      
      res.status(201).json({ 
        success: true, 
        message: "Enquiry submitted successfully. Our sales team will contact you shortly.",
        data: enquiry 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.toString() 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  app.get("/api/enquiries", async (req, res) => {
    try {
      const enquiries = await storage.getEnquiries();
      res.json({ success: true, data: enquiries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  return httpServer;
}
