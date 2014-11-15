// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.core');
goog.require('cljs.core');
freactive.core._STAR_invalidate_rx_STAR_ = null;
freactive.core._STAR_lazy_STAR_ = null;
freactive.core.IReactive = (function (){var obj12980 = {};return obj12980;
})();
freactive.core.IInvalidates = (function (){var obj12982 = {};return obj12982;
})();
freactive.core._notify_invalidation_watches = (function _notify_invalidation_watches(this$){if((function (){var and__11524__auto__ = this$;if(and__11524__auto__)
{return this$.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1;
} else
{return and__11524__auto__;
}
})())
{return this$.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1(this$);
} else
{var x__12173__auto__ = (((this$ == null))?null:this$);return (function (){var or__11536__auto__ = (freactive.core._notify_invalidation_watches[goog.typeOf(x__12173__auto__)]);if(or__11536__auto__)
{return or__11536__auto__;
} else
{var or__11536__auto____$1 = (freactive.core._notify_invalidation_watches["_"]);if(or__11536__auto____$1)
{return or__11536__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInvalidates.-notify-invalidation-watches",this$);
}
}
})().call(null,this$);
}
});
freactive.core._add_invalidation_watch = (function _add_invalidation_watch(this$,key,f){if((function (){var and__11524__auto__ = this$;if(and__11524__auto__)
{return this$.freactive$core$IInvalidates$_add_invalidation_watch$arity$3;
} else
{return and__11524__auto__;
}
})())
{return this$.freactive$core$IInvalidates$_add_invalidation_watch$arity$3(this$,key,f);
} else
{var x__12173__auto__ = (((this$ == null))?null:this$);return (function (){var or__11536__auto__ = (freactive.core._add_invalidation_watch[goog.typeOf(x__12173__auto__)]);if(or__11536__auto__)
{return or__11536__auto__;
} else
{var or__11536__auto____$1 = (freactive.core._add_invalidation_watch["_"]);if(or__11536__auto____$1)
{return or__11536__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInvalidates.-add-invalidation-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
freactive.core._remove_invalidation_watch = (function _remove_invalidation_watch(this$,key){if((function (){var and__11524__auto__ = this$;if(and__11524__auto__)
{return this$.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2;
} else
{return and__11524__auto__;
}
})())
{return this$.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2(this$,key);
} else
{var x__12173__auto__ = (((this$ == null))?null:this$);return (function (){var or__11536__auto__ = (freactive.core._remove_invalidation_watch[goog.typeOf(x__12173__auto__)]);if(or__11536__auto__)
{return or__11536__auto__;
} else
{var or__11536__auto____$1 = (freactive.core._remove_invalidation_watch["_"]);if(or__11536__auto____$1)
{return or__11536__auto____$1;
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
freactive.core.ReactiveAtom.cljs$lang$ctorPrWriter = (function (this__12113__auto__,writer__12114__auto__,opt__12115__auto__){return cljs.core._write.call(null,writer__12114__auto__,"freactive.core/ReactiveAtom");
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
{var validate_12989 = a__$1.validator;if((validate_12989 == null))
{} else
{if(cljs.core.truth_(validate_12989.call(null,new_value)))
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
freactive.core.ReactiveAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var temp__4388__auto___12990 = freactive.core._STAR_invalidate_rx_STAR_;if(cljs.core.truth_(temp__4388__auto___12990))
{var invalidate_12991 = temp__4388__auto___12990;cljs.core._add_watch.call(null,this$__$1,invalidate_12991,invalidate_12991);
} else
{}
return self__.state;
});
freactive.core.ReactiveAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__12983 = cljs.core.seq.call(null,self__.watches);var chunk__12984 = null;var count__12985 = (0);var i__12986 = (0);while(true){
if((i__12986 < count__12985))
{var vec__12987 = cljs.core._nth.call(null,chunk__12984,i__12986);var key = cljs.core.nth.call(null,vec__12987,(0),null);var f = cljs.core.nth.call(null,vec__12987,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12992 = seq__12983;
var G__12993 = chunk__12984;
var G__12994 = count__12985;
var G__12995 = (i__12986 + (1));
seq__12983 = G__12992;
chunk__12984 = G__12993;
count__12985 = G__12994;
i__12986 = G__12995;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__12983);if(temp__4388__auto__)
{var seq__12983__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12983__$1))
{var c__12306__auto__ = cljs.core.chunk_first.call(null,seq__12983__$1);{
var G__12996 = cljs.core.chunk_rest.call(null,seq__12983__$1);
var G__12997 = c__12306__auto__;
var G__12998 = cljs.core.count.call(null,c__12306__auto__);
var G__12999 = (0);
seq__12983 = G__12996;
chunk__12984 = G__12997;
count__12985 = G__12998;
i__12986 = G__12999;
continue;
}
} else
{var vec__12988 = cljs.core.first.call(null,seq__12983__$1);var key = cljs.core.nth.call(null,vec__12988,(0),null);var f = cljs.core.nth.call(null,vec__12988,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__13000 = cljs.core.next.call(null,seq__12983__$1);
var G__13001 = null;
var G__13002 = (0);
var G__13003 = (0);
seq__12983 = G__13000;
chunk__12984 = G__13001;
count__12985 = G__13002;
i__12986 = G__13003;
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
var G__13007__delegate = function (x,p__13004){var map__13006 = p__13004;var map__13006__$1 = ((cljs.core.seq_QMARK_.call(null,map__13006))?cljs.core.apply.call(null,cljs.core.hash_map,map__13006):map__13006);var validator = cljs.core.get.call(null,map__13006__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__13006__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new freactive.core.ReactiveAtom(x,meta,validator,null));
};
var G__13007 = function (x,var_args){
var p__13004 = null;if (arguments.length > 1) {
  p__13004 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13007__delegate.call(this,x,p__13004);};
G__13007.cljs$lang$maxFixedArity = 1;
G__13007.cljs$lang$applyTo = (function (arglist__13008){
var x = cljs.core.first(arglist__13008);
var p__13004 = cljs.core.rest(arglist__13008);
return G__13007__delegate(x,p__13004);
});
G__13007.cljs$core$IFn$_invoke$arity$variadic = G__13007__delegate;
return G__13007;
})()
;
atom = function(x,var_args){
var p__13004 = var_args;
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
freactive.core.IReactiveExpression = (function (){var obj13010 = {};return obj13010;
})();
freactive.core._invalidate = (function _invalidate(this$){if((function (){var and__11524__auto__ = this$;if(and__11524__auto__)
{return this$.freactive$core$IReactiveExpression$_invalidate$arity$1;
} else
{return and__11524__auto__;
}
})())
{return this$.freactive$core$IReactiveExpression$_invalidate$arity$1(this$);
} else
{var x__12173__auto__ = (((this$ == null))?null:this$);return (function (){var or__11536__auto__ = (freactive.core._invalidate[goog.typeOf(x__12173__auto__)]);if(or__11536__auto__)
{return or__11536__auto__;
} else
{var or__11536__auto____$1 = (freactive.core._invalidate["_"]);if(or__11536__auto____$1)
{return or__11536__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReactiveExpression.-invalidate",this$);
}
}
})().call(null,this$);
}
});
freactive.core._compute = (function _compute(this$){if((function (){var and__11524__auto__ = this$;if(and__11524__auto__)
{return this$.freactive$core$IReactiveExpression$_compute$arity$1;
} else
{return and__11524__auto__;
}
})())
{return this$.freactive$core$IReactiveExpression$_compute$arity$1(this$);
} else
{var x__12173__auto__ = (((this$ == null))?null:this$);return (function (){var or__11536__auto__ = (freactive.core._compute[goog.typeOf(x__12173__auto__)]);if(or__11536__auto__)
{return or__11536__auto__;
} else
{var or__11536__auto____$1 = (freactive.core._compute["_"]);if(or__11536__auto____$1)
{return or__11536__auto____$1;
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
freactive.core.get_add_watch_STAR_ = (function get_add_watch_STAR_(ref){if((function (){var G__13013 = ref;if(G__13013)
{var bit__12200__auto__ = null;if(cljs.core.truth_((function (){var or__11536__auto__ = bit__12200__auto__;if(cljs.core.truth_(or__11536__auto__))
{return or__11536__auto__;
} else
{return G__13013.freactive$core$IInvalidates$;
}
})()))
{return true;
} else
{if((!G__13013.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13013);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13013);
}
})())
{return freactive.core.add_invalidation_watch;
} else
{if((function (){var G__13014 = ref;if(G__13014)
{var bit__12200__auto__ = (G__13014.cljs$lang$protocol_mask$partition1$ & (2));if((bit__12200__auto__) || (G__13014.cljs$core$IWatchable$))
{return true;
} else
{if((!G__13014.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13014);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13014);
}
})())
{return cljs.core.add_watch;
} else
{return null;
}
}
});
freactive.core.get_remove_watch_STAR_ = (function get_remove_watch_STAR_(ref){if((function (){var G__13017 = ref;if(G__13017)
{var bit__12200__auto__ = null;if(cljs.core.truth_((function (){var or__11536__auto__ = bit__12200__auto__;if(cljs.core.truth_(or__11536__auto__))
{return or__11536__auto__;
} else
{return G__13017.freactive$core$IInvalidates$;
}
})()))
{return true;
} else
{if((!G__13017.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13017);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13017);
}
})())
{return freactive.core.remove_invalidation_watch;
} else
{if((function (){var G__13018 = ref;if(G__13018)
{var bit__12200__auto__ = (G__13018.cljs$lang$protocol_mask$partition1$ & (2));if((bit__12200__auto__) || (G__13018.cljs$core$IWatchable$))
{return true;
} else
{if((!G__13018.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13018);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13018);
}
})())
{return cljs.core.remove_watch;
} else
{return null;
}
}
});
freactive.core.get_add_remove_watch_STAR_ = (function get_add_remove_watch_STAR_(ref){if((function (){var G__13021 = ref;if(G__13021)
{var bit__12200__auto__ = null;if(cljs.core.truth_((function (){var or__11536__auto__ = bit__12200__auto__;if(cljs.core.truth_(or__11536__auto__))
{return or__11536__auto__;
} else
{return G__13021.freactive$core$IInvalidates$;
}
})()))
{return true;
} else
{if((!G__13021.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13021);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__13021);
}
})())
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [freactive.core.add_invalidation_watch,freactive.core.remove_invalidation_watch], null);
} else
{if((function (){var G__13022 = ref;if(G__13022)
{var bit__12200__auto__ = (G__13022.cljs$lang$protocol_mask$partition1$ & (2));if((bit__12200__auto__) || (G__13022.cljs$core$IWatchable$))
{return true;
} else
{if((!G__13022.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13022);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13022);
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
{var invalidate = temp__4388__auto__;if(cljs.core.truth_(freactive.core.lazy_QMARK_.call(null,default_laziness)))
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
freactive.core.ReactiveExpression = (function (state,dirty,f,deps,meta,watches,invalidation_watches,sully,lazy){
this.state = state;
this.dirty = dirty;
this.f = f;
this.deps = deps;
this.meta = meta;
this.watches = watches;
this.invalidation_watches = invalidation_watches;
this.sully = sully;
this.lazy = lazy;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
freactive.core.ReactiveExpression.cljs$lang$type = true;
freactive.core.ReactiveExpression.cljs$lang$ctorStr = "freactive.core/ReactiveExpression";
freactive.core.ReactiveExpression.cljs$lang$ctorPrWriter = (function (this__12113__auto__,writer__12114__auto__,opt__12115__auto__){return cljs.core._write.call(null,writer__12114__auto__,"freactive.core/ReactiveExpression");
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
freactive.core.ReactiveExpression.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__13023 = cljs.core.seq.call(null,self__.watches);var chunk__13024 = null;var count__13025 = (0);var i__13026 = (0);while(true){
if((i__13026 < count__13025))
{var vec__13027 = cljs.core._nth.call(null,chunk__13024,i__13026);var key = cljs.core.nth.call(null,vec__13027,(0),null);var f__$1 = cljs.core.nth.call(null,vec__13027,(1),null);f__$1.call(null,key,this$__$1,oldval,newval);
{
var G__13036 = seq__13023;
var G__13037 = chunk__13024;
var G__13038 = count__13025;
var G__13039 = (i__13026 + (1));
seq__13023 = G__13036;
chunk__13024 = G__13037;
count__13025 = G__13038;
i__13026 = G__13039;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__13023);if(temp__4388__auto__)
{var seq__13023__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13023__$1))
{var c__12306__auto__ = cljs.core.chunk_first.call(null,seq__13023__$1);{
var G__13040 = cljs.core.chunk_rest.call(null,seq__13023__$1);
var G__13041 = c__12306__auto__;
var G__13042 = cljs.core.count.call(null,c__12306__auto__);
var G__13043 = (0);
seq__13023 = G__13040;
chunk__13024 = G__13041;
count__13025 = G__13042;
i__13026 = G__13043;
continue;
}
} else
{var vec__13028 = cljs.core.first.call(null,seq__13023__$1);var key = cljs.core.nth.call(null,vec__13028,(0),null);var f__$1 = cljs.core.nth.call(null,vec__13028,(1),null);f__$1.call(null,key,this$__$1,oldval,newval);
{
var G__13044 = cljs.core.next.call(null,seq__13023__$1);
var G__13045 = null;
var G__13046 = (0);
var G__13047 = (0);
seq__13023 = G__13044;
chunk__13024 = G__13045;
count__13025 = G__13046;
i__13026 = G__13047;
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
var this$__$1 = this;var seq__13029 = cljs.core.seq.call(null,self__.invalidation_watches);var chunk__13030 = null;var count__13031 = (0);var i__13032 = (0);while(true){
if((i__13032 < count__13031))
{var vec__13033 = cljs.core._nth.call(null,chunk__13030,i__13032);var key = cljs.core.nth.call(null,vec__13033,(0),null);var f__$1 = cljs.core.nth.call(null,vec__13033,(1),null);f__$1.call(null,key,this$__$1);
{
var G__13048 = seq__13029;
var G__13049 = chunk__13030;
var G__13050 = count__13031;
var G__13051 = (i__13032 + (1));
seq__13029 = G__13048;
chunk__13030 = G__13049;
count__13031 = G__13050;
i__13032 = G__13051;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__13029);if(temp__4388__auto__)
{var seq__13029__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13029__$1))
{var c__12306__auto__ = cljs.core.chunk_first.call(null,seq__13029__$1);{
var G__13052 = cljs.core.chunk_rest.call(null,seq__13029__$1);
var G__13053 = c__12306__auto__;
var G__13054 = cljs.core.count.call(null,c__12306__auto__);
var G__13055 = (0);
seq__13029 = G__13052;
chunk__13030 = G__13053;
count__13031 = G__13054;
i__13032 = G__13055;
continue;
}
} else
{var vec__13034 = cljs.core.first.call(null,seq__13029__$1);var key = cljs.core.nth.call(null,vec__13034,(0),null);var f__$1 = cljs.core.nth.call(null,vec__13034,(1),null);f__$1.call(null,key,this$__$1);
{
var G__13056 = cljs.core.next.call(null,seq__13029__$1);
var G__13057 = null;
var G__13058 = (0);
var G__13059 = (0);
seq__13029 = G__13056;
chunk__13030 = G__13057;
count__13031 = G__13058;
i__13032 = G__13059;
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
var old_val = self__.state;var new_val = (function (){var _STAR_invalidate_rx_STAR_13035 = freactive.core._STAR_invalidate_rx_STAR_;try{freactive.core._STAR_invalidate_rx_STAR_ = self__.sully;
return self__.f.call(null);
}finally {freactive.core._STAR_invalidate_rx_STAR_ = _STAR_invalidate_rx_STAR_13035;
}})();if(cljs.core.not_EQ_.call(null,old_val,new_val))
{self__.state = new_val;
cljs.core._notify_watches.call(null,this$__$1,old_val,new_val);
return new_val;
} else
{return null;
}
});
freactive.core.__GT_ReactiveExpression = (function __GT_ReactiveExpression(state,dirty,f,deps,meta,watches,invalidation_watches,sully,lazy){return (new freactive.core.ReactiveExpression(state,dirty,f,deps,meta,watches,invalidation_watches,sully,lazy));
});
freactive.core.rx_STAR_ = (function() {
var rx_STAR_ = null;
var rx_STAR___1 = (function (f){return rx_STAR_.call(null,f,true);
});
var rx_STAR___2 = (function (f,lazy){var reactive = (new freactive.core.ReactiveExpression(null,true,f,null,null,null,null,null,lazy));reactive.sully = freactive.core.make_sully_fn.call(null,reactive);
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
freactive.core.ReactiveCursor.cljs$lang$ctorPrWriter = (function (this__12113__auto__,writer__12114__auto__,opt__12115__auto__){return cljs.core._write.call(null,writer__12114__auto__,"freactive.core/ReactiveCursor");
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
return (function (p1__13060_SHARP_){return f.call(null,p1__13060_SHARP_,x);
});})(___$1))
);
});
freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,x,y){var self__ = this;
var ___$1 = this;return freactive.core.cursor_swap_BANG_.call(null,self__.ref,self__.getter,self__.setter,((function (___$1){
return (function (p1__13061_SHARP_){return f.call(null,p1__13061_SHARP_,x,y);
});})(___$1))
);
});
freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,x,y,more){var self__ = this;
var ___$1 = this;return freactive.core.cursor_swap_BANG_.call(null,self__.ref,self__.getter,self__.setter,((function (___$1){
return (function (p1__13062_SHARP_){return cljs.core.apply.call(null,f,p1__13062_SHARP_,x,y,more);
});})(___$1))
);
});
freactive.core.ReactiveCursor.prototype.freactive$core$IReactive$ = true;
freactive.core.ReactiveCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;freactive.core.register_rx_dep.call(null,this$__$1,self__.lazy);
if(cljs.core.truth_(self__.dirty))
{freactive.core._compute.call(null,this$__$1);
} else
{}
return self__.state;
});
freactive.core.ReactiveCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__13063 = cljs.core.seq.call(null,self__.watches);var chunk__13064 = null;var count__13065 = (0);var i__13066 = (0);while(true){
if((i__13066 < count__13065))
{var vec__13067 = cljs.core._nth.call(null,chunk__13064,i__13066);var key = cljs.core.nth.call(null,vec__13067,(0),null);var f = cljs.core.nth.call(null,vec__13067,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__13075 = seq__13063;
var G__13076 = chunk__13064;
var G__13077 = count__13065;
var G__13078 = (i__13066 + (1));
seq__13063 = G__13075;
chunk__13064 = G__13076;
count__13065 = G__13077;
i__13066 = G__13078;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__13063);if(temp__4388__auto__)
{var seq__13063__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13063__$1))
{var c__12306__auto__ = cljs.core.chunk_first.call(null,seq__13063__$1);{
var G__13079 = cljs.core.chunk_rest.call(null,seq__13063__$1);
var G__13080 = c__12306__auto__;
var G__13081 = cljs.core.count.call(null,c__12306__auto__);
var G__13082 = (0);
seq__13063 = G__13079;
chunk__13064 = G__13080;
count__13065 = G__13081;
i__13066 = G__13082;
continue;
}
} else
{var vec__13068 = cljs.core.first.call(null,seq__13063__$1);var key = cljs.core.nth.call(null,vec__13068,(0),null);var f = cljs.core.nth.call(null,vec__13068,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__13083 = cljs.core.next.call(null,seq__13063__$1);
var G__13084 = null;
var G__13085 = (0);
var G__13086 = (0);
seq__13063 = G__13083;
chunk__13064 = G__13084;
count__13065 = G__13085;
i__13066 = G__13086;
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
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$ = true;
freactive.core.ReactiveCursor.prototype.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__13069 = cljs.core.seq.call(null,self__.invalidation_watches);var chunk__13070 = null;var count__13071 = (0);var i__13072 = (0);while(true){
if((i__13072 < count__13071))
{var vec__13073 = cljs.core._nth.call(null,chunk__13070,i__13072);var key = cljs.core.nth.call(null,vec__13073,(0),null);var f = cljs.core.nth.call(null,vec__13073,(1),null);f.call(null,key,this$__$1);
{
var G__13087 = seq__13069;
var G__13088 = chunk__13070;
var G__13089 = count__13071;
var G__13090 = (i__13072 + (1));
seq__13069 = G__13087;
chunk__13070 = G__13088;
count__13071 = G__13089;
i__13072 = G__13090;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__13069);if(temp__4388__auto__)
{var seq__13069__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13069__$1))
{var c__12306__auto__ = cljs.core.chunk_first.call(null,seq__13069__$1);{
var G__13091 = cljs.core.chunk_rest.call(null,seq__13069__$1);
var G__13092 = c__12306__auto__;
var G__13093 = cljs.core.count.call(null,c__12306__auto__);
var G__13094 = (0);
seq__13069 = G__13091;
chunk__13070 = G__13092;
count__13071 = G__13093;
i__13072 = G__13094;
continue;
}
} else
{var vec__13074 = cljs.core.first.call(null,seq__13069__$1);var key = cljs.core.nth.call(null,vec__13074,(0),null);var f = cljs.core.nth.call(null,vec__13074,(1),null);f.call(null,key,this$__$1);
{
var G__13095 = cljs.core.next.call(null,seq__13069__$1);
var G__13096 = null;
var G__13097 = (0);
var G__13098 = (0);
seq__13069 = G__13095;
chunk__13070 = G__13096;
count__13071 = G__13097;
i__13072 = G__13098;
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
:korks_or_getter);var setter__$1 = (function (){var or__11536__auto__ = setter;if(cljs.core.truth_(or__11536__auto__))
{return or__11536__auto__;
} else
{var or__11536__auto____$1 = (cljs.core.truth_(ks)?((function (or__11536__auto__,ks,getter){
return (function (cur,new_sub){return cljs.core.assoc_in.call(null,cur,ks,new_sub);
});})(or__11536__auto__,ks,getter))
:null);if(cljs.core.truth_(or__11536__auto____$1))
{return or__11536__auto____$1;
} else
{return ((function (or__11536__auto____$1,or__11536__auto__,ks,getter){
return (function (_,___$1){throw (new Error(("Assert failed: Cursor does not support updates\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));

});
;})(or__11536__auto____$1,or__11536__auto__,ks,getter))
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

//# sourceMappingURL=core.js.map