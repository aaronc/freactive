// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t21435 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t21435 = (function (val,box,meta21436){
this.val = val;
this.box = box;
this.meta21436 = meta21436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t21435.cljs$lang$type = true;
cljs.core.async.impl.channels.t21435.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t21435";
cljs.core.async.impl.channels.t21435.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async.impl.channels/t21435");
});
cljs.core.async.impl.channels.t21435.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t21435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21437){var self__ = this;
var _21437__$1 = this;return self__.meta21436;
});
cljs.core.async.impl.channels.t21435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21437,meta21436__$1){var self__ = this;
var _21437__$1 = this;return (new cljs.core.async.impl.channels.t21435(self__.val,self__.box,meta21436__$1));
});
cljs.core.async.impl.channels.__GT_t21435 = (function __GT_t21435(val__$1,box__$1,meta21436){return (new cljs.core.async.impl.channels.t21435(val__$1,box__$1,meta21436));
});
}
return (new cljs.core.async.impl.channels.t21435(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opts__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);
cljs.core.async.impl.channels.MMC = (function (){var obj21439 = {};return obj21439;
})();
cljs.core.async.impl.channels.abort = (function abort(this$){if((function (){var and__11483__auto__ = this$;if(and__11483__auto__)
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else
{return and__11483__auto__;
}
})())
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else
{var x__12132__auto__ = (((this$ == null))?null:this$);return (function (){var or__11495__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.closed;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
if(cljs.core.truth_((function (){var and__11483__auto__ = self__.buf;if(cljs.core.truth_(and__11483__auto__))
{return (self__.puts.length === (0));
} else
{return and__11483__auto__;
}
})()))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
while(true){
var taker_21440 = self__.takes.pop();if((taker_21440 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_21440))
{var take_cb_21441 = cljs.core.async.impl.protocols.commit.call(null,taker_21440);var val_21442 = (cljs.core.truth_((function (){var and__11483__auto__ = self__.buf;if(cljs.core.truth_(and__11483__auto__))
{return (cljs.core.count.call(null,self__.buf) > (0));
} else
{return and__11483__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_21441,val_21442,taker_21440,this$__$1){
return (function (){return take_cb_21441.call(null,val_21442);
});})(take_cb_21441,val_21442,taker_21440,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0))))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf)))
{} else
{var putter_21443 = self__.puts.pop();if((putter_21443 == null))
{} else
{var put_handler_21444 = putter_21443.handler;var val_21445 = putter_21443.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_21444))
{var put_cb_21446 = cljs.core.async.impl.protocols.commit.call(null,put_handler_21444);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_21446,put_handler_21444,val_21445,putter_21443,_,retval,this$__$1){
return (function (){return put_cb_21446.call(null,true);
});})(put_cb_21446,put_handler_21444,val_21445,putter_21443,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_21445)))
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
} else
{}
{
continue;
}
}
}
break;
}
return retval;
} else
{var putter = (function (){while(true){
var putter = self__.puts.pop();if(cljs.core.truth_(putter))
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler))
{return putter;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(putter))
{var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,putter.val);
} else
{if(cljs.core.truth_(self__.closed))
{if(cljs.core.truth_(self__.buf))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
if(cljs.core.truth_((function (){var and__11483__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);if(cljs.core.truth_(and__11483__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__11483__auto__;
}
})()))
{var has_val = (function (){var and__11483__auto__ = self__.buf;if(cljs.core.truth_(and__11483__auto__))
{return (cljs.core.count.call(null,self__.buf) > (0));
} else
{return and__11483__auto__;
}
})();var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);return cljs.core.async.impl.channels.box.call(null,val);
} else
{return null;
}
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = (0);
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + (1));
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)+" pending takes are allowed on a single channel."))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"takes","takes",298247964,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null)))))));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error(("Assert failed: Can't put nil in on a channel\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null))))))));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))
{return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else
{if(cljs.core.truth_((function (){var and__11483__auto__ = self__.buf;if(cljs.core.truth_(and__11483__auto__))
{return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else
{return and__11483__auto__;
}
})()))
{cljs.core.async.impl.protocols.commit.call(null,handler);
var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))
{var taker_21447 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_21447))
{var take_cb_21448 = cljs.core.async.impl.protocols.commit.call(null,taker_21447);var val_21449__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_21448,val_21449__$1,taker_21447,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_21448.call(null,val_21449__$1);
});})(take_cb_21448,val_21449__$1,taker_21447,done_QMARK_,closed__$1,this$__$1))
);
} else
{{
continue;
}
}
} else
{}
break;
}
if(done_QMARK_)
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
return cljs.core.async.impl.channels.box.call(null,true);
} else
{var taker = (function (){while(true){
var taker = self__.takes.pop();if(cljs.core.truth_(taker))
{if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)))
{return taker;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(taker))
{var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,true);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = (0);
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + (1));
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)+" pending puts are allowed on a single channel. Consider using a windowed buffer."))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null)))))));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;while(true){
var putter_21450 = self__.puts.pop();if((putter_21450 == null))
{} else
{var put_handler_21451 = putter_21450.handler;var val_21452 = putter_21450.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_21451))
{var put_cb_21453 = cljs.core.async.impl.protocols.commit.call(null,put_handler_21451);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_21453,put_handler_21451,val_21452,putter_21450,this$__$1){
return (function (){return put_cb_21453.call(null,true);
});})(put_cb_21453,put_handler_21451,val_21452,putter_21450,this$__$1))
);
} else
{{
continue;
}
}
}
break;
}
self__.puts.cleanup(cljs.core.constantly.call(null,false));
return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});
cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){console.log(ex);
return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){var else$ = (function (){var or__11495__auto__ = exh;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);if((else$ == null))
{return buf;
} else
{return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){return chan.call(null,buf,null);
});
var chan__2 = (function (buf,xform){return chan.call(null,buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);return ((function (add_BANG_){
return (function() {
var G__21458 = null;
var G__21458__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e21456){var t = e21456;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__21458__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e21457){var t = e21457;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__21458 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__21458__1.call(this,buf__$1);
case 2:
return G__21458__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21458.cljs$core$IFn$_invoke$arity$1 = G__21458__1;
G__21458.cljs$core$IFn$_invoke$arity$2 = G__21458__2;
return G__21458;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;

//# sourceMappingURL=channels.js.map