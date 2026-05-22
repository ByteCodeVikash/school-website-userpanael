/**
 * Google Apps Script — Yoga Convent School Contact Form Handler
 * Target Sheet ID: 1dBfTwcTdgPG1jTSZT2APvxSSN_-a9gwyflbMCFnDAZs
 *
 * DEPLOY INSTRUCTIONS:
 *  1. Open https://script.google.com
 *  2. Create a new project → paste this entire file
 *  3. Click "Deploy" → "New deployment"
 *  4. Type: "Web app"
 *     Execute as: "Me"
 *     Who has access: "Anyone"
 *  5. Click "Deploy" → copy the Web App URL
 *  6. Paste that URL into ContactPage.tsx → GOOGLE_SCRIPT_URL constant
 */

var SHEET_ID = '1dBfTwcTdgPG1jTSZT2APvxSSN_-a9gwyflbMCFnDAZs';
var SHEET_NAME = 'Contact Form'; // Change to your actual sheet tab name if different

function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();

    // Write header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }

    var params = e.parameter;
    sheet.appendRow([
      params.timestamp || new Date().toLocaleString(),
      params.name || '',
      params.email || '',
      params.phone || '',
      params.subject || '',
      params.message || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Health check (GET)
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', sheet: SHEET_ID }))
    .setMimeType(ContentService.MimeType.JSON);
}
