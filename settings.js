/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY04xSEo2RWxzQ0RCeW8wbmRpOFlnaVZtQUtEOTNVVkh3NmpFU28ybUdFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUlFWktsOU5TdTlKeERFZ3hxQ2dNd3dFUGVhRnBrNDk1RTdWTU9JSVIwRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTStyL1o4NkZLR05VV0xVczdULzdVK2lUUHMrN3VpZ3U0K3dyS2xxbTNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiL3ZCL0NQYkxVbTZYWlBuMW5aaERubkF3VmdPRkluU2tXQ2tFUzY1N0YwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGTklaeWczOWVBMUNmR1BpSjZBVzhTd2Q3NG02T3UzYVBmWUZvaFNGa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5kZ2p6U0NkTnNOZnlVWDNLaTVpTU10VDQ3RkZQOVZTd2lDVXV4VEVRa3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09FdTNuK3k4Y3RkeGVLblZCNHNQamZUdUhTOVUveWlqZDdKUDB0cWNHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDBvK3V5Wjg3OTI3dlJEOVQ0WEorYjk5SmcwZWQvVTBZYUFWa1dxVUIxdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdYVldoRVNMOFpBdmlrZWIrcXM4bHgySjZVTWU1UjNsNzU3Y2RRRzZrV3NEYmphQWdqeFVOaktnREs2eVN0c1FaRUhVTjdxOVpXbzRlQWNRK29jWkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJVU0FxVm5xaFVGRnp2d3NONlpueTFyYUswaWUwRzBhNzB5cmNEVVRBeU1rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI2NjU1Njk4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NTU5RjYxQzVDNTYxNzcwOUQxMTMxQ0NEMTkxNTk1NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1NDE1MDUxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNjY1NTY5ODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjcxRENGQzY5MkE4RDU4RjU2N0Q2QTEzRTZDNkM1OUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTQxNTA1MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMjFPOEFIOXBTUWVfYU5HRm91QzdZUSIsInBob25lSWQiOiI5YzhjN2Y2My0yNGQwLTQyMGQtYTZkOS1hMmJmYmIyNGY1NmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajdkeS84bk5KaUtuOFBodVoxaWM4eHc3T0trPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk0OE4rcHNvZFRrUDdzYmhqVTBkQlhobW05dz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYVzdES1hURyIsIm1lIjp7ImlkIjoiOTIzMjY2NTU2OTg5OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlphbWxpaWkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ052RGk2b0JFUGlwd2JzR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFzV29KcENaRWlwWnI2K3oybXJSQ1lKZmFueUxKTVZYd2VtV2ZOQk5HVmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjQzazFGVWNYN1ZNMER5ZCtzdUFUZis0WFZSRTM4RTFEcndRdDFtVXk3SU9kSzVOY2xuUURUU0o2VENLWGk4anpHT3dTZk1CRFUxWEJWYkY2RFMrc0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuRkVTa3NGRG9yQVMzRmE5UXBmeENMYjRPL1EvVEs5TjlBN014NnRwZFlEb3VvM3hJbmZHSWVBcXRiTzEzdkZoTCttWkZkam1DeUhpWC9ERU5qZHJBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI2NjU1Njk4OToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkYkZxQ2FRbVJJcVdhK3ZzOXBxMFFtQ1gycDhpeVRGVjhIcGxuelFUUmxZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NDE1MDQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9OciJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '923266556989';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
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
