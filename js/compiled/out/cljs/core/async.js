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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t95567 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t95567 = (function (f,fn_handler,meta95568){
this.f = f;
this.fn_handler = fn_handler;
this.meta95568 = meta95568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t95567.cljs$lang$type = true;
cljs.core.async.t95567.cljs$lang$ctorStr = "cljs.core.async/t95567";
cljs.core.async.t95567.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t95567");
});
cljs.core.async.t95567.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t95567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t95567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t95567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_95569){var self__ = this;
var _95569__$1 = this;return self__.meta95568;
});
cljs.core.async.t95567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_95569,meta95568__$1){var self__ = this;
var _95569__$1 = this;return (new cljs.core.async.t95567(self__.f,self__.fn_handler,meta95568__$1));
});
cljs.core.async.__GT_t95567 = (function __GT_t95567(f__$1,fn_handler__$1,meta95568){return (new cljs.core.async.t95567(f__$1,fn_handler__$1,meta95568));
});
}
return (new cljs.core.async.t95567(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__95571 = buff;if(G__95571)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__95571.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__95571.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__95571);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__95571);
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
{var val_95572 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_95572);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_95572,ret){
return (function (){return fn1.call(null,val_95572);
});})(val_95572,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12367__auto___95573 = n;var x_95574 = (0);while(true){
if((x_95574 < n__12367__auto___95573))
{(a[x_95574] = (0));
{
var G__95575 = (x_95574 + (1));
x_95574 = G__95575;
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
var G__95576 = (i + (1));
i = G__95576;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t95580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t95580 = (function (flag,alt_flag,meta95581){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta95581 = meta95581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t95580.cljs$lang$type = true;
cljs.core.async.t95580.cljs$lang$ctorStr = "cljs.core.async/t95580";
cljs.core.async.t95580.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t95580");
});})(flag))
;
cljs.core.async.t95580.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t95580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t95580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t95580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_95582){var self__ = this;
var _95582__$1 = this;return self__.meta95581;
});})(flag))
;
cljs.core.async.t95580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_95582,meta95581__$1){var self__ = this;
var _95582__$1 = this;return (new cljs.core.async.t95580(self__.flag,self__.alt_flag,meta95581__$1));
});})(flag))
;
cljs.core.async.__GT_t95580 = ((function (flag){
return (function __GT_t95580(flag__$1,alt_flag__$1,meta95581){return (new cljs.core.async.t95580(flag__$1,alt_flag__$1,meta95581));
});})(flag))
;
}
return (new cljs.core.async.t95580(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t95586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t95586 = (function (cb,flag,alt_handler,meta95587){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta95587 = meta95587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t95586.cljs$lang$type = true;
cljs.core.async.t95586.cljs$lang$ctorStr = "cljs.core.async/t95586";
cljs.core.async.t95586.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t95586");
});
cljs.core.async.t95586.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t95586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t95586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t95586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_95588){var self__ = this;
var _95588__$1 = this;return self__.meta95587;
});
cljs.core.async.t95586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_95588,meta95587__$1){var self__ = this;
var _95588__$1 = this;return (new cljs.core.async.t95586(self__.cb,self__.flag,self__.alt_handler,meta95587__$1));
});
cljs.core.async.__GT_t95586 = (function __GT_t95586(cb__$1,flag__$1,alt_handler__$1,meta95587){return (new cljs.core.async.t95586(cb__$1,flag__$1,alt_handler__$1,meta95587));
});
}
return (new cljs.core.async.t95586(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__95589_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__95589_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__95590_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__95590_SHARP_,port], null));
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
var G__95591 = (i + (1));
i = G__95591;
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
var alts_BANG___delegate = function (ports,p__95592){var map__95594 = p__95592;var map__95594__$1 = ((cljs.core.seq_QMARK_.call(null,map__95594))?cljs.core.apply.call(null,cljs.core.hash_map,map__95594):map__95594);var opts = map__95594__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__95592 = null;if (arguments.length > 1) {
  p__95592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__95592);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__95595){
var ports = cljs.core.first(arglist__95595);
var p__95592 = cljs.core.rest(arglist__95595);
return alts_BANG___delegate(ports,p__95592);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__14620__auto___95690 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___95690){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___95690){
return (function (state_95666){var state_val_95667 = (state_95666[(1)]);if((state_val_95667 === (7)))
{var inst_95662 = (state_95666[(2)]);var state_95666__$1 = state_95666;var statearr_95668_95691 = state_95666__$1;(statearr_95668_95691[(2)] = inst_95662);
(statearr_95668_95691[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (1)))
{var state_95666__$1 = state_95666;var statearr_95669_95692 = state_95666__$1;(statearr_95669_95692[(2)] = null);
(statearr_95669_95692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (4)))
{var inst_95645 = (state_95666[(7)]);var inst_95645__$1 = (state_95666[(2)]);var inst_95646 = (inst_95645__$1 == null);var state_95666__$1 = (function (){var statearr_95670 = state_95666;(statearr_95670[(7)] = inst_95645__$1);
return statearr_95670;
})();if(cljs.core.truth_(inst_95646))
{var statearr_95671_95693 = state_95666__$1;(statearr_95671_95693[(1)] = (5));
} else
{var statearr_95672_95694 = state_95666__$1;(statearr_95672_95694[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (13)))
{var state_95666__$1 = state_95666;var statearr_95673_95695 = state_95666__$1;(statearr_95673_95695[(2)] = null);
(statearr_95673_95695[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (6)))
{var inst_95645 = (state_95666[(7)]);var state_95666__$1 = state_95666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_95666__$1,(11),to,inst_95645);
} else
{if((state_val_95667 === (3)))
{var inst_95664 = (state_95666[(2)]);var state_95666__$1 = state_95666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95666__$1,inst_95664);
} else
{if((state_val_95667 === (12)))
{var state_95666__$1 = state_95666;var statearr_95674_95696 = state_95666__$1;(statearr_95674_95696[(2)] = null);
(statearr_95674_95696[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (2)))
{var state_95666__$1 = state_95666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95666__$1,(4),from);
} else
{if((state_val_95667 === (11)))
{var inst_95655 = (state_95666[(2)]);var state_95666__$1 = state_95666;if(cljs.core.truth_(inst_95655))
{var statearr_95675_95697 = state_95666__$1;(statearr_95675_95697[(1)] = (12));
} else
{var statearr_95676_95698 = state_95666__$1;(statearr_95676_95698[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (9)))
{var state_95666__$1 = state_95666;var statearr_95677_95699 = state_95666__$1;(statearr_95677_95699[(2)] = null);
(statearr_95677_95699[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (5)))
{var state_95666__$1 = state_95666;if(cljs.core.truth_(close_QMARK_))
{var statearr_95678_95700 = state_95666__$1;(statearr_95678_95700[(1)] = (8));
} else
{var statearr_95679_95701 = state_95666__$1;(statearr_95679_95701[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (14)))
{var inst_95660 = (state_95666[(2)]);var state_95666__$1 = state_95666;var statearr_95680_95702 = state_95666__$1;(statearr_95680_95702[(2)] = inst_95660);
(statearr_95680_95702[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (10)))
{var inst_95652 = (state_95666[(2)]);var state_95666__$1 = state_95666;var statearr_95681_95703 = state_95666__$1;(statearr_95681_95703[(2)] = inst_95652);
(statearr_95681_95703[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95667 === (8)))
{var inst_95649 = cljs.core.async.close_BANG_.call(null,to);var state_95666__$1 = state_95666;var statearr_95682_95704 = state_95666__$1;(statearr_95682_95704[(2)] = inst_95649);
(statearr_95682_95704[(1)] = (10));
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
});})(c__14620__auto___95690))
;return ((function (switch__14564__auto__,c__14620__auto___95690){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_95686 = [null,null,null,null,null,null,null,null];(statearr_95686[(0)] = state_machine__14565__auto__);
(statearr_95686[(1)] = (1));
return statearr_95686;
});
var state_machine__14565__auto____1 = (function (state_95666){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_95666);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e95687){if((e95687 instanceof Object))
{var ex__14568__auto__ = e95687;var statearr_95688_95705 = state_95666;(statearr_95688_95705[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e95687;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__95706 = state_95666;
state_95666 = G__95706;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_95666){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_95666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___95690))
})();var state__14622__auto__ = (function (){var statearr_95689 = f__14621__auto__.call(null);(statearr_95689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___95690);
return statearr_95689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___95690))
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
return (function (p__95890){var vec__95891 = p__95890;var v = cljs.core.nth.call(null,vec__95891,(0),null);var p = cljs.core.nth.call(null,vec__95891,(1),null);var job = vec__95891;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__14620__auto___96073 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___96073,res,vec__95891,v,p,job,jobs,results){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___96073,res,vec__95891,v,p,job,jobs,results){
return (function (state_95896){var state_val_95897 = (state_95896[(1)]);if((state_val_95897 === (2)))
{var inst_95893 = (state_95896[(2)]);var inst_95894 = cljs.core.async.close_BANG_.call(null,res);var state_95896__$1 = (function (){var statearr_95898 = state_95896;(statearr_95898[(7)] = inst_95893);
return statearr_95898;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95896__$1,inst_95894);
} else
{if((state_val_95897 === (1)))
{var state_95896__$1 = state_95896;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_95896__$1,(2),res,v);
} else
{return null;
}
}
});})(c__14620__auto___96073,res,vec__95891,v,p,job,jobs,results))
;return ((function (switch__14564__auto__,c__14620__auto___96073,res,vec__95891,v,p,job,jobs,results){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_95902 = [null,null,null,null,null,null,null,null];(statearr_95902[(0)] = state_machine__14565__auto__);
(statearr_95902[(1)] = (1));
return statearr_95902;
});
var state_machine__14565__auto____1 = (function (state_95896){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_95896);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e95903){if((e95903 instanceof Object))
{var ex__14568__auto__ = e95903;var statearr_95904_96074 = state_95896;(statearr_95904_96074[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95896);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e95903;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__96075 = state_95896;
state_95896 = G__96075;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_95896){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_95896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___96073,res,vec__95891,v,p,job,jobs,results))
})();var state__14622__auto__ = (function (){var statearr_95905 = f__14621__auto__.call(null);(statearr_95905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___96073);
return statearr_95905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___96073,res,vec__95891,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__95906){var vec__95907 = p__95906;var v = cljs.core.nth.call(null,vec__95907,(0),null);var p = cljs.core.nth.call(null,vec__95907,(1),null);var job = vec__95907;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12367__auto___96076 = n;var __96077 = (0);while(true){
if((__96077 < n__12367__auto___96076))
{var G__95908_96078 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__95908_96078) {
case "async":
var c__14620__auto___96080 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__96077,c__14620__auto___96080,G__95908_96078,n__12367__auto___96076,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (__96077,c__14620__auto___96080,G__95908_96078,n__12367__auto___96076,jobs,results,process,async){
return (function (state_95921){var state_val_95922 = (state_95921[(1)]);if((state_val_95922 === (7)))
{var inst_95917 = (state_95921[(2)]);var state_95921__$1 = state_95921;var statearr_95923_96081 = state_95921__$1;(statearr_95923_96081[(2)] = inst_95917);
(statearr_95923_96081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95922 === (6)))
{var state_95921__$1 = state_95921;var statearr_95924_96082 = state_95921__$1;(statearr_95924_96082[(2)] = null);
(statearr_95924_96082[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95922 === (5)))
{var state_95921__$1 = state_95921;var statearr_95925_96083 = state_95921__$1;(statearr_95925_96083[(2)] = null);
(statearr_95925_96083[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95922 === (4)))
{var inst_95911 = (state_95921[(2)]);var inst_95912 = async.call(null,inst_95911);var state_95921__$1 = state_95921;if(cljs.core.truth_(inst_95912))
{var statearr_95926_96084 = state_95921__$1;(statearr_95926_96084[(1)] = (5));
} else
{var statearr_95927_96085 = state_95921__$1;(statearr_95927_96085[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95922 === (3)))
{var inst_95919 = (state_95921[(2)]);var state_95921__$1 = state_95921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95921__$1,inst_95919);
} else
{if((state_val_95922 === (2)))
{var state_95921__$1 = state_95921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95921__$1,(4),jobs);
} else
{if((state_val_95922 === (1)))
{var state_95921__$1 = state_95921;var statearr_95928_96086 = state_95921__$1;(statearr_95928_96086[(2)] = null);
(statearr_95928_96086[(1)] = (2));
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
});})(__96077,c__14620__auto___96080,G__95908_96078,n__12367__auto___96076,jobs,results,process,async))
;return ((function (__96077,switch__14564__auto__,c__14620__auto___96080,G__95908_96078,n__12367__auto___96076,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_95932 = [null,null,null,null,null,null,null];(statearr_95932[(0)] = state_machine__14565__auto__);
(statearr_95932[(1)] = (1));
return statearr_95932;
});
var state_machine__14565__auto____1 = (function (state_95921){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_95921);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e95933){if((e95933 instanceof Object))
{var ex__14568__auto__ = e95933;var statearr_95934_96087 = state_95921;(statearr_95934_96087[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95921);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e95933;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__96088 = state_95921;
state_95921 = G__96088;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_95921){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_95921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(__96077,switch__14564__auto__,c__14620__auto___96080,G__95908_96078,n__12367__auto___96076,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_95935 = f__14621__auto__.call(null);(statearr_95935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___96080);
return statearr_95935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(__96077,c__14620__auto___96080,G__95908_96078,n__12367__auto___96076,jobs,results,process,async))
);

break;
case "compute":
var c__14620__auto___96089 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__96077,c__14620__auto___96089,G__95908_96078,n__12367__auto___96076,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (__96077,c__14620__auto___96089,G__95908_96078,n__12367__auto___96076,jobs,results,process,async){
return (function (state_95948){var state_val_95949 = (state_95948[(1)]);if((state_val_95949 === (7)))
{var inst_95944 = (state_95948[(2)]);var state_95948__$1 = state_95948;var statearr_95950_96090 = state_95948__$1;(statearr_95950_96090[(2)] = inst_95944);
(statearr_95950_96090[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95949 === (6)))
{var state_95948__$1 = state_95948;var statearr_95951_96091 = state_95948__$1;(statearr_95951_96091[(2)] = null);
(statearr_95951_96091[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95949 === (5)))
{var state_95948__$1 = state_95948;var statearr_95952_96092 = state_95948__$1;(statearr_95952_96092[(2)] = null);
(statearr_95952_96092[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95949 === (4)))
{var inst_95938 = (state_95948[(2)]);var inst_95939 = process.call(null,inst_95938);var state_95948__$1 = state_95948;if(cljs.core.truth_(inst_95939))
{var statearr_95953_96093 = state_95948__$1;(statearr_95953_96093[(1)] = (5));
} else
{var statearr_95954_96094 = state_95948__$1;(statearr_95954_96094[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95949 === (3)))
{var inst_95946 = (state_95948[(2)]);var state_95948__$1 = state_95948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95948__$1,inst_95946);
} else
{if((state_val_95949 === (2)))
{var state_95948__$1 = state_95948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95948__$1,(4),jobs);
} else
{if((state_val_95949 === (1)))
{var state_95948__$1 = state_95948;var statearr_95955_96095 = state_95948__$1;(statearr_95955_96095[(2)] = null);
(statearr_95955_96095[(1)] = (2));
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
});})(__96077,c__14620__auto___96089,G__95908_96078,n__12367__auto___96076,jobs,results,process,async))
;return ((function (__96077,switch__14564__auto__,c__14620__auto___96089,G__95908_96078,n__12367__auto___96076,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_95959 = [null,null,null,null,null,null,null];(statearr_95959[(0)] = state_machine__14565__auto__);
(statearr_95959[(1)] = (1));
return statearr_95959;
});
var state_machine__14565__auto____1 = (function (state_95948){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_95948);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e95960){if((e95960 instanceof Object))
{var ex__14568__auto__ = e95960;var statearr_95961_96096 = state_95948;(statearr_95961_96096[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e95960;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__96097 = state_95948;
state_95948 = G__96097;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_95948){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_95948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(__96077,switch__14564__auto__,c__14620__auto___96089,G__95908_96078,n__12367__auto___96076,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_95962 = f__14621__auto__.call(null);(statearr_95962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___96089);
return statearr_95962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(__96077,c__14620__auto___96089,G__95908_96078,n__12367__auto___96076,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__96098 = (__96077 + (1));
__96077 = G__96098;
continue;
}
} else
{}
break;
}
var c__14620__auto___96099 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___96099,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___96099,jobs,results,process,async){
return (function (state_95984){var state_val_95985 = (state_95984[(1)]);if((state_val_95985 === (9)))
{var inst_95977 = (state_95984[(2)]);var state_95984__$1 = (function (){var statearr_95986 = state_95984;(statearr_95986[(7)] = inst_95977);
return statearr_95986;
})();var statearr_95987_96100 = state_95984__$1;(statearr_95987_96100[(2)] = null);
(statearr_95987_96100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95985 === (8)))
{var inst_95970 = (state_95984[(8)]);var inst_95975 = (state_95984[(2)]);var state_95984__$1 = (function (){var statearr_95988 = state_95984;(statearr_95988[(9)] = inst_95975);
return statearr_95988;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_95984__$1,(9),results,inst_95970);
} else
{if((state_val_95985 === (7)))
{var inst_95980 = (state_95984[(2)]);var state_95984__$1 = state_95984;var statearr_95989_96101 = state_95984__$1;(statearr_95989_96101[(2)] = inst_95980);
(statearr_95989_96101[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95985 === (6)))
{var inst_95965 = (state_95984[(10)]);var inst_95970 = (state_95984[(8)]);var inst_95970__$1 = cljs.core.async.chan.call(null,(1));var inst_95971 = cljs.core.PersistentVector.EMPTY_NODE;var inst_95972 = [inst_95965,inst_95970__$1];var inst_95973 = (new cljs.core.PersistentVector(null,2,(5),inst_95971,inst_95972,null));var state_95984__$1 = (function (){var statearr_95990 = state_95984;(statearr_95990[(8)] = inst_95970__$1);
return statearr_95990;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_95984__$1,(8),jobs,inst_95973);
} else
{if((state_val_95985 === (5)))
{var inst_95968 = cljs.core.async.close_BANG_.call(null,jobs);var state_95984__$1 = state_95984;var statearr_95991_96102 = state_95984__$1;(statearr_95991_96102[(2)] = inst_95968);
(statearr_95991_96102[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95985 === (4)))
{var inst_95965 = (state_95984[(10)]);var inst_95965__$1 = (state_95984[(2)]);var inst_95966 = (inst_95965__$1 == null);var state_95984__$1 = (function (){var statearr_95992 = state_95984;(statearr_95992[(10)] = inst_95965__$1);
return statearr_95992;
})();if(cljs.core.truth_(inst_95966))
{var statearr_95993_96103 = state_95984__$1;(statearr_95993_96103[(1)] = (5));
} else
{var statearr_95994_96104 = state_95984__$1;(statearr_95994_96104[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95985 === (3)))
{var inst_95982 = (state_95984[(2)]);var state_95984__$1 = state_95984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95984__$1,inst_95982);
} else
{if((state_val_95985 === (2)))
{var state_95984__$1 = state_95984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95984__$1,(4),from);
} else
{if((state_val_95985 === (1)))
{var state_95984__$1 = state_95984;var statearr_95995_96105 = state_95984__$1;(statearr_95995_96105[(2)] = null);
(statearr_95995_96105[(1)] = (2));
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
});})(c__14620__auto___96099,jobs,results,process,async))
;return ((function (switch__14564__auto__,c__14620__auto___96099,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_95999 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_95999[(0)] = state_machine__14565__auto__);
(statearr_95999[(1)] = (1));
return statearr_95999;
});
var state_machine__14565__auto____1 = (function (state_95984){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_95984);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e96000){if((e96000 instanceof Object))
{var ex__14568__auto__ = e96000;var statearr_96001_96106 = state_95984;(statearr_96001_96106[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e96000;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__96107 = state_95984;
state_95984 = G__96107;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_95984){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_95984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___96099,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_96002 = f__14621__auto__.call(null);(statearr_96002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___96099);
return statearr_96002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___96099,jobs,results,process,async))
);
var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,jobs,results,process,async){
return (function (state_96040){var state_val_96041 = (state_96040[(1)]);if((state_val_96041 === (7)))
{var inst_96036 = (state_96040[(2)]);var state_96040__$1 = state_96040;var statearr_96042_96108 = state_96040__$1;(statearr_96042_96108[(2)] = inst_96036);
(statearr_96042_96108[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (20)))
{var state_96040__$1 = state_96040;var statearr_96043_96109 = state_96040__$1;(statearr_96043_96109[(2)] = null);
(statearr_96043_96109[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (1)))
{var state_96040__$1 = state_96040;var statearr_96044_96110 = state_96040__$1;(statearr_96044_96110[(2)] = null);
(statearr_96044_96110[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (4)))
{var inst_96005 = (state_96040[(7)]);var inst_96005__$1 = (state_96040[(2)]);var inst_96006 = (inst_96005__$1 == null);var state_96040__$1 = (function (){var statearr_96045 = state_96040;(statearr_96045[(7)] = inst_96005__$1);
return statearr_96045;
})();if(cljs.core.truth_(inst_96006))
{var statearr_96046_96111 = state_96040__$1;(statearr_96046_96111[(1)] = (5));
} else
{var statearr_96047_96112 = state_96040__$1;(statearr_96047_96112[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (15)))
{var inst_96018 = (state_96040[(8)]);var state_96040__$1 = state_96040;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_96040__$1,(18),to,inst_96018);
} else
{if((state_val_96041 === (21)))
{var inst_96031 = (state_96040[(2)]);var state_96040__$1 = state_96040;var statearr_96048_96113 = state_96040__$1;(statearr_96048_96113[(2)] = inst_96031);
(statearr_96048_96113[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (13)))
{var inst_96033 = (state_96040[(2)]);var state_96040__$1 = (function (){var statearr_96049 = state_96040;(statearr_96049[(9)] = inst_96033);
return statearr_96049;
})();var statearr_96050_96114 = state_96040__$1;(statearr_96050_96114[(2)] = null);
(statearr_96050_96114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (6)))
{var inst_96005 = (state_96040[(7)]);var state_96040__$1 = state_96040;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_96040__$1,(11),inst_96005);
} else
{if((state_val_96041 === (17)))
{var inst_96026 = (state_96040[(2)]);var state_96040__$1 = state_96040;if(cljs.core.truth_(inst_96026))
{var statearr_96051_96115 = state_96040__$1;(statearr_96051_96115[(1)] = (19));
} else
{var statearr_96052_96116 = state_96040__$1;(statearr_96052_96116[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (3)))
{var inst_96038 = (state_96040[(2)]);var state_96040__$1 = state_96040;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_96040__$1,inst_96038);
} else
{if((state_val_96041 === (12)))
{var inst_96015 = (state_96040[(10)]);var state_96040__$1 = state_96040;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_96040__$1,(14),inst_96015);
} else
{if((state_val_96041 === (2)))
{var state_96040__$1 = state_96040;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_96040__$1,(4),results);
} else
{if((state_val_96041 === (19)))
{var state_96040__$1 = state_96040;var statearr_96053_96117 = state_96040__$1;(statearr_96053_96117[(2)] = null);
(statearr_96053_96117[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (11)))
{var inst_96015 = (state_96040[(2)]);var state_96040__$1 = (function (){var statearr_96054 = state_96040;(statearr_96054[(10)] = inst_96015);
return statearr_96054;
})();var statearr_96055_96118 = state_96040__$1;(statearr_96055_96118[(2)] = null);
(statearr_96055_96118[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (9)))
{var state_96040__$1 = state_96040;var statearr_96056_96119 = state_96040__$1;(statearr_96056_96119[(2)] = null);
(statearr_96056_96119[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (5)))
{var state_96040__$1 = state_96040;if(cljs.core.truth_(close_QMARK_))
{var statearr_96057_96120 = state_96040__$1;(statearr_96057_96120[(1)] = (8));
} else
{var statearr_96058_96121 = state_96040__$1;(statearr_96058_96121[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (14)))
{var inst_96020 = (state_96040[(11)]);var inst_96018 = (state_96040[(8)]);var inst_96018__$1 = (state_96040[(2)]);var inst_96019 = (inst_96018__$1 == null);var inst_96020__$1 = cljs.core.not.call(null,inst_96019);var state_96040__$1 = (function (){var statearr_96059 = state_96040;(statearr_96059[(11)] = inst_96020__$1);
(statearr_96059[(8)] = inst_96018__$1);
return statearr_96059;
})();if(inst_96020__$1)
{var statearr_96060_96122 = state_96040__$1;(statearr_96060_96122[(1)] = (15));
} else
{var statearr_96061_96123 = state_96040__$1;(statearr_96061_96123[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (16)))
{var inst_96020 = (state_96040[(11)]);var state_96040__$1 = state_96040;var statearr_96062_96124 = state_96040__$1;(statearr_96062_96124[(2)] = inst_96020);
(statearr_96062_96124[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (10)))
{var inst_96012 = (state_96040[(2)]);var state_96040__$1 = state_96040;var statearr_96063_96125 = state_96040__$1;(statearr_96063_96125[(2)] = inst_96012);
(statearr_96063_96125[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (18)))
{var inst_96023 = (state_96040[(2)]);var state_96040__$1 = state_96040;var statearr_96064_96126 = state_96040__$1;(statearr_96064_96126[(2)] = inst_96023);
(statearr_96064_96126[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96041 === (8)))
{var inst_96009 = cljs.core.async.close_BANG_.call(null,to);var state_96040__$1 = state_96040;var statearr_96065_96127 = state_96040__$1;(statearr_96065_96127[(2)] = inst_96009);
(statearr_96065_96127[(1)] = (10));
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
var state_machine__14565__auto____0 = (function (){var statearr_96069 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_96069[(0)] = state_machine__14565__auto__);
(statearr_96069[(1)] = (1));
return statearr_96069;
});
var state_machine__14565__auto____1 = (function (state_96040){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_96040);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e96070){if((e96070 instanceof Object))
{var ex__14568__auto__ = e96070;var statearr_96071_96128 = state_96040;(statearr_96071_96128[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_96040);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e96070;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__96129 = state_96040;
state_96040 = G__96129;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_96040){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_96040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_96072 = f__14621__auto__.call(null);(statearr_96072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_96072;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14620__auto___96230 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___96230,tc,fc){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___96230,tc,fc){
return (function (state_96205){var state_val_96206 = (state_96205[(1)]);if((state_val_96206 === (7)))
{var inst_96201 = (state_96205[(2)]);var state_96205__$1 = state_96205;var statearr_96207_96231 = state_96205__$1;(statearr_96207_96231[(2)] = inst_96201);
(statearr_96207_96231[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (1)))
{var state_96205__$1 = state_96205;var statearr_96208_96232 = state_96205__$1;(statearr_96208_96232[(2)] = null);
(statearr_96208_96232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (4)))
{var inst_96182 = (state_96205[(7)]);var inst_96182__$1 = (state_96205[(2)]);var inst_96183 = (inst_96182__$1 == null);var state_96205__$1 = (function (){var statearr_96209 = state_96205;(statearr_96209[(7)] = inst_96182__$1);
return statearr_96209;
})();if(cljs.core.truth_(inst_96183))
{var statearr_96210_96233 = state_96205__$1;(statearr_96210_96233[(1)] = (5));
} else
{var statearr_96211_96234 = state_96205__$1;(statearr_96211_96234[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (13)))
{var state_96205__$1 = state_96205;var statearr_96212_96235 = state_96205__$1;(statearr_96212_96235[(2)] = null);
(statearr_96212_96235[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (6)))
{var inst_96182 = (state_96205[(7)]);var inst_96188 = p.call(null,inst_96182);var state_96205__$1 = state_96205;if(cljs.core.truth_(inst_96188))
{var statearr_96213_96236 = state_96205__$1;(statearr_96213_96236[(1)] = (9));
} else
{var statearr_96214_96237 = state_96205__$1;(statearr_96214_96237[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (3)))
{var inst_96203 = (state_96205[(2)]);var state_96205__$1 = state_96205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_96205__$1,inst_96203);
} else
{if((state_val_96206 === (12)))
{var state_96205__$1 = state_96205;var statearr_96215_96238 = state_96205__$1;(statearr_96215_96238[(2)] = null);
(statearr_96215_96238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (2)))
{var state_96205__$1 = state_96205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_96205__$1,(4),ch);
} else
{if((state_val_96206 === (11)))
{var inst_96182 = (state_96205[(7)]);var inst_96192 = (state_96205[(2)]);var state_96205__$1 = state_96205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_96205__$1,(8),inst_96192,inst_96182);
} else
{if((state_val_96206 === (9)))
{var state_96205__$1 = state_96205;var statearr_96216_96239 = state_96205__$1;(statearr_96216_96239[(2)] = tc);
(statearr_96216_96239[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (5)))
{var inst_96185 = cljs.core.async.close_BANG_.call(null,tc);var inst_96186 = cljs.core.async.close_BANG_.call(null,fc);var state_96205__$1 = (function (){var statearr_96217 = state_96205;(statearr_96217[(8)] = inst_96185);
return statearr_96217;
})();var statearr_96218_96240 = state_96205__$1;(statearr_96218_96240[(2)] = inst_96186);
(statearr_96218_96240[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (14)))
{var inst_96199 = (state_96205[(2)]);var state_96205__$1 = state_96205;var statearr_96219_96241 = state_96205__$1;(statearr_96219_96241[(2)] = inst_96199);
(statearr_96219_96241[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (10)))
{var state_96205__$1 = state_96205;var statearr_96220_96242 = state_96205__$1;(statearr_96220_96242[(2)] = fc);
(statearr_96220_96242[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96206 === (8)))
{var inst_96194 = (state_96205[(2)]);var state_96205__$1 = state_96205;if(cljs.core.truth_(inst_96194))
{var statearr_96221_96243 = state_96205__$1;(statearr_96221_96243[(1)] = (12));
} else
{var statearr_96222_96244 = state_96205__$1;(statearr_96222_96244[(1)] = (13));
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
});})(c__14620__auto___96230,tc,fc))
;return ((function (switch__14564__auto__,c__14620__auto___96230,tc,fc){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_96226 = [null,null,null,null,null,null,null,null,null];(statearr_96226[(0)] = state_machine__14565__auto__);
(statearr_96226[(1)] = (1));
return statearr_96226;
});
var state_machine__14565__auto____1 = (function (state_96205){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_96205);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e96227){if((e96227 instanceof Object))
{var ex__14568__auto__ = e96227;var statearr_96228_96245 = state_96205;(statearr_96228_96245[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_96205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e96227;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__96246 = state_96205;
state_96205 = G__96246;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_96205){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_96205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___96230,tc,fc))
})();var state__14622__auto__ = (function (){var statearr_96229 = f__14621__auto__.call(null);(statearr_96229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___96230);
return statearr_96229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___96230,tc,fc))
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
return (function (state_96293){var state_val_96294 = (state_96293[(1)]);if((state_val_96294 === (7)))
{var inst_96289 = (state_96293[(2)]);var state_96293__$1 = state_96293;var statearr_96295_96311 = state_96293__$1;(statearr_96295_96311[(2)] = inst_96289);
(statearr_96295_96311[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96294 === (6)))
{var inst_96282 = (state_96293[(7)]);var inst_96279 = (state_96293[(8)]);var inst_96286 = f.call(null,inst_96279,inst_96282);var inst_96279__$1 = inst_96286;var state_96293__$1 = (function (){var statearr_96296 = state_96293;(statearr_96296[(8)] = inst_96279__$1);
return statearr_96296;
})();var statearr_96297_96312 = state_96293__$1;(statearr_96297_96312[(2)] = null);
(statearr_96297_96312[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96294 === (5)))
{var inst_96279 = (state_96293[(8)]);var state_96293__$1 = state_96293;var statearr_96298_96313 = state_96293__$1;(statearr_96298_96313[(2)] = inst_96279);
(statearr_96298_96313[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96294 === (4)))
{var inst_96282 = (state_96293[(7)]);var inst_96282__$1 = (state_96293[(2)]);var inst_96283 = (inst_96282__$1 == null);var state_96293__$1 = (function (){var statearr_96299 = state_96293;(statearr_96299[(7)] = inst_96282__$1);
return statearr_96299;
})();if(cljs.core.truth_(inst_96283))
{var statearr_96300_96314 = state_96293__$1;(statearr_96300_96314[(1)] = (5));
} else
{var statearr_96301_96315 = state_96293__$1;(statearr_96301_96315[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96294 === (3)))
{var inst_96291 = (state_96293[(2)]);var state_96293__$1 = state_96293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_96293__$1,inst_96291);
} else
{if((state_val_96294 === (2)))
{var state_96293__$1 = state_96293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_96293__$1,(4),ch);
} else
{if((state_val_96294 === (1)))
{var inst_96279 = init;var state_96293__$1 = (function (){var statearr_96302 = state_96293;(statearr_96302[(8)] = inst_96279);
return statearr_96302;
})();var statearr_96303_96316 = state_96293__$1;(statearr_96303_96316[(2)] = null);
(statearr_96303_96316[(1)] = (2));
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
var state_machine__14565__auto____0 = (function (){var statearr_96307 = [null,null,null,null,null,null,null,null,null];(statearr_96307[(0)] = state_machine__14565__auto__);
(statearr_96307[(1)] = (1));
return statearr_96307;
});
var state_machine__14565__auto____1 = (function (state_96293){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_96293);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e96308){if((e96308 instanceof Object))
{var ex__14568__auto__ = e96308;var statearr_96309_96317 = state_96293;(statearr_96309_96317[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_96293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e96308;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__96318 = state_96293;
state_96293 = G__96318;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_96293){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_96293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__))
})();var state__14622__auto__ = (function (){var statearr_96310 = f__14621__auto__.call(null);(statearr_96310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_96310;
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
return (function (state_96392){var state_val_96393 = (state_96392[(1)]);if((state_val_96393 === (7)))
{var inst_96374 = (state_96392[(2)]);var state_96392__$1 = state_96392;var statearr_96394_96417 = state_96392__$1;(statearr_96394_96417[(2)] = inst_96374);
(statearr_96394_96417[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (1)))
{var inst_96368 = cljs.core.seq.call(null,coll);var inst_96369 = inst_96368;var state_96392__$1 = (function (){var statearr_96395 = state_96392;(statearr_96395[(7)] = inst_96369);
return statearr_96395;
})();var statearr_96396_96418 = state_96392__$1;(statearr_96396_96418[(2)] = null);
(statearr_96396_96418[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (4)))
{var inst_96369 = (state_96392[(7)]);var inst_96372 = cljs.core.first.call(null,inst_96369);var state_96392__$1 = state_96392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_96392__$1,(7),ch,inst_96372);
} else
{if((state_val_96393 === (13)))
{var inst_96386 = (state_96392[(2)]);var state_96392__$1 = state_96392;var statearr_96397_96419 = state_96392__$1;(statearr_96397_96419[(2)] = inst_96386);
(statearr_96397_96419[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (6)))
{var inst_96377 = (state_96392[(2)]);var state_96392__$1 = state_96392;if(cljs.core.truth_(inst_96377))
{var statearr_96398_96420 = state_96392__$1;(statearr_96398_96420[(1)] = (8));
} else
{var statearr_96399_96421 = state_96392__$1;(statearr_96399_96421[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (3)))
{var inst_96390 = (state_96392[(2)]);var state_96392__$1 = state_96392;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_96392__$1,inst_96390);
} else
{if((state_val_96393 === (12)))
{var state_96392__$1 = state_96392;var statearr_96400_96422 = state_96392__$1;(statearr_96400_96422[(2)] = null);
(statearr_96400_96422[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (2)))
{var inst_96369 = (state_96392[(7)]);var state_96392__$1 = state_96392;if(cljs.core.truth_(inst_96369))
{var statearr_96401_96423 = state_96392__$1;(statearr_96401_96423[(1)] = (4));
} else
{var statearr_96402_96424 = state_96392__$1;(statearr_96402_96424[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (11)))
{var inst_96383 = cljs.core.async.close_BANG_.call(null,ch);var state_96392__$1 = state_96392;var statearr_96403_96425 = state_96392__$1;(statearr_96403_96425[(2)] = inst_96383);
(statearr_96403_96425[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (9)))
{var state_96392__$1 = state_96392;if(cljs.core.truth_(close_QMARK_))
{var statearr_96404_96426 = state_96392__$1;(statearr_96404_96426[(1)] = (11));
} else
{var statearr_96405_96427 = state_96392__$1;(statearr_96405_96427[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (5)))
{var inst_96369 = (state_96392[(7)]);var state_96392__$1 = state_96392;var statearr_96406_96428 = state_96392__$1;(statearr_96406_96428[(2)] = inst_96369);
(statearr_96406_96428[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (10)))
{var inst_96388 = (state_96392[(2)]);var state_96392__$1 = state_96392;var statearr_96407_96429 = state_96392__$1;(statearr_96407_96429[(2)] = inst_96388);
(statearr_96407_96429[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96393 === (8)))
{var inst_96369 = (state_96392[(7)]);var inst_96379 = cljs.core.next.call(null,inst_96369);var inst_96369__$1 = inst_96379;var state_96392__$1 = (function (){var statearr_96408 = state_96392;(statearr_96408[(7)] = inst_96369__$1);
return statearr_96408;
})();var statearr_96409_96430 = state_96392__$1;(statearr_96409_96430[(2)] = null);
(statearr_96409_96430[(1)] = (2));
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
var state_machine__14565__auto____0 = (function (){var statearr_96413 = [null,null,null,null,null,null,null,null];(statearr_96413[(0)] = state_machine__14565__auto__);
(statearr_96413[(1)] = (1));
return statearr_96413;
});
var state_machine__14565__auto____1 = (function (state_96392){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_96392);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e96414){if((e96414 instanceof Object))
{var ex__14568__auto__ = e96414;var statearr_96415_96431 = state_96392;(statearr_96415_96431[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_96392);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e96414;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__96432 = state_96392;
state_96392 = G__96432;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_96392){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_96392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__))
})();var state__14622__auto__ = (function (){var statearr_96416 = f__14621__auto__.call(null);(statearr_96416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_96416;
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
cljs.core.async.Mux = (function (){var obj96434 = {};return obj96434;
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
cljs.core.async.Mult = (function (){var obj96436 = {};return obj96436;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t96658 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t96658 = (function (cs,ch,mult,meta96659){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta96659 = meta96659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t96658.cljs$lang$type = true;
cljs.core.async.t96658.cljs$lang$ctorStr = "cljs.core.async/t96658";
cljs.core.async.t96658.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t96658");
});})(cs))
;
cljs.core.async.t96658.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t96658.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t96658.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t96658.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t96658.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t96658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t96658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_96660){var self__ = this;
var _96660__$1 = this;return self__.meta96659;
});})(cs))
;
cljs.core.async.t96658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_96660,meta96659__$1){var self__ = this;
var _96660__$1 = this;return (new cljs.core.async.t96658(self__.cs,self__.ch,self__.mult,meta96659__$1));
});})(cs))
;
cljs.core.async.__GT_t96658 = ((function (cs){
return (function __GT_t96658(cs__$1,ch__$1,mult__$1,meta96659){return (new cljs.core.async.t96658(cs__$1,ch__$1,mult__$1,meta96659));
});})(cs))
;
}
return (new cljs.core.async.t96658(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14620__auto___96879 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___96879,cs,m,dchan,dctr,done){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___96879,cs,m,dchan,dctr,done){
return (function (state_96791){var state_val_96792 = (state_96791[(1)]);if((state_val_96792 === (7)))
{var inst_96787 = (state_96791[(2)]);var state_96791__$1 = state_96791;var statearr_96793_96880 = state_96791__$1;(statearr_96793_96880[(2)] = inst_96787);
(statearr_96793_96880[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (20)))
{var inst_96692 = (state_96791[(7)]);var inst_96702 = cljs.core.first.call(null,inst_96692);var inst_96703 = cljs.core.nth.call(null,inst_96702,(0),null);var inst_96704 = cljs.core.nth.call(null,inst_96702,(1),null);var state_96791__$1 = (function (){var statearr_96794 = state_96791;(statearr_96794[(8)] = inst_96703);
return statearr_96794;
})();if(cljs.core.truth_(inst_96704))
{var statearr_96795_96881 = state_96791__$1;(statearr_96795_96881[(1)] = (22));
} else
{var statearr_96796_96882 = state_96791__$1;(statearr_96796_96882[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (27)))
{var inst_96663 = (state_96791[(9)]);var inst_96739 = (state_96791[(10)]);var inst_96734 = (state_96791[(11)]);var inst_96732 = (state_96791[(12)]);var inst_96739__$1 = cljs.core._nth.call(null,inst_96732,inst_96734);var inst_96740 = cljs.core.async.put_BANG_.call(null,inst_96739__$1,inst_96663,done);var state_96791__$1 = (function (){var statearr_96797 = state_96791;(statearr_96797[(10)] = inst_96739__$1);
return statearr_96797;
})();if(cljs.core.truth_(inst_96740))
{var statearr_96798_96883 = state_96791__$1;(statearr_96798_96883[(1)] = (30));
} else
{var statearr_96799_96884 = state_96791__$1;(statearr_96799_96884[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (1)))
{var state_96791__$1 = state_96791;var statearr_96800_96885 = state_96791__$1;(statearr_96800_96885[(2)] = null);
(statearr_96800_96885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (24)))
{var inst_96692 = (state_96791[(7)]);var inst_96709 = (state_96791[(2)]);var inst_96710 = cljs.core.next.call(null,inst_96692);var inst_96672 = inst_96710;var inst_96673 = null;var inst_96674 = (0);var inst_96675 = (0);var state_96791__$1 = (function (){var statearr_96801 = state_96791;(statearr_96801[(13)] = inst_96675);
(statearr_96801[(14)] = inst_96674);
(statearr_96801[(15)] = inst_96672);
(statearr_96801[(16)] = inst_96709);
(statearr_96801[(17)] = inst_96673);
return statearr_96801;
})();var statearr_96802_96886 = state_96791__$1;(statearr_96802_96886[(2)] = null);
(statearr_96802_96886[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (39)))
{var state_96791__$1 = state_96791;var statearr_96806_96887 = state_96791__$1;(statearr_96806_96887[(2)] = null);
(statearr_96806_96887[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (4)))
{var inst_96663 = (state_96791[(9)]);var inst_96663__$1 = (state_96791[(2)]);var inst_96664 = (inst_96663__$1 == null);var state_96791__$1 = (function (){var statearr_96807 = state_96791;(statearr_96807[(9)] = inst_96663__$1);
return statearr_96807;
})();if(cljs.core.truth_(inst_96664))
{var statearr_96808_96888 = state_96791__$1;(statearr_96808_96888[(1)] = (5));
} else
{var statearr_96809_96889 = state_96791__$1;(statearr_96809_96889[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (15)))
{var inst_96675 = (state_96791[(13)]);var inst_96674 = (state_96791[(14)]);var inst_96672 = (state_96791[(15)]);var inst_96673 = (state_96791[(17)]);var inst_96688 = (state_96791[(2)]);var inst_96689 = (inst_96675 + (1));var tmp96803 = inst_96674;var tmp96804 = inst_96672;var tmp96805 = inst_96673;var inst_96672__$1 = tmp96804;var inst_96673__$1 = tmp96805;var inst_96674__$1 = tmp96803;var inst_96675__$1 = inst_96689;var state_96791__$1 = (function (){var statearr_96810 = state_96791;(statearr_96810[(13)] = inst_96675__$1);
(statearr_96810[(14)] = inst_96674__$1);
(statearr_96810[(18)] = inst_96688);
(statearr_96810[(15)] = inst_96672__$1);
(statearr_96810[(17)] = inst_96673__$1);
return statearr_96810;
})();var statearr_96811_96890 = state_96791__$1;(statearr_96811_96890[(2)] = null);
(statearr_96811_96890[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (21)))
{var inst_96713 = (state_96791[(2)]);var state_96791__$1 = state_96791;var statearr_96815_96891 = state_96791__$1;(statearr_96815_96891[(2)] = inst_96713);
(statearr_96815_96891[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (31)))
{var inst_96739 = (state_96791[(10)]);var inst_96743 = done.call(null,null);var inst_96744 = cljs.core.async.untap_STAR_.call(null,m,inst_96739);var state_96791__$1 = (function (){var statearr_96816 = state_96791;(statearr_96816[(19)] = inst_96743);
return statearr_96816;
})();var statearr_96817_96892 = state_96791__$1;(statearr_96817_96892[(2)] = inst_96744);
(statearr_96817_96892[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (32)))
{var inst_96733 = (state_96791[(20)]);var inst_96734 = (state_96791[(11)]);var inst_96731 = (state_96791[(21)]);var inst_96732 = (state_96791[(12)]);var inst_96746 = (state_96791[(2)]);var inst_96747 = (inst_96734 + (1));var tmp96812 = inst_96733;var tmp96813 = inst_96731;var tmp96814 = inst_96732;var inst_96731__$1 = tmp96813;var inst_96732__$1 = tmp96814;var inst_96733__$1 = tmp96812;var inst_96734__$1 = inst_96747;var state_96791__$1 = (function (){var statearr_96818 = state_96791;(statearr_96818[(20)] = inst_96733__$1);
(statearr_96818[(11)] = inst_96734__$1);
(statearr_96818[(21)] = inst_96731__$1);
(statearr_96818[(12)] = inst_96732__$1);
(statearr_96818[(22)] = inst_96746);
return statearr_96818;
})();var statearr_96819_96893 = state_96791__$1;(statearr_96819_96893[(2)] = null);
(statearr_96819_96893[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (40)))
{var inst_96759 = (state_96791[(23)]);var inst_96763 = done.call(null,null);var inst_96764 = cljs.core.async.untap_STAR_.call(null,m,inst_96759);var state_96791__$1 = (function (){var statearr_96820 = state_96791;(statearr_96820[(24)] = inst_96763);
return statearr_96820;
})();var statearr_96821_96894 = state_96791__$1;(statearr_96821_96894[(2)] = inst_96764);
(statearr_96821_96894[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (33)))
{var inst_96750 = (state_96791[(25)]);var inst_96752 = cljs.core.chunked_seq_QMARK_.call(null,inst_96750);var state_96791__$1 = state_96791;if(inst_96752)
{var statearr_96822_96895 = state_96791__$1;(statearr_96822_96895[(1)] = (36));
} else
{var statearr_96823_96896 = state_96791__$1;(statearr_96823_96896[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (13)))
{var inst_96682 = (state_96791[(26)]);var inst_96685 = cljs.core.async.close_BANG_.call(null,inst_96682);var state_96791__$1 = state_96791;var statearr_96824_96897 = state_96791__$1;(statearr_96824_96897[(2)] = inst_96685);
(statearr_96824_96897[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (22)))
{var inst_96703 = (state_96791[(8)]);var inst_96706 = cljs.core.async.close_BANG_.call(null,inst_96703);var state_96791__$1 = state_96791;var statearr_96825_96898 = state_96791__$1;(statearr_96825_96898[(2)] = inst_96706);
(statearr_96825_96898[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (36)))
{var inst_96750 = (state_96791[(25)]);var inst_96754 = cljs.core.chunk_first.call(null,inst_96750);var inst_96755 = cljs.core.chunk_rest.call(null,inst_96750);var inst_96756 = cljs.core.count.call(null,inst_96754);var inst_96731 = inst_96755;var inst_96732 = inst_96754;var inst_96733 = inst_96756;var inst_96734 = (0);var state_96791__$1 = (function (){var statearr_96826 = state_96791;(statearr_96826[(20)] = inst_96733);
(statearr_96826[(11)] = inst_96734);
(statearr_96826[(21)] = inst_96731);
(statearr_96826[(12)] = inst_96732);
return statearr_96826;
})();var statearr_96827_96899 = state_96791__$1;(statearr_96827_96899[(2)] = null);
(statearr_96827_96899[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (41)))
{var inst_96750 = (state_96791[(25)]);var inst_96766 = (state_96791[(2)]);var inst_96767 = cljs.core.next.call(null,inst_96750);var inst_96731 = inst_96767;var inst_96732 = null;var inst_96733 = (0);var inst_96734 = (0);var state_96791__$1 = (function (){var statearr_96828 = state_96791;(statearr_96828[(20)] = inst_96733);
(statearr_96828[(11)] = inst_96734);
(statearr_96828[(21)] = inst_96731);
(statearr_96828[(27)] = inst_96766);
(statearr_96828[(12)] = inst_96732);
return statearr_96828;
})();var statearr_96829_96900 = state_96791__$1;(statearr_96829_96900[(2)] = null);
(statearr_96829_96900[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (43)))
{var state_96791__$1 = state_96791;var statearr_96830_96901 = state_96791__$1;(statearr_96830_96901[(2)] = null);
(statearr_96830_96901[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (29)))
{var inst_96775 = (state_96791[(2)]);var state_96791__$1 = state_96791;var statearr_96831_96902 = state_96791__$1;(statearr_96831_96902[(2)] = inst_96775);
(statearr_96831_96902[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (44)))
{var inst_96784 = (state_96791[(2)]);var state_96791__$1 = (function (){var statearr_96832 = state_96791;(statearr_96832[(28)] = inst_96784);
return statearr_96832;
})();var statearr_96833_96903 = state_96791__$1;(statearr_96833_96903[(2)] = null);
(statearr_96833_96903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (6)))
{var inst_96723 = (state_96791[(29)]);var inst_96722 = cljs.core.deref.call(null,cs);var inst_96723__$1 = cljs.core.keys.call(null,inst_96722);var inst_96724 = cljs.core.count.call(null,inst_96723__$1);var inst_96725 = cljs.core.reset_BANG_.call(null,dctr,inst_96724);var inst_96730 = cljs.core.seq.call(null,inst_96723__$1);var inst_96731 = inst_96730;var inst_96732 = null;var inst_96733 = (0);var inst_96734 = (0);var state_96791__$1 = (function (){var statearr_96834 = state_96791;(statearr_96834[(20)] = inst_96733);
(statearr_96834[(11)] = inst_96734);
(statearr_96834[(30)] = inst_96725);
(statearr_96834[(21)] = inst_96731);
(statearr_96834[(29)] = inst_96723__$1);
(statearr_96834[(12)] = inst_96732);
return statearr_96834;
})();var statearr_96835_96904 = state_96791__$1;(statearr_96835_96904[(2)] = null);
(statearr_96835_96904[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (28)))
{var inst_96750 = (state_96791[(25)]);var inst_96731 = (state_96791[(21)]);var inst_96750__$1 = cljs.core.seq.call(null,inst_96731);var state_96791__$1 = (function (){var statearr_96836 = state_96791;(statearr_96836[(25)] = inst_96750__$1);
return statearr_96836;
})();if(inst_96750__$1)
{var statearr_96837_96905 = state_96791__$1;(statearr_96837_96905[(1)] = (33));
} else
{var statearr_96838_96906 = state_96791__$1;(statearr_96838_96906[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (25)))
{var inst_96733 = (state_96791[(20)]);var inst_96734 = (state_96791[(11)]);var inst_96736 = (inst_96734 < inst_96733);var inst_96737 = inst_96736;var state_96791__$1 = state_96791;if(cljs.core.truth_(inst_96737))
{var statearr_96839_96907 = state_96791__$1;(statearr_96839_96907[(1)] = (27));
} else
{var statearr_96840_96908 = state_96791__$1;(statearr_96840_96908[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (34)))
{var state_96791__$1 = state_96791;var statearr_96841_96909 = state_96791__$1;(statearr_96841_96909[(2)] = null);
(statearr_96841_96909[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (17)))
{var state_96791__$1 = state_96791;var statearr_96842_96910 = state_96791__$1;(statearr_96842_96910[(2)] = null);
(statearr_96842_96910[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (3)))
{var inst_96789 = (state_96791[(2)]);var state_96791__$1 = state_96791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_96791__$1,inst_96789);
} else
{if((state_val_96792 === (12)))
{var inst_96718 = (state_96791[(2)]);var state_96791__$1 = state_96791;var statearr_96843_96911 = state_96791__$1;(statearr_96843_96911[(2)] = inst_96718);
(statearr_96843_96911[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (2)))
{var state_96791__$1 = state_96791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_96791__$1,(4),ch);
} else
{if((state_val_96792 === (23)))
{var state_96791__$1 = state_96791;var statearr_96844_96912 = state_96791__$1;(statearr_96844_96912[(2)] = null);
(statearr_96844_96912[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (35)))
{var inst_96773 = (state_96791[(2)]);var state_96791__$1 = state_96791;var statearr_96845_96913 = state_96791__$1;(statearr_96845_96913[(2)] = inst_96773);
(statearr_96845_96913[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (19)))
{var inst_96692 = (state_96791[(7)]);var inst_96696 = cljs.core.chunk_first.call(null,inst_96692);var inst_96697 = cljs.core.chunk_rest.call(null,inst_96692);var inst_96698 = cljs.core.count.call(null,inst_96696);var inst_96672 = inst_96697;var inst_96673 = inst_96696;var inst_96674 = inst_96698;var inst_96675 = (0);var state_96791__$1 = (function (){var statearr_96846 = state_96791;(statearr_96846[(13)] = inst_96675);
(statearr_96846[(14)] = inst_96674);
(statearr_96846[(15)] = inst_96672);
(statearr_96846[(17)] = inst_96673);
return statearr_96846;
})();var statearr_96847_96914 = state_96791__$1;(statearr_96847_96914[(2)] = null);
(statearr_96847_96914[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (11)))
{var inst_96692 = (state_96791[(7)]);var inst_96672 = (state_96791[(15)]);var inst_96692__$1 = cljs.core.seq.call(null,inst_96672);var state_96791__$1 = (function (){var statearr_96848 = state_96791;(statearr_96848[(7)] = inst_96692__$1);
return statearr_96848;
})();if(inst_96692__$1)
{var statearr_96849_96915 = state_96791__$1;(statearr_96849_96915[(1)] = (16));
} else
{var statearr_96850_96916 = state_96791__$1;(statearr_96850_96916[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (9)))
{var inst_96720 = (state_96791[(2)]);var state_96791__$1 = state_96791;var statearr_96851_96917 = state_96791__$1;(statearr_96851_96917[(2)] = inst_96720);
(statearr_96851_96917[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (5)))
{var inst_96670 = cljs.core.deref.call(null,cs);var inst_96671 = cljs.core.seq.call(null,inst_96670);var inst_96672 = inst_96671;var inst_96673 = null;var inst_96674 = (0);var inst_96675 = (0);var state_96791__$1 = (function (){var statearr_96852 = state_96791;(statearr_96852[(13)] = inst_96675);
(statearr_96852[(14)] = inst_96674);
(statearr_96852[(15)] = inst_96672);
(statearr_96852[(17)] = inst_96673);
return statearr_96852;
})();var statearr_96853_96918 = state_96791__$1;(statearr_96853_96918[(2)] = null);
(statearr_96853_96918[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (14)))
{var state_96791__$1 = state_96791;var statearr_96854_96919 = state_96791__$1;(statearr_96854_96919[(2)] = null);
(statearr_96854_96919[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (45)))
{var inst_96781 = (state_96791[(2)]);var state_96791__$1 = state_96791;var statearr_96855_96920 = state_96791__$1;(statearr_96855_96920[(2)] = inst_96781);
(statearr_96855_96920[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (26)))
{var inst_96723 = (state_96791[(29)]);var inst_96777 = (state_96791[(2)]);var inst_96778 = cljs.core.seq.call(null,inst_96723);var state_96791__$1 = (function (){var statearr_96856 = state_96791;(statearr_96856[(31)] = inst_96777);
return statearr_96856;
})();if(inst_96778)
{var statearr_96857_96921 = state_96791__$1;(statearr_96857_96921[(1)] = (42));
} else
{var statearr_96858_96922 = state_96791__$1;(statearr_96858_96922[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (16)))
{var inst_96692 = (state_96791[(7)]);var inst_96694 = cljs.core.chunked_seq_QMARK_.call(null,inst_96692);var state_96791__$1 = state_96791;if(inst_96694)
{var statearr_96859_96923 = state_96791__$1;(statearr_96859_96923[(1)] = (19));
} else
{var statearr_96860_96924 = state_96791__$1;(statearr_96860_96924[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (38)))
{var inst_96770 = (state_96791[(2)]);var state_96791__$1 = state_96791;var statearr_96861_96925 = state_96791__$1;(statearr_96861_96925[(2)] = inst_96770);
(statearr_96861_96925[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (30)))
{var state_96791__$1 = state_96791;var statearr_96862_96926 = state_96791__$1;(statearr_96862_96926[(2)] = null);
(statearr_96862_96926[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (10)))
{var inst_96675 = (state_96791[(13)]);var inst_96673 = (state_96791[(17)]);var inst_96681 = cljs.core._nth.call(null,inst_96673,inst_96675);var inst_96682 = cljs.core.nth.call(null,inst_96681,(0),null);var inst_96683 = cljs.core.nth.call(null,inst_96681,(1),null);var state_96791__$1 = (function (){var statearr_96863 = state_96791;(statearr_96863[(26)] = inst_96682);
return statearr_96863;
})();if(cljs.core.truth_(inst_96683))
{var statearr_96864_96927 = state_96791__$1;(statearr_96864_96927[(1)] = (13));
} else
{var statearr_96865_96928 = state_96791__$1;(statearr_96865_96928[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (18)))
{var inst_96716 = (state_96791[(2)]);var state_96791__$1 = state_96791;var statearr_96866_96929 = state_96791__$1;(statearr_96866_96929[(2)] = inst_96716);
(statearr_96866_96929[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (42)))
{var state_96791__$1 = state_96791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_96791__$1,(45),dchan);
} else
{if((state_val_96792 === (37)))
{var inst_96663 = (state_96791[(9)]);var inst_96750 = (state_96791[(25)]);var inst_96759 = (state_96791[(23)]);var inst_96759__$1 = cljs.core.first.call(null,inst_96750);var inst_96760 = cljs.core.async.put_BANG_.call(null,inst_96759__$1,inst_96663,done);var state_96791__$1 = (function (){var statearr_96867 = state_96791;(statearr_96867[(23)] = inst_96759__$1);
return statearr_96867;
})();if(cljs.core.truth_(inst_96760))
{var statearr_96868_96930 = state_96791__$1;(statearr_96868_96930[(1)] = (39));
} else
{var statearr_96869_96931 = state_96791__$1;(statearr_96869_96931[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_96792 === (8)))
{var inst_96675 = (state_96791[(13)]);var inst_96674 = (state_96791[(14)]);var inst_96677 = (inst_96675 < inst_96674);var inst_96678 = inst_96677;var state_96791__$1 = state_96791;if(cljs.core.truth_(inst_96678))
{var statearr_96870_96932 = state_96791__$1;(statearr_96870_96932[(1)] = (10));
} else
{var statearr_96871_96933 = state_96791__$1;(statearr_96871_96933[(1)] = (11));
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
});})(c__14620__auto___96879,cs,m,dchan,dctr,done))
;return ((function (switch__14564__auto__,c__14620__auto___96879,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_96875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_96875[(0)] = state_machine__14565__auto__);
(statearr_96875[(1)] = (1));
return statearr_96875;
});
var state_machine__14565__auto____1 = (function (state_96791){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_96791);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e96876){if((e96876 instanceof Object))
{var ex__14568__auto__ = e96876;var statearr_96877_96934 = state_96791;(statearr_96877_96934[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_96791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e96876;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__96935 = state_96791;
state_96791 = G__96935;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_96791){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_96791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___96879,cs,m,dchan,dctr,done))
})();var state__14622__auto__ = (function (){var statearr_96878 = f__14621__auto__.call(null);(statearr_96878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___96879);
return statearr_96878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___96879,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj96937 = {};return obj96937;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__96938){var map__96943 = p__96938;var map__96943__$1 = ((cljs.core.seq_QMARK_.call(null,map__96943))?cljs.core.apply.call(null,cljs.core.hash_map,map__96943):map__96943);var opts = map__96943__$1;var statearr_96944_96947 = state;(statearr_96944_96947[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__96943,map__96943__$1,opts){
return (function (val){var statearr_96945_96948 = state;(statearr_96945_96948[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__96943,map__96943__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4388__auto__))
{var cb = temp__4388__auto__;var statearr_96946_96949 = state;(statearr_96946_96949[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__96938 = null;if (arguments.length > 3) {
  p__96938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__96938);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__96950){
var state = cljs.core.first(arglist__96950);
arglist__96950 = cljs.core.next(arglist__96950);
var cont_block = cljs.core.first(arglist__96950);
arglist__96950 = cljs.core.next(arglist__96950);
var ports = cljs.core.first(arglist__96950);
var p__96938 = cljs.core.rest(arglist__96950);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__96938);
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
;var m = (function (){if(typeof cljs.core.async.t97070 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t97070 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta97071){
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
this.meta97071 = meta97071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t97070.cljs$lang$type = true;
cljs.core.async.t97070.cljs$lang$ctorStr = "cljs.core.async/t97070";
cljs.core.async.t97070.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t97070");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t97070.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t97070.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t97070.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t97070.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t97070.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t97070.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t97070.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t97070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t97070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_97072){var self__ = this;
var _97072__$1 = this;return self__.meta97071;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t97070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_97072,meta97071__$1){var self__ = this;
var _97072__$1 = this;return (new cljs.core.async.t97070(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta97071__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t97070 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t97070(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta97071){return (new cljs.core.async.t97070(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta97071));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t97070(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__14620__auto___97189 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___97189,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___97189,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_97142){var state_val_97143 = (state_97142[(1)]);if((state_val_97143 === (7)))
{var inst_97086 = (state_97142[(7)]);var inst_97091 = cljs.core.apply.call(null,cljs.core.hash_map,inst_97086);var state_97142__$1 = state_97142;var statearr_97144_97190 = state_97142__$1;(statearr_97144_97190[(2)] = inst_97091);
(statearr_97144_97190[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (20)))
{var inst_97101 = (state_97142[(8)]);var state_97142__$1 = state_97142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97142__$1,(23),out,inst_97101);
} else
{if((state_val_97143 === (1)))
{var inst_97076 = (state_97142[(9)]);var inst_97076__$1 = calc_state.call(null);var inst_97077 = cljs.core.seq_QMARK_.call(null,inst_97076__$1);var state_97142__$1 = (function (){var statearr_97145 = state_97142;(statearr_97145[(9)] = inst_97076__$1);
return statearr_97145;
})();if(inst_97077)
{var statearr_97146_97191 = state_97142__$1;(statearr_97146_97191[(1)] = (2));
} else
{var statearr_97147_97192 = state_97142__$1;(statearr_97147_97192[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (24)))
{var inst_97094 = (state_97142[(10)]);var inst_97086 = inst_97094;var state_97142__$1 = (function (){var statearr_97148 = state_97142;(statearr_97148[(7)] = inst_97086);
return statearr_97148;
})();var statearr_97149_97193 = state_97142__$1;(statearr_97149_97193[(2)] = null);
(statearr_97149_97193[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (4)))
{var inst_97076 = (state_97142[(9)]);var inst_97082 = (state_97142[(2)]);var inst_97083 = cljs.core.get.call(null,inst_97082,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_97084 = cljs.core.get.call(null,inst_97082,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_97085 = cljs.core.get.call(null,inst_97082,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_97086 = inst_97076;var state_97142__$1 = (function (){var statearr_97150 = state_97142;(statearr_97150[(11)] = inst_97083);
(statearr_97150[(7)] = inst_97086);
(statearr_97150[(12)] = inst_97085);
(statearr_97150[(13)] = inst_97084);
return statearr_97150;
})();var statearr_97151_97194 = state_97142__$1;(statearr_97151_97194[(2)] = null);
(statearr_97151_97194[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (15)))
{var state_97142__$1 = state_97142;var statearr_97152_97195 = state_97142__$1;(statearr_97152_97195[(2)] = null);
(statearr_97152_97195[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (21)))
{var inst_97094 = (state_97142[(10)]);var inst_97086 = inst_97094;var state_97142__$1 = (function (){var statearr_97153 = state_97142;(statearr_97153[(7)] = inst_97086);
return statearr_97153;
})();var statearr_97154_97196 = state_97142__$1;(statearr_97154_97196[(2)] = null);
(statearr_97154_97196[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (13)))
{var inst_97138 = (state_97142[(2)]);var state_97142__$1 = state_97142;var statearr_97155_97197 = state_97142__$1;(statearr_97155_97197[(2)] = inst_97138);
(statearr_97155_97197[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (22)))
{var inst_97136 = (state_97142[(2)]);var state_97142__$1 = state_97142;var statearr_97156_97198 = state_97142__$1;(statearr_97156_97198[(2)] = inst_97136);
(statearr_97156_97198[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (6)))
{var inst_97140 = (state_97142[(2)]);var state_97142__$1 = state_97142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97142__$1,inst_97140);
} else
{if((state_val_97143 === (25)))
{var state_97142__$1 = state_97142;var statearr_97157_97199 = state_97142__$1;(statearr_97157_97199[(2)] = null);
(statearr_97157_97199[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (17)))
{var inst_97116 = (state_97142[(14)]);var state_97142__$1 = state_97142;var statearr_97158_97200 = state_97142__$1;(statearr_97158_97200[(2)] = inst_97116);
(statearr_97158_97200[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (3)))
{var inst_97076 = (state_97142[(9)]);var state_97142__$1 = state_97142;var statearr_97159_97201 = state_97142__$1;(statearr_97159_97201[(2)] = inst_97076);
(statearr_97159_97201[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (12)))
{var inst_97097 = (state_97142[(15)]);var inst_97102 = (state_97142[(16)]);var inst_97116 = (state_97142[(14)]);var inst_97116__$1 = inst_97097.call(null,inst_97102);var state_97142__$1 = (function (){var statearr_97160 = state_97142;(statearr_97160[(14)] = inst_97116__$1);
return statearr_97160;
})();if(cljs.core.truth_(inst_97116__$1))
{var statearr_97161_97202 = state_97142__$1;(statearr_97161_97202[(1)] = (17));
} else
{var statearr_97162_97203 = state_97142__$1;(statearr_97162_97203[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (2)))
{var inst_97076 = (state_97142[(9)]);var inst_97079 = cljs.core.apply.call(null,cljs.core.hash_map,inst_97076);var state_97142__$1 = state_97142;var statearr_97163_97204 = state_97142__$1;(statearr_97163_97204[(2)] = inst_97079);
(statearr_97163_97204[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (23)))
{var inst_97127 = (state_97142[(2)]);var state_97142__$1 = state_97142;if(cljs.core.truth_(inst_97127))
{var statearr_97164_97205 = state_97142__$1;(statearr_97164_97205[(1)] = (24));
} else
{var statearr_97165_97206 = state_97142__$1;(statearr_97165_97206[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (19)))
{var inst_97124 = (state_97142[(2)]);var state_97142__$1 = state_97142;if(cljs.core.truth_(inst_97124))
{var statearr_97166_97207 = state_97142__$1;(statearr_97166_97207[(1)] = (20));
} else
{var statearr_97167_97208 = state_97142__$1;(statearr_97167_97208[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (11)))
{var inst_97101 = (state_97142[(8)]);var inst_97107 = (inst_97101 == null);var state_97142__$1 = state_97142;if(cljs.core.truth_(inst_97107))
{var statearr_97168_97209 = state_97142__$1;(statearr_97168_97209[(1)] = (14));
} else
{var statearr_97169_97210 = state_97142__$1;(statearr_97169_97210[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (9)))
{var inst_97094 = (state_97142[(10)]);var inst_97094__$1 = (state_97142[(2)]);var inst_97095 = cljs.core.get.call(null,inst_97094__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_97096 = cljs.core.get.call(null,inst_97094__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_97097 = cljs.core.get.call(null,inst_97094__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_97142__$1 = (function (){var statearr_97170 = state_97142;(statearr_97170[(15)] = inst_97097);
(statearr_97170[(10)] = inst_97094__$1);
(statearr_97170[(17)] = inst_97096);
return statearr_97170;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_97142__$1,(10),inst_97095);
} else
{if((state_val_97143 === (5)))
{var inst_97086 = (state_97142[(7)]);var inst_97089 = cljs.core.seq_QMARK_.call(null,inst_97086);var state_97142__$1 = state_97142;if(inst_97089)
{var statearr_97171_97211 = state_97142__$1;(statearr_97171_97211[(1)] = (7));
} else
{var statearr_97172_97212 = state_97142__$1;(statearr_97172_97212[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (14)))
{var inst_97102 = (state_97142[(16)]);var inst_97109 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_97102);var state_97142__$1 = state_97142;var statearr_97173_97213 = state_97142__$1;(statearr_97173_97213[(2)] = inst_97109);
(statearr_97173_97213[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (26)))
{var inst_97132 = (state_97142[(2)]);var state_97142__$1 = state_97142;var statearr_97174_97214 = state_97142__$1;(statearr_97174_97214[(2)] = inst_97132);
(statearr_97174_97214[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (16)))
{var inst_97112 = (state_97142[(2)]);var inst_97113 = calc_state.call(null);var inst_97086 = inst_97113;var state_97142__$1 = (function (){var statearr_97175 = state_97142;(statearr_97175[(7)] = inst_97086);
(statearr_97175[(18)] = inst_97112);
return statearr_97175;
})();var statearr_97176_97215 = state_97142__$1;(statearr_97176_97215[(2)] = null);
(statearr_97176_97215[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (10)))
{var inst_97101 = (state_97142[(8)]);var inst_97102 = (state_97142[(16)]);var inst_97100 = (state_97142[(2)]);var inst_97101__$1 = cljs.core.nth.call(null,inst_97100,(0),null);var inst_97102__$1 = cljs.core.nth.call(null,inst_97100,(1),null);var inst_97103 = (inst_97101__$1 == null);var inst_97104 = cljs.core._EQ_.call(null,inst_97102__$1,change);var inst_97105 = (inst_97103) || (inst_97104);var state_97142__$1 = (function (){var statearr_97177 = state_97142;(statearr_97177[(8)] = inst_97101__$1);
(statearr_97177[(16)] = inst_97102__$1);
return statearr_97177;
})();if(cljs.core.truth_(inst_97105))
{var statearr_97178_97216 = state_97142__$1;(statearr_97178_97216[(1)] = (11));
} else
{var statearr_97179_97217 = state_97142__$1;(statearr_97179_97217[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (18)))
{var inst_97097 = (state_97142[(15)]);var inst_97102 = (state_97142[(16)]);var inst_97096 = (state_97142[(17)]);var inst_97119 = cljs.core.empty_QMARK_.call(null,inst_97097);var inst_97120 = inst_97096.call(null,inst_97102);var inst_97121 = cljs.core.not.call(null,inst_97120);var inst_97122 = (inst_97119) && (inst_97121);var state_97142__$1 = state_97142;var statearr_97180_97218 = state_97142__$1;(statearr_97180_97218[(2)] = inst_97122);
(statearr_97180_97218[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97143 === (8)))
{var inst_97086 = (state_97142[(7)]);var state_97142__$1 = state_97142;var statearr_97181_97219 = state_97142__$1;(statearr_97181_97219[(2)] = inst_97086);
(statearr_97181_97219[(1)] = (9));
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
});})(c__14620__auto___97189,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__14564__auto__,c__14620__auto___97189,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_97185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_97185[(0)] = state_machine__14565__auto__);
(statearr_97185[(1)] = (1));
return statearr_97185;
});
var state_machine__14565__auto____1 = (function (state_97142){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_97142);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e97186){if((e97186 instanceof Object))
{var ex__14568__auto__ = e97186;var statearr_97187_97220 = state_97142;(statearr_97187_97220[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97142);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e97186;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__97221 = state_97142;
state_97142 = G__97221;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_97142){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_97142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___97189,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14622__auto__ = (function (){var statearr_97188 = f__14621__auto__.call(null);(statearr_97188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___97189);
return statearr_97188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___97189,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj97223 = {};return obj97223;
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
return (function (p1__97224_SHARP_){if(cljs.core.truth_(p1__97224_SHARP_.call(null,topic)))
{return p1__97224_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__97224_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11497__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t97347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t97347 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta97348){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta97348 = meta97348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t97347.cljs$lang$type = true;
cljs.core.async.t97347.cljs$lang$ctorStr = "cljs.core.async/t97347";
cljs.core.async.t97347.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t97347");
});})(mults,ensure_mult))
;
cljs.core.async.t97347.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t97347.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t97347.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4388__auto__))
{var m = temp__4388__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t97347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t97347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t97347.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t97347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t97347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_97349){var self__ = this;
var _97349__$1 = this;return self__.meta97348;
});})(mults,ensure_mult))
;
cljs.core.async.t97347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_97349,meta97348__$1){var self__ = this;
var _97349__$1 = this;return (new cljs.core.async.t97347(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta97348__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t97347 = ((function (mults,ensure_mult){
return (function __GT_t97347(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta97348){return (new cljs.core.async.t97347(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta97348));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t97347(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14620__auto___97469 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___97469,mults,ensure_mult,p){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___97469,mults,ensure_mult,p){
return (function (state_97421){var state_val_97422 = (state_97421[(1)]);if((state_val_97422 === (7)))
{var inst_97417 = (state_97421[(2)]);var state_97421__$1 = state_97421;var statearr_97423_97470 = state_97421__$1;(statearr_97423_97470[(2)] = inst_97417);
(statearr_97423_97470[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (20)))
{var state_97421__$1 = state_97421;var statearr_97424_97471 = state_97421__$1;(statearr_97424_97471[(2)] = null);
(statearr_97424_97471[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (1)))
{var state_97421__$1 = state_97421;var statearr_97425_97472 = state_97421__$1;(statearr_97425_97472[(2)] = null);
(statearr_97425_97472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (24)))
{var inst_97400 = (state_97421[(7)]);var inst_97409 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_97400);var state_97421__$1 = state_97421;var statearr_97426_97473 = state_97421__$1;(statearr_97426_97473[(2)] = inst_97409);
(statearr_97426_97473[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (4)))
{var inst_97352 = (state_97421[(8)]);var inst_97352__$1 = (state_97421[(2)]);var inst_97353 = (inst_97352__$1 == null);var state_97421__$1 = (function (){var statearr_97427 = state_97421;(statearr_97427[(8)] = inst_97352__$1);
return statearr_97427;
})();if(cljs.core.truth_(inst_97353))
{var statearr_97428_97474 = state_97421__$1;(statearr_97428_97474[(1)] = (5));
} else
{var statearr_97429_97475 = state_97421__$1;(statearr_97429_97475[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (15)))
{var inst_97394 = (state_97421[(2)]);var state_97421__$1 = state_97421;var statearr_97430_97476 = state_97421__$1;(statearr_97430_97476[(2)] = inst_97394);
(statearr_97430_97476[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (21)))
{var inst_97414 = (state_97421[(2)]);var state_97421__$1 = (function (){var statearr_97431 = state_97421;(statearr_97431[(9)] = inst_97414);
return statearr_97431;
})();var statearr_97432_97477 = state_97421__$1;(statearr_97432_97477[(2)] = null);
(statearr_97432_97477[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (13)))
{var inst_97376 = (state_97421[(10)]);var inst_97378 = cljs.core.chunked_seq_QMARK_.call(null,inst_97376);var state_97421__$1 = state_97421;if(inst_97378)
{var statearr_97433_97478 = state_97421__$1;(statearr_97433_97478[(1)] = (16));
} else
{var statearr_97434_97479 = state_97421__$1;(statearr_97434_97479[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (22)))
{var inst_97406 = (state_97421[(2)]);var state_97421__$1 = state_97421;if(cljs.core.truth_(inst_97406))
{var statearr_97435_97480 = state_97421__$1;(statearr_97435_97480[(1)] = (23));
} else
{var statearr_97436_97481 = state_97421__$1;(statearr_97436_97481[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (6)))
{var inst_97400 = (state_97421[(7)]);var inst_97402 = (state_97421[(11)]);var inst_97352 = (state_97421[(8)]);var inst_97400__$1 = topic_fn.call(null,inst_97352);var inst_97401 = cljs.core.deref.call(null,mults);var inst_97402__$1 = cljs.core.get.call(null,inst_97401,inst_97400__$1);var state_97421__$1 = (function (){var statearr_97437 = state_97421;(statearr_97437[(7)] = inst_97400__$1);
(statearr_97437[(11)] = inst_97402__$1);
return statearr_97437;
})();if(cljs.core.truth_(inst_97402__$1))
{var statearr_97438_97482 = state_97421__$1;(statearr_97438_97482[(1)] = (19));
} else
{var statearr_97439_97483 = state_97421__$1;(statearr_97439_97483[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (25)))
{var inst_97411 = (state_97421[(2)]);var state_97421__$1 = state_97421;var statearr_97440_97484 = state_97421__$1;(statearr_97440_97484[(2)] = inst_97411);
(statearr_97440_97484[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (17)))
{var inst_97376 = (state_97421[(10)]);var inst_97385 = cljs.core.first.call(null,inst_97376);var inst_97386 = cljs.core.async.muxch_STAR_.call(null,inst_97385);var inst_97387 = cljs.core.async.close_BANG_.call(null,inst_97386);var inst_97388 = cljs.core.next.call(null,inst_97376);var inst_97362 = inst_97388;var inst_97363 = null;var inst_97364 = (0);var inst_97365 = (0);var state_97421__$1 = (function (){var statearr_97441 = state_97421;(statearr_97441[(12)] = inst_97365);
(statearr_97441[(13)] = inst_97387);
(statearr_97441[(14)] = inst_97364);
(statearr_97441[(15)] = inst_97363);
(statearr_97441[(16)] = inst_97362);
return statearr_97441;
})();var statearr_97442_97485 = state_97421__$1;(statearr_97442_97485[(2)] = null);
(statearr_97442_97485[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (3)))
{var inst_97419 = (state_97421[(2)]);var state_97421__$1 = state_97421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97421__$1,inst_97419);
} else
{if((state_val_97422 === (12)))
{var inst_97396 = (state_97421[(2)]);var state_97421__$1 = state_97421;var statearr_97443_97486 = state_97421__$1;(statearr_97443_97486[(2)] = inst_97396);
(statearr_97443_97486[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (2)))
{var state_97421__$1 = state_97421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97421__$1,(4),ch);
} else
{if((state_val_97422 === (23)))
{var state_97421__$1 = state_97421;var statearr_97444_97487 = state_97421__$1;(statearr_97444_97487[(2)] = null);
(statearr_97444_97487[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (19)))
{var inst_97402 = (state_97421[(11)]);var inst_97352 = (state_97421[(8)]);var inst_97404 = cljs.core.async.muxch_STAR_.call(null,inst_97402);var state_97421__$1 = state_97421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97421__$1,(22),inst_97404,inst_97352);
} else
{if((state_val_97422 === (11)))
{var inst_97376 = (state_97421[(10)]);var inst_97362 = (state_97421[(16)]);var inst_97376__$1 = cljs.core.seq.call(null,inst_97362);var state_97421__$1 = (function (){var statearr_97445 = state_97421;(statearr_97445[(10)] = inst_97376__$1);
return statearr_97445;
})();if(inst_97376__$1)
{var statearr_97446_97488 = state_97421__$1;(statearr_97446_97488[(1)] = (13));
} else
{var statearr_97447_97489 = state_97421__$1;(statearr_97447_97489[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (9)))
{var inst_97398 = (state_97421[(2)]);var state_97421__$1 = state_97421;var statearr_97448_97490 = state_97421__$1;(statearr_97448_97490[(2)] = inst_97398);
(statearr_97448_97490[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (5)))
{var inst_97359 = cljs.core.deref.call(null,mults);var inst_97360 = cljs.core.vals.call(null,inst_97359);var inst_97361 = cljs.core.seq.call(null,inst_97360);var inst_97362 = inst_97361;var inst_97363 = null;var inst_97364 = (0);var inst_97365 = (0);var state_97421__$1 = (function (){var statearr_97449 = state_97421;(statearr_97449[(12)] = inst_97365);
(statearr_97449[(14)] = inst_97364);
(statearr_97449[(15)] = inst_97363);
(statearr_97449[(16)] = inst_97362);
return statearr_97449;
})();var statearr_97450_97491 = state_97421__$1;(statearr_97450_97491[(2)] = null);
(statearr_97450_97491[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (14)))
{var state_97421__$1 = state_97421;var statearr_97454_97492 = state_97421__$1;(statearr_97454_97492[(2)] = null);
(statearr_97454_97492[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (16)))
{var inst_97376 = (state_97421[(10)]);var inst_97380 = cljs.core.chunk_first.call(null,inst_97376);var inst_97381 = cljs.core.chunk_rest.call(null,inst_97376);var inst_97382 = cljs.core.count.call(null,inst_97380);var inst_97362 = inst_97381;var inst_97363 = inst_97380;var inst_97364 = inst_97382;var inst_97365 = (0);var state_97421__$1 = (function (){var statearr_97455 = state_97421;(statearr_97455[(12)] = inst_97365);
(statearr_97455[(14)] = inst_97364);
(statearr_97455[(15)] = inst_97363);
(statearr_97455[(16)] = inst_97362);
return statearr_97455;
})();var statearr_97456_97493 = state_97421__$1;(statearr_97456_97493[(2)] = null);
(statearr_97456_97493[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (10)))
{var inst_97365 = (state_97421[(12)]);var inst_97364 = (state_97421[(14)]);var inst_97363 = (state_97421[(15)]);var inst_97362 = (state_97421[(16)]);var inst_97370 = cljs.core._nth.call(null,inst_97363,inst_97365);var inst_97371 = cljs.core.async.muxch_STAR_.call(null,inst_97370);var inst_97372 = cljs.core.async.close_BANG_.call(null,inst_97371);var inst_97373 = (inst_97365 + (1));var tmp97451 = inst_97364;var tmp97452 = inst_97363;var tmp97453 = inst_97362;var inst_97362__$1 = tmp97453;var inst_97363__$1 = tmp97452;var inst_97364__$1 = tmp97451;var inst_97365__$1 = inst_97373;var state_97421__$1 = (function (){var statearr_97457 = state_97421;(statearr_97457[(12)] = inst_97365__$1);
(statearr_97457[(14)] = inst_97364__$1);
(statearr_97457[(15)] = inst_97363__$1);
(statearr_97457[(17)] = inst_97372);
(statearr_97457[(16)] = inst_97362__$1);
return statearr_97457;
})();var statearr_97458_97494 = state_97421__$1;(statearr_97458_97494[(2)] = null);
(statearr_97458_97494[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (18)))
{var inst_97391 = (state_97421[(2)]);var state_97421__$1 = state_97421;var statearr_97459_97495 = state_97421__$1;(statearr_97459_97495[(2)] = inst_97391);
(statearr_97459_97495[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97422 === (8)))
{var inst_97365 = (state_97421[(12)]);var inst_97364 = (state_97421[(14)]);var inst_97367 = (inst_97365 < inst_97364);var inst_97368 = inst_97367;var state_97421__$1 = state_97421;if(cljs.core.truth_(inst_97368))
{var statearr_97460_97496 = state_97421__$1;(statearr_97460_97496[(1)] = (10));
} else
{var statearr_97461_97497 = state_97421__$1;(statearr_97461_97497[(1)] = (11));
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
});})(c__14620__auto___97469,mults,ensure_mult,p))
;return ((function (switch__14564__auto__,c__14620__auto___97469,mults,ensure_mult,p){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_97465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_97465[(0)] = state_machine__14565__auto__);
(statearr_97465[(1)] = (1));
return statearr_97465;
});
var state_machine__14565__auto____1 = (function (state_97421){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_97421);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e97466){if((e97466 instanceof Object))
{var ex__14568__auto__ = e97466;var statearr_97467_97498 = state_97421;(statearr_97467_97498[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97421);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e97466;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__97499 = state_97421;
state_97421 = G__97499;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_97421){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_97421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___97469,mults,ensure_mult,p))
})();var state__14622__auto__ = (function (){var statearr_97468 = f__14621__auto__.call(null);(statearr_97468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___97469);
return statearr_97468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___97469,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__14620__auto___97636 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___97636,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___97636,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_97606){var state_val_97607 = (state_97606[(1)]);if((state_val_97607 === (7)))
{var state_97606__$1 = state_97606;var statearr_97608_97637 = state_97606__$1;(statearr_97608_97637[(2)] = null);
(statearr_97608_97637[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (1)))
{var state_97606__$1 = state_97606;var statearr_97609_97638 = state_97606__$1;(statearr_97609_97638[(2)] = null);
(statearr_97609_97638[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (4)))
{var inst_97570 = (state_97606[(7)]);var inst_97572 = (inst_97570 < cnt);var state_97606__$1 = state_97606;if(cljs.core.truth_(inst_97572))
{var statearr_97610_97639 = state_97606__$1;(statearr_97610_97639[(1)] = (6));
} else
{var statearr_97611_97640 = state_97606__$1;(statearr_97611_97640[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (15)))
{var inst_97602 = (state_97606[(2)]);var state_97606__$1 = state_97606;var statearr_97612_97641 = state_97606__$1;(statearr_97612_97641[(2)] = inst_97602);
(statearr_97612_97641[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (13)))
{var inst_97595 = cljs.core.async.close_BANG_.call(null,out);var state_97606__$1 = state_97606;var statearr_97613_97642 = state_97606__$1;(statearr_97613_97642[(2)] = inst_97595);
(statearr_97613_97642[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (6)))
{var state_97606__$1 = state_97606;var statearr_97614_97643 = state_97606__$1;(statearr_97614_97643[(2)] = null);
(statearr_97614_97643[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (3)))
{var inst_97604 = (state_97606[(2)]);var state_97606__$1 = state_97606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97606__$1,inst_97604);
} else
{if((state_val_97607 === (12)))
{var inst_97592 = (state_97606[(8)]);var inst_97592__$1 = (state_97606[(2)]);var inst_97593 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_97592__$1);var state_97606__$1 = (function (){var statearr_97615 = state_97606;(statearr_97615[(8)] = inst_97592__$1);
return statearr_97615;
})();if(cljs.core.truth_(inst_97593))
{var statearr_97616_97644 = state_97606__$1;(statearr_97616_97644[(1)] = (13));
} else
{var statearr_97617_97645 = state_97606__$1;(statearr_97617_97645[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (2)))
{var inst_97569 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_97570 = (0);var state_97606__$1 = (function (){var statearr_97618 = state_97606;(statearr_97618[(7)] = inst_97570);
(statearr_97618[(9)] = inst_97569);
return statearr_97618;
})();var statearr_97619_97646 = state_97606__$1;(statearr_97619_97646[(2)] = null);
(statearr_97619_97646[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (11)))
{var inst_97570 = (state_97606[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_97606,(10),Object,null,(9));var inst_97579 = chs__$1.call(null,inst_97570);var inst_97580 = done.call(null,inst_97570);var inst_97581 = cljs.core.async.take_BANG_.call(null,inst_97579,inst_97580);var state_97606__$1 = state_97606;var statearr_97620_97647 = state_97606__$1;(statearr_97620_97647[(2)] = inst_97581);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97606__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (9)))
{var inst_97570 = (state_97606[(7)]);var inst_97583 = (state_97606[(2)]);var inst_97584 = (inst_97570 + (1));var inst_97570__$1 = inst_97584;var state_97606__$1 = (function (){var statearr_97621 = state_97606;(statearr_97621[(7)] = inst_97570__$1);
(statearr_97621[(10)] = inst_97583);
return statearr_97621;
})();var statearr_97622_97648 = state_97606__$1;(statearr_97622_97648[(2)] = null);
(statearr_97622_97648[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (5)))
{var inst_97590 = (state_97606[(2)]);var state_97606__$1 = (function (){var statearr_97623 = state_97606;(statearr_97623[(11)] = inst_97590);
return statearr_97623;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97606__$1,(12),dchan);
} else
{if((state_val_97607 === (14)))
{var inst_97592 = (state_97606[(8)]);var inst_97597 = cljs.core.apply.call(null,f,inst_97592);var state_97606__$1 = state_97606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97606__$1,(16),out,inst_97597);
} else
{if((state_val_97607 === (16)))
{var inst_97599 = (state_97606[(2)]);var state_97606__$1 = (function (){var statearr_97624 = state_97606;(statearr_97624[(12)] = inst_97599);
return statearr_97624;
})();var statearr_97625_97649 = state_97606__$1;(statearr_97625_97649[(2)] = null);
(statearr_97625_97649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (10)))
{var inst_97574 = (state_97606[(2)]);var inst_97575 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_97606__$1 = (function (){var statearr_97626 = state_97606;(statearr_97626[(13)] = inst_97574);
return statearr_97626;
})();var statearr_97627_97650 = state_97606__$1;(statearr_97627_97650[(2)] = inst_97575);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97606__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97607 === (8)))
{var inst_97588 = (state_97606[(2)]);var state_97606__$1 = state_97606;var statearr_97628_97651 = state_97606__$1;(statearr_97628_97651[(2)] = inst_97588);
(statearr_97628_97651[(1)] = (5));
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
});})(c__14620__auto___97636,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__14564__auto__,c__14620__auto___97636,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_97632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_97632[(0)] = state_machine__14565__auto__);
(statearr_97632[(1)] = (1));
return statearr_97632;
});
var state_machine__14565__auto____1 = (function (state_97606){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_97606);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e97633){if((e97633 instanceof Object))
{var ex__14568__auto__ = e97633;var statearr_97634_97652 = state_97606;(statearr_97634_97652[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e97633;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__97653 = state_97606;
state_97606 = G__97653;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_97606){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_97606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___97636,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14622__auto__ = (function (){var statearr_97635 = f__14621__auto__.call(null);(statearr_97635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___97636);
return statearr_97635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___97636,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___97761 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___97761,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___97761,out){
return (function (state_97737){var state_val_97738 = (state_97737[(1)]);if((state_val_97738 === (7)))
{var inst_97717 = (state_97737[(7)]);var inst_97716 = (state_97737[(8)]);var inst_97716__$1 = (state_97737[(2)]);var inst_97717__$1 = cljs.core.nth.call(null,inst_97716__$1,(0),null);var inst_97718 = cljs.core.nth.call(null,inst_97716__$1,(1),null);var inst_97719 = (inst_97717__$1 == null);var state_97737__$1 = (function (){var statearr_97739 = state_97737;(statearr_97739[(7)] = inst_97717__$1);
(statearr_97739[(9)] = inst_97718);
(statearr_97739[(8)] = inst_97716__$1);
return statearr_97739;
})();if(cljs.core.truth_(inst_97719))
{var statearr_97740_97762 = state_97737__$1;(statearr_97740_97762[(1)] = (8));
} else
{var statearr_97741_97763 = state_97737__$1;(statearr_97741_97763[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97738 === (1)))
{var inst_97708 = cljs.core.vec.call(null,chs);var inst_97709 = inst_97708;var state_97737__$1 = (function (){var statearr_97742 = state_97737;(statearr_97742[(10)] = inst_97709);
return statearr_97742;
})();var statearr_97743_97764 = state_97737__$1;(statearr_97743_97764[(2)] = null);
(statearr_97743_97764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97738 === (4)))
{var inst_97709 = (state_97737[(10)]);var state_97737__$1 = state_97737;return cljs.core.async.ioc_alts_BANG_.call(null,state_97737__$1,(7),inst_97709);
} else
{if((state_val_97738 === (6)))
{var inst_97733 = (state_97737[(2)]);var state_97737__$1 = state_97737;var statearr_97744_97765 = state_97737__$1;(statearr_97744_97765[(2)] = inst_97733);
(statearr_97744_97765[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97738 === (3)))
{var inst_97735 = (state_97737[(2)]);var state_97737__$1 = state_97737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97737__$1,inst_97735);
} else
{if((state_val_97738 === (2)))
{var inst_97709 = (state_97737[(10)]);var inst_97711 = cljs.core.count.call(null,inst_97709);var inst_97712 = (inst_97711 > (0));var state_97737__$1 = state_97737;if(cljs.core.truth_(inst_97712))
{var statearr_97746_97766 = state_97737__$1;(statearr_97746_97766[(1)] = (4));
} else
{var statearr_97747_97767 = state_97737__$1;(statearr_97747_97767[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97738 === (11)))
{var inst_97709 = (state_97737[(10)]);var inst_97726 = (state_97737[(2)]);var tmp97745 = inst_97709;var inst_97709__$1 = tmp97745;var state_97737__$1 = (function (){var statearr_97748 = state_97737;(statearr_97748[(11)] = inst_97726);
(statearr_97748[(10)] = inst_97709__$1);
return statearr_97748;
})();var statearr_97749_97768 = state_97737__$1;(statearr_97749_97768[(2)] = null);
(statearr_97749_97768[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97738 === (9)))
{var inst_97717 = (state_97737[(7)]);var state_97737__$1 = state_97737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97737__$1,(11),out,inst_97717);
} else
{if((state_val_97738 === (5)))
{var inst_97731 = cljs.core.async.close_BANG_.call(null,out);var state_97737__$1 = state_97737;var statearr_97750_97769 = state_97737__$1;(statearr_97750_97769[(2)] = inst_97731);
(statearr_97750_97769[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97738 === (10)))
{var inst_97729 = (state_97737[(2)]);var state_97737__$1 = state_97737;var statearr_97751_97770 = state_97737__$1;(statearr_97751_97770[(2)] = inst_97729);
(statearr_97751_97770[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97738 === (8)))
{var inst_97717 = (state_97737[(7)]);var inst_97709 = (state_97737[(10)]);var inst_97718 = (state_97737[(9)]);var inst_97716 = (state_97737[(8)]);var inst_97721 = (function (){var c = inst_97718;var v = inst_97717;var vec__97714 = inst_97716;var cs = inst_97709;return ((function (c,v,vec__97714,cs,inst_97717,inst_97709,inst_97718,inst_97716,state_val_97738,c__14620__auto___97761,out){
return (function (p1__97654_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__97654_SHARP_);
});
;})(c,v,vec__97714,cs,inst_97717,inst_97709,inst_97718,inst_97716,state_val_97738,c__14620__auto___97761,out))
})();var inst_97722 = cljs.core.filterv.call(null,inst_97721,inst_97709);var inst_97709__$1 = inst_97722;var state_97737__$1 = (function (){var statearr_97752 = state_97737;(statearr_97752[(10)] = inst_97709__$1);
return statearr_97752;
})();var statearr_97753_97771 = state_97737__$1;(statearr_97753_97771[(2)] = null);
(statearr_97753_97771[(1)] = (2));
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
});})(c__14620__auto___97761,out))
;return ((function (switch__14564__auto__,c__14620__auto___97761,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_97757 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_97757[(0)] = state_machine__14565__auto__);
(statearr_97757[(1)] = (1));
return statearr_97757;
});
var state_machine__14565__auto____1 = (function (state_97737){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_97737);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e97758){if((e97758 instanceof Object))
{var ex__14568__auto__ = e97758;var statearr_97759_97772 = state_97737;(statearr_97759_97772[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97737);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e97758;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__97773 = state_97737;
state_97737 = G__97773;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_97737){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_97737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___97761,out))
})();var state__14622__auto__ = (function (){var statearr_97760 = f__14621__auto__.call(null);(statearr_97760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___97761);
return statearr_97760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___97761,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___97866 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___97866,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___97866,out){
return (function (state_97843){var state_val_97844 = (state_97843[(1)]);if((state_val_97844 === (7)))
{var inst_97825 = (state_97843[(7)]);var inst_97825__$1 = (state_97843[(2)]);var inst_97826 = (inst_97825__$1 == null);var inst_97827 = cljs.core.not.call(null,inst_97826);var state_97843__$1 = (function (){var statearr_97845 = state_97843;(statearr_97845[(7)] = inst_97825__$1);
return statearr_97845;
})();if(inst_97827)
{var statearr_97846_97867 = state_97843__$1;(statearr_97846_97867[(1)] = (8));
} else
{var statearr_97847_97868 = state_97843__$1;(statearr_97847_97868[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97844 === (1)))
{var inst_97820 = (0);var state_97843__$1 = (function (){var statearr_97848 = state_97843;(statearr_97848[(8)] = inst_97820);
return statearr_97848;
})();var statearr_97849_97869 = state_97843__$1;(statearr_97849_97869[(2)] = null);
(statearr_97849_97869[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97844 === (4)))
{var state_97843__$1 = state_97843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97843__$1,(7),ch);
} else
{if((state_val_97844 === (6)))
{var inst_97838 = (state_97843[(2)]);var state_97843__$1 = state_97843;var statearr_97850_97870 = state_97843__$1;(statearr_97850_97870[(2)] = inst_97838);
(statearr_97850_97870[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97844 === (3)))
{var inst_97840 = (state_97843[(2)]);var inst_97841 = cljs.core.async.close_BANG_.call(null,out);var state_97843__$1 = (function (){var statearr_97851 = state_97843;(statearr_97851[(9)] = inst_97840);
return statearr_97851;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97843__$1,inst_97841);
} else
{if((state_val_97844 === (2)))
{var inst_97820 = (state_97843[(8)]);var inst_97822 = (inst_97820 < n);var state_97843__$1 = state_97843;if(cljs.core.truth_(inst_97822))
{var statearr_97852_97871 = state_97843__$1;(statearr_97852_97871[(1)] = (4));
} else
{var statearr_97853_97872 = state_97843__$1;(statearr_97853_97872[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97844 === (11)))
{var inst_97820 = (state_97843[(8)]);var inst_97830 = (state_97843[(2)]);var inst_97831 = (inst_97820 + (1));var inst_97820__$1 = inst_97831;var state_97843__$1 = (function (){var statearr_97854 = state_97843;(statearr_97854[(8)] = inst_97820__$1);
(statearr_97854[(10)] = inst_97830);
return statearr_97854;
})();var statearr_97855_97873 = state_97843__$1;(statearr_97855_97873[(2)] = null);
(statearr_97855_97873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97844 === (9)))
{var state_97843__$1 = state_97843;var statearr_97856_97874 = state_97843__$1;(statearr_97856_97874[(2)] = null);
(statearr_97856_97874[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97844 === (5)))
{var state_97843__$1 = state_97843;var statearr_97857_97875 = state_97843__$1;(statearr_97857_97875[(2)] = null);
(statearr_97857_97875[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97844 === (10)))
{var inst_97835 = (state_97843[(2)]);var state_97843__$1 = state_97843;var statearr_97858_97876 = state_97843__$1;(statearr_97858_97876[(2)] = inst_97835);
(statearr_97858_97876[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97844 === (8)))
{var inst_97825 = (state_97843[(7)]);var state_97843__$1 = state_97843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97843__$1,(11),out,inst_97825);
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
});})(c__14620__auto___97866,out))
;return ((function (switch__14564__auto__,c__14620__auto___97866,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_97862 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_97862[(0)] = state_machine__14565__auto__);
(statearr_97862[(1)] = (1));
return statearr_97862;
});
var state_machine__14565__auto____1 = (function (state_97843){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_97843);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e97863){if((e97863 instanceof Object))
{var ex__14568__auto__ = e97863;var statearr_97864_97877 = state_97843;(statearr_97864_97877[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e97863;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__97878 = state_97843;
state_97843 = G__97878;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_97843){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_97843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___97866,out))
})();var state__14622__auto__ = (function (){var statearr_97865 = f__14621__auto__.call(null);(statearr_97865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___97866);
return statearr_97865;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___97866,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t97886 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t97886 = (function (ch,f,map_LT_,meta97887){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta97887 = meta97887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t97886.cljs$lang$type = true;
cljs.core.async.t97886.cljs$lang$ctorStr = "cljs.core.async/t97886";
cljs.core.async.t97886.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t97886");
});
cljs.core.async.t97886.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t97886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t97886.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t97886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t97889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t97889 = (function (fn1,_,meta97887,ch,f,map_LT_,meta97890){
this.fn1 = fn1;
this._ = _;
this.meta97887 = meta97887;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta97890 = meta97890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t97889.cljs$lang$type = true;
cljs.core.async.t97889.cljs$lang$ctorStr = "cljs.core.async/t97889";
cljs.core.async.t97889.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t97889");
});})(___$1))
;
cljs.core.async.t97889.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t97889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t97889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__97879_SHARP_){return f1.call(null,(((p1__97879_SHARP_ == null))?null:self__.f.call(null,p1__97879_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t97889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_97891){var self__ = this;
var _97891__$1 = this;return self__.meta97890;
});})(___$1))
;
cljs.core.async.t97889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_97891,meta97890__$1){var self__ = this;
var _97891__$1 = this;return (new cljs.core.async.t97889(self__.fn1,self__._,self__.meta97887,self__.ch,self__.f,self__.map_LT_,meta97890__$1));
});})(___$1))
;
cljs.core.async.__GT_t97889 = ((function (___$1){
return (function __GT_t97889(fn1__$1,___$2,meta97887__$1,ch__$2,f__$2,map_LT___$2,meta97890){return (new cljs.core.async.t97889(fn1__$1,___$2,meta97887__$1,ch__$2,f__$2,map_LT___$2,meta97890));
});})(___$1))
;
}
return (new cljs.core.async.t97889(fn1,___$1,self__.meta97887,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t97886.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t97886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t97886.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t97886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97888){var self__ = this;
var _97888__$1 = this;return self__.meta97887;
});
cljs.core.async.t97886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97888,meta97887__$1){var self__ = this;
var _97888__$1 = this;return (new cljs.core.async.t97886(self__.ch,self__.f,self__.map_LT_,meta97887__$1));
});
cljs.core.async.__GT_t97886 = (function __GT_t97886(ch__$1,f__$1,map_LT___$1,meta97887){return (new cljs.core.async.t97886(ch__$1,f__$1,map_LT___$1,meta97887));
});
}
return (new cljs.core.async.t97886(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t97895 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t97895 = (function (ch,f,map_GT_,meta97896){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta97896 = meta97896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t97895.cljs$lang$type = true;
cljs.core.async.t97895.cljs$lang$ctorStr = "cljs.core.async/t97895";
cljs.core.async.t97895.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t97895");
});
cljs.core.async.t97895.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t97895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t97895.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t97895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t97895.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t97895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t97895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97897){var self__ = this;
var _97897__$1 = this;return self__.meta97896;
});
cljs.core.async.t97895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97897,meta97896__$1){var self__ = this;
var _97897__$1 = this;return (new cljs.core.async.t97895(self__.ch,self__.f,self__.map_GT_,meta97896__$1));
});
cljs.core.async.__GT_t97895 = (function __GT_t97895(ch__$1,f__$1,map_GT___$1,meta97896){return (new cljs.core.async.t97895(ch__$1,f__$1,map_GT___$1,meta97896));
});
}
return (new cljs.core.async.t97895(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t97901 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t97901 = (function (ch,p,filter_GT_,meta97902){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta97902 = meta97902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t97901.cljs$lang$type = true;
cljs.core.async.t97901.cljs$lang$ctorStr = "cljs.core.async/t97901";
cljs.core.async.t97901.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t97901");
});
cljs.core.async.t97901.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t97901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t97901.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t97901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t97901.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t97901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t97901.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t97901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97903){var self__ = this;
var _97903__$1 = this;return self__.meta97902;
});
cljs.core.async.t97901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97903,meta97902__$1){var self__ = this;
var _97903__$1 = this;return (new cljs.core.async.t97901(self__.ch,self__.p,self__.filter_GT_,meta97902__$1));
});
cljs.core.async.__GT_t97901 = (function __GT_t97901(ch__$1,p__$1,filter_GT___$1,meta97902){return (new cljs.core.async.t97901(ch__$1,p__$1,filter_GT___$1,meta97902));
});
}
return (new cljs.core.async.t97901(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___97986 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___97986,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___97986,out){
return (function (state_97965){var state_val_97966 = (state_97965[(1)]);if((state_val_97966 === (7)))
{var inst_97961 = (state_97965[(2)]);var state_97965__$1 = state_97965;var statearr_97967_97987 = state_97965__$1;(statearr_97967_97987[(2)] = inst_97961);
(statearr_97967_97987[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97966 === (1)))
{var state_97965__$1 = state_97965;var statearr_97968_97988 = state_97965__$1;(statearr_97968_97988[(2)] = null);
(statearr_97968_97988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97966 === (4)))
{var inst_97947 = (state_97965[(7)]);var inst_97947__$1 = (state_97965[(2)]);var inst_97948 = (inst_97947__$1 == null);var state_97965__$1 = (function (){var statearr_97969 = state_97965;(statearr_97969[(7)] = inst_97947__$1);
return statearr_97969;
})();if(cljs.core.truth_(inst_97948))
{var statearr_97970_97989 = state_97965__$1;(statearr_97970_97989[(1)] = (5));
} else
{var statearr_97971_97990 = state_97965__$1;(statearr_97971_97990[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97966 === (6)))
{var inst_97947 = (state_97965[(7)]);var inst_97952 = p.call(null,inst_97947);var state_97965__$1 = state_97965;if(cljs.core.truth_(inst_97952))
{var statearr_97972_97991 = state_97965__$1;(statearr_97972_97991[(1)] = (8));
} else
{var statearr_97973_97992 = state_97965__$1;(statearr_97973_97992[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97966 === (3)))
{var inst_97963 = (state_97965[(2)]);var state_97965__$1 = state_97965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97965__$1,inst_97963);
} else
{if((state_val_97966 === (2)))
{var state_97965__$1 = state_97965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97965__$1,(4),ch);
} else
{if((state_val_97966 === (11)))
{var inst_97955 = (state_97965[(2)]);var state_97965__$1 = state_97965;var statearr_97974_97993 = state_97965__$1;(statearr_97974_97993[(2)] = inst_97955);
(statearr_97974_97993[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97966 === (9)))
{var state_97965__$1 = state_97965;var statearr_97975_97994 = state_97965__$1;(statearr_97975_97994[(2)] = null);
(statearr_97975_97994[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97966 === (5)))
{var inst_97950 = cljs.core.async.close_BANG_.call(null,out);var state_97965__$1 = state_97965;var statearr_97976_97995 = state_97965__$1;(statearr_97976_97995[(2)] = inst_97950);
(statearr_97976_97995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97966 === (10)))
{var inst_97958 = (state_97965[(2)]);var state_97965__$1 = (function (){var statearr_97977 = state_97965;(statearr_97977[(8)] = inst_97958);
return statearr_97977;
})();var statearr_97978_97996 = state_97965__$1;(statearr_97978_97996[(2)] = null);
(statearr_97978_97996[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97966 === (8)))
{var inst_97947 = (state_97965[(7)]);var state_97965__$1 = state_97965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97965__$1,(11),out,inst_97947);
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
});})(c__14620__auto___97986,out))
;return ((function (switch__14564__auto__,c__14620__auto___97986,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_97982 = [null,null,null,null,null,null,null,null,null];(statearr_97982[(0)] = state_machine__14565__auto__);
(statearr_97982[(1)] = (1));
return statearr_97982;
});
var state_machine__14565__auto____1 = (function (state_97965){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_97965);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e97983){if((e97983 instanceof Object))
{var ex__14568__auto__ = e97983;var statearr_97984_97997 = state_97965;(statearr_97984_97997[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97965);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e97983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__97998 = state_97965;
state_97965 = G__97998;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_97965){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_97965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___97986,out))
})();var state__14622__auto__ = (function (){var statearr_97985 = f__14621__auto__.call(null);(statearr_97985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___97986);
return statearr_97985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___97986,out))
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
return (function (state_98164){var state_val_98165 = (state_98164[(1)]);if((state_val_98165 === (7)))
{var inst_98160 = (state_98164[(2)]);var state_98164__$1 = state_98164;var statearr_98166_98207 = state_98164__$1;(statearr_98166_98207[(2)] = inst_98160);
(statearr_98166_98207[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (20)))
{var inst_98130 = (state_98164[(7)]);var inst_98141 = (state_98164[(2)]);var inst_98142 = cljs.core.next.call(null,inst_98130);var inst_98116 = inst_98142;var inst_98117 = null;var inst_98118 = (0);var inst_98119 = (0);var state_98164__$1 = (function (){var statearr_98167 = state_98164;(statearr_98167[(8)] = inst_98116);
(statearr_98167[(9)] = inst_98141);
(statearr_98167[(10)] = inst_98118);
(statearr_98167[(11)] = inst_98119);
(statearr_98167[(12)] = inst_98117);
return statearr_98167;
})();var statearr_98168_98208 = state_98164__$1;(statearr_98168_98208[(2)] = null);
(statearr_98168_98208[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (1)))
{var state_98164__$1 = state_98164;var statearr_98169_98209 = state_98164__$1;(statearr_98169_98209[(2)] = null);
(statearr_98169_98209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (4)))
{var inst_98105 = (state_98164[(13)]);var inst_98105__$1 = (state_98164[(2)]);var inst_98106 = (inst_98105__$1 == null);var state_98164__$1 = (function (){var statearr_98170 = state_98164;(statearr_98170[(13)] = inst_98105__$1);
return statearr_98170;
})();if(cljs.core.truth_(inst_98106))
{var statearr_98171_98210 = state_98164__$1;(statearr_98171_98210[(1)] = (5));
} else
{var statearr_98172_98211 = state_98164__$1;(statearr_98172_98211[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (15)))
{var state_98164__$1 = state_98164;var statearr_98176_98212 = state_98164__$1;(statearr_98176_98212[(2)] = null);
(statearr_98176_98212[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (21)))
{var state_98164__$1 = state_98164;var statearr_98177_98213 = state_98164__$1;(statearr_98177_98213[(2)] = null);
(statearr_98177_98213[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (13)))
{var inst_98116 = (state_98164[(8)]);var inst_98118 = (state_98164[(10)]);var inst_98119 = (state_98164[(11)]);var inst_98117 = (state_98164[(12)]);var inst_98126 = (state_98164[(2)]);var inst_98127 = (inst_98119 + (1));var tmp98173 = inst_98116;var tmp98174 = inst_98118;var tmp98175 = inst_98117;var inst_98116__$1 = tmp98173;var inst_98117__$1 = tmp98175;var inst_98118__$1 = tmp98174;var inst_98119__$1 = inst_98127;var state_98164__$1 = (function (){var statearr_98178 = state_98164;(statearr_98178[(8)] = inst_98116__$1);
(statearr_98178[(10)] = inst_98118__$1);
(statearr_98178[(11)] = inst_98119__$1);
(statearr_98178[(14)] = inst_98126);
(statearr_98178[(12)] = inst_98117__$1);
return statearr_98178;
})();var statearr_98179_98214 = state_98164__$1;(statearr_98179_98214[(2)] = null);
(statearr_98179_98214[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (22)))
{var state_98164__$1 = state_98164;var statearr_98180_98215 = state_98164__$1;(statearr_98180_98215[(2)] = null);
(statearr_98180_98215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (6)))
{var inst_98105 = (state_98164[(13)]);var inst_98114 = f.call(null,inst_98105);var inst_98115 = cljs.core.seq.call(null,inst_98114);var inst_98116 = inst_98115;var inst_98117 = null;var inst_98118 = (0);var inst_98119 = (0);var state_98164__$1 = (function (){var statearr_98181 = state_98164;(statearr_98181[(8)] = inst_98116);
(statearr_98181[(10)] = inst_98118);
(statearr_98181[(11)] = inst_98119);
(statearr_98181[(12)] = inst_98117);
return statearr_98181;
})();var statearr_98182_98216 = state_98164__$1;(statearr_98182_98216[(2)] = null);
(statearr_98182_98216[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (17)))
{var inst_98130 = (state_98164[(7)]);var inst_98134 = cljs.core.chunk_first.call(null,inst_98130);var inst_98135 = cljs.core.chunk_rest.call(null,inst_98130);var inst_98136 = cljs.core.count.call(null,inst_98134);var inst_98116 = inst_98135;var inst_98117 = inst_98134;var inst_98118 = inst_98136;var inst_98119 = (0);var state_98164__$1 = (function (){var statearr_98183 = state_98164;(statearr_98183[(8)] = inst_98116);
(statearr_98183[(10)] = inst_98118);
(statearr_98183[(11)] = inst_98119);
(statearr_98183[(12)] = inst_98117);
return statearr_98183;
})();var statearr_98184_98217 = state_98164__$1;(statearr_98184_98217[(2)] = null);
(statearr_98184_98217[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (3)))
{var inst_98162 = (state_98164[(2)]);var state_98164__$1 = state_98164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98164__$1,inst_98162);
} else
{if((state_val_98165 === (12)))
{var inst_98150 = (state_98164[(2)]);var state_98164__$1 = state_98164;var statearr_98185_98218 = state_98164__$1;(statearr_98185_98218[(2)] = inst_98150);
(statearr_98185_98218[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (2)))
{var state_98164__$1 = state_98164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98164__$1,(4),in$);
} else
{if((state_val_98165 === (23)))
{var inst_98158 = (state_98164[(2)]);var state_98164__$1 = state_98164;var statearr_98186_98219 = state_98164__$1;(statearr_98186_98219[(2)] = inst_98158);
(statearr_98186_98219[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (19)))
{var inst_98145 = (state_98164[(2)]);var state_98164__$1 = state_98164;var statearr_98187_98220 = state_98164__$1;(statearr_98187_98220[(2)] = inst_98145);
(statearr_98187_98220[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (11)))
{var inst_98116 = (state_98164[(8)]);var inst_98130 = (state_98164[(7)]);var inst_98130__$1 = cljs.core.seq.call(null,inst_98116);var state_98164__$1 = (function (){var statearr_98188 = state_98164;(statearr_98188[(7)] = inst_98130__$1);
return statearr_98188;
})();if(inst_98130__$1)
{var statearr_98189_98221 = state_98164__$1;(statearr_98189_98221[(1)] = (14));
} else
{var statearr_98190_98222 = state_98164__$1;(statearr_98190_98222[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (9)))
{var inst_98152 = (state_98164[(2)]);var inst_98153 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_98164__$1 = (function (){var statearr_98191 = state_98164;(statearr_98191[(15)] = inst_98152);
return statearr_98191;
})();if(cljs.core.truth_(inst_98153))
{var statearr_98192_98223 = state_98164__$1;(statearr_98192_98223[(1)] = (21));
} else
{var statearr_98193_98224 = state_98164__$1;(statearr_98193_98224[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (5)))
{var inst_98108 = cljs.core.async.close_BANG_.call(null,out);var state_98164__$1 = state_98164;var statearr_98194_98225 = state_98164__$1;(statearr_98194_98225[(2)] = inst_98108);
(statearr_98194_98225[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (14)))
{var inst_98130 = (state_98164[(7)]);var inst_98132 = cljs.core.chunked_seq_QMARK_.call(null,inst_98130);var state_98164__$1 = state_98164;if(inst_98132)
{var statearr_98195_98226 = state_98164__$1;(statearr_98195_98226[(1)] = (17));
} else
{var statearr_98196_98227 = state_98164__$1;(statearr_98196_98227[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (16)))
{var inst_98148 = (state_98164[(2)]);var state_98164__$1 = state_98164;var statearr_98197_98228 = state_98164__$1;(statearr_98197_98228[(2)] = inst_98148);
(statearr_98197_98228[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98165 === (10)))
{var inst_98119 = (state_98164[(11)]);var inst_98117 = (state_98164[(12)]);var inst_98124 = cljs.core._nth.call(null,inst_98117,inst_98119);var state_98164__$1 = state_98164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98164__$1,(13),out,inst_98124);
} else
{if((state_val_98165 === (18)))
{var inst_98130 = (state_98164[(7)]);var inst_98139 = cljs.core.first.call(null,inst_98130);var state_98164__$1 = state_98164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98164__$1,(20),out,inst_98139);
} else
{if((state_val_98165 === (8)))
{var inst_98118 = (state_98164[(10)]);var inst_98119 = (state_98164[(11)]);var inst_98121 = (inst_98119 < inst_98118);var inst_98122 = inst_98121;var state_98164__$1 = state_98164;if(cljs.core.truth_(inst_98122))
{var statearr_98198_98229 = state_98164__$1;(statearr_98198_98229[(1)] = (10));
} else
{var statearr_98199_98230 = state_98164__$1;(statearr_98199_98230[(1)] = (11));
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
var state_machine__14565__auto____0 = (function (){var statearr_98203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_98203[(0)] = state_machine__14565__auto__);
(statearr_98203[(1)] = (1));
return statearr_98203;
});
var state_machine__14565__auto____1 = (function (state_98164){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_98164);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e98204){if((e98204 instanceof Object))
{var ex__14568__auto__ = e98204;var statearr_98205_98231 = state_98164;(statearr_98205_98231[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98164);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e98204;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98232 = state_98164;
state_98164 = G__98232;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_98164){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_98164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__))
})();var state__14622__auto__ = (function (){var statearr_98206 = f__14621__auto__.call(null);(statearr_98206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_98206;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___98329 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___98329,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___98329,out){
return (function (state_98304){var state_val_98305 = (state_98304[(1)]);if((state_val_98305 === (7)))
{var inst_98299 = (state_98304[(2)]);var state_98304__$1 = state_98304;var statearr_98306_98330 = state_98304__$1;(statearr_98306_98330[(2)] = inst_98299);
(statearr_98306_98330[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98305 === (1)))
{var inst_98281 = null;var state_98304__$1 = (function (){var statearr_98307 = state_98304;(statearr_98307[(7)] = inst_98281);
return statearr_98307;
})();var statearr_98308_98331 = state_98304__$1;(statearr_98308_98331[(2)] = null);
(statearr_98308_98331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98305 === (4)))
{var inst_98284 = (state_98304[(8)]);var inst_98284__$1 = (state_98304[(2)]);var inst_98285 = (inst_98284__$1 == null);var inst_98286 = cljs.core.not.call(null,inst_98285);var state_98304__$1 = (function (){var statearr_98309 = state_98304;(statearr_98309[(8)] = inst_98284__$1);
return statearr_98309;
})();if(inst_98286)
{var statearr_98310_98332 = state_98304__$1;(statearr_98310_98332[(1)] = (5));
} else
{var statearr_98311_98333 = state_98304__$1;(statearr_98311_98333[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98305 === (6)))
{var state_98304__$1 = state_98304;var statearr_98312_98334 = state_98304__$1;(statearr_98312_98334[(2)] = null);
(statearr_98312_98334[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98305 === (3)))
{var inst_98301 = (state_98304[(2)]);var inst_98302 = cljs.core.async.close_BANG_.call(null,out);var state_98304__$1 = (function (){var statearr_98313 = state_98304;(statearr_98313[(9)] = inst_98301);
return statearr_98313;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98304__$1,inst_98302);
} else
{if((state_val_98305 === (2)))
{var state_98304__$1 = state_98304;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98304__$1,(4),ch);
} else
{if((state_val_98305 === (11)))
{var inst_98284 = (state_98304[(8)]);var inst_98293 = (state_98304[(2)]);var inst_98281 = inst_98284;var state_98304__$1 = (function (){var statearr_98314 = state_98304;(statearr_98314[(7)] = inst_98281);
(statearr_98314[(10)] = inst_98293);
return statearr_98314;
})();var statearr_98315_98335 = state_98304__$1;(statearr_98315_98335[(2)] = null);
(statearr_98315_98335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98305 === (9)))
{var inst_98284 = (state_98304[(8)]);var state_98304__$1 = state_98304;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98304__$1,(11),out,inst_98284);
} else
{if((state_val_98305 === (5)))
{var inst_98284 = (state_98304[(8)]);var inst_98281 = (state_98304[(7)]);var inst_98288 = cljs.core._EQ_.call(null,inst_98284,inst_98281);var state_98304__$1 = state_98304;if(inst_98288)
{var statearr_98317_98336 = state_98304__$1;(statearr_98317_98336[(1)] = (8));
} else
{var statearr_98318_98337 = state_98304__$1;(statearr_98318_98337[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98305 === (10)))
{var inst_98296 = (state_98304[(2)]);var state_98304__$1 = state_98304;var statearr_98319_98338 = state_98304__$1;(statearr_98319_98338[(2)] = inst_98296);
(statearr_98319_98338[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98305 === (8)))
{var inst_98281 = (state_98304[(7)]);var tmp98316 = inst_98281;var inst_98281__$1 = tmp98316;var state_98304__$1 = (function (){var statearr_98320 = state_98304;(statearr_98320[(7)] = inst_98281__$1);
return statearr_98320;
})();var statearr_98321_98339 = state_98304__$1;(statearr_98321_98339[(2)] = null);
(statearr_98321_98339[(1)] = (2));
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
});})(c__14620__auto___98329,out))
;return ((function (switch__14564__auto__,c__14620__auto___98329,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_98325 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_98325[(0)] = state_machine__14565__auto__);
(statearr_98325[(1)] = (1));
return statearr_98325;
});
var state_machine__14565__auto____1 = (function (state_98304){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_98304);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e98326){if((e98326 instanceof Object))
{var ex__14568__auto__ = e98326;var statearr_98327_98340 = state_98304;(statearr_98327_98340[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98304);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e98326;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98341 = state_98304;
state_98304 = G__98341;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_98304){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_98304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___98329,out))
})();var state__14622__auto__ = (function (){var statearr_98328 = f__14621__auto__.call(null);(statearr_98328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___98329);
return statearr_98328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___98329,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___98476 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___98476,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___98476,out){
return (function (state_98446){var state_val_98447 = (state_98446[(1)]);if((state_val_98447 === (7)))
{var inst_98442 = (state_98446[(2)]);var state_98446__$1 = state_98446;var statearr_98448_98477 = state_98446__$1;(statearr_98448_98477[(2)] = inst_98442);
(statearr_98448_98477[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (1)))
{var inst_98409 = (new Array(n));var inst_98410 = inst_98409;var inst_98411 = (0);var state_98446__$1 = (function (){var statearr_98449 = state_98446;(statearr_98449[(7)] = inst_98411);
(statearr_98449[(8)] = inst_98410);
return statearr_98449;
})();var statearr_98450_98478 = state_98446__$1;(statearr_98450_98478[(2)] = null);
(statearr_98450_98478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (4)))
{var inst_98414 = (state_98446[(9)]);var inst_98414__$1 = (state_98446[(2)]);var inst_98415 = (inst_98414__$1 == null);var inst_98416 = cljs.core.not.call(null,inst_98415);var state_98446__$1 = (function (){var statearr_98451 = state_98446;(statearr_98451[(9)] = inst_98414__$1);
return statearr_98451;
})();if(inst_98416)
{var statearr_98452_98479 = state_98446__$1;(statearr_98452_98479[(1)] = (5));
} else
{var statearr_98453_98480 = state_98446__$1;(statearr_98453_98480[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (15)))
{var inst_98436 = (state_98446[(2)]);var state_98446__$1 = state_98446;var statearr_98454_98481 = state_98446__$1;(statearr_98454_98481[(2)] = inst_98436);
(statearr_98454_98481[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (13)))
{var state_98446__$1 = state_98446;var statearr_98455_98482 = state_98446__$1;(statearr_98455_98482[(2)] = null);
(statearr_98455_98482[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (6)))
{var inst_98411 = (state_98446[(7)]);var inst_98432 = (inst_98411 > (0));var state_98446__$1 = state_98446;if(cljs.core.truth_(inst_98432))
{var statearr_98456_98483 = state_98446__$1;(statearr_98456_98483[(1)] = (12));
} else
{var statearr_98457_98484 = state_98446__$1;(statearr_98457_98484[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (3)))
{var inst_98444 = (state_98446[(2)]);var state_98446__$1 = state_98446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98446__$1,inst_98444);
} else
{if((state_val_98447 === (12)))
{var inst_98410 = (state_98446[(8)]);var inst_98434 = cljs.core.vec.call(null,inst_98410);var state_98446__$1 = state_98446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98446__$1,(15),out,inst_98434);
} else
{if((state_val_98447 === (2)))
{var state_98446__$1 = state_98446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98446__$1,(4),ch);
} else
{if((state_val_98447 === (11)))
{var inst_98426 = (state_98446[(2)]);var inst_98427 = (new Array(n));var inst_98410 = inst_98427;var inst_98411 = (0);var state_98446__$1 = (function (){var statearr_98458 = state_98446;(statearr_98458[(10)] = inst_98426);
(statearr_98458[(7)] = inst_98411);
(statearr_98458[(8)] = inst_98410);
return statearr_98458;
})();var statearr_98459_98485 = state_98446__$1;(statearr_98459_98485[(2)] = null);
(statearr_98459_98485[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (9)))
{var inst_98410 = (state_98446[(8)]);var inst_98424 = cljs.core.vec.call(null,inst_98410);var state_98446__$1 = state_98446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98446__$1,(11),out,inst_98424);
} else
{if((state_val_98447 === (5)))
{var inst_98411 = (state_98446[(7)]);var inst_98419 = (state_98446[(11)]);var inst_98410 = (state_98446[(8)]);var inst_98414 = (state_98446[(9)]);var inst_98418 = (inst_98410[inst_98411] = inst_98414);var inst_98419__$1 = (inst_98411 + (1));var inst_98420 = (inst_98419__$1 < n);var state_98446__$1 = (function (){var statearr_98460 = state_98446;(statearr_98460[(12)] = inst_98418);
(statearr_98460[(11)] = inst_98419__$1);
return statearr_98460;
})();if(cljs.core.truth_(inst_98420))
{var statearr_98461_98486 = state_98446__$1;(statearr_98461_98486[(1)] = (8));
} else
{var statearr_98462_98487 = state_98446__$1;(statearr_98462_98487[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (14)))
{var inst_98439 = (state_98446[(2)]);var inst_98440 = cljs.core.async.close_BANG_.call(null,out);var state_98446__$1 = (function (){var statearr_98464 = state_98446;(statearr_98464[(13)] = inst_98439);
return statearr_98464;
})();var statearr_98465_98488 = state_98446__$1;(statearr_98465_98488[(2)] = inst_98440);
(statearr_98465_98488[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (10)))
{var inst_98430 = (state_98446[(2)]);var state_98446__$1 = state_98446;var statearr_98466_98489 = state_98446__$1;(statearr_98466_98489[(2)] = inst_98430);
(statearr_98466_98489[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98447 === (8)))
{var inst_98419 = (state_98446[(11)]);var inst_98410 = (state_98446[(8)]);var tmp98463 = inst_98410;var inst_98410__$1 = tmp98463;var inst_98411 = inst_98419;var state_98446__$1 = (function (){var statearr_98467 = state_98446;(statearr_98467[(7)] = inst_98411);
(statearr_98467[(8)] = inst_98410__$1);
return statearr_98467;
})();var statearr_98468_98490 = state_98446__$1;(statearr_98468_98490[(2)] = null);
(statearr_98468_98490[(1)] = (2));
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
});})(c__14620__auto___98476,out))
;return ((function (switch__14564__auto__,c__14620__auto___98476,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_98472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_98472[(0)] = state_machine__14565__auto__);
(statearr_98472[(1)] = (1));
return statearr_98472;
});
var state_machine__14565__auto____1 = (function (state_98446){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_98446);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e98473){if((e98473 instanceof Object))
{var ex__14568__auto__ = e98473;var statearr_98474_98491 = state_98446;(statearr_98474_98491[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e98473;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98492 = state_98446;
state_98446 = G__98492;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_98446){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_98446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___98476,out))
})();var state__14622__auto__ = (function (){var statearr_98475 = f__14621__auto__.call(null);(statearr_98475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___98476);
return statearr_98475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___98476,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___98635 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___98635,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___98635,out){
return (function (state_98605){var state_val_98606 = (state_98605[(1)]);if((state_val_98606 === (7)))
{var inst_98601 = (state_98605[(2)]);var state_98605__$1 = state_98605;var statearr_98607_98636 = state_98605__$1;(statearr_98607_98636[(2)] = inst_98601);
(statearr_98607_98636[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (1)))
{var inst_98564 = [];var inst_98565 = inst_98564;var inst_98566 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_98605__$1 = (function (){var statearr_98608 = state_98605;(statearr_98608[(7)] = inst_98565);
(statearr_98608[(8)] = inst_98566);
return statearr_98608;
})();var statearr_98609_98637 = state_98605__$1;(statearr_98609_98637[(2)] = null);
(statearr_98609_98637[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (4)))
{var inst_98569 = (state_98605[(9)]);var inst_98569__$1 = (state_98605[(2)]);var inst_98570 = (inst_98569__$1 == null);var inst_98571 = cljs.core.not.call(null,inst_98570);var state_98605__$1 = (function (){var statearr_98610 = state_98605;(statearr_98610[(9)] = inst_98569__$1);
return statearr_98610;
})();if(inst_98571)
{var statearr_98611_98638 = state_98605__$1;(statearr_98611_98638[(1)] = (5));
} else
{var statearr_98612_98639 = state_98605__$1;(statearr_98612_98639[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (15)))
{var inst_98595 = (state_98605[(2)]);var state_98605__$1 = state_98605;var statearr_98613_98640 = state_98605__$1;(statearr_98613_98640[(2)] = inst_98595);
(statearr_98613_98640[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (13)))
{var state_98605__$1 = state_98605;var statearr_98614_98641 = state_98605__$1;(statearr_98614_98641[(2)] = null);
(statearr_98614_98641[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (6)))
{var inst_98565 = (state_98605[(7)]);var inst_98590 = inst_98565.length;var inst_98591 = (inst_98590 > (0));var state_98605__$1 = state_98605;if(cljs.core.truth_(inst_98591))
{var statearr_98615_98642 = state_98605__$1;(statearr_98615_98642[(1)] = (12));
} else
{var statearr_98616_98643 = state_98605__$1;(statearr_98616_98643[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (3)))
{var inst_98603 = (state_98605[(2)]);var state_98605__$1 = state_98605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98605__$1,inst_98603);
} else
{if((state_val_98606 === (12)))
{var inst_98565 = (state_98605[(7)]);var inst_98593 = cljs.core.vec.call(null,inst_98565);var state_98605__$1 = state_98605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98605__$1,(15),out,inst_98593);
} else
{if((state_val_98606 === (2)))
{var state_98605__$1 = state_98605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98605__$1,(4),ch);
} else
{if((state_val_98606 === (11)))
{var inst_98569 = (state_98605[(9)]);var inst_98573 = (state_98605[(10)]);var inst_98583 = (state_98605[(2)]);var inst_98584 = [];var inst_98585 = inst_98584.push(inst_98569);var inst_98565 = inst_98584;var inst_98566 = inst_98573;var state_98605__$1 = (function (){var statearr_98617 = state_98605;(statearr_98617[(11)] = inst_98585);
(statearr_98617[(12)] = inst_98583);
(statearr_98617[(7)] = inst_98565);
(statearr_98617[(8)] = inst_98566);
return statearr_98617;
})();var statearr_98618_98644 = state_98605__$1;(statearr_98618_98644[(2)] = null);
(statearr_98618_98644[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (9)))
{var inst_98565 = (state_98605[(7)]);var inst_98581 = cljs.core.vec.call(null,inst_98565);var state_98605__$1 = state_98605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98605__$1,(11),out,inst_98581);
} else
{if((state_val_98606 === (5)))
{var inst_98569 = (state_98605[(9)]);var inst_98573 = (state_98605[(10)]);var inst_98566 = (state_98605[(8)]);var inst_98573__$1 = f.call(null,inst_98569);var inst_98574 = cljs.core._EQ_.call(null,inst_98573__$1,inst_98566);var inst_98575 = cljs.core.keyword_identical_QMARK_.call(null,inst_98566,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_98576 = (inst_98574) || (inst_98575);var state_98605__$1 = (function (){var statearr_98619 = state_98605;(statearr_98619[(10)] = inst_98573__$1);
return statearr_98619;
})();if(cljs.core.truth_(inst_98576))
{var statearr_98620_98645 = state_98605__$1;(statearr_98620_98645[(1)] = (8));
} else
{var statearr_98621_98646 = state_98605__$1;(statearr_98621_98646[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (14)))
{var inst_98598 = (state_98605[(2)]);var inst_98599 = cljs.core.async.close_BANG_.call(null,out);var state_98605__$1 = (function (){var statearr_98623 = state_98605;(statearr_98623[(13)] = inst_98598);
return statearr_98623;
})();var statearr_98624_98647 = state_98605__$1;(statearr_98624_98647[(2)] = inst_98599);
(statearr_98624_98647[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (10)))
{var inst_98588 = (state_98605[(2)]);var state_98605__$1 = state_98605;var statearr_98625_98648 = state_98605__$1;(statearr_98625_98648[(2)] = inst_98588);
(statearr_98625_98648[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98606 === (8)))
{var inst_98569 = (state_98605[(9)]);var inst_98573 = (state_98605[(10)]);var inst_98565 = (state_98605[(7)]);var inst_98578 = inst_98565.push(inst_98569);var tmp98622 = inst_98565;var inst_98565__$1 = tmp98622;var inst_98566 = inst_98573;var state_98605__$1 = (function (){var statearr_98626 = state_98605;(statearr_98626[(14)] = inst_98578);
(statearr_98626[(7)] = inst_98565__$1);
(statearr_98626[(8)] = inst_98566);
return statearr_98626;
})();var statearr_98627_98649 = state_98605__$1;(statearr_98627_98649[(2)] = null);
(statearr_98627_98649[(1)] = (2));
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
});})(c__14620__auto___98635,out))
;return ((function (switch__14564__auto__,c__14620__auto___98635,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_98631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_98631[(0)] = state_machine__14565__auto__);
(statearr_98631[(1)] = (1));
return statearr_98631;
});
var state_machine__14565__auto____1 = (function (state_98605){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_98605);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e98632){if((e98632 instanceof Object))
{var ex__14568__auto__ = e98632;var statearr_98633_98650 = state_98605;(statearr_98633_98650[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98605);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e98632;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98651 = state_98605;
state_98605 = G__98651;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_98605){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_98605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___98635,out))
})();var state__14622__auto__ = (function (){var statearr_98634 = f__14621__auto__.call(null);(statearr_98634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___98635);
return statearr_98634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___98635,out))
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