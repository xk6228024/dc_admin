// 正则替换函数
function replaceReg (s, e, n, str) {
    var sReg = new RegExp(s + '+', 'i')
    var tReg = new RegExp(s, 'i')
    var mReg = new RegExp(s + '{1,' + n + '}', 'i')
    return str.replace(sReg, (tReg.test(str) && e.substr(e.length - str.match(mReg)[0].length)) || '')
}

/**
 * 时间戳格式转换
 * @param  {[String]} 输入 'yyyy-mm-dd hh:ff:ss:ccc' 返回时间格式2018-08-01 20:11:33:654
 * @param  {[Number]} 时间戳
 *
 * 符号可用任意字符代替
 */
function filterTime (time, str) {
    if (typeof time === 'string' && time.indexOf('-') !== -1) {
        return time
    }
    try {
        time = time - 0
    } catch (e) {
        console.log(e)
    }
    if (!time || isNaN(time)) {
        return ''
    }
    var date = new Date(time)
    str = replaceReg('y', date.getFullYear() + '', 4, str)
    str = replaceReg('m', date.getMonth() + 1 > 10 ? date.getMonth() + 1 + '' : '0' + (date.getMonth() + 1), 2, str)
    str = replaceReg('d', date.getDate() > 10 ? date.getDate() + '' : '0' + date.getDate(), 2, str)
    str = replaceReg('h', date.getHours() > 10 ? date.getHours() + '' : '0' + date.getHours(), 2, str)
    str = replaceReg('f', date.getMinutes() > 10 ? date.getMinutes() + '' : '0' + date.getMinutes(), 2, str)
    str = replaceReg('s', date.getSeconds() > 10 ? date.getSeconds() + '' : '0' + date.getSeconds(), 2, str)
    str = replaceReg('c', date.getMilliseconds() + '', 3, str)
    return str
}

// 当日期格式为7/8位数字时添加横杠进行转换
function filterStrTime (str) {
    var reg = /^(\d{4})(\d{1,2})(\d{2})$/
    return (reg.test(str) && str.replace(reg, '$1-$2-$3')) || ''
}

// 获取指定月份的第一天和最后一天，不传则获取当月
function getSameMonth (time) {
    var date = time ? new Date(time) : new Date()
    return {
        firstDay: new Date(date.getFullYear(), date.getMonth(), 1) - 0,
        lastDay: new Date(date.getFullYear(), date.getMonth() + 1, 0) - 0
    }
}

// 获取指定年份的第一天和最后一天，不传则获取今年
function getSameYear (time) {
    var date = time ? new Date(time) : new Date()
    return {
        firstDay: new Date(date.getFullYear(), 0, 1) - 0,
        lastDay: new Date(date.getFullYear(), 12, 0) - 0
    }
}

// 获取指定日期的星期一和星期天, 不传则获取本周
function getSameWeek (time) {
    var date = time ? new Date(time) : new Date()
    return {
        firstDay: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1, 0, 0, 0) - 0,
        lastDay: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7 - date.getDay(), 0, 0, 0) - 0
    }
}

export {
    filterTime,
    filterStrTime,
    getSameMonth,
    getSameYear,
    getSameWeek
}
