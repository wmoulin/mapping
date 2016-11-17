"use strict";
import Adress from "./adress";

class UserFilter {

  id = 0;
  name = "";
  password = "";
  adress = new Adress("");

  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

module.exports = UserFilter;
