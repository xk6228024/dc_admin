// 检查浏览器以及版本
function IEVersion () {
    let userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
    let isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
    let isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
    let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
    if (isIE) {
        let reIE = new RegExp('MSIE (\\d+\\.\\d+);')
        reIE.test(userAgent)
        let fIEVersion = parseFloat(RegExp['$1'])
        if (fIEVersion === 7) {
            return 7
        } else if (fIEVersion === 8) {
            return 8
        } else if (fIEVersion === 9) {
            return 9
        } else if (fIEVersion === 10) {
            return 10
        } else {
            return 6 // IE版本<=7
        }
    } else if (isEdge) {
        return 'edge' // edge
    } else if (isIE11) {
        return 11 // IE11
    } else {
        return -1 // 不是ie浏览器
    }
}
// this.$toReadCard({ deviceName: 'ZK', commPort: 'com3', deviceId: '1' })
// 读卡器方法obj {设备名称 deviceName，端口号 commPort，设备ID deviceId}
function toReadCard (obj) {
    // console.log(obj)
    let ieVersion = IEVersion()
    if (ieVersion === -1 || ieVersion < 9) {
        return {
            code: 404,
            title: '提示',
            content: '读卡功能仅浏览器兼容模式或IE浏览器！'
        }
    }
    if (!obj.commPort) {
        return {
            code: 400,
            title: '提示',
            content: '参数错误'
        }
    }
    // console.log('123456')
    let deviceName = obj.deviceName // 设备名称
    let commPort = obj.commPort // 端口号
    let deviceId = obj.deviceId // 设备ID
    if (deviceName === 'ZK') {
        // let objct = '<object style="position:absolute;top:0;" width="0" height="0" id="ZhongCheRfid" classid="clsid:FAF6299A-CA50-4D91-9F31-B8FB1D4E1164"></object>'
        // let camertDiv = document.getElementById('zk')
        // camertDiv.innerHTML = objct
        let resultInit = '1'
        // if (document.getElementById('zk').innerHTML) {
        //     // window.ZhongCheRfid.zc_setRFIDType('1')
        //     console.log(1112222)
        // } else {
        //     window.ZhongCheRfid.zc_setRFIDType('1')
        //     window.ZhongCheRfid.initRfidPlugin(commPort, deviceId)
        // }
        window.ZhongCheRfid.zc_setRFIDType('1')
        window.ZhongCheRfid.initRfidPlugin(commPort, deviceId)
        // alert(window.ZhongCheRfid.readCard())
        if (resultInit === '1') {
            try {
                let cardnumber = window.ZhongCheRfid.readCard()
                // alert(cardnumber)
                console.log(cardnumber, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                if (cardnumber.indexOf('000000000000') !== -1) {
                    return {
                        code: 100,
                        title: '提示',
                        content: '读取卡号失败，请查看读卡配置信息是否正确后重试！'
                    }
                } else if (cardnumber === -1) {
                    return {
                        code: 100,
                        title: '提示',
                        content: '连接读卡器失败，请查看读卡配置信息是否正确后重试！'
                    }
                } else if (!cardnumber) {
                    return {
                        code: 100,
                        title: '提示',
                        content: '读取卡号失败，请查看读卡配置信息是否正确后重试！'
                    }
                } else {
                    // console.dir(window.ZhongCheRfid)
                    console.log(cardnumber, '111')
                    // document.getElementById('zk').innerHTML = '1111111111'
                    window.ZhongCheRfid.deviceDisconnect()
                    console.log(cardnumber, '2222')
                    return {
                        code: 200,
                        content: cardnumber
                    }
                }
            } catch (e) {
                console.log(e, 'error')
                return {
                    code: 100,
                    title: '提示',
                    content: '读取卡号失败，请查看读卡配置信息是否正确后重试！'
                }
            }
        } else {
            return {
                code: 100,
                title: '提示',
                content: '连接读卡器失败！'
            }
        }
    } else {
        console.log('JT')
        let objct = '<object code="com/ycxc/vtsp/plugin/main/Main.class"' +
        'codebase="http://nn.qcfxp.com/vtspWebPlugins/" name="ZhongChePlugin1"' +
        'archive="jna.jar,examples.jar,vtsp-webPlugins-1.0.jar"' +
        'width="0" height="0"' +
        'style="position: absolute;left:0; z-index: 10;top:0;">' +
        '<param name="ip" value=' + '>' +
        '<param name="channel" value=' + '>' +
        '<param name="userName" value=' + '>' +
        '<param name="password" value=' + '>' +
        '<param name="port" value=' + '>' +
        '<param name="commPort" value=' + commPort + '>' +
        '<param id="deviceId" name=' + deviceId + 'value=' + '></object>'
        let camertDiv = document.getElementById('JieTong')
        camertDiv.innerHTML = objct
        console.log(document.ZhongChePlugin1)
        document.ZhongChePlugin1.initParam('', '', '', '', '', commPort, deviceId, deviceName, '1')
        console.log(document.ZhongChePlugin1)
        let result = document.ZhongChePlugin1.initRfidPlugin() // 初始化
        if (result === 1) {
            console.log(21)
            // 连接成功,读取TID
            let tid = document.ZhongChePlugin1.readCard()
            console.log(tid)
            if (tid.indexOf('000000000000') !== -1) {
                return {
                    code: 100,
                    title: '提示',
                    content: '读取卡号失败，请查看读卡配置信息是否正确后重试！'
                }
            } else if (tid === '-1') {
                return {
                    code: 100,
                    title: '提示',
                    content: '读取卡号失败，请查看读卡配置信息是否正确后重试！'
                }
            } else {
            // 读到tid卡，根据tid卡查询车辆表信息
                // console.log(tid, 'readCardNums')
                return {
                    code: 200,
                    content: tid
                }
            }
            // document.ZhongChePlugin1.deviceDisconnect()
            // return {
            //     code: 200,
            //     data: tid
            // }
        } else {
            console.log(22)
            document.ZhongChePlugin1.deviceDisconnect()
            return {
                code: 100,
                title: '提示',
                content: '读取卡号失败，请查看读卡配置信息是否正确后重试！'
            }
        }
    }
}
export default toReadCard
