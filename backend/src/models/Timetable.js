import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Timetable = sequelize.define("Timetable", {
  day: { type: DataTypes.STRING, allowNull: false },
  timeSlot: { type: DataTypes.STRING, allowNull: false },
  classroom: { type: DataTypes.STRING, allowNull: false },
  subject: { type: DataTypes.STRING, allowNull: false },
  faculty: { type: DataTypes.STRING, allowNull: false }
});

export default Timetable;
