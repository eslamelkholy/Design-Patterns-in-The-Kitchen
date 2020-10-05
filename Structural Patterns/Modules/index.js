/**
 * Modules Design Pattern
 * This Pattern is Popular Like Import/Export
 * Through Encapsulating a Block of Code into Pure Function  Separate Module
 */

import express from "express";
import calc from "./calc";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => res.send(`Modules Design Pattern Goes Here, ${calc()}`));

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
