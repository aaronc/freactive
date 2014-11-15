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
freactive.experimental.observable_collection.ObservableCollection.cljs$lang$ctorPrWriter = (function (this__12113__auto__,writer__12114__auto__,opt__12115__auto__){return cljs.core._write.call(null,writer__12114__auto__,"freactive.experimental.observable-collection/ObservableCollection");
});
freactive.experimental.observable_collection.ObservableCollection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<ObservableCollection: ");
cljs.core.pr_writer.call(null,cljs.core.deref.call(null,self__.state),writer,opts);
return cljs.core._write.call(null,writer,">");
});
freactive.experimental.observable_collection.__GT_ObservableCollection = (function __GT_ObservableCollection(state,observers){return (new freactive.experimental.observable_collection.ObservableCollection(state,observers));
});
freactive.experimental.observable_collection.do_tx = (function do_tx(state,tx){if(cljs.core.sequential_QMARK_.call(null,tx))
{var vec__13448 = tx;var op = cljs.core.nth.call(null,vec__13448,(0),null);var id = cljs.core.nth.call(null,vec__13448,(1),null);var arg = cljs.core.nth.call(null,vec__13448,(2),null);var args = cljs.core.nthnext.call(null,vec__13448,(3));if(cljs.core.sequential_QMARK_.call(null,op))
{return freactive.experimental.observable_collection.do_txs.call(null,state,tx);
} else
{var G__13449 = (((op instanceof cljs.core.Keyword))?op.fqn:null);switch (G__13449) {
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
freactive.experimental.observable_collection.do_txs = (function do_txs(state,txs){var state__$1 = state;var txs_res = cljs.core.PersistentVector.EMPTY;var G__13457 = txs;var vec__13458 = G__13457;var tx = cljs.core.nth.call(null,vec__13458,(0),null);var txs__$1 = cljs.core.nthnext.call(null,vec__13458,(1));var state__$2 = state__$1;var txs_res__$1 = txs_res;var G__13457__$1 = G__13457;while(true){
var state__$3 = state__$2;var txs_res__$2 = txs_res__$1;var vec__13459 = G__13457__$1;var tx__$1 = cljs.core.nth.call(null,vec__13459,(0),null);var txs__$2 = cljs.core.nthnext.call(null,vec__13459,(1));if(cljs.core.truth_(tx__$1))
{var vec__13460 = freactive.experimental.observable_collection.do_tx.call(null,state__$3,tx__$1);var state__$4 = cljs.core.nth.call(null,vec__13460,(0),null);var tx_res = cljs.core.nth.call(null,vec__13460,(1),null);var txs_res__$3 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,tx_res)))?cljs.core.concat.call(null,txs_res__$2,tx_res):cljs.core.conj.call(null,txs_res__$2,tx_res));{
var G__13461 = state__$4;
var G__13462 = txs_res__$3;
var G__13463 = txs__$2;
state__$2 = G__13461;
txs_res__$1 = G__13462;
G__13457__$1 = G__13463;
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
freactive.experimental.observable_collection.notify_coll = (function notify_coll(coll,txs_res){var seq__13470_13476 = cljs.core.seq.call(null,coll.observers);var chunk__13471_13477 = null;var count__13472_13478 = (0);var i__13473_13479 = (0);while(true){
if((i__13473_13479 < count__13472_13478))
{var vec__13474_13480 = cljs.core._nth.call(null,chunk__13471_13477,i__13473_13479);var k_13481 = cljs.core.nth.call(null,vec__13474_13480,(0),null);var f_13482 = cljs.core.nth.call(null,vec__13474_13480,(1),null);f_13482.call(null,k_13481,coll,txs_res);
{
var G__13483 = seq__13470_13476;
var G__13484 = chunk__13471_13477;
var G__13485 = count__13472_13478;
var G__13486 = (i__13473_13479 + (1));
seq__13470_13476 = G__13483;
chunk__13471_13477 = G__13484;
count__13472_13478 = G__13485;
i__13473_13479 = G__13486;
continue;
}
} else
{var temp__4388__auto___13487 = cljs.core.seq.call(null,seq__13470_13476);if(temp__4388__auto___13487)
{var seq__13470_13488__$1 = temp__4388__auto___13487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13470_13488__$1))
{var c__12306__auto___13489 = cljs.core.chunk_first.call(null,seq__13470_13488__$1);{
var G__13490 = cljs.core.chunk_rest.call(null,seq__13470_13488__$1);
var G__13491 = c__12306__auto___13489;
var G__13492 = cljs.core.count.call(null,c__12306__auto___13489);
var G__13493 = (0);
seq__13470_13476 = G__13490;
chunk__13471_13477 = G__13491;
count__13472_13478 = G__13492;
i__13473_13479 = G__13493;
continue;
}
} else
{var vec__13475_13494 = cljs.core.first.call(null,seq__13470_13488__$1);var k_13495 = cljs.core.nth.call(null,vec__13475_13494,(0),null);var f_13496 = cljs.core.nth.call(null,vec__13475_13494,(1),null);f_13496.call(null,k_13495,coll,txs_res);
{
var G__13497 = cljs.core.next.call(null,seq__13470_13488__$1);
var G__13498 = null;
var G__13499 = (0);
var G__13500 = (0);
seq__13470_13476 = G__13497;
chunk__13471_13477 = G__13498;
count__13472_13478 = G__13499;
i__13473_13479 = G__13500;
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
var cur_state = cljs.core.deref.call(null,state);var vec__13502 = freactive.experimental.observable_collection.do_txs.call(null,cur_state,tx_data);var new_state = cljs.core.nth.call(null,vec__13502,(0),null);var txs_res = cljs.core.nth.call(null,vec__13502,(1),null);if(freactive.experimental.observable_collection.do_cas_BANG_.call(null,state,cur_state,new_state))
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
transact_BANG_.cljs$lang$applyTo = (function (arglist__13503){
var coll = cljs.core.first(arglist__13503);
var tx_data = cljs.core.rest(arglist__13503);
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
var observable_collection__1 = (function (init){var init__$1 = (((function (){var G__13505 = init;if(G__13505)
{var bit__12200__auto__ = (G__13505.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12200__auto__) || (G__13505.cljs$core$IDeref$))
{return true;
} else
{if((!G__13505.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13505);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13505);
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