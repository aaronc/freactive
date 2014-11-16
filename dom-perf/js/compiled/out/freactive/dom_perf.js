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
freactive.dom_perf.view = (function view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),(function (){var number_of_points = freactive.core.rx_STAR_.call(null,(function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var n_STAR___$1 = ((1) + ((2) * n_STAR_));return (n_STAR___$1 * n_STAR___$1);
}),false);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/aaronc/freactive"], null),"freactive"], null)," performance test. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Please report issues ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/aaronc/freactive/issues"], null),"here"], null)], null),". "], null),"N = ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
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
,false),", DOM attrs/second = ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,freactive.experimental.dom2.fps) * cljs.core.deref.call(null,number_of_points))));
});})(number_of_points))
,false),", mouse at ",freactive.core.rx_STAR_.call(null,((function (number_of_points){
return (function (){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_x))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.mouse_y)));
});})(number_of_points))
,false),". ","."], null)], null);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","svg","svg/svg",856969818),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),"14px"], null),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),freactive.core.rx_STAR_.call(null,(function (){return ("0 14 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.width))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,freactive.dom_perf.height)));
}),false)], null),freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,freactive.dom_perf.mouse_y),(function (){var ease_x = freactive.experimental.animation.easer.call(null,0.0);var ease_y = freactive.experimental.animation.easer.call(null,0.0);return freactive.core.rx_STAR_.call(null,((function (ease_x,ease_y){
return (function (){var n_STAR_ = cljs.core.deref.call(null,freactive.dom_perf.n);var spacer = cljs.core.partial.call(null,freactive.dom_perf.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,ease_x,ease_y){
return (function iter__147690(s__147691){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){var s__147691__$1 = s__147691;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147691__$1);if(temp__4388__auto__)
{var s__147691__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__147691__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147691__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147693 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147692 = (0);while(true){
if((i__147692 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__147692);cljs.core.chunk_append.call(null,b__147693,freactive.core.rx_STAR_.call(null,((function (i__147692,x,c__12234__auto__,size__12235__auto__,b__147693,s__147691__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(i__147692,x,c__12234__auto__,size__12235__auto__,b__147693,s__147691__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false));
{
var G__147746 = (i__147692 + (1));
i__147692 = G__147746;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147693),iter__147690.call(null,cljs.core.chunk_rest.call(null,s__147691__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147693),null);
}
} else
{var x = cljs.core.first.call(null,s__147691__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__147691__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(x,s__147691__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false),iter__147690.call(null,cljs.core.rest.call(null,s__147691__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,ease_x,ease_y))
;return iter__12236__auto__.call(null,offsets);
})());var rights = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function iter__147694(s__147695){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var s__147695__$1 = s__147695;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147695__$1);if(temp__4388__auto__)
{var s__147695__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__147695__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147695__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147697 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147696 = (0);while(true){
if((i__147696 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__147696);cljs.core.chunk_append.call(null,b__147697,freactive.core.rx_STAR_.call(null,((function (i__147696,x,c__12234__auto__,size__12235__auto__,b__147697,s__147695__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(i__147696,x,c__12234__auto__,size__12235__auto__,b__147697,s__147695__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false));
{
var G__147747 = (i__147696 + (1));
i__147696 = G__147747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147697),iter__147694.call(null,cljs.core.chunk_rest.call(null,s__147695__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147697),null);
}
} else
{var x = cljs.core.first.call(null,s__147695__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__147695__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(x,s__147695__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false),iter__147694.call(null,cljs.core.rest.call(null,s__147695__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());var tops = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function iter__147698(s__147699){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){var s__147699__$1 = s__147699;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147699__$1);if(temp__4388__auto__)
{var s__147699__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__147699__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147699__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147701 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147700 = (0);while(true){
if((i__147700 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__147700);cljs.core.chunk_append.call(null,b__147701,freactive.core.rx_STAR_.call(null,((function (i__147700,y,c__12234__auto__,size__12235__auto__,b__147701,s__147699__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(i__147700,y,c__12234__auto__,size__12235__auto__,b__147701,s__147699__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false));
{
var G__147748 = (i__147700 + (1));
i__147700 = G__147748;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147701),iter__147698.call(null,cljs.core.chunk_rest.call(null,s__147699__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147701),null);
}
} else
{var y = cljs.core.first.call(null,s__147699__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__147699__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(y,s__147699__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false),iter__147698.call(null,cljs.core.rest.call(null,s__147699__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
;return iter__12236__auto__.call(null,offsets);
})());var bottoms = cljs.core.vec.call(null,(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function iter__147702(s__147703){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var s__147703__$1 = s__147703;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147703__$1);if(temp__4388__auto__)
{var s__147703__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__147703__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147703__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147705 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147704 = (0);while(true){
if((i__147704 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__147704);cljs.core.chunk_append.call(null,b__147705,freactive.core.rx_STAR_.call(null,((function (i__147704,y,c__12234__auto__,size__12235__auto__,b__147705,s__147703__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(i__147704,y,c__12234__auto__,size__12235__auto__,b__147705,s__147703__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false));
{
var G__147749 = (i__147704 + (1));
i__147704 = G__147749;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147705),iter__147702.call(null,cljs.core.chunk_rest.call(null,s__147703__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147705),null);
}
} else
{var y = cljs.core.first.call(null,s__147703__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__147703__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(y,s__147703__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false),iter__147702.call(null,cljs.core.rest.call(null,s__147703__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());return freactive.experimental.dom2.with_transitions.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("svg","g","svg/g",1738236757),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147706(s__147707){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147707__$1 = s__147707;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147707__$1);if(temp__4388__auto__)
{var s__147707__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__147707__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147707__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147709 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147708 = (0);while(true){
if((i__147708 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__147708);cljs.core.chunk_append.call(null,b__147709,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__147750 = (i__147708 + (1));
i__147708 = G__147750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147709),iter__147706.call(null,cljs.core.chunk_rest.call(null,s__147707__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147709),null);
}
} else
{var i = cljs.core.first.call(null,s__147707__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__147706.call(null,cljs.core.rest.call(null,s__147707__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147710(s__147711){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147711__$1 = s__147711;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147711__$1);if(temp__4388__auto__)
{var s__147711__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__147711__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147711__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147713 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147712 = (0);while(true){
if((i__147712 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__147712);cljs.core.chunk_append.call(null,b__147713,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__147751 = (i__147712 + (1));
i__147712 = G__147751;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147713),iter__147710.call(null,cljs.core.chunk_rest.call(null,s__147711__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147713),null);
}
} else
{var i = cljs.core.first.call(null,s__147711__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__147710.call(null,cljs.core.rest.call(null,s__147711__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147714(s__147715){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147715__$1 = s__147715;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147715__$1);if(temp__4388__auto__)
{var s__147715__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__147715__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147715__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147717 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147716 = (0);while(true){
if((i__147716 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__147716);cljs.core.chunk_append.call(null,b__147717,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__147752 = (i__147716 + (1));
i__147716 = G__147752;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147717),iter__147714.call(null,cljs.core.chunk_rest.call(null,s__147715__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147717),null);
}
} else
{var j = cljs.core.first.call(null,s__147715__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__147714.call(null,cljs.core.rest.call(null,s__147715__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147718(s__147719){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147719__$1 = s__147719;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147719__$1);if(temp__4388__auto__)
{var s__147719__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__147719__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147719__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147721 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147720 = (0);while(true){
if((i__147720 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__147720);cljs.core.chunk_append.call(null,b__147721,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__147753 = (i__147720 + (1));
i__147720 = G__147753;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147721),iter__147718.call(null,cljs.core.chunk_rest.call(null,s__147719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147721),null);
}
} else
{var j = cljs.core.first.call(null,s__147719__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__147718.call(null,cljs.core.rest.call(null,s__147719__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147722(s__147723){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147723__$1 = s__147723;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147723__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__147723__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147724(s__147725){return (new cljs.core.LazySeq(null,((function (s__147723__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147725__$1 = s__147725;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__147725__$1);if(temp__4388__auto____$1)
{var s__147725__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__147725__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147725__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147727 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147726 = (0);while(true){
if((i__147726 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__147726);cljs.core.chunk_append.call(null,b__147727,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__147754 = (i__147726 + (1));
i__147726 = G__147754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147727),iter__147724.call(null,cljs.core.chunk_rest.call(null,s__147725__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147727),null);
}
} else
{var j = cljs.core.first.call(null,s__147725__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__147724.call(null,cljs.core.rest.call(null,s__147725__$2)));
}
} else
{return null;
}
break;
}
});})(s__147723__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__147723__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__147722.call(null,cljs.core.rest.call(null,s__147723__$1)));
} else
{{
var G__147755 = cljs.core.rest.call(null,s__147723__$1);
s__147723__$1 = G__147755;
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
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147728(s__147729){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147729__$1 = s__147729;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147729__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__147729__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147730(s__147731){return (new cljs.core.LazySeq(null,((function (s__147729__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147731__$1 = s__147731;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__147731__$1);if(temp__4388__auto____$1)
{var s__147731__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__147731__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147731__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147733 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147732 = (0);while(true){
if((i__147732 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__147732);cljs.core.chunk_append.call(null,b__147733,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__147756 = (i__147732 + (1));
i__147732 = G__147756;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147733),iter__147730.call(null,cljs.core.chunk_rest.call(null,s__147731__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147733),null);
}
} else
{var j = cljs.core.first.call(null,s__147731__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__147730.call(null,cljs.core.rest.call(null,s__147731__$2)));
}
} else
{return null;
}
break;
}
});})(s__147729__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__147729__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__147728.call(null,cljs.core.rest.call(null,s__147729__$1)));
} else
{{
var G__147757 = cljs.core.rest.call(null,s__147729__$1);
s__147729__$1 = G__147757;
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
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147734(s__147735){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147735__$1 = s__147735;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147735__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__147735__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147736(s__147737){return (new cljs.core.LazySeq(null,((function (s__147735__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147737__$1 = s__147737;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__147737__$1);if(temp__4388__auto____$1)
{var s__147737__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__147737__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147737__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147739 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147738 = (0);while(true){
if((i__147738 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__147738);cljs.core.chunk_append.call(null,b__147739,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__147758 = (i__147738 + (1));
i__147738 = G__147758;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147739),iter__147736.call(null,cljs.core.chunk_rest.call(null,s__147737__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147739),null);
}
} else
{var j = cljs.core.first.call(null,s__147737__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__147736.call(null,cljs.core.rest.call(null,s__147737__$2)));
}
} else
{return null;
}
break;
}
});})(s__147735__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__147735__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__147734.call(null,cljs.core.rest.call(null,s__147735__$1)));
} else
{{
var G__147759 = cljs.core.rest.call(null,s__147735__$1);
s__147735__$1 = G__147759;
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
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12236__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147740(s__147741){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147741__$1 = s__147741;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__147741__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__147741__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__147742(s__147743){return (new cljs.core.LazySeq(null,((function (s__147741__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__147743__$1 = s__147743;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__147743__$1);if(temp__4388__auto____$1)
{var s__147743__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__147743__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__147743__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__147745 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__147744 = (0);while(true){
if((i__147744 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__147744);cljs.core.chunk_append.call(null,b__147745,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__147760 = (i__147744 + (1));
i__147744 = G__147760;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147745),iter__147742.call(null,cljs.core.chunk_rest.call(null,s__147743__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__147745),null);
}
} else
{var j = cljs.core.first.call(null,s__147743__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__147742.call(null,cljs.core.rest.call(null,s__147743__$2)));
}
} else
{return null;
}
break;
}
});})(s__147741__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__147741__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__147740.call(null,cljs.core.rest.call(null,s__147741__$1)));
} else
{{
var G__147761 = cljs.core.rest.call(null,s__147741__$1);
s__147741__$1 = G__147761;
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
;return iter__12236__auto__.call(null,cljs.core.range.call(null,n_STAR_));
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

//# sourceMappingURL=dom_perf.js.map