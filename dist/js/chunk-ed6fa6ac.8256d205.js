(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed6fa6ac"],{"44cc":function(e,t,o){"use strict";var r=o("81b0"),n=o.n(r);n.a},5635:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-row",[o("el-col",{attrs:{offset:7,span:10}},[e._l(e.emails,(function(t,r){return o("el-row",{staticClass:"emailRow",attrs:{gutter:"20"}},[o("el-col",{attrs:{span:16}},[o("el-input",{attrs:{placeholder:"please input email",clearable:"",size:"medium"},model:{value:t.email,callback:function(o){e.$set(t,"email",o)},expression:"item.email"}})],1),o("el-col",{attrs:{span:8,align:"right"}},[o("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.addRow(r)}}},[e._v("+")]),o("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.myDeleteRow(r)}}},[e._v("-")])],1)],1)})),o("el-row",{attrs:{align:"middle"}},[o("el-col",{attrs:{align:"center"}},[o("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.createUser()}}},[e._v("Submit")])],1)],1)],2)],1)},n=[],s=(o("4160"),o("a434"),o("a9e3"),o("159b"),o("221d")),i={name:"CreateUser",computed:{orgValue:function(){return console.log(this.$store.state.loginInfo.orgValue),this.$store.state.loginInfo.orgValue},userInfo:function(){return console.log(this.$store.state.loginInfo.userInfo),this.$store.state.loginInfo.userInfo}},data:function(){return{cla_org_id:this.$store.state.loginInfo.cla_org_id,emails:[{email:""}],limit:5}},methods:{addRow:function(e){console.log(emails),Number(this.$store.state.userLimit)+this.emails.length===this.limit?(this.$message.closeAll(),this.$message.error("Create up to ".concat(this.limit," users"))):this.emails.splice(e+1,0,{email:""}),console.log(emails)},myDeleteRow:function(e){console.log(emails),console.log(e),1===this.emails.length?this.emails[0]="":this.emails.splice(e,1),console.log(emails)},createUser:function(){var e=this,t=[];this.emails.forEach((function(e){t.push(e.email)}));var o={cla_org_id:this.cla_org_id,emails:t};this.$axios({url:"/api"+s["b"],method:"post",data:o,headers:{token:this.userInfo[this.orgValue].token}}).then((function(t){console.log(t),e.$message.closeAll(),e.$message.success("success"),e.$refs.ruleForm.resetFields()})).catch((function(t){console.log(t),e.$message.closeAll()}))}}},a=i,l=(o("44cc"),o("2877")),c=Object(l["a"])(a,r,n,!1,null,"40d53a88",null);t["default"]=c.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,o){var r=o("1d80"),n=o("5899"),s="["+n+"]",i=RegExp("^"+s+s+"*"),a=RegExp(s+s+"*$"),l=function(e){return function(t){var o=String(r(t));return 1&e&&(o=o.replace(i,"")),2&e&&(o=o.replace(a,"")),o}};e.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(e,t,o){var r=o("861d"),n=o("d2bb");e.exports=function(e,t,o){var s,i;return n&&"function"==typeof(s=t.constructor)&&s!==o&&r(i=s.prototype)&&i!==o.prototype&&n(e,i),e}},"81b0":function(e,t,o){},a434:function(e,t,o){"use strict";var r=o("23e7"),n=o("23cb"),s=o("a691"),i=o("50c4"),a=o("7b0b"),l=o("65f0"),c=o("8418"),u=o("1dde"),f=o("ae40"),m=u("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,d=Math.min,p=9007199254740991,I="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!m||!h},{splice:function(e,t){var o,r,u,f,m,h,b=a(this),_=i(b.length),v=n(e,_),N=arguments.length;if(0===N?o=r=0:1===N?(o=0,r=_-v):(o=N-2,r=d(g(s(t),0),_-v)),_+o-r>p)throw TypeError(I);for(u=l(b,r),f=0;f<r;f++)m=v+f,m in b&&c(u,f,b[m]);if(u.length=r,o<r){for(f=v;f<_-r;f++)m=f+r,h=f+o,m in b?b[h]=b[m]:delete b[h];for(f=_;f>_-r+o;f--)delete b[f-1]}else if(o>r)for(f=_-r;f>v;f--)m=f+r-1,h=f+o-1,m in b?b[h]=b[m]:delete b[h];for(f=0;f<o;f++)b[f+v]=arguments[f+2];return b.length=_-r+o,u}})},a9e3:function(e,t,o){"use strict";var r=o("83ab"),n=o("da84"),s=o("94ca"),i=o("6eeb"),a=o("5135"),l=o("c6b6"),c=o("7156"),u=o("c04e"),f=o("d039"),m=o("7c73"),h=o("241c").f,g=o("06cf").f,d=o("9bf2").f,p=o("58a8").trim,I="Number",b=n[I],_=b.prototype,v=l(m(_))==I,N=function(e){var t,o,r,n,s,i,a,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=p(c),t=c.charCodeAt(0),43===t||45===t){if(o=c.charCodeAt(2),88===o||120===o)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(s=c.slice(2),i=s.length,a=0;a<i;a++)if(l=s.charCodeAt(a),l<48||l>n)return NaN;return parseInt(s,r)}return+c};if(s(I,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var w,E=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof E&&(v?f((function(){_.valueOf.call(o)})):l(o)!=I)?c(new b(N(t)),o,E):N(t)},A=r?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;A.length>$;$++)a(b,w=A[$])&&!a(E,w)&&d(E,w,g(b,w));E.prototype=_,_.constructor=E,i(n,I,E)}}}]);
//# sourceMappingURL=chunk-ed6fa6ac.8256d205.js.map