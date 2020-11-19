import Vue from 'vue'
import alert from '../../components/MyAlert'

let ConfirmConstructor = Vue.extend(alert)

let myAlert = text => {
    return new Promise((resolve, reject) => {
        let confirmDom = new ConfirmConstructor({
            el: document.createElement('div')
        })
        document.body.appendChild(confirmDom.$el)
        confirmDom.alert = true
        text.type = text.type || 'confirm'
        confirmDom.text = text
        confirmDom.ok = function (data) {
            resolve(data)
            confirmDom.alert = false
            setTimeout(() => {
                document.body.removeChild(confirmDom.$el)
            }, 500)
        }
        confirmDom.close = function (err) {
            reject(err)
            confirmDom.alert = false
            setTimeout(() => {
                document.body.removeChild(confirmDom.$el)
            }, 500)
        }
    })
}

export default myAlert
