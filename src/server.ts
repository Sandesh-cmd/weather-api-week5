import express from "express";

// We will create an express app
const app = express();

//the port that the express server will listen on
const PORT = 3000;

app.use(express.json())

//start the express server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});