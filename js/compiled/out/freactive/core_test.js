// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.core_test');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('cemerick.cljs.test');
goog.require('cljs.reader');
goog.require('freactive.core');
freactive.core_test.rx_test1 = (function rx_test1(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.rx_test1);
});
freactive.core_test.rx_test1 = cljs.core.with_meta.call(null,freactive.core_test.rx_test1,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function rx_test1_test(test_ctx__13354__auto__){var _test_ctx = test_ctx__13354__auto__;var async_QMARK___13269__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_131418 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto__)?null:_test_ctx);
try{var r0 = freactive.core.atom.call(null,(0));var r1 = freactive.core.rx_STAR_.call(null,((function (r0,_STAR_test_ctx_STAR_131418,_test_ctx,async_QMARK___13269__auto__){
return (function (){return (cljs.core.deref.call(null,r0) + (1));
});})(r0,_STAR_test_ctx_STAR_131418,_test_ctx,async_QMARK___13269__auto__))
,false);var _test_ctx_131426__$1 = _test_ctx;var async_QMARK___13269__auto___131427__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_131426__$1)));var _STAR_test_ctx_STAR_131420_131428 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___131427__$1)?null:_test_ctx_131426__$1);
try{try{var values__13289__auto___131429 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,r1)),(1));var result__13290__auto___131430 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___131429);if((result__13290__auto___131430 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___131430))
{cemerick.cljs.test.do_report.call(null,_test_ctx_131426__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___131429),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_131426__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___131429)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e131422){if((e131422 instanceof Error))
{var t__13326__auto___131431 = e131422;cemerick.cljs.test.do_report.call(null,_test_ctx_131426__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___131431,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131422;

}
}}catch (e131421){if((e131421 instanceof Error))
{var e__13270__auto___131432 = e131421;if(cljs.core.truth_(async_QMARK___13269__auto___131427__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_131426__$1,e__13270__auto___131432);
} else
{throw e__13270__auto___131432;
}
} else
{throw e131421;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131420_131428;
}cljs.core.swap_BANG_.call(null,r0,cljs.core.inc);
var _test_ctx__$1 = _test_ctx;var async_QMARK___13269__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_131423 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto____$1)?null:_test_ctx__$1);
try{try{var values__13289__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,r1)),(2));var result__13290__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto__);if((result__13290__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13290__auto__;
}catch (e131425){if((e131425 instanceof Error))
{var t__13326__auto__ = e131425;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131425;

}
}}catch (e131424){if((e131424 instanceof Error))
{var e__13270__auto__ = e131424;if(cljs.core.truth_(async_QMARK___13269__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e131424;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131423;
}}catch (e131419){if((e131419 instanceof Error))
{var e__13270__auto__ = e131419;if(cljs.core.truth_(async_QMARK___13269__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e131419;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131418;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),freactive.core_test.rx_test1);
freactive.core_test.cursor_test = (function cursor_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.cursor_test);
});
freactive.core_test.cursor_test = cljs.core.with_meta.call(null,freactive.core_test.cursor_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function cursor_test_test(test_ctx__13354__auto__){var _test_ctx = test_ctx__13354__auto__;var async_QMARK___13269__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_131450 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null));var b = freactive.core.cursor.call(null,a,new cljs.core.Keyword(null,"a","a",-2123407586));var c = freactive.core.rx_STAR_.call(null,((function (a,b,_STAR_test_ctx_STAR_131450,_test_ctx,async_QMARK___13269__auto__){
return (function (){return (new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)) + (1));
});})(a,b,_STAR_test_ctx_STAR_131450,_test_ctx,async_QMARK___13269__auto__))
,false);var _test_ctx_131467__$1 = _test_ctx;var async_QMARK___13269__auto___131468__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_131467__$1)));var _STAR_test_ctx_STAR_131452_131469 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___131468__$1)?null:_test_ctx_131467__$1);
try{try{var values__13289__auto___131470 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13290__auto___131471 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___131470);if((result__13290__auto___131471 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___131471))
{cemerick.cljs.test.do_report.call(null,_test_ctx_131467__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___131470),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_131467__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___131470)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e131454){if((e131454 instanceof Error))
{var t__13326__auto___131472 = e131454;cemerick.cljs.test.do_report.call(null,_test_ctx_131467__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___131472,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131454;

}
}}catch (e131453){if((e131453 instanceof Error))
{var e__13270__auto___131473 = e131453;if(cljs.core.truth_(async_QMARK___13269__auto___131468__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_131467__$1,e__13270__auto___131473);
} else
{throw e__13270__auto___131473;
}
} else
{throw e131453;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131452_131469;
}cljs.core.swap_BANG_.call(null,a,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_131474__$1 = _test_ctx;var async_QMARK___13269__auto___131475__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_131474__$1)));var _STAR_test_ctx_STAR_131455_131476 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___131475__$1)?null:_test_ctx_131474__$1);
try{try{var values__13289__auto___131477 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13290__auto___131478 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___131477);if((result__13290__auto___131478 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___131478))
{cemerick.cljs.test.do_report.call(null,_test_ctx_131474__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___131477),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_131474__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___131477)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e131457){if((e131457 instanceof Error))
{var t__13326__auto___131479 = e131457;cemerick.cljs.test.do_report.call(null,_test_ctx_131474__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___131479,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131457;

}
}}catch (e131456){if((e131456 instanceof Error))
{var e__13270__auto___131480 = e131456;if(cljs.core.truth_(async_QMARK___13269__auto___131475__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_131474__$1,e__13270__auto___131480);
} else
{throw e__13270__auto___131480;
}
} else
{throw e131456;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131455_131476;
}var _test_ctx_131481__$1 = _test_ctx;var async_QMARK___13269__auto___131482__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_131481__$1)));var _STAR_test_ctx_STAR_131458_131483 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___131482__$1)?null:_test_ctx_131481__$1);
try{try{var values__13289__auto___131484 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),cljs.core.deref.call(null,c));var result__13290__auto___131485 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___131484);if((result__13290__auto___131485 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___131485))
{cemerick.cljs.test.do_report.call(null,_test_ctx_131481__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___131484),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_131481__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___131484)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e131460){if((e131460 instanceof Error))
{var t__13326__auto___131486 = e131460;cemerick.cljs.test.do_report.call(null,_test_ctx_131481__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___131486,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131460;

}
}}catch (e131459){if((e131459 instanceof Error))
{var e__13270__auto___131487 = e131459;if(cljs.core.truth_(async_QMARK___13269__auto___131482__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_131481__$1,e__13270__auto___131487);
} else
{throw e__13270__auto___131487;
}
} else
{throw e131459;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131458_131483;
}cljs.core.swap_BANG_.call(null,b,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_131488__$1 = _test_ctx;var async_QMARK___13269__auto___131489__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_131488__$1)));var _STAR_test_ctx_STAR_131461_131490 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___131489__$1)?null:_test_ctx_131488__$1);
try{try{var value__13292__auto___131491 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,b),(4));if((value__13292__auto___131491 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
cemerick.cljs.test.do_report.call(null,_test_ctx_131488__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(value__13292__auto___131491)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),value__13292__auto___131491,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e131463){if((e131463 instanceof Error))
{var t__13326__auto___131492 = e131463;cemerick.cljs.test.do_report.call(null,_test_ctx_131488__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___131492,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131463;

}
}}catch (e131462){if((e131462 instanceof Error))
{var e__13270__auto___131493 = e131462;if(cljs.core.truth_(async_QMARK___13269__auto___131489__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_131488__$1,e__13270__auto___131493);
} else
{throw e__13270__auto___131493;
}
} else
{throw e131462;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131461_131490;
}var _test_ctx__$1 = _test_ctx;var async_QMARK___13269__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_131464 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto____$1)?null:_test_ctx__$1);
try{try{var values__13289__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),cljs.core.deref.call(null,c));var result__13290__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto__);if((result__13290__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13290__auto__;
}catch (e131466){if((e131466 instanceof Error))
{var t__13326__auto__ = e131466;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131466;

}
}}catch (e131465){if((e131465 instanceof Error))
{var e__13270__auto__ = e131465;if(cljs.core.truth_(async_QMARK___13269__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e131465;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131464;
}}catch (e131451){if((e131451 instanceof Error))
{var e__13270__auto__ = e131451;if(cljs.core.truth_(async_QMARK___13269__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e131451;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131450;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),freactive.core_test.cursor_test);
freactive.core_test.lens_test = (function lens_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.lens_test);
});
freactive.core_test.lens_test = cljs.core.with_meta.call(null,freactive.core_test.lens_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function lens_test_test(test_ctx__13354__auto__){var _test_ctx = test_ctx__13354__auto__;var async_QMARK___13269__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_131505 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(0)], null));var l = freactive.core.cursor.call(null,a,cljs.core.pr_str,((function (a,_STAR_test_ctx_STAR_131505,_test_ctx,async_QMARK___13269__auto__){
return (function (_,new_value){return cljs.reader.read_string.call(null,new_value);
});})(a,_STAR_test_ctx_STAR_131505,_test_ctx,async_QMARK___13269__auto__))
);var _test_ctx_131516__$1 = _test_ctx;var async_QMARK___13269__auto___131517__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_131516__$1)));var _STAR_test_ctx_STAR_131507_131518 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___131517__$1)?null:_test_ctx_131516__$1);
try{try{var values__13289__auto___131519 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"{:a 0}"),cljs.core.deref.call(null,l));var result__13290__auto___131520 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___131519);if((result__13290__auto___131520 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___131520))
{cemerick.cljs.test.do_report.call(null,_test_ctx_131516__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___131519),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_131516__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___131519)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e131509){if((e131509 instanceof Error))
{var t__13326__auto___131521 = e131509;cemerick.cljs.test.do_report.call(null,_test_ctx_131516__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___131521,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131509;

}
}}catch (e131508){if((e131508 instanceof Error))
{var e__13270__auto___131522 = e131508;if(cljs.core.truth_(async_QMARK___13269__auto___131517__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_131516__$1,e__13270__auto___131522);
} else
{throw e__13270__auto___131522;
}
} else
{throw e131508;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131507_131518;
}cljs.core.reset_BANG_.call(null,l,"{:b 1}");
var _test_ctx_131523__$1 = _test_ctx;var async_QMARK___13269__auto___131524__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_131523__$1)));var _STAR_test_ctx_STAR_131510_131525 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___131524__$1)?null:_test_ctx_131523__$1);
try{try{var values__13289__auto___131526 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),cljs.core.deref.call(null,a));var result__13290__auto___131527 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___131526);if((result__13290__auto___131527 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___131527))
{cemerick.cljs.test.do_report.call(null,_test_ctx_131523__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___131526),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_131523__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___131526)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e131512){if((e131512 instanceof Error))
{var t__13326__auto___131528 = e131512;cemerick.cljs.test.do_report.call(null,_test_ctx_131523__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___131528,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131512;

}
}}catch (e131511){if((e131511 instanceof Error))
{var e__13270__auto___131529 = e131511;if(cljs.core.truth_(async_QMARK___13269__auto___131524__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_131523__$1,e__13270__auto___131529);
} else
{throw e__13270__auto___131529;
}
} else
{throw e131511;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131510_131525;
}cljs.core.reset_BANG_.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null));
var _test_ctx__$1 = _test_ctx;var async_QMARK___13269__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_131513 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto____$1)?null:_test_ctx__$1);
try{try{var values__13289__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"{:c 2}"),cljs.core.deref.call(null,l));var result__13290__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto__);if((result__13290__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13290__auto__;
}catch (e131515){if((e131515 instanceof Error))
{var t__13326__auto__ = e131515;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e131515;

}
}}catch (e131514){if((e131514 instanceof Error))
{var e__13270__auto__ = e131514;if(cljs.core.truth_(async_QMARK___13269__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e131514;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131513;
}}catch (e131506){if((e131506 instanceof Error))
{var e__13270__auto__ = e131506;if(cljs.core.truth_(async_QMARK___13269__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e131506;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_131505;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),freactive.core_test.lens_test);

//# sourceMappingURL=core_test.js.map