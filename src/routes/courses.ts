import { Router } from "express";
import { Courses } from "../models/courses";

const coursesRouter = Router();

coursesRouter.get("/", async (req, res) => {
  const courses = await Courses.getAll();
  res.render("courses", {
    title: "Courses",
    isCourses: true,
    courses,
  });
});

export { coursesRouter };
