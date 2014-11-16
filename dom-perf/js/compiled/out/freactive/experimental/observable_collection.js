// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.experimental.observable_collection');
goog.require('cljs.core');

/**
* @constructor
*/
freactive.experimental.observable_collection.ObservableCollection = (function (state,observers){
this.state = state;
this.observers = observers;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
freactive.experimental.observable_collection.ObservableCollection.cljs$lang$type = true;
freactive.experimental.observable_collection.ObservableCollection.cljs$lang$ctorStr = "freactive.experimental.observable-collection/ObservableCollection";
freactive.experimental.observable_collection.ObservableCollection.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"freactive.experimental.observable-collection/ObservableCollection");
});
freactive.experimental.observable_collection.ObservableCollection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<ObservableCollection: ");
cljs.core.pr_writer.call(null,cljs.core.deref.call(null,self__.state),writer,opts);
return cljs.core._write.call(null,writer,">");
});
freactive.experimental.observable_collection.__GT_ObservableCollection = (function __GT_ObservableCollection(state,observers){return (new freactive.experimental.observable_collection.ObservableCollection(state,observers));
});
freactive.experimental.observable_collection.do_tx = (function do_tx(state,tx){if(cljs.core.sequential_QMARK_.call(null,tx))
{var vec__36134 = tx;var op = cljs.core.nth.call(null,vec__36134,(0),null);var id = cljs.core.nth.call(null,vec__36134,(1),null);var arg = cljs.core.nth.call(null,vec__36134,(2),null);var args = cljs.core.nthnext.call(null,vec__36134,(3));if(cljs.core.sequential_QMARK_.call(null,op))
{return freactive.experimental.observable_collection.do_txs.call(null,state,tx);
} else
{var G__36135 = (((op instanceof cljs.core.Keyword))?op.fqn:null);switch (G__36135) {
case "update!":
var cur = cljs.core.get.call(null,state,id);var res = cljs.core.apply.call(null,op,cur,arg,args);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,id,res),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,res], null)], null);

break;
case "dissoc!":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,state,id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,null], null)], null);

break;
case "assoc!":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,id,arg),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,arg], null)], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op))));

}

}
} else
{return null;
}
});
freactive.experimental.observable_collection.do_txs = (function do_txs(state,txs){var state__$1 = state;var txs_res = cljs.core.PersistentVector.EMPTY;var G__36143 = txs;var vec__36144 = G__36143;var tx = cljs.core.nth.call(null,vec__36144,(0),null);var txs__$1 = cljs.core.nthnext.call(null,vec__36144,(1));var state__$2 = state__$1;var txs_res__$1 = txs_res;var G__36143__$1 = G__36143;while(true){
var state__$3 = state__$2;var txs_res__$2 = txs_res__$1;var vec__36145 = G__36143__$1;var tx__$1 = cljs.core.nth.call(null,vec__36145,(0),null);var txs__$2 = cljs.core.nthnext.call(null,vec__36145,(1));if(cljs.core.truth_(tx__$1))
{var vec__36146 = freactive.experimental.observable_collection.do_tx.call(null,state__$3,tx__$1);var state__$4 = cljs.core.nth.call(null,vec__36146,(0),null);var tx_res = cljs.core.nth.call(null,vec__36146,(1),null);var txs_res__$3 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,tx_res)))?cljs.core.concat.call(null,txs_res__$2,tx_res):cljs.core.conj.call(null,txs_res__$2,tx_res));{
var G__36147 = state__$4;
var G__36148 = txs_res__$3;
var G__36149 = txs__$2;
state__$2 = G__36147;
txs_res__$1 = G__36148;
G__36143__$1 = G__36149;
continue;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$3,txs_res__$2], null);
}
break;
}
});
freactive.experimental.observable_collection.do_cas_BANG_ = (function do_cas_BANG_(atomic,old_state,new_state){return cljs.core.compare_and_set_BANG_.call(null,atomic,old_state,new_state);
});
freactive.experimental.observable_collection.notify_coll = (function notify_coll(coll,txs_res){var seq__36156_36162 = cljs.core.seq.call(null,coll.observers);var chunk__36157_36163 = null;var count__36158_36164 = (0);var i__36159_36165 = (0);while(true){
if((i__36159_36165 < count__36158_36164))
{var vec__36160_36166 = cljs.core._nth.call(null,chunk__36157_36163,i__36159_36165);var k_36167 = cljs.core.nth.call(null,vec__36160_36166,(0),null);var f_36168 = cljs.core.nth.call(null,vec__36160_36166,(1),null);f_36168.call(null,k_36167,coll,txs_res);
{
var G__36169 = seq__36156_36162;
var G__36170 = chunk__36157_36163;
var G__36171 = count__36158_36164;
var G__36172 = (i__36159_36165 + (1));
seq__36156_36162 = G__36169;
chunk__36157_36163 = G__36170;
count__36158_36164 = G__36171;
i__36159_36165 = G__36172;
continue;
}
} else
{var temp__4388__auto___36173 = cljs.core.seq.call(null,seq__36156_36162);if(temp__4388__auto___36173)
{var seq__36156_36174__$1 = temp__4388__auto___36173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36156_36174__$1))
{var c__12268__auto___36175 = cljs.core.chunk_first.call(null,seq__36156_36174__$1);{
var G__36176 = cljs.core.chunk_rest.call(null,seq__36156_36174__$1);
var G__36177 = c__12268__auto___36175;
var G__36178 = cljs.core.count.call(null,c__12268__auto___36175);
var G__36179 = (0);
seq__36156_36162 = G__36176;
chunk__36157_36163 = G__36177;
count__36158_36164 = G__36178;
i__36159_36165 = G__36179;
continue;
}
} else
{var vec__36161_36180 = cljs.core.first.call(null,seq__36156_36174__$1);var k_36181 = cljs.core.nth.call(null,vec__36161_36180,(0),null);var f_36182 = cljs.core.nth.call(null,vec__36161_36180,(1),null);f_36182.call(null,k_36181,coll,txs_res);
{
var G__36183 = cljs.core.next.call(null,seq__36156_36174__$1);
var G__36184 = null;
var G__36185 = (0);
var G__36186 = (0);
seq__36156_36162 = G__36183;
chunk__36157_36163 = G__36184;
count__36158_36164 = G__36185;
i__36159_36165 = G__36186;
continue;
}
}
} else
{}
}
break;
}
return txs_res;
});
freactive.experimental.observable_collection.transact_BANG__STAR_ = (function transact_BANG__STAR_(coll,tx_data){var state = coll.state;while(true){
var cur_state = cljs.core.deref.call(null,state);var vec__36188 = freactive.experimental.observable_collection.do_txs.call(null,cur_state,tx_data);var new_state = cljs.core.nth.call(null,vec__36188,(0),null);var txs_res = cljs.core.nth.call(null,vec__36188,(1),null);if(freactive.experimental.observable_collection.do_cas_BANG_.call(null,state,cur_state,new_state))
{return freactive.experimental.observable_collection.notify_coll.call(null,coll,txs_res);
} else
{{
continue;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
freactive.experimental.observable_collection.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (coll,tx_data){var fst = cljs.core.first.call(null,tx_data);if((fst instanceof cljs.core.Keyword))
{return freactive.experimental.observable_collection.transact_BANG__STAR_.call(null,coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_data], null));
} else
{return freactive.experimental.observable_collection.transact_BANG__STAR_.call(null,coll,tx_data);

}
};
var transact_BANG_ = function (coll,var_args){
var tx_data = null;if (arguments.length > 1) {
  tx_data = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return transact_BANG___delegate.call(this,coll,tx_data);};
transact_BANG_.cljs$lang$maxFixedArity = 1;
transact_BANG_.cljs$lang$applyTo = (function (arglist__36189){
var coll = cljs.core.first(arglist__36189);
var tx_data = cljs.core.rest(arglist__36189);
return transact_BANG___delegate(coll,tx_data);
});
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___delegate;
return transact_BANG_;
})()
;
freactive.experimental.observable_collection.observable_collection = (function() {
var observable_collection = null;
var observable_collection__0 = (function (){return observable_collection.call(null,null);
});
var observable_collection__1 = (function (init){var init__$1 = (((function (){var G__36191 = init;if(G__36191)
{var bit__12162__auto__ = (G__36191.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12162__auto__) || (G__36191.cljs$core$IDeref$))
{return true;
} else
{if((!G__36191.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__36191);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__36191);
}
})())?init:((cljs.core.map_QMARK_.call(null,init))?cljs.core.atom.call(null,init):((cljs.core.sequential_QMARK_.call(null,init))?cljs.core.atom.call(null,cljs.core.zipmap.call(null,cljs.core.range.call(null),init)):cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)
)));return (new freactive.experimental.observable_collection.ObservableCollection(init__$1,null));
});
observable_collection = function(init){
switch(arguments.length){
case 0:
return observable_collection__0.call(this);
case 1:
return observable_collection__1.call(this,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
observable_collection.cljs$core$IFn$_invoke$arity$0 = observable_collection__0;
observable_collection.cljs$core$IFn$_invoke$arity$1 = observable_collection__1;
return observable_collection;
})()
;
freactive.experimental.observable_collection.observe_changes = (function observe_changes(coll,key,f){return coll.observers = cljs.core.assoc.call(null,coll.observers,key,f);
});

//# sourceMappingURL=observable_collection.js.map