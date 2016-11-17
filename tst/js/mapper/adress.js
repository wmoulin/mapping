"use strict";

import mapper from "../../../src/js/mappers/mapper";
import map from "../../../src/js/mappers/map";
import AdressFilter from "./adressFilter";

@mapper(AdressFilter)
export default class Adress {

  id = 13;

  @map
  label = "";

  constructor(label) {
    this.label = label;
  }
};
