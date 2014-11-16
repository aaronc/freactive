// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);
cljs.core.async.impl.protocols.ReadPort = (function (){var obj136572 = {};return obj136572;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__11485__auto__ = port;if(and__11485__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__12134__auto__ = (((port == null))?null:port);return (function (){var or__11497__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj136574 = {};return obj136574;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__11485__auto__ = port;if(and__11485__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__11485__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__12134__auto__ = (((port == null))?null:port);return (function (){var or__11497__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj136576 = {};return obj136576;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__11485__auto__ = chan;if(and__11485__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__12134__auto__ = (((chan == null))?null:chan);return (function (){var or__11497__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__11485__auto__ = chan;if(and__11485__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__12134__auto__ = (((chan == null))?null:chan);return (function (){var or__11497__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj136578 = {};return obj136578;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__11485__auto__ = h;if(and__11485__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__12134__auto__ = (((h == null))?null:h);return (function (){var or__11497__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__11485__auto__ = h;if(and__11485__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__11485__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__12134__auto__ = (((h == null))?null:h);return (function (){var or__11497__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj136580 = {};return obj136580;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__11485__auto__ = b;if(and__11485__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__12134__auto__ = (((b == null))?null:b);return (function (){var or__11497__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__11485__auto__ = b;if(and__11485__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__12134__auto__ = (((b == null))?null:b);return (function (){var or__11497__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){if((function (){var and__11485__auto__ = b;if(and__11485__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else
{var x__12134__auto__ = (((b == null))?null:b);return (function (){var or__11497__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function() {
var add_BANG_ = null;
var add_BANG___1 = (function (b){return b;
});
var add_BANG___2 = (function (b,itm){if(!((itm == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null))))))));
}
return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});
add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return add_BANG___1.call(this,b);
case 2:
return add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_BANG_.cljs$core$IFn$_invoke$arity$1 = add_BANG___1;
add_BANG_.cljs$core$IFn$_invoke$arity$2 = add_BANG___2;
return add_BANG_;
})()
;
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj136582 = {};return obj136582;
})();

//# sourceMappingURL=protocols.js.map