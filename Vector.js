class Vector {
  constructor(...values) {
    this.values = values;

    this.x = values[0];
    this.y = values[1];
    if (values[2]) this.z = values[2];
    if (values[3]) this.w = values[3];
  }
}

var module = module || {};
module.exports = Vector;
