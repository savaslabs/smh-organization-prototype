(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),m=(a(88),a(22)),i=a(23),o=a(26),s=a(24),u=a(25),d=a(10),E=a(141),b=a(143),f=a(145),h=a(140),p=a(48),y=a(27),v=a(78),g=a(53),N=a.n(g),S=a(138),k=a(79),I=a(82),M=a(137),j=a(20),O=function(e){function t(){return Object(m.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(M.a,{inline:!0,className:"nav-item form--search"},r.a.createElement(j.a,{icon:"search"}),r.a.createElement(M.a.Label,{className:"sr-only sr-only-focusable"},"Search"),r.a.createElement(M.a.Control,{type:"text",placeholder:"Search members"}),r.a.createElement(k.a,{type:"submit"},"Search"))}}]),t}(n.Component),C=a(139),D=[{alert:"Danielle Sloan accepted your request.",time:"30 seconds ago",action:""},{alert:"Housing Home left a note for Dennis Arthur.",time:"15 minutes ago",action:""},{alert:"Stephanie McNab hasn't accepted your request yet.",time:"",action:"Send reminder"}],V=function(){return r.a.createElement(C.a,{title:"Notifications",className:"alerts"},D.map(function(e,t){return r.a.createElement(S.a.Text,{key:t},r.a.createElement("p",{className:"alert-item__text"},e.alert),e.time&&r.a.createElement("p",{className:"alert-item__time"},e.time),e.action&&r.a.createElement("p",{className:"alert-item__action"},e.action))}))},A=a(134),w=function(e){var t=e.logout;return r.a.createElement(C.a,{title:"Account"},r.a.createElement(S.a.Text,{href:"/"},r.a.createElement(A.a,{to:"/"},"Dashboard")),r.a.createElement(C.a.Divider,null),r.a.createElement(S.a.Text,null,r.a.createElement("a",{href:"/"},"Settings")),r.a.createElement(C.a.Divider,null),r.a.createElement(S.a.Text,null,r.a.createElement("a",{href:"/",onClick:t},"Log Out")))},x=function(){return r.a.createElement(S.a.Brand,{href:"/"},"Share My Health")},R=function(){return r.a.createElement("div",{className:"nav-item"},r.a.createElement(k.a,{href:"#",variant:"primary"},"Create Account"))},T=function(e){var t=e.auth,a=e.logout;return"1"===t?r.a.createElement("header",{className:"header"},r.a.createElement(S.a,{expand:"lg",className:"container"},r.a.createElement(x,null),r.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(O,null),r.a.createElement(I.a,{className:"mr-auto"},r.a.createElement(R,null),r.a.createElement(V,null),r.a.createElement(w,{logout:a}))))):r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(N.a,{to:"/"},"Log In")))},_=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"\xa9 Share My Health ",e),r.a.createElement("nav",null,r.a.createElement("ul",{className:"menu--footer"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Help")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Updates")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Policy"))))))},L=a(35),K=a.n(L),F=a(54),q=a.n(F),Y=function(e){var t=e.login;return r.a.createElement(K.a,{className:"form--login"},r.a.createElement(K.a.Group,{controlId:"loginEmail"},r.a.createElement(K.a.Label,null,"Email address"),r.a.createElement(K.a.Control,{type:"email",placeholder:"Enter email"})),r.a.createElement(K.a.Group,{controlId:"loginPassword"},r.a.createElement(K.a.Label,null,"Password"),r.a.createElement(K.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement(q.a,{variant:"primary",type:"submit",onClick:t},"Log In"),r.a.createElement(K.a.Text,null,r.a.createElement(N.a,{to:"/reset-password"},"Forgot password?")))},G=function(e){var t=e.auth,a=e.login;return"1"===t?r.a.createElement(h.a,{to:"/dashboard"}):r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Agent Portal Log In"),r.a.createElement(Y,{login:a}))},B=a(142),H=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).onClick=function(e){e.preventDefault(),a.resetForm.reset(),a.setState({message:!0})},a.state={message:!1},a.onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container pt-4"},r.a.createElement("h1",null,"Reset Password"),this.state.message&&r.a.createElement(B.a,{variant:"success"},"We'll send you a link to reset your password."),r.a.createElement(M.a,{ref:function(t){return e.resetForm=t},className:"mb-3"},r.a.createElement(M.a.Group,{controlId:"loginEmail"},r.a.createElement(M.a.Label,null,"Email address"),r.a.createElement(M.a.Control,{type:"email",placeholder:"Enter email"})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:this.onClick},"Reset")),r.a.createElement(A.a,{to:"/"},"Back to Log In"))}}]),t}(n.Component),P=function(e){return r.a.createElement("div",{className:"page-heading"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,e.title),e.subtitle&&r.a.createElement("p",{className:"page-heading__subtitle"},e.subtitle),e.ctaText&&r.a.createElement(q.a,{variant:"light",className:"page-heading__cta",onClick:function(){return e.onSelect(e.ctaActiveTab)}},e.ctaText)))},W=a(135),J=function(e){return r.a.createElement("div",{className:"content-block"},r.a.createElement("div",{className:"content-block__title"},r.a.createElement(j.a,{icon:e.icon,size:"2x"}),r.a.createElement("h3",null,e.title)),r.a.createElement("div",{className:"content-block__content"},e.children,e.link&&r.a.createElement(A.a,{to:e.link,className:"content-block__link"},"View All")))},z=function(){return r.a.createElement(J,{title:"Notifications",icon:"bell"},r.a.createElement(W.a,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(j.a,{icon:"bell"}),"Housing Home left a note for ",r.a.createElement(A.a,{to:"/member/5"},"Dennis Arthur"),"."),r.a.createElement("td",{className:"font-italic"},"2 minutes ago")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(j.a,{icon:"bell"}),r.a.createElement(A.a,{to:"/member/2"},"Stephanie McNab")," hasn't accepted your request."),r.a.createElement("td",{className:"font-italic"},"Send Reminder")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(j.a,{icon:"bell"}),r.a.createElement(A.a,{to:"/member/3"},"Weston Smith")," denied your request."),r.a.createElement("td",{className:"font-italic"},"1 day ago")))))},U={1:{id:1,name:"Danielle Sloan",firstName:"Danielle",lastName:"Sloan",dob:"01/07/1987",age:"32",gender:"Female",email:"dsloan92@yahoo.com",joined:"02/13/2019",idVerified:!1,medVerified:!1,accessRecords:!1},2:{id:2,name:"Stephanie McNab",firstName:"Stephanie",lastName:"McNab",dob:"01/07/1955",age:"64",gender:"Female",email:"smcnab@yahoo.com",joined:"02/13/2019",idVerified:!0,medVerified:!0,accessRecords:!1},3:{id:3,name:"Weston Smith",firstName:"Weston",lastName:"Smith",dob:"01/07/1947",age:"72",gender:"Male",email:"wsmith@yahoo.com",joined:"02/13/2019",idVerified:!0,medVerified:!1,accessRecords:!1},4:{id:1,name:"Michael Tran",firstName:"Michael",lastName:"Tran",dob:"01/07/1987",age:"32",gender:"Male",email:"mtran@yahoo.com",joined:"02/23/2019",idVerified:!1,medVerified:!1,accessRecords:!1},5:{id:5,name:"Dennis Arthur",firstName:"Dennis",lastName:"Arthur",dob:"01/07/1955",age:"64",gender:"Male",email:"darthur@yahoo.com",joined:"02/24/2019",idVerified:!0,medVerified:!0,accessRecords:!0},6:{id:6,name:"Joanna Fink",firstName:"Joanna",lastName:"Fink",dob:"01/07/1947",age:"72",gender:"Female",email:"jfink@yahoo.com",joined:"02/25/2019",idVerified:!1,medVerified:!1,accessRecords:!1}},$=function(){var e=Object.assign([],U).reverse().slice(0,3);return r.a.createElement(J,{title:"Recent Members",icon:"clock",link:"/search"},r.a.createElement("ul",null,e.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(j.a,{icon:["far","user-circle"]}),r.a.createElement(A.a,{to:"/member/"+e.id},e.name))})))},Q=function(e){function t(){return Object(m.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,{title:"Welcome back, Cheryl!"}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Here is what you missed..."),r.a.createElement(z,null),r.a.createElement($,null)))}}]),t}(n.Component),X=function(e){function t(){return Object(m.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h2",null,"Search Page")}}]),t}(n.Component),Z=a(81),ee=a(40),te=a.n(ee),ae=function(e){var t=e.member,a=e.accessRecords,n=e.onSelect;return r.a.createElement("div",{className:"member-sidebar col-md-3"},r.a.createElement("img",{src:"/avatar.png",alt:t.name,className:"member-avatar"}),r.a.createElement(te.a,{defaultActiveKey:"memberInfo",className:"flex-column",onSelect:function(e){return n(e)}},r.a.createElement(te.a.Link,{eventKey:"memberInfo"},"Basic Information"),r.a.createElement(te.a.Link,{eventKey:"memberId"},"Identification"),a&&r.a.createElement("div",null,r.a.createElement(te.a.Link,{eventKey:"memberRecords"},"Records"),r.a.createElement(te.a.Link,{eventKey:"memberNotes"},"Notes"),r.a.createElement(te.a.Link,{eventKey:"memberLockbox"},"Lockbox"))))},ne=a(144),re=a(136),le=function(e){var t=e.member;return r.a.createElement("div",null,r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Basic Information"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"First Name: "),t.firstName),r.a.createElement("li",null,r.a.createElement("strong",null,"Last Name: "),t.lastName),r.a.createElement("li",null,r.a.createElement("strong",null,"DOB: "),t.dob)),r.a.createElement("h3",null,"Contact Information"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Email: "),t.email),r.a.createElement("li",null,r.a.createElement("strong",null,"Phone Number: "),"555-555-5555"),r.a.createElement("li",null,r.a.createElement("strong",null,"Address: "),"26 Fairway Blvd, Albany, NY")),r.a.createElement("h3",null,"Emergency Contact"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Name: "),"Stephanie Walters"),r.a.createElement("li",null,r.a.createElement("strong",null,"Phone: "),"555-555-5555")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Member Since: "),t.joined)))},ce=function(e){var t=e.member;return r.a.createElement(ne.a,{defaultActiveKey:"basicInfo"},r.a.createElement(re.a,{eventKey:"basicInfo",title:"Basic Information"},r.a.createElement(le,{member:t})))},me=function(e){var t=e.memberId,a=(e.idVerified,e.updateMemberState);return r.a.createElement(M.a,null,r.a.createElement(M.a.Group,{controlId:"verifyIdType"},r.a.createElement(M.a.Label,null,"Document Type"),r.a.createElement(M.a.Control,{as:"select"},r.a.createElement("option",null,"Driver's License"))),r.a.createElement(M.a.Group,{controlId:"verifyExpiration"},r.a.createElement(M.a.Label,null,"Expiration Date"),r.a.createElement(M.a.Control,{type:"text",placeholder:"mm/dd/yyyy"})),r.a.createElement(M.a.Group,{controlId:"verifyCertify"},r.a.createElement(M.a.Check,{type:"checkbox",label:"I certify that I can verify this member\u2019s identity."})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),a(t,"idVerified")}(e)}},"Verify"))},ie=function(){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Document Type")),r.a.createElement("p",null,"Driver's License"),r.a.createElement("p",null,r.a.createElement("strong",null,"Expiration Date:")),r.a.createElement("p",null,"02/13/2020"),r.a.createElement("p",null,r.a.createElement("strong",null,"Verification Details")),r.a.createElement("p",null,"Cheryl Deggins (Interfaith) verified this member\u2019s identity on 2/13/2019."))},oe=function(e){var t=e.memberId,a=e.idVerified,n=e.updateMemberState;return a?r.a.createElement(ie,null):r.a.createElement(me,{memberId:t,idVerified:a,updateMemberState:n})},se=function(e){var t=e.memberId,a=(e.medVerified,e.updateMemberState);return r.a.createElement(M.a,null,r.a.createElement(M.a.Group,{controlId:"verifyMedId"},r.a.createElement(M.a.Label,null,"Medicaid/Medicare ID"),r.a.createElement(M.a.Control,{type:"text",placeholder:"5A5-5A-5A5A-AA"})),r.a.createElement(M.a.Text,null,"OR"),r.a.createElement(M.a.Group,{controlId:"verifySsn"},r.a.createElement(M.a.Label,null,"Social Security Number"),r.a.createElement(M.a.Control,{type:"text",placeholder:"555-55-5555"})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),a(t,"medVerified")}(e)}},"Save"))},ue=function(){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Medicaid/Medicare ID")),r.a.createElement("p",null,"5A5-5A-5A5A-AA"),r.a.createElement("p",null,r.a.createElement("strong",null,"Social Security Number")),r.a.createElement("p",null,"xxx-xx-5555"))},de=function(e){var t=e.memberId,a=e.medVerified,n=e.updateMemberState;return a?r.a.createElement(ue,null):r.a.createElement(se,{memberId:t,medVerified:a,updateMemberState:n})},Ee=function(e){var t=e.member,a=e.idVerified,n=e.medVerified,l=e.updateMemberState;return r.a.createElement(ne.a,{defaultActiveKey:"idVerification"},r.a.createElement(re.a,{eventKey:"idVerification",title:"ID Verification"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"ID Verification"),r.a.createElement(oe,{memberId:t.id,idVerified:a,updateMemberState:l})),r.a.createElement(re.a,{eventKey:"medicalId",title:"Medical ID"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Medical ID"),r.a.createElement(de,{memberId:t.id,medVerified:n,updateMemberState:l})))},be=[{name:"Allergies",icon:"allergies"},{name:"Demographics",icon:"female"},{name:"Diagnoses",icon:"file-medical"},{name:"Discharge Summaries",icon:"notes-medical"},{name:"ED Reports",icon:"hospital"},{name:"Family History",icon:"users"},{name:"Immunizations",icon:"syringe"},{name:"Lab Results",icon:"vials"},{name:"Medications",icon:"prescription-bottle-alt"}],fe=function(){return r.a.createElement("ul",{className:"records__list"},be.map(function(e,t){return r.a.createElement("li",{key:t,className:"records__list__item"},r.a.createElement(j.a,{icon:e.icon,size:"4x"}),r.a.createElement("p",null,e.name))}))},he=[{name:"New York Medicaid",dataType:"Medical",dateImported:"02/20/2019"},{name:"New York Medicaid",dataType:"Medical",dateImported:"02/20/2019"},{name:"New York Medicaid",dataType:"Medical",dateImported:"02/20/2019"},{name:"New York Medicaid",dataType:"Medical",dateImported:"02/20/2019"}],pe=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Current Data Sources"),r.a.createElement(W.a,{striped:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Data Source Name"),r.a.createElement("th",null,"Data Type"),r.a.createElement("th",null,"Date Imported"),r.a.createElement("th",null,"Remove"))),r.a.createElement("tbody",null,he.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.dataType),r.a.createElement("td",null,e.dateImported),r.a.createElement("td",null,r.a.createElement(k.a,{variant:"light"},r.a.createElement(j.a,{icon:"times"}))))}))))},ye=[{name:"NY Medicaid (New 1)",dataType:"Medical"},{name:"NY Medicaid (New 2)",dataType:"Medical"},{name:"NY Medicaid (New 3)",dataType:"Medical"},{name:"NY Medicaid (New 4)",dataType:"Medical"}],ve=function(){return r.a.createElement("div",null,r.a.createElement(M.a,{inline:!0,className:"mb-3 form--search"},r.a.createElement(j.a,{icon:"search"}),r.a.createElement(M.a.Control,{type:"text",placeholder:"Search data sources"}),r.a.createElement(k.a,{type:"submit"},"Search")),r.a.createElement("h3",null,"All Available Data Sources"),r.a.createElement(M.a,null,r.a.createElement(W.a,{striped:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Data Source Name"),r.a.createElement("th",null,"Data Type"),r.a.createElement("th",null,"Import"))),r.a.createElement("tbody",null,ye.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.dataType),r.a.createElement("td",null,r.a.createElement(M.a.Group,{controlId:t},r.a.createElement(M.a.Check,{type:"checkbox",label:"Import",className:"label--hidden"}))))}))),r.a.createElement(k.a,{variant:"primary",type:"submit"},"Import Selected")))},ge=function(e){e.member;return r.a.createElement(ne.a,{defaultActiveKey:"records"},r.a.createElement(re.a,{eventKey:"records",title:"Records"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Records"),r.a.createElement(fe,null)),r.a.createElement(re.a,{eventKey:"sources",title:"Data Sources"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Data Sources"),r.a.createElement(pe,null)),r.a.createElement(re.a,{eventKey:"addSource",title:"Add Data Source"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},'Add Data Source"'),r.a.createElement(ve,null)))},Ne=function(e){var t=e.date,a=e.note,n=e.user;return r.a.createElement("li",null,r.a.createElement("p",{className:"note__date"},t),r.a.createElement("p",{className:"note__content"},a),r.a.createElement("p",{className:"note__user"},"By ",n))},Se=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={value:""},a.onChange=a.onChange.bind(Object(d.a)(Object(d.a)(a))),a.onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a.getMemberNotes=a.getMemberNotes.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"onClick",value:function(e){e.preventDefault();var t=this.props.member.id,a=new Date,n={date:a.getMonth()+"/"+a.getDate()+"/"+a.getFullYear(),note:this.state.value,user:"Cheryl Sloan (Interfaith)"},r=this.getMemberNotes()||[];r.push(n),localStorage.setItem("notes"+t,JSON.stringify(r))}},{key:"getMemberNotes",value:function(){var e=this.props.member.id;return JSON.parse(localStorage.getItem("notes"+e))}},{key:"render",value:function(){var e=this.props.member,t=this.getMemberNotes();return r.a.createElement("div",null,r.a.createElement(M.a,{className:"mb-3"},r.a.createElement(M.a.Group,{controlId:"newNote"},r.a.createElement(M.a.Label,null,"Write a note about ",e.name),r.a.createElement("textarea",{rows:"3",value:this.state.value,onChange:this.onChange})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:this.onClick},"Submit")),r.a.createElement("ul",{className:"notes__list"},t&&t.map(function(e,t){return r.a.createElement(Ne,{key:t,date:e.date,note:e.note,user:e.user})}),r.a.createElement(Ne,{date:"2/26/2019",note:e.firstName+" is food insecure and needs to be able to access the local pantry.",user:"Cheryl Sloan (Interfaith)"}),r.a.createElement(Ne,{date:"2/25/2019",note:e.firstName+" is food insecure and needs to be able to access the local pantry.",user:"Cheryl Sloan (Interfaith)"})))}}]),t}(n.Component),ke=function(e){var t=e.member;return r.a.createElement(ne.a,{defaultActiveKey:"notes"},r.a.createElement(re.a,{eventKey:"notes",title:"Notes"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Notes"),r.a.createElement(Se,{member:t})))},Ie=function(e){var t=e.member;return r.a.createElement(ne.a,{defaultActiveKey:"lockbox"},r.a.createElement(re.a,{eventKey:"lockbox",title:"Lockbox"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Lockbox"),r.a.createElement(le,{member:t})))},Me=function(e){var t=e.member,a=(e.idVerified,e.updateMemberState);return r.a.createElement(M.a,{className:"mb-3"},r.a.createElement(M.a.Group,{controlId:"newNote"},r.a.createElement(M.a.Label,null,"Note to ",t.name),r.a.createElement(M.a.Control,{as:"textarea",rows:"3"})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),a(t.id,"accessRecords")}(e)}},"Send Request"))},je=function(){var e=new Date,t=e.getMonth()+"/"+e.getDate()+"/"+e.getFullYear();return r.a.createElement("div",null,r.a.createElement("h3",null,"Request Sent!"),r.a.createElement("p",null,t),r.a.createElement("p",null,"Send Request Reminder"),r.a.createElement("p",null,"Cancel Request"))},Oe=function(e){var t=e.member,a=e.accessRecords,n=e.updateMemberState,l=a?r.a.createElement(je,null):r.a.createElement(Me,{member:t,idVerified:a,updateMemberState:n});return r.a.createElement(ne.a,{defaultActiveKey:"requestAccess"},r.a.createElement(re.a,{eventKey:"requestAccess",title:"Request Access"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Request Access"),l))},Ce=function(e){var t=e.member,a=e.active,n=e.idVerified,l=e.medVerified,c=e.accessRecords,m=e.updateMemberState;return r.a.createElement("div",{className:"member-tabs col-md-9"},function(e){switch(e){case"memberId":return r.a.createElement(Ee,{member:t,idVerified:n,medVerified:l,updateMemberState:m});case"memberRecords":return r.a.createElement(ge,{member:t});case"memberNotes":return r.a.createElement(ke,{member:t});case"memberLockbox":return r.a.createElement(Ie,{member:t});case"requestAccess":return r.a.createElement(Oe,{member:t,accessRecords:c,updateMemberState:m});default:return r.a.createElement(ce,{member:t})}}(a))},De=function(e){var t=e.member,a=e.subtitle,n=e.onSelect;return r.a.createElement(P,{title:t.name,subtitle:a,ctaText:"Verify Identity",ctaActiveTab:"memberId",onSelect:n})},Ve=function(e){var t=e.member,a=e.subtitle,n=e.onSelect;return r.a.createElement(P,{title:t.name,subtitle:a,ctaText:"Request Access",ctaActiveTab:"requestAccess",onSelect:n})},Ae=function(e){var t=e.member,a=e.subtitle;return r.a.createElement(P,{title:t.name,subtitle:a})},we=function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).updateMemberState=function(e,t){localStorage.setItem(t+e,"true"),a.setState(Object(Z.a)({},t,"true"))};var n=a.props.match.params.id;return a.member=U[n],a.state={active:"MemberInfo",idVerified:!!a.member&&a.getInitialState("idVerified",n),medVerified:!!a.member&&a.getInitialState("medVerified",n),accessRecords:!!a.member&&a.getInitialState("accessRecords",n)},a.onSelect=a.onSelect.bind(Object(d.a)(Object(d.a)(a))),a.updateMemberState=a.updateMemberState.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getInitialState",value:function(e,t){return localStorage.getItem(e+t)?localStorage.getItem(e+t):this.member[e]}},{key:"onSelect",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e=this.member;if(!e)return r.a.createElement("p",null,"404 Not Found");var t=this.state,a=t.active,n=t.idVerified,l=t.medVerified,c=t.accessRecords,m=e.gender+" | "+e.age;return r.a.createElement("div",null,!n&&r.a.createElement(De,{member:e,subtitle:m,onSelect:this.onSelect}),n&&!c&&r.a.createElement(Ve,{member:e,subtitle:m,onSelect:this.onSelect}),n&&c&&r.a.createElement(Ae,{member:e,subtitle:m}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(ae,{member:e,accessRecords:c,onSelect:this.onSelect}),r.a.createElement(Ce,{member:e,active:a,idVerified:n,medVerified:l,accessRecords:c,updateMemberState:this.updateMemberState}))))}}]),t}(n.Component);p.b.add(y.b,y.c,y.k,y.i,v.a,y.a,y.d,y.e,y.g,y.f,y.l,y.j,y.m,y.h);var xe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={auth:localStorage.getItem("auth")||!1},a.login=a.login.bind(Object(d.a)(Object(d.a)(a))),a.logout=a.logout.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"login",value:function(){localStorage.setItem("auth","true"),this.setState({auth:"true"})}},{key:"logout",value:function(){return localStorage.setItem("auth","false"),this.setState({auth:"false"}),r.a.createElement(h.a,{to:"/"})}},{key:"render",value:function(){var e=this;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(T,{auth:this.state.auth,logout:this.logout}),r.a.createElement("main",null,r.a.createElement(b.a,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(G,{auth:e.state.auth,login:e.login})}}),r.a.createElement(f.a,{path:"/reset-password",component:H}),r.a.createElement(f.a,{path:"/dashboard",component:Q}),r.a.createElement(f.a,{path:"/search",component:X}),r.a.createElement(f.a,{path:"/member/:id",component:we}),r.a.createElement(f.a,{render:function(){return r.a.createElement("p",null,"Not Found")}}))),r.a.createElement(_,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a(133)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.2761a829.chunk.js.map