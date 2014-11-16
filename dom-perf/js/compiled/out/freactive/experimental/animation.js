// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.experimental.animation');
goog.require('cljs.core');
goog.require('freactive.experimental.dom2');
goog.require('freactive.experimental.dom2');
goog.require('freactive.core');
goog.require('freactive.core');

/**
* @constructor
*/
freactive.experimental.animation.AnimationEaser = (function (state,easing_fn,animating,on_complete,watches,invalidation_watches){
this.state = state;
this.easing_fn = easing_fn;
this.animating = animating;
this.on_complete = on_complete;
this.watches = watches;
this.invalidation_watches = invalidation_watches;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
freactive.experimental.animation.AnimationEaser.cljs$lang$type = true;
freactive.experimental.animation.AnimationEaser.cljs$lang$ctorStr = "freactive.experimental.animation/AnimationEaser";
freactive.experimental.animation.AnimationEaser.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"freactive.experimental.animation/AnimationEaser");
});
freactive.experimental.animation.AnimationEaser.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(freactive.core._STAR_invalidate_rx_STAR_))
{cljs.core.add_watch.call(null,this$__$1,freactive.core._STAR_invalidate_rx_STAR_,freactive.core._STAR_invalidate_rx_STAR_);
} else
{}
return self__.state;
});
freactive.experimental.animation.AnimationEaser.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__35779 = cljs.core.seq.call(null,self__.watches);var chunk__35780 = null;var count__35781 = (0);var i__35782 = (0);while(true){
if((i__35782 < count__35781))
{var vec__35783 = cljs.core._nth.call(null,chunk__35780,i__35782);var key = cljs.core.nth.call(null,vec__35783,(0),null);var f = cljs.core.nth.call(null,vec__35783,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__35785 = seq__35779;
var G__35786 = chunk__35780;
var G__35787 = count__35781;
var G__35788 = (i__35782 + (1));
seq__35779 = G__35785;
chunk__35780 = G__35786;
count__35781 = G__35787;
i__35782 = G__35788;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__35779);if(temp__4388__auto__)
{var seq__35779__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35779__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__35779__$1);{
var G__35789 = cljs.core.chunk_rest.call(null,seq__35779__$1);
var G__35790 = c__12268__auto__;
var G__35791 = cljs.core.count.call(null,c__12268__auto__);
var G__35792 = (0);
seq__35779 = G__35789;
chunk__35780 = G__35790;
count__35781 = G__35791;
i__35782 = G__35792;
continue;
}
} else
{var vec__35784 = cljs.core.first.call(null,seq__35779__$1);var key = cljs.core.nth.call(null,vec__35784,(0),null);var f = cljs.core.nth.call(null,vec__35784,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__35793 = cljs.core.next.call(null,seq__35779__$1);
var G__35794 = null;
var G__35795 = (0);
var G__35796 = (0);
seq__35779 = G__35793;
chunk__35780 = G__35794;
count__35781 = G__35795;
i__35782 = G__35796;
continue;
}
}
} else
{return null;
}
}
break;
}
});
freactive.experimental.animation.AnimationEaser.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
return this$__$1;
});
freactive.experimental.animation.AnimationEaser.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
return this$__$1;
});
freactive.experimental.animation.__GT_AnimationEaser = (function __GT_AnimationEaser(state,easing_fn,animating,on_complete,watches,invalidation_watches){return (new freactive.experimental.animation.AnimationEaser(state,easing_fn,animating,on_complete,watches,invalidation_watches));
});
freactive.experimental.animation.easer = (function easer(init_state){return (new freactive.experimental.animation.AnimationEaser(init_state,null,false,null,null,null));
});
freactive.experimental.animation.start_easing_BANG_ = (function() {
var start_easing_BANG_ = null;
var start_easing_BANG___5 = (function (easer,to,duration,easing_fn,when_complete){var start_ms = freactive.core._raw_deref.call(null,freactive.experimental.dom2.frame_time);var from = easer.state;var total_change = (to - from);var scaled_easing_fn = ((function (start_ms,from,total_change){
return (function (new_ms){var t = ((new_ms - start_ms) / duration);var t__$1 = (((t >= 1.0))?(function (){easer.animating = false;
return 1.0;
})():t);var y = easing_fn.call(null,t__$1);return (from + (y * total_change));
});})(start_ms,from,total_change))
;easer.easing_fn = scaled_easing_fn;
easer.on_complete = when_complete;
if(cljs.core.truth_(easer.animating))
{} else
{easer.animating = true;
cljs.core.add_watch.call(null,freactive.experimental.dom2.frame_time,easer,((function (start_ms,from,total_change,scaled_easing_fn){
return (function (_,___$1,___$2,new_ms){if(cljs.core.truth_(easer.animating))
{var cur_state = easer.state;var new_state = easer.easing_fn.call(null,new_ms);easer.state = new_state;
return cljs.core._notify_watches.call(null,easer,cur_state,new_state);
} else
{cljs.core.remove_watch.call(null,freactive.experimental.dom2.frame_time,easer);
var temp__4388__auto__ = easer.on_complete;if(cljs.core.truth_(temp__4388__auto__))
{var cb = temp__4388__auto__;easer.on_complete = null;
return cb.call(null);
} else
{return null;
}
}
});})(start_ms,from,total_change,scaled_easing_fn))
);
}
return easer;
});
var start_easing_BANG___6 = (function (easer,from,to,duration,easing_fn,when_complete){var cur = easer.state;var ratio = ((to - cur) / (to - from));var duration__$1 = (ratio * duration);return start_easing_BANG_.call(null,easer,to,duration__$1,easing_fn,when_complete);
});
start_easing_BANG_ = function(easer,from,to,duration,easing_fn,when_complete){
switch(arguments.length){
case 5:
return start_easing_BANG___5.call(this,easer,from,to,duration,easing_fn);
case 6:
return start_easing_BANG___6.call(this,easer,from,to,duration,easing_fn,when_complete);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start_easing_BANG_.cljs$core$IFn$_invoke$arity$5 = start_easing_BANG___5;
start_easing_BANG_.cljs$core$IFn$_invoke$arity$6 = start_easing_BANG___6;
return start_easing_BANG_;
})()
;
freactive.experimental.animation.PI = Math.PI;
freactive.experimental.animation.PI_2 = (Math.PI / (2));
freactive.experimental.animation.linear = cljs.core.identity;
/**
* Modeled after the parabola y = x^2
*/
freactive.experimental.animation.quad_in = (function quad_in(p){return (p * p);
});
/**
* Modeled after the parabola y = -x^2 + 2x
*/
freactive.experimental.animation.quad_out = (function quad_out(p){return (- (p * (p - (2))));
});
/**
* Modeled after the piecewise quadratic
* y = (1/2)((2x)^2)               [0, 0.5)
* y = -(1/2)((2x-1)*(2x-3) - 1)   [0.5, 1]
*/
freactive.experimental.animation.quad_in_out = (function quad_in_out(p){if((p < 0.5))
{return (((2) * p) * p);
} else
{return ((((4) * p) + (((-2) * p) * p)) + (-1));
}
});
/**
* Modeled after the cubic y = x^3
*/
freactive.experimental.animation.cube_in = (function cube_in(p){return ((p * p) * p);
});
/**
* Modeled after the cubic y = (x - 1)^3 + 1
*/
freactive.experimental.animation.cube_out = (function cube_out(p){var f = (p - (1));return (((f * f) * f) + (1));
});
/**
* Modeled after the piecewise cubic
* y = (1/2)((2x)^3)         [0, 0.5)
* y = (1/2)((2x-2)^3 + 2)   [0.5, 1]
*/
freactive.experimental.animation.cube_in_out = (function cube_in_out(p){if((p < 0.5))
{return (((p * p) * p) * (4));
} else
{var f = (((2) * p) - (2));return ((((0.5 * f) * f) * f) + (1));
}
});
/**
* Modeled after the quartic x^4
*/
freactive.experimental.animation.quart_in = (function quart_in(p){return (((p * p) * p) * p);
});
/**
* Modeled after the quartic y = 1 - (x - 1)^4
*/
freactive.experimental.animation.quart_out = (function quart_out(p){var f = (p - (1));return ((((f * f) * f) * ((1) - p)) + (1));
});
/**
* Modeled after the piecewise quartic
* y = (1/2)((2x)^4)          [0, 0.5)
* y = -(1/2)((2x-2)^4 - 2)   [0.5, 1]
*/
freactive.experimental.animation.quart_in_out = (function quart_in_out(p){if((p < 0.5))
{return ((((p * p) * p) * p) * (8));
} else
{var f = (p - (1));return ((((((-8) * f) * f) * f) * f) + (1));
}
});
/**
* Modeled after the quintic y = x^5
*/
freactive.experimental.animation.quint_in = (function quint_in(p){return ((((p * p) * p) * p) * p);
});
/**
* Modeled after the quintic y = (x - 1)^5 + 1
*/
freactive.experimental.animation.quint_out = (function quint_out(p){var f = (p - (1));return (((((f * f) * f) * f) * f) + (1));
});
/**
* Modeled after the piecewise quintic
* y = (1/2)((2x)^5)         [0, 0.5)
* y = (1/2)((2x-2)^5 + 2)   [0.5, 1]
*/
freactive.experimental.animation.quint_in_out = (function quint_in_out(p){if((p < 0.5))
{return ((((((16) * p) * p) * p) * p) * p);
} else
{var f = (((2) * p) - (2));return ((((((0.5 * f) * f) * f) * f) * f) + (1));
}
});
/**
* Modeled after quarter-cycle of sine wave
*/
freactive.experimental.animation.sine_in = (function sine_in(p){return (Math.sin(((p - (1)) * freactive.experimental.animation.PI_2)) + (1));
});
/**
* Modeled after quarter-cycle of sine wave (different phase)
*/
freactive.experimental.animation.sine_out = (function sine_out(p){return Math.sin((p * freactive.experimental.animation.PI_2));
});
/**
* Modeled after half sine wave
*/
freactive.experimental.animation.sine_in_out = (function sine_in_out(p){return (0.5 * ((1) - Math.cos((p * freactive.experimental.animation.PI))));
});
/**
* Modeled after shifted quadrant IV of unit circle
*/
freactive.experimental.animation.circular_in = (function circular_in(p){return ((1) - Math.sqrt(((1) - (p * p))));
});
/**
* Modeled after shifted quadrant II of unit circle
*/
freactive.experimental.animation.circular_out = (function circular_out(p){return Math.sqrt((((2) - p) * p));
});
/**
* Modeled after the piecewise circular function
* y = (1/2)(1 - sqrt(1 - 4x^2))             [0, 0.5)
* y = (1/2)(sqrt(-(2x - 3)*(2x - 1)) + 1)   [0.5, 1]
*/
freactive.experimental.animation.circular_in_out = (function circular_in_out(p){if((p < 0.5))
{return (0.5 * ((1) - Math.sqrt(((1) - ((4) * (p * p))))));
} else
{return (0.5 * (Math.sqrt((- ((((2) * p) - (3)) * (((2) * p) - (1))))) + (1)));
}
});
/**
* Modeled after the exponential function y = 2^(10(x - 1))
*/
freactive.experimental.animation.exp_in = (function exp_in(p){if(cljs.core._EQ_.call(null,p,(0)))
{return p;
} else
{return Math.pow((2),((10) * (p - (1))));
}
});
/**
* Modeled after the exponential function y = -2^(-10x) + 1
*/
freactive.experimental.animation.exp_out = (function exp_out(p){if(cljs.core._EQ_.call(null,p,(1)))
{return p;
} else
{return ((1) - Math.pow((2),((-10) * p)));
}
});
/**
* Modeled after the piecewise exponential
* y = (1/2)2^(10(2x - 1))           [0,0.5)
* y = -(1/2)*2^(-10(2x - 1))  + 1   [0.5,1]
*/
freactive.experimental.animation.exp_in_out = (function exp_in_out(p){if((cljs.core._EQ_.call(null,p,(0))) || (cljs.core._EQ_.call(null,p,(1))))
{return p;
} else
{if((p < 0.5))
{return (0.5 * Math.pow((2),(((20) * p) - (10))));
} else
{return ((-0.5 * Math.pow((2),(((-20) * p) + (10)))) + (1));
}
}
});
/**
* Modeled after the damped sine wave y = sin(13PI_2*x)*pow(2, 10 * (x - 1))
*/
freactive.experimental.animation.elastic_in = (function elastic_in(p){return (Math.sin((((13) * freactive.experimental.animation.PI_2) * p)) * Math.pow((2),((10) * (p - (1)))));
});
/**
* Modeled after the damped sine wave y = sin(-13PI_2*(x + 1))*pow(2, -10x) + 1
*/
freactive.experimental.animation.elastic_out = (function elastic_out(p){return ((Math.sin((((-13) * freactive.experimental.animation.PI_2) * (p + (1)))) * Math.pow((2),((-10) * p))) + (1));
});
/**
* Modeled after the piecewise exponentially-damped sine wave:
* y = (1/2)*sin(13PI_2*(2*x))*pow(2, 10 * ((2*x) - 1))        [0,0.5)
* y = (1/2)*(sin(-13PI_2*((2x-1)+1))*pow(2,-10(2*x-1)) + 2)   [0.5, 1]
*/
freactive.experimental.animation.elastic_in_out = (function elastic_in_out(p){if((p < 0.5))
{return ((0.5 * Math.sin(((((13) * freactive.experimental.animation.PI_2) * (2)) * p))) * Math.pow((2),((10) * (((2) * p) - (1)))));
} else
{return (0.5 * ((Math.sin((((-13) * freactive.experimental.animation.PI_2) * ((2) * p))) * Math.pow((2),((-10) * (((2) * p) + (1))))) + (2)));
}
});
/**
* Modeled after the overshooting cubic y = x^3-x*sin(x*pi)
*/
freactive.experimental.animation.back_in = (function back_in(p){return (((p * p) * p) - (p * Math.sin((p * freactive.experimental.animation.PI))));
});
/**
* Modeled after overshooting cubic y = 1-((1-x)^3-(1-x)*sin((1-x)*pi))
*/
freactive.experimental.animation.back_out = (function back_out(p){var f = ((1) - p);return ((1) - (((f * f) * f) - Math.sin((f * freactive.experimental.animation.PI))));
});
/**
* Modeled after the piecewise overshooting cubic function:
* y = (1/2)*((2x)^3-(2x)*sin(2*x*pi))             [0, 0.5)
* y = (1/2)*(1-((1-x)^3-(1-x)*sin((1-x)*pi))+1)   [0.5, 1]
*/
freactive.experimental.animation.back_in_out = (function back_in_out(p){if((p < 0.5))
{var f = ((2) * p);return (0.5 * (((f * f) * f) - Math.sin((f * freactive.experimental.animation.PI))));
} else
{var f = ((1) - (((2) * p) - (1)));return ((0.5 * ((1) - (((f * f) * f) - (f * Math.sin((f * freactive.experimental.animation.PI)))))) + 0.5);
}
});
freactive.experimental.animation.bounce_out = (function bounce_out(p){if((p < ((1) / 2.75)))
{return ((7.5625 * p) * p);
} else
{if((p < ((2) / 2.75)))
{return (((7.5625 * (p - (1.5 / 2.75))) * (p - (1.5 / 2.75))) + 0.75);
} else
{if((p < (2.5 / 2.75)))
{return (((7.5625 * (p - (2.5 / 2.75))) * (p - (2.5 / 2.75))) + 0.9375);
} else
{return (((7.5625 * (p - (2.625 / 2.75))) * (p - (2.625 / 2.75))) + 0.984375);

}
}
}
});
freactive.experimental.animation.bounce_in = (function bounce_in(p){return ((1) - freactive.experimental.animation.bounce_out.call(null,((1) - p)));
});
freactive.experimental.animation.bounce_in_out = (function bounce_in_out(p){if((p < 0.5))
{return (0.5 * freactive.experimental.animation.bounce_in.call(null,(p * (2))));
} else
{return ((0.5 * freactive.experimental.animation.bounce_out.call(null,((p * (2)) - (1)))) + 0.5);
}
});

//# sourceMappingURL=animation.js.map