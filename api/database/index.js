const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });
