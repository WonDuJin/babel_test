"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var a = ["피카츄", "라이츄", "파이리"];
var b = ["아구몬", "카피몬", "피요몬"];
var c = [].concat(a, b);
console.log(c);
var Monster = /*#__PURE__*/_createClass(function Monster(id, name, type) {
  var _this = this;
  _classCallCheck(this, Monster);
  _defineProperty(this, "getName", function () {
    return _this.name;
  });
  this.id = id;
  this.name = name;
  this.type = type;
}); // class AddMonster extends Monster {
//   constructor(local) {
//     super(id, name, type);
//     //super가 뭔지 체크하기!
//     local;
//   }
// }
var test = new Monster(1, a[0], "전기", "대전");
console.log(test);
console.log(test.getName());