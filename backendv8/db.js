const mongoose = require("mongoose");
 const mongouri = "mongodb+srv://shaka:iPod_nano@cluster0.zjwyqfk.mongodb.net/test";
// const mongouri =
//   "mongodb+srv://127.0.0.1";

const conecttomongo = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(
    mongouri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log(err);
      else console.log("Connected to mongodb successfully");
    }
  );
};
module.exports = conecttomongo;
