import { Router } from "express";
import { Courses } from "../models/courses";

const addRouter = Router();

addRouter.get("/", (req, res) => {
  res.render("add", {
    title: "Add courses",
    isAdd: true,
  });
});

addRouter.post("/", async (req, res) => {
  const { title, price, image } = req.body;
  const courses = new Courses(title, price, image);
  await courses.save();
  res.redirect("/courses");
});

export { addRouter };
