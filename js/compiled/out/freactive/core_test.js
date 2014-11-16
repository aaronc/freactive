// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.core_test');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('cemerick.cljs.test');
goog.require('cljs.reader');
goog.require('freactive.core');
freactive.core_test.rx_test1 = (function rx_test1(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.rx_test1);
});
freactive.core_test.rx_test1 = cljs.core.with_meta.call(null,freactive.core_test.rx_test1,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function rx_test1_test(test_ctx__13354__auto__){var _test_ctx = test_ctx__13354__auto__;var async_QMARK___13269__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_93565 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto__)?null:_test_ctx);
try{var r0 = freactive.core.atom.call(null,(0));var r1 = freactive.core.rx_STAR_.call(null,((function (r0,_STAR_test_ctx_STAR_93565,_test_ctx,async_QMARK___13269__auto__){
return (function (){return (cljs.core.deref.call(null,r0) + (1));
});})(r0,_STAR_test_ctx_STAR_93565,_test_ctx,async_QMARK___13269__auto__))
,false);var _test_ctx_93573__$1 = _test_ctx;var async_QMARK___13269__auto___93574__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_93573__$1)));var _STAR_test_ctx_STAR_93567_93575 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___93574__$1)?null:_test_ctx_93573__$1);
try{try{var values__13289__auto___93576 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,r1)),(1));var result__13290__auto___93577 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___93576);if((result__13290__auto___93577 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___93577))
{cemerick.cljs.test.do_report.call(null,_test_ctx_93573__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___93576),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_93573__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___93576)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e93569){if((e93569 instanceof Error))
{var t__13326__auto___93578 = e93569;cemerick.cljs.test.do_report.call(null,_test_ctx_93573__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___93578,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93569;

}
}}catch (e93568){if((e93568 instanceof Error))
{var e__13270__auto___93579 = e93568;if(cljs.core.truth_(async_QMARK___13269__auto___93574__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_93573__$1,e__13270__auto___93579);
} else
{throw e__13270__auto___93579;
}
} else
{throw e93568;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93567_93575;
}cljs.core.swap_BANG_.call(null,r0,cljs.core.inc);
var _test_ctx__$1 = _test_ctx;var async_QMARK___13269__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_93570 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto____$1)?null:_test_ctx__$1);
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
}catch (e93572){if((e93572 instanceof Error))
{var t__13326__auto__ = e93572;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93572;

}
}}catch (e93571){if((e93571 instanceof Error))
{var e__13270__auto__ = e93571;if(cljs.core.truth_(async_QMARK___13269__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e93571;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93570;
}}catch (e93566){if((e93566 instanceof Error))
{var e__13270__auto__ = e93566;if(cljs.core.truth_(async_QMARK___13269__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e93566;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93565;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","rx-test1","freactive.core-test/rx-test1",-40269479,null),freactive.core_test.rx_test1);
freactive.core_test.cursor_test = (function cursor_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.cursor_test);
});
freactive.core_test.cursor_test = cljs.core.with_meta.call(null,freactive.core_test.cursor_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function cursor_test_test(test_ctx__13354__auto__){var _test_ctx = test_ctx__13354__auto__;var async_QMARK___13269__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_93597 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null));var b = freactive.core.cursor.call(null,a,new cljs.core.Keyword(null,"a","a",-2123407586));var c = freactive.core.rx_STAR_.call(null,((function (a,b,_STAR_test_ctx_STAR_93597,_test_ctx,async_QMARK___13269__auto__){
return (function (){return (new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)) + (1));
});})(a,b,_STAR_test_ctx_STAR_93597,_test_ctx,async_QMARK___13269__auto__))
,false);var _test_ctx_93614__$1 = _test_ctx;var async_QMARK___13269__auto___93615__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_93614__$1)));var _STAR_test_ctx_STAR_93599_93616 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___93615__$1)?null:_test_ctx_93614__$1);
try{try{var values__13289__auto___93617 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13290__auto___93618 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___93617);if((result__13290__auto___93618 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___93618))
{cemerick.cljs.test.do_report.call(null,_test_ctx_93614__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___93617),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_93614__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___93617)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e93601){if((e93601 instanceof Error))
{var t__13326__auto___93619 = e93601;cemerick.cljs.test.do_report.call(null,_test_ctx_93614__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___93619,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93601;

}
}}catch (e93600){if((e93600 instanceof Error))
{var e__13270__auto___93620 = e93600;if(cljs.core.truth_(async_QMARK___13269__auto___93615__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_93614__$1,e__13270__auto___93620);
} else
{throw e__13270__auto___93620;
}
} else
{throw e93600;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93599_93616;
}cljs.core.swap_BANG_.call(null,a,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_93621__$1 = _test_ctx;var async_QMARK___13269__auto___93622__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_93621__$1)));var _STAR_test_ctx_STAR_93602_93623 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___93622__$1)?null:_test_ctx_93621__$1);
try{try{var values__13289__auto___93624 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)));var result__13290__auto___93625 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___93624);if((result__13290__auto___93625 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___93625))
{cemerick.cljs.test.do_report.call(null,_test_ctx_93621__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___93624),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_93621__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___93624)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e93604){if((e93604 instanceof Error))
{var t__13326__auto___93626 = e93604;cemerick.cljs.test.do_report.call(null,_test_ctx_93621__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null))),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___93626,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93604;

}
}}catch (e93603){if((e93603 instanceof Error))
{var e__13270__auto___93627 = e93603;if(cljs.core.truth_(async_QMARK___13269__auto___93622__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_93621__$1,e__13270__auto___93627);
} else
{throw e__13270__auto___93627;
}
} else
{throw e93603;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93602_93623;
}var _test_ctx_93628__$1 = _test_ctx;var async_QMARK___13269__auto___93629__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_93628__$1)));var _STAR_test_ctx_STAR_93605_93630 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___93629__$1)?null:_test_ctx_93628__$1);
try{try{var values__13289__auto___93631 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),cljs.core.deref.call(null,c));var result__13290__auto___93632 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___93631);if((result__13290__auto___93632 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___93632))
{cemerick.cljs.test.do_report.call(null,_test_ctx_93628__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___93631),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_93628__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___93631)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e93607){if((e93607 instanceof Error))
{var t__13326__auto___93633 = e93607;cemerick.cljs.test.do_report.call(null,_test_ctx_93628__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___93633,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93607;

}
}}catch (e93606){if((e93606 instanceof Error))
{var e__13270__auto___93634 = e93606;if(cljs.core.truth_(async_QMARK___13269__auto___93629__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_93628__$1,e__13270__auto___93634);
} else
{throw e__13270__auto___93634;
}
} else
{throw e93606;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93605_93630;
}cljs.core.swap_BANG_.call(null,b,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.inc);
var _test_ctx_93635__$1 = _test_ctx;var async_QMARK___13269__auto___93636__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_93635__$1)));var _STAR_test_ctx_STAR_93608_93637 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___93636__$1)?null:_test_ctx_93635__$1);
try{try{var value__13292__auto___93638 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,b),(4));if((value__13292__auto___93638 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
cemerick.cljs.test.do_report.call(null,_test_ctx_93635__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(value__13292__auto___93638)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),value__13292__auto___93638,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e93610){if((e93610 instanceof Error))
{var t__13326__auto___93639 = e93610;cemerick.cljs.test.do_report.call(null,_test_ctx_93635__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___93639,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93610;

}
}}catch (e93609){if((e93609 instanceof Error))
{var e__13270__auto___93640 = e93609;if(cljs.core.truth_(async_QMARK___13269__auto___93636__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_93635__$1,e__13270__auto___93640);
} else
{throw e__13270__auto___93640;
}
} else
{throw e93609;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93608_93637;
}var _test_ctx__$1 = _test_ctx;var async_QMARK___13269__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_93611 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto____$1)?null:_test_ctx__$1);
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
}catch (e93613){if((e93613 instanceof Error))
{var t__13326__auto__ = e93613;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93613;

}
}}catch (e93612){if((e93612 instanceof Error))
{var e__13270__auto__ = e93612;if(cljs.core.truth_(async_QMARK___13269__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e93612;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93611;
}}catch (e93598){if((e93598 instanceof Error))
{var e__13270__auto__ = e93598;if(cljs.core.truth_(async_QMARK___13269__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e93598;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93597;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","cursor-test","freactive.core-test/cursor-test",-232761312,null),freactive.core_test.cursor_test);
freactive.core_test.lens_test = (function lens_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),freactive.core_test.lens_test);
});
freactive.core_test.lens_test = cljs.core.with_meta.call(null,freactive.core_test.lens_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/Arc/Dev/freactive/test/freactive/core_test.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function lens_test_test(test_ctx__13354__auto__){var _test_ctx = test_ctx__13354__auto__;var async_QMARK___13269__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_93652 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto__)?null:_test_ctx);
try{var a = freactive.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(0)], null));var l = freactive.core.cursor.call(null,a,cljs.core.pr_str,((function (a,_STAR_test_ctx_STAR_93652,_test_ctx,async_QMARK___13269__auto__){
return (function (_,new_value){return cljs.reader.read_string.call(null,new_value);
});})(a,_STAR_test_ctx_STAR_93652,_test_ctx,async_QMARK___13269__auto__))
);var _test_ctx_93663__$1 = _test_ctx;var async_QMARK___13269__auto___93664__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_93663__$1)));var _STAR_test_ctx_STAR_93654_93665 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___93664__$1)?null:_test_ctx_93663__$1);
try{try{var values__13289__auto___93666 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"{:a 0}"),cljs.core.deref.call(null,l));var result__13290__auto___93667 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___93666);if((result__13290__auto___93667 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___93667))
{cemerick.cljs.test.do_report.call(null,_test_ctx_93663__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___93666),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_93663__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___93666)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e93656){if((e93656 instanceof Error))
{var t__13326__auto___93668 = e93656;cemerick.cljs.test.do_report.call(null,_test_ctx_93663__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:a 0}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___93668,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93656;

}
}}catch (e93655){if((e93655 instanceof Error))
{var e__13270__auto___93669 = e93655;if(cljs.core.truth_(async_QMARK___13269__auto___93664__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_93663__$1,e__13270__auto___93669);
} else
{throw e__13270__auto___93669;
}
} else
{throw e93655;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93654_93665;
}cljs.core.reset_BANG_.call(null,l,"{:b 1}");
var _test_ctx_93670__$1 = _test_ctx;var async_QMARK___13269__auto___93671__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_93670__$1)));var _STAR_test_ctx_STAR_93657_93672 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto___93671__$1)?null:_test_ctx_93670__$1);
try{try{var values__13289__auto___93673 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),cljs.core.deref.call(null,a));var result__13290__auto___93674 = cljs.core.apply.call(null,cljs.core._EQ_,values__13289__auto___93673);if((result__13290__auto___93674 instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13290__auto___93674))
{cemerick.cljs.test.do_report.call(null,_test_ctx_93670__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13289__auto___93673),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx_93670__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13289__auto___93673)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
}catch (e93659){if((e93659 instanceof Error))
{var t__13326__auto___93675 = e93659;cemerick.cljs.test.do_report.call(null,_test_ctx_93670__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto___93675,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93659;

}
}}catch (e93658){if((e93658 instanceof Error))
{var e__13270__auto___93676 = e93658;if(cljs.core.truth_(async_QMARK___13269__auto___93671__$1))
{cemerick.cljs.test.done_STAR_.call(null,_test_ctx_93670__$1,e__13270__auto___93676);
} else
{throw e__13270__auto___93676;
}
} else
{throw e93658;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93657_93672;
}cljs.core.reset_BANG_.call(null,a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null));
var _test_ctx__$1 = _test_ctx;var async_QMARK___13269__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_93660 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13269__auto____$1)?null:_test_ctx__$1);
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
}catch (e93662){if((e93662 instanceof Error))
{var t__13326__auto__ = e93662;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"l","l",-1258542346,null)),"{:c 2}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__13326__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e93662;

}
}}catch (e93661){if((e93661 instanceof Error))
{var e__13270__auto__ = e93661;if(cljs.core.truth_(async_QMARK___13269__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e93661;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93660;
}}catch (e93653){if((e93653 instanceof Error))
{var e__13270__auto__ = e93653;if(cljs.core.truth_(async_QMARK___13269__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13270__auto__);
} else
{throw e__13270__auto__;
}
} else
{throw e93653;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_93652;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"freactive.core-test","freactive.core-test",467113373,null),new cljs.core.Symbol("freactive.core-test","lens-test","freactive.core-test/lens-test",345205642,null),freactive.core_test.lens_test);

//# sourceMappingURL=core_test.js.map