// Compiled by ClojureScript 0.0-2371
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test._STAR_entry_point_STAR_ = true;
cemerick.cljs.test._STAR_test_ctx_STAR_ = null;
cemerick.cljs.test.init_test_environment_STAR_ = (function init_test_environment_STAR_(aux_data){return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),(cljs.core.truth_(cemerick.cljs.test._STAR_test_print_fn_STAR_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143),cemerick.cljs.test._STAR_test_print_fn_STAR_], null):null)),new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128),cljs.core.List.EMPTY),aux_data));
});
cemerick.cljs.test.init_test_environment = (function init_test_environment(){var G__17719 = cemerick.cljs.test.init_test_environment_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786),cljs.core.List.EMPTY], null));cljs.core.swap_BANG_.call(null,G__17719,cljs.core.assoc,new cljs.core.Keyword(null,"async","async",1050769601),cemerick.cljs.test.init_test_environment_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY));
return G__17719;
});
cemerick.cljs.test.registered_tests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function register_test_BANG_(ns,name,fn){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.assoc,name,fn);
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function register_test_ns_hook_BANG_(ns,name){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});

/**
* @constructor
* @param {*} test_env
* @param {*} test_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cemerick.cljs.test.TestContext = (function (test_env,test_name,__meta,__extmap){
this.test_env = test_env;
this.test_name = test_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12091__auto__,k__12092__auto__){var self__ = this;
var this__12091__auto____$1 = this;return cljs.core._lookup.call(null,this__12091__auto____$1,k__12092__auto__,null);
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12093__auto__,k17721,else__12094__auto__){var self__ = this;
var this__12093__auto____$1 = this;var G__17723 = (((k17721 instanceof cljs.core.Keyword))?k17721.fqn:null);switch (G__17723) {
case "test-name":
return self__.test_name;

break;
case "test-env":
return self__.test_env;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17721,else__12094__auto__);

}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12105__auto__,writer__12106__auto__,opts__12107__auto__){var self__ = this;
var this__12105__auto____$1 = this;var pr_pair__12108__auto__ = ((function (this__12105__auto____$1){
return (function (keyval__12109__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12106__auto__,cljs.core.pr_writer,""," ","",opts__12107__auto__,keyval__12109__auto__);
});})(this__12105__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12106__auto__,pr_pair__12108__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__12107__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12089__auto__){var self__ = this;
var this__12089__auto____$1 = this;return self__.__meta;
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12085__auto__){var self__ = this;
var this__12085__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12095__auto__){var self__ = this;
var this__12095__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12086__auto__){var self__ = this;
var this__12086__auto____$1 = this;var h__11906__auto__ = self__.__hash;if(!((h__11906__auto__ == null)))
{return h__11906__auto__;
} else
{var h__11906__auto____$1 = cljs.core.hash_imap.call(null,this__12086__auto____$1);self__.__hash = h__11906__auto____$1;
return h__11906__auto____$1;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12087__auto__,other__12088__auto__){var self__ = this;
var this__12087__auto____$1 = this;if(cljs.core.truth_((function (){var and__11483__auto__ = other__12088__auto__;if(cljs.core.truth_(and__11483__auto__))
{return ((this__12087__auto____$1.constructor === other__12088__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12087__auto____$1,other__12088__auto__));
} else
{return and__11483__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12100__auto__,k__12101__auto__){var self__ = this;
var this__12100__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-env","test-env",-540228992),null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),null], null), null),k__12101__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12100__auto____$1),self__.__meta),k__12101__auto__);
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12101__auto__)),null));
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12098__auto__,k__12099__auto__,G__17720){var self__ = this;
var this__12098__auto____$1 = this;var pred__17724 = cljs.core.keyword_identical_QMARK_;var expr__17725 = k__12099__auto__;if(cljs.core.truth_(pred__17724.call(null,new cljs.core.Keyword(null,"test-env","test-env",-540228992),expr__17725)))
{return (new cemerick.cljs.test.TestContext(G__17720,self__.test_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17724.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),expr__17725)))
{return (new cemerick.cljs.test.TestContext(self__.test_env,G__17720,self__.__meta,self__.__extmap,null));
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12099__auto__,G__17720),null));
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12103__auto__){var self__ = this;
var this__12103__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12090__auto__,G__17720){var self__ = this;
var this__12090__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__17720,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12096__auto__,entry__12097__auto__){var self__ = this;
var this__12096__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12097__auto__))
{return cljs.core._assoc.call(null,this__12096__auto____$1,cljs.core._nth.call(null,entry__12097__auto__,(0)),cljs.core._nth.call(null,entry__12097__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12096__auto____$1,entry__12097__auto__);
}
});
cemerick.cljs.test.TestContext.cljs$lang$type = true;
cemerick.cljs.test.TestContext.cljs$lang$ctorPrSeq = (function (this__12125__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.TestContext.cljs$lang$ctorPrWriter = (function (this__12125__auto__,writer__12126__auto__){return cljs.core._write.call(null,writer__12126__auto__,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.__GT_TestContext = (function __GT_TestContext(test_env,test_name){return (new cemerick.cljs.test.TestContext(test_env,test_name));
});
cemerick.cljs.test.map__GT_TestContext = (function map__GT_TestContext(G__17722){return (new cemerick.cljs.test.TestContext(new cljs.core.Keyword(null,"test-env","test-env",-540228992).cljs$core$IFn$_invoke$arity$1(G__17722),new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(G__17722),null,cljs.core.dissoc.call(null,G__17722,new cljs.core.Keyword(null,"test-env","test-env",-540228992),new cljs.core.Keyword(null,"test-name","test-name",-675595913))));
});
cemerick.cljs.test.maybe_deref = (function maybe_deref(x){if((function (){var G__17729 = x;if(G__17729)
{var bit__12159__auto__ = (G__17729.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12159__auto__) || (G__17729.cljs$core$IDeref$))
{return true;
} else
{if((!G__17729.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17729);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17729);
}
})())
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function testing_complete_QMARK_(test_env){var map__17731 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__17731__$1 = ((cljs.core.seq_QMARK_.call(null,map__17731))?cljs.core.apply.call(null,cljs.core.hash_map,map__17731):map__17731);var remaining = cljs.core.get.call(null,map__17731__$1,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312));var running = cljs.core.get.call(null,map__17731__$1,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558));var async = cljs.core.get.call(null,map__17731__$1,new cljs.core.Keyword(null,"async","async",1050769601));var and__11483__auto__ = cljs.core.empty_QMARK_.call(null,remaining);if(and__11483__auto__)
{var and__11483__auto____$1 = cljs.core.empty_QMARK_.call(null,running);if(and__11483__auto____$1)
{var or__11495__auto__ = (async == null);if(or__11495__auto__)
{return or__11495__auto__;
} else
{return testing_complete_QMARK_.call(null,async);
}
} else
{return and__11483__auto____$1;
}
} else
{return and__11483__auto__;
}
});
/**
* Registers a watcher on the :async testing (sub)environment provided by
* [test-env]; when its key metrics (:test, :pass, :fail, :error) change,
* [callback] will be called with [test-env].  The watcher will be removed when all
* tests are complete.
* 
* If [test-env] is already complete, [callback] will be called with it as an
* argument immediately, and no watcher will be registered.
*/
cemerick.cljs.test.on_async_progress = (function on_async_progress(test_env,callback){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env)))
{setTimeout((function (){return callback.call(null,test_env);
}),(1));
} else
{cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref.call(null,test_env)),cljs.core.gensym.call(null,"on-progress"),(function (key,ref,old,new$){var vec__17734 = cljs.core.map.call(null,(function (p1__17732_SHARP_){return cljs.core.select_keys.call(null,p1__17732_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"error","error",-978969032)], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));var oldv = cljs.core.nth.call(null,vec__17734,(0),null);var newv = cljs.core.nth.call(null,vec__17734,(1),null);var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_.call(null,new$);if(cljs.core.truth_((function (){var or__11495__auto__ = complete_QMARK_;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core.not_EQ_.call(null,oldv,newv);
}
})()))
{callback.call(null,cemerick.cljs.test.maybe_deref.call(null,test_env));
} else
{}
if(cljs.core.truth_(complete_QMARK_))
{return cljs.core.remove_watch.call(null,ref,key);
} else
{return null;
}
}));
}
return test_env;
});
goog.exportSymbol('cemerick.cljs.test.on_async_progress', cemerick.cljs.test.on_async_progress);
/**
* Same as `on-async-progress`, but will only call [callback] when all tests are complete.
*/
cemerick.cljs.test.on_testing_complete = (function on_testing_complete(test_env,callback){return cemerick.cljs.test.on_async_progress.call(null,test_env,(function (test_env__$1){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env__$1)))
{return callback.call(null,test_env__$1);
} else
{return null;
}
}));
});
goog.exportSymbol('cemerick.cljs.test.on_testing_complete', cemerick.cljs.test.on_testing_complete);
/**
* Returns a string representation of the current test.  Renders names
* in the test environment's ::test-functions list, then the source file and line of
* current assertion.
*/
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(p__17735){var map__17737 = p__17735;var map__17737__$1 = ((cljs.core.seq_QMARK_.call(null,map__17737))?cljs.core.apply.call(null,cljs.core.hash_map,map__17737):map__17737);var m = map__17737__$1;var test_name = cljs.core.get.call(null,map__17737__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__17737__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var line = cljs.core.get.call(null,map__17737__$1,new cljs.core.Keyword(null,"line","line",212345235));var file = cljs.core.get.call(null,map__17737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,(function (){var or__11495__auto__ = cljs.core.seq.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))));if(or__11495__auto__)
{return or__11495__auto__;
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,test_name);
}
})()))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)+")");
});
/**
* Returns a string representation of the current test context as represented in
* the [test-env]'s ::test-contexts list. Joins strings in that list with
* spaces.
*/
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(test_env){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))));
});
/**
* Increments the named counter in the [test-env] atom.
*/
cemerick.cljs.test.inc_report_counter = (function inc_report_counter(test_env,name){return cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.  See the documentation at
* the top of test_is.clj for more information on the types of
* arguments for 'report'.
*/
cemerick.cljs.test.report = (function (){var method_table__12375__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__12376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__12377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__12378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__12379__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("report",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12379__auto__,method_table__12375__auto__,prefer_table__12376__auto__,method_cache__12377__auto__,cached_hierarchy__12378__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),error.fileName,new cljs.core.Keyword(null,"line","line",212345235),error.lineNumber], null);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function() {
var do_report = null;
var do_report__1 = (function (m){return cemerick.cljs.test.report.call(null,(function (){var G__17742 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m).fqn:null);switch (G__17742) {
case "error":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)),m);

break;
case "fail":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,Error()),m);

break;
default:
return m;

}
})());
});
var do_report__2 = (function (p__17738,m){var map__17741 = p__17738;var map__17741__$1 = ((cljs.core.seq_QMARK_.call(null,map__17741))?cljs.core.apply.call(null,cljs.core.hash_map,map__17741):map__17741);var test_ctx = map__17741__$1;var test_name = cljs.core.get.call(null,map__17741__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__17741__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
return do_report.call(null,cljs.core.merge.call(null,m,test_ctx));
});
do_report = function(p__17738,m){
switch(arguments.length){
case 1:
return do_report__1.call(this,p__17738);
case 2:
return do_report__2.call(this,p__17738,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
do_report.cljs$core$IFn$_invoke$arity$1 = do_report__1;
do_report.cljs$core$IFn$_invoke$arity$2 = do_report__2;
return do_report;
})()
;
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17744){var map__17745 = p__17744;var map__17745__$1 = ((cljs.core.seq_QMARK_.call(null,map__17745))?cljs.core.apply.call(null,cljs.core.hash_map,map__17745):map__17745);var m = map__17745__$1;var test_env = cljs.core.get.call(null,map__17745__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_17746 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11495__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.call(null,m);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17746;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__17747){var map__17748 = p__17747;var map__17748__$1 = ((cljs.core.seq_QMARK_.call(null,map__17748))?cljs.core.apply.call(null,cljs.core.hash_map,map__17748):map__17748);var m = map__17748__$1;var test_env = cljs.core.get.call(null,map__17748__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_17749 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11495__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"pass","pass",1574159993));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17749;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (p__17750){var map__17751 = p__17750;var map__17751__$1 = ((cljs.core.seq_QMARK_.call(null,map__17751))?cljs.core.apply.call(null,cljs.core.hash_map,map__17751):map__17751);var m = map__17751__$1;var test_env = cljs.core.get.call(null,map__17751__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_17752 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11495__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"fail","fail",1706214930));
cljs.core.println.call(null,"\nFAIL in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4388__auto___17753 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4388__auto___17753))
{var message_17754 = temp__4388__auto___17753;cljs.core.println.call(null,message_17754);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));
return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17752;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__17755){var map__17756 = p__17755;var map__17756__$1 = ((cljs.core.seq_QMARK_.call(null,map__17756))?cljs.core.apply.call(null,cljs.core.hash_map,map__17756):map__17756);var m = map__17756__$1;var test_env = cljs.core.get.call(null,map__17756__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_17757 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11495__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,"\nERROR in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4388__auto___17758 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4388__auto___17758))
{var message_17759 = temp__4388__auto___17758;cljs.core.println.call(null,message_17759);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));
cljs.core.print.call(null,"  actual: ");
var actual = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);if((actual instanceof Error))
{return cljs.core.println.call(null,actual.stack);
} else
{return cljs.core.prn.call(null,actual);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17757;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),(function (p__17760){var map__17761 = p__17760;var map__17761__$1 = ((cljs.core.seq_QMARK_.call(null,map__17761))?cljs.core.apply.call(null,cljs.core.hash_map,map__17761):map__17761);var m = map__17761__$1;var test_env = cljs.core.get.call(null,map__17761__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_17762 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11495__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709));
cljs.core.println.call(null,"\nWARNING in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4388__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4388__auto__))
{var message = temp__4388__auto__;return cljs.core.println.call(null,message);
} else
{return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17762;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__17763){var map__17764 = p__17763;var map__17764__$1 = ((cljs.core.seq_QMARK_.call(null,map__17764))?cljs.core.apply.call(null,cljs.core.hash_map,map__17764):map__17764);var test_env = map__17764__$1;var error = cljs.core.get.call(null,map__17764__$1,new cljs.core.Keyword(null,"error","error",-978969032));var fail = cljs.core.get.call(null,map__17764__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));var pass = cljs.core.get.call(null,map__17764__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));var test = cljs.core.get.call(null,map__17764__$1,new cljs.core.Keyword(null,"test","test",577538877));var _STAR_print_fn_STAR_17765 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11495__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.call(null,"\nRan",test,"tests containing",((pass + fail) + error),"assertions.");
var temp__4386__auto__ = (function (){var and__11483__auto__ = cljs.core.not.call(null,cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env));if(and__11483__auto__)
{return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.juxt.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312),new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)).call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(test_env)))));
} else
{return and__11483__auto__;
}
})();if(cljs.core.truth_(temp__4386__auto__))
{var pending_count = temp__4386__auto__;return cljs.core.println.call(null,"Waiting on",pending_count,("asynchronous test"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((pending_count > (1)))?"s":null))+" to complete."));
} else
{return cljs.core.println.call(null,"Testing complete:",fail,"failures,",error,"errors.");
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17765;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (p__17766){var map__17767 = p__17766;var map__17767__$1 = ((cljs.core.seq_QMARK_.call(null,map__17767))?cljs.core.apply.call(null,cljs.core.hash_map,map__17767):map__17767);var m = map__17767__$1;var async = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"async","async",1050769601));var test_env = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var ns = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"ns","ns",441598760));var _STAR_print_fn_STAR_17768 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11495__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.call(null,"\nTesting",ns,(cljs.core.truth_(async)?"(async)":""));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17768;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (p__17769){var map__17770 = p__17769;var map__17770__$1 = ((cljs.core.seq_QMARK_.call(null,map__17770))?cljs.core.apply.call(null,cljs.core.hash_map,map__17770):map__17770);var m = map__17770__$1;var test_env = cljs.core.get.call(null,map__17770__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),(function (p__17771){var map__17772 = p__17771;var map__17772__$1 = ((cljs.core.seq_QMARK_.call(null,map__17772))?cljs.core.apply.call(null,cljs.core.hash_map,map__17772):map__17772);var m = map__17772__$1;var test_env = cljs.core.get.call(null,map__17772__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),(function (p__17773){var map__17774 = p__17773;var map__17774__$1 = ((cljs.core.seq_QMARK_.call(null,map__17774))?cljs.core.apply.call(null,cljs.core.hash_map,map__17774):map__17774);var m = map__17774__$1;var test_env = cljs.core.get.call(null,map__17774__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
/**
* Wrap test runs in a fixture function to perform setup and
* teardown. Using a fixture-type of :each wraps every test
* individually, while :once wraps the whole run in a single function.
* @param {...*} var_args
*/
cemerick.cljs.test.register_fixtures_BANG_ = (function() { 
var register_fixtures_BANG___delegate = function (ns_sym,fixture_type,fixture_fns){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly.call(null,fixture_fns));
};
var register_fixtures_BANG_ = function (ns_sym,fixture_type,var_args){
var fixture_fns = null;if (arguments.length > 2) {
  fixture_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return register_fixtures_BANG___delegate.call(this,ns_sym,fixture_type,fixture_fns);};
register_fixtures_BANG_.cljs$lang$maxFixedArity = 2;
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__17775){
var ns_sym = cljs.core.first(arglist__17775);
arglist__17775 = cljs.core.next(arglist__17775);
var fixture_type = cljs.core.first(arglist__17775);
var fixture_fns = cljs.core.rest(arglist__17775);
return register_fixtures_BANG___delegate(ns_sym,fixture_type,fixture_fns);
});
register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = register_fixtures_BANG___delegate;
return register_fixtures_BANG_;
})()
;
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cemerick.cljs.test.default_fixture = (function default_fixture(f){return f.call(null);
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cemerick.cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){return (function (g){return f1.call(null,(function (){return f2.call(null,g);
}));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cemerick.cljs.test.join_fixtures = (function join_fixtures(fixtures){return cljs.core.reduce.call(null,cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
cemerick.cljs.test.async_test_QMARK_ = (function async_test_QMARK_(test_fn){return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,test_fn)));
});
cemerick.cljs.test.test_async_fn = (function test_async_fn(async_test_env,test_name,test_fn){cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),test_fn,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name], null));
cemerick.cljs.test.inc_report_counter.call(null,async_test_env,new cljs.core.Keyword(null,"test","test",577538877));
return test_fn.call(null,(new cemerick.cljs.test.TestContext(async_test_env,test_name)));
});
cemerick.cljs.test.start_next_async_test = (function start_next_async_test(async_test_env){var next_test = cljs.core.atom.call(null,(function (){return null;
}));cljs.core.swap_BANG_.call(null,async_test_env,((function (next_test){
return (function (env){var temp__4386__auto__ = (function (){var and__11483__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(env));if(and__11483__auto__)
{return cljs.core.first.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(env));
} else
{return and__11483__auto__;
}
})();if(cljs.core.truth_(temp__4386__auto__))
{var vec__17777 = temp__4386__auto__;var name = cljs.core.nth.call(null,vec__17777,(0),null);var testfn = cljs.core.nth.call(null,vec__17777,(1),null);cljs.core.reset_BANG_.call(null,next_test,testfn);
var ns_17778 = cljs.core.namespace.call(null,name);if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,async_test_env)),ns_17778))
{} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_17778,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"async","async",1050769601),true], null));
cljs.core.alter_meta_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_17778);
}
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.dissoc,name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.assoc,name,(new Date()));
} else
{return env;
}
});})(next_test))
);
setTimeout(((function (next_test){
return (function (){return cljs.core.deref.call(null,next_test).call(null);
});})(next_test))
,(1));
return async_test_env;
});
/**
* Removes framework-internal bits from a test environment for more pleasant human viewing.
*/
cemerick.cljs.test.squelch_internals = (function squelch_internals(test_env){var G__17783 = test_env;cljs.core.swap_BANG_.call(null,G__17783,((function (G__17783){
return (function (p1__17779_SHARP_){return cljs.core.reduce.call(null,((function (G__17783){
return (function (env,p__17784){var vec__17785 = p__17784;var k = cljs.core.nth.call(null,vec__17785,(0),null);var v = cljs.core.nth.call(null,vec__17785,(1),null);if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,k),cljs.core.namespace.call(null,new cljs.core.Keyword("cemerick.cljs.test","foo","cemerick.cljs.test/foo",-1669146357))))
{return env;
} else
{return cljs.core.assoc.call(null,env,k,v);
}
});})(G__17783))
,cljs.core.PersistentArrayMap.EMPTY,p1__17779_SHARP_);
});})(G__17783))
);
return G__17783;
});
cemerick.cljs.test.finish_test_entry_point = (function finish_test_entry_point(entry_point_QMARK_,test_env){if(cljs.core.truth_(entry_point_QMARK_))
{if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))))
{cljs.core.swap_BANG_.call(null,test_env,cljs.core.dissoc,new cljs.core.Keyword(null,"async","async",1050769601));
} else
{cemerick.cljs.test.start_next_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)));
}
return cljs.core.deref.call(null,cemerick.cljs.test.squelch_internals.call(null,test_env));
} else
{return test_env;
}
});
cemerick.cljs.test.schedule_async_test = (function schedule_async_test(async_test_env,test_name,test_fn){cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.fnil.call(null,cljs.core.assoc,cljs.core.sorted_map.call(null)),test_name,cljs.core.with_meta.call(null,(function (){return cemerick.cljs.test.test_async_fn.call(null,async_test_env,test_name,test_fn);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),test_name], null)));
return async_test_env;
});
cemerick.cljs.test.done_STAR_ = (function() {
var done_STAR_ = null;
var done_STAR___1 = (function (p__17787){var map__17791 = p__17787;var map__17791__$1 = ((cljs.core.seq_QMARK_.call(null,map__17791))?cljs.core.apply.call(null,cljs.core.hash_map,map__17791):map__17791);var test_ctx = map__17791__$1;var test_name = cljs.core.get.call(null,map__17791__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var async_test_env = cljs.core.get.call(null,map__17791__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
var first_call_QMARK_ = cljs.core.atom.call(null,false);cljs.core.swap_BANG_.call(null,async_test_env,((function (first_call_QMARK_,map__17791,map__17791__$1,test_ctx,test_name,async_test_env){
return (function (env){cljs.core.reset_BANG_.call(null,first_call_QMARK_,cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558).cljs$core$IFn$_invoke$arity$1(env),test_name));
return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.dissoc,test_name);
});})(first_call_QMARK_,map__17791,map__17791__$1,test_ctx,test_name,async_test_env))
);
if(cljs.core.truth_(cljs.core.deref.call(null,first_call_QMARK_)))
{cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),test_name], null),test_ctx));
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,async_test_env)))
{cemerick.cljs.test.squelch_internals.call(null,async_test_env);
} else
{cemerick.cljs.test.start_next_async_test.call(null,async_test_env);
}
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),new cljs.core.Keyword(null,"message","message",-406056002),"`(done)` called multiple times to signal end-of-test"], null),test_ctx));
}
return async_test_env;
});
var done_STAR___2 = (function (p__17786,error){var map__17790 = p__17786;var map__17790__$1 = ((cljs.core.seq_QMARK_.call(null,map__17790))?cljs.core.apply.call(null,cljs.core.hash_map,map__17790):map__17790);var test_ctx = map__17790__$1;var test_name = cljs.core.get.call(null,map__17790__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__17790__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
cemerick.cljs.test.do_report.call(null,cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),error], null),test_ctx)));
return done_STAR_.call(null,test_ctx);
});
done_STAR_ = function(p__17786,error){
switch(arguments.length){
case 1:
return done_STAR___1.call(this,p__17786);
case 2:
return done_STAR___2.call(this,p__17786,error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
done_STAR_.cljs$core$IFn$_invoke$arity$1 = done_STAR___1;
done_STAR_.cljs$core$IFn$_invoke$arity$2 = done_STAR___2;
return done_STAR_;
})()
;
cemerick.cljs.test.stop = (function stop(async_test_env){return cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.assoc,new cljs.core.Keyword(null,"stop","stop",-2140911342),true);
});
/**
* If v has a function in its :test metadata, calls that function,
* conjing its name into the test environment's ::test-functions list.
* 
* Note that this is the implementation of `test-var` in clojure.test,
* which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
* in the Clojure file for `test-var`.
*/
cemerick.cljs.test.test_function = (function() {
var test_function = null;
var test_function__1 = (function (v){return test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),v);
});
var test_function__2 = (function (test_env,v){var entry_point_QMARK___13387__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_17795 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
if(cljs.core.fn_QMARK_.call(null,v))
{} else
{throw (new Error(("Assert failed: test-var must be passed the function to be tested (not a symbol naming it)\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))));
}
var map__17796_17798 = cljs.core.meta.call(null,v);var map__17796_17799__$1 = ((cljs.core.seq_QMARK_.call(null,map__17796_17798))?cljs.core.apply.call(null,cljs.core.hash_map,map__17796_17798):map__17796_17798);var t_17800 = cljs.core.get.call(null,map__17796_17799__$1,new cljs.core.Keyword(null,"test","test",577538877));var test_name_17801 = cljs.core.get.call(null,map__17796_17799__$1,new cljs.core.Keyword(null,"name","name",1843675177));var async_QMARK__17802 = cljs.core.get.call(null,map__17796_17799__$1,new cljs.core.Keyword(null,"async","async",1050769601));if(cljs.core.truth_(t_17800))
{if(cljs.core.truth_(async_QMARK__17802))
{cemerick.cljs.test.schedule_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),test_name_17801,t_17800);
} else
{try{cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.conj,(function (){var or__11495__auto__ = test_name_17801;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_17801], null));
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"test","test",577538877));
try{t_17800.call(null,(new cemerick.cljs.test.TestContext(test_env,test_name_17801)));
}catch (e17797){if((e17797 instanceof Error))
{var e_17803 = e17797;cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_17801,new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),e_17803], null));
} else
{throw e17797;

}
}cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_17801], null));
}finally {cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.pop);
}}
} else
{}
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___13387__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_17795;
}});
test_function = function(test_env,v){
switch(arguments.length){
case 1:
return test_function__1.call(this,test_env);
case 2:
return test_function__2.call(this,test_env,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_function.cljs$core$IFn$_invoke$arity$1 = test_function__1;
test_function.cljs$core$IFn$_invoke$arity$2 = test_function__2;
return test_function;
})()
;
/**
* Calls test-var on every var interned in the namespace, with fixtures.
*/
cemerick.cljs.test.test_all_vars = (function() {
var test_all_vars = null;
var test_all_vars__1 = (function (ns_sym){return test_all_vars.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_all_vars__2 = (function (test_env,ns_sym){var entry_point_QMARK___13387__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_17812 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var tests_17817 = cljs.core.filter.call(null,((function (_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__){
return (function (p1__17804_SHARP_){return new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__17804_SHARP_));
});})(_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__))
,cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests),ns_sym)));var once_fixture_fn_17818 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));var each_fixture_fn_17819 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));once_fixture_fn_17818.call(null,((function (once_fixture_fn_17818,each_fixture_fn_17819,tests_17817,_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__){
return (function (){var seq__17813 = cljs.core.seq.call(null,cljs.core.remove.call(null,cemerick.cljs.test.async_test_QMARK_,tests_17817));var chunk__17814 = null;var count__17815 = (0);var i__17816 = (0);while(true){
if((i__17816 < count__17815))
{var v = cljs.core._nth.call(null,chunk__17814,i__17816);each_fixture_fn_17819.call(null,((function (seq__17813,chunk__17814,count__17815,i__17816,v,once_fixture_fn_17818,each_fixture_fn_17819,tests_17817,_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__17813,chunk__17814,count__17815,i__17816,v,once_fixture_fn_17818,each_fixture_fn_17819,tests_17817,_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__))
);
{
var G__17820 = seq__17813;
var G__17821 = chunk__17814;
var G__17822 = count__17815;
var G__17823 = (i__17816 + (1));
seq__17813 = G__17820;
chunk__17814 = G__17821;
count__17815 = G__17822;
i__17816 = G__17823;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__17813);if(temp__4388__auto__)
{var seq__17813__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17813__$1))
{var c__12265__auto__ = cljs.core.chunk_first.call(null,seq__17813__$1);{
var G__17824 = cljs.core.chunk_rest.call(null,seq__17813__$1);
var G__17825 = c__12265__auto__;
var G__17826 = cljs.core.count.call(null,c__12265__auto__);
var G__17827 = (0);
seq__17813 = G__17824;
chunk__17814 = G__17825;
count__17815 = G__17826;
i__17816 = G__17827;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__17813__$1);each_fixture_fn_17819.call(null,((function (seq__17813,chunk__17814,count__17815,i__17816,v,seq__17813__$1,temp__4388__auto__,once_fixture_fn_17818,each_fixture_fn_17819,tests_17817,_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__17813,chunk__17814,count__17815,i__17816,v,seq__17813__$1,temp__4388__auto__,once_fixture_fn_17818,each_fixture_fn_17819,tests_17817,_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__))
);
{
var G__17828 = cljs.core.next.call(null,seq__17813__$1);
var G__17829 = null;
var G__17830 = (0);
var G__17831 = (0);
seq__17813 = G__17828;
chunk__17814 = G__17829;
count__17815 = G__17830;
i__17816 = G__17831;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(once_fixture_fn_17818,each_fixture_fn_17819,tests_17817,_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__))
);
cljs.core.reduce.call(null,((function (tests_17817,_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__){
return (function (p1__17805_SHARP_,p2__17806_SHARP_){return cljs.core.apply.call(null,cemerick.cljs.test.schedule_async_test,p1__17805_SHARP_,p2__17806_SHARP_);
});})(tests_17817,_STAR_entry_point_STAR_17812,entry_point_QMARK___13387__auto__))
,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"test","test",577538877)),cljs.core.meta),cljs.core.filter.call(null,cemerick.cljs.test.async_test_QMARK_,tests_17817)));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___13387__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_17812;
}});
test_all_vars = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_all_vars__1.call(this,test_env);
case 2:
return test_all_vars__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_all_vars.cljs$core$IFn$_invoke$arity$1 = test_all_vars__1;
test_all_vars.cljs$core$IFn$_invoke$arity$2 = test_all_vars__2;
return test_all_vars;
})()
;
/**
* If the namespace defines a function named test-ns-hook, calls that.
* Otherwise, calls test-all-vars on the namespace.  'ns' is a
* namespace object or a symbol.
* 
* Internally binds *report-counters* to an atom initialized to
* *inital-report-counters*.  Returns the final, dereferenced state of
* *report-counters*.
*/
cemerick.cljs.test.test_ns = (function() {
var test_ns = null;
var test_ns__1 = (function (ns_sym){return test_ns.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_ns__2 = (function (test_env,ns_sym){var entry_point_QMARK___13387__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_17833 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));
var temp__4386__auto___17834 = cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks),ns_sym);if(cljs.core.truth_(temp__4386__auto___17834))
{var test_hook_17835 = temp__4386__auto___17834;test_hook_17835.call(null,test_env);
} else
{cemerick.cljs.test.test_all_vars.call(null,test_env,ns_sym);
}
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___13387__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_17833;
}});
test_ns = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_ns__1.call(this,test_env);
case 2:
return test_ns__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_ns.cljs$core$IFn$_invoke$arity$1 = test_ns__1;
test_ns.cljs$core$IFn$_invoke$arity$2 = test_ns__2;
return test_ns;
})()
;
cemerick.cljs.test.test_summary = (function test_summary(test_env){var test_env__$1 = cemerick.cljs.test.maybe_deref.call(null,test_env);return cemerick.cljs.test.do_report.call(null,cljs.core.assoc.call(null,cljs.core.merge_with.call(null,cljs.core._PLUS_,test_env__$1,cemerick.cljs.test.maybe_deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(test_env__$1))),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));
});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){var vec__17842 = (((cljs.core.first.call(null,namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons.call(null,cemerick.cljs.test.init_test_environment.call(null),namespaces));var test_env = cljs.core.nth.call(null,vec__17842,(0),null);var namespaces__$1 = cljs.core.nthnext.call(null,vec__17842,(1));var entry_point_QMARK___13387__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_17843 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var seq__17844_17848 = cljs.core.seq.call(null,cljs.core.distinct.call(null,namespaces__$1));var chunk__17845_17849 = null;var count__17846_17850 = (0);var i__17847_17851 = (0);while(true){
if((i__17847_17851 < count__17846_17850))
{var ns_17852 = cljs.core._nth.call(null,chunk__17845_17849,i__17847_17851);cemerick.cljs.test.test_ns.call(null,test_env,ns_17852);
{
var G__17853 = seq__17844_17848;
var G__17854 = chunk__17845_17849;
var G__17855 = count__17846_17850;
var G__17856 = (i__17847_17851 + (1));
seq__17844_17848 = G__17853;
chunk__17845_17849 = G__17854;
count__17846_17850 = G__17855;
i__17847_17851 = G__17856;
continue;
}
} else
{var temp__4388__auto___17857 = cljs.core.seq.call(null,seq__17844_17848);if(temp__4388__auto___17857)
{var seq__17844_17858__$1 = temp__4388__auto___17857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17844_17858__$1))
{var c__12265__auto___17859 = cljs.core.chunk_first.call(null,seq__17844_17858__$1);{
var G__17860 = cljs.core.chunk_rest.call(null,seq__17844_17858__$1);
var G__17861 = c__12265__auto___17859;
var G__17862 = cljs.core.count.call(null,c__12265__auto___17859);
var G__17863 = (0);
seq__17844_17848 = G__17860;
chunk__17845_17849 = G__17861;
count__17846_17850 = G__17862;
i__17847_17851 = G__17863;
continue;
}
} else
{var ns_17864 = cljs.core.first.call(null,seq__17844_17858__$1);cemerick.cljs.test.test_ns.call(null,test_env,ns_17864);
{
var G__17865 = cljs.core.next.call(null,seq__17844_17858__$1);
var G__17866 = null;
var G__17867 = (0);
var G__17868 = (0);
seq__17844_17848 = G__17865;
chunk__17845_17849 = G__17866;
count__17846_17850 = G__17867;
i__17847_17851 = G__17868;
continue;
}
}
} else
{}
}
break;
}
cemerick.cljs.test.on_testing_complete.call(null,test_env,cemerick.cljs.test.test_summary);
cemerick.cljs.test.test_summary.call(null,test_env);
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___13387__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_17843;
}};
var run_tests_STAR_ = function (var_args){
var namespaces = null;if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__17869){
var namespaces = cljs.core.seq(arglist__17869);
return run_tests_STAR___delegate(namespaces);
});
run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = run_tests_STAR___delegate;
return run_tests_STAR_;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);
/**
* Runs all tests in all namespaces; prints results.
* Optional argument is a regular expression; only namespaces with
* names matching the regular expression (with re-matches) will be
* tested.
*/
cemerick.cljs.test.run_all_tests = (function() {
var run_all_tests = null;
var run_all_tests__0 = (function (){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)));
});
var run_all_tests__1 = (function (re){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.call(null,(function (p1__17870_SHARP_){return cljs.core.re_matches.call(null,re,cljs.core.name.call(null,p1__17870_SHARP_));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests))));
});
run_all_tests = function(re){
switch(arguments.length){
case 0:
return run_all_tests__0.call(this);
case 1:
return run_all_tests__1.call(this,re);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run_all_tests.cljs$core$IFn$_invoke$arity$0 = run_all_tests__0;
run_all_tests.cljs$core$IFn$_invoke$arity$1 = run_all_tests__1;
return run_all_tests;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(test_env){var map__17872 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__17872__$1 = ((cljs.core.seq_QMARK_.call(null,map__17872))?cljs.core.apply.call(null,cljs.core.hash_map,map__17872):map__17872);var async = cljs.core.get.call(null,map__17872__$1,new cljs.core.Keyword(null,"async","async",1050769601));var error = cljs.core.get.call(null,map__17872__$1,new cljs.core.Keyword(null,"error","error",-978969032));var fail = cljs.core.get.call(null,map__17872__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));var and__11483__auto__ = cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env);if(cljs.core.truth_(and__11483__auto__))
{var and__11483__auto____$1 = ((function (){var or__11495__auto__ = fail;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return (0);
}
})() === (0));if(and__11483__auto____$1)
{var and__11483__auto____$2 = ((function (){var or__11495__auto__ = error;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return (0);
}
})() === (0));if(and__11483__auto____$2)
{var or__11495__auto__ = (async == null);if(or__11495__auto__)
{return or__11495__auto__;
} else
{return successful_QMARK_.call(null,async);
}
} else
{return and__11483__auto____$2;
}
} else
{return and__11483__auto____$1;
}
} else
{return and__11483__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);

//# sourceMappingURL=test.js.map