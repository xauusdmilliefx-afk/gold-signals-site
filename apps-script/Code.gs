// Google Apps Script: saves briefing sign-ups to the first sheet.
// Sheet headers (row 1): Time | Country | Code | Phone | Full number
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var d = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    d.country,
    "'+" + d.code,
    "'" + d.phone,
    "'+" + d.code + d.phone
  ]);
  return ContentService.createTextOutput("ok");
}
