import { body } from "express-validator";

export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
];

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
  body("firstName", "Укажите имя").isLength({ min: 3 }),
  body("surname", "Укажите фамилию").isLength({ min: 3 }),
  body("avatarUrl", "Неверный формат").optional().isURL(),
];

export const serviceCreateValidation = [
  body("title", "Укажите название услуги").notEmpty().isString(),
  body("description", "Укажите описание услуги").isString(),
  body("price", "Укажите цену услуги").notEmpty(),
  body("category", "Укажите категорию услуги").isString(),
  body("subCategory", "Укажите подкатегорию услуги").isString(),
  body("ImageUrl", "Укажите ссылку на изображение услуг").optional().isString(),
];
