const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connected")).catch((err) => console.log(err));

app.use(express.json());

app.use("/auth/",authRouter);

app.listen(process.env.PORT, () =>{
    console.log("Connecte");
})