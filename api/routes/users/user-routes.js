const express = require("express")
const bcrypt = require("bcryptjs")
const Users = require("./users-model")
const { restricted } = require('../../middleware/validation/restricted')
const router = express.Router()

router.get("/", restricted, async (req, res, next) => {
  try {
    const users = await Users.find()
    
    res.json(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router;