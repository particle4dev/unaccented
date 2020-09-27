import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import isNumber from 'lodash/isNumber';
import isBoolean from 'lodash/isBoolean';
import toString from 'lodash/toString';
var a = /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g;
var e = /è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g;
var i = /ì|í|ị|ỉ|ĩ/g;
var o = /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g;
var u = /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g;
var y = /ỳ|ý|ỵ|ỷ|ỹ/g;
var d = /đ/g;
export default function unaccented(alias) {
    if (isNull(alias) || isUndefined(alias))
        return '';
    if (isNumber(alias) || isBoolean(alias))
        return toString(alias);
    return alias.toLowerCase()
        .replace(a, "a")
        .replace(e, "e")
        .replace(i, "i")
        .replace(o, "o")
        .replace(u, "u")
        .replace(y, "y")
        .replace(d, "d");
}
