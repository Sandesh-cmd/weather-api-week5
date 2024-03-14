"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weatherRoutes_1 = __importDefault(require("./routes/weatherRoutes"));
// We will create an express app
const app = (0, express_1.default)();
//the port that the express server will listen on
const PORT = 3000;
app.use(express_1.default.json());
//our new route
app.use("/api/weather", weatherRoutes_1.default);
//start the express server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
