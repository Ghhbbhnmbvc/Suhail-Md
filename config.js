const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_14_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzLFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTksXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVYeUk3OEQrY2I0aFlyeVBGTUlpazJwMzlOQW9LME5Eek9weWw1bHNYSDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDIyODgxOTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkxMDkwMEU4MUE1RkVBMTAyM0M3OTFENEU3OTk1QTI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgyNjg5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzAyMjg4MTkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQURCRDI4QjQ3MUUxQzlCQUJCQTlBNEMxMkIzOTlDQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MjY4OTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicmR5X2czQm5SdVdGcWdfSTlJZERvZ1wiLFxuICBcInBob25lSWRcIjogXCI5YjY4OWVlOS03YWQ5LTQxNzktYWE0Mi01Mjc0MGQ3YWQwMzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAyNTUsXG4gICAgICAxNjgsXG4gICAgICAxMSxcbiAgICAgIDE4MCxcbiAgICAgIDE1LFxuICAgICAgMjE4LFxuICAgICAgMzgsXG4gICAgICAxNzcsXG4gICAgICA1NyxcbiAgICAgIDIwNyxcbiAgICAgIDE4NSxcbiAgICAgIDEzOSxcbiAgICAgIDIwMSxcbiAgICAgIDUyLFxuICAgICAgMTY0LFxuICAgICAgMjAyLFxuICAgICAgMTU0LFxuICAgICAgMjExLFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAxMixcbiAgICAgIDIwMixcbiAgICAgIDIzOSxcbiAgICAgIDE1NSxcbiAgICAgIDE0MCxcbiAgICAgIDE3NyxcbiAgICAgIDE5NSxcbiAgICAgIDI0MixcbiAgICAgIDk2LFxuICAgICAgMTU5LFxuICAgICAgMjA0LFxuICAgICAgMCxcbiAgICAgIDEwLFxuICAgICAgNSxcbiAgICAgIDE4MixcbiAgICAgIDU0LFxuICAgICAgMjExLFxuICAgICAgNDcsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0hMWlA3TDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzAyMjg4MTkxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5Njk1OTA4MDA1ODk5NTo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIn4g6pyx4bSb4bSE4bSc6pyx4bSb4bSP4bSN6pyxXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3FLc3RNQ0VNVDhnN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0cHdEL21nQ2NhUEZ2bUxPWEhSS2VZeXU3b3ZGd1paRFRMRjR5amdMTG00PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJZY0w3U3dsWjRDS04vaTBoalMycEhRc1VGUGtGWVhsUDE4NVZodmpnUVM3bVRmNFIvVTJydG5UNmMwYW96YktuL0pVaXVEcUZpMHdKaTNiaGxpWURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVDZVBwU2FmVVc0eldhOHk5RnpnTHlvRHROSXRkU1pRUStxTHZySEZwdFlNQUs3VUJlQncvemJhYzdqUXAyYWw3akx2cDNNQXY0VVZhVWwwbFhlMURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzAyMjg4MTkxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MjY4ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEczNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURzMy5qc29uIjogIntcImtleURhdGFcIjpcInhlQTBCcW5kdU82YjRDMTE4b1B2WE5XSnNPOGc1K1pYSEhjbHRZWkIzRVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzExNzU1MDUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4MjY4OTEyOTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
