"use strict";

import mapper from "../../../src/js/mappers/mapper";
import map from "../../../src/js/mappers/map";
import UserFilter from "./userFilter";
import Adress from "./adress";

@mapper(UserFilter)
class User {

  id = 12;

  @map
  name = "";

  @map
  password ="";

  @map
  adress = new Adress("my adress");

  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

module.exports = User;
