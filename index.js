const express = require("express");
const User = require("./models").user; //point to the file that contains the table model. User capitalized.
const app = express();
const PORT = 4000;

app.get("/users", async (request, response) => {
  try {
    console.log("i got a request for the user list");

    const allUsers = await User.findAll();
    response.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
