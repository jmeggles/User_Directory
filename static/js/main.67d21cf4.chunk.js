(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{31:function(e,t,a){e.exports=a(67)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),s=a.n(i),l=a(7),c=a(1),u=a(29),o=a(9),m=a(10),d=a(11),p=a(12),h=a(27),v=a.n(h),g={getUsers:function(){return v.a.get("https://randomuser.me/api/?results=100&nat=us")}};a(53);var b=function(e){return r.a.createElement("button",Object.assign({onClick:e.onClick,className:"card-btn ".concat(e["data-value"])},e))};a(54);var f=function(e){return r.a.createElement("div",{className:"card",style:{backgroundImage:e.image?"url(".concat(e.image,")"):"none"}},!e.image&&r.a.createElement("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}),r.a.createElement(b,{style:{opacity:e.image?1:0},onClick:e.handleBtnClick,"data-value":"pass"}),r.a.createElement(b,{style:{opacity:e.image?1:0},onClick:e.handleBtnClick,"data-value":"pick"}))},E=a(30);var N=function(e){return r.a.createElement("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(E.a)({width:"80%",margin:"0 auto",marginTop:18},e.style)},e.children)},y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={image:"",match:!1,matchCount:0},e.handleBtnClick=function(t){var a=t.target.attributes.getNamedItem("data-value").value,n=Object(u.a)({},e.state);"pick"===a?(n.match=1===Math.floor(5*Math.random())+1,n.matchCount=n.match?n.matchCount+1:n.matchCount):n.match=!1,e.setState(n),e.loadNextDog()},e.loadNextDog=function(){g.getRandomDog().then((function(t){return e.setState({image:t.data.message})})).catch((function(e){return console.log(e)}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadNextDog()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Make New Friends"),r.a.createElement("h3",{className:"text-center"},"Thumbs up on any pups you'd like to meet!"),r.a.createElement(f,{image:this.state.image,handleBtnClick:this.handleBtnClick}),r.a.createElement("h1",{className:"text-center"},"Made friends with ",this.state.matchCount," pups so far!"),r.a.createElement(N,{style:{opacity:this.state.match?1:0},type:"success"},"Yay! That Pup Liked You Too!!!"))}}]),a}(n.Component);a(55);var k=function(e){return r.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)};var C=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};var q=function(e){return r.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var w=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",Object.assign({className:t},e))};var j=function(){return r.a.createElement("div",null,r.a.createElement(k,{backgroundImage:"https://i.imgur.com/qkdpN.jpg"},r.a.createElement("h1",null,"Pupster"),r.a.createElement("h2",null,"They're the Good Boys and Girls")),r.a.createElement(C,{style:{marginTop:30}},r.a.createElement(q,null,r.a.createElement(w,{size:"md-12"},r.a.createElement("h1",null,"Welcome To Pupster!"))),r.a.createElement(q,null,r.a.createElement(w,{size:"md-12"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis."),r.a.createElement("p",null,"Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas. Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh."),r.a.createElement("p",null,"Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.")))))};a(56);var x=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"breed"},"Breed Name:"),r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"breed",list:"breeds",type:"text",className:"form-control",placeholder:"Type in a dog breed to begin",id:"breed"}),r.a.createElement("datalist",{id:"breeds"},e.breeds.map((function(e){return r.a.createElement("option",{value:e,key:e})}))),r.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"Search")))};a(57);var O=function(e){return r.a.createElement("ul",{className:"list-group search-results"},e.results.map((function(e){return r.a.createElement("li",{key:e,className:"list-group-item"},r.a.createElement("img",{alt:"Dog",src:e,className:"img-fluid"}))})))},S=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={search:"",breeds:[],results:[],error:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),g.getDogsOfBreed(e.state.search).then((function(t){if("error"===t.data.status)throw new Error(t.data.message);e.setState({results:t.data.message,error:""})})).catch((function(t){return e.setState({error:t.message})}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.getBaseBreedsList().then((function(t){return e.setState({breeds:t.data.message})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{style:{minHeight:"80%"}},r.a.createElement("h1",{className:"text-center"},"Search By Breed!"),r.a.createElement(N,{type:"danger",style:{opacity:this.state.error?1:0,marginBottom:10}},this.state.error),r.a.createElement(x,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,breeds:this.state.breeds}),r.a.createElement(O,{results:this.state.results})))}}]),a}(n.Component);a(58);var B=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Pupster"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/discover",className:"/discover"===window.location.pathname?"nav-link active":"nav-link"},"Discover")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search")))))};a(64);var P=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Pupster 2017"))};a(65);var D=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};var M=function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(D,null,r.a.createElement(c.a,{exact:!0,path:"/",component:j}),r.a.createElement(c.a,{exact:!0,path:"/about",component:j}),r.a.createElement(c.a,{exact:!0,path:"/discover",component:y}),r.a.createElement(c.a,{exact:!0,path:"/search",component:S})),r.a.createElement(P,null)))};a(66);s.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.67d21cf4.chunk.js.map