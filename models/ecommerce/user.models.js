import mongoose from "mongoose";

/* timestamps gives us two fields that is createdAt and updatedAt
createdAt: a date representing when this document was created
updatedAt: a date representing when this document was last updated
 */

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema)
// mongoose.model(do question puchta hai ki kya naam se rakhna hai or kis per base rakhna hai)