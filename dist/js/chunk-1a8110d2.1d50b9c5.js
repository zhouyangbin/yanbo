(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a8110d2"],{"0a49":function(t,e,r){var n=r("9b43"),a=r("626a"),s=r("4bf8"),i=r("9def"),o=r("cd1c");t.exports=function(t,e){var r=1==t,l=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d,p=e||o;return function(e,o,b){for(var m,h,y=s(e),_=a(y),g=n(o,b,3),v=i(_.length),w=0,A=r?p(e,v):l?p(e,0):void 0;v>w;w++)if((f||w in _)&&(m=_[w],h=g(m,w,y),t))if(r)A[w]=h;else if(h)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:A.push(m)}else if(u)return!1;return d?-1:c||u?u:A}}},1169:function(t,e,r){var n=r("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},1809:function(t,e,r){},7514:function(t,e,r){"use strict";var n=r("5ca1"),a=r("0a49")(5),s="find",i=!0;s in[]&&Array(1)[s](function(){i=!1}),n(n.P+n.F*i,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(s)},"8ab9":function(t,e,r){"use strict";var n=r("1809"),a=r.n(n);a.a},cd1c:function(t,e,r){var n=r("e853");t.exports=function(t,e){return new(n(t))(e)}},d6d9:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{staticClass:"label-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:t.visible},on:{close:t.close}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("\n    "+t._s("add"===t.infoType?t.constants.ADD_NEW_LABEL:t.constants.UPDATE_LABEL)+"\n  ")]),r("el-form",{ref:"tplForm",staticClass:"tpl-form",attrs:{rules:t.rules,model:t.tplForm,border:""}},[r("el-form-item",{staticClass:"tag-type",attrs:{label:"标签类型",prop:"tag_type"}},[r("el-select",{attrs:{placeholder:t.constants.TAG_TYPE},model:{value:t.tplForm.tag_type,callback:function(e){t.$set(t.tplForm,"tag_type",e)},expression:"tplForm.tag_type"}},t._l(t.tagTypesList,function(t){return r("el-option",{key:t.key,attrs:{label:t.name,value:t.key}})}),1)],1),r("el-form-item",{staticClass:"label-rules",attrs:{label:"标签规则",prop:"rules"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.table23221,border:""}},[r("el-table-column",{attrs:{label:"标签名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{class:e.row.isChildren?"add-padding":"",attrs:{placeholder:"请输入标签名称"},model:{value:e.row.name,callback:function(r){t.$set(e.row,"name",r)},expression:"scope.row.name"}})]}}])}),r("el-table-column",{attrs:{label:"是否展示给员工",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-checkbox",{model:{value:e.row.is_show,callback:function(r){t.$set(e.row,"is_show",r)},expression:"scope.row.is_show"}})]}}])}),r("el-table-column",{attrs:{prop:"level",label:"对应等级",align:"center",width:"100"}}),r("el-table-column",{attrs:{prop:"range_des",label:"人数占比",align:"center",width:"80"}}),r("el-table-column",{attrs:{prop:"computation_rule_name",align:"center",label:"计算规则",width:"120"}})],1)],1),t._e()],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v("\n        "+t._s(t.constants.CONFIRM)+"\n      ")]),r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.close}},[t._v("\n        "+t._s(t.constants.CANCEL)+"\n      ")])],1)],1)],1)},a=[],s=(r("7f7f"),r("7514"),r("38fb")),i=r("fea5"),o={props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},initData:{type:Object,default:function(){return{}}},departmentsOps:{type:Array,default:function(){return[]}}},data:function(){return{rules:{tag_type:[{required:!0,message:"请选择标签类型",trigger:"change"}],departments:[{type:"array",required:!0,message:"请至少选择一个业务单元/职能单元",trigger:"change"}],rules:[{required:!0}]},tplForm:{tag_type:"23221",rules:{},departments:[],forced:!1},constants:{ADD_NEW_LABEL:s["d"],UPDATE_LABEL:s["oe"],CONFIRM:s["B"],CANCEL:s["w"],TAG_TYPE:s["ge"],DEFAULT_TABLE23221:s["P"],FORCED_DISTRIBUTION_OR_NOT:s["Hb"]},tagTypesList:[],table23221:s["P"],tagName:""}},computed:{},methods:{close:function(){this.$emit("close")},submit:function(){var t=this;this.table23221.find(function(t){t.is_show=t.is_show?1:0});var e={type:this.tplForm.tag_type,rules:this.table23221,forced:this.tplForm.forced?1:0};return"add"==this.infoType?Object(i["lb"])(e).then(function(e){t.close()}):Object(i["Mb"])(this.initData.id,e).then(function(e){t.close()})},reSpritInitData:function(){var t=JSON.parse(JSON.stringify(this.table23221));this.initData.rules.find(function(e,r){t[r].name=e.name,t[r].is_show=!!e.is_show}),this.initData.forced=0,this.table23221=t}},beforeDestroy:function(){this.$refs["tplForm"].resetFields()},created:function(){"add"!=this.infoType&&this.initData.id&&this.reSpritInitData()}},l=o,c=(r("8ab9"),r("2877")),u=Object(c["a"])(l,n,a,!1,null,"43a12dd4",null);e["default"]=u.exports},e853:function(t,e,r){var n=r("d3f4"),a=r("1169"),s=r("2b4c")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),n(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}}}]);