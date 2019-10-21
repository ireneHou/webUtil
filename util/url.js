
/**
 * 对象转url链接
 * @param {Object} conditions 条件
 * @param {Boolean} change 是否把第一个&改成?
 * @returns {String}
 */
export function conditionToUrl(conditions, change) {
  let str = '';
  for (let key in conditions) {
    str += '&' + key + '=' + conditions[key];
  }
  if (change) {
    str = str.replace('&', '?');
  }
  return str;
}

/**
 * 对象改变成formdata类型 
 * @param {Object} obj 对象
 * @returns {FormData}
 **/
export function changeToFormdata(obj) {
  let forms = new FormData();

  function arrInObj(objKey, arr) { // formdata数组时
    for (let i = 0; i < arr.length; i++) {
      for (let key in arr[i]) {
        if (Array.isArray(obj[key])) {
          arrInObj(objKey + '[' + i + '][' + key + ']', arr[i][key])
        } else {
          forms.append(objKey + '[' + i + '][' + key + ']', arr[i][key]);
        }
      }
    }
  }

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      arrInObj(key, obj[key])
    } else { // formdata对象
      forms.append(key, obj[key]);
    }
  }
  return forms
}
