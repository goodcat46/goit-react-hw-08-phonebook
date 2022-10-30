"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[40],{4040:function(t,e,a){a.r(e),a.d(e,{default:function(){return k}});var n=a(2791),s=a(7689),c=a(9434),i=a(6351),o="title_title__2rbOy",r=a(184),l=function(t){var e=t.title;return(0,r.jsx)("p",{className:o,children:e})},u=a(885),m=a(9273),d="contactForm_form__3ay0L",_="contactForm_label__WakW9",p="contactForm_input__wCtae",f="contactForm_button__JixDz",h=function(){var t=(0,n.useState)(""),e=(0,u.Z)(t,2),a=e[0],s=e[1],o=(0,n.useState)(""),l=(0,u.Z)(o,2),h=l[0],x=l[1],N=(0,c.v9)(i.oy),b=(0,c.I0)(),j={inputName:s,inputNumber:x},v=function(t){var e=t.target,a=e.name,n=e.value;j[a](n)};return(0,r.jsxs)("form",{className:d,onSubmit:function(t){t.preventDefault(),N.map((function(t){return t.name})).includes(a.toLocaleLowerCase())?alert('"'.concat(a,'" is already in contact.')):b((0,m.v6)({name:a,number:h})),s(""),x("")},children:[(0,r.jsx)("label",{className:_,htmlFor:"name",children:"Name"}),(0,r.jsx)("input",{className:p,type:"text",name:"inputName",id:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:a,required:!0,onChange:v}),(0,r.jsx)("label",{className:_,htmlFor:"number",children:"Number"}),(0,r.jsx)("input",{className:p,type:"tel",name:"inputNumber",id:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:h,required:!0,onChange:v}),(0,r.jsx)("button",{className:f,type:"submit",children:"Add contact"})]})},x=a(1846),N={contact:"contact_contact__zIaX8",form:"contact_form__u94QM",process:"contact_process__D8Bi7",contactData:"contact_contactData__+x3Ix",input:"contact_input__k-oNm",button:"contact_button__BlnQr",accept:"contact_accept__EFxsH",edit:"contact_edit__x6odk",del:"contact_del__vk3ur"},b=function(t){var e=t.id,a=t.name,s=t.number,o=(0,n.useState)(""),l=(0,u.Z)(o,2),d=l[0],_=l[1],p=(0,n.useState)(""),f=(0,u.Z)(p,2),h=f[0],x=f[1],b=(0,n.useState)(!1),j=(0,u.Z)(b,2),v=j[0],y=j[1],C=(0,n.useState)(!1),g=(0,u.Z)(C,2),L=g[0],A=g[1],Z=(0,n.useState)(!1),k=(0,u.Z)(Z,2),w=k[0],E=k[1],F=(0,c.v9)(i.Py),S=(0,c.I0)(),z={newName:_,newNumber:x};function D(t){var e=t.target,a=e.name,n=e.value;z[a](n)}return(0,n.useEffect)((function(){_(a),x(s)}),[a,s]),(0,n.useEffect)((function(){e===F&&A(!1)}),[e,L,F]),(0,r.jsx)("li",{className:N.contact,children:(0,r.jsxs)("form",{className:N.form,onSubmit:function(t){t.preventDefault(),A(!L);var a={id:e,obj:{name:d,number:h}};S((0,m.LG)(a))},children:[(0,r.jsx)("input",{className:N.input,type:"text",name:"newName",value:d,disabled:!w,onChange:D}),(0,r.jsx)("input",{className:N.input,type:"text",name:"newNumber",value:h,disabled:!w,onChange:D}),L?(0,r.jsx)("span",{className:N.process,children:"Editing..."}):(0,r.jsx)("button",{className:[N.button,w?N.accept:N.edit].join(" "),onClick:function(){E(!w)},type:w?"button":"submit",disabled:L,children:w?"Accept":"Edit"}),v?(0,r.jsx)("span",{className:N.process,children:"Deleting..."}):(0,r.jsx)("button",{className:[N.button,N.del].join(" "),onClick:function(){S((0,m.in)(e)),y(!0)},type:"button",children:"Delete"})]})})},j={contactsContainer:"contactList_contactsContainer__exPNI",contactList:"contactList_contactList__rfM1N",notification:"contactList_notification__6S07N",donate:"contactList_donate__HdxU5",listTitle:"contactList_listTitle__boYys"},v=function(){var t=(0,c.v9)(i.oy),e=(0,c.v9)(i.AD),a=(0,c.v9)(i.xU),s=(0,n.useState)([]),o=(0,u.Z)(s,2),l=o[0],m=o[1];return(0,n.useEffect)((function(){m(t.filter((function(t){var a=t.name;return!(e&&!a.toLowerCase().includes(e.toLowerCase()))})))}),[e,t]),(0,r.jsxs)("div",{className:j.contactsContainer,children:[(0,r.jsxs)("p",{className:j.listTitle,children:["Contacts list",a&&(0,r.jsx)("span",{className:j.donate,children:" (Loading...)"})]}),(0,r.jsxs)("ul",{className:j.contactList,children:[0===t.length&&(0,r.jsx)("li",{className:j.notification,children:(0,r.jsx)("span",{className:j.span,children:"Database is empty, please add new contact."})}),l.map((function(t){return(0,r.jsx)(b,{id:t.id,name:t.name,number:t.number},t.id)})),0===l.length&&(0,r.jsxs)("li",{className:j.notification,children:[""!==e&&(0,r.jsx)("span",{className:j.span,children:'Not founded any contacts on your request - "'.concat(e,'". Please try again. ')}),""===e&&(0,r.jsx)("span",{className:j.span,children:"Please type any name. "}),(0,r.jsx)("span",{className:j.donate,children:"or donate ua army"})]})]})]})},y="filter_filter__HJEMj",C="filter_form__k2iVh",g="filter_label__nHxuJ",L="filter_input__sX944",A=function(){var t=(0,n.useState)(""),e=(0,u.Z)(t,2),a=e[0],s=e[1],o=(0,c.v9)(i.tT).token,l=(0,c.I0)();return(0,n.useEffect)((function(){o&&l((0,m.CL)())}),[l,o]),(0,r.jsxs)("div",{className:y,children:[(0,r.jsxs)("form",{className:C,children:[(0,r.jsx)("label",{className:g,htmlFor:"filter",children:"Filter"}),(0,r.jsx)("input",{className:L,name:"filter",type:"text",id:"filter",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:a,onChange:function(t){var e=t.target;s(e.value),l((0,x.GC)(e.value.trim()))}})]}),(0,r.jsx)(v,{})]})},Z="ContactsPage_MainPage__BAU+J",k=function(){var t=(0,c.v9)(i.tT).isLoggedIn,e=(0,s.s0)();return(0,n.useEffect)((function(){t||e("/signin")})),(0,r.jsxs)("div",{className:Z,children:[(0,r.jsx)(l,{title:"Add contact"}),(0,r.jsx)(h,{}),(0,r.jsx)(l,{title:"Find contact"}),(0,r.jsx)(A,{})]})}}}]);
//# sourceMappingURL=40.9151f00b.chunk.js.map