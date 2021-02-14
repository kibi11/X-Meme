const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;


mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });


  const MemeSchema = new mongoose.Schema({
      name: String,
      url: String,
      caption: String
    })

    MemeSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;

    },
  });
  console.log(MemeSchema);

module.exports = mongoose.model("Meme", MemeSchema);
