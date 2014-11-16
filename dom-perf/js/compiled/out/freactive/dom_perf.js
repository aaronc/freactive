// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.dom_perf');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('goog.string');
goog.require('freactive.dom');
goog.require('freactive.dom');
goog.require('freactive.experimental.animation');
goog.require('goog.string');
goog.require('freactive.core');
goog.require('figwheel.client');
goog.require('freactive.experimental.animation');
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
}),false)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),(function (){var ease_x = freactive.experimental.animation.easer.call(null,0.0);var ease_y = freactive.experimental.animation.easer.call(null,0.0);return freactive.core.rx_STAR_.call(null,((function (ease_x,ease_y){
return (function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var spacer = cljs.core.partial.call(null,freactive.dom_perf.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12237__auto__ = ((function (n_STAR_,spacer,offsets,ease_x,ease_y){
return (function iter__45141(s__45142){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){var s__45142__$1 = s__45142;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45142__$1);if(temp__4388__auto__)
{var s__45142__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45142__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45142__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45144 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45143 = (0);while(true){
if((i__45143 < size__12236__auto__))
{var x = cljs.core._nth.call(null,c__12235__auto__,i__45143);cljs.core.chunk_append.call(null,b__45144,freactive.core.rx_STAR_.call(null,((function (i__45143,x,c__12235__auto__,size__12236__auto__,b__45144,s__45142__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(i__45143,x,c__12235__auto__,size__12236__auto__,b__45144,s__45142__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false));
{
var G__45197 = (i__45143 + (1));
i__45143 = G__45197;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45144),iter__45141.call(null,cljs.core.chunk_rest.call(null,s__45142__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45144),null);
}
} else
{var x = cljs.core.first.call(null,s__45142__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__45142__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(x,s__45142__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false),iter__45141.call(null,cljs.core.rest.call(null,s__45142__$2)));
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
return (function iter__45145(s__45146){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var s__45146__$1 = s__45146;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45146__$1);if(temp__4388__auto__)
{var s__45146__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45146__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45146__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45148 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45147 = (0);while(true){
if((i__45147 < size__12236__auto__))
{var x = cljs.core._nth.call(null,c__12235__auto__,i__45147);cljs.core.chunk_append.call(null,b__45148,freactive.core.rx_STAR_.call(null,((function (i__45147,x,c__12235__auto__,size__12236__auto__,b__45148,s__45146__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(i__45147,x,c__12235__auto__,size__12236__auto__,b__45148,s__45146__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false));
{
var G__45198 = (i__45147 + (1));
i__45147 = G__45198;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45148),iter__45145.call(null,cljs.core.chunk_rest.call(null,s__45146__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45148),null);
}
} else
{var x = cljs.core.first.call(null,s__45146__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__45146__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(x,s__45146__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false),iter__45145.call(null,cljs.core.rest.call(null,s__45146__$2)));
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
return (function iter__45149(s__45150){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){var s__45150__$1 = s__45150;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45150__$1);if(temp__4388__auto__)
{var s__45150__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45150__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45150__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45152 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45151 = (0);while(true){
if((i__45151 < size__12236__auto__))
{var y = cljs.core._nth.call(null,c__12235__auto__,i__45151);cljs.core.chunk_append.call(null,b__45152,freactive.core.rx_STAR_.call(null,((function (i__45151,y,c__12235__auto__,size__12236__auto__,b__45152,s__45150__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(i__45151,y,c__12235__auto__,size__12236__auto__,b__45152,s__45150__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false));
{
var G__45199 = (i__45151 + (1));
i__45151 = G__45199;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45152),iter__45149.call(null,cljs.core.chunk_rest.call(null,s__45150__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45152),null);
}
} else
{var y = cljs.core.first.call(null,s__45150__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__45150__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(y,s__45150__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false),iter__45149.call(null,cljs.core.rest.call(null,s__45150__$2)));
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
return (function iter__45153(s__45154){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var s__45154__$1 = s__45154;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45154__$1);if(temp__4388__auto__)
{var s__45154__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45154__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45154__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45156 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45155 = (0);while(true){
if((i__45155 < size__12236__auto__))
{var y = cljs.core._nth.call(null,c__12235__auto__,i__45155);cljs.core.chunk_append.call(null,b__45156,freactive.core.rx_STAR_.call(null,((function (i__45155,y,c__12235__auto__,size__12236__auto__,b__45156,s__45154__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(i__45155,y,c__12235__auto__,size__12236__auto__,b__45156,s__45154__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false));
{
var G__45200 = (i__45155 + (1));
i__45155 = G__45200;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45156),iter__45153.call(null,cljs.core.chunk_rest.call(null,s__45154__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45156),null);
}
} else
{var y = cljs.core.first.call(null,s__45154__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__45154__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(y,s__45154__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false),iter__45153.call(null,cljs.core.rest.call(null,s__45154__$2)));
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
return (function iter__45157(s__45158){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45158__$1 = s__45158;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45158__$1);if(temp__4388__auto__)
{var s__45158__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45158__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45158__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45160 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45159 = (0);while(true){
if((i__45159 < size__12236__auto__))
{var i = cljs.core._nth.call(null,c__12235__auto__,i__45159);cljs.core.chunk_append.call(null,b__45160,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__45201 = (i__45159 + (1));
i__45159 = G__45201;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45160),iter__45157.call(null,cljs.core.chunk_rest.call(null,s__45158__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45160),null);
}
} else
{var i = cljs.core.first.call(null,s__45158__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__45157.call(null,cljs.core.rest.call(null,s__45158__$2)));
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
return (function iter__45161(s__45162){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45162__$1 = s__45162;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45162__$1);if(temp__4388__auto__)
{var s__45162__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45162__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45162__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45164 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45163 = (0);while(true){
if((i__45163 < size__12236__auto__))
{var i = cljs.core._nth.call(null,c__12235__auto__,i__45163);cljs.core.chunk_append.call(null,b__45164,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__45202 = (i__45163 + (1));
i__45163 = G__45202;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45164),iter__45161.call(null,cljs.core.chunk_rest.call(null,s__45162__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45164),null);
}
} else
{var i = cljs.core.first.call(null,s__45162__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__45161.call(null,cljs.core.rest.call(null,s__45162__$2)));
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
return (function iter__45165(s__45166){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45166__$1 = s__45166;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45166__$1);if(temp__4388__auto__)
{var s__45166__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45166__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45166__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45168 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45167 = (0);while(true){
if((i__45167 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45167);cljs.core.chunk_append.call(null,b__45168,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__45203 = (i__45167 + (1));
i__45167 = G__45203;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45168),iter__45165.call(null,cljs.core.chunk_rest.call(null,s__45166__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45168),null);
}
} else
{var j = cljs.core.first.call(null,s__45166__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__45165.call(null,cljs.core.rest.call(null,s__45166__$2)));
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
return (function iter__45169(s__45170){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45170__$1 = s__45170;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45170__$1);if(temp__4388__auto__)
{var s__45170__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45170__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45170__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45172 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45171 = (0);while(true){
if((i__45171 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45171);cljs.core.chunk_append.call(null,b__45172,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__45204 = (i__45171 + (1));
i__45171 = G__45204;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45172),iter__45169.call(null,cljs.core.chunk_rest.call(null,s__45170__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45172),null);
}
} else
{var j = cljs.core.first.call(null,s__45170__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__45169.call(null,cljs.core.rest.call(null,s__45170__$2)));
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
return (function iter__45173(s__45174){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45174__$1 = s__45174;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45174__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__45174__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__45175(s__45176){return (new cljs.core.LazySeq(null,((function (s__45174__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45176__$1 = s__45176;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__45176__$1);if(temp__4388__auto____$1)
{var s__45176__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__45176__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45176__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45178 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45177 = (0);while(true){
if((i__45177 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45177);cljs.core.chunk_append.call(null,b__45178,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__45205 = (i__45177 + (1));
i__45177 = G__45205;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45178),iter__45175.call(null,cljs.core.chunk_rest.call(null,s__45176__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45178),null);
}
} else
{var j = cljs.core.first.call(null,s__45176__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__45175.call(null,cljs.core.rest.call(null,s__45176__$2)));
}
} else
{return null;
}
break;
}
});})(s__45174__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__45174__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__45173.call(null,cljs.core.rest.call(null,s__45174__$1)));
} else
{{
var G__45206 = cljs.core.rest.call(null,s__45174__$1);
s__45174__$1 = G__45206;
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
return (function iter__45179(s__45180){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45180__$1 = s__45180;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45180__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__45180__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__45181(s__45182){return (new cljs.core.LazySeq(null,((function (s__45180__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45182__$1 = s__45182;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__45182__$1);if(temp__4388__auto____$1)
{var s__45182__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__45182__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45182__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45184 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45183 = (0);while(true){
if((i__45183 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45183);cljs.core.chunk_append.call(null,b__45184,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__45207 = (i__45183 + (1));
i__45183 = G__45207;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45184),iter__45181.call(null,cljs.core.chunk_rest.call(null,s__45182__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45184),null);
}
} else
{var j = cljs.core.first.call(null,s__45182__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__45181.call(null,cljs.core.rest.call(null,s__45182__$2)));
}
} else
{return null;
}
break;
}
});})(s__45180__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__45180__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__45179.call(null,cljs.core.rest.call(null,s__45180__$1)));
} else
{{
var G__45208 = cljs.core.rest.call(null,s__45180__$1);
s__45180__$1 = G__45208;
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
return (function iter__45185(s__45186){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45186__$1 = s__45186;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45186__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__45186__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__45187(s__45188){return (new cljs.core.LazySeq(null,((function (s__45186__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45188__$1 = s__45188;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__45188__$1);if(temp__4388__auto____$1)
{var s__45188__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__45188__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45188__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45190 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45189 = (0);while(true){
if((i__45189 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45189);cljs.core.chunk_append.call(null,b__45190,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__45209 = (i__45189 + (1));
i__45189 = G__45209;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45190),iter__45187.call(null,cljs.core.chunk_rest.call(null,s__45188__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45190),null);
}
} else
{var j = cljs.core.first.call(null,s__45188__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__45187.call(null,cljs.core.rest.call(null,s__45188__$2)));
}
} else
{return null;
}
break;
}
});})(s__45186__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__45186__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__45185.call(null,cljs.core.rest.call(null,s__45186__$1)));
} else
{{
var G__45210 = cljs.core.rest.call(null,s__45186__$1);
s__45186__$1 = G__45210;
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
return (function iter__45191(s__45192){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45192__$1 = s__45192;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__45192__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12233__auto__ = ((function (s__45192__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__45193(s__45194){return (new cljs.core.LazySeq(null,((function (s__45192__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__45194__$1 = s__45194;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__45194__$1);if(temp__4388__auto____$1)
{var s__45194__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__45194__$2))
{var c__12235__auto__ = cljs.core.chunk_first.call(null,s__45194__$2);var size__12236__auto__ = cljs.core.count.call(null,c__12235__auto__);var b__45196 = cljs.core.chunk_buffer.call(null,size__12236__auto__);if((function (){var i__45195 = (0);while(true){
if((i__45195 < size__12236__auto__))
{var j = cljs.core._nth.call(null,c__12235__auto__,i__45195);cljs.core.chunk_append.call(null,b__45196,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__45211 = (i__45195 + (1));
i__45195 = G__45211;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45196),iter__45193.call(null,cljs.core.chunk_rest.call(null,s__45194__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45196),null);
}
} else
{var j = cljs.core.first.call(null,s__45194__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__45193.call(null,cljs.core.rest.call(null,s__45194__$2)));
}
} else
{return null;
}
break;
}
});})(s__45192__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__45192__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12234__auto__ = cljs.core.seq.call(null,iterys__12233__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12234__auto__)
{return cljs.core.concat.call(null,fs__12234__auto__,iter__45191.call(null,cljs.core.rest.call(null,s__45192__$1)));
} else
{{
var G__45212 = cljs.core.rest.call(null,s__45192__$1);
s__45192__$1 = G__45212;
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
freactive.dom.mount_BANG_.call(null,document.getElementById("root"),freactive.dom_perf.view.call(null));

//# sourceMappingURL=dom_perf.js.map