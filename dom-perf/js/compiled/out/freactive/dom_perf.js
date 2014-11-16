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
return (function iter__148074(s__148075){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){var s__148075__$1 = s__148075;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148075__$1);if(temp__4388__auto__)
{var s__148075__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__148075__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148075__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148077 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148076 = (0);while(true){
if((i__148076 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__148076);cljs.core.chunk_append.call(null,b__148077,freactive.core.rx_STAR_.call(null,((function (i__148076,x,c__12234__auto__,size__12235__auto__,b__148077,s__148075__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(i__148076,x,c__12234__auto__,size__12235__auto__,b__148077,s__148075__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false));
{
var G__148130 = (i__148076 + (1));
i__148076 = G__148130;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148077),iter__148074.call(null,cljs.core.chunk_rest.call(null,s__148075__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148077),null);
}
} else
{var x = cljs.core.first.call(null,s__148075__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__148075__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y){
return (function (){return ((x * cljs.core.deref.call(null,freactive.dom_perf.mouse_x)) * cljs.core.deref.call(null,ease_x));
});})(x,s__148075__$2,temp__4388__auto__,n_STAR_,spacer,offsets,ease_x,ease_y))
,false),iter__148074.call(null,cljs.core.rest.call(null,s__148075__$2)));
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
return (function iter__148078(s__148079){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var s__148079__$1 = s__148079;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148079__$1);if(temp__4388__auto__)
{var s__148079__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__148079__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148079__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148081 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148080 = (0);while(true){
if((i__148080 < size__12235__auto__))
{var x = cljs.core._nth.call(null,c__12234__auto__,i__148080);cljs.core.chunk_append.call(null,b__148081,freactive.core.rx_STAR_.call(null,((function (i__148080,x,c__12234__auto__,size__12235__auto__,b__148081,s__148079__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(i__148080,x,c__12234__auto__,size__12235__auto__,b__148081,s__148079__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false));
{
var G__148131 = (i__148080 + (1));
i__148080 = G__148131;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148081),iter__148078.call(null,cljs.core.chunk_rest.call(null,s__148079__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148081),null);
}
} else
{var x = cljs.core.first.call(null,s__148079__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (x,s__148079__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y){
return (function (){var w = cljs.core.deref.call(null,freactive.dom_perf.width);return (w - ((x * (w - cljs.core.deref.call(null,freactive.dom_perf.mouse_x))) * cljs.core.deref.call(null,ease_x)));
});})(x,s__148079__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,ease_x,ease_y))
,false),iter__148078.call(null,cljs.core.rest.call(null,s__148079__$2)));
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
return (function iter__148082(s__148083){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){var s__148083__$1 = s__148083;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148083__$1);if(temp__4388__auto__)
{var s__148083__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__148083__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148083__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148085 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148084 = (0);while(true){
if((i__148084 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__148084);cljs.core.chunk_append.call(null,b__148085,freactive.core.rx_STAR_.call(null,((function (i__148084,y,c__12234__auto__,size__12235__auto__,b__148085,s__148083__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(i__148084,y,c__12234__auto__,size__12235__auto__,b__148085,s__148083__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false));
{
var G__148132 = (i__148084 + (1));
i__148084 = G__148132;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148085),iter__148082.call(null,cljs.core.chunk_rest.call(null,s__148083__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148085),null);
}
} else
{var y = cljs.core.first.call(null,s__148083__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__148083__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y){
return (function (){return ((y * cljs.core.deref.call(null,freactive.dom_perf.mouse_y)) * cljs.core.deref.call(null,ease_y));
});})(y,s__148083__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,ease_x,ease_y))
,false),iter__148082.call(null,cljs.core.rest.call(null,s__148083__$2)));
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
return (function iter__148086(s__148087){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var s__148087__$1 = s__148087;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148087__$1);if(temp__4388__auto__)
{var s__148087__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__148087__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148087__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148089 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148088 = (0);while(true){
if((i__148088 < size__12235__auto__))
{var y = cljs.core._nth.call(null,c__12234__auto__,i__148088);cljs.core.chunk_append.call(null,b__148089,freactive.core.rx_STAR_.call(null,((function (i__148088,y,c__12234__auto__,size__12235__auto__,b__148089,s__148087__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(i__148088,y,c__12234__auto__,size__12235__auto__,b__148089,s__148087__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false));
{
var G__148133 = (i__148088 + (1));
i__148088 = G__148133;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148089),iter__148086.call(null,cljs.core.chunk_rest.call(null,s__148087__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148089),null);
}
} else
{var y = cljs.core.first.call(null,s__148087__$2);return cljs.core.cons.call(null,freactive.core.rx_STAR_.call(null,((function (y,s__148087__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y){
return (function (){var h = cljs.core.deref.call(null,freactive.dom_perf.height);return (h - ((y * (h - cljs.core.deref.call(null,freactive.dom_perf.mouse_y))) * cljs.core.deref.call(null,ease_y)));
});})(y,s__148087__$2,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,ease_x,ease_y))
,false),iter__148086.call(null,cljs.core.rest.call(null,s__148087__$2)));
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
return (function iter__148090(s__148091){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148091__$1 = s__148091;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148091__$1);if(temp__4388__auto__)
{var s__148091__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__148091__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148091__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148093 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148092 = (0);while(true){
if((i__148092 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__148092);cljs.core.chunk_append.call(null,b__148093,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y));
{
var G__148134 = (i__148092 + (1));
i__148092 = G__148134;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148093),iter__148090.call(null,cljs.core.chunk_rest.call(null,s__148091__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148093),null);
}
} else
{var i = cljs.core.first.call(null,s__148091__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),freactive.dom_perf.mouse_y),iter__148090.call(null,cljs.core.rest.call(null,s__148091__$2)));
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
return (function iter__148094(s__148095){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148095__$1 = s__148095;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148095__$1);if(temp__4388__auto__)
{var s__148095__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__148095__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148095__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148097 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148096 = (0);while(true){
if((i__148096 < size__12235__auto__))
{var i = cljs.core._nth.call(null,c__12234__auto__,i__148096);cljs.core.chunk_append.call(null,b__148097,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y));
{
var G__148135 = (i__148096 + (1));
i__148096 = G__148135;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148097),iter__148094.call(null,cljs.core.chunk_rest.call(null,s__148095__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148097),null);
}
} else
{var i = cljs.core.first.call(null,s__148095__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),freactive.dom_perf.mouse_y),iter__148094.call(null,cljs.core.rest.call(null,s__148095__$2)));
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
return (function iter__148098(s__148099){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148099__$1 = s__148099;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148099__$1);if(temp__4388__auto__)
{var s__148099__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__148099__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148099__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148101 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148100 = (0);while(true){
if((i__148100 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__148100);cljs.core.chunk_append.call(null,b__148101,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)));
{
var G__148136 = (i__148100 + (1));
i__148100 = G__148136;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148101),iter__148098.call(null,cljs.core.chunk_rest.call(null,s__148099__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148101),null);
}
} else
{var j = cljs.core.first.call(null,s__148099__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,tops,j)),iter__148098.call(null,cljs.core.rest.call(null,s__148099__$2)));
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
return (function iter__148102(s__148103){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148103__$1 = s__148103;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148103__$1);if(temp__4388__auto__)
{var s__148103__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__148103__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148103__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148105 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148104 = (0);while(true){
if((i__148104 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__148104);cljs.core.chunk_append.call(null,b__148105,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)));
{
var G__148137 = (i__148104 + (1));
i__148104 = G__148137;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148105),iter__148102.call(null,cljs.core.chunk_rest.call(null,s__148103__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148105),null);
}
} else
{var j = cljs.core.first.call(null,s__148103__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,freactive.dom_perf.mouse_x,cljs.core.nth.call(null,bottoms,j)),iter__148102.call(null,cljs.core.rest.call(null,s__148103__$2)));
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
return (function iter__148106(s__148107){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148107__$1 = s__148107;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148107__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__148107__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__148108(s__148109){return (new cljs.core.LazySeq(null,((function (s__148107__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148109__$1 = s__148109;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__148109__$1);if(temp__4388__auto____$1)
{var s__148109__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__148109__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148109__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148111 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148110 = (0);while(true){
if((i__148110 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__148110);cljs.core.chunk_append.call(null,b__148111,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)));
{
var G__148138 = (i__148110 + (1));
i__148110 = G__148138;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148111),iter__148108.call(null,cljs.core.chunk_rest.call(null,s__148109__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148111),null);
}
} else
{var j = cljs.core.first.call(null,s__148109__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)),iter__148108.call(null,cljs.core.rest.call(null,s__148109__$2)));
}
} else
{return null;
}
break;
}
});})(s__148107__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__148107__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__148106.call(null,cljs.core.rest.call(null,s__148107__$1)));
} else
{{
var G__148139 = cljs.core.rest.call(null,s__148107__$1);
s__148107__$1 = G__148139;
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
return (function iter__148112(s__148113){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148113__$1 = s__148113;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148113__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__148113__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__148114(s__148115){return (new cljs.core.LazySeq(null,((function (s__148113__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148115__$1 = s__148115;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__148115__$1);if(temp__4388__auto____$1)
{var s__148115__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__148115__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148115__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148117 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148116 = (0);while(true){
if((i__148116 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__148116);cljs.core.chunk_append.call(null,b__148117,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__148140 = (i__148116 + (1));
i__148116 = G__148140;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148117),iter__148114.call(null,cljs.core.chunk_rest.call(null,s__148115__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148117),null);
}
} else
{var j = cljs.core.first.call(null,s__148115__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)),iter__148114.call(null,cljs.core.rest.call(null,s__148115__$2)));
}
} else
{return null;
}
break;
}
});})(s__148113__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__148113__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__148112.call(null,cljs.core.rest.call(null,s__148113__$1)));
} else
{{
var G__148141 = cljs.core.rest.call(null,s__148113__$1);
s__148113__$1 = G__148141;
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
return (function iter__148118(s__148119){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148119__$1 = s__148119;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148119__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__148119__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__148120(s__148121){return (new cljs.core.LazySeq(null,((function (s__148119__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148121__$1 = s__148121;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__148121__$1);if(temp__4388__auto____$1)
{var s__148121__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__148121__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148121__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148123 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148122 = (0);while(true){
if((i__148122 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__148122);cljs.core.chunk_append.call(null,b__148123,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)));
{
var G__148142 = (i__148122 + (1));
i__148122 = G__148142;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148123),iter__148120.call(null,cljs.core.chunk_rest.call(null,s__148121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148123),null);
}
} else
{var j = cljs.core.first.call(null,s__148121__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)),iter__148120.call(null,cljs.core.rest.call(null,s__148121__$2)));
}
} else
{return null;
}
break;
}
});})(s__148119__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__148119__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__148118.call(null,cljs.core.rest.call(null,s__148119__$1)));
} else
{{
var G__148143 = cljs.core.rest.call(null,s__148119__$1);
s__148119__$1 = G__148143;
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
return (function iter__148124(s__148125){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148125__$1 = s__148125;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__148125__$1);if(temp__4388__auto__)
{var xs__4940__auto__ = temp__4388__auto__;var i = cljs.core.first.call(null,xs__4940__auto__);var iterys__12232__auto__ = ((function (s__148125__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function iter__148126(s__148127){return (new cljs.core.LazySeq(null,((function (s__148125__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y){
return (function (){var s__148127__$1 = s__148127;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__148127__$1);if(temp__4388__auto____$1)
{var s__148127__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__148127__$2))
{var c__12234__auto__ = cljs.core.chunk_first.call(null,s__148127__$2);var size__12235__auto__ = cljs.core.count.call(null,c__12234__auto__);var b__148129 = cljs.core.chunk_buffer.call(null,size__12235__auto__);if((function (){var i__148128 = (0);while(true){
if((i__148128 < size__12235__auto__))
{var j = cljs.core._nth.call(null,c__12234__auto__,i__148128);cljs.core.chunk_append.call(null,b__148129,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)));
{
var G__148144 = (i__148128 + (1));
i__148128 = G__148144;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148129),iter__148126.call(null,cljs.core.chunk_rest.call(null,s__148127__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__148129),null);
}
} else
{var j = cljs.core.first.call(null,s__148127__$2);return cljs.core.cons.call(null,freactive.dom_perf.circle.call(null,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)),iter__148126.call(null,cljs.core.rest.call(null,s__148127__$2)));
}
} else
{return null;
}
break;
}
});})(s__148125__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
,null,null));
});})(s__148125__$1,i,xs__4940__auto__,temp__4388__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms,ease_x,ease_y))
;var fs__12233__auto__ = cljs.core.seq.call(null,iterys__12232__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12233__auto__)
{return cljs.core.concat.call(null,fs__12233__auto__,iter__148124.call(null,cljs.core.rest.call(null,s__148125__$1)));
} else
{{
var G__148145 = cljs.core.rest.call(null,s__148125__$1);
s__148125__$1 = G__148145;
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