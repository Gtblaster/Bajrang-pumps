import * as XLSX from 'xlsx';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

const EXCEL_FILE_PATH = join(process.cwd(), 'contact_submissions.xlsx');

interface ContactData {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

interface EnquiryData {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  pumpType: string;
  quantity: string;
  message?: string;
  submittedAt: string;
}

export function saveContactToExcel(data: ContactData) {
  try {
    let workbook: XLSX.WorkBook;
    
    // Check if Excel file exists
    if (existsSync(EXCEL_FILE_PATH)) {
      // Read existing file
      const fileBuffer = readFileSync(EXCEL_FILE_PATH);
      workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    } else {
      // Create new workbook
      workbook = XLSX.utils.book_new();
    }

    // Get or create Contact Forms worksheet
    let worksheet: XLSX.WorkSheet;
    if (workbook.SheetNames.includes('Contact Forms')) {
      worksheet = workbook.Sheets['Contact Forms'];
    } else {
      // Create new worksheet with headers
      const headers = ['ID', 'Name', 'Email', 'Phone', 'Message', 'Submitted At'];
      worksheet = XLSX.utils.aoa_to_sheet([headers]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Forms');
    }

    // Convert worksheet to array to add new row
    const worksheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
    
    // Add new row
    const newRow = [
      data.id,
      data.name,
      data.email,
      data.phone,
      data.message,
      data.submittedAt
    ];
    
    worksheetData.push(newRow);

    // Convert back to worksheet
    const newWorksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    workbook.Sheets['Contact Forms'] = newWorksheet;

    // Write file
    XLSX.writeFile(workbook, EXCEL_FILE_PATH);
    
    console.log(`✅ Contact form data saved to Excel: ${EXCEL_FILE_PATH}`);
    return { success: true, filePath: EXCEL_FILE_PATH };
  } catch (error) {
    console.error('❌ Error saving contact data to Excel:', error);
    return { success: false, error };
  }
}

export function saveEnquiryToExcel(data: EnquiryData) {
  try {
    let workbook: XLSX.WorkBook;
    
    // Check if Excel file exists
    if (existsSync(EXCEL_FILE_PATH)) {
      // Read existing file
      const fileBuffer = readFileSync(EXCEL_FILE_PATH);
      workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    } else {
      // Create new workbook
      workbook = XLSX.utils.book_new();
    }

    // Get or create Product Enquiries worksheet
    let worksheet: XLSX.WorkSheet;
    if (workbook.SheetNames.includes('Product Enquiries')) {
      worksheet = workbook.Sheets['Product Enquiries'];
    } else {
      // Create new worksheet with headers
      const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Pump Type', 'Quantity', 'Message', 'Submitted At'];
      worksheet = XLSX.utils.aoa_to_sheet([headers]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Product Enquiries');
    }

    // Convert worksheet to array to add new row
    const worksheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
    
    // Add new row
    const newRow = [
      data.id,
      data.name,
      data.email,
      data.phone,
      data.company || '',
      data.pumpType,
      data.quantity,
      data.message || '',
      data.submittedAt
    ];
    
    worksheetData.push(newRow);

    // Convert back to worksheet
    const newWorksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    workbook.Sheets['Product Enquiries'] = newWorksheet;

    // Write file
    XLSX.writeFile(workbook, EXCEL_FILE_PATH);
    
    console.log(`✅ Enquiry data saved to Excel: ${EXCEL_FILE_PATH}`);
    return { success: true, filePath: EXCEL_FILE_PATH };
  } catch (error) {
    console.error('❌ Error saving enquiry data to Excel:', error);
    return { success: false, error };
  }
}

export function getExcelFilePath(): string {
  return EXCEL_FILE_PATH;
}