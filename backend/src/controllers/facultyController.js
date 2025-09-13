import Faculty from "../models/Faculty.js";

export const createFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.status(201).json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findAll();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
