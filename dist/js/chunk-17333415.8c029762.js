(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17333415"],{"1af6":function(e,t,a){var s=a("63b6");s(s.S,"Array",{isArray:a("9003")})},"20fd":function(e,t,a){"use strict";var s=a("d9f6"),r=a("aebd");e.exports=function(e,t,a){t in e?s.f(e,t,r(0,a)):e[t]=a}},2375:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav-bar",{attrs:{list:e.nav}}),a("section",{staticClass:"content-container"},[a("section",[a("el-form",{ref:"conditionForm",attrs:{inline:!0,model:e.conditionForm}},[a("el-form-item",[a("el-select",{attrs:{placeholder:e.constants.LABEL_SELECT_GRAGE},on:{change:e.changeName},model:{value:e.conditionForm.evaluation_name_id,callback:function(t){e.$set(e.conditionForm,"evaluation_name_id",t)},expression:"conditionForm.evaluation_name_id"}},e._l(e.names,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",[a("el-select",{attrs:{placeholder:e.constants.LABEL_SELECT_DEPARTMENT},on:{change:e.changeDepartment},model:{value:e.evaluation_id,callback:function(t){e.evaluation_id=t},expression:"evaluation_id"}},e._l(e.departments,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e}})}),1)],1)],1)],1),a("section",{staticClass:"report-echart"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("h1",[a("span",[e._v(e._s(e.currentDepartment))]),e._v(e._s(e.constants.LABEL_REPORT_PROGRESS)+"\n          ")]),a("el-row",[a("el-col",{staticClass:"loading-container",attrs:{span:12}},[a("echart-pie",{attrs:{title:e.constants.LABEL_SELF_PROGRESS,data:e.progressPieSelf,width:e.width}})],1),a("el-col",{staticClass:"loading-container",attrs:{span:12}},[a("echart-pie",{attrs:{title:e.constants.LABEL_SUP_PROGRESS,data:e.progressPieSuperior,width:e.width}})],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:12}},[a("h1",[a("span",[e._v(e._s(e.currentDepartment))]),e._v(e._s(e.constants.LABEL_REPORT_AVERAGE)+"\n              ")])]),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("span",{staticStyle:{color:"#21c1a5"}},[e._v("● "+e._s(e.constants.LABEL_SELF)+"   ")]),a("span",{staticStyle:{color:"#5399e1"}},[e._v("● "+e._s(e.constants.LABEL_SUP))])])],1)],1),a("section",{staticClass:"loading-container"},[a("echart-bar-average-single",{attrs:{selfRates:e.selfRates,supRates:e.supRates,width:e.width,id:"echart-bar1"}})],1)],1)],1)],1),3!=e.department_level?a("section",{staticClass:"report-echart"},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:12}},[a("h1",[e._v(e._s(e.constants.LABEL_REPORT_RATE))])]),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tabs",{staticClass:"echart-tabs",attrs:{type:"card"},on:{"tab-click":e.changeBarRate},model:{value:e.rateBarActive,callback:function(t){e.rateBarActive=t},expression:"rateBarActive"}},[a("el-tab-pane",{attrs:{label:e.constants.LABEL_SELF,name:"self"}}),a("el-tab-pane",{attrs:{label:e.constants.LABEL_SUP,name:"sup"}})],1)],1)],1)],1),a("section",{staticClass:"loading-container"},[a("echart-bar-rate",{attrs:{rateBar:e.rateBar,completionBuNams:e.completionBuNams,width:e.width}})],1)],1):e._e(),1==e.department_level?a("section",{staticClass:"report-echart"},[a("h1",[e._v(e._s(e.constants.LABEL_REPORT_AVERAGE_ALL))]),a("section",{staticClass:"loading-container"},[a("echart-bar-average-all",{attrs:{selfAverage:e.selfAverageAll,supAverage:e.supAverageAll,departmentsAverage:e.departmentsAverageAll,yMin:e.yMinAll,yMax:e.yMaxAll,yInterval:e.yIntervalAll,width:e.width}})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("span",{staticClass:"color-mark"},[a("span",{staticStyle:{color:"#21c1a5"}},[e._v("● "+e._s(e.constants.LABEL_SELF)+"   ")]),a("span",{staticStyle:{color:"#5399e1"}},[e._v("● "+e._s(e.constants.LABEL_SUP))])])])],1):e._e(),1==e.department_level?a("section",{staticClass:"report-echart"},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:12}},[a("h1",[e._v(e._s(e.constants.LABEL_REPORT_AVERAGE_SINGLE))])]),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tabs",{staticClass:"echart-tabs",attrs:{type:"card"},on:{"tab-click":e.changeBarAverage},model:{value:e.averageBarActive,callback:function(t){e.averageBarActive=t},expression:"averageBarActive"}},e._l(e.activeTabs,function(e){return a("el-tab-pane",{key:e.name,attrs:{label:e.label,name:e.name}})}),1)],1)],1)],1),a("section",{staticClass:"loading-container"},[a("echart-bar-average-all",{attrs:{selfAverage:e.selfAverageEach,supAverage:e.supAverageEach,departmentsAverage:e.departmentsAverageEach,yMin:e.yMinEach,yMax:e.yMaxEach,yInterval:e.yIntervalEach,width:e.width}})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("span",{staticClass:"color-mark"},[a("span",{staticStyle:{color:"#21c1a5"}},[e._v("● "+e._s(e.constants.LABEL_SELF)+"   ")]),a("span",{staticStyle:{color:"#5399e1"}},[e._v("● "+e._s(e.constants.LABEL_SUP))])])])],1):e._e(),1==e.department_level?a("section",{staticClass:"report-echart"},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:12}},[a("h1",[e._v(e._s(e.constants.LABEL_REPORT_NUMBER))])]),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tabs",{staticClass:"echart-tabs",attrs:{type:"card"},on:{"tab-click":e.changeLineNumbers},model:{value:e.numberLineActive,callback:function(t){e.numberLineActive=t},expression:"numberLineActive"}},e._l(e.activeTabs,function(e){return a("el-tab-pane",{key:e.name,attrs:{label:e.label,name:e.name}})}),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("section",{staticClass:"loading-container"},[a("echart-line-number",{attrs:{numbers:e.selfNumbers,color:e.selfLineColor,width:e.width}})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("span",{staticClass:"color-mark"},[a("span",{staticStyle:{color:"#21c1a5"}},[e._v("● "+e._s(e.constants.LABEL_SELF))])])])],1),a("el-col",{attrs:{span:12}},[a("section",{staticClass:"loading-container"},[a("echart-line-number",{attrs:{isSelf:!1,numbers:e.supNumbers,color:e.supLineColor,width:e.width}})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("span",{staticClass:"color-mark"},[a("span",{staticStyle:{color:"#5399e1"}},[e._v("● "+e._s(e.constants.LABEL_SUP))])])])],1)],1)],1):e._e()])],1)},r=[],n=(a("7f7f"),a("75fc")),c=(a("ac6a"),a("8615"),a("38fb")),i=a("fea5"),o=a("dedd"),l=a("372d"),u={components:{"nav-bar":function(){return a.e("chunk-7ec067ee").then(a.bind(null,"3208"))},"echart-pie":Object(l["a"])(Promise.all([a.e("chunk-c32493a8"),a.e("chunk-77496ec0"),a.e("chunk-339ce8bc")]).then(a.bind(null,"f889"))),"echart-bar-average-single":Object(l["a"])(Promise.all([a.e("chunk-c32493a8"),a.e("chunk-7b397eba"),a.e("chunk-168052b5")]).then(a.bind(null,"a8b2"))),"echart-bar-rate":Object(l["a"])(Promise.all([a.e("chunk-c32493a8"),a.e("chunk-7b397eba"),a.e("chunk-7c382e97"),a.e("chunk-497e8350")]).then(a.bind(null,"a2f4"))),"echart-bar-average-all":Object(l["a"])(Promise.all([a.e("chunk-c32493a8"),a.e("chunk-7b397eba"),a.e("chunk-7c382e97"),a.e("chunk-20ed347e")]).then(a.bind(null,"16a4"))),"echart-line-number":Object(l["a"])(Promise.all([a.e("chunk-c32493a8"),a.e("chunk-7b397eba"),a.e("chunk-91dd50c6")]).then(a.bind(null,"4702")))},data:function(){return{department_level:"",nav:[{label:c["Ib"],active:!0}],constants:{LABEL_REPORT_PROGRESS:c["mc"],LABEL_REPORT_AVERAGE:c["ic"],LABEL_REPORT_RATE:c["nc"],LABEL_REPORT_AVERAGE_ALL:c["jc"],LABEL_REPORT_AVERAGE_SINGLE:c["kc"],LABEL_REPORT_NUMBER:c["lc"],LABEL_SELF:c["sc"],LABEL_SUP:c["vc"],LABEL_SELF_PROGRESS:c["tc"],LABEL_SUP_PROGRESS:c["wc"],LABEL_SELECT_DEPARTMENT:c["pc"],LABEL_SELECT_GRAGE:c["rc"]},permissions:[],conditionForm:{evaluation_name_id:"",evaluation_id:""},names:[],departments:[],currentDepartment:"",evaluationId:{},progressPieSelf:[{value:0,name:""},{value:0,name:""}],progressPieSuperior:[{value:0,name:""},{value:0,name:""}],selfRates:[],supRates:[],selfRateBar:[],superiorRateBar:[],rateBar:[],completionBuNams:[],rateBarActive:"self",selfAverageAll:[],supAverageAll:[],departmentsAverageAll:[],yMinAll:0,yMaxAll:20,yIntervalAll:4,selfAverageA:[],selfAverageB:[],selfAverageC:[],selfAverageD:[],selfAverageEach:[],supAverageA:[],supAverageB:[],supAverageC:[],supAverageD:[],supAverageEach:[],departmentsAverageEach:[],yMinEach:0,yMaxEach:5,yIntervalEach:1,activeTabs:[{label:c["ed"],name:"first"},{label:c["gd"],name:"second"},{label:c["fd"],name:"third"},{label:c["dd"],name:"fourth"}],averageBarActive:"first",selfNumbersA:[],selfNumbersB:[],selfNumbersC:[],selfNumbersD:[],selfNumbers:[],selfLineColor:"#3ed6bf",supNumbersA:[],supNumbersB:[],supNumbersC:[],supNumbersD:[],supNumbers:[],supLineColor:"#5399e1",numberLineActive:"first",width:0}},computed:{evaluation_id:{get:function(){return this.evaluationId},set:function(e){this.evaluationId=e,this.conditionForm=Object.assign({},this.conditionForm,{evaluation_id:e.value})}}},created:function(){this.permissions=JSON.parse(localStorage.getItem("permissions")||"[]"),this.getGrades()},mounted:function(){this.resize()},methods:{resize:function(){var e=this;window.onresize=function(){e.width=document.body.clientWidth}},getGrades:function(){var e=this;Object(i["r"])().then(function(t){t.evaluations.map(function(e){e.label=e.evaluation_name,e.value=e.id}),e.names=t.evaluations,e.conditionForm=Object.assign({},e.conditionForm,{evaluation_name_id:t.evaluations[0].value}),e.getDepartments(t.evaluations[0].id)}).catch(function(e){})},getDepartments:function(e){var t=this;return Object(i["p"])(e).then(function(e){e.map(function(e){e.label=e.department_name,e.value=e.id}),t.departments=e,t.conditionForm=Object.assign({},t.conditionForm,{evaluation_id:e[0].value}),t.evaluationId=e[0],t.currentDepartment=e[0].label,t.getReports()}).catch(function(e){})},getReports:function(){var e=this;Object(i["s"])(Object(o["a"])(this.conditionForm)).then(function(t){e.progressPieSelf=[{value:t.process.self,name:"已完成"+t.process.self+"人"},{value:t.process.count-t.process.self,name:"未完成"+(t.process.count-t.process.self)+"人"}],e.progressPieSuperior=[{value:t.process.superior,name:"已完成"+t.process.superior+"人"},{value:t.process.count-t.process.superior,name:"未完成"+(t.process.count-t.process.superior)+"人"}],e.selfRates=Object.values(t.avg.self),e.supRates=Object.values(t.avg.superior),e.selfRateBar=[],e.superiorRateBar=[],e.completionBuNams=[],t.finish.forEach(function(t){e.selfRateBar.push(t.count?t.self_status/t.count:0),e.superiorRateBar.push(t.count?t.superior_status/t.count:0),e.completionBuNams.push(t.department_name)}),e.rateBarActive="self",e.rateBar=Object(n["a"])(e.selfRateBar);var a=[],s=[],r=[];t.total.self.forEach(function(e){a.push(e.score),r.push(e.department_name)}),t.total.superior.forEach(function(e){s.push(e.score)}),e.selfAverageAll=a,e.supAverageAll=s,e.departmentsAverageAll=r;var c=[];e.selfAverageA=[],e.selfAverageB=[],e.selfAverageC=[],e.selfAverageD=[],t.question.self.forEach(function(t){e.selfAverageA.push(t.a),e.selfAverageB.push(t.b),e.selfAverageC.push(t.c),e.selfAverageD.push(t.d),c.push(t.department_name)}),e.supAverageA=[],e.supAverageB=[],e.supAverageC=[],e.supAverageD=[],t.question.superior.forEach(function(t){e.supAverageA.push(t.a),e.supAverageB.push(t.b),e.supAverageC.push(t.c),e.supAverageD.push(t.d)}),e.selfAverageEach=Object(n["a"])(e.selfAverageA),e.supAverageEach=Object(n["a"])(e.supAverageA),e.departmentsAverageEach=c,e.averageBarActive="first",t.number.self.forEach(function(t,a){0==a?e.selfNumbersA=Object.values(t):1==a?e.selfNumbersB=Object.values(t):2==a?e.selfNumbersC=Object.values(t):3==a&&(e.selfNumbersD=Object.values(t))}),t.number.superior.forEach(function(t,a){0==a?e.supNumbersA=Object.values(t):1==a?e.supNumbersB=Object.values(t):2==a?e.supNumbersC=Object.values(t):3==a&&(e.supNumbersD=Object.values(t))}),e.selfNumbers=Object(n["a"])(e.selfNumbersA),e.supNumbers=Object(n["a"])(e.supNumbersA),e.numberLineActive="first",e.department_level=t.department_level}).catch(function(e){})},changeName:function(e){this.getDepartments(e)},changeDepartment:function(e){this.conditionForm=Object.assign({},this.conditionForm,{evaluation_id:e.value}),this.currentDepartment=e.label,this.getReports()},changeBarRate:function(e){"self"==e.name?this.rateBar=this.selfRateBar.concat():this.rateBar=this.superiorRateBar.concat()},changeBarAverage:function(e){"first"==e.name?(this.selfAverageEach=Object(n["a"])(this.selfAverageA),this.supAverageEach=Object(n["a"])(this.supAverageA)):"second"==e.name?(this.selfAverageEach=Object(n["a"])(this.selfAverageB),this.supAverageEach=Object(n["a"])(this.supAverageB)):"third"==e.name?(this.selfAverageEach=Object(n["a"])(this.selfAverageC),this.supAverageEach=Object(n["a"])(this.supAverageC)):"fourth"==e.name&&(this.selfAverageEach=Object(n["a"])(this.selfAverageD),this.supAverageEach=Object(n["a"])(this.supAverageD))},changeLineNumbers:function(e){"first"==e.name?(this.selfNumbers=Object(n["a"])(this.selfNumbersA),this.supNumbers=Object(n["a"])(this.supNumbersA)):"second"==e.name?(this.selfNumbers=Object(n["a"])(this.selfNumbersB),this.supNumbers=Object(n["a"])(this.supNumbersB)):"third"==e.name?(this.selfNumbers=Object(n["a"])(this.selfNumbersC),this.supNumbers=Object(n["a"])(this.supNumbersC)):"fourth"==e.name&&(this.selfNumbers=Object(n["a"])(this.selfNumbersD),this.supNumbers=Object(n["a"])(this.supNumbersD))}}},f=u,p=(a("47c3"),a("2877")),v=Object(p["a"])(f,s,r,!1,null,"3783cde2",null);t["default"]=v.exports},3702:function(e,t,a){var s=a("481b"),r=a("5168")("iterator"),n=Array.prototype;e.exports=function(e){return void 0!==e&&(s.Array===e||n[r]===e)}},"372d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},r=[],n={},c=n,i=(a("ee47"),a("2877")),o=Object(i["a"])(c,s,r,!1,null,"6c517b7e",null),l=o.exports;a.d(t,"a",function(){return u});var u=function(e){return function(){return{component:e,loading:l,delay:0}}}},"40c3":function(e,t,a){var s=a("6b4c"),r=a("5168")("toStringTag"),n="Arguments"==s(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(a){}};e.exports=function(e){var t,a,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=c(t=Object(e),r))?a:n?s(t):"Object"==(i=s(t))&&"function"==typeof t.callee?"Arguments":i}},"47c3":function(e,t,a){"use strict";var s=a("deba"),r=a.n(s);r.a},"4ee1":function(e,t,a){var s=a("5168")("iterator"),r=!1;try{var n=[7][s]();n["return"]=function(){r=!0},Array.from(n,function(){throw 2})}catch(c){}e.exports=function(e,t){if(!t&&!r)return!1;var a=!1;try{var n=[7],i=n[s]();i.next=function(){return{done:a=!0}},n[s]=function(){return i},e(n)}catch(c){}return a}},"504c":function(e,t,a){var s=a("0d58"),r=a("6821"),n=a("52a7").f;e.exports=function(e){return function(t){var a,c=r(t),i=s(c),o=i.length,l=0,u=[];while(o>l)n.call(c,a=i[l++])&&u.push(e?[a,c[a]]:c[a]);return u}}},"549b":function(e,t,a){"use strict";var s=a("d864"),r=a("63b6"),n=a("241e"),c=a("b0dc"),i=a("3702"),o=a("b447"),l=a("20fd"),u=a("7cd6");r(r.S+r.F*!a("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,f,p=n(e),v="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,m=void 0!==b,d=0,A=u(p);if(m&&(b=s(b,h>2?arguments[2]:void 0,2)),void 0==A||v==Array&&i(A))for(t=o(p.length),a=new v(t);t>d;d++)l(a,d,m?b(p[d],d):p[d]);else for(f=A.call(p),a=new v;!(r=f.next()).done;d++)l(a,d,m?c(f,b,[r.value,d],!0):r.value);return a.length=d,a}})},"54a1":function(e,t,a){a("6c1c"),a("1654"),e.exports=a("95d5")},"75fc":function(e,t,a){"use strict";var s=a("a745"),r=a.n(s);function n(e){if(r()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var c=a("774e"),i=a.n(c),o=a("c8bb"),l=a.n(o);function u(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){return n(e)||u(e)||f()}a.d(t,"a",function(){return p})},"774e":function(e,t,a){e.exports=a("d2d5")},"7cd6":function(e,t,a){var s=a("40c3"),r=a("5168")("iterator"),n=a("481b");e.exports=a("584a").getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||n[s(e)]}},8615:function(e,t,a){var s=a("5ca1"),r=a("504c")(!1);s(s.S,"Object",{values:function(e){return r(e)}})},"95d5":function(e,t,a){var s=a("40c3"),r=a("5168")("iterator"),n=a("481b");e.exports=a("584a").isIterable=function(e){var t=Object(e);return void 0!==t[r]||"@@iterator"in t||n.hasOwnProperty(s(t))}},"9f9e":function(e,t,a){},a745:function(e,t,a){e.exports=a("f410")},b0dc:function(e,t,a){var s=a("e4ae");e.exports=function(e,t,a,r){try{return r?t(s(a)[0],a[1]):t(a)}catch(c){var n=e["return"];throw void 0!==n&&s(n.call(e)),c}}},c8bb:function(e,t,a){e.exports=a("54a1")},d2d5:function(e,t,a){a("1654"),a("549b"),e.exports=a("584a").Array.from},deba:function(e,t,a){},dedd:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a("456d"),a("ac6a");var s=function(e){var t={};return Object.keys(e).filter(function(t){return void 0!==e[t]&&""!==e[t]}).forEach(function(a){t[a]=e[a]}),t}},ee47:function(e,t,a){"use strict";var s=a("9f9e"),r=a.n(s);r.a},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray}}]);