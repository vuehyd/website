(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{233:function(t,e,n){var s=n(2);s(s.S,"Date",{now:function(){return(new Date).getTime()}})},235:function(t,e,n){"use strict";n.r(e);n(233);var s={props:["id","title","date","time","venue","townscript","link"],computed:{eventDate:function(){return this.date?new Date(this.date):null},isUpcoming:function(){return this.eventDate&&this.eventDate.getTime()>Date.now()}},methods:{showTicketsPopup:function(){popup(this.townscript)}}},i=n(0),o=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("\n    #"+t._s(t.id)+" "),n("a",{attrs:{href:t.link}},[t._v(t._s(t.title))])]),t._v(" "),t.eventDate?n("div",[n("p",[n("strong",[t._v("Venue:")]),t._v(" "+t._s(t.venue.name)+" ("),n("a",{attrs:{href:t.venue.map,target:"_blank",rel:"noopener noreferrer"}},[t._v("see on map")]),t._v(") "),n("br"),t._v(" "),n("strong",[t._v("Time:")]),t._v(" "+t._s(t.eventDate.toDateString())+", "+t._s(t.time)+"\n    ")]),t._v(" "),t.isUpcoming&&t.townscript?n("p",[n("button",{staticClass:"tsbutton",on:{click:t.showTicketsPopup}},[t._v("Count me in!")]),t._v(" "),n("noscript",{attrs:{id:"tsNoJsMsg"}},[t._v("Javascript on your browser is not enabled.")]),t._v(" "),n("script",{attrs:{src:"https://www.townscript.com/popup-widget/townscript-widget.nocache.js",type:"text/javascript"}})]):t._e()]):t._e()])},[],!1,null,null,null);e.default=o.exports}}]);