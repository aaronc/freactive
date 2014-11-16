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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t133420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t133420 = (function (f,fn_handler,meta133421){
this.f = f;
this.fn_handler = fn_handler;
this.meta133421 = meta133421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t133420.cljs$lang$type = true;
cljs.core.async.t133420.cljs$lang$ctorStr = "cljs.core.async/t133420";
cljs.core.async.t133420.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t133420");
});
cljs.core.async.t133420.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t133420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t133420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t133420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133422){var self__ = this;
var _133422__$1 = this;return self__.meta133421;
});
cljs.core.async.t133420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133422,meta133421__$1){var self__ = this;
var _133422__$1 = this;return (new cljs.core.async.t133420(self__.f,self__.fn_handler,meta133421__$1));
});
cljs.core.async.__GT_t133420 = (function __GT_t133420(f__$1,fn_handler__$1,meta133421){return (new cljs.core.async.t133420(f__$1,fn_handler__$1,meta133421));
});
}
return (new cljs.core.async.t133420(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__133424 = buff;if(G__133424)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__133424.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__133424.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__133424);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__133424);
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
{var val_133425 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_133425);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_133425,ret){
return (function (){return fn1.call(null,val_133425);
});})(val_133425,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12367__auto___133426 = n;var x_133427 = (0);while(true){
if((x_133427 < n__12367__auto___133426))
{(a[x_133427] = (0));
{
var G__133428 = (x_133427 + (1));
x_133427 = G__133428;
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
var G__133429 = (i + (1));
i = G__133429;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t133433 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t133433 = (function (flag,alt_flag,meta133434){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta133434 = meta133434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t133433.cljs$lang$type = true;
cljs.core.async.t133433.cljs$lang$ctorStr = "cljs.core.async/t133433";
cljs.core.async.t133433.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t133433");
});})(flag))
;
cljs.core.async.t133433.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t133433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t133433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t133433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_133435){var self__ = this;
var _133435__$1 = this;return self__.meta133434;
});})(flag))
;
cljs.core.async.t133433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_133435,meta133434__$1){var self__ = this;
var _133435__$1 = this;return (new cljs.core.async.t133433(self__.flag,self__.alt_flag,meta133434__$1));
});})(flag))
;
cljs.core.async.__GT_t133433 = ((function (flag){
return (function __GT_t133433(flag__$1,alt_flag__$1,meta133434){return (new cljs.core.async.t133433(flag__$1,alt_flag__$1,meta133434));
});})(flag))
;
}
return (new cljs.core.async.t133433(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t133439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t133439 = (function (cb,flag,alt_handler,meta133440){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta133440 = meta133440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t133439.cljs$lang$type = true;
cljs.core.async.t133439.cljs$lang$ctorStr = "cljs.core.async/t133439";
cljs.core.async.t133439.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t133439");
});
cljs.core.async.t133439.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t133439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t133439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t133439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133441){var self__ = this;
var _133441__$1 = this;return self__.meta133440;
});
cljs.core.async.t133439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133441,meta133440__$1){var self__ = this;
var _133441__$1 = this;return (new cljs.core.async.t133439(self__.cb,self__.flag,self__.alt_handler,meta133440__$1));
});
cljs.core.async.__GT_t133439 = (function __GT_t133439(cb__$1,flag__$1,alt_handler__$1,meta133440){return (new cljs.core.async.t133439(cb__$1,flag__$1,alt_handler__$1,meta133440));
});
}
return (new cljs.core.async.t133439(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__133442_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__133442_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__133443_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__133443_SHARP_,port], null));
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
var G__133444 = (i + (1));
i = G__133444;
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
var alts_BANG___delegate = function (ports,p__133445){var map__133447 = p__133445;var map__133447__$1 = ((cljs.core.seq_QMARK_.call(null,map__133447))?cljs.core.apply.call(null,cljs.core.hash_map,map__133447):map__133447);var opts = map__133447__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__133445 = null;if (arguments.length > 1) {
  p__133445 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__133445);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__133448){
var ports = cljs.core.first(arglist__133448);
var p__133445 = cljs.core.rest(arglist__133448);
return alts_BANG___delegate(ports,p__133445);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__14620__auto___133543 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___133543){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___133543){
return (function (state_133519){var state_val_133520 = (state_133519[(1)]);if((state_val_133520 === (7)))
{var inst_133515 = (state_133519[(2)]);var state_133519__$1 = state_133519;var statearr_133521_133544 = state_133519__$1;(statearr_133521_133544[(2)] = inst_133515);
(statearr_133521_133544[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (1)))
{var state_133519__$1 = state_133519;var statearr_133522_133545 = state_133519__$1;(statearr_133522_133545[(2)] = null);
(statearr_133522_133545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (4)))
{var inst_133498 = (state_133519[(7)]);var inst_133498__$1 = (state_133519[(2)]);var inst_133499 = (inst_133498__$1 == null);var state_133519__$1 = (function (){var statearr_133523 = state_133519;(statearr_133523[(7)] = inst_133498__$1);
return statearr_133523;
})();if(cljs.core.truth_(inst_133499))
{var statearr_133524_133546 = state_133519__$1;(statearr_133524_133546[(1)] = (5));
} else
{var statearr_133525_133547 = state_133519__$1;(statearr_133525_133547[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (13)))
{var state_133519__$1 = state_133519;var statearr_133526_133548 = state_133519__$1;(statearr_133526_133548[(2)] = null);
(statearr_133526_133548[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (6)))
{var inst_133498 = (state_133519[(7)]);var state_133519__$1 = state_133519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133519__$1,(11),to,inst_133498);
} else
{if((state_val_133520 === (3)))
{var inst_133517 = (state_133519[(2)]);var state_133519__$1 = state_133519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133519__$1,inst_133517);
} else
{if((state_val_133520 === (12)))
{var state_133519__$1 = state_133519;var statearr_133527_133549 = state_133519__$1;(statearr_133527_133549[(2)] = null);
(statearr_133527_133549[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (2)))
{var state_133519__$1 = state_133519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133519__$1,(4),from);
} else
{if((state_val_133520 === (11)))
{var inst_133508 = (state_133519[(2)]);var state_133519__$1 = state_133519;if(cljs.core.truth_(inst_133508))
{var statearr_133528_133550 = state_133519__$1;(statearr_133528_133550[(1)] = (12));
} else
{var statearr_133529_133551 = state_133519__$1;(statearr_133529_133551[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (9)))
{var state_133519__$1 = state_133519;var statearr_133530_133552 = state_133519__$1;(statearr_133530_133552[(2)] = null);
(statearr_133530_133552[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (5)))
{var state_133519__$1 = state_133519;if(cljs.core.truth_(close_QMARK_))
{var statearr_133531_133553 = state_133519__$1;(statearr_133531_133553[(1)] = (8));
} else
{var statearr_133532_133554 = state_133519__$1;(statearr_133532_133554[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (14)))
{var inst_133513 = (state_133519[(2)]);var state_133519__$1 = state_133519;var statearr_133533_133555 = state_133519__$1;(statearr_133533_133555[(2)] = inst_133513);
(statearr_133533_133555[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (10)))
{var inst_133505 = (state_133519[(2)]);var state_133519__$1 = state_133519;var statearr_133534_133556 = state_133519__$1;(statearr_133534_133556[(2)] = inst_133505);
(statearr_133534_133556[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133520 === (8)))
{var inst_133502 = cljs.core.async.close_BANG_.call(null,to);var state_133519__$1 = state_133519;var statearr_133535_133557 = state_133519__$1;(statearr_133535_133557[(2)] = inst_133502);
(statearr_133535_133557[(1)] = (10));
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
});})(c__14620__auto___133543))
;return ((function (switch__14564__auto__,c__14620__auto___133543){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_133539 = [null,null,null,null,null,null,null,null];(statearr_133539[(0)] = state_machine__14565__auto__);
(statearr_133539[(1)] = (1));
return statearr_133539;
});
var state_machine__14565__auto____1 = (function (state_133519){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_133519);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e133540){if((e133540 instanceof Object))
{var ex__14568__auto__ = e133540;var statearr_133541_133558 = state_133519;(statearr_133541_133558[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e133540;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133559 = state_133519;
state_133519 = G__133559;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_133519){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_133519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___133543))
})();var state__14622__auto__ = (function (){var statearr_133542 = f__14621__auto__.call(null);(statearr_133542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___133543);
return statearr_133542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___133543))
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
return (function (p__133743){var vec__133744 = p__133743;var v = cljs.core.nth.call(null,vec__133744,(0),null);var p = cljs.core.nth.call(null,vec__133744,(1),null);var job = vec__133744;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__14620__auto___133926 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___133926,res,vec__133744,v,p,job,jobs,results){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___133926,res,vec__133744,v,p,job,jobs,results){
return (function (state_133749){var state_val_133750 = (state_133749[(1)]);if((state_val_133750 === (2)))
{var inst_133746 = (state_133749[(2)]);var inst_133747 = cljs.core.async.close_BANG_.call(null,res);var state_133749__$1 = (function (){var statearr_133751 = state_133749;(statearr_133751[(7)] = inst_133746);
return statearr_133751;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133749__$1,inst_133747);
} else
{if((state_val_133750 === (1)))
{var state_133749__$1 = state_133749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133749__$1,(2),res,v);
} else
{return null;
}
}
});})(c__14620__auto___133926,res,vec__133744,v,p,job,jobs,results))
;return ((function (switch__14564__auto__,c__14620__auto___133926,res,vec__133744,v,p,job,jobs,results){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_133755 = [null,null,null,null,null,null,null,null];(statearr_133755[(0)] = state_machine__14565__auto__);
(statearr_133755[(1)] = (1));
return statearr_133755;
});
var state_machine__14565__auto____1 = (function (state_133749){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_133749);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e133756){if((e133756 instanceof Object))
{var ex__14568__auto__ = e133756;var statearr_133757_133927 = state_133749;(statearr_133757_133927[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133749);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e133756;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133928 = state_133749;
state_133749 = G__133928;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_133749){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_133749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___133926,res,vec__133744,v,p,job,jobs,results))
})();var state__14622__auto__ = (function (){var statearr_133758 = f__14621__auto__.call(null);(statearr_133758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___133926);
return statearr_133758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___133926,res,vec__133744,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__133759){var vec__133760 = p__133759;var v = cljs.core.nth.call(null,vec__133760,(0),null);var p = cljs.core.nth.call(null,vec__133760,(1),null);var job = vec__133760;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12367__auto___133929 = n;var __133930 = (0);while(true){
if((__133930 < n__12367__auto___133929))
{var G__133761_133931 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__133761_133931) {
case "async":
var c__14620__auto___133933 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__133930,c__14620__auto___133933,G__133761_133931,n__12367__auto___133929,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (__133930,c__14620__auto___133933,G__133761_133931,n__12367__auto___133929,jobs,results,process,async){
return (function (state_133774){var state_val_133775 = (state_133774[(1)]);if((state_val_133775 === (7)))
{var inst_133770 = (state_133774[(2)]);var state_133774__$1 = state_133774;var statearr_133776_133934 = state_133774__$1;(statearr_133776_133934[(2)] = inst_133770);
(statearr_133776_133934[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133775 === (6)))
{var state_133774__$1 = state_133774;var statearr_133777_133935 = state_133774__$1;(statearr_133777_133935[(2)] = null);
(statearr_133777_133935[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133775 === (5)))
{var state_133774__$1 = state_133774;var statearr_133778_133936 = state_133774__$1;(statearr_133778_133936[(2)] = null);
(statearr_133778_133936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133775 === (4)))
{var inst_133764 = (state_133774[(2)]);var inst_133765 = async.call(null,inst_133764);var state_133774__$1 = state_133774;if(cljs.core.truth_(inst_133765))
{var statearr_133779_133937 = state_133774__$1;(statearr_133779_133937[(1)] = (5));
} else
{var statearr_133780_133938 = state_133774__$1;(statearr_133780_133938[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133775 === (3)))
{var inst_133772 = (state_133774[(2)]);var state_133774__$1 = state_133774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133774__$1,inst_133772);
} else
{if((state_val_133775 === (2)))
{var state_133774__$1 = state_133774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133774__$1,(4),jobs);
} else
{if((state_val_133775 === (1)))
{var state_133774__$1 = state_133774;var statearr_133781_133939 = state_133774__$1;(statearr_133781_133939[(2)] = null);
(statearr_133781_133939[(1)] = (2));
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
});})(__133930,c__14620__auto___133933,G__133761_133931,n__12367__auto___133929,jobs,results,process,async))
;return ((function (__133930,switch__14564__auto__,c__14620__auto___133933,G__133761_133931,n__12367__auto___133929,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_133785 = [null,null,null,null,null,null,null];(statearr_133785[(0)] = state_machine__14565__auto__);
(statearr_133785[(1)] = (1));
return statearr_133785;
});
var state_machine__14565__auto____1 = (function (state_133774){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_133774);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e133786){if((e133786 instanceof Object))
{var ex__14568__auto__ = e133786;var statearr_133787_133940 = state_133774;(statearr_133787_133940[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e133786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133941 = state_133774;
state_133774 = G__133941;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_133774){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_133774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(__133930,switch__14564__auto__,c__14620__auto___133933,G__133761_133931,n__12367__auto___133929,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_133788 = f__14621__auto__.call(null);(statearr_133788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___133933);
return statearr_133788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(__133930,c__14620__auto___133933,G__133761_133931,n__12367__auto___133929,jobs,results,process,async))
);

break;
case "compute":
var c__14620__auto___133942 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__133930,c__14620__auto___133942,G__133761_133931,n__12367__auto___133929,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (__133930,c__14620__auto___133942,G__133761_133931,n__12367__auto___133929,jobs,results,process,async){
return (function (state_133801){var state_val_133802 = (state_133801[(1)]);if((state_val_133802 === (7)))
{var inst_133797 = (state_133801[(2)]);var state_133801__$1 = state_133801;var statearr_133803_133943 = state_133801__$1;(statearr_133803_133943[(2)] = inst_133797);
(statearr_133803_133943[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133802 === (6)))
{var state_133801__$1 = state_133801;var statearr_133804_133944 = state_133801__$1;(statearr_133804_133944[(2)] = null);
(statearr_133804_133944[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133802 === (5)))
{var state_133801__$1 = state_133801;var statearr_133805_133945 = state_133801__$1;(statearr_133805_133945[(2)] = null);
(statearr_133805_133945[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133802 === (4)))
{var inst_133791 = (state_133801[(2)]);var inst_133792 = process.call(null,inst_133791);var state_133801__$1 = state_133801;if(cljs.core.truth_(inst_133792))
{var statearr_133806_133946 = state_133801__$1;(statearr_133806_133946[(1)] = (5));
} else
{var statearr_133807_133947 = state_133801__$1;(statearr_133807_133947[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133802 === (3)))
{var inst_133799 = (state_133801[(2)]);var state_133801__$1 = state_133801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133801__$1,inst_133799);
} else
{if((state_val_133802 === (2)))
{var state_133801__$1 = state_133801;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133801__$1,(4),jobs);
} else
{if((state_val_133802 === (1)))
{var state_133801__$1 = state_133801;var statearr_133808_133948 = state_133801__$1;(statearr_133808_133948[(2)] = null);
(statearr_133808_133948[(1)] = (2));
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
});})(__133930,c__14620__auto___133942,G__133761_133931,n__12367__auto___133929,jobs,results,process,async))
;return ((function (__133930,switch__14564__auto__,c__14620__auto___133942,G__133761_133931,n__12367__auto___133929,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_133812 = [null,null,null,null,null,null,null];(statearr_133812[(0)] = state_machine__14565__auto__);
(statearr_133812[(1)] = (1));
return statearr_133812;
});
var state_machine__14565__auto____1 = (function (state_133801){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_133801);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e133813){if((e133813 instanceof Object))
{var ex__14568__auto__ = e133813;var statearr_133814_133949 = state_133801;(statearr_133814_133949[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133801);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e133813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133950 = state_133801;
state_133801 = G__133950;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_133801){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_133801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(__133930,switch__14564__auto__,c__14620__auto___133942,G__133761_133931,n__12367__auto___133929,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_133815 = f__14621__auto__.call(null);(statearr_133815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___133942);
return statearr_133815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(__133930,c__14620__auto___133942,G__133761_133931,n__12367__auto___133929,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__133951 = (__133930 + (1));
__133930 = G__133951;
continue;
}
} else
{}
break;
}
var c__14620__auto___133952 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___133952,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___133952,jobs,results,process,async){
return (function (state_133837){var state_val_133838 = (state_133837[(1)]);if((state_val_133838 === (9)))
{var inst_133830 = (state_133837[(2)]);var state_133837__$1 = (function (){var statearr_133839 = state_133837;(statearr_133839[(7)] = inst_133830);
return statearr_133839;
})();var statearr_133840_133953 = state_133837__$1;(statearr_133840_133953[(2)] = null);
(statearr_133840_133953[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133838 === (8)))
{var inst_133823 = (state_133837[(8)]);var inst_133828 = (state_133837[(2)]);var state_133837__$1 = (function (){var statearr_133841 = state_133837;(statearr_133841[(9)] = inst_133828);
return statearr_133841;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133837__$1,(9),results,inst_133823);
} else
{if((state_val_133838 === (7)))
{var inst_133833 = (state_133837[(2)]);var state_133837__$1 = state_133837;var statearr_133842_133954 = state_133837__$1;(statearr_133842_133954[(2)] = inst_133833);
(statearr_133842_133954[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133838 === (6)))
{var inst_133823 = (state_133837[(8)]);var inst_133818 = (state_133837[(10)]);var inst_133823__$1 = cljs.core.async.chan.call(null,(1));var inst_133824 = cljs.core.PersistentVector.EMPTY_NODE;var inst_133825 = [inst_133818,inst_133823__$1];var inst_133826 = (new cljs.core.PersistentVector(null,2,(5),inst_133824,inst_133825,null));var state_133837__$1 = (function (){var statearr_133843 = state_133837;(statearr_133843[(8)] = inst_133823__$1);
return statearr_133843;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133837__$1,(8),jobs,inst_133826);
} else
{if((state_val_133838 === (5)))
{var inst_133821 = cljs.core.async.close_BANG_.call(null,jobs);var state_133837__$1 = state_133837;var statearr_133844_133955 = state_133837__$1;(statearr_133844_133955[(2)] = inst_133821);
(statearr_133844_133955[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133838 === (4)))
{var inst_133818 = (state_133837[(10)]);var inst_133818__$1 = (state_133837[(2)]);var inst_133819 = (inst_133818__$1 == null);var state_133837__$1 = (function (){var statearr_133845 = state_133837;(statearr_133845[(10)] = inst_133818__$1);
return statearr_133845;
})();if(cljs.core.truth_(inst_133819))
{var statearr_133846_133956 = state_133837__$1;(statearr_133846_133956[(1)] = (5));
} else
{var statearr_133847_133957 = state_133837__$1;(statearr_133847_133957[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133838 === (3)))
{var inst_133835 = (state_133837[(2)]);var state_133837__$1 = state_133837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133837__$1,inst_133835);
} else
{if((state_val_133838 === (2)))
{var state_133837__$1 = state_133837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133837__$1,(4),from);
} else
{if((state_val_133838 === (1)))
{var state_133837__$1 = state_133837;var statearr_133848_133958 = state_133837__$1;(statearr_133848_133958[(2)] = null);
(statearr_133848_133958[(1)] = (2));
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
});})(c__14620__auto___133952,jobs,results,process,async))
;return ((function (switch__14564__auto__,c__14620__auto___133952,jobs,results,process,async){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_133852 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_133852[(0)] = state_machine__14565__auto__);
(statearr_133852[(1)] = (1));
return statearr_133852;
});
var state_machine__14565__auto____1 = (function (state_133837){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_133837);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e133853){if((e133853 instanceof Object))
{var ex__14568__auto__ = e133853;var statearr_133854_133959 = state_133837;(statearr_133854_133959[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e133853;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133960 = state_133837;
state_133837 = G__133960;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_133837){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_133837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___133952,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_133855 = f__14621__auto__.call(null);(statearr_133855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___133952);
return statearr_133855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___133952,jobs,results,process,async))
);
var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,jobs,results,process,async){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,jobs,results,process,async){
return (function (state_133893){var state_val_133894 = (state_133893[(1)]);if((state_val_133894 === (7)))
{var inst_133889 = (state_133893[(2)]);var state_133893__$1 = state_133893;var statearr_133895_133961 = state_133893__$1;(statearr_133895_133961[(2)] = inst_133889);
(statearr_133895_133961[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (20)))
{var state_133893__$1 = state_133893;var statearr_133896_133962 = state_133893__$1;(statearr_133896_133962[(2)] = null);
(statearr_133896_133962[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (1)))
{var state_133893__$1 = state_133893;var statearr_133897_133963 = state_133893__$1;(statearr_133897_133963[(2)] = null);
(statearr_133897_133963[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (4)))
{var inst_133858 = (state_133893[(7)]);var inst_133858__$1 = (state_133893[(2)]);var inst_133859 = (inst_133858__$1 == null);var state_133893__$1 = (function (){var statearr_133898 = state_133893;(statearr_133898[(7)] = inst_133858__$1);
return statearr_133898;
})();if(cljs.core.truth_(inst_133859))
{var statearr_133899_133964 = state_133893__$1;(statearr_133899_133964[(1)] = (5));
} else
{var statearr_133900_133965 = state_133893__$1;(statearr_133900_133965[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (15)))
{var inst_133871 = (state_133893[(8)]);var state_133893__$1 = state_133893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133893__$1,(18),to,inst_133871);
} else
{if((state_val_133894 === (21)))
{var inst_133884 = (state_133893[(2)]);var state_133893__$1 = state_133893;var statearr_133901_133966 = state_133893__$1;(statearr_133901_133966[(2)] = inst_133884);
(statearr_133901_133966[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (13)))
{var inst_133886 = (state_133893[(2)]);var state_133893__$1 = (function (){var statearr_133902 = state_133893;(statearr_133902[(9)] = inst_133886);
return statearr_133902;
})();var statearr_133903_133967 = state_133893__$1;(statearr_133903_133967[(2)] = null);
(statearr_133903_133967[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (6)))
{var inst_133858 = (state_133893[(7)]);var state_133893__$1 = state_133893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133893__$1,(11),inst_133858);
} else
{if((state_val_133894 === (17)))
{var inst_133879 = (state_133893[(2)]);var state_133893__$1 = state_133893;if(cljs.core.truth_(inst_133879))
{var statearr_133904_133968 = state_133893__$1;(statearr_133904_133968[(1)] = (19));
} else
{var statearr_133905_133969 = state_133893__$1;(statearr_133905_133969[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (3)))
{var inst_133891 = (state_133893[(2)]);var state_133893__$1 = state_133893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133893__$1,inst_133891);
} else
{if((state_val_133894 === (12)))
{var inst_133868 = (state_133893[(10)]);var state_133893__$1 = state_133893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133893__$1,(14),inst_133868);
} else
{if((state_val_133894 === (2)))
{var state_133893__$1 = state_133893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133893__$1,(4),results);
} else
{if((state_val_133894 === (19)))
{var state_133893__$1 = state_133893;var statearr_133906_133970 = state_133893__$1;(statearr_133906_133970[(2)] = null);
(statearr_133906_133970[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (11)))
{var inst_133868 = (state_133893[(2)]);var state_133893__$1 = (function (){var statearr_133907 = state_133893;(statearr_133907[(10)] = inst_133868);
return statearr_133907;
})();var statearr_133908_133971 = state_133893__$1;(statearr_133908_133971[(2)] = null);
(statearr_133908_133971[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (9)))
{var state_133893__$1 = state_133893;var statearr_133909_133972 = state_133893__$1;(statearr_133909_133972[(2)] = null);
(statearr_133909_133972[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (5)))
{var state_133893__$1 = state_133893;if(cljs.core.truth_(close_QMARK_))
{var statearr_133910_133973 = state_133893__$1;(statearr_133910_133973[(1)] = (8));
} else
{var statearr_133911_133974 = state_133893__$1;(statearr_133911_133974[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (14)))
{var inst_133871 = (state_133893[(8)]);var inst_133873 = (state_133893[(11)]);var inst_133871__$1 = (state_133893[(2)]);var inst_133872 = (inst_133871__$1 == null);var inst_133873__$1 = cljs.core.not.call(null,inst_133872);var state_133893__$1 = (function (){var statearr_133912 = state_133893;(statearr_133912[(8)] = inst_133871__$1);
(statearr_133912[(11)] = inst_133873__$1);
return statearr_133912;
})();if(inst_133873__$1)
{var statearr_133913_133975 = state_133893__$1;(statearr_133913_133975[(1)] = (15));
} else
{var statearr_133914_133976 = state_133893__$1;(statearr_133914_133976[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (16)))
{var inst_133873 = (state_133893[(11)]);var state_133893__$1 = state_133893;var statearr_133915_133977 = state_133893__$1;(statearr_133915_133977[(2)] = inst_133873);
(statearr_133915_133977[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (10)))
{var inst_133865 = (state_133893[(2)]);var state_133893__$1 = state_133893;var statearr_133916_133978 = state_133893__$1;(statearr_133916_133978[(2)] = inst_133865);
(statearr_133916_133978[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (18)))
{var inst_133876 = (state_133893[(2)]);var state_133893__$1 = state_133893;var statearr_133917_133979 = state_133893__$1;(statearr_133917_133979[(2)] = inst_133876);
(statearr_133917_133979[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133894 === (8)))
{var inst_133862 = cljs.core.async.close_BANG_.call(null,to);var state_133893__$1 = state_133893;var statearr_133918_133980 = state_133893__$1;(statearr_133918_133980[(2)] = inst_133862);
(statearr_133918_133980[(1)] = (10));
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
var state_machine__14565__auto____0 = (function (){var statearr_133922 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_133922[(0)] = state_machine__14565__auto__);
(statearr_133922[(1)] = (1));
return statearr_133922;
});
var state_machine__14565__auto____1 = (function (state_133893){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_133893);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e133923){if((e133923 instanceof Object))
{var ex__14568__auto__ = e133923;var statearr_133924_133981 = state_133893;(statearr_133924_133981[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e133923;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133982 = state_133893;
state_133893 = G__133982;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_133893){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_133893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,jobs,results,process,async))
})();var state__14622__auto__ = (function (){var statearr_133925 = f__14621__auto__.call(null);(statearr_133925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_133925;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14620__auto___134083 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___134083,tc,fc){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___134083,tc,fc){
return (function (state_134058){var state_val_134059 = (state_134058[(1)]);if((state_val_134059 === (7)))
{var inst_134054 = (state_134058[(2)]);var state_134058__$1 = state_134058;var statearr_134060_134084 = state_134058__$1;(statearr_134060_134084[(2)] = inst_134054);
(statearr_134060_134084[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (1)))
{var state_134058__$1 = state_134058;var statearr_134061_134085 = state_134058__$1;(statearr_134061_134085[(2)] = null);
(statearr_134061_134085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (4)))
{var inst_134035 = (state_134058[(7)]);var inst_134035__$1 = (state_134058[(2)]);var inst_134036 = (inst_134035__$1 == null);var state_134058__$1 = (function (){var statearr_134062 = state_134058;(statearr_134062[(7)] = inst_134035__$1);
return statearr_134062;
})();if(cljs.core.truth_(inst_134036))
{var statearr_134063_134086 = state_134058__$1;(statearr_134063_134086[(1)] = (5));
} else
{var statearr_134064_134087 = state_134058__$1;(statearr_134064_134087[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (13)))
{var state_134058__$1 = state_134058;var statearr_134065_134088 = state_134058__$1;(statearr_134065_134088[(2)] = null);
(statearr_134065_134088[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (6)))
{var inst_134035 = (state_134058[(7)]);var inst_134041 = p.call(null,inst_134035);var state_134058__$1 = state_134058;if(cljs.core.truth_(inst_134041))
{var statearr_134066_134089 = state_134058__$1;(statearr_134066_134089[(1)] = (9));
} else
{var statearr_134067_134090 = state_134058__$1;(statearr_134067_134090[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (3)))
{var inst_134056 = (state_134058[(2)]);var state_134058__$1 = state_134058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134058__$1,inst_134056);
} else
{if((state_val_134059 === (12)))
{var state_134058__$1 = state_134058;var statearr_134068_134091 = state_134058__$1;(statearr_134068_134091[(2)] = null);
(statearr_134068_134091[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (2)))
{var state_134058__$1 = state_134058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134058__$1,(4),ch);
} else
{if((state_val_134059 === (11)))
{var inst_134035 = (state_134058[(7)]);var inst_134045 = (state_134058[(2)]);var state_134058__$1 = state_134058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134058__$1,(8),inst_134045,inst_134035);
} else
{if((state_val_134059 === (9)))
{var state_134058__$1 = state_134058;var statearr_134069_134092 = state_134058__$1;(statearr_134069_134092[(2)] = tc);
(statearr_134069_134092[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (5)))
{var inst_134038 = cljs.core.async.close_BANG_.call(null,tc);var inst_134039 = cljs.core.async.close_BANG_.call(null,fc);var state_134058__$1 = (function (){var statearr_134070 = state_134058;(statearr_134070[(8)] = inst_134038);
return statearr_134070;
})();var statearr_134071_134093 = state_134058__$1;(statearr_134071_134093[(2)] = inst_134039);
(statearr_134071_134093[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (14)))
{var inst_134052 = (state_134058[(2)]);var state_134058__$1 = state_134058;var statearr_134072_134094 = state_134058__$1;(statearr_134072_134094[(2)] = inst_134052);
(statearr_134072_134094[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (10)))
{var state_134058__$1 = state_134058;var statearr_134073_134095 = state_134058__$1;(statearr_134073_134095[(2)] = fc);
(statearr_134073_134095[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134059 === (8)))
{var inst_134047 = (state_134058[(2)]);var state_134058__$1 = state_134058;if(cljs.core.truth_(inst_134047))
{var statearr_134074_134096 = state_134058__$1;(statearr_134074_134096[(1)] = (12));
} else
{var statearr_134075_134097 = state_134058__$1;(statearr_134075_134097[(1)] = (13));
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
});})(c__14620__auto___134083,tc,fc))
;return ((function (switch__14564__auto__,c__14620__auto___134083,tc,fc){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_134079 = [null,null,null,null,null,null,null,null,null];(statearr_134079[(0)] = state_machine__14565__auto__);
(statearr_134079[(1)] = (1));
return statearr_134079;
});
var state_machine__14565__auto____1 = (function (state_134058){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_134058);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e134080){if((e134080 instanceof Object))
{var ex__14568__auto__ = e134080;var statearr_134081_134098 = state_134058;(statearr_134081_134098[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e134080;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134099 = state_134058;
state_134058 = G__134099;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_134058){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_134058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___134083,tc,fc))
})();var state__14622__auto__ = (function (){var statearr_134082 = f__14621__auto__.call(null);(statearr_134082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___134083);
return statearr_134082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___134083,tc,fc))
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
return (function (state_134146){var state_val_134147 = (state_134146[(1)]);if((state_val_134147 === (7)))
{var inst_134142 = (state_134146[(2)]);var state_134146__$1 = state_134146;var statearr_134148_134164 = state_134146__$1;(statearr_134148_134164[(2)] = inst_134142);
(statearr_134148_134164[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134147 === (6)))
{var inst_134132 = (state_134146[(7)]);var inst_134135 = (state_134146[(8)]);var inst_134139 = f.call(null,inst_134132,inst_134135);var inst_134132__$1 = inst_134139;var state_134146__$1 = (function (){var statearr_134149 = state_134146;(statearr_134149[(7)] = inst_134132__$1);
return statearr_134149;
})();var statearr_134150_134165 = state_134146__$1;(statearr_134150_134165[(2)] = null);
(statearr_134150_134165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134147 === (5)))
{var inst_134132 = (state_134146[(7)]);var state_134146__$1 = state_134146;var statearr_134151_134166 = state_134146__$1;(statearr_134151_134166[(2)] = inst_134132);
(statearr_134151_134166[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134147 === (4)))
{var inst_134135 = (state_134146[(8)]);var inst_134135__$1 = (state_134146[(2)]);var inst_134136 = (inst_134135__$1 == null);var state_134146__$1 = (function (){var statearr_134152 = state_134146;(statearr_134152[(8)] = inst_134135__$1);
return statearr_134152;
})();if(cljs.core.truth_(inst_134136))
{var statearr_134153_134167 = state_134146__$1;(statearr_134153_134167[(1)] = (5));
} else
{var statearr_134154_134168 = state_134146__$1;(statearr_134154_134168[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134147 === (3)))
{var inst_134144 = (state_134146[(2)]);var state_134146__$1 = state_134146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134146__$1,inst_134144);
} else
{if((state_val_134147 === (2)))
{var state_134146__$1 = state_134146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134146__$1,(4),ch);
} else
{if((state_val_134147 === (1)))
{var inst_134132 = init;var state_134146__$1 = (function (){var statearr_134155 = state_134146;(statearr_134155[(7)] = inst_134132);
return statearr_134155;
})();var statearr_134156_134169 = state_134146__$1;(statearr_134156_134169[(2)] = null);
(statearr_134156_134169[(1)] = (2));
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
var state_machine__14565__auto____0 = (function (){var statearr_134160 = [null,null,null,null,null,null,null,null,null];(statearr_134160[(0)] = state_machine__14565__auto__);
(statearr_134160[(1)] = (1));
return statearr_134160;
});
var state_machine__14565__auto____1 = (function (state_134146){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_134146);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e134161){if((e134161 instanceof Object))
{var ex__14568__auto__ = e134161;var statearr_134162_134170 = state_134146;(statearr_134162_134170[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134146);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e134161;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134171 = state_134146;
state_134146 = G__134171;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_134146){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_134146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__))
})();var state__14622__auto__ = (function (){var statearr_134163 = f__14621__auto__.call(null);(statearr_134163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_134163;
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
return (function (state_134245){var state_val_134246 = (state_134245[(1)]);if((state_val_134246 === (7)))
{var inst_134227 = (state_134245[(2)]);var state_134245__$1 = state_134245;var statearr_134247_134270 = state_134245__$1;(statearr_134247_134270[(2)] = inst_134227);
(statearr_134247_134270[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (1)))
{var inst_134221 = cljs.core.seq.call(null,coll);var inst_134222 = inst_134221;var state_134245__$1 = (function (){var statearr_134248 = state_134245;(statearr_134248[(7)] = inst_134222);
return statearr_134248;
})();var statearr_134249_134271 = state_134245__$1;(statearr_134249_134271[(2)] = null);
(statearr_134249_134271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (4)))
{var inst_134222 = (state_134245[(7)]);var inst_134225 = cljs.core.first.call(null,inst_134222);var state_134245__$1 = state_134245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134245__$1,(7),ch,inst_134225);
} else
{if((state_val_134246 === (13)))
{var inst_134239 = (state_134245[(2)]);var state_134245__$1 = state_134245;var statearr_134250_134272 = state_134245__$1;(statearr_134250_134272[(2)] = inst_134239);
(statearr_134250_134272[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (6)))
{var inst_134230 = (state_134245[(2)]);var state_134245__$1 = state_134245;if(cljs.core.truth_(inst_134230))
{var statearr_134251_134273 = state_134245__$1;(statearr_134251_134273[(1)] = (8));
} else
{var statearr_134252_134274 = state_134245__$1;(statearr_134252_134274[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (3)))
{var inst_134243 = (state_134245[(2)]);var state_134245__$1 = state_134245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134245__$1,inst_134243);
} else
{if((state_val_134246 === (12)))
{var state_134245__$1 = state_134245;var statearr_134253_134275 = state_134245__$1;(statearr_134253_134275[(2)] = null);
(statearr_134253_134275[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (2)))
{var inst_134222 = (state_134245[(7)]);var state_134245__$1 = state_134245;if(cljs.core.truth_(inst_134222))
{var statearr_134254_134276 = state_134245__$1;(statearr_134254_134276[(1)] = (4));
} else
{var statearr_134255_134277 = state_134245__$1;(statearr_134255_134277[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (11)))
{var inst_134236 = cljs.core.async.close_BANG_.call(null,ch);var state_134245__$1 = state_134245;var statearr_134256_134278 = state_134245__$1;(statearr_134256_134278[(2)] = inst_134236);
(statearr_134256_134278[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (9)))
{var state_134245__$1 = state_134245;if(cljs.core.truth_(close_QMARK_))
{var statearr_134257_134279 = state_134245__$1;(statearr_134257_134279[(1)] = (11));
} else
{var statearr_134258_134280 = state_134245__$1;(statearr_134258_134280[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (5)))
{var inst_134222 = (state_134245[(7)]);var state_134245__$1 = state_134245;var statearr_134259_134281 = state_134245__$1;(statearr_134259_134281[(2)] = inst_134222);
(statearr_134259_134281[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (10)))
{var inst_134241 = (state_134245[(2)]);var state_134245__$1 = state_134245;var statearr_134260_134282 = state_134245__$1;(statearr_134260_134282[(2)] = inst_134241);
(statearr_134260_134282[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134246 === (8)))
{var inst_134222 = (state_134245[(7)]);var inst_134232 = cljs.core.next.call(null,inst_134222);var inst_134222__$1 = inst_134232;var state_134245__$1 = (function (){var statearr_134261 = state_134245;(statearr_134261[(7)] = inst_134222__$1);
return statearr_134261;
})();var statearr_134262_134283 = state_134245__$1;(statearr_134262_134283[(2)] = null);
(statearr_134262_134283[(1)] = (2));
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
var state_machine__14565__auto____0 = (function (){var statearr_134266 = [null,null,null,null,null,null,null,null];(statearr_134266[(0)] = state_machine__14565__auto__);
(statearr_134266[(1)] = (1));
return statearr_134266;
});
var state_machine__14565__auto____1 = (function (state_134245){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_134245);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e134267){if((e134267 instanceof Object))
{var ex__14568__auto__ = e134267;var statearr_134268_134284 = state_134245;(statearr_134268_134284[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e134267;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134285 = state_134245;
state_134245 = G__134285;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_134245){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_134245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__))
})();var state__14622__auto__ = (function (){var statearr_134269 = f__14621__auto__.call(null);(statearr_134269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_134269;
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
cljs.core.async.Mux = (function (){var obj134287 = {};return obj134287;
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
cljs.core.async.Mult = (function (){var obj134289 = {};return obj134289;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t134511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t134511 = (function (cs,ch,mult,meta134512){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta134512 = meta134512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t134511.cljs$lang$type = true;
cljs.core.async.t134511.cljs$lang$ctorStr = "cljs.core.async/t134511";
cljs.core.async.t134511.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t134511");
});})(cs))
;
cljs.core.async.t134511.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t134511.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t134511.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t134511.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t134511.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t134511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t134511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_134513){var self__ = this;
var _134513__$1 = this;return self__.meta134512;
});})(cs))
;
cljs.core.async.t134511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_134513,meta134512__$1){var self__ = this;
var _134513__$1 = this;return (new cljs.core.async.t134511(self__.cs,self__.ch,self__.mult,meta134512__$1));
});})(cs))
;
cljs.core.async.__GT_t134511 = ((function (cs){
return (function __GT_t134511(cs__$1,ch__$1,mult__$1,meta134512){return (new cljs.core.async.t134511(cs__$1,ch__$1,mult__$1,meta134512));
});})(cs))
;
}
return (new cljs.core.async.t134511(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14620__auto___134732 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___134732,cs,m,dchan,dctr,done){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___134732,cs,m,dchan,dctr,done){
return (function (state_134644){var state_val_134645 = (state_134644[(1)]);if((state_val_134645 === (7)))
{var inst_134640 = (state_134644[(2)]);var state_134644__$1 = state_134644;var statearr_134646_134733 = state_134644__$1;(statearr_134646_134733[(2)] = inst_134640);
(statearr_134646_134733[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (20)))
{var inst_134545 = (state_134644[(7)]);var inst_134555 = cljs.core.first.call(null,inst_134545);var inst_134556 = cljs.core.nth.call(null,inst_134555,(0),null);var inst_134557 = cljs.core.nth.call(null,inst_134555,(1),null);var state_134644__$1 = (function (){var statearr_134647 = state_134644;(statearr_134647[(8)] = inst_134556);
return statearr_134647;
})();if(cljs.core.truth_(inst_134557))
{var statearr_134648_134734 = state_134644__$1;(statearr_134648_134734[(1)] = (22));
} else
{var statearr_134649_134735 = state_134644__$1;(statearr_134649_134735[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (27)))
{var inst_134592 = (state_134644[(9)]);var inst_134585 = (state_134644[(10)]);var inst_134516 = (state_134644[(11)]);var inst_134587 = (state_134644[(12)]);var inst_134592__$1 = cljs.core._nth.call(null,inst_134585,inst_134587);var inst_134593 = cljs.core.async.put_BANG_.call(null,inst_134592__$1,inst_134516,done);var state_134644__$1 = (function (){var statearr_134650 = state_134644;(statearr_134650[(9)] = inst_134592__$1);
return statearr_134650;
})();if(cljs.core.truth_(inst_134593))
{var statearr_134651_134736 = state_134644__$1;(statearr_134651_134736[(1)] = (30));
} else
{var statearr_134652_134737 = state_134644__$1;(statearr_134652_134737[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (1)))
{var state_134644__$1 = state_134644;var statearr_134653_134738 = state_134644__$1;(statearr_134653_134738[(2)] = null);
(statearr_134653_134738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (24)))
{var inst_134545 = (state_134644[(7)]);var inst_134562 = (state_134644[(2)]);var inst_134563 = cljs.core.next.call(null,inst_134545);var inst_134525 = inst_134563;var inst_134526 = null;var inst_134527 = (0);var inst_134528 = (0);var state_134644__$1 = (function (){var statearr_134654 = state_134644;(statearr_134654[(13)] = inst_134562);
(statearr_134654[(14)] = inst_134526);
(statearr_134654[(15)] = inst_134527);
(statearr_134654[(16)] = inst_134525);
(statearr_134654[(17)] = inst_134528);
return statearr_134654;
})();var statearr_134655_134739 = state_134644__$1;(statearr_134655_134739[(2)] = null);
(statearr_134655_134739[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (39)))
{var state_134644__$1 = state_134644;var statearr_134659_134740 = state_134644__$1;(statearr_134659_134740[(2)] = null);
(statearr_134659_134740[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (4)))
{var inst_134516 = (state_134644[(11)]);var inst_134516__$1 = (state_134644[(2)]);var inst_134517 = (inst_134516__$1 == null);var state_134644__$1 = (function (){var statearr_134660 = state_134644;(statearr_134660[(11)] = inst_134516__$1);
return statearr_134660;
})();if(cljs.core.truth_(inst_134517))
{var statearr_134661_134741 = state_134644__$1;(statearr_134661_134741[(1)] = (5));
} else
{var statearr_134662_134742 = state_134644__$1;(statearr_134662_134742[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (15)))
{var inst_134526 = (state_134644[(14)]);var inst_134527 = (state_134644[(15)]);var inst_134525 = (state_134644[(16)]);var inst_134528 = (state_134644[(17)]);var inst_134541 = (state_134644[(2)]);var inst_134542 = (inst_134528 + (1));var tmp134656 = inst_134526;var tmp134657 = inst_134527;var tmp134658 = inst_134525;var inst_134525__$1 = tmp134658;var inst_134526__$1 = tmp134656;var inst_134527__$1 = tmp134657;var inst_134528__$1 = inst_134542;var state_134644__$1 = (function (){var statearr_134663 = state_134644;(statearr_134663[(18)] = inst_134541);
(statearr_134663[(14)] = inst_134526__$1);
(statearr_134663[(15)] = inst_134527__$1);
(statearr_134663[(16)] = inst_134525__$1);
(statearr_134663[(17)] = inst_134528__$1);
return statearr_134663;
})();var statearr_134664_134743 = state_134644__$1;(statearr_134664_134743[(2)] = null);
(statearr_134664_134743[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (21)))
{var inst_134566 = (state_134644[(2)]);var state_134644__$1 = state_134644;var statearr_134668_134744 = state_134644__$1;(statearr_134668_134744[(2)] = inst_134566);
(statearr_134668_134744[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (31)))
{var inst_134592 = (state_134644[(9)]);var inst_134596 = done.call(null,null);var inst_134597 = cljs.core.async.untap_STAR_.call(null,m,inst_134592);var state_134644__$1 = (function (){var statearr_134669 = state_134644;(statearr_134669[(19)] = inst_134596);
return statearr_134669;
})();var statearr_134670_134745 = state_134644__$1;(statearr_134670_134745[(2)] = inst_134597);
(statearr_134670_134745[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (32)))
{var inst_134585 = (state_134644[(10)]);var inst_134586 = (state_134644[(20)]);var inst_134587 = (state_134644[(12)]);var inst_134584 = (state_134644[(21)]);var inst_134599 = (state_134644[(2)]);var inst_134600 = (inst_134587 + (1));var tmp134665 = inst_134585;var tmp134666 = inst_134586;var tmp134667 = inst_134584;var inst_134584__$1 = tmp134667;var inst_134585__$1 = tmp134665;var inst_134586__$1 = tmp134666;var inst_134587__$1 = inst_134600;var state_134644__$1 = (function (){var statearr_134671 = state_134644;(statearr_134671[(22)] = inst_134599);
(statearr_134671[(10)] = inst_134585__$1);
(statearr_134671[(20)] = inst_134586__$1);
(statearr_134671[(12)] = inst_134587__$1);
(statearr_134671[(21)] = inst_134584__$1);
return statearr_134671;
})();var statearr_134672_134746 = state_134644__$1;(statearr_134672_134746[(2)] = null);
(statearr_134672_134746[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (40)))
{var inst_134612 = (state_134644[(23)]);var inst_134616 = done.call(null,null);var inst_134617 = cljs.core.async.untap_STAR_.call(null,m,inst_134612);var state_134644__$1 = (function (){var statearr_134673 = state_134644;(statearr_134673[(24)] = inst_134616);
return statearr_134673;
})();var statearr_134674_134747 = state_134644__$1;(statearr_134674_134747[(2)] = inst_134617);
(statearr_134674_134747[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (33)))
{var inst_134603 = (state_134644[(25)]);var inst_134605 = cljs.core.chunked_seq_QMARK_.call(null,inst_134603);var state_134644__$1 = state_134644;if(inst_134605)
{var statearr_134675_134748 = state_134644__$1;(statearr_134675_134748[(1)] = (36));
} else
{var statearr_134676_134749 = state_134644__$1;(statearr_134676_134749[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (13)))
{var inst_134535 = (state_134644[(26)]);var inst_134538 = cljs.core.async.close_BANG_.call(null,inst_134535);var state_134644__$1 = state_134644;var statearr_134677_134750 = state_134644__$1;(statearr_134677_134750[(2)] = inst_134538);
(statearr_134677_134750[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (22)))
{var inst_134556 = (state_134644[(8)]);var inst_134559 = cljs.core.async.close_BANG_.call(null,inst_134556);var state_134644__$1 = state_134644;var statearr_134678_134751 = state_134644__$1;(statearr_134678_134751[(2)] = inst_134559);
(statearr_134678_134751[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (36)))
{var inst_134603 = (state_134644[(25)]);var inst_134607 = cljs.core.chunk_first.call(null,inst_134603);var inst_134608 = cljs.core.chunk_rest.call(null,inst_134603);var inst_134609 = cljs.core.count.call(null,inst_134607);var inst_134584 = inst_134608;var inst_134585 = inst_134607;var inst_134586 = inst_134609;var inst_134587 = (0);var state_134644__$1 = (function (){var statearr_134679 = state_134644;(statearr_134679[(10)] = inst_134585);
(statearr_134679[(20)] = inst_134586);
(statearr_134679[(12)] = inst_134587);
(statearr_134679[(21)] = inst_134584);
return statearr_134679;
})();var statearr_134680_134752 = state_134644__$1;(statearr_134680_134752[(2)] = null);
(statearr_134680_134752[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (41)))
{var inst_134603 = (state_134644[(25)]);var inst_134619 = (state_134644[(2)]);var inst_134620 = cljs.core.next.call(null,inst_134603);var inst_134584 = inst_134620;var inst_134585 = null;var inst_134586 = (0);var inst_134587 = (0);var state_134644__$1 = (function (){var statearr_134681 = state_134644;(statearr_134681[(27)] = inst_134619);
(statearr_134681[(10)] = inst_134585);
(statearr_134681[(20)] = inst_134586);
(statearr_134681[(12)] = inst_134587);
(statearr_134681[(21)] = inst_134584);
return statearr_134681;
})();var statearr_134682_134753 = state_134644__$1;(statearr_134682_134753[(2)] = null);
(statearr_134682_134753[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (43)))
{var state_134644__$1 = state_134644;var statearr_134683_134754 = state_134644__$1;(statearr_134683_134754[(2)] = null);
(statearr_134683_134754[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (29)))
{var inst_134628 = (state_134644[(2)]);var state_134644__$1 = state_134644;var statearr_134684_134755 = state_134644__$1;(statearr_134684_134755[(2)] = inst_134628);
(statearr_134684_134755[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (44)))
{var inst_134637 = (state_134644[(2)]);var state_134644__$1 = (function (){var statearr_134685 = state_134644;(statearr_134685[(28)] = inst_134637);
return statearr_134685;
})();var statearr_134686_134756 = state_134644__$1;(statearr_134686_134756[(2)] = null);
(statearr_134686_134756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (6)))
{var inst_134576 = (state_134644[(29)]);var inst_134575 = cljs.core.deref.call(null,cs);var inst_134576__$1 = cljs.core.keys.call(null,inst_134575);var inst_134577 = cljs.core.count.call(null,inst_134576__$1);var inst_134578 = cljs.core.reset_BANG_.call(null,dctr,inst_134577);var inst_134583 = cljs.core.seq.call(null,inst_134576__$1);var inst_134584 = inst_134583;var inst_134585 = null;var inst_134586 = (0);var inst_134587 = (0);var state_134644__$1 = (function (){var statearr_134687 = state_134644;(statearr_134687[(30)] = inst_134578);
(statearr_134687[(10)] = inst_134585);
(statearr_134687[(20)] = inst_134586);
(statearr_134687[(29)] = inst_134576__$1);
(statearr_134687[(12)] = inst_134587);
(statearr_134687[(21)] = inst_134584);
return statearr_134687;
})();var statearr_134688_134757 = state_134644__$1;(statearr_134688_134757[(2)] = null);
(statearr_134688_134757[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (28)))
{var inst_134603 = (state_134644[(25)]);var inst_134584 = (state_134644[(21)]);var inst_134603__$1 = cljs.core.seq.call(null,inst_134584);var state_134644__$1 = (function (){var statearr_134689 = state_134644;(statearr_134689[(25)] = inst_134603__$1);
return statearr_134689;
})();if(inst_134603__$1)
{var statearr_134690_134758 = state_134644__$1;(statearr_134690_134758[(1)] = (33));
} else
{var statearr_134691_134759 = state_134644__$1;(statearr_134691_134759[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (25)))
{var inst_134586 = (state_134644[(20)]);var inst_134587 = (state_134644[(12)]);var inst_134589 = (inst_134587 < inst_134586);var inst_134590 = inst_134589;var state_134644__$1 = state_134644;if(cljs.core.truth_(inst_134590))
{var statearr_134692_134760 = state_134644__$1;(statearr_134692_134760[(1)] = (27));
} else
{var statearr_134693_134761 = state_134644__$1;(statearr_134693_134761[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (34)))
{var state_134644__$1 = state_134644;var statearr_134694_134762 = state_134644__$1;(statearr_134694_134762[(2)] = null);
(statearr_134694_134762[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (17)))
{var state_134644__$1 = state_134644;var statearr_134695_134763 = state_134644__$1;(statearr_134695_134763[(2)] = null);
(statearr_134695_134763[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (3)))
{var inst_134642 = (state_134644[(2)]);var state_134644__$1 = state_134644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134644__$1,inst_134642);
} else
{if((state_val_134645 === (12)))
{var inst_134571 = (state_134644[(2)]);var state_134644__$1 = state_134644;var statearr_134696_134764 = state_134644__$1;(statearr_134696_134764[(2)] = inst_134571);
(statearr_134696_134764[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (2)))
{var state_134644__$1 = state_134644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134644__$1,(4),ch);
} else
{if((state_val_134645 === (23)))
{var state_134644__$1 = state_134644;var statearr_134697_134765 = state_134644__$1;(statearr_134697_134765[(2)] = null);
(statearr_134697_134765[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (35)))
{var inst_134626 = (state_134644[(2)]);var state_134644__$1 = state_134644;var statearr_134698_134766 = state_134644__$1;(statearr_134698_134766[(2)] = inst_134626);
(statearr_134698_134766[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (19)))
{var inst_134545 = (state_134644[(7)]);var inst_134549 = cljs.core.chunk_first.call(null,inst_134545);var inst_134550 = cljs.core.chunk_rest.call(null,inst_134545);var inst_134551 = cljs.core.count.call(null,inst_134549);var inst_134525 = inst_134550;var inst_134526 = inst_134549;var inst_134527 = inst_134551;var inst_134528 = (0);var state_134644__$1 = (function (){var statearr_134699 = state_134644;(statearr_134699[(14)] = inst_134526);
(statearr_134699[(15)] = inst_134527);
(statearr_134699[(16)] = inst_134525);
(statearr_134699[(17)] = inst_134528);
return statearr_134699;
})();var statearr_134700_134767 = state_134644__$1;(statearr_134700_134767[(2)] = null);
(statearr_134700_134767[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (11)))
{var inst_134525 = (state_134644[(16)]);var inst_134545 = (state_134644[(7)]);var inst_134545__$1 = cljs.core.seq.call(null,inst_134525);var state_134644__$1 = (function (){var statearr_134701 = state_134644;(statearr_134701[(7)] = inst_134545__$1);
return statearr_134701;
})();if(inst_134545__$1)
{var statearr_134702_134768 = state_134644__$1;(statearr_134702_134768[(1)] = (16));
} else
{var statearr_134703_134769 = state_134644__$1;(statearr_134703_134769[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (9)))
{var inst_134573 = (state_134644[(2)]);var state_134644__$1 = state_134644;var statearr_134704_134770 = state_134644__$1;(statearr_134704_134770[(2)] = inst_134573);
(statearr_134704_134770[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (5)))
{var inst_134523 = cljs.core.deref.call(null,cs);var inst_134524 = cljs.core.seq.call(null,inst_134523);var inst_134525 = inst_134524;var inst_134526 = null;var inst_134527 = (0);var inst_134528 = (0);var state_134644__$1 = (function (){var statearr_134705 = state_134644;(statearr_134705[(14)] = inst_134526);
(statearr_134705[(15)] = inst_134527);
(statearr_134705[(16)] = inst_134525);
(statearr_134705[(17)] = inst_134528);
return statearr_134705;
})();var statearr_134706_134771 = state_134644__$1;(statearr_134706_134771[(2)] = null);
(statearr_134706_134771[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (14)))
{var state_134644__$1 = state_134644;var statearr_134707_134772 = state_134644__$1;(statearr_134707_134772[(2)] = null);
(statearr_134707_134772[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (45)))
{var inst_134634 = (state_134644[(2)]);var state_134644__$1 = state_134644;var statearr_134708_134773 = state_134644__$1;(statearr_134708_134773[(2)] = inst_134634);
(statearr_134708_134773[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (26)))
{var inst_134576 = (state_134644[(29)]);var inst_134630 = (state_134644[(2)]);var inst_134631 = cljs.core.seq.call(null,inst_134576);var state_134644__$1 = (function (){var statearr_134709 = state_134644;(statearr_134709[(31)] = inst_134630);
return statearr_134709;
})();if(inst_134631)
{var statearr_134710_134774 = state_134644__$1;(statearr_134710_134774[(1)] = (42));
} else
{var statearr_134711_134775 = state_134644__$1;(statearr_134711_134775[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (16)))
{var inst_134545 = (state_134644[(7)]);var inst_134547 = cljs.core.chunked_seq_QMARK_.call(null,inst_134545);var state_134644__$1 = state_134644;if(inst_134547)
{var statearr_134712_134776 = state_134644__$1;(statearr_134712_134776[(1)] = (19));
} else
{var statearr_134713_134777 = state_134644__$1;(statearr_134713_134777[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (38)))
{var inst_134623 = (state_134644[(2)]);var state_134644__$1 = state_134644;var statearr_134714_134778 = state_134644__$1;(statearr_134714_134778[(2)] = inst_134623);
(statearr_134714_134778[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (30)))
{var state_134644__$1 = state_134644;var statearr_134715_134779 = state_134644__$1;(statearr_134715_134779[(2)] = null);
(statearr_134715_134779[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (10)))
{var inst_134526 = (state_134644[(14)]);var inst_134528 = (state_134644[(17)]);var inst_134534 = cljs.core._nth.call(null,inst_134526,inst_134528);var inst_134535 = cljs.core.nth.call(null,inst_134534,(0),null);var inst_134536 = cljs.core.nth.call(null,inst_134534,(1),null);var state_134644__$1 = (function (){var statearr_134716 = state_134644;(statearr_134716[(26)] = inst_134535);
return statearr_134716;
})();if(cljs.core.truth_(inst_134536))
{var statearr_134717_134780 = state_134644__$1;(statearr_134717_134780[(1)] = (13));
} else
{var statearr_134718_134781 = state_134644__$1;(statearr_134718_134781[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (18)))
{var inst_134569 = (state_134644[(2)]);var state_134644__$1 = state_134644;var statearr_134719_134782 = state_134644__$1;(statearr_134719_134782[(2)] = inst_134569);
(statearr_134719_134782[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (42)))
{var state_134644__$1 = state_134644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134644__$1,(45),dchan);
} else
{if((state_val_134645 === (37)))
{var inst_134603 = (state_134644[(25)]);var inst_134612 = (state_134644[(23)]);var inst_134516 = (state_134644[(11)]);var inst_134612__$1 = cljs.core.first.call(null,inst_134603);var inst_134613 = cljs.core.async.put_BANG_.call(null,inst_134612__$1,inst_134516,done);var state_134644__$1 = (function (){var statearr_134720 = state_134644;(statearr_134720[(23)] = inst_134612__$1);
return statearr_134720;
})();if(cljs.core.truth_(inst_134613))
{var statearr_134721_134783 = state_134644__$1;(statearr_134721_134783[(1)] = (39));
} else
{var statearr_134722_134784 = state_134644__$1;(statearr_134722_134784[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134645 === (8)))
{var inst_134527 = (state_134644[(15)]);var inst_134528 = (state_134644[(17)]);var inst_134530 = (inst_134528 < inst_134527);var inst_134531 = inst_134530;var state_134644__$1 = state_134644;if(cljs.core.truth_(inst_134531))
{var statearr_134723_134785 = state_134644__$1;(statearr_134723_134785[(1)] = (10));
} else
{var statearr_134724_134786 = state_134644__$1;(statearr_134724_134786[(1)] = (11));
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
});})(c__14620__auto___134732,cs,m,dchan,dctr,done))
;return ((function (switch__14564__auto__,c__14620__auto___134732,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_134728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_134728[(0)] = state_machine__14565__auto__);
(statearr_134728[(1)] = (1));
return statearr_134728;
});
var state_machine__14565__auto____1 = (function (state_134644){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_134644);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e134729){if((e134729 instanceof Object))
{var ex__14568__auto__ = e134729;var statearr_134730_134787 = state_134644;(statearr_134730_134787[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134644);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e134729;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134788 = state_134644;
state_134644 = G__134788;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_134644){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_134644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___134732,cs,m,dchan,dctr,done))
})();var state__14622__auto__ = (function (){var statearr_134731 = f__14621__auto__.call(null);(statearr_134731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___134732);
return statearr_134731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___134732,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj134790 = {};return obj134790;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__134791){var map__134796 = p__134791;var map__134796__$1 = ((cljs.core.seq_QMARK_.call(null,map__134796))?cljs.core.apply.call(null,cljs.core.hash_map,map__134796):map__134796);var opts = map__134796__$1;var statearr_134797_134800 = state;(statearr_134797_134800[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__134796,map__134796__$1,opts){
return (function (val){var statearr_134798_134801 = state;(statearr_134798_134801[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__134796,map__134796__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4388__auto__))
{var cb = temp__4388__auto__;var statearr_134799_134802 = state;(statearr_134799_134802[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__134791 = null;if (arguments.length > 3) {
  p__134791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__134791);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__134803){
var state = cljs.core.first(arglist__134803);
arglist__134803 = cljs.core.next(arglist__134803);
var cont_block = cljs.core.first(arglist__134803);
arglist__134803 = cljs.core.next(arglist__134803);
var ports = cljs.core.first(arglist__134803);
var p__134791 = cljs.core.rest(arglist__134803);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__134791);
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
;var m = (function (){if(typeof cljs.core.async.t134923 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t134923 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta134924){
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
this.meta134924 = meta134924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t134923.cljs$lang$type = true;
cljs.core.async.t134923.cljs$lang$ctorStr = "cljs.core.async/t134923";
cljs.core.async.t134923.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t134923");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t134923.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t134923.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t134923.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t134923.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t134923.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t134923.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t134923.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t134923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t134923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_134925){var self__ = this;
var _134925__$1 = this;return self__.meta134924;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t134923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_134925,meta134924__$1){var self__ = this;
var _134925__$1 = this;return (new cljs.core.async.t134923(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta134924__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t134923 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t134923(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta134924){return (new cljs.core.async.t134923(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta134924));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t134923(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__14620__auto___135042 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___135042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___135042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_134995){var state_val_134996 = (state_134995[(1)]);if((state_val_134996 === (7)))
{var inst_134939 = (state_134995[(7)]);var inst_134944 = cljs.core.apply.call(null,cljs.core.hash_map,inst_134939);var state_134995__$1 = state_134995;var statearr_134997_135043 = state_134995__$1;(statearr_134997_135043[(2)] = inst_134944);
(statearr_134997_135043[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (20)))
{var inst_134954 = (state_134995[(8)]);var state_134995__$1 = state_134995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134995__$1,(23),out,inst_134954);
} else
{if((state_val_134996 === (1)))
{var inst_134929 = (state_134995[(9)]);var inst_134929__$1 = calc_state.call(null);var inst_134930 = cljs.core.seq_QMARK_.call(null,inst_134929__$1);var state_134995__$1 = (function (){var statearr_134998 = state_134995;(statearr_134998[(9)] = inst_134929__$1);
return statearr_134998;
})();if(inst_134930)
{var statearr_134999_135044 = state_134995__$1;(statearr_134999_135044[(1)] = (2));
} else
{var statearr_135000_135045 = state_134995__$1;(statearr_135000_135045[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (24)))
{var inst_134947 = (state_134995[(10)]);var inst_134939 = inst_134947;var state_134995__$1 = (function (){var statearr_135001 = state_134995;(statearr_135001[(7)] = inst_134939);
return statearr_135001;
})();var statearr_135002_135046 = state_134995__$1;(statearr_135002_135046[(2)] = null);
(statearr_135002_135046[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (4)))
{var inst_134929 = (state_134995[(9)]);var inst_134935 = (state_134995[(2)]);var inst_134936 = cljs.core.get.call(null,inst_134935,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_134937 = cljs.core.get.call(null,inst_134935,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_134938 = cljs.core.get.call(null,inst_134935,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_134939 = inst_134929;var state_134995__$1 = (function (){var statearr_135003 = state_134995;(statearr_135003[(11)] = inst_134936);
(statearr_135003[(12)] = inst_134937);
(statearr_135003[(7)] = inst_134939);
(statearr_135003[(13)] = inst_134938);
return statearr_135003;
})();var statearr_135004_135047 = state_134995__$1;(statearr_135004_135047[(2)] = null);
(statearr_135004_135047[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (15)))
{var state_134995__$1 = state_134995;var statearr_135005_135048 = state_134995__$1;(statearr_135005_135048[(2)] = null);
(statearr_135005_135048[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (21)))
{var inst_134947 = (state_134995[(10)]);var inst_134939 = inst_134947;var state_134995__$1 = (function (){var statearr_135006 = state_134995;(statearr_135006[(7)] = inst_134939);
return statearr_135006;
})();var statearr_135007_135049 = state_134995__$1;(statearr_135007_135049[(2)] = null);
(statearr_135007_135049[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (13)))
{var inst_134991 = (state_134995[(2)]);var state_134995__$1 = state_134995;var statearr_135008_135050 = state_134995__$1;(statearr_135008_135050[(2)] = inst_134991);
(statearr_135008_135050[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (22)))
{var inst_134989 = (state_134995[(2)]);var state_134995__$1 = state_134995;var statearr_135009_135051 = state_134995__$1;(statearr_135009_135051[(2)] = inst_134989);
(statearr_135009_135051[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (6)))
{var inst_134993 = (state_134995[(2)]);var state_134995__$1 = state_134995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134995__$1,inst_134993);
} else
{if((state_val_134996 === (25)))
{var state_134995__$1 = state_134995;var statearr_135010_135052 = state_134995__$1;(statearr_135010_135052[(2)] = null);
(statearr_135010_135052[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (17)))
{var inst_134969 = (state_134995[(14)]);var state_134995__$1 = state_134995;var statearr_135011_135053 = state_134995__$1;(statearr_135011_135053[(2)] = inst_134969);
(statearr_135011_135053[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (3)))
{var inst_134929 = (state_134995[(9)]);var state_134995__$1 = state_134995;var statearr_135012_135054 = state_134995__$1;(statearr_135012_135054[(2)] = inst_134929);
(statearr_135012_135054[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (12)))
{var inst_134955 = (state_134995[(15)]);var inst_134950 = (state_134995[(16)]);var inst_134969 = (state_134995[(14)]);var inst_134969__$1 = inst_134950.call(null,inst_134955);var state_134995__$1 = (function (){var statearr_135013 = state_134995;(statearr_135013[(14)] = inst_134969__$1);
return statearr_135013;
})();if(cljs.core.truth_(inst_134969__$1))
{var statearr_135014_135055 = state_134995__$1;(statearr_135014_135055[(1)] = (17));
} else
{var statearr_135015_135056 = state_134995__$1;(statearr_135015_135056[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (2)))
{var inst_134929 = (state_134995[(9)]);var inst_134932 = cljs.core.apply.call(null,cljs.core.hash_map,inst_134929);var state_134995__$1 = state_134995;var statearr_135016_135057 = state_134995__$1;(statearr_135016_135057[(2)] = inst_134932);
(statearr_135016_135057[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (23)))
{var inst_134980 = (state_134995[(2)]);var state_134995__$1 = state_134995;if(cljs.core.truth_(inst_134980))
{var statearr_135017_135058 = state_134995__$1;(statearr_135017_135058[(1)] = (24));
} else
{var statearr_135018_135059 = state_134995__$1;(statearr_135018_135059[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (19)))
{var inst_134977 = (state_134995[(2)]);var state_134995__$1 = state_134995;if(cljs.core.truth_(inst_134977))
{var statearr_135019_135060 = state_134995__$1;(statearr_135019_135060[(1)] = (20));
} else
{var statearr_135020_135061 = state_134995__$1;(statearr_135020_135061[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (11)))
{var inst_134954 = (state_134995[(8)]);var inst_134960 = (inst_134954 == null);var state_134995__$1 = state_134995;if(cljs.core.truth_(inst_134960))
{var statearr_135021_135062 = state_134995__$1;(statearr_135021_135062[(1)] = (14));
} else
{var statearr_135022_135063 = state_134995__$1;(statearr_135022_135063[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (9)))
{var inst_134947 = (state_134995[(10)]);var inst_134947__$1 = (state_134995[(2)]);var inst_134948 = cljs.core.get.call(null,inst_134947__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_134949 = cljs.core.get.call(null,inst_134947__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_134950 = cljs.core.get.call(null,inst_134947__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_134995__$1 = (function (){var statearr_135023 = state_134995;(statearr_135023[(10)] = inst_134947__$1);
(statearr_135023[(17)] = inst_134949);
(statearr_135023[(16)] = inst_134950);
return statearr_135023;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_134995__$1,(10),inst_134948);
} else
{if((state_val_134996 === (5)))
{var inst_134939 = (state_134995[(7)]);var inst_134942 = cljs.core.seq_QMARK_.call(null,inst_134939);var state_134995__$1 = state_134995;if(inst_134942)
{var statearr_135024_135064 = state_134995__$1;(statearr_135024_135064[(1)] = (7));
} else
{var statearr_135025_135065 = state_134995__$1;(statearr_135025_135065[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (14)))
{var inst_134955 = (state_134995[(15)]);var inst_134962 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_134955);var state_134995__$1 = state_134995;var statearr_135026_135066 = state_134995__$1;(statearr_135026_135066[(2)] = inst_134962);
(statearr_135026_135066[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (26)))
{var inst_134985 = (state_134995[(2)]);var state_134995__$1 = state_134995;var statearr_135027_135067 = state_134995__$1;(statearr_135027_135067[(2)] = inst_134985);
(statearr_135027_135067[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (16)))
{var inst_134965 = (state_134995[(2)]);var inst_134966 = calc_state.call(null);var inst_134939 = inst_134966;var state_134995__$1 = (function (){var statearr_135028 = state_134995;(statearr_135028[(18)] = inst_134965);
(statearr_135028[(7)] = inst_134939);
return statearr_135028;
})();var statearr_135029_135068 = state_134995__$1;(statearr_135029_135068[(2)] = null);
(statearr_135029_135068[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (10)))
{var inst_134955 = (state_134995[(15)]);var inst_134954 = (state_134995[(8)]);var inst_134953 = (state_134995[(2)]);var inst_134954__$1 = cljs.core.nth.call(null,inst_134953,(0),null);var inst_134955__$1 = cljs.core.nth.call(null,inst_134953,(1),null);var inst_134956 = (inst_134954__$1 == null);var inst_134957 = cljs.core._EQ_.call(null,inst_134955__$1,change);var inst_134958 = (inst_134956) || (inst_134957);var state_134995__$1 = (function (){var statearr_135030 = state_134995;(statearr_135030[(15)] = inst_134955__$1);
(statearr_135030[(8)] = inst_134954__$1);
return statearr_135030;
})();if(cljs.core.truth_(inst_134958))
{var statearr_135031_135069 = state_134995__$1;(statearr_135031_135069[(1)] = (11));
} else
{var statearr_135032_135070 = state_134995__$1;(statearr_135032_135070[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (18)))
{var inst_134955 = (state_134995[(15)]);var inst_134949 = (state_134995[(17)]);var inst_134950 = (state_134995[(16)]);var inst_134972 = cljs.core.empty_QMARK_.call(null,inst_134950);var inst_134973 = inst_134949.call(null,inst_134955);var inst_134974 = cljs.core.not.call(null,inst_134973);var inst_134975 = (inst_134972) && (inst_134974);var state_134995__$1 = state_134995;var statearr_135033_135071 = state_134995__$1;(statearr_135033_135071[(2)] = inst_134975);
(statearr_135033_135071[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134996 === (8)))
{var inst_134939 = (state_134995[(7)]);var state_134995__$1 = state_134995;var statearr_135034_135072 = state_134995__$1;(statearr_135034_135072[(2)] = inst_134939);
(statearr_135034_135072[(1)] = (9));
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
});})(c__14620__auto___135042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__14564__auto__,c__14620__auto___135042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_135038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_135038[(0)] = state_machine__14565__auto__);
(statearr_135038[(1)] = (1));
return statearr_135038;
});
var state_machine__14565__auto____1 = (function (state_134995){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_134995);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e135039){if((e135039 instanceof Object))
{var ex__14568__auto__ = e135039;var statearr_135040_135073 = state_134995;(statearr_135040_135073[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134995);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e135039;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135074 = state_134995;
state_134995 = G__135074;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_134995){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_134995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___135042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14622__auto__ = (function (){var statearr_135041 = f__14621__auto__.call(null);(statearr_135041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___135042);
return statearr_135041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___135042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj135076 = {};return obj135076;
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
return (function (p1__135077_SHARP_){if(cljs.core.truth_(p1__135077_SHARP_.call(null,topic)))
{return p1__135077_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__135077_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11497__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t135200 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t135200 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta135201){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta135201 = meta135201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135200.cljs$lang$type = true;
cljs.core.async.t135200.cljs$lang$ctorStr = "cljs.core.async/t135200";
cljs.core.async.t135200.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t135200");
});})(mults,ensure_mult))
;
cljs.core.async.t135200.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t135200.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t135200.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4388__auto__))
{var m = temp__4388__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t135200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t135200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t135200.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t135200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t135200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_135202){var self__ = this;
var _135202__$1 = this;return self__.meta135201;
});})(mults,ensure_mult))
;
cljs.core.async.t135200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_135202,meta135201__$1){var self__ = this;
var _135202__$1 = this;return (new cljs.core.async.t135200(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta135201__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t135200 = ((function (mults,ensure_mult){
return (function __GT_t135200(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta135201){return (new cljs.core.async.t135200(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta135201));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t135200(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14620__auto___135322 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___135322,mults,ensure_mult,p){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___135322,mults,ensure_mult,p){
return (function (state_135274){var state_val_135275 = (state_135274[(1)]);if((state_val_135275 === (7)))
{var inst_135270 = (state_135274[(2)]);var state_135274__$1 = state_135274;var statearr_135276_135323 = state_135274__$1;(statearr_135276_135323[(2)] = inst_135270);
(statearr_135276_135323[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (20)))
{var state_135274__$1 = state_135274;var statearr_135277_135324 = state_135274__$1;(statearr_135277_135324[(2)] = null);
(statearr_135277_135324[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (1)))
{var state_135274__$1 = state_135274;var statearr_135278_135325 = state_135274__$1;(statearr_135278_135325[(2)] = null);
(statearr_135278_135325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (24)))
{var inst_135253 = (state_135274[(7)]);var inst_135262 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_135253);var state_135274__$1 = state_135274;var statearr_135279_135326 = state_135274__$1;(statearr_135279_135326[(2)] = inst_135262);
(statearr_135279_135326[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (4)))
{var inst_135205 = (state_135274[(8)]);var inst_135205__$1 = (state_135274[(2)]);var inst_135206 = (inst_135205__$1 == null);var state_135274__$1 = (function (){var statearr_135280 = state_135274;(statearr_135280[(8)] = inst_135205__$1);
return statearr_135280;
})();if(cljs.core.truth_(inst_135206))
{var statearr_135281_135327 = state_135274__$1;(statearr_135281_135327[(1)] = (5));
} else
{var statearr_135282_135328 = state_135274__$1;(statearr_135282_135328[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (15)))
{var inst_135247 = (state_135274[(2)]);var state_135274__$1 = state_135274;var statearr_135283_135329 = state_135274__$1;(statearr_135283_135329[(2)] = inst_135247);
(statearr_135283_135329[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (21)))
{var inst_135267 = (state_135274[(2)]);var state_135274__$1 = (function (){var statearr_135284 = state_135274;(statearr_135284[(9)] = inst_135267);
return statearr_135284;
})();var statearr_135285_135330 = state_135274__$1;(statearr_135285_135330[(2)] = null);
(statearr_135285_135330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (13)))
{var inst_135229 = (state_135274[(10)]);var inst_135231 = cljs.core.chunked_seq_QMARK_.call(null,inst_135229);var state_135274__$1 = state_135274;if(inst_135231)
{var statearr_135286_135331 = state_135274__$1;(statearr_135286_135331[(1)] = (16));
} else
{var statearr_135287_135332 = state_135274__$1;(statearr_135287_135332[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (22)))
{var inst_135259 = (state_135274[(2)]);var state_135274__$1 = state_135274;if(cljs.core.truth_(inst_135259))
{var statearr_135288_135333 = state_135274__$1;(statearr_135288_135333[(1)] = (23));
} else
{var statearr_135289_135334 = state_135274__$1;(statearr_135289_135334[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (6)))
{var inst_135255 = (state_135274[(11)]);var inst_135253 = (state_135274[(7)]);var inst_135205 = (state_135274[(8)]);var inst_135253__$1 = topic_fn.call(null,inst_135205);var inst_135254 = cljs.core.deref.call(null,mults);var inst_135255__$1 = cljs.core.get.call(null,inst_135254,inst_135253__$1);var state_135274__$1 = (function (){var statearr_135290 = state_135274;(statearr_135290[(11)] = inst_135255__$1);
(statearr_135290[(7)] = inst_135253__$1);
return statearr_135290;
})();if(cljs.core.truth_(inst_135255__$1))
{var statearr_135291_135335 = state_135274__$1;(statearr_135291_135335[(1)] = (19));
} else
{var statearr_135292_135336 = state_135274__$1;(statearr_135292_135336[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (25)))
{var inst_135264 = (state_135274[(2)]);var state_135274__$1 = state_135274;var statearr_135293_135337 = state_135274__$1;(statearr_135293_135337[(2)] = inst_135264);
(statearr_135293_135337[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (17)))
{var inst_135229 = (state_135274[(10)]);var inst_135238 = cljs.core.first.call(null,inst_135229);var inst_135239 = cljs.core.async.muxch_STAR_.call(null,inst_135238);var inst_135240 = cljs.core.async.close_BANG_.call(null,inst_135239);var inst_135241 = cljs.core.next.call(null,inst_135229);var inst_135215 = inst_135241;var inst_135216 = null;var inst_135217 = (0);var inst_135218 = (0);var state_135274__$1 = (function (){var statearr_135294 = state_135274;(statearr_135294[(12)] = inst_135216);
(statearr_135294[(13)] = inst_135217);
(statearr_135294[(14)] = inst_135240);
(statearr_135294[(15)] = inst_135218);
(statearr_135294[(16)] = inst_135215);
return statearr_135294;
})();var statearr_135295_135338 = state_135274__$1;(statearr_135295_135338[(2)] = null);
(statearr_135295_135338[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (3)))
{var inst_135272 = (state_135274[(2)]);var state_135274__$1 = state_135274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135274__$1,inst_135272);
} else
{if((state_val_135275 === (12)))
{var inst_135249 = (state_135274[(2)]);var state_135274__$1 = state_135274;var statearr_135296_135339 = state_135274__$1;(statearr_135296_135339[(2)] = inst_135249);
(statearr_135296_135339[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (2)))
{var state_135274__$1 = state_135274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135274__$1,(4),ch);
} else
{if((state_val_135275 === (23)))
{var state_135274__$1 = state_135274;var statearr_135297_135340 = state_135274__$1;(statearr_135297_135340[(2)] = null);
(statearr_135297_135340[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (19)))
{var inst_135255 = (state_135274[(11)]);var inst_135205 = (state_135274[(8)]);var inst_135257 = cljs.core.async.muxch_STAR_.call(null,inst_135255);var state_135274__$1 = state_135274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135274__$1,(22),inst_135257,inst_135205);
} else
{if((state_val_135275 === (11)))
{var inst_135229 = (state_135274[(10)]);var inst_135215 = (state_135274[(16)]);var inst_135229__$1 = cljs.core.seq.call(null,inst_135215);var state_135274__$1 = (function (){var statearr_135298 = state_135274;(statearr_135298[(10)] = inst_135229__$1);
return statearr_135298;
})();if(inst_135229__$1)
{var statearr_135299_135341 = state_135274__$1;(statearr_135299_135341[(1)] = (13));
} else
{var statearr_135300_135342 = state_135274__$1;(statearr_135300_135342[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (9)))
{var inst_135251 = (state_135274[(2)]);var state_135274__$1 = state_135274;var statearr_135301_135343 = state_135274__$1;(statearr_135301_135343[(2)] = inst_135251);
(statearr_135301_135343[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (5)))
{var inst_135212 = cljs.core.deref.call(null,mults);var inst_135213 = cljs.core.vals.call(null,inst_135212);var inst_135214 = cljs.core.seq.call(null,inst_135213);var inst_135215 = inst_135214;var inst_135216 = null;var inst_135217 = (0);var inst_135218 = (0);var state_135274__$1 = (function (){var statearr_135302 = state_135274;(statearr_135302[(12)] = inst_135216);
(statearr_135302[(13)] = inst_135217);
(statearr_135302[(15)] = inst_135218);
(statearr_135302[(16)] = inst_135215);
return statearr_135302;
})();var statearr_135303_135344 = state_135274__$1;(statearr_135303_135344[(2)] = null);
(statearr_135303_135344[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (14)))
{var state_135274__$1 = state_135274;var statearr_135307_135345 = state_135274__$1;(statearr_135307_135345[(2)] = null);
(statearr_135307_135345[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (16)))
{var inst_135229 = (state_135274[(10)]);var inst_135233 = cljs.core.chunk_first.call(null,inst_135229);var inst_135234 = cljs.core.chunk_rest.call(null,inst_135229);var inst_135235 = cljs.core.count.call(null,inst_135233);var inst_135215 = inst_135234;var inst_135216 = inst_135233;var inst_135217 = inst_135235;var inst_135218 = (0);var state_135274__$1 = (function (){var statearr_135308 = state_135274;(statearr_135308[(12)] = inst_135216);
(statearr_135308[(13)] = inst_135217);
(statearr_135308[(15)] = inst_135218);
(statearr_135308[(16)] = inst_135215);
return statearr_135308;
})();var statearr_135309_135346 = state_135274__$1;(statearr_135309_135346[(2)] = null);
(statearr_135309_135346[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (10)))
{var inst_135216 = (state_135274[(12)]);var inst_135217 = (state_135274[(13)]);var inst_135218 = (state_135274[(15)]);var inst_135215 = (state_135274[(16)]);var inst_135223 = cljs.core._nth.call(null,inst_135216,inst_135218);var inst_135224 = cljs.core.async.muxch_STAR_.call(null,inst_135223);var inst_135225 = cljs.core.async.close_BANG_.call(null,inst_135224);var inst_135226 = (inst_135218 + (1));var tmp135304 = inst_135216;var tmp135305 = inst_135217;var tmp135306 = inst_135215;var inst_135215__$1 = tmp135306;var inst_135216__$1 = tmp135304;var inst_135217__$1 = tmp135305;var inst_135218__$1 = inst_135226;var state_135274__$1 = (function (){var statearr_135310 = state_135274;(statearr_135310[(12)] = inst_135216__$1);
(statearr_135310[(13)] = inst_135217__$1);
(statearr_135310[(15)] = inst_135218__$1);
(statearr_135310[(16)] = inst_135215__$1);
(statearr_135310[(17)] = inst_135225);
return statearr_135310;
})();var statearr_135311_135347 = state_135274__$1;(statearr_135311_135347[(2)] = null);
(statearr_135311_135347[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (18)))
{var inst_135244 = (state_135274[(2)]);var state_135274__$1 = state_135274;var statearr_135312_135348 = state_135274__$1;(statearr_135312_135348[(2)] = inst_135244);
(statearr_135312_135348[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135275 === (8)))
{var inst_135217 = (state_135274[(13)]);var inst_135218 = (state_135274[(15)]);var inst_135220 = (inst_135218 < inst_135217);var inst_135221 = inst_135220;var state_135274__$1 = state_135274;if(cljs.core.truth_(inst_135221))
{var statearr_135313_135349 = state_135274__$1;(statearr_135313_135349[(1)] = (10));
} else
{var statearr_135314_135350 = state_135274__$1;(statearr_135314_135350[(1)] = (11));
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
});})(c__14620__auto___135322,mults,ensure_mult,p))
;return ((function (switch__14564__auto__,c__14620__auto___135322,mults,ensure_mult,p){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_135318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_135318[(0)] = state_machine__14565__auto__);
(statearr_135318[(1)] = (1));
return statearr_135318;
});
var state_machine__14565__auto____1 = (function (state_135274){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_135274);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e135319){if((e135319 instanceof Object))
{var ex__14568__auto__ = e135319;var statearr_135320_135351 = state_135274;(statearr_135320_135351[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e135319;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135352 = state_135274;
state_135274 = G__135352;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_135274){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_135274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___135322,mults,ensure_mult,p))
})();var state__14622__auto__ = (function (){var statearr_135321 = f__14621__auto__.call(null);(statearr_135321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___135322);
return statearr_135321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___135322,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__14620__auto___135489 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___135489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___135489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_135459){var state_val_135460 = (state_135459[(1)]);if((state_val_135460 === (7)))
{var state_135459__$1 = state_135459;var statearr_135461_135490 = state_135459__$1;(statearr_135461_135490[(2)] = null);
(statearr_135461_135490[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (1)))
{var state_135459__$1 = state_135459;var statearr_135462_135491 = state_135459__$1;(statearr_135462_135491[(2)] = null);
(statearr_135462_135491[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (4)))
{var inst_135423 = (state_135459[(7)]);var inst_135425 = (inst_135423 < cnt);var state_135459__$1 = state_135459;if(cljs.core.truth_(inst_135425))
{var statearr_135463_135492 = state_135459__$1;(statearr_135463_135492[(1)] = (6));
} else
{var statearr_135464_135493 = state_135459__$1;(statearr_135464_135493[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (15)))
{var inst_135455 = (state_135459[(2)]);var state_135459__$1 = state_135459;var statearr_135465_135494 = state_135459__$1;(statearr_135465_135494[(2)] = inst_135455);
(statearr_135465_135494[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (13)))
{var inst_135448 = cljs.core.async.close_BANG_.call(null,out);var state_135459__$1 = state_135459;var statearr_135466_135495 = state_135459__$1;(statearr_135466_135495[(2)] = inst_135448);
(statearr_135466_135495[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (6)))
{var state_135459__$1 = state_135459;var statearr_135467_135496 = state_135459__$1;(statearr_135467_135496[(2)] = null);
(statearr_135467_135496[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (3)))
{var inst_135457 = (state_135459[(2)]);var state_135459__$1 = state_135459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135459__$1,inst_135457);
} else
{if((state_val_135460 === (12)))
{var inst_135445 = (state_135459[(8)]);var inst_135445__$1 = (state_135459[(2)]);var inst_135446 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_135445__$1);var state_135459__$1 = (function (){var statearr_135468 = state_135459;(statearr_135468[(8)] = inst_135445__$1);
return statearr_135468;
})();if(cljs.core.truth_(inst_135446))
{var statearr_135469_135497 = state_135459__$1;(statearr_135469_135497[(1)] = (13));
} else
{var statearr_135470_135498 = state_135459__$1;(statearr_135470_135498[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (2)))
{var inst_135422 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_135423 = (0);var state_135459__$1 = (function (){var statearr_135471 = state_135459;(statearr_135471[(9)] = inst_135422);
(statearr_135471[(7)] = inst_135423);
return statearr_135471;
})();var statearr_135472_135499 = state_135459__$1;(statearr_135472_135499[(2)] = null);
(statearr_135472_135499[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (11)))
{var inst_135423 = (state_135459[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_135459,(10),Object,null,(9));var inst_135432 = chs__$1.call(null,inst_135423);var inst_135433 = done.call(null,inst_135423);var inst_135434 = cljs.core.async.take_BANG_.call(null,inst_135432,inst_135433);var state_135459__$1 = state_135459;var statearr_135473_135500 = state_135459__$1;(statearr_135473_135500[(2)] = inst_135434);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135459__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (9)))
{var inst_135423 = (state_135459[(7)]);var inst_135436 = (state_135459[(2)]);var inst_135437 = (inst_135423 + (1));var inst_135423__$1 = inst_135437;var state_135459__$1 = (function (){var statearr_135474 = state_135459;(statearr_135474[(7)] = inst_135423__$1);
(statearr_135474[(10)] = inst_135436);
return statearr_135474;
})();var statearr_135475_135501 = state_135459__$1;(statearr_135475_135501[(2)] = null);
(statearr_135475_135501[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (5)))
{var inst_135443 = (state_135459[(2)]);var state_135459__$1 = (function (){var statearr_135476 = state_135459;(statearr_135476[(11)] = inst_135443);
return statearr_135476;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135459__$1,(12),dchan);
} else
{if((state_val_135460 === (14)))
{var inst_135445 = (state_135459[(8)]);var inst_135450 = cljs.core.apply.call(null,f,inst_135445);var state_135459__$1 = state_135459;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135459__$1,(16),out,inst_135450);
} else
{if((state_val_135460 === (16)))
{var inst_135452 = (state_135459[(2)]);var state_135459__$1 = (function (){var statearr_135477 = state_135459;(statearr_135477[(12)] = inst_135452);
return statearr_135477;
})();var statearr_135478_135502 = state_135459__$1;(statearr_135478_135502[(2)] = null);
(statearr_135478_135502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (10)))
{var inst_135427 = (state_135459[(2)]);var inst_135428 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_135459__$1 = (function (){var statearr_135479 = state_135459;(statearr_135479[(13)] = inst_135427);
return statearr_135479;
})();var statearr_135480_135503 = state_135459__$1;(statearr_135480_135503[(2)] = inst_135428);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135459__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135460 === (8)))
{var inst_135441 = (state_135459[(2)]);var state_135459__$1 = state_135459;var statearr_135481_135504 = state_135459__$1;(statearr_135481_135504[(2)] = inst_135441);
(statearr_135481_135504[(1)] = (5));
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
});})(c__14620__auto___135489,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__14564__auto__,c__14620__auto___135489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_135485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_135485[(0)] = state_machine__14565__auto__);
(statearr_135485[(1)] = (1));
return statearr_135485;
});
var state_machine__14565__auto____1 = (function (state_135459){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_135459);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e135486){if((e135486 instanceof Object))
{var ex__14568__auto__ = e135486;var statearr_135487_135505 = state_135459;(statearr_135487_135505[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135459);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e135486;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135506 = state_135459;
state_135459 = G__135506;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_135459){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_135459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___135489,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14622__auto__ = (function (){var statearr_135488 = f__14621__auto__.call(null);(statearr_135488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___135489);
return statearr_135488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___135489,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___135614 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___135614,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___135614,out){
return (function (state_135590){var state_val_135591 = (state_135590[(1)]);if((state_val_135591 === (7)))
{var inst_135570 = (state_135590[(7)]);var inst_135569 = (state_135590[(8)]);var inst_135569__$1 = (state_135590[(2)]);var inst_135570__$1 = cljs.core.nth.call(null,inst_135569__$1,(0),null);var inst_135571 = cljs.core.nth.call(null,inst_135569__$1,(1),null);var inst_135572 = (inst_135570__$1 == null);var state_135590__$1 = (function (){var statearr_135592 = state_135590;(statearr_135592[(7)] = inst_135570__$1);
(statearr_135592[(8)] = inst_135569__$1);
(statearr_135592[(9)] = inst_135571);
return statearr_135592;
})();if(cljs.core.truth_(inst_135572))
{var statearr_135593_135615 = state_135590__$1;(statearr_135593_135615[(1)] = (8));
} else
{var statearr_135594_135616 = state_135590__$1;(statearr_135594_135616[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135591 === (1)))
{var inst_135561 = cljs.core.vec.call(null,chs);var inst_135562 = inst_135561;var state_135590__$1 = (function (){var statearr_135595 = state_135590;(statearr_135595[(10)] = inst_135562);
return statearr_135595;
})();var statearr_135596_135617 = state_135590__$1;(statearr_135596_135617[(2)] = null);
(statearr_135596_135617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135591 === (4)))
{var inst_135562 = (state_135590[(10)]);var state_135590__$1 = state_135590;return cljs.core.async.ioc_alts_BANG_.call(null,state_135590__$1,(7),inst_135562);
} else
{if((state_val_135591 === (6)))
{var inst_135586 = (state_135590[(2)]);var state_135590__$1 = state_135590;var statearr_135597_135618 = state_135590__$1;(statearr_135597_135618[(2)] = inst_135586);
(statearr_135597_135618[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135591 === (3)))
{var inst_135588 = (state_135590[(2)]);var state_135590__$1 = state_135590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135590__$1,inst_135588);
} else
{if((state_val_135591 === (2)))
{var inst_135562 = (state_135590[(10)]);var inst_135564 = cljs.core.count.call(null,inst_135562);var inst_135565 = (inst_135564 > (0));var state_135590__$1 = state_135590;if(cljs.core.truth_(inst_135565))
{var statearr_135599_135619 = state_135590__$1;(statearr_135599_135619[(1)] = (4));
} else
{var statearr_135600_135620 = state_135590__$1;(statearr_135600_135620[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135591 === (11)))
{var inst_135562 = (state_135590[(10)]);var inst_135579 = (state_135590[(2)]);var tmp135598 = inst_135562;var inst_135562__$1 = tmp135598;var state_135590__$1 = (function (){var statearr_135601 = state_135590;(statearr_135601[(10)] = inst_135562__$1);
(statearr_135601[(11)] = inst_135579);
return statearr_135601;
})();var statearr_135602_135621 = state_135590__$1;(statearr_135602_135621[(2)] = null);
(statearr_135602_135621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135591 === (9)))
{var inst_135570 = (state_135590[(7)]);var state_135590__$1 = state_135590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135590__$1,(11),out,inst_135570);
} else
{if((state_val_135591 === (5)))
{var inst_135584 = cljs.core.async.close_BANG_.call(null,out);var state_135590__$1 = state_135590;var statearr_135603_135622 = state_135590__$1;(statearr_135603_135622[(2)] = inst_135584);
(statearr_135603_135622[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135591 === (10)))
{var inst_135582 = (state_135590[(2)]);var state_135590__$1 = state_135590;var statearr_135604_135623 = state_135590__$1;(statearr_135604_135623[(2)] = inst_135582);
(statearr_135604_135623[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135591 === (8)))
{var inst_135562 = (state_135590[(10)]);var inst_135570 = (state_135590[(7)]);var inst_135569 = (state_135590[(8)]);var inst_135571 = (state_135590[(9)]);var inst_135574 = (function (){var c = inst_135571;var v = inst_135570;var vec__135567 = inst_135569;var cs = inst_135562;return ((function (c,v,vec__135567,cs,inst_135562,inst_135570,inst_135569,inst_135571,state_val_135591,c__14620__auto___135614,out){
return (function (p1__135507_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__135507_SHARP_);
});
;})(c,v,vec__135567,cs,inst_135562,inst_135570,inst_135569,inst_135571,state_val_135591,c__14620__auto___135614,out))
})();var inst_135575 = cljs.core.filterv.call(null,inst_135574,inst_135562);var inst_135562__$1 = inst_135575;var state_135590__$1 = (function (){var statearr_135605 = state_135590;(statearr_135605[(10)] = inst_135562__$1);
return statearr_135605;
})();var statearr_135606_135624 = state_135590__$1;(statearr_135606_135624[(2)] = null);
(statearr_135606_135624[(1)] = (2));
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
});})(c__14620__auto___135614,out))
;return ((function (switch__14564__auto__,c__14620__auto___135614,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_135610 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_135610[(0)] = state_machine__14565__auto__);
(statearr_135610[(1)] = (1));
return statearr_135610;
});
var state_machine__14565__auto____1 = (function (state_135590){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_135590);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e135611){if((e135611 instanceof Object))
{var ex__14568__auto__ = e135611;var statearr_135612_135625 = state_135590;(statearr_135612_135625[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e135611;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135626 = state_135590;
state_135590 = G__135626;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_135590){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_135590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___135614,out))
})();var state__14622__auto__ = (function (){var statearr_135613 = f__14621__auto__.call(null);(statearr_135613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___135614);
return statearr_135613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___135614,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___135719 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___135719,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___135719,out){
return (function (state_135696){var state_val_135697 = (state_135696[(1)]);if((state_val_135697 === (7)))
{var inst_135678 = (state_135696[(7)]);var inst_135678__$1 = (state_135696[(2)]);var inst_135679 = (inst_135678__$1 == null);var inst_135680 = cljs.core.not.call(null,inst_135679);var state_135696__$1 = (function (){var statearr_135698 = state_135696;(statearr_135698[(7)] = inst_135678__$1);
return statearr_135698;
})();if(inst_135680)
{var statearr_135699_135720 = state_135696__$1;(statearr_135699_135720[(1)] = (8));
} else
{var statearr_135700_135721 = state_135696__$1;(statearr_135700_135721[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135697 === (1)))
{var inst_135673 = (0);var state_135696__$1 = (function (){var statearr_135701 = state_135696;(statearr_135701[(8)] = inst_135673);
return statearr_135701;
})();var statearr_135702_135722 = state_135696__$1;(statearr_135702_135722[(2)] = null);
(statearr_135702_135722[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135697 === (4)))
{var state_135696__$1 = state_135696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135696__$1,(7),ch);
} else
{if((state_val_135697 === (6)))
{var inst_135691 = (state_135696[(2)]);var state_135696__$1 = state_135696;var statearr_135703_135723 = state_135696__$1;(statearr_135703_135723[(2)] = inst_135691);
(statearr_135703_135723[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135697 === (3)))
{var inst_135693 = (state_135696[(2)]);var inst_135694 = cljs.core.async.close_BANG_.call(null,out);var state_135696__$1 = (function (){var statearr_135704 = state_135696;(statearr_135704[(9)] = inst_135693);
return statearr_135704;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135696__$1,inst_135694);
} else
{if((state_val_135697 === (2)))
{var inst_135673 = (state_135696[(8)]);var inst_135675 = (inst_135673 < n);var state_135696__$1 = state_135696;if(cljs.core.truth_(inst_135675))
{var statearr_135705_135724 = state_135696__$1;(statearr_135705_135724[(1)] = (4));
} else
{var statearr_135706_135725 = state_135696__$1;(statearr_135706_135725[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135697 === (11)))
{var inst_135673 = (state_135696[(8)]);var inst_135683 = (state_135696[(2)]);var inst_135684 = (inst_135673 + (1));var inst_135673__$1 = inst_135684;var state_135696__$1 = (function (){var statearr_135707 = state_135696;(statearr_135707[(8)] = inst_135673__$1);
(statearr_135707[(10)] = inst_135683);
return statearr_135707;
})();var statearr_135708_135726 = state_135696__$1;(statearr_135708_135726[(2)] = null);
(statearr_135708_135726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135697 === (9)))
{var state_135696__$1 = state_135696;var statearr_135709_135727 = state_135696__$1;(statearr_135709_135727[(2)] = null);
(statearr_135709_135727[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135697 === (5)))
{var state_135696__$1 = state_135696;var statearr_135710_135728 = state_135696__$1;(statearr_135710_135728[(2)] = null);
(statearr_135710_135728[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135697 === (10)))
{var inst_135688 = (state_135696[(2)]);var state_135696__$1 = state_135696;var statearr_135711_135729 = state_135696__$1;(statearr_135711_135729[(2)] = inst_135688);
(statearr_135711_135729[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135697 === (8)))
{var inst_135678 = (state_135696[(7)]);var state_135696__$1 = state_135696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135696__$1,(11),out,inst_135678);
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
});})(c__14620__auto___135719,out))
;return ((function (switch__14564__auto__,c__14620__auto___135719,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_135715 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_135715[(0)] = state_machine__14565__auto__);
(statearr_135715[(1)] = (1));
return statearr_135715;
});
var state_machine__14565__auto____1 = (function (state_135696){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_135696);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e135716){if((e135716 instanceof Object))
{var ex__14568__auto__ = e135716;var statearr_135717_135730 = state_135696;(statearr_135717_135730[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e135716;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135731 = state_135696;
state_135696 = G__135731;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_135696){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_135696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___135719,out))
})();var state__14622__auto__ = (function (){var statearr_135718 = f__14621__auto__.call(null);(statearr_135718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___135719);
return statearr_135718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___135719,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t135739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t135739 = (function (ch,f,map_LT_,meta135740){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta135740 = meta135740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135739.cljs$lang$type = true;
cljs.core.async.t135739.cljs$lang$ctorStr = "cljs.core.async/t135739";
cljs.core.async.t135739.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t135739");
});
cljs.core.async.t135739.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t135739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t135739.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t135739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t135742 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t135742 = (function (fn1,_,meta135740,ch,f,map_LT_,meta135743){
this.fn1 = fn1;
this._ = _;
this.meta135740 = meta135740;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta135743 = meta135743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135742.cljs$lang$type = true;
cljs.core.async.t135742.cljs$lang$ctorStr = "cljs.core.async/t135742";
cljs.core.async.t135742.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t135742");
});})(___$1))
;
cljs.core.async.t135742.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t135742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t135742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__135732_SHARP_){return f1.call(null,(((p1__135732_SHARP_ == null))?null:self__.f.call(null,p1__135732_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t135742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_135744){var self__ = this;
var _135744__$1 = this;return self__.meta135743;
});})(___$1))
;
cljs.core.async.t135742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_135744,meta135743__$1){var self__ = this;
var _135744__$1 = this;return (new cljs.core.async.t135742(self__.fn1,self__._,self__.meta135740,self__.ch,self__.f,self__.map_LT_,meta135743__$1));
});})(___$1))
;
cljs.core.async.__GT_t135742 = ((function (___$1){
return (function __GT_t135742(fn1__$1,___$2,meta135740__$1,ch__$2,f__$2,map_LT___$2,meta135743){return (new cljs.core.async.t135742(fn1__$1,___$2,meta135740__$1,ch__$2,f__$2,map_LT___$2,meta135743));
});})(___$1))
;
}
return (new cljs.core.async.t135742(fn1,___$1,self__.meta135740,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t135739.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t135739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t135739.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t135739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_135741){var self__ = this;
var _135741__$1 = this;return self__.meta135740;
});
cljs.core.async.t135739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_135741,meta135740__$1){var self__ = this;
var _135741__$1 = this;return (new cljs.core.async.t135739(self__.ch,self__.f,self__.map_LT_,meta135740__$1));
});
cljs.core.async.__GT_t135739 = (function __GT_t135739(ch__$1,f__$1,map_LT___$1,meta135740){return (new cljs.core.async.t135739(ch__$1,f__$1,map_LT___$1,meta135740));
});
}
return (new cljs.core.async.t135739(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t135748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t135748 = (function (ch,f,map_GT_,meta135749){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta135749 = meta135749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135748.cljs$lang$type = true;
cljs.core.async.t135748.cljs$lang$ctorStr = "cljs.core.async/t135748";
cljs.core.async.t135748.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t135748");
});
cljs.core.async.t135748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t135748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t135748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t135748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t135748.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t135748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t135748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_135750){var self__ = this;
var _135750__$1 = this;return self__.meta135749;
});
cljs.core.async.t135748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_135750,meta135749__$1){var self__ = this;
var _135750__$1 = this;return (new cljs.core.async.t135748(self__.ch,self__.f,self__.map_GT_,meta135749__$1));
});
cljs.core.async.__GT_t135748 = (function __GT_t135748(ch__$1,f__$1,map_GT___$1,meta135749){return (new cljs.core.async.t135748(ch__$1,f__$1,map_GT___$1,meta135749));
});
}
return (new cljs.core.async.t135748(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t135754 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t135754 = (function (ch,p,filter_GT_,meta135755){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta135755 = meta135755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t135754.cljs$lang$type = true;
cljs.core.async.t135754.cljs$lang$ctorStr = "cljs.core.async/t135754";
cljs.core.async.t135754.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"cljs.core.async/t135754");
});
cljs.core.async.t135754.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t135754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t135754.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t135754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t135754.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t135754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t135754.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t135754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_135756){var self__ = this;
var _135756__$1 = this;return self__.meta135755;
});
cljs.core.async.t135754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_135756,meta135755__$1){var self__ = this;
var _135756__$1 = this;return (new cljs.core.async.t135754(self__.ch,self__.p,self__.filter_GT_,meta135755__$1));
});
cljs.core.async.__GT_t135754 = (function __GT_t135754(ch__$1,p__$1,filter_GT___$1,meta135755){return (new cljs.core.async.t135754(ch__$1,p__$1,filter_GT___$1,meta135755));
});
}
return (new cljs.core.async.t135754(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___135839 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___135839,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___135839,out){
return (function (state_135818){var state_val_135819 = (state_135818[(1)]);if((state_val_135819 === (7)))
{var inst_135814 = (state_135818[(2)]);var state_135818__$1 = state_135818;var statearr_135820_135840 = state_135818__$1;(statearr_135820_135840[(2)] = inst_135814);
(statearr_135820_135840[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135819 === (1)))
{var state_135818__$1 = state_135818;var statearr_135821_135841 = state_135818__$1;(statearr_135821_135841[(2)] = null);
(statearr_135821_135841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135819 === (4)))
{var inst_135800 = (state_135818[(7)]);var inst_135800__$1 = (state_135818[(2)]);var inst_135801 = (inst_135800__$1 == null);var state_135818__$1 = (function (){var statearr_135822 = state_135818;(statearr_135822[(7)] = inst_135800__$1);
return statearr_135822;
})();if(cljs.core.truth_(inst_135801))
{var statearr_135823_135842 = state_135818__$1;(statearr_135823_135842[(1)] = (5));
} else
{var statearr_135824_135843 = state_135818__$1;(statearr_135824_135843[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135819 === (6)))
{var inst_135800 = (state_135818[(7)]);var inst_135805 = p.call(null,inst_135800);var state_135818__$1 = state_135818;if(cljs.core.truth_(inst_135805))
{var statearr_135825_135844 = state_135818__$1;(statearr_135825_135844[(1)] = (8));
} else
{var statearr_135826_135845 = state_135818__$1;(statearr_135826_135845[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135819 === (3)))
{var inst_135816 = (state_135818[(2)]);var state_135818__$1 = state_135818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135818__$1,inst_135816);
} else
{if((state_val_135819 === (2)))
{var state_135818__$1 = state_135818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135818__$1,(4),ch);
} else
{if((state_val_135819 === (11)))
{var inst_135808 = (state_135818[(2)]);var state_135818__$1 = state_135818;var statearr_135827_135846 = state_135818__$1;(statearr_135827_135846[(2)] = inst_135808);
(statearr_135827_135846[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135819 === (9)))
{var state_135818__$1 = state_135818;var statearr_135828_135847 = state_135818__$1;(statearr_135828_135847[(2)] = null);
(statearr_135828_135847[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135819 === (5)))
{var inst_135803 = cljs.core.async.close_BANG_.call(null,out);var state_135818__$1 = state_135818;var statearr_135829_135848 = state_135818__$1;(statearr_135829_135848[(2)] = inst_135803);
(statearr_135829_135848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135819 === (10)))
{var inst_135811 = (state_135818[(2)]);var state_135818__$1 = (function (){var statearr_135830 = state_135818;(statearr_135830[(8)] = inst_135811);
return statearr_135830;
})();var statearr_135831_135849 = state_135818__$1;(statearr_135831_135849[(2)] = null);
(statearr_135831_135849[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135819 === (8)))
{var inst_135800 = (state_135818[(7)]);var state_135818__$1 = state_135818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135818__$1,(11),out,inst_135800);
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
});})(c__14620__auto___135839,out))
;return ((function (switch__14564__auto__,c__14620__auto___135839,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_135835 = [null,null,null,null,null,null,null,null,null];(statearr_135835[(0)] = state_machine__14565__auto__);
(statearr_135835[(1)] = (1));
return statearr_135835;
});
var state_machine__14565__auto____1 = (function (state_135818){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_135818);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e135836){if((e135836 instanceof Object))
{var ex__14568__auto__ = e135836;var statearr_135837_135850 = state_135818;(statearr_135837_135850[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e135836;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135851 = state_135818;
state_135818 = G__135851;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_135818){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_135818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___135839,out))
})();var state__14622__auto__ = (function (){var statearr_135838 = f__14621__auto__.call(null);(statearr_135838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___135839);
return statearr_135838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___135839,out))
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
return (function (state_136017){var state_val_136018 = (state_136017[(1)]);if((state_val_136018 === (7)))
{var inst_136013 = (state_136017[(2)]);var state_136017__$1 = state_136017;var statearr_136019_136060 = state_136017__$1;(statearr_136019_136060[(2)] = inst_136013);
(statearr_136019_136060[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (20)))
{var inst_135983 = (state_136017[(7)]);var inst_135994 = (state_136017[(2)]);var inst_135995 = cljs.core.next.call(null,inst_135983);var inst_135969 = inst_135995;var inst_135970 = null;var inst_135971 = (0);var inst_135972 = (0);var state_136017__$1 = (function (){var statearr_136020 = state_136017;(statearr_136020[(8)] = inst_135994);
(statearr_136020[(9)] = inst_135972);
(statearr_136020[(10)] = inst_135970);
(statearr_136020[(11)] = inst_135971);
(statearr_136020[(12)] = inst_135969);
return statearr_136020;
})();var statearr_136021_136061 = state_136017__$1;(statearr_136021_136061[(2)] = null);
(statearr_136021_136061[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (1)))
{var state_136017__$1 = state_136017;var statearr_136022_136062 = state_136017__$1;(statearr_136022_136062[(2)] = null);
(statearr_136022_136062[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (4)))
{var inst_135958 = (state_136017[(13)]);var inst_135958__$1 = (state_136017[(2)]);var inst_135959 = (inst_135958__$1 == null);var state_136017__$1 = (function (){var statearr_136023 = state_136017;(statearr_136023[(13)] = inst_135958__$1);
return statearr_136023;
})();if(cljs.core.truth_(inst_135959))
{var statearr_136024_136063 = state_136017__$1;(statearr_136024_136063[(1)] = (5));
} else
{var statearr_136025_136064 = state_136017__$1;(statearr_136025_136064[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (15)))
{var state_136017__$1 = state_136017;var statearr_136029_136065 = state_136017__$1;(statearr_136029_136065[(2)] = null);
(statearr_136029_136065[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (21)))
{var state_136017__$1 = state_136017;var statearr_136030_136066 = state_136017__$1;(statearr_136030_136066[(2)] = null);
(statearr_136030_136066[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (13)))
{var inst_135972 = (state_136017[(9)]);var inst_135970 = (state_136017[(10)]);var inst_135971 = (state_136017[(11)]);var inst_135969 = (state_136017[(12)]);var inst_135979 = (state_136017[(2)]);var inst_135980 = (inst_135972 + (1));var tmp136026 = inst_135970;var tmp136027 = inst_135971;var tmp136028 = inst_135969;var inst_135969__$1 = tmp136028;var inst_135970__$1 = tmp136026;var inst_135971__$1 = tmp136027;var inst_135972__$1 = inst_135980;var state_136017__$1 = (function (){var statearr_136031 = state_136017;(statearr_136031[(9)] = inst_135972__$1);
(statearr_136031[(10)] = inst_135970__$1);
(statearr_136031[(11)] = inst_135971__$1);
(statearr_136031[(14)] = inst_135979);
(statearr_136031[(12)] = inst_135969__$1);
return statearr_136031;
})();var statearr_136032_136067 = state_136017__$1;(statearr_136032_136067[(2)] = null);
(statearr_136032_136067[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (22)))
{var state_136017__$1 = state_136017;var statearr_136033_136068 = state_136017__$1;(statearr_136033_136068[(2)] = null);
(statearr_136033_136068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (6)))
{var inst_135958 = (state_136017[(13)]);var inst_135967 = f.call(null,inst_135958);var inst_135968 = cljs.core.seq.call(null,inst_135967);var inst_135969 = inst_135968;var inst_135970 = null;var inst_135971 = (0);var inst_135972 = (0);var state_136017__$1 = (function (){var statearr_136034 = state_136017;(statearr_136034[(9)] = inst_135972);
(statearr_136034[(10)] = inst_135970);
(statearr_136034[(11)] = inst_135971);
(statearr_136034[(12)] = inst_135969);
return statearr_136034;
})();var statearr_136035_136069 = state_136017__$1;(statearr_136035_136069[(2)] = null);
(statearr_136035_136069[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (17)))
{var inst_135983 = (state_136017[(7)]);var inst_135987 = cljs.core.chunk_first.call(null,inst_135983);var inst_135988 = cljs.core.chunk_rest.call(null,inst_135983);var inst_135989 = cljs.core.count.call(null,inst_135987);var inst_135969 = inst_135988;var inst_135970 = inst_135987;var inst_135971 = inst_135989;var inst_135972 = (0);var state_136017__$1 = (function (){var statearr_136036 = state_136017;(statearr_136036[(9)] = inst_135972);
(statearr_136036[(10)] = inst_135970);
(statearr_136036[(11)] = inst_135971);
(statearr_136036[(12)] = inst_135969);
return statearr_136036;
})();var statearr_136037_136070 = state_136017__$1;(statearr_136037_136070[(2)] = null);
(statearr_136037_136070[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (3)))
{var inst_136015 = (state_136017[(2)]);var state_136017__$1 = state_136017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136017__$1,inst_136015);
} else
{if((state_val_136018 === (12)))
{var inst_136003 = (state_136017[(2)]);var state_136017__$1 = state_136017;var statearr_136038_136071 = state_136017__$1;(statearr_136038_136071[(2)] = inst_136003);
(statearr_136038_136071[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (2)))
{var state_136017__$1 = state_136017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136017__$1,(4),in$);
} else
{if((state_val_136018 === (23)))
{var inst_136011 = (state_136017[(2)]);var state_136017__$1 = state_136017;var statearr_136039_136072 = state_136017__$1;(statearr_136039_136072[(2)] = inst_136011);
(statearr_136039_136072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (19)))
{var inst_135998 = (state_136017[(2)]);var state_136017__$1 = state_136017;var statearr_136040_136073 = state_136017__$1;(statearr_136040_136073[(2)] = inst_135998);
(statearr_136040_136073[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (11)))
{var inst_135983 = (state_136017[(7)]);var inst_135969 = (state_136017[(12)]);var inst_135983__$1 = cljs.core.seq.call(null,inst_135969);var state_136017__$1 = (function (){var statearr_136041 = state_136017;(statearr_136041[(7)] = inst_135983__$1);
return statearr_136041;
})();if(inst_135983__$1)
{var statearr_136042_136074 = state_136017__$1;(statearr_136042_136074[(1)] = (14));
} else
{var statearr_136043_136075 = state_136017__$1;(statearr_136043_136075[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (9)))
{var inst_136005 = (state_136017[(2)]);var inst_136006 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_136017__$1 = (function (){var statearr_136044 = state_136017;(statearr_136044[(15)] = inst_136005);
return statearr_136044;
})();if(cljs.core.truth_(inst_136006))
{var statearr_136045_136076 = state_136017__$1;(statearr_136045_136076[(1)] = (21));
} else
{var statearr_136046_136077 = state_136017__$1;(statearr_136046_136077[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (5)))
{var inst_135961 = cljs.core.async.close_BANG_.call(null,out);var state_136017__$1 = state_136017;var statearr_136047_136078 = state_136017__$1;(statearr_136047_136078[(2)] = inst_135961);
(statearr_136047_136078[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (14)))
{var inst_135983 = (state_136017[(7)]);var inst_135985 = cljs.core.chunked_seq_QMARK_.call(null,inst_135983);var state_136017__$1 = state_136017;if(inst_135985)
{var statearr_136048_136079 = state_136017__$1;(statearr_136048_136079[(1)] = (17));
} else
{var statearr_136049_136080 = state_136017__$1;(statearr_136049_136080[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (16)))
{var inst_136001 = (state_136017[(2)]);var state_136017__$1 = state_136017;var statearr_136050_136081 = state_136017__$1;(statearr_136050_136081[(2)] = inst_136001);
(statearr_136050_136081[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136018 === (10)))
{var inst_135972 = (state_136017[(9)]);var inst_135970 = (state_136017[(10)]);var inst_135977 = cljs.core._nth.call(null,inst_135970,inst_135972);var state_136017__$1 = state_136017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136017__$1,(13),out,inst_135977);
} else
{if((state_val_136018 === (18)))
{var inst_135983 = (state_136017[(7)]);var inst_135992 = cljs.core.first.call(null,inst_135983);var state_136017__$1 = state_136017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136017__$1,(20),out,inst_135992);
} else
{if((state_val_136018 === (8)))
{var inst_135972 = (state_136017[(9)]);var inst_135971 = (state_136017[(11)]);var inst_135974 = (inst_135972 < inst_135971);var inst_135975 = inst_135974;var state_136017__$1 = state_136017;if(cljs.core.truth_(inst_135975))
{var statearr_136051_136082 = state_136017__$1;(statearr_136051_136082[(1)] = (10));
} else
{var statearr_136052_136083 = state_136017__$1;(statearr_136052_136083[(1)] = (11));
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
var state_machine__14565__auto____0 = (function (){var statearr_136056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_136056[(0)] = state_machine__14565__auto__);
(statearr_136056[(1)] = (1));
return statearr_136056;
});
var state_machine__14565__auto____1 = (function (state_136017){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_136017);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e136057){if((e136057 instanceof Object))
{var ex__14568__auto__ = e136057;var statearr_136058_136084 = state_136017;(statearr_136058_136084[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136017);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e136057;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136085 = state_136017;
state_136017 = G__136085;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_136017){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_136017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__))
})();var state__14622__auto__ = (function (){var statearr_136059 = f__14621__auto__.call(null);(statearr_136059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_136059;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___136182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___136182,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___136182,out){
return (function (state_136157){var state_val_136158 = (state_136157[(1)]);if((state_val_136158 === (7)))
{var inst_136152 = (state_136157[(2)]);var state_136157__$1 = state_136157;var statearr_136159_136183 = state_136157__$1;(statearr_136159_136183[(2)] = inst_136152);
(statearr_136159_136183[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136158 === (1)))
{var inst_136134 = null;var state_136157__$1 = (function (){var statearr_136160 = state_136157;(statearr_136160[(7)] = inst_136134);
return statearr_136160;
})();var statearr_136161_136184 = state_136157__$1;(statearr_136161_136184[(2)] = null);
(statearr_136161_136184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136158 === (4)))
{var inst_136137 = (state_136157[(8)]);var inst_136137__$1 = (state_136157[(2)]);var inst_136138 = (inst_136137__$1 == null);var inst_136139 = cljs.core.not.call(null,inst_136138);var state_136157__$1 = (function (){var statearr_136162 = state_136157;(statearr_136162[(8)] = inst_136137__$1);
return statearr_136162;
})();if(inst_136139)
{var statearr_136163_136185 = state_136157__$1;(statearr_136163_136185[(1)] = (5));
} else
{var statearr_136164_136186 = state_136157__$1;(statearr_136164_136186[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136158 === (6)))
{var state_136157__$1 = state_136157;var statearr_136165_136187 = state_136157__$1;(statearr_136165_136187[(2)] = null);
(statearr_136165_136187[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136158 === (3)))
{var inst_136154 = (state_136157[(2)]);var inst_136155 = cljs.core.async.close_BANG_.call(null,out);var state_136157__$1 = (function (){var statearr_136166 = state_136157;(statearr_136166[(9)] = inst_136154);
return statearr_136166;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136157__$1,inst_136155);
} else
{if((state_val_136158 === (2)))
{var state_136157__$1 = state_136157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136157__$1,(4),ch);
} else
{if((state_val_136158 === (11)))
{var inst_136137 = (state_136157[(8)]);var inst_136146 = (state_136157[(2)]);var inst_136134 = inst_136137;var state_136157__$1 = (function (){var statearr_136167 = state_136157;(statearr_136167[(7)] = inst_136134);
(statearr_136167[(10)] = inst_136146);
return statearr_136167;
})();var statearr_136168_136188 = state_136157__$1;(statearr_136168_136188[(2)] = null);
(statearr_136168_136188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136158 === (9)))
{var inst_136137 = (state_136157[(8)]);var state_136157__$1 = state_136157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136157__$1,(11),out,inst_136137);
} else
{if((state_val_136158 === (5)))
{var inst_136134 = (state_136157[(7)]);var inst_136137 = (state_136157[(8)]);var inst_136141 = cljs.core._EQ_.call(null,inst_136137,inst_136134);var state_136157__$1 = state_136157;if(inst_136141)
{var statearr_136170_136189 = state_136157__$1;(statearr_136170_136189[(1)] = (8));
} else
{var statearr_136171_136190 = state_136157__$1;(statearr_136171_136190[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136158 === (10)))
{var inst_136149 = (state_136157[(2)]);var state_136157__$1 = state_136157;var statearr_136172_136191 = state_136157__$1;(statearr_136172_136191[(2)] = inst_136149);
(statearr_136172_136191[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136158 === (8)))
{var inst_136134 = (state_136157[(7)]);var tmp136169 = inst_136134;var inst_136134__$1 = tmp136169;var state_136157__$1 = (function (){var statearr_136173 = state_136157;(statearr_136173[(7)] = inst_136134__$1);
return statearr_136173;
})();var statearr_136174_136192 = state_136157__$1;(statearr_136174_136192[(2)] = null);
(statearr_136174_136192[(1)] = (2));
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
});})(c__14620__auto___136182,out))
;return ((function (switch__14564__auto__,c__14620__auto___136182,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_136178 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_136178[(0)] = state_machine__14565__auto__);
(statearr_136178[(1)] = (1));
return statearr_136178;
});
var state_machine__14565__auto____1 = (function (state_136157){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_136157);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e136179){if((e136179 instanceof Object))
{var ex__14568__auto__ = e136179;var statearr_136180_136193 = state_136157;(statearr_136180_136193[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e136179;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136194 = state_136157;
state_136157 = G__136194;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_136157){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_136157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___136182,out))
})();var state__14622__auto__ = (function (){var statearr_136181 = f__14621__auto__.call(null);(statearr_136181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___136182);
return statearr_136181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___136182,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___136329 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___136329,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___136329,out){
return (function (state_136299){var state_val_136300 = (state_136299[(1)]);if((state_val_136300 === (7)))
{var inst_136295 = (state_136299[(2)]);var state_136299__$1 = state_136299;var statearr_136301_136330 = state_136299__$1;(statearr_136301_136330[(2)] = inst_136295);
(statearr_136301_136330[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (1)))
{var inst_136262 = (new Array(n));var inst_136263 = inst_136262;var inst_136264 = (0);var state_136299__$1 = (function (){var statearr_136302 = state_136299;(statearr_136302[(7)] = inst_136264);
(statearr_136302[(8)] = inst_136263);
return statearr_136302;
})();var statearr_136303_136331 = state_136299__$1;(statearr_136303_136331[(2)] = null);
(statearr_136303_136331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (4)))
{var inst_136267 = (state_136299[(9)]);var inst_136267__$1 = (state_136299[(2)]);var inst_136268 = (inst_136267__$1 == null);var inst_136269 = cljs.core.not.call(null,inst_136268);var state_136299__$1 = (function (){var statearr_136304 = state_136299;(statearr_136304[(9)] = inst_136267__$1);
return statearr_136304;
})();if(inst_136269)
{var statearr_136305_136332 = state_136299__$1;(statearr_136305_136332[(1)] = (5));
} else
{var statearr_136306_136333 = state_136299__$1;(statearr_136306_136333[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (15)))
{var inst_136289 = (state_136299[(2)]);var state_136299__$1 = state_136299;var statearr_136307_136334 = state_136299__$1;(statearr_136307_136334[(2)] = inst_136289);
(statearr_136307_136334[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (13)))
{var state_136299__$1 = state_136299;var statearr_136308_136335 = state_136299__$1;(statearr_136308_136335[(2)] = null);
(statearr_136308_136335[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (6)))
{var inst_136264 = (state_136299[(7)]);var inst_136285 = (inst_136264 > (0));var state_136299__$1 = state_136299;if(cljs.core.truth_(inst_136285))
{var statearr_136309_136336 = state_136299__$1;(statearr_136309_136336[(1)] = (12));
} else
{var statearr_136310_136337 = state_136299__$1;(statearr_136310_136337[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (3)))
{var inst_136297 = (state_136299[(2)]);var state_136299__$1 = state_136299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136299__$1,inst_136297);
} else
{if((state_val_136300 === (12)))
{var inst_136263 = (state_136299[(8)]);var inst_136287 = cljs.core.vec.call(null,inst_136263);var state_136299__$1 = state_136299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136299__$1,(15),out,inst_136287);
} else
{if((state_val_136300 === (2)))
{var state_136299__$1 = state_136299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136299__$1,(4),ch);
} else
{if((state_val_136300 === (11)))
{var inst_136279 = (state_136299[(2)]);var inst_136280 = (new Array(n));var inst_136263 = inst_136280;var inst_136264 = (0);var state_136299__$1 = (function (){var statearr_136311 = state_136299;(statearr_136311[(10)] = inst_136279);
(statearr_136311[(7)] = inst_136264);
(statearr_136311[(8)] = inst_136263);
return statearr_136311;
})();var statearr_136312_136338 = state_136299__$1;(statearr_136312_136338[(2)] = null);
(statearr_136312_136338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (9)))
{var inst_136263 = (state_136299[(8)]);var inst_136277 = cljs.core.vec.call(null,inst_136263);var state_136299__$1 = state_136299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136299__$1,(11),out,inst_136277);
} else
{if((state_val_136300 === (5)))
{var inst_136272 = (state_136299[(11)]);var inst_136264 = (state_136299[(7)]);var inst_136267 = (state_136299[(9)]);var inst_136263 = (state_136299[(8)]);var inst_136271 = (inst_136263[inst_136264] = inst_136267);var inst_136272__$1 = (inst_136264 + (1));var inst_136273 = (inst_136272__$1 < n);var state_136299__$1 = (function (){var statearr_136313 = state_136299;(statearr_136313[(12)] = inst_136271);
(statearr_136313[(11)] = inst_136272__$1);
return statearr_136313;
})();if(cljs.core.truth_(inst_136273))
{var statearr_136314_136339 = state_136299__$1;(statearr_136314_136339[(1)] = (8));
} else
{var statearr_136315_136340 = state_136299__$1;(statearr_136315_136340[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (14)))
{var inst_136292 = (state_136299[(2)]);var inst_136293 = cljs.core.async.close_BANG_.call(null,out);var state_136299__$1 = (function (){var statearr_136317 = state_136299;(statearr_136317[(13)] = inst_136292);
return statearr_136317;
})();var statearr_136318_136341 = state_136299__$1;(statearr_136318_136341[(2)] = inst_136293);
(statearr_136318_136341[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (10)))
{var inst_136283 = (state_136299[(2)]);var state_136299__$1 = state_136299;var statearr_136319_136342 = state_136299__$1;(statearr_136319_136342[(2)] = inst_136283);
(statearr_136319_136342[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136300 === (8)))
{var inst_136272 = (state_136299[(11)]);var inst_136263 = (state_136299[(8)]);var tmp136316 = inst_136263;var inst_136263__$1 = tmp136316;var inst_136264 = inst_136272;var state_136299__$1 = (function (){var statearr_136320 = state_136299;(statearr_136320[(7)] = inst_136264);
(statearr_136320[(8)] = inst_136263__$1);
return statearr_136320;
})();var statearr_136321_136343 = state_136299__$1;(statearr_136321_136343[(2)] = null);
(statearr_136321_136343[(1)] = (2));
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
});})(c__14620__auto___136329,out))
;return ((function (switch__14564__auto__,c__14620__auto___136329,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_136325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_136325[(0)] = state_machine__14565__auto__);
(statearr_136325[(1)] = (1));
return statearr_136325;
});
var state_machine__14565__auto____1 = (function (state_136299){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_136299);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e136326){if((e136326 instanceof Object))
{var ex__14568__auto__ = e136326;var statearr_136327_136344 = state_136299;(statearr_136327_136344[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136299);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e136326;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136345 = state_136299;
state_136299 = G__136345;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_136299){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_136299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___136329,out))
})();var state__14622__auto__ = (function (){var statearr_136328 = f__14621__auto__.call(null);(statearr_136328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___136329);
return statearr_136328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___136329,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14620__auto___136488 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto___136488,out){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto___136488,out){
return (function (state_136458){var state_val_136459 = (state_136458[(1)]);if((state_val_136459 === (7)))
{var inst_136454 = (state_136458[(2)]);var state_136458__$1 = state_136458;var statearr_136460_136489 = state_136458__$1;(statearr_136460_136489[(2)] = inst_136454);
(statearr_136460_136489[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (1)))
{var inst_136417 = [];var inst_136418 = inst_136417;var inst_136419 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_136458__$1 = (function (){var statearr_136461 = state_136458;(statearr_136461[(7)] = inst_136418);
(statearr_136461[(8)] = inst_136419);
return statearr_136461;
})();var statearr_136462_136490 = state_136458__$1;(statearr_136462_136490[(2)] = null);
(statearr_136462_136490[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (4)))
{var inst_136422 = (state_136458[(9)]);var inst_136422__$1 = (state_136458[(2)]);var inst_136423 = (inst_136422__$1 == null);var inst_136424 = cljs.core.not.call(null,inst_136423);var state_136458__$1 = (function (){var statearr_136463 = state_136458;(statearr_136463[(9)] = inst_136422__$1);
return statearr_136463;
})();if(inst_136424)
{var statearr_136464_136491 = state_136458__$1;(statearr_136464_136491[(1)] = (5));
} else
{var statearr_136465_136492 = state_136458__$1;(statearr_136465_136492[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (15)))
{var inst_136448 = (state_136458[(2)]);var state_136458__$1 = state_136458;var statearr_136466_136493 = state_136458__$1;(statearr_136466_136493[(2)] = inst_136448);
(statearr_136466_136493[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (13)))
{var state_136458__$1 = state_136458;var statearr_136467_136494 = state_136458__$1;(statearr_136467_136494[(2)] = null);
(statearr_136467_136494[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (6)))
{var inst_136418 = (state_136458[(7)]);var inst_136443 = inst_136418.length;var inst_136444 = (inst_136443 > (0));var state_136458__$1 = state_136458;if(cljs.core.truth_(inst_136444))
{var statearr_136468_136495 = state_136458__$1;(statearr_136468_136495[(1)] = (12));
} else
{var statearr_136469_136496 = state_136458__$1;(statearr_136469_136496[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (3)))
{var inst_136456 = (state_136458[(2)]);var state_136458__$1 = state_136458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136458__$1,inst_136456);
} else
{if((state_val_136459 === (12)))
{var inst_136418 = (state_136458[(7)]);var inst_136446 = cljs.core.vec.call(null,inst_136418);var state_136458__$1 = state_136458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136458__$1,(15),out,inst_136446);
} else
{if((state_val_136459 === (2)))
{var state_136458__$1 = state_136458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136458__$1,(4),ch);
} else
{if((state_val_136459 === (11)))
{var inst_136422 = (state_136458[(9)]);var inst_136426 = (state_136458[(10)]);var inst_136436 = (state_136458[(2)]);var inst_136437 = [];var inst_136438 = inst_136437.push(inst_136422);var inst_136418 = inst_136437;var inst_136419 = inst_136426;var state_136458__$1 = (function (){var statearr_136470 = state_136458;(statearr_136470[(7)] = inst_136418);
(statearr_136470[(11)] = inst_136436);
(statearr_136470[(12)] = inst_136438);
(statearr_136470[(8)] = inst_136419);
return statearr_136470;
})();var statearr_136471_136497 = state_136458__$1;(statearr_136471_136497[(2)] = null);
(statearr_136471_136497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (9)))
{var inst_136418 = (state_136458[(7)]);var inst_136434 = cljs.core.vec.call(null,inst_136418);var state_136458__$1 = state_136458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136458__$1,(11),out,inst_136434);
} else
{if((state_val_136459 === (5)))
{var inst_136422 = (state_136458[(9)]);var inst_136426 = (state_136458[(10)]);var inst_136419 = (state_136458[(8)]);var inst_136426__$1 = f.call(null,inst_136422);var inst_136427 = cljs.core._EQ_.call(null,inst_136426__$1,inst_136419);var inst_136428 = cljs.core.keyword_identical_QMARK_.call(null,inst_136419,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_136429 = (inst_136427) || (inst_136428);var state_136458__$1 = (function (){var statearr_136472 = state_136458;(statearr_136472[(10)] = inst_136426__$1);
return statearr_136472;
})();if(cljs.core.truth_(inst_136429))
{var statearr_136473_136498 = state_136458__$1;(statearr_136473_136498[(1)] = (8));
} else
{var statearr_136474_136499 = state_136458__$1;(statearr_136474_136499[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (14)))
{var inst_136451 = (state_136458[(2)]);var inst_136452 = cljs.core.async.close_BANG_.call(null,out);var state_136458__$1 = (function (){var statearr_136476 = state_136458;(statearr_136476[(13)] = inst_136451);
return statearr_136476;
})();var statearr_136477_136500 = state_136458__$1;(statearr_136477_136500[(2)] = inst_136452);
(statearr_136477_136500[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (10)))
{var inst_136441 = (state_136458[(2)]);var state_136458__$1 = state_136458;var statearr_136478_136501 = state_136458__$1;(statearr_136478_136501[(2)] = inst_136441);
(statearr_136478_136501[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136459 === (8)))
{var inst_136418 = (state_136458[(7)]);var inst_136422 = (state_136458[(9)]);var inst_136426 = (state_136458[(10)]);var inst_136431 = inst_136418.push(inst_136422);var tmp136475 = inst_136418;var inst_136418__$1 = tmp136475;var inst_136419 = inst_136426;var state_136458__$1 = (function (){var statearr_136479 = state_136458;(statearr_136479[(14)] = inst_136431);
(statearr_136479[(7)] = inst_136418__$1);
(statearr_136479[(8)] = inst_136419);
return statearr_136479;
})();var statearr_136480_136502 = state_136458__$1;(statearr_136480_136502[(2)] = null);
(statearr_136480_136502[(1)] = (2));
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
});})(c__14620__auto___136488,out))
;return ((function (switch__14564__auto__,c__14620__auto___136488,out){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_136484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_136484[(0)] = state_machine__14565__auto__);
(statearr_136484[(1)] = (1));
return statearr_136484;
});
var state_machine__14565__auto____1 = (function (state_136458){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_136458);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e136485){if((e136485 instanceof Object))
{var ex__14568__auto__ = e136485;var statearr_136486_136503 = state_136458;(statearr_136486_136503[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136458);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e136485;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136504 = state_136458;
state_136458 = G__136504;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_136458){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_136458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto___136488,out))
})();var state__14622__auto__ = (function (){var statearr_136487 = f__14621__auto__.call(null);(statearr_136487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto___136488);
return statearr_136487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto___136488,out))
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