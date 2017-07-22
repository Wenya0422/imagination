!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e,n){t.exports=!n(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(19),o=n(20),i=n(22),u=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";n(7);var r=n(8),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=new Vue({data:{},components:{game:o.default}});window.addEventListener("load",function(t){i.$mount("#app")})},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),o=n.n(r),i=n(24),u=n(9),s=u(o.a,i.a,null,null,null);s.options.__file="src/game.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] game.vue: functional components are not supported with templates, they should use render functions."),e.default=s.exports},function(t,e){t.exports=function(t,e,n,r,o){var i,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,u=t.default);var a="function"==typeof u?u.options:u;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),r&&(a._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},a._ssrRegister=c):n&&(c=n),c){var l=a.functional,f=l?a.render:a.beforeCreate;l?a.render=function(t,e){return c.call(e),f(t,e)}:a.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:u,options:a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),o=function(t){return t&&t.__esModule?t:{default:t}}(r);localStorage.setItem("word","list"),e.default={data:function(){var t;return t={score:0,writeWord:[],index:null,result:null,wordMean:null},(0,o.default)(t,"index",null),(0,o.default)(t,"word",null),(0,o.default)(t,"wordLab",[]),(0,o.default)(t,"arrWord",[]),(0,o.default)(t,"wordsList",[{word:"add",mean:"v. 补充，把什么加起来"},{word:"belief",mean:"n. 相信，信念，信仰"},{word:"campaign",mean:"n. 战役，运动，活动；vt.参加竞赛;vt.(从事，组织)活动"},{word:"contribute",mean:"vt. 捐助，投稿；vi.投稿，贡献，是原因之一"},{word:"favourable",mean:"n. 有用的，良好的，赞成的"}]),(0,o.default)(t,"dWords",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","W"]),t},methods:{charater:function(){this.dWords.sort(function(){return Math.random()-.5})},chose:function(t){this.index=t,this.writeWord.push(this.dWords[this.index].toLowerCase()),this.result=this.writeWord.join("")},submit:function(){null==this.wordMean?alert("主人，您还没选择要挑战的单词噢"):null==this.result?alert("主人，记得从下面的字母表中选择正确的单词哦"):this.result!=this.wordMean?(alert("主人,您记错了哦."),0==this.score?this.score=0:this.score-=10):(alert("主人，您答对了,好棒哦!^_−☆"),this.score+=10,localStorage.lis="0",localStorage.word=this.result,localStorage.list=this.score+10,this.score=parseInt(localStorage.list)),this.result="",this.writeWord=[]},tipWord:function(t){this.result=this.wordMean}},mounted:function(){this.charater(),this.wordLab=this.wordsList}}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(12),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports={default:n(13),__esModule:!0}},function(t,e,n){n(14);var r=n(3).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(15);r(r.S+r.F*!n(0),"Object",{defineProperty:n(4).f})},function(t,e,n){var r=n(2),o=n(3),i=n(16),u=n(18),s=function(t,e,n){var a,c,l,f=t&s.F,d=t&s.G,p=t&s.S,v=t&s.P,_=t&s.B,h=t&s.W,w=d?o:o[e]||(o[e]={}),m=w.prototype,y=d?r:p?r[e]:(r[e]||{}).prototype;d&&(n=e);for(a in n)(c=!f&&y&&void 0!==y[a])&&a in w||(l=c?y[a]:n[a],w[a]=d&&"function"!=typeof y[a]?n[a]:_&&c?i(l,r):h&&y[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((w.virtual||(w.virtual={}))[a]=l,t&s.R&&m&&!m[a]&&u(m,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(4),o=n(23);t.exports=n(0)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(0)&&!n(5)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(1);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"head"},[n("h1",[t._v("word")]),t._v(" "),n("div",{staticClass:"scores-container"},[n("span",{staticClass:"scores"},[n("i",[t._v("\n\t\t\t\t\t\tscores:\n                    ")]),t._v(" "),n("strong",{staticClass:"scoresNum",model:{value:t.score,callback:function(e){t.score=e},expression:"score"}},[t._v("\n                            "+t._s(t.score)+"\n                        ")])])])]),t._v(" "),n("div",{staticClass:"wordList"},[n("strong",{staticClass:"wordCard"},[t._v("单词卡:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.wordMean,expression:"wordMean"}],staticClass:"form-control",staticStyle:{width:"80%",display:"inline-block","margin-left":"10px"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.wordMean=e.target.multiple?n:n[0]}}},[t._l(t.wordLab,function(e,r){return[n("option",{domProps:{value:e.word,textContent:t._s(e.mean)}})]})],2)]),t._v(" "),n("p",{staticClass:"wordList",staticStyle:{padding:"0px 0 0 10px",margin:"10px 0 0"}},[n("strong",[t._v("词库卡：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],attrs:{type:"text",name:"newWord",required:"required",id:"resultNew"},domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}),t._v(" "),n("input",{staticClass:"submit",attrs:{type:"submit",value:"确定"},on:{click:t.submit}})]),t._v(" "),n("div",{staticClass:"ov"},[n("a",{staticClass:"tip",attrs:{href:"javascript:;"},on:{click:function(e){t.tipWord(t.index)}}},[t._v("提示")])]),t._v(" "),n("div",{staticClass:"wrapper"},t._l(t.dWords,function(e,r){return n("div",{staticClass:"box",domProps:{textContent:t._s(e)},on:{click:function(e){t.chose(r)}}})}))])},o=[];r._withStripped=!0,e.a={render:r,staticRenderFns:o}}]);