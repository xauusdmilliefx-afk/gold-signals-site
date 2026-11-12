# Gold Signals Website (XAUUSD)

Single-file website for daily gold signals: live TradingView market panels, economic calendar, gold news, signals table, risk calculator, daily blog from X, and a phone-number briefing form that saves to Google Sheets.

## Files
- `index.html` : the whole website (HTML, CSS, JS)
- `apps-script/Code.gs` : Google Apps Script that saves form sign-ups to a Google Sheet

## Things to edit in `index.html`
- `SHEET_URL` : your Google Apps Script web app link
- `X_HANDLE` : your X username (currently `xauusd_milliefx`)
- Telegram link `https://t.me/your_channel` and WhatsApp link `https://wa.me/0000000000`
- Sample signals, results, plan prices and brand name

## Google Sheet setup
1. Create a Google Sheet with headers in row 1: Time, Country, Code, Phone, Full number.
2. Extensions > Apps Script, paste `apps-script/Code.gs`.
3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
4. Copy the web app URL into `SHEET_URL` in `index.html`.
5. After any script change, publish a new version via Deploy > Manage deployments.

## Free hosting (no domain needed)
- GitHub Pages: Settings > Pages > Deploy from branch `main` / root. Link: `https://USERNAME.github.io/REPO/`
- Or Netlify / Cloudflare Pages.

TradingView and X widgets load only when the site is hosted (not inside sandboxed previews). Trading involves high risk; signals are educational, not financial advice.
