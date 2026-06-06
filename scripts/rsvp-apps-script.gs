/**
 * Google Apps Script for the /30th RSVP form.
 *
 * Setup:
 * 1. Open your RSVP Google Sheet (or create one).
 * 2. Add these headers in row 1: Name | Email | Attendee | Locked in | Timestamp
 * 3. Extensions → Apps Script, paste this file, save.
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL and set VITE_RSVP_SCRIPT_URL in .env.local (and Netlify).
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.Name || '',
      data.Email || '',
      data.Attendee || '',
      data['Locked in'] || '',
      data.Timestamp || new Date().toISOString()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
