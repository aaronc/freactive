// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.core_test');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('cemerick.cljs.test');
goog.require('cljs.reader');
goog.require('freactive.core');
freactive.core_test.rx_test1 = (function rx_test1(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.rx_test1);
});
freactive.core_test.rx_test1 = cljs.core.with_meta.call(null,freactive.core_test.rx_test1,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function rx_test1_test(test_ctx__13350__auto__){var _test_ctx = test_ctx__13350__auto__;var async_QMARK___13265__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_13561 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto__)?null:_test_ctx);
try{var r0 = freactive.core.atom.call(null,(0));var r1 = freactive.core.rx_STAR_.call(null,((function (r0,_STAR_test_ctx_STAR_13561,_test_ctx,async_QMARK___13265__auto__){
return (function (){return (cljs.core.deref.call(null,r0) + (1));
});})(r0,_STAR_test_ctx_STAR_13561,_test_ctx,async_QMARK___13265__auto__))
,false);var _test_ctx_13569__$1 = _test_ctx;var async_QMARK___13265__auto___13570__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_13569__$1)));var _STAR_test_ctx_STAR_13563_13571 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto___13570__$1)?null:_test_ctx_13569__$1);
try{try{var values__13285__auto___13572 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,r1)),(1));var result__13286__auto___13573 = cljs.core.apply.call(null,cljs.core._EQ_,values__13285__auto___13572);if((result__13286__auto___13573 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13286__auto___13573))
{cemerick.cljs.test.do_report.call(null,_test_ctx_13569__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13285__auto___13572),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_13569__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13285__auto___13572)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e13565){if((e13565 instanceof Error))
{var t__13322__auto___13574 = e13565;cemerick.cljs.test.do_report.call(null,_test_ctx_13569__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto___13574,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13565;

}
}}catch (e13564){if((e13564 instanceof Error))
{var e__13266__auto___13575 = e13564;if(cljs.core.truth_(async_QMARK___13265__auto___13570__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_13569__$1,e__13266__auto___13575);
} else
{throw e__13266__auto___13575;
}
} else
{throw e13564;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13563_13571;
}cljs.core.swap_BANG_.call(null,r0,cljs.core.inc);
var _test_ctx__$1 = _test_ctx;var async_QMARK___13265__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_13566 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto____$1)?null:_test_ctx__$1);
try{try{var values__13285__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,r1)),(2));var result__13286__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13285__auto__);if((result__13286__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13286__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13285__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13285__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13286__auto__;
}catch (e13568){if((e13568 instanceof Error))
{var t__13322__auto__ = e13568;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13568;

}
}}catch (e13567){if((e13567 instanceof Error))
{var e__13266__auto__ = e13567;if(cljs.core.truth_(async_QMARK___13265__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13266__auto__);
} else
{throw e__13266__auto__;
}
} else
{throw e13567;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13566;
}}catch (e13562){if((e13562 instanceof Error))
{var e__13266__auto__ = e13562;if(cljs.core.truth_(async_QMARK___13265__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13266__auto__);
} else
{throw e__13266__auto__;
}
} else
{throw e13562;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13561;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),freactive.core_test.rx_test1);
freactive.core_test.cursor_test = (function cursor_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.cursor_test);
});
freactive.core_test.cursor_test = cljs.core.with_meta.call(null,freactive.core_test.cursor_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function cursor_test_test(test_ctx__13350__auto__){var _test_ctx = test_ctx__13350__auto__;var async_QMARK___13265__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_13593 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null));var b = freactive.core.cursor.call(null,a,new cljs.core.Keyword(null,"a","a",-2123407586));var c = freactive.core.rx_STAR_.call(null,((function (a,b,_STAR_test_ctx_STAR_13593,_test_ctx,async_QMARK___13265__auto__){
return (function (){return (new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)) + (1));
});})(a,b,_STAR_test_ctx_STAR_13593,_test_ctx,async_QMARK___13265__auto__))
,false);var _test_ctx_13610__$1 = _test_ctx;var async_QMARK___13265__auto___13611__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_13610__$1)));var _STAR_test_ctx_STAR_13595_13612 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto___13611__$1)?null:_test_ctx_13610__$1);
try{try{var values__13285__auto___13613 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13286__auto___13614 = cljs.core.apply.call(null,cljs.core._EQ_,values__13285__auto___13613);if((result__13286__auto___13614 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13286__auto___13614))
{cemerick.cljs.test.do_report.call(null,_test_ctx_13610__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13285__auto___13613),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_13610__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13285__auto___13613)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e13597){if((e13597 instanceof Error))
{var t__13322__auto___13615 = e13597;cemerick.cljs.test.do_report.call(null,_test_ctx_13610__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto___13615,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13597;

}
}}catch (e13596){if((e13596 instanceof Error))
{var e__13266__auto___13616 = e13596;if(cljs.core.truth_(async_QMARK___13265__auto___13611__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_13610__$1,e__13266__auto___13616);
} else
{throw e__13266__auto___13616;
}
} else
{throw e13596;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13595_13612;
}cljs.core.swap_BANG_.call(null,a,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_13617__$1 = _test_ctx;var async_QMARK___13265__auto___13618__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_13617__$1)));var _STAR_test_ctx_STAR_13598_13619 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto___13618__$1)?null:_test_ctx_13617__$1);
try{try{var values__13285__auto___13620 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13286__auto___13621 = cljs.core.apply.call(null,cljs.core._EQ_,values__13285__auto___13620);if((result__13286__auto___13621 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13286__auto___13621))
{cemerick.cljs.test.do_report.call(null,_test_ctx_13617__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13285__auto___13620),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_13617__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13285__auto___13620)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e13600){if((e13600 instanceof Error))
{var t__13322__auto___13622 = e13600;cemerick.cljs.test.do_report.call(null,_test_ctx_13617__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto___13622,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13600;

}
}}catch (e13599){if((e13599 instanceof Error))
{var e__13266__auto___13623 = e13599;if(cljs.core.truth_(async_QMARK___13265__auto___13618__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_13617__$1,e__13266__auto___13623);
} else
{throw e__13266__auto___13623;
}
} else
{throw e13599;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13598_13619;
}var _test_ctx_13624__$1 = _test_ctx;var async_QMARK___13265__auto___13625__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_13624__$1)));var _STAR_test_ctx_STAR_13601_13626 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto___13625__$1)?null:_test_ctx_13624__$1);
try{try{var values__13285__auto___13627 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),cljs.core.deref.call(null,c));var result__13286__auto___13628 = cljs.core.apply.call(null,cljs.core._EQ_,values__13285__auto___13627);if((result__13286__auto___13628 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13286__auto___13628))
{cemerick.cljs.test.do_report.call(null,_test_ctx_13624__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13285__auto___13627),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_13624__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13285__auto___13627)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e13603){if((e13603 instanceof Error))
{var t__13322__auto___13629 = e13603;cemerick.cljs.test.do_report.call(null,_test_ctx_13624__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto___13629,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13603;

}
}}catch (e13602){if((e13602 instanceof Error))
{var e__13266__auto___13630 = e13602;if(cljs.core.truth_(async_QMARK___13265__auto___13625__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_13624__$1,e__13266__auto___13630);
} else
{throw e__13266__auto___13630;
}
} else
{throw e13602;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13601_13626;
}cljs.core.swap_BANG_.call(null,b,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_13631__$1 = _test_ctx;var async_QMARK___13265__auto___13632__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_13631__$1)));var _STAR_test_ctx_STAR_13604_13633 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto___13632__$1)?null:_test_ctx_13631__$1);
try{try{var value__13288__auto___13634 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,b),(4));if((value__13288__auto___13634 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
cemerick.cljs.test.do_report.call(null,_test_ctx_13631__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(value__13288__auto___13634)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),value__13288__auto___13634,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e13606){if((e13606 instanceof Error))
{var t__13322__auto___13635 = e13606;cemerick.cljs.test.do_report.call(null,_test_ctx_13631__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto___13635,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13606;

}
}}catch (e13605){if((e13605 instanceof Error))
{var e__13266__auto___13636 = e13605;if(cljs.core.truth_(async_QMARK___13265__auto___13632__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_13631__$1,e__13266__auto___13636);
} else
{throw e__13266__auto___13636;
}
} else
{throw e13605;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13604_13633;
}var _test_ctx__$1 = _test_ctx;var async_QMARK___13265__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_13607 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto____$1)?null:_test_ctx__$1);
try{try{var values__13285__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),cljs.core.deref.call(null,c));var result__13286__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13285__auto__);if((result__13286__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13286__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13285__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13285__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13286__auto__;
}catch (e13609){if((e13609 instanceof Error))
{var t__13322__auto__ = e13609;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13609;

}
}}catch (e13608){if((e13608 instanceof Error))
{var e__13266__auto__ = e13608;if(cljs.core.truth_(async_QMARK___13265__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13266__auto__);
} else
{throw e__13266__auto__;
}
} else
{throw e13608;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13607;
}}catch (e13594){if((e13594 instanceof Error))
{var e__13266__auto__ = e13594;if(cljs.core.truth_(async_QMARK___13265__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13266__auto__);
} else
{throw e__13266__auto__;
}
} else
{throw e13594;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13593;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),freactive.core_test.cursor_test);
freactive.core_test.lens_test = (function lens_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.lens_test);
});
freactive.core_test.lens_test = cljs.core.with_meta.call(null,freactive.core_test.lens_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function lens_test_test(test_ctx__13350__auto__){var _test_ctx = test_ctx__13350__auto__;var async_QMARK___13265__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_13648 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(0)], null));var l = freactive.core.cursor.call(null,a,cljs.core.pr_str,((function (a,_STAR_test_ctx_STAR_13648,_test_ctx,async_QMARK___13265__auto__){
return (function (_,new_value){return cljs.reader.read_string.call(null,new_value);
});})(a,_STAR_test_ctx_STAR_13648,_test_ctx,async_QMARK___13265__auto__))
);var _test_ctx_13659__$1 = _test_ctx;var async_QMARK___13265__auto___13660__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_13659__$1)));var _STAR_test_ctx_STAR_13650_13661 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto___13660__$1)?null:_test_ctx_13659__$1);
try{try{var values__13285__auto___13662 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"{:a 0}"),cljs.core.deref.call(null,l));var result__13286__auto___13663 = cljs.core.apply.call(null,cljs.core._EQ_,values__13285__auto___13662);if((result__13286__auto___13663 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13286__auto___13663))
{cemerick.cljs.test.do_report.call(null,_test_ctx_13659__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13285__auto___13662),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_13659__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13285__auto___13662)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e13652){if((e13652 instanceof Error))
{var t__13322__auto___13664 = e13652;cemerick.cljs.test.do_report.call(null,_test_ctx_13659__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto___13664,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13652;

}
}}catch (e13651){if((e13651 instanceof Error))
{var e__13266__auto___13665 = e13651;if(cljs.core.truth_(async_QMARK___13265__auto___13660__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_13659__$1,e__13266__auto___13665);
} else
{throw e__13266__auto___13665;
}
} else
{throw e13651;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13650_13661;
}cljs.core.reset_BANG_.call(null,l,"{:b 1}");
var _test_ctx_13666__$1 = _test_ctx;var async_QMARK___13265__auto___13667__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_13666__$1)));var _STAR_test_ctx_STAR_13653_13668 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto___13667__$1)?null:_test_ctx_13666__$1);
try{try{var values__13285__auto___13669 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),cljs.core.deref.call(null,a));var result__13286__auto___13670 = cljs.core.apply.call(null,cljs.core._EQ_,values__13285__auto___13669);if((result__13286__auto___13670 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13286__auto___13670))
{cemerick.cljs.test.do_report.call(null,_test_ctx_13666__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13285__auto___13669),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_13666__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13285__auto___13669)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e13655){if((e13655 instanceof Error))
{var t__13322__auto___13671 = e13655;cemerick.cljs.test.do_report.call(null,_test_ctx_13666__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto___13671,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13655;

}
}}catch (e13654){if((e13654 instanceof Error))
{var e__13266__auto___13672 = e13654;if(cljs.core.truth_(async_QMARK___13265__auto___13667__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_13666__$1,e__13266__auto___13672);
} else
{throw e__13266__auto___13672;
}
} else
{throw e13654;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13653_13668;
}cljs.core.reset_BANG_.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null));
var _test_ctx__$1 = _test_ctx;var async_QMARK___13265__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_13656 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13265__auto____$1)?null:_test_ctx__$1);
try{try{var values__13285__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"{:c 2}"),cljs.core.deref.call(null,l));var result__13286__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13285__auto__);if((result__13286__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13286__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13285__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13285__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13286__auto__;
}catch (e13658){if((e13658 instanceof Error))
{var t__13322__auto__ = e13658;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13322__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13658;

}
}}catch (e13657){if((e13657 instanceof Error))
{var e__13266__auto__ = e13657;if(cljs.core.truth_(async_QMARK___13265__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13266__auto__);
} else
{throw e__13266__auto__;
}
} else
{throw e13657;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13656;
}}catch (e13649){if((e13649 instanceof Error))
{var e__13266__auto__ = e13649;if(cljs.core.truth_(async_QMARK___13265__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13266__auto__);
} else
{throw e__13266__auto__;
}
} else
{throw e13649;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13648;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),freactive.core_test.lens_test);

//# sourceMappingURL=core_test.js.map