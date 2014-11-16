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
cemerick.cljs.test.init_test_environment = (function init_test_environment(){var G__37680 = cemerick.cljs.test.init_test_environment_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786),cljs.core.List.EMPTY], null));cljs.core.swap_BANG_.call(null,G__37680,cljs.core.assoc,new cljs.core.Keyword(null,"async","async",1050769601),cemerick.cljs.test.init_test_environment_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY));
return G__37680;
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
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12094__auto__,k__12095__auto__){var self__ = this;
var this__12094__auto____$1 = this;return cljs.core._lookup.call(null,this__12094__auto____$1,k__12095__auto__,null);
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12096__auto__,k37682,else__12097__auto__){var self__ = this;
var this__12096__auto____$1 = this;var G__37684 = (((k37682 instanceof cljs.core.Keyword))?k37682.fqn:null);switch (G__37684) {
case "test-name":
return self__.test_name;

break;
case "test-env":
return self__.test_env;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37682,else__12097__auto__);

}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12108__auto__,writer__12109__auto__,opts__12110__auto__){var self__ = this;
var this__12108__auto____$1 = this;var pr_pair__12111__auto__ = ((function (this__12108__auto____$1){
return (function (keyval__12112__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12109__auto__,cljs.core.pr_writer,""," ","",opts__12110__auto__,keyval__12112__auto__);
});})(this__12108__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12109__auto__,pr_pair__12111__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__12110__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12092__auto__){var self__ = this;
var this__12092__auto____$1 = this;return self__.__meta;
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12088__auto__){var self__ = this;
var this__12088__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12098__auto__){var self__ = this;
var this__12098__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12089__auto__){var self__ = this;
var this__12089__auto____$1 = this;var h__11909__auto__ = self__.__hash;if(!((h__11909__auto__ == null)))
{return h__11909__auto__;
} else
{var h__11909__auto____$1 = cljs.core.hash_imap.call(null,this__12089__auto____$1);self__.__hash = h__11909__auto____$1;
return h__11909__auto____$1;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12090__auto__,other__12091__auto__){var self__ = this;
var this__12090__auto____$1 = this;if(cljs.core.truth_((function (){var and__11486__auto__ = other__12091__auto__;if(cljs.core.truth_(and__11486__auto__))
{return ((this__12090__auto____$1.constructor === other__12091__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12090__auto____$1,other__12091__auto__));
} else
{return and__11486__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12103__auto__,k__12104__auto__){var self__ = this;
var this__12103__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-env","test-env",-540228992),null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),null], null), null),k__12104__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12103__auto____$1),self__.__meta),k__12104__auto__);
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12104__auto__)),null));
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12101__auto__,k__12102__auto__,G__37681){var self__ = this;
var this__12101__auto____$1 = this;var pred__37685 = cljs.core.keyword_identical_QMARK_;var expr__37686 = k__12102__auto__;if(cljs.core.truth_(pred__37685.call(null,new cljs.core.Keyword(null,"test-env","test-env",-540228992),expr__37686)))
{return (new cemerick.cljs.test.TestContext(G__37681,self__.test_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__37685.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),expr__37686)))
{return (new cemerick.cljs.test.TestContext(self__.test_env,G__37681,self__.__meta,self__.__extmap,null));
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12102__auto__,G__37681),null));
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12106__auto__){var self__ = this;
var this__12106__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12093__auto__,G__37681){var self__ = this;
var this__12093__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__37681,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12099__auto__,entry__12100__auto__){var self__ = this;
var this__12099__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12100__auto__))
{return cljs.core._assoc.call(null,this__12099__auto____$1,cljs.core._nth.call(null,entry__12100__auto__,(0)),cljs.core._nth.call(null,entry__12100__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12099__auto____$1,entry__12100__auto__);
}
});
cemerick.cljs.test.TestContext.cljs$lang$type = true;
cemerick.cljs.test.TestContext.cljs$lang$ctorPrSeq = (function (this__12128__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.TestContext.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__){return cljs.core._write.call(null,writer__12129__auto__,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.__GT_TestContext = (function __GT_TestContext(test_env,test_name){return (new cemerick.cljs.test.TestContext(test_env,test_name));
});
cemerick.cljs.test.map__GT_TestContext = (function map__GT_TestContext(G__37683){return (new cemerick.cljs.test.TestContext(new cljs.core.Keyword(null,"test-env","test-env",-540228992).cljs$core$IFn$_invoke$arity$1(G__37683),new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(G__37683),null,cljs.core.dissoc.call(null,G__37683,new cljs.core.Keyword(null,"test-env","test-env",-540228992),new cljs.core.Keyword(null,"test-name","test-name",-675595913))));
});
cemerick.cljs.test.maybe_deref = (function maybe_deref(x){if((function (){var G__37690 = x;if(G__37690)
{var bit__12162__auto__ = (G__37690.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12162__auto__) || (G__37690.cljs$core$IDeref$))
{return true;
} else
{if((!G__37690.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__37690);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__37690);
}
})())
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function testing_complete_QMARK_(test_env){var map__37692 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__37692__$1 = ((cljs.core.seq_QMARK_.call(null,map__37692))?cljs.core.apply.call(null,cljs.core.hash_map,map__37692):map__37692);var remaining = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312));var running = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558));var async = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword(null,"async","async",1050769601));var and__11486__auto__ = cljs.core.empty_QMARK_.call(null,remaining);if(and__11486__auto__)
{var and__11486__auto____$1 = cljs.core.empty_QMARK_.call(null,running);if(and__11486__auto____$1)
{var or__11498__auto__ = (async == null);if(or__11498__auto__)
{return or__11498__auto__;
} else
{return testing_complete_QMARK_.call(null,async);
}
} else
{return and__11486__auto____$1;
}
} else
{return and__11486__auto__;
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
{cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref.call(null,test_env)),cljs.core.gensym.call(null,"on-progress"),(function (key,ref,old,new$){var vec__37695 = cljs.core.map.call(null,(function (p1__37693_SHARP_){return cljs.core.select_keys.call(null,p1__37693_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"error","error",-978969032)], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));var oldv = cljs.core.nth.call(null,vec__37695,(0),null);var newv = cljs.core.nth.call(null,vec__37695,(1),null);var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_.call(null,new$);if(cljs.core.truth_((function (){var or__11498__auto__ = complete_QMARK_;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
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
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(p__37696){var map__37698 = p__37696;var map__37698__$1 = ((cljs.core.seq_QMARK_.call(null,map__37698))?cljs.core.apply.call(null,cljs.core.hash_map,map__37698):map__37698);var m = map__37698__$1;var test_name = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var line = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"line","line",212345235));var file = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,(function (){var or__11498__auto__ = cljs.core.seq.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))));if(or__11498__auto__)
{return or__11498__auto__;
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
cemerick.cljs.test.report = (function (){var method_table__12378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__12379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__12380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__12381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__12382__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("report",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12382__auto__,method_table__12378__auto__,prefer_table__12379__auto__,method_cache__12380__auto__,cached_hierarchy__12381__auto__));
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
var do_report__1 = (function (m){return cemerick.cljs.test.report.call(null,(function (){var G__37703 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m).fqn:null);switch (G__37703) {
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
var do_report__2 = (function (p__37699,m){var map__37702 = p__37699;var map__37702__$1 = ((cljs.core.seq_QMARK_.call(null,map__37702))?cljs.core.apply.call(null,cljs.core.hash_map,map__37702):map__37702);var test_ctx = map__37702__$1;var test_name = cljs.core.get.call(null,map__37702__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__37702__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
return do_report.call(null,cljs.core.merge.call(null,m,test_ctx));
});
do_report = function(p__37699,m){
switch(arguments.length){
case 1:
return do_report__1.call(this,p__37699);
case 2:
return do_report__2.call(this,p__37699,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
do_report.cljs$core$IFn$_invoke$arity$1 = do_report__1;
do_report.cljs$core$IFn$_invoke$arity$2 = do_report__2;
return do_report;
})()
;
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37705){var map__37706 = p__37705;var map__37706__$1 = ((cljs.core.seq_QMARK_.call(null,map__37706))?cljs.core.apply.call(null,cljs.core.hash_map,map__37706):map__37706);var m = map__37706__$1;var test_env = cljs.core.get.call(null,map__37706__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_37707 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11498__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.call(null,m);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37707;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__37708){var map__37709 = p__37708;var map__37709__$1 = ((cljs.core.seq_QMARK_.call(null,map__37709))?cljs.core.apply.call(null,cljs.core.hash_map,map__37709):map__37709);var m = map__37709__$1;var test_env = cljs.core.get.call(null,map__37709__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_37710 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11498__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"pass","pass",1574159993));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37710;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (p__37711){var map__37712 = p__37711;var map__37712__$1 = ((cljs.core.seq_QMARK_.call(null,map__37712))?cljs.core.apply.call(null,cljs.core.hash_map,map__37712):map__37712);var m = map__37712__$1;var test_env = cljs.core.get.call(null,map__37712__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_37713 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11498__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
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
var temp__4388__auto___37714 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4388__auto___37714))
{var message_37715 = temp__4388__auto___37714;cljs.core.println.call(null,message_37715);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));
return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37713;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__37716){var map__37717 = p__37716;var map__37717__$1 = ((cljs.core.seq_QMARK_.call(null,map__37717))?cljs.core.apply.call(null,cljs.core.hash_map,map__37717):map__37717);var m = map__37717__$1;var test_env = cljs.core.get.call(null,map__37717__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_37718 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11498__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
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
var temp__4388__auto___37719 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4388__auto___37719))
{var message_37720 = temp__4388__auto___37719;cljs.core.println.call(null,message_37720);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));
cljs.core.print.call(null,"  actual: ");
var actual = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);if((actual instanceof Error))
{return cljs.core.println.call(null,actual.stack);
} else
{return cljs.core.prn.call(null,actual);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37718;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),(function (p__37721){var map__37722 = p__37721;var map__37722__$1 = ((cljs.core.seq_QMARK_.call(null,map__37722))?cljs.core.apply.call(null,cljs.core.hash_map,map__37722):map__37722);var m = map__37722__$1;var test_env = cljs.core.get.call(null,map__37722__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_37723 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11498__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
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
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37723;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__37724){var map__37725 = p__37724;var map__37725__$1 = ((cljs.core.seq_QMARK_.call(null,map__37725))?cljs.core.apply.call(null,cljs.core.hash_map,map__37725):map__37725);var test_env = map__37725__$1;var error = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"error","error",-978969032));var fail = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));var pass = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));var test = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"test","test",577538877));var _STAR_print_fn_STAR_37726 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11498__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.call(null,"\nRan",test,"tests containing",((pass + fail) + error),"assertions.");
var temp__4386__auto__ = (function (){var and__11486__auto__ = cljs.core.not.call(null,cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env));if(and__11486__auto__)
{return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.juxt.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312),new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)).call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(test_env)))));
} else
{return and__11486__auto__;
}
})();if(cljs.core.truth_(temp__4386__auto__))
{var pending_count = temp__4386__auto__;return cljs.core.println.call(null,"Waiting on",pending_count,("asynchronous test"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((pending_count > (1)))?"s":null))+" to complete."));
} else
{return cljs.core.println.call(null,"Testing complete:",fail,"failures,",error,"errors.");
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37726;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (p__37727){var map__37728 = p__37727;var map__37728__$1 = ((cljs.core.seq_QMARK_.call(null,map__37728))?cljs.core.apply.call(null,cljs.core.hash_map,map__37728):map__37728);var m = map__37728__$1;var async = cljs.core.get.call(null,map__37728__$1,new cljs.core.Keyword(null,"async","async",1050769601));var test_env = cljs.core.get.call(null,map__37728__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var ns = cljs.core.get.call(null,map__37728__$1,new cljs.core.Keyword(null,"ns","ns",441598760));var _STAR_print_fn_STAR_37729 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__11498__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.call(null,"\nTesting",ns,(cljs.core.truth_(async)?"(async)":""));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37729;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (p__37730){var map__37731 = p__37730;var map__37731__$1 = ((cljs.core.seq_QMARK_.call(null,map__37731))?cljs.core.apply.call(null,cljs.core.hash_map,map__37731):map__37731);var m = map__37731__$1;var test_env = cljs.core.get.call(null,map__37731__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),(function (p__37732){var map__37733 = p__37732;var map__37733__$1 = ((cljs.core.seq_QMARK_.call(null,map__37733))?cljs.core.apply.call(null,cljs.core.hash_map,map__37733):map__37733);var m = map__37733__$1;var test_env = cljs.core.get.call(null,map__37733__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),(function (p__37734){var map__37735 = p__37734;var map__37735__$1 = ((cljs.core.seq_QMARK_.call(null,map__37735))?cljs.core.apply.call(null,cljs.core.hash_map,map__37735):map__37735);var m = map__37735__$1;var test_env = cljs.core.get.call(null,map__37735__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
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
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__37736){
var ns_sym = cljs.core.first(arglist__37736);
arglist__37736 = cljs.core.next(arglist__37736);
var fixture_type = cljs.core.first(arglist__37736);
var fixture_fns = cljs.core.rest(arglist__37736);
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
return (function (env){var temp__4386__auto__ = (function (){var and__11486__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(env));if(and__11486__auto__)
{return cljs.core.first.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(env));
} else
{return and__11486__auto__;
}
})();if(cljs.core.truth_(temp__4386__auto__))
{var vec__37738 = temp__4386__auto__;var name = cljs.core.nth.call(null,vec__37738,(0),null);var testfn = cljs.core.nth.call(null,vec__37738,(1),null);cljs.core.reset_BANG_.call(null,next_test,testfn);
var ns_37739 = cljs.core.namespace.call(null,name);if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,async_test_env)),ns_37739))
{} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_37739,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"async","async",1050769601),true], null));
cljs.core.alter_meta_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_37739);
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
cemerick.cljs.test.squelch_internals = (function squelch_internals(test_env){var G__37744 = test_env;cljs.core.swap_BANG_.call(null,G__37744,((function (G__37744){
return (function (p1__37740_SHARP_){return cljs.core.reduce.call(null,((function (G__37744){
return (function (env,p__37745){var vec__37746 = p__37745;var k = cljs.core.nth.call(null,vec__37746,(0),null);var v = cljs.core.nth.call(null,vec__37746,(1),null);if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,k),cljs.core.namespace.call(null,new cljs.core.Keyword("cemerick.cljs.test","foo","cemerick.cljs.test/foo",-1669146357))))
{return env;
} else
{return cljs.core.assoc.call(null,env,k,v);
}
});})(G__37744))
,cljs.core.PersistentArrayMap.EMPTY,p1__37740_SHARP_);
});})(G__37744))
);
return G__37744;
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
var done_STAR___1 = (function (p__37748){var map__37752 = p__37748;var map__37752__$1 = ((cljs.core.seq_QMARK_.call(null,map__37752))?cljs.core.apply.call(null,cljs.core.hash_map,map__37752):map__37752);var test_ctx = map__37752__$1;var test_name = cljs.core.get.call(null,map__37752__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var async_test_env = cljs.core.get.call(null,map__37752__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
var first_call_QMARK_ = cljs.core.atom.call(null,false);cljs.core.swap_BANG_.call(null,async_test_env,((function (first_call_QMARK_,map__37752,map__37752__$1,test_ctx,test_name,async_test_env){
return (function (env){cljs.core.reset_BANG_.call(null,first_call_QMARK_,cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558).cljs$core$IFn$_invoke$arity$1(env),test_name));
return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.dissoc,test_name);
});})(first_call_QMARK_,map__37752,map__37752__$1,test_ctx,test_name,async_test_env))
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
var done_STAR___2 = (function (p__37747,error){var map__37751 = p__37747;var map__37751__$1 = ((cljs.core.seq_QMARK_.call(null,map__37751))?cljs.core.apply.call(null,cljs.core.hash_map,map__37751):map__37751);var test_ctx = map__37751__$1;var test_name = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
cemerick.cljs.test.do_report.call(null,cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),error], null),test_ctx)));
return done_STAR_.call(null,test_ctx);
});
done_STAR_ = function(p__37747,error){
switch(arguments.length){
case 1:
return done_STAR___1.call(this,p__37747);
case 2:
return done_STAR___2.call(this,p__37747,error);
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
var test_function__2 = (function (test_env,v){var entry_point_QMARK___13879__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_37756 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
if(cljs.core.fn_QMARK_.call(null,v))
{} else
{throw (new Error(("Assert failed: test-var must be passed the function to be tested (not a symbol naming it)\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))));
}
var map__37757_37759 = cljs.core.meta.call(null,v);var map__37757_37760__$1 = ((cljs.core.seq_QMARK_.call(null,map__37757_37759))?cljs.core.apply.call(null,cljs.core.hash_map,map__37757_37759):map__37757_37759);var t_37761 = cljs.core.get.call(null,map__37757_37760__$1,new cljs.core.Keyword(null,"test","test",577538877));var test_name_37762 = cljs.core.get.call(null,map__37757_37760__$1,new cljs.core.Keyword(null,"name","name",1843675177));var async_QMARK__37763 = cljs.core.get.call(null,map__37757_37760__$1,new cljs.core.Keyword(null,"async","async",1050769601));if(cljs.core.truth_(t_37761))
{if(cljs.core.truth_(async_QMARK__37763))
{cemerick.cljs.test.schedule_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),test_name_37762,t_37761);
} else
{try{cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.conj,(function (){var or__11498__auto__ = test_name_37762;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_37762], null));
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"test","test",577538877));
try{t_37761.call(null,(new cemerick.cljs.test.TestContext(test_env,test_name_37762)));
}catch (e37758){if((e37758 instanceof Error))
{var e_37764 = e37758;cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_37762,new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),e_37764], null));
} else
{throw e37758;

}
}cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_37762], null));
}finally {cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.pop);
}}
} else
{}
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___13879__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_37756;
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
var test_all_vars__2 = (function (test_env,ns_sym){var entry_point_QMARK___13879__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_37773 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var tests_37778 = cljs.core.filter.call(null,((function (_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__){
return (function (p1__37765_SHARP_){return new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__37765_SHARP_));
});})(_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__))
,cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests),ns_sym)));var once_fixture_fn_37779 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));var each_fixture_fn_37780 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));once_fixture_fn_37779.call(null,((function (once_fixture_fn_37779,each_fixture_fn_37780,tests_37778,_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__){
return (function (){var seq__37774 = cljs.core.seq.call(null,cljs.core.remove.call(null,cemerick.cljs.test.async_test_QMARK_,tests_37778));var chunk__37775 = null;var count__37776 = (0);var i__37777 = (0);while(true){
if((i__37777 < count__37776))
{var v = cljs.core._nth.call(null,chunk__37775,i__37777);each_fixture_fn_37780.call(null,((function (seq__37774,chunk__37775,count__37776,i__37777,v,once_fixture_fn_37779,each_fixture_fn_37780,tests_37778,_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__37774,chunk__37775,count__37776,i__37777,v,once_fixture_fn_37779,each_fixture_fn_37780,tests_37778,_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__))
);
{
var G__37781 = seq__37774;
var G__37782 = chunk__37775;
var G__37783 = count__37776;
var G__37784 = (i__37777 + (1));
seq__37774 = G__37781;
chunk__37775 = G__37782;
count__37776 = G__37783;
i__37777 = G__37784;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__37774);if(temp__4388__auto__)
{var seq__37774__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37774__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__37774__$1);{
var G__37785 = cljs.core.chunk_rest.call(null,seq__37774__$1);
var G__37786 = c__12268__auto__;
var G__37787 = cljs.core.count.call(null,c__12268__auto__);
var G__37788 = (0);
seq__37774 = G__37785;
chunk__37775 = G__37786;
count__37776 = G__37787;
i__37777 = G__37788;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__37774__$1);each_fixture_fn_37780.call(null,((function (seq__37774,chunk__37775,count__37776,i__37777,v,seq__37774__$1,temp__4388__auto__,once_fixture_fn_37779,each_fixture_fn_37780,tests_37778,_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__37774,chunk__37775,count__37776,i__37777,v,seq__37774__$1,temp__4388__auto__,once_fixture_fn_37779,each_fixture_fn_37780,tests_37778,_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__))
);
{
var G__37789 = cljs.core.next.call(null,seq__37774__$1);
var G__37790 = null;
var G__37791 = (0);
var G__37792 = (0);
seq__37774 = G__37789;
chunk__37775 = G__37790;
count__37776 = G__37791;
i__37777 = G__37792;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(once_fixture_fn_37779,each_fixture_fn_37780,tests_37778,_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__))
);
cljs.core.reduce.call(null,((function (tests_37778,_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__){
return (function (p1__37766_SHARP_,p2__37767_SHARP_){return cljs.core.apply.call(null,cemerick.cljs.test.schedule_async_test,p1__37766_SHARP_,p2__37767_SHARP_);
});})(tests_37778,_STAR_entry_point_STAR_37773,entry_point_QMARK___13879__auto__))
,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"test","test",577538877)),cljs.core.meta),cljs.core.filter.call(null,cemerick.cljs.test.async_test_QMARK_,tests_37778)));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___13879__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_37773;
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
var test_ns__2 = (function (test_env,ns_sym){var entry_point_QMARK___13879__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_37794 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));
var temp__4386__auto___37795 = cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks),ns_sym);if(cljs.core.truth_(temp__4386__auto___37795))
{var test_hook_37796 = temp__4386__auto___37795;test_hook_37796.call(null,test_env);
} else
{cemerick.cljs.test.test_all_vars.call(null,test_env,ns_sym);
}
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___13879__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_37794;
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
var run_tests_STAR___delegate = function (namespaces){var vec__37803 = (((cljs.core.first.call(null,namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons.call(null,cemerick.cljs.test.init_test_environment.call(null),namespaces));var test_env = cljs.core.nth.call(null,vec__37803,(0),null);var namespaces__$1 = cljs.core.nthnext.call(null,vec__37803,(1));var entry_point_QMARK___13879__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_37804 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var seq__37805_37809 = cljs.core.seq.call(null,cljs.core.distinct.call(null,namespaces__$1));var chunk__37806_37810 = null;var count__37807_37811 = (0);var i__37808_37812 = (0);while(true){
if((i__37808_37812 < count__37807_37811))
{var ns_37813 = cljs.core._nth.call(null,chunk__37806_37810,i__37808_37812);cemerick.cljs.test.test_ns.call(null,test_env,ns_37813);
{
var G__37814 = seq__37805_37809;
var G__37815 = chunk__37806_37810;
var G__37816 = count__37807_37811;
var G__37817 = (i__37808_37812 + (1));
seq__37805_37809 = G__37814;
chunk__37806_37810 = G__37815;
count__37807_37811 = G__37816;
i__37808_37812 = G__37817;
continue;
}
} else
{var temp__4388__auto___37818 = cljs.core.seq.call(null,seq__37805_37809);if(temp__4388__auto___37818)
{var seq__37805_37819__$1 = temp__4388__auto___37818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37805_37819__$1))
{var c__12268__auto___37820 = cljs.core.chunk_first.call(null,seq__37805_37819__$1);{
var G__37821 = cljs.core.chunk_rest.call(null,seq__37805_37819__$1);
var G__37822 = c__12268__auto___37820;
var G__37823 = cljs.core.count.call(null,c__12268__auto___37820);
var G__37824 = (0);
seq__37805_37809 = G__37821;
chunk__37806_37810 = G__37822;
count__37807_37811 = G__37823;
i__37808_37812 = G__37824;
continue;
}
} else
{var ns_37825 = cljs.core.first.call(null,seq__37805_37819__$1);cemerick.cljs.test.test_ns.call(null,test_env,ns_37825);
{
var G__37826 = cljs.core.next.call(null,seq__37805_37819__$1);
var G__37827 = null;
var G__37828 = (0);
var G__37829 = (0);
seq__37805_37809 = G__37826;
chunk__37806_37810 = G__37827;
count__37807_37811 = G__37828;
i__37808_37812 = G__37829;
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
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___13879__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_37804;
}};
var run_tests_STAR_ = function (var_args){
var namespaces = null;if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__37830){
var namespaces = cljs.core.seq(arglist__37830);
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
var run_all_tests__1 = (function (re){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.call(null,(function (p1__37831_SHARP_){return cljs.core.re_matches.call(null,re,cljs.core.name.call(null,p1__37831_SHARP_));
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
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(test_env){var map__37833 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__37833__$1 = ((cljs.core.seq_QMARK_.call(null,map__37833))?cljs.core.apply.call(null,cljs.core.hash_map,map__37833):map__37833);var async = cljs.core.get.call(null,map__37833__$1,new cljs.core.Keyword(null,"async","async",1050769601));var error = cljs.core.get.call(null,map__37833__$1,new cljs.core.Keyword(null,"error","error",-978969032));var fail = cljs.core.get.call(null,map__37833__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));var and__11486__auto__ = cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env);if(cljs.core.truth_(and__11486__auto__))
{var and__11486__auto____$1 = ((function (){var or__11498__auto__ = fail;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return (0);
}
})() === (0));if(and__11486__auto____$1)
{var and__11486__auto____$2 = ((function (){var or__11498__auto__ = error;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return (0);
}
})() === (0));if(and__11486__auto____$2)
{var or__11498__auto__ = (async == null);if(or__11498__auto__)
{return or__11498__auto__;
} else
{return successful_QMARK_.call(null,async);
}
} else
{return and__11486__auto____$2;
}
} else
{return and__11486__auto____$1;
}
} else
{return and__11486__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);

//# sourceMappingURL=test.js.map