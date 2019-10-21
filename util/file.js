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
