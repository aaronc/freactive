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
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","svg","svg/svg",856969818),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),"1em"], null)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),(function (){var ease_x = freactive.experimental.animation.easer.call(null,0.0);var ease_y = freactive.experimental.animation.easer.call(null,0.0);var res__130860__auto__ = (function (){var _STAR_do_trace_captures_STAR_139991 = freactive.core._STAR_do_trace_captures_STAR_;try{freactive.core._STAR_do_trace_captures_STAR_ = ((function (_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (x){return null;
});})(_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;
return freactive.core.rx_STAR_.call(null,((function (_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var spacer = cljs.core.partial.call(null,freactive.dom_perf.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__139992(s__139993){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__139993__$1 = s__139993;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__139993__$1);if(temp__4388__auto__)
{var s__139993__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__139993__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__139993__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__139995 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__139994 = (0);while(true){
if((i__139994 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__139994);cljs.core.chunk_append.call(null,b__139995,freactive.core.rx_STAR_.call(null,((function (i__139994,x,c__12234__auto__,size__12235__auto__,b__139995,s__139993__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(i__139994,x,c__12234__auto__,size__12235__auto__,b__139995,s__139993__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,false));
{
var G__140048 = (i__139994 + (1));
i__139994 = G__140048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__139995),iter__139992.call(null,cljs.core.chunk_rest.call(null,s__139993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__139995),null);
}
} else
{var x = cljs.core.first.call(null,s__139993__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__139993__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(x,s__139993__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,false),iter__139992.call(null,cljs.core.rest.call(null,s__139993__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,offsets);
})());var rights = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__139996(s__139997){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__139997__$1 = s__139997;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__139997__$1);if(temp__4388__auto__)
{var s__139997__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__139997__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__139997__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__139999 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__139998 = (0);while(true){
if((i__139998 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__139998);cljs.core.chunk_append.call(null,b__139999,freactive.core.rx_STAR_.call(null,((function (i__139998,x,c__12234__auto__,size__12235__auto__,b__139999,s__139997__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(i__139998,x,c__12234__auto__,size__12235__auto__,b__139999,s__139997__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,false));
{
var G__140049 = (i__139998 + (1));
i__139998 = G__140049;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__139999),iter__139996.call(null,cljs.core.chunk_rest.call(null,s__139997__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__139999),null);
}
} else
{var x = cljs.core.first.call(null,s__139997__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__139997__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(x,s__139997__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,false),iter__139996.call(null,cljs.core.rest.call(null,s__139997__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());var tops = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140000(s__140001){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140001__$1 = s__140001;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140001__$1);if(temp__4388__auto__)
{var s__140001__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140001__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140001__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140003 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140002 = (0);while(true){
if((i__140002 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__140002);cljs.core.chunk_append.call(null,b__140003,freactive.core.rx_STAR_.call(null,((function (i__140002,y,c__12234__auto__,size__12235__auto__,b__140003,s__140001__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(i__140002,y,c__12234__auto__,size__12235__auto__,b__140003,s__140001__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,false));
{
var G__140050 = (i__140002 + (1));
i__140002 = G__140050;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140003),iter__140000.call(null,cljs.core.chunk_rest.call(null,s__140001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140003),null);
}
} else
{var y = cljs.core.first.call(null,s__140001__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__140001__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(y,s__140001__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,false),iter__140000.call(null,cljs.core.rest.call(null,s__140001__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,offsets);
})());var bottoms = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140004(s__140005){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140005__$1 = s__140005;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140005__$1);if(temp__4388__auto__)
{var s__140005__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140005__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140005__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140007 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140006 = (0);while(true){
if((i__140006 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__140006);cljs.core.chunk_append.call(null,b__140007,freactive.core.rx_STAR_.call(null,((function (i__140006,y,c__12234__auto__,size__12235__auto__,b__140007,s__140005__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(i__140006,y,c__12234__auto__,size__12235__auto__,b__140007,s__140005__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,false));
{
var G__140051 = (i__140006 + (1));
i__140006 = G__140051;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140007),iter__140004.call(null,cljs.core.chunk_rest.call(null,s__140005__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140007),null);
}
} else
{var y = cljs.core.first.call(null,s__140005__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__140005__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(y,s__140005__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,false),iter__140004.call(null,cljs.core.rest.call(null,s__140005__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());return freactive.experimental.dom2.with_transitions.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140008(s__140009){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140009__$1 = s__140009;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140009__$1);if(temp__4388__auto__)
{var s__140009__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140009__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140009__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140011 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140010 = (0);while(true){
if((i__140010 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__140010);cljs.core.chunk_append.call(null,b__140011,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__140052 = (i__140010 + (1));
i__140010 = G__140052;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140011),iter__140008.call(null,cljs.core.chunk_rest.call(null,s__140009__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140011),null);
}
} else
{var i = cljs.core.first.call(null,s__140009__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__140008.call(null,cljs.core.rest.call(null,s__140009__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140012(s__140013){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140013__$1 = s__140013;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140013__$1);if(temp__4388__auto__)
{var s__140013__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140013__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140013__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140015 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140014 = (0);while(true){
if((i__140014 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__140014);cljs.core.chunk_append.call(null,b__140015,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__140053 = (i__140014 + (1));
i__140014 = G__140053;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140015),iter__140012.call(null,cljs.core.chunk_rest.call(null,s__140013__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140015),null);
}
} else
{var i = cljs.core.first.call(null,s__140013__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__140012.call(null,cljs.core.rest.call(null,s__140013__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140016(s__140017){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140017__$1 = s__140017;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140017__$1);if(temp__4388__auto__)
{var s__140017__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140017__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140017__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140019 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140018 = (0);while(true){
if((i__140018 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140018);cljs.core.chunk_append.call(null,b__140019,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__140054 = (i__140018 + (1));
i__140018 = G__140054;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140019),iter__140016.call(null,cljs.core.chunk_rest.call(null,s__140017__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140019),null);
}
} else
{var j = cljs.core.first.call(null,s__140017__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__140016.call(null,cljs.core.rest.call(null,s__140017__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140020(s__140021){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140021__$1 = s__140021;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140021__$1);if(temp__4388__auto__)
{var s__140021__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140021__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140021__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140023 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140022 = (0);while(true){
if((i__140022 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140022);cljs.core.chunk_append.call(null,b__140023,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__140055 = (i__140022 + (1));
i__140022 = G__140055;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140023),iter__140020.call(null,cljs.core.chunk_rest.call(null,s__140021__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140023),null);
}
} else
{var j = cljs.core.first.call(null,s__140021__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__140020.call(null,cljs.core.rest.call(null,s__140021__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140024(s__140025){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140025__$1 = s__140025;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140025__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140025__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140026(s__140027){return (new cljs.core.LazySeq(null,((function (s__140025__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140027__$1 = s__140027;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140027__$1);if(temp__4388__auto____$1)
{var s__140027__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140027__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140027__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140029 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140028 = (0);while(true){
if((i__140028 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140028);cljs.core.chunk_append.call(null,b__140029,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__140056 = (i__140028 + (1));
i__140028 = G__140056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140029),iter__140026.call(null,cljs.core.chunk_rest.call(null,s__140027__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140029),null);
}
} else
{var j = cljs.core.first.call(null,s__140027__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__140026.call(null,cljs.core.rest.call(null,s__140027__$2)));
}
} else
{return null;
}
break;
}
});})(s__140025__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(s__140025__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140024.call(null,cljs.core.rest.call(null,s__140025__$1)));
} else
{{
var G__140057 = cljs.core.rest.call(null,s__140025__$1);
s__140025__$1 = G__140057;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140030(s__140031){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140031__$1 = s__140031;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140031__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140031__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140032(s__140033){return (new cljs.core.LazySeq(null,((function (s__140031__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140033__$1 = s__140033;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140033__$1);if(temp__4388__auto____$1)
{var s__140033__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140033__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140033__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140035 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140034 = (0);while(true){
if((i__140034 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140034);cljs.core.chunk_append.call(null,b__140035,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__140058 = (i__140034 + (1));
i__140034 = G__140058;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140035),iter__140032.call(null,cljs.core.chunk_rest.call(null,s__140033__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140035),null);
}
} else
{var j = cljs.core.first.call(null,s__140033__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__140032.call(null,cljs.core.rest.call(null,s__140033__$2)));
}
} else
{return null;
}
break;
}
});})(s__140031__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(s__140031__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140030.call(null,cljs.core.rest.call(null,s__140031__$1)));
} else
{{
var G__140059 = cljs.core.rest.call(null,s__140031__$1);
s__140031__$1 = G__140059;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140036(s__140037){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140037__$1 = s__140037;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140037__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140037__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140038(s__140039){return (new cljs.core.LazySeq(null,((function (s__140037__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140039__$1 = s__140039;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140039__$1);if(temp__4388__auto____$1)
{var s__140039__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140039__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140039__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140041 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140040 = (0);while(true){
if((i__140040 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140040);cljs.core.chunk_append.call(null,b__140041,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__140060 = (i__140040 + (1));
i__140040 = G__140060;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140041),iter__140038.call(null,cljs.core.chunk_rest.call(null,s__140039__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140041),null);
}
} else
{var j = cljs.core.first.call(null,s__140039__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__140038.call(null,cljs.core.rest.call(null,s__140039__$2)));
}
} else
{return null;
}
break;
}
});})(s__140037__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(s__140037__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140036.call(null,cljs.core.rest.call(null,s__140037__$1)));
} else
{{
var G__140061 = cljs.core.rest.call(null,s__140037__$1);
s__140037__$1 = G__140061;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140042(s__140043){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140043__$1 = s__140043;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140043__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140043__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function iter__140044(s__140045){return (new cljs.core.LazySeq(null,((function (s__140043__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (){var s__140045__$1 = s__140045;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140045__$1);if(temp__4388__auto____$1)
{var s__140045__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140045__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140045__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140047 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140046 = (0);while(true){
if((i__140046 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140046);cljs.core.chunk_append.call(null,b__140047,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__140062 = (i__140046 + (1));
i__140046 = G__140062;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140047),iter__140044.call(null,cljs.core.chunk_rest.call(null,s__140045__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140047),null);
}
} else
{var j = cljs.core.first.call(null,s__140045__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__140044.call(null,cljs.core.rest.call(null,s__140045__$2)));
}
} else
{return null;
}
break;
}
});})(s__140043__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(s__140043__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140042.call(null,cljs.core.rest.call(null,s__140043__$1)));
} else
{{
var G__140063 = cljs.core.rest.call(null,s__140043__$1);
s__140043__$1 = G__140063;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-show","on-show",-1100796727),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (x,cb){freactive.experimental.animation.start_easer_BANG_.call(null,ease_x,0.0,1.0,(1000),freactive.experimental.animation.quad_in,cb);
return freactive.experimental.animation.start_easer_BANG_.call(null,ease_y,0.0,1.0,(1000),freactive.experimental.animation.quad_out,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y){
return (function (x,cb){freactive.experimental.animation.start_easer_BANG_.call(null,ease_x,1.0,0.0,(1000),freactive.experimental.animation.quad_in,cb);
return freactive.experimental.animation.start_easer_BANG_.call(null,ease_y,1.0,0.0,(1000),freactive.experimental.animation.quad_out,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
], null));
});})(_STAR_do_trace_captures_STAR_139991,ease_x,ease_y))
,false);
}finally {freactive.core._STAR_do_trace_captures_STAR_ = _STAR_do_trace_captures_STAR_139991;
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