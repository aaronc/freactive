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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t38224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38224 = (function (f,fn_handler,meta38225){
this.f = f;
this.fn_handler = fn_handler;
this.meta38225 = meta38225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38224.cljs$lang$type = true;
cljs.core.async.t38224.cljs$lang$ctorStr = "cljs.core.async/t38224";
cljs.core.async.t38224.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t38224");
});
cljs.core.async.t38224.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t38224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t38224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38226){var self__ = this;
var _38226__$1 = this;return self__.meta38225;
});
cljs.core.async.t38224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38226,meta38225__$1){var self__ = this;
var _38226__$1 = this;return (new cljs.core.async.t38224(self__.f,self__.fn_handler,meta38225__$1));
});
cljs.core.async.__GT_t38224 = (function __GT_t38224(f__$1,fn_handler__$1,meta38225){return (new cljs.core.async.t38224(f__$1,fn_handler__$1,meta38225));
});
}
return (new cljs.core.async.t38224(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__38228 = buff;if(G__38228)
{var bit__12162__auto__ = null;if(cljs.core.truth_((function (){var or__11498__auto__ = bit__12162__auto__;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return G__38228.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__38228.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__38228);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__38228);
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
{var val_38229 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_38229);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_38229,ret){
return (function (){return fn1.call(null,val_38229);
});})(val_38229,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12368__auto___38230 = n;var x_38231 = (0);while(true){
if((x_38231 < n__12368__auto___38230))
{(a[x_38231] = (0));
{
var G__38232 = (x_38231 + (1));
x_38231 = G__38232;
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
var G__38233 = (i + (1));
i = G__38233;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t38237 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38237 = (function (flag,alt_flag,meta38238){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta38238 = meta38238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38237.cljs$lang$type = true;
cljs.core.async.t38237.cljs$lang$ctorStr = "cljs.core.async/t38237";
cljs.core.async.t38237.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t38237");
});})(flag))
;
cljs.core.async.t38237.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t38237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t38237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38239){var self__ = this;
var _38239__$1 = this;return self__.meta38238;
});})(flag))
;
cljs.core.async.t38237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38239,meta38238__$1){var self__ = this;
var _38239__$1 = this;return (new cljs.core.async.t38237(self__.flag,self__.alt_flag,meta38238__$1));
});})(flag))
;
cljs.core.async.__GT_t38237 = ((function (flag){
return (function __GT_t38237(flag__$1,alt_flag__$1,meta38238){return (new cljs.core.async.t38237(flag__$1,alt_flag__$1,meta38238));
});})(flag))
;
}
return (new cljs.core.async.t38237(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t38243 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38243 = (function (cb,flag,alt_handler,meta38244){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta38244 = meta38244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38243.cljs$lang$type = true;
cljs.core.async.t38243.cljs$lang$ctorStr = "cljs.core.async/t38243";
cljs.core.async.t38243.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t38243");
});
cljs.core.async.t38243.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t38243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t38243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38245){var self__ = this;
var _38245__$1 = this;return self__.meta38244;
});
cljs.core.async.t38243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38245,meta38244__$1){var self__ = this;
var _38245__$1 = this;return (new cljs.core.async.t38243(self__.cb,self__.flag,self__.alt_handler,meta38244__$1));
});
cljs.core.async.__GT_t38243 = (function __GT_t38243(cb__$1,flag__$1,alt_handler__$1,meta38244){return (new cljs.core.async.t38243(cb__$1,flag__$1,alt_handler__$1,meta38244));
});
}
return (new cljs.core.async.t38243(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38246_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38246_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38247_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38247_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11498__auto__ = wport;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__38248 = (i + (1));
i = G__38248;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11498__auto__ = ret;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4388__auto__ = (function (){var and__11486__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11486__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11486__auto__;
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
var alts_BANG___delegate = function (ports,p__38249){var map__38251 = p__38249;var map__38251__$1 = ((cljs.core.seq_QMARK_.call(null,map__38251))?cljs.core.apply.call(null,cljs.core.hash_map,map__38251):map__38251);var opts = map__38251__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__38249 = null;if (arguments.length > 1) {
  p__38249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__38249);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__38252){
var ports = cljs.core.first(arglist__38252);
var p__38249 = cljs.core.rest(arglist__38252);
return alts_BANG___delegate(ports,p__38249);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15156__auto___38347 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___38347){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___38347){
return (function (state_38323){var state_val_38324 = (state_38323[(1)]);if((state_val_38324 === (7)))
{var inst_38319 = (state_38323[(2)]);var state_38323__$1 = state_38323;var statearr_38325_38348 = state_38323__$1;(statearr_38325_38348[(2)] = inst_38319);
(statearr_38325_38348[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (1)))
{var state_38323__$1 = state_38323;var statearr_38326_38349 = state_38323__$1;(statearr_38326_38349[(2)] = null);
(statearr_38326_38349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (4)))
{var inst_38302 = (state_38323[(7)]);var inst_38302__$1 = (state_38323[(2)]);var inst_38303 = (inst_38302__$1 == null);var state_38323__$1 = (function (){var statearr_38327 = state_38323;(statearr_38327[(7)] = inst_38302__$1);
return statearr_38327;
})();if(cljs.core.truth_(inst_38303))
{var statearr_38328_38350 = state_38323__$1;(statearr_38328_38350[(1)] = (5));
} else
{var statearr_38329_38351 = state_38323__$1;(statearr_38329_38351[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (13)))
{var state_38323__$1 = state_38323;var statearr_38330_38352 = state_38323__$1;(statearr_38330_38352[(2)] = null);
(statearr_38330_38352[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (6)))
{var inst_38302 = (state_38323[(7)]);var state_38323__$1 = state_38323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38323__$1,(11),to,inst_38302);
} else
{if((state_val_38324 === (3)))
{var inst_38321 = (state_38323[(2)]);var state_38323__$1 = state_38323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38323__$1,inst_38321);
} else
{if((state_val_38324 === (12)))
{var state_38323__$1 = state_38323;var statearr_38331_38353 = state_38323__$1;(statearr_38331_38353[(2)] = null);
(statearr_38331_38353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (2)))
{var state_38323__$1 = state_38323;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38323__$1,(4),from);
} else
{if((state_val_38324 === (11)))
{var inst_38312 = (state_38323[(2)]);var state_38323__$1 = state_38323;if(cljs.core.truth_(inst_38312))
{var statearr_38332_38354 = state_38323__$1;(statearr_38332_38354[(1)] = (12));
} else
{var statearr_38333_38355 = state_38323__$1;(statearr_38333_38355[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (9)))
{var state_38323__$1 = state_38323;var statearr_38334_38356 = state_38323__$1;(statearr_38334_38356[(2)] = null);
(statearr_38334_38356[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (5)))
{var state_38323__$1 = state_38323;if(cljs.core.truth_(close_QMARK_))
{var statearr_38335_38357 = state_38323__$1;(statearr_38335_38357[(1)] = (8));
} else
{var statearr_38336_38358 = state_38323__$1;(statearr_38336_38358[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (14)))
{var inst_38317 = (state_38323[(2)]);var state_38323__$1 = state_38323;var statearr_38337_38359 = state_38323__$1;(statearr_38337_38359[(2)] = inst_38317);
(statearr_38337_38359[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (10)))
{var inst_38309 = (state_38323[(2)]);var state_38323__$1 = state_38323;var statearr_38338_38360 = state_38323__$1;(statearr_38338_38360[(2)] = inst_38309);
(statearr_38338_38360[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38324 === (8)))
{var inst_38306 = cljs.core.async.close_BANG_.call(null,to);var state_38323__$1 = state_38323;var statearr_38339_38361 = state_38323__$1;(statearr_38339_38361[(2)] = inst_38306);
(statearr_38339_38361[(1)] = (10));
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
});})(c__15156__auto___38347))
;return ((function (switch__15100__auto__,c__15156__auto___38347){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38343 = [null,null,null,null,null,null,null,null];(statearr_38343[(0)] = state_machine__15101__auto__);
(statearr_38343[(1)] = (1));
return statearr_38343;
});
var state_machine__15101__auto____1 = (function (state_38323){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38323);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38344){if((e38344 instanceof Object))
{var ex__15104__auto__ = e38344;var statearr_38345_38362 = state_38323;(statearr_38345_38362[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38323);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38344;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38363 = state_38323;
state_38323 = G__38363;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38323){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___38347))
})();var state__15158__auto__ = (function (){var statearr_38346 = f__15157__auto__.call(null);(statearr_38346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___38347);
return statearr_38346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___38347))
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
return (function (p__38547){var vec__38548 = p__38547;var v = cljs.core.nth.call(null,vec__38548,(0),null);var p = cljs.core.nth.call(null,vec__38548,(1),null);var job = vec__38548;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15156__auto___38730 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___38730,res,vec__38548,v,p,job,jobs,results){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___38730,res,vec__38548,v,p,job,jobs,results){
return (function (state_38553){var state_val_38554 = (state_38553[(1)]);if((state_val_38554 === (2)))
{var inst_38550 = (state_38553[(2)]);var inst_38551 = cljs.core.async.close_BANG_.call(null,res);var state_38553__$1 = (function (){var statearr_38555 = state_38553;(statearr_38555[(7)] = inst_38550);
return statearr_38555;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38553__$1,inst_38551);
} else
{if((state_val_38554 === (1)))
{var state_38553__$1 = state_38553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38553__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15156__auto___38730,res,vec__38548,v,p,job,jobs,results))
;return ((function (switch__15100__auto__,c__15156__auto___38730,res,vec__38548,v,p,job,jobs,results){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38559 = [null,null,null,null,null,null,null,null];(statearr_38559[(0)] = state_machine__15101__auto__);
(statearr_38559[(1)] = (1));
return statearr_38559;
});
var state_machine__15101__auto____1 = (function (state_38553){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38553);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38560){if((e38560 instanceof Object))
{var ex__15104__auto__ = e38560;var statearr_38561_38731 = state_38553;(statearr_38561_38731[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38560;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38732 = state_38553;
state_38553 = G__38732;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38553){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___38730,res,vec__38548,v,p,job,jobs,results))
})();var state__15158__auto__ = (function (){var statearr_38562 = f__15157__auto__.call(null);(statearr_38562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___38730);
return statearr_38562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___38730,res,vec__38548,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__38563){var vec__38564 = p__38563;var v = cljs.core.nth.call(null,vec__38564,(0),null);var p = cljs.core.nth.call(null,vec__38564,(1),null);var job = vec__38564;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12368__auto___38733 = n;var __38734 = (0);while(true){
if((__38734 < n__12368__auto___38733))
{var G__38565_38735 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__38565_38735) {
case "async":
var c__15156__auto___38737 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__38734,c__15156__auto___38737,G__38565_38735,n__12368__auto___38733,jobs,results,process,async){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (__38734,c__15156__auto___38737,G__38565_38735,n__12368__auto___38733,jobs,results,process,async){
return (function (state_38578){var state_val_38579 = (state_38578[(1)]);if((state_val_38579 === (7)))
{var inst_38574 = (state_38578[(2)]);var state_38578__$1 = state_38578;var statearr_38580_38738 = state_38578__$1;(statearr_38580_38738[(2)] = inst_38574);
(statearr_38580_38738[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38579 === (6)))
{var state_38578__$1 = state_38578;var statearr_38581_38739 = state_38578__$1;(statearr_38581_38739[(2)] = null);
(statearr_38581_38739[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38579 === (5)))
{var state_38578__$1 = state_38578;var statearr_38582_38740 = state_38578__$1;(statearr_38582_38740[(2)] = null);
(statearr_38582_38740[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38579 === (4)))
{var inst_38568 = (state_38578[(2)]);var inst_38569 = async.call(null,inst_38568);var state_38578__$1 = state_38578;if(cljs.core.truth_(inst_38569))
{var statearr_38583_38741 = state_38578__$1;(statearr_38583_38741[(1)] = (5));
} else
{var statearr_38584_38742 = state_38578__$1;(statearr_38584_38742[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38579 === (3)))
{var inst_38576 = (state_38578[(2)]);var state_38578__$1 = state_38578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38578__$1,inst_38576);
} else
{if((state_val_38579 === (2)))
{var state_38578__$1 = state_38578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38578__$1,(4),jobs);
} else
{if((state_val_38579 === (1)))
{var state_38578__$1 = state_38578;var statearr_38585_38743 = state_38578__$1;(statearr_38585_38743[(2)] = null);
(statearr_38585_38743[(1)] = (2));
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
});})(__38734,c__15156__auto___38737,G__38565_38735,n__12368__auto___38733,jobs,results,process,async))
;return ((function (__38734,switch__15100__auto__,c__15156__auto___38737,G__38565_38735,n__12368__auto___38733,jobs,results,process,async){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38589 = [null,null,null,null,null,null,null];(statearr_38589[(0)] = state_machine__15101__auto__);
(statearr_38589[(1)] = (1));
return statearr_38589;
});
var state_machine__15101__auto____1 = (function (state_38578){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38578);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38590){if((e38590 instanceof Object))
{var ex__15104__auto__ = e38590;var statearr_38591_38744 = state_38578;(statearr_38591_38744[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38578);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38590;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38745 = state_38578;
state_38578 = G__38745;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38578){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(__38734,switch__15100__auto__,c__15156__auto___38737,G__38565_38735,n__12368__auto___38733,jobs,results,process,async))
})();var state__15158__auto__ = (function (){var statearr_38592 = f__15157__auto__.call(null);(statearr_38592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___38737);
return statearr_38592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(__38734,c__15156__auto___38737,G__38565_38735,n__12368__auto___38733,jobs,results,process,async))
);

break;
case "compute":
var c__15156__auto___38746 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__38734,c__15156__auto___38746,G__38565_38735,n__12368__auto___38733,jobs,results,process,async){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (__38734,c__15156__auto___38746,G__38565_38735,n__12368__auto___38733,jobs,results,process,async){
return (function (state_38605){var state_val_38606 = (state_38605[(1)]);if((state_val_38606 === (7)))
{var inst_38601 = (state_38605[(2)]);var state_38605__$1 = state_38605;var statearr_38607_38747 = state_38605__$1;(statearr_38607_38747[(2)] = inst_38601);
(statearr_38607_38747[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38606 === (6)))
{var state_38605__$1 = state_38605;var statearr_38608_38748 = state_38605__$1;(statearr_38608_38748[(2)] = null);
(statearr_38608_38748[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38606 === (5)))
{var state_38605__$1 = state_38605;var statearr_38609_38749 = state_38605__$1;(statearr_38609_38749[(2)] = null);
(statearr_38609_38749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38606 === (4)))
{var inst_38595 = (state_38605[(2)]);var inst_38596 = process.call(null,inst_38595);var state_38605__$1 = state_38605;if(cljs.core.truth_(inst_38596))
{var statearr_38610_38750 = state_38605__$1;(statearr_38610_38750[(1)] = (5));
} else
{var statearr_38611_38751 = state_38605__$1;(statearr_38611_38751[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38606 === (3)))
{var inst_38603 = (state_38605[(2)]);var state_38605__$1 = state_38605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38605__$1,inst_38603);
} else
{if((state_val_38606 === (2)))
{var state_38605__$1 = state_38605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38605__$1,(4),jobs);
} else
{if((state_val_38606 === (1)))
{var state_38605__$1 = state_38605;var statearr_38612_38752 = state_38605__$1;(statearr_38612_38752[(2)] = null);
(statearr_38612_38752[(1)] = (2));
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
});})(__38734,c__15156__auto___38746,G__38565_38735,n__12368__auto___38733,jobs,results,process,async))
;return ((function (__38734,switch__15100__auto__,c__15156__auto___38746,G__38565_38735,n__12368__auto___38733,jobs,results,process,async){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38616 = [null,null,null,null,null,null,null];(statearr_38616[(0)] = state_machine__15101__auto__);
(statearr_38616[(1)] = (1));
return statearr_38616;
});
var state_machine__15101__auto____1 = (function (state_38605){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38605);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38617){if((e38617 instanceof Object))
{var ex__15104__auto__ = e38617;var statearr_38618_38753 = state_38605;(statearr_38618_38753[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38605);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38617;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38754 = state_38605;
state_38605 = G__38754;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38605){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(__38734,switch__15100__auto__,c__15156__auto___38746,G__38565_38735,n__12368__auto___38733,jobs,results,process,async))
})();var state__15158__auto__ = (function (){var statearr_38619 = f__15157__auto__.call(null);(statearr_38619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___38746);
return statearr_38619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(__38734,c__15156__auto___38746,G__38565_38735,n__12368__auto___38733,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__38755 = (__38734 + (1));
__38734 = G__38755;
continue;
}
} else
{}
break;
}
var c__15156__auto___38756 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___38756,jobs,results,process,async){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___38756,jobs,results,process,async){
return (function (state_38641){var state_val_38642 = (state_38641[(1)]);if((state_val_38642 === (9)))
{var inst_38634 = (state_38641[(2)]);var state_38641__$1 = (function (){var statearr_38643 = state_38641;(statearr_38643[(7)] = inst_38634);
return statearr_38643;
})();var statearr_38644_38757 = state_38641__$1;(statearr_38644_38757[(2)] = null);
(statearr_38644_38757[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38642 === (8)))
{var inst_38627 = (state_38641[(8)]);var inst_38632 = (state_38641[(2)]);var state_38641__$1 = (function (){var statearr_38645 = state_38641;(statearr_38645[(9)] = inst_38632);
return statearr_38645;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38641__$1,(9),results,inst_38627);
} else
{if((state_val_38642 === (7)))
{var inst_38637 = (state_38641[(2)]);var state_38641__$1 = state_38641;var statearr_38646_38758 = state_38641__$1;(statearr_38646_38758[(2)] = inst_38637);
(statearr_38646_38758[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38642 === (6)))
{var inst_38622 = (state_38641[(10)]);var inst_38627 = (state_38641[(8)]);var inst_38627__$1 = cljs.core.async.chan.call(null,(1));var inst_38628 = cljs.core.PersistentVector.EMPTY_NODE;var inst_38629 = [inst_38622,inst_38627__$1];var inst_38630 = (new cljs.core.PersistentVector(null,2,(5),inst_38628,inst_38629,null));var state_38641__$1 = (function (){var statearr_38647 = state_38641;(statearr_38647[(8)] = inst_38627__$1);
return statearr_38647;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38641__$1,(8),jobs,inst_38630);
} else
{if((state_val_38642 === (5)))
{var inst_38625 = cljs.core.async.close_BANG_.call(null,jobs);var state_38641__$1 = state_38641;var statearr_38648_38759 = state_38641__$1;(statearr_38648_38759[(2)] = inst_38625);
(statearr_38648_38759[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38642 === (4)))
{var inst_38622 = (state_38641[(10)]);var inst_38622__$1 = (state_38641[(2)]);var inst_38623 = (inst_38622__$1 == null);var state_38641__$1 = (function (){var statearr_38649 = state_38641;(statearr_38649[(10)] = inst_38622__$1);
return statearr_38649;
})();if(cljs.core.truth_(inst_38623))
{var statearr_38650_38760 = state_38641__$1;(statearr_38650_38760[(1)] = (5));
} else
{var statearr_38651_38761 = state_38641__$1;(statearr_38651_38761[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38642 === (3)))
{var inst_38639 = (state_38641[(2)]);var state_38641__$1 = state_38641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38641__$1,inst_38639);
} else
{if((state_val_38642 === (2)))
{var state_38641__$1 = state_38641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38641__$1,(4),from);
} else
{if((state_val_38642 === (1)))
{var state_38641__$1 = state_38641;var statearr_38652_38762 = state_38641__$1;(statearr_38652_38762[(2)] = null);
(statearr_38652_38762[(1)] = (2));
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
});})(c__15156__auto___38756,jobs,results,process,async))
;return ((function (switch__15100__auto__,c__15156__auto___38756,jobs,results,process,async){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38656 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38656[(0)] = state_machine__15101__auto__);
(statearr_38656[(1)] = (1));
return statearr_38656;
});
var state_machine__15101__auto____1 = (function (state_38641){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38641);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38657){if((e38657 instanceof Object))
{var ex__15104__auto__ = e38657;var statearr_38658_38763 = state_38641;(statearr_38658_38763[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38657;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38764 = state_38641;
state_38641 = G__38764;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38641){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___38756,jobs,results,process,async))
})();var state__15158__auto__ = (function (){var statearr_38659 = f__15157__auto__.call(null);(statearr_38659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___38756);
return statearr_38659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___38756,jobs,results,process,async))
);
var c__15156__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto__,jobs,results,process,async){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto__,jobs,results,process,async){
return (function (state_38697){var state_val_38698 = (state_38697[(1)]);if((state_val_38698 === (7)))
{var inst_38693 = (state_38697[(2)]);var state_38697__$1 = state_38697;var statearr_38699_38765 = state_38697__$1;(statearr_38699_38765[(2)] = inst_38693);
(statearr_38699_38765[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (20)))
{var state_38697__$1 = state_38697;var statearr_38700_38766 = state_38697__$1;(statearr_38700_38766[(2)] = null);
(statearr_38700_38766[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (1)))
{var state_38697__$1 = state_38697;var statearr_38701_38767 = state_38697__$1;(statearr_38701_38767[(2)] = null);
(statearr_38701_38767[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (4)))
{var inst_38662 = (state_38697[(7)]);var inst_38662__$1 = (state_38697[(2)]);var inst_38663 = (inst_38662__$1 == null);var state_38697__$1 = (function (){var statearr_38702 = state_38697;(statearr_38702[(7)] = inst_38662__$1);
return statearr_38702;
})();if(cljs.core.truth_(inst_38663))
{var statearr_38703_38768 = state_38697__$1;(statearr_38703_38768[(1)] = (5));
} else
{var statearr_38704_38769 = state_38697__$1;(statearr_38704_38769[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (15)))
{var inst_38675 = (state_38697[(8)]);var state_38697__$1 = state_38697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38697__$1,(18),to,inst_38675);
} else
{if((state_val_38698 === (21)))
{var inst_38688 = (state_38697[(2)]);var state_38697__$1 = state_38697;var statearr_38705_38770 = state_38697__$1;(statearr_38705_38770[(2)] = inst_38688);
(statearr_38705_38770[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (13)))
{var inst_38690 = (state_38697[(2)]);var state_38697__$1 = (function (){var statearr_38706 = state_38697;(statearr_38706[(9)] = inst_38690);
return statearr_38706;
})();var statearr_38707_38771 = state_38697__$1;(statearr_38707_38771[(2)] = null);
(statearr_38707_38771[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (6)))
{var inst_38662 = (state_38697[(7)]);var state_38697__$1 = state_38697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38697__$1,(11),inst_38662);
} else
{if((state_val_38698 === (17)))
{var inst_38683 = (state_38697[(2)]);var state_38697__$1 = state_38697;if(cljs.core.truth_(inst_38683))
{var statearr_38708_38772 = state_38697__$1;(statearr_38708_38772[(1)] = (19));
} else
{var statearr_38709_38773 = state_38697__$1;(statearr_38709_38773[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (3)))
{var inst_38695 = (state_38697[(2)]);var state_38697__$1 = state_38697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38697__$1,inst_38695);
} else
{if((state_val_38698 === (12)))
{var inst_38672 = (state_38697[(10)]);var state_38697__$1 = state_38697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38697__$1,(14),inst_38672);
} else
{if((state_val_38698 === (2)))
{var state_38697__$1 = state_38697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38697__$1,(4),results);
} else
{if((state_val_38698 === (19)))
{var state_38697__$1 = state_38697;var statearr_38710_38774 = state_38697__$1;(statearr_38710_38774[(2)] = null);
(statearr_38710_38774[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (11)))
{var inst_38672 = (state_38697[(2)]);var state_38697__$1 = (function (){var statearr_38711 = state_38697;(statearr_38711[(10)] = inst_38672);
return statearr_38711;
})();var statearr_38712_38775 = state_38697__$1;(statearr_38712_38775[(2)] = null);
(statearr_38712_38775[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (9)))
{var state_38697__$1 = state_38697;var statearr_38713_38776 = state_38697__$1;(statearr_38713_38776[(2)] = null);
(statearr_38713_38776[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (5)))
{var state_38697__$1 = state_38697;if(cljs.core.truth_(close_QMARK_))
{var statearr_38714_38777 = state_38697__$1;(statearr_38714_38777[(1)] = (8));
} else
{var statearr_38715_38778 = state_38697__$1;(statearr_38715_38778[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (14)))
{var inst_38677 = (state_38697[(11)]);var inst_38675 = (state_38697[(8)]);var inst_38675__$1 = (state_38697[(2)]);var inst_38676 = (inst_38675__$1 == null);var inst_38677__$1 = cljs.core.not.call(null,inst_38676);var state_38697__$1 = (function (){var statearr_38716 = state_38697;(statearr_38716[(11)] = inst_38677__$1);
(statearr_38716[(8)] = inst_38675__$1);
return statearr_38716;
})();if(inst_38677__$1)
{var statearr_38717_38779 = state_38697__$1;(statearr_38717_38779[(1)] = (15));
} else
{var statearr_38718_38780 = state_38697__$1;(statearr_38718_38780[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (16)))
{var inst_38677 = (state_38697[(11)]);var state_38697__$1 = state_38697;var statearr_38719_38781 = state_38697__$1;(statearr_38719_38781[(2)] = inst_38677);
(statearr_38719_38781[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (10)))
{var inst_38669 = (state_38697[(2)]);var state_38697__$1 = state_38697;var statearr_38720_38782 = state_38697__$1;(statearr_38720_38782[(2)] = inst_38669);
(statearr_38720_38782[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (18)))
{var inst_38680 = (state_38697[(2)]);var state_38697__$1 = state_38697;var statearr_38721_38783 = state_38697__$1;(statearr_38721_38783[(2)] = inst_38680);
(statearr_38721_38783[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38698 === (8)))
{var inst_38666 = cljs.core.async.close_BANG_.call(null,to);var state_38697__$1 = state_38697;var statearr_38722_38784 = state_38697__$1;(statearr_38722_38784[(2)] = inst_38666);
(statearr_38722_38784[(1)] = (10));
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
});})(c__15156__auto__,jobs,results,process,async))
;return ((function (switch__15100__auto__,c__15156__auto__,jobs,results,process,async){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38726 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38726[(0)] = state_machine__15101__auto__);
(statearr_38726[(1)] = (1));
return statearr_38726;
});
var state_machine__15101__auto____1 = (function (state_38697){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38697);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38727){if((e38727 instanceof Object))
{var ex__15104__auto__ = e38727;var statearr_38728_38785 = state_38697;(statearr_38728_38785[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38697);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38727;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38786 = state_38697;
state_38697 = G__38786;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38697){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto__,jobs,results,process,async))
})();var state__15158__auto__ = (function (){var statearr_38729 = f__15157__auto__.call(null);(statearr_38729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto__);
return statearr_38729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto__,jobs,results,process,async))
);
return c__15156__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15156__auto___38887 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___38887,tc,fc){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___38887,tc,fc){
return (function (state_38862){var state_val_38863 = (state_38862[(1)]);if((state_val_38863 === (7)))
{var inst_38858 = (state_38862[(2)]);var state_38862__$1 = state_38862;var statearr_38864_38888 = state_38862__$1;(statearr_38864_38888[(2)] = inst_38858);
(statearr_38864_38888[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (1)))
{var state_38862__$1 = state_38862;var statearr_38865_38889 = state_38862__$1;(statearr_38865_38889[(2)] = null);
(statearr_38865_38889[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (4)))
{var inst_38839 = (state_38862[(7)]);var inst_38839__$1 = (state_38862[(2)]);var inst_38840 = (inst_38839__$1 == null);var state_38862__$1 = (function (){var statearr_38866 = state_38862;(statearr_38866[(7)] = inst_38839__$1);
return statearr_38866;
})();if(cljs.core.truth_(inst_38840))
{var statearr_38867_38890 = state_38862__$1;(statearr_38867_38890[(1)] = (5));
} else
{var statearr_38868_38891 = state_38862__$1;(statearr_38868_38891[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (13)))
{var state_38862__$1 = state_38862;var statearr_38869_38892 = state_38862__$1;(statearr_38869_38892[(2)] = null);
(statearr_38869_38892[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (6)))
{var inst_38839 = (state_38862[(7)]);var inst_38845 = p.call(null,inst_38839);var state_38862__$1 = state_38862;if(cljs.core.truth_(inst_38845))
{var statearr_38870_38893 = state_38862__$1;(statearr_38870_38893[(1)] = (9));
} else
{var statearr_38871_38894 = state_38862__$1;(statearr_38871_38894[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (3)))
{var inst_38860 = (state_38862[(2)]);var state_38862__$1 = state_38862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38862__$1,inst_38860);
} else
{if((state_val_38863 === (12)))
{var state_38862__$1 = state_38862;var statearr_38872_38895 = state_38862__$1;(statearr_38872_38895[(2)] = null);
(statearr_38872_38895[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (2)))
{var state_38862__$1 = state_38862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38862__$1,(4),ch);
} else
{if((state_val_38863 === (11)))
{var inst_38839 = (state_38862[(7)]);var inst_38849 = (state_38862[(2)]);var state_38862__$1 = state_38862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38862__$1,(8),inst_38849,inst_38839);
} else
{if((state_val_38863 === (9)))
{var state_38862__$1 = state_38862;var statearr_38873_38896 = state_38862__$1;(statearr_38873_38896[(2)] = tc);
(statearr_38873_38896[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (5)))
{var inst_38842 = cljs.core.async.close_BANG_.call(null,tc);var inst_38843 = cljs.core.async.close_BANG_.call(null,fc);var state_38862__$1 = (function (){var statearr_38874 = state_38862;(statearr_38874[(8)] = inst_38842);
return statearr_38874;
})();var statearr_38875_38897 = state_38862__$1;(statearr_38875_38897[(2)] = inst_38843);
(statearr_38875_38897[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (14)))
{var inst_38856 = (state_38862[(2)]);var state_38862__$1 = state_38862;var statearr_38876_38898 = state_38862__$1;(statearr_38876_38898[(2)] = inst_38856);
(statearr_38876_38898[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (10)))
{var state_38862__$1 = state_38862;var statearr_38877_38899 = state_38862__$1;(statearr_38877_38899[(2)] = fc);
(statearr_38877_38899[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38863 === (8)))
{var inst_38851 = (state_38862[(2)]);var state_38862__$1 = state_38862;if(cljs.core.truth_(inst_38851))
{var statearr_38878_38900 = state_38862__$1;(statearr_38878_38900[(1)] = (12));
} else
{var statearr_38879_38901 = state_38862__$1;(statearr_38879_38901[(1)] = (13));
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
});})(c__15156__auto___38887,tc,fc))
;return ((function (switch__15100__auto__,c__15156__auto___38887,tc,fc){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38883 = [null,null,null,null,null,null,null,null,null];(statearr_38883[(0)] = state_machine__15101__auto__);
(statearr_38883[(1)] = (1));
return statearr_38883;
});
var state_machine__15101__auto____1 = (function (state_38862){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38862);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38884){if((e38884 instanceof Object))
{var ex__15104__auto__ = e38884;var statearr_38885_38902 = state_38862;(statearr_38885_38902[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38884;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38903 = state_38862;
state_38862 = G__38903;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38862){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___38887,tc,fc))
})();var state__15158__auto__ = (function (){var statearr_38886 = f__15157__auto__.call(null);(statearr_38886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___38887);
return statearr_38886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___38887,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15156__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto__){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto__){
return (function (state_38950){var state_val_38951 = (state_38950[(1)]);if((state_val_38951 === (7)))
{var inst_38946 = (state_38950[(2)]);var state_38950__$1 = state_38950;var statearr_38952_38968 = state_38950__$1;(statearr_38952_38968[(2)] = inst_38946);
(statearr_38952_38968[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38951 === (6)))
{var inst_38936 = (state_38950[(7)]);var inst_38939 = (state_38950[(8)]);var inst_38943 = f.call(null,inst_38936,inst_38939);var inst_38936__$1 = inst_38943;var state_38950__$1 = (function (){var statearr_38953 = state_38950;(statearr_38953[(7)] = inst_38936__$1);
return statearr_38953;
})();var statearr_38954_38969 = state_38950__$1;(statearr_38954_38969[(2)] = null);
(statearr_38954_38969[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38951 === (5)))
{var inst_38936 = (state_38950[(7)]);var state_38950__$1 = state_38950;var statearr_38955_38970 = state_38950__$1;(statearr_38955_38970[(2)] = inst_38936);
(statearr_38955_38970[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38951 === (4)))
{var inst_38939 = (state_38950[(8)]);var inst_38939__$1 = (state_38950[(2)]);var inst_38940 = (inst_38939__$1 == null);var state_38950__$1 = (function (){var statearr_38956 = state_38950;(statearr_38956[(8)] = inst_38939__$1);
return statearr_38956;
})();if(cljs.core.truth_(inst_38940))
{var statearr_38957_38971 = state_38950__$1;(statearr_38957_38971[(1)] = (5));
} else
{var statearr_38958_38972 = state_38950__$1;(statearr_38958_38972[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38951 === (3)))
{var inst_38948 = (state_38950[(2)]);var state_38950__$1 = state_38950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38950__$1,inst_38948);
} else
{if((state_val_38951 === (2)))
{var state_38950__$1 = state_38950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38950__$1,(4),ch);
} else
{if((state_val_38951 === (1)))
{var inst_38936 = init;var state_38950__$1 = (function (){var statearr_38959 = state_38950;(statearr_38959[(7)] = inst_38936);
return statearr_38959;
})();var statearr_38960_38973 = state_38950__$1;(statearr_38960_38973[(2)] = null);
(statearr_38960_38973[(1)] = (2));
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
});})(c__15156__auto__))
;return ((function (switch__15100__auto__,c__15156__auto__){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38964 = [null,null,null,null,null,null,null,null,null];(statearr_38964[(0)] = state_machine__15101__auto__);
(statearr_38964[(1)] = (1));
return statearr_38964;
});
var state_machine__15101__auto____1 = (function (state_38950){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38950);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38965){if((e38965 instanceof Object))
{var ex__15104__auto__ = e38965;var statearr_38966_38974 = state_38950;(statearr_38966_38974[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38965;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38975 = state_38950;
state_38950 = G__38975;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38950){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto__))
})();var state__15158__auto__ = (function (){var statearr_38967 = f__15157__auto__.call(null);(statearr_38967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto__);
return statearr_38967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto__))
);
return c__15156__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15156__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto__){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto__){
return (function (state_39049){var state_val_39050 = (state_39049[(1)]);if((state_val_39050 === (7)))
{var inst_39031 = (state_39049[(2)]);var state_39049__$1 = state_39049;var statearr_39051_39074 = state_39049__$1;(statearr_39051_39074[(2)] = inst_39031);
(statearr_39051_39074[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (1)))
{var inst_39025 = cljs.core.seq.call(null,coll);var inst_39026 = inst_39025;var state_39049__$1 = (function (){var statearr_39052 = state_39049;(statearr_39052[(7)] = inst_39026);
return statearr_39052;
})();var statearr_39053_39075 = state_39049__$1;(statearr_39053_39075[(2)] = null);
(statearr_39053_39075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (4)))
{var inst_39026 = (state_39049[(7)]);var inst_39029 = cljs.core.first.call(null,inst_39026);var state_39049__$1 = state_39049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39049__$1,(7),ch,inst_39029);
} else
{if((state_val_39050 === (13)))
{var inst_39043 = (state_39049[(2)]);var state_39049__$1 = state_39049;var statearr_39054_39076 = state_39049__$1;(statearr_39054_39076[(2)] = inst_39043);
(statearr_39054_39076[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (6)))
{var inst_39034 = (state_39049[(2)]);var state_39049__$1 = state_39049;if(cljs.core.truth_(inst_39034))
{var statearr_39055_39077 = state_39049__$1;(statearr_39055_39077[(1)] = (8));
} else
{var statearr_39056_39078 = state_39049__$1;(statearr_39056_39078[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (3)))
{var inst_39047 = (state_39049[(2)]);var state_39049__$1 = state_39049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39049__$1,inst_39047);
} else
{if((state_val_39050 === (12)))
{var state_39049__$1 = state_39049;var statearr_39057_39079 = state_39049__$1;(statearr_39057_39079[(2)] = null);
(statearr_39057_39079[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (2)))
{var inst_39026 = (state_39049[(7)]);var state_39049__$1 = state_39049;if(cljs.core.truth_(inst_39026))
{var statearr_39058_39080 = state_39049__$1;(statearr_39058_39080[(1)] = (4));
} else
{var statearr_39059_39081 = state_39049__$1;(statearr_39059_39081[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (11)))
{var inst_39040 = cljs.core.async.close_BANG_.call(null,ch);var state_39049__$1 = state_39049;var statearr_39060_39082 = state_39049__$1;(statearr_39060_39082[(2)] = inst_39040);
(statearr_39060_39082[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (9)))
{var state_39049__$1 = state_39049;if(cljs.core.truth_(close_QMARK_))
{var statearr_39061_39083 = state_39049__$1;(statearr_39061_39083[(1)] = (11));
} else
{var statearr_39062_39084 = state_39049__$1;(statearr_39062_39084[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (5)))
{var inst_39026 = (state_39049[(7)]);var state_39049__$1 = state_39049;var statearr_39063_39085 = state_39049__$1;(statearr_39063_39085[(2)] = inst_39026);
(statearr_39063_39085[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (10)))
{var inst_39045 = (state_39049[(2)]);var state_39049__$1 = state_39049;var statearr_39064_39086 = state_39049__$1;(statearr_39064_39086[(2)] = inst_39045);
(statearr_39064_39086[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39050 === (8)))
{var inst_39026 = (state_39049[(7)]);var inst_39036 = cljs.core.next.call(null,inst_39026);var inst_39026__$1 = inst_39036;var state_39049__$1 = (function (){var statearr_39065 = state_39049;(statearr_39065[(7)] = inst_39026__$1);
return statearr_39065;
})();var statearr_39066_39087 = state_39049__$1;(statearr_39066_39087[(2)] = null);
(statearr_39066_39087[(1)] = (2));
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
});})(c__15156__auto__))
;return ((function (switch__15100__auto__,c__15156__auto__){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_39070 = [null,null,null,null,null,null,null,null];(statearr_39070[(0)] = state_machine__15101__auto__);
(statearr_39070[(1)] = (1));
return statearr_39070;
});
var state_machine__15101__auto____1 = (function (state_39049){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_39049);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e39071){if((e39071 instanceof Object))
{var ex__15104__auto__ = e39071;var statearr_39072_39088 = state_39049;(statearr_39072_39088[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39049);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e39071;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39089 = state_39049;
state_39049 = G__39089;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_39049){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_39049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto__))
})();var state__15158__auto__ = (function (){var statearr_39073 = f__15157__auto__.call(null);(statearr_39073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto__);
return statearr_39073;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto__))
);
return c__15156__auto__;
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
cljs.core.async.Mux = (function (){var obj39091 = {};return obj39091;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11486__auto__ = _;if(and__11486__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11486__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12135__auto__ = (((_ == null))?null:_);return (function (){var or__11498__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj39093 = {};return obj39093;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11486__auto__ = m;if(and__11486__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11486__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12135__auto__ = (((m == null))?null:m);return (function (){var or__11498__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11486__auto__ = m;if(and__11486__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11486__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12135__auto__ = (((m == null))?null:m);return (function (){var or__11498__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11486__auto__ = m;if(and__11486__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11486__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12135__auto__ = (((m == null))?null:m);return (function (){var or__11498__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t39315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39315 = (function (cs,ch,mult,meta39316){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta39316 = meta39316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39315.cljs$lang$type = true;
cljs.core.async.t39315.cljs$lang$ctorStr = "cljs.core.async/t39315";
cljs.core.async.t39315.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t39315");
});})(cs))
;
cljs.core.async.t39315.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t39315.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t39315.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t39315.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t39315.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39315.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t39315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39317){var self__ = this;
var _39317__$1 = this;return self__.meta39316;
});})(cs))
;
cljs.core.async.t39315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39317,meta39316__$1){var self__ = this;
var _39317__$1 = this;return (new cljs.core.async.t39315(self__.cs,self__.ch,self__.mult,meta39316__$1));
});})(cs))
;
cljs.core.async.__GT_t39315 = ((function (cs){
return (function __GT_t39315(cs__$1,ch__$1,mult__$1,meta39316){return (new cljs.core.async.t39315(cs__$1,ch__$1,mult__$1,meta39316));
});})(cs))
;
}
return (new cljs.core.async.t39315(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15156__auto___39536 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___39536,cs,m,dchan,dctr,done){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___39536,cs,m,dchan,dctr,done){
return (function (state_39448){var state_val_39449 = (state_39448[(1)]);if((state_val_39449 === (7)))
{var inst_39444 = (state_39448[(2)]);var state_39448__$1 = state_39448;var statearr_39450_39537 = state_39448__$1;(statearr_39450_39537[(2)] = inst_39444);
(statearr_39450_39537[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (20)))
{var inst_39349 = (state_39448[(7)]);var inst_39359 = cljs.core.first.call(null,inst_39349);var inst_39360 = cljs.core.nth.call(null,inst_39359,(0),null);var inst_39361 = cljs.core.nth.call(null,inst_39359,(1),null);var state_39448__$1 = (function (){var statearr_39451 = state_39448;(statearr_39451[(8)] = inst_39360);
return statearr_39451;
})();if(cljs.core.truth_(inst_39361))
{var statearr_39452_39538 = state_39448__$1;(statearr_39452_39538[(1)] = (22));
} else
{var statearr_39453_39539 = state_39448__$1;(statearr_39453_39539[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (27)))
{var inst_39320 = (state_39448[(9)]);var inst_39396 = (state_39448[(10)]);var inst_39389 = (state_39448[(11)]);var inst_39391 = (state_39448[(12)]);var inst_39396__$1 = cljs.core._nth.call(null,inst_39389,inst_39391);var inst_39397 = cljs.core.async.put_BANG_.call(null,inst_39396__$1,inst_39320,done);var state_39448__$1 = (function (){var statearr_39454 = state_39448;(statearr_39454[(10)] = inst_39396__$1);
return statearr_39454;
})();if(cljs.core.truth_(inst_39397))
{var statearr_39455_39540 = state_39448__$1;(statearr_39455_39540[(1)] = (30));
} else
{var statearr_39456_39541 = state_39448__$1;(statearr_39456_39541[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (1)))
{var state_39448__$1 = state_39448;var statearr_39457_39542 = state_39448__$1;(statearr_39457_39542[(2)] = null);
(statearr_39457_39542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (24)))
{var inst_39349 = (state_39448[(7)]);var inst_39366 = (state_39448[(2)]);var inst_39367 = cljs.core.next.call(null,inst_39349);var inst_39329 = inst_39367;var inst_39330 = null;var inst_39331 = (0);var inst_39332 = (0);var state_39448__$1 = (function (){var statearr_39458 = state_39448;(statearr_39458[(13)] = inst_39331);
(statearr_39458[(14)] = inst_39332);
(statearr_39458[(15)] = inst_39366);
(statearr_39458[(16)] = inst_39330);
(statearr_39458[(17)] = inst_39329);
return statearr_39458;
})();var statearr_39459_39543 = state_39448__$1;(statearr_39459_39543[(2)] = null);
(statearr_39459_39543[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (39)))
{var state_39448__$1 = state_39448;var statearr_39463_39544 = state_39448__$1;(statearr_39463_39544[(2)] = null);
(statearr_39463_39544[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (4)))
{var inst_39320 = (state_39448[(9)]);var inst_39320__$1 = (state_39448[(2)]);var inst_39321 = (inst_39320__$1 == null);var state_39448__$1 = (function (){var statearr_39464 = state_39448;(statearr_39464[(9)] = inst_39320__$1);
return statearr_39464;
})();if(cljs.core.truth_(inst_39321))
{var statearr_39465_39545 = state_39448__$1;(statearr_39465_39545[(1)] = (5));
} else
{var statearr_39466_39546 = state_39448__$1;(statearr_39466_39546[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (15)))
{var inst_39331 = (state_39448[(13)]);var inst_39332 = (state_39448[(14)]);var inst_39330 = (state_39448[(16)]);var inst_39329 = (state_39448[(17)]);var inst_39345 = (state_39448[(2)]);var inst_39346 = (inst_39332 + (1));var tmp39460 = inst_39331;var tmp39461 = inst_39330;var tmp39462 = inst_39329;var inst_39329__$1 = tmp39462;var inst_39330__$1 = tmp39461;var inst_39331__$1 = tmp39460;var inst_39332__$1 = inst_39346;var state_39448__$1 = (function (){var statearr_39467 = state_39448;(statearr_39467[(13)] = inst_39331__$1);
(statearr_39467[(18)] = inst_39345);
(statearr_39467[(14)] = inst_39332__$1);
(statearr_39467[(16)] = inst_39330__$1);
(statearr_39467[(17)] = inst_39329__$1);
return statearr_39467;
})();var statearr_39468_39547 = state_39448__$1;(statearr_39468_39547[(2)] = null);
(statearr_39468_39547[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (21)))
{var inst_39370 = (state_39448[(2)]);var state_39448__$1 = state_39448;var statearr_39472_39548 = state_39448__$1;(statearr_39472_39548[(2)] = inst_39370);
(statearr_39472_39548[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (31)))
{var inst_39396 = (state_39448[(10)]);var inst_39400 = done.call(null,null);var inst_39401 = cljs.core.async.untap_STAR_.call(null,m,inst_39396);var state_39448__$1 = (function (){var statearr_39473 = state_39448;(statearr_39473[(19)] = inst_39400);
return statearr_39473;
})();var statearr_39474_39549 = state_39448__$1;(statearr_39474_39549[(2)] = inst_39401);
(statearr_39474_39549[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (32)))
{var inst_39390 = (state_39448[(20)]);var inst_39389 = (state_39448[(11)]);var inst_39388 = (state_39448[(21)]);var inst_39391 = (state_39448[(12)]);var inst_39403 = (state_39448[(2)]);var inst_39404 = (inst_39391 + (1));var tmp39469 = inst_39390;var tmp39470 = inst_39389;var tmp39471 = inst_39388;var inst_39388__$1 = tmp39471;var inst_39389__$1 = tmp39470;var inst_39390__$1 = tmp39469;var inst_39391__$1 = inst_39404;var state_39448__$1 = (function (){var statearr_39475 = state_39448;(statearr_39475[(20)] = inst_39390__$1);
(statearr_39475[(11)] = inst_39389__$1);
(statearr_39475[(22)] = inst_39403);
(statearr_39475[(21)] = inst_39388__$1);
(statearr_39475[(12)] = inst_39391__$1);
return statearr_39475;
})();var statearr_39476_39550 = state_39448__$1;(statearr_39476_39550[(2)] = null);
(statearr_39476_39550[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (40)))
{var inst_39416 = (state_39448[(23)]);var inst_39420 = done.call(null,null);var inst_39421 = cljs.core.async.untap_STAR_.call(null,m,inst_39416);var state_39448__$1 = (function (){var statearr_39477 = state_39448;(statearr_39477[(24)] = inst_39420);
return statearr_39477;
})();var statearr_39478_39551 = state_39448__$1;(statearr_39478_39551[(2)] = inst_39421);
(statearr_39478_39551[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (33)))
{var inst_39407 = (state_39448[(25)]);var inst_39409 = cljs.core.chunked_seq_QMARK_.call(null,inst_39407);var state_39448__$1 = state_39448;if(inst_39409)
{var statearr_39479_39552 = state_39448__$1;(statearr_39479_39552[(1)] = (36));
} else
{var statearr_39480_39553 = state_39448__$1;(statearr_39480_39553[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (13)))
{var inst_39339 = (state_39448[(26)]);var inst_39342 = cljs.core.async.close_BANG_.call(null,inst_39339);var state_39448__$1 = state_39448;var statearr_39481_39554 = state_39448__$1;(statearr_39481_39554[(2)] = inst_39342);
(statearr_39481_39554[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (22)))
{var inst_39360 = (state_39448[(8)]);var inst_39363 = cljs.core.async.close_BANG_.call(null,inst_39360);var state_39448__$1 = state_39448;var statearr_39482_39555 = state_39448__$1;(statearr_39482_39555[(2)] = inst_39363);
(statearr_39482_39555[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (36)))
{var inst_39407 = (state_39448[(25)]);var inst_39411 = cljs.core.chunk_first.call(null,inst_39407);var inst_39412 = cljs.core.chunk_rest.call(null,inst_39407);var inst_39413 = cljs.core.count.call(null,inst_39411);var inst_39388 = inst_39412;var inst_39389 = inst_39411;var inst_39390 = inst_39413;var inst_39391 = (0);var state_39448__$1 = (function (){var statearr_39483 = state_39448;(statearr_39483[(20)] = inst_39390);
(statearr_39483[(11)] = inst_39389);
(statearr_39483[(21)] = inst_39388);
(statearr_39483[(12)] = inst_39391);
return statearr_39483;
})();var statearr_39484_39556 = state_39448__$1;(statearr_39484_39556[(2)] = null);
(statearr_39484_39556[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (41)))
{var inst_39407 = (state_39448[(25)]);var inst_39423 = (state_39448[(2)]);var inst_39424 = cljs.core.next.call(null,inst_39407);var inst_39388 = inst_39424;var inst_39389 = null;var inst_39390 = (0);var inst_39391 = (0);var state_39448__$1 = (function (){var statearr_39485 = state_39448;(statearr_39485[(20)] = inst_39390);
(statearr_39485[(11)] = inst_39389);
(statearr_39485[(27)] = inst_39423);
(statearr_39485[(21)] = inst_39388);
(statearr_39485[(12)] = inst_39391);
return statearr_39485;
})();var statearr_39486_39557 = state_39448__$1;(statearr_39486_39557[(2)] = null);
(statearr_39486_39557[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (43)))
{var state_39448__$1 = state_39448;var statearr_39487_39558 = state_39448__$1;(statearr_39487_39558[(2)] = null);
(statearr_39487_39558[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (29)))
{var inst_39432 = (state_39448[(2)]);var state_39448__$1 = state_39448;var statearr_39488_39559 = state_39448__$1;(statearr_39488_39559[(2)] = inst_39432);
(statearr_39488_39559[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (44)))
{var inst_39441 = (state_39448[(2)]);var state_39448__$1 = (function (){var statearr_39489 = state_39448;(statearr_39489[(28)] = inst_39441);
return statearr_39489;
})();var statearr_39490_39560 = state_39448__$1;(statearr_39490_39560[(2)] = null);
(statearr_39490_39560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (6)))
{var inst_39380 = (state_39448[(29)]);var inst_39379 = cljs.core.deref.call(null,cs);var inst_39380__$1 = cljs.core.keys.call(null,inst_39379);var inst_39381 = cljs.core.count.call(null,inst_39380__$1);var inst_39382 = cljs.core.reset_BANG_.call(null,dctr,inst_39381);var inst_39387 = cljs.core.seq.call(null,inst_39380__$1);var inst_39388 = inst_39387;var inst_39389 = null;var inst_39390 = (0);var inst_39391 = (0);var state_39448__$1 = (function (){var statearr_39491 = state_39448;(statearr_39491[(20)] = inst_39390);
(statearr_39491[(11)] = inst_39389);
(statearr_39491[(30)] = inst_39382);
(statearr_39491[(29)] = inst_39380__$1);
(statearr_39491[(21)] = inst_39388);
(statearr_39491[(12)] = inst_39391);
return statearr_39491;
})();var statearr_39492_39561 = state_39448__$1;(statearr_39492_39561[(2)] = null);
(statearr_39492_39561[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (28)))
{var inst_39407 = (state_39448[(25)]);var inst_39388 = (state_39448[(21)]);var inst_39407__$1 = cljs.core.seq.call(null,inst_39388);var state_39448__$1 = (function (){var statearr_39493 = state_39448;(statearr_39493[(25)] = inst_39407__$1);
return statearr_39493;
})();if(inst_39407__$1)
{var statearr_39494_39562 = state_39448__$1;(statearr_39494_39562[(1)] = (33));
} else
{var statearr_39495_39563 = state_39448__$1;(statearr_39495_39563[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (25)))
{var inst_39390 = (state_39448[(20)]);var inst_39391 = (state_39448[(12)]);var inst_39393 = (inst_39391 < inst_39390);var inst_39394 = inst_39393;var state_39448__$1 = state_39448;if(cljs.core.truth_(inst_39394))
{var statearr_39496_39564 = state_39448__$1;(statearr_39496_39564[(1)] = (27));
} else
{var statearr_39497_39565 = state_39448__$1;(statearr_39497_39565[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (34)))
{var state_39448__$1 = state_39448;var statearr_39498_39566 = state_39448__$1;(statearr_39498_39566[(2)] = null);
(statearr_39498_39566[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (17)))
{var state_39448__$1 = state_39448;var statearr_39499_39567 = state_39448__$1;(statearr_39499_39567[(2)] = null);
(statearr_39499_39567[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (3)))
{var inst_39446 = (state_39448[(2)]);var state_39448__$1 = state_39448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39448__$1,inst_39446);
} else
{if((state_val_39449 === (12)))
{var inst_39375 = (state_39448[(2)]);var state_39448__$1 = state_39448;var statearr_39500_39568 = state_39448__$1;(statearr_39500_39568[(2)] = inst_39375);
(statearr_39500_39568[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (2)))
{var state_39448__$1 = state_39448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39448__$1,(4),ch);
} else
{if((state_val_39449 === (23)))
{var state_39448__$1 = state_39448;var statearr_39501_39569 = state_39448__$1;(statearr_39501_39569[(2)] = null);
(statearr_39501_39569[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (35)))
{var inst_39430 = (state_39448[(2)]);var state_39448__$1 = state_39448;var statearr_39502_39570 = state_39448__$1;(statearr_39502_39570[(2)] = inst_39430);
(statearr_39502_39570[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (19)))
{var inst_39349 = (state_39448[(7)]);var inst_39353 = cljs.core.chunk_first.call(null,inst_39349);var inst_39354 = cljs.core.chunk_rest.call(null,inst_39349);var inst_39355 = cljs.core.count.call(null,inst_39353);var inst_39329 = inst_39354;var inst_39330 = inst_39353;var inst_39331 = inst_39355;var inst_39332 = (0);var state_39448__$1 = (function (){var statearr_39503 = state_39448;(statearr_39503[(13)] = inst_39331);
(statearr_39503[(14)] = inst_39332);
(statearr_39503[(16)] = inst_39330);
(statearr_39503[(17)] = inst_39329);
return statearr_39503;
})();var statearr_39504_39571 = state_39448__$1;(statearr_39504_39571[(2)] = null);
(statearr_39504_39571[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (11)))
{var inst_39329 = (state_39448[(17)]);var inst_39349 = (state_39448[(7)]);var inst_39349__$1 = cljs.core.seq.call(null,inst_39329);var state_39448__$1 = (function (){var statearr_39505 = state_39448;(statearr_39505[(7)] = inst_39349__$1);
return statearr_39505;
})();if(inst_39349__$1)
{var statearr_39506_39572 = state_39448__$1;(statearr_39506_39572[(1)] = (16));
} else
{var statearr_39507_39573 = state_39448__$1;(statearr_39507_39573[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (9)))
{var inst_39377 = (state_39448[(2)]);var state_39448__$1 = state_39448;var statearr_39508_39574 = state_39448__$1;(statearr_39508_39574[(2)] = inst_39377);
(statearr_39508_39574[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (5)))
{var inst_39327 = cljs.core.deref.call(null,cs);var inst_39328 = cljs.core.seq.call(null,inst_39327);var inst_39329 = inst_39328;var inst_39330 = null;var inst_39331 = (0);var inst_39332 = (0);var state_39448__$1 = (function (){var statearr_39509 = state_39448;(statearr_39509[(13)] = inst_39331);
(statearr_39509[(14)] = inst_39332);
(statearr_39509[(16)] = inst_39330);
(statearr_39509[(17)] = inst_39329);
return statearr_39509;
})();var statearr_39510_39575 = state_39448__$1;(statearr_39510_39575[(2)] = null);
(statearr_39510_39575[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (14)))
{var state_39448__$1 = state_39448;var statearr_39511_39576 = state_39448__$1;(statearr_39511_39576[(2)] = null);
(statearr_39511_39576[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (45)))
{var inst_39438 = (state_39448[(2)]);var state_39448__$1 = state_39448;var statearr_39512_39577 = state_39448__$1;(statearr_39512_39577[(2)] = inst_39438);
(statearr_39512_39577[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (26)))
{var inst_39380 = (state_39448[(29)]);var inst_39434 = (state_39448[(2)]);var inst_39435 = cljs.core.seq.call(null,inst_39380);var state_39448__$1 = (function (){var statearr_39513 = state_39448;(statearr_39513[(31)] = inst_39434);
return statearr_39513;
})();if(inst_39435)
{var statearr_39514_39578 = state_39448__$1;(statearr_39514_39578[(1)] = (42));
} else
{var statearr_39515_39579 = state_39448__$1;(statearr_39515_39579[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (16)))
{var inst_39349 = (state_39448[(7)]);var inst_39351 = cljs.core.chunked_seq_QMARK_.call(null,inst_39349);var state_39448__$1 = state_39448;if(inst_39351)
{var statearr_39516_39580 = state_39448__$1;(statearr_39516_39580[(1)] = (19));
} else
{var statearr_39517_39581 = state_39448__$1;(statearr_39517_39581[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (38)))
{var inst_39427 = (state_39448[(2)]);var state_39448__$1 = state_39448;var statearr_39518_39582 = state_39448__$1;(statearr_39518_39582[(2)] = inst_39427);
(statearr_39518_39582[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (30)))
{var state_39448__$1 = state_39448;var statearr_39519_39583 = state_39448__$1;(statearr_39519_39583[(2)] = null);
(statearr_39519_39583[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (10)))
{var inst_39332 = (state_39448[(14)]);var inst_39330 = (state_39448[(16)]);var inst_39338 = cljs.core._nth.call(null,inst_39330,inst_39332);var inst_39339 = cljs.core.nth.call(null,inst_39338,(0),null);var inst_39340 = cljs.core.nth.call(null,inst_39338,(1),null);var state_39448__$1 = (function (){var statearr_39520 = state_39448;(statearr_39520[(26)] = inst_39339);
return statearr_39520;
})();if(cljs.core.truth_(inst_39340))
{var statearr_39521_39584 = state_39448__$1;(statearr_39521_39584[(1)] = (13));
} else
{var statearr_39522_39585 = state_39448__$1;(statearr_39522_39585[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (18)))
{var inst_39373 = (state_39448[(2)]);var state_39448__$1 = state_39448;var statearr_39523_39586 = state_39448__$1;(statearr_39523_39586[(2)] = inst_39373);
(statearr_39523_39586[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (42)))
{var state_39448__$1 = state_39448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39448__$1,(45),dchan);
} else
{if((state_val_39449 === (37)))
{var inst_39320 = (state_39448[(9)]);var inst_39416 = (state_39448[(23)]);var inst_39407 = (state_39448[(25)]);var inst_39416__$1 = cljs.core.first.call(null,inst_39407);var inst_39417 = cljs.core.async.put_BANG_.call(null,inst_39416__$1,inst_39320,done);var state_39448__$1 = (function (){var statearr_39524 = state_39448;(statearr_39524[(23)] = inst_39416__$1);
return statearr_39524;
})();if(cljs.core.truth_(inst_39417))
{var statearr_39525_39587 = state_39448__$1;(statearr_39525_39587[(1)] = (39));
} else
{var statearr_39526_39588 = state_39448__$1;(statearr_39526_39588[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39449 === (8)))
{var inst_39331 = (state_39448[(13)]);var inst_39332 = (state_39448[(14)]);var inst_39334 = (inst_39332 < inst_39331);var inst_39335 = inst_39334;var state_39448__$1 = state_39448;if(cljs.core.truth_(inst_39335))
{var statearr_39527_39589 = state_39448__$1;(statearr_39527_39589[(1)] = (10));
} else
{var statearr_39528_39590 = state_39448__$1;(statearr_39528_39590[(1)] = (11));
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
});})(c__15156__auto___39536,cs,m,dchan,dctr,done))
;return ((function (switch__15100__auto__,c__15156__auto___39536,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_39532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39532[(0)] = state_machine__15101__auto__);
(statearr_39532[(1)] = (1));
return statearr_39532;
});
var state_machine__15101__auto____1 = (function (state_39448){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_39448);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e39533){if((e39533 instanceof Object))
{var ex__15104__auto__ = e39533;var statearr_39534_39591 = state_39448;(statearr_39534_39591[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39448);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e39533;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39592 = state_39448;
state_39448 = G__39592;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_39448){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_39448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___39536,cs,m,dchan,dctr,done))
})();var state__15158__auto__ = (function (){var statearr_39535 = f__15157__auto__.call(null);(statearr_39535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___39536);
return statearr_39535;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___39536,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj39594 = {};return obj39594;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11486__auto__ = m;if(and__11486__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11486__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12135__auto__ = (((m == null))?null:m);return (function (){var or__11498__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11486__auto__ = m;if(and__11486__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11486__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12135__auto__ = (((m == null))?null:m);return (function (){var or__11498__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11486__auto__ = m;if(and__11486__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11486__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12135__auto__ = (((m == null))?null:m);return (function (){var or__11498__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11486__auto__ = m;if(and__11486__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11486__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12135__auto__ = (((m == null))?null:m);return (function (){var or__11498__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11486__auto__ = m;if(and__11486__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11486__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12135__auto__ = (((m == null))?null:m);return (function (){var or__11498__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__39595){var map__39600 = p__39595;var map__39600__$1 = ((cljs.core.seq_QMARK_.call(null,map__39600))?cljs.core.apply.call(null,cljs.core.hash_map,map__39600):map__39600);var opts = map__39600__$1;var statearr_39601_39604 = state;(statearr_39601_39604[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__39600,map__39600__$1,opts){
return (function (val){var statearr_39602_39605 = state;(statearr_39602_39605[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39600,map__39600__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4388__auto__))
{var cb = temp__4388__auto__;var statearr_39603_39606 = state;(statearr_39603_39606[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__39595 = null;if (arguments.length > 3) {
  p__39595 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__39595);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__39607){
var state = cljs.core.first(arglist__39607);
arglist__39607 = cljs.core.next(arglist__39607);
var cont_block = cljs.core.first(arglist__39607);
arglist__39607 = cljs.core.next(arglist__39607);
var ports = cljs.core.first(arglist__39607);
var p__39595 = cljs.core.rest(arglist__39607);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__39595);
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
;var m = (function (){if(typeof cljs.core.async.t39727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39727 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39728){
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
this.meta39728 = meta39728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39727.cljs$lang$type = true;
cljs.core.async.t39727.cljs$lang$ctorStr = "cljs.core.async/t39727";
cljs.core.async.t39727.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t39727");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39727.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t39727.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39727.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39727.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39727.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39727.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39727.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39727.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39729){var self__ = this;
var _39729__$1 = this;return self__.meta39728;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39729,meta39728__$1){var self__ = this;
var _39729__$1 = this;return (new cljs.core.async.t39727(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39728__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t39727 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t39727(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39728){return (new cljs.core.async.t39727(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39728));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t39727(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15156__auto___39846 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___39846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___39846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39799){var state_val_39800 = (state_39799[(1)]);if((state_val_39800 === (7)))
{var inst_39743 = (state_39799[(7)]);var inst_39748 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39743);var state_39799__$1 = state_39799;var statearr_39801_39847 = state_39799__$1;(statearr_39801_39847[(2)] = inst_39748);
(statearr_39801_39847[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (20)))
{var inst_39758 = (state_39799[(8)]);var state_39799__$1 = state_39799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39799__$1,(23),out,inst_39758);
} else
{if((state_val_39800 === (1)))
{var inst_39733 = (state_39799[(9)]);var inst_39733__$1 = calc_state.call(null);var inst_39734 = cljs.core.seq_QMARK_.call(null,inst_39733__$1);var state_39799__$1 = (function (){var statearr_39802 = state_39799;(statearr_39802[(9)] = inst_39733__$1);
return statearr_39802;
})();if(inst_39734)
{var statearr_39803_39848 = state_39799__$1;(statearr_39803_39848[(1)] = (2));
} else
{var statearr_39804_39849 = state_39799__$1;(statearr_39804_39849[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (24)))
{var inst_39751 = (state_39799[(10)]);var inst_39743 = inst_39751;var state_39799__$1 = (function (){var statearr_39805 = state_39799;(statearr_39805[(7)] = inst_39743);
return statearr_39805;
})();var statearr_39806_39850 = state_39799__$1;(statearr_39806_39850[(2)] = null);
(statearr_39806_39850[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (4)))
{var inst_39733 = (state_39799[(9)]);var inst_39739 = (state_39799[(2)]);var inst_39740 = cljs.core.get.call(null,inst_39739,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_39741 = cljs.core.get.call(null,inst_39739,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_39742 = cljs.core.get.call(null,inst_39739,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_39743 = inst_39733;var state_39799__$1 = (function (){var statearr_39807 = state_39799;(statearr_39807[(11)] = inst_39741);
(statearr_39807[(7)] = inst_39743);
(statearr_39807[(12)] = inst_39740);
(statearr_39807[(13)] = inst_39742);
return statearr_39807;
})();var statearr_39808_39851 = state_39799__$1;(statearr_39808_39851[(2)] = null);
(statearr_39808_39851[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (15)))
{var state_39799__$1 = state_39799;var statearr_39809_39852 = state_39799__$1;(statearr_39809_39852[(2)] = null);
(statearr_39809_39852[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (21)))
{var inst_39751 = (state_39799[(10)]);var inst_39743 = inst_39751;var state_39799__$1 = (function (){var statearr_39810 = state_39799;(statearr_39810[(7)] = inst_39743);
return statearr_39810;
})();var statearr_39811_39853 = state_39799__$1;(statearr_39811_39853[(2)] = null);
(statearr_39811_39853[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (13)))
{var inst_39795 = (state_39799[(2)]);var state_39799__$1 = state_39799;var statearr_39812_39854 = state_39799__$1;(statearr_39812_39854[(2)] = inst_39795);
(statearr_39812_39854[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (22)))
{var inst_39793 = (state_39799[(2)]);var state_39799__$1 = state_39799;var statearr_39813_39855 = state_39799__$1;(statearr_39813_39855[(2)] = inst_39793);
(statearr_39813_39855[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (6)))
{var inst_39797 = (state_39799[(2)]);var state_39799__$1 = state_39799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39799__$1,inst_39797);
} else
{if((state_val_39800 === (25)))
{var state_39799__$1 = state_39799;var statearr_39814_39856 = state_39799__$1;(statearr_39814_39856[(2)] = null);
(statearr_39814_39856[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (17)))
{var inst_39773 = (state_39799[(14)]);var state_39799__$1 = state_39799;var statearr_39815_39857 = state_39799__$1;(statearr_39815_39857[(2)] = inst_39773);
(statearr_39815_39857[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (3)))
{var inst_39733 = (state_39799[(9)]);var state_39799__$1 = state_39799;var statearr_39816_39858 = state_39799__$1;(statearr_39816_39858[(2)] = inst_39733);
(statearr_39816_39858[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (12)))
{var inst_39754 = (state_39799[(15)]);var inst_39773 = (state_39799[(14)]);var inst_39759 = (state_39799[(16)]);var inst_39773__$1 = inst_39754.call(null,inst_39759);var state_39799__$1 = (function (){var statearr_39817 = state_39799;(statearr_39817[(14)] = inst_39773__$1);
return statearr_39817;
})();if(cljs.core.truth_(inst_39773__$1))
{var statearr_39818_39859 = state_39799__$1;(statearr_39818_39859[(1)] = (17));
} else
{var statearr_39819_39860 = state_39799__$1;(statearr_39819_39860[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (2)))
{var inst_39733 = (state_39799[(9)]);var inst_39736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39733);var state_39799__$1 = state_39799;var statearr_39820_39861 = state_39799__$1;(statearr_39820_39861[(2)] = inst_39736);
(statearr_39820_39861[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (23)))
{var inst_39784 = (state_39799[(2)]);var state_39799__$1 = state_39799;if(cljs.core.truth_(inst_39784))
{var statearr_39821_39862 = state_39799__$1;(statearr_39821_39862[(1)] = (24));
} else
{var statearr_39822_39863 = state_39799__$1;(statearr_39822_39863[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (19)))
{var inst_39781 = (state_39799[(2)]);var state_39799__$1 = state_39799;if(cljs.core.truth_(inst_39781))
{var statearr_39823_39864 = state_39799__$1;(statearr_39823_39864[(1)] = (20));
} else
{var statearr_39824_39865 = state_39799__$1;(statearr_39824_39865[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (11)))
{var inst_39758 = (state_39799[(8)]);var inst_39764 = (inst_39758 == null);var state_39799__$1 = state_39799;if(cljs.core.truth_(inst_39764))
{var statearr_39825_39866 = state_39799__$1;(statearr_39825_39866[(1)] = (14));
} else
{var statearr_39826_39867 = state_39799__$1;(statearr_39826_39867[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (9)))
{var inst_39751 = (state_39799[(10)]);var inst_39751__$1 = (state_39799[(2)]);var inst_39752 = cljs.core.get.call(null,inst_39751__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_39753 = cljs.core.get.call(null,inst_39751__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_39754 = cljs.core.get.call(null,inst_39751__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_39799__$1 = (function (){var statearr_39827 = state_39799;(statearr_39827[(15)] = inst_39754);
(statearr_39827[(17)] = inst_39753);
(statearr_39827[(10)] = inst_39751__$1);
return statearr_39827;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_39799__$1,(10),inst_39752);
} else
{if((state_val_39800 === (5)))
{var inst_39743 = (state_39799[(7)]);var inst_39746 = cljs.core.seq_QMARK_.call(null,inst_39743);var state_39799__$1 = state_39799;if(inst_39746)
{var statearr_39828_39868 = state_39799__$1;(statearr_39828_39868[(1)] = (7));
} else
{var statearr_39829_39869 = state_39799__$1;(statearr_39829_39869[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (14)))
{var inst_39759 = (state_39799[(16)]);var inst_39766 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39759);var state_39799__$1 = state_39799;var statearr_39830_39870 = state_39799__$1;(statearr_39830_39870[(2)] = inst_39766);
(statearr_39830_39870[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (26)))
{var inst_39789 = (state_39799[(2)]);var state_39799__$1 = state_39799;var statearr_39831_39871 = state_39799__$1;(statearr_39831_39871[(2)] = inst_39789);
(statearr_39831_39871[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (16)))
{var inst_39769 = (state_39799[(2)]);var inst_39770 = calc_state.call(null);var inst_39743 = inst_39770;var state_39799__$1 = (function (){var statearr_39832 = state_39799;(statearr_39832[(18)] = inst_39769);
(statearr_39832[(7)] = inst_39743);
return statearr_39832;
})();var statearr_39833_39872 = state_39799__$1;(statearr_39833_39872[(2)] = null);
(statearr_39833_39872[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (10)))
{var inst_39759 = (state_39799[(16)]);var inst_39758 = (state_39799[(8)]);var inst_39757 = (state_39799[(2)]);var inst_39758__$1 = cljs.core.nth.call(null,inst_39757,(0),null);var inst_39759__$1 = cljs.core.nth.call(null,inst_39757,(1),null);var inst_39760 = (inst_39758__$1 == null);var inst_39761 = cljs.core._EQ_.call(null,inst_39759__$1,change);var inst_39762 = (inst_39760) || (inst_39761);var state_39799__$1 = (function (){var statearr_39834 = state_39799;(statearr_39834[(16)] = inst_39759__$1);
(statearr_39834[(8)] = inst_39758__$1);
return statearr_39834;
})();if(cljs.core.truth_(inst_39762))
{var statearr_39835_39873 = state_39799__$1;(statearr_39835_39873[(1)] = (11));
} else
{var statearr_39836_39874 = state_39799__$1;(statearr_39836_39874[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (18)))
{var inst_39754 = (state_39799[(15)]);var inst_39753 = (state_39799[(17)]);var inst_39759 = (state_39799[(16)]);var inst_39776 = cljs.core.empty_QMARK_.call(null,inst_39754);var inst_39777 = inst_39753.call(null,inst_39759);var inst_39778 = cljs.core.not.call(null,inst_39777);var inst_39779 = (inst_39776) && (inst_39778);var state_39799__$1 = state_39799;var statearr_39837_39875 = state_39799__$1;(statearr_39837_39875[(2)] = inst_39779);
(statearr_39837_39875[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39800 === (8)))
{var inst_39743 = (state_39799[(7)]);var state_39799__$1 = state_39799;var statearr_39838_39876 = state_39799__$1;(statearr_39838_39876[(2)] = inst_39743);
(statearr_39838_39876[(1)] = (9));
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
});})(c__15156__auto___39846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15100__auto__,c__15156__auto___39846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_39842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39842[(0)] = state_machine__15101__auto__);
(statearr_39842[(1)] = (1));
return statearr_39842;
});
var state_machine__15101__auto____1 = (function (state_39799){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_39799);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e39843){if((e39843 instanceof Object))
{var ex__15104__auto__ = e39843;var statearr_39844_39877 = state_39799;(statearr_39844_39877[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e39843;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39878 = state_39799;
state_39799 = G__39878;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_39799){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_39799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___39846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15158__auto__ = (function (){var statearr_39845 = f__15157__auto__.call(null);(statearr_39845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___39846);
return statearr_39845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___39846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj39880 = {};return obj39880;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11486__auto__ = p;if(and__11486__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11486__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12135__auto__ = (((p == null))?null:p);return (function (){var or__11498__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11486__auto__ = p;if(and__11486__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11486__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12135__auto__ = (((p == null))?null:p);return (function (){var or__11498__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11486__auto__ = p;if(and__11486__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11486__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12135__auto__ = (((p == null))?null:p);return (function (){var or__11498__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11486__auto__ = p;if(and__11486__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11486__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12135__auto__ = (((p == null))?null:p);return (function (){var or__11498__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
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
return (function (topic){var or__11498__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11498__auto__,mults){
return (function (p1__39881_SHARP_){if(cljs.core.truth_(p1__39881_SHARP_.call(null,topic)))
{return p1__39881_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__39881_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11498__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t40004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40004 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta40005){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta40005 = meta40005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40004.cljs$lang$type = true;
cljs.core.async.t40004.cljs$lang$ctorStr = "cljs.core.async/t40004";
cljs.core.async.t40004.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t40004");
});})(mults,ensure_mult))
;
cljs.core.async.t40004.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t40004.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t40004.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4388__auto__))
{var m = temp__4388__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t40004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t40004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t40004.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t40004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t40004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40006){var self__ = this;
var _40006__$1 = this;return self__.meta40005;
});})(mults,ensure_mult))
;
cljs.core.async.t40004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40006,meta40005__$1){var self__ = this;
var _40006__$1 = this;return (new cljs.core.async.t40004(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta40005__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t40004 = ((function (mults,ensure_mult){
return (function __GT_t40004(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40005){return (new cljs.core.async.t40004(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40005));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t40004(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15156__auto___40126 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___40126,mults,ensure_mult,p){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___40126,mults,ensure_mult,p){
return (function (state_40078){var state_val_40079 = (state_40078[(1)]);if((state_val_40079 === (7)))
{var inst_40074 = (state_40078[(2)]);var state_40078__$1 = state_40078;var statearr_40080_40127 = state_40078__$1;(statearr_40080_40127[(2)] = inst_40074);
(statearr_40080_40127[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (20)))
{var state_40078__$1 = state_40078;var statearr_40081_40128 = state_40078__$1;(statearr_40081_40128[(2)] = null);
(statearr_40081_40128[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (1)))
{var state_40078__$1 = state_40078;var statearr_40082_40129 = state_40078__$1;(statearr_40082_40129[(2)] = null);
(statearr_40082_40129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (24)))
{var inst_40057 = (state_40078[(7)]);var inst_40066 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40057);var state_40078__$1 = state_40078;var statearr_40083_40130 = state_40078__$1;(statearr_40083_40130[(2)] = inst_40066);
(statearr_40083_40130[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (4)))
{var inst_40009 = (state_40078[(8)]);var inst_40009__$1 = (state_40078[(2)]);var inst_40010 = (inst_40009__$1 == null);var state_40078__$1 = (function (){var statearr_40084 = state_40078;(statearr_40084[(8)] = inst_40009__$1);
return statearr_40084;
})();if(cljs.core.truth_(inst_40010))
{var statearr_40085_40131 = state_40078__$1;(statearr_40085_40131[(1)] = (5));
} else
{var statearr_40086_40132 = state_40078__$1;(statearr_40086_40132[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (15)))
{var inst_40051 = (state_40078[(2)]);var state_40078__$1 = state_40078;var statearr_40087_40133 = state_40078__$1;(statearr_40087_40133[(2)] = inst_40051);
(statearr_40087_40133[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (21)))
{var inst_40071 = (state_40078[(2)]);var state_40078__$1 = (function (){var statearr_40088 = state_40078;(statearr_40088[(9)] = inst_40071);
return statearr_40088;
})();var statearr_40089_40134 = state_40078__$1;(statearr_40089_40134[(2)] = null);
(statearr_40089_40134[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (13)))
{var inst_40033 = (state_40078[(10)]);var inst_40035 = cljs.core.chunked_seq_QMARK_.call(null,inst_40033);var state_40078__$1 = state_40078;if(inst_40035)
{var statearr_40090_40135 = state_40078__$1;(statearr_40090_40135[(1)] = (16));
} else
{var statearr_40091_40136 = state_40078__$1;(statearr_40091_40136[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (22)))
{var inst_40063 = (state_40078[(2)]);var state_40078__$1 = state_40078;if(cljs.core.truth_(inst_40063))
{var statearr_40092_40137 = state_40078__$1;(statearr_40092_40137[(1)] = (23));
} else
{var statearr_40093_40138 = state_40078__$1;(statearr_40093_40138[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (6)))
{var inst_40009 = (state_40078[(8)]);var inst_40057 = (state_40078[(7)]);var inst_40059 = (state_40078[(11)]);var inst_40057__$1 = topic_fn.call(null,inst_40009);var inst_40058 = cljs.core.deref.call(null,mults);var inst_40059__$1 = cljs.core.get.call(null,inst_40058,inst_40057__$1);var state_40078__$1 = (function (){var statearr_40094 = state_40078;(statearr_40094[(7)] = inst_40057__$1);
(statearr_40094[(11)] = inst_40059__$1);
return statearr_40094;
})();if(cljs.core.truth_(inst_40059__$1))
{var statearr_40095_40139 = state_40078__$1;(statearr_40095_40139[(1)] = (19));
} else
{var statearr_40096_40140 = state_40078__$1;(statearr_40096_40140[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (25)))
{var inst_40068 = (state_40078[(2)]);var state_40078__$1 = state_40078;var statearr_40097_40141 = state_40078__$1;(statearr_40097_40141[(2)] = inst_40068);
(statearr_40097_40141[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (17)))
{var inst_40033 = (state_40078[(10)]);var inst_40042 = cljs.core.first.call(null,inst_40033);var inst_40043 = cljs.core.async.muxch_STAR_.call(null,inst_40042);var inst_40044 = cljs.core.async.close_BANG_.call(null,inst_40043);var inst_40045 = cljs.core.next.call(null,inst_40033);var inst_40019 = inst_40045;var inst_40020 = null;var inst_40021 = (0);var inst_40022 = (0);var state_40078__$1 = (function (){var statearr_40098 = state_40078;(statearr_40098[(12)] = inst_40021);
(statearr_40098[(13)] = inst_40020);
(statearr_40098[(14)] = inst_40022);
(statearr_40098[(15)] = inst_40019);
(statearr_40098[(16)] = inst_40044);
return statearr_40098;
})();var statearr_40099_40142 = state_40078__$1;(statearr_40099_40142[(2)] = null);
(statearr_40099_40142[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (3)))
{var inst_40076 = (state_40078[(2)]);var state_40078__$1 = state_40078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40078__$1,inst_40076);
} else
{if((state_val_40079 === (12)))
{var inst_40053 = (state_40078[(2)]);var state_40078__$1 = state_40078;var statearr_40100_40143 = state_40078__$1;(statearr_40100_40143[(2)] = inst_40053);
(statearr_40100_40143[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (2)))
{var state_40078__$1 = state_40078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40078__$1,(4),ch);
} else
{if((state_val_40079 === (23)))
{var state_40078__$1 = state_40078;var statearr_40101_40144 = state_40078__$1;(statearr_40101_40144[(2)] = null);
(statearr_40101_40144[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (19)))
{var inst_40009 = (state_40078[(8)]);var inst_40059 = (state_40078[(11)]);var inst_40061 = cljs.core.async.muxch_STAR_.call(null,inst_40059);var state_40078__$1 = state_40078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40078__$1,(22),inst_40061,inst_40009);
} else
{if((state_val_40079 === (11)))
{var inst_40033 = (state_40078[(10)]);var inst_40019 = (state_40078[(15)]);var inst_40033__$1 = cljs.core.seq.call(null,inst_40019);var state_40078__$1 = (function (){var statearr_40102 = state_40078;(statearr_40102[(10)] = inst_40033__$1);
return statearr_40102;
})();if(inst_40033__$1)
{var statearr_40103_40145 = state_40078__$1;(statearr_40103_40145[(1)] = (13));
} else
{var statearr_40104_40146 = state_40078__$1;(statearr_40104_40146[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (9)))
{var inst_40055 = (state_40078[(2)]);var state_40078__$1 = state_40078;var statearr_40105_40147 = state_40078__$1;(statearr_40105_40147[(2)] = inst_40055);
(statearr_40105_40147[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (5)))
{var inst_40016 = cljs.core.deref.call(null,mults);var inst_40017 = cljs.core.vals.call(null,inst_40016);var inst_40018 = cljs.core.seq.call(null,inst_40017);var inst_40019 = inst_40018;var inst_40020 = null;var inst_40021 = (0);var inst_40022 = (0);var state_40078__$1 = (function (){var statearr_40106 = state_40078;(statearr_40106[(12)] = inst_40021);
(statearr_40106[(13)] = inst_40020);
(statearr_40106[(14)] = inst_40022);
(statearr_40106[(15)] = inst_40019);
return statearr_40106;
})();var statearr_40107_40148 = state_40078__$1;(statearr_40107_40148[(2)] = null);
(statearr_40107_40148[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (14)))
{var state_40078__$1 = state_40078;var statearr_40111_40149 = state_40078__$1;(statearr_40111_40149[(2)] = null);
(statearr_40111_40149[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (16)))
{var inst_40033 = (state_40078[(10)]);var inst_40037 = cljs.core.chunk_first.call(null,inst_40033);var inst_40038 = cljs.core.chunk_rest.call(null,inst_40033);var inst_40039 = cljs.core.count.call(null,inst_40037);var inst_40019 = inst_40038;var inst_40020 = inst_40037;var inst_40021 = inst_40039;var inst_40022 = (0);var state_40078__$1 = (function (){var statearr_40112 = state_40078;(statearr_40112[(12)] = inst_40021);
(statearr_40112[(13)] = inst_40020);
(statearr_40112[(14)] = inst_40022);
(statearr_40112[(15)] = inst_40019);
return statearr_40112;
})();var statearr_40113_40150 = state_40078__$1;(statearr_40113_40150[(2)] = null);
(statearr_40113_40150[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (10)))
{var inst_40021 = (state_40078[(12)]);var inst_40020 = (state_40078[(13)]);var inst_40022 = (state_40078[(14)]);var inst_40019 = (state_40078[(15)]);var inst_40027 = cljs.core._nth.call(null,inst_40020,inst_40022);var inst_40028 = cljs.core.async.muxch_STAR_.call(null,inst_40027);var inst_40029 = cljs.core.async.close_BANG_.call(null,inst_40028);var inst_40030 = (inst_40022 + (1));var tmp40108 = inst_40021;var tmp40109 = inst_40020;var tmp40110 = inst_40019;var inst_40019__$1 = tmp40110;var inst_40020__$1 = tmp40109;var inst_40021__$1 = tmp40108;var inst_40022__$1 = inst_40030;var state_40078__$1 = (function (){var statearr_40114 = state_40078;(statearr_40114[(12)] = inst_40021__$1);
(statearr_40114[(13)] = inst_40020__$1);
(statearr_40114[(17)] = inst_40029);
(statearr_40114[(14)] = inst_40022__$1);
(statearr_40114[(15)] = inst_40019__$1);
return statearr_40114;
})();var statearr_40115_40151 = state_40078__$1;(statearr_40115_40151[(2)] = null);
(statearr_40115_40151[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (18)))
{var inst_40048 = (state_40078[(2)]);var state_40078__$1 = state_40078;var statearr_40116_40152 = state_40078__$1;(statearr_40116_40152[(2)] = inst_40048);
(statearr_40116_40152[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40079 === (8)))
{var inst_40021 = (state_40078[(12)]);var inst_40022 = (state_40078[(14)]);var inst_40024 = (inst_40022 < inst_40021);var inst_40025 = inst_40024;var state_40078__$1 = state_40078;if(cljs.core.truth_(inst_40025))
{var statearr_40117_40153 = state_40078__$1;(statearr_40117_40153[(1)] = (10));
} else
{var statearr_40118_40154 = state_40078__$1;(statearr_40118_40154[(1)] = (11));
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
});})(c__15156__auto___40126,mults,ensure_mult,p))
;return ((function (switch__15100__auto__,c__15156__auto___40126,mults,ensure_mult,p){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_40122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40122[(0)] = state_machine__15101__auto__);
(statearr_40122[(1)] = (1));
return statearr_40122;
});
var state_machine__15101__auto____1 = (function (state_40078){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_40078);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e40123){if((e40123 instanceof Object))
{var ex__15104__auto__ = e40123;var statearr_40124_40155 = state_40078;(statearr_40124_40155[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40123;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40156 = state_40078;
state_40078 = G__40156;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_40078){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_40078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___40126,mults,ensure_mult,p))
})();var state__15158__auto__ = (function (){var statearr_40125 = f__15157__auto__.call(null);(statearr_40125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___40126);
return statearr_40125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___40126,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15156__auto___40293 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___40293,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___40293,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40263){var state_val_40264 = (state_40263[(1)]);if((state_val_40264 === (7)))
{var state_40263__$1 = state_40263;var statearr_40265_40294 = state_40263__$1;(statearr_40265_40294[(2)] = null);
(statearr_40265_40294[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (1)))
{var state_40263__$1 = state_40263;var statearr_40266_40295 = state_40263__$1;(statearr_40266_40295[(2)] = null);
(statearr_40266_40295[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (4)))
{var inst_40227 = (state_40263[(7)]);var inst_40229 = (inst_40227 < cnt);var state_40263__$1 = state_40263;if(cljs.core.truth_(inst_40229))
{var statearr_40267_40296 = state_40263__$1;(statearr_40267_40296[(1)] = (6));
} else
{var statearr_40268_40297 = state_40263__$1;(statearr_40268_40297[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (15)))
{var inst_40259 = (state_40263[(2)]);var state_40263__$1 = state_40263;var statearr_40269_40298 = state_40263__$1;(statearr_40269_40298[(2)] = inst_40259);
(statearr_40269_40298[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (13)))
{var inst_40252 = cljs.core.async.close_BANG_.call(null,out);var state_40263__$1 = state_40263;var statearr_40270_40299 = state_40263__$1;(statearr_40270_40299[(2)] = inst_40252);
(statearr_40270_40299[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (6)))
{var state_40263__$1 = state_40263;var statearr_40271_40300 = state_40263__$1;(statearr_40271_40300[(2)] = null);
(statearr_40271_40300[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (3)))
{var inst_40261 = (state_40263[(2)]);var state_40263__$1 = state_40263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40263__$1,inst_40261);
} else
{if((state_val_40264 === (12)))
{var inst_40249 = (state_40263[(8)]);var inst_40249__$1 = (state_40263[(2)]);var inst_40250 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40249__$1);var state_40263__$1 = (function (){var statearr_40272 = state_40263;(statearr_40272[(8)] = inst_40249__$1);
return statearr_40272;
})();if(cljs.core.truth_(inst_40250))
{var statearr_40273_40301 = state_40263__$1;(statearr_40273_40301[(1)] = (13));
} else
{var statearr_40274_40302 = state_40263__$1;(statearr_40274_40302[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (2)))
{var inst_40226 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_40227 = (0);var state_40263__$1 = (function (){var statearr_40275 = state_40263;(statearr_40275[(7)] = inst_40227);
(statearr_40275[(9)] = inst_40226);
return statearr_40275;
})();var statearr_40276_40303 = state_40263__$1;(statearr_40276_40303[(2)] = null);
(statearr_40276_40303[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (11)))
{var inst_40227 = (state_40263[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40263,(10),Object,null,(9));var inst_40236 = chs__$1.call(null,inst_40227);var inst_40237 = done.call(null,inst_40227);var inst_40238 = cljs.core.async.take_BANG_.call(null,inst_40236,inst_40237);var state_40263__$1 = state_40263;var statearr_40277_40304 = state_40263__$1;(statearr_40277_40304[(2)] = inst_40238);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40263__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (9)))
{var inst_40227 = (state_40263[(7)]);var inst_40240 = (state_40263[(2)]);var inst_40241 = (inst_40227 + (1));var inst_40227__$1 = inst_40241;var state_40263__$1 = (function (){var statearr_40278 = state_40263;(statearr_40278[(7)] = inst_40227__$1);
(statearr_40278[(10)] = inst_40240);
return statearr_40278;
})();var statearr_40279_40305 = state_40263__$1;(statearr_40279_40305[(2)] = null);
(statearr_40279_40305[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (5)))
{var inst_40247 = (state_40263[(2)]);var state_40263__$1 = (function (){var statearr_40280 = state_40263;(statearr_40280[(11)] = inst_40247);
return statearr_40280;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40263__$1,(12),dchan);
} else
{if((state_val_40264 === (14)))
{var inst_40249 = (state_40263[(8)]);var inst_40254 = cljs.core.apply.call(null,f,inst_40249);var state_40263__$1 = state_40263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40263__$1,(16),out,inst_40254);
} else
{if((state_val_40264 === (16)))
{var inst_40256 = (state_40263[(2)]);var state_40263__$1 = (function (){var statearr_40281 = state_40263;(statearr_40281[(12)] = inst_40256);
return statearr_40281;
})();var statearr_40282_40306 = state_40263__$1;(statearr_40282_40306[(2)] = null);
(statearr_40282_40306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (10)))
{var inst_40231 = (state_40263[(2)]);var inst_40232 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_40263__$1 = (function (){var statearr_40283 = state_40263;(statearr_40283[(13)] = inst_40231);
return statearr_40283;
})();var statearr_40284_40307 = state_40263__$1;(statearr_40284_40307[(2)] = inst_40232);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40263__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40264 === (8)))
{var inst_40245 = (state_40263[(2)]);var state_40263__$1 = state_40263;var statearr_40285_40308 = state_40263__$1;(statearr_40285_40308[(2)] = inst_40245);
(statearr_40285_40308[(1)] = (5));
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
});})(c__15156__auto___40293,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15100__auto__,c__15156__auto___40293,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_40289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40289[(0)] = state_machine__15101__auto__);
(statearr_40289[(1)] = (1));
return statearr_40289;
});
var state_machine__15101__auto____1 = (function (state_40263){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_40263);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e40290){if((e40290 instanceof Object))
{var ex__15104__auto__ = e40290;var statearr_40291_40309 = state_40263;(statearr_40291_40309[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40290;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40310 = state_40263;
state_40263 = G__40310;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_40263){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_40263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___40293,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15158__auto__ = (function (){var statearr_40292 = f__15157__auto__.call(null);(statearr_40292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___40293);
return statearr_40292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___40293,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15156__auto___40418 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___40418,out){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___40418,out){
return (function (state_40394){var state_val_40395 = (state_40394[(1)]);if((state_val_40395 === (7)))
{var inst_40373 = (state_40394[(7)]);var inst_40374 = (state_40394[(8)]);var inst_40373__$1 = (state_40394[(2)]);var inst_40374__$1 = cljs.core.nth.call(null,inst_40373__$1,(0),null);var inst_40375 = cljs.core.nth.call(null,inst_40373__$1,(1),null);var inst_40376 = (inst_40374__$1 == null);var state_40394__$1 = (function (){var statearr_40396 = state_40394;(statearr_40396[(7)] = inst_40373__$1);
(statearr_40396[(8)] = inst_40374__$1);
(statearr_40396[(9)] = inst_40375);
return statearr_40396;
})();if(cljs.core.truth_(inst_40376))
{var statearr_40397_40419 = state_40394__$1;(statearr_40397_40419[(1)] = (8));
} else
{var statearr_40398_40420 = state_40394__$1;(statearr_40398_40420[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40395 === (1)))
{var inst_40365 = cljs.core.vec.call(null,chs);var inst_40366 = inst_40365;var state_40394__$1 = (function (){var statearr_40399 = state_40394;(statearr_40399[(10)] = inst_40366);
return statearr_40399;
})();var statearr_40400_40421 = state_40394__$1;(statearr_40400_40421[(2)] = null);
(statearr_40400_40421[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40395 === (4)))
{var inst_40366 = (state_40394[(10)]);var state_40394__$1 = state_40394;return cljs.core.async.ioc_alts_BANG_.call(null,state_40394__$1,(7),inst_40366);
} else
{if((state_val_40395 === (6)))
{var inst_40390 = (state_40394[(2)]);var state_40394__$1 = state_40394;var statearr_40401_40422 = state_40394__$1;(statearr_40401_40422[(2)] = inst_40390);
(statearr_40401_40422[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40395 === (3)))
{var inst_40392 = (state_40394[(2)]);var state_40394__$1 = state_40394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40394__$1,inst_40392);
} else
{if((state_val_40395 === (2)))
{var inst_40366 = (state_40394[(10)]);var inst_40368 = cljs.core.count.call(null,inst_40366);var inst_40369 = (inst_40368 > (0));var state_40394__$1 = state_40394;if(cljs.core.truth_(inst_40369))
{var statearr_40403_40423 = state_40394__$1;(statearr_40403_40423[(1)] = (4));
} else
{var statearr_40404_40424 = state_40394__$1;(statearr_40404_40424[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40395 === (11)))
{var inst_40366 = (state_40394[(10)]);var inst_40383 = (state_40394[(2)]);var tmp40402 = inst_40366;var inst_40366__$1 = tmp40402;var state_40394__$1 = (function (){var statearr_40405 = state_40394;(statearr_40405[(11)] = inst_40383);
(statearr_40405[(10)] = inst_40366__$1);
return statearr_40405;
})();var statearr_40406_40425 = state_40394__$1;(statearr_40406_40425[(2)] = null);
(statearr_40406_40425[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40395 === (9)))
{var inst_40374 = (state_40394[(8)]);var state_40394__$1 = state_40394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40394__$1,(11),out,inst_40374);
} else
{if((state_val_40395 === (5)))
{var inst_40388 = cljs.core.async.close_BANG_.call(null,out);var state_40394__$1 = state_40394;var statearr_40407_40426 = state_40394__$1;(statearr_40407_40426[(2)] = inst_40388);
(statearr_40407_40426[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40395 === (10)))
{var inst_40386 = (state_40394[(2)]);var state_40394__$1 = state_40394;var statearr_40408_40427 = state_40394__$1;(statearr_40408_40427[(2)] = inst_40386);
(statearr_40408_40427[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40395 === (8)))
{var inst_40373 = (state_40394[(7)]);var inst_40366 = (state_40394[(10)]);var inst_40374 = (state_40394[(8)]);var inst_40375 = (state_40394[(9)]);var inst_40378 = (function (){var c = inst_40375;var v = inst_40374;var vec__40371 = inst_40373;var cs = inst_40366;return ((function (c,v,vec__40371,cs,inst_40373,inst_40366,inst_40374,inst_40375,state_val_40395,c__15156__auto___40418,out){
return (function (p1__40311_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__40311_SHARP_);
});
;})(c,v,vec__40371,cs,inst_40373,inst_40366,inst_40374,inst_40375,state_val_40395,c__15156__auto___40418,out))
})();var inst_40379 = cljs.core.filterv.call(null,inst_40378,inst_40366);var inst_40366__$1 = inst_40379;var state_40394__$1 = (function (){var statearr_40409 = state_40394;(statearr_40409[(10)] = inst_40366__$1);
return statearr_40409;
})();var statearr_40410_40428 = state_40394__$1;(statearr_40410_40428[(2)] = null);
(statearr_40410_40428[(1)] = (2));
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
});})(c__15156__auto___40418,out))
;return ((function (switch__15100__auto__,c__15156__auto___40418,out){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_40414 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40414[(0)] = state_machine__15101__auto__);
(statearr_40414[(1)] = (1));
return statearr_40414;
});
var state_machine__15101__auto____1 = (function (state_40394){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_40394);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e40415){if((e40415 instanceof Object))
{var ex__15104__auto__ = e40415;var statearr_40416_40429 = state_40394;(statearr_40416_40429[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40394);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40415;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40430 = state_40394;
state_40394 = G__40430;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_40394){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_40394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___40418,out))
})();var state__15158__auto__ = (function (){var statearr_40417 = f__15157__auto__.call(null);(statearr_40417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___40418);
return statearr_40417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___40418,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15156__auto___40523 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___40523,out){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___40523,out){
return (function (state_40500){var state_val_40501 = (state_40500[(1)]);if((state_val_40501 === (7)))
{var inst_40482 = (state_40500[(7)]);var inst_40482__$1 = (state_40500[(2)]);var inst_40483 = (inst_40482__$1 == null);var inst_40484 = cljs.core.not.call(null,inst_40483);var state_40500__$1 = (function (){var statearr_40502 = state_40500;(statearr_40502[(7)] = inst_40482__$1);
return statearr_40502;
})();if(inst_40484)
{var statearr_40503_40524 = state_40500__$1;(statearr_40503_40524[(1)] = (8));
} else
{var statearr_40504_40525 = state_40500__$1;(statearr_40504_40525[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40501 === (1)))
{var inst_40477 = (0);var state_40500__$1 = (function (){var statearr_40505 = state_40500;(statearr_40505[(8)] = inst_40477);
return statearr_40505;
})();var statearr_40506_40526 = state_40500__$1;(statearr_40506_40526[(2)] = null);
(statearr_40506_40526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40501 === (4)))
{var state_40500__$1 = state_40500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40500__$1,(7),ch);
} else
{if((state_val_40501 === (6)))
{var inst_40495 = (state_40500[(2)]);var state_40500__$1 = state_40500;var statearr_40507_40527 = state_40500__$1;(statearr_40507_40527[(2)] = inst_40495);
(statearr_40507_40527[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40501 === (3)))
{var inst_40497 = (state_40500[(2)]);var inst_40498 = cljs.core.async.close_BANG_.call(null,out);var state_40500__$1 = (function (){var statearr_40508 = state_40500;(statearr_40508[(9)] = inst_40497);
return statearr_40508;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40500__$1,inst_40498);
} else
{if((state_val_40501 === (2)))
{var inst_40477 = (state_40500[(8)]);var inst_40479 = (inst_40477 < n);var state_40500__$1 = state_40500;if(cljs.core.truth_(inst_40479))
{var statearr_40509_40528 = state_40500__$1;(statearr_40509_40528[(1)] = (4));
} else
{var statearr_40510_40529 = state_40500__$1;(statearr_40510_40529[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40501 === (11)))
{var inst_40477 = (state_40500[(8)]);var inst_40487 = (state_40500[(2)]);var inst_40488 = (inst_40477 + (1));var inst_40477__$1 = inst_40488;var state_40500__$1 = (function (){var statearr_40511 = state_40500;(statearr_40511[(8)] = inst_40477__$1);
(statearr_40511[(10)] = inst_40487);
return statearr_40511;
})();var statearr_40512_40530 = state_40500__$1;(statearr_40512_40530[(2)] = null);
(statearr_40512_40530[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40501 === (9)))
{var state_40500__$1 = state_40500;var statearr_40513_40531 = state_40500__$1;(statearr_40513_40531[(2)] = null);
(statearr_40513_40531[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40501 === (5)))
{var state_40500__$1 = state_40500;var statearr_40514_40532 = state_40500__$1;(statearr_40514_40532[(2)] = null);
(statearr_40514_40532[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40501 === (10)))
{var inst_40492 = (state_40500[(2)]);var state_40500__$1 = state_40500;var statearr_40515_40533 = state_40500__$1;(statearr_40515_40533[(2)] = inst_40492);
(statearr_40515_40533[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40501 === (8)))
{var inst_40482 = (state_40500[(7)]);var state_40500__$1 = state_40500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40500__$1,(11),out,inst_40482);
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
});})(c__15156__auto___40523,out))
;return ((function (switch__15100__auto__,c__15156__auto___40523,out){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_40519 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_40519[(0)] = state_machine__15101__auto__);
(statearr_40519[(1)] = (1));
return statearr_40519;
});
var state_machine__15101__auto____1 = (function (state_40500){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_40500);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e40520){if((e40520 instanceof Object))
{var ex__15104__auto__ = e40520;var statearr_40521_40534 = state_40500;(statearr_40521_40534[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40520;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40535 = state_40500;
state_40500 = G__40535;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_40500){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_40500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___40523,out))
})();var state__15158__auto__ = (function (){var statearr_40522 = f__15157__auto__.call(null);(statearr_40522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___40523);
return statearr_40522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___40523,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t40543 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40543 = (function (ch,f,map_LT_,meta40544){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40544 = meta40544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40543.cljs$lang$type = true;
cljs.core.async.t40543.cljs$lang$ctorStr = "cljs.core.async/t40543";
cljs.core.async.t40543.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t40543");
});
cljs.core.async.t40543.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t40543.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t40546 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40546 = (function (fn1,_,meta40544,ch,f,map_LT_,meta40547){
this.fn1 = fn1;
this._ = _;
this.meta40544 = meta40544;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40547 = meta40547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40546.cljs$lang$type = true;
cljs.core.async.t40546.cljs$lang$ctorStr = "cljs.core.async/t40546";
cljs.core.async.t40546.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t40546");
});})(___$1))
;
cljs.core.async.t40546.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t40546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__40536_SHARP_){return f1.call(null,(((p1__40536_SHARP_ == null))?null:self__.f.call(null,p1__40536_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t40546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40548){var self__ = this;
var _40548__$1 = this;return self__.meta40547;
});})(___$1))
;
cljs.core.async.t40546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40548,meta40547__$1){var self__ = this;
var _40548__$1 = this;return (new cljs.core.async.t40546(self__.fn1,self__._,self__.meta40544,self__.ch,self__.f,self__.map_LT_,meta40547__$1));
});})(___$1))
;
cljs.core.async.__GT_t40546 = ((function (___$1){
return (function __GT_t40546(fn1__$1,___$2,meta40544__$1,ch__$2,f__$2,map_LT___$2,meta40547){return (new cljs.core.async.t40546(fn1__$1,___$2,meta40544__$1,ch__$2,f__$2,map_LT___$2,meta40547));
});})(___$1))
;
}
return (new cljs.core.async.t40546(fn1,___$1,self__.meta40544,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11486__auto__ = ret;if(cljs.core.truth_(and__11486__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11486__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t40543.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t40543.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t40543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40545){var self__ = this;
var _40545__$1 = this;return self__.meta40544;
});
cljs.core.async.t40543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40545,meta40544__$1){var self__ = this;
var _40545__$1 = this;return (new cljs.core.async.t40543(self__.ch,self__.f,self__.map_LT_,meta40544__$1));
});
cljs.core.async.__GT_t40543 = (function __GT_t40543(ch__$1,f__$1,map_LT___$1,meta40544){return (new cljs.core.async.t40543(ch__$1,f__$1,map_LT___$1,meta40544));
});
}
return (new cljs.core.async.t40543(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t40552 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40552 = (function (ch,f,map_GT_,meta40553){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta40553 = meta40553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40552.cljs$lang$type = true;
cljs.core.async.t40552.cljs$lang$ctorStr = "cljs.core.async/t40552";
cljs.core.async.t40552.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t40552");
});
cljs.core.async.t40552.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t40552.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t40552.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t40552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40554){var self__ = this;
var _40554__$1 = this;return self__.meta40553;
});
cljs.core.async.t40552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40554,meta40553__$1){var self__ = this;
var _40554__$1 = this;return (new cljs.core.async.t40552(self__.ch,self__.f,self__.map_GT_,meta40553__$1));
});
cljs.core.async.__GT_t40552 = (function __GT_t40552(ch__$1,f__$1,map_GT___$1,meta40553){return (new cljs.core.async.t40552(ch__$1,f__$1,map_GT___$1,meta40553));
});
}
return (new cljs.core.async.t40552(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t40558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40558 = (function (ch,p,filter_GT_,meta40559){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta40559 = meta40559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40558.cljs$lang$type = true;
cljs.core.async.t40558.cljs$lang$ctorStr = "cljs.core.async/t40558";
cljs.core.async.t40558.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async/t40558");
});
cljs.core.async.t40558.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t40558.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t40558.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t40558.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t40558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40560){var self__ = this;
var _40560__$1 = this;return self__.meta40559;
});
cljs.core.async.t40558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40560,meta40559__$1){var self__ = this;
var _40560__$1 = this;return (new cljs.core.async.t40558(self__.ch,self__.p,self__.filter_GT_,meta40559__$1));
});
cljs.core.async.__GT_t40558 = (function __GT_t40558(ch__$1,p__$1,filter_GT___$1,meta40559){return (new cljs.core.async.t40558(ch__$1,p__$1,filter_GT___$1,meta40559));
});
}
return (new cljs.core.async.t40558(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15156__auto___40643 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___40643,out){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___40643,out){
return (function (state_40622){var state_val_40623 = (state_40622[(1)]);if((state_val_40623 === (7)))
{var inst_40618 = (state_40622[(2)]);var state_40622__$1 = state_40622;var statearr_40624_40644 = state_40622__$1;(statearr_40624_40644[(2)] = inst_40618);
(statearr_40624_40644[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40623 === (1)))
{var state_40622__$1 = state_40622;var statearr_40625_40645 = state_40622__$1;(statearr_40625_40645[(2)] = null);
(statearr_40625_40645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40623 === (4)))
{var inst_40604 = (state_40622[(7)]);var inst_40604__$1 = (state_40622[(2)]);var inst_40605 = (inst_40604__$1 == null);var state_40622__$1 = (function (){var statearr_40626 = state_40622;(statearr_40626[(7)] = inst_40604__$1);
return statearr_40626;
})();if(cljs.core.truth_(inst_40605))
{var statearr_40627_40646 = state_40622__$1;(statearr_40627_40646[(1)] = (5));
} else
{var statearr_40628_40647 = state_40622__$1;(statearr_40628_40647[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40623 === (6)))
{var inst_40604 = (state_40622[(7)]);var inst_40609 = p.call(null,inst_40604);var state_40622__$1 = state_40622;if(cljs.core.truth_(inst_40609))
{var statearr_40629_40648 = state_40622__$1;(statearr_40629_40648[(1)] = (8));
} else
{var statearr_40630_40649 = state_40622__$1;(statearr_40630_40649[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40623 === (3)))
{var inst_40620 = (state_40622[(2)]);var state_40622__$1 = state_40622;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40622__$1,inst_40620);
} else
{if((state_val_40623 === (2)))
{var state_40622__$1 = state_40622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40622__$1,(4),ch);
} else
{if((state_val_40623 === (11)))
{var inst_40612 = (state_40622[(2)]);var state_40622__$1 = state_40622;var statearr_40631_40650 = state_40622__$1;(statearr_40631_40650[(2)] = inst_40612);
(statearr_40631_40650[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40623 === (9)))
{var state_40622__$1 = state_40622;var statearr_40632_40651 = state_40622__$1;(statearr_40632_40651[(2)] = null);
(statearr_40632_40651[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40623 === (5)))
{var inst_40607 = cljs.core.async.close_BANG_.call(null,out);var state_40622__$1 = state_40622;var statearr_40633_40652 = state_40622__$1;(statearr_40633_40652[(2)] = inst_40607);
(statearr_40633_40652[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40623 === (10)))
{var inst_40615 = (state_40622[(2)]);var state_40622__$1 = (function (){var statearr_40634 = state_40622;(statearr_40634[(8)] = inst_40615);
return statearr_40634;
})();var statearr_40635_40653 = state_40622__$1;(statearr_40635_40653[(2)] = null);
(statearr_40635_40653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40623 === (8)))
{var inst_40604 = (state_40622[(7)]);var state_40622__$1 = state_40622;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40622__$1,(11),out,inst_40604);
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
});})(c__15156__auto___40643,out))
;return ((function (switch__15100__auto__,c__15156__auto___40643,out){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_40639 = [null,null,null,null,null,null,null,null,null];(statearr_40639[(0)] = state_machine__15101__auto__);
(statearr_40639[(1)] = (1));
return statearr_40639;
});
var state_machine__15101__auto____1 = (function (state_40622){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_40622);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e40640){if((e40640 instanceof Object))
{var ex__15104__auto__ = e40640;var statearr_40641_40654 = state_40622;(statearr_40641_40654[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40622);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40640;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40655 = state_40622;
state_40622 = G__40655;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_40622){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_40622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___40643,out))
})();var state__15158__auto__ = (function (){var statearr_40642 = f__15157__auto__.call(null);(statearr_40642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___40643);
return statearr_40642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___40643,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15156__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto__){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto__){
return (function (state_40821){var state_val_40822 = (state_40821[(1)]);if((state_val_40822 === (7)))
{var inst_40817 = (state_40821[(2)]);var state_40821__$1 = state_40821;var statearr_40823_40864 = state_40821__$1;(statearr_40823_40864[(2)] = inst_40817);
(statearr_40823_40864[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (20)))
{var inst_40787 = (state_40821[(7)]);var inst_40798 = (state_40821[(2)]);var inst_40799 = cljs.core.next.call(null,inst_40787);var inst_40773 = inst_40799;var inst_40774 = null;var inst_40775 = (0);var inst_40776 = (0);var state_40821__$1 = (function (){var statearr_40824 = state_40821;(statearr_40824[(8)] = inst_40773);
(statearr_40824[(9)] = inst_40775);
(statearr_40824[(10)] = inst_40774);
(statearr_40824[(11)] = inst_40776);
(statearr_40824[(12)] = inst_40798);
return statearr_40824;
})();var statearr_40825_40865 = state_40821__$1;(statearr_40825_40865[(2)] = null);
(statearr_40825_40865[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (1)))
{var state_40821__$1 = state_40821;var statearr_40826_40866 = state_40821__$1;(statearr_40826_40866[(2)] = null);
(statearr_40826_40866[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (4)))
{var inst_40762 = (state_40821[(13)]);var inst_40762__$1 = (state_40821[(2)]);var inst_40763 = (inst_40762__$1 == null);var state_40821__$1 = (function (){var statearr_40827 = state_40821;(statearr_40827[(13)] = inst_40762__$1);
return statearr_40827;
})();if(cljs.core.truth_(inst_40763))
{var statearr_40828_40867 = state_40821__$1;(statearr_40828_40867[(1)] = (5));
} else
{var statearr_40829_40868 = state_40821__$1;(statearr_40829_40868[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (15)))
{var state_40821__$1 = state_40821;var statearr_40833_40869 = state_40821__$1;(statearr_40833_40869[(2)] = null);
(statearr_40833_40869[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (21)))
{var state_40821__$1 = state_40821;var statearr_40834_40870 = state_40821__$1;(statearr_40834_40870[(2)] = null);
(statearr_40834_40870[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (13)))
{var inst_40773 = (state_40821[(8)]);var inst_40775 = (state_40821[(9)]);var inst_40774 = (state_40821[(10)]);var inst_40776 = (state_40821[(11)]);var inst_40783 = (state_40821[(2)]);var inst_40784 = (inst_40776 + (1));var tmp40830 = inst_40773;var tmp40831 = inst_40775;var tmp40832 = inst_40774;var inst_40773__$1 = tmp40830;var inst_40774__$1 = tmp40832;var inst_40775__$1 = tmp40831;var inst_40776__$1 = inst_40784;var state_40821__$1 = (function (){var statearr_40835 = state_40821;(statearr_40835[(8)] = inst_40773__$1);
(statearr_40835[(9)] = inst_40775__$1);
(statearr_40835[(10)] = inst_40774__$1);
(statearr_40835[(14)] = inst_40783);
(statearr_40835[(11)] = inst_40776__$1);
return statearr_40835;
})();var statearr_40836_40871 = state_40821__$1;(statearr_40836_40871[(2)] = null);
(statearr_40836_40871[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (22)))
{var state_40821__$1 = state_40821;var statearr_40837_40872 = state_40821__$1;(statearr_40837_40872[(2)] = null);
(statearr_40837_40872[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (6)))
{var inst_40762 = (state_40821[(13)]);var inst_40771 = f.call(null,inst_40762);var inst_40772 = cljs.core.seq.call(null,inst_40771);var inst_40773 = inst_40772;var inst_40774 = null;var inst_40775 = (0);var inst_40776 = (0);var state_40821__$1 = (function (){var statearr_40838 = state_40821;(statearr_40838[(8)] = inst_40773);
(statearr_40838[(9)] = inst_40775);
(statearr_40838[(10)] = inst_40774);
(statearr_40838[(11)] = inst_40776);
return statearr_40838;
})();var statearr_40839_40873 = state_40821__$1;(statearr_40839_40873[(2)] = null);
(statearr_40839_40873[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (17)))
{var inst_40787 = (state_40821[(7)]);var inst_40791 = cljs.core.chunk_first.call(null,inst_40787);var inst_40792 = cljs.core.chunk_rest.call(null,inst_40787);var inst_40793 = cljs.core.count.call(null,inst_40791);var inst_40773 = inst_40792;var inst_40774 = inst_40791;var inst_40775 = inst_40793;var inst_40776 = (0);var state_40821__$1 = (function (){var statearr_40840 = state_40821;(statearr_40840[(8)] = inst_40773);
(statearr_40840[(9)] = inst_40775);
(statearr_40840[(10)] = inst_40774);
(statearr_40840[(11)] = inst_40776);
return statearr_40840;
})();var statearr_40841_40874 = state_40821__$1;(statearr_40841_40874[(2)] = null);
(statearr_40841_40874[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (3)))
{var inst_40819 = (state_40821[(2)]);var state_40821__$1 = state_40821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40821__$1,inst_40819);
} else
{if((state_val_40822 === (12)))
{var inst_40807 = (state_40821[(2)]);var state_40821__$1 = state_40821;var statearr_40842_40875 = state_40821__$1;(statearr_40842_40875[(2)] = inst_40807);
(statearr_40842_40875[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (2)))
{var state_40821__$1 = state_40821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40821__$1,(4),in$);
} else
{if((state_val_40822 === (23)))
{var inst_40815 = (state_40821[(2)]);var state_40821__$1 = state_40821;var statearr_40843_40876 = state_40821__$1;(statearr_40843_40876[(2)] = inst_40815);
(statearr_40843_40876[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (19)))
{var inst_40802 = (state_40821[(2)]);var state_40821__$1 = state_40821;var statearr_40844_40877 = state_40821__$1;(statearr_40844_40877[(2)] = inst_40802);
(statearr_40844_40877[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (11)))
{var inst_40773 = (state_40821[(8)]);var inst_40787 = (state_40821[(7)]);var inst_40787__$1 = cljs.core.seq.call(null,inst_40773);var state_40821__$1 = (function (){var statearr_40845 = state_40821;(statearr_40845[(7)] = inst_40787__$1);
return statearr_40845;
})();if(inst_40787__$1)
{var statearr_40846_40878 = state_40821__$1;(statearr_40846_40878[(1)] = (14));
} else
{var statearr_40847_40879 = state_40821__$1;(statearr_40847_40879[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (9)))
{var inst_40809 = (state_40821[(2)]);var inst_40810 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_40821__$1 = (function (){var statearr_40848 = state_40821;(statearr_40848[(15)] = inst_40809);
return statearr_40848;
})();if(cljs.core.truth_(inst_40810))
{var statearr_40849_40880 = state_40821__$1;(statearr_40849_40880[(1)] = (21));
} else
{var statearr_40850_40881 = state_40821__$1;(statearr_40850_40881[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (5)))
{var inst_40765 = cljs.core.async.close_BANG_.call(null,out);var state_40821__$1 = state_40821;var statearr_40851_40882 = state_40821__$1;(statearr_40851_40882[(2)] = inst_40765);
(statearr_40851_40882[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (14)))
{var inst_40787 = (state_40821[(7)]);var inst_40789 = cljs.core.chunked_seq_QMARK_.call(null,inst_40787);var state_40821__$1 = state_40821;if(inst_40789)
{var statearr_40852_40883 = state_40821__$1;(statearr_40852_40883[(1)] = (17));
} else
{var statearr_40853_40884 = state_40821__$1;(statearr_40853_40884[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (16)))
{var inst_40805 = (state_40821[(2)]);var state_40821__$1 = state_40821;var statearr_40854_40885 = state_40821__$1;(statearr_40854_40885[(2)] = inst_40805);
(statearr_40854_40885[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40822 === (10)))
{var inst_40774 = (state_40821[(10)]);var inst_40776 = (state_40821[(11)]);var inst_40781 = cljs.core._nth.call(null,inst_40774,inst_40776);var state_40821__$1 = state_40821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40821__$1,(13),out,inst_40781);
} else
{if((state_val_40822 === (18)))
{var inst_40787 = (state_40821[(7)]);var inst_40796 = cljs.core.first.call(null,inst_40787);var state_40821__$1 = state_40821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40821__$1,(20),out,inst_40796);
} else
{if((state_val_40822 === (8)))
{var inst_40775 = (state_40821[(9)]);var inst_40776 = (state_40821[(11)]);var inst_40778 = (inst_40776 < inst_40775);var inst_40779 = inst_40778;var state_40821__$1 = state_40821;if(cljs.core.truth_(inst_40779))
{var statearr_40855_40886 = state_40821__$1;(statearr_40855_40886[(1)] = (10));
} else
{var statearr_40856_40887 = state_40821__$1;(statearr_40856_40887[(1)] = (11));
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
});})(c__15156__auto__))
;return ((function (switch__15100__auto__,c__15156__auto__){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_40860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40860[(0)] = state_machine__15101__auto__);
(statearr_40860[(1)] = (1));
return statearr_40860;
});
var state_machine__15101__auto____1 = (function (state_40821){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_40821);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e40861){if((e40861 instanceof Object))
{var ex__15104__auto__ = e40861;var statearr_40862_40888 = state_40821;(statearr_40862_40888[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40821);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40861;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40889 = state_40821;
state_40821 = G__40889;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_40821){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_40821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto__))
})();var state__15158__auto__ = (function (){var statearr_40863 = f__15157__auto__.call(null);(statearr_40863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto__);
return statearr_40863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto__))
);
return c__15156__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15156__auto___40986 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___40986,out){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___40986,out){
return (function (state_40961){var state_val_40962 = (state_40961[(1)]);if((state_val_40962 === (7)))
{var inst_40956 = (state_40961[(2)]);var state_40961__$1 = state_40961;var statearr_40963_40987 = state_40961__$1;(statearr_40963_40987[(2)] = inst_40956);
(statearr_40963_40987[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40962 === (1)))
{var inst_40938 = null;var state_40961__$1 = (function (){var statearr_40964 = state_40961;(statearr_40964[(7)] = inst_40938);
return statearr_40964;
})();var statearr_40965_40988 = state_40961__$1;(statearr_40965_40988[(2)] = null);
(statearr_40965_40988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40962 === (4)))
{var inst_40941 = (state_40961[(8)]);var inst_40941__$1 = (state_40961[(2)]);var inst_40942 = (inst_40941__$1 == null);var inst_40943 = cljs.core.not.call(null,inst_40942);var state_40961__$1 = (function (){var statearr_40966 = state_40961;(statearr_40966[(8)] = inst_40941__$1);
return statearr_40966;
})();if(inst_40943)
{var statearr_40967_40989 = state_40961__$1;(statearr_40967_40989[(1)] = (5));
} else
{var statearr_40968_40990 = state_40961__$1;(statearr_40968_40990[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40962 === (6)))
{var state_40961__$1 = state_40961;var statearr_40969_40991 = state_40961__$1;(statearr_40969_40991[(2)] = null);
(statearr_40969_40991[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40962 === (3)))
{var inst_40958 = (state_40961[(2)]);var inst_40959 = cljs.core.async.close_BANG_.call(null,out);var state_40961__$1 = (function (){var statearr_40970 = state_40961;(statearr_40970[(9)] = inst_40958);
return statearr_40970;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40961__$1,inst_40959);
} else
{if((state_val_40962 === (2)))
{var state_40961__$1 = state_40961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40961__$1,(4),ch);
} else
{if((state_val_40962 === (11)))
{var inst_40941 = (state_40961[(8)]);var inst_40950 = (state_40961[(2)]);var inst_40938 = inst_40941;var state_40961__$1 = (function (){var statearr_40971 = state_40961;(statearr_40971[(10)] = inst_40950);
(statearr_40971[(7)] = inst_40938);
return statearr_40971;
})();var statearr_40972_40992 = state_40961__$1;(statearr_40972_40992[(2)] = null);
(statearr_40972_40992[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40962 === (9)))
{var inst_40941 = (state_40961[(8)]);var state_40961__$1 = state_40961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40961__$1,(11),out,inst_40941);
} else
{if((state_val_40962 === (5)))
{var inst_40941 = (state_40961[(8)]);var inst_40938 = (state_40961[(7)]);var inst_40945 = cljs.core._EQ_.call(null,inst_40941,inst_40938);var state_40961__$1 = state_40961;if(inst_40945)
{var statearr_40974_40993 = state_40961__$1;(statearr_40974_40993[(1)] = (8));
} else
{var statearr_40975_40994 = state_40961__$1;(statearr_40975_40994[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40962 === (10)))
{var inst_40953 = (state_40961[(2)]);var state_40961__$1 = state_40961;var statearr_40976_40995 = state_40961__$1;(statearr_40976_40995[(2)] = inst_40953);
(statearr_40976_40995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40962 === (8)))
{var inst_40938 = (state_40961[(7)]);var tmp40973 = inst_40938;var inst_40938__$1 = tmp40973;var state_40961__$1 = (function (){var statearr_40977 = state_40961;(statearr_40977[(7)] = inst_40938__$1);
return statearr_40977;
})();var statearr_40978_40996 = state_40961__$1;(statearr_40978_40996[(2)] = null);
(statearr_40978_40996[(1)] = (2));
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
});})(c__15156__auto___40986,out))
;return ((function (switch__15100__auto__,c__15156__auto___40986,out){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_40982 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_40982[(0)] = state_machine__15101__auto__);
(statearr_40982[(1)] = (1));
return statearr_40982;
});
var state_machine__15101__auto____1 = (function (state_40961){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_40961);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e40983){if((e40983 instanceof Object))
{var ex__15104__auto__ = e40983;var statearr_40984_40997 = state_40961;(statearr_40984_40997[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40998 = state_40961;
state_40961 = G__40998;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_40961){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_40961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___40986,out))
})();var state__15158__auto__ = (function (){var statearr_40985 = f__15157__auto__.call(null);(statearr_40985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___40986);
return statearr_40985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___40986,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15156__auto___41133 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___41133,out){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___41133,out){
return (function (state_41103){var state_val_41104 = (state_41103[(1)]);if((state_val_41104 === (7)))
{var inst_41099 = (state_41103[(2)]);var state_41103__$1 = state_41103;var statearr_41105_41134 = state_41103__$1;(statearr_41105_41134[(2)] = inst_41099);
(statearr_41105_41134[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (1)))
{var inst_41066 = (new Array(n));var inst_41067 = inst_41066;var inst_41068 = (0);var state_41103__$1 = (function (){var statearr_41106 = state_41103;(statearr_41106[(7)] = inst_41067);
(statearr_41106[(8)] = inst_41068);
return statearr_41106;
})();var statearr_41107_41135 = state_41103__$1;(statearr_41107_41135[(2)] = null);
(statearr_41107_41135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (4)))
{var inst_41071 = (state_41103[(9)]);var inst_41071__$1 = (state_41103[(2)]);var inst_41072 = (inst_41071__$1 == null);var inst_41073 = cljs.core.not.call(null,inst_41072);var state_41103__$1 = (function (){var statearr_41108 = state_41103;(statearr_41108[(9)] = inst_41071__$1);
return statearr_41108;
})();if(inst_41073)
{var statearr_41109_41136 = state_41103__$1;(statearr_41109_41136[(1)] = (5));
} else
{var statearr_41110_41137 = state_41103__$1;(statearr_41110_41137[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (15)))
{var inst_41093 = (state_41103[(2)]);var state_41103__$1 = state_41103;var statearr_41111_41138 = state_41103__$1;(statearr_41111_41138[(2)] = inst_41093);
(statearr_41111_41138[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (13)))
{var state_41103__$1 = state_41103;var statearr_41112_41139 = state_41103__$1;(statearr_41112_41139[(2)] = null);
(statearr_41112_41139[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (6)))
{var inst_41068 = (state_41103[(8)]);var inst_41089 = (inst_41068 > (0));var state_41103__$1 = state_41103;if(cljs.core.truth_(inst_41089))
{var statearr_41113_41140 = state_41103__$1;(statearr_41113_41140[(1)] = (12));
} else
{var statearr_41114_41141 = state_41103__$1;(statearr_41114_41141[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (3)))
{var inst_41101 = (state_41103[(2)]);var state_41103__$1 = state_41103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41103__$1,inst_41101);
} else
{if((state_val_41104 === (12)))
{var inst_41067 = (state_41103[(7)]);var inst_41091 = cljs.core.vec.call(null,inst_41067);var state_41103__$1 = state_41103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41103__$1,(15),out,inst_41091);
} else
{if((state_val_41104 === (2)))
{var state_41103__$1 = state_41103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41103__$1,(4),ch);
} else
{if((state_val_41104 === (11)))
{var inst_41083 = (state_41103[(2)]);var inst_41084 = (new Array(n));var inst_41067 = inst_41084;var inst_41068 = (0);var state_41103__$1 = (function (){var statearr_41115 = state_41103;(statearr_41115[(10)] = inst_41083);
(statearr_41115[(7)] = inst_41067);
(statearr_41115[(8)] = inst_41068);
return statearr_41115;
})();var statearr_41116_41142 = state_41103__$1;(statearr_41116_41142[(2)] = null);
(statearr_41116_41142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (9)))
{var inst_41067 = (state_41103[(7)]);var inst_41081 = cljs.core.vec.call(null,inst_41067);var state_41103__$1 = state_41103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41103__$1,(11),out,inst_41081);
} else
{if((state_val_41104 === (5)))
{var inst_41076 = (state_41103[(11)]);var inst_41071 = (state_41103[(9)]);var inst_41067 = (state_41103[(7)]);var inst_41068 = (state_41103[(8)]);var inst_41075 = (inst_41067[inst_41068] = inst_41071);var inst_41076__$1 = (inst_41068 + (1));var inst_41077 = (inst_41076__$1 < n);var state_41103__$1 = (function (){var statearr_41117 = state_41103;(statearr_41117[(11)] = inst_41076__$1);
(statearr_41117[(12)] = inst_41075);
return statearr_41117;
})();if(cljs.core.truth_(inst_41077))
{var statearr_41118_41143 = state_41103__$1;(statearr_41118_41143[(1)] = (8));
} else
{var statearr_41119_41144 = state_41103__$1;(statearr_41119_41144[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (14)))
{var inst_41096 = (state_41103[(2)]);var inst_41097 = cljs.core.async.close_BANG_.call(null,out);var state_41103__$1 = (function (){var statearr_41121 = state_41103;(statearr_41121[(13)] = inst_41096);
return statearr_41121;
})();var statearr_41122_41145 = state_41103__$1;(statearr_41122_41145[(2)] = inst_41097);
(statearr_41122_41145[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (10)))
{var inst_41087 = (state_41103[(2)]);var state_41103__$1 = state_41103;var statearr_41123_41146 = state_41103__$1;(statearr_41123_41146[(2)] = inst_41087);
(statearr_41123_41146[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41104 === (8)))
{var inst_41076 = (state_41103[(11)]);var inst_41067 = (state_41103[(7)]);var tmp41120 = inst_41067;var inst_41067__$1 = tmp41120;var inst_41068 = inst_41076;var state_41103__$1 = (function (){var statearr_41124 = state_41103;(statearr_41124[(7)] = inst_41067__$1);
(statearr_41124[(8)] = inst_41068);
return statearr_41124;
})();var statearr_41125_41147 = state_41103__$1;(statearr_41125_41147[(2)] = null);
(statearr_41125_41147[(1)] = (2));
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
});})(c__15156__auto___41133,out))
;return ((function (switch__15100__auto__,c__15156__auto___41133,out){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_41129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41129[(0)] = state_machine__15101__auto__);
(statearr_41129[(1)] = (1));
return statearr_41129;
});
var state_machine__15101__auto____1 = (function (state_41103){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_41103);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e41130){if((e41130 instanceof Object))
{var ex__15104__auto__ = e41130;var statearr_41131_41148 = state_41103;(statearr_41131_41148[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41130;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41149 = state_41103;
state_41103 = G__41149;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_41103){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_41103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___41133,out))
})();var state__15158__auto__ = (function (){var statearr_41132 = f__15157__auto__.call(null);(statearr_41132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___41133);
return statearr_41132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___41133,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15156__auto___41292 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto___41292,out){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto___41292,out){
return (function (state_41262){var state_val_41263 = (state_41262[(1)]);if((state_val_41263 === (7)))
{var inst_41258 = (state_41262[(2)]);var state_41262__$1 = state_41262;var statearr_41264_41293 = state_41262__$1;(statearr_41264_41293[(2)] = inst_41258);
(statearr_41264_41293[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (1)))
{var inst_41221 = [];var inst_41222 = inst_41221;var inst_41223 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_41262__$1 = (function (){var statearr_41265 = state_41262;(statearr_41265[(7)] = inst_41223);
(statearr_41265[(8)] = inst_41222);
return statearr_41265;
})();var statearr_41266_41294 = state_41262__$1;(statearr_41266_41294[(2)] = null);
(statearr_41266_41294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (4)))
{var inst_41226 = (state_41262[(9)]);var inst_41226__$1 = (state_41262[(2)]);var inst_41227 = (inst_41226__$1 == null);var inst_41228 = cljs.core.not.call(null,inst_41227);var state_41262__$1 = (function (){var statearr_41267 = state_41262;(statearr_41267[(9)] = inst_41226__$1);
return statearr_41267;
})();if(inst_41228)
{var statearr_41268_41295 = state_41262__$1;(statearr_41268_41295[(1)] = (5));
} else
{var statearr_41269_41296 = state_41262__$1;(statearr_41269_41296[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (15)))
{var inst_41252 = (state_41262[(2)]);var state_41262__$1 = state_41262;var statearr_41270_41297 = state_41262__$1;(statearr_41270_41297[(2)] = inst_41252);
(statearr_41270_41297[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (13)))
{var state_41262__$1 = state_41262;var statearr_41271_41298 = state_41262__$1;(statearr_41271_41298[(2)] = null);
(statearr_41271_41298[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (6)))
{var inst_41222 = (state_41262[(8)]);var inst_41247 = inst_41222.length;var inst_41248 = (inst_41247 > (0));var state_41262__$1 = state_41262;if(cljs.core.truth_(inst_41248))
{var statearr_41272_41299 = state_41262__$1;(statearr_41272_41299[(1)] = (12));
} else
{var statearr_41273_41300 = state_41262__$1;(statearr_41273_41300[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (3)))
{var inst_41260 = (state_41262[(2)]);var state_41262__$1 = state_41262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41262__$1,inst_41260);
} else
{if((state_val_41263 === (12)))
{var inst_41222 = (state_41262[(8)]);var inst_41250 = cljs.core.vec.call(null,inst_41222);var state_41262__$1 = state_41262;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41262__$1,(15),out,inst_41250);
} else
{if((state_val_41263 === (2)))
{var state_41262__$1 = state_41262;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41262__$1,(4),ch);
} else
{if((state_val_41263 === (11)))
{var inst_41230 = (state_41262[(10)]);var inst_41226 = (state_41262[(9)]);var inst_41240 = (state_41262[(2)]);var inst_41241 = [];var inst_41242 = inst_41241.push(inst_41226);var inst_41222 = inst_41241;var inst_41223 = inst_41230;var state_41262__$1 = (function (){var statearr_41274 = state_41262;(statearr_41274[(7)] = inst_41223);
(statearr_41274[(11)] = inst_41240);
(statearr_41274[(8)] = inst_41222);
(statearr_41274[(12)] = inst_41242);
return statearr_41274;
})();var statearr_41275_41301 = state_41262__$1;(statearr_41275_41301[(2)] = null);
(statearr_41275_41301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (9)))
{var inst_41222 = (state_41262[(8)]);var inst_41238 = cljs.core.vec.call(null,inst_41222);var state_41262__$1 = state_41262;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41262__$1,(11),out,inst_41238);
} else
{if((state_val_41263 === (5)))
{var inst_41223 = (state_41262[(7)]);var inst_41230 = (state_41262[(10)]);var inst_41226 = (state_41262[(9)]);var inst_41230__$1 = f.call(null,inst_41226);var inst_41231 = cljs.core._EQ_.call(null,inst_41230__$1,inst_41223);var inst_41232 = cljs.core.keyword_identical_QMARK_.call(null,inst_41223,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_41233 = (inst_41231) || (inst_41232);var state_41262__$1 = (function (){var statearr_41276 = state_41262;(statearr_41276[(10)] = inst_41230__$1);
return statearr_41276;
})();if(cljs.core.truth_(inst_41233))
{var statearr_41277_41302 = state_41262__$1;(statearr_41277_41302[(1)] = (8));
} else
{var statearr_41278_41303 = state_41262__$1;(statearr_41278_41303[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (14)))
{var inst_41255 = (state_41262[(2)]);var inst_41256 = cljs.core.async.close_BANG_.call(null,out);var state_41262__$1 = (function (){var statearr_41280 = state_41262;(statearr_41280[(13)] = inst_41255);
return statearr_41280;
})();var statearr_41281_41304 = state_41262__$1;(statearr_41281_41304[(2)] = inst_41256);
(statearr_41281_41304[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (10)))
{var inst_41245 = (state_41262[(2)]);var state_41262__$1 = state_41262;var statearr_41282_41305 = state_41262__$1;(statearr_41282_41305[(2)] = inst_41245);
(statearr_41282_41305[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41263 === (8)))
{var inst_41222 = (state_41262[(8)]);var inst_41230 = (state_41262[(10)]);var inst_41226 = (state_41262[(9)]);var inst_41235 = inst_41222.push(inst_41226);var tmp41279 = inst_41222;var inst_41222__$1 = tmp41279;var inst_41223 = inst_41230;var state_41262__$1 = (function (){var statearr_41283 = state_41262;(statearr_41283[(7)] = inst_41223);
(statearr_41283[(8)] = inst_41222__$1);
(statearr_41283[(14)] = inst_41235);
return statearr_41283;
})();var statearr_41284_41306 = state_41262__$1;(statearr_41284_41306[(2)] = null);
(statearr_41284_41306[(1)] = (2));
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
});})(c__15156__auto___41292,out))
;return ((function (switch__15100__auto__,c__15156__auto___41292,out){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_41288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41288[(0)] = state_machine__15101__auto__);
(statearr_41288[(1)] = (1));
return statearr_41288;
});
var state_machine__15101__auto____1 = (function (state_41262){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_41262);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e41289){if((e41289 instanceof Object))
{var ex__15104__auto__ = e41289;var statearr_41290_41307 = state_41262;(statearr_41290_41307[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41262);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41289;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41308 = state_41262;
state_41262 = G__41308;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_41262){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_41262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto___41292,out))
})();var state__15158__auto__ = (function (){var statearr_41291 = f__15157__auto__.call(null);(statearr_41291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto___41292);
return statearr_41291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto___41292,out))
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