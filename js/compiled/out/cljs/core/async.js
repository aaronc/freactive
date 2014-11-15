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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18263 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18263 = (function (f,fn_handler,meta18264){
this.f = f;
this.fn_handler = fn_handler;
this.meta18264 = meta18264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18263.cljs$lang$type = true;
cljs.core.async.t18263.cljs$lang$ctorStr = "cljs.core.async/t18263";
cljs.core.async.t18263.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t18263");
});
cljs.core.async.t18263.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18265){var self__ = this;
var _18265__$1 = this;return self__.meta18264;
});
cljs.core.async.t18263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18265,meta18264__$1){var self__ = this;
var _18265__$1 = this;return (new cljs.core.async.t18263(self__.f,self__.fn_handler,meta18264__$1));
});
cljs.core.async.__GT_t18263 = (function __GT_t18263(f__$1,fn_handler__$1,meta18264){return (new cljs.core.async.t18263(f__$1,fn_handler__$1,meta18264));
});
}
return (new cljs.core.async.t18263(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18267 = buff;if(G__18267)
{var bit__12159__auto__ = null;if(cljs.core.truth_((function (){var or__11495__auto__ = bit__12159__auto__;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return G__18267.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18267.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18267);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18267);
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
{var val_18268 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18268);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18268,ret){
return (function (){return fn1.call(null,val_18268);
});})(val_18268,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12365__auto___18269 = n;var x_18270 = (0);while(true){
if((x_18270 < n__12365__auto___18269))
{(a[x_18270] = (0));
{
var G__18271 = (x_18270 + (1));
x_18270 = G__18271;
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
var G__18272 = (i + (1));
i = G__18272;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18276 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18276 = (function (flag,alt_flag,meta18277){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18277 = meta18277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18276.cljs$lang$type = true;
cljs.core.async.t18276.cljs$lang$ctorStr = "cljs.core.async/t18276";
cljs.core.async.t18276.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t18276");
});})(flag))
;
cljs.core.async.t18276.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18278){var self__ = this;
var _18278__$1 = this;return self__.meta18277;
});})(flag))
;
cljs.core.async.t18276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18278,meta18277__$1){var self__ = this;
var _18278__$1 = this;return (new cljs.core.async.t18276(self__.flag,self__.alt_flag,meta18277__$1));
});})(flag))
;
cljs.core.async.__GT_t18276 = ((function (flag){
return (function __GT_t18276(flag__$1,alt_flag__$1,meta18277){return (new cljs.core.async.t18276(flag__$1,alt_flag__$1,meta18277));
});})(flag))
;
}
return (new cljs.core.async.t18276(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18282 = (function (cb,flag,alt_handler,meta18283){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18283 = meta18283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18282.cljs$lang$type = true;
cljs.core.async.t18282.cljs$lang$ctorStr = "cljs.core.async/t18282";
cljs.core.async.t18282.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t18282");
});
cljs.core.async.t18282.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18284){var self__ = this;
var _18284__$1 = this;return self__.meta18283;
});
cljs.core.async.t18282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18284,meta18283__$1){var self__ = this;
var _18284__$1 = this;return (new cljs.core.async.t18282(self__.cb,self__.flag,self__.alt_handler,meta18283__$1));
});
cljs.core.async.__GT_t18282 = (function __GT_t18282(cb__$1,flag__$1,alt_handler__$1,meta18283){return (new cljs.core.async.t18282(cb__$1,flag__$1,alt_handler__$1,meta18283));
});
}
return (new cljs.core.async.t18282(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18285_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18285_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18286_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18286_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11495__auto__ = wport;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18287 = (i + (1));
i = G__18287;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11495__auto__ = ret;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4388__auto__ = (function (){var and__11483__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11483__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11483__auto__;
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
var alts_BANG___delegate = function (ports,p__18288){var map__18290 = p__18288;var map__18290__$1 = ((cljs.core.seq_QMARK_.call(null,map__18290))?cljs.core.apply.call(null,cljs.core.hash_map,map__18290):map__18290);var opts = map__18290__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18288 = null;if (arguments.length > 1) {
  p__18288 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18288);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18291){
var ports = cljs.core.first(arglist__18291);
var p__18288 = cljs.core.rest(arglist__18291);
return alts_BANG___delegate(ports,p__18288);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__14664__auto___18386 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___18386){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___18386){
return (function (state_18362){var state_val_18363 = (state_18362[(1)]);if((state_val_18363 === (7)))
{var inst_18358 = (state_18362[(2)]);var state_18362__$1 = state_18362;var statearr_18364_18387 = state_18362__$1;(statearr_18364_18387[(2)] = inst_18358);
(statearr_18364_18387[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (1)))
{var state_18362__$1 = state_18362;var statearr_18365_18388 = state_18362__$1;(statearr_18365_18388[(2)] = null);
(statearr_18365_18388[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (4)))
{var inst_18341 = (state_18362[(7)]);var inst_18341__$1 = (state_18362[(2)]);var inst_18342 = (inst_18341__$1 == null);var state_18362__$1 = (function (){var statearr_18366 = state_18362;(statearr_18366[(7)] = inst_18341__$1);
return statearr_18366;
})();if(cljs.core.truth_(inst_18342))
{var statearr_18367_18389 = state_18362__$1;(statearr_18367_18389[(1)] = (5));
} else
{var statearr_18368_18390 = state_18362__$1;(statearr_18368_18390[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (13)))
{var state_18362__$1 = state_18362;var statearr_18369_18391 = state_18362__$1;(statearr_18369_18391[(2)] = null);
(statearr_18369_18391[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (6)))
{var inst_18341 = (state_18362[(7)]);var state_18362__$1 = state_18362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18362__$1,(11),to,inst_18341);
} else
{if((state_val_18363 === (3)))
{var inst_18360 = (state_18362[(2)]);var state_18362__$1 = state_18362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18362__$1,inst_18360);
} else
{if((state_val_18363 === (12)))
{var state_18362__$1 = state_18362;var statearr_18370_18392 = state_18362__$1;(statearr_18370_18392[(2)] = null);
(statearr_18370_18392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (2)))
{var state_18362__$1 = state_18362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18362__$1,(4),from);
} else
{if((state_val_18363 === (11)))
{var inst_18351 = (state_18362[(2)]);var state_18362__$1 = state_18362;if(cljs.core.truth_(inst_18351))
{var statearr_18371_18393 = state_18362__$1;(statearr_18371_18393[(1)] = (12));
} else
{var statearr_18372_18394 = state_18362__$1;(statearr_18372_18394[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (9)))
{var state_18362__$1 = state_18362;var statearr_18373_18395 = state_18362__$1;(statearr_18373_18395[(2)] = null);
(statearr_18373_18395[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (5)))
{var state_18362__$1 = state_18362;if(cljs.core.truth_(close_QMARK_))
{var statearr_18374_18396 = state_18362__$1;(statearr_18374_18396[(1)] = (8));
} else
{var statearr_18375_18397 = state_18362__$1;(statearr_18375_18397[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (14)))
{var inst_18356 = (state_18362[(2)]);var state_18362__$1 = state_18362;var statearr_18376_18398 = state_18362__$1;(statearr_18376_18398[(2)] = inst_18356);
(statearr_18376_18398[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (10)))
{var inst_18348 = (state_18362[(2)]);var state_18362__$1 = state_18362;var statearr_18377_18399 = state_18362__$1;(statearr_18377_18399[(2)] = inst_18348);
(statearr_18377_18399[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18363 === (8)))
{var inst_18345 = cljs.core.async.close_BANG_.call(null,to);var state_18362__$1 = state_18362;var statearr_18378_18400 = state_18362__$1;(statearr_18378_18400[(2)] = inst_18345);
(statearr_18378_18400[(1)] = (10));
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
});})(c__14664__auto___18386))
;return ((function (switch__14608__auto__,c__14664__auto___18386){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18382 = [null,null,null,null,null,null,null,null];(statearr_18382[(0)] = state_machine__14609__auto__);
(statearr_18382[(1)] = (1));
return statearr_18382;
});
var state_machine__14609__auto____1 = (function (state_18362){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18362);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18383){if((e18383 instanceof Object))
{var ex__14612__auto__ = e18383;var statearr_18384_18401 = state_18362;(statearr_18384_18401[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18383;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18402 = state_18362;
state_18362 = G__18402;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18362){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___18386))
})();var state__14666__auto__ = (function (){var statearr_18385 = f__14665__auto__.call(null);(statearr_18385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___18386);
return statearr_18385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___18386))
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
return (function (p__18586){var vec__18587 = p__18586;var v = cljs.core.nth.call(null,vec__18587,(0),null);var p = cljs.core.nth.call(null,vec__18587,(1),null);var job = vec__18587;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__14664__auto___18769 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___18769,res,vec__18587,v,p,job,jobs,results){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___18769,res,vec__18587,v,p,job,jobs,results){
return (function (state_18592){var state_val_18593 = (state_18592[(1)]);if((state_val_18593 === (2)))
{var inst_18589 = (state_18592[(2)]);var inst_18590 = cljs.core.async.close_BANG_.call(null,res);var state_18592__$1 = (function (){var statearr_18594 = state_18592;(statearr_18594[(7)] = inst_18589);
return statearr_18594;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18592__$1,inst_18590);
} else
{if((state_val_18593 === (1)))
{var state_18592__$1 = state_18592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18592__$1,(2),res,v);
} else
{return null;
}
}
});})(c__14664__auto___18769,res,vec__18587,v,p,job,jobs,results))
;return ((function (switch__14608__auto__,c__14664__auto___18769,res,vec__18587,v,p,job,jobs,results){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18598 = [null,null,null,null,null,null,null,null];(statearr_18598[(0)] = state_machine__14609__auto__);
(statearr_18598[(1)] = (1));
return statearr_18598;
});
var state_machine__14609__auto____1 = (function (state_18592){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18592);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18599){if((e18599 instanceof Object))
{var ex__14612__auto__ = e18599;var statearr_18600_18770 = state_18592;(statearr_18600_18770[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18771 = state_18592;
state_18592 = G__18771;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18592){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___18769,res,vec__18587,v,p,job,jobs,results))
})();var state__14666__auto__ = (function (){var statearr_18601 = f__14665__auto__.call(null);(statearr_18601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___18769);
return statearr_18601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___18769,res,vec__18587,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__18602){var vec__18603 = p__18602;var v = cljs.core.nth.call(null,vec__18603,(0),null);var p = cljs.core.nth.call(null,vec__18603,(1),null);var job = vec__18603;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12365__auto___18772 = n;var __18773 = (0);while(true){
if((__18773 < n__12365__auto___18772))
{var G__18604_18774 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__18604_18774) {
case "async":
var c__14664__auto___18776 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__18773,c__14664__auto___18776,G__18604_18774,n__12365__auto___18772,jobs,results,process,async){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (__18773,c__14664__auto___18776,G__18604_18774,n__12365__auto___18772,jobs,results,process,async){
return (function (state_18617){var state_val_18618 = (state_18617[(1)]);if((state_val_18618 === (7)))
{var inst_18613 = (state_18617[(2)]);var state_18617__$1 = state_18617;var statearr_18619_18777 = state_18617__$1;(statearr_18619_18777[(2)] = inst_18613);
(statearr_18619_18777[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18618 === (6)))
{var state_18617__$1 = state_18617;var statearr_18620_18778 = state_18617__$1;(statearr_18620_18778[(2)] = null);
(statearr_18620_18778[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18618 === (5)))
{var state_18617__$1 = state_18617;var statearr_18621_18779 = state_18617__$1;(statearr_18621_18779[(2)] = null);
(statearr_18621_18779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18618 === (4)))
{var inst_18607 = (state_18617[(2)]);var inst_18608 = async.call(null,inst_18607);var state_18617__$1 = state_18617;if(cljs.core.truth_(inst_18608))
{var statearr_18622_18780 = state_18617__$1;(statearr_18622_18780[(1)] = (5));
} else
{var statearr_18623_18781 = state_18617__$1;(statearr_18623_18781[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18618 === (3)))
{var inst_18615 = (state_18617[(2)]);var state_18617__$1 = state_18617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18617__$1,inst_18615);
} else
{if((state_val_18618 === (2)))
{var state_18617__$1 = state_18617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18617__$1,(4),jobs);
} else
{if((state_val_18618 === (1)))
{var state_18617__$1 = state_18617;var statearr_18624_18782 = state_18617__$1;(statearr_18624_18782[(2)] = null);
(statearr_18624_18782[(1)] = (2));
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
});})(__18773,c__14664__auto___18776,G__18604_18774,n__12365__auto___18772,jobs,results,process,async))
;return ((function (__18773,switch__14608__auto__,c__14664__auto___18776,G__18604_18774,n__12365__auto___18772,jobs,results,process,async){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18628 = [null,null,null,null,null,null,null];(statearr_18628[(0)] = state_machine__14609__auto__);
(statearr_18628[(1)] = (1));
return statearr_18628;
});
var state_machine__14609__auto____1 = (function (state_18617){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18617);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18629){if((e18629 instanceof Object))
{var ex__14612__auto__ = e18629;var statearr_18630_18783 = state_18617;(statearr_18630_18783[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18629;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18784 = state_18617;
state_18617 = G__18784;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18617){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(__18773,switch__14608__auto__,c__14664__auto___18776,G__18604_18774,n__12365__auto___18772,jobs,results,process,async))
})();var state__14666__auto__ = (function (){var statearr_18631 = f__14665__auto__.call(null);(statearr_18631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___18776);
return statearr_18631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(__18773,c__14664__auto___18776,G__18604_18774,n__12365__auto___18772,jobs,results,process,async))
);

break;
case "compute":
var c__14664__auto___18785 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__18773,c__14664__auto___18785,G__18604_18774,n__12365__auto___18772,jobs,results,process,async){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (__18773,c__14664__auto___18785,G__18604_18774,n__12365__auto___18772,jobs,results,process,async){
return (function (state_18644){var state_val_18645 = (state_18644[(1)]);if((state_val_18645 === (7)))
{var inst_18640 = (state_18644[(2)]);var state_18644__$1 = state_18644;var statearr_18646_18786 = state_18644__$1;(statearr_18646_18786[(2)] = inst_18640);
(statearr_18646_18786[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18645 === (6)))
{var state_18644__$1 = state_18644;var statearr_18647_18787 = state_18644__$1;(statearr_18647_18787[(2)] = null);
(statearr_18647_18787[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18645 === (5)))
{var state_18644__$1 = state_18644;var statearr_18648_18788 = state_18644__$1;(statearr_18648_18788[(2)] = null);
(statearr_18648_18788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18645 === (4)))
{var inst_18634 = (state_18644[(2)]);var inst_18635 = process.call(null,inst_18634);var state_18644__$1 = state_18644;if(cljs.core.truth_(inst_18635))
{var statearr_18649_18789 = state_18644__$1;(statearr_18649_18789[(1)] = (5));
} else
{var statearr_18650_18790 = state_18644__$1;(statearr_18650_18790[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18645 === (3)))
{var inst_18642 = (state_18644[(2)]);var state_18644__$1 = state_18644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18644__$1,inst_18642);
} else
{if((state_val_18645 === (2)))
{var state_18644__$1 = state_18644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18644__$1,(4),jobs);
} else
{if((state_val_18645 === (1)))
{var state_18644__$1 = state_18644;var statearr_18651_18791 = state_18644__$1;(statearr_18651_18791[(2)] = null);
(statearr_18651_18791[(1)] = (2));
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
});})(__18773,c__14664__auto___18785,G__18604_18774,n__12365__auto___18772,jobs,results,process,async))
;return ((function (__18773,switch__14608__auto__,c__14664__auto___18785,G__18604_18774,n__12365__auto___18772,jobs,results,process,async){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18655 = [null,null,null,null,null,null,null];(statearr_18655[(0)] = state_machine__14609__auto__);
(statearr_18655[(1)] = (1));
return statearr_18655;
});
var state_machine__14609__auto____1 = (function (state_18644){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18644);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18656){if((e18656 instanceof Object))
{var ex__14612__auto__ = e18656;var statearr_18657_18792 = state_18644;(statearr_18657_18792[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18644);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18656;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18793 = state_18644;
state_18644 = G__18793;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18644){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(__18773,switch__14608__auto__,c__14664__auto___18785,G__18604_18774,n__12365__auto___18772,jobs,results,process,async))
})();var state__14666__auto__ = (function (){var statearr_18658 = f__14665__auto__.call(null);(statearr_18658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___18785);
return statearr_18658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(__18773,c__14664__auto___18785,G__18604_18774,n__12365__auto___18772,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__18794 = (__18773 + (1));
__18773 = G__18794;
continue;
}
} else
{}
break;
}
var c__14664__auto___18795 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___18795,jobs,results,process,async){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___18795,jobs,results,process,async){
return (function (state_18680){var state_val_18681 = (state_18680[(1)]);if((state_val_18681 === (9)))
{var inst_18673 = (state_18680[(2)]);var state_18680__$1 = (function (){var statearr_18682 = state_18680;(statearr_18682[(7)] = inst_18673);
return statearr_18682;
})();var statearr_18683_18796 = state_18680__$1;(statearr_18683_18796[(2)] = null);
(statearr_18683_18796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18681 === (8)))
{var inst_18666 = (state_18680[(8)]);var inst_18671 = (state_18680[(2)]);var state_18680__$1 = (function (){var statearr_18684 = state_18680;(statearr_18684[(9)] = inst_18671);
return statearr_18684;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18680__$1,(9),results,inst_18666);
} else
{if((state_val_18681 === (7)))
{var inst_18676 = (state_18680[(2)]);var state_18680__$1 = state_18680;var statearr_18685_18797 = state_18680__$1;(statearr_18685_18797[(2)] = inst_18676);
(statearr_18685_18797[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18681 === (6)))
{var inst_18666 = (state_18680[(8)]);var inst_18661 = (state_18680[(10)]);var inst_18666__$1 = cljs.core.async.chan.call(null,(1));var inst_18667 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18668 = [inst_18661,inst_18666__$1];var inst_18669 = (new cljs.core.PersistentVector(null,2,(5),inst_18667,inst_18668,null));var state_18680__$1 = (function (){var statearr_18686 = state_18680;(statearr_18686[(8)] = inst_18666__$1);
return statearr_18686;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18680__$1,(8),jobs,inst_18669);
} else
{if((state_val_18681 === (5)))
{var inst_18664 = cljs.core.async.close_BANG_.call(null,jobs);var state_18680__$1 = state_18680;var statearr_18687_18798 = state_18680__$1;(statearr_18687_18798[(2)] = inst_18664);
(statearr_18687_18798[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18681 === (4)))
{var inst_18661 = (state_18680[(10)]);var inst_18661__$1 = (state_18680[(2)]);var inst_18662 = (inst_18661__$1 == null);var state_18680__$1 = (function (){var statearr_18688 = state_18680;(statearr_18688[(10)] = inst_18661__$1);
return statearr_18688;
})();if(cljs.core.truth_(inst_18662))
{var statearr_18689_18799 = state_18680__$1;(statearr_18689_18799[(1)] = (5));
} else
{var statearr_18690_18800 = state_18680__$1;(statearr_18690_18800[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18681 === (3)))
{var inst_18678 = (state_18680[(2)]);var state_18680__$1 = state_18680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18680__$1,inst_18678);
} else
{if((state_val_18681 === (2)))
{var state_18680__$1 = state_18680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18680__$1,(4),from);
} else
{if((state_val_18681 === (1)))
{var state_18680__$1 = state_18680;var statearr_18691_18801 = state_18680__$1;(statearr_18691_18801[(2)] = null);
(statearr_18691_18801[(1)] = (2));
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
});})(c__14664__auto___18795,jobs,results,process,async))
;return ((function (switch__14608__auto__,c__14664__auto___18795,jobs,results,process,async){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18695 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18695[(0)] = state_machine__14609__auto__);
(statearr_18695[(1)] = (1));
return statearr_18695;
});
var state_machine__14609__auto____1 = (function (state_18680){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18680);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18696){if((e18696 instanceof Object))
{var ex__14612__auto__ = e18696;var statearr_18697_18802 = state_18680;(statearr_18697_18802[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18680);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18696;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18803 = state_18680;
state_18680 = G__18803;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18680){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___18795,jobs,results,process,async))
})();var state__14666__auto__ = (function (){var statearr_18698 = f__14665__auto__.call(null);(statearr_18698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___18795);
return statearr_18698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___18795,jobs,results,process,async))
);
var c__14664__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto__,jobs,results,process,async){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto__,jobs,results,process,async){
return (function (state_18736){var state_val_18737 = (state_18736[(1)]);if((state_val_18737 === (7)))
{var inst_18732 = (state_18736[(2)]);var state_18736__$1 = state_18736;var statearr_18738_18804 = state_18736__$1;(statearr_18738_18804[(2)] = inst_18732);
(statearr_18738_18804[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (20)))
{var state_18736__$1 = state_18736;var statearr_18739_18805 = state_18736__$1;(statearr_18739_18805[(2)] = null);
(statearr_18739_18805[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (1)))
{var state_18736__$1 = state_18736;var statearr_18740_18806 = state_18736__$1;(statearr_18740_18806[(2)] = null);
(statearr_18740_18806[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (4)))
{var inst_18701 = (state_18736[(7)]);var inst_18701__$1 = (state_18736[(2)]);var inst_18702 = (inst_18701__$1 == null);var state_18736__$1 = (function (){var statearr_18741 = state_18736;(statearr_18741[(7)] = inst_18701__$1);
return statearr_18741;
})();if(cljs.core.truth_(inst_18702))
{var statearr_18742_18807 = state_18736__$1;(statearr_18742_18807[(1)] = (5));
} else
{var statearr_18743_18808 = state_18736__$1;(statearr_18743_18808[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (15)))
{var inst_18714 = (state_18736[(8)]);var state_18736__$1 = state_18736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18736__$1,(18),to,inst_18714);
} else
{if((state_val_18737 === (21)))
{var inst_18727 = (state_18736[(2)]);var state_18736__$1 = state_18736;var statearr_18744_18809 = state_18736__$1;(statearr_18744_18809[(2)] = inst_18727);
(statearr_18744_18809[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (13)))
{var inst_18729 = (state_18736[(2)]);var state_18736__$1 = (function (){var statearr_18745 = state_18736;(statearr_18745[(9)] = inst_18729);
return statearr_18745;
})();var statearr_18746_18810 = state_18736__$1;(statearr_18746_18810[(2)] = null);
(statearr_18746_18810[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (6)))
{var inst_18701 = (state_18736[(7)]);var state_18736__$1 = state_18736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18736__$1,(11),inst_18701);
} else
{if((state_val_18737 === (17)))
{var inst_18722 = (state_18736[(2)]);var state_18736__$1 = state_18736;if(cljs.core.truth_(inst_18722))
{var statearr_18747_18811 = state_18736__$1;(statearr_18747_18811[(1)] = (19));
} else
{var statearr_18748_18812 = state_18736__$1;(statearr_18748_18812[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (3)))
{var inst_18734 = (state_18736[(2)]);var state_18736__$1 = state_18736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18736__$1,inst_18734);
} else
{if((state_val_18737 === (12)))
{var inst_18711 = (state_18736[(10)]);var state_18736__$1 = state_18736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18736__$1,(14),inst_18711);
} else
{if((state_val_18737 === (2)))
{var state_18736__$1 = state_18736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18736__$1,(4),results);
} else
{if((state_val_18737 === (19)))
{var state_18736__$1 = state_18736;var statearr_18749_18813 = state_18736__$1;(statearr_18749_18813[(2)] = null);
(statearr_18749_18813[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (11)))
{var inst_18711 = (state_18736[(2)]);var state_18736__$1 = (function (){var statearr_18750 = state_18736;(statearr_18750[(10)] = inst_18711);
return statearr_18750;
})();var statearr_18751_18814 = state_18736__$1;(statearr_18751_18814[(2)] = null);
(statearr_18751_18814[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (9)))
{var state_18736__$1 = state_18736;var statearr_18752_18815 = state_18736__$1;(statearr_18752_18815[(2)] = null);
(statearr_18752_18815[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (5)))
{var state_18736__$1 = state_18736;if(cljs.core.truth_(close_QMARK_))
{var statearr_18753_18816 = state_18736__$1;(statearr_18753_18816[(1)] = (8));
} else
{var statearr_18754_18817 = state_18736__$1;(statearr_18754_18817[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (14)))
{var inst_18716 = (state_18736[(11)]);var inst_18714 = (state_18736[(8)]);var inst_18714__$1 = (state_18736[(2)]);var inst_18715 = (inst_18714__$1 == null);var inst_18716__$1 = cljs.core.not.call(null,inst_18715);var state_18736__$1 = (function (){var statearr_18755 = state_18736;(statearr_18755[(11)] = inst_18716__$1);
(statearr_18755[(8)] = inst_18714__$1);
return statearr_18755;
})();if(inst_18716__$1)
{var statearr_18756_18818 = state_18736__$1;(statearr_18756_18818[(1)] = (15));
} else
{var statearr_18757_18819 = state_18736__$1;(statearr_18757_18819[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (16)))
{var inst_18716 = (state_18736[(11)]);var state_18736__$1 = state_18736;var statearr_18758_18820 = state_18736__$1;(statearr_18758_18820[(2)] = inst_18716);
(statearr_18758_18820[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (10)))
{var inst_18708 = (state_18736[(2)]);var state_18736__$1 = state_18736;var statearr_18759_18821 = state_18736__$1;(statearr_18759_18821[(2)] = inst_18708);
(statearr_18759_18821[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (18)))
{var inst_18719 = (state_18736[(2)]);var state_18736__$1 = state_18736;var statearr_18760_18822 = state_18736__$1;(statearr_18760_18822[(2)] = inst_18719);
(statearr_18760_18822[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18737 === (8)))
{var inst_18705 = cljs.core.async.close_BANG_.call(null,to);var state_18736__$1 = state_18736;var statearr_18761_18823 = state_18736__$1;(statearr_18761_18823[(2)] = inst_18705);
(statearr_18761_18823[(1)] = (10));
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
});})(c__14664__auto__,jobs,results,process,async))
;return ((function (switch__14608__auto__,c__14664__auto__,jobs,results,process,async){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18765 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18765[(0)] = state_machine__14609__auto__);
(statearr_18765[(1)] = (1));
return statearr_18765;
});
var state_machine__14609__auto____1 = (function (state_18736){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18736);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18766){if((e18766 instanceof Object))
{var ex__14612__auto__ = e18766;var statearr_18767_18824 = state_18736;(statearr_18767_18824[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18766;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18825 = state_18736;
state_18736 = G__18825;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18736){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto__,jobs,results,process,async))
})();var state__14666__auto__ = (function (){var statearr_18768 = f__14665__auto__.call(null);(statearr_18768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto__);
return statearr_18768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto__,jobs,results,process,async))
);
return c__14664__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14664__auto___18926 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___18926,tc,fc){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___18926,tc,fc){
return (function (state_18901){var state_val_18902 = (state_18901[(1)]);if((state_val_18902 === (7)))
{var inst_18897 = (state_18901[(2)]);var state_18901__$1 = state_18901;var statearr_18903_18927 = state_18901__$1;(statearr_18903_18927[(2)] = inst_18897);
(statearr_18903_18927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (1)))
{var state_18901__$1 = state_18901;var statearr_18904_18928 = state_18901__$1;(statearr_18904_18928[(2)] = null);
(statearr_18904_18928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (4)))
{var inst_18878 = (state_18901[(7)]);var inst_18878__$1 = (state_18901[(2)]);var inst_18879 = (inst_18878__$1 == null);var state_18901__$1 = (function (){var statearr_18905 = state_18901;(statearr_18905[(7)] = inst_18878__$1);
return statearr_18905;
})();if(cljs.core.truth_(inst_18879))
{var statearr_18906_18929 = state_18901__$1;(statearr_18906_18929[(1)] = (5));
} else
{var statearr_18907_18930 = state_18901__$1;(statearr_18907_18930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (13)))
{var state_18901__$1 = state_18901;var statearr_18908_18931 = state_18901__$1;(statearr_18908_18931[(2)] = null);
(statearr_18908_18931[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (6)))
{var inst_18878 = (state_18901[(7)]);var inst_18884 = p.call(null,inst_18878);var state_18901__$1 = state_18901;if(cljs.core.truth_(inst_18884))
{var statearr_18909_18932 = state_18901__$1;(statearr_18909_18932[(1)] = (9));
} else
{var statearr_18910_18933 = state_18901__$1;(statearr_18910_18933[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (3)))
{var inst_18899 = (state_18901[(2)]);var state_18901__$1 = state_18901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18901__$1,inst_18899);
} else
{if((state_val_18902 === (12)))
{var state_18901__$1 = state_18901;var statearr_18911_18934 = state_18901__$1;(statearr_18911_18934[(2)] = null);
(statearr_18911_18934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (2)))
{var state_18901__$1 = state_18901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18901__$1,(4),ch);
} else
{if((state_val_18902 === (11)))
{var inst_18878 = (state_18901[(7)]);var inst_18888 = (state_18901[(2)]);var state_18901__$1 = state_18901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18901__$1,(8),inst_18888,inst_18878);
} else
{if((state_val_18902 === (9)))
{var state_18901__$1 = state_18901;var statearr_18912_18935 = state_18901__$1;(statearr_18912_18935[(2)] = tc);
(statearr_18912_18935[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (5)))
{var inst_18881 = cljs.core.async.close_BANG_.call(null,tc);var inst_18882 = cljs.core.async.close_BANG_.call(null,fc);var state_18901__$1 = (function (){var statearr_18913 = state_18901;(statearr_18913[(8)] = inst_18881);
return statearr_18913;
})();var statearr_18914_18936 = state_18901__$1;(statearr_18914_18936[(2)] = inst_18882);
(statearr_18914_18936[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (14)))
{var inst_18895 = (state_18901[(2)]);var state_18901__$1 = state_18901;var statearr_18915_18937 = state_18901__$1;(statearr_18915_18937[(2)] = inst_18895);
(statearr_18915_18937[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (10)))
{var state_18901__$1 = state_18901;var statearr_18916_18938 = state_18901__$1;(statearr_18916_18938[(2)] = fc);
(statearr_18916_18938[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18902 === (8)))
{var inst_18890 = (state_18901[(2)]);var state_18901__$1 = state_18901;if(cljs.core.truth_(inst_18890))
{var statearr_18917_18939 = state_18901__$1;(statearr_18917_18939[(1)] = (12));
} else
{var statearr_18918_18940 = state_18901__$1;(statearr_18918_18940[(1)] = (13));
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
});})(c__14664__auto___18926,tc,fc))
;return ((function (switch__14608__auto__,c__14664__auto___18926,tc,fc){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18922 = [null,null,null,null,null,null,null,null,null];(statearr_18922[(0)] = state_machine__14609__auto__);
(statearr_18922[(1)] = (1));
return statearr_18922;
});
var state_machine__14609__auto____1 = (function (state_18901){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18901);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18923){if((e18923 instanceof Object))
{var ex__14612__auto__ = e18923;var statearr_18924_18941 = state_18901;(statearr_18924_18941[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18901);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18923;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18942 = state_18901;
state_18901 = G__18942;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18901){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___18926,tc,fc))
})();var state__14666__auto__ = (function (){var statearr_18925 = f__14665__auto__.call(null);(statearr_18925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___18926);
return statearr_18925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___18926,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14664__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto__){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto__){
return (function (state_18989){var state_val_18990 = (state_18989[(1)]);if((state_val_18990 === (7)))
{var inst_18985 = (state_18989[(2)]);var state_18989__$1 = state_18989;var statearr_18991_19007 = state_18989__$1;(statearr_18991_19007[(2)] = inst_18985);
(statearr_18991_19007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18990 === (6)))
{var inst_18975 = (state_18989[(7)]);var inst_18978 = (state_18989[(8)]);var inst_18982 = f.call(null,inst_18975,inst_18978);var inst_18975__$1 = inst_18982;var state_18989__$1 = (function (){var statearr_18992 = state_18989;(statearr_18992[(7)] = inst_18975__$1);
return statearr_18992;
})();var statearr_18993_19008 = state_18989__$1;(statearr_18993_19008[(2)] = null);
(statearr_18993_19008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18990 === (5)))
{var inst_18975 = (state_18989[(7)]);var state_18989__$1 = state_18989;var statearr_18994_19009 = state_18989__$1;(statearr_18994_19009[(2)] = inst_18975);
(statearr_18994_19009[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18990 === (4)))
{var inst_18978 = (state_18989[(8)]);var inst_18978__$1 = (state_18989[(2)]);var inst_18979 = (inst_18978__$1 == null);var state_18989__$1 = (function (){var statearr_18995 = state_18989;(statearr_18995[(8)] = inst_18978__$1);
return statearr_18995;
})();if(cljs.core.truth_(inst_18979))
{var statearr_18996_19010 = state_18989__$1;(statearr_18996_19010[(1)] = (5));
} else
{var statearr_18997_19011 = state_18989__$1;(statearr_18997_19011[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18990 === (3)))
{var inst_18987 = (state_18989[(2)]);var state_18989__$1 = state_18989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18989__$1,inst_18987);
} else
{if((state_val_18990 === (2)))
{var state_18989__$1 = state_18989;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18989__$1,(4),ch);
} else
{if((state_val_18990 === (1)))
{var inst_18975 = init;var state_18989__$1 = (function (){var statearr_18998 = state_18989;(statearr_18998[(7)] = inst_18975);
return statearr_18998;
})();var statearr_18999_19012 = state_18989__$1;(statearr_18999_19012[(2)] = null);
(statearr_18999_19012[(1)] = (2));
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
});})(c__14664__auto__))
;return ((function (switch__14608__auto__,c__14664__auto__){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_19003 = [null,null,null,null,null,null,null,null,null];(statearr_19003[(0)] = state_machine__14609__auto__);
(statearr_19003[(1)] = (1));
return statearr_19003;
});
var state_machine__14609__auto____1 = (function (state_18989){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18989);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e19004){if((e19004 instanceof Object))
{var ex__14612__auto__ = e19004;var statearr_19005_19013 = state_18989;(statearr_19005_19013[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19004;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19014 = state_18989;
state_18989 = G__19014;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18989){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto__))
})();var state__14666__auto__ = (function (){var statearr_19006 = f__14665__auto__.call(null);(statearr_19006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto__);
return statearr_19006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto__))
);
return c__14664__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14664__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto__){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto__){
return (function (state_19088){var state_val_19089 = (state_19088[(1)]);if((state_val_19089 === (7)))
{var inst_19070 = (state_19088[(2)]);var state_19088__$1 = state_19088;var statearr_19090_19113 = state_19088__$1;(statearr_19090_19113[(2)] = inst_19070);
(statearr_19090_19113[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (1)))
{var inst_19064 = cljs.core.seq.call(null,coll);var inst_19065 = inst_19064;var state_19088__$1 = (function (){var statearr_19091 = state_19088;(statearr_19091[(7)] = inst_19065);
return statearr_19091;
})();var statearr_19092_19114 = state_19088__$1;(statearr_19092_19114[(2)] = null);
(statearr_19092_19114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (4)))
{var inst_19065 = (state_19088[(7)]);var inst_19068 = cljs.core.first.call(null,inst_19065);var state_19088__$1 = state_19088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19088__$1,(7),ch,inst_19068);
} else
{if((state_val_19089 === (13)))
{var inst_19082 = (state_19088[(2)]);var state_19088__$1 = state_19088;var statearr_19093_19115 = state_19088__$1;(statearr_19093_19115[(2)] = inst_19082);
(statearr_19093_19115[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (6)))
{var inst_19073 = (state_19088[(2)]);var state_19088__$1 = state_19088;if(cljs.core.truth_(inst_19073))
{var statearr_19094_19116 = state_19088__$1;(statearr_19094_19116[(1)] = (8));
} else
{var statearr_19095_19117 = state_19088__$1;(statearr_19095_19117[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (3)))
{var inst_19086 = (state_19088[(2)]);var state_19088__$1 = state_19088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19088__$1,inst_19086);
} else
{if((state_val_19089 === (12)))
{var state_19088__$1 = state_19088;var statearr_19096_19118 = state_19088__$1;(statearr_19096_19118[(2)] = null);
(statearr_19096_19118[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (2)))
{var inst_19065 = (state_19088[(7)]);var state_19088__$1 = state_19088;if(cljs.core.truth_(inst_19065))
{var statearr_19097_19119 = state_19088__$1;(statearr_19097_19119[(1)] = (4));
} else
{var statearr_19098_19120 = state_19088__$1;(statearr_19098_19120[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (11)))
{var inst_19079 = cljs.core.async.close_BANG_.call(null,ch);var state_19088__$1 = state_19088;var statearr_19099_19121 = state_19088__$1;(statearr_19099_19121[(2)] = inst_19079);
(statearr_19099_19121[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (9)))
{var state_19088__$1 = state_19088;if(cljs.core.truth_(close_QMARK_))
{var statearr_19100_19122 = state_19088__$1;(statearr_19100_19122[(1)] = (11));
} else
{var statearr_19101_19123 = state_19088__$1;(statearr_19101_19123[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (5)))
{var inst_19065 = (state_19088[(7)]);var state_19088__$1 = state_19088;var statearr_19102_19124 = state_19088__$1;(statearr_19102_19124[(2)] = inst_19065);
(statearr_19102_19124[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (10)))
{var inst_19084 = (state_19088[(2)]);var state_19088__$1 = state_19088;var statearr_19103_19125 = state_19088__$1;(statearr_19103_19125[(2)] = inst_19084);
(statearr_19103_19125[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19089 === (8)))
{var inst_19065 = (state_19088[(7)]);var inst_19075 = cljs.core.next.call(null,inst_19065);var inst_19065__$1 = inst_19075;var state_19088__$1 = (function (){var statearr_19104 = state_19088;(statearr_19104[(7)] = inst_19065__$1);
return statearr_19104;
})();var statearr_19105_19126 = state_19088__$1;(statearr_19105_19126[(2)] = null);
(statearr_19105_19126[(1)] = (2));
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
});})(c__14664__auto__))
;return ((function (switch__14608__auto__,c__14664__auto__){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_19109 = [null,null,null,null,null,null,null,null];(statearr_19109[(0)] = state_machine__14609__auto__);
(statearr_19109[(1)] = (1));
return statearr_19109;
});
var state_machine__14609__auto____1 = (function (state_19088){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_19088);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e19110){if((e19110 instanceof Object))
{var ex__14612__auto__ = e19110;var statearr_19111_19127 = state_19088;(statearr_19111_19127[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19110;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19128 = state_19088;
state_19088 = G__19128;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_19088){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_19088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto__))
})();var state__14666__auto__ = (function (){var statearr_19112 = f__14665__auto__.call(null);(statearr_19112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto__);
return statearr_19112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto__))
);
return c__14664__auto__;
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
cljs.core.async.Mux = (function (){var obj19130 = {};return obj19130;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11483__auto__ = _;if(and__11483__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12132__auto__ = (((_ == null))?null:_);return (function (){var or__11495__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19132 = {};return obj19132;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19354 = (function (cs,ch,mult,meta19355){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19355 = meta19355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19354.cljs$lang$type = true;
cljs.core.async.t19354.cljs$lang$ctorStr = "cljs.core.async/t19354";
cljs.core.async.t19354.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t19354");
});})(cs))
;
cljs.core.async.t19354.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19354.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19354.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19354.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19354.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19356){var self__ = this;
var _19356__$1 = this;return self__.meta19355;
});})(cs))
;
cljs.core.async.t19354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19356,meta19355__$1){var self__ = this;
var _19356__$1 = this;return (new cljs.core.async.t19354(self__.cs,self__.ch,self__.mult,meta19355__$1));
});})(cs))
;
cljs.core.async.__GT_t19354 = ((function (cs){
return (function __GT_t19354(cs__$1,ch__$1,mult__$1,meta19355){return (new cljs.core.async.t19354(cs__$1,ch__$1,mult__$1,meta19355));
});})(cs))
;
}
return (new cljs.core.async.t19354(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14664__auto___19575 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___19575,cs,m,dchan,dctr,done){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___19575,cs,m,dchan,dctr,done){
return (function (state_19487){var state_val_19488 = (state_19487[(1)]);if((state_val_19488 === (7)))
{var inst_19483 = (state_19487[(2)]);var state_19487__$1 = state_19487;var statearr_19489_19576 = state_19487__$1;(statearr_19489_19576[(2)] = inst_19483);
(statearr_19489_19576[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (20)))
{var inst_19388 = (state_19487[(7)]);var inst_19398 = cljs.core.first.call(null,inst_19388);var inst_19399 = cljs.core.nth.call(null,inst_19398,(0),null);var inst_19400 = cljs.core.nth.call(null,inst_19398,(1),null);var state_19487__$1 = (function (){var statearr_19490 = state_19487;(statearr_19490[(8)] = inst_19399);
return statearr_19490;
})();if(cljs.core.truth_(inst_19400))
{var statearr_19491_19577 = state_19487__$1;(statearr_19491_19577[(1)] = (22));
} else
{var statearr_19492_19578 = state_19487__$1;(statearr_19492_19578[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (27)))
{var inst_19359 = (state_19487[(9)]);var inst_19430 = (state_19487[(10)]);var inst_19428 = (state_19487[(11)]);var inst_19435 = (state_19487[(12)]);var inst_19435__$1 = cljs.core._nth.call(null,inst_19428,inst_19430);var inst_19436 = cljs.core.async.put_BANG_.call(null,inst_19435__$1,inst_19359,done);var state_19487__$1 = (function (){var statearr_19493 = state_19487;(statearr_19493[(12)] = inst_19435__$1);
return statearr_19493;
})();if(cljs.core.truth_(inst_19436))
{var statearr_19494_19579 = state_19487__$1;(statearr_19494_19579[(1)] = (30));
} else
{var statearr_19495_19580 = state_19487__$1;(statearr_19495_19580[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (1)))
{var state_19487__$1 = state_19487;var statearr_19496_19581 = state_19487__$1;(statearr_19496_19581[(2)] = null);
(statearr_19496_19581[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (24)))
{var inst_19388 = (state_19487[(7)]);var inst_19405 = (state_19487[(2)]);var inst_19406 = cljs.core.next.call(null,inst_19388);var inst_19368 = inst_19406;var inst_19369 = null;var inst_19370 = (0);var inst_19371 = (0);var state_19487__$1 = (function (){var statearr_19497 = state_19487;(statearr_19497[(13)] = inst_19371);
(statearr_19497[(14)] = inst_19370);
(statearr_19497[(15)] = inst_19368);
(statearr_19497[(16)] = inst_19369);
(statearr_19497[(17)] = inst_19405);
return statearr_19497;
})();var statearr_19498_19582 = state_19487__$1;(statearr_19498_19582[(2)] = null);
(statearr_19498_19582[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (39)))
{var state_19487__$1 = state_19487;var statearr_19502_19583 = state_19487__$1;(statearr_19502_19583[(2)] = null);
(statearr_19502_19583[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (4)))
{var inst_19359 = (state_19487[(9)]);var inst_19359__$1 = (state_19487[(2)]);var inst_19360 = (inst_19359__$1 == null);var state_19487__$1 = (function (){var statearr_19503 = state_19487;(statearr_19503[(9)] = inst_19359__$1);
return statearr_19503;
})();if(cljs.core.truth_(inst_19360))
{var statearr_19504_19584 = state_19487__$1;(statearr_19504_19584[(1)] = (5));
} else
{var statearr_19505_19585 = state_19487__$1;(statearr_19505_19585[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (15)))
{var inst_19371 = (state_19487[(13)]);var inst_19370 = (state_19487[(14)]);var inst_19368 = (state_19487[(15)]);var inst_19369 = (state_19487[(16)]);var inst_19384 = (state_19487[(2)]);var inst_19385 = (inst_19371 + (1));var tmp19499 = inst_19370;var tmp19500 = inst_19368;var tmp19501 = inst_19369;var inst_19368__$1 = tmp19500;var inst_19369__$1 = tmp19501;var inst_19370__$1 = tmp19499;var inst_19371__$1 = inst_19385;var state_19487__$1 = (function (){var statearr_19506 = state_19487;(statearr_19506[(13)] = inst_19371__$1);
(statearr_19506[(14)] = inst_19370__$1);
(statearr_19506[(15)] = inst_19368__$1);
(statearr_19506[(18)] = inst_19384);
(statearr_19506[(16)] = inst_19369__$1);
return statearr_19506;
})();var statearr_19507_19586 = state_19487__$1;(statearr_19507_19586[(2)] = null);
(statearr_19507_19586[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (21)))
{var inst_19409 = (state_19487[(2)]);var state_19487__$1 = state_19487;var statearr_19511_19587 = state_19487__$1;(statearr_19511_19587[(2)] = inst_19409);
(statearr_19511_19587[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (31)))
{var inst_19435 = (state_19487[(12)]);var inst_19439 = done.call(null,null);var inst_19440 = cljs.core.async.untap_STAR_.call(null,m,inst_19435);var state_19487__$1 = (function (){var statearr_19512 = state_19487;(statearr_19512[(19)] = inst_19439);
return statearr_19512;
})();var statearr_19513_19588 = state_19487__$1;(statearr_19513_19588[(2)] = inst_19440);
(statearr_19513_19588[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (32)))
{var inst_19430 = (state_19487[(10)]);var inst_19428 = (state_19487[(11)]);var inst_19429 = (state_19487[(20)]);var inst_19427 = (state_19487[(21)]);var inst_19442 = (state_19487[(2)]);var inst_19443 = (inst_19430 + (1));var tmp19508 = inst_19428;var tmp19509 = inst_19429;var tmp19510 = inst_19427;var inst_19427__$1 = tmp19510;var inst_19428__$1 = tmp19508;var inst_19429__$1 = tmp19509;var inst_19430__$1 = inst_19443;var state_19487__$1 = (function (){var statearr_19514 = state_19487;(statearr_19514[(22)] = inst_19442);
(statearr_19514[(10)] = inst_19430__$1);
(statearr_19514[(11)] = inst_19428__$1);
(statearr_19514[(20)] = inst_19429__$1);
(statearr_19514[(21)] = inst_19427__$1);
return statearr_19514;
})();var statearr_19515_19589 = state_19487__$1;(statearr_19515_19589[(2)] = null);
(statearr_19515_19589[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (40)))
{var inst_19455 = (state_19487[(23)]);var inst_19459 = done.call(null,null);var inst_19460 = cljs.core.async.untap_STAR_.call(null,m,inst_19455);var state_19487__$1 = (function (){var statearr_19516 = state_19487;(statearr_19516[(24)] = inst_19459);
return statearr_19516;
})();var statearr_19517_19590 = state_19487__$1;(statearr_19517_19590[(2)] = inst_19460);
(statearr_19517_19590[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (33)))
{var inst_19446 = (state_19487[(25)]);var inst_19448 = cljs.core.chunked_seq_QMARK_.call(null,inst_19446);var state_19487__$1 = state_19487;if(inst_19448)
{var statearr_19518_19591 = state_19487__$1;(statearr_19518_19591[(1)] = (36));
} else
{var statearr_19519_19592 = state_19487__$1;(statearr_19519_19592[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (13)))
{var inst_19378 = (state_19487[(26)]);var inst_19381 = cljs.core.async.close_BANG_.call(null,inst_19378);var state_19487__$1 = state_19487;var statearr_19520_19593 = state_19487__$1;(statearr_19520_19593[(2)] = inst_19381);
(statearr_19520_19593[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (22)))
{var inst_19399 = (state_19487[(8)]);var inst_19402 = cljs.core.async.close_BANG_.call(null,inst_19399);var state_19487__$1 = state_19487;var statearr_19521_19594 = state_19487__$1;(statearr_19521_19594[(2)] = inst_19402);
(statearr_19521_19594[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (36)))
{var inst_19446 = (state_19487[(25)]);var inst_19450 = cljs.core.chunk_first.call(null,inst_19446);var inst_19451 = cljs.core.chunk_rest.call(null,inst_19446);var inst_19452 = cljs.core.count.call(null,inst_19450);var inst_19427 = inst_19451;var inst_19428 = inst_19450;var inst_19429 = inst_19452;var inst_19430 = (0);var state_19487__$1 = (function (){var statearr_19522 = state_19487;(statearr_19522[(10)] = inst_19430);
(statearr_19522[(11)] = inst_19428);
(statearr_19522[(20)] = inst_19429);
(statearr_19522[(21)] = inst_19427);
return statearr_19522;
})();var statearr_19523_19595 = state_19487__$1;(statearr_19523_19595[(2)] = null);
(statearr_19523_19595[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (41)))
{var inst_19446 = (state_19487[(25)]);var inst_19462 = (state_19487[(2)]);var inst_19463 = cljs.core.next.call(null,inst_19446);var inst_19427 = inst_19463;var inst_19428 = null;var inst_19429 = (0);var inst_19430 = (0);var state_19487__$1 = (function (){var statearr_19524 = state_19487;(statearr_19524[(10)] = inst_19430);
(statearr_19524[(11)] = inst_19428);
(statearr_19524[(20)] = inst_19429);
(statearr_19524[(21)] = inst_19427);
(statearr_19524[(27)] = inst_19462);
return statearr_19524;
})();var statearr_19525_19596 = state_19487__$1;(statearr_19525_19596[(2)] = null);
(statearr_19525_19596[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (43)))
{var state_19487__$1 = state_19487;var statearr_19526_19597 = state_19487__$1;(statearr_19526_19597[(2)] = null);
(statearr_19526_19597[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (29)))
{var inst_19471 = (state_19487[(2)]);var state_19487__$1 = state_19487;var statearr_19527_19598 = state_19487__$1;(statearr_19527_19598[(2)] = inst_19471);
(statearr_19527_19598[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (44)))
{var inst_19480 = (state_19487[(2)]);var state_19487__$1 = (function (){var statearr_19528 = state_19487;(statearr_19528[(28)] = inst_19480);
return statearr_19528;
})();var statearr_19529_19599 = state_19487__$1;(statearr_19529_19599[(2)] = null);
(statearr_19529_19599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (6)))
{var inst_19419 = (state_19487[(29)]);var inst_19418 = cljs.core.deref.call(null,cs);var inst_19419__$1 = cljs.core.keys.call(null,inst_19418);var inst_19420 = cljs.core.count.call(null,inst_19419__$1);var inst_19421 = cljs.core.reset_BANG_.call(null,dctr,inst_19420);var inst_19426 = cljs.core.seq.call(null,inst_19419__$1);var inst_19427 = inst_19426;var inst_19428 = null;var inst_19429 = (0);var inst_19430 = (0);var state_19487__$1 = (function (){var statearr_19530 = state_19487;(statearr_19530[(30)] = inst_19421);
(statearr_19530[(10)] = inst_19430);
(statearr_19530[(11)] = inst_19428);
(statearr_19530[(20)] = inst_19429);
(statearr_19530[(29)] = inst_19419__$1);
(statearr_19530[(21)] = inst_19427);
return statearr_19530;
})();var statearr_19531_19600 = state_19487__$1;(statearr_19531_19600[(2)] = null);
(statearr_19531_19600[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (28)))
{var inst_19446 = (state_19487[(25)]);var inst_19427 = (state_19487[(21)]);var inst_19446__$1 = cljs.core.seq.call(null,inst_19427);var state_19487__$1 = (function (){var statearr_19532 = state_19487;(statearr_19532[(25)] = inst_19446__$1);
return statearr_19532;
})();if(inst_19446__$1)
{var statearr_19533_19601 = state_19487__$1;(statearr_19533_19601[(1)] = (33));
} else
{var statearr_19534_19602 = state_19487__$1;(statearr_19534_19602[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (25)))
{var inst_19430 = (state_19487[(10)]);var inst_19429 = (state_19487[(20)]);var inst_19432 = (inst_19430 < inst_19429);var inst_19433 = inst_19432;var state_19487__$1 = state_19487;if(cljs.core.truth_(inst_19433))
{var statearr_19535_19603 = state_19487__$1;(statearr_19535_19603[(1)] = (27));
} else
{var statearr_19536_19604 = state_19487__$1;(statearr_19536_19604[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (34)))
{var state_19487__$1 = state_19487;var statearr_19537_19605 = state_19487__$1;(statearr_19537_19605[(2)] = null);
(statearr_19537_19605[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (17)))
{var state_19487__$1 = state_19487;var statearr_19538_19606 = state_19487__$1;(statearr_19538_19606[(2)] = null);
(statearr_19538_19606[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (3)))
{var inst_19485 = (state_19487[(2)]);var state_19487__$1 = state_19487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19487__$1,inst_19485);
} else
{if((state_val_19488 === (12)))
{var inst_19414 = (state_19487[(2)]);var state_19487__$1 = state_19487;var statearr_19539_19607 = state_19487__$1;(statearr_19539_19607[(2)] = inst_19414);
(statearr_19539_19607[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (2)))
{var state_19487__$1 = state_19487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19487__$1,(4),ch);
} else
{if((state_val_19488 === (23)))
{var state_19487__$1 = state_19487;var statearr_19540_19608 = state_19487__$1;(statearr_19540_19608[(2)] = null);
(statearr_19540_19608[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (35)))
{var inst_19469 = (state_19487[(2)]);var state_19487__$1 = state_19487;var statearr_19541_19609 = state_19487__$1;(statearr_19541_19609[(2)] = inst_19469);
(statearr_19541_19609[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (19)))
{var inst_19388 = (state_19487[(7)]);var inst_19392 = cljs.core.chunk_first.call(null,inst_19388);var inst_19393 = cljs.core.chunk_rest.call(null,inst_19388);var inst_19394 = cljs.core.count.call(null,inst_19392);var inst_19368 = inst_19393;var inst_19369 = inst_19392;var inst_19370 = inst_19394;var inst_19371 = (0);var state_19487__$1 = (function (){var statearr_19542 = state_19487;(statearr_19542[(13)] = inst_19371);
(statearr_19542[(14)] = inst_19370);
(statearr_19542[(15)] = inst_19368);
(statearr_19542[(16)] = inst_19369);
return statearr_19542;
})();var statearr_19543_19610 = state_19487__$1;(statearr_19543_19610[(2)] = null);
(statearr_19543_19610[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (11)))
{var inst_19388 = (state_19487[(7)]);var inst_19368 = (state_19487[(15)]);var inst_19388__$1 = cljs.core.seq.call(null,inst_19368);var state_19487__$1 = (function (){var statearr_19544 = state_19487;(statearr_19544[(7)] = inst_19388__$1);
return statearr_19544;
})();if(inst_19388__$1)
{var statearr_19545_19611 = state_19487__$1;(statearr_19545_19611[(1)] = (16));
} else
{var statearr_19546_19612 = state_19487__$1;(statearr_19546_19612[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (9)))
{var inst_19416 = (state_19487[(2)]);var state_19487__$1 = state_19487;var statearr_19547_19613 = state_19487__$1;(statearr_19547_19613[(2)] = inst_19416);
(statearr_19547_19613[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (5)))
{var inst_19366 = cljs.core.deref.call(null,cs);var inst_19367 = cljs.core.seq.call(null,inst_19366);var inst_19368 = inst_19367;var inst_19369 = null;var inst_19370 = (0);var inst_19371 = (0);var state_19487__$1 = (function (){var statearr_19548 = state_19487;(statearr_19548[(13)] = inst_19371);
(statearr_19548[(14)] = inst_19370);
(statearr_19548[(15)] = inst_19368);
(statearr_19548[(16)] = inst_19369);
return statearr_19548;
})();var statearr_19549_19614 = state_19487__$1;(statearr_19549_19614[(2)] = null);
(statearr_19549_19614[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (14)))
{var state_19487__$1 = state_19487;var statearr_19550_19615 = state_19487__$1;(statearr_19550_19615[(2)] = null);
(statearr_19550_19615[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (45)))
{var inst_19477 = (state_19487[(2)]);var state_19487__$1 = state_19487;var statearr_19551_19616 = state_19487__$1;(statearr_19551_19616[(2)] = inst_19477);
(statearr_19551_19616[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (26)))
{var inst_19419 = (state_19487[(29)]);var inst_19473 = (state_19487[(2)]);var inst_19474 = cljs.core.seq.call(null,inst_19419);var state_19487__$1 = (function (){var statearr_19552 = state_19487;(statearr_19552[(31)] = inst_19473);
return statearr_19552;
})();if(inst_19474)
{var statearr_19553_19617 = state_19487__$1;(statearr_19553_19617[(1)] = (42));
} else
{var statearr_19554_19618 = state_19487__$1;(statearr_19554_19618[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (16)))
{var inst_19388 = (state_19487[(7)]);var inst_19390 = cljs.core.chunked_seq_QMARK_.call(null,inst_19388);var state_19487__$1 = state_19487;if(inst_19390)
{var statearr_19555_19619 = state_19487__$1;(statearr_19555_19619[(1)] = (19));
} else
{var statearr_19556_19620 = state_19487__$1;(statearr_19556_19620[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (38)))
{var inst_19466 = (state_19487[(2)]);var state_19487__$1 = state_19487;var statearr_19557_19621 = state_19487__$1;(statearr_19557_19621[(2)] = inst_19466);
(statearr_19557_19621[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (30)))
{var state_19487__$1 = state_19487;var statearr_19558_19622 = state_19487__$1;(statearr_19558_19622[(2)] = null);
(statearr_19558_19622[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (10)))
{var inst_19371 = (state_19487[(13)]);var inst_19369 = (state_19487[(16)]);var inst_19377 = cljs.core._nth.call(null,inst_19369,inst_19371);var inst_19378 = cljs.core.nth.call(null,inst_19377,(0),null);var inst_19379 = cljs.core.nth.call(null,inst_19377,(1),null);var state_19487__$1 = (function (){var statearr_19559 = state_19487;(statearr_19559[(26)] = inst_19378);
return statearr_19559;
})();if(cljs.core.truth_(inst_19379))
{var statearr_19560_19623 = state_19487__$1;(statearr_19560_19623[(1)] = (13));
} else
{var statearr_19561_19624 = state_19487__$1;(statearr_19561_19624[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (18)))
{var inst_19412 = (state_19487[(2)]);var state_19487__$1 = state_19487;var statearr_19562_19625 = state_19487__$1;(statearr_19562_19625[(2)] = inst_19412);
(statearr_19562_19625[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (42)))
{var state_19487__$1 = state_19487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19487__$1,(45),dchan);
} else
{if((state_val_19488 === (37)))
{var inst_19359 = (state_19487[(9)]);var inst_19446 = (state_19487[(25)]);var inst_19455 = (state_19487[(23)]);var inst_19455__$1 = cljs.core.first.call(null,inst_19446);var inst_19456 = cljs.core.async.put_BANG_.call(null,inst_19455__$1,inst_19359,done);var state_19487__$1 = (function (){var statearr_19563 = state_19487;(statearr_19563[(23)] = inst_19455__$1);
return statearr_19563;
})();if(cljs.core.truth_(inst_19456))
{var statearr_19564_19626 = state_19487__$1;(statearr_19564_19626[(1)] = (39));
} else
{var statearr_19565_19627 = state_19487__$1;(statearr_19565_19627[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19488 === (8)))
{var inst_19371 = (state_19487[(13)]);var inst_19370 = (state_19487[(14)]);var inst_19373 = (inst_19371 < inst_19370);var inst_19374 = inst_19373;var state_19487__$1 = state_19487;if(cljs.core.truth_(inst_19374))
{var statearr_19566_19628 = state_19487__$1;(statearr_19566_19628[(1)] = (10));
} else
{var statearr_19567_19629 = state_19487__$1;(statearr_19567_19629[(1)] = (11));
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
});})(c__14664__auto___19575,cs,m,dchan,dctr,done))
;return ((function (switch__14608__auto__,c__14664__auto___19575,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_19571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19571[(0)] = state_machine__14609__auto__);
(statearr_19571[(1)] = (1));
return statearr_19571;
});
var state_machine__14609__auto____1 = (function (state_19487){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_19487);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e19572){if((e19572 instanceof Object))
{var ex__14612__auto__ = e19572;var statearr_19573_19630 = state_19487;(statearr_19573_19630[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19487);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19572;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19631 = state_19487;
state_19487 = G__19631;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_19487){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_19487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___19575,cs,m,dchan,dctr,done))
})();var state__14666__auto__ = (function (){var statearr_19574 = f__14665__auto__.call(null);(statearr_19574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___19575);
return statearr_19574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___19575,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj19633 = {};return obj19633;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19634){var map__19639 = p__19634;var map__19639__$1 = ((cljs.core.seq_QMARK_.call(null,map__19639))?cljs.core.apply.call(null,cljs.core.hash_map,map__19639):map__19639);var opts = map__19639__$1;var statearr_19640_19643 = state;(statearr_19640_19643[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__19639,map__19639__$1,opts){
return (function (val){var statearr_19641_19644 = state;(statearr_19641_19644[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19639,map__19639__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4388__auto__))
{var cb = temp__4388__auto__;var statearr_19642_19645 = state;(statearr_19642_19645[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19634 = null;if (arguments.length > 3) {
  p__19634 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19634);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19646){
var state = cljs.core.first(arglist__19646);
arglist__19646 = cljs.core.next(arglist__19646);
var cont_block = cljs.core.first(arglist__19646);
arglist__19646 = cljs.core.next(arglist__19646);
var ports = cljs.core.first(arglist__19646);
var p__19634 = cljs.core.rest(arglist__19646);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19634);
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
;var m = (function (){if(typeof cljs.core.async.t19766 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19766 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19767){
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
this.meta19767 = meta19767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19766.cljs$lang$type = true;
cljs.core.async.t19766.cljs$lang$ctorStr = "cljs.core.async/t19766";
cljs.core.async.t19766.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t19766");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19766.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19766.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19766.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19766.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19766.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19766.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19766.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19768){var self__ = this;
var _19768__$1 = this;return self__.meta19767;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19768,meta19767__$1){var self__ = this;
var _19768__$1 = this;return (new cljs.core.async.t19766(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19767__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19766 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19766(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19767){return (new cljs.core.async.t19766(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19767));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19766(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__14664__auto___19885 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___19885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___19885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19838){var state_val_19839 = (state_19838[(1)]);if((state_val_19839 === (7)))
{var inst_19782 = (state_19838[(7)]);var inst_19787 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19782);var state_19838__$1 = state_19838;var statearr_19840_19886 = state_19838__$1;(statearr_19840_19886[(2)] = inst_19787);
(statearr_19840_19886[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (20)))
{var inst_19797 = (state_19838[(8)]);var state_19838__$1 = state_19838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19838__$1,(23),out,inst_19797);
} else
{if((state_val_19839 === (1)))
{var inst_19772 = (state_19838[(9)]);var inst_19772__$1 = calc_state.call(null);var inst_19773 = cljs.core.seq_QMARK_.call(null,inst_19772__$1);var state_19838__$1 = (function (){var statearr_19841 = state_19838;(statearr_19841[(9)] = inst_19772__$1);
return statearr_19841;
})();if(inst_19773)
{var statearr_19842_19887 = state_19838__$1;(statearr_19842_19887[(1)] = (2));
} else
{var statearr_19843_19888 = state_19838__$1;(statearr_19843_19888[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (24)))
{var inst_19790 = (state_19838[(10)]);var inst_19782 = inst_19790;var state_19838__$1 = (function (){var statearr_19844 = state_19838;(statearr_19844[(7)] = inst_19782);
return statearr_19844;
})();var statearr_19845_19889 = state_19838__$1;(statearr_19845_19889[(2)] = null);
(statearr_19845_19889[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (4)))
{var inst_19772 = (state_19838[(9)]);var inst_19778 = (state_19838[(2)]);var inst_19779 = cljs.core.get.call(null,inst_19778,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19780 = cljs.core.get.call(null,inst_19778,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19781 = cljs.core.get.call(null,inst_19778,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_19782 = inst_19772;var state_19838__$1 = (function (){var statearr_19846 = state_19838;(statearr_19846[(11)] = inst_19779);
(statearr_19846[(12)] = inst_19780);
(statearr_19846[(13)] = inst_19781);
(statearr_19846[(7)] = inst_19782);
return statearr_19846;
})();var statearr_19847_19890 = state_19838__$1;(statearr_19847_19890[(2)] = null);
(statearr_19847_19890[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (15)))
{var state_19838__$1 = state_19838;var statearr_19848_19891 = state_19838__$1;(statearr_19848_19891[(2)] = null);
(statearr_19848_19891[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (21)))
{var inst_19790 = (state_19838[(10)]);var inst_19782 = inst_19790;var state_19838__$1 = (function (){var statearr_19849 = state_19838;(statearr_19849[(7)] = inst_19782);
return statearr_19849;
})();var statearr_19850_19892 = state_19838__$1;(statearr_19850_19892[(2)] = null);
(statearr_19850_19892[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (13)))
{var inst_19834 = (state_19838[(2)]);var state_19838__$1 = state_19838;var statearr_19851_19893 = state_19838__$1;(statearr_19851_19893[(2)] = inst_19834);
(statearr_19851_19893[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (22)))
{var inst_19832 = (state_19838[(2)]);var state_19838__$1 = state_19838;var statearr_19852_19894 = state_19838__$1;(statearr_19852_19894[(2)] = inst_19832);
(statearr_19852_19894[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (6)))
{var inst_19836 = (state_19838[(2)]);var state_19838__$1 = state_19838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19838__$1,inst_19836);
} else
{if((state_val_19839 === (25)))
{var state_19838__$1 = state_19838;var statearr_19853_19895 = state_19838__$1;(statearr_19853_19895[(2)] = null);
(statearr_19853_19895[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (17)))
{var inst_19812 = (state_19838[(14)]);var state_19838__$1 = state_19838;var statearr_19854_19896 = state_19838__$1;(statearr_19854_19896[(2)] = inst_19812);
(statearr_19854_19896[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (3)))
{var inst_19772 = (state_19838[(9)]);var state_19838__$1 = state_19838;var statearr_19855_19897 = state_19838__$1;(statearr_19855_19897[(2)] = inst_19772);
(statearr_19855_19897[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (12)))
{var inst_19793 = (state_19838[(15)]);var inst_19812 = (state_19838[(14)]);var inst_19798 = (state_19838[(16)]);var inst_19812__$1 = inst_19793.call(null,inst_19798);var state_19838__$1 = (function (){var statearr_19856 = state_19838;(statearr_19856[(14)] = inst_19812__$1);
return statearr_19856;
})();if(cljs.core.truth_(inst_19812__$1))
{var statearr_19857_19898 = state_19838__$1;(statearr_19857_19898[(1)] = (17));
} else
{var statearr_19858_19899 = state_19838__$1;(statearr_19858_19899[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (2)))
{var inst_19772 = (state_19838[(9)]);var inst_19775 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19772);var state_19838__$1 = state_19838;var statearr_19859_19900 = state_19838__$1;(statearr_19859_19900[(2)] = inst_19775);
(statearr_19859_19900[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (23)))
{var inst_19823 = (state_19838[(2)]);var state_19838__$1 = state_19838;if(cljs.core.truth_(inst_19823))
{var statearr_19860_19901 = state_19838__$1;(statearr_19860_19901[(1)] = (24));
} else
{var statearr_19861_19902 = state_19838__$1;(statearr_19861_19902[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (19)))
{var inst_19820 = (state_19838[(2)]);var state_19838__$1 = state_19838;if(cljs.core.truth_(inst_19820))
{var statearr_19862_19903 = state_19838__$1;(statearr_19862_19903[(1)] = (20));
} else
{var statearr_19863_19904 = state_19838__$1;(statearr_19863_19904[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (11)))
{var inst_19797 = (state_19838[(8)]);var inst_19803 = (inst_19797 == null);var state_19838__$1 = state_19838;if(cljs.core.truth_(inst_19803))
{var statearr_19864_19905 = state_19838__$1;(statearr_19864_19905[(1)] = (14));
} else
{var statearr_19865_19906 = state_19838__$1;(statearr_19865_19906[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (9)))
{var inst_19790 = (state_19838[(10)]);var inst_19790__$1 = (state_19838[(2)]);var inst_19791 = cljs.core.get.call(null,inst_19790__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19792 = cljs.core.get.call(null,inst_19790__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19793 = cljs.core.get.call(null,inst_19790__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_19838__$1 = (function (){var statearr_19866 = state_19838;(statearr_19866[(15)] = inst_19793);
(statearr_19866[(10)] = inst_19790__$1);
(statearr_19866[(17)] = inst_19792);
return statearr_19866;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_19838__$1,(10),inst_19791);
} else
{if((state_val_19839 === (5)))
{var inst_19782 = (state_19838[(7)]);var inst_19785 = cljs.core.seq_QMARK_.call(null,inst_19782);var state_19838__$1 = state_19838;if(inst_19785)
{var statearr_19867_19907 = state_19838__$1;(statearr_19867_19907[(1)] = (7));
} else
{var statearr_19868_19908 = state_19838__$1;(statearr_19868_19908[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (14)))
{var inst_19798 = (state_19838[(16)]);var inst_19805 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19798);var state_19838__$1 = state_19838;var statearr_19869_19909 = state_19838__$1;(statearr_19869_19909[(2)] = inst_19805);
(statearr_19869_19909[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (26)))
{var inst_19828 = (state_19838[(2)]);var state_19838__$1 = state_19838;var statearr_19870_19910 = state_19838__$1;(statearr_19870_19910[(2)] = inst_19828);
(statearr_19870_19910[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (16)))
{var inst_19808 = (state_19838[(2)]);var inst_19809 = calc_state.call(null);var inst_19782 = inst_19809;var state_19838__$1 = (function (){var statearr_19871 = state_19838;(statearr_19871[(7)] = inst_19782);
(statearr_19871[(18)] = inst_19808);
return statearr_19871;
})();var statearr_19872_19911 = state_19838__$1;(statearr_19872_19911[(2)] = null);
(statearr_19872_19911[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (10)))
{var inst_19797 = (state_19838[(8)]);var inst_19798 = (state_19838[(16)]);var inst_19796 = (state_19838[(2)]);var inst_19797__$1 = cljs.core.nth.call(null,inst_19796,(0),null);var inst_19798__$1 = cljs.core.nth.call(null,inst_19796,(1),null);var inst_19799 = (inst_19797__$1 == null);var inst_19800 = cljs.core._EQ_.call(null,inst_19798__$1,change);var inst_19801 = (inst_19799) || (inst_19800);var state_19838__$1 = (function (){var statearr_19873 = state_19838;(statearr_19873[(8)] = inst_19797__$1);
(statearr_19873[(16)] = inst_19798__$1);
return statearr_19873;
})();if(cljs.core.truth_(inst_19801))
{var statearr_19874_19912 = state_19838__$1;(statearr_19874_19912[(1)] = (11));
} else
{var statearr_19875_19913 = state_19838__$1;(statearr_19875_19913[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (18)))
{var inst_19793 = (state_19838[(15)]);var inst_19792 = (state_19838[(17)]);var inst_19798 = (state_19838[(16)]);var inst_19815 = cljs.core.empty_QMARK_.call(null,inst_19793);var inst_19816 = inst_19792.call(null,inst_19798);var inst_19817 = cljs.core.not.call(null,inst_19816);var inst_19818 = (inst_19815) && (inst_19817);var state_19838__$1 = state_19838;var statearr_19876_19914 = state_19838__$1;(statearr_19876_19914[(2)] = inst_19818);
(statearr_19876_19914[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19839 === (8)))
{var inst_19782 = (state_19838[(7)]);var state_19838__$1 = state_19838;var statearr_19877_19915 = state_19838__$1;(statearr_19877_19915[(2)] = inst_19782);
(statearr_19877_19915[(1)] = (9));
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
});})(c__14664__auto___19885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__14608__auto__,c__14664__auto___19885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_19881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19881[(0)] = state_machine__14609__auto__);
(statearr_19881[(1)] = (1));
return statearr_19881;
});
var state_machine__14609__auto____1 = (function (state_19838){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_19838);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e19882){if((e19882 instanceof Object))
{var ex__14612__auto__ = e19882;var statearr_19883_19916 = state_19838;(statearr_19883_19916[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19838);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19882;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19917 = state_19838;
state_19838 = G__19917;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_19838){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_19838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___19885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14666__auto__ = (function (){var statearr_19884 = f__14665__auto__.call(null);(statearr_19884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___19885);
return statearr_19884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___19885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj19919 = {};return obj19919;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
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
return (function (topic){var or__11495__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11495__auto__,mults){
return (function (p1__19920_SHARP_){if(cljs.core.truth_(p1__19920_SHARP_.call(null,topic)))
{return p1__19920_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19920_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11495__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20043 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20044){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20044 = meta20044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20043.cljs$lang$type = true;
cljs.core.async.t20043.cljs$lang$ctorStr = "cljs.core.async/t20043";
cljs.core.async.t20043.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20043");
});})(mults,ensure_mult))
;
cljs.core.async.t20043.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20043.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20043.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4388__auto__))
{var m = temp__4388__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20043.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20045){var self__ = this;
var _20045__$1 = this;return self__.meta20044;
});})(mults,ensure_mult))
;
cljs.core.async.t20043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20045,meta20044__$1){var self__ = this;
var _20045__$1 = this;return (new cljs.core.async.t20043(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20044__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20043 = ((function (mults,ensure_mult){
return (function __GT_t20043(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20044){return (new cljs.core.async.t20043(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20044));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20043(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14664__auto___20165 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___20165,mults,ensure_mult,p){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___20165,mults,ensure_mult,p){
return (function (state_20117){var state_val_20118 = (state_20117[(1)]);if((state_val_20118 === (7)))
{var inst_20113 = (state_20117[(2)]);var state_20117__$1 = state_20117;var statearr_20119_20166 = state_20117__$1;(statearr_20119_20166[(2)] = inst_20113);
(statearr_20119_20166[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (20)))
{var state_20117__$1 = state_20117;var statearr_20120_20167 = state_20117__$1;(statearr_20120_20167[(2)] = null);
(statearr_20120_20167[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (1)))
{var state_20117__$1 = state_20117;var statearr_20121_20168 = state_20117__$1;(statearr_20121_20168[(2)] = null);
(statearr_20121_20168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (24)))
{var inst_20096 = (state_20117[(7)]);var inst_20105 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20096);var state_20117__$1 = state_20117;var statearr_20122_20169 = state_20117__$1;(statearr_20122_20169[(2)] = inst_20105);
(statearr_20122_20169[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (4)))
{var inst_20048 = (state_20117[(8)]);var inst_20048__$1 = (state_20117[(2)]);var inst_20049 = (inst_20048__$1 == null);var state_20117__$1 = (function (){var statearr_20123 = state_20117;(statearr_20123[(8)] = inst_20048__$1);
return statearr_20123;
})();if(cljs.core.truth_(inst_20049))
{var statearr_20124_20170 = state_20117__$1;(statearr_20124_20170[(1)] = (5));
} else
{var statearr_20125_20171 = state_20117__$1;(statearr_20125_20171[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (15)))
{var inst_20090 = (state_20117[(2)]);var state_20117__$1 = state_20117;var statearr_20126_20172 = state_20117__$1;(statearr_20126_20172[(2)] = inst_20090);
(statearr_20126_20172[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (21)))
{var inst_20110 = (state_20117[(2)]);var state_20117__$1 = (function (){var statearr_20127 = state_20117;(statearr_20127[(9)] = inst_20110);
return statearr_20127;
})();var statearr_20128_20173 = state_20117__$1;(statearr_20128_20173[(2)] = null);
(statearr_20128_20173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (13)))
{var inst_20072 = (state_20117[(10)]);var inst_20074 = cljs.core.chunked_seq_QMARK_.call(null,inst_20072);var state_20117__$1 = state_20117;if(inst_20074)
{var statearr_20129_20174 = state_20117__$1;(statearr_20129_20174[(1)] = (16));
} else
{var statearr_20130_20175 = state_20117__$1;(statearr_20130_20175[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (22)))
{var inst_20102 = (state_20117[(2)]);var state_20117__$1 = state_20117;if(cljs.core.truth_(inst_20102))
{var statearr_20131_20176 = state_20117__$1;(statearr_20131_20176[(1)] = (23));
} else
{var statearr_20132_20177 = state_20117__$1;(statearr_20132_20177[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (6)))
{var inst_20048 = (state_20117[(8)]);var inst_20096 = (state_20117[(7)]);var inst_20098 = (state_20117[(11)]);var inst_20096__$1 = topic_fn.call(null,inst_20048);var inst_20097 = cljs.core.deref.call(null,mults);var inst_20098__$1 = cljs.core.get.call(null,inst_20097,inst_20096__$1);var state_20117__$1 = (function (){var statearr_20133 = state_20117;(statearr_20133[(7)] = inst_20096__$1);
(statearr_20133[(11)] = inst_20098__$1);
return statearr_20133;
})();if(cljs.core.truth_(inst_20098__$1))
{var statearr_20134_20178 = state_20117__$1;(statearr_20134_20178[(1)] = (19));
} else
{var statearr_20135_20179 = state_20117__$1;(statearr_20135_20179[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (25)))
{var inst_20107 = (state_20117[(2)]);var state_20117__$1 = state_20117;var statearr_20136_20180 = state_20117__$1;(statearr_20136_20180[(2)] = inst_20107);
(statearr_20136_20180[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (17)))
{var inst_20072 = (state_20117[(10)]);var inst_20081 = cljs.core.first.call(null,inst_20072);var inst_20082 = cljs.core.async.muxch_STAR_.call(null,inst_20081);var inst_20083 = cljs.core.async.close_BANG_.call(null,inst_20082);var inst_20084 = cljs.core.next.call(null,inst_20072);var inst_20058 = inst_20084;var inst_20059 = null;var inst_20060 = (0);var inst_20061 = (0);var state_20117__$1 = (function (){var statearr_20137 = state_20117;(statearr_20137[(12)] = inst_20083);
(statearr_20137[(13)] = inst_20058);
(statearr_20137[(14)] = inst_20060);
(statearr_20137[(15)] = inst_20061);
(statearr_20137[(16)] = inst_20059);
return statearr_20137;
})();var statearr_20138_20181 = state_20117__$1;(statearr_20138_20181[(2)] = null);
(statearr_20138_20181[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (3)))
{var inst_20115 = (state_20117[(2)]);var state_20117__$1 = state_20117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20117__$1,inst_20115);
} else
{if((state_val_20118 === (12)))
{var inst_20092 = (state_20117[(2)]);var state_20117__$1 = state_20117;var statearr_20139_20182 = state_20117__$1;(statearr_20139_20182[(2)] = inst_20092);
(statearr_20139_20182[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (2)))
{var state_20117__$1 = state_20117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20117__$1,(4),ch);
} else
{if((state_val_20118 === (23)))
{var state_20117__$1 = state_20117;var statearr_20140_20183 = state_20117__$1;(statearr_20140_20183[(2)] = null);
(statearr_20140_20183[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (19)))
{var inst_20048 = (state_20117[(8)]);var inst_20098 = (state_20117[(11)]);var inst_20100 = cljs.core.async.muxch_STAR_.call(null,inst_20098);var state_20117__$1 = state_20117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20117__$1,(22),inst_20100,inst_20048);
} else
{if((state_val_20118 === (11)))
{var inst_20072 = (state_20117[(10)]);var inst_20058 = (state_20117[(13)]);var inst_20072__$1 = cljs.core.seq.call(null,inst_20058);var state_20117__$1 = (function (){var statearr_20141 = state_20117;(statearr_20141[(10)] = inst_20072__$1);
return statearr_20141;
})();if(inst_20072__$1)
{var statearr_20142_20184 = state_20117__$1;(statearr_20142_20184[(1)] = (13));
} else
{var statearr_20143_20185 = state_20117__$1;(statearr_20143_20185[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (9)))
{var inst_20094 = (state_20117[(2)]);var state_20117__$1 = state_20117;var statearr_20144_20186 = state_20117__$1;(statearr_20144_20186[(2)] = inst_20094);
(statearr_20144_20186[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (5)))
{var inst_20055 = cljs.core.deref.call(null,mults);var inst_20056 = cljs.core.vals.call(null,inst_20055);var inst_20057 = cljs.core.seq.call(null,inst_20056);var inst_20058 = inst_20057;var inst_20059 = null;var inst_20060 = (0);var inst_20061 = (0);var state_20117__$1 = (function (){var statearr_20145 = state_20117;(statearr_20145[(13)] = inst_20058);
(statearr_20145[(14)] = inst_20060);
(statearr_20145[(15)] = inst_20061);
(statearr_20145[(16)] = inst_20059);
return statearr_20145;
})();var statearr_20146_20187 = state_20117__$1;(statearr_20146_20187[(2)] = null);
(statearr_20146_20187[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (14)))
{var state_20117__$1 = state_20117;var statearr_20150_20188 = state_20117__$1;(statearr_20150_20188[(2)] = null);
(statearr_20150_20188[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (16)))
{var inst_20072 = (state_20117[(10)]);var inst_20076 = cljs.core.chunk_first.call(null,inst_20072);var inst_20077 = cljs.core.chunk_rest.call(null,inst_20072);var inst_20078 = cljs.core.count.call(null,inst_20076);var inst_20058 = inst_20077;var inst_20059 = inst_20076;var inst_20060 = inst_20078;var inst_20061 = (0);var state_20117__$1 = (function (){var statearr_20151 = state_20117;(statearr_20151[(13)] = inst_20058);
(statearr_20151[(14)] = inst_20060);
(statearr_20151[(15)] = inst_20061);
(statearr_20151[(16)] = inst_20059);
return statearr_20151;
})();var statearr_20152_20189 = state_20117__$1;(statearr_20152_20189[(2)] = null);
(statearr_20152_20189[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (10)))
{var inst_20058 = (state_20117[(13)]);var inst_20060 = (state_20117[(14)]);var inst_20061 = (state_20117[(15)]);var inst_20059 = (state_20117[(16)]);var inst_20066 = cljs.core._nth.call(null,inst_20059,inst_20061);var inst_20067 = cljs.core.async.muxch_STAR_.call(null,inst_20066);var inst_20068 = cljs.core.async.close_BANG_.call(null,inst_20067);var inst_20069 = (inst_20061 + (1));var tmp20147 = inst_20058;var tmp20148 = inst_20060;var tmp20149 = inst_20059;var inst_20058__$1 = tmp20147;var inst_20059__$1 = tmp20149;var inst_20060__$1 = tmp20148;var inst_20061__$1 = inst_20069;var state_20117__$1 = (function (){var statearr_20153 = state_20117;(statearr_20153[(13)] = inst_20058__$1);
(statearr_20153[(14)] = inst_20060__$1);
(statearr_20153[(17)] = inst_20068);
(statearr_20153[(15)] = inst_20061__$1);
(statearr_20153[(16)] = inst_20059__$1);
return statearr_20153;
})();var statearr_20154_20190 = state_20117__$1;(statearr_20154_20190[(2)] = null);
(statearr_20154_20190[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (18)))
{var inst_20087 = (state_20117[(2)]);var state_20117__$1 = state_20117;var statearr_20155_20191 = state_20117__$1;(statearr_20155_20191[(2)] = inst_20087);
(statearr_20155_20191[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20118 === (8)))
{var inst_20060 = (state_20117[(14)]);var inst_20061 = (state_20117[(15)]);var inst_20063 = (inst_20061 < inst_20060);var inst_20064 = inst_20063;var state_20117__$1 = state_20117;if(cljs.core.truth_(inst_20064))
{var statearr_20156_20192 = state_20117__$1;(statearr_20156_20192[(1)] = (10));
} else
{var statearr_20157_20193 = state_20117__$1;(statearr_20157_20193[(1)] = (11));
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
});})(c__14664__auto___20165,mults,ensure_mult,p))
;return ((function (switch__14608__auto__,c__14664__auto___20165,mults,ensure_mult,p){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_20161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20161[(0)] = state_machine__14609__auto__);
(statearr_20161[(1)] = (1));
return statearr_20161;
});
var state_machine__14609__auto____1 = (function (state_20117){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_20117);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e20162){if((e20162 instanceof Object))
{var ex__14612__auto__ = e20162;var statearr_20163_20194 = state_20117;(statearr_20163_20194[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20117);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20162;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20195 = state_20117;
state_20117 = G__20195;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_20117){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_20117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___20165,mults,ensure_mult,p))
})();var state__14666__auto__ = (function (){var statearr_20164 = f__14665__auto__.call(null);(statearr_20164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___20165);
return statearr_20164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___20165,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__14664__auto___20332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___20332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___20332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20302){var state_val_20303 = (state_20302[(1)]);if((state_val_20303 === (7)))
{var state_20302__$1 = state_20302;var statearr_20304_20333 = state_20302__$1;(statearr_20304_20333[(2)] = null);
(statearr_20304_20333[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (1)))
{var state_20302__$1 = state_20302;var statearr_20305_20334 = state_20302__$1;(statearr_20305_20334[(2)] = null);
(statearr_20305_20334[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (4)))
{var inst_20266 = (state_20302[(7)]);var inst_20268 = (inst_20266 < cnt);var state_20302__$1 = state_20302;if(cljs.core.truth_(inst_20268))
{var statearr_20306_20335 = state_20302__$1;(statearr_20306_20335[(1)] = (6));
} else
{var statearr_20307_20336 = state_20302__$1;(statearr_20307_20336[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (15)))
{var inst_20298 = (state_20302[(2)]);var state_20302__$1 = state_20302;var statearr_20308_20337 = state_20302__$1;(statearr_20308_20337[(2)] = inst_20298);
(statearr_20308_20337[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (13)))
{var inst_20291 = cljs.core.async.close_BANG_.call(null,out);var state_20302__$1 = state_20302;var statearr_20309_20338 = state_20302__$1;(statearr_20309_20338[(2)] = inst_20291);
(statearr_20309_20338[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (6)))
{var state_20302__$1 = state_20302;var statearr_20310_20339 = state_20302__$1;(statearr_20310_20339[(2)] = null);
(statearr_20310_20339[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (3)))
{var inst_20300 = (state_20302[(2)]);var state_20302__$1 = state_20302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20302__$1,inst_20300);
} else
{if((state_val_20303 === (12)))
{var inst_20288 = (state_20302[(8)]);var inst_20288__$1 = (state_20302[(2)]);var inst_20289 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20288__$1);var state_20302__$1 = (function (){var statearr_20311 = state_20302;(statearr_20311[(8)] = inst_20288__$1);
return statearr_20311;
})();if(cljs.core.truth_(inst_20289))
{var statearr_20312_20340 = state_20302__$1;(statearr_20312_20340[(1)] = (13));
} else
{var statearr_20313_20341 = state_20302__$1;(statearr_20313_20341[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (2)))
{var inst_20265 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20266 = (0);var state_20302__$1 = (function (){var statearr_20314 = state_20302;(statearr_20314[(9)] = inst_20265);
(statearr_20314[(7)] = inst_20266);
return statearr_20314;
})();var statearr_20315_20342 = state_20302__$1;(statearr_20315_20342[(2)] = null);
(statearr_20315_20342[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (11)))
{var inst_20266 = (state_20302[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20302,(10),Object,null,(9));var inst_20275 = chs__$1.call(null,inst_20266);var inst_20276 = done.call(null,inst_20266);var inst_20277 = cljs.core.async.take_BANG_.call(null,inst_20275,inst_20276);var state_20302__$1 = state_20302;var statearr_20316_20343 = state_20302__$1;(statearr_20316_20343[(2)] = inst_20277);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20302__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (9)))
{var inst_20266 = (state_20302[(7)]);var inst_20279 = (state_20302[(2)]);var inst_20280 = (inst_20266 + (1));var inst_20266__$1 = inst_20280;var state_20302__$1 = (function (){var statearr_20317 = state_20302;(statearr_20317[(10)] = inst_20279);
(statearr_20317[(7)] = inst_20266__$1);
return statearr_20317;
})();var statearr_20318_20344 = state_20302__$1;(statearr_20318_20344[(2)] = null);
(statearr_20318_20344[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (5)))
{var inst_20286 = (state_20302[(2)]);var state_20302__$1 = (function (){var statearr_20319 = state_20302;(statearr_20319[(11)] = inst_20286);
return statearr_20319;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20302__$1,(12),dchan);
} else
{if((state_val_20303 === (14)))
{var inst_20288 = (state_20302[(8)]);var inst_20293 = cljs.core.apply.call(null,f,inst_20288);var state_20302__$1 = state_20302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20302__$1,(16),out,inst_20293);
} else
{if((state_val_20303 === (16)))
{var inst_20295 = (state_20302[(2)]);var state_20302__$1 = (function (){var statearr_20320 = state_20302;(statearr_20320[(12)] = inst_20295);
return statearr_20320;
})();var statearr_20321_20345 = state_20302__$1;(statearr_20321_20345[(2)] = null);
(statearr_20321_20345[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (10)))
{var inst_20270 = (state_20302[(2)]);var inst_20271 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20302__$1 = (function (){var statearr_20322 = state_20302;(statearr_20322[(13)] = inst_20270);
return statearr_20322;
})();var statearr_20323_20346 = state_20302__$1;(statearr_20323_20346[(2)] = inst_20271);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20302__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20303 === (8)))
{var inst_20284 = (state_20302[(2)]);var state_20302__$1 = state_20302;var statearr_20324_20347 = state_20302__$1;(statearr_20324_20347[(2)] = inst_20284);
(statearr_20324_20347[(1)] = (5));
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
});})(c__14664__auto___20332,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__14608__auto__,c__14664__auto___20332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_20328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20328[(0)] = state_machine__14609__auto__);
(statearr_20328[(1)] = (1));
return statearr_20328;
});
var state_machine__14609__auto____1 = (function (state_20302){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_20302);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e20329){if((e20329 instanceof Object))
{var ex__14612__auto__ = e20329;var statearr_20330_20348 = state_20302;(statearr_20330_20348[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20302);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20329;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20349 = state_20302;
state_20302 = G__20349;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_20302){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_20302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___20332,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14666__auto__ = (function (){var statearr_20331 = f__14665__auto__.call(null);(statearr_20331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___20332);
return statearr_20331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___20332,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14664__auto___20457 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___20457,out){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___20457,out){
return (function (state_20433){var state_val_20434 = (state_20433[(1)]);if((state_val_20434 === (7)))
{var inst_20412 = (state_20433[(7)]);var inst_20413 = (state_20433[(8)]);var inst_20412__$1 = (state_20433[(2)]);var inst_20413__$1 = cljs.core.nth.call(null,inst_20412__$1,(0),null);var inst_20414 = cljs.core.nth.call(null,inst_20412__$1,(1),null);var inst_20415 = (inst_20413__$1 == null);var state_20433__$1 = (function (){var statearr_20435 = state_20433;(statearr_20435[(9)] = inst_20414);
(statearr_20435[(7)] = inst_20412__$1);
(statearr_20435[(8)] = inst_20413__$1);
return statearr_20435;
})();if(cljs.core.truth_(inst_20415))
{var statearr_20436_20458 = state_20433__$1;(statearr_20436_20458[(1)] = (8));
} else
{var statearr_20437_20459 = state_20433__$1;(statearr_20437_20459[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20434 === (1)))
{var inst_20404 = cljs.core.vec.call(null,chs);var inst_20405 = inst_20404;var state_20433__$1 = (function (){var statearr_20438 = state_20433;(statearr_20438[(10)] = inst_20405);
return statearr_20438;
})();var statearr_20439_20460 = state_20433__$1;(statearr_20439_20460[(2)] = null);
(statearr_20439_20460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20434 === (4)))
{var inst_20405 = (state_20433[(10)]);var state_20433__$1 = state_20433;return cljs.core.async.ioc_alts_BANG_.call(null,state_20433__$1,(7),inst_20405);
} else
{if((state_val_20434 === (6)))
{var inst_20429 = (state_20433[(2)]);var state_20433__$1 = state_20433;var statearr_20440_20461 = state_20433__$1;(statearr_20440_20461[(2)] = inst_20429);
(statearr_20440_20461[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20434 === (3)))
{var inst_20431 = (state_20433[(2)]);var state_20433__$1 = state_20433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20433__$1,inst_20431);
} else
{if((state_val_20434 === (2)))
{var inst_20405 = (state_20433[(10)]);var inst_20407 = cljs.core.count.call(null,inst_20405);var inst_20408 = (inst_20407 > (0));var state_20433__$1 = state_20433;if(cljs.core.truth_(inst_20408))
{var statearr_20442_20462 = state_20433__$1;(statearr_20442_20462[(1)] = (4));
} else
{var statearr_20443_20463 = state_20433__$1;(statearr_20443_20463[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20434 === (11)))
{var inst_20405 = (state_20433[(10)]);var inst_20422 = (state_20433[(2)]);var tmp20441 = inst_20405;var inst_20405__$1 = tmp20441;var state_20433__$1 = (function (){var statearr_20444 = state_20433;(statearr_20444[(11)] = inst_20422);
(statearr_20444[(10)] = inst_20405__$1);
return statearr_20444;
})();var statearr_20445_20464 = state_20433__$1;(statearr_20445_20464[(2)] = null);
(statearr_20445_20464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20434 === (9)))
{var inst_20413 = (state_20433[(8)]);var state_20433__$1 = state_20433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20433__$1,(11),out,inst_20413);
} else
{if((state_val_20434 === (5)))
{var inst_20427 = cljs.core.async.close_BANG_.call(null,out);var state_20433__$1 = state_20433;var statearr_20446_20465 = state_20433__$1;(statearr_20446_20465[(2)] = inst_20427);
(statearr_20446_20465[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20434 === (10)))
{var inst_20425 = (state_20433[(2)]);var state_20433__$1 = state_20433;var statearr_20447_20466 = state_20433__$1;(statearr_20447_20466[(2)] = inst_20425);
(statearr_20447_20466[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20434 === (8)))
{var inst_20414 = (state_20433[(9)]);var inst_20412 = (state_20433[(7)]);var inst_20405 = (state_20433[(10)]);var inst_20413 = (state_20433[(8)]);var inst_20417 = (function (){var c = inst_20414;var v = inst_20413;var vec__20410 = inst_20412;var cs = inst_20405;return ((function (c,v,vec__20410,cs,inst_20414,inst_20412,inst_20405,inst_20413,state_val_20434,c__14664__auto___20457,out){
return (function (p1__20350_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20350_SHARP_);
});
;})(c,v,vec__20410,cs,inst_20414,inst_20412,inst_20405,inst_20413,state_val_20434,c__14664__auto___20457,out))
})();var inst_20418 = cljs.core.filterv.call(null,inst_20417,inst_20405);var inst_20405__$1 = inst_20418;var state_20433__$1 = (function (){var statearr_20448 = state_20433;(statearr_20448[(10)] = inst_20405__$1);
return statearr_20448;
})();var statearr_20449_20467 = state_20433__$1;(statearr_20449_20467[(2)] = null);
(statearr_20449_20467[(1)] = (2));
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
});})(c__14664__auto___20457,out))
;return ((function (switch__14608__auto__,c__14664__auto___20457,out){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_20453 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20453[(0)] = state_machine__14609__auto__);
(statearr_20453[(1)] = (1));
return statearr_20453;
});
var state_machine__14609__auto____1 = (function (state_20433){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_20433);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e20454){if((e20454 instanceof Object))
{var ex__14612__auto__ = e20454;var statearr_20455_20468 = state_20433;(statearr_20455_20468[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20454;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20469 = state_20433;
state_20433 = G__20469;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_20433){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_20433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___20457,out))
})();var state__14666__auto__ = (function (){var statearr_20456 = f__14665__auto__.call(null);(statearr_20456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___20457);
return statearr_20456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___20457,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14664__auto___20562 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___20562,out){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___20562,out){
return (function (state_20539){var state_val_20540 = (state_20539[(1)]);if((state_val_20540 === (7)))
{var inst_20521 = (state_20539[(7)]);var inst_20521__$1 = (state_20539[(2)]);var inst_20522 = (inst_20521__$1 == null);var inst_20523 = cljs.core.not.call(null,inst_20522);var state_20539__$1 = (function (){var statearr_20541 = state_20539;(statearr_20541[(7)] = inst_20521__$1);
return statearr_20541;
})();if(inst_20523)
{var statearr_20542_20563 = state_20539__$1;(statearr_20542_20563[(1)] = (8));
} else
{var statearr_20543_20564 = state_20539__$1;(statearr_20543_20564[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20540 === (1)))
{var inst_20516 = (0);var state_20539__$1 = (function (){var statearr_20544 = state_20539;(statearr_20544[(8)] = inst_20516);
return statearr_20544;
})();var statearr_20545_20565 = state_20539__$1;(statearr_20545_20565[(2)] = null);
(statearr_20545_20565[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20540 === (4)))
{var state_20539__$1 = state_20539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20539__$1,(7),ch);
} else
{if((state_val_20540 === (6)))
{var inst_20534 = (state_20539[(2)]);var state_20539__$1 = state_20539;var statearr_20546_20566 = state_20539__$1;(statearr_20546_20566[(2)] = inst_20534);
(statearr_20546_20566[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20540 === (3)))
{var inst_20536 = (state_20539[(2)]);var inst_20537 = cljs.core.async.close_BANG_.call(null,out);var state_20539__$1 = (function (){var statearr_20547 = state_20539;(statearr_20547[(9)] = inst_20536);
return statearr_20547;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20539__$1,inst_20537);
} else
{if((state_val_20540 === (2)))
{var inst_20516 = (state_20539[(8)]);var inst_20518 = (inst_20516 < n);var state_20539__$1 = state_20539;if(cljs.core.truth_(inst_20518))
{var statearr_20548_20567 = state_20539__$1;(statearr_20548_20567[(1)] = (4));
} else
{var statearr_20549_20568 = state_20539__$1;(statearr_20549_20568[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20540 === (11)))
{var inst_20516 = (state_20539[(8)]);var inst_20526 = (state_20539[(2)]);var inst_20527 = (inst_20516 + (1));var inst_20516__$1 = inst_20527;var state_20539__$1 = (function (){var statearr_20550 = state_20539;(statearr_20550[(10)] = inst_20526);
(statearr_20550[(8)] = inst_20516__$1);
return statearr_20550;
})();var statearr_20551_20569 = state_20539__$1;(statearr_20551_20569[(2)] = null);
(statearr_20551_20569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20540 === (9)))
{var state_20539__$1 = state_20539;var statearr_20552_20570 = state_20539__$1;(statearr_20552_20570[(2)] = null);
(statearr_20552_20570[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20540 === (5)))
{var state_20539__$1 = state_20539;var statearr_20553_20571 = state_20539__$1;(statearr_20553_20571[(2)] = null);
(statearr_20553_20571[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20540 === (10)))
{var inst_20531 = (state_20539[(2)]);var state_20539__$1 = state_20539;var statearr_20554_20572 = state_20539__$1;(statearr_20554_20572[(2)] = inst_20531);
(statearr_20554_20572[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20540 === (8)))
{var inst_20521 = (state_20539[(7)]);var state_20539__$1 = state_20539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20539__$1,(11),out,inst_20521);
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
});})(c__14664__auto___20562,out))
;return ((function (switch__14608__auto__,c__14664__auto___20562,out){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_20558 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20558[(0)] = state_machine__14609__auto__);
(statearr_20558[(1)] = (1));
return statearr_20558;
});
var state_machine__14609__auto____1 = (function (state_20539){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_20539);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e20559){if((e20559 instanceof Object))
{var ex__14612__auto__ = e20559;var statearr_20560_20573 = state_20539;(statearr_20560_20573[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20559;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20574 = state_20539;
state_20539 = G__20574;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_20539){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_20539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___20562,out))
})();var state__14666__auto__ = (function (){var statearr_20561 = f__14665__auto__.call(null);(statearr_20561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___20562);
return statearr_20561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___20562,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20582 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20582 = (function (ch,f,map_LT_,meta20583){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20583 = meta20583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20582.cljs$lang$type = true;
cljs.core.async.t20582.cljs$lang$ctorStr = "cljs.core.async/t20582";
cljs.core.async.t20582.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20582");
});
cljs.core.async.t20582.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t20582.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t20585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20585 = (function (fn1,_,meta20583,ch,f,map_LT_,meta20586){
this.fn1 = fn1;
this._ = _;
this.meta20583 = meta20583;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20586 = meta20586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20585.cljs$lang$type = true;
cljs.core.async.t20585.cljs$lang$ctorStr = "cljs.core.async/t20585";
cljs.core.async.t20585.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20585");
});})(___$1))
;
cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__20575_SHARP_){return f1.call(null,(((p1__20575_SHARP_ == null))?null:self__.f.call(null,p1__20575_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t20585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20587){var self__ = this;
var _20587__$1 = this;return self__.meta20586;
});})(___$1))
;
cljs.core.async.t20585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20587,meta20586__$1){var self__ = this;
var _20587__$1 = this;return (new cljs.core.async.t20585(self__.fn1,self__._,self__.meta20583,self__.ch,self__.f,self__.map_LT_,meta20586__$1));
});})(___$1))
;
cljs.core.async.__GT_t20585 = ((function (___$1){
return (function __GT_t20585(fn1__$1,___$2,meta20583__$1,ch__$2,f__$2,map_LT___$2,meta20586){return (new cljs.core.async.t20585(fn1__$1,___$2,meta20583__$1,ch__$2,f__$2,map_LT___$2,meta20586));
});})(___$1))
;
}
return (new cljs.core.async.t20585(fn1,___$1,self__.meta20583,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11483__auto__ = ret;if(cljs.core.truth_(and__11483__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11483__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t20582.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20582.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t20582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20584){var self__ = this;
var _20584__$1 = this;return self__.meta20583;
});
cljs.core.async.t20582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20584,meta20583__$1){var self__ = this;
var _20584__$1 = this;return (new cljs.core.async.t20582(self__.ch,self__.f,self__.map_LT_,meta20583__$1));
});
cljs.core.async.__GT_t20582 = (function __GT_t20582(ch__$1,f__$1,map_LT___$1,meta20583){return (new cljs.core.async.t20582(ch__$1,f__$1,map_LT___$1,meta20583));
});
}
return (new cljs.core.async.t20582(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20591 = (function (ch,f,map_GT_,meta20592){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20592 = meta20592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20591.cljs$lang$type = true;
cljs.core.async.t20591.cljs$lang$ctorStr = "cljs.core.async/t20591";
cljs.core.async.t20591.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20591");
});
cljs.core.async.t20591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t20591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20591.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20593){var self__ = this;
var _20593__$1 = this;return self__.meta20592;
});
cljs.core.async.t20591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20593,meta20592__$1){var self__ = this;
var _20593__$1 = this;return (new cljs.core.async.t20591(self__.ch,self__.f,self__.map_GT_,meta20592__$1));
});
cljs.core.async.__GT_t20591 = (function __GT_t20591(ch__$1,f__$1,map_GT___$1,meta20592){return (new cljs.core.async.t20591(ch__$1,f__$1,map_GT___$1,meta20592));
});
}
return (new cljs.core.async.t20591(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20597 = (function (ch,p,filter_GT_,meta20598){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20598 = meta20598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20597.cljs$lang$type = true;
cljs.core.async.t20597.cljs$lang$ctorStr = "cljs.core.async/t20597";
cljs.core.async.t20597.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20597");
});
cljs.core.async.t20597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t20597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20597.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20597.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t20597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20599){var self__ = this;
var _20599__$1 = this;return self__.meta20598;
});
cljs.core.async.t20597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20599,meta20598__$1){var self__ = this;
var _20599__$1 = this;return (new cljs.core.async.t20597(self__.ch,self__.p,self__.filter_GT_,meta20598__$1));
});
cljs.core.async.__GT_t20597 = (function __GT_t20597(ch__$1,p__$1,filter_GT___$1,meta20598){return (new cljs.core.async.t20597(ch__$1,p__$1,filter_GT___$1,meta20598));
});
}
return (new cljs.core.async.t20597(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14664__auto___20682 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___20682,out){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___20682,out){
return (function (state_20661){var state_val_20662 = (state_20661[(1)]);if((state_val_20662 === (7)))
{var inst_20657 = (state_20661[(2)]);var state_20661__$1 = state_20661;var statearr_20663_20683 = state_20661__$1;(statearr_20663_20683[(2)] = inst_20657);
(statearr_20663_20683[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20662 === (1)))
{var state_20661__$1 = state_20661;var statearr_20664_20684 = state_20661__$1;(statearr_20664_20684[(2)] = null);
(statearr_20664_20684[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20662 === (4)))
{var inst_20643 = (state_20661[(7)]);var inst_20643__$1 = (state_20661[(2)]);var inst_20644 = (inst_20643__$1 == null);var state_20661__$1 = (function (){var statearr_20665 = state_20661;(statearr_20665[(7)] = inst_20643__$1);
return statearr_20665;
})();if(cljs.core.truth_(inst_20644))
{var statearr_20666_20685 = state_20661__$1;(statearr_20666_20685[(1)] = (5));
} else
{var statearr_20667_20686 = state_20661__$1;(statearr_20667_20686[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20662 === (6)))
{var inst_20643 = (state_20661[(7)]);var inst_20648 = p.call(null,inst_20643);var state_20661__$1 = state_20661;if(cljs.core.truth_(inst_20648))
{var statearr_20668_20687 = state_20661__$1;(statearr_20668_20687[(1)] = (8));
} else
{var statearr_20669_20688 = state_20661__$1;(statearr_20669_20688[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20662 === (3)))
{var inst_20659 = (state_20661[(2)]);var state_20661__$1 = state_20661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20661__$1,inst_20659);
} else
{if((state_val_20662 === (2)))
{var state_20661__$1 = state_20661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20661__$1,(4),ch);
} else
{if((state_val_20662 === (11)))
{var inst_20651 = (state_20661[(2)]);var state_20661__$1 = state_20661;var statearr_20670_20689 = state_20661__$1;(statearr_20670_20689[(2)] = inst_20651);
(statearr_20670_20689[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20662 === (9)))
{var state_20661__$1 = state_20661;var statearr_20671_20690 = state_20661__$1;(statearr_20671_20690[(2)] = null);
(statearr_20671_20690[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20662 === (5)))
{var inst_20646 = cljs.core.async.close_BANG_.call(null,out);var state_20661__$1 = state_20661;var statearr_20672_20691 = state_20661__$1;(statearr_20672_20691[(2)] = inst_20646);
(statearr_20672_20691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20662 === (10)))
{var inst_20654 = (state_20661[(2)]);var state_20661__$1 = (function (){var statearr_20673 = state_20661;(statearr_20673[(8)] = inst_20654);
return statearr_20673;
})();var statearr_20674_20692 = state_20661__$1;(statearr_20674_20692[(2)] = null);
(statearr_20674_20692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20662 === (8)))
{var inst_20643 = (state_20661[(7)]);var state_20661__$1 = state_20661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20661__$1,(11),out,inst_20643);
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
});})(c__14664__auto___20682,out))
;return ((function (switch__14608__auto__,c__14664__auto___20682,out){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_20678 = [null,null,null,null,null,null,null,null,null];(statearr_20678[(0)] = state_machine__14609__auto__);
(statearr_20678[(1)] = (1));
return statearr_20678;
});
var state_machine__14609__auto____1 = (function (state_20661){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_20661);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e20679){if((e20679 instanceof Object))
{var ex__14612__auto__ = e20679;var statearr_20680_20693 = state_20661;(statearr_20680_20693[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20679;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20694 = state_20661;
state_20661 = G__20694;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_20661){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_20661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___20682,out))
})();var state__14666__auto__ = (function (){var statearr_20681 = f__14665__auto__.call(null);(statearr_20681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___20682);
return statearr_20681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___20682,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14664__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto__){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto__){
return (function (state_20860){var state_val_20861 = (state_20860[(1)]);if((state_val_20861 === (7)))
{var inst_20856 = (state_20860[(2)]);var state_20860__$1 = state_20860;var statearr_20862_20903 = state_20860__$1;(statearr_20862_20903[(2)] = inst_20856);
(statearr_20862_20903[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (20)))
{var inst_20826 = (state_20860[(7)]);var inst_20837 = (state_20860[(2)]);var inst_20838 = cljs.core.next.call(null,inst_20826);var inst_20812 = inst_20838;var inst_20813 = null;var inst_20814 = (0);var inst_20815 = (0);var state_20860__$1 = (function (){var statearr_20863 = state_20860;(statearr_20863[(8)] = inst_20813);
(statearr_20863[(9)] = inst_20837);
(statearr_20863[(10)] = inst_20815);
(statearr_20863[(11)] = inst_20814);
(statearr_20863[(12)] = inst_20812);
return statearr_20863;
})();var statearr_20864_20904 = state_20860__$1;(statearr_20864_20904[(2)] = null);
(statearr_20864_20904[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (1)))
{var state_20860__$1 = state_20860;var statearr_20865_20905 = state_20860__$1;(statearr_20865_20905[(2)] = null);
(statearr_20865_20905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (4)))
{var inst_20801 = (state_20860[(13)]);var inst_20801__$1 = (state_20860[(2)]);var inst_20802 = (inst_20801__$1 == null);var state_20860__$1 = (function (){var statearr_20866 = state_20860;(statearr_20866[(13)] = inst_20801__$1);
return statearr_20866;
})();if(cljs.core.truth_(inst_20802))
{var statearr_20867_20906 = state_20860__$1;(statearr_20867_20906[(1)] = (5));
} else
{var statearr_20868_20907 = state_20860__$1;(statearr_20868_20907[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (15)))
{var state_20860__$1 = state_20860;var statearr_20872_20908 = state_20860__$1;(statearr_20872_20908[(2)] = null);
(statearr_20872_20908[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (21)))
{var state_20860__$1 = state_20860;var statearr_20873_20909 = state_20860__$1;(statearr_20873_20909[(2)] = null);
(statearr_20873_20909[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (13)))
{var inst_20813 = (state_20860[(8)]);var inst_20815 = (state_20860[(10)]);var inst_20814 = (state_20860[(11)]);var inst_20812 = (state_20860[(12)]);var inst_20822 = (state_20860[(2)]);var inst_20823 = (inst_20815 + (1));var tmp20869 = inst_20813;var tmp20870 = inst_20814;var tmp20871 = inst_20812;var inst_20812__$1 = tmp20871;var inst_20813__$1 = tmp20869;var inst_20814__$1 = tmp20870;var inst_20815__$1 = inst_20823;var state_20860__$1 = (function (){var statearr_20874 = state_20860;(statearr_20874[(14)] = inst_20822);
(statearr_20874[(8)] = inst_20813__$1);
(statearr_20874[(10)] = inst_20815__$1);
(statearr_20874[(11)] = inst_20814__$1);
(statearr_20874[(12)] = inst_20812__$1);
return statearr_20874;
})();var statearr_20875_20910 = state_20860__$1;(statearr_20875_20910[(2)] = null);
(statearr_20875_20910[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (22)))
{var state_20860__$1 = state_20860;var statearr_20876_20911 = state_20860__$1;(statearr_20876_20911[(2)] = null);
(statearr_20876_20911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (6)))
{var inst_20801 = (state_20860[(13)]);var inst_20810 = f.call(null,inst_20801);var inst_20811 = cljs.core.seq.call(null,inst_20810);var inst_20812 = inst_20811;var inst_20813 = null;var inst_20814 = (0);var inst_20815 = (0);var state_20860__$1 = (function (){var statearr_20877 = state_20860;(statearr_20877[(8)] = inst_20813);
(statearr_20877[(10)] = inst_20815);
(statearr_20877[(11)] = inst_20814);
(statearr_20877[(12)] = inst_20812);
return statearr_20877;
})();var statearr_20878_20912 = state_20860__$1;(statearr_20878_20912[(2)] = null);
(statearr_20878_20912[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (17)))
{var inst_20826 = (state_20860[(7)]);var inst_20830 = cljs.core.chunk_first.call(null,inst_20826);var inst_20831 = cljs.core.chunk_rest.call(null,inst_20826);var inst_20832 = cljs.core.count.call(null,inst_20830);var inst_20812 = inst_20831;var inst_20813 = inst_20830;var inst_20814 = inst_20832;var inst_20815 = (0);var state_20860__$1 = (function (){var statearr_20879 = state_20860;(statearr_20879[(8)] = inst_20813);
(statearr_20879[(10)] = inst_20815);
(statearr_20879[(11)] = inst_20814);
(statearr_20879[(12)] = inst_20812);
return statearr_20879;
})();var statearr_20880_20913 = state_20860__$1;(statearr_20880_20913[(2)] = null);
(statearr_20880_20913[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (3)))
{var inst_20858 = (state_20860[(2)]);var state_20860__$1 = state_20860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20860__$1,inst_20858);
} else
{if((state_val_20861 === (12)))
{var inst_20846 = (state_20860[(2)]);var state_20860__$1 = state_20860;var statearr_20881_20914 = state_20860__$1;(statearr_20881_20914[(2)] = inst_20846);
(statearr_20881_20914[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (2)))
{var state_20860__$1 = state_20860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20860__$1,(4),in$);
} else
{if((state_val_20861 === (23)))
{var inst_20854 = (state_20860[(2)]);var state_20860__$1 = state_20860;var statearr_20882_20915 = state_20860__$1;(statearr_20882_20915[(2)] = inst_20854);
(statearr_20882_20915[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (19)))
{var inst_20841 = (state_20860[(2)]);var state_20860__$1 = state_20860;var statearr_20883_20916 = state_20860__$1;(statearr_20883_20916[(2)] = inst_20841);
(statearr_20883_20916[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (11)))
{var inst_20826 = (state_20860[(7)]);var inst_20812 = (state_20860[(12)]);var inst_20826__$1 = cljs.core.seq.call(null,inst_20812);var state_20860__$1 = (function (){var statearr_20884 = state_20860;(statearr_20884[(7)] = inst_20826__$1);
return statearr_20884;
})();if(inst_20826__$1)
{var statearr_20885_20917 = state_20860__$1;(statearr_20885_20917[(1)] = (14));
} else
{var statearr_20886_20918 = state_20860__$1;(statearr_20886_20918[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (9)))
{var inst_20848 = (state_20860[(2)]);var inst_20849 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_20860__$1 = (function (){var statearr_20887 = state_20860;(statearr_20887[(15)] = inst_20848);
return statearr_20887;
})();if(cljs.core.truth_(inst_20849))
{var statearr_20888_20919 = state_20860__$1;(statearr_20888_20919[(1)] = (21));
} else
{var statearr_20889_20920 = state_20860__$1;(statearr_20889_20920[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (5)))
{var inst_20804 = cljs.core.async.close_BANG_.call(null,out);var state_20860__$1 = state_20860;var statearr_20890_20921 = state_20860__$1;(statearr_20890_20921[(2)] = inst_20804);
(statearr_20890_20921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (14)))
{var inst_20826 = (state_20860[(7)]);var inst_20828 = cljs.core.chunked_seq_QMARK_.call(null,inst_20826);var state_20860__$1 = state_20860;if(inst_20828)
{var statearr_20891_20922 = state_20860__$1;(statearr_20891_20922[(1)] = (17));
} else
{var statearr_20892_20923 = state_20860__$1;(statearr_20892_20923[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (16)))
{var inst_20844 = (state_20860[(2)]);var state_20860__$1 = state_20860;var statearr_20893_20924 = state_20860__$1;(statearr_20893_20924[(2)] = inst_20844);
(statearr_20893_20924[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20861 === (10)))
{var inst_20813 = (state_20860[(8)]);var inst_20815 = (state_20860[(10)]);var inst_20820 = cljs.core._nth.call(null,inst_20813,inst_20815);var state_20860__$1 = state_20860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20860__$1,(13),out,inst_20820);
} else
{if((state_val_20861 === (18)))
{var inst_20826 = (state_20860[(7)]);var inst_20835 = cljs.core.first.call(null,inst_20826);var state_20860__$1 = state_20860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20860__$1,(20),out,inst_20835);
} else
{if((state_val_20861 === (8)))
{var inst_20815 = (state_20860[(10)]);var inst_20814 = (state_20860[(11)]);var inst_20817 = (inst_20815 < inst_20814);var inst_20818 = inst_20817;var state_20860__$1 = state_20860;if(cljs.core.truth_(inst_20818))
{var statearr_20894_20925 = state_20860__$1;(statearr_20894_20925[(1)] = (10));
} else
{var statearr_20895_20926 = state_20860__$1;(statearr_20895_20926[(1)] = (11));
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
});})(c__14664__auto__))
;return ((function (switch__14608__auto__,c__14664__auto__){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_20899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20899[(0)] = state_machine__14609__auto__);
(statearr_20899[(1)] = (1));
return statearr_20899;
});
var state_machine__14609__auto____1 = (function (state_20860){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_20860);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e20900){if((e20900 instanceof Object))
{var ex__14612__auto__ = e20900;var statearr_20901_20927 = state_20860;(statearr_20901_20927[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20860);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20900;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20928 = state_20860;
state_20860 = G__20928;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_20860){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_20860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto__))
})();var state__14666__auto__ = (function (){var statearr_20902 = f__14665__auto__.call(null);(statearr_20902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto__);
return statearr_20902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto__))
);
return c__14664__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14664__auto___21025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___21025,out){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___21025,out){
return (function (state_21000){var state_val_21001 = (state_21000[(1)]);if((state_val_21001 === (7)))
{var inst_20995 = (state_21000[(2)]);var state_21000__$1 = state_21000;var statearr_21002_21026 = state_21000__$1;(statearr_21002_21026[(2)] = inst_20995);
(statearr_21002_21026[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21001 === (1)))
{var inst_20977 = null;var state_21000__$1 = (function (){var statearr_21003 = state_21000;(statearr_21003[(7)] = inst_20977);
return statearr_21003;
})();var statearr_21004_21027 = state_21000__$1;(statearr_21004_21027[(2)] = null);
(statearr_21004_21027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21001 === (4)))
{var inst_20980 = (state_21000[(8)]);var inst_20980__$1 = (state_21000[(2)]);var inst_20981 = (inst_20980__$1 == null);var inst_20982 = cljs.core.not.call(null,inst_20981);var state_21000__$1 = (function (){var statearr_21005 = state_21000;(statearr_21005[(8)] = inst_20980__$1);
return statearr_21005;
})();if(inst_20982)
{var statearr_21006_21028 = state_21000__$1;(statearr_21006_21028[(1)] = (5));
} else
{var statearr_21007_21029 = state_21000__$1;(statearr_21007_21029[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21001 === (6)))
{var state_21000__$1 = state_21000;var statearr_21008_21030 = state_21000__$1;(statearr_21008_21030[(2)] = null);
(statearr_21008_21030[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21001 === (3)))
{var inst_20997 = (state_21000[(2)]);var inst_20998 = cljs.core.async.close_BANG_.call(null,out);var state_21000__$1 = (function (){var statearr_21009 = state_21000;(statearr_21009[(9)] = inst_20997);
return statearr_21009;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21000__$1,inst_20998);
} else
{if((state_val_21001 === (2)))
{var state_21000__$1 = state_21000;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21000__$1,(4),ch);
} else
{if((state_val_21001 === (11)))
{var inst_20980 = (state_21000[(8)]);var inst_20989 = (state_21000[(2)]);var inst_20977 = inst_20980;var state_21000__$1 = (function (){var statearr_21010 = state_21000;(statearr_21010[(10)] = inst_20989);
(statearr_21010[(7)] = inst_20977);
return statearr_21010;
})();var statearr_21011_21031 = state_21000__$1;(statearr_21011_21031[(2)] = null);
(statearr_21011_21031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21001 === (9)))
{var inst_20980 = (state_21000[(8)]);var state_21000__$1 = state_21000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21000__$1,(11),out,inst_20980);
} else
{if((state_val_21001 === (5)))
{var inst_20977 = (state_21000[(7)]);var inst_20980 = (state_21000[(8)]);var inst_20984 = cljs.core._EQ_.call(null,inst_20980,inst_20977);var state_21000__$1 = state_21000;if(inst_20984)
{var statearr_21013_21032 = state_21000__$1;(statearr_21013_21032[(1)] = (8));
} else
{var statearr_21014_21033 = state_21000__$1;(statearr_21014_21033[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21001 === (10)))
{var inst_20992 = (state_21000[(2)]);var state_21000__$1 = state_21000;var statearr_21015_21034 = state_21000__$1;(statearr_21015_21034[(2)] = inst_20992);
(statearr_21015_21034[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21001 === (8)))
{var inst_20977 = (state_21000[(7)]);var tmp21012 = inst_20977;var inst_20977__$1 = tmp21012;var state_21000__$1 = (function (){var statearr_21016 = state_21000;(statearr_21016[(7)] = inst_20977__$1);
return statearr_21016;
})();var statearr_21017_21035 = state_21000__$1;(statearr_21017_21035[(2)] = null);
(statearr_21017_21035[(1)] = (2));
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
});})(c__14664__auto___21025,out))
;return ((function (switch__14608__auto__,c__14664__auto___21025,out){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_21021 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21021[(0)] = state_machine__14609__auto__);
(statearr_21021[(1)] = (1));
return statearr_21021;
});
var state_machine__14609__auto____1 = (function (state_21000){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_21000);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e21022){if((e21022 instanceof Object))
{var ex__14612__auto__ = e21022;var statearr_21023_21036 = state_21000;(statearr_21023_21036[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21000);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21022;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21037 = state_21000;
state_21000 = G__21037;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_21000){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_21000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___21025,out))
})();var state__14666__auto__ = (function (){var statearr_21024 = f__14665__auto__.call(null);(statearr_21024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___21025);
return statearr_21024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___21025,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14664__auto___21172 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___21172,out){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___21172,out){
return (function (state_21142){var state_val_21143 = (state_21142[(1)]);if((state_val_21143 === (7)))
{var inst_21138 = (state_21142[(2)]);var state_21142__$1 = state_21142;var statearr_21144_21173 = state_21142__$1;(statearr_21144_21173[(2)] = inst_21138);
(statearr_21144_21173[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (1)))
{var inst_21105 = (new Array(n));var inst_21106 = inst_21105;var inst_21107 = (0);var state_21142__$1 = (function (){var statearr_21145 = state_21142;(statearr_21145[(7)] = inst_21107);
(statearr_21145[(8)] = inst_21106);
return statearr_21145;
})();var statearr_21146_21174 = state_21142__$1;(statearr_21146_21174[(2)] = null);
(statearr_21146_21174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (4)))
{var inst_21110 = (state_21142[(9)]);var inst_21110__$1 = (state_21142[(2)]);var inst_21111 = (inst_21110__$1 == null);var inst_21112 = cljs.core.not.call(null,inst_21111);var state_21142__$1 = (function (){var statearr_21147 = state_21142;(statearr_21147[(9)] = inst_21110__$1);
return statearr_21147;
})();if(inst_21112)
{var statearr_21148_21175 = state_21142__$1;(statearr_21148_21175[(1)] = (5));
} else
{var statearr_21149_21176 = state_21142__$1;(statearr_21149_21176[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (15)))
{var inst_21132 = (state_21142[(2)]);var state_21142__$1 = state_21142;var statearr_21150_21177 = state_21142__$1;(statearr_21150_21177[(2)] = inst_21132);
(statearr_21150_21177[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (13)))
{var state_21142__$1 = state_21142;var statearr_21151_21178 = state_21142__$1;(statearr_21151_21178[(2)] = null);
(statearr_21151_21178[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (6)))
{var inst_21107 = (state_21142[(7)]);var inst_21128 = (inst_21107 > (0));var state_21142__$1 = state_21142;if(cljs.core.truth_(inst_21128))
{var statearr_21152_21179 = state_21142__$1;(statearr_21152_21179[(1)] = (12));
} else
{var statearr_21153_21180 = state_21142__$1;(statearr_21153_21180[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (3)))
{var inst_21140 = (state_21142[(2)]);var state_21142__$1 = state_21142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21142__$1,inst_21140);
} else
{if((state_val_21143 === (12)))
{var inst_21106 = (state_21142[(8)]);var inst_21130 = cljs.core.vec.call(null,inst_21106);var state_21142__$1 = state_21142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21142__$1,(15),out,inst_21130);
} else
{if((state_val_21143 === (2)))
{var state_21142__$1 = state_21142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21142__$1,(4),ch);
} else
{if((state_val_21143 === (11)))
{var inst_21122 = (state_21142[(2)]);var inst_21123 = (new Array(n));var inst_21106 = inst_21123;var inst_21107 = (0);var state_21142__$1 = (function (){var statearr_21154 = state_21142;(statearr_21154[(7)] = inst_21107);
(statearr_21154[(8)] = inst_21106);
(statearr_21154[(10)] = inst_21122);
return statearr_21154;
})();var statearr_21155_21181 = state_21142__$1;(statearr_21155_21181[(2)] = null);
(statearr_21155_21181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (9)))
{var inst_21106 = (state_21142[(8)]);var inst_21120 = cljs.core.vec.call(null,inst_21106);var state_21142__$1 = state_21142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21142__$1,(11),out,inst_21120);
} else
{if((state_val_21143 === (5)))
{var inst_21115 = (state_21142[(11)]);var inst_21107 = (state_21142[(7)]);var inst_21110 = (state_21142[(9)]);var inst_21106 = (state_21142[(8)]);var inst_21114 = (inst_21106[inst_21107] = inst_21110);var inst_21115__$1 = (inst_21107 + (1));var inst_21116 = (inst_21115__$1 < n);var state_21142__$1 = (function (){var statearr_21156 = state_21142;(statearr_21156[(11)] = inst_21115__$1);
(statearr_21156[(12)] = inst_21114);
return statearr_21156;
})();if(cljs.core.truth_(inst_21116))
{var statearr_21157_21182 = state_21142__$1;(statearr_21157_21182[(1)] = (8));
} else
{var statearr_21158_21183 = state_21142__$1;(statearr_21158_21183[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (14)))
{var inst_21135 = (state_21142[(2)]);var inst_21136 = cljs.core.async.close_BANG_.call(null,out);var state_21142__$1 = (function (){var statearr_21160 = state_21142;(statearr_21160[(13)] = inst_21135);
return statearr_21160;
})();var statearr_21161_21184 = state_21142__$1;(statearr_21161_21184[(2)] = inst_21136);
(statearr_21161_21184[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (10)))
{var inst_21126 = (state_21142[(2)]);var state_21142__$1 = state_21142;var statearr_21162_21185 = state_21142__$1;(statearr_21162_21185[(2)] = inst_21126);
(statearr_21162_21185[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21143 === (8)))
{var inst_21115 = (state_21142[(11)]);var inst_21106 = (state_21142[(8)]);var tmp21159 = inst_21106;var inst_21106__$1 = tmp21159;var inst_21107 = inst_21115;var state_21142__$1 = (function (){var statearr_21163 = state_21142;(statearr_21163[(7)] = inst_21107);
(statearr_21163[(8)] = inst_21106__$1);
return statearr_21163;
})();var statearr_21164_21186 = state_21142__$1;(statearr_21164_21186[(2)] = null);
(statearr_21164_21186[(1)] = (2));
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
});})(c__14664__auto___21172,out))
;return ((function (switch__14608__auto__,c__14664__auto___21172,out){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_21168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21168[(0)] = state_machine__14609__auto__);
(statearr_21168[(1)] = (1));
return statearr_21168;
});
var state_machine__14609__auto____1 = (function (state_21142){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_21142);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e21169){if((e21169 instanceof Object))
{var ex__14612__auto__ = e21169;var statearr_21170_21187 = state_21142;(statearr_21170_21187[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21142);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21169;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21188 = state_21142;
state_21142 = G__21188;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_21142){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_21142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___21172,out))
})();var state__14666__auto__ = (function (){var statearr_21171 = f__14665__auto__.call(null);(statearr_21171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___21172);
return statearr_21171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___21172,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14664__auto___21331 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto___21331,out){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto___21331,out){
return (function (state_21301){var state_val_21302 = (state_21301[(1)]);if((state_val_21302 === (7)))
{var inst_21297 = (state_21301[(2)]);var state_21301__$1 = state_21301;var statearr_21303_21332 = state_21301__$1;(statearr_21303_21332[(2)] = inst_21297);
(statearr_21303_21332[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (1)))
{var inst_21260 = [];var inst_21261 = inst_21260;var inst_21262 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_21301__$1 = (function (){var statearr_21304 = state_21301;(statearr_21304[(7)] = inst_21261);
(statearr_21304[(8)] = inst_21262);
return statearr_21304;
})();var statearr_21305_21333 = state_21301__$1;(statearr_21305_21333[(2)] = null);
(statearr_21305_21333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (4)))
{var inst_21265 = (state_21301[(9)]);var inst_21265__$1 = (state_21301[(2)]);var inst_21266 = (inst_21265__$1 == null);var inst_21267 = cljs.core.not.call(null,inst_21266);var state_21301__$1 = (function (){var statearr_21306 = state_21301;(statearr_21306[(9)] = inst_21265__$1);
return statearr_21306;
})();if(inst_21267)
{var statearr_21307_21334 = state_21301__$1;(statearr_21307_21334[(1)] = (5));
} else
{var statearr_21308_21335 = state_21301__$1;(statearr_21308_21335[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (15)))
{var inst_21291 = (state_21301[(2)]);var state_21301__$1 = state_21301;var statearr_21309_21336 = state_21301__$1;(statearr_21309_21336[(2)] = inst_21291);
(statearr_21309_21336[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (13)))
{var state_21301__$1 = state_21301;var statearr_21310_21337 = state_21301__$1;(statearr_21310_21337[(2)] = null);
(statearr_21310_21337[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (6)))
{var inst_21261 = (state_21301[(7)]);var inst_21286 = inst_21261.length;var inst_21287 = (inst_21286 > (0));var state_21301__$1 = state_21301;if(cljs.core.truth_(inst_21287))
{var statearr_21311_21338 = state_21301__$1;(statearr_21311_21338[(1)] = (12));
} else
{var statearr_21312_21339 = state_21301__$1;(statearr_21312_21339[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (3)))
{var inst_21299 = (state_21301[(2)]);var state_21301__$1 = state_21301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21301__$1,inst_21299);
} else
{if((state_val_21302 === (12)))
{var inst_21261 = (state_21301[(7)]);var inst_21289 = cljs.core.vec.call(null,inst_21261);var state_21301__$1 = state_21301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21301__$1,(15),out,inst_21289);
} else
{if((state_val_21302 === (2)))
{var state_21301__$1 = state_21301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21301__$1,(4),ch);
} else
{if((state_val_21302 === (11)))
{var inst_21265 = (state_21301[(9)]);var inst_21269 = (state_21301[(10)]);var inst_21279 = (state_21301[(2)]);var inst_21280 = [];var inst_21281 = inst_21280.push(inst_21265);var inst_21261 = inst_21280;var inst_21262 = inst_21269;var state_21301__$1 = (function (){var statearr_21313 = state_21301;(statearr_21313[(7)] = inst_21261);
(statearr_21313[(11)] = inst_21281);
(statearr_21313[(8)] = inst_21262);
(statearr_21313[(12)] = inst_21279);
return statearr_21313;
})();var statearr_21314_21340 = state_21301__$1;(statearr_21314_21340[(2)] = null);
(statearr_21314_21340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (9)))
{var inst_21261 = (state_21301[(7)]);var inst_21277 = cljs.core.vec.call(null,inst_21261);var state_21301__$1 = state_21301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21301__$1,(11),out,inst_21277);
} else
{if((state_val_21302 === (5)))
{var inst_21265 = (state_21301[(9)]);var inst_21269 = (state_21301[(10)]);var inst_21262 = (state_21301[(8)]);var inst_21269__$1 = f.call(null,inst_21265);var inst_21270 = cljs.core._EQ_.call(null,inst_21269__$1,inst_21262);var inst_21271 = cljs.core.keyword_identical_QMARK_.call(null,inst_21262,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_21272 = (inst_21270) || (inst_21271);var state_21301__$1 = (function (){var statearr_21315 = state_21301;(statearr_21315[(10)] = inst_21269__$1);
return statearr_21315;
})();if(cljs.core.truth_(inst_21272))
{var statearr_21316_21341 = state_21301__$1;(statearr_21316_21341[(1)] = (8));
} else
{var statearr_21317_21342 = state_21301__$1;(statearr_21317_21342[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (14)))
{var inst_21294 = (state_21301[(2)]);var inst_21295 = cljs.core.async.close_BANG_.call(null,out);var state_21301__$1 = (function (){var statearr_21319 = state_21301;(statearr_21319[(13)] = inst_21294);
return statearr_21319;
})();var statearr_21320_21343 = state_21301__$1;(statearr_21320_21343[(2)] = inst_21295);
(statearr_21320_21343[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (10)))
{var inst_21284 = (state_21301[(2)]);var state_21301__$1 = state_21301;var statearr_21321_21344 = state_21301__$1;(statearr_21321_21344[(2)] = inst_21284);
(statearr_21321_21344[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (8)))
{var inst_21265 = (state_21301[(9)]);var inst_21261 = (state_21301[(7)]);var inst_21269 = (state_21301[(10)]);var inst_21274 = inst_21261.push(inst_21265);var tmp21318 = inst_21261;var inst_21261__$1 = tmp21318;var inst_21262 = inst_21269;var state_21301__$1 = (function (){var statearr_21322 = state_21301;(statearr_21322[(7)] = inst_21261__$1);
(statearr_21322[(8)] = inst_21262);
(statearr_21322[(14)] = inst_21274);
return statearr_21322;
})();var statearr_21323_21345 = state_21301__$1;(statearr_21323_21345[(2)] = null);
(statearr_21323_21345[(1)] = (2));
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
});})(c__14664__auto___21331,out))
;return ((function (switch__14608__auto__,c__14664__auto___21331,out){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_21327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21327[(0)] = state_machine__14609__auto__);
(statearr_21327[(1)] = (1));
return statearr_21327;
});
var state_machine__14609__auto____1 = (function (state_21301){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_21301);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e21328){if((e21328 instanceof Object))
{var ex__14612__auto__ = e21328;var statearr_21329_21346 = state_21301;(statearr_21329_21346[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21328;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21347 = state_21301;
state_21301 = G__21347;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_21301){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_21301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto___21331,out))
})();var state__14666__auto__ = (function (){var statearr_21330 = f__14665__auto__.call(null);(statearr_21330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto___21331);
return statearr_21330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto___21331,out))
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