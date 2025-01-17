/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || '';

const prefix = process.env.PREFIX || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk8zZDVWaUJCY2xhQUFlV3hSeEFZZFlYNHVpNkR4MU5FRDlYTUdmdUFYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHhmSHQ4YlF3S2ZzK25Ld0k4azhYbnlpU2pTY0J5aXhIZ2hWaVFsOXpWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQjgzQnBoNFYwYmZSNXMrSjlyU3dicGxvTnVjRXA0RzZDZnpNOXljTzFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJcEt1cEhzVTlOb3pDem01MFJoZkNEaTcrbURMZUtXZkpBTXJiWnZsdTFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNEck9xREJFcTJhNmdwUjJOOU1GYVEzajhUTWUrUENQOUY4YWpGQ1FRbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV3byt2OG1Lb25pcnlFeDk5N2VFTXhSUkxURjhBOGpQanArcllobllSUUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05ab200bzM5b0hoay9ZbFovTWRMemFiUTd2alpHdlV4ZjFRMnVaUjdXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMThpZnY4YVVucldTSHAyLzlrRGRxaGt0RytqbCtwaVJjVFZ0clh6NlZRMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRwUWtNUFgwaGxMTlhVc2RYRGI0WmJFUjVMM0dBNzZ4cTFNaHdYbStkTStVOHg0R1M3WTlTTWVncUpwZ3NjSnhkOVEzR0F2U1NqRE9KRUo3SzF4bGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6Ilo0MEVNU0M2Q2l6emRuUXV1aTBoVUxYdTdTTndIRU84RVZSbHFPNDN4VDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9kVWYyVnFSVDN1d3dUMXcwT05Ub0EiLCJwaG9uZUlkIjoiNzA4ZDk4YzgtNWE1Mi00ODg0LWE1OTktM2JjZWM1M2ZhZGY4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im84QkszcmVuR3c5SEphdHdtY0pGcUZxNGtidz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRXVtTVN2TUpPdUlwbW1yNGNwalc2ajg2VkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDdGNUFKS0siLCJtZSI6eyJpZCI6IjkyMzA1MjIwNjQ2NTozOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZeg8J2YgvCdmIfwnZeu8J2XuvCdl7rwnZe28J2XufCWo5gg8J2XtPCdl67wnZe68J2XtvCdl7vwnZe0IMq44bWXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbmw3NnNDRUpQWHFMd0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTUUdKZTlWY0FzUjFWcXFYaGVYamlvalVJdHpLT2x1K0JXSk1EaTRsa0I4PSIsImFjY291bnRTaWduYXR1cmUiOiI0TGowVGhQU0pOUGJLMUtjUVFvcGkyS2RzUGx2Q3A3WndXR3N3Z2NIdXlDUmpQbThQbGd6WWU3M0JKSTlpWTNFWjN3VjhIRUZFeUQzUWNRZlBnclNEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY2R2dW9DbWdtTjl5MVNESlBsb0hMUjlrUWlkNkFocmpKcDdpZ0RoaEIzU1RrYXl2akZiNHd1YnYvTWh2c2V4d2dnYUwrekttOXhtUW1xNFV1ekZlaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNTIyMDY0NjU6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWtCaVh2VlhBTEVkVmFxbDRYbDQ0cUkxQ0xjeWpwYnZnVmlUQTR1SlpBZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzEwODM4MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCVmgifQ==';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '923052206465';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'false';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
