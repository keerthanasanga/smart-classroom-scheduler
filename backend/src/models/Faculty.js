import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Faculty = sequelize.define("Faculty", {
  name: { type: DataTypes.STRING, allowNull: false },
  subject: { type: DataTypes.STRING, allowNull: false },
  leavesPerMonth: { type: DataTypes.INTEGER, defaultValue: 0 }
});

export default Faculty;
