(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-456b9c4e"],{"11e9":function(e,t,a){var n=a("52a7"),r=a("4630"),o=a("6821"),l=a("6a99"),i=a("69a8"),s=a("c69a"),c=Object.getOwnPropertyDescriptor;t.f=a("9e1e")?c:function(e,t){if(e=o(e),t=l(t,!0),s)try{return c(e,t)}catch(a){}if(i(e,t))return r(!n.f.call(e,t),e[t])}},"5d58":function(e,t,a){e.exports=a("d8d6")},"5dbc":function(e,t,a){var n=a("d3f4"),r=a("8b97").set;e.exports=function(e,t,a){var o,l=t.constructor;return l!==a&&"function"==typeof l&&(o=l.prototype)!==a.prototype&&n(o)&&r&&r(e,o),e}},"67bb":function(e,t,a){e.exports=a("f921")},7618:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a("5d58"),r=a.n(n),o=a("67bb"),l=a.n(o);function i(e){return i="function"===typeof l.a&&"symbol"===typeof r.a?function(e){return typeof e}:function(e){return e&&"function"===typeof l.a&&e.constructor===l.a&&e!==l.a.prototype?"symbol":typeof e},i(e)}function s(e){return s="function"===typeof l.a&&"symbol"===i(r.a)?function(e){return i(e)}:function(e){return e&&"function"===typeof l.a&&e.constructor===l.a&&e!==l.a.prototype?"symbol":i(e)},s(e)}},"8b97":function(e,t,a){var n=a("d3f4"),r=a("cb7c"),o=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return o(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:o}},9093:function(e,t,a){var n=a("ce10"),r=a("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},a959:function(e,t,a){"use strict";var n=a("c8c8"),r=a.n(n);r.a},aa77:function(e,t,a){var n=a("5ca1"),r=a("be13"),o=a("79e5"),l=a("fdef"),i="["+l+"]",s="​",c=RegExp("^"+i+i+"*"),p=RegExp(i+i+"*$"),u=function(e,t,a){var r={},i=o(function(){return!!l[e]()||s[e]()!=s}),c=r[e]=i?t(d):l[e];a&&(r[a]=c),n(n.P+n.F*i,"String",r)},d=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(p,"")),e};e.exports=u},c5f6:function(e,t,a){"use strict";var n=a("7726"),r=a("69a8"),o=a("2d95"),l=a("5dbc"),i=a("6a99"),s=a("79e5"),c=a("9093").f,p=a("11e9").f,u=a("86cc").f,d=a("aa77").trim,f="Number",_=n[f],m=_,b=_.prototype,h=o(a("2aeb")(b))==f,g="trim"in String.prototype,y=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():d(t,3);var a,n,r,o=t.charCodeAt(0);if(43===o||45===o){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var l,s=t.slice(2),c=0,p=s.length;c<p;c++)if(l=s.charCodeAt(c),l<48||l>r)return NaN;return parseInt(s,n)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof _&&(h?s(function(){b.valueOf.call(a)}):o(a)!=f)?l(new m(y(t)),a,_):y(t)};for(var E,T=a("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),v=0;T.length>v;v++)r(m,E=T[v])&&!r(_,E)&&u(_,E,p(m,E));_.prototype=b,b.constructor=_,a("2aba")(n,f,_)}},c8c8:function(e,t,a){},d6d9c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"label-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD_NEW_LABEL:e.constants.EXECTIVE_UPDATE_LABEL)+"\n  ")]),a("el-form",{ref:"tplForm",staticClass:"tpl-form",attrs:{rules:e.rules,model:e.tplForm}},[a("el-form-item",{attrs:{label:e.constants.LABEL_TYPE,prop:"tag_type"}},[a("el-select",{attrs:{placeholder:e.constants.PLEASE_SELECT_LABEL_TYPE,disabled:e.isDisable},model:{value:e.tplForm.tag_type,callback:function(t){e.$set(e.tplForm,"tag_type",t)},expression:"tplForm.tag_type"}},e._l(e.tagTypesList,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),a("el-form-item",{staticClass:"label-rules",attrs:{label:"标签规则",prop:"rules"}},[a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.tplForm.tag_type==e.constants.EXECUTIVE_LABEL_TYPE[0],expression:"tplForm.tag_type == constants.EXECUTIVE_LABEL_TYPE[0]"}],staticStyle:{width:"100%"},attrs:{data:e.table253,border:""}},[a("el-table-column",{attrs:{label:"标签名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"请输入标签名称",maxlength:"20","show-word-limit":""},model:{value:t.row.display_name,callback:function(a){e.$set(t.row,"display_name",a)},expression:"scope.row.display_name"}})]}}])}),a("el-table-column",{attrs:{prop:"people_percent",label:"人数占比",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.people_percent)+"%\n          ")]}}])}),a("el-table-column",{attrs:{prop:"computation_rule_name",align:"center",label:"计算规则",width:"150"}})],1),a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.tplForm.tag_type==e.constants.EXECUTIVE_LABEL_TYPE[1],expression:"tplForm.tag_type == constants.EXECUTIVE_LABEL_TYPE[1]"}],staticStyle:{width:"100%"},attrs:{data:e.table271,border:""}},[a("el-table-column",{attrs:{label:"标签名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"请输入标签名称",maxlength:"20","show-word-limit":""},model:{value:t.row.display_name,callback:function(a){e.$set(t.row,"display_name",a)},expression:"scope.row.display_name"}})]}}])}),a("el-table-column",{attrs:{prop:"people_percent",label:"人数占比",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.people_percent)+"%\n          ")]}}])}),a("el-table-column",{attrs:{prop:"computation_rule_name",align:"center",label:"计算规则",width:"150"}})],1),a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.tplForm.tag_type==e.constants.EXECUTIVE_LABEL_TYPE[2],expression:"tplForm.tag_type == constants.EXECUTIVE_LABEL_TYPE[2]"}],staticStyle:{width:"100%"},attrs:{data:e.table23221,border:""}},[a("el-table-column",{attrs:{label:"标签名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{class:t.row.isChildren?"add-padding":"",attrs:{placeholder:"请输入标签名称",maxlength:"20","show-word-limit":""},model:{value:t.row.display_name,callback:function(a){e.$set(t.row,"display_name",a)},expression:"scope.row.display_name"}})]}}])}),a("el-table-column",{attrs:{label:"是否展示给员工",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{model:{value:t.row.is_show,callback:function(a){e.$set(t.row,"is_show",a)},expression:"scope.row.is_show"}})]}}])}),a("el-table-column",{attrs:{prop:"people_percent",label:"人数占比",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.people_percent)+"%\n          ")]}}])}),a("el-table-column",{attrs:{prop:"computation_rule_name",align:"center",label:"计算规则",width:"150"}})],1),a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.tplForm.tag_type==e.constants.EXECUTIVE_LABEL_TYPE[3],expression:"tplForm.tag_type == constants.EXECUTIVE_LABEL_TYPE[3]"}],staticStyle:{width:"100%"},attrs:{data:e.table2521,border:""}},[a("el-table-column",{attrs:{label:"标签名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{class:t.row.isChildren?"add-padding":"",attrs:{placeholder:"请输入标签名称",maxlength:"20","show-word-limit":""},model:{value:t.row.display_name,callback:function(a){e.$set(t.row,"display_name",a)},expression:"scope.row.display_name"}})]}}])}),a("el-table-column",{attrs:{prop:"people_percent",label:"人数占比",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.people_percent)+"%\n          ")]}}])}),a("el-table-column",{attrs:{prop:"computation_rule_name",align:"center",label:"计算规则",width:"150"}})],1)],1),a("el-form-item",{attrs:{label:e.constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,prop:"department_ids","label-width":"140px"}},[a("common-tree",{attrs:{orgTree:e.orgTree,department_ids:e.tplForm.department_ids},on:{selectedIds:e.selectedOrg}})],1),a("el-form-item",{attrs:{label:e.constants.FORCED_DISTRIBUTION,prop:"force_distribution"}},[a("el-checkbox",{model:{value:e.tplForm.force_distribution,callback:function(t){e.$set(e.tplForm,"force_distribution",t)},expression:"tplForm.force_distribution"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{loading:e.isLoading,round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v("\n        "+e._s(e.constants.CONFIRM)+"\n      ")]),a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},r=[],o=a("cebc"),l=a("7618"),i=(a("456d"),a("ac6a"),a("c5f6"),a("38fb")),s=a("fea5"),c=a("372d"),p={components:{"common-tree":Object(c["a"])(a.e("chunk-25721bc4").then(a.bind(null,"30da")))},props:{isDisable:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},userId:{type:Number,default:0},orgTree:{type:Array,default:function(){return[]}}},data:function(){return{rules:{tag_type:[{required:!0,message:"请选择标签类型",trigger:"change"}],department_ids:[{type:"array",required:!0,message:"请至少选择一个业务单元/职能单元",trigger:"change"}],rules:[{required:!0}]},tplForm:{tag_type:"23221",rules:{},department_ids:[],force_distribution:!1},constants:{ADD_NEW_LABEL:i["d"],EXECTIVE_UPDATE_LABEL:i["Kb"],CONFIRM:i["G"],CANCEL:i["A"],LABEL_TYPE:i["ad"],BUSINESS_UNIT_AND_FUNCTIONAL_UNIT:i["z"],PLEASE_SELECT_MULTIPLE:i["be"],PLEASE_SELECT_LABEL_TYPE:i["ae"],EXECUTIVE_LABEL_TYPE:i["Lb"],FORCED_DISTRIBUTION:i["Yb"]},defaultProps:{label:"department_name",children:"children"},tagTypesList:[],table253:[],table271:[],table23221:[],table2521:[],tagName:"",optionalIds:[],isLoading:!1}},computed:{checkedKeys:function(){return this.tplForm.department_ids.map(function(e){var t=e.department_id;return t})}},methods:{selectedOrg:function(e){this.tplForm.department_ids=e},close:function(){this.$emit("close")},handleCheckedExecutiveType:function(){},handleTagRules:function(e){var t=this,a=[];return e.forEach(function(e,n){var r={};t.tplForm.tag_type===t.tagName&&t.tagName&&(r["id"]=e.id),r["display_name"]=e.display_name,a.push(r)}),a},handle23221TagRules:function(){var e=this,t=[];return this.table23221.forEach(function(a,n){if(2===n||3===n){2===n&&(t[1]["children"]=[]);var r={};e.tagName&&(r["id"]=a.id),r["display_name"]=a.display_name,t[1]["children"].push(r)}else if(5===n||6===n){5===n&&(t[2]["children"]=[]);var o={};e.tagName&&(o["id"]=a.id),o["display_name"]=a.display_name,t[2]["children"].push(o)}else{var l={};e.tplForm.tag_type===e.tagName&&e.tagName&&(l["id"]=a.id),l["display_name"]=a.display_name,t.push(l)}}),t},handle2521TagRules:function(){var e=this,t=[];return this.table2521.forEach(function(a,n){if(3===n||4===n){3===n&&(t[2]["children"]=[]);var r={};e.tagName&&(r["id"]=a.id),r["display_name"]=a.display_name,t[2]["children"].push(r)}else{var o={};e.tplForm.tag_type===e.tagName&&e.tagName&&(o["id"]=a.id),o["display_name"]=a.display_name,t.push(o)}}),t},submit:function(){var e=this;this.$refs["tplForm"].validate(function(t){if(t){var a=[],n=!0;e.tplForm.tag_type==i["Lb"][0]?a=e.handleTagRules(e.table253):e.tplForm.tag_type==i["Lb"][1]?a=e.handleTagRules(e.table271):e.tplForm.tag_type==i["Lb"][2]?a=e.handle23221TagRules():e.tplForm.tag_type==i["Lb"][3]&&(a=e.handle2521TagRules());var r={tag_type:e.tplForm.tag_type,force_distribution:e.tplForm.force_distribution?1:0,department_ids:e.tplForm.department_ids,rules:a};if(Object.keys(r.rules).forEach(function(e){""==r.rules[e].display_name&&(n=!1),r.rules[e].children&&Object.keys(r.rules[e].children).forEach(function(t){""==r.rules[e].children[t].display_name&&(n=!1)})}),"add"===e.infoType){if(n)return e.isLoading=!0,Object(s["oc"])(r).then(function(t){e.isLoading=!1,e.$emit("getList")}).catch(function(t){e.isLoading=!1});e.$alert("标签名称不能为空！")}else{var o=r;if(n)return e.isLoading=!0,Object(s["Sc"])(e.userId,o).then(function(t){e.isLoading=!1,e.$emit("getList")}).catch(function(t){e.isLoading=!1});e.$alert("标签名称不能为空！")}}})},updateTemplate:function(){},getAdminTagTypesList:function(){var e=this;Object(s["y"])().then(function(t){e.tagTypesList=t})},filterNode:function(e,t){return!e||-1!==t.department_name.indexOf(e)},treeChange:function(e,t,a){this.tplForm.department_ids=this.$refs.tree.getCheckedNodes()},handleTagRulesDataStructure:function(e){var t=[];return e.forEach(function(e,a){void 0==e.children&&t.push(e),void 0!=e.children&&(t.push(e),e.children.forEach(function(e,a){e["isChildren"]=!0,t.push(e)}),delete e.children)}),t},getTagDetails:function(){var e=this;Object(s["x"])(this.userId).then(function(t){e.tplForm.tag_type=t.tag_type,e.tplForm.tag_type==i["Lb"][0]?e.table253=e.handleTagRulesDataStructure(t.rules):e.tplForm.tag_type==i["Lb"][1]?e.table271=e.handleTagRulesDataStructure(t.rules):e.tplForm.tag_type==i["Lb"][2]?e.table23221=e.handleTagRulesDataStructure(t.rules):e.tplForm.tag_type==i["Lb"][3]&&(e.table2521=e.handleTagRulesDataStructure(t.rules)),e.tplForm.department_ids=t.department_ids,e.tplForm.force_distribution=!!t.force_distribution,e.tagName=t.tag_type})},handleOrgTree:function(e){for(var t in e)"object"===Object(l["a"])(e[t])&&(0<=this.optionalIds.indexOf(e[t].department_id)?e[t].disabled=!0:e[t].disabled=!1,void 0!==e[t].children&&this.handleOrgTree(e[t].children));return e}},beforeDestroy:function(){this.$refs["tplForm"].resetFields()},created:function(){var e=this;if(this.getAdminTagTypesList(),Object(s["A"])().then(function(t){e.optionalIds=t,e.orgTree=e.handleOrgTree(e.orgTree)}).catch(function(e){}),"add"!=this.infoType&&this.userId)this.getTagDetails();else{var t=i["X"].map(function(e){return Object.assign({},Object(o["a"])({},e))});this.table253=t,this.table271=i["Y"].map(function(e){return Object.assign({},Object(o["a"])({},e))}),this.table23221=i["U"].map(function(e){return Object.assign({},Object(o["a"])({},e))}),this.table2521=i["W"].map(function(e){return Object.assign({},Object(o["a"])({},e))})}}},u=p,d=(a("a959"),a("2877")),f=Object(d["a"])(u,n,r,!1,null,"4e37c85c",null);t["default"]=f.exports},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);