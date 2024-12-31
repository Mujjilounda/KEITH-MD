/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5GZG1MVi9TbVlRV3IyRlFtNFR2cE8xSnlndDRzOEJrVFNOZEhKSXZVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnpPUDFTV3Y4N2l4Rlg0VkZvZ1BISjJleDJybSt3OUdCUUZLTXQ0QWlnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SDdyY25ZL3RxTXpmdW1QZUFmOHNNMHFNVFF1ejVXb0NnK2R5U0RyVTJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUkN5V2xVTm9ML1R5ODIwbGxmNVR6aXYwcksrV3ZsSFZaYWkzRE9mdVZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFOTURyMURPRFBHUVgxNFAxUWJ1NnZxNkxVQis0VUZJZGo2a3FLWXNZbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik02SXZJdEZaV1c4NWpDMmdMZmJpcTRQV05NRmFVZjQvcWs5eEdmbFJ6Vmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJRbU1CMHRRcXNpNDRwSXowUFAyelI3SU03dThFaGZKcWxTTWxGazkyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0oxY0xvandHT0NYNENKc0N0K0dVNGUxMUZjL2RrU3kwbUU2VDdXTmRnOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNuaC9zMFBVNWc1TzQ5TjB4Wm5IOUtuRVBZNVlLZEJxVjBIQnVOSTJDU2F6dHN6RVVsWUxnZEV3WVNpQktEQ2FWaExPMkQwZ2xlT1Z0d1R2UjBySEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6IldocFJXcFFkOUNVVHdMY2NwVkxYM2V6R3hxMEplNnNSSnd3TjN6b1NaaFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdESWRxZ3ZpU3RLSkkxd3JwdFpBTEEiLCJwaG9uZUlkIjoiOTEyNmZjNTUtODA5YS00N2MwLWFmOGEtZTA2NzE5NDg3ZTE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlphTGV2cG9Dbmpxcnl5YzZST2ZiN1RSUHQwZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwaHZXei9HelU3ejJUSElQdTlQb09IWUprWVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREcxNDFUQjUiLCJtZSI6eyJpZCI6IjkyMzA1MjIwNjQ2NToxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZeg8J2YgvCdmIfwnZeu8J2XuvCdl7rwnZe28J2XufCWo5jwnZel8J2XrvCdl7vwnZe2IPCdl7TwnZeu8J2XuvCdl7bwnZe78J2XtCDKuOG1lyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2JsNzZzQ0VKYjB6cnNHR0JJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU1FHSmU5VmNBc1IxVnFxWGhlWGppb2pVSXR6S09sdStCV0pNRGk0bGtCOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMTBIRDBlSFNPS21pUXB1SFJJZWFKdlBBNk5IdlBVKzBFRFF0TUk2ZHNjQy9Rc2FvQlZHU0RmeEpaU2U4UndtWjI4eVE4RFQyQm9KK2djZHQyYXNmQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhGb0FFRk92UWF3M3pPODF6THhZS01EWDlKWXFRTnR3d0ZvWm1UclFzNis4emU2eHZhZzlJNm5CZUtEVjlGcUhjN3lQZnBKZ29FSzFGVlNZa1gzS0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDUyMjA2NDY1OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVrQmlYdlZYQUxFZFZhcWw0WGw0NHFJMUNMY3lqcGJ2Z1ZpVEE0dUpaQWYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU2Mzc1MzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXZiIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '923052206465';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'MUZAMMIL-MD';
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
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'false';
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
