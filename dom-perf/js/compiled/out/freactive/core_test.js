// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.core_test');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('cemerick.cljs.test');
goog.require('cljs.reader');
goog.require('freactive.core');
freactive.core_test.rx_test1 = (function rx_test1(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.rx_test1);
});
freactive.core_test.rx_test1 = cljs.core.with_meta.call(null,freactive.core_test.rx_test1,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function rx_test1_test(test_ctx__13842__auto__){var _test_ctx = test_ctx__13842__auto__;var async_QMARK___13757__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_36218 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto__)?null:_test_ctx);
try{var r0 = freactive.core.atom.call(null,(0));var r1 = freactive.core.rx_STAR_.call(null,((function (r0,_STAR_test_ctx_STAR_36218,_test_ctx,async_QMARK___13757__auto__){
return (function (){return (cljs.core.deref.call(null,r0) + (1));
});})(r0,_STAR_test_ctx_STAR_36218,_test_ctx,async_QMARK___13757__auto__))
,false);var _test_ctx_36226__$1 = _test_ctx;var async_QMARK___13757__auto___36227__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_36226__$1)));var _STAR_test_ctx_STAR_36220_36228 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto___36227__$1)?null:_test_ctx_36226__$1);
try{try{var values__13777__auto___36229 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,r1)),(1));var result__13778__auto___36230 = cljs.core.apply.call(null,cljs.core._EQ_,values__13777__auto___36229);if((result__13778__auto___36230 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13778__auto___36230))
{cemerick.cljs.test.do_report.call(null,_test_ctx_36226__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13777__auto___36229),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_36226__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13777__auto___36229)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e36222){if((e36222 instanceof Error))
{var t__13814__auto___36231 = e36222;cemerick.cljs.test.do_report.call(null,_test_ctx_36226__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto___36231,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36222;

}
}}catch (e36221){if((e36221 instanceof Error))
{var e__13758__auto___36232 = e36221;if(cljs.core.truth_(async_QMARK___13757__auto___36227__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_36226__$1,e__13758__auto___36232);
} else
{throw e__13758__auto___36232;
}
} else
{throw e36221;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36220_36228;
}cljs.core.swap_BANG_.call(null,r0,cljs.core.inc);
var _test_ctx__$1 = _test_ctx;var async_QMARK___13757__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_36223 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto____$1)?null:_test_ctx__$1);
try{try{var values__13777__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,r1)),(2));var result__13778__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13777__auto__);if((result__13778__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13778__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13777__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13778__auto__;
}catch (e36225){if((e36225 instanceof Error))
{var t__13814__auto__ = e36225;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36225;

}
}}catch (e36224){if((e36224 instanceof Error))
{var e__13758__auto__ = e36224;if(cljs.core.truth_(async_QMARK___13757__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13758__auto__);
} else
{throw e__13758__auto__;
}
} else
{throw e36224;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36223;
}}catch (e36219){if((e36219 instanceof Error))
{var e__13758__auto__ = e36219;if(cljs.core.truth_(async_QMARK___13757__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13758__auto__);
} else
{throw e__13758__auto__;
}
} else
{throw e36219;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36218;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),freactive.core_test.rx_test1);
freactive.core_test.cursor_test = (function cursor_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.cursor_test);
});
freactive.core_test.cursor_test = cljs.core.with_meta.call(null,freactive.core_test.cursor_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function cursor_test_test(test_ctx__13842__auto__){var _test_ctx = test_ctx__13842__auto__;var async_QMARK___13757__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_36250 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null));var b = freactive.core.cursor.call(null,a,new cljs.core.Keyword(null,"a","a",-2123407586));var c = freactive.core.rx_STAR_.call(null,((function (a,b,_STAR_test_ctx_STAR_36250,_test_ctx,async_QMARK___13757__auto__){
return (function (){return (new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)) + (1));
});})(a,b,_STAR_test_ctx_STAR_36250,_test_ctx,async_QMARK___13757__auto__))
,false);var _test_ctx_36267__$1 = _test_ctx;var async_QMARK___13757__auto___36268__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_36267__$1)));var _STAR_test_ctx_STAR_36252_36269 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto___36268__$1)?null:_test_ctx_36267__$1);
try{try{var values__13777__auto___36270 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13778__auto___36271 = cljs.core.apply.call(null,cljs.core._EQ_,values__13777__auto___36270);if((result__13778__auto___36271 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13778__auto___36271))
{cemerick.cljs.test.do_report.call(null,_test_ctx_36267__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13777__auto___36270),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_36267__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13777__auto___36270)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e36254){if((e36254 instanceof Error))
{var t__13814__auto___36272 = e36254;cemerick.cljs.test.do_report.call(null,_test_ctx_36267__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto___36272,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36254;

}
}}catch (e36253){if((e36253 instanceof Error))
{var e__13758__auto___36273 = e36253;if(cljs.core.truth_(async_QMARK___13757__auto___36268__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_36267__$1,e__13758__auto___36273);
} else
{throw e__13758__auto___36273;
}
} else
{throw e36253;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36252_36269;
}cljs.core.swap_BANG_.call(null,a,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_36274__$1 = _test_ctx;var async_QMARK___13757__auto___36275__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_36274__$1)));var _STAR_test_ctx_STAR_36255_36276 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto___36275__$1)?null:_test_ctx_36274__$1);
try{try{var values__13777__auto___36277 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13778__auto___36278 = cljs.core.apply.call(null,cljs.core._EQ_,values__13777__auto___36277);if((result__13778__auto___36278 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13778__auto___36278))
{cemerick.cljs.test.do_report.call(null,_test_ctx_36274__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13777__auto___36277),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_36274__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13777__auto___36277)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e36257){if((e36257 instanceof Error))
{var t__13814__auto___36279 = e36257;cemerick.cljs.test.do_report.call(null,_test_ctx_36274__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto___36279,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36257;

}
}}catch (e36256){if((e36256 instanceof Error))
{var e__13758__auto___36280 = e36256;if(cljs.core.truth_(async_QMARK___13757__auto___36275__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_36274__$1,e__13758__auto___36280);
} else
{throw e__13758__auto___36280;
}
} else
{throw e36256;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36255_36276;
}var _test_ctx_36281__$1 = _test_ctx;var async_QMARK___13757__auto___36282__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_36281__$1)));var _STAR_test_ctx_STAR_36258_36283 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto___36282__$1)?null:_test_ctx_36281__$1);
try{try{var values__13777__auto___36284 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),cljs.core.deref.call(null,c));var result__13778__auto___36285 = cljs.core.apply.call(null,cljs.core._EQ_,values__13777__auto___36284);if((result__13778__auto___36285 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13778__auto___36285))
{cemerick.cljs.test.do_report.call(null,_test_ctx_36281__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13777__auto___36284),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_36281__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13777__auto___36284)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e36260){if((e36260 instanceof Error))
{var t__13814__auto___36286 = e36260;cemerick.cljs.test.do_report.call(null,_test_ctx_36281__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto___36286,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36260;

}
}}catch (e36259){if((e36259 instanceof Error))
{var e__13758__auto___36287 = e36259;if(cljs.core.truth_(async_QMARK___13757__auto___36282__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_36281__$1,e__13758__auto___36287);
} else
{throw e__13758__auto___36287;
}
} else
{throw e36259;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36258_36283;
}cljs.core.swap_BANG_.call(null,b,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_36288__$1 = _test_ctx;var async_QMARK___13757__auto___36289__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_36288__$1)));var _STAR_test_ctx_STAR_36261_36290 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto___36289__$1)?null:_test_ctx_36288__$1);
try{try{var value__13780__auto___36291 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,b),(4));if((value__13780__auto___36291 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
cemerick.cljs.test.do_report.call(null,_test_ctx_36288__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(value__13780__auto___36291)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),value__13780__auto___36291,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e36263){if((e36263 instanceof Error))
{var t__13814__auto___36292 = e36263;cemerick.cljs.test.do_report.call(null,_test_ctx_36288__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto___36292,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36263;

}
}}catch (e36262){if((e36262 instanceof Error))
{var e__13758__auto___36293 = e36262;if(cljs.core.truth_(async_QMARK___13757__auto___36289__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_36288__$1,e__13758__auto___36293);
} else
{throw e__13758__auto___36293;
}
} else
{throw e36262;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36261_36290;
}var _test_ctx__$1 = _test_ctx;var async_QMARK___13757__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_36264 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto____$1)?null:_test_ctx__$1);
try{try{var values__13777__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),cljs.core.deref.call(null,c));var result__13778__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13777__auto__);if((result__13778__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13778__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13777__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13778__auto__;
}catch (e36266){if((e36266 instanceof Error))
{var t__13814__auto__ = e36266;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36266;

}
}}catch (e36265){if((e36265 instanceof Error))
{var e__13758__auto__ = e36265;if(cljs.core.truth_(async_QMARK___13757__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13758__auto__);
} else
{throw e__13758__auto__;
}
} else
{throw e36265;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36264;
}}catch (e36251){if((e36251 instanceof Error))
{var e__13758__auto__ = e36251;if(cljs.core.truth_(async_QMARK___13757__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13758__auto__);
} else
{throw e__13758__auto__;
}
} else
{throw e36251;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36250;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),freactive.core_test.cursor_test);
freactive.core_test.lens_test = (function lens_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.lens_test);
});
freactive.core_test.lens_test = cljs.core.with_meta.call(null,freactive.core_test.lens_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function lens_test_test(test_ctx__13842__auto__){var _test_ctx = test_ctx__13842__auto__;var async_QMARK___13757__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_36305 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(0)], null));var l = freactive.core.cursor.call(null,a,cljs.core.pr_str,((function (a,_STAR_test_ctx_STAR_36305,_test_ctx,async_QMARK___13757__auto__){
return (function (_,new_value){return cljs.reader.read_string.call(null,new_value);
});})(a,_STAR_test_ctx_STAR_36305,_test_ctx,async_QMARK___13757__auto__))
);var _test_ctx_36316__$1 = _test_ctx;var async_QMARK___13757__auto___36317__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_36316__$1)));var _STAR_test_ctx_STAR_36307_36318 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto___36317__$1)?null:_test_ctx_36316__$1);
try{try{var values__13777__auto___36319 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"{:a 0}"),cljs.core.deref.call(null,l));var result__13778__auto___36320 = cljs.core.apply.call(null,cljs.core._EQ_,values__13777__auto___36319);if((result__13778__auto___36320 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13778__auto___36320))
{cemerick.cljs.test.do_report.call(null,_test_ctx_36316__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13777__auto___36319),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_36316__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13777__auto___36319)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e36309){if((e36309 instanceof Error))
{var t__13814__auto___36321 = e36309;cemerick.cljs.test.do_report.call(null,_test_ctx_36316__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto___36321,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36309;

}
}}catch (e36308){if((e36308 instanceof Error))
{var e__13758__auto___36322 = e36308;if(cljs.core.truth_(async_QMARK___13757__auto___36317__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_36316__$1,e__13758__auto___36322);
} else
{throw e__13758__auto___36322;
}
} else
{throw e36308;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36307_36318;
}cljs.core.reset_BANG_.call(null,l,"{:b 1}");
var _test_ctx_36323__$1 = _test_ctx;var async_QMARK___13757__auto___36324__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_36323__$1)));var _STAR_test_ctx_STAR_36310_36325 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto___36324__$1)?null:_test_ctx_36323__$1);
try{try{var values__13777__auto___36326 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),cljs.core.deref.call(null,a));var result__13778__auto___36327 = cljs.core.apply.call(null,cljs.core._EQ_,values__13777__auto___36326);if((result__13778__auto___36327 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13778__auto___36327))
{cemerick.cljs.test.do_report.call(null,_test_ctx_36323__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13777__auto___36326),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_36323__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13777__auto___36326)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e36312){if((e36312 instanceof Error))
{var t__13814__auto___36328 = e36312;cemerick.cljs.test.do_report.call(null,_test_ctx_36323__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto___36328,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36312;

}
}}catch (e36311){if((e36311 instanceof Error))
{var e__13758__auto___36329 = e36311;if(cljs.core.truth_(async_QMARK___13757__auto___36324__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_36323__$1,e__13758__auto___36329);
} else
{throw e__13758__auto___36329;
}
} else
{throw e36311;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36310_36325;
}cljs.core.reset_BANG_.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null));
var _test_ctx__$1 = _test_ctx;var async_QMARK___13757__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_36313 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13757__auto____$1)?null:_test_ctx__$1);
try{try{var values__13777__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"{:c 2}"),cljs.core.deref.call(null,l));var result__13778__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13777__auto__);if((result__13778__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13778__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13777__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13778__auto__;
}catch (e36315){if((e36315 instanceof Error))
{var t__13814__auto__ = e36315;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13814__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e36315;

}
}}catch (e36314){if((e36314 instanceof Error))
{var e__13758__auto__ = e36314;if(cljs.core.truth_(async_QMARK___13757__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13758__auto__);
} else
{throw e__13758__auto__;
}
} else
{throw e36314;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36313;
}}catch (e36306){if((e36306 instanceof Error))
{var e__13758__auto__ = e36306;if(cljs.core.truth_(async_QMARK___13757__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13758__auto__);
} else
{throw e__13758__auto__;
}
} else
{throw e36306;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_36305;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),freactive.core_test.lens_test);

//# sourceMappingURL=core_test.js.map