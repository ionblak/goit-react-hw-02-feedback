(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),o=n(4),s=n(5),b=n(6),j=n(10),d=n(9),u=n(7),l=n.n(u),h=n(0),O=function(e){var t=e.children;return Object(h.jsx)("div",{className:l.a.container,children:t})},p=n(8),f=n.n(p),x=function(e){var t=e.option,n=e.onLeaveFeedback;return Object(h.jsx)("button",{type:"button",className:f.a.button,onClick:function(){return n(t)},children:t})},v=function(e){var t=e.titel;return Object(h.jsx)("h2",{children:t})},k=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},g=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage,i=0===a;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{titel:"Statistics"}),i?Object(h.jsx)(k,{message:"No feedback given"}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",c]}),Object(h.jsxs)("p",{children:["Total: ",a]}),Object(h.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})]})},m=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.incrementFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.bad,c=t.good,a=t.neutral,r=Object.keys(this.state),i=n+c+a;return Object(h.jsxs)(O,{children:[Object(h.jsx)(v,{titel:"Please leave feedback"}),r.map((function(t){return Object(h.jsx)(x,{option:t,onLeaveFeedback:e.incrementFeedback},t)})),Object(h.jsx)(g,{good:c,bad:n,neutral:a,total:i,positivePercentage:Math.round(100*c/i)})]})}}]),n}(a.a.Component);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"Section_container__3T_T8"}},8:function(e,t,n){e.exports={button:"FeedbackOptions_button__iC65b"}}},[[16,1,2]]]);
//# sourceMappingURL=main.6955ca3e.chunk.js.map