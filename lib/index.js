"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isUndefined_1 = __importDefault(require("lodash/isUndefined"));
var isNull_1 = __importDefault(require("lodash/isNull"));
var isNumber_1 = __importDefault(require("lodash/isNumber"));
var isBoolean_1 = __importDefault(require("lodash/isBoolean"));
var toString_1 = __importDefault(require("lodash/toString"));
var a = /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g;
var e = /è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g;
var i = /ì|í|ị|ỉ|ĩ/g;
var o = /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g;
var u = /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g;
var y = /ỳ|ý|ỵ|ỷ|ỹ/g;
var d = /đ/g;
function unaccented(alias) {
    if (isNull_1.default(alias) || isUndefined_1.default(alias))
        return '';
    if (isNumber_1.default(alias) || isBoolean_1.default(alias))
        return toString_1.default(alias);
    return alias.toLowerCase()
        .replace(a, "a")
        .replace(e, "e")
        .replace(i, "i")
        .replace(o, "o")
        .replace(u, "u")
        .replace(y, "y")
        .replace(d, "d");
}
exports.default = unaccented;
