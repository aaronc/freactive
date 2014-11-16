// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.dom_perf');
goog.require('cljs.core');
goog.require('freactive.core');
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
,false),". That' is roughly ",freactive.core.rx_STAR_.call(null,((function (complexity){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,freactive.experimental.dom2.fps) * cljs.core.deref.call(null,complexity))));
});})(complexity))
,false)," DOM attributes updated per second."], null);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","svg","svg/svg",856969818),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),"1em"], null)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),(function (){var res__93012__auto__ = (function (){var _STAR_do_trace_captures_STAR_105267 = freactive.core._STAR_do_trace_captures_STAR_;try{freactive.core._STAR_do_trace_captures_STAR_ = ((function (_STAR_do_trace_captures_STAR_105267){
return (function (capture){return cljs.core.println.call(null,"captured",capture);
});})(_STAR_do_trace_captures_STAR_105267))
;
return freactive.core.rx_STAR_.call(null,((function (_STAR_do_trace_captures_STAR_105267){
return (function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var spacer = cljs.core.partial.call(null,freactive.dom_perf.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_105267){
return (function iter__105268(s__105269){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105269__$1 = s__105269;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105269__$1);if(temp__4388__auto__)
{var s__105269__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__105269__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105269__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105271 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105270 = (0);while(true){
if((i__105270 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__105270);cljs.core.chunk_append.call(null,b__105271,freactive.core.rx_STAR_.call(null,((function (i__105270,x,c__12234__auto__,size__12235__auto__,b__105271,s__105269__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_105267){
return (function (){return (x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x));
});})(i__105270,x,c__12234__auto__,size__12235__auto__,b__105271,s__105269__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_105267))
,false));
{
var G__105324 = (i__105270 + (1));
i__105270 = G__105324;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105271),iter__105268.call(null,cljs.core.chunk_rest.call(null,s__105269__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105271),null);
}
} else
{var x = cljs.core.first.call(null,s__105269__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__105269__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_105267){
return (function (){return (x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x));
});})(x,s__105269__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_105267))
,false),iter__105268.call(null,cljs.core.rest.call(null,s__105269__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,offsets);
})());var rights = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_105267){
return (function iter__105272(s__105273){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105273__$1 = s__105273;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105273__$1);if(temp__4388__auto__)
{var s__105273__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__105273__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105273__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105275 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105274 = (0);while(true){
if((i__105274 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__105274);cljs.core.chunk_append.call(null,b__105275,freactive.core.rx_STAR_.call(null,((function (i__105274,x,c__12234__auto__,size__12235__auto__,b__105275,s__105273__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_105267){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - (x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))));
});})(i__105274,x,c__12234__auto__,size__12235__auto__,b__105275,s__105273__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_105267))
,false));
{
var G__105325 = (i__105274 + (1));
i__105274 = G__105325;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105275),iter__105272.call(null,cljs.core.chunk_rest.call(null,s__105273__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105275),null);
}
} else
{var x = cljs.core.first.call(null,s__105273__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__105273__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_105267){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - (x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))));
});})(x,s__105273__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_105267))
,false),iter__105272.call(null,cljs.core.rest.call(null,s__105273__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());var tops = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_105267){
return (function iter__105276(s__105277){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105277__$1 = s__105277;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105277__$1);if(temp__4388__auto__)
{var s__105277__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__105277__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105277__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105279 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105278 = (0);while(true){
if((i__105278 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__105278);cljs.core.chunk_append.call(null,b__105279,freactive.core.rx_STAR_.call(null,((function (i__105278,y,c__12234__auto__,size__12235__auto__,b__105279,s__105277__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_105267){
return (function (){return (y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y));
});})(i__105278,y,c__12234__auto__,size__12235__auto__,b__105279,s__105277__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_105267))
,false));
{
var G__105326 = (i__105278 + (1));
i__105278 = G__105326;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105279),iter__105276.call(null,cljs.core.chunk_rest.call(null,s__105277__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105279),null);
}
} else
{var y = cljs.core.first.call(null,s__105277__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__105277__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_105267){
return (function (){return (y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y));
});})(y,s__105277__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_105267))
,false),iter__105276.call(null,cljs.core.rest.call(null,s__105277__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,offsets);
})());var bottoms = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_105267){
return (function iter__105280(s__105281){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105281__$1 = s__105281;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105281__$1);if(temp__4388__auto__)
{var s__105281__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__105281__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105281__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105283 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105282 = (0);while(true){
if((i__105282 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__105282);cljs.core.chunk_append.call(null,b__105283,freactive.core.rx_STAR_.call(null,((function (i__105282,y,c__12234__auto__,size__12235__auto__,b__105283,s__105281__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_105267){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - (y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))));
});})(i__105282,y,c__12234__auto__,size__12235__auto__,b__105283,s__105281__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_105267))
,false));
{
var G__105327 = (i__105282 + (1));
i__105282 = G__105327;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105283),iter__105280.call(null,cljs.core.chunk_rest.call(null,s__105281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105283),null);
}
} else
{var y = cljs.core.first.call(null,s__105281__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__105281__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_105267){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - (y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))));
});})(y,s__105281__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_105267))
,false),iter__105280.call(null,cljs.core.rest.call(null,s__105281__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105284(s__105285){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105285__$1 = s__105285;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105285__$1);if(temp__4388__auto__)
{var s__105285__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__105285__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105285__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105287 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105286 = (0);while(true){
if((i__105286 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__105286);cljs.core.chunk_append.call(null,b__105287,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__105328 = (i__105286 + (1));
i__105286 = G__105328;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105287),iter__105284.call(null,cljs.core.chunk_rest.call(null,s__105285__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105287),null);
}
} else
{var i = cljs.core.first.call(null,s__105285__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__105284.call(null,cljs.core.rest.call(null,s__105285__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105288(s__105289){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105289__$1 = s__105289;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105289__$1);if(temp__4388__auto__)
{var s__105289__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__105289__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105289__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105291 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105290 = (0);while(true){
if((i__105290 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__105290);cljs.core.chunk_append.call(null,b__105291,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__105329 = (i__105290 + (1));
i__105290 = G__105329;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105291),iter__105288.call(null,cljs.core.chunk_rest.call(null,s__105289__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105291),null);
}
} else
{var i = cljs.core.first.call(null,s__105289__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__105288.call(null,cljs.core.rest.call(null,s__105289__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105292(s__105293){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105293__$1 = s__105293;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105293__$1);if(temp__4388__auto__)
{var s__105293__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__105293__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105293__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105295 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105294 = (0);while(true){
if((i__105294 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__105294);cljs.core.chunk_append.call(null,b__105295,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__105330 = (i__105294 + (1));
i__105294 = G__105330;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105295),iter__105292.call(null,cljs.core.chunk_rest.call(null,s__105293__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105295),null);
}
} else
{var j = cljs.core.first.call(null,s__105293__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__105292.call(null,cljs.core.rest.call(null,s__105293__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105296(s__105297){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105297__$1 = s__105297;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105297__$1);if(temp__4388__auto__)
{var s__105297__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__105297__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105297__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105299 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105298 = (0);while(true){
if((i__105298 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__105298);cljs.core.chunk_append.call(null,b__105299,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__105331 = (i__105298 + (1));
i__105298 = G__105331;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105299),iter__105296.call(null,cljs.core.chunk_rest.call(null,s__105297__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105299),null);
}
} else
{var j = cljs.core.first.call(null,s__105297__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__105296.call(null,cljs.core.rest.call(null,s__105297__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105300(s__105301){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105301__$1 = s__105301;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105301__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__105301__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105302(s__105303){return (new cljs.core.LazySeq(null,((function (s__105301__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105303__$1 = s__105303;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__105303__$1);if(temp__4388__auto____$1)
{var s__105303__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__105303__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105303__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105305 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105304 = (0);while(true){
if((i__105304 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__105304);cljs.core.chunk_append.call(null,b__105305,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__105332 = (i__105304 + (1));
i__105304 = G__105332;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105305),iter__105302.call(null,cljs.core.chunk_rest.call(null,s__105303__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105305),null);
}
} else
{var j = cljs.core.first.call(null,s__105303__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__105302.call(null,cljs.core.rest.call(null,s__105303__$2)));
}
} else
{return null;
}
break;
}
});})(s__105301__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(s__105301__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__105300.call(null,cljs.core.rest.call(null,s__105301__$1)));
} else
{{
var G__105333 = cljs.core.rest.call(null,s__105301__$1);
s__105301__$1 = G__105333;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105306(s__105307){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105307__$1 = s__105307;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105307__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__105307__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105308(s__105309){return (new cljs.core.LazySeq(null,((function (s__105307__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105309__$1 = s__105309;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__105309__$1);if(temp__4388__auto____$1)
{var s__105309__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__105309__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105309__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105311 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105310 = (0);while(true){
if((i__105310 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__105310);cljs.core.chunk_append.call(null,b__105311,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__105334 = (i__105310 + (1));
i__105310 = G__105334;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105311),iter__105308.call(null,cljs.core.chunk_rest.call(null,s__105309__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105311),null);
}
} else
{var j = cljs.core.first.call(null,s__105309__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__105308.call(null,cljs.core.rest.call(null,s__105309__$2)));
}
} else
{return null;
}
break;
}
});})(s__105307__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(s__105307__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__105306.call(null,cljs.core.rest.call(null,s__105307__$1)));
} else
{{
var G__105335 = cljs.core.rest.call(null,s__105307__$1);
s__105307__$1 = G__105335;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105312(s__105313){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105313__$1 = s__105313;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105313__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__105313__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105314(s__105315){return (new cljs.core.LazySeq(null,((function (s__105313__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105315__$1 = s__105315;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__105315__$1);if(temp__4388__auto____$1)
{var s__105315__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__105315__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105315__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105317 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105316 = (0);while(true){
if((i__105316 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__105316);cljs.core.chunk_append.call(null,b__105317,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__105336 = (i__105316 + (1));
i__105316 = G__105336;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105317),iter__105314.call(null,cljs.core.chunk_rest.call(null,s__105315__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105317),null);
}
} else
{var j = cljs.core.first.call(null,s__105315__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__105314.call(null,cljs.core.rest.call(null,s__105315__$2)));
}
} else
{return null;
}
break;
}
});})(s__105313__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(s__105313__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__105312.call(null,cljs.core.rest.call(null,s__105313__$1)));
} else
{{
var G__105337 = cljs.core.rest.call(null,s__105313__$1);
s__105313__$1 = G__105337;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105318(s__105319){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105319__$1 = s__105319;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__105319__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__105319__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function iter__105320(s__105321){return (new cljs.core.LazySeq(null,((function (s__105319__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267){
return (function (){var s__105321__$1 = s__105321;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__105321__$1);if(temp__4388__auto____$1)
{var s__105321__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__105321__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__105321__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__105323 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__105322 = (0);while(true){
if((i__105322 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__105322);cljs.core.chunk_append.call(null,b__105323,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__105338 = (i__105322 + (1));
i__105322 = G__105338;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105323),iter__105320.call(null,cljs.core.chunk_rest.call(null,s__105321__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105323),null);
}
} else
{var j = cljs.core.first.call(null,s__105321__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__105320.call(null,cljs.core.rest.call(null,s__105321__$2)));
}
} else
{return null;
}
break;
}
});})(s__105319__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(s__105319__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__105318.call(null,cljs.core.rest.call(null,s__105319__$1)));
} else
{{
var G__105339 = cljs.core.rest.call(null,s__105319__$1);
s__105319__$1 = G__105339;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_105267))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})()], null);
});})(_STAR_do_trace_captures_STAR_105267))
,false);
}finally {freactive.core._STAR_do_trace_captures_STAR_ = _STAR_do_trace_captures_STAR_105267;
}})();freactive.core.add_invalidation_watch.call(null,res__93012__auto__,((function (res__93012__auto__){
return (function (_,___$1){return cljs.core.println.call(null,"invalidated");
});})(res__93012__auto__))
,((function (res__93012__auto__){
return (function (_,___$1){return cljs.core.println.call(null,"invalidated");
});})(res__93012__auto__))
);
return res__93012__auto__;
})()], null)], null);
});
freactive.experimental.dom2.mount_BANG_.call(null,document.getElementById("root"),freactive.dom_perf.view.call(null));
figwheel.client.watch_and_reload.call(null);

//# sourceMappingURL=dom_perf.js.map