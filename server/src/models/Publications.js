import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


export const PublicationsModel = sequelize.define("Publications", {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    urlpicture: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
})