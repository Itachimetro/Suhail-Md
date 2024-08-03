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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263788375590";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_15_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTExLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICA3LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg1LFxuICAgICAgICA3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1R5RkZ1SFBVSFRhTjBmUTlvSURMMGc1RURxZzNneWdCM1pac1RjRy9ncz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidTZ6ckZjU2lTOXFqR3NGRFF6VkJKQVwiLFxuICBcInBob25lSWRcIjogXCI5NTYzZTQ0Mi1lMjk4LTQ5YmYtODFmMS1jMWNmOTA3YmVlNWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMzIsXG4gICAgICAyMjMsXG4gICAgICAxNTMsXG4gICAgICAxNTAsXG4gICAgICAxNixcbiAgICAgIDEzMyxcbiAgICAgIDEwNixcbiAgICAgIDE4MixcbiAgICAgIDE2NixcbiAgICAgIDEwMCxcbiAgICAgIDIyOCxcbiAgICAgIDEsXG4gICAgICAxNTMsXG4gICAgICAxMjAsXG4gICAgICAxNzYsXG4gICAgICAxNTAsXG4gICAgICA1MyxcbiAgICAgIDE3OSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMTMwLFxuICAgICAgMjIzLFxuICAgICAgMTgyLFxuICAgICAgMTcsXG4gICAgICAxMTUsXG4gICAgICAxMzksXG4gICAgICAyMzMsXG4gICAgICA1OCxcbiAgICAgIDE5MCxcbiAgICAgIDExOCxcbiAgICAgIDEyNyxcbiAgICAgIDk2LFxuICAgICAgMjM0LFxuICAgICAgNzMsXG4gICAgICA5NSxcbiAgICAgIDIxOCxcbiAgICAgIDE2OCxcbiAgICAgIDE2OSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHVlpZQlY1TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE1Nzk3MTY5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTk3NDU4Njk2NjI3MToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ1B1SllHRUp2T3Q3VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRac09CRXpET3R4L2w4MjRhZFhVY25pVkVBOHZsa0NPSy8yYTgxeFZYUjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibDB0dDkwUldCelhzN3BDbTlFR2dmM3l6U3JqcVFoYUNHVU1vSDBMYkY1dnNmMGNHOEd4VjFvVFFPMG5JaUIxSEtzNHZpK0ZXUmNMZ0t3RGE0TGQyQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM0ZqN3d0N1VvM1ZQNmc2K090RHJvS1JYK0VRbm5kSGUyK0h6NUF2cDRnZW1ESFFrd0laMytDQXoyQzl4TmhSSWo3WHNlWHFCTzNMUzlzeFRMeVhmaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE1Nzk3MTY5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjcyOTI2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Metro",


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
