import { check } from "express-validator";

export const messageValidation = [
    check("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({min:3}),
    check("text")
        .notEmpty()
        .withMessage("Text is required")
        .isLength({min:3,max:400})
        .withMessage("Text must be between 3 and 400 simbols")
];