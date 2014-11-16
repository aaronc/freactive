// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t113949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t113949 = (function (f,fn_handler,meta113950){
this.f = f;
this.fn_handler = fn_handler;
this.meta113950 = meta113950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t113949.cljs$lang$type = true;
cljs.core.async.t113949.cljs$lang$ctorStr = "cljs.core.async/t113949";
cljs.core.async.t113949.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t113949");
});
cljs.core.async.t113949.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t113949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t113949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t113949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_113951){var self__ = this;
var _113951__$1 = this;return self__.meta113950;
});
cljs.core.async.t113949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_113951,meta113950__$1){var self__ = this;
var _113951__$1 = this;return (new cljs.core.async.t113949(self__.f,self__.fn_handler,meta113950__$1));
});
cljs.core.async.__GT_t113949 = (function __GT_t113949(f__$1,fn_handler__$1,meta113950){return (new cljs.core.async.t113949(f__$1,fn_handler__$1,meta113950));
});
}
return (new cljs.core.async.t113949(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__113953 = buff;if(G__113953)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__113953.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__113953.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__113953);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__113953);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_113954 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_113954);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_113954,ret){
return (function (){return fn1.call(null,val_113954);
});})(val_113954,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4386__auto__))
{var ret = temp__4386__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4386__auto__))
{var retb = temp__4386__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4386__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4386__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12367__auto___113955 = n;var x_113956 = (0);while(true){
if((x_113956 < n__12367__auto___113955))
{(a[x_113956] = (0));
{
var G__113957 = (x_113956 + (1));
x_113956 = G__113957;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__113958 = (i + (1));
i = G__113958;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t113962 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t113962 = (function (flag,alt_flag,meta113963){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta113963 = meta113963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t113962.cljs$lang$type = true;
cljs.core.async.t113962.cljs$lang$ctorStr = "cljs.core.async/t113962";
cljs.core.async.t113962.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t113962");
});})(flag))
;
cljs.core.async.t113962.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t113962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t113962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t113962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_113964){var self__ = this;
var _113964__$1 = this;return self__.meta113963;
});})(flag))
;
cljs.core.async.t113962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_113964,meta113963__$1){var self__ = this;
var _113964__$1 = this;return (new cljs.core.async.t113962(self__.flag,self__.alt_flag,meta113963__$1));
});})(flag))
;
cljs.core.async.__GT_t113962 = ((function (flag){
return (function __GT_t113962(flag__$1,alt_flag__$1,meta113963){return (new cljs.core.async.t113962(flag__$1,alt_flag__$1,meta113963));
});})(flag))
;
}
return (new cljs.core.async.t113962(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t113968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t113968 = (function (cb,flag,alt_handler,meta113969){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta113969 = meta113969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t113968.cljs$lang$type = true;
cljs.core.async.t113968.cljs$lang$ctorStr = "cljs.core.async/t113968";
cljs.core.async.t113968.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t113968");
});
cljs.core.async.t113968.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t113968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t113968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t113968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_113970){var self__ = this;
var _113970__$1 = this;return self__.meta113969;
});
cljs.core.async.t113968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_113970,meta113969__$1){var self__ = this;
var _113970__$1 = this;return (new cljs.core.async.t113968(self__.cb,self__.flag,self__.alt_handler,meta113969__$1));
});
cljs.core.async.__GT_t113968 = (function __GT_t113968(cb__$1,flag__$1,alt_handler__$1,meta113969){return (new cljs.core.async.t113968(cb__$1,flag__$1,alt_handler__$1,meta113969));
});
}
return (new cljs.core.async.t113968(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__113971_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__113971_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__113972_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__113972_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11497__auto__ = wport;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__113973 = (i + (1));
i = G__113973;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11497__auto__ = ret;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4388__auto__ = (function (){var and__11485__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11485__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11485__auto__;
}
})();if(cljs.core.truth_(temp__4388__auto__))
{var got = temp__4388__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__113974){var map__113976 = p__113974;var map__113976__$1 = ((cljs.core.seq_QMARK_.call(null,map__113976))?cljs.core.apply.call(null,cljs.core.hash_map,map__113976):map__113976);var opts = map__113976__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__113974 = null;if (arguments.length > 1) {
  p__113974 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__113974);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__113977){
var ports = cljs.core.first(arglist__113977);
var p__113974 = cljs.core.rest(arglist__113977);
return alts_BANG___delegate(ports,p__113974);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__14620__auto___114072 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___114072){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___114072){
return (function (state_114048){var state_val_114049 = (state_114048[(1)]);if((state_val_114049 === (7)))
{var inst_114044 = (state_114048[(2)]);var state_114048__$1 = state_114048;var statearr_114050_114073 = state_114048__$1;(statearr_114050_114073[(2)] = inst_114044);
(statearr_114050_114073[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (1)))
{var state_114048__$1 = state_114048;var statearr_114051_114074 = state_114048__$1;(statearr_114051_114074[(2)] = null);
(statearr_114051_114074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (4)))
{var inst_114027 = (state_114048[(7)]);var inst_114027__$1 = (state_114048[(2)]);var inst_114028 = (inst_114027__$1 == null);var state_114048__$1 = (function (){var statearr_114052 = state_114048;(statearr_114052[(7)] = inst_114027__$1);
return statearr_114052;
})();if(cljs.core.truth_(inst_114028))
{var statearr_114053_114075 = state_114048__$1;(statearr_114053_114075[(1)] = (5));
} else
{var statearr_114054_114076 = state_114048__$1;(statearr_114054_114076[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (13)))
{var state_114048__$1 = state_114048;var statearr_114055_114077 = state_114048__$1;(statearr_114055_114077[(2)] = null);
(statearr_114055_114077[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (6)))
{var inst_114027 = (state_114048[(7)]);var state_114048__$1 = state_114048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_114048__$1,(11),to,inst_114027);
} else
{if((state_val_114049 === (3)))
{var inst_114046 = (state_114048[(2)]);var state_114048__$1 = state_114048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_114048__$1,inst_114046);
} else
{if((state_val_114049 === (12)))
{var state_114048__$1 = state_114048;var statearr_114056_114078 = state_114048__$1;(statearr_114056_114078[(2)] = null);
(statearr_114056_114078[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (2)))
{var state_114048__$1 = state_114048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_114048__$1,(4),from);
} else
{if((state_val_114049 === (11)))
{var inst_114037 = (state_114048[(2)]);var state_114048__$1 = state_114048;if(cljs.core.truth_(inst_114037))
{var statearr_114057_114079 = state_114048__$1;(statearr_114057_114079[(1)] = (12));
} else
{var statearr_114058_114080 = state_114048__$1;(statearr_114058_114080[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (9)))
{var state_114048__$1 = state_114048;var statearr_114059_114081 = state_114048__$1;(statearr_114059_114081[(2)] = null);
(statearr_114059_114081[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (5)))
{var state_114048__$1 = state_114048;if(cljs.core.truth_(close_QMARK_))
{var statearr_114060_114082 = state_114048__$1;(statearr_114060_114082[(1)] = (8));
} else
{var statearr_114061_114083 = state_114048__$1;(statearr_114061_114083[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (14)))
{var inst_114042 = (state_114048[(2)]);var state_114048__$1 = state_114048;var statearr_114062_114084 = state_114048__$1;(statearr_114062_114084[(2)] = inst_114042);
(statearr_114062_114084[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (10)))
{var inst_114034 = (state_114048[(2)]);var state_114048__$1 = state_114048;var statearr_114063_114085 = state_114048__$1;(statearr_114063_114085[(2)] = inst_114034);
(statearr_114063_114085[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114049 === (8)))
{var inst_114031 = cljs.core.async.close_BANG_.call(null,to);var state_114048__$1 = state_114048;var statearr_114064_114086 = state_114048__$1;(statearr_114064_114086[(2)] = inst_114031);
(statearr_114064_114086[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___114072))
;return ((function (switch__14564__auto__,c__14620__auto___114072){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_114068 = [null,null,null,null,null,null,null,null];(statearr_114068[(0)] = state_machine__14565__auto__);
(statearr_114068[(1)] = (1));
return statearr_114068;
});
var state_machine__14565__auto____1 = (function (state_114048){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_114048);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e114069){if((e114069 instanceof Object))
{var ex__14568__auto__ = e114069;var statearr_114070_114087 = state_114048;(statearr_114070_114087[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_114048);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e114069;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__114088 = state_114048;
state_114048 = G__114088;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_114048){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_114048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___114072))
})();var state__14622__auto__ = (function (){var statearr_114071 = f__14621__auto__.call(null);(statearr_114071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___114072);
return statearr_114071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___114072))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__114272){var vec__114273 = p__114272;var v = cljs.core.nth.call(null,vec__114273,(0),null);var p = cljs.core.nth.call(null,vec__114273,(1),null);var job = vec__114273;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__14620__auto___114455 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___114455,res,vec__114273,v,p,job,jobs,results){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___114455,res,vec__114273,v,p,job,jobs,results){
return (function (state_114278){var state_val_114279 = (state_114278[(1)]);if((state_val_114279 === (2)))
{var inst_114275 = (state_114278[(2)]);var inst_114276 = cljs.core.async.close_BANG_.call(null,res);var state_114278__$1 = (function (){var statearr_114280 = state_114278;(statearr_114280[(7)] = inst_114275);
return statearr_114280;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_114278__$1,inst_114276);
} else
{if((state_val_114279 === (1)))
{var state_114278__$1 = state_114278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_114278__$1,(2),res,v);
} else
{return null;
}
}
});})(c__14620__auto___114455,res,vec__114273,v,p,job,jobs,results))
;return ((function (switch__14564__auto__,c__14620__auto___114455,res,vec__114273,v,p,job,jobs,results){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_114284 = [null,null,null,null,null,null,null,null];(statearr_114284[(0)] = state_machine__14565__auto__);
(statearr_114284[(1)] = (1));
return statearr_114284;
});
var state_machine__14565__auto____1 = (function (state_114278){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_114278);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e114285){if((e114285 instanceof Object))
{var ex__14568__auto__ = e114285;var statearr_114286_114456 = state_114278;(statearr_114286_114456[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_114278);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e114285;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__114457 = state_114278;
state_114278 = G__114457;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_114278){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_114278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___114455,res,vec__114273,v,p,job,jobs,results))
})();var state__14622__auto__ = (function (){var statearr_114287 = f__14621__auto__.call(null);(statearr_114287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___114455);
return statearr_114287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___114455,res,vec__114273,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__114288){var vec__114289 = p__114288;var v = cljs.core.nth.call(null,vec__114289,(0),null);var p = cljs.core.nth.call(null,vec__114289,(1),null);var job = vec__114289;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12367__auto___114458 = n;var __114459 = (0);while(true){
if((__114459 < n__12367__auto___114458))
{var G__114290_114460 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__114290_114460) {
case "async":
var c__14620__auto___114462 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__114459,c__14620__auto___114462,G__114290_114460,n__12367__auto___114458,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (__114459,c__14620__auto___114462,G__114290_114460,n__12367__auto___114458,jobs,results,process,async){
return (function (state_114303){var state_val_114304 = (state_114303[(1)]);if((state_val_114304 === (7)))
{var inst_114299 = (state_114303[(2)]);var state_114303__$1 = state_114303;var statearr_114305_114463 = state_114303__$1;(statearr_114305_114463[(2)] = inst_114299);
(statearr_114305_114463[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114304 === (6)))
{var state_114303__$1 = state_114303;var statearr_114306_114464 = state_114303__$1;(statearr_114306_114464[(2)] = null);
(statearr_114306_114464[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114304 === (5)))
{var state_114303__$1 = state_114303;var statearr_114307_114465 = state_114303__$1;(statearr_114307_114465[(2)] = null);
(statearr_114307_114465[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114304 === (4)))
{var inst_114293 = (state_114303[(2)]);var inst_114294 = async.call(null,inst_114293);var state_114303__$1 = state_114303;if(cljs.core.truth_(inst_114294))
{var statearr_114308_114466 = state_114303__$1;(statearr_114308_114466[(1)] = (5));
} else
{var statearr_114309_114467 = state_114303__$1;(statearr_114309_114467[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114304 === (3)))
{var inst_114301 = (state_114303[(2)]);var state_114303__$1 = state_114303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_114303__$1,inst_114301);
} else
{if((state_val_114304 === (2)))
{var state_114303__$1 = state_114303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_114303__$1,(4),jobs);
} else
{if((state_val_114304 === (1)))
{var state_114303__$1 = state_114303;var statearr_114310_114468 = state_114303__$1;(statearr_114310_114468[(2)] = null);
(statearr_114310_114468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__114459,c__14620__auto___114462,G__114290_114460,n__12367__auto___114458,jobs,results,process,async))
;return ((function (__114459,switch__14564__auto__,c__14620__auto___114462,G__114290_114460,n__12367__auto___114458,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_114314 = [null,null,null,null,null,null,null];(statearr_114314[(0)] = state_machine__14565__auto__);
(statearr_114314[(1)] = (1));
return statearr_114314;
});
var state_machine__14565__auto____1 = (function (state_114303){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_114303);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e114315){if((e114315 instanceof Object))
{var ex__14568__auto__ = e114315;var statearr_114316_114469 = state_114303;(statearr_114316_114469[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_114303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e114315;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__114470 = state_114303;
state_114303 = G__114470;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_114303){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_114303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(__114459,switch__14564__auto__,c__14620__auto___114462,G__114290_114460,n__12367__auto___114458,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_114317 = f__14621__auto__.call(null);(statearr_114317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___114462);
return statearr_114317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(__114459,c__14620__auto___114462,G__114290_114460,n__12367__auto___114458,jobs,results,process,async))
);

break;
case "compute":
var c__14620__auto___114471 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__114459,c__14620__auto___114471,G__114290_114460,n__12367__auto___114458,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (__114459,c__14620__auto___114471,G__114290_114460,n__12367__auto___114458,jobs,results,process,async){
return (function (state_114330){var state_val_114331 = (state_114330[(1)]);if((state_val_114331 === (7)))
{var inst_114326 = (state_114330[(2)]);var state_114330__$1 = state_114330;var statearr_114332_114472 = state_114330__$1;(statearr_114332_114472[(2)] = inst_114326);
(statearr_114332_114472[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114331 === (6)))
{var state_114330__$1 = state_114330;var statearr_114333_114473 = state_114330__$1;(statearr_114333_114473[(2)] = null);
(statearr_114333_114473[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114331 === (5)))
{var state_114330__$1 = state_114330;var statearr_114334_114474 = state_114330__$1;(statearr_114334_114474[(2)] = null);
(statearr_114334_114474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114331 === (4)))
{var inst_114320 = (state_114330[(2)]);var inst_114321 = process.call(null,inst_114320);var state_114330__$1 = state_114330;if(cljs.core.truth_(inst_114321))
{var statearr_114335_114475 = state_114330__$1;(statearr_114335_114475[(1)] = (5));
} else
{var statearr_114336_114476 = state_114330__$1;(statearr_114336_114476[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114331 === (3)))
{var inst_114328 = (state_114330[(2)]);var state_114330__$1 = state_114330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_114330__$1,inst_114328);
} else
{if((state_val_114331 === (2)))
{var state_114330__$1 = state_114330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_114330__$1,(4),jobs);
} else
{if((state_val_114331 === (1)))
{var state_114330__$1 = state_114330;var statearr_114337_114477 = state_114330__$1;(statearr_114337_114477[(2)] = null);
(statearr_114337_114477[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__114459,c__14620__auto___114471,G__114290_114460,n__12367__auto___114458,jobs,results,process,async))
;return ((function (__114459,switch__14564__auto__,c__14620__auto___114471,G__114290_114460,n__12367__auto___114458,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_114341 = [null,null,null,null,null,null,null];(statearr_114341[(0)] = state_machine__14565__auto__);
(statearr_114341[(1)] = (1));
return statearr_114341;
});
var state_machine__14565__auto____1 = (function (state_114330){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_114330);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e114342){if((e114342 instanceof Object))
{var ex__14568__auto__ = e114342;var statearr_114343_114478 = state_114330;(statearr_114343_114478[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_114330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e114342;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__114479 = state_114330;
state_114330 = G__114479;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_114330){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_114330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(__114459,switch__14564__auto__,c__14620__auto___114471,G__114290_114460,n__12367__auto___114458,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_114344 = f__14621__auto__.call(null);(statearr_114344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___114471);
return statearr_114344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(__114459,c__14620__auto___114471,G__114290_114460,n__12367__auto___114458,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__114480 = (__114459 + (1));
__114459 = G__114480;
continue;
}
} else
{}
break;
}
var c__14620__auto___114481 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___114481,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___114481,jobs,results,process,async){
return (function (state_114366){var state_val_114367 = (state_114366[(1)]);if((state_val_114367 === (9)))
{var inst_114359 = (state_114366[(2)]);var state_114366__$1 = (function (){var statearr_114368 = state_114366;(statearr_114368[(7)] = inst_114359);
return statearr_114368;
})();var statearr_114369_114482 = state_114366__$1;(statearr_114369_114482[(2)] = null);
(statearr_114369_114482[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114367 === (8)))
{var inst_114352 = (state_114366[(8)]);var inst_114357 = (state_114366[(2)]);var state_114366__$1 = (function (){var statearr_114370 = state_114366;(statearr_114370[(9)] = inst_114357);
return statearr_114370;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_114366__$1,(9),results,inst_114352);
} else
{if((state_val_114367 === (7)))
{var inst_114362 = (state_114366[(2)]);var state_114366__$1 = state_114366;var statearr_114371_114483 = state_114366__$1;(statearr_114371_114483[(2)] = inst_114362);
(statearr_114371_114483[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114367 === (6)))
{var inst_114352 = (state_114366[(8)]);var inst_114347 = (state_114366[(10)]);var inst_114352__$1 = cljs.core.async.chan.call(null,(1));var inst_114353 = cljs.core.PersistentVector.EMPTY_NODE;var inst_114354 = [inst_114347,inst_114352__$1];var inst_114355 = (new cljs.core.PersistentVector(null,2,(5),inst_114353,inst_114354,null));var state_114366__$1 = (function (){var statearr_114372 = state_114366;(statearr_114372[(8)] = inst_114352__$1);
return statearr_114372;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_114366__$1,(8),jobs,inst_114355);
} else
{if((state_val_114367 === (5)))
{var inst_114350 = cljs.core.async.close_BANG_.call(null,jobs);var state_114366__$1 = state_114366;var statearr_114373_114484 = state_114366__$1;(statearr_114373_114484[(2)] = inst_114350);
(statearr_114373_114484[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114367 === (4)))
{var inst_114347 = (state_114366[(10)]);var inst_114347__$1 = (state_114366[(2)]);var inst_114348 = (inst_114347__$1 == null);var state_114366__$1 = (function (){var statearr_114374 = state_114366;(statearr_114374[(10)] = inst_114347__$1);
return statearr_114374;
})();if(cljs.core.truth_(inst_114348))
{var statearr_114375_114485 = state_114366__$1;(statearr_114375_114485[(1)] = (5));
} else
{var statearr_114376_114486 = state_114366__$1;(statearr_114376_114486[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114367 === (3)))
{var inst_114364 = (state_114366[(2)]);var state_114366__$1 = state_114366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_114366__$1,inst_114364);
} else
{if((state_val_114367 === (2)))
{var state_114366__$1 = state_114366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_114366__$1,(4),from);
} else
{if((state_val_114367 === (1)))
{var state_114366__$1 = state_114366;var statearr_114377_114487 = state_114366__$1;(statearr_114377_114487[(2)] = null);
(statearr_114377_114487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___114481,jobs,results,process,async))
;return ((function (switch__14564__auto__,c__14620__auto___114481,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_114381 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_114381[(0)] = state_machine__14565__auto__);
(statearr_114381[(1)] = (1));
return statearr_114381;
});
var state_machine__14565__auto____1 = (function (state_114366){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_114366);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e114382){if((e114382 instanceof Object))
{var ex__14568__auto__ = e114382;var statearr_114383_114488 = state_114366;(statearr_114383_114488[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_114366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e114382;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__114489 = state_114366;
state_114366 = G__114489;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_114366){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_114366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___114481,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_114384 = f__14621__auto__.call(null);(statearr_114384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___114481);
return statearr_114384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___114481,jobs,results,process,async))
);
var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,jobs,results,process,async){
return (function (state_114422){var state_val_114423 = (state_114422[(1)]);if((state_val_114423 === (7)))
{var inst_114418 = (state_114422[(2)]);var state_114422__$1 = state_114422;var statearr_114424_114490 = state_114422__$1;(statearr_114424_114490[(2)] = inst_114418);
(statearr_114424_114490[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (20)))
{var state_114422__$1 = state_114422;var statearr_114425_114491 = state_114422__$1;(statearr_114425_114491[(2)] = null);
(statearr_114425_114491[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (1)))
{var state_114422__$1 = state_114422;var statearr_114426_114492 = state_114422__$1;(statearr_114426_114492[(2)] = null);
(statearr_114426_114492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (4)))
{var inst_114387 = (state_114422[(7)]);var inst_114387__$1 = (state_114422[(2)]);var inst_114388 = (inst_114387__$1 == null);var state_114422__$1 = (function (){var statearr_114427 = state_114422;(statearr_114427[(7)] = inst_114387__$1);
return statearr_114427;
})();if(cljs.core.truth_(inst_114388))
{var statearr_114428_114493 = state_114422__$1;(statearr_114428_114493[(1)] = (5));
} else
{var statearr_114429_114494 = state_114422__$1;(statearr_114429_114494[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (15)))
{var inst_114400 = (state_114422[(8)]);var state_114422__$1 = state_114422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_114422__$1,(18),to,inst_114400);
} else
{if((state_val_114423 === (21)))
{var inst_114413 = (state_114422[(2)]);var state_114422__$1 = state_114422;var statearr_114430_114495 = state_114422__$1;(statearr_114430_114495[(2)] = inst_114413);
(statearr_114430_114495[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (13)))
{var inst_114415 = (state_114422[(2)]);var state_114422__$1 = (function (){var statearr_114431 = state_114422;(statearr_114431[(9)] = inst_114415);
return statearr_114431;
})();var statearr_114432_114496 = state_114422__$1;(statearr_114432_114496[(2)] = null);
(statearr_114432_114496[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (6)))
{var inst_114387 = (state_114422[(7)]);var state_114422__$1 = state_114422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_114422__$1,(11),inst_114387);
} else
{if((state_val_114423 === (17)))
{var inst_114408 = (state_114422[(2)]);var state_114422__$1 = state_114422;if(cljs.core.truth_(inst_114408))
{var statearr_114433_114497 = state_114422__$1;(statearr_114433_114497[(1)] = (19));
} else
{var statearr_114434_114498 = state_114422__$1;(statearr_114434_114498[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (3)))
{var inst_114420 = (state_114422[(2)]);var state_114422__$1 = state_114422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_114422__$1,inst_114420);
} else
{if((state_val_114423 === (12)))
{var inst_114397 = (state_114422[(10)]);var state_114422__$1 = state_114422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_114422__$1,(14),inst_114397);
} else
{if((state_val_114423 === (2)))
{var state_114422__$1 = state_114422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_114422__$1,(4),results);
} else
{if((state_val_114423 === (19)))
{var state_114422__$1 = state_114422;var statearr_114435_114499 = state_114422__$1;(statearr_114435_114499[(2)] = null);
(statearr_114435_114499[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (11)))
{var inst_114397 = (state_114422[(2)]);var state_114422__$1 = (function (){var statearr_114436 = state_114422;(statearr_114436[(10)] = inst_114397);
return statearr_114436;
})();var statearr_114437_114500 = state_114422__$1;(statearr_114437_114500[(2)] = null);
(statearr_114437_114500[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (9)))
{var state_114422__$1 = state_114422;var statearr_114438_114501 = state_114422__$1;(statearr_114438_114501[(2)] = null);
(statearr_114438_114501[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (5)))
{var state_114422__$1 = state_114422;if(cljs.core.truth_(close_QMARK_))
{var statearr_114439_114502 = state_114422__$1;(statearr_114439_114502[(1)] = (8));
} else
{var statearr_114440_114503 = state_114422__$1;(statearr_114440_114503[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (14)))
{var inst_114402 = (state_114422[(11)]);var inst_114400 = (state_114422[(8)]);var inst_114400__$1 = (state_114422[(2)]);var inst_114401 = (inst_114400__$1 == null);var inst_114402__$1 = cljs.core.not.call(null,inst_114401);var state_114422__$1 = (function (){var statearr_114441 = state_114422;(statearr_114441[(11)] = inst_114402__$1);
(statearr_114441[(8)] = inst_114400__$1);
return statearr_114441;
})();if(inst_114402__$1)
{var statearr_114442_114504 = state_114422__$1;(statearr_114442_114504[(1)] = (15));
} else
{var statearr_114443_114505 = state_114422__$1;(statearr_114443_114505[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (16)))
{var inst_114402 = (state_114422[(11)]);var state_114422__$1 = state_114422;var statearr_114444_114506 = state_114422__$1;(statearr_114444_114506[(2)] = inst_114402);
(statearr_114444_114506[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (10)))
{var inst_114394 = (state_114422[(2)]);var state_114422__$1 = state_114422;var statearr_114445_114507 = state_114422__$1;(statearr_114445_114507[(2)] = inst_114394);
(statearr_114445_114507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (18)))
{var inst_114405 = (state_114422[(2)]);var state_114422__$1 = state_114422;var statearr_114446_114508 = state_114422__$1;(statearr_114446_114508[(2)] = inst_114405);
(statearr_114446_114508[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114423 === (8)))
{var inst_114391 = cljs.core.async.close_BANG_.call(null,to);var state_114422__$1 = state_114422;var statearr_114447_114509 = state_114422__$1;(statearr_114447_114509[(2)] = inst_114391);
(statearr_114447_114509[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto__,jobs,results,process,async))
;return ((function (switch__14564__auto__,c__14620__auto__,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_114451 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_114451[(0)] = state_machine__14565__auto__);
(statearr_114451[(1)] = (1));
return statearr_114451;
});
var state_machine__14565__auto____1 = (function (state_114422){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_114422);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e114452){if((e114452 instanceof Object))
{var ex__14568__auto__ = e114452;var statearr_114453_114510 = state_114422;(statearr_114453_114510[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_114422);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e114452;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__114511 = state_114422;
state_114422 = G__114511;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_114422){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_114422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_114454 = f__14621__auto__.call(null);(statearr_114454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_114454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__,jobs,results,process,async))
);
return c__14620__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14620__auto___114612 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___114612,tc,fc){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___114612,tc,fc){
return (function (state_114587){var state_val_114588 = (state_114587[(1)]);if((state_val_114588 === (7)))
{var inst_114583 = (state_114587[(2)]);var state_114587__$1 = state_114587;var statearr_114589_114613 = state_114587__$1;(statearr_114589_114613[(2)] = inst_114583);
(statearr_114589_114613[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (1)))
{var state_114587__$1 = state_114587;var statearr_114590_114614 = state_114587__$1;(statearr_114590_114614[(2)] = null);
(statearr_114590_114614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (4)))
{var inst_114564 = (state_114587[(7)]);var inst_114564__$1 = (state_114587[(2)]);var inst_114565 = (inst_114564__$1 == null);var state_114587__$1 = (function (){var statearr_114591 = state_114587;(statearr_114591[(7)] = inst_114564__$1);
return statearr_114591;
})();if(cljs.core.truth_(inst_114565))
{var statearr_114592_114615 = state_114587__$1;(statearr_114592_114615[(1)] = (5));
} else
{var statearr_114593_114616 = state_114587__$1;(statearr_114593_114616[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (13)))
{var state_114587__$1 = state_114587;var statearr_114594_114617 = state_114587__$1;(statearr_114594_114617[(2)] = null);
(statearr_114594_114617[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (6)))
{var inst_114564 = (state_114587[(7)]);var inst_114570 = p.call(null,inst_114564);var state_114587__$1 = state_114587;if(cljs.core.truth_(inst_114570))
{var statearr_114595_114618 = state_114587__$1;(statearr_114595_114618[(1)] = (9));
} else
{var statearr_114596_114619 = state_114587__$1;(statearr_114596_114619[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (3)))
{var inst_114585 = (state_114587[(2)]);var state_114587__$1 = state_114587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_114587__$1,inst_114585);
} else
{if((state_val_114588 === (12)))
{var state_114587__$1 = state_114587;var statearr_114597_114620 = state_114587__$1;(statearr_114597_114620[(2)] = null);
(statearr_114597_114620[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (2)))
{var state_114587__$1 = state_114587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_114587__$1,(4),ch);
} else
{if((state_val_114588 === (11)))
{var inst_114564 = (state_114587[(7)]);var inst_114574 = (state_114587[(2)]);var state_114587__$1 = state_114587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_114587__$1,(8),inst_114574,inst_114564);
} else
{if((state_val_114588 === (9)))
{var state_114587__$1 = state_114587;var statearr_114598_114621 = state_114587__$1;(statearr_114598_114621[(2)] = tc);
(statearr_114598_114621[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (5)))
{var inst_114567 = cljs.core.async.close_BANG_.call(null,tc);var inst_114568 = cljs.core.async.close_BANG_.call(null,fc);var state_114587__$1 = (function (){var statearr_114599 = state_114587;(statearr_114599[(8)] = inst_114567);
return statearr_114599;
})();var statearr_114600_114622 = state_114587__$1;(statearr_114600_114622[(2)] = inst_114568);
(statearr_114600_114622[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (14)))
{var inst_114581 = (state_114587[(2)]);var state_114587__$1 = state_114587;var statearr_114601_114623 = state_114587__$1;(statearr_114601_114623[(2)] = inst_114581);
(statearr_114601_114623[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (10)))
{var state_114587__$1 = state_114587;var statearr_114602_114624 = state_114587__$1;(statearr_114602_114624[(2)] = fc);
(statearr_114602_114624[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114588 === (8)))
{var inst_114576 = (state_114587[(2)]);var state_114587__$1 = state_114587;if(cljs.core.truth_(inst_114576))
{var statearr_114603_114625 = state_114587__$1;(statearr_114603_114625[(1)] = (12));
} else
{var statearr_114604_114626 = state_114587__$1;(statearr_114604_114626[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___114612,tc,fc))
;return ((function (switch__14564__auto__,c__14620__auto___114612,tc,fc){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_114608 = [null,null,null,null,null,null,null,null,null];(statearr_114608[(0)] = state_machine__14565__auto__);
(statearr_114608[(1)] = (1));
return statearr_114608;
});
var state_machine__14565__auto____1 = (function (state_114587){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_114587);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e114609){if((e114609 instanceof Object))
{var ex__14568__auto__ = e114609;var statearr_114610_114627 = state_114587;(statearr_114610_114627[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_114587);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e114609;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__114628 = state_114587;
state_114587 = G__114628;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_114587){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_114587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___114612,tc,fc))
})();var state__14622__auto__ = (function (){var statearr_114611 = f__14621__auto__.call(null);(statearr_114611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___114612);
return statearr_114611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___114612,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__){
return (function (state_114675){var state_val_114676 = (state_114675[(1)]);if((state_val_114676 === (7)))
{var inst_114671 = (state_114675[(2)]);var state_114675__$1 = state_114675;var statearr_114677_114693 = state_114675__$1;(statearr_114677_114693[(2)] = inst_114671);
(statearr_114677_114693[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114676 === (6)))
{var inst_114664 = (state_114675[(7)]);var inst_114661 = (state_114675[(8)]);var inst_114668 = f.call(null,inst_114661,inst_114664);var inst_114661__$1 = inst_114668;var state_114675__$1 = (function (){var statearr_114678 = state_114675;(statearr_114678[(8)] = inst_114661__$1);
return statearr_114678;
})();var statearr_114679_114694 = state_114675__$1;(statearr_114679_114694[(2)] = null);
(statearr_114679_114694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114676 === (5)))
{var inst_114661 = (state_114675[(8)]);var state_114675__$1 = state_114675;var statearr_114680_114695 = state_114675__$1;(statearr_114680_114695[(2)] = inst_114661);
(statearr_114680_114695[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114676 === (4)))
{var inst_114664 = (state_114675[(7)]);var inst_114664__$1 = (state_114675[(2)]);var inst_114665 = (inst_114664__$1 == null);var state_114675__$1 = (function (){var statearr_114681 = state_114675;(statearr_114681[(7)] = inst_114664__$1);
return statearr_114681;
})();if(cljs.core.truth_(inst_114665))
{var statearr_114682_114696 = state_114675__$1;(statearr_114682_114696[(1)] = (5));
} else
{var statearr_114683_114697 = state_114675__$1;(statearr_114683_114697[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114676 === (3)))
{var inst_114673 = (state_114675[(2)]);var state_114675__$1 = state_114675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_114675__$1,inst_114673);
} else
{if((state_val_114676 === (2)))
{var state_114675__$1 = state_114675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_114675__$1,(4),ch);
} else
{if((state_val_114676 === (1)))
{var inst_114661 = init;var state_114675__$1 = (function (){var statearr_114684 = state_114675;(statearr_114684[(8)] = inst_114661);
return statearr_114684;
})();var statearr_114685_114698 = state_114675__$1;(statearr_114685_114698[(2)] = null);
(statearr_114685_114698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__14620__auto__))
;return ((function (switch__14564__auto__,c__14620__auto__){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_114689 = [null,null,null,null,null,null,null,null,null];(statearr_114689[(0)] = state_machine__14565__auto__);
(statearr_114689[(1)] = (1));
return statearr_114689;
});
var state_machine__14565__auto____1 = (function (state_114675){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_114675);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e114690){if((e114690 instanceof Object))
{var ex__14568__auto__ = e114690;var statearr_114691_114699 = state_114675;(statearr_114691_114699[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_114675);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e114690;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__114700 = state_114675;
state_114675 = G__114700;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_114675){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_114675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__))
})();var state__14622__auto__ = (function (){var statearr_114692 = f__14621__auto__.call(null);(statearr_114692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_114692;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__))
);
return c__14620__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__){
return (function (state_114774){var state_val_114775 = (state_114774[(1)]);if((state_val_114775 === (7)))
{var inst_114756 = (state_114774[(2)]);var state_114774__$1 = state_114774;var statearr_114776_114799 = state_114774__$1;(statearr_114776_114799[(2)] = inst_114756);
(statearr_114776_114799[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (1)))
{var inst_114750 = cljs.core.seq.call(null,coll);var inst_114751 = inst_114750;var state_114774__$1 = (function (){var statearr_114777 = state_114774;(statearr_114777[(7)] = inst_114751);
return statearr_114777;
})();var statearr_114778_114800 = state_114774__$1;(statearr_114778_114800[(2)] = null);
(statearr_114778_114800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (4)))
{var inst_114751 = (state_114774[(7)]);var inst_114754 = cljs.core.first.call(null,inst_114751);var state_114774__$1 = state_114774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_114774__$1,(7),ch,inst_114754);
} else
{if((state_val_114775 === (13)))
{var inst_114768 = (state_114774[(2)]);var state_114774__$1 = state_114774;var statearr_114779_114801 = state_114774__$1;(statearr_114779_114801[(2)] = inst_114768);
(statearr_114779_114801[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (6)))
{var inst_114759 = (state_114774[(2)]);var state_114774__$1 = state_114774;if(cljs.core.truth_(inst_114759))
{var statearr_114780_114802 = state_114774__$1;(statearr_114780_114802[(1)] = (8));
} else
{var statearr_114781_114803 = state_114774__$1;(statearr_114781_114803[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (3)))
{var inst_114772 = (state_114774[(2)]);var state_114774__$1 = state_114774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_114774__$1,inst_114772);
} else
{if((state_val_114775 === (12)))
{var state_114774__$1 = state_114774;var statearr_114782_114804 = state_114774__$1;(statearr_114782_114804[(2)] = null);
(statearr_114782_114804[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (2)))
{var inst_114751 = (state_114774[(7)]);var state_114774__$1 = state_114774;if(cljs.core.truth_(inst_114751))
{var statearr_114783_114805 = state_114774__$1;(statearr_114783_114805[(1)] = (4));
} else
{var statearr_114784_114806 = state_114774__$1;(statearr_114784_114806[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (11)))
{var inst_114765 = cljs.core.async.close_BANG_.call(null,ch);var state_114774__$1 = state_114774;var statearr_114785_114807 = state_114774__$1;(statearr_114785_114807[(2)] = inst_114765);
(statearr_114785_114807[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (9)))
{var state_114774__$1 = state_114774;if(cljs.core.truth_(close_QMARK_))
{var statearr_114786_114808 = state_114774__$1;(statearr_114786_114808[(1)] = (11));
} else
{var statearr_114787_114809 = state_114774__$1;(statearr_114787_114809[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (5)))
{var inst_114751 = (state_114774[(7)]);var state_114774__$1 = state_114774;var statearr_114788_114810 = state_114774__$1;(statearr_114788_114810[(2)] = inst_114751);
(statearr_114788_114810[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (10)))
{var inst_114770 = (state_114774[(2)]);var state_114774__$1 = state_114774;var statearr_114789_114811 = state_114774__$1;(statearr_114789_114811[(2)] = inst_114770);
(statearr_114789_114811[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_114775 === (8)))
{var inst_114751 = (state_114774[(7)]);var inst_114761 = cljs.core.next.call(null,inst_114751);var inst_114751__$1 = inst_114761;var state_114774__$1 = (function (){var statearr_114790 = state_114774;(statearr_114790[(7)] = inst_114751__$1);
return statearr_114790;
})();var statearr_114791_114812 = state_114774__$1;(statearr_114791_114812[(2)] = null);
(statearr_114791_114812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto__))
;return ((function (switch__14564__auto__,c__14620__auto__){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_114795 = [null,null,null,null,null,null,null,null];(statearr_114795[(0)] = state_machine__14565__auto__);
(statearr_114795[(1)] = (1));
return statearr_114795;
});
var state_machine__14565__auto____1 = (function (state_114774){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_114774);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e114796){if((e114796 instanceof Object))
{var ex__14568__auto__ = e114796;var statearr_114797_114813 = state_114774;(statearr_114797_114813[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_114774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e114796;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__114814 = state_114774;
state_114774 = G__114814;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_114774){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_114774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__))
})();var state__14622__auto__ = (function (){var statearr_114798 = f__14621__auto__.call(null);(statearr_114798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_114798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__))
);
return c__14620__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj114816 = {};return obj114816;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11485__auto__ = _;if(and__11485__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12134__auto__ = (((_ == null))?null:_);return (function (){var or__11497__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj114818 = {};return obj114818;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11485__auto__ = m;if(and__11485__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11485__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12134__auto__ = (((m == null))?null:m);return (function (){var or__11497__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11485__auto__ = m;if(and__11485__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12134__auto__ = (((m == null))?null:m);return (function (){var or__11497__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11485__auto__ = m;if(and__11485__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12134__auto__ = (((m == null))?null:m);return (function (){var or__11497__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t115040 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t115040 = (function (cs,ch,mult,meta115041){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta115041 = meta115041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t115040.cljs$lang$type = true;
cljs.core.async.t115040.cljs$lang$ctorStr = "cljs.core.async/t115040";
cljs.core.async.t115040.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t115040");
});})(cs))
;
cljs.core.async.t115040.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t115040.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t115040.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t115040.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t115040.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t115040.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t115040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_115042){var self__ = this;
var _115042__$1 = this;return self__.meta115041;
});})(cs))
;
cljs.core.async.t115040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_115042,meta115041__$1){var self__ = this;
var _115042__$1 = this;return (new cljs.core.async.t115040(self__.cs,self__.ch,self__.mult,meta115041__$1));
});})(cs))
;
cljs.core.async.__GT_t115040 = ((function (cs){
return (function __GT_t115040(cs__$1,ch__$1,mult__$1,meta115041){return (new cljs.core.async.t115040(cs__$1,ch__$1,mult__$1,meta115041));
});})(cs))
;
}
return (new cljs.core.async.t115040(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14620__auto___115261 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___115261,cs,m,dchan,dctr,done){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___115261,cs,m,dchan,dctr,done){
return (function (state_115173){var state_val_115174 = (state_115173[(1)]);if((state_val_115174 === (7)))
{var inst_115169 = (state_115173[(2)]);var state_115173__$1 = state_115173;var statearr_115175_115262 = state_115173__$1;(statearr_115175_115262[(2)] = inst_115169);
(statearr_115175_115262[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (20)))
{var inst_115074 = (state_115173[(7)]);var inst_115084 = cljs.core.first.call(null,inst_115074);var inst_115085 = cljs.core.nth.call(null,inst_115084,(0),null);var inst_115086 = cljs.core.nth.call(null,inst_115084,(1),null);var state_115173__$1 = (function (){var statearr_115176 = state_115173;(statearr_115176[(8)] = inst_115085);
return statearr_115176;
})();if(cljs.core.truth_(inst_115086))
{var statearr_115177_115263 = state_115173__$1;(statearr_115177_115263[(1)] = (22));
} else
{var statearr_115178_115264 = state_115173__$1;(statearr_115178_115264[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (27)))
{var inst_115045 = (state_115173[(9)]);var inst_115114 = (state_115173[(10)]);var inst_115116 = (state_115173[(11)]);var inst_115121 = (state_115173[(12)]);var inst_115121__$1 = cljs.core._nth.call(null,inst_115114,inst_115116);var inst_115122 = cljs.core.async.put_BANG_.call(null,inst_115121__$1,inst_115045,done);var state_115173__$1 = (function (){var statearr_115179 = state_115173;(statearr_115179[(12)] = inst_115121__$1);
return statearr_115179;
})();if(cljs.core.truth_(inst_115122))
{var statearr_115180_115265 = state_115173__$1;(statearr_115180_115265[(1)] = (30));
} else
{var statearr_115181_115266 = state_115173__$1;(statearr_115181_115266[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (1)))
{var state_115173__$1 = state_115173;var statearr_115182_115267 = state_115173__$1;(statearr_115182_115267[(2)] = null);
(statearr_115182_115267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (24)))
{var inst_115074 = (state_115173[(7)]);var inst_115091 = (state_115173[(2)]);var inst_115092 = cljs.core.next.call(null,inst_115074);var inst_115054 = inst_115092;var inst_115055 = null;var inst_115056 = (0);var inst_115057 = (0);var state_115173__$1 = (function (){var statearr_115183 = state_115173;(statearr_115183[(13)] = inst_115054);
(statearr_115183[(14)] = inst_115091);
(statearr_115183[(15)] = inst_115055);
(statearr_115183[(16)] = inst_115056);
(statearr_115183[(17)] = inst_115057);
return statearr_115183;
})();var statearr_115184_115268 = state_115173__$1;(statearr_115184_115268[(2)] = null);
(statearr_115184_115268[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (39)))
{var state_115173__$1 = state_115173;var statearr_115188_115269 = state_115173__$1;(statearr_115188_115269[(2)] = null);
(statearr_115188_115269[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (4)))
{var inst_115045 = (state_115173[(9)]);var inst_115045__$1 = (state_115173[(2)]);var inst_115046 = (inst_115045__$1 == null);var state_115173__$1 = (function (){var statearr_115189 = state_115173;(statearr_115189[(9)] = inst_115045__$1);
return statearr_115189;
})();if(cljs.core.truth_(inst_115046))
{var statearr_115190_115270 = state_115173__$1;(statearr_115190_115270[(1)] = (5));
} else
{var statearr_115191_115271 = state_115173__$1;(statearr_115191_115271[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (15)))
{var inst_115054 = (state_115173[(13)]);var inst_115055 = (state_115173[(15)]);var inst_115056 = (state_115173[(16)]);var inst_115057 = (state_115173[(17)]);var inst_115070 = (state_115173[(2)]);var inst_115071 = (inst_115057 + (1));var tmp115185 = inst_115054;var tmp115186 = inst_115055;var tmp115187 = inst_115056;var inst_115054__$1 = tmp115185;var inst_115055__$1 = tmp115186;var inst_115056__$1 = tmp115187;var inst_115057__$1 = inst_115071;var state_115173__$1 = (function (){var statearr_115192 = state_115173;(statearr_115192[(13)] = inst_115054__$1);
(statearr_115192[(18)] = inst_115070);
(statearr_115192[(15)] = inst_115055__$1);
(statearr_115192[(16)] = inst_115056__$1);
(statearr_115192[(17)] = inst_115057__$1);
return statearr_115192;
})();var statearr_115193_115272 = state_115173__$1;(statearr_115193_115272[(2)] = null);
(statearr_115193_115272[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (21)))
{var inst_115095 = (state_115173[(2)]);var state_115173__$1 = state_115173;var statearr_115197_115273 = state_115173__$1;(statearr_115197_115273[(2)] = inst_115095);
(statearr_115197_115273[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (31)))
{var inst_115121 = (state_115173[(12)]);var inst_115125 = done.call(null,null);var inst_115126 = cljs.core.async.untap_STAR_.call(null,m,inst_115121);var state_115173__$1 = (function (){var statearr_115198 = state_115173;(statearr_115198[(19)] = inst_115125);
return statearr_115198;
})();var statearr_115199_115274 = state_115173__$1;(statearr_115199_115274[(2)] = inst_115126);
(statearr_115199_115274[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (32)))
{var inst_115114 = (state_115173[(10)]);var inst_115113 = (state_115173[(20)]);var inst_115116 = (state_115173[(11)]);var inst_115115 = (state_115173[(21)]);var inst_115128 = (state_115173[(2)]);var inst_115129 = (inst_115116 + (1));var tmp115194 = inst_115114;var tmp115195 = inst_115113;var tmp115196 = inst_115115;var inst_115113__$1 = tmp115195;var inst_115114__$1 = tmp115194;var inst_115115__$1 = tmp115196;var inst_115116__$1 = inst_115129;var state_115173__$1 = (function (){var statearr_115200 = state_115173;(statearr_115200[(10)] = inst_115114__$1);
(statearr_115200[(20)] = inst_115113__$1);
(statearr_115200[(11)] = inst_115116__$1);
(statearr_115200[(21)] = inst_115115__$1);
(statearr_115200[(22)] = inst_115128);
return statearr_115200;
})();var statearr_115201_115275 = state_115173__$1;(statearr_115201_115275[(2)] = null);
(statearr_115201_115275[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (40)))
{var inst_115141 = (state_115173[(23)]);var inst_115145 = done.call(null,null);var inst_115146 = cljs.core.async.untap_STAR_.call(null,m,inst_115141);var state_115173__$1 = (function (){var statearr_115202 = state_115173;(statearr_115202[(24)] = inst_115145);
return statearr_115202;
})();var statearr_115203_115276 = state_115173__$1;(statearr_115203_115276[(2)] = inst_115146);
(statearr_115203_115276[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (33)))
{var inst_115132 = (state_115173[(25)]);var inst_115134 = cljs.core.chunked_seq_QMARK_.call(null,inst_115132);var state_115173__$1 = state_115173;if(inst_115134)
{var statearr_115204_115277 = state_115173__$1;(statearr_115204_115277[(1)] = (36));
} else
{var statearr_115205_115278 = state_115173__$1;(statearr_115205_115278[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (13)))
{var inst_115064 = (state_115173[(26)]);var inst_115067 = cljs.core.async.close_BANG_.call(null,inst_115064);var state_115173__$1 = state_115173;var statearr_115206_115279 = state_115173__$1;(statearr_115206_115279[(2)] = inst_115067);
(statearr_115206_115279[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (22)))
{var inst_115085 = (state_115173[(8)]);var inst_115088 = cljs.core.async.close_BANG_.call(null,inst_115085);var state_115173__$1 = state_115173;var statearr_115207_115280 = state_115173__$1;(statearr_115207_115280[(2)] = inst_115088);
(statearr_115207_115280[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (36)))
{var inst_115132 = (state_115173[(25)]);var inst_115136 = cljs.core.chunk_first.call(null,inst_115132);var inst_115137 = cljs.core.chunk_rest.call(null,inst_115132);var inst_115138 = cljs.core.count.call(null,inst_115136);var inst_115113 = inst_115137;var inst_115114 = inst_115136;var inst_115115 = inst_115138;var inst_115116 = (0);var state_115173__$1 = (function (){var statearr_115208 = state_115173;(statearr_115208[(10)] = inst_115114);
(statearr_115208[(20)] = inst_115113);
(statearr_115208[(11)] = inst_115116);
(statearr_115208[(21)] = inst_115115);
return statearr_115208;
})();var statearr_115209_115281 = state_115173__$1;(statearr_115209_115281[(2)] = null);
(statearr_115209_115281[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (41)))
{var inst_115132 = (state_115173[(25)]);var inst_115148 = (state_115173[(2)]);var inst_115149 = cljs.core.next.call(null,inst_115132);var inst_115113 = inst_115149;var inst_115114 = null;var inst_115115 = (0);var inst_115116 = (0);var state_115173__$1 = (function (){var statearr_115210 = state_115173;(statearr_115210[(10)] = inst_115114);
(statearr_115210[(20)] = inst_115113);
(statearr_115210[(11)] = inst_115116);
(statearr_115210[(21)] = inst_115115);
(statearr_115210[(27)] = inst_115148);
return statearr_115210;
})();var statearr_115211_115282 = state_115173__$1;(statearr_115211_115282[(2)] = null);
(statearr_115211_115282[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (43)))
{var state_115173__$1 = state_115173;var statearr_115212_115283 = state_115173__$1;(statearr_115212_115283[(2)] = null);
(statearr_115212_115283[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (29)))
{var inst_115157 = (state_115173[(2)]);var state_115173__$1 = state_115173;var statearr_115213_115284 = state_115173__$1;(statearr_115213_115284[(2)] = inst_115157);
(statearr_115213_115284[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (44)))
{var inst_115166 = (state_115173[(2)]);var state_115173__$1 = (function (){var statearr_115214 = state_115173;(statearr_115214[(28)] = inst_115166);
return statearr_115214;
})();var statearr_115215_115285 = state_115173__$1;(statearr_115215_115285[(2)] = null);
(statearr_115215_115285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (6)))
{var inst_115105 = (state_115173[(29)]);var inst_115104 = cljs.core.deref.call(null,cs);var inst_115105__$1 = cljs.core.keys.call(null,inst_115104);var inst_115106 = cljs.core.count.call(null,inst_115105__$1);var inst_115107 = cljs.core.reset_BANG_.call(null,dctr,inst_115106);var inst_115112 = cljs.core.seq.call(null,inst_115105__$1);var inst_115113 = inst_115112;var inst_115114 = null;var inst_115115 = (0);var inst_115116 = (0);var state_115173__$1 = (function (){var statearr_115216 = state_115173;(statearr_115216[(10)] = inst_115114);
(statearr_115216[(20)] = inst_115113);
(statearr_115216[(11)] = inst_115116);
(statearr_115216[(21)] = inst_115115);
(statearr_115216[(30)] = inst_115107);
(statearr_115216[(29)] = inst_115105__$1);
return statearr_115216;
})();var statearr_115217_115286 = state_115173__$1;(statearr_115217_115286[(2)] = null);
(statearr_115217_115286[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (28)))
{var inst_115113 = (state_115173[(20)]);var inst_115132 = (state_115173[(25)]);var inst_115132__$1 = cljs.core.seq.call(null,inst_115113);var state_115173__$1 = (function (){var statearr_115218 = state_115173;(statearr_115218[(25)] = inst_115132__$1);
return statearr_115218;
})();if(inst_115132__$1)
{var statearr_115219_115287 = state_115173__$1;(statearr_115219_115287[(1)] = (33));
} else
{var statearr_115220_115288 = state_115173__$1;(statearr_115220_115288[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (25)))
{var inst_115116 = (state_115173[(11)]);var inst_115115 = (state_115173[(21)]);var inst_115118 = (inst_115116 < inst_115115);var inst_115119 = inst_115118;var state_115173__$1 = state_115173;if(cljs.core.truth_(inst_115119))
{var statearr_115221_115289 = state_115173__$1;(statearr_115221_115289[(1)] = (27));
} else
{var statearr_115222_115290 = state_115173__$1;(statearr_115222_115290[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (34)))
{var state_115173__$1 = state_115173;var statearr_115223_115291 = state_115173__$1;(statearr_115223_115291[(2)] = null);
(statearr_115223_115291[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (17)))
{var state_115173__$1 = state_115173;var statearr_115224_115292 = state_115173__$1;(statearr_115224_115292[(2)] = null);
(statearr_115224_115292[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (3)))
{var inst_115171 = (state_115173[(2)]);var state_115173__$1 = state_115173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_115173__$1,inst_115171);
} else
{if((state_val_115174 === (12)))
{var inst_115100 = (state_115173[(2)]);var state_115173__$1 = state_115173;var statearr_115225_115293 = state_115173__$1;(statearr_115225_115293[(2)] = inst_115100);
(statearr_115225_115293[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (2)))
{var state_115173__$1 = state_115173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_115173__$1,(4),ch);
} else
{if((state_val_115174 === (23)))
{var state_115173__$1 = state_115173;var statearr_115226_115294 = state_115173__$1;(statearr_115226_115294[(2)] = null);
(statearr_115226_115294[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (35)))
{var inst_115155 = (state_115173[(2)]);var state_115173__$1 = state_115173;var statearr_115227_115295 = state_115173__$1;(statearr_115227_115295[(2)] = inst_115155);
(statearr_115227_115295[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (19)))
{var inst_115074 = (state_115173[(7)]);var inst_115078 = cljs.core.chunk_first.call(null,inst_115074);var inst_115079 = cljs.core.chunk_rest.call(null,inst_115074);var inst_115080 = cljs.core.count.call(null,inst_115078);var inst_115054 = inst_115079;var inst_115055 = inst_115078;var inst_115056 = inst_115080;var inst_115057 = (0);var state_115173__$1 = (function (){var statearr_115228 = state_115173;(statearr_115228[(13)] = inst_115054);
(statearr_115228[(15)] = inst_115055);
(statearr_115228[(16)] = inst_115056);
(statearr_115228[(17)] = inst_115057);
return statearr_115228;
})();var statearr_115229_115296 = state_115173__$1;(statearr_115229_115296[(2)] = null);
(statearr_115229_115296[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (11)))
{var inst_115054 = (state_115173[(13)]);var inst_115074 = (state_115173[(7)]);var inst_115074__$1 = cljs.core.seq.call(null,inst_115054);var state_115173__$1 = (function (){var statearr_115230 = state_115173;(statearr_115230[(7)] = inst_115074__$1);
return statearr_115230;
})();if(inst_115074__$1)
{var statearr_115231_115297 = state_115173__$1;(statearr_115231_115297[(1)] = (16));
} else
{var statearr_115232_115298 = state_115173__$1;(statearr_115232_115298[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (9)))
{var inst_115102 = (state_115173[(2)]);var state_115173__$1 = state_115173;var statearr_115233_115299 = state_115173__$1;(statearr_115233_115299[(2)] = inst_115102);
(statearr_115233_115299[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (5)))
{var inst_115052 = cljs.core.deref.call(null,cs);var inst_115053 = cljs.core.seq.call(null,inst_115052);var inst_115054 = inst_115053;var inst_115055 = null;var inst_115056 = (0);var inst_115057 = (0);var state_115173__$1 = (function (){var statearr_115234 = state_115173;(statearr_115234[(13)] = inst_115054);
(statearr_115234[(15)] = inst_115055);
(statearr_115234[(16)] = inst_115056);
(statearr_115234[(17)] = inst_115057);
return statearr_115234;
})();var statearr_115235_115300 = state_115173__$1;(statearr_115235_115300[(2)] = null);
(statearr_115235_115300[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (14)))
{var state_115173__$1 = state_115173;var statearr_115236_115301 = state_115173__$1;(statearr_115236_115301[(2)] = null);
(statearr_115236_115301[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (45)))
{var inst_115163 = (state_115173[(2)]);var state_115173__$1 = state_115173;var statearr_115237_115302 = state_115173__$1;(statearr_115237_115302[(2)] = inst_115163);
(statearr_115237_115302[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (26)))
{var inst_115105 = (state_115173[(29)]);var inst_115159 = (state_115173[(2)]);var inst_115160 = cljs.core.seq.call(null,inst_115105);var state_115173__$1 = (function (){var statearr_115238 = state_115173;(statearr_115238[(31)] = inst_115159);
return statearr_115238;
})();if(inst_115160)
{var statearr_115239_115303 = state_115173__$1;(statearr_115239_115303[(1)] = (42));
} else
{var statearr_115240_115304 = state_115173__$1;(statearr_115240_115304[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (16)))
{var inst_115074 = (state_115173[(7)]);var inst_115076 = cljs.core.chunked_seq_QMARK_.call(null,inst_115074);var state_115173__$1 = state_115173;if(inst_115076)
{var statearr_115241_115305 = state_115173__$1;(statearr_115241_115305[(1)] = (19));
} else
{var statearr_115242_115306 = state_115173__$1;(statearr_115242_115306[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (38)))
{var inst_115152 = (state_115173[(2)]);var state_115173__$1 = state_115173;var statearr_115243_115307 = state_115173__$1;(statearr_115243_115307[(2)] = inst_115152);
(statearr_115243_115307[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (30)))
{var state_115173__$1 = state_115173;var statearr_115244_115308 = state_115173__$1;(statearr_115244_115308[(2)] = null);
(statearr_115244_115308[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (10)))
{var inst_115055 = (state_115173[(15)]);var inst_115057 = (state_115173[(17)]);var inst_115063 = cljs.core._nth.call(null,inst_115055,inst_115057);var inst_115064 = cljs.core.nth.call(null,inst_115063,(0),null);var inst_115065 = cljs.core.nth.call(null,inst_115063,(1),null);var state_115173__$1 = (function (){var statearr_115245 = state_115173;(statearr_115245[(26)] = inst_115064);
return statearr_115245;
})();if(cljs.core.truth_(inst_115065))
{var statearr_115246_115309 = state_115173__$1;(statearr_115246_115309[(1)] = (13));
} else
{var statearr_115247_115310 = state_115173__$1;(statearr_115247_115310[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (18)))
{var inst_115098 = (state_115173[(2)]);var state_115173__$1 = state_115173;var statearr_115248_115311 = state_115173__$1;(statearr_115248_115311[(2)] = inst_115098);
(statearr_115248_115311[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (42)))
{var state_115173__$1 = state_115173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_115173__$1,(45),dchan);
} else
{if((state_val_115174 === (37)))
{var inst_115045 = (state_115173[(9)]);var inst_115132 = (state_115173[(25)]);var inst_115141 = (state_115173[(23)]);var inst_115141__$1 = cljs.core.first.call(null,inst_115132);var inst_115142 = cljs.core.async.put_BANG_.call(null,inst_115141__$1,inst_115045,done);var state_115173__$1 = (function (){var statearr_115249 = state_115173;(statearr_115249[(23)] = inst_115141__$1);
return statearr_115249;
})();if(cljs.core.truth_(inst_115142))
{var statearr_115250_115312 = state_115173__$1;(statearr_115250_115312[(1)] = (39));
} else
{var statearr_115251_115313 = state_115173__$1;(statearr_115251_115313[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115174 === (8)))
{var inst_115056 = (state_115173[(16)]);var inst_115057 = (state_115173[(17)]);var inst_115059 = (inst_115057 < inst_115056);var inst_115060 = inst_115059;var state_115173__$1 = state_115173;if(cljs.core.truth_(inst_115060))
{var statearr_115252_115314 = state_115173__$1;(statearr_115252_115314[(1)] = (10));
} else
{var statearr_115253_115315 = state_115173__$1;(statearr_115253_115315[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___115261,cs,m,dchan,dctr,done))
;return ((function (switch__14564__auto__,c__14620__auto___115261,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_115257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_115257[(0)] = state_machine__14565__auto__);
(statearr_115257[(1)] = (1));
return statearr_115257;
});
var state_machine__14565__auto____1 = (function (state_115173){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_115173);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e115258){if((e115258 instanceof Object))
{var ex__14568__auto__ = e115258;var statearr_115259_115316 = state_115173;(statearr_115259_115316[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e115258;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__115317 = state_115173;
state_115173 = G__115317;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_115173){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_115173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___115261,cs,m,dchan,dctr,done))
})();var state__14622__auto__ = (function (){var statearr_115260 = f__14621__auto__.call(null);(statearr_115260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___115261);
return statearr_115260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___115261,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj115319 = {};return obj115319;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11485__auto__ = m;if(and__11485__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12134__auto__ = (((m == null))?null:m);return (function (){var or__11497__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11485__auto__ = m;if(and__11485__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12134__auto__ = (((m == null))?null:m);return (function (){var or__11497__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11485__auto__ = m;if(and__11485__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12134__auto__ = (((m == null))?null:m);return (function (){var or__11497__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11485__auto__ = m;if(and__11485__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12134__auto__ = (((m == null))?null:m);return (function (){var or__11497__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11485__auto__ = m;if(and__11485__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12134__auto__ = (((m == null))?null:m);return (function (){var or__11497__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__115320){var map__115325 = p__115320;var map__115325__$1 = ((cljs.core.seq_QMARK_.call(null,map__115325))?cljs.core.apply.call(null,cljs.core.hash_map,map__115325):map__115325);var opts = map__115325__$1;var statearr_115326_115329 = state;(statearr_115326_115329[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__115325,map__115325__$1,opts){
return (function (val){var statearr_115327_115330 = state;(statearr_115327_115330[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__115325,map__115325__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4388__auto__))
{var cb = temp__4388__auto__;var statearr_115328_115331 = state;(statearr_115328_115331[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__115320 = null;if (arguments.length > 3) {
  p__115320 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__115320);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__115332){
var state = cljs.core.first(arglist__115332);
arglist__115332 = cljs.core.next(arglist__115332);
var cont_block = cljs.core.first(arglist__115332);
arglist__115332 = cljs.core.next(arglist__115332);
var ports = cljs.core.first(arglist__115332);
var p__115320 = cljs.core.rest(arglist__115332);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__115320);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t115452 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t115452 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta115453){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta115453 = meta115453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t115452.cljs$lang$type = true;
cljs.core.async.t115452.cljs$lang$ctorStr = "cljs.core.async/t115452";
cljs.core.async.t115452.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t115452");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t115452.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t115452.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t115452.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t115452.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t115452.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t115452.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t115452.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t115452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t115452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_115454){var self__ = this;
var _115454__$1 = this;return self__.meta115453;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t115452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_115454,meta115453__$1){var self__ = this;
var _115454__$1 = this;return (new cljs.core.async.t115452(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta115453__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t115452 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t115452(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta115453){return (new cljs.core.async.t115452(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta115453));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t115452(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__14620__auto___115571 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___115571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___115571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_115524){var state_val_115525 = (state_115524[(1)]);if((state_val_115525 === (7)))
{var inst_115468 = (state_115524[(7)]);var inst_115473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_115468);var state_115524__$1 = state_115524;var statearr_115526_115572 = state_115524__$1;(statearr_115526_115572[(2)] = inst_115473);
(statearr_115526_115572[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (20)))
{var inst_115483 = (state_115524[(8)]);var state_115524__$1 = state_115524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_115524__$1,(23),out,inst_115483);
} else
{if((state_val_115525 === (1)))
{var inst_115458 = (state_115524[(9)]);var inst_115458__$1 = calc_state.call(null);var inst_115459 = cljs.core.seq_QMARK_.call(null,inst_115458__$1);var state_115524__$1 = (function (){var statearr_115527 = state_115524;(statearr_115527[(9)] = inst_115458__$1);
return statearr_115527;
})();if(inst_115459)
{var statearr_115528_115573 = state_115524__$1;(statearr_115528_115573[(1)] = (2));
} else
{var statearr_115529_115574 = state_115524__$1;(statearr_115529_115574[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (24)))
{var inst_115476 = (state_115524[(10)]);var inst_115468 = inst_115476;var state_115524__$1 = (function (){var statearr_115530 = state_115524;(statearr_115530[(7)] = inst_115468);
return statearr_115530;
})();var statearr_115531_115575 = state_115524__$1;(statearr_115531_115575[(2)] = null);
(statearr_115531_115575[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (4)))
{var inst_115458 = (state_115524[(9)]);var inst_115464 = (state_115524[(2)]);var inst_115465 = cljs.core.get.call(null,inst_115464,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_115466 = cljs.core.get.call(null,inst_115464,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_115467 = cljs.core.get.call(null,inst_115464,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_115468 = inst_115458;var state_115524__$1 = (function (){var statearr_115532 = state_115524;(statearr_115532[(7)] = inst_115468);
(statearr_115532[(11)] = inst_115466);
(statearr_115532[(12)] = inst_115465);
(statearr_115532[(13)] = inst_115467);
return statearr_115532;
})();var statearr_115533_115576 = state_115524__$1;(statearr_115533_115576[(2)] = null);
(statearr_115533_115576[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (15)))
{var state_115524__$1 = state_115524;var statearr_115534_115577 = state_115524__$1;(statearr_115534_115577[(2)] = null);
(statearr_115534_115577[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (21)))
{var inst_115476 = (state_115524[(10)]);var inst_115468 = inst_115476;var state_115524__$1 = (function (){var statearr_115535 = state_115524;(statearr_115535[(7)] = inst_115468);
return statearr_115535;
})();var statearr_115536_115578 = state_115524__$1;(statearr_115536_115578[(2)] = null);
(statearr_115536_115578[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (13)))
{var inst_115520 = (state_115524[(2)]);var state_115524__$1 = state_115524;var statearr_115537_115579 = state_115524__$1;(statearr_115537_115579[(2)] = inst_115520);
(statearr_115537_115579[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (22)))
{var inst_115518 = (state_115524[(2)]);var state_115524__$1 = state_115524;var statearr_115538_115580 = state_115524__$1;(statearr_115538_115580[(2)] = inst_115518);
(statearr_115538_115580[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (6)))
{var inst_115522 = (state_115524[(2)]);var state_115524__$1 = state_115524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_115524__$1,inst_115522);
} else
{if((state_val_115525 === (25)))
{var state_115524__$1 = state_115524;var statearr_115539_115581 = state_115524__$1;(statearr_115539_115581[(2)] = null);
(statearr_115539_115581[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (17)))
{var inst_115498 = (state_115524[(14)]);var state_115524__$1 = state_115524;var statearr_115540_115582 = state_115524__$1;(statearr_115540_115582[(2)] = inst_115498);
(statearr_115540_115582[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (3)))
{var inst_115458 = (state_115524[(9)]);var state_115524__$1 = state_115524;var statearr_115541_115583 = state_115524__$1;(statearr_115541_115583[(2)] = inst_115458);
(statearr_115541_115583[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (12)))
{var inst_115498 = (state_115524[(14)]);var inst_115479 = (state_115524[(15)]);var inst_115484 = (state_115524[(16)]);var inst_115498__$1 = inst_115479.call(null,inst_115484);var state_115524__$1 = (function (){var statearr_115542 = state_115524;(statearr_115542[(14)] = inst_115498__$1);
return statearr_115542;
})();if(cljs.core.truth_(inst_115498__$1))
{var statearr_115543_115584 = state_115524__$1;(statearr_115543_115584[(1)] = (17));
} else
{var statearr_115544_115585 = state_115524__$1;(statearr_115544_115585[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (2)))
{var inst_115458 = (state_115524[(9)]);var inst_115461 = cljs.core.apply.call(null,cljs.core.hash_map,inst_115458);var state_115524__$1 = state_115524;var statearr_115545_115586 = state_115524__$1;(statearr_115545_115586[(2)] = inst_115461);
(statearr_115545_115586[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (23)))
{var inst_115509 = (state_115524[(2)]);var state_115524__$1 = state_115524;if(cljs.core.truth_(inst_115509))
{var statearr_115546_115587 = state_115524__$1;(statearr_115546_115587[(1)] = (24));
} else
{var statearr_115547_115588 = state_115524__$1;(statearr_115547_115588[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (19)))
{var inst_115506 = (state_115524[(2)]);var state_115524__$1 = state_115524;if(cljs.core.truth_(inst_115506))
{var statearr_115548_115589 = state_115524__$1;(statearr_115548_115589[(1)] = (20));
} else
{var statearr_115549_115590 = state_115524__$1;(statearr_115549_115590[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (11)))
{var inst_115483 = (state_115524[(8)]);var inst_115489 = (inst_115483 == null);var state_115524__$1 = state_115524;if(cljs.core.truth_(inst_115489))
{var statearr_115550_115591 = state_115524__$1;(statearr_115550_115591[(1)] = (14));
} else
{var statearr_115551_115592 = state_115524__$1;(statearr_115551_115592[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (9)))
{var inst_115476 = (state_115524[(10)]);var inst_115476__$1 = (state_115524[(2)]);var inst_115477 = cljs.core.get.call(null,inst_115476__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_115478 = cljs.core.get.call(null,inst_115476__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_115479 = cljs.core.get.call(null,inst_115476__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_115524__$1 = (function (){var statearr_115552 = state_115524;(statearr_115552[(15)] = inst_115479);
(statearr_115552[(17)] = inst_115478);
(statearr_115552[(10)] = inst_115476__$1);
return statearr_115552;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_115524__$1,(10),inst_115477);
} else
{if((state_val_115525 === (5)))
{var inst_115468 = (state_115524[(7)]);var inst_115471 = cljs.core.seq_QMARK_.call(null,inst_115468);var state_115524__$1 = state_115524;if(inst_115471)
{var statearr_115553_115593 = state_115524__$1;(statearr_115553_115593[(1)] = (7));
} else
{var statearr_115554_115594 = state_115524__$1;(statearr_115554_115594[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (14)))
{var inst_115484 = (state_115524[(16)]);var inst_115491 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_115484);var state_115524__$1 = state_115524;var statearr_115555_115595 = state_115524__$1;(statearr_115555_115595[(2)] = inst_115491);
(statearr_115555_115595[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (26)))
{var inst_115514 = (state_115524[(2)]);var state_115524__$1 = state_115524;var statearr_115556_115596 = state_115524__$1;(statearr_115556_115596[(2)] = inst_115514);
(statearr_115556_115596[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (16)))
{var inst_115494 = (state_115524[(2)]);var inst_115495 = calc_state.call(null);var inst_115468 = inst_115495;var state_115524__$1 = (function (){var statearr_115557 = state_115524;(statearr_115557[(7)] = inst_115468);
(statearr_115557[(18)] = inst_115494);
return statearr_115557;
})();var statearr_115558_115597 = state_115524__$1;(statearr_115558_115597[(2)] = null);
(statearr_115558_115597[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (10)))
{var inst_115483 = (state_115524[(8)]);var inst_115484 = (state_115524[(16)]);var inst_115482 = (state_115524[(2)]);var inst_115483__$1 = cljs.core.nth.call(null,inst_115482,(0),null);var inst_115484__$1 = cljs.core.nth.call(null,inst_115482,(1),null);var inst_115485 = (inst_115483__$1 == null);var inst_115486 = cljs.core._EQ_.call(null,inst_115484__$1,change);var inst_115487 = (inst_115485) || (inst_115486);var state_115524__$1 = (function (){var statearr_115559 = state_115524;(statearr_115559[(8)] = inst_115483__$1);
(statearr_115559[(16)] = inst_115484__$1);
return statearr_115559;
})();if(cljs.core.truth_(inst_115487))
{var statearr_115560_115598 = state_115524__$1;(statearr_115560_115598[(1)] = (11));
} else
{var statearr_115561_115599 = state_115524__$1;(statearr_115561_115599[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (18)))
{var inst_115479 = (state_115524[(15)]);var inst_115478 = (state_115524[(17)]);var inst_115484 = (state_115524[(16)]);var inst_115501 = cljs.core.empty_QMARK_.call(null,inst_115479);var inst_115502 = inst_115478.call(null,inst_115484);var inst_115503 = cljs.core.not.call(null,inst_115502);var inst_115504 = (inst_115501) && (inst_115503);var state_115524__$1 = state_115524;var statearr_115562_115600 = state_115524__$1;(statearr_115562_115600[(2)] = inst_115504);
(statearr_115562_115600[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115525 === (8)))
{var inst_115468 = (state_115524[(7)]);var state_115524__$1 = state_115524;var statearr_115563_115601 = state_115524__$1;(statearr_115563_115601[(2)] = inst_115468);
(statearr_115563_115601[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___115571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__14564__auto__,c__14620__auto___115571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_115567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_115567[(0)] = state_machine__14565__auto__);
(statearr_115567[(1)] = (1));
return statearr_115567;
});
var state_machine__14565__auto____1 = (function (state_115524){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_115524);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e115568){if((e115568 instanceof Object))
{var ex__14568__auto__ = e115568;var statearr_115569_115602 = state_115524;(statearr_115569_115602[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115524);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e115568;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__115603 = state_115524;
state_115524 = G__115603;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_115524){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_115524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___115571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14622__auto__ = (function (){var statearr_115570 = f__14621__auto__.call(null);(statearr_115570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___115571);
return statearr_115570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___115571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj115605 = {};return obj115605;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11485__auto__ = p;if(and__11485__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11485__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12134__auto__ = (((p == null))?null:p);return (function (){var or__11497__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11485__auto__ = p;if(and__11485__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11485__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12134__auto__ = (((p == null))?null:p);return (function (){var or__11497__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11485__auto__ = p;if(and__11485__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12134__auto__ = (((p == null))?null:p);return (function (){var or__11497__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11485__auto__ = p;if(and__11485__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12134__auto__ = (((p == null))?null:p);return (function (){var or__11497__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__11497__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11497__auto__,mults){
return (function (p1__115606_SHARP_){if(cljs.core.truth_(p1__115606_SHARP_.call(null,topic)))
{return p1__115606_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__115606_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11497__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t115729 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t115729 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta115730){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta115730 = meta115730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t115729.cljs$lang$type = true;
cljs.core.async.t115729.cljs$lang$ctorStr = "cljs.core.async/t115729";
cljs.core.async.t115729.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t115729");
});})(mults,ensure_mult))
;
cljs.core.async.t115729.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t115729.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t115729.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4388__auto__))
{var m = temp__4388__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t115729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t115729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t115729.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t115729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t115729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_115731){var self__ = this;
var _115731__$1 = this;return self__.meta115730;
});})(mults,ensure_mult))
;
cljs.core.async.t115729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_115731,meta115730__$1){var self__ = this;
var _115731__$1 = this;return (new cljs.core.async.t115729(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta115730__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t115729 = ((function (mults,ensure_mult){
return (function __GT_t115729(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta115730){return (new cljs.core.async.t115729(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta115730));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t115729(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14620__auto___115851 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___115851,mults,ensure_mult,p){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___115851,mults,ensure_mult,p){
return (function (state_115803){var state_val_115804 = (state_115803[(1)]);if((state_val_115804 === (7)))
{var inst_115799 = (state_115803[(2)]);var state_115803__$1 = state_115803;var statearr_115805_115852 = state_115803__$1;(statearr_115805_115852[(2)] = inst_115799);
(statearr_115805_115852[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (20)))
{var state_115803__$1 = state_115803;var statearr_115806_115853 = state_115803__$1;(statearr_115806_115853[(2)] = null);
(statearr_115806_115853[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (1)))
{var state_115803__$1 = state_115803;var statearr_115807_115854 = state_115803__$1;(statearr_115807_115854[(2)] = null);
(statearr_115807_115854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (24)))
{var inst_115782 = (state_115803[(7)]);var inst_115791 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_115782);var state_115803__$1 = state_115803;var statearr_115808_115855 = state_115803__$1;(statearr_115808_115855[(2)] = inst_115791);
(statearr_115808_115855[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (4)))
{var inst_115734 = (state_115803[(8)]);var inst_115734__$1 = (state_115803[(2)]);var inst_115735 = (inst_115734__$1 == null);var state_115803__$1 = (function (){var statearr_115809 = state_115803;(statearr_115809[(8)] = inst_115734__$1);
return statearr_115809;
})();if(cljs.core.truth_(inst_115735))
{var statearr_115810_115856 = state_115803__$1;(statearr_115810_115856[(1)] = (5));
} else
{var statearr_115811_115857 = state_115803__$1;(statearr_115811_115857[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (15)))
{var inst_115776 = (state_115803[(2)]);var state_115803__$1 = state_115803;var statearr_115812_115858 = state_115803__$1;(statearr_115812_115858[(2)] = inst_115776);
(statearr_115812_115858[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (21)))
{var inst_115796 = (state_115803[(2)]);var state_115803__$1 = (function (){var statearr_115813 = state_115803;(statearr_115813[(9)] = inst_115796);
return statearr_115813;
})();var statearr_115814_115859 = state_115803__$1;(statearr_115814_115859[(2)] = null);
(statearr_115814_115859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (13)))
{var inst_115758 = (state_115803[(10)]);var inst_115760 = cljs.core.chunked_seq_QMARK_.call(null,inst_115758);var state_115803__$1 = state_115803;if(inst_115760)
{var statearr_115815_115860 = state_115803__$1;(statearr_115815_115860[(1)] = (16));
} else
{var statearr_115816_115861 = state_115803__$1;(statearr_115816_115861[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (22)))
{var inst_115788 = (state_115803[(2)]);var state_115803__$1 = state_115803;if(cljs.core.truth_(inst_115788))
{var statearr_115817_115862 = state_115803__$1;(statearr_115817_115862[(1)] = (23));
} else
{var statearr_115818_115863 = state_115803__$1;(statearr_115818_115863[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (6)))
{var inst_115782 = (state_115803[(7)]);var inst_115734 = (state_115803[(8)]);var inst_115784 = (state_115803[(11)]);var inst_115782__$1 = topic_fn.call(null,inst_115734);var inst_115783 = cljs.core.deref.call(null,mults);var inst_115784__$1 = cljs.core.get.call(null,inst_115783,inst_115782__$1);var state_115803__$1 = (function (){var statearr_115819 = state_115803;(statearr_115819[(7)] = inst_115782__$1);
(statearr_115819[(11)] = inst_115784__$1);
return statearr_115819;
})();if(cljs.core.truth_(inst_115784__$1))
{var statearr_115820_115864 = state_115803__$1;(statearr_115820_115864[(1)] = (19));
} else
{var statearr_115821_115865 = state_115803__$1;(statearr_115821_115865[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (25)))
{var inst_115793 = (state_115803[(2)]);var state_115803__$1 = state_115803;var statearr_115822_115866 = state_115803__$1;(statearr_115822_115866[(2)] = inst_115793);
(statearr_115822_115866[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (17)))
{var inst_115758 = (state_115803[(10)]);var inst_115767 = cljs.core.first.call(null,inst_115758);var inst_115768 = cljs.core.async.muxch_STAR_.call(null,inst_115767);var inst_115769 = cljs.core.async.close_BANG_.call(null,inst_115768);var inst_115770 = cljs.core.next.call(null,inst_115758);var inst_115744 = inst_115770;var inst_115745 = null;var inst_115746 = (0);var inst_115747 = (0);var state_115803__$1 = (function (){var statearr_115823 = state_115803;(statearr_115823[(12)] = inst_115744);
(statearr_115823[(13)] = inst_115747);
(statearr_115823[(14)] = inst_115745);
(statearr_115823[(15)] = inst_115769);
(statearr_115823[(16)] = inst_115746);
return statearr_115823;
})();var statearr_115824_115867 = state_115803__$1;(statearr_115824_115867[(2)] = null);
(statearr_115824_115867[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (3)))
{var inst_115801 = (state_115803[(2)]);var state_115803__$1 = state_115803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_115803__$1,inst_115801);
} else
{if((state_val_115804 === (12)))
{var inst_115778 = (state_115803[(2)]);var state_115803__$1 = state_115803;var statearr_115825_115868 = state_115803__$1;(statearr_115825_115868[(2)] = inst_115778);
(statearr_115825_115868[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (2)))
{var state_115803__$1 = state_115803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_115803__$1,(4),ch);
} else
{if((state_val_115804 === (23)))
{var state_115803__$1 = state_115803;var statearr_115826_115869 = state_115803__$1;(statearr_115826_115869[(2)] = null);
(statearr_115826_115869[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (19)))
{var inst_115734 = (state_115803[(8)]);var inst_115784 = (state_115803[(11)]);var inst_115786 = cljs.core.async.muxch_STAR_.call(null,inst_115784);var state_115803__$1 = state_115803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_115803__$1,(22),inst_115786,inst_115734);
} else
{if((state_val_115804 === (11)))
{var inst_115744 = (state_115803[(12)]);var inst_115758 = (state_115803[(10)]);var inst_115758__$1 = cljs.core.seq.call(null,inst_115744);var state_115803__$1 = (function (){var statearr_115827 = state_115803;(statearr_115827[(10)] = inst_115758__$1);
return statearr_115827;
})();if(inst_115758__$1)
{var statearr_115828_115870 = state_115803__$1;(statearr_115828_115870[(1)] = (13));
} else
{var statearr_115829_115871 = state_115803__$1;(statearr_115829_115871[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (9)))
{var inst_115780 = (state_115803[(2)]);var state_115803__$1 = state_115803;var statearr_115830_115872 = state_115803__$1;(statearr_115830_115872[(2)] = inst_115780);
(statearr_115830_115872[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (5)))
{var inst_115741 = cljs.core.deref.call(null,mults);var inst_115742 = cljs.core.vals.call(null,inst_115741);var inst_115743 = cljs.core.seq.call(null,inst_115742);var inst_115744 = inst_115743;var inst_115745 = null;var inst_115746 = (0);var inst_115747 = (0);var state_115803__$1 = (function (){var statearr_115831 = state_115803;(statearr_115831[(12)] = inst_115744);
(statearr_115831[(13)] = inst_115747);
(statearr_115831[(14)] = inst_115745);
(statearr_115831[(16)] = inst_115746);
return statearr_115831;
})();var statearr_115832_115873 = state_115803__$1;(statearr_115832_115873[(2)] = null);
(statearr_115832_115873[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (14)))
{var state_115803__$1 = state_115803;var statearr_115836_115874 = state_115803__$1;(statearr_115836_115874[(2)] = null);
(statearr_115836_115874[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (16)))
{var inst_115758 = (state_115803[(10)]);var inst_115762 = cljs.core.chunk_first.call(null,inst_115758);var inst_115763 = cljs.core.chunk_rest.call(null,inst_115758);var inst_115764 = cljs.core.count.call(null,inst_115762);var inst_115744 = inst_115763;var inst_115745 = inst_115762;var inst_115746 = inst_115764;var inst_115747 = (0);var state_115803__$1 = (function (){var statearr_115837 = state_115803;(statearr_115837[(12)] = inst_115744);
(statearr_115837[(13)] = inst_115747);
(statearr_115837[(14)] = inst_115745);
(statearr_115837[(16)] = inst_115746);
return statearr_115837;
})();var statearr_115838_115875 = state_115803__$1;(statearr_115838_115875[(2)] = null);
(statearr_115838_115875[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (10)))
{var inst_115744 = (state_115803[(12)]);var inst_115747 = (state_115803[(13)]);var inst_115745 = (state_115803[(14)]);var inst_115746 = (state_115803[(16)]);var inst_115752 = cljs.core._nth.call(null,inst_115745,inst_115747);var inst_115753 = cljs.core.async.muxch_STAR_.call(null,inst_115752);var inst_115754 = cljs.core.async.close_BANG_.call(null,inst_115753);var inst_115755 = (inst_115747 + (1));var tmp115833 = inst_115744;var tmp115834 = inst_115745;var tmp115835 = inst_115746;var inst_115744__$1 = tmp115833;var inst_115745__$1 = tmp115834;var inst_115746__$1 = tmp115835;var inst_115747__$1 = inst_115755;var state_115803__$1 = (function (){var statearr_115839 = state_115803;(statearr_115839[(12)] = inst_115744__$1);
(statearr_115839[(13)] = inst_115747__$1);
(statearr_115839[(14)] = inst_115745__$1);
(statearr_115839[(16)] = inst_115746__$1);
(statearr_115839[(17)] = inst_115754);
return statearr_115839;
})();var statearr_115840_115876 = state_115803__$1;(statearr_115840_115876[(2)] = null);
(statearr_115840_115876[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (18)))
{var inst_115773 = (state_115803[(2)]);var state_115803__$1 = state_115803;var statearr_115841_115877 = state_115803__$1;(statearr_115841_115877[(2)] = inst_115773);
(statearr_115841_115877[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115804 === (8)))
{var inst_115747 = (state_115803[(13)]);var inst_115746 = (state_115803[(16)]);var inst_115749 = (inst_115747 < inst_115746);var inst_115750 = inst_115749;var state_115803__$1 = state_115803;if(cljs.core.truth_(inst_115750))
{var statearr_115842_115878 = state_115803__$1;(statearr_115842_115878[(1)] = (10));
} else
{var statearr_115843_115879 = state_115803__$1;(statearr_115843_115879[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___115851,mults,ensure_mult,p))
;return ((function (switch__14564__auto__,c__14620__auto___115851,mults,ensure_mult,p){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_115847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_115847[(0)] = state_machine__14565__auto__);
(statearr_115847[(1)] = (1));
return statearr_115847;
});
var state_machine__14565__auto____1 = (function (state_115803){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_115803);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e115848){if((e115848 instanceof Object))
{var ex__14568__auto__ = e115848;var statearr_115849_115880 = state_115803;(statearr_115849_115880[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115803);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e115848;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__115881 = state_115803;
state_115803 = G__115881;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_115803){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_115803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___115851,mults,ensure_mult,p))
})();var state__14622__auto__ = (function (){var statearr_115850 = f__14621__auto__.call(null);(statearr_115850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___115851);
return statearr_115850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___115851,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__14620__auto___116018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___116018,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___116018,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_115988){var state_val_115989 = (state_115988[(1)]);if((state_val_115989 === (7)))
{var state_115988__$1 = state_115988;var statearr_115990_116019 = state_115988__$1;(statearr_115990_116019[(2)] = null);
(statearr_115990_116019[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (1)))
{var state_115988__$1 = state_115988;var statearr_115991_116020 = state_115988__$1;(statearr_115991_116020[(2)] = null);
(statearr_115991_116020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (4)))
{var inst_115952 = (state_115988[(7)]);var inst_115954 = (inst_115952 < cnt);var state_115988__$1 = state_115988;if(cljs.core.truth_(inst_115954))
{var statearr_115992_116021 = state_115988__$1;(statearr_115992_116021[(1)] = (6));
} else
{var statearr_115993_116022 = state_115988__$1;(statearr_115993_116022[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (15)))
{var inst_115984 = (state_115988[(2)]);var state_115988__$1 = state_115988;var statearr_115994_116023 = state_115988__$1;(statearr_115994_116023[(2)] = inst_115984);
(statearr_115994_116023[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (13)))
{var inst_115977 = cljs.core.async.close_BANG_.call(null,out);var state_115988__$1 = state_115988;var statearr_115995_116024 = state_115988__$1;(statearr_115995_116024[(2)] = inst_115977);
(statearr_115995_116024[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (6)))
{var state_115988__$1 = state_115988;var statearr_115996_116025 = state_115988__$1;(statearr_115996_116025[(2)] = null);
(statearr_115996_116025[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (3)))
{var inst_115986 = (state_115988[(2)]);var state_115988__$1 = state_115988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_115988__$1,inst_115986);
} else
{if((state_val_115989 === (12)))
{var inst_115974 = (state_115988[(8)]);var inst_115974__$1 = (state_115988[(2)]);var inst_115975 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_115974__$1);var state_115988__$1 = (function (){var statearr_115997 = state_115988;(statearr_115997[(8)] = inst_115974__$1);
return statearr_115997;
})();if(cljs.core.truth_(inst_115975))
{var statearr_115998_116026 = state_115988__$1;(statearr_115998_116026[(1)] = (13));
} else
{var statearr_115999_116027 = state_115988__$1;(statearr_115999_116027[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (2)))
{var inst_115951 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_115952 = (0);var state_115988__$1 = (function (){var statearr_116000 = state_115988;(statearr_116000[(9)] = inst_115951);
(statearr_116000[(7)] = inst_115952);
return statearr_116000;
})();var statearr_116001_116028 = state_115988__$1;(statearr_116001_116028[(2)] = null);
(statearr_116001_116028[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (11)))
{var inst_115952 = (state_115988[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_115988,(10),Object,null,(9));var inst_115961 = chs__$1.call(null,inst_115952);var inst_115962 = done.call(null,inst_115952);var inst_115963 = cljs.core.async.take_BANG_.call(null,inst_115961,inst_115962);var state_115988__$1 = state_115988;var statearr_116002_116029 = state_115988__$1;(statearr_116002_116029[(2)] = inst_115963);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115988__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (9)))
{var inst_115952 = (state_115988[(7)]);var inst_115965 = (state_115988[(2)]);var inst_115966 = (inst_115952 + (1));var inst_115952__$1 = inst_115966;var state_115988__$1 = (function (){var statearr_116003 = state_115988;(statearr_116003[(10)] = inst_115965);
(statearr_116003[(7)] = inst_115952__$1);
return statearr_116003;
})();var statearr_116004_116030 = state_115988__$1;(statearr_116004_116030[(2)] = null);
(statearr_116004_116030[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (5)))
{var inst_115972 = (state_115988[(2)]);var state_115988__$1 = (function (){var statearr_116005 = state_115988;(statearr_116005[(11)] = inst_115972);
return statearr_116005;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_115988__$1,(12),dchan);
} else
{if((state_val_115989 === (14)))
{var inst_115974 = (state_115988[(8)]);var inst_115979 = cljs.core.apply.call(null,f,inst_115974);var state_115988__$1 = state_115988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_115988__$1,(16),out,inst_115979);
} else
{if((state_val_115989 === (16)))
{var inst_115981 = (state_115988[(2)]);var state_115988__$1 = (function (){var statearr_116006 = state_115988;(statearr_116006[(12)] = inst_115981);
return statearr_116006;
})();var statearr_116007_116031 = state_115988__$1;(statearr_116007_116031[(2)] = null);
(statearr_116007_116031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (10)))
{var inst_115956 = (state_115988[(2)]);var inst_115957 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_115988__$1 = (function (){var statearr_116008 = state_115988;(statearr_116008[(13)] = inst_115956);
return statearr_116008;
})();var statearr_116009_116032 = state_115988__$1;(statearr_116009_116032[(2)] = inst_115957);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115988__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_115989 === (8)))
{var inst_115970 = (state_115988[(2)]);var state_115988__$1 = state_115988;var statearr_116010_116033 = state_115988__$1;(statearr_116010_116033[(2)] = inst_115970);
(statearr_116010_116033[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___116018,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__14564__auto__,c__14620__auto___116018,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_116014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_116014[(0)] = state_machine__14565__auto__);
(statearr_116014[(1)] = (1));
return statearr_116014;
});
var state_machine__14565__auto____1 = (function (state_115988){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_115988);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e116015){if((e116015 instanceof Object))
{var ex__14568__auto__ = e116015;var statearr_116016_116034 = state_115988;(statearr_116016_116034[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115988);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116015;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116035 = state_115988;
state_115988 = G__116035;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_115988){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_115988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___116018,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14622__auto__ = (function (){var statearr_116017 = f__14621__auto__.call(null);(statearr_116017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___116018);
return statearr_116017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___116018,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___116143 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___116143,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___116143,out){
return (function (state_116119){var state_val_116120 = (state_116119[(1)]);if((state_val_116120 === (7)))
{var inst_116098 = (state_116119[(7)]);var inst_116099 = (state_116119[(8)]);var inst_116098__$1 = (state_116119[(2)]);var inst_116099__$1 = cljs.core.nth.call(null,inst_116098__$1,(0),null);var inst_116100 = cljs.core.nth.call(null,inst_116098__$1,(1),null);var inst_116101 = (inst_116099__$1 == null);var state_116119__$1 = (function (){var statearr_116121 = state_116119;(statearr_116121[(7)] = inst_116098__$1);
(statearr_116121[(8)] = inst_116099__$1);
(statearr_116121[(9)] = inst_116100);
return statearr_116121;
})();if(cljs.core.truth_(inst_116101))
{var statearr_116122_116144 = state_116119__$1;(statearr_116122_116144[(1)] = (8));
} else
{var statearr_116123_116145 = state_116119__$1;(statearr_116123_116145[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116120 === (1)))
{var inst_116090 = cljs.core.vec.call(null,chs);var inst_116091 = inst_116090;var state_116119__$1 = (function (){var statearr_116124 = state_116119;(statearr_116124[(10)] = inst_116091);
return statearr_116124;
})();var statearr_116125_116146 = state_116119__$1;(statearr_116125_116146[(2)] = null);
(statearr_116125_116146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116120 === (4)))
{var inst_116091 = (state_116119[(10)]);var state_116119__$1 = state_116119;return cljs.core.async.ioc_alts_BANG_.call(null,state_116119__$1,(7),inst_116091);
} else
{if((state_val_116120 === (6)))
{var inst_116115 = (state_116119[(2)]);var state_116119__$1 = state_116119;var statearr_116126_116147 = state_116119__$1;(statearr_116126_116147[(2)] = inst_116115);
(statearr_116126_116147[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116120 === (3)))
{var inst_116117 = (state_116119[(2)]);var state_116119__$1 = state_116119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116119__$1,inst_116117);
} else
{if((state_val_116120 === (2)))
{var inst_116091 = (state_116119[(10)]);var inst_116093 = cljs.core.count.call(null,inst_116091);var inst_116094 = (inst_116093 > (0));var state_116119__$1 = state_116119;if(cljs.core.truth_(inst_116094))
{var statearr_116128_116148 = state_116119__$1;(statearr_116128_116148[(1)] = (4));
} else
{var statearr_116129_116149 = state_116119__$1;(statearr_116129_116149[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116120 === (11)))
{var inst_116091 = (state_116119[(10)]);var inst_116108 = (state_116119[(2)]);var tmp116127 = inst_116091;var inst_116091__$1 = tmp116127;var state_116119__$1 = (function (){var statearr_116130 = state_116119;(statearr_116130[(10)] = inst_116091__$1);
(statearr_116130[(11)] = inst_116108);
return statearr_116130;
})();var statearr_116131_116150 = state_116119__$1;(statearr_116131_116150[(2)] = null);
(statearr_116131_116150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116120 === (9)))
{var inst_116099 = (state_116119[(8)]);var state_116119__$1 = state_116119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116119__$1,(11),out,inst_116099);
} else
{if((state_val_116120 === (5)))
{var inst_116113 = cljs.core.async.close_BANG_.call(null,out);var state_116119__$1 = state_116119;var statearr_116132_116151 = state_116119__$1;(statearr_116132_116151[(2)] = inst_116113);
(statearr_116132_116151[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116120 === (10)))
{var inst_116111 = (state_116119[(2)]);var state_116119__$1 = state_116119;var statearr_116133_116152 = state_116119__$1;(statearr_116133_116152[(2)] = inst_116111);
(statearr_116133_116152[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116120 === (8)))
{var inst_116098 = (state_116119[(7)]);var inst_116091 = (state_116119[(10)]);var inst_116099 = (state_116119[(8)]);var inst_116100 = (state_116119[(9)]);var inst_116103 = (function (){var c = inst_116100;var v = inst_116099;var vec__116096 = inst_116098;var cs = inst_116091;return ((function (c,v,vec__116096,cs,inst_116098,inst_116091,inst_116099,inst_116100,state_val_116120,c__14620__auto___116143,out){
return (function (p1__116036_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__116036_SHARP_);
});
;})(c,v,vec__116096,cs,inst_116098,inst_116091,inst_116099,inst_116100,state_val_116120,c__14620__auto___116143,out))
})();var inst_116104 = cljs.core.filterv.call(null,inst_116103,inst_116091);var inst_116091__$1 = inst_116104;var state_116119__$1 = (function (){var statearr_116134 = state_116119;(statearr_116134[(10)] = inst_116091__$1);
return statearr_116134;
})();var statearr_116135_116153 = state_116119__$1;(statearr_116135_116153[(2)] = null);
(statearr_116135_116153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___116143,out))
;return ((function (switch__14564__auto__,c__14620__auto___116143,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_116139 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_116139[(0)] = state_machine__14565__auto__);
(statearr_116139[(1)] = (1));
return statearr_116139;
});
var state_machine__14565__auto____1 = (function (state_116119){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_116119);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e116140){if((e116140 instanceof Object))
{var ex__14568__auto__ = e116140;var statearr_116141_116154 = state_116119;(statearr_116141_116154[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116140;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116155 = state_116119;
state_116119 = G__116155;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_116119){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_116119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___116143,out))
})();var state__14622__auto__ = (function (){var statearr_116142 = f__14621__auto__.call(null);(statearr_116142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___116143);
return statearr_116142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___116143,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___116248 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___116248,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___116248,out){
return (function (state_116225){var state_val_116226 = (state_116225[(1)]);if((state_val_116226 === (7)))
{var inst_116207 = (state_116225[(7)]);var inst_116207__$1 = (state_116225[(2)]);var inst_116208 = (inst_116207__$1 == null);var inst_116209 = cljs.core.not.call(null,inst_116208);var state_116225__$1 = (function (){var statearr_116227 = state_116225;(statearr_116227[(7)] = inst_116207__$1);
return statearr_116227;
})();if(inst_116209)
{var statearr_116228_116249 = state_116225__$1;(statearr_116228_116249[(1)] = (8));
} else
{var statearr_116229_116250 = state_116225__$1;(statearr_116229_116250[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116226 === (1)))
{var inst_116202 = (0);var state_116225__$1 = (function (){var statearr_116230 = state_116225;(statearr_116230[(8)] = inst_116202);
return statearr_116230;
})();var statearr_116231_116251 = state_116225__$1;(statearr_116231_116251[(2)] = null);
(statearr_116231_116251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116226 === (4)))
{var state_116225__$1 = state_116225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_116225__$1,(7),ch);
} else
{if((state_val_116226 === (6)))
{var inst_116220 = (state_116225[(2)]);var state_116225__$1 = state_116225;var statearr_116232_116252 = state_116225__$1;(statearr_116232_116252[(2)] = inst_116220);
(statearr_116232_116252[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116226 === (3)))
{var inst_116222 = (state_116225[(2)]);var inst_116223 = cljs.core.async.close_BANG_.call(null,out);var state_116225__$1 = (function (){var statearr_116233 = state_116225;(statearr_116233[(9)] = inst_116222);
return statearr_116233;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116225__$1,inst_116223);
} else
{if((state_val_116226 === (2)))
{var inst_116202 = (state_116225[(8)]);var inst_116204 = (inst_116202 < n);var state_116225__$1 = state_116225;if(cljs.core.truth_(inst_116204))
{var statearr_116234_116253 = state_116225__$1;(statearr_116234_116253[(1)] = (4));
} else
{var statearr_116235_116254 = state_116225__$1;(statearr_116235_116254[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116226 === (11)))
{var inst_116202 = (state_116225[(8)]);var inst_116212 = (state_116225[(2)]);var inst_116213 = (inst_116202 + (1));var inst_116202__$1 = inst_116213;var state_116225__$1 = (function (){var statearr_116236 = state_116225;(statearr_116236[(8)] = inst_116202__$1);
(statearr_116236[(10)] = inst_116212);
return statearr_116236;
})();var statearr_116237_116255 = state_116225__$1;(statearr_116237_116255[(2)] = null);
(statearr_116237_116255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116226 === (9)))
{var state_116225__$1 = state_116225;var statearr_116238_116256 = state_116225__$1;(statearr_116238_116256[(2)] = null);
(statearr_116238_116256[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116226 === (5)))
{var state_116225__$1 = state_116225;var statearr_116239_116257 = state_116225__$1;(statearr_116239_116257[(2)] = null);
(statearr_116239_116257[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116226 === (10)))
{var inst_116217 = (state_116225[(2)]);var state_116225__$1 = state_116225;var statearr_116240_116258 = state_116225__$1;(statearr_116240_116258[(2)] = inst_116217);
(statearr_116240_116258[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116226 === (8)))
{var inst_116207 = (state_116225[(7)]);var state_116225__$1 = state_116225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116225__$1,(11),out,inst_116207);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___116248,out))
;return ((function (switch__14564__auto__,c__14620__auto___116248,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_116244 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_116244[(0)] = state_machine__14565__auto__);
(statearr_116244[(1)] = (1));
return statearr_116244;
});
var state_machine__14565__auto____1 = (function (state_116225){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_116225);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e116245){if((e116245 instanceof Object))
{var ex__14568__auto__ = e116245;var statearr_116246_116259 = state_116225;(statearr_116246_116259[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116225);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116245;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116260 = state_116225;
state_116225 = G__116260;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_116225){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_116225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___116248,out))
})();var state__14622__auto__ = (function (){var statearr_116247 = f__14621__auto__.call(null);(statearr_116247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___116248);
return statearr_116247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___116248,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t116268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t116268 = (function (ch,f,map_LT_,meta116269){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta116269 = meta116269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t116268.cljs$lang$type = true;
cljs.core.async.t116268.cljs$lang$ctorStr = "cljs.core.async/t116268";
cljs.core.async.t116268.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t116268");
});
cljs.core.async.t116268.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t116268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t116268.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t116268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t116271 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t116271 = (function (fn1,_,meta116269,ch,f,map_LT_,meta116272){
this.fn1 = fn1;
this._ = _;
this.meta116269 = meta116269;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta116272 = meta116272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t116271.cljs$lang$type = true;
cljs.core.async.t116271.cljs$lang$ctorStr = "cljs.core.async/t116271";
cljs.core.async.t116271.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t116271");
});})(___$1))
;
cljs.core.async.t116271.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t116271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t116271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__116261_SHARP_){return f1.call(null,(((p1__116261_SHARP_ == null))?null:self__.f.call(null,p1__116261_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t116271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_116273){var self__ = this;
var _116273__$1 = this;return self__.meta116272;
});})(___$1))
;
cljs.core.async.t116271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_116273,meta116272__$1){var self__ = this;
var _116273__$1 = this;return (new cljs.core.async.t116271(self__.fn1,self__._,self__.meta116269,self__.ch,self__.f,self__.map_LT_,meta116272__$1));
});})(___$1))
;
cljs.core.async.__GT_t116271 = ((function (___$1){
return (function __GT_t116271(fn1__$1,___$2,meta116269__$1,ch__$2,f__$2,map_LT___$2,meta116272){return (new cljs.core.async.t116271(fn1__$1,___$2,meta116269__$1,ch__$2,f__$2,map_LT___$2,meta116272));
});})(___$1))
;
}
return (new cljs.core.async.t116271(fn1,___$1,self__.meta116269,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11485__auto__ = ret;if(cljs.core.truth_(and__11485__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11485__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t116268.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t116268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t116268.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t116268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116270){var self__ = this;
var _116270__$1 = this;return self__.meta116269;
});
cljs.core.async.t116268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116270,meta116269__$1){var self__ = this;
var _116270__$1 = this;return (new cljs.core.async.t116268(self__.ch,self__.f,self__.map_LT_,meta116269__$1));
});
cljs.core.async.__GT_t116268 = (function __GT_t116268(ch__$1,f__$1,map_LT___$1,meta116269){return (new cljs.core.async.t116268(ch__$1,f__$1,map_LT___$1,meta116269));
});
}
return (new cljs.core.async.t116268(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t116277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t116277 = (function (ch,f,map_GT_,meta116278){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta116278 = meta116278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t116277.cljs$lang$type = true;
cljs.core.async.t116277.cljs$lang$ctorStr = "cljs.core.async/t116277";
cljs.core.async.t116277.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t116277");
});
cljs.core.async.t116277.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t116277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t116277.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t116277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t116277.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t116277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t116277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116279){var self__ = this;
var _116279__$1 = this;return self__.meta116278;
});
cljs.core.async.t116277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116279,meta116278__$1){var self__ = this;
var _116279__$1 = this;return (new cljs.core.async.t116277(self__.ch,self__.f,self__.map_GT_,meta116278__$1));
});
cljs.core.async.__GT_t116277 = (function __GT_t116277(ch__$1,f__$1,map_GT___$1,meta116278){return (new cljs.core.async.t116277(ch__$1,f__$1,map_GT___$1,meta116278));
});
}
return (new cljs.core.async.t116277(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t116283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t116283 = (function (ch,p,filter_GT_,meta116284){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta116284 = meta116284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t116283.cljs$lang$type = true;
cljs.core.async.t116283.cljs$lang$ctorStr = "cljs.core.async/t116283";
cljs.core.async.t116283.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t116283");
});
cljs.core.async.t116283.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t116283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t116283.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t116283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t116283.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t116283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t116283.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t116283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116285){var self__ = this;
var _116285__$1 = this;return self__.meta116284;
});
cljs.core.async.t116283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116285,meta116284__$1){var self__ = this;
var _116285__$1 = this;return (new cljs.core.async.t116283(self__.ch,self__.p,self__.filter_GT_,meta116284__$1));
});
cljs.core.async.__GT_t116283 = (function __GT_t116283(ch__$1,p__$1,filter_GT___$1,meta116284){return (new cljs.core.async.t116283(ch__$1,p__$1,filter_GT___$1,meta116284));
});
}
return (new cljs.core.async.t116283(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___116368 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___116368,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___116368,out){
return (function (state_116347){var state_val_116348 = (state_116347[(1)]);if((state_val_116348 === (7)))
{var inst_116343 = (state_116347[(2)]);var state_116347__$1 = state_116347;var statearr_116349_116369 = state_116347__$1;(statearr_116349_116369[(2)] = inst_116343);
(statearr_116349_116369[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116348 === (1)))
{var state_116347__$1 = state_116347;var statearr_116350_116370 = state_116347__$1;(statearr_116350_116370[(2)] = null);
(statearr_116350_116370[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116348 === (4)))
{var inst_116329 = (state_116347[(7)]);var inst_116329__$1 = (state_116347[(2)]);var inst_116330 = (inst_116329__$1 == null);var state_116347__$1 = (function (){var statearr_116351 = state_116347;(statearr_116351[(7)] = inst_116329__$1);
return statearr_116351;
})();if(cljs.core.truth_(inst_116330))
{var statearr_116352_116371 = state_116347__$1;(statearr_116352_116371[(1)] = (5));
} else
{var statearr_116353_116372 = state_116347__$1;(statearr_116353_116372[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116348 === (6)))
{var inst_116329 = (state_116347[(7)]);var inst_116334 = p.call(null,inst_116329);var state_116347__$1 = state_116347;if(cljs.core.truth_(inst_116334))
{var statearr_116354_116373 = state_116347__$1;(statearr_116354_116373[(1)] = (8));
} else
{var statearr_116355_116374 = state_116347__$1;(statearr_116355_116374[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116348 === (3)))
{var inst_116345 = (state_116347[(2)]);var state_116347__$1 = state_116347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116347__$1,inst_116345);
} else
{if((state_val_116348 === (2)))
{var state_116347__$1 = state_116347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_116347__$1,(4),ch);
} else
{if((state_val_116348 === (11)))
{var inst_116337 = (state_116347[(2)]);var state_116347__$1 = state_116347;var statearr_116356_116375 = state_116347__$1;(statearr_116356_116375[(2)] = inst_116337);
(statearr_116356_116375[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116348 === (9)))
{var state_116347__$1 = state_116347;var statearr_116357_116376 = state_116347__$1;(statearr_116357_116376[(2)] = null);
(statearr_116357_116376[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116348 === (5)))
{var inst_116332 = cljs.core.async.close_BANG_.call(null,out);var state_116347__$1 = state_116347;var statearr_116358_116377 = state_116347__$1;(statearr_116358_116377[(2)] = inst_116332);
(statearr_116358_116377[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116348 === (10)))
{var inst_116340 = (state_116347[(2)]);var state_116347__$1 = (function (){var statearr_116359 = state_116347;(statearr_116359[(8)] = inst_116340);
return statearr_116359;
})();var statearr_116360_116378 = state_116347__$1;(statearr_116360_116378[(2)] = null);
(statearr_116360_116378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116348 === (8)))
{var inst_116329 = (state_116347[(7)]);var state_116347__$1 = state_116347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116347__$1,(11),out,inst_116329);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___116368,out))
;return ((function (switch__14564__auto__,c__14620__auto___116368,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_116364 = [null,null,null,null,null,null,null,null,null];(statearr_116364[(0)] = state_machine__14565__auto__);
(statearr_116364[(1)] = (1));
return statearr_116364;
});
var state_machine__14565__auto____1 = (function (state_116347){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_116347);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e116365){if((e116365 instanceof Object))
{var ex__14568__auto__ = e116365;var statearr_116366_116379 = state_116347;(statearr_116366_116379[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116365;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116380 = state_116347;
state_116347 = G__116380;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_116347){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_116347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___116368,out))
})();var state__14622__auto__ = (function (){var statearr_116367 = f__14621__auto__.call(null);(statearr_116367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___116368);
return statearr_116367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___116368,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__){
return (function (state_116546){var state_val_116547 = (state_116546[(1)]);if((state_val_116547 === (7)))
{var inst_116542 = (state_116546[(2)]);var state_116546__$1 = state_116546;var statearr_116548_116589 = state_116546__$1;(statearr_116548_116589[(2)] = inst_116542);
(statearr_116548_116589[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (20)))
{var inst_116512 = (state_116546[(7)]);var inst_116523 = (state_116546[(2)]);var inst_116524 = cljs.core.next.call(null,inst_116512);var inst_116498 = inst_116524;var inst_116499 = null;var inst_116500 = (0);var inst_116501 = (0);var state_116546__$1 = (function (){var statearr_116549 = state_116546;(statearr_116549[(8)] = inst_116523);
(statearr_116549[(9)] = inst_116500);
(statearr_116549[(10)] = inst_116501);
(statearr_116549[(11)] = inst_116499);
(statearr_116549[(12)] = inst_116498);
return statearr_116549;
})();var statearr_116550_116590 = state_116546__$1;(statearr_116550_116590[(2)] = null);
(statearr_116550_116590[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (1)))
{var state_116546__$1 = state_116546;var statearr_116551_116591 = state_116546__$1;(statearr_116551_116591[(2)] = null);
(statearr_116551_116591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (4)))
{var inst_116487 = (state_116546[(13)]);var inst_116487__$1 = (state_116546[(2)]);var inst_116488 = (inst_116487__$1 == null);var state_116546__$1 = (function (){var statearr_116552 = state_116546;(statearr_116552[(13)] = inst_116487__$1);
return statearr_116552;
})();if(cljs.core.truth_(inst_116488))
{var statearr_116553_116592 = state_116546__$1;(statearr_116553_116592[(1)] = (5));
} else
{var statearr_116554_116593 = state_116546__$1;(statearr_116554_116593[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (15)))
{var state_116546__$1 = state_116546;var statearr_116558_116594 = state_116546__$1;(statearr_116558_116594[(2)] = null);
(statearr_116558_116594[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (21)))
{var state_116546__$1 = state_116546;var statearr_116559_116595 = state_116546__$1;(statearr_116559_116595[(2)] = null);
(statearr_116559_116595[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (13)))
{var inst_116500 = (state_116546[(9)]);var inst_116501 = (state_116546[(10)]);var inst_116499 = (state_116546[(11)]);var inst_116498 = (state_116546[(12)]);var inst_116508 = (state_116546[(2)]);var inst_116509 = (inst_116501 + (1));var tmp116555 = inst_116500;var tmp116556 = inst_116499;var tmp116557 = inst_116498;var inst_116498__$1 = tmp116557;var inst_116499__$1 = tmp116556;var inst_116500__$1 = tmp116555;var inst_116501__$1 = inst_116509;var state_116546__$1 = (function (){var statearr_116560 = state_116546;(statearr_116560[(9)] = inst_116500__$1);
(statearr_116560[(10)] = inst_116501__$1);
(statearr_116560[(11)] = inst_116499__$1);
(statearr_116560[(12)] = inst_116498__$1);
(statearr_116560[(14)] = inst_116508);
return statearr_116560;
})();var statearr_116561_116596 = state_116546__$1;(statearr_116561_116596[(2)] = null);
(statearr_116561_116596[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (22)))
{var state_116546__$1 = state_116546;var statearr_116562_116597 = state_116546__$1;(statearr_116562_116597[(2)] = null);
(statearr_116562_116597[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (6)))
{var inst_116487 = (state_116546[(13)]);var inst_116496 = f.call(null,inst_116487);var inst_116497 = cljs.core.seq.call(null,inst_116496);var inst_116498 = inst_116497;var inst_116499 = null;var inst_116500 = (0);var inst_116501 = (0);var state_116546__$1 = (function (){var statearr_116563 = state_116546;(statearr_116563[(9)] = inst_116500);
(statearr_116563[(10)] = inst_116501);
(statearr_116563[(11)] = inst_116499);
(statearr_116563[(12)] = inst_116498);
return statearr_116563;
})();var statearr_116564_116598 = state_116546__$1;(statearr_116564_116598[(2)] = null);
(statearr_116564_116598[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (17)))
{var inst_116512 = (state_116546[(7)]);var inst_116516 = cljs.core.chunk_first.call(null,inst_116512);var inst_116517 = cljs.core.chunk_rest.call(null,inst_116512);var inst_116518 = cljs.core.count.call(null,inst_116516);var inst_116498 = inst_116517;var inst_116499 = inst_116516;var inst_116500 = inst_116518;var inst_116501 = (0);var state_116546__$1 = (function (){var statearr_116565 = state_116546;(statearr_116565[(9)] = inst_116500);
(statearr_116565[(10)] = inst_116501);
(statearr_116565[(11)] = inst_116499);
(statearr_116565[(12)] = inst_116498);
return statearr_116565;
})();var statearr_116566_116599 = state_116546__$1;(statearr_116566_116599[(2)] = null);
(statearr_116566_116599[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (3)))
{var inst_116544 = (state_116546[(2)]);var state_116546__$1 = state_116546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116546__$1,inst_116544);
} else
{if((state_val_116547 === (12)))
{var inst_116532 = (state_116546[(2)]);var state_116546__$1 = state_116546;var statearr_116567_116600 = state_116546__$1;(statearr_116567_116600[(2)] = inst_116532);
(statearr_116567_116600[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (2)))
{var state_116546__$1 = state_116546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_116546__$1,(4),in$);
} else
{if((state_val_116547 === (23)))
{var inst_116540 = (state_116546[(2)]);var state_116546__$1 = state_116546;var statearr_116568_116601 = state_116546__$1;(statearr_116568_116601[(2)] = inst_116540);
(statearr_116568_116601[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (19)))
{var inst_116527 = (state_116546[(2)]);var state_116546__$1 = state_116546;var statearr_116569_116602 = state_116546__$1;(statearr_116569_116602[(2)] = inst_116527);
(statearr_116569_116602[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (11)))
{var inst_116512 = (state_116546[(7)]);var inst_116498 = (state_116546[(12)]);var inst_116512__$1 = cljs.core.seq.call(null,inst_116498);var state_116546__$1 = (function (){var statearr_116570 = state_116546;(statearr_116570[(7)] = inst_116512__$1);
return statearr_116570;
})();if(inst_116512__$1)
{var statearr_116571_116603 = state_116546__$1;(statearr_116571_116603[(1)] = (14));
} else
{var statearr_116572_116604 = state_116546__$1;(statearr_116572_116604[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (9)))
{var inst_116534 = (state_116546[(2)]);var inst_116535 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_116546__$1 = (function (){var statearr_116573 = state_116546;(statearr_116573[(15)] = inst_116534);
return statearr_116573;
})();if(cljs.core.truth_(inst_116535))
{var statearr_116574_116605 = state_116546__$1;(statearr_116574_116605[(1)] = (21));
} else
{var statearr_116575_116606 = state_116546__$1;(statearr_116575_116606[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (5)))
{var inst_116490 = cljs.core.async.close_BANG_.call(null,out);var state_116546__$1 = state_116546;var statearr_116576_116607 = state_116546__$1;(statearr_116576_116607[(2)] = inst_116490);
(statearr_116576_116607[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (14)))
{var inst_116512 = (state_116546[(7)]);var inst_116514 = cljs.core.chunked_seq_QMARK_.call(null,inst_116512);var state_116546__$1 = state_116546;if(inst_116514)
{var statearr_116577_116608 = state_116546__$1;(statearr_116577_116608[(1)] = (17));
} else
{var statearr_116578_116609 = state_116546__$1;(statearr_116578_116609[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (16)))
{var inst_116530 = (state_116546[(2)]);var state_116546__$1 = state_116546;var statearr_116579_116610 = state_116546__$1;(statearr_116579_116610[(2)] = inst_116530);
(statearr_116579_116610[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116547 === (10)))
{var inst_116501 = (state_116546[(10)]);var inst_116499 = (state_116546[(11)]);var inst_116506 = cljs.core._nth.call(null,inst_116499,inst_116501);var state_116546__$1 = state_116546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116546__$1,(13),out,inst_116506);
} else
{if((state_val_116547 === (18)))
{var inst_116512 = (state_116546[(7)]);var inst_116521 = cljs.core.first.call(null,inst_116512);var state_116546__$1 = state_116546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116546__$1,(20),out,inst_116521);
} else
{if((state_val_116547 === (8)))
{var inst_116500 = (state_116546[(9)]);var inst_116501 = (state_116546[(10)]);var inst_116503 = (inst_116501 < inst_116500);var inst_116504 = inst_116503;var state_116546__$1 = state_116546;if(cljs.core.truth_(inst_116504))
{var statearr_116580_116611 = state_116546__$1;(statearr_116580_116611[(1)] = (10));
} else
{var statearr_116581_116612 = state_116546__$1;(statearr_116581_116612[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto__))
;return ((function (switch__14564__auto__,c__14620__auto__){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_116585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_116585[(0)] = state_machine__14565__auto__);
(statearr_116585[(1)] = (1));
return statearr_116585;
});
var state_machine__14565__auto____1 = (function (state_116546){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_116546);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e116586){if((e116586 instanceof Object))
{var ex__14568__auto__ = e116586;var statearr_116587_116613 = state_116546;(statearr_116587_116613[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116586;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116614 = state_116546;
state_116546 = G__116614;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_116546){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_116546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__))
})();var state__14622__auto__ = (function (){var statearr_116588 = f__14621__auto__.call(null);(statearr_116588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_116588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__))
);
return c__14620__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___116711 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___116711,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___116711,out){
return (function (state_116686){var state_val_116687 = (state_116686[(1)]);if((state_val_116687 === (7)))
{var inst_116681 = (state_116686[(2)]);var state_116686__$1 = state_116686;var statearr_116688_116712 = state_116686__$1;(statearr_116688_116712[(2)] = inst_116681);
(statearr_116688_116712[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116687 === (1)))
{var inst_116663 = null;var state_116686__$1 = (function (){var statearr_116689 = state_116686;(statearr_116689[(7)] = inst_116663);
return statearr_116689;
})();var statearr_116690_116713 = state_116686__$1;(statearr_116690_116713[(2)] = null);
(statearr_116690_116713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116687 === (4)))
{var inst_116666 = (state_116686[(8)]);var inst_116666__$1 = (state_116686[(2)]);var inst_116667 = (inst_116666__$1 == null);var inst_116668 = cljs.core.not.call(null,inst_116667);var state_116686__$1 = (function (){var statearr_116691 = state_116686;(statearr_116691[(8)] = inst_116666__$1);
return statearr_116691;
})();if(inst_116668)
{var statearr_116692_116714 = state_116686__$1;(statearr_116692_116714[(1)] = (5));
} else
{var statearr_116693_116715 = state_116686__$1;(statearr_116693_116715[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116687 === (6)))
{var state_116686__$1 = state_116686;var statearr_116694_116716 = state_116686__$1;(statearr_116694_116716[(2)] = null);
(statearr_116694_116716[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116687 === (3)))
{var inst_116683 = (state_116686[(2)]);var inst_116684 = cljs.core.async.close_BANG_.call(null,out);var state_116686__$1 = (function (){var statearr_116695 = state_116686;(statearr_116695[(9)] = inst_116683);
return statearr_116695;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116686__$1,inst_116684);
} else
{if((state_val_116687 === (2)))
{var state_116686__$1 = state_116686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_116686__$1,(4),ch);
} else
{if((state_val_116687 === (11)))
{var inst_116666 = (state_116686[(8)]);var inst_116675 = (state_116686[(2)]);var inst_116663 = inst_116666;var state_116686__$1 = (function (){var statearr_116696 = state_116686;(statearr_116696[(7)] = inst_116663);
(statearr_116696[(10)] = inst_116675);
return statearr_116696;
})();var statearr_116697_116717 = state_116686__$1;(statearr_116697_116717[(2)] = null);
(statearr_116697_116717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116687 === (9)))
{var inst_116666 = (state_116686[(8)]);var state_116686__$1 = state_116686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116686__$1,(11),out,inst_116666);
} else
{if((state_val_116687 === (5)))
{var inst_116663 = (state_116686[(7)]);var inst_116666 = (state_116686[(8)]);var inst_116670 = cljs.core._EQ_.call(null,inst_116666,inst_116663);var state_116686__$1 = state_116686;if(inst_116670)
{var statearr_116699_116718 = state_116686__$1;(statearr_116699_116718[(1)] = (8));
} else
{var statearr_116700_116719 = state_116686__$1;(statearr_116700_116719[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116687 === (10)))
{var inst_116678 = (state_116686[(2)]);var state_116686__$1 = state_116686;var statearr_116701_116720 = state_116686__$1;(statearr_116701_116720[(2)] = inst_116678);
(statearr_116701_116720[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116687 === (8)))
{var inst_116663 = (state_116686[(7)]);var tmp116698 = inst_116663;var inst_116663__$1 = tmp116698;var state_116686__$1 = (function (){var statearr_116702 = state_116686;(statearr_116702[(7)] = inst_116663__$1);
return statearr_116702;
})();var statearr_116703_116721 = state_116686__$1;(statearr_116703_116721[(2)] = null);
(statearr_116703_116721[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___116711,out))
;return ((function (switch__14564__auto__,c__14620__auto___116711,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_116707 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_116707[(0)] = state_machine__14565__auto__);
(statearr_116707[(1)] = (1));
return statearr_116707;
});
var state_machine__14565__auto____1 = (function (state_116686){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_116686);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e116708){if((e116708 instanceof Object))
{var ex__14568__auto__ = e116708;var statearr_116709_116722 = state_116686;(statearr_116709_116722[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116686);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116708;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116723 = state_116686;
state_116686 = G__116723;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_116686){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_116686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___116711,out))
})();var state__14622__auto__ = (function (){var statearr_116710 = f__14621__auto__.call(null);(statearr_116710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___116711);
return statearr_116710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___116711,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___116858 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___116858,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___116858,out){
return (function (state_116828){var state_val_116829 = (state_116828[(1)]);if((state_val_116829 === (7)))
{var inst_116824 = (state_116828[(2)]);var state_116828__$1 = state_116828;var statearr_116830_116859 = state_116828__$1;(statearr_116830_116859[(2)] = inst_116824);
(statearr_116830_116859[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (1)))
{var inst_116791 = (new Array(n));var inst_116792 = inst_116791;var inst_116793 = (0);var state_116828__$1 = (function (){var statearr_116831 = state_116828;(statearr_116831[(7)] = inst_116793);
(statearr_116831[(8)] = inst_116792);
return statearr_116831;
})();var statearr_116832_116860 = state_116828__$1;(statearr_116832_116860[(2)] = null);
(statearr_116832_116860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (4)))
{var inst_116796 = (state_116828[(9)]);var inst_116796__$1 = (state_116828[(2)]);var inst_116797 = (inst_116796__$1 == null);var inst_116798 = cljs.core.not.call(null,inst_116797);var state_116828__$1 = (function (){var statearr_116833 = state_116828;(statearr_116833[(9)] = inst_116796__$1);
return statearr_116833;
})();if(inst_116798)
{var statearr_116834_116861 = state_116828__$1;(statearr_116834_116861[(1)] = (5));
} else
{var statearr_116835_116862 = state_116828__$1;(statearr_116835_116862[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (15)))
{var inst_116818 = (state_116828[(2)]);var state_116828__$1 = state_116828;var statearr_116836_116863 = state_116828__$1;(statearr_116836_116863[(2)] = inst_116818);
(statearr_116836_116863[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (13)))
{var state_116828__$1 = state_116828;var statearr_116837_116864 = state_116828__$1;(statearr_116837_116864[(2)] = null);
(statearr_116837_116864[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (6)))
{var inst_116793 = (state_116828[(7)]);var inst_116814 = (inst_116793 > (0));var state_116828__$1 = state_116828;if(cljs.core.truth_(inst_116814))
{var statearr_116838_116865 = state_116828__$1;(statearr_116838_116865[(1)] = (12));
} else
{var statearr_116839_116866 = state_116828__$1;(statearr_116839_116866[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (3)))
{var inst_116826 = (state_116828[(2)]);var state_116828__$1 = state_116828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116828__$1,inst_116826);
} else
{if((state_val_116829 === (12)))
{var inst_116792 = (state_116828[(8)]);var inst_116816 = cljs.core.vec.call(null,inst_116792);var state_116828__$1 = state_116828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116828__$1,(15),out,inst_116816);
} else
{if((state_val_116829 === (2)))
{var state_116828__$1 = state_116828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_116828__$1,(4),ch);
} else
{if((state_val_116829 === (11)))
{var inst_116808 = (state_116828[(2)]);var inst_116809 = (new Array(n));var inst_116792 = inst_116809;var inst_116793 = (0);var state_116828__$1 = (function (){var statearr_116840 = state_116828;(statearr_116840[(7)] = inst_116793);
(statearr_116840[(10)] = inst_116808);
(statearr_116840[(8)] = inst_116792);
return statearr_116840;
})();var statearr_116841_116867 = state_116828__$1;(statearr_116841_116867[(2)] = null);
(statearr_116841_116867[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (9)))
{var inst_116792 = (state_116828[(8)]);var inst_116806 = cljs.core.vec.call(null,inst_116792);var state_116828__$1 = state_116828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116828__$1,(11),out,inst_116806);
} else
{if((state_val_116829 === (5)))
{var inst_116793 = (state_116828[(7)]);var inst_116801 = (state_116828[(11)]);var inst_116796 = (state_116828[(9)]);var inst_116792 = (state_116828[(8)]);var inst_116800 = (inst_116792[inst_116793] = inst_116796);var inst_116801__$1 = (inst_116793 + (1));var inst_116802 = (inst_116801__$1 < n);var state_116828__$1 = (function (){var statearr_116842 = state_116828;(statearr_116842[(11)] = inst_116801__$1);
(statearr_116842[(12)] = inst_116800);
return statearr_116842;
})();if(cljs.core.truth_(inst_116802))
{var statearr_116843_116868 = state_116828__$1;(statearr_116843_116868[(1)] = (8));
} else
{var statearr_116844_116869 = state_116828__$1;(statearr_116844_116869[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (14)))
{var inst_116821 = (state_116828[(2)]);var inst_116822 = cljs.core.async.close_BANG_.call(null,out);var state_116828__$1 = (function (){var statearr_116846 = state_116828;(statearr_116846[(13)] = inst_116821);
return statearr_116846;
})();var statearr_116847_116870 = state_116828__$1;(statearr_116847_116870[(2)] = inst_116822);
(statearr_116847_116870[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (10)))
{var inst_116812 = (state_116828[(2)]);var state_116828__$1 = state_116828;var statearr_116848_116871 = state_116828__$1;(statearr_116848_116871[(2)] = inst_116812);
(statearr_116848_116871[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116829 === (8)))
{var inst_116801 = (state_116828[(11)]);var inst_116792 = (state_116828[(8)]);var tmp116845 = inst_116792;var inst_116792__$1 = tmp116845;var inst_116793 = inst_116801;var state_116828__$1 = (function (){var statearr_116849 = state_116828;(statearr_116849[(7)] = inst_116793);
(statearr_116849[(8)] = inst_116792__$1);
return statearr_116849;
})();var statearr_116850_116872 = state_116828__$1;(statearr_116850_116872[(2)] = null);
(statearr_116850_116872[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___116858,out))
;return ((function (switch__14564__auto__,c__14620__auto___116858,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_116854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_116854[(0)] = state_machine__14565__auto__);
(statearr_116854[(1)] = (1));
return statearr_116854;
});
var state_machine__14565__auto____1 = (function (state_116828){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_116828);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e116855){if((e116855 instanceof Object))
{var ex__14568__auto__ = e116855;var statearr_116856_116873 = state_116828;(statearr_116856_116873[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116855;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116874 = state_116828;
state_116828 = G__116874;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_116828){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_116828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___116858,out))
})();var state__14622__auto__ = (function (){var statearr_116857 = f__14621__auto__.call(null);(statearr_116857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___116858);
return statearr_116857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___116858,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___117017 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___117017,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___117017,out){
return (function (state_116987){var state_val_116988 = (state_116987[(1)]);if((state_val_116988 === (7)))
{var inst_116983 = (state_116987[(2)]);var state_116987__$1 = state_116987;var statearr_116989_117018 = state_116987__$1;(statearr_116989_117018[(2)] = inst_116983);
(statearr_116989_117018[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (1)))
{var inst_116946 = [];var inst_116947 = inst_116946;var inst_116948 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_116987__$1 = (function (){var statearr_116990 = state_116987;(statearr_116990[(7)] = inst_116947);
(statearr_116990[(8)] = inst_116948);
return statearr_116990;
})();var statearr_116991_117019 = state_116987__$1;(statearr_116991_117019[(2)] = null);
(statearr_116991_117019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (4)))
{var inst_116951 = (state_116987[(9)]);var inst_116951__$1 = (state_116987[(2)]);var inst_116952 = (inst_116951__$1 == null);var inst_116953 = cljs.core.not.call(null,inst_116952);var state_116987__$1 = (function (){var statearr_116992 = state_116987;(statearr_116992[(9)] = inst_116951__$1);
return statearr_116992;
})();if(inst_116953)
{var statearr_116993_117020 = state_116987__$1;(statearr_116993_117020[(1)] = (5));
} else
{var statearr_116994_117021 = state_116987__$1;(statearr_116994_117021[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (15)))
{var inst_116977 = (state_116987[(2)]);var state_116987__$1 = state_116987;var statearr_116995_117022 = state_116987__$1;(statearr_116995_117022[(2)] = inst_116977);
(statearr_116995_117022[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (13)))
{var state_116987__$1 = state_116987;var statearr_116996_117023 = state_116987__$1;(statearr_116996_117023[(2)] = null);
(statearr_116996_117023[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (6)))
{var inst_116947 = (state_116987[(7)]);var inst_116972 = inst_116947.length;var inst_116973 = (inst_116972 > (0));var state_116987__$1 = state_116987;if(cljs.core.truth_(inst_116973))
{var statearr_116997_117024 = state_116987__$1;(statearr_116997_117024[(1)] = (12));
} else
{var statearr_116998_117025 = state_116987__$1;(statearr_116998_117025[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (3)))
{var inst_116985 = (state_116987[(2)]);var state_116987__$1 = state_116987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116987__$1,inst_116985);
} else
{if((state_val_116988 === (12)))
{var inst_116947 = (state_116987[(7)]);var inst_116975 = cljs.core.vec.call(null,inst_116947);var state_116987__$1 = state_116987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116987__$1,(15),out,inst_116975);
} else
{if((state_val_116988 === (2)))
{var state_116987__$1 = state_116987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_116987__$1,(4),ch);
} else
{if((state_val_116988 === (11)))
{var inst_116951 = (state_116987[(9)]);var inst_116955 = (state_116987[(10)]);var inst_116965 = (state_116987[(2)]);var inst_116966 = [];var inst_116967 = inst_116966.push(inst_116951);var inst_116947 = inst_116966;var inst_116948 = inst_116955;var state_116987__$1 = (function (){var statearr_116999 = state_116987;(statearr_116999[(7)] = inst_116947);
(statearr_116999[(11)] = inst_116965);
(statearr_116999[(8)] = inst_116948);
(statearr_116999[(12)] = inst_116967);
return statearr_116999;
})();var statearr_117000_117026 = state_116987__$1;(statearr_117000_117026[(2)] = null);
(statearr_117000_117026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (9)))
{var inst_116947 = (state_116987[(7)]);var inst_116963 = cljs.core.vec.call(null,inst_116947);var state_116987__$1 = state_116987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116987__$1,(11),out,inst_116963);
} else
{if((state_val_116988 === (5)))
{var inst_116951 = (state_116987[(9)]);var inst_116955 = (state_116987[(10)]);var inst_116948 = (state_116987[(8)]);var inst_116955__$1 = f.call(null,inst_116951);var inst_116956 = cljs.core._EQ_.call(null,inst_116955__$1,inst_116948);var inst_116957 = cljs.core.keyword_identical_QMARK_.call(null,inst_116948,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_116958 = (inst_116956) || (inst_116957);var state_116987__$1 = (function (){var statearr_117001 = state_116987;(statearr_117001[(10)] = inst_116955__$1);
return statearr_117001;
})();if(cljs.core.truth_(inst_116958))
{var statearr_117002_117027 = state_116987__$1;(statearr_117002_117027[(1)] = (8));
} else
{var statearr_117003_117028 = state_116987__$1;(statearr_117003_117028[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (14)))
{var inst_116980 = (state_116987[(2)]);var inst_116981 = cljs.core.async.close_BANG_.call(null,out);var state_116987__$1 = (function (){var statearr_117005 = state_116987;(statearr_117005[(13)] = inst_116980);
return statearr_117005;
})();var statearr_117006_117029 = state_116987__$1;(statearr_117006_117029[(2)] = inst_116981);
(statearr_117006_117029[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (10)))
{var inst_116970 = (state_116987[(2)]);var state_116987__$1 = state_116987;var statearr_117007_117030 = state_116987__$1;(statearr_117007_117030[(2)] = inst_116970);
(statearr_117007_117030[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116988 === (8)))
{var inst_116951 = (state_116987[(9)]);var inst_116947 = (state_116987[(7)]);var inst_116955 = (state_116987[(10)]);var inst_116960 = inst_116947.push(inst_116951);var tmp117004 = inst_116947;var inst_116947__$1 = tmp117004;var inst_116948 = inst_116955;var state_116987__$1 = (function (){var statearr_117008 = state_116987;(statearr_117008[(7)] = inst_116947__$1);
(statearr_117008[(14)] = inst_116960);
(statearr_117008[(8)] = inst_116948);
return statearr_117008;
})();var statearr_117009_117031 = state_116987__$1;(statearr_117009_117031[(2)] = null);
(statearr_117009_117031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14620__auto___117017,out))
;return ((function (switch__14564__auto__,c__14620__auto___117017,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_117013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_117013[(0)] = state_machine__14565__auto__);
(statearr_117013[(1)] = (1));
return statearr_117013;
});
var state_machine__14565__auto____1 = (function (state_116987){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_116987);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e117014){if((e117014 instanceof Object))
{var ex__14568__auto__ = e117014;var statearr_117015_117032 = state_116987;(statearr_117015_117032[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116987);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e117014;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__117033 = state_116987;
state_116987 = G__117033;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_116987){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_116987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___117017,out))
})();var state__14622__auto__ = (function (){var statearr_117016 = f__14621__auto__.call(null);(statearr_117016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___117017);
return statearr_117016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___117017,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map