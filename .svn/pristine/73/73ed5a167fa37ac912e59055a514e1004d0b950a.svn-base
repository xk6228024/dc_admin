import vm from '../main.js'

// 记录日志
function setErrorLog (type, err, path, title, time, remark = '') {
    console.error(err)
    if (typeof err === 'object') {
        err = err.stack
    }
    let errorLog
    if (localStorage.errorLog) {
        try {
            errorLog = JSON.parse(localStorage.errorLog)
        } catch (e) {
            errorLog = []
        }
    } else {
        errorLog = []
    }
    // 防止重复
    for (let i = 0; i < errorLog.length; i++) {
        if (errorLog[i].err === err && errorLog[i].path === path) {
            return
        }
    }
    errorLog.push({
        type,
        err,
        path,
        title,
        time,
        remark
    })
    localStorage.errorLog = JSON.stringify(errorLog)
}

// 初始化记录清除3天前的日志
function initErrorLog () {
    if (localStorage.errorLog) {
        let startTime = new Date() - 259200000
        let errorLog = JSON.parse(localStorage.errorLog)
        errorLog = errorLog.filter(item => {
            return item.time > startTime
        })
        localStorage.errorLog = JSON.stringify(errorLog)
    } else {
        localStorage.errorLog = '[]'
    }
    keyboardShortcut()
}

function keyboardShortcut () {
    document.onkeydown = function (e) {
        const keyCode = e.keyCode || e.which || e.charCode
        const ctrlKey = e.ctrlKey || e.metaKey
        if (ctrlKey && keyCode === 123) {
            vm.$router.push('/errorLog')
        }
    }
}

initErrorLog()

// 清除日志
function clearLog () {
    localStorage.errorLog = '[]'
}

export {
    setErrorLog,
    clearLog
}
