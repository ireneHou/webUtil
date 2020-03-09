/**
 * 当前日期时间格式化
 * @param {String,Date} nowD 
 * 
 * @return {Object} 2020-01-01
 */
// 日期过滤
function DateFilter(nowD){
  if(typeof nowD === 'string'){
      if(nowD.indexOf('.')!==-1){
          nowD = nowD.substr(0,nowD.indexOf('.')); // 预防日期转换出现8小时时间差，把其他的都删除
      }
      nowD = nowD.replace(/-/g,"/").replace('T',' '); // iOS不支持2020-02-02的日期转换，所以替换未2020/02/02
      nowD = nowD.replace(/[^\d :\/]/g,""); // 非数字、空格、/、-的字符串均被清空
  }
  return nowD;
};
// 日期格式化
function FormatTime(nowD) {
  if (!nowD) {
    return null;
  }
  // 日期过滤
  if(typeof nowD === 'string'){
    nowD = DateFilter(nowD);
  }
  nowD = new Date(nowD);
  let YY = nowD.getFullYear(),
    MM = nowD.getMonth() + 1,
    DD = nowD.getDate(),
    hh = nowD.getHours(),
    mm = nowD.getMinutes(),
    ss = nowD.getSeconds();
  return {
    YY: YY,
    MM: ("00" + MM).substr(("" + MM).length),
    DD: ("00" + DD).substr(("" + DD).length),
    hh: ("00" + hh).substr(("" + hh).length),
    mm: ("00" + mm).substr(("" + mm).length),
    ss: ("00" + ss).substr(("" + ss).length)
  };
}

/**
 * 时间格式化
 * @param {String,Date} dateStr 
 * 
 * @return {String} 2020-01-01
 * @test console.log(FormatOfDate('2012-02-01'))
 */
function FormatOfDate(dateStr) {
  let dates = FormatTime(dateStr)
  return dates.YY + '-' + dates.MM + '-' + dates.DD;
}

/**
 * 将"2019-04-07T16:00:00.000+0000"这种格式的时间转化为正常格式  
 * @param {String,Date} dateStr 
 * 
 * @return {String} 2019-04-08 00:00:00
 * @test console.log(FormatOfDateTime('2020-02-12T22:37:31.498+0000'))
 * @test console.log(FormatOfDateTime('2020-02-10_Check'))
 */
function FormatOfDateTime(dateStr) {
  let times = FormatTime(dateStr)
  return times.YY + '-' + times.MM + '-' + times.DD + ' ' + times.hh + ':' + times.mm + ':' + times.ss;
}
