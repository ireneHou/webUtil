/**
 * 是否为空对象
 * @param {Object} o
 * @returns {Boolean}
 */
export function isEmptyObject(o) {
  for (var a in o) {
    return false
  }
  return true
}

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
 * 日期转换成2019-10-21
 * @param {Date,String} dates 日期
 * @param {Boolean} bool 分隔符[-,/]
 * @returns {String}
 */
export function dateToStrDate(dates, bool) {
  // 日期转换成 2018-11-15
  if (!dates || typeof dates === 'string') {
    if (!dates || dates.substring(0, 10) == '0001-01-01') {
      return '';
    }
    dates = new Date(dates.replace(/\-/g, '/'));
  }
  var month = dates.getMonth() + 1 + '';
  var days = dates.getDate() + '';
  var symbols = '-';
  if (bool) {
    symbols = '/';
  }
  return dates.getFullYear() + symbols + ('00' + month).substr(month.length) + symbols + ('00' + days).substr(days.length);
}

/**
 * 显示用户图片
 * @param {String} names 名称 
 * @returns {String}
 */
export function getAvatarURL(names) {
  if (!names) return
  var avaImg =
    window.AvatarURL || 'http://irene.com/{engName}.jpg',
    engName = names
  if (engName && engName.length > 0) {
    engName = engName.replace(/\(.+\)/, '')
  }
  const uname = avaImg.replace('{engName}', engName)
  return uname
}

/**
 * 保留小数位数
 * @param {String} number 数字
 * @param {Number} digits 小数点后面的位数
 * @returns {String}
 */
export function toFixed(number, digits) {
  if (isNaN(number)) {
    return ''
  }
  return parseFloat(number).toFixed(digits)
}

// 表单验证
export var validator = {
  /**
   * 邮箱格式
   * @param {string} str
   * @returns {boolean}
   */
  isEmail(str) {
    var emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    return emailReg.test(str)
  },
  /**
   * 手机号码格式
   * @param {string} str
   * @returns {boolean}
   */
  isMobile(str) {
    var mobileReg = /^(1[0-9])\d{9}$/
    return mobileReg.test(str)
  },
  /**
   * 电话号码格式
   * @param {string} str
   * @returns {boolean}
   */
  isTelephone(str) {
    var phoneReg = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/
    return phoneReg.test(str)
  },
  /**
   * 身份证格式
   * @param {string} str
   * @returns {boolean}
   */
  isIDCard(str) {
    var ID = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|[X|x])$/
    return ID.test(str)
  }
}

/**
 * 检查要提交之类的数据是否符合规则(不完善版)
 * @param {Object} obj {}  对象
 * @param {String} type "" 类型 string,date,array,json,equal,dateCompare
 * @param {String} name "" 名称
 * @param {String} tips "" 提示
 * {{name:''},'string','name'}
 * 
 * @returns {Boolean}
 */
export function checkEdit(obj, type, name) {
  if (type === 'string') {
    if (!obj[name] || obj[name].trim() === '') {
      return false
    }
  } else if (type === 'date') {
    if (!obj[name]) {
      return false
    }
  } else if (type === 'array') {
    if (obj[name].length == 0) {
      return false
    }
  } else if (type === 'json') {
    if (!obj[name]) {
      return false
    }
    try {
      JSON.parse(obj[name])
      return true
    } catch (e) {
      return false
    }
  } else if (type === 'equal') {
    if (obj[name[0]] == obj[name[1]]) {
      return false
    }
  } else if (type === 'dateCompare') {
    if (obj[name[0]] && obj[name[1]] &&
      new Date(obj[name[0]].$date).getTime() >
      new Date(obj[name[1]].$date).getTime()
    ) {
      return false
    }
  }
  return true
}

/**
 * 检测是否为移动端浏览器
 * 
 * @returns {boolean}
 */
export function userAgentIsMobile() {
  var reg = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|XiaoMi/i
  return reg.test(window.navigator.userAgent)
}

/**
 * 数组对象排序
 * @param {Array} prop 数组对象
 * @param {Boolean} bool 是否顺时针，默认逆时针
 * 
 * @example [].sort(compareArrInObj('name',true))
 * @returns {Number} 0/1
 */
export function compareArrInObj(prop, bool) {
  return function (obj1, obj2) {
    var val1 = obj1[prop]
    var val2 = obj2[prop]
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1)
      val2 = Number(val2)
    }
    if (val1 > val2) {
      if (!bool) {
        return -1
      } else {
        return 1
      }
    } else if (val1 < val2) {
      if (!bool) {
        return 1
      } else {
        return -1
      }
    } else {
      return 0
    }
  }
}

// ===== filter =====
export function escapeHtml(value) {
  if (typeof value !== 'string') {
    return value
  }
  return value.replace(/[&<>`"'\/]/g, function (result) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '`': '&#x60;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2f;'
    } [result]
  })
}

/**
 * excel二进制转为文件下载
 * @param {string} data excel地址
 * @param {string} name excel下载的名称
 * 
 * @example downloadLocalExcelFile('../test.xlsx', 'abc.xlsx')
 */
export function downloadLocalExcelFile(data, name) {
  if (!data) {
    return
  }
  name = name || 'excel.xlsx'
  let url = window.URL.createObjectURL(new Blob([data])) //创建一个指向该参数对象的URL

  if (window.navigator.msSaveOrOpenBlob) { // IE10
    navigator.msSaveBlob(url, name);
  } else {
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', name)
    document.body.appendChild(link)
    link.click()
    URL.revokeObjectURL(link.href); // 释放通过 URL.createObjectURL() 创建的 URL
  }
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

/**
 * 表格全选(不完善版)
 * 
 * @param {Array} checkedList 已选中的
 * @param {Boolean} isCheckAll 是否选中
 * @param {Array} list 列表内容
 * @param {String} fieldName 放入已选中的字段
 * 
 * @return {Array}
 */
export function onCheckedAll(checkedList, isCheckAll, list, fieldName, that) {
  checkedList = [];
  list.forEach(item => {
    that.$set(item, '__checked', isCheckAll);
    if (isCheckAll) {
      checkedList.push(item[fieldName]);
    }
  });
  return checkedList
}

export function onCheckedOne(item, checkedList, fieldName) {
  if (item.__checked === true) {
    checkedList.push(item[fieldName]);
  } else {
    let index = checkedList.findIndex(c => c === item[fieldName]);
    checkedList.splice(index, 1);
  }
  return checkedList;
}
