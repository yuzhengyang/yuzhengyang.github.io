(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d53899e"],{"00b6":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("841c");var c=n("7a23"),o={style:{width:"100%"}},r={key:0},l={key:1},a=Object(c["createElementVNode"])("div",{class:"el-upload__text"},[Object(c["createTextVNode"])(" 拖动文件到此处上传 或 "),Object(c["createElementVNode"])("em",null,"点击上传")],-1),i={class:"el-upload__tip"},s=Object(c["createElementVNode"])("h2",null,"最近",-1),d={class:"image-slot"},u={style:{"font-size":"20px",color:"white","user-select":"none"}},f={style:{"font-size":"20px","user-select":"none"}},b={style:{"font-size":"14px"}},O={style:{height:"30px","margin-top":"15px"}},j={style:{float:"left"}},p=Object(c["createTextVNode"])("立即下载"),m={style:{float:"right"}},h=Object(c["createTextVNode"])("复制链接"),x={class:"demo-rich-conent",style:{display:"flex",gap:"16px","flex-direction":"column"}},v={class:"demo-rich-content__name",style:{margin:"0","font-weight":"500"}},C={class:"demo-rich-content__name",style:{margin:"0","font-weight":"500"}},g={class:"demo-rich-content__name",style:{margin:"0","font-weight":"500"}},N={class:"demo-rich-content__mention",style:{margin:"0","font-size":"14px",color:"var(--el-color-info)"}},w={class:"demo-rich-content__desc",style:{margin:"0"}},y={class:"demo-rich-content__desc",style:{margin:"0"}};function V(e,t,n,V,_,k){var E=this,S=Object(c["resolveComponent"])("el-alert"),B=Object(c["resolveComponent"])("upload-filled"),D=Object(c["resolveComponent"])("el-icon"),T=Object(c["resolveComponent"])("el-upload"),I=Object(c["resolveComponent"])("el-col"),L=Object(c["resolveComponent"])("el-row"),F=Object(c["resolveComponent"])("Search"),U=Object(c["resolveComponent"])("el-button"),z=Object(c["resolveComponent"])("el-input"),$=Object(c["resolveComponent"])("el-image"),A=Object(c["resolveComponent"])("el-link"),J=Object(c["resolveComponent"])("el-popover"),M=Object(c["resolveComponent"])("el-card"),H=Object(c["resolveComponent"])("el-main"),R=Object(c["resolveComponent"])("el-container");return Object(c["openBlock"])(),Object(c["createBlock"])(R,{style:{height:"100%"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(H,{style:{height:"100%"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(L,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(I,{span:24},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",o,[void 0==E.$store.state.user.token||""==E.$store.state.user.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createVNode"])(S,{title:"登录后可上传文件",type:"success",closable:!1})])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[Object(c["createVNode"])(T,{action:_.fileUploadUrl,data:{bucketName:".share"},headers:_.headers,drag:"",multiple:""},{tip:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",i,"您的文件空间剩余："+Object(c["toDisplayString"])(_.fileConf.spaceLimit?parseInt((_.fileConf.spaceLimit-_.fileConf.usedSpace)/1024/1024):0)+" MB",1)]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(D,{class:"el-icon--upload"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(B)]})),_:1}),a]})),_:1},8,["action","data","headers"])]))])]})),_:1})]})),_:1}),Object(c["createVNode"])(L,{style:{"margin-top":"10px"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(I,{span:8},{default:Object(c["withCtx"])((function(){return[s]})),_:1}),Object(c["createVNode"])(I,{span:16,style:{"text-align":"right"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(z,{modelValue:_.fileSearchText,"onUpdate:modelValue":t[1]||(t[1]=function(e){return _.fileSearchText=e}),placeholder:"搜索一下",class:"input-with-select",clearable:""},{append:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(U,{onClick:t[0]||(t[0]=function(t){return e.search()})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(D,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(F)]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(c["createVNode"])(L,null,{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(k.filterShareFileList(),(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(I,{xs:24,sm:12,md:8,lg:6,xl:4,key:e},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(M,null,{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])($,{style:{width:"40px",height:"30px","background-color":"rgba(52, 126, 255, 0.786)","text-align":"center"}},{error:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("span",u,Object(c["toDisplayString"])(e.ext),1)])]})),_:2},1024),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("span",f,Object(c["toDisplayString"])(e.fileName),1)])]),Object(c["createElementVNode"])("div",b,[Object(c["createVNode"])(J,{placement:"bottom-start",width:260,trigger:"hover"},{reference:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("div",j,[Object(c["createVNode"])(A,{type:"primary",style:{"font-weight":"bold"},onClick:function(t){return k.fileDownload(e)}},{default:Object(c["withCtx"])((function(){return[p]})),_:2},1032,["onClick"])]),Object(c["createElementVNode"])("div",m,[Object(c["createVNode"])(A,{type:"warning",style:{"font-weight":"bold"},onClick:function(t){return k.fileDownloadCopy(e)}},{default:Object(c["withCtx"])((function(){return[h]})),_:2},1032,["onClick"])])])]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",x,[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("p",v,Object(c["toDisplayString"])(e.fileName),1),Object(c["createElementVNode"])("p",C,Object(c["toDisplayString"])(parseInt(e.size/1024/1024))+" MB",1),Object(c["createElementVNode"])("p",g,"上传："+Object(c["toDisplayString"])(e.createTime),1),Object(c["createElementVNode"])("p",N,"@"+Object(c["toDisplayString"])(e.realName),1)]),Object(c["createElementVNode"])("p",w,"查看："+Object(c["toDisplayString"])(e.downloadTime),1),Object(c["createElementVNode"])("p",y,"查看次数："+Object(c["toDisplayString"])(e.downloadCount),1)])]})),_:2},1024)])]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})]})),_:1})]})),_:1})}n("4de4"),n("d3b7");var _=n("3ef4"),k=n("b775"),E=n("01ea"),S=n("5f87"),B=n("2ef0"),D=n.n(B),T=n("f71e"),I={data:function(){return{headers:[],fileUploadUrl:"",user:{},fileConf:{},shareFileList:[],shareFileTotal:0,fileSearchText:""}},components:{},mounted:function(){document.title="Hidoc-共享文件",this.headers["Access-Token"]=Object(S["e"])(),this.fileUploadUrl=Object(E["a"])().baseServer+"f/u";var e=this.$store.state.user;console.log(e),e.token&&this.getCurrentUserInfo(),this.getShareFileList()},methods:{copy:function(e){Object(T["a"])(e),Object(_["a"])({message:"复制成功",type:"success",duration:1e3})},getCurrentUserInfo:function(){var e=this;Object(k["a"])({url:"/user/currentUserInfo",method:"post"}).then((function(t){0==t.code&&(e.user=t.meta.user,e.fileConf=t.meta.fileConf)}))},getShareFileList:function(e){var t=this;Object(k["a"])({url:"/openapi/file/shareList",method:"post",data:{token:this.$store.state.user.token}}).then((function(e){0==e.code&&(t.shareFileList=e.data,t.shareFileTotal=e.total)}))},filterShareFileList:function(){var e=this.fileSearchText;return D.a.filter(this.shareFileList,(function(t){return t.fileName.indexOf(e)>=0}))},fileDownload:function(e){window.location.href=Object(E["a"])().baseServer+"f/d/u/"+e.uname},fileDownloadCopy:function(e){this.copy(Object(E["a"])().baseServer+"f/d/u/"+e.uname)}}},L=(n("a13f"),n("6b0d")),F=n.n(L);const U=F()(I,[["render",V]]);t["default"]=U},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"841c":function(e,t,n){"use strict";var c=n("c65b"),o=n("d784"),r=n("825a"),l=n("1d80"),a=n("129f"),i=n("577e"),s=n("dc4a"),d=n("14c3");o("search",(function(e,t,n){return[function(t){var n=l(this),o=void 0==t?void 0:s(t,e);return o?c(o,t,n):new RegExp(t)[e](i(n))},function(e){var c=r(this),o=i(e),l=n(t,c,o);if(l.done)return l.value;var s=c.lastIndex;a(s,0)||(c.lastIndex=0);var u=d(c,o);return a(c.lastIndex,s)||(c.lastIndex=s),null===u?-1:u.index}]}))},"89fa":function(e,t,n){},a13f:function(e,t,n){"use strict";n("89fa")},f71e:function(e,t,n){"use strict";function c(e){var t=document.createElement("input");t.setAttribute("id","at___cp_input"),t.value=e,document.getElementsByTagName("body")[0].appendChild(t),document.getElementById("at___cp_input").select(),document.execCommand("copy"),document.getElementById("at___cp_input").remove()}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=chunk-7d53899e.5343dea7.js.map