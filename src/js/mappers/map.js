"use strict";

/**
* Decorateur pour ajouter une conversion des paramètres de méthode
*/
export default function(target, key, descriptor) {
  if (!target.__mapFields__) {
    target.__mapFields__ = [];
  }
  target.__mapFields__.push(key);
};
