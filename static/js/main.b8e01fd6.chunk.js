(this["webpackJsonpreact-portfolio-template-v2"]=this["webpackJsonpreact-portfolio-template-v2"]||[]).push([[0],{15:function(e,a,t){e.exports=t(27)},20:function(e,a,t){},21:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),m=(t(20),t(21),t(5)),i=t(1),o=function(e){var a=e.name,t=e.contactEmail;return(l.a.createElement("div",null,l.a.createElement("div",{className:"header_container"},l.a.createElement(m.b,{to:"/"},l.a.createElement("h1",null,a,".")),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/about"},"about")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:".concat(t)},"contact")))))))},s=t(6),u=function(e){var a=e.contactEmail,t=e.contactPara,n=e.socialLinks;return(l.a.createElement("div",{className:"contact_container"},l.a.createElement("h1",null,"Get in touch."),l.a.createElement("p",null,t),l.a.createElement("br",null),l.a.createElement("a",{className:"email_link",href:"mailto:".concat(a)},a),l.a.createElement("div",{className:"social_links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:".concat(a)},l.a.createElement(s.b,null))),l.a.createElement("li",null,l.a.createElement("a",{href:n[0].url},l.a.createElement(s.d,null))),l.a.createElement("li",null,l.a.createElement("a",{href:n[1].url},l.a.createElement(s.c,null))),l.a.createElement("li",null,l.a.createElement("a",{href:n[2].url},l.a.createElement(s.a,null)))))))},h={name:"chetanverma.",contactEmail:"hello@chetanverma.com",landingPageName:"Chetan Verma",landingPagePara:"Designer and front-end developer. I work as the Creative Director at WORK in India, while also taking on freelance projects that pique my interest.",landingPageImage:"assets/photo.jpg",projects:[{id:1,title:"Project One",imageSrc:"https://via.placeholder.com/300",url:"http://chetanverma.com/"},{id:2,title:"Project Two",imageSrc:"https://via.placeholder.com/300",url:"http://chetanverma.com/"},{id:3,title:"Project Three",imageSrc:"https://via.placeholder.com/300",url:"http://chetanverma.com/"},{id:4,title:"Project Four",imageSrc:"https://via.placeholder.com/300",url:"http://chetanverma.com/"},{id:5,title:"Project Five",imageSrc:"https://via.placeholder.com/300",url:"http://chetanverma.com/"},{id:6,title:"Project Six",imageSrc:"https://via.placeholder.com/300",url:"http://chetanverma.com/"}],contactPara:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",social:[{name:"LinkedIn",url:"https://www.linkedin.com/in/chetanverma7/"},{name:"Github",url:"https://www.behance.net/chetanverma"},{name:"Dribbble",url:"https://dribbble.com/chetanverma"}],aboutTitle:"I make remarkable digital products",aboutPara:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},p=function(){return l.a.createElement("div",null,l.a.createElement(o,{name:h.name,contactEmail:h.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("h1",null,h.aboutTitle),l.a.createElement("p",null,h.aboutPara),l.a.createElement("div",{className:"about_contact"},l.a.createElement(u,{contactEmail:h.contactEmail,contactPara:h.contactPara,socialLinks:h.social}))))},d=function(e){var a=e.name,t=e.paragraph,n=e.authorImage;return(l.a.createElement("div",null,l.a.createElement("div",{className:"home_container"},l.a.createElement("div",{className:"home_head_wrapper"},l.a.createElement("h1",null," Hello I 'm ",l.a.createElement("br",null)," ",l.a.createElement("span",null,a)),l.a.createElement("p",null,t)),l.a.createElement("div",{className:"image_container"},l.a.createElement("img",{src:n,alt:"Author"}),l.a.createElement("div",{className:"bg"})))))},E=function(e){var a=e.projects;return(l.a.createElement("div",{className:"work_container"},l.a.createElement("h1",null,"Projects."),l.a.createElement("div",{className:"projects_container"},a.map((function(e){return l.a.createElement("div",{key:e.id,className:"project"},l.a.createElement("div",{className:"image"},l.a.createElement("a",{href:e.url},l.a.createElement("img",{src:e.imageSrc,alt:e.title}))),l.a.createElement("div",{className:"title"},e.title))})))))},v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o,{name:h.name,contactEmail:h.contactEmail}),l.a.createElement(d,{name:h.landingPageName,paragraph:h.landingPagePara,authorImage:h.landingPageImage}),l.a.createElement(E,{projects:h.projects}),l.a.createElement(u,{contactEmail:h.contactEmail,contactPara:h.contactPara,socialLinks:h.social}))};var g=function(){return l.a.createElement(m.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/about"},l.a.createElement(p,null)),l.a.createElement(i.a,{path:"/",exact:!0},l.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b8e01fd6.chunk.js.map