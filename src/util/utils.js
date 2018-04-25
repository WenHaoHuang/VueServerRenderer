/**
 * @author : wenhao.huang
 * @date   : 2018/3/20
 */
module.exports = {
    // 根据当前时间戳
    getNowStamp() {
        return Math.floor((+ new Date())/1000)
    },
    parseBase64(str) {
        const b = new Buffer(str, 'base64')
        return b.toString();
    },
    format(timestamp,fmt){
        fmt = (fmt == undefined) ? 'yyyy-MM-dd hh:mm:ss' : fmt;
        if(timestamp == undefined){
            timestamp = new Date().getTime();
        } else if(String(timestamp).length == 10){
            timestamp = timestamp*1000;
        }
        timestamp = new Date(timestamp);
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (timestamp.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        const o = {
            'M+': timestamp.getMonth() + 1,
            'd+': timestamp.getDate(),
            'h+': timestamp.getHours(),
            'm+': timestamp.getMinutes(),
            's+': timestamp.getSeconds()
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + ''
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
            }
        }
        return fmt;
    },
    isMoney(str){
        if(/(^[1-9]([0-9]+)?(\.[0-9]{0,2})?$)|(^(0){1}$)|(^(0)\.$)|(^[0-9]\.[0-9]([0-9])?$)/.test(str)){
            return true;
        }
        return false;
    }
}
