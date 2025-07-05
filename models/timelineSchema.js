import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title required!"],
    },
    description: {
        type: String,
        required: [true, "Description required!"],
    },
    timeline: {
        from: {
          type: String,
          required: [true, "Timeline Starting Date is Required"],
        },
        to:String,
    },
});

export const  Timeline = mongoose.model("Timeline",timelineSchema);