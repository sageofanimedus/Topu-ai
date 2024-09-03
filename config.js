//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "2347011582249";
global.sudo = process.env.SUDO || "2347011582249";
global.owner = process.env.OWNER_NUMBER || "2347011582249";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdVbithZjBTaG81Q1ZKeklBWjhZOWtycitsYzdtR3ZGQS93VFNua3VXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTJBc0RmVVM5TVg5eFRTQmVLbkFnazVCZHYyQ2JWSnVHWGNTREhvbm1YST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTEZ5cGhRcXFMM0R2Y1FodCs5ZzlYUlFZYnFESGpaQnFBenpjY3pjWmtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQXNLWm5jUGRJSExRcmxDZjgvMlhoVXhtVExmNGdObHdzcDM2c3ZORGdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPd1prY01VeVdWU1FGWVlyak9ENUM2VExsTlpOaFpaaEZjNVlYeWFKMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZER0x3SU1rakxjT1JRWHFzM3lEcjhzbnREdUVNUWM5ZXUzMm91dVBpVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0F1VTc0SEh0dnFKdGVzMWM2SlRRc0ZSU0VKRlY5VDhkSU9SWEhMWkgwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3dGcDhMc1VDQXdGMU1aM3VKMmdFNDljeG9NanB0TEtHczR0a0RyWFpWVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ4M0duWmRrS2U4cnl2bm5GSlJVWmtJQXRQV0Jnemc1R3Uzei9uTzR3VUNPUXhENElLZTJKVWE0WHZyc0tZaGhCWGFpSVE0VHV1YkRDY3plcDlNVERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6ImF0UU5yc1haV2pPdUtBQUJjeUpoTTN2WjBoMFJqNi9pTW15RlE5b0luZXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAxMTU4MjI0OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1RjMwQjAyQUU2QkU1QTI1QzNDREUwMjkyQzZERjZBMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1Mzg3NzE0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfdjVyMDd1Z1FNcUVpNG1nekpaNVF3IiwicGhvbmVJZCI6ImM1OTI2MGFjLTNiOTctNGU1NC1hOTEyLTNkNjdkNjdhNGZlZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJORElkU2RKdGEwcjNtblBoRjIrbnphc0ZPa3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3VSR1VaYURnTDZUZ0JHcVR3ak1XWFEvQlNVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlYxQUFBUlgxIiwibWUiOnsiaWQiOiIyMzQ3MDExNTgyMjQ5Ojc1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlByaW5jZSBFbW1hbnVlbCBNYWNkb25hbGQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ011MzZ0SUNFTENuM2JZR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBUcG90MkVRWWhOYm15OEVvcGtUYVEvTUNaZVJLQ1pZVkt0RzZpNkNjRFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImgrUGJsR3BWbHBmUG9wN2gvWXF5U1I0eU1lQkZGb2pVME85bzd3cE0rcHo5elZSRG0zSHYxRXJCeEJkUTlJRWlKbW5jcmMwTk52Rm1heXVNOXJwVUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3M2lzbmY1dmtDVG9MeTB5Vkk1K01sL3NIVmdjYkF2Ynk1cU9Ba3JEV2R6N2QxNlhabVorcFFtMys0dmliM1VZQ2pQeC9mbG1QOTFvQS9OK3dVdEVCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTE1ODIyNDk6NzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVU2YUxkaEVHSVRXNXN2QktLWkUya1B6QW1Ya1NnbVdGU3JSdW91Z25BMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTM4NzcwOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOamEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "stifkt",
  botname: process.env.BOT_NAME || "sage of Animedus",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
