import { body } from "express-validator"

export const createPublicationSchema = [
    body("title")
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body("description")
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body("urlpicture")
]

export const updatePublicationSchema = [
    body("title")
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body("description")
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body("urlpicture")
        .optional()
        .isURL().withMessage('Ingrese una url valida')
        .notEmpty().withMessage('No debe ser vacio')
]