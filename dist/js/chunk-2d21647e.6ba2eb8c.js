(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21647e"],{c292:function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-select",{attrs:{filterable:"",remote:"",clearable:"","reserve-keyword":"",placeholder:"请输入姓名或工号","remote-method":e.searchME,disabled:e.isDisabled,loading:e.loading},on:{change:e.handlerSelect},model:{value:e.workcode,callback:function(o){e.workcode=o},expression:"workcode"}},e._l(e.userOptions,function(e){return t("el-option",{key:e.workcode,attrs:{label:e.workcode+e.name+e.email,value:e.workcode}})}),1)},r=[],l=t("fea5"),a={props:{isDisabled:{type:Boolean,default:!1},code:{type:String,default:""}},data:function(){return{userOptions:[],loading:!1,workcode:this.code||""}},methods:{searchME:function(e){var o=this;""!==e?(this.loading=!0,Object(l["vb"])({name_or_workcode:e}).then(function(e){o.loading=!1,o.userOptions=e}).catch(function(e){})):this.userOptions=[]},handlerSelect:function(){this.$emit("selectedUser",this.workcode)}}},c=a,i=t("2877"),s=Object(i["a"])(c,n,r,!1,null,null,null);o["default"]=s.exports}}]);