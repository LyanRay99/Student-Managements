const express = require("express");
const app = express();
const port = 8000;
const routers = require("./Routers/router");

//* chuyển request và response => json
app.use(express.json());

//* sử dụng routers đã cấu hình
app.use(routers);

app.get("/", (req, res) => {
  //* gửi data đến clients
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server's running in port ${port}`);
});
