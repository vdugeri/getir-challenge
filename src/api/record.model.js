const mongoose = require("mongoose");

const RecordSchema = mongoose.Schema(
  {
    key: String,
    counts: [Number],
    Value: String
  },
	{
		timestamps: { createdAt: "createdAt" },
		collection: "records"
	}
);

module.exports = mongoose.model("Record", RecordSchema, "records");