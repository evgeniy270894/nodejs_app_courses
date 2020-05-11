import { v4 as uuid } from "uuid";
import fs from "fs";
import path from "path";

export interface CoursesModel {
  id: string;
  title: string;
  price: number;
  image: string;
}

export class Courses {
  private title: string;
  private price: number;
  private image: string;
  private id: string;

  constructor(title: string, price: number, image: string) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.id = uuid();
  }

  getModel(): CoursesModel {
    return {
      id: this.id,
      title: this.title,
      price: this.price,
      image: this.image,
    };
  }

  async save() {
    const courses = await Courses.getAll();
    courses.push(this.getModel());

    try {
      await fs.promises.writeFile(
        path.join(__dirname, "..", "courses.json"),
        JSON.stringify(courses)
      );
    } catch (e) {
      throw e;
    }
  }

  static async getAll(): Promise<CoursesModel[]> {
    try {
      const result = await fs.promises.readFile(
        path.join(__dirname, "..", "courses.json"),
        "utf-8"
      );
      return JSON.parse(result);
    } catch (e) {
      throw e;
    }
  }
}
