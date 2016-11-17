"use strict";

/**
* Decorateur pour ajouter une conversion des paramètres de méthode
*/
export default function convert(ConvertClass) {
  return function(target) {
    if (!target.prototype.map) {

      target.prototype.map = function() {
        let instance = new ConvertClass();
        if (target.prototype.__mapFields__) {
          for(let idxField = 0; idxField < target.prototype.__mapFields__.length; idxField++) {
            if (instance.hasOwnProperty(target.prototype.__mapFields__[idxField]) && typeof instance[target.prototype.__mapFields__[idxField]] != 'function') {
              if (this[target.prototype.__mapFields__[idxField]].map) {
                instance[target.prototype.__mapFields__[idxField]] = this[target.prototype.__mapFields__[idxField]].map.bind(this[target.prototype.__mapFields__[idxField]])();
              } else {
                instance[target.prototype.__mapFields__[idxField]] = this[target.prototype.__mapFields__[idxField]];
              }
            }
          }

        }
        return instance;
      };
    }
  };
};
