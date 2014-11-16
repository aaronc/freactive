// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.dom_perf');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('freactive.experimental.animation');
goog.require('freactive.experimental.animation');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('freactive.core');
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
{freactive.dom_perf.init = (function (){freactive.experimental.dom2.listen_BANG_.call(null,window,"mousemove",(function (e){cljs.core.reset_BANG_.call(null,freactive.dom_perf.mouse_x,e.clientX);
return cljs.core.reset_BANG_.call(null,freactive.dom_perf.mouse_y,e.clientY);
}));
freactive.experimental.dom2.listen_BANG_.call(null,window,"resize",(function (e){cljs.core.reset_BANG_.call(null,freactive.dom_perf.width,freactive.dom_perf.get_window_width.call(null));
return cljs.core.reset_BANG_.call(null,freactive.dom_perf.height,freactive.dom_perf.get_window_height.call(null));
}));
return freactive.experimental.dom2.listen_BANG_.call(null,window,"touchmove",(function (e){var touches = e.touches;if(cljs.core._EQ_.call(null,(1),touches.length))
{e.preventDefault();
var touch = (touches[(0)]);cljs.core.reset_BANG_.call(null,freactive.dom_perf.mouse_x,touch.clientX);
return cljs.core.reset_BANG_.call(null,freactive.dom_perf.mouse_y,touch.clientY);
} else
{return null;
}
}));
})();
}
freactive.dom_perf.circle = (function circle(x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","circle","svg/circle",1903393006),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null);
});
if(typeof freactive.dom_perf.n !== 'undefined')
{} else
{freactive.dom_perf.n = freactive.core.atom.call(null,(4));
}
freactive.dom_perf.spacing_factor = (function spacing_factor(n,i){var i__$1 = (i + (1));var n__$1 = (n + (1));var x = (i__$1 / n__$1);return ((1) - Math.pow(((1) - x),(2)));
});
freactive.dom_perf.btn = (function btn(x,y,fill,text,f){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),f], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","text","svg/text",-1790675845),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((4) + y),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","circle","svg/circle",1903393006),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),(8),new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y], null)], null)], null);
});
freactive.dom_perf.view = (function view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"1em"], null)], null),(function (){var complexity = freactive.core.rx_STAR_.call(null,(function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var n_STAR___$1 = ((1) + ((2) * n_STAR_));return (n_STAR___$1 * n_STAR___$1);
})()));
}),false);return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),freactive.core.rx_STAR_.call(null,((function (complexity){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_x))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_y)));
});})(complexity))
,false),". n = ",freactive.core.rx_STAR_.call(null,((function (complexity){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.n)));
});})(complexity))
,false)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (complexity){
return (function (_){return cljs.core.swap_BANG_.call(null,freactive.dom_perf.n,cljs.core.dec);
});})(complexity))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (complexity){
return (function (_){return cljs.core.swap_BANG_.call(null,freactive.dom_perf.n,cljs.core.inc);
});})(complexity))
], null),"+"], null)," complexity = ",complexity,". fps = ",freactive.core.rx_STAR_.call(null,((function (complexity){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.experimental.dom2.fps)));
});})(complexity))
,false),". That's roughly ",freactive.core.rx_STAR_.call(null,((function (complexity){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,freactive.experimental.dom2.fps) * cljs.core.deref.call(null,complexity))));
});})(complexity))
,false)," DOM attributes updated per second."], null);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","svg","svg/svg",856969818),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),"1em"], null)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),(function (){var ease_x = freactive.experimental.animation.easer.call(null,0.0);var ease_y = freactive.experimental.animation.easer.call(null,0.0);var res__130860__auto__ = (function (){var _STAR_do_trace_captures_STAR_140123 = freactive.core._STAR_do_trace_captures_STAR_;try{freactive.core._STAR_do_trace_captures_STAR_ = ((function (_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (x){return null;
});})(_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;
return freactive.core.rx_STAR_.call(null,((function (_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var spacer = cljs.core.partial.call(null,freactive.dom_perf.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140124(s__140125){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140125__$1 = s__140125;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140125__$1);if(temp__4388__auto__)
{var s__140125__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140125__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140125__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140127 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140126 = (0);while(true){
if((i__140126 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__140126);cljs.core.chunk_append.call(null,b__140127,freactive.core.rx_STAR_.call(null,((function (i__140126,x,c__12234__auto__,size__12235__auto__,b__140127,s__140125__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(i__140126,x,c__12234__auto__,size__12235__auto__,b__140127,s__140125__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,false));
{
var G__140180 = (i__140126 + (1));
i__140126 = G__140180;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140127),iter__140124.call(null,cljs.core.chunk_rest.call(null,s__140125__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140127),null);
}
} else
{var x = cljs.core.first.call(null,s__140125__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__140125__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(x,s__140125__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,false),iter__140124.call(null,cljs.core.rest.call(null,s__140125__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,offsets);
})());var rights = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140128(s__140129){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140129__$1 = s__140129;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140129__$1);if(temp__4388__auto__)
{var s__140129__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140129__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140129__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140131 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140130 = (0);while(true){
if((i__140130 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__140130);cljs.core.chunk_append.call(null,b__140131,freactive.core.rx_STAR_.call(null,((function (i__140130,x,c__12234__auto__,size__12235__auto__,b__140131,s__140129__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(i__140130,x,c__12234__auto__,size__12235__auto__,b__140131,s__140129__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,false));
{
var G__140181 = (i__140130 + (1));
i__140130 = G__140181;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140131),iter__140128.call(null,cljs.core.chunk_rest.call(null,s__140129__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140131),null);
}
} else
{var x = cljs.core.first.call(null,s__140129__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__140129__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(x,s__140129__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,false),iter__140128.call(null,cljs.core.rest.call(null,s__140129__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());var tops = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140132(s__140133){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140133__$1 = s__140133;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140133__$1);if(temp__4388__auto__)
{var s__140133__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140133__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140133__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140135 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140134 = (0);while(true){
if((i__140134 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__140134);cljs.core.chunk_append.call(null,b__140135,freactive.core.rx_STAR_.call(null,((function (i__140134,y,c__12234__auto__,size__12235__auto__,b__140135,s__140133__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(i__140134,y,c__12234__auto__,size__12235__auto__,b__140135,s__140133__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,false));
{
var G__140182 = (i__140134 + (1));
i__140134 = G__140182;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140135),iter__140132.call(null,cljs.core.chunk_rest.call(null,s__140133__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140135),null);
}
} else
{var y = cljs.core.first.call(null,s__140133__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__140133__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(y,s__140133__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,false),iter__140132.call(null,cljs.core.rest.call(null,s__140133__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,offsets);
})());var bottoms = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140136(s__140137){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140137__$1 = s__140137;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140137__$1);if(temp__4388__auto__)
{var s__140137__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140137__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140137__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140139 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140138 = (0);while(true){
if((i__140138 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__140138);cljs.core.chunk_append.call(null,b__140139,freactive.core.rx_STAR_.call(null,((function (i__140138,y,c__12234__auto__,size__12235__auto__,b__140139,s__140137__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(i__140138,y,c__12234__auto__,size__12235__auto__,b__140139,s__140137__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,false));
{
var G__140183 = (i__140138 + (1));
i__140138 = G__140183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140139),iter__140136.call(null,cljs.core.chunk_rest.call(null,s__140137__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140139),null);
}
} else
{var y = cljs.core.first.call(null,s__140137__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__140137__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(y,s__140137__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,false),iter__140136.call(null,cljs.core.rest.call(null,s__140137__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());return freactive.experimental.dom2.with_transitions.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140140(s__140141){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140141__$1 = s__140141;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140141__$1);if(temp__4388__auto__)
{var s__140141__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140141__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140141__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140143 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140142 = (0);while(true){
if((i__140142 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__140142);cljs.core.chunk_append.call(null,b__140143,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__140184 = (i__140142 + (1));
i__140142 = G__140184;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140143),iter__140140.call(null,cljs.core.chunk_rest.call(null,s__140141__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140143),null);
}
} else
{var i = cljs.core.first.call(null,s__140141__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__140140.call(null,cljs.core.rest.call(null,s__140141__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140144(s__140145){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140145__$1 = s__140145;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140145__$1);if(temp__4388__auto__)
{var s__140145__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140145__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140145__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140147 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140146 = (0);while(true){
if((i__140146 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__140146);cljs.core.chunk_append.call(null,b__140147,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__140185 = (i__140146 + (1));
i__140146 = G__140185;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140147),iter__140144.call(null,cljs.core.chunk_rest.call(null,s__140145__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140147),null);
}
} else
{var i = cljs.core.first.call(null,s__140145__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__140144.call(null,cljs.core.rest.call(null,s__140145__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140148(s__140149){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140149__$1 = s__140149;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140149__$1);if(temp__4388__auto__)
{var s__140149__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140149__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140149__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140151 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140150 = (0);while(true){
if((i__140150 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140150);cljs.core.chunk_append.call(null,b__140151,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__140186 = (i__140150 + (1));
i__140150 = G__140186;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140151),iter__140148.call(null,cljs.core.chunk_rest.call(null,s__140149__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140151),null);
}
} else
{var j = cljs.core.first.call(null,s__140149__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__140148.call(null,cljs.core.rest.call(null,s__140149__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140152(s__140153){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140153__$1 = s__140153;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140153__$1);if(temp__4388__auto__)
{var s__140153__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140153__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140153__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140155 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140154 = (0);while(true){
if((i__140154 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140154);cljs.core.chunk_append.call(null,b__140155,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__140187 = (i__140154 + (1));
i__140154 = G__140187;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140155),iter__140152.call(null,cljs.core.chunk_rest.call(null,s__140153__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140155),null);
}
} else
{var j = cljs.core.first.call(null,s__140153__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__140152.call(null,cljs.core.rest.call(null,s__140153__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140156(s__140157){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140157__$1 = s__140157;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140157__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140157__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140158(s__140159){return (new cljs.core.LazySeq(null,((function (s__140157__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140159__$1 = s__140159;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140159__$1);if(temp__4388__auto____$1)
{var s__140159__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140159__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140159__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140161 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140160 = (0);while(true){
if((i__140160 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140160);cljs.core.chunk_append.call(null,b__140161,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__140188 = (i__140160 + (1));
i__140160 = G__140188;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140161),iter__140158.call(null,cljs.core.chunk_rest.call(null,s__140159__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140161),null);
}
} else
{var j = cljs.core.first.call(null,s__140159__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__140158.call(null,cljs.core.rest.call(null,s__140159__$2)));
}
} else
{return null;
}
break;
}
});})(s__140157__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(s__140157__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140156.call(null,cljs.core.rest.call(null,s__140157__$1)));
} else
{{
var G__140189 = cljs.core.rest.call(null,s__140157__$1);
s__140157__$1 = G__140189;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140162(s__140163){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140163__$1 = s__140163;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140163__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140163__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140164(s__140165){return (new cljs.core.LazySeq(null,((function (s__140163__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140165__$1 = s__140165;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140165__$1);if(temp__4388__auto____$1)
{var s__140165__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140165__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140165__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140167 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140166 = (0);while(true){
if((i__140166 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140166);cljs.core.chunk_append.call(null,b__140167,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__140190 = (i__140166 + (1));
i__140166 = G__140190;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140167),iter__140164.call(null,cljs.core.chunk_rest.call(null,s__140165__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140167),null);
}
} else
{var j = cljs.core.first.call(null,s__140165__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__140164.call(null,cljs.core.rest.call(null,s__140165__$2)));
}
} else
{return null;
}
break;
}
});})(s__140163__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(s__140163__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140162.call(null,cljs.core.rest.call(null,s__140163__$1)));
} else
{{
var G__140191 = cljs.core.rest.call(null,s__140163__$1);
s__140163__$1 = G__140191;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140168(s__140169){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140169__$1 = s__140169;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140169__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140169__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140170(s__140171){return (new cljs.core.LazySeq(null,((function (s__140169__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140171__$1 = s__140171;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140171__$1);if(temp__4388__auto____$1)
{var s__140171__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140171__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140171__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140173 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140172 = (0);while(true){
if((i__140172 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140172);cljs.core.chunk_append.call(null,b__140173,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__140192 = (i__140172 + (1));
i__140172 = G__140192;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140173),iter__140170.call(null,cljs.core.chunk_rest.call(null,s__140171__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140173),null);
}
} else
{var j = cljs.core.first.call(null,s__140171__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__140170.call(null,cljs.core.rest.call(null,s__140171__$2)));
}
} else
{return null;
}
break;
}
});})(s__140169__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(s__140169__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140168.call(null,cljs.core.rest.call(null,s__140169__$1)));
} else
{{
var G__140193 = cljs.core.rest.call(null,s__140169__$1);
s__140169__$1 = G__140193;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140174(s__140175){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140175__$1 = s__140175;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140175__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140175__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function iter__140176(s__140177){return (new cljs.core.LazySeq(null,((function (s__140175__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (){var s__140177__$1 = s__140177;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140177__$1);if(temp__4388__auto____$1)
{var s__140177__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140177__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140177__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140179 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140178 = (0);while(true){
if((i__140178 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140178);cljs.core.chunk_append.call(null,b__140179,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__140194 = (i__140178 + (1));
i__140178 = G__140194;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140179),iter__140176.call(null,cljs.core.chunk_rest.call(null,s__140177__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140179),null);
}
} else
{var j = cljs.core.first.call(null,s__140177__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__140176.call(null,cljs.core.rest.call(null,s__140177__$2)));
}
} else
{return null;
}
break;
}
});})(s__140175__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(s__140175__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140174.call(null,cljs.core.rest.call(null,s__140175__$1)));
} else
{{
var G__140195 = cljs.core.rest.call(null,s__140175__$1);
s__140175__$1 = G__140195;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-show","on-show",-1100796727),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (x,cb){freactive.experimental.animation.start_easer_BANG_.call(null,ease_x,0.0,1.0,(1000),freactive.experimental.animation.quad_in,cb);
return freactive.experimental.animation.start_easer_BANG_.call(null,ease_y,0.0,1.0,(1000),freactive.experimental.animation.quad_out,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y){
return (function (x,cb){freactive.experimental.animation.start_easer_BANG_.call(null,ease_x,1.0,0.0,(1000),freactive.experimental.animation.quad_out,cb);
return freactive.experimental.animation.start_easer_BANG_.call(null,ease_y,1.0,0.0,(1000),freactive.experimental.animation.quad_in,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
], null));
});})(_STAR_do_trace_captures_STAR_140123,ease_x,ease_y))
,false);
}finally {freactive.core._STAR_do_trace_captures_STAR_ = _STAR_do_trace_captures_STAR_140123;
}})();freactive.core.add_invalidation_watch.call(null,res__130860__auto__,((function (res__130860__auto__,ease_x,ease_y){
return (function (){return null;
});})(res__130860__auto__,ease_x,ease_y))
,((function (res__130860__auto__,ease_x,ease_y){
return (function (){return null;
});})(res__130860__auto__,ease_x,ease_y))
);
return res__130860__auto__;
})()], null)], null);
});
freactive.experimental.dom2.mount_BANG_.call(null,document.getElementById("root"),freactive.dom_perf.view.call(null));
figwheel.client.watch_and_reload.call(null);

//# sourceMappingURL=dom_perf.js.map