import Timetable from "../models/Timetable.js";

export const createTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.create(req.body);
    res.status(201).json(timetable);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.findAll();
    res.json(timetables);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
