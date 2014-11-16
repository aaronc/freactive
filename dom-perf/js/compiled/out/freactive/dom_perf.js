// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.dom_perf');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('goog.string');
goog.require('freactive.dom');
goog.require('freactive.dom');
goog.require('freactive.animation');
goog.require('goog.string');
goog.require('freactive.core');
goog.require('figwheel.client');
goog.require('freactive.animation');
goog.require('freactive.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
freactive.dom.enable_fps_instrumentation_BANG_.call(null);
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
{freactive.dom_perf.init = (function (){freactive.dom.listen_BANG_.call(null,window,"mousemove",(function (e){cljs.core.reset_BANG_.call(null,freactive.dom_perf.mouse_x,e.clientX);
return cljs.core.reset_BANG_.call(null,freactive.dom_perf.mouse_y,e.clientY);
}));
freactive.dom.listen_BANG_.call(null,window,"resize",(function (e){cljs.core.reset_BANG_.call(null,freactive.dom_perf.width,freactive.dom_perf.get_window_width.call(null));
return cljs.core.reset_BANG_.call(null,freactive.dom_perf.height,freactive.dom_perf.get_window_height.call(null));
}));
return freactive.dom.listen_BANG_.call(null,window,"touchmove",(function (e){var touches = e.touches;if(cljs.core._EQ_.call(null,(1),touches.length))
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
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom.fps)));
});})(number_of_points))
,false),", DOM attrs set/second (when moving) ~= ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,freactive.dom.fps) * cljs.core.deref.call(null,number_of_points))));
});})(number_of_points))
,false),", mouse at ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_x))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_y)));
});})(number_of_points))
,false),". "], null)], null);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","svg","svg/svg",856969818),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),"20px"], null),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),freactive.core.rx_STAR_.call(null,(function (){return ("0 20 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.width))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.height)));
}),false)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),(function (){var ease_x = freactive.animation.easer.call(null,0.0);var ease_y = freactive.animation.easer.call(null,0.0);return freactive.core.rx_STAR_.call(null,((function (ease_x,ease_y){
return (function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var spacer = cljs.core.partial.call(null,freactive.dom_perf.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,ease_x,ease_y){
return (function iter__45269(s__45270){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){var s__45270__$1 = s__45270;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45270__$1);if(temp__4388__auto__)
{var s__45270__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45270__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45270__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45272 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45271 = (0);while(true){
if((i__45271 < size__12236__auto__))
{var x = cljs.core._nth.call(null,c__12235__auto__,i__45271);cljs.core.chunk_append.call(null,b__45272,freactive.core.rx_STAR_.call(null,((function (i__45271,x,c__12235__auto__,size__12236__auto__,b__45272,s__45270__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(i__45271,x,c__12235__auto__,size__12236__auto__,b__45272,s__45270__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false));
{
var G__45325 = (i__45271 + (1));
i__45271 = G__45325;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45272),iter__45269.call(null,cljs.core.chunk_rest.call(null,s__45270__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45272),null);
}
} else
{var x = cljs.core.first.call(null,s__45270__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__45270__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(x,s__45270__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false),iter__45269.call(null,cljs.core.rest.call(null,s__45270__$2)));
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
return (function iter__45273(s__45274){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var s__45274__$1 = s__45274;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45274__$1);if(temp__4388__auto__)
{var s__45274__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45274__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45274__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45276 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45275 = (0);while(true){
if((i__45275 < size__12236__auto__))
{var x = cljs.core._nth.call(null,c__12235__auto__,i__45275);cljs.core.chunk_append.call(null,b__45276,freactive.core.rx_STAR_.call(null,((function (i__45275,x,c__12235__auto__,size__12236__auto__,b__45276,s__45274__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(i__45275,x,c__12235__auto__,size__12236__auto__,b__45276,s__45274__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false));
{
var G__45326 = (i__45275 + (1));
i__45275 = G__45326;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45276),iter__45273.call(null,cljs.core.chunk_rest.call(null,s__45274__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45276),null);
}
} else
{var x = cljs.core.first.call(null,s__45274__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__45274__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(x,s__45274__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false),iter__45273.call(null,cljs.core.rest.call(null,s__45274__$2)));
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
return (function iter__45277(s__45278){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){var s__45278__$1 = s__45278;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45278__$1);if(temp__4388__auto__)
{var s__45278__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45278__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45278__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45280 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45279 = (0);while(true){
if((i__45279 < size__12236__auto__))
{var y = cljs.core._nth.call(null,c__12235__auto__,i__45279);cljs.core.chunk_append.call(null,b__45280,freactive.core.rx_STAR_.call(null,((function (i__45279,y,c__12235__auto__,size__12236__auto__,b__45280,s__45278__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(i__45279,y,c__12235__auto__,size__12236__auto__,b__45280,s__45278__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false));
{
var G__45327 = (i__45279 + (1));
i__45279 = G__45327;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45280),iter__45277.call(null,cljs.core.chunk_rest.call(null,s__45278__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45280),null);
}
} else
{var y = cljs.core.first.call(null,s__45278__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__45278__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(y,s__45278__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false),iter__45277.call(null,cljs.core.rest.call(null,s__45278__$2)));
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
return (function iter__45281(s__45282){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var s__45282__$1 = s__45282;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45282__$1);if(temp__4388__auto__)
{var s__45282__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45282__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45282__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45284 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45283 = (0);while(true){
if((i__45283 < size__12236__auto__))
{var y = cljs.core._nth.call(null,c__12235__auto__,i__45283);cljs.core.chunk_append.call(null,b__45284,freactive.core.rx_STAR_.call(null,((function (i__45283,y,c__12235__auto__,size__12236__auto__,b__45284,s__45282__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(i__45283,y,c__12235__auto__,size__12236__auto__,b__45284,s__45282__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false));
{
var G__45328 = (i__45283 + (1));
i__45283 = G__45328;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45284),iter__45281.call(null,cljs.core.chunk_rest.call(null,s__45282__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45284),null);
}
} else
{var y = cljs.core.first.call(null,s__45282__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__45282__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(y,s__45282__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false),iter__45281.call(null,cljs.core.rest.call(null,s__45282__$2)));
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
})());return freactive.dom.with_transitions.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__45285(s__45286){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45286__$1 = s__45286;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45286__$1);if(temp__4388__auto__)
{var s__45286__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45286__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45286__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45288 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45287 = (0);while(true){
if((i__45287 < size__12236__auto__))
{var i = cljs.core._nth.call(null,c__12235__auto__,i__45287);cljs.core.chunk_append.call(null,b__45288,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__45329 = (i__45287 + (1));
i__45287 = G__45329;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45288),iter__45285.call(null,cljs.core.chunk_rest.call(null,s__45286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45288),null);
}
} else
{var i = cljs.core.first.call(null,s__45286__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__45285.call(null,cljs.core.rest.call(null,s__45286__$2)));
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
return (function iter__45289(s__45290){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45290__$1 = s__45290;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45290__$1);if(temp__4388__auto__)
{var s__45290__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45290__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45290__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45292 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45291 = (0);while(true){
if((i__45291 < size__12236__auto__))
{var i = cljs.core._nth.call(null,c__12235__auto__,i__45291);cljs.core.chunk_append.call(null,b__45292,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__45330 = (i__45291 + (1));
i__45291 = G__45330;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45292),iter__45289.call(null,cljs.core.chunk_rest.call(null,s__45290__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45292),null);
}
} else
{var i = cljs.core.first.call(null,s__45290__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__45289.call(null,cljs.core.rest.call(null,s__45290__$2)));
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
return (function iter__45293(s__45294){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45294__$1 = s__45294;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45294__$1);if(temp__4388__auto__)
{var s__45294__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45294__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45294__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45296 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45295 = (0);while(true){
if((i__45295 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45295);cljs.core.chunk_append.call(null,b__45296,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__45331 = (i__45295 + (1));
i__45295 = G__45331;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45296),iter__45293.call(null,cljs.core.chunk_rest.call(null,s__45294__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45296),null);
}
} else
{var j = cljs.core.first.call(null,s__45294__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__45293.call(null,cljs.core.rest.call(null,s__45294__$2)));
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
return (function iter__45297(s__45298){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45298__$1 = s__45298;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45298__$1);if(temp__4388__auto__)
{var s__45298__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45298__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45298__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45300 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45299 = (0);while(true){
if((i__45299 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45299);cljs.core.chunk_append.call(null,b__45300,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__45332 = (i__45299 + (1));
i__45299 = G__45332;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45300),iter__45297.call(null,cljs.core.chunk_rest.call(null,s__45298__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45300),null);
}
} else
{var j = cljs.core.first.call(null,s__45298__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__45297.call(null,cljs.core.rest.call(null,s__45298__$2)));
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
return (function iter__45301(s__45302){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45302__$1 = s__45302;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45302__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__45302__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__45303(s__45304){return (new cljs.core.LazySeq(null,((function (s__45302__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45304__$1 = s__45304;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__45304__$1);if(temp__4388__auto____$1)
{var s__45304__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__45304__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45304__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45306 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45305 = (0);while(true){
if((i__45305 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45305);cljs.core.chunk_append.call(null,b__45306,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__45333 = (i__45305 + (1));
i__45305 = G__45333;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45306),iter__45303.call(null,cljs.core.chunk_rest.call(null,s__45304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45306),null);
}
} else
{var j = cljs.core.first.call(null,s__45304__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__45303.call(null,cljs.core.rest.call(null,s__45304__$2)));
}
} else
{return null;
}
break;
}
});})(s__45302__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__45302__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__45301.call(null,cljs.core.rest.call(null,s__45302__$1)));
} else
{{
var G__45334 = cljs.core.rest.call(null,s__45302__$1);
s__45302__$1 = G__45334;
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
return (function iter__45307(s__45308){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45308__$1 = s__45308;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45308__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__45308__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__45309(s__45310){return (new cljs.core.LazySeq(null,((function (s__45308__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45310__$1 = s__45310;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__45310__$1);if(temp__4388__auto____$1)
{var s__45310__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__45310__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45310__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45312 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45311 = (0);while(true){
if((i__45311 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45311);cljs.core.chunk_append.call(null,b__45312,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__45335 = (i__45311 + (1));
i__45311 = G__45335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45312),iter__45309.call(null,cljs.core.chunk_rest.call(null,s__45310__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45312),null);
}
} else
{var j = cljs.core.first.call(null,s__45310__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__45309.call(null,cljs.core.rest.call(null,s__45310__$2)));
}
} else
{return null;
}
break;
}
});})(s__45308__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__45308__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__45307.call(null,cljs.core.rest.call(null,s__45308__$1)));
} else
{{
var G__45336 = cljs.core.rest.call(null,s__45308__$1);
s__45308__$1 = G__45336;
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
return (function iter__45313(s__45314){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45314__$1 = s__45314;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45314__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__45314__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__45315(s__45316){return (new cljs.core.LazySeq(null,((function (s__45314__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45316__$1 = s__45316;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__45316__$1);if(temp__4388__auto____$1)
{var s__45316__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__45316__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45316__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45318 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45317 = (0);while(true){
if((i__45317 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45317);cljs.core.chunk_append.call(null,b__45318,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__45337 = (i__45317 + (1));
i__45317 = G__45337;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45318),iter__45315.call(null,cljs.core.chunk_rest.call(null,s__45316__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45318),null);
}
} else
{var j = cljs.core.first.call(null,s__45316__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__45315.call(null,cljs.core.rest.call(null,s__45316__$2)));
}
} else
{return null;
}
break;
}
});})(s__45314__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__45314__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__45313.call(null,cljs.core.rest.call(null,s__45314__$1)));
} else
{{
var G__45338 = cljs.core.rest.call(null,s__45314__$1);
s__45314__$1 = G__45338;
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
return (function iter__45319(s__45320){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45320__$1 = s__45320;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45320__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__45320__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__45321(s__45322){return (new cljs.core.LazySeq(null,((function (s__45320__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45322__$1 = s__45322;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__45322__$1);if(temp__4388__auto____$1)
{var s__45322__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__45322__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45322__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45324 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45323 = (0);while(true){
if((i__45323 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45323);cljs.core.chunk_append.call(null,b__45324,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__45339 = (i__45323 + (1));
i__45323 = G__45339;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45324),iter__45321.call(null,cljs.core.chunk_rest.call(null,s__45322__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45324),null);
}
} else
{var j = cljs.core.first.call(null,s__45322__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__45321.call(null,cljs.core.rest.call(null,s__45322__$2)));
}
} else
{return null;
}
break;
}
});})(s__45320__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__45320__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__45319.call(null,cljs.core.rest.call(null,s__45320__$1)));
} else
{{
var G__45340 = cljs.core.rest.call(null,s__45320__$1);
s__45320__$1 = G__45340;
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
return (function (x,cb){freactive.animation.start_easing_BANG_.call(null,ease_x,0.0,1.0,(1000),freactive.animation.quad_in,cb);
return freactive.animation.start_easing_BANG_.call(null,ease_y,0.0,1.0,(1000),freactive.animation.quad_out,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (x,cb){freactive.animation.start_easing_BANG_.call(null,ease_x,1.0,0.0,(1000),freactive.animation.quad_out,cb);
return freactive.animation.start_easing_BANG_.call(null,ease_y,1.0,0.0,(1000),freactive.animation.quad_in,cb);
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
], null));
});})(ease_x,ease_y))
,false);
})()], null)], null);
});
freactive.dom.mount_BANG_.call(null,document.getElementById("root"),freactive.dom_perf.view.call(null));

//# sourceMappingURL=dom_perf.js.map