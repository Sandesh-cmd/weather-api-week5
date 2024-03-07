import express from "express";
import weatherRoute from "./routes/weatherRoute.js"

// We will create an express app
const app = express();

//the port that the express server will listen on
const PORT = 3000;

app.use(express.json())

//our new route
app.use("/api/weather", weatherRoute);

//start the express server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});