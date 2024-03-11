import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const riskSchema = new Schema(
  {
    riskdomain: String,
    riskid: String,
    riskshortname: String,
    riskdescription: String,
    risklikelihood: Number,
    riskfinancialimpact: Number,
    riskregulatoryimpact: Number,
    riskstakeholderimpact: Number,
    riskscore: Number,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Risk = mongoose.models.Risk || mongoose.model("Risk", riskSchema);

export default Risk;
