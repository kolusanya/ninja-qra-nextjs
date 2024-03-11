import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const riskcontrolSchema = new Schema(
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
    controls: [],
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const RiskControl =
  mongoose.models.RiskControl ||
  mongoose.model("RiskControl", riskcontrolSchema);

export default RiskControl;
