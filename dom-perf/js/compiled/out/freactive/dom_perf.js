// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.dom_perf');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('goog.string');
goog.require('freactive.experimental.dom2');
goog.require('freactive.experimental.animation');
goog.require('goog.string');
goog.require('freactive.core');
goog.require('figwheel.client');
goog.require('freactive.experimental.animation');
goog.require('freactive.core');
goog.require('figwheel.client');
goog.require('freactive.experimental.dom2');
cljs.core.enable_console_print_BANG_.call(null);
freactive.experimental.dom2.enable_fps_instrumentation_BANG_.call(null);
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
if(typeof freactive.dom_perf.mouse_x !== 'undefined')
{} else
{freactive.dom_perf.mouse_x = freactive.core.atom.call(null,(freactive.dom_perf.get_window_width.call(null) / (2)));
}
if(typeof freactive.dom_perf.mouse_y !== 'undefined')
{} else
{freactive.dom_perf.mouse_y = freactive.core.atom.call(null,(freactive.dom_perf.get_window_height.call(null) / (2)));
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
freactive.dom_perf.view = (function view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),(function (){var number_of_points = freactive.core.rx_STAR_.call(null,(function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var n_STAR___$1 = ((1) + ((2) * n_STAR_));return (n_STAR___$1 * n_STAR___$1);
}),false);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/aaronc/freactive"], null),"freactive"], null)," performance test. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Please report issues ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/aaronc/freactive/issues"], null),"here"], null)], null),". "], null),"N = ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.n)));
});})(number_of_points))
,false)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (number_of_points){
return (function (_){return cljs.core.swap_BANG_.call(null,freactive.dom_perf.n,cljs.core.dec);
});})(number_of_points))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (number_of_points){
return (function (_){return cljs.core.swap_BANG_.call(null,freactive.dom_perf.n,cljs.core.inc);
});})(number_of_points))
], null),"+"], null),", number of points = ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,number_of_points)));
});})(number_of_points))
,false),". fps = ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.experimental.dom2.fps)));
});})(number_of_points))
,false),", DOM attrs set/second (when moving) ~= ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,freactive.experimental.dom2.fps) * cljs.core.deref.call(null,number_of_points))));
});})(number_of_points))
,false),", mouse at ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_x))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_y)));
});})(number_of_points))
,false),". "], null)], null);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","svg","svg/svg",856969818),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),"20px"], null),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),freactive.core.rx_STAR_.call(null,(function (){return ("0 20 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.width))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.height)));
}),false)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),(function (){var ease_x = freactive.experimental.animation.easer.call(null,0.0);var ease_y = freactive.experimental.animation.easer.call(null,0.0);return freactive.core.rx_STAR_.call(null,((function (ease_x,ease_y){
return (function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var spacer = cljs.core.partial.call(null,freactive.dom_perf.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,ease_x,ease_y){
return (function iter__44449(s__44450){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){var s__44450__$1 = s__44450;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44450__$1);if(temp__4388__auto__)
{var s__44450__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44450__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44450__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44452 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44451 = (0);while(true){
if((i__44451 < size__12236__auto__))
{var x = cljs.core._nth.call(null,c__12235__auto__,i__44451);cljs.core.chunk_append.call(null,b__44452,freactive.core.rx_STAR_.call(null,((function (i__44451,x,c__12235__auto__,size__12236__auto__,b__44452,s__44450__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(i__44451,x,c__12235__auto__,size__12236__auto__,b__44452,s__44450__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false));
{
var G__44505 = (i__44451 + (1));
i__44451 = G__44505;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44452),iter__44449.call(null,cljs.core.chunk_rest.call(null,s__44450__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44452),null);
}
} else
{var x = cljs.core.first.call(null,s__44450__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__44450__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(x,s__44450__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false),iter__44449.call(null,cljs.core.rest.call(null,s__44450__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,ease_x,ease_y))
;return iter__12237__auto__.call(null,offsets);
})());var rights = cljs.core.vec.call(null,(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function iter__44453(s__44454){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var s__44454__$1 = s__44454;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44454__$1);if(temp__4388__auto__)
{var s__44454__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44454__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44454__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44456 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44455 = (0);while(true){
if((i__44455 < size__12236__auto__))
{var x = cljs.core._nth.call(null,c__12235__auto__,i__44455);cljs.core.chunk_append.call(null,b__44456,freactive.core.rx_STAR_.call(null,((function (i__44455,x,c__12235__auto__,size__12236__auto__,b__44456,s__44454__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(i__44455,x,c__12235__auto__,size__12236__auto__,b__44456,s__44454__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false));
{
var G__44506 = (i__44455 + (1));
i__44455 = G__44506;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44456),iter__44453.call(null,cljs.core.chunk_rest.call(null,s__44454__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44456),null);
}
} else
{var x = cljs.core.first.call(null,s__44454__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__44454__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(x,s__44454__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false),iter__44453.call(null,cljs.core.rest.call(null,s__44454__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());var tops = cljs.core.vec.call(null,(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function iter__44457(s__44458){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){var s__44458__$1 = s__44458;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44458__$1);if(temp__4388__auto__)
{var s__44458__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44458__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44458__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44460 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44459 = (0);while(true){
if((i__44459 < size__12236__auto__))
{var y = cljs.core._nth.call(null,c__12235__auto__,i__44459);cljs.core.chunk_append.call(null,b__44460,freactive.core.rx_STAR_.call(null,((function (i__44459,y,c__12235__auto__,size__12236__auto__,b__44460,s__44458__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(i__44459,y,c__12235__auto__,size__12236__auto__,b__44460,s__44458__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false));
{
var G__44507 = (i__44459 + (1));
i__44459 = G__44507;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44460),iter__44457.call(null,cljs.core.chunk_rest.call(null,s__44458__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44460),null);
}
} else
{var y = cljs.core.first.call(null,s__44458__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__44458__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(y,s__44458__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false),iter__44457.call(null,cljs.core.rest.call(null,s__44458__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
;return iter__12237__auto__.call(null,offsets);
})());var bottoms = cljs.core.vec.call(null,(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function iter__44461(s__44462){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var s__44462__$1 = s__44462;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44462__$1);if(temp__4388__auto__)
{var s__44462__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44462__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44462__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44464 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44463 = (0);while(true){
if((i__44463 < size__12236__auto__))
{var y = cljs.core._nth.call(null,c__12235__auto__,i__44463);cljs.core.chunk_append.call(null,b__44464,freactive.core.rx_STAR_.call(null,((function (i__44463,y,c__12235__auto__,size__12236__auto__,b__44464,s__44462__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(i__44463,y,c__12235__auto__,size__12236__auto__,b__44464,s__44462__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false));
{
var G__44508 = (i__44463 + (1));
i__44463 = G__44508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44464),iter__44461.call(null,cljs.core.chunk_rest.call(null,s__44462__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44464),null);
}
} else
{var y = cljs.core.first.call(null,s__44462__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__44462__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(y,s__44462__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false),iter__44461.call(null,cljs.core.rest.call(null,s__44462__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());return freactive.experimental.dom2.with_transitions.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44465(s__44466){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44466__$1 = s__44466;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44466__$1);if(temp__4388__auto__)
{var s__44466__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44466__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44466__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44468 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44467 = (0);while(true){
if((i__44467 < size__12236__auto__))
{var i = cljs.core._nth.call(null,c__12235__auto__,i__44467);cljs.core.chunk_append.call(null,b__44468,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__44509 = (i__44467 + (1));
i__44467 = G__44509;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44468),iter__44465.call(null,cljs.core.chunk_rest.call(null,s__44466__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44468),null);
}
} else
{var i = cljs.core.first.call(null,s__44466__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__44465.call(null,cljs.core.rest.call(null,s__44466__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44469(s__44470){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44470__$1 = s__44470;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44470__$1);if(temp__4388__auto__)
{var s__44470__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44470__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44470__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44472 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44471 = (0);while(true){
if((i__44471 < size__12236__auto__))
{var i = cljs.core._nth.call(null,c__12235__auto__,i__44471);cljs.core.chunk_append.call(null,b__44472,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__44510 = (i__44471 + (1));
i__44471 = G__44510;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44472),iter__44469.call(null,cljs.core.chunk_rest.call(null,s__44470__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44472),null);
}
} else
{var i = cljs.core.first.call(null,s__44470__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__44469.call(null,cljs.core.rest.call(null,s__44470__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44473(s__44474){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44474__$1 = s__44474;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44474__$1);if(temp__4388__auto__)
{var s__44474__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44474__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44474__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44476 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44475 = (0);while(true){
if((i__44475 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__44475);cljs.core.chunk_append.call(null,b__44476,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__44511 = (i__44475 + (1));
i__44475 = G__44511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44476),iter__44473.call(null,cljs.core.chunk_rest.call(null,s__44474__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44476),null);
}
} else
{var j = cljs.core.first.call(null,s__44474__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__44473.call(null,cljs.core.rest.call(null,s__44474__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44477(s__44478){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44478__$1 = s__44478;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44478__$1);if(temp__4388__auto__)
{var s__44478__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44478__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44478__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44480 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44479 = (0);while(true){
if((i__44479 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__44479);cljs.core.chunk_append.call(null,b__44480,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__44512 = (i__44479 + (1));
i__44479 = G__44512;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44480),iter__44477.call(null,cljs.core.chunk_rest.call(null,s__44478__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44480),null);
}
} else
{var j = cljs.core.first.call(null,s__44478__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__44477.call(null,cljs.core.rest.call(null,s__44478__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44481(s__44482){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44482__$1 = s__44482;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44482__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__44482__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44483(s__44484){return (new cljs.core.LazySeq(null,((function (s__44482__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44484__$1 = s__44484;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__44484__$1);if(temp__4388__auto____$1)
{var s__44484__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__44484__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44484__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44486 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44485 = (0);while(true){
if((i__44485 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__44485);cljs.core.chunk_append.call(null,b__44486,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__44513 = (i__44485 + (1));
i__44485 = G__44513;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44486),iter__44483.call(null,cljs.core.chunk_rest.call(null,s__44484__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44486),null);
}
} else
{var j = cljs.core.first.call(null,s__44484__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__44483.call(null,cljs.core.rest.call(null,s__44484__$2)));
}
} else
{return null;
}
break;
}
});})(s__44482__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__44482__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__44481.call(null,cljs.core.rest.call(null,s__44482__$1)));
} else
{{
var G__44514 = cljs.core.rest.call(null,s__44482__$1);
s__44482__$1 = G__44514;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44487(s__44488){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44488__$1 = s__44488;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44488__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__44488__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44489(s__44490){return (new cljs.core.LazySeq(null,((function (s__44488__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44490__$1 = s__44490;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__44490__$1);if(temp__4388__auto____$1)
{var s__44490__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__44490__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44490__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44492 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44491 = (0);while(true){
if((i__44491 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__44491);cljs.core.chunk_append.call(null,b__44492,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__44515 = (i__44491 + (1));
i__44491 = G__44515;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44492),iter__44489.call(null,cljs.core.chunk_rest.call(null,s__44490__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44492),null);
}
} else
{var j = cljs.core.first.call(null,s__44490__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__44489.call(null,cljs.core.rest.call(null,s__44490__$2)));
}
} else
{return null;
}
break;
}
});})(s__44488__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__44488__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__44487.call(null,cljs.core.rest.call(null,s__44488__$1)));
} else
{{
var G__44516 = cljs.core.rest.call(null,s__44488__$1);
s__44488__$1 = G__44516;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44493(s__44494){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44494__$1 = s__44494;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44494__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__44494__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44495(s__44496){return (new cljs.core.LazySeq(null,((function (s__44494__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44496__$1 = s__44496;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__44496__$1);if(temp__4388__auto____$1)
{var s__44496__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__44496__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44496__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44498 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44497 = (0);while(true){
if((i__44497 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__44497);cljs.core.chunk_append.call(null,b__44498,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__44517 = (i__44497 + (1));
i__44497 = G__44517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44498),iter__44495.call(null,cljs.core.chunk_rest.call(null,s__44496__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44498),null);
}
} else
{var j = cljs.core.first.call(null,s__44496__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__44495.call(null,cljs.core.rest.call(null,s__44496__$2)));
}
} else
{return null;
}
break;
}
});})(s__44494__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__44494__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__44493.call(null,cljs.core.rest.call(null,s__44494__$1)));
} else
{{
var G__44518 = cljs.core.rest.call(null,s__44494__$1);
s__44494__$1 = G__44518;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44499(s__44500){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44500__$1 = s__44500;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__44500__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__44500__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__44501(s__44502){return (new cljs.core.LazySeq(null,((function (s__44500__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__44502__$1 = s__44502;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__44502__$1);if(temp__4388__auto____$1)
{var s__44502__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__44502__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__44502__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__44504 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__44503 = (0);while(true){
if((i__44503 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__44503);cljs.core.chunk_append.call(null,b__44504,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__44519 = (i__44503 + (1));
i__44503 = G__44519;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44504),iter__44501.call(null,cljs.core.chunk_rest.call(null,s__44502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44504),null);
}
} else
{var j = cljs.core.first.call(null,s__44502__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__44501.call(null,cljs.core.rest.call(null,s__44502__$2)));
}
} else
{return null;
}
break;
}
});})(s__44500__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__44500__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__44499.call(null,cljs.core.rest.call(null,s__44500__$1)));
} else
{{
var G__44520 = cljs.core.rest.call(null,s__44500__$1);
s__44500__$1 = G__44520;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12237__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-show","on-show",-1100796727),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (x,cb){freactive.experimental.animation.start_easing_BANG_.call(null,ease_x,0.0,1.0,(1000),freactive.experimental.animation.quad_in,cb);
return freactive.experimental.animation.start_easing_BANG_.call(null,ease_y,0.0,1.0,(1000),freactive.experimental.animation.quad_out,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (x,cb){freactive.experimental.animation.start_easing_BANG_.call(null,ease_x,1.0,0.0,(1000),freactive.experimental.animation.quad_out,cb);
return freactive.experimental.animation.start_easing_BANG_.call(null,ease_y,1.0,0.0,(1000),freactive.experimental.animation.quad_in,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
], null));
});})(ease_x,ease_y))
,false);
})()], null)], null);
});
freactive.experimental.dom2.mount_BANG_.call(null,document.getElementById("root"),freactive.dom_perf.view.call(null));
figwheel.client.watch_and_reload.call(null);

//# sourceMappingURL=dom_perf.js.map