// 列表设置序号
function setNum (arr, pageNum, pageSize) {
    if (!arr) return []
    let number = (pageNum - 1) * pageSize
    for (let item of arr) {
        let index = ++number
        item.num = index < 10 ? '0' + index : index
    }
    return arr
}
// 逗号拼接的字符串转数组
function strToArray (list, str, oldAttr, newAttr) {
    let result = []
    let strArr = str.split(',')
    list.forEach(element => {
        strArr.forEach(item => {
            if (item[oldAttr] === element[oldAttr]) {
                result.push(element[newAttr])
            }
        })
    })
    return result
}
// 遍历区域数组，组成树形
function makeReginTree (list) {
    let arr = []
    list.forEach(element => {
        if (element.level === 1) {
            element.children = []
            arr.push(element)
        }
    })
    arr.forEach(element => {
        element.children = list.filter(e => {
            return e.parentId === element.Id
        })
    })
    arr.forEach(element => {
        element.children.forEach(k => {
            k.children = list.filter(e => {
                return e.parentId === k.Id
            })
        })
    })
    // console.log(arr)
    return arr
}
// 遍历菜单数组，组成树形
function makeMenuTree (list) {
    let arr = []
    list.forEach(element => {
        if (element.type === 0) {
            element.children = []
            arr.push(element)
        }
    })
    arr.forEach(element => {
        element.children = list.filter(e => {
            return e.parentId === element.sysMenuId
        })
    })
    arr.forEach(element => {
        element.children.forEach(k => {
            k.children = list.filter(e => {
                return e.parentId === k.sysMenuId
            })
        })
    })
    return arr
}
// 校验
function validate (rule, value, callback) {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== this.ruleForm.alertPassword) {
        callback(new Error('两次输入密码不一致!'))
    } else {
        callback()
    }
}

// 处理返回价格和数字返回的数字
function addComma (str, currentIndex, result) {
    if (currentIndex === undefined) {
        currentIndex = str.length - 1
    }
    if (result === undefined) {
        result = ''
    }
    if (currentIndex < 0) {
        return result
    }
    result = str.charAt(currentIndex) + result
    if ((str.length - currentIndex) % 3 === 0 && currentIndex !== 0) {
        result = ',' + result
    }
    return addComma(str, currentIndex - 1, result)
}

// 车牌验证
function plateNum (str) {
    return /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[\u4E00-\u9FA5]{1}[A-Z]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(str)
}

// 判断字符串长度，汉字2个字符英文数字1个
function getByteLen (val) {
    var len = 0
    for (var i = 0; i < val.length; i++) {
        var length = val.charCodeAt(i)
        if (length >= 0 && length <= 128) {
            len += 1
        } else {
            len += 2
        }
    }
    return len
}

export {
    validate,
    setNum,
    strToArray,
    makeReginTree,
    makeMenuTree,
    addComma,
    plateNum,
    getByteLen
}
