import Classroom from "../models/Classroom.js";

export const createClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.create(req.body);
    res.status(201).json(classroom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.findAll();
    res.json(classrooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
