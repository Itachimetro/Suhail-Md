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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_49_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU2LFxuICAgICAgICA2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg4LFxuICAgICAgICA4LFxuICAgICAgICA1OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICA5NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICA5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyLFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhVWTBrR1dhSVY0L3MvZEg5R1Z5WGFGRVMvYXc4WEJwclFWN2ZxR0Z4V1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImthWF90OGdSUlZlR0lSeHdWMlFET3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTAzMzIyMjktMGRmYi00NjZjLWI1MzktMWEzZjlkMWEwNWJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgOTMsXG4gICAgICAyMDYsXG4gICAgICAxOSxcbiAgICAgIDU1LFxuICAgICAgMjMyLFxuICAgICAgMTQzLFxuICAgICAgMTE2LFxuICAgICAgOCxcbiAgICAgIDU0LFxuICAgICAgNSxcbiAgICAgIDI4LFxuICAgICAgODUsXG4gICAgICAxMzksXG4gICAgICAyMzgsXG4gICAgICA1OSxcbiAgICAgIDE1NixcbiAgICAgIDE0NixcbiAgICAgIDE2MSxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAyMyxcbiAgICAgIDg0LFxuICAgICAgMjMwLFxuICAgICAgMTA3LFxuICAgICAgMTE1LFxuICAgICAgMTg2LFxuICAgICAgMjE0LFxuICAgICAgNTQsXG4gICAgICAxLFxuICAgICAgNzcsXG4gICAgICAxNDAsXG4gICAgICAxNjYsXG4gICAgICAyNDIsXG4gICAgICAyNTUsXG4gICAgICA0NixcbiAgICAgIDE4NCxcbiAgICAgIDE0MyxcbiAgICAgIDE3OCxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5WUhWV1ZDWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE1Nzk3MTY5OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTk3NDU4Njk2NjI3MToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPT1B1SllHRUo3M3ViVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRac09CRXpET3R4L2w4MjRhZFhVY25pVkVBOHZsa0NPSy8yYTgxeFZYUjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwickFIdzhKZ2phQ1lLbUoyRlFFVkx5a0o5U0ZpNzgzaDRoMHZrRld5TzE0UUtKQ21NVG1PamF6UzVLTGNoaWVzMVIvT2VnbDhRQWRuQVE3aWg2MDhFQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMWdFNDVtTWQvVFp0VmxaKzJVT2orYjFWV2oxQmMwS1dnTEJzVlVXamFLa05qU24rcURJaDFQbmtic1l0VzhwMG1wVG93V0c2cWVXSWZYbWZFUjErQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE1Nzk3MTY5OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzEwOTQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkR3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFORHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxdmVnNmx1UEllaTRRNEV3YnM0ZGdiTEEzdWZ2SGxEb005QUdlR1ZVck9BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTc2Njk2MDIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
