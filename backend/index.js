import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 5500;

app.get("/",(req,res)=>{
        res.send("Harsh Sawant");
})



app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })