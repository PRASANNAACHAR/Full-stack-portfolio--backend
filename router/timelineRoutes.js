import express from 'express';
import { postTimeline, deleteTimeline, getAllTimelines   } from '../controller/timelineController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post("/add", isAuthenticated, postTimeline);
router.delete("/delete/:id",isAuthenticated, deleteTimeline );
router.get("/getAll", getAllTimelines);



export default router;