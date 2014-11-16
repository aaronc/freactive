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
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","svg","svg/svg",856969818),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),"1em"], null)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),(function (){var easer = freactive.experimental.animation.easer.call(null,0.0);var res__111394__auto__ = (function (){var _STAR_do_trace_captures_STAR_130180 = freactive.core._STAR_do_trace_captures_STAR_;try{freactive.core._STAR_do_trace_captures_STAR_ = ((function (_STAR_do_trace_captures_STAR_130180,easer){
return (function (x){return null;
});})(_STAR_do_trace_captures_STAR_130180,easer))
;
return freactive.core.rx_STAR_.call(null,((function (_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var spacer = cljs.core.partial.call(null,freactive.dom_perf.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130181(s__130182){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130182__$1 = s__130182;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130182__$1);if(temp__4388__auto__)
{var s__130182__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__130182__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130182__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130184 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130183 = (0);while(true){
if((i__130183 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__130183);cljs.core.chunk_append.call(null,b__130184,freactive.core.rx_STAR_.call(null,((function (i__130183,x,c__12234__auto__,size__12235__auto__,b__130184,s__130182__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,easer));
});})(i__130183,x,c__12234__auto__,size__12235__auto__,b__130184,s__130182__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_130180,easer))
,false));
{
var G__130237 = (i__130183 + (1));
i__130183 = G__130237;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130184),iter__130181.call(null,cljs.core.chunk_rest.call(null,s__130182__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130184),null);
}
} else
{var x = cljs.core.first.call(null,s__130182__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__130182__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,easer));
});})(x,s__130182__$2,temp__4388__auto__,n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_130180,easer))
,false),iter__130181.call(null,cljs.core.rest.call(null,s__130182__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,offsets);
})());var rights = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130185(s__130186){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130186__$1 = s__130186;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130186__$1);if(temp__4388__auto__)
{var s__130186__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__130186__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130186__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130188 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130187 = (0);while(true){
if((i__130187 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__130187);cljs.core.chunk_append.call(null,b__130188,freactive.core.rx_STAR_.call(null,((function (i__130187,x,c__12234__auto__,size__12235__auto__,b__130188,s__130186__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,easer)));
});})(i__130187,x,c__12234__auto__,size__12235__auto__,b__130188,s__130186__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_130180,easer))
,false));
{
var G__130238 = (i__130187 + (1));
i__130187 = G__130238;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130188),iter__130185.call(null,cljs.core.chunk_rest.call(null,s__130186__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130188),null);
}
} else
{var x = cljs.core.first.call(null,s__130186__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__130186__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,easer)));
});})(x,s__130186__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_130180,easer))
,false),iter__130185.call(null,cljs.core.rest.call(null,s__130186__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());var tops = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130189(s__130190){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130190__$1 = s__130190;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130190__$1);if(temp__4388__auto__)
{var s__130190__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__130190__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130190__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130192 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130191 = (0);while(true){
if((i__130191 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__130191);cljs.core.chunk_append.call(null,b__130192,freactive.core.rx_STAR_.call(null,((function (i__130191,y,c__12234__auto__,size__12235__auto__,b__130192,s__130190__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,easer));
});})(i__130191,y,c__12234__auto__,size__12235__auto__,b__130192,s__130190__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_130180,easer))
,false));
{
var G__130239 = (i__130191 + (1));
i__130191 = G__130239;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130192),iter__130189.call(null,cljs.core.chunk_rest.call(null,s__130190__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130192),null);
}
} else
{var y = cljs.core.first.call(null,s__130190__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__130190__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,easer));
});})(y,s__130190__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_130180,easer))
,false),iter__130189.call(null,cljs.core.rest.call(null,s__130190__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,offsets);
})());var bottoms = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130193(s__130194){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130194__$1 = s__130194;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130194__$1);if(temp__4388__auto__)
{var s__130194__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__130194__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130194__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130196 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130195 = (0);while(true){
if((i__130195 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__130195);cljs.core.chunk_append.call(null,b__130196,freactive.core.rx_STAR_.call(null,((function (i__130195,y,c__12234__auto__,size__12235__auto__,b__130196,s__130194__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,easer)));
});})(i__130195,y,c__12234__auto__,size__12235__auto__,b__130196,s__130194__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_130180,easer))
,false));
{
var G__130240 = (i__130195 + (1));
i__130195 = G__130240;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130196),iter__130193.call(null,cljs.core.chunk_rest.call(null,s__130194__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130196),null);
}
} else
{var y = cljs.core.first.call(null,s__130194__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__130194__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,easer)));
});})(y,s__130194__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_130180,easer))
,false),iter__130193.call(null,cljs.core.rest.call(null,s__130194__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());return freactive.experimental.dom2.with_transitions.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130197(s__130198){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130198__$1 = s__130198;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130198__$1);if(temp__4388__auto__)
{var s__130198__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__130198__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130198__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130200 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130199 = (0);while(true){
if((i__130199 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__130199);cljs.core.chunk_append.call(null,b__130200,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__130241 = (i__130199 + (1));
i__130199 = G__130241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130200),iter__130197.call(null,cljs.core.chunk_rest.call(null,s__130198__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130200),null);
}
} else
{var i = cljs.core.first.call(null,s__130198__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__130197.call(null,cljs.core.rest.call(null,s__130198__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130201(s__130202){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130202__$1 = s__130202;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130202__$1);if(temp__4388__auto__)
{var s__130202__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__130202__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130202__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130204 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130203 = (0);while(true){
if((i__130203 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__130203);cljs.core.chunk_append.call(null,b__130204,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__130242 = (i__130203 + (1));
i__130203 = G__130242;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130204),iter__130201.call(null,cljs.core.chunk_rest.call(null,s__130202__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130204),null);
}
} else
{var i = cljs.core.first.call(null,s__130202__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__130201.call(null,cljs.core.rest.call(null,s__130202__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130205(s__130206){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130206__$1 = s__130206;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130206__$1);if(temp__4388__auto__)
{var s__130206__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__130206__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130206__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130208 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130207 = (0);while(true){
if((i__130207 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__130207);cljs.core.chunk_append.call(null,b__130208,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__130243 = (i__130207 + (1));
i__130207 = G__130243;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130208),iter__130205.call(null,cljs.core.chunk_rest.call(null,s__130206__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130208),null);
}
} else
{var j = cljs.core.first.call(null,s__130206__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__130205.call(null,cljs.core.rest.call(null,s__130206__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130209(s__130210){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130210__$1 = s__130210;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130210__$1);if(temp__4388__auto__)
{var s__130210__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__130210__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130210__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130212 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130211 = (0);while(true){
if((i__130211 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__130211);cljs.core.chunk_append.call(null,b__130212,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__130244 = (i__130211 + (1));
i__130211 = G__130244;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130212),iter__130209.call(null,cljs.core.chunk_rest.call(null,s__130210__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130212),null);
}
} else
{var j = cljs.core.first.call(null,s__130210__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__130209.call(null,cljs.core.rest.call(null,s__130210__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130213(s__130214){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130214__$1 = s__130214;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130214__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__130214__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130215(s__130216){return (new cljs.core.LazySeq(null,((function (s__130214__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130216__$1 = s__130216;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__130216__$1);if(temp__4388__auto____$1)
{var s__130216__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__130216__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130216__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130218 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130217 = (0);while(true){
if((i__130217 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__130217);cljs.core.chunk_append.call(null,b__130218,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__130245 = (i__130217 + (1));
i__130217 = G__130245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130218),iter__130215.call(null,cljs.core.chunk_rest.call(null,s__130216__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130218),null);
}
} else
{var j = cljs.core.first.call(null,s__130216__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__130215.call(null,cljs.core.rest.call(null,s__130216__$2)));
}
} else
{return null;
}
break;
}
});})(s__130214__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(s__130214__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__130213.call(null,cljs.core.rest.call(null,s__130214__$1)));
} else
{{
var G__130246 = cljs.core.rest.call(null,s__130214__$1);
s__130214__$1 = G__130246;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130219(s__130220){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130220__$1 = s__130220;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130220__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__130220__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130221(s__130222){return (new cljs.core.LazySeq(null,((function (s__130220__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130222__$1 = s__130222;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__130222__$1);if(temp__4388__auto____$1)
{var s__130222__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__130222__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130222__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130224 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130223 = (0);while(true){
if((i__130223 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__130223);cljs.core.chunk_append.call(null,b__130224,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__130247 = (i__130223 + (1));
i__130223 = G__130247;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130224),iter__130221.call(null,cljs.core.chunk_rest.call(null,s__130222__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130224),null);
}
} else
{var j = cljs.core.first.call(null,s__130222__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__130221.call(null,cljs.core.rest.call(null,s__130222__$2)));
}
} else
{return null;
}
break;
}
});})(s__130220__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(s__130220__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__130219.call(null,cljs.core.rest.call(null,s__130220__$1)));
} else
{{
var G__130248 = cljs.core.rest.call(null,s__130220__$1);
s__130220__$1 = G__130248;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130225(s__130226){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130226__$1 = s__130226;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130226__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__130226__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130227(s__130228){return (new cljs.core.LazySeq(null,((function (s__130226__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130228__$1 = s__130228;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__130228__$1);if(temp__4388__auto____$1)
{var s__130228__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__130228__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130228__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130230 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130229 = (0);while(true){
if((i__130229 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__130229);cljs.core.chunk_append.call(null,b__130230,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__130249 = (i__130229 + (1));
i__130229 = G__130249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130230),iter__130227.call(null,cljs.core.chunk_rest.call(null,s__130228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130230),null);
}
} else
{var j = cljs.core.first.call(null,s__130228__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__130227.call(null,cljs.core.rest.call(null,s__130228__$2)));
}
} else
{return null;
}
break;
}
});})(s__130226__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(s__130226__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__130225.call(null,cljs.core.rest.call(null,s__130226__$1)));
} else
{{
var G__130250 = cljs.core.rest.call(null,s__130226__$1);
s__130226__$1 = G__130250;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130231(s__130232){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130232__$1 = s__130232;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__130232__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__130232__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function iter__130233(s__130234){return (new cljs.core.LazySeq(null,((function (s__130232__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (){var s__130234__$1 = s__130234;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__130234__$1);if(temp__4388__auto____$1)
{var s__130234__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__130234__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__130234__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__130236 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__130235 = (0);while(true){
if((i__130235 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__130235);cljs.core.chunk_append.call(null,b__130236,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__130251 = (i__130235 + (1));
i__130235 = G__130251;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130236),iter__130233.call(null,cljs.core.chunk_rest.call(null,s__130234__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130236),null);
}
} else
{var j = cljs.core.first.call(null,s__130234__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__130233.call(null,cljs.core.rest.call(null,s__130234__$2)));
}
} else
{return null;
}
break;
}
});})(s__130232__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(s__130232__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__130231.call(null,cljs.core.rest.call(null,s__130232__$1)));
} else
{{
var G__130252 = cljs.core.rest.call(null,s__130232__$1);
s__130232__$1 = G__130252;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-show","on-show",-1100796727),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (x,cb){return freactive.experimental.animation.start_easer_BANG_.call(null,easer,1.0,(1000),freactive.experimental.animation.quad_in_out,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer){
return (function (x,cb){return freactive.experimental.animation.start_easer_BANG_.call(null,easer,0.0,(1000),freactive.experimental.animation.quad_in_out,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,_STAR_do_trace_captures_STAR_130180,easer))
], null));
});})(_STAR_do_trace_captures_STAR_130180,easer))
,false);
}finally {freactive.core._STAR_do_trace_captures_STAR_ = _STAR_do_trace_captures_STAR_130180;
}})();freactive.core.add_invalidation_watch.call(null,res__111394__auto__,((function (res__111394__auto__,easer){
return (function (){return null;
});})(res__111394__auto__,easer))
,((function (res__111394__auto__,easer){
return (function (){return null;
});})(res__111394__auto__,easer))
);
return res__111394__auto__;
})()], null)], null);
});
freactive.experimental.dom2.mount_BANG_.call(null,document.getElementById("root"),freactive.dom_perf.view.call(null));
figwheel.client.watch_and_reload.call(null);

//# sourceMappingURL=dom_perf.js.map