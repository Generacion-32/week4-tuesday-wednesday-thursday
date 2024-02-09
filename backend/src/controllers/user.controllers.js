const catchError = require('../utils/catchError');
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const getAll = catchError(async (req, res) => {
  const results = await User.findAll();
  return res.json(results);
});

const create = catchError(async (req, res) => {

  // console.log(req.body.password);
  const { password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)


  const body = { ...req.body, password: hashedPassword }
  const result = await User.create(body);

  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await User.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;

  delete req.body.password
  delete req.body.email
  console.log(req.body.password);

  console.log(req.body);

  const result = await User.update(
    req.body,
    { where: { id }, returning: true }
  );
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const login = catchError(async (req, res) => {

  const { email, password } = req.body

  //email
  const user = await User.findOne({ where: { email } })
  if (!user) return res.status(401).json({ error: "Invalid credentials" })

  //password
  //console.log(user);
  const isValid = await bcrypt.compare(password, user.password) //true || false
  if (!isValid) return res.status(401).json({ error: "Invalid credentials" })

  //generacion del token

  //recordar de importar jwt
  const token = jwt.sign( //llave que abrira la cerradura
    { user },
    process.env.TOKEN_SECRET, //cerradura que tenemos en nuestra casa. 
    { expiresIn: '1d' }
  )


  return res.json({ user, token })

})

const logged = catchError(async (req, res) => {
  const user = req.user
  return res.json(user)
})

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  login,
  logged
}