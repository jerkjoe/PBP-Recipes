(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)a=s[u],r[a]&&p.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("64a9"),r=i.n(n);r.a},"40d7":function(e,t,i){"use strict";var n=i("a9ae"),r=i.n(n);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{staticStyle:{width:"100px"},attrs:{alt:"Vue logo",src:i("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("div",{staticClass:"sort",staticStyle:{margin:"20px auto"}},[e._v("\n    filter by with/without water\n    "),i("button",{on:{click:e.handleFilter}},[e._v("\n      With\n      "),e.filterApplied?i("span",[e._v("out")]):e._e(),e._v(" Water\n    ")]),i("button",{on:{click:e.handleReset}},[e._v("Reset Filter")])]),i("div",{staticClass:"recipes"},e._l(e.recipes,function(t,n){return i("Card",{key:n,attrs:{recipe:t,index:n,selected:e.previousSelection},on:{"remove-from-cart":e.handleRemoveFromCart,"add-to-cart":e.handleAddToCart}})}),1),i("div",{staticClass:"selected-ingredients"},[i("ol",e._l(e.requiredIngredients,function(t,n){return i("li",{key:n},[e._v("\n        "+e._s(t)+"\n      ")])}),0)])])},s=[],c=(i("4f7f"),i("5df3"),i("1c4c"),i("55dd"),i("ac6a"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipe"},[i("h2",{staticClass:"name"},[e._v(e._s(e.recipe.name))]),i("p",{staticClass:"type"},[e._v("Dish Type: "+e._s(e.recipe.type))]),i("p",{staticClass:"prep"},[e._v("Dish Prep Time: "+e._s(e.recipe.cook_time))]),i("p",{staticClass:"ingredients"},[e._v("Ingredients: "+e._s(e.recipe.ingredients.join(", ")))]),i("button",{on:{click:e.handleFav}},[e._v(e._s(e.favorite?"Unfavorite":"Favorite"))])])}),l=[],d=(i("7f7f"),i("c5f6"),{name:"Card",props:{recipe:{type:Object,required:!0},index:Number,selected:Array},data:function(){return{favorite:!1}},methods:{handleFav:function(){this.favorite?this.$emit("remove-from-cart",{name:this.recipe.name,ingredients:this.recipe.ingredients,index:this.index}):this.$emit("add-to-cart",{name:this.recipe.name,ingredients:this.recipe.ingredients,index:this.index}),this.favorite=!this.favorite}},mounted:function(){console.log(" Hi ",this.selected),this.selected&&-1!=this.selected.indexOf(this.index)&&(this.favorite=!0)},watch:{selected:function(e){this.favorite=!(!e||-1===e.indexOf(this.index))}}}),u=d,p=i("2877"),f=Object(p["a"])(u,c,l,!1,null,null,null);f.options.__file="Card.vue";var h=f.exports,m={name:"HomePage",components:{Card:h},data:function(){return{originalRecipes:[{name:"Risotto",type:"Italian",cook_time:60,ingredients:["Rice","Chicken Stock","Parmesan Cheese","White Wine","Butter","Salt","Pepper","Peas"]},{name:"Enchiladas",type:"Mexican",cook_time:50,ingredients:["Tomato Sauce","Tomato","Corn Tortillas","Cheddar Cheese","Onion","Olives","Salt","Chicken"]},{name:"Hummus",type:"Middle Eastern",cook_time:10,ingredients:["Garlic","Chickpeas","Salt","Tahini","Hot Sauce"]},{name:"Pancakes",type:"Breakfast",cook_time:25,ingredients:["Milk","Flour","Sugar","Butter","Baking Powder","Baking Soda","Egg","Salt"]},{name:"Borscht",type:"Russian",cook_time:75,ingredients:["Water","Potato","Beets","Butter","Onion","Salt","Celery","Carrot","Cabbage","Pepper","Vinegar","Tomato"]},{name:"Pierogi",type:"Polish",cook_time:105,ingredients:["Butter","Onion","Salt","Pepper","Potato","Egg","Flour","Baking Powder"]},{name:"Pupusa",type:"Salvadoran",cook_time:40,ingredients:["Masa","Water","Queso Fresco"]},{name:"Fried Rice",type:"Chinese",cook_time:28,ingredients:["Onion","Oil","Rice","Egg","Soy Sauce","Sesame Oil","Chicken","Carrot","Peas"]}],recipes:[{name:"Risotto",type:"Italian",cook_time:60,ingredients:["Rice","Chicken Stock","Parmesan Cheese","White Wine","Butter","Salt","Pepper","Peas"]},{name:"Enchiladas",type:"Mexican",cook_time:50,ingredients:["Tomato Sauce","Tomato","Corn Tortillas","Cheddar Cheese","Onion","Olives","Salt","Chicken"]},{name:"Hummus",type:"Middle Eastern",cook_time:10,ingredients:["Garlic","Chickpeas","Salt","Tahini","Hot Sauce"]},{name:"Pancakes",type:"Breakfast",cook_time:25,ingredients:["Milk","Flour","Sugar","Butter","Baking Powder","Baking Soda","Egg","Salt"]},{name:"Borscht",type:"Russian",cook_time:75,ingredients:["Water","Potato","Beets","Butter","Onion","Salt","Celery","Carrot","Cabbage","Pepper","Vinegar","Tomato"]},{name:"Pierogi",type:"Polish",cook_time:105,ingredients:["Butter","Onion","Salt","Pepper","Potato","Egg","Flour","Baking Powder"]},{name:"Pupusa",type:"Salvadoran",cook_time:40,ingredients:["Masa","Water","Queso Fresco"]},{name:"Fried Rice",type:"Chinese",cook_time:28,ingredients:["Onion","Oil","Rice","Egg","Soy Sauce","Sesame Oil","Chicken","Carrot","Peas"]}],selectedList:[],filterApplied:!1,requiredIngredients:[],previousSelection:[]}},props:{},methods:{handleReset:function(){this.recipes=this.originalRecipes,this.filterApplied=!1},handleFilter:function(){this.filterApplied?this.recipes=this.originalRecipes.filter(function(e){return e.ingredients.every(function(e){return"Water"!==e})}):this.recipes=this.originalRecipes.filter(function(e){return e.ingredients.some(function(e){return"Water"===e})}),this.filterApplied=!this.filterApplied},handleAddToCart:function(e){console.log("Add ",e),this.selectedList[e.index]=e.ingredients,console.log(this.selectedList),this.updateSortedList()},handleRemoveFromCart:function(e){console.log("Remove"),this.selectedList[e.index]=void 0,console.log(this.selectedList),this.updateSortedList()},updateSortedList:function(){var e=this;this.requiredIngredients=[],this.selectedList.forEach(function(t){t&&(e.requiredIngredients=e.requiredIngredients.concat(t))}),this.requiredIngredients=Array.from(new Set(this.requiredIngredients)).sort()}},mounted:function(){var e=this,t=localStorage.getItem("selectedList");t&&(this.selectedList=JSON.parse(t),this.previousSelection=this.selectedList.map(function(e,t){return null!==e?t:""}),console.log("index is ",this.previousSelection),this.updateSortedList()),window.addEventListener("beforeunload",function(t){if(e.selectedList.every(function(e){return!e}))localStorage.setItem("selectedList",[]);else{var i=JSON.stringify(e.selectedList);localStorage.setItem("selectedList",i)}})}},g=m,v=(i("40d7"),Object(p["a"])(g,a,s,!1,null,"1b49ac28",null));v.options.__file="HelloWorld.vue";var _=v.exports,S={name:"app",components:{HelloWorld:_}},y=S,k=(i("034f"),Object(p["a"])(y,r,o,!1,null,null,null));k.options.__file="App.vue";var C=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")},"64a9":function(e,t,i){},a9ae:function(e,t,i){},cf05:function(e,t,i){e.exports=i.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.adad2b68.js.map