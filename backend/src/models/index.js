const ToDo = require("./ToDo");
const User = require("./User");

//ToDo -> userId
ToDo.belongsTo(User) //userId
User.hasMany(ToDo)