import { check } from "express-validator";

export const messageValidation = [
    check("name")
        .notEmpty()
        .withMessage("Name must be filled")
        .isLength({min:3})
        .withMessage("Name must contain at least 3 characters"),
    check("text")
        .notEmpty()
        .withMessage("Messages must be filled")
        .isLength({min:3,max:800})
        .withMessage("Message must be between 3 and 800 simbols")
];