/**
 * @author: wenhao.huang
 * @date:   2017/12/23
 */

'use strict'

import * as filters from './filters';

const filter = {
    install:(Vue)=>{
        Object.keys(filters).forEach(key=>{
            Vue.filter(key,filters[key]);
        });
    }
};

export default filter;
