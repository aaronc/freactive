// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.core_test');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('cemerick.cljs.test');
goog.require('cljs.reader');
goog.require('freactive.core');
freactive.core_test.rx_test1 = (function rx_test1(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.rx_test1);
});
freactive.core_test.rx_test1 = cljs.core.with_meta.call(null,freactive.core_test.rx_test1,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function rx_test1_test(test_ctx__13354__auto__){var _test_ctx = test_ctx__13354__auto__;var async_QMARK___13269__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_111947 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto__)?null:_test_ctx);
try{var r0 = freactive.core.atom.call(null,(0));var r1 = freactive.core.rx_STAR_.call(null,((function (r0,_STAR_test_ctx_STAR_111947,_test_ctx,async_QMARK___13269__auto__){
return (function (){return (cljs.core.deref.call(null,r0) + (1));
});})(r0,_STAR_test_ctx_STAR_111947,_test_ctx,async_QMARK___13269__auto__))
,false);var _test_ctx_111955__$1 = _test_ctx;var async_QMARK___13269__auto___111956__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_111955__$1)));var _STAR_test_ctx_STAR_111949_111957 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___111956__$1)?null:_test_ctx_111955__$1);
try{try{var values__13289__auto___111958 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,r1)),(1));var result__13290__auto___111959 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___111958);if((result__13290__auto___111959 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___111959))
{cemerick.cljs.test.do_report.call(null,_test_ctx_111955__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___111958),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_111955__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___111958)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e111951){if((e111951 instanceof Error))
{var t__13326__auto___111960 = e111951;cemerick.cljs.test.do_report.call(null,_test_ctx_111955__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___111960,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e111951;

}
}}catch (e111950){if((e111950 instanceof Error))
{var e__13270__auto___111961 = e111950;if(cljs.core.truth_(async_QMARK___13269__auto___111956__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_111955__$1,e__13270__auto___111961);
} else
{throw e__13270__auto___111961;
}
} else
{throw e111950;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_111949_111957;
}cljs.core.swap_BANG_.call(null,r0,cljs.core.inc);
var _test_ctx__$1 = _test_ctx;var async_QMARK___13269__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_111952 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto____$1)?null:_test_ctx__$1);
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
}catch (e111954){if((e111954 instanceof Error))
{var t__13326__auto__ = e111954;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e111954;

}
}}catch (e111953){if((e111953 instanceof Error))
{var e__13270__auto__ = e111953;if(cljs.core.truth_(async_QMARK___13269__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e111953;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_111952;
}}catch (e111948){if((e111948 instanceof Error))
{var e__13270__auto__ = e111948;if(cljs.core.truth_(async_QMARK___13269__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e111948;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_111947;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),freactive.core_test.rx_test1);
freactive.core_test.cursor_test = (function cursor_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.cursor_test);
});
freactive.core_test.cursor_test = cljs.core.with_meta.call(null,freactive.core_test.cursor_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function cursor_test_test(test_ctx__13354__auto__){var _test_ctx = test_ctx__13354__auto__;var async_QMARK___13269__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_111979 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null));var b = freactive.core.cursor.call(null,a,new cljs.core.Keyword(null,"a","a",-2123407586));var c = freactive.core.rx_STAR_.call(null,((function (a,b,_STAR_test_ctx_STAR_111979,_test_ctx,async_QMARK___13269__auto__){
return (function (){return (new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)) + (1));
});})(a,b,_STAR_test_ctx_STAR_111979,_test_ctx,async_QMARK___13269__auto__))
,false);var _test_ctx_111996__$1 = _test_ctx;var async_QMARK___13269__auto___111997__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_111996__$1)));var _STAR_test_ctx_STAR_111981_111998 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___111997__$1)?null:_test_ctx_111996__$1);
try{try{var values__13289__auto___111999 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13290__auto___112000 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___111999);if((result__13290__auto___112000 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___112000))
{cemerick.cljs.test.do_report.call(null,_test_ctx_111996__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___111999),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_111996__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___111999)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e111983){if((e111983 instanceof Error))
{var t__13326__auto___112001 = e111983;cemerick.cljs.test.do_report.call(null,_test_ctx_111996__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___112001,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e111983;

}
}}catch (e111982){if((e111982 instanceof Error))
{var e__13270__auto___112002 = e111982;if(cljs.core.truth_(async_QMARK___13269__auto___111997__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_111996__$1,e__13270__auto___112002);
} else
{throw e__13270__auto___112002;
}
} else
{throw e111982;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_111981_111998;
}cljs.core.swap_BANG_.call(null,a,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_112003__$1 = _test_ctx;var async_QMARK___13269__auto___112004__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_112003__$1)));var _STAR_test_ctx_STAR_111984_112005 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___112004__$1)?null:_test_ctx_112003__$1);
try{try{var values__13289__auto___112006 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13290__auto___112007 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___112006);if((result__13290__auto___112007 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___112007))
{cemerick.cljs.test.do_report.call(null,_test_ctx_112003__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___112006),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_112003__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___112006)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e111986){if((e111986 instanceof Error))
{var t__13326__auto___112008 = e111986;cemerick.cljs.test.do_report.call(null,_test_ctx_112003__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___112008,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e111986;

}
}}catch (e111985){if((e111985 instanceof Error))
{var e__13270__auto___112009 = e111985;if(cljs.core.truth_(async_QMARK___13269__auto___112004__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_112003__$1,e__13270__auto___112009);
} else
{throw e__13270__auto___112009;
}
} else
{throw e111985;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_111984_112005;
}var _test_ctx_112010__$1 = _test_ctx;var async_QMARK___13269__auto___112011__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_112010__$1)));var _STAR_test_ctx_STAR_111987_112012 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___112011__$1)?null:_test_ctx_112010__$1);
try{try{var values__13289__auto___112013 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),cljs.core.deref.call(null,c));var result__13290__auto___112014 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___112013);if((result__13290__auto___112014 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___112014))
{cemerick.cljs.test.do_report.call(null,_test_ctx_112010__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___112013),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_112010__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___112013)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e111989){if((e111989 instanceof Error))
{var t__13326__auto___112015 = e111989;cemerick.cljs.test.do_report.call(null,_test_ctx_112010__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___112015,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e111989;

}
}}catch (e111988){if((e111988 instanceof Error))
{var e__13270__auto___112016 = e111988;if(cljs.core.truth_(async_QMARK___13269__auto___112011__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_112010__$1,e__13270__auto___112016);
} else
{throw e__13270__auto___112016;
}
} else
{throw e111988;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_111987_112012;
}cljs.core.swap_BANG_.call(null,b,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_112017__$1 = _test_ctx;var async_QMARK___13269__auto___112018__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_112017__$1)));var _STAR_test_ctx_STAR_111990_112019 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___112018__$1)?null:_test_ctx_112017__$1);
try{try{var value__13292__auto___112020 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,b),(4));if((value__13292__auto___112020 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
cemerick.cljs.test.do_report.call(null,_test_ctx_112017__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(value__13292__auto___112020)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),value__13292__auto___112020,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e111992){if((e111992 instanceof Error))
{var t__13326__auto___112021 = e111992;cemerick.cljs.test.do_report.call(null,_test_ctx_112017__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___112021,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e111992;

}
}}catch (e111991){if((e111991 instanceof Error))
{var e__13270__auto___112022 = e111991;if(cljs.core.truth_(async_QMARK___13269__auto___112018__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_112017__$1,e__13270__auto___112022);
} else
{throw e__13270__auto___112022;
}
} else
{throw e111991;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_111990_112019;
}var _test_ctx__$1 = _test_ctx;var async_QMARK___13269__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_111993 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto____$1)?null:_test_ctx__$1);
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
}catch (e111995){if((e111995 instanceof Error))
{var t__13326__auto__ = e111995;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e111995;

}
}}catch (e111994){if((e111994 instanceof Error))
{var e__13270__auto__ = e111994;if(cljs.core.truth_(async_QMARK___13269__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e111994;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_111993;
}}catch (e111980){if((e111980 instanceof Error))
{var e__13270__auto__ = e111980;if(cljs.core.truth_(async_QMARK___13269__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e111980;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_111979;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),freactive.core_test.cursor_test);
freactive.core_test.lens_test = (function lens_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.lens_test);
});
freactive.core_test.lens_test = cljs.core.with_meta.call(null,freactive.core_test.lens_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function lens_test_test(test_ctx__13354__auto__){var _test_ctx = test_ctx__13354__auto__;var async_QMARK___13269__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_112034 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(0)], null));var l = freactive.core.cursor.call(null,a,cljs.core.pr_str,((function (a,_STAR_test_ctx_STAR_112034,_test_ctx,async_QMARK___13269__auto__){
return (function (_,new_value){return cljs.reader.read_string.call(null,new_value);
});})(a,_STAR_test_ctx_STAR_112034,_test_ctx,async_QMARK___13269__auto__))
);var _test_ctx_112045__$1 = _test_ctx;var async_QMARK___13269__auto___112046__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_112045__$1)));var _STAR_test_ctx_STAR_112036_112047 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___112046__$1)?null:_test_ctx_112045__$1);
try{try{var values__13289__auto___112048 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"{:a 0}"),cljs.core.deref.call(null,l));var result__13290__auto___112049 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___112048);if((result__13290__auto___112049 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___112049))
{cemerick.cljs.test.do_report.call(null,_test_ctx_112045__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___112048),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_112045__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___112048)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e112038){if((e112038 instanceof Error))
{var t__13326__auto___112050 = e112038;cemerick.cljs.test.do_report.call(null,_test_ctx_112045__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___112050,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e112038;

}
}}catch (e112037){if((e112037 instanceof Error))
{var e__13270__auto___112051 = e112037;if(cljs.core.truth_(async_QMARK___13269__auto___112046__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_112045__$1,e__13270__auto___112051);
} else
{throw e__13270__auto___112051;
}
} else
{throw e112037;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_112036_112047;
}cljs.core.reset_BANG_.call(null,l,"{:b 1}");
var _test_ctx_112052__$1 = _test_ctx;var async_QMARK___13269__auto___112053__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_112052__$1)));var _STAR_test_ctx_STAR_112039_112054 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___112053__$1)?null:_test_ctx_112052__$1);
try{try{var values__13289__auto___112055 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),cljs.core.deref.call(null,a));var result__13290__auto___112056 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___112055);if((result__13290__auto___112056 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___112056))
{cemerick.cljs.test.do_report.call(null,_test_ctx_112052__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___112055),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_112052__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___112055)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e112041){if((e112041 instanceof Error))
{var t__13326__auto___112057 = e112041;cemerick.cljs.test.do_report.call(null,_test_ctx_112052__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___112057,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e112041;

}
}}catch (e112040){if((e112040 instanceof Error))
{var e__13270__auto___112058 = e112040;if(cljs.core.truth_(async_QMARK___13269__auto___112053__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_112052__$1,e__13270__auto___112058);
} else
{throw e__13270__auto___112058;
}
} else
{throw e112040;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_112039_112054;
}cljs.core.reset_BANG_.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null));
var _test_ctx__$1 = _test_ctx;var async_QMARK___13269__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_112042 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto____$1)?null:_test_ctx__$1);
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
}catch (e112044){if((e112044 instanceof Error))
{var t__13326__auto__ = e112044;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e112044;

}
}}catch (e112043){if((e112043 instanceof Error))
{var e__13270__auto__ = e112043;if(cljs.core.truth_(async_QMARK___13269__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e112043;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_112042;
}}catch (e112035){if((e112035 instanceof Error))
{var e__13270__auto__ = e112035;if(cljs.core.truth_(async_QMARK___13269__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e112035;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_112034;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),freactive.core_test.lens_test);

//# sourceMappingURL=core_test.js.map