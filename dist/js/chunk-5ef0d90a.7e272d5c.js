(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ef0d90a"],{"9d1d":function(e,t,a){"use strict";var l=a("ec81"),n=a.n(l);n.a},d6d9:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"label-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD_NEW_LABEL:e.constants.UPDATE_LABEL)+"\n  ")]),a("el-form",{ref:"tplForm",staticClass:"tpl-form",attrs:{rules:e.rules,model:e.tplForm}},[a("el-form-item",{attrs:{label:e.constants.LABEL_TYPE,prop:"tag_type"}},[a("el-select",{attrs:{placeholder:e.constants.PLEASE_SELECT_LABEL_TYPE},model:{value:e.tplForm.tag_type,callback:function(t){e.$set(e.tplForm,"tag_type",t)},expression:"tplForm.tag_type"}},e._l(e.tagTypesList,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),a("el-form-item",{staticClass:"label-rules",attrs:{label:"标签规则",prop:"rules"}},[a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.tplForm.tag_type===e.constants.EXECUTIVE_LABEL_TYPE[0],expression:"tplForm.tag_type === constants.EXECUTIVE_LABEL_TYPE[0]"}],staticStyle:{width:"100%"},attrs:{data:e.table253,border:""}},[a("el-table-column",{attrs:{label:"标签名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"请输入标签名称"},model:{value:t.row.display_name,callback:function(a){e.$set(t.row,"display_name",a)},expression:"scope.row.display_name"}})]}}])}),a("el-table-column",{attrs:{prop:"people_percent",label:"人数占比",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.people_percent)+"%\n          ")]}}])}),a("el-table-column",{attrs:{prop:"computation_rule_name",align:"center",label:"计算规则",width:"150"}})],1),a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.tplForm.tag_type===e.constants.EXECUTIVE_LABEL_TYPE[1],expression:"tplForm.tag_type === constants.EXECUTIVE_LABEL_TYPE[1]"}],staticStyle:{width:"100%"},attrs:{data:e.table271,border:""}},[a("el-table-column",{attrs:{label:"标签名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"请输入标签名称"},model:{value:t.row.display_name,callback:function(a){e.$set(t.row,"display_name",a)},expression:"scope.row.display_name"}})]}}])}),a("el-table-column",{attrs:{prop:"people_percent",label:"人数占比",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.people_percent)+"%\n          ")]}}])}),a("el-table-column",{attrs:{prop:"computation_rule_name",align:"center",label:"计算规则",width:"150"}})],1),a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.tplForm.tag_type===e.constants.EXECUTIVE_LABEL_TYPE[2],expression:"tplForm.tag_type === constants.EXECUTIVE_LABEL_TYPE[2]"}],staticStyle:{width:"100%"},attrs:{data:e.table23221,border:""}},[a("el-table-column",{attrs:{label:"标签名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{class:t.row.isChildren?"add-padding":"",attrs:{placeholder:"请输入标签名称"},model:{value:t.row.display_name,callback:function(a){e.$set(t.row,"display_name",a)},expression:"scope.row.display_name"}})]}}])}),a("el-table-column",{attrs:{prop:"people_percent",label:"人数占比",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.people_percent)+"%\n          ")]}}])}),a("el-table-column",{attrs:{prop:"computation_rule_name",align:"center",label:"计算规则",width:"150"}})],1),a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.tplForm.tag_type===e.constants.EXECUTIVE_LABEL_TYPE[3],expression:"tplForm.tag_type === constants.EXECUTIVE_LABEL_TYPE[3]"}],staticStyle:{width:"100%"},attrs:{data:e.table2521,border:""}},[a("el-table-column",{attrs:{label:"标签名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{class:t.row.isChildren?"add-padding":"",attrs:{placeholder:"请输入标签名称"},model:{value:t.row.display_name,callback:function(a){e.$set(t.row,"display_name",a)},expression:"scope.row.display_name"}})]}}])}),a("el-table-column",{attrs:{prop:"people_percent",label:"人数占比",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.people_percent)+"%\n          ")]}}])}),a("el-table-column",{attrs:{prop:"computation_rule_name",align:"center",label:"计算规则",width:"150"}})],1)],1),a("el-form-item",{attrs:{label:e.constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,prop:"department_ids","label-width":"140px"}},[a("common-tree",{attrs:{orgTree:e.orgTree,department_ids:e.tplForm.department_ids},on:{selectedIds:e.selectedOrg}})],1),a("el-form-item",{attrs:{label:e.constants.FORCED_DISTRIBUTION,prop:"force_distribution"}},[a("el-checkbox",{model:{value:e.tplForm.force_distribution,callback:function(t){e.$set(e.tplForm,"force_distribution",t)},expression:"tplForm.force_distribution"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v("\n        "+e._s(e.constants.CONFIRM)+"\n      ")]),a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},n=[],r=(a("ac6a"),a("38fb")),s=a("fea5"),o=a("372d"),i={components:{"common-tree":Object(o["a"])(a.e("chunk-69cbffb4").then(a.bind(null,"30da")))},props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},initData:{type:Object,default:function(){return{}}},orgTree:{type:Array,default:function(){return[]}}},data:function(){return{rules:{tag_type:[{required:!0,message:"请选择标签类型",trigger:"change"}],department_ids:[{type:"array",required:!0,message:"请至少选择一个业务单元/职能单元",trigger:"change"}],rules:[{required:!0}]},tplForm:{tag_type:"23221",rules:{},department_ids:[],force_distribution:!1},constants:{ADD_NEW_LABEL:r["d"],UPDATE_LABEL:r["Qe"],CONFIRM:r["F"],CANCEL:r["z"],LABEL_TYPE:r["Vc"],BUSINESS_UNIT_AND_FUNCTIONAL_UNIT:r["y"],PLEASE_SELECT_MULTIPLE:r["Qd"],PLEASE_SELECT_LABEL_TYPE:r["Pd"],EXECUTIVE_LABEL_TYPE:r["Gb"],FORCED_DISTRIBUTION:r["Tb"],DEFAULT_TABLE253:r["V"],DEFAULT_TABLE271:r["W"],DEFAULT_TABLE23221:r["T"],DEFAULT_TABLE2521:r["U"]},defaultProps:{label:"department_name",children:"children"},tagTypesList:[],table253:r["V"],table271:r["W"],table23221:r["T"],table2521:r["U"],tagName:""}},computed:{checkedKeys:function(){return this.tplForm.department_ids.map(function(e){var t=e.department_id;return t})}},methods:{selectedOrg:function(e){this.tplForm.department_ids=e},close:function(){this.$emit("close")},handleCheckedExecutiveType:function(){},handleTagRules:function(e){var t=this,a=[];return e.forEach(function(e,l){var n={};t.tplForm.tag_type===t.tagName&&t.tagName&&(n["id"]=e.id),n["display_name"]=e.display_name,a.push(n)}),a},handle23221TagRules:function(){var e=this,t=[];return this.table23221.forEach(function(a,l){if(2===l||3===l){2===l&&(t[1]["children"]=[]);var n={};e.tagName&&(n["id"]=a.id),n["display_name"]=a.display_name,t[1]["children"].push(n)}else if(5===l||6===l){5===l&&(t[2]["children"]=[]);var r={};e.tagName&&(r["id"]=a.id),r["display_name"]=a.display_name,t[2]["children"].push(r)}else{var s={};e.tplForm.tag_type===e.tagName&&e.tagName&&(s["id"]=a.id),s["display_name"]=a.display_name,t.push(s)}}),t},handle2521TagRules:function(){var e=this,t=[];return this.table2521.forEach(function(a,l){if(3===l||4===l){3===l&&(t[2]["children"]=[]);var n={};e.tagName&&(n["id"]=a.id),n["display_name"]=a.display_name,t[2]["children"].push(n)}else{var r={};e.tplForm.tag_type===e.tagName&&e.tagName&&(r["id"]=a.id),r["display_name"]=a.display_name,t.push(r)}}),t},submit:function(){var e=this;this.$refs["tplForm"].validate(function(t){if(t){var a=[];e.tplForm.tag_type===r["Gb"][0]?a=e.handleTagRules(e.table253):e.tplForm.tag_type===r["Gb"][1]?a=e.handleTagRules(e.table271):e.tplForm.tag_type===r["Gb"][2]?a=e.handle23221TagRules():e.tplForm.tag_type===r["Gb"][3]&&(a=e.handle2521TagRules());var l={tag_type:e.tplForm.tag_type,force_distribution:e.tplForm.force_distribution?1:0,department_ids:e.tplForm.department_ids,rules:a};return"add"==e.infoType?Object(s["Lb"])(l).then(function(t){e.close(),e.$emit("getList")}):Object(s["qc"])(e.initData.id).then(function(t){e.close()})}})},getAdminTagTypesList:function(){var e=this;Object(s["o"])().then(function(t){e.tagTypesList=t})},filterNode:function(e,t){return!e||-1!==t.department_name.indexOf(e)},treeChange:function(e,t,a){this.tplForm.department_ids=this.$refs.tree.getCheckedNodes()},handleTagRulesDataStructure:function(e){var t=[];return e.forEach(function(e,a){void 0===e.children&&t.push(e),void 0!==e.children&&(t.push(e),e.children.forEach(function(e,a){e["isChildren"]=!0,t.push(e)}),delete e.children)}),t},getTagDetails:function(){var e=this;Object(s["n"])(this.initData.id).then(function(t){e.tplForm.tag_type=t.tag_type,e.tplForm.tag_type===r["Gb"][0]?e.table253=e.handleTagRulesDataStructure(t.rules):e.tplForm.tag_type===r["Gb"][1]?e.table271=e.handleTagRulesDataStructure(t.rules):e.tplForm.tag_type===r["Gb"][2]?e.table23221=e.handleTagRulesDataStructure(t.rules):e.tplForm.tag_type===r["Gb"][3]&&(e.table2521=e.handleTagRulesDataStructure(t.rules)),e.tplForm.department_ids=t.department_ids,e.tplForm.force_distribution=!!t.force_distribution,e.tagName=t.tag_type})}},beforeDestroy:function(){this.$refs["tplForm"].resetFields()},created:function(){this.getAdminTagTypesList(),"add"!=this.infoType&&this.initData.id&&this.getTagDetails()}},p=i,c=(a("9d1d"),a("2877")),d=Object(c["a"])(p,l,n,!1,null,"7a979d3a",null);t["default"]=d.exports},ec81:function(e,t,a){}}]);