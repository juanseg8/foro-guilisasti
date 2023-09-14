import { Router } from "express";
import { createPublications, deletePublications, getPublications, updatePublications } from "../controllers/publications.controllers.js";
import { createPublicationSchema, updatePublicationSchema } from "../models/schemas/publiactions.schemas.js";
import { validator } from "../middlewares/validator.js";

const publicationsRouter = Router()

publicationsRouter.get("/api/publications", getPublications)

publicationsRouter.post("/api/publications", createPublicationSchema, validator, createPublications)

publicationsRouter.put("/api/publications/:id",updatePublicationSchema, validator, updatePublications)

publicationsRouter.delete("/api/publications/:id", deletePublications)

export { publicationsRouter }