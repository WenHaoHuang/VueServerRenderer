// Created by huangwenhao on 2018/3/28.

exports.format = (timestamp, fmt) => {
    fmt = (fmt == undefined) ? 'yyyy-MM-dd hh:mm:ss' : fmt;
    if (timestamp == undefined || timestamp == '') {
        timestamp = new Date().getTime();
    } else if (String(timestamp).length < 13) {
        timestamp = timestamp * 1000;
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
}

exports.numFixed = (value, length) => {
    length = (length == undefined) ? 2 : length
    if(!value) return '0.0'
    if(typeof value != 'number'){
        value = Number(value)
    }
    value = value.toFixed(length)
    return value;
}

exports.formatDur = (value) =>{
    if(!value) return ''
    return parseInt(value)
}
