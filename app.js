// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors'
// import cookieParser from 'cookie-parser';
// import fileUpload from 'express-fileupload';
// import dbConnection from './database/dbConnection.js';
// import { errorMiddleware } from './middlewares/error.js';
// import messageRouter from "./router/messageRoutes.js"
// import userRouter from "./router/userRoutes.js"
// import timelineRouter from "./router/timelineRoutes.js"
// import  applicationRouter  from "./router/softwareApplicationRoutes.js"
// import  skillRouter  from "./router/skillRoutes.js"
// import  projectRouter  from "./router/projectRoutes.js"



// const app = express()
// dotenv.config({path: "./config/.env"});


// app.use(cors({
//     origin: ["https://full-stack-portfolio-dashboard.vercel.app", "https://full-stack-portfolio-frontend.vercel.app"], // Add the new frontend URL here
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
// }));


// // app.use(cors({
// //     origin :[process.env.PORTFOLIO_URI, process.env.DASHBOARD_URI],
// //     methods: ["GET","POST","DELETE","PUT"],
// //     credentials: true,
// // }))


// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir:"/temp/",
// }))

// app.use("/api/v1/message",messageRouter);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/timeline", timelineRouter);
// app.use("/api/v1/softwareapplication", applicationRouter);
// app.use("/api/v1/skill", skillRouter);
// app.use("/api/v1/project", projectRouter);


// dbConnection();
// app.use(errorMiddleware);

// export default app



import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import fs from 'fs';
import dbConnection from './database/dbConnection.js';
import { errorMiddleware } from './middlewares/error.js';
import messageRouter from "./router/messageRoutes.js";
import userRouter from "./router/userRoutes.js";
import timelineRouter from "./router/timelineRoutes.js";
import applicationRouter from "./router/softwareApplicationRoutes.js";
import skillRouter from "./router/skillRoutes.js";
import projectRouter from "./router/projectRoutes.js";

const app = express();
dotenv.config({ path: "./config/.env" });

// ✅ Auto-create temp directory if missing
const tempDir = './temp';
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// ✅ CORS Configuration
app.use(cors({
  origin: [
    "https://full-stack-portfolio-dashboard.vercel.app",
    "https://full-stack-portfolio-frontend.vercel.app"
  ],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Fixed temp folder path (inside project, not system root)
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "./temp/",  // ✅ Relative folder inside project
}));

// ✅ Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/timeline", timelineRouter);
app.use("/api/v1/softwareapplication", applicationRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/project", projectRouter);

// ✅ Database Connection & Error Handling
dbConnection();
app.use(errorMiddleware);

export default app;
