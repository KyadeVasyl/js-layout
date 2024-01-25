// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є
const community = require('./community')
// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/community', community)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
