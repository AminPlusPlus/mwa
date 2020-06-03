const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mosh-exercises", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CourseScheme = mongoose.Schema({
  _id: String,
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
  date: Date,
  tags: Array,
});

const Course = mongoose.model("Course", CourseScheme);

async function getCourses() {
  const courses = await Course.find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 })
    .select(["-_id", "name", "author"]);
  console.log(courses);
}

async function getDescPriceCourses() {
  const course = await Course.find({
    isPublished: true,
    tags: { $in: ["backend", "frontend"] },
  })
    .sort({ price: 1 })
    .select(["name", "author", "price"]);
  console.log(course);
}

async function getCourseBigger() {
  const course = await Course.find({
    isPublished: true,
  }).or([{ price: { $gte: 15 } }, { name: { $regex: "by", $options: "i" } }]);

  console.log(course);
}

async function updateCourseById(id) {
  const course = await Course.findById(id);

  if (!course) return false;

  course.isPublished = true;
  course.author = "James Bond";
  const currCourse = await course.save();

  console.log(currCourse);
}

updateCourseById("5a68fdd7bee8ea64649c2777");
