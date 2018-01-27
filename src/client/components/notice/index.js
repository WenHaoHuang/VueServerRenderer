/**
 * @author : wenhao.huang
 * @date   : 2018/1/10
 */

import message from './message.vue';
import alert from './alert.vue';
import confirm from './confirm.vue';

const notify = {
    install:function(Vue){
        Vue.prototype.$msg = function(options){
            let temple = Vue.extend(message);
            let $vm = new temple();
            let tpl = $vm.$mount().$el;
            document.body.appendChild(tpl);
            if(typeof options === 'string'){
                $vm.text = options;
            }
            else if(typeof options === 'object'){
                Object.assign($vm,options);
            }
            $vm.show = true;
            setTimeout(function(){
                $vm.show = false;
            },$vm.delay || 1500);
        }
        Vue.prototype.$alert = function(options){
            let temple = Vue.extend(alert);
            let $vm = new temple();
            let tpl = $vm.$mount().$el;
            document.body.appendChild(tpl);
            if(typeof options === 'string'){
                $vm.content = options;
            }
            else if(typeof options === 'object'){
                Object.assign($vm,options);
            }
            $vm.show = true;
        };
        Vue.prototype.$confirm = function(options){
            let temple = Vue.extend(confirm);
            let $vm = new temple();
            let tpl = $vm.$mount().$el;
            document.body.appendChild(tpl);
            if(typeof options === 'string'){
                $vm.content = options;
            }
            else if(typeof options === 'object'){
                Object.assign($vm,options);
            }
            $vm.show = true;
        };
    }
};
export default notify;
