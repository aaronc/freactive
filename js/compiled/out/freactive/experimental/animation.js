// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.experimental.animation');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('freactive.core');

/**
* @constructor
*/
freactive.experimental.animation.AnimationEaser = (function (){
})
freactive.experimental.animation.AnimationEaser.cljs$lang$type = true;
freactive.experimental.animation.AnimationEaser.cljs$lang$ctorStr = "freactive.experimental.animation/AnimationEaser";
freactive.experimental.animation.AnimationEaser.cljs$lang$ctorPrWriter = (function (this__12077__auto__,writer__12078__auto__,opts__12079__auto__){return cljs.core._write.call(null,writer__12078__auto__,"freactive.experimental.animation/AnimationEaser");
});
freactive.experimental.animation.__GT_AnimationEaser = (function __GT_AnimationEaser(){return (new freactive.experimental.animation.AnimationEaser());
});

/**
* @constructor
*/
freactive.experimental.animation.AimationReactiveExpression = (function (f,base_rx,active){
this.f = f;
this.base_rx = base_rx;
this.active = active;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
freactive.experimental.animation.AimationReactiveExpression.cljs$lang$type = true;
freactive.experimental.animation.AimationReactiveExpression.cljs$lang$ctorStr = "freactive.experimental.animation/AimationReactiveExpression";
freactive.experimental.animation.AimationReactiveExpression.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"freactive.experimental.animation/AimationReactiveExpression");
});
freactive.experimental.animation.AimationReactiveExpression.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.active))
{if(cljs.core.truth_(freactive.core._STAR_invalidate_rx_STAR_))
{freactive.core._STAR_invalidate_rx_STAR_.call(null);
} else
{}
return self__.f.call(null);
} else
{return cljs.core.deref.call(null,self__.base_rx);
}
});
freactive.experimental.animation.AimationReactiveExpression.prototype.freactive$core$IInvalidates$ = true;
freactive.experimental.animation.AimationReactiveExpression.prototype.freactive$core$IInvalidates$_add_invalidation_watch$arity$3 = (function (this$,key,cb){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.active))
{return cb.call(null,key,this$__$1);
} else
{return freactive.core._add_invalidation_watch.call(null,self__.base_rx,key,cb);
}
});
freactive.experimental.animation.AimationReactiveExpression.prototype.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.active))
{return null;
} else
{return freactive.core._remove_invalidation_watch.call(null,self__.base_rx,key);
}
});
freactive.experimental.animation.AimationReactiveExpression.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,cb){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.active))
{return cb.call(null,key,this$__$1,null,self__.f.call(null));
} else
{return null;
}
});
freactive.experimental.animation.AimationReactiveExpression.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.active))
{return null;
} else
{return cljs.core._remove_watch.call(null,self__.base_rx,key);
}
});
freactive.experimental.animation.__GT_AimationReactiveExpression = (function __GT_AimationReactiveExpression(f,base_rx,active){return (new freactive.experimental.animation.AimationReactiveExpression(f,base_rx,active));
});
freactive.experimental.animation.animation_rx_STAR_ = (function animation_rx_STAR_(f){var base_rx = freactive.core.rx_STAR_.call(null,f);return (new freactive.experimental.animation.AimationReactiveExpression(f,base_rx,true));
});

//# sourceMappingURL=animation.js.map