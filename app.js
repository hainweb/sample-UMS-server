const express = require("express");
const app = express();

const PORT = 5000;

app.get('/',(req,res)=>{
    res.send("Welcome to UMS")
})
app.listen(PORT, () => {
  console.log(`Server is runing on PORT ${PORT}`);
});
