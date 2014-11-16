// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.core');
goog.require('cljs.core');
freactive.core._STAR_invalidate_rx_STAR_ = null;
freactive.core._STAR_lazy_STAR_ = null;
freactive.core._STAR_do_trace_captures_STAR_ = null;
freactive.core._STAR_trace_capture_STAR_ = null;
freactive.core.IReactive = (function (){var obj35659 = {};return obj35659;
})();
freactive.core._raw_deref = (function _raw_deref(this$){if((function (){var and__11486__auto__ = this$;if(and__11486__auto__)
{return this$.freactive$core$IReactive$_raw_deref$arity$1;
} else
{return and__11486__auto__;
}
})())
{return this$.freactive$core$IReactive$_raw_deref$arity$1(this$);
} else
{var x__12135__auto__ = (((this$ == null))?null:this$);return (function (){var or__11498__auto__ = (freactive.core._raw_deref[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.core._raw_deref["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReactive.-raw-deref",this$);
}
}
})().call(null,this$);
}
});
freactive.core.IInvalidates = (function (){var obj35661 = {};return obj35661;
})();
freactive.core._notify_invalidation_watches = (function _notify_invalidation_watches(this$){if((function (){var and__11486__auto__ = this$;if(and__11486__auto__)
{return this$.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1;
} else
{return and__11486__auto__;
}
})())
{return this$.freactive$core$IInvalidates$_notify_invalidation_watches$arity$1(this$);
} else
{var x__12135__auto__ = (((this$ == null))?null:this$);return (function (){var or__11498__auto__ = (freactive.core._notify_invalidation_watches[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.core._notify_invalidation_watches["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInvalidates.-notify-invalidation-watches",this$);
}
}
})().call(null,this$);
}
});
freactive.core._add_invalidation_watch = (function _add_invalidation_watch(this$,key,f){if((function (){var and__11486__auto__ = this$;if(and__11486__auto__)
{return this$.freactive$core$IInvalidates$_add_invalidation_watch$arity$3;
} else
{return and__11486__auto__;
}
})())
{return this$.freactive$core$IInvalidates$_add_invalidation_watch$arity$3(this$,key,f);
} else
{var x__12135__auto__ = (((this$ == null))?null:this$);return (function (){var or__11498__auto__ = (freactive.core._add_invalidation_watch[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.core._add_invalidation_watch["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInvalidates.-add-invalidation-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
freactive.core._remove_invalidation_watch = (function _remove_invalidation_watch(this$,key){if((function (){var and__11486__auto__ = this$;if(and__11486__auto__)
{return this$.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2;
} else
{return and__11486__auto__;
}
})())
{return this$.freactive$core$IInvalidates$_remove_invalidation_watch$arity$2(this$,key);
} else
{var x__12135__auto__ = (((this$ == null))?null:this$);return (function (){var or__11498__auto__ = (freactive.core._remove_invalidation_watch[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.core._remove_invalidation_watch["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
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
freactive.core.ReactiveAtom.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"freactive.core/ReactiveAtom");
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
{var validate_35668 = a__$1.validator;if((validate_35668 == null))
{} else
{if(cljs.core.truth_(validate_35668.call(null,new_value)))
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
var this$__$1 = this;var temp__4388__auto___35669 = freactive.core._STAR_invalidate_rx_STAR_;if(cljs.core.truth_(temp__4388__auto___35669))
{var invalidate_35670 = temp__4388__auto___35669;cljs.core._add_watch.call(null,this$__$1,invalidate_35670,invalidate_35670);
if(cljs.core.truth_(freactive.core._STAR_trace_capture_STAR_))
{freactive.core._STAR_trace_capture_STAR_.call(null,this$__$1);
} else
{}
} else
{}
return self__.state;
});
freactive.core.ReactiveAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__35662 = cljs.core.seq.call(null,self__.watches);var chunk__35663 = null;var count__35664 = (0);var i__35665 = (0);while(true){
if((i__35665 < count__35664))
{var vec__35666 = cljs.core._nth.call(null,chunk__35663,i__35665);var key = cljs.core.nth.call(null,vec__35666,(0),null);var f = cljs.core.nth.call(null,vec__35666,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__35671 = seq__35662;
var G__35672 = chunk__35663;
var G__35673 = count__35664;
var G__35674 = (i__35665 + (1));
seq__35662 = G__35671;
chunk__35663 = G__35672;
count__35664 = G__35673;
i__35665 = G__35674;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__35662);if(temp__4388__auto__)
{var seq__35662__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35662__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__35662__$1);{
var G__35675 = cljs.core.chunk_rest.call(null,seq__35662__$1);
var G__35676 = c__12268__auto__;
var G__35677 = cljs.core.count.call(null,c__12268__auto__);
var G__35678 = (0);
seq__35662 = G__35675;
chunk__35663 = G__35676;
count__35664 = G__35677;
i__35665 = G__35678;
continue;
}
} else
{var vec__35667 = cljs.core.first.call(null,seq__35662__$1);var key = cljs.core.nth.call(null,vec__35667,(0),null);var f = cljs.core.nth.call(null,vec__35667,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__35679 = cljs.core.next.call(null,seq__35662__$1);
var G__35680 = null;
var G__35681 = (0);
var G__35682 = (0);
seq__35662 = G__35679;
chunk__35663 = G__35680;
count__35664 = G__35681;
i__35665 = G__35682;
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
var G__35686__delegate = function (x,p__35683){var map__35685 = p__35683;var map__35685__$1 = ((cljs.core.seq_QMARK_.call(null,map__35685))?cljs.core.apply.call(null,cljs.core.hash_map,map__35685):map__35685);var validator = cljs.core.get.call(null,map__35685__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__35685__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new freactive.core.ReactiveAtom(x,meta,validator,null));
};
var G__35686 = function (x,var_args){
var p__35683 = null;if (arguments.length > 1) {
  p__35683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__35686__delegate.call(this,x,p__35683);};
G__35686.cljs$lang$maxFixedArity = 1;
G__35686.cljs$lang$applyTo = (function (arglist__35687){
var x = cljs.core.first(arglist__35687);
var p__35683 = cljs.core.rest(arglist__35687);
return G__35686__delegate(x,p__35683);
});
G__35686.cljs$core$IFn$_invoke$arity$variadic = G__35686__delegate;
return G__35686;
})()
;
atom = function(x,var_args){
var p__35683 = var_args;
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
freactive.core.IReactiveExpression = (function (){var obj35689 = {};return obj35689;
})();
freactive.core._invalidate = (function _invalidate(this$){if((function (){var and__11486__auto__ = this$;if(and__11486__auto__)
{return this$.freactive$core$IReactiveExpression$_invalidate$arity$1;
} else
{return and__11486__auto__;
}
})())
{return this$.freactive$core$IReactiveExpression$_invalidate$arity$1(this$);
} else
{var x__12135__auto__ = (((this$ == null))?null:this$);return (function (){var or__11498__auto__ = (freactive.core._invalidate[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.core._invalidate["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReactiveExpression.-invalidate",this$);
}
}
})().call(null,this$);
}
});
freactive.core._compute = (function _compute(this$){if((function (){var and__11486__auto__ = this$;if(and__11486__auto__)
{return this$.freactive$core$IReactiveExpression$_compute$arity$1;
} else
{return and__11486__auto__;
}
})())
{return this$.freactive$core$IReactiveExpression$_compute$arity$1(this$);
} else
{var x__12135__auto__ = (((this$ == null))?null:this$);return (function (){var or__11498__auto__ = (freactive.core._compute[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.core._compute["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
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
freactive.core.get_add_watch_STAR_ = (function get_add_watch_STAR_(ref){if((function (){var G__35692 = ref;if(G__35692)
{var bit__12162__auto__ = null;if(cljs.core.truth_((function (){var or__11498__auto__ = bit__12162__auto__;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return G__35692.freactive$core$IInvalidates$;
}
})()))
{return true;
} else
{if((!G__35692.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__35692);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__35692);
}
})())
{return freactive.core.add_invalidation_watch;
} else
{if((function (){var G__35693 = ref;if(G__35693)
{var bit__12162__auto__ = (G__35693.cljs$lang$protocol_mask$partition1$ & (2));if((bit__12162__auto__) || (G__35693.cljs$core$IWatchable$))
{return true;
} else
{if((!G__35693.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__35693);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__35693);
}
})())
{return cljs.core.add_watch;
} else
{return null;
}
}
});
freactive.core.get_remove_watch_STAR_ = (function get_remove_watch_STAR_(ref){if((function (){var G__35696 = ref;if(G__35696)
{var bit__12162__auto__ = null;if(cljs.core.truth_((function (){var or__11498__auto__ = bit__12162__auto__;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return G__35696.freactive$core$IInvalidates$;
}
})()))
{return true;
} else
{if((!G__35696.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__35696);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__35696);
}
})())
{return freactive.core.remove_invalidation_watch;
} else
{if((function (){var G__35697 = ref;if(G__35697)
{var bit__12162__auto__ = (G__35697.cljs$lang$protocol_mask$partition1$ & (2));if((bit__12162__auto__) || (G__35697.cljs$core$IWatchable$))
{return true;
} else
{if((!G__35697.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__35697);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__35697);
}
})())
{return cljs.core.remove_watch;
} else
{return null;
}
}
});
freactive.core.get_add_remove_watch_STAR_ = (function get_add_remove_watch_STAR_(ref){if((function (){var G__35700 = ref;if(G__35700)
{var bit__12162__auto__ = null;if(cljs.core.truth_((function (){var or__11498__auto__ = bit__12162__auto__;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return G__35700.freactive$core$IInvalidates$;
}
})()))
{return true;
} else
{if((!G__35700.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__35700);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IInvalidates,G__35700);
}
})())
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [freactive.core.add_invalidation_watch,freactive.core.remove_invalidation_watch], null);
} else
{if((function (){var G__35701 = ref;if(G__35701)
{var bit__12162__auto__ = (G__35701.cljs$lang$protocol_mask$partition1$ & (2));if((bit__12162__auto__) || (G__35701.cljs$core$IWatchable$))
{return true;
} else
{if((!G__35701.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__35701);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__35701);
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
freactive.core.ReactiveExpression.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"freactive.core/ReactiveExpression");
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
var this$__$1 = this;var seq__35702 = cljs.core.seq.call(null,self__.watches);var chunk__35703 = null;var count__35704 = (0);var i__35705 = (0);while(true){
if((i__35705 < count__35704))
{var vec__35706 = cljs.core._nth.call(null,chunk__35703,i__35705);var key = cljs.core.nth.call(null,vec__35706,(0),null);var f__$1 = cljs.core.nth.call(null,vec__35706,(1),null);f__$1.call(null,key,this$__$1,oldval,newval);
{
var G__35716 = seq__35702;
var G__35717 = chunk__35703;
var G__35718 = count__35704;
var G__35719 = (i__35705 + (1));
seq__35702 = G__35716;
chunk__35703 = G__35717;
count__35704 = G__35718;
i__35705 = G__35719;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__35702);if(temp__4388__auto__)
{var seq__35702__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35702__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__35702__$1);{
var G__35720 = cljs.core.chunk_rest.call(null,seq__35702__$1);
var G__35721 = c__12268__auto__;
var G__35722 = cljs.core.count.call(null,c__12268__auto__);
var G__35723 = (0);
seq__35702 = G__35720;
chunk__35703 = G__35721;
count__35704 = G__35722;
i__35705 = G__35723;
continue;
}
} else
{var vec__35707 = cljs.core.first.call(null,seq__35702__$1);var key = cljs.core.nth.call(null,vec__35707,(0),null);var f__$1 = cljs.core.nth.call(null,vec__35707,(1),null);f__$1.call(null,key,this$__$1,oldval,newval);
{
var G__35724 = cljs.core.next.call(null,seq__35702__$1);
var G__35725 = null;
var G__35726 = (0);
var G__35727 = (0);
seq__35702 = G__35724;
chunk__35703 = G__35725;
count__35704 = G__35726;
i__35705 = G__35727;
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
var this$__$1 = this;var seq__35708 = cljs.core.seq.call(null,self__.invalidation_watches);var chunk__35709 = null;var count__35710 = (0);var i__35711 = (0);while(true){
if((i__35711 < count__35710))
{var vec__35712 = cljs.core._nth.call(null,chunk__35709,i__35711);var key = cljs.core.nth.call(null,vec__35712,(0),null);var f__$1 = cljs.core.nth.call(null,vec__35712,(1),null);f__$1.call(null,key,this$__$1);
{
var G__35728 = seq__35708;
var G__35729 = chunk__35709;
var G__35730 = count__35710;
var G__35731 = (i__35711 + (1));
seq__35708 = G__35728;
chunk__35709 = G__35729;
count__35710 = G__35730;
i__35711 = G__35731;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__35708);if(temp__4388__auto__)
{var seq__35708__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35708__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__35708__$1);{
var G__35732 = cljs.core.chunk_rest.call(null,seq__35708__$1);
var G__35733 = c__12268__auto__;
var G__35734 = cljs.core.count.call(null,c__12268__auto__);
var G__35735 = (0);
seq__35708 = G__35732;
chunk__35709 = G__35733;
count__35710 = G__35734;
i__35711 = G__35735;
continue;
}
} else
{var vec__35713 = cljs.core.first.call(null,seq__35708__$1);var key = cljs.core.nth.call(null,vec__35713,(0),null);var f__$1 = cljs.core.nth.call(null,vec__35713,(1),null);f__$1.call(null,key,this$__$1);
{
var G__35736 = cljs.core.next.call(null,seq__35708__$1);
var G__35737 = null;
var G__35738 = (0);
var G__35739 = (0);
seq__35708 = G__35736;
chunk__35709 = G__35737;
count__35710 = G__35738;
i__35711 = G__35739;
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
var old_val = self__.state;var new_val = (function (){var _STAR_invalidate_rx_STAR_35714 = freactive.core._STAR_invalidate_rx_STAR_;var _STAR_trace_capture_STAR_35715 = freactive.core._STAR_trace_capture_STAR_;try{freactive.core._STAR_invalidate_rx_STAR_ = self__.sully;
freactive.core._STAR_trace_capture_STAR_ = (cljs.core.truth_(self__.trace_captures)?(function (){self__.trace_captures.call(null);
return self__.trace_captures;
})():null);
return self__.f.call(null);
}finally {freactive.core._STAR_trace_capture_STAR_ = _STAR_trace_capture_STAR_35715;
freactive.core._STAR_invalidate_rx_STAR_ = _STAR_invalidate_rx_STAR_35714;
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
var rx_STAR___2 = (function (f,lazy){var reactive = (new freactive.core.ReactiveExpression(null,true,f,null,null,null,null,null,lazy,(function (){var or__11498__auto__ = freactive.core._STAR_do_trace_captures_STAR_;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return ((function (or__11498__auto__){
return (function (_){return null;
});
;})(or__11498__auto__))
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
freactive.core.ReactiveCursor.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"freactive.core/ReactiveCursor");
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
return (function (p1__35740_SHARP_){return f.call(null,p1__35740_SHARP_,x);
});})(___$1))
);
});
freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,x,y){var self__ = this;
var ___$1 = this;return freactive.core.cursor_swap_BANG_.call(null,self__.ref,self__.getter,self__.setter,((function (___$1){
return (function (p1__35741_SHARP_){return f.call(null,p1__35741_SHARP_,x,y);
});})(___$1))
);
});
freactive.core.ReactiveCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,x,y,more){var self__ = this;
var ___$1 = this;return freactive.core.cursor_swap_BANG_.call(null,self__.ref,self__.getter,self__.setter,((function (___$1){
return (function (p1__35742_SHARP_){return cljs.core.apply.call(null,f,p1__35742_SHARP_,x,y,more);
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
var this$__$1 = this;var seq__35743 = cljs.core.seq.call(null,self__.watches);var chunk__35744 = null;var count__35745 = (0);var i__35746 = (0);while(true){
if((i__35746 < count__35745))
{var vec__35747 = cljs.core._nth.call(null,chunk__35744,i__35746);var key = cljs.core.nth.call(null,vec__35747,(0),null);var f = cljs.core.nth.call(null,vec__35747,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__35755 = seq__35743;
var G__35756 = chunk__35744;
var G__35757 = count__35745;
var G__35758 = (i__35746 + (1));
seq__35743 = G__35755;
chunk__35744 = G__35756;
count__35745 = G__35757;
i__35746 = G__35758;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__35743);if(temp__4388__auto__)
{var seq__35743__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35743__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__35743__$1);{
var G__35759 = cljs.core.chunk_rest.call(null,seq__35743__$1);
var G__35760 = c__12268__auto__;
var G__35761 = cljs.core.count.call(null,c__12268__auto__);
var G__35762 = (0);
seq__35743 = G__35759;
chunk__35744 = G__35760;
count__35745 = G__35761;
i__35746 = G__35762;
continue;
}
} else
{var vec__35748 = cljs.core.first.call(null,seq__35743__$1);var key = cljs.core.nth.call(null,vec__35748,(0),null);var f = cljs.core.nth.call(null,vec__35748,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__35763 = cljs.core.next.call(null,seq__35743__$1);
var G__35764 = null;
var G__35765 = (0);
var G__35766 = (0);
seq__35743 = G__35763;
chunk__35744 = G__35764;
count__35745 = G__35765;
i__35746 = G__35766;
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
var this$__$1 = this;var seq__35749 = cljs.core.seq.call(null,self__.invalidation_watches);var chunk__35750 = null;var count__35751 = (0);var i__35752 = (0);while(true){
if((i__35752 < count__35751))
{var vec__35753 = cljs.core._nth.call(null,chunk__35750,i__35752);var key = cljs.core.nth.call(null,vec__35753,(0),null);var f = cljs.core.nth.call(null,vec__35753,(1),null);f.call(null,key,this$__$1);
{
var G__35767 = seq__35749;
var G__35768 = chunk__35750;
var G__35769 = count__35751;
var G__35770 = (i__35752 + (1));
seq__35749 = G__35767;
chunk__35750 = G__35768;
count__35751 = G__35769;
i__35752 = G__35770;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__35749);if(temp__4388__auto__)
{var seq__35749__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35749__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__35749__$1);{
var G__35771 = cljs.core.chunk_rest.call(null,seq__35749__$1);
var G__35772 = c__12268__auto__;
var G__35773 = cljs.core.count.call(null,c__12268__auto__);
var G__35774 = (0);
seq__35749 = G__35771;
chunk__35750 = G__35772;
count__35751 = G__35773;
i__35752 = G__35774;
continue;
}
} else
{var vec__35754 = cljs.core.first.call(null,seq__35749__$1);var key = cljs.core.nth.call(null,vec__35754,(0),null);var f = cljs.core.nth.call(null,vec__35754,(1),null);f.call(null,key,this$__$1);
{
var G__35775 = cljs.core.next.call(null,seq__35749__$1);
var G__35776 = null;
var G__35777 = (0);
var G__35778 = (0);
seq__35749 = G__35775;
chunk__35750 = G__35776;
count__35751 = G__35777;
i__35752 = G__35778;
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
:korks_or_getter);var setter__$1 = (function (){var or__11498__auto__ = setter;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.truth_(ks)?((function (or__11498__auto__,ks,getter){
return (function (cur,new_sub){return cljs.core.assoc_in.call(null,cur,ks,new_sub);
});})(or__11498__auto__,ks,getter))
:null);if(cljs.core.truth_(or__11498__auto____$1))
{return or__11498__auto____$1;
} else
{return ((function (or__11498__auto____$1,or__11498__auto__,ks,getter){
return (function (_,___$1){throw (new Error(("Assert failed: Cursor does not support updates\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));

});
;})(or__11498__auto____$1,or__11498__auto__,ks,getter))
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