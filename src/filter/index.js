// Created by huangwenhao on 2018/3/28.

import * as filters from './filters';

const filter = {
    install:(Vue)=>{
        Object.keys(filters).forEach(key=>{
            Vue.filter(key,filters[key]);
        });
    }
};

export default filter;
