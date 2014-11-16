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
freactive.experimental.observable_collection.ObservableCollection.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"freactive.experimental.observable-collection/ObservableCollection");
});
freactive.experimental.observable_collection.ObservableCollection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<ObservableCollection: ");
cljs.core.pr_writer.call(null,cljs.core.deref.call(null,self__.state),writer,opts);
return cljs.core._write.call(null,writer,">");
});
freactive.experimental.observable_collection.__GT_ObservableCollection = (function __GT_ObservableCollection(state,observers){return (new freactive.experimental.observable_collection.ObservableCollection(state,observers));
});
freactive.experimental.observable_collection.do_tx = (function do_tx(state,tx){if(cljs.core.sequential_QMARK_.call(null,tx))
{var vec__111863 = tx;var op = cljs.core.nth.call(null,vec__111863,(0),null);var id = cljs.core.nth.call(null,vec__111863,(1),null);var arg = cljs.core.nth.call(null,vec__111863,(2),null);var args = cljs.core.nthnext.call(null,vec__111863,(3));if(cljs.core.sequential_QMARK_.call(null,op))
{return freactive.experimental.observable_collection.do_txs.call(null,state,tx);
} else
{var G__111864 = (((op instanceof cljs.core.Keyword))?op.fqn:null);switch (G__111864) {
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
freactive.experimental.observable_collection.do_txs = (function do_txs(state,txs){var state__$1 = state;var txs_res = cljs.core.PersistentVector.EMPTY;var G__111872 = txs;var vec__111873 = G__111872;var tx = cljs.core.nth.call(null,vec__111873,(0),null);var txs__$1 = cljs.core.nthnext.call(null,vec__111873,(1));var state__$2 = state__$1;var txs_res__$1 = txs_res;var G__111872__$1 = G__111872;while(true){
var state__$3 = state__$2;var txs_res__$2 = txs_res__$1;var vec__111874 = G__111872__$1;var tx__$1 = cljs.core.nth.call(null,vec__111874,(0),null);var txs__$2 = cljs.core.nthnext.call(null,vec__111874,(1));if(cljs.core.truth_(tx__$1))
{var vec__111875 = freactive.experimental.observable_collection.do_tx.call(null,state__$3,tx__$1);var state__$4 = cljs.core.nth.call(null,vec__111875,(0),null);var tx_res = cljs.core.nth.call(null,vec__111875,(1),null);var txs_res__$3 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,tx_res)))?cljs.core.concat.call(null,txs_res__$2,tx_res):cljs.core.conj.call(null,txs_res__$2,tx_res));{
var G__111876 = state__$4;
var G__111877 = txs_res__$3;
var G__111878 = txs__$2;
state__$2 = G__111876;
txs_res__$1 = G__111877;
G__111872__$1 = G__111878;
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
freactive.experimental.observable_collection.notify_coll = (function notify_coll(coll,txs_res){var seq__111885_111891 = cljs.core.seq.call(null,coll.observers);var chunk__111886_111892 = null;var count__111887_111893 = (0);var i__111888_111894 = (0);while(true){
if((i__111888_111894 < count__111887_111893))
{var vec__111889_111895 = cljs.core._nth.call(null,chunk__111886_111892,i__111888_111894);var k_111896 = cljs.core.nth.call(null,vec__111889_111895,(0),null);var f_111897 = cljs.core.nth.call(null,vec__111889_111895,(1),null);f_111897.call(null,k_111896,coll,txs_res);
{
var G__111898 = seq__111885_111891;
var G__111899 = chunk__111886_111892;
var G__111900 = count__111887_111893;
var G__111901 = (i__111888_111894 + (1));
seq__111885_111891 = G__111898;
chunk__111886_111892 = G__111899;
count__111887_111893 = G__111900;
i__111888_111894 = G__111901;
continue;
}
} else
{var temp__4388__auto___111902 = cljs.core.seq.call(null,seq__111885_111891);if(temp__4388__auto___111902)
{var seq__111885_111903__$1 = temp__4388__auto___111902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__111885_111903__$1))
{var c__12267__auto___111904 = cljs.core.chunk_first.call(null,seq__111885_111903__$1);{
var G__111905 = cljs.core.chunk_rest.call(null,seq__111885_111903__$1);
var G__111906 = c__12267__auto___111904;
var G__111907 = cljs.core.count.call(null,c__12267__auto___111904);
var G__111908 = (0);
seq__111885_111891 = G__111905;
chunk__111886_111892 = G__111906;
count__111887_111893 = G__111907;
i__111888_111894 = G__111908;
continue;
}
} else
{var vec__111890_111909 = cljs.core.first.call(null,seq__111885_111903__$1);var k_111910 = cljs.core.nth.call(null,vec__111890_111909,(0),null);var f_111911 = cljs.core.nth.call(null,vec__111890_111909,(1),null);f_111911.call(null,k_111910,coll,txs_res);
{
var G__111912 = cljs.core.next.call(null,seq__111885_111903__$1);
var G__111913 = null;
var G__111914 = (0);
var G__111915 = (0);
seq__111885_111891 = G__111912;
chunk__111886_111892 = G__111913;
count__111887_111893 = G__111914;
i__111888_111894 = G__111915;
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
var cur_state = cljs.core.deref.call(null,state);var vec__111917 = freactive.experimental.observable_collection.do_txs.call(null,cur_state,tx_data);var new_state = cljs.core.nth.call(null,vec__111917,(0),null);var txs_res = cljs.core.nth.call(null,vec__111917,(1),null);if(freactive.experimental.observable_collection.do_cas_BANG_.call(null,state,cur_state,new_state))
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
transact_BANG_.cljs$lang$applyTo = (function (arglist__111918){
var coll = cljs.core.first(arglist__111918);
var tx_data = cljs.core.rest(arglist__111918);
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
var observable_collection__1 = (function (init){var init__$1 = (((function (){var G__111920 = init;if(G__111920)
{var bit__12161__auto__ = (G__111920.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__111920.cljs$core$IDeref$))
{return true;
} else
{if((!G__111920.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__111920);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__111920);
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