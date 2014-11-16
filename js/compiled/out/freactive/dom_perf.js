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
freactive.dom_perf.view = (function view(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"12px"], null)], null),(function (){var complexity = freactive.core.rx_STAR_.call(null,(function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var n_STAR___$1 = ((1) + ((2) * n_STAR_));return (n_STAR___$1 * n_STAR___$1);
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
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","svg","svg/svg",856969818),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),"14px"], null),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),freactive.core.rx_STAR_.call(null,(function (){return ("0 14 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.width))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.height)));
}),false)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),(function (){var ease_x = freactive.experimental.animation.easer.call(null,0.0);var ease_y = freactive.experimental.animation.easer.call(null,0.0);var res__130860__auto__ = (function (){var _STAR_do_trace_captures_STAR_140645 = freactive.core._STAR_do_trace_captures_STAR_;try{freactive.core._STAR_do_trace_captures_STAR_ = ((function (_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (x){return null;
});})(_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;
return freactive.core.rx_STAR_.call(null,((function (_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var spacer = cljs.core.partial.call(null,freactive.dom_perf.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140646(s__140647){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140647__$1 = s__140647;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140647__$1);if(temp__4388__auto__)
{var s__140647__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140647__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140647__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140649 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140648 = (0);while(true){
if((i__140648 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__140648);cljs.core.chunk_append.call(null,b__140649,freactive.core.rx_STAR_.call(null,((function (i__140648,x,c__12234__auto__,size__12235__auto__,b__140649,s__140647__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(i__140648,x,c__12234__auto__,size__12235__auto__,b__140649,s__140647__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,false));
{
var G__140702 = (i__140648 + (1));
i__140648 = G__140702;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140649),iter__140646.call(null,cljs.core.chunk_rest.call(null,s__140647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140649),null);
}
} else
{var x = cljs.core.first.call(null,s__140647__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__140647__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(x,s__140647__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,false),iter__140646.call(null,cljs.core.rest.call(null,s__140647__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,offsets);
})());var rights = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140650(s__140651){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140651__$1 = s__140651;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140651__$1);if(temp__4388__auto__)
{var s__140651__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140651__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140651__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140653 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140652 = (0);while(true){
if((i__140652 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__140652);cljs.core.chunk_append.call(null,b__140653,freactive.core.rx_STAR_.call(null,((function (i__140652,x,c__12234__auto__,size__12235__auto__,b__140653,s__140651__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(i__140652,x,c__12234__auto__,size__12235__auto__,b__140653,s__140651__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,false));
{
var G__140703 = (i__140652 + (1));
i__140652 = G__140703;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140653),iter__140650.call(null,cljs.core.chunk_rest.call(null,s__140651__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140653),null);
}
} else
{var x = cljs.core.first.call(null,s__140651__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__140651__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(x,s__140651__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,false),iter__140650.call(null,cljs.core.rest.call(null,s__140651__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());var tops = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140654(s__140655){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140655__$1 = s__140655;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140655__$1);if(temp__4388__auto__)
{var s__140655__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140655__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140655__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140657 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140656 = (0);while(true){
if((i__140656 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__140656);cljs.core.chunk_append.call(null,b__140657,freactive.core.rx_STAR_.call(null,((function (i__140656,y,c__12234__auto__,size__12235__auto__,b__140657,s__140655__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(i__140656,y,c__12234__auto__,size__12235__auto__,b__140657,s__140655__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,false));
{
var G__140704 = (i__140656 + (1));
i__140656 = G__140704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140657),iter__140654.call(null,cljs.core.chunk_rest.call(null,s__140655__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140657),null);
}
} else
{var y = cljs.core.first.call(null,s__140655__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__140655__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(y,s__140655__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,false),iter__140654.call(null,cljs.core.rest.call(null,s__140655__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,offsets);
})());var bottoms = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140658(s__140659){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140659__$1 = s__140659;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140659__$1);if(temp__4388__auto__)
{var s__140659__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140659__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140659__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140661 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140660 = (0);while(true){
if((i__140660 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__140660);cljs.core.chunk_append.call(null,b__140661,freactive.core.rx_STAR_.call(null,((function (i__140660,y,c__12234__auto__,size__12235__auto__,b__140661,s__140659__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(i__140660,y,c__12234__auto__,size__12235__auto__,b__140661,s__140659__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,false));
{
var G__140705 = (i__140660 + (1));
i__140660 = G__140705;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140661),iter__140658.call(null,cljs.core.chunk_rest.call(null,s__140659__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140661),null);
}
} else
{var y = cljs.core.first.call(null,s__140659__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__140659__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(y,s__140659__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,false),iter__140658.call(null,cljs.core.rest.call(null,s__140659__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());return freactive.experimental.dom2.with_transitions.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140662(s__140663){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140663__$1 = s__140663;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140663__$1);if(temp__4388__auto__)
{var s__140663__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140663__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140663__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140665 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140664 = (0);while(true){
if((i__140664 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__140664);cljs.core.chunk_append.call(null,b__140665,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__140706 = (i__140664 + (1));
i__140664 = G__140706;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140665),iter__140662.call(null,cljs.core.chunk_rest.call(null,s__140663__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140665),null);
}
} else
{var i = cljs.core.first.call(null,s__140663__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__140662.call(null,cljs.core.rest.call(null,s__140663__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140666(s__140667){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140667__$1 = s__140667;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140667__$1);if(temp__4388__auto__)
{var s__140667__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140667__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140667__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140669 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140668 = (0);while(true){
if((i__140668 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__140668);cljs.core.chunk_append.call(null,b__140669,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__140707 = (i__140668 + (1));
i__140668 = G__140707;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140669),iter__140666.call(null,cljs.core.chunk_rest.call(null,s__140667__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140669),null);
}
} else
{var i = cljs.core.first.call(null,s__140667__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__140666.call(null,cljs.core.rest.call(null,s__140667__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140670(s__140671){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140671__$1 = s__140671;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140671__$1);if(temp__4388__auto__)
{var s__140671__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140671__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140671__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140673 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140672 = (0);while(true){
if((i__140672 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140672);cljs.core.chunk_append.call(null,b__140673,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__140708 = (i__140672 + (1));
i__140672 = G__140708;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140673),iter__140670.call(null,cljs.core.chunk_rest.call(null,s__140671__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140673),null);
}
} else
{var j = cljs.core.first.call(null,s__140671__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__140670.call(null,cljs.core.rest.call(null,s__140671__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140674(s__140675){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140675__$1 = s__140675;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140675__$1);if(temp__4388__auto__)
{var s__140675__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__140675__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140675__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140677 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140676 = (0);while(true){
if((i__140676 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140676);cljs.core.chunk_append.call(null,b__140677,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__140709 = (i__140676 + (1));
i__140676 = G__140709;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140677),iter__140674.call(null,cljs.core.chunk_rest.call(null,s__140675__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140677),null);
}
} else
{var j = cljs.core.first.call(null,s__140675__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__140674.call(null,cljs.core.rest.call(null,s__140675__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140678(s__140679){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140679__$1 = s__140679;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140679__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140679__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140680(s__140681){return (new cljs.core.LazySeq(null,((function (s__140679__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140681__$1 = s__140681;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140681__$1);if(temp__4388__auto____$1)
{var s__140681__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140681__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140681__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140683 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140682 = (0);while(true){
if((i__140682 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140682);cljs.core.chunk_append.call(null,b__140683,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__140710 = (i__140682 + (1));
i__140682 = G__140710;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140683),iter__140680.call(null,cljs.core.chunk_rest.call(null,s__140681__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140683),null);
}
} else
{var j = cljs.core.first.call(null,s__140681__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__140680.call(null,cljs.core.rest.call(null,s__140681__$2)));
}
} else
{return null;
}
break;
}
});})(s__140679__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(s__140679__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140678.call(null,cljs.core.rest.call(null,s__140679__$1)));
} else
{{
var G__140711 = cljs.core.rest.call(null,s__140679__$1);
s__140679__$1 = G__140711;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140684(s__140685){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140685__$1 = s__140685;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140685__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140685__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140686(s__140687){return (new cljs.core.LazySeq(null,((function (s__140685__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140687__$1 = s__140687;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140687__$1);if(temp__4388__auto____$1)
{var s__140687__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140687__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140687__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140689 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140688 = (0);while(true){
if((i__140688 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140688);cljs.core.chunk_append.call(null,b__140689,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__140712 = (i__140688 + (1));
i__140688 = G__140712;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140689),iter__140686.call(null,cljs.core.chunk_rest.call(null,s__140687__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140689),null);
}
} else
{var j = cljs.core.first.call(null,s__140687__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__140686.call(null,cljs.core.rest.call(null,s__140687__$2)));
}
} else
{return null;
}
break;
}
});})(s__140685__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(s__140685__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140684.call(null,cljs.core.rest.call(null,s__140685__$1)));
} else
{{
var G__140713 = cljs.core.rest.call(null,s__140685__$1);
s__140685__$1 = G__140713;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140690(s__140691){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140691__$1 = s__140691;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140691__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140691__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140692(s__140693){return (new cljs.core.LazySeq(null,((function (s__140691__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140693__$1 = s__140693;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140693__$1);if(temp__4388__auto____$1)
{var s__140693__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140693__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140693__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140695 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140694 = (0);while(true){
if((i__140694 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140694);cljs.core.chunk_append.call(null,b__140695,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__140714 = (i__140694 + (1));
i__140694 = G__140714;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140695),iter__140692.call(null,cljs.core.chunk_rest.call(null,s__140693__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140695),null);
}
} else
{var j = cljs.core.first.call(null,s__140693__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__140692.call(null,cljs.core.rest.call(null,s__140693__$2)));
}
} else
{return null;
}
break;
}
});})(s__140691__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(s__140691__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140690.call(null,cljs.core.rest.call(null,s__140691__$1)));
} else
{{
var G__140715 = cljs.core.rest.call(null,s__140691__$1);
s__140691__$1 = G__140715;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140696(s__140697){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140697__$1 = s__140697;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__140697__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__140697__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function iter__140698(s__140699){return (new cljs.core.LazySeq(null,((function (s__140697__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (){var s__140699__$1 = s__140699;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__140699__$1);if(temp__4388__auto____$1)
{var s__140699__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__140699__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__140699__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__140701 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__140700 = (0);while(true){
if((i__140700 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__140700);cljs.core.chunk_append.call(null,b__140701,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__140716 = (i__140700 + (1));
i__140700 = G__140716;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140701),iter__140698.call(null,cljs.core.chunk_rest.call(null,s__140699__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__140701),null);
}
} else
{var j = cljs.core.first.call(null,s__140699__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__140698.call(null,cljs.core.rest.call(null,s__140699__$2)));
}
} else
{return null;
}
break;
}
});})(s__140697__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(s__140697__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__140696.call(null,cljs.core.rest.call(null,s__140697__$1)));
} else
{{
var G__140717 = cljs.core.rest.call(null,s__140697__$1);
s__140697__$1 = G__140717;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-show","on-show",-1100796727),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (x,cb){freactive.experimental.animation.start_easer_BANG_.call(null,ease_x,0.0,1.0,(1000),freactive.experimental.animation.quad_in,cb);
return freactive.experimental.animation.start_easer_BANG_.call(null,ease_y,0.0,1.0,(1000),freactive.experimental.animation.quad_out,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y){
return (function (x,cb){freactive.experimental.animation.start_easer_BANG_.call(null,ease_x,1.0,0.0,(1000),freactive.experimental.animation.quad_out,cb);
return freactive.experimental.animation.start_easer_BANG_.call(null,ease_y,1.0,0.0,(1000),freactive.experimental.animation.quad_in,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
], null));
});})(_STAR_do_trace_captures_STAR_140645,ease_x,ease_y))
,false);
}finally {freactive.core._STAR_do_trace_captures_STAR_ = _STAR_do_trace_captures_STAR_140645;
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