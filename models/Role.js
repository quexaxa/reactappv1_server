import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

export default mongoose.model("Role", RoleSchema);
