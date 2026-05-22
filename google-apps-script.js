/**
 * Google Apps Script — Yoga Convent School Contact Form Handler
 * Target Sheet ID: 1dBfTwcTdgPG1jTSZT2APvxSSN_-a9gwyflbMCFnDAZs
 * Web App URL: https://script.google.com/macros/s/AKfycbygTQX2adbk85qAvdiyxb3kPjOL8A2idw8XD1wIf3vK7yMsG69GIp_vhMlBEUvd9Xbh/exec
 *
 * AFTER EDITING: Click "Deploy" → "Manage deployments" → edit → "New version" → Save
 */

var SHEET_ID = '1dBfTwcTdgPG1jTSZT2APvxSSN_-a9gwyflbMCFnDAZs';

function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getActiveSheet();

    // Parse params — try e.parameter first, then parse raw body as fallback
    var params = {};

    if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      params = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      // Manual URL-decode fallback
      e.postData.contents.split('&').forEach(function (pair) {
        var kv = pair.split('=');
        if (kv.length >= 2) {
          var key = decodeURIComponent(kv[0].replace(/\+/g, ' '));
          var val = decodeURIComponent(kv.slice(1).join('=').replace(/\+/g, ' '));
          params[key] = val;
        }
      });
    }

    // Write header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }

    sheet.appendRow([
      params.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      params.name    || '',
      params.email   || '',
      params.phone   || '',
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

// Health check (GET) — open Web App URL in browser to verify it's live
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', sheet: SHEET_ID }))
    .setMimeType(ContentService.MimeType.JSON);
}
