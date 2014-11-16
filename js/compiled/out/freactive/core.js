// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.core');
goog.require('cljs.core');
freactive.core._STAR_invalidate_rx_STAR_ = null;
freactive.core._STAR_lazy_STAR_ = null;
freactive.core._STAR_do_trace_captures_STAR_ = null;
freactive.core._STAR_trace_capture_STAR_ = null;
freactive.core.IReactive = (function (){var obj126176 = {};return obj126176;
})();
freactive.core._raw_deref = (function _raw_deref(this$){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$core$IReactive$_raw_deref$arity$1;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$core$IReactive$_raw_deref$arity$1(this$);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.core._raw_deref[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.core._raw_deref["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReactive.-raw-deref",this$);
}
}
})().call(null,this$);
}
});
freactive.core.IInvalidates = (function (){var obj126178 = {};return obj126178;
})();
freactive.core._notify_invalidation_watches = (function _notify_invalidation_watches(this$){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1(this$);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.core._notify_invalidation_watches[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.core._notify_invalidation_watches["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInvalidates.-notify-invalidation-watches",this$);
}
}
})().call(null,this$);
}
});
freactive.core._add_invalidation_watch = (function _add_invalidation_watch(this$,key,f){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$core$IInvalidates$_add_invalidation_watch$arity$3;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$core$IInvalidates$_add_invalidation_watch$arity$3(this$,key,f);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.core._add_invalidation_watch[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.core._add_invalidation_watch["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInvalidates.-add-invalidation-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
freactive.core._remove_invalidation_watch = (function _remove_invalidation_watch(this$,key){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2(this$,key);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.core._remove_invalidation_watch[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.core._remove_invalidation_watch["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInvalidates.-remove-invalidation-watch",this$);
}
}
})().call(null,this$,key);
}
});
freactive.core.add_invalidation_watch = (function add_invalidation_watch(this$,key,f){return freactive.core._add_invalidation_watch.call(null,this$,key,f);
});
freactive.core.remove_invalidation_watch = (function remove_invalidation_watch(this$,key){return freactive.core._remove_invalidation_watch.call(null,this$,key);
});

/**
* @constructor
*/
freactive.core.ReactiveAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
})
freactive.core.ReactiveAtom.cljs$lang$type = true;
freactive.core.ReactiveAtom.cljs$lang$ctorStr = "freactive.core/ReactiveAtom";
freactive.core.ReactiveAtom.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"freactive.core/ReactiveAtom");
});
freactive.core.ReactiveAtom.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
freactive.core.ReactiveAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<ReactiveAtom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
freactive.core.ReactiveAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
freactive.core.ReactiveAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
freactive.core.ReactiveAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
freactive.core.ReactiveAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = a__$1.state;if(cljs.core.not_EQ_.call(null,old_value,new_value))
{var validate_126185 = a__$1.validator;if((validate_126185 == null))
{} else
{if(cljs.core.truth_(validate_126185.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
a__$1.state = new_value;
if(cljs.core.empty_QMARK_.call(null,a__$1.watches))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
} else
{}
return new_value;
});
freactive.core.ReactiveAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1.state));
});
freactive.core.ReactiveAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1.state,x));
});
freactive.core.ReactiveAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1.state,x,y));
});
freactive.core.ReactiveAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1.state,x,y,more));
});
freactive.core.ReactiveAtom.prototype.freactive$core$IReactive$ = true;
freactive.core.ReactiveAtom.prototype.freactive$core$IReactive$_raw_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
freactive.core.ReactiveAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var temp__4388__auto___126186 = freactive.core._STAR_invalidate_rx_STAR_;if(cljs.core.truth_(temp__4388__auto___126186))
{var invalidate_126187 = temp__4388__auto___126186;cljs.core._add_watch.call(null,this$__$1,invalidate_126187,invalidate_126187);
if(cljs.core.truth_(freactive.core._STAR_trace_capture_STAR_))
{freactive.core._STAR_trace_capture_STAR_.call(null,this$__$1);
} else
{}
} else
{}
return self__.state;
});
freactive.core.ReactiveAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__126179 = cljs.core.seq.call(null,self__.watches);var chunk__126180 = null;var count__126181 = (0);var i__126182 = (0);while(true){
if((i__126182 < count__126181))
{var vec__126183 = cljs.core._nth.call(null,chunk__126180,i__126182);var key = cljs.core.nth.call(null,vec__126183,(0),null);var f = cljs.core.nth.call(null,vec__126183,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__126188 = seq__126179;
var G__126189 = chunk__126180;
var G__126190 = count__126181;
var G__126191 = (i__126182 + (1));
seq__126179 = G__126188;
chunk__126180 = G__126189;
count__126181 = G__126190;
i__126182 = G__126191;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__126179);if(temp__4388__auto__)
{var seq__126179__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__126179__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__126179__$1);{
var G__126192 = cljs.core.chunk_rest.call(null,seq__126179__$1);
var G__126193 = c__12267__auto__;
var G__126194 = cljs.core.count.call(null,c__12267__auto__);
var G__126195 = (0);
seq__126179 = G__126192;
chunk__126180 = G__126193;
count__126181 = G__126194;
i__126182 = G__126195;
continue;
}
} else
{var vec__126184 = cljs.core.first.call(null,seq__126179__$1);var key = cljs.core.nth.call(null,vec__126184,(0),null);var f = cljs.core.nth.call(null,vec__126184,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__126196 = cljs.core.next.call(null,seq__126179__$1);
var G__126197 = null;
var G__126198 = (0);
var G__126199 = (0);
seq__126179 = G__126196;
chunk__126180 = G__126197;
count__126181 = G__126198;
i__126182 = G__126199;
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
freactive.core.ReactiveAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
return this$__$1;
});
freactive.core.ReactiveAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
freactive.core.__GT_ReactiveAtom = (function __GT_ReactiveAtom(state,meta,validator,watches){return (new freactive.core.ReactiveAtom(state,meta,validator,watches));
});
/**
* Creates and returns a ReactiveAtom with an initial value of x and zero or
* more options (in any order):
* :meta metadata-map
* :validator validate-fn
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error. If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
freactive.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new freactive.core.ReactiveAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__126203__delegate = function (x,p__126200){var map__126202 = p__126200;var map__126202__$1 = ((cljs.core.seq_QMARK_.call(null,map__126202))?cljs.core.apply.call(null,cljs.core.hash_map,map__126202):map__126202);var validator = cljs.core.get.call(null,map__126202__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__126202__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new freactive.core.ReactiveAtom(x,meta,validator,null));
};
var G__126203 = function (x,var_args){
var p__126200 = null;if (arguments.length > 1) {
  p__126200 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__126203__delegate.call(this,x,p__126200);};
G__126203.cljs$lang$maxFixedArity = 1;
G__126203.cljs$lang$applyTo = (function (arglist__126204){
var x = cljs.core.first(arglist__126204);
var p__126200 = cljs.core.rest(arglist__126204);
return G__126203__delegate(x,p__126200);
});
G__126203.cljs$core$IFn$_invoke$arity$variadic = G__126203__delegate;
return G__126203;
})()
;
atom = function(x,var_args){
var p__126200 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
freactive.core.IReactiveExpression = (function (){var obj126206 = {};return obj126206;
})();
freactive.core._invalidate = (function _invalidate(this$){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$core$IReactiveExpression$_invalidate$arity$1;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$core$IReactiveExpression$_invalidate$arity$1(this$);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.core._invalidate[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.core._invalidate["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReactiveExpression.-invalidate",this$);
}
}
})().call(null,this$);
}
});
freactive.core._compute = (function _compute(this$){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$core$IReactiveExpression$_compute$arity$1;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$core$IReactiveExpression$_compute$arity$1(this$);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.core._compute[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.core._compute["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReactiveExpression.-compute",this$);
}
}
})().call(null,this$);
}
});
freactive.core.make_sully_fn = (function make_sully_fn(reactive){return (function() {
var sully = null;
var sully__0 = (function (){if(cljs.core.truth_(reactive.dirty))
{return null;
} else
{reactive.dirty = true;
if(!(cljs.core.empty_QMARK_.call(null,reactive.watches)))
{if(cljs.core.truth_(freactive.core._compute.call(null,reactive)))
{return freactive.core._notify_invalidation_watches.call(null,reactive);
} else
{return null;
}
} else
{return freactive.core._notify_invalidation_watches.call(null,reactive);
}
}
});
var sully__2 = (function (key,ref){freactive.core._remove_invalidation_watch.call(null,ref,key);
return sully.call(null);
});
var sully__4 = (function (key,ref,_,___$1){cljs.core._remove_watch.call(null,ref,key);
return sully.call(null);
});
sully = function(key,ref,_,___$1){
switch(arguments.length){
case 0:
return sully__0.call(this);
case 2:
return sully__2.call(this,key,ref);
case 4:
return sully__4.call(this,key,ref,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sully.cljs$core$IFn$_invoke$arity$0 = sully__0;
sully.cljs$core$IFn$_invoke$arity$2 = sully__2;
sully.cljs$core$IFn$_invoke$arity$4 = sully__4;
return sully;
})()
});
freactive.core.get_add_watch_STAR_ = (function get_add_watch_STAR_(ref){if((function (){var G__126209 = ref;if(G__126209)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__126209.freactive$core$IInvalidates$;
}
})()))
{return true;
} else
{if((!G__126209.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__126209);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__126209);
}
})())
{return freactive.core.add_invalidation_watch;
} else
{if((function (){var G__126210 = ref;if(G__126210)
{var bit__12161__auto__ = (G__126210.cljs$lang$protocol_mask$partition1$ & (2));if((bit__12161__auto__) || (G__126210.cljs$core$IWatchable$))
{return true;
} else
{if((!G__126210.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__126210);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__126210);
}
})())
{return cljs.core.add_watch;
} else
{return null;
}
}
});
freactive.core.get_remove_watch_STAR_ = (function get_remove_watch_STAR_(ref){if((function (){var G__126213 = ref;if(G__126213)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__126213.freactive$core$IInvalidates$;
}
})()))
{return true;
} else
{if((!G__126213.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__126213);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__126213);
}
})())
{return freactive.core.remove_invalidation_watch;
} else
{if((function (){var G__126214 = ref;if(G__126214)
{var bit__12161__auto__ = (G__126214.cljs$lang$protocol_mask$partition1$ & (2));if((bit__12161__auto__) || (G__126214.cljs$core$IWatchable$))
{return true;
} else
{if((!G__126214.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__126214);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__126214);
}
})())
{return cljs.core.remove_watch;
} else
{return null;
}
}
});
freactive.core.get_add_remove_watch_STAR_ = (function get_add_remove_watch_STAR_(ref){if((function (){var G__126217 = ref;if(G__126217)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__126217.freactive$core$IInvalidates$;
}
})()))
{return true;
} else
{if((!G__126217.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__126217);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__126217);
}
})())
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [freactive.core.add_invalidation_watch,freactive.core.remove_invalidation_watch], null);
} else
{if((function (){var G__126218 = ref;if(G__126218)
{var bit__12161__auto__ = (G__126218.cljs$lang$protocol_mask$partition1$ & (2));if((bit__12161__auto__) || (G__126218.cljs$core$IWatchable$))
{return true;
} else
{if((!G__126218.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__126218);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__126218);
}
})())
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.add_watch,cljs.core.remove_watch], null);
} else
{return null;
}
}
});
freactive.core.lazy_QMARK_ = (function lazy_QMARK_(default_laziness){if(!((freactive.core._STAR_lazy_STAR_ == null)))
{return freactive.core._STAR_lazy_STAR_;
} else
{return default_laziness;
}
});
freactive.core.register_rx_dep = (function register_rx_dep(rx,default_laziness){var temp__4388__auto__ = freactive.core._STAR_invalidate_rx_STAR_;if(cljs.core.truth_(temp__4388__auto__))
{var invalidate = temp__4388__auto__;if(cljs.core.truth_(freactive.core._STAR_trace_capture_STAR_))
{freactive.core._STAR_trace_capture_STAR_.call(null,rx);
} else
{}
if(cljs.core.truth_(freactive.core.lazy_QMARK_.call(null,default_laziness)))
{return freactive.core._add_invalidation_watch.call(null,rx,invalidate,invalidate);
} else
{return cljs.core._add_watch.call(null,rx,invalidate,invalidate);
}
} else
{return null;
}
});

/**
* @constructor
*/
freactive.core.ReactiveExpression = (function (state,dirty,f,deps,meta,watches,invalidation_watches,sully,lazy,trace_captures){
this.state = state;
this.dirty = dirty;
this.f = f;
this.deps = deps;
this.meta = meta;
this.watches = watches;
this.invalidation_watches = invalidation_watches;
this.sully = sully;
this.lazy = lazy;
this.trace_captures = trace_captures;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
freactive.core.ReactiveExpression.cljs$lang$type = true;
freactive.core.ReactiveExpression.cljs$lang$ctorStr = "freactive.core/ReactiveExpression";
freactive.core.ReactiveExpression.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"freactive.core/ReactiveExpression");
});
freactive.core.ReactiveExpression.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
freactive.core.ReactiveExpression.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<ReactiveComputation: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
freactive.core.ReactiveExpression.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
freactive.core.ReactiveExpression.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
freactive.core.ReactiveExpression.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
freactive.core.ReactiveExpression.prototype.freactive$core$IReactive$ = true;
freactive.core.ReactiveExpression.prototype.freactive$core$IReactive$_raw_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.dirty))
{freactive.core._compute.call(null,this$__$1);
} else
{}
return self__.state;
});
freactive.core.ReactiveExpression.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__126219 = cljs.core.seq.call(null,self__.watches);var chunk__126220 = null;var count__126221 = (0);var i__126222 = (0);while(true){
if((i__126222 < count__126221))
{var vec__126223 = cljs.core._nth.call(null,chunk__126220,i__126222);var key = cljs.core.nth.call(null,vec__126223,(0),null);var f__$1 = cljs.core.nth.call(null,vec__126223,(1),null);f__$1.call(null,key,this$__$1,oldval,newval);
{
var G__126233 = seq__126219;
var G__126234 = chunk__126220;
var G__126235 = count__126221;
var G__126236 = (i__126222 + (1));
seq__126219 = G__126233;
chunk__126220 = G__126234;
count__126221 = G__126235;
i__126222 = G__126236;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__126219);if(temp__4388__auto__)
{var seq__126219__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__126219__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__126219__$1);{
var G__126237 = cljs.core.chunk_rest.call(null,seq__126219__$1);
var G__126238 = c__12267__auto__;
var G__126239 = cljs.core.count.call(null,c__12267__auto__);
var G__126240 = (0);
seq__126219 = G__126237;
chunk__126220 = G__126238;
count__126221 = G__126239;
i__126222 = G__126240;
continue;
}
} else
{var vec__126224 = cljs.core.first.call(null,seq__126219__$1);var key = cljs.core.nth.call(null,vec__126224,(0),null);var f__$1 = cljs.core.nth.call(null,vec__126224,(1),null);f__$1.call(null,key,this$__$1,oldval,newval);
{
var G__126241 = cljs.core.next.call(null,seq__126219__$1);
var G__126242 = null;
var G__126243 = (0);
var G__126244 = (0);
seq__126219 = G__126241;
chunk__126220 = G__126242;
count__126221 = G__126243;
i__126222 = G__126244;
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
freactive.core.ReactiveExpression.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f__$1);
return this$__$1;
});
freactive.core.ReactiveExpression.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
freactive.core.ReactiveExpression.prototype.freactive$core$IInvalidates$ = true;
freactive.core.ReactiveExpression.prototype.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__126225 = cljs.core.seq.call(null,self__.invalidation_watches);var chunk__126226 = null;var count__126227 = (0);var i__126228 = (0);while(true){
if((i__126228 < count__126227))
{var vec__126229 = cljs.core._nth.call(null,chunk__126226,i__126228);var key = cljs.core.nth.call(null,vec__126229,(0),null);var f__$1 = cljs.core.nth.call(null,vec__126229,(1),null);f__$1.call(null,key,this$__$1);
{
var G__126245 = seq__126225;
var G__126246 = chunk__126226;
var G__126247 = count__126227;
var G__126248 = (i__126228 + (1));
seq__126225 = G__126245;
chunk__126226 = G__126246;
count__126227 = G__126247;
i__126228 = G__126248;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__126225);if(temp__4388__auto__)
{var seq__126225__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__126225__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__126225__$1);{
var G__126249 = cljs.core.chunk_rest.call(null,seq__126225__$1);
var G__126250 = c__12267__auto__;
var G__126251 = cljs.core.count.call(null,c__12267__auto__);
var G__126252 = (0);
seq__126225 = G__126249;
chunk__126226 = G__126250;
count__126227 = G__126251;
i__126228 = G__126252;
continue;
}
} else
{var vec__126230 = cljs.core.first.call(null,seq__126225__$1);var key = cljs.core.nth.call(null,vec__126230,(0),null);var f__$1 = cljs.core.nth.call(null,vec__126230,(1),null);f__$1.call(null,key,this$__$1);
{
var G__126253 = cljs.core.next.call(null,seq__126225__$1);
var G__126254 = null;
var G__126255 = (0);
var G__126256 = (0);
seq__126225 = G__126253;
chunk__126226 = G__126254;
count__126227 = G__126255;
i__126228 = G__126256;
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
freactive.core.ReactiveExpression.prototype.freactive$core$IInvalidates$_add_invalidation_watch$arity$3 = (function (this$,key,f__$1){var self__ = this;
var this$__$1 = this;this$__$1.invalidation_watches = cljs.core.assoc.call(null,self__.invalidation_watches,key,f__$1);
return this$__$1;
});
freactive.core.ReactiveExpression.prototype.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.invalidation_watches = cljs.core.dissoc.call(null,self__.invalidation_watches,key);
});
freactive.core.ReactiveExpression.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;freactive.core.register_rx_dep.call(null,this$__$1,self__.lazy);
if(cljs.core.truth_(self__.dirty))
{freactive.core._compute.call(null,this$__$1);
} else
{}
return self__.state;
});
freactive.core.ReactiveExpression.prototype.freactive$core$IReactiveExpression$ = true;
freactive.core.ReactiveExpression.prototype.freactive$core$IReactiveExpression$_invalidate$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.sully.call(null);
});
freactive.core.ReactiveExpression.prototype.freactive$core$IReactiveExpression$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;self__.dirty = false;
var old_val = self__.state;var new_val = (function (){var _STAR_invalidate_rx_STAR_126231 = freactive.core._STAR_invalidate_rx_STAR_;var _STAR_trace_capture_STAR_126232 = freactive.core._STAR_trace_capture_STAR_;try{freactive.core._STAR_invalidate_rx_STAR_ = self__.sully;
freactive.core._STAR_trace_capture_STAR_ = self__.trace_captures;
return self__.f.call(null);
}finally {freactive.core._STAR_trace_capture_STAR_ = _STAR_trace_capture_STAR_126232;
freactive.core._STAR_invalidate_rx_STAR_ = _STAR_invalidate_rx_STAR_126231;
}})();if(cljs.core.not_EQ_.call(null,old_val,new_val))
{self__.state = new_val;
cljs.core._notify_watches.call(null,this$__$1,old_val,new_val);
return new_val;
} else
{return null;
}
});
freactive.core.__GT_ReactiveExpression = (function __GT_ReactiveExpression(state,dirty,f,deps,meta,watches,invalidation_watches,sully,lazy,trace_captures){return (new freactive.core.ReactiveExpression(state,dirty,f,deps,meta,watches,invalidation_watches,sully,lazy,trace_captures));
});
freactive.core.rx_STAR_ = (function() {
var rx_STAR_ = null;
var rx_STAR___1 = (function (f){return rx_STAR_.call(null,f,true);
});
var rx_STAR___2 = (function (f,lazy){var reactive = (new freactive.core.ReactiveExpression(null,true,f,null,null,null,null,null,lazy,(function (){var or__11497__auto__ = freactive.core._STAR_do_trace_captures_STAR_;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return ((function (or__11497__auto__){
return (function (_){return null;
});
;})(or__11497__auto__))
}
})()));reactive.sully = freactive.core.make_sully_fn.call(null,reactive);
return reactive;
});
rx_STAR_ = function(f,lazy){
switch(arguments.length){
case 1:
return rx_STAR___1.call(this,f);
case 2:
return rx_STAR___2.call(this,f,lazy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rx_STAR_.cljs$core$IFn$_invoke$arity$1 = rx_STAR___1;
rx_STAR_.cljs$core$IFn$_invoke$arity$2 = rx_STAR___2;
return rx_STAR_;
})()
;
freactive.core.cursor_swap_BANG_ = (function cursor_swap_BANG_(ref,getter,setter,f){return cljs.core.swap_BANG_.call(null,ref,(function (cur){return setter.call(null,cur,f.call(null,getter.call(null,cur)));
}));
});

/**
* @constructor
*/
freactive.core.ReactiveCursor = (function (ref,getter,setter,dirty,state,meta,watches,invalidation_watches,lazy,sully,add_watch_fn){
this.ref = ref;
this.getter = getter;
this.setter = setter;
this.dirty = dirty;
this.state = state;
this.meta = meta;
this.watches = watches;
this.invalidation_watches = invalidation_watches;
this.lazy = lazy;
this.sully = sully;
this.add_watch_fn = add_watch_fn;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
})
freactive.core.ReactiveCursor.cljs$lang$type = true;
freactive.core.ReactiveCursor.cljs$lang$ctorStr = "freactive.core/ReactiveCursor";
freactive.core.ReactiveCursor.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"freactive.core/ReactiveCursor");
});
freactive.core.ReactiveCursor.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
freactive.core.ReactiveCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<ReactiveCursor: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
freactive.core.ReactiveCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
freactive.core.ReactiveCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
freactive.core.ReactiveCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
freactive.core.ReactiveCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.ref,((function (___$1){
return (function (cur){return self__.setter.call(null,cur,new_value);
});})(___$1))
);
});
freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (_,f){var self__ = this;
var ___$1 = this;return freactive.core.cursor_swap_BANG_.call(null,self__.ref,self__.getter,self__.setter,f);
});
freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (_,f,x){var self__ = this;
var ___$1 = this;return freactive.core.cursor_swap_BANG_.call(null,self__.ref,self__.getter,self__.setter,((function (___$1){
return (function (p1__126257_SHARP_){return f.call(null,p1__126257_SHARP_,x);
});})(___$1))
);
});
freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,x,y){var self__ = this;
var ___$1 = this;return freactive.core.cursor_swap_BANG_.call(null,self__.ref,self__.getter,self__.setter,((function (___$1){
return (function (p1__126258_SHARP_){return f.call(null,p1__126258_SHARP_,x,y);
});})(___$1))
);
});
freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,x,y,more){var self__ = this;
var ___$1 = this;return freactive.core.cursor_swap_BANG_.call(null,self__.ref,self__.getter,self__.setter,((function (___$1){
return (function (p1__126259_SHARP_){return cljs.core.apply.call(null,f,p1__126259_SHARP_,x,y,more);
});})(___$1))
);
});
freactive.core.ReactiveCursor.prototype.freactive$core$IReactive$ = true;
freactive.core.ReactiveCursor.prototype.freactive$core$IReactive$_raw_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.dirty))
{freactive.core._compute.call(null,this$__$1);
} else
{}
return self__.state;
});
freactive.core.ReactiveCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;freactive.core.register_rx_dep.call(null,this$__$1,self__.lazy);
if(cljs.core.truth_(self__.dirty))
{freactive.core._compute.call(null,this$__$1);
} else
{}
return self__.state;
});
freactive.core.ReactiveCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__126260 = cljs.core.seq.call(null,self__.watches);var chunk__126261 = null;var count__126262 = (0);var i__126263 = (0);while(true){
if((i__126263 < count__126262))
{var vec__126264 = cljs.core._nth.call(null,chunk__126261,i__126263);var key = cljs.core.nth.call(null,vec__126264,(0),null);var f = cljs.core.nth.call(null,vec__126264,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__126272 = seq__126260;
var G__126273 = chunk__126261;
var G__126274 = count__126262;
var G__126275 = (i__126263 + (1));
seq__126260 = G__126272;
chunk__126261 = G__126273;
count__126262 = G__126274;
i__126263 = G__126275;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__126260);if(temp__4388__auto__)
{var seq__126260__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__126260__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__126260__$1);{
var G__126276 = cljs.core.chunk_rest.call(null,seq__126260__$1);
var G__126277 = c__12267__auto__;
var G__126278 = cljs.core.count.call(null,c__12267__auto__);
var G__126279 = (0);
seq__126260 = G__126276;
chunk__126261 = G__126277;
count__126262 = G__126278;
i__126263 = G__126279;
continue;
}
} else
{var vec__126265 = cljs.core.first.call(null,seq__126260__$1);var key = cljs.core.nth.call(null,vec__126265,(0),null);var f = cljs.core.nth.call(null,vec__126265,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__126280 = cljs.core.next.call(null,seq__126260__$1);
var G__126281 = null;
var G__126282 = (0);
var G__126283 = (0);
seq__126260 = G__126280;
chunk__126261 = G__126281;
count__126262 = G__126282;
i__126263 = G__126283;
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
freactive.core.ReactiveCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
return this$__$1;
});
freactive.core.ReactiveCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
return this$__$1;
});
freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$ = true;
freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__126266 = cljs.core.seq.call(null,self__.invalidation_watches);var chunk__126267 = null;var count__126268 = (0);var i__126269 = (0);while(true){
if((i__126269 < count__126268))
{var vec__126270 = cljs.core._nth.call(null,chunk__126267,i__126269);var key = cljs.core.nth.call(null,vec__126270,(0),null);var f = cljs.core.nth.call(null,vec__126270,(1),null);f.call(null,key,this$__$1);
{
var G__126284 = seq__126266;
var G__126285 = chunk__126267;
var G__126286 = count__126268;
var G__126287 = (i__126269 + (1));
seq__126266 = G__126284;
chunk__126267 = G__126285;
count__126268 = G__126286;
i__126269 = G__126287;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__126266);if(temp__4388__auto__)
{var seq__126266__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__126266__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__126266__$1);{
var G__126288 = cljs.core.chunk_rest.call(null,seq__126266__$1);
var G__126289 = c__12267__auto__;
var G__126290 = cljs.core.count.call(null,c__12267__auto__);
var G__126291 = (0);
seq__126266 = G__126288;
chunk__126267 = G__126289;
count__126268 = G__126290;
i__126269 = G__126291;
continue;
}
} else
{var vec__126271 = cljs.core.first.call(null,seq__126266__$1);var key = cljs.core.nth.call(null,vec__126271,(0),null);var f = cljs.core.nth.call(null,vec__126271,(1),null);f.call(null,key,this$__$1);
{
var G__126292 = cljs.core.next.call(null,seq__126266__$1);
var G__126293 = null;
var G__126294 = (0);
var G__126295 = (0);
seq__126266 = G__126292;
chunk__126267 = G__126293;
count__126268 = G__126294;
i__126269 = G__126295;
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
freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$_add_invalidation_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.invalidation_watches = cljs.core.assoc.call(null,self__.invalidation_watches,key,f);
return this$__$1;
});
freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.invalidation_watches = cljs.core.dissoc.call(null,self__.invalidation_watches,key);
});
freactive.core.ReactiveCursor.prototype.freactive$core$IReactiveExpression$ = true;
freactive.core.ReactiveCursor.prototype.freactive$core$IReactiveExpression$_invalidate$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.sully.call(null);
});
freactive.core.ReactiveCursor.prototype.freactive$core$IReactiveExpression$_compute$arity$1 = (function (cursor){var self__ = this;
var cursor__$1 = this;cursor__$1.dirty = false;
self__.add_watch_fn.call(null);
var new_value = cursor__$1.getter.call(null,cljs.core.deref.call(null,self__.ref));var old_value = cursor__$1.state;if(cljs.core.not_EQ_.call(null,old_value,new_value))
{cursor__$1.state = new_value;
if(cljs.core.empty_QMARK_.call(null,cursor__$1.watches))
{} else
{cljs.core._notify_watches.call(null,cursor__$1,old_value,new_value);
}
if(cljs.core.empty_QMARK_.call(null,cursor__$1.invalidation_watches))
{} else
{freactive.core._notify_invalidation_watches.call(null,cursor__$1);
}
return new_value;
} else
{return null;
}
});
freactive.core.__GT_ReactiveCursor = (function __GT_ReactiveCursor(ref,getter,setter,dirty,state,meta,watches,invalidation_watches,lazy,sully,add_watch_fn){return (new freactive.core.ReactiveCursor(ref,getter,setter,dirty,state,meta,watches,invalidation_watches,lazy,sully,add_watch_fn));
});
freactive.core.cursor_STAR_ = (function cursor_STAR_(ref,korks_or_getter,setter,lazy){var ks = (((korks_or_getter instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks_or_getter], null):((cljs.core.sequential_QMARK_.call(null,korks_or_getter))?korks_or_getter:null));var getter = (cljs.core.truth_(ks)?((function (ks){
return (function (cur){return cljs.core.get_in.call(null,cur,ks);
});})(ks))
:korks_or_getter);var setter__$1 = (function (){var or__11497__auto__ = setter;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.truth_(ks)?((function (or__11497__auto__,ks,getter){
return (function (cur,new_sub){return cljs.core.assoc_in.call(null,cur,ks,new_sub);
});})(or__11497__auto__,ks,getter))
:null);if(cljs.core.truth_(or__11497__auto____$1))
{return or__11497__auto____$1;
} else
{return ((function (or__11497__auto____$1,or__11497__auto__,ks,getter){
return (function (_,___$1){throw (new Error(("Assert failed: Cursor does not support updates\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));

});
;})(or__11497__auto____$1,or__11497__auto__,ks,getter))
}
}
})();var cursor = (new freactive.core.ReactiveCursor(ref,getter,setter__$1,true,null,null,null,null,lazy,null,null));var sully = freactive.core.make_sully_fn.call(null,cursor);var add_watch_fn = (function (){var temp__4386__auto__ = freactive.core.get_add_watch_STAR_.call(null,ref);if(cljs.core.truth_(temp__4386__auto__))
{var add_watch_STAR_ = temp__4386__auto__;return ((function (add_watch_STAR_,temp__4386__auto__,ks,getter,setter__$1,cursor,sully){
return (function (){return add_watch_STAR_.call(null,ref,cursor,sully);
});
;})(add_watch_STAR_,temp__4386__auto__,ks,getter,setter__$1,cursor,sully))
} else
{return ((function (temp__4386__auto__,ks,getter,setter__$1,cursor,sully){
return (function (){return null;
});
;})(temp__4386__auto__,ks,getter,setter__$1,cursor,sully))
}
})();cursor.sully = sully;
cursor.add_watch_fn = add_watch_fn;
add_watch_fn.call(null);
return cursor;
});
freactive.core.cursor = (function() {
var cursor = null;
var cursor__2 = (function (ref,korks_or_getter){return freactive.core.cursor_STAR_.call(null,ref,korks_or_getter,null,false);
});
var cursor__3 = (function (ref,getter,setter){return freactive.core.cursor_STAR_.call(null,ref,getter,setter,false);
});
cursor = function(ref,getter,setter){
switch(arguments.length){
case 2:
return cursor__2.call(this,ref,getter);
case 3:
return cursor__3.call(this,ref,getter,setter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
cursor.cljs$core$IFn$_invoke$arity$3 = cursor__3;
return cursor;
})()
;
freactive.core.lazy_cursor = (function() {
var lazy_cursor = null;
var lazy_cursor__2 = (function (ref,korks_or_getter){return freactive.core.cursor_STAR_.call(null,ref,korks_or_getter,null,true);
});
var lazy_cursor__3 = (function (ref,getter,setter){return freactive.core.cursor_STAR_.call(null,ref,getter,setter,true);
});
lazy_cursor = function(ref,getter,setter){
switch(arguments.length){
case 2:
return lazy_cursor__2.call(this,ref,getter);
case 3:
return lazy_cursor__3.call(this,ref,getter,setter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_cursor.cljs$core$IFn$_invoke$arity$2 = lazy_cursor__2;
lazy_cursor.cljs$core$IFn$_invoke$arity$3 = lazy_cursor__3;
return lazy_cursor;
})()
;
freactive.core.debug_rx_STAR_ = (function debug_rx_STAR_(the_rx,capture_callback,invalidation_callback){freactive.core.add_invalidation_watch.call(null,the_rx,capture_callback,invalidation_callback);
return freactive.core.add_invalidation_watch.call(null,the_rx,capture_callback,invalidation_callback);
});

//# sourceMappingURL=core.js.map