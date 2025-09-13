import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Classroom = sequelize.define("Classroom", {
  name: { type: DataTypes.STRING, allowNull: false },
  capacity: { type: DataTypes.INTEGER, allowNull: false },
  shift: { type: DataTypes.STRING, allowNull: false }
});

export default Classroom;
