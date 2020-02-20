import { reset } from "nodemon";

export const home = (req, res) => res.send("Home");
export const search = (req, res) => reset.send("Search");