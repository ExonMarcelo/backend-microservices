const store = require("../../../store/dummy");
const ctrl = require("./controller");

module.exports = ctrl(store); //the store is injected to controller