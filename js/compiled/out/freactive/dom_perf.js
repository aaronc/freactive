// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.dom_perf');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('freactive.core');
goog.require('freactive.experimental.dom2');
goog.require('freactive.experimental.dom2');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof freactive.dom_perf.mouse_x !== 'undefined')
{} else
{freactive.dom_perf.mouse_x = freactive.core.atom.call(null,(0));
}
if(typeof freactive.dom_perf.mouse_y !== 'undefined')
{} else
{freactive.dom_perf.mouse_y = freactive.core.atom.call(null,(0));
}
freactive.dom_perf.get_window_width = (function get_window_width(){return window.innerWidth;
});
freactive.dom_perf.get_window_height = (function get_window_height(){return window.innerHeight;
});
if(typeof freactive.dom_perf.width !== 'undefined')
{} else
{freactive.dom_perf.width = freactive.core.atom.call(null,freactive.dom_perf.get_window_width.call(null));
}
if(typeof freactive.dom_perf.height !== 'undefined')
{} else
{freactive.dom_perf.height = freactive.core.atom.call(null,freactive.dom_perf.get_window_height.call(null));
}
if(typeof freactive.dom_perf.init !== 'undefined')
{} else
{freactive.dom_perf.init = freactive.experimental.dom2.listen_BANG_.call(null,window,"mousemove",(function (e){cljs.core.reset_BANG_.call(null,freactive.dom_perf.mouse_x,e.clientX);
return cljs.core.reset_BANG_.call(null,freactive.dom_perf.mouse_y,e.clientY);
}));
}
if(typeof freactive.dom_perf.init2 !== 'undefined')
{} else
{freactive.dom_perf.init2 = freactive.experimental.dom2.listen_BANG_.call(null,window,"resize",(function (e){cljs.core.reset_BANG_.call(null,freactive.dom_perf.width,freactive.dom_perf.get_window_width.call(null));
return cljs.core.reset_BANG_.call(null,freactive.dom_perf.height,freactive.dom_perf.get_window_height.call(null));
}));
}
freactive.dom_perf.circle = (function circle(x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","circle","svg/circle",1903393006),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null);
});
if(typeof freactive.dom_perf.n !== 'undefined')
{} else
{freactive.dom_perf.n = freactive.core.atom.call(null,(4));
}
freactive.dom_perf.left_offset_x = (function left_offset_x(i){return freactive.core.rx_STAR_.call(null,(function (){return ((i + (1)) * (cljs.core.deref.call(null,freactive.dom_perf.mouse_x) / (cljs.core.deref.call(null,freactive.dom_perf.n) + (1))));
}),false);
});
freactive.dom_perf.right_offset_x = (function right_offset_x(i){return freactive.core.rx_STAR_.call(null,(function (){var mx = cljs.core.deref.call(null,freactive.dom_perf.mouse_x);return (mx + ((i + (1)) * ((cljs.core.deref.call(null,freactive.dom_perf.width) - mx) / (cljs.core.deref.call(null,freactive.dom_perf.n) + (1)))));
}),false);
});
freactive.dom_perf.top_offset_y = (function top_offset_y(j){return freactive.core.rx_STAR_.call(null,(function (){return ((j + (1)) * (cljs.core.deref.call(null,freactive.dom_perf.mouse_y) / (cljs.core.deref.call(null,freactive.dom_perf.n) + (1))));
}),false);
});
freactive.dom_perf.bottom_offset_y = (function bottom_offset_y(j){return freactive.core.rx_STAR_.call(null,(function (){var my = cljs.core.deref.call(null,freactive.dom_perf.mouse_y);return (my + ((j + (1)) * ((cljs.core.deref.call(null,freactive.dom_perf.height) - my) / (cljs.core.deref.call(null,freactive.dom_perf.n) + (1)))));
}),false);
});
freactive.dom_perf.view = (function view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","svg","svg/svg",856969818),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),freactive.core.rx_STAR_.call(null,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12234__auto__ = (function iter__26497(s__26498){return (new cljs.core.LazySeq(null,(function (){var s__26498__$1 = s__26498;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__26498__$1);if(temp__4388__auto__)
{var s__26498__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26498__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__26498__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__26500 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__26499 = (0);while(true){
if((i__26499 < size__12233__auto__))
{var i = cljs.core._nth.call(null,c__12232__auto__,i__26499);cljs.core.chunk_append.call(null,b__26500,freactive.dom_perf.circle.call(null,freactive.dom_perf.left_offset_x.call(null,i),freactive.dom_perf.mouse_y));
{
var G__26537 = (i__26499 + (1));
i__26499 = G__26537;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26500),iter__26497.call(null,cljs.core.chunk_rest.call(null,s__26498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26500),null);
}
} else
{var i = cljs.core.first.call(null,s__26498__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.left_offset_x.call(null,i),freactive.dom_perf.mouse_y),iter__26497.call(null,cljs.core.rest.call(null,s__26498__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n)));
})()], null);
}),false),freactive.core.rx_STAR_.call(null,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12234__auto__ = (function iter__26501(s__26502){return (new cljs.core.LazySeq(null,(function (){var s__26502__$1 = s__26502;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__26502__$1);if(temp__4388__auto__)
{var s__26502__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26502__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__26502__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__26504 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__26503 = (0);while(true){
if((i__26503 < size__12233__auto__))
{var i = cljs.core._nth.call(null,c__12232__auto__,i__26503);cljs.core.chunk_append.call(null,b__26504,freactive.dom_perf.circle.call(null,freactive.dom_perf.right_offset_x.call(null,i),freactive.dom_perf.mouse_y));
{
var G__26538 = (i__26503 + (1));
i__26503 = G__26538;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26504),iter__26501.call(null,cljs.core.chunk_rest.call(null,s__26502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26504),null);
}
} else
{var i = cljs.core.first.call(null,s__26502__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.right_offset_x.call(null,i),freactive.dom_perf.mouse_y),iter__26501.call(null,cljs.core.rest.call(null,s__26502__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n)));
})()], null);
}),false),freactive.core.rx_STAR_.call(null,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12234__auto__ = (function iter__26505(s__26506){return (new cljs.core.LazySeq(null,(function (){var s__26506__$1 = s__26506;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__26506__$1);if(temp__4388__auto__)
{var s__26506__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26506__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__26506__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__26508 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__26507 = (0);while(true){
if((i__26507 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__26507);cljs.core.chunk_append.call(null,b__26508,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.top_offset_y.call(null,j)));
{
var G__26539 = (i__26507 + (1));
i__26507 = G__26539;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26508),iter__26505.call(null,cljs.core.chunk_rest.call(null,s__26506__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26508),null);
}
} else
{var j = cljs.core.first.call(null,s__26506__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.top_offset_y.call(null,j)),iter__26505.call(null,cljs.core.rest.call(null,s__26506__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n)));
})()], null);
}),false),freactive.core.rx_STAR_.call(null,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12234__auto__ = (function iter__26509(s__26510){return (new cljs.core.LazySeq(null,(function (){var s__26510__$1 = s__26510;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__26510__$1);if(temp__4388__auto__)
{var s__26510__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26510__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__26510__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__26512 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__26511 = (0);while(true){
if((i__26511 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__26511);cljs.core.chunk_append.call(null,b__26512,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.bottom_offset_y.call(null,j)));
{
var G__26540 = (i__26511 + (1));
i__26511 = G__26540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26512),iter__26509.call(null,cljs.core.chunk_rest.call(null,s__26510__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26512),null);
}
} else
{var j = cljs.core.first.call(null,s__26510__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.bottom_offset_y.call(null,j)),iter__26509.call(null,cljs.core.rest.call(null,s__26510__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n)));
})()], null);
}),false),freactive.core.rx_STAR_.call(null,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12234__auto__ = (function iter__26513(s__26514){return (new cljs.core.LazySeq(null,(function (){var s__26514__$1 = s__26514;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__26514__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12230__auto__ = ((function (s__26514__$1,i,xs__4940__auto__,temp__4388__auto__){
return (function iter__26515(s__26516){return (new cljs.core.LazySeq(null,((function (s__26514__$1,i,xs__4940__auto__,temp__4388__auto__){
return (function (){var s__26516__$1 = s__26516;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__26516__$1);if(temp__4388__auto____$1)
{var s__26516__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__26516__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__26516__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__26518 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__26517 = (0);while(true){
if((i__26517 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__26517);cljs.core.chunk_append.call(null,b__26518,freactive.dom_perf.circle.call(null,freactive.dom_perf.left_offset_x.call(null,i),freactive.dom_perf.top_offset_y.call(null,j)));
{
var G__26541 = (i__26517 + (1));
i__26517 = G__26541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26518),iter__26515.call(null,cljs.core.chunk_rest.call(null,s__26516__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26518),null);
}
} else
{var j = cljs.core.first.call(null,s__26516__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.left_offset_x.call(null,i),freactive.dom_perf.top_offset_y.call(null,j)),iter__26515.call(null,cljs.core.rest.call(null,s__26516__$2)));
}
} else
{return null;
}
break;
}
});})(s__26514__$1,i,xs__4940__auto__,temp__4388__auto__))
,null,null));
});})(s__26514__$1,i,xs__4940__auto__,temp__4388__auto__))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n))));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__26513.call(null,cljs.core.rest.call(null,s__26514__$1)));
} else
{{
var G__26542 = cljs.core.rest.call(null,s__26514__$1);
s__26514__$1 = G__26542;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n)));
})()], null);
}),false),freactive.core.rx_STAR_.call(null,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12234__auto__ = (function iter__26519(s__26520){return (new cljs.core.LazySeq(null,(function (){var s__26520__$1 = s__26520;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__26520__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12230__auto__ = ((function (s__26520__$1,i,xs__4940__auto__,temp__4388__auto__){
return (function iter__26521(s__26522){return (new cljs.core.LazySeq(null,((function (s__26520__$1,i,xs__4940__auto__,temp__4388__auto__){
return (function (){var s__26522__$1 = s__26522;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__26522__$1);if(temp__4388__auto____$1)
{var s__26522__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__26522__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__26522__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__26524 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__26523 = (0);while(true){
if((i__26523 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__26523);cljs.core.chunk_append.call(null,b__26524,freactive.dom_perf.circle.call(null,freactive.dom_perf.right_offset_x.call(null,i),freactive.dom_perf.top_offset_y.call(null,j)));
{
var G__26543 = (i__26523 + (1));
i__26523 = G__26543;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26524),iter__26521.call(null,cljs.core.chunk_rest.call(null,s__26522__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26524),null);
}
} else
{var j = cljs.core.first.call(null,s__26522__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.right_offset_x.call(null,i),freactive.dom_perf.top_offset_y.call(null,j)),iter__26521.call(null,cljs.core.rest.call(null,s__26522__$2)));
}
} else
{return null;
}
break;
}
});})(s__26520__$1,i,xs__4940__auto__,temp__4388__auto__))
,null,null));
});})(s__26520__$1,i,xs__4940__auto__,temp__4388__auto__))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n))));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__26519.call(null,cljs.core.rest.call(null,s__26520__$1)));
} else
{{
var G__26544 = cljs.core.rest.call(null,s__26520__$1);
s__26520__$1 = G__26544;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n)));
})()], null);
}),false),freactive.core.rx_STAR_.call(null,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12234__auto__ = (function iter__26525(s__26526){return (new cljs.core.LazySeq(null,(function (){var s__26526__$1 = s__26526;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__26526__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12230__auto__ = ((function (s__26526__$1,i,xs__4940__auto__,temp__4388__auto__){
return (function iter__26527(s__26528){return (new cljs.core.LazySeq(null,((function (s__26526__$1,i,xs__4940__auto__,temp__4388__auto__){
return (function (){var s__26528__$1 = s__26528;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__26528__$1);if(temp__4388__auto____$1)
{var s__26528__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__26528__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__26528__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__26530 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__26529 = (0);while(true){
if((i__26529 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__26529);cljs.core.chunk_append.call(null,b__26530,freactive.dom_perf.circle.call(null,freactive.dom_perf.left_offset_x.call(null,i),freactive.dom_perf.bottom_offset_y.call(null,j)));
{
var G__26545 = (i__26529 + (1));
i__26529 = G__26545;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26530),iter__26527.call(null,cljs.core.chunk_rest.call(null,s__26528__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26530),null);
}
} else
{var j = cljs.core.first.call(null,s__26528__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.left_offset_x.call(null,i),freactive.dom_perf.bottom_offset_y.call(null,j)),iter__26527.call(null,cljs.core.rest.call(null,s__26528__$2)));
}
} else
{return null;
}
break;
}
});})(s__26526__$1,i,xs__4940__auto__,temp__4388__auto__))
,null,null));
});})(s__26526__$1,i,xs__4940__auto__,temp__4388__auto__))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n))));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__26525.call(null,cljs.core.rest.call(null,s__26526__$1)));
} else
{{
var G__26546 = cljs.core.rest.call(null,s__26526__$1);
s__26526__$1 = G__26546;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n)));
})()], null);
}),false),freactive.core.rx_STAR_.call(null,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12234__auto__ = (function iter__26531(s__26532){return (new cljs.core.LazySeq(null,(function (){var s__26532__$1 = s__26532;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__26532__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12230__auto__ = ((function (s__26532__$1,i,xs__4940__auto__,temp__4388__auto__){
return (function iter__26533(s__26534){return (new cljs.core.LazySeq(null,((function (s__26532__$1,i,xs__4940__auto__,temp__4388__auto__){
return (function (){var s__26534__$1 = s__26534;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__26534__$1);if(temp__4388__auto____$1)
{var s__26534__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__26534__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__26534__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__26536 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__26535 = (0);while(true){
if((i__26535 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__26535);cljs.core.chunk_append.call(null,b__26536,freactive.dom_perf.circle.call(null,freactive.dom_perf.right_offset_x.call(null,i),freactive.dom_perf.bottom_offset_y.call(null,j)));
{
var G__26547 = (i__26535 + (1));
i__26535 = G__26547;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26536),iter__26533.call(null,cljs.core.chunk_rest.call(null,s__26534__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26536),null);
}
} else
{var j = cljs.core.first.call(null,s__26534__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.right_offset_x.call(null,i),freactive.dom_perf.bottom_offset_y.call(null,j)),iter__26533.call(null,cljs.core.rest.call(null,s__26534__$2)));
}
} else
{return null;
}
break;
}
});})(s__26532__$1,i,xs__4940__auto__,temp__4388__auto__))
,null,null));
});})(s__26532__$1,i,xs__4940__auto__,temp__4388__auto__))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n))));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__26531.call(null,cljs.core.rest.call(null,s__26532__$1)));
} else
{{
var G__26548 = cljs.core.rest.call(null,s__26532__$1);
s__26532__$1 = G__26548;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,freactive.dom_perf.n)));
})()], null);
}),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","circle","svg/circle",1903393006),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"red",new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),(function (e){return cljs.core.swap_BANG_.call(null,freactive.dom_perf.n,cljs.core.dec);
}),new cljs.core.Keyword(null,"r","r",-471384190),(8),new cljs.core.Keyword(null,"cx","cx",1272694324),(8),new cljs.core.Keyword(null,"cy","cy",755331060),(8)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","circle","svg/circle",1903393006),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"green",new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),(function (e){return cljs.core.swap_BANG_.call(null,freactive.dom_perf.n,cljs.core.inc);
}),new cljs.core.Keyword(null,"r","r",-471384190),(8),new cljs.core.Keyword(null,"cx","cx",1272694324),(24),new cljs.core.Keyword(null,"cy","cy",755331060),(8)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),freactive.core.rx_STAR_.call(null,(function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_x))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_y)));
}),false),". n = ",freactive.core.rx_STAR_.call(null,(function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.n)));
}),false),". complexity = ",freactive.core.rx_STAR_.call(null,(function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var n_STAR___$1 = ((1) + ((2) * n_STAR_));return (n_STAR___$1 * n_STAR___$1);
})()));
}),false)], null)], null);
});
freactive.experimental.dom2.mount_BANG_.call(null,document.getElementById("root"),freactive.dom_perf.view.call(null));
figwheel.client.watch_and_reload.call(null);

//# sourceMappingURL=dom_perf.js.map