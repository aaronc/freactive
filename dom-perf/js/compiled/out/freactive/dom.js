// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.dom');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('freactive.core');
goog.require('freactive.core');
if(typeof freactive.dom.element_state_lookup !== 'undefined')
{} else
{freactive.dom.element_state_lookup = cljs.core.PersistentArrayMap.EMPTY;
}
freactive.dom.IElementSpec = (function (){var obj44523 = {};return obj44523;
})();
freactive.dom._get_virtual_dom = (function _get_virtual_dom(x){if((function (){var and__11486__auto__ = x;if(and__11486__auto__)
{return x.freactive$dom$IElementSpec$_get_virtual_dom$arity$1;
} else
{return and__11486__auto__;
}
})())
{return x.freactive$dom$IElementSpec$_get_virtual_dom$arity$1(x);
} else
{var x__12135__auto__ = (((x == null))?null:x);return (function (){var or__11498__auto__ = (freactive.dom._get_virtual_dom[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.dom._get_virtual_dom["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IElementSpec.-get-virtual-dom",x);
}
}
})().call(null,x);
}
});

/**
* @constructor
* @param {*} spec
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
freactive.dom.ElementSpec = (function (spec,__meta,__extmap){
this.spec = spec;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
freactive.dom.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12094__auto__,k__12095__auto__){var self__ = this;
var this__12094__auto____$1 = this;return cljs.core._lookup.call(null,this__12094__auto____$1,k__12095__auto__,null);
});
freactive.dom.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12096__auto__,k44525,else__12097__auto__){var self__ = this;
var this__12096__auto____$1 = this;var G__44527 = (((k44525 instanceof cljs.core.Keyword))?k44525.fqn:null);switch (G__44527) {
case "spec":
return self__.spec;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44525,else__12097__auto__);

}
});
freactive.dom.ElementSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12108__auto__,writer__12109__auto__,opts__12110__auto__){var self__ = this;
var this__12108__auto____$1 = this;var pr_pair__12111__auto__ = ((function (this__12108__auto____$1){
return (function (keyval__12112__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12109__auto__,cljs.core.pr_writer,""," ","",opts__12110__auto__,keyval__12112__auto__);
});})(this__12108__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12109__auto__,pr_pair__12111__auto__,"#freactive.dom.ElementSpec{",", ","}",opts__12110__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.dom.ElementSpec.prototype.freactive$dom$IElementSpec$ = true;
freactive.dom.ElementSpec.prototype.freactive$dom$IElementSpec$_get_virtual_dom$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return self__.spec;
});
freactive.dom.ElementSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12092__auto__){var self__ = this;
var this__12092__auto____$1 = this;return self__.__meta;
});
freactive.dom.ElementSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12088__auto__){var self__ = this;
var this__12088__auto____$1 = this;return (new freactive.dom.ElementSpec(self__.spec,self__.__meta,self__.__extmap,self__.__hash));
});
freactive.dom.ElementSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12098__auto__){var self__ = this;
var this__12098__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
freactive.dom.ElementSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12089__auto__){var self__ = this;
var this__12089__auto____$1 = this;var h__11909__auto__ = self__.__hash;if(!((h__11909__auto__ == null)))
{return h__11909__auto__;
} else
{var h__11909__auto____$1 = cljs.core.hash_imap.call(null,this__12089__auto____$1);self__.__hash = h__11909__auto____$1;
return h__11909__auto____$1;
}
});
freactive.dom.ElementSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12090__auto__,other__12091__auto__){var self__ = this;
var this__12090__auto____$1 = this;if(cljs.core.truth_((function (){var and__11486__auto__ = other__12091__auto__;if(cljs.core.truth_(and__11486__auto__))
{return ((this__12090__auto____$1.constructor === other__12091__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12090__auto____$1,other__12091__auto__));
} else
{return and__11486__auto__;
}
})()))
{return true;
} else
{return false;
}
});
freactive.dom.ElementSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12103__auto__,k__12104__auto__){var self__ = this;
var this__12103__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),null], null), null),k__12104__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12103__auto____$1),self__.__meta),k__12104__auto__);
} else
{return (new freactive.dom.ElementSpec(self__.spec,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12104__auto__)),null));
}
});
freactive.dom.ElementSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12101__auto__,k__12102__auto__,G__44524){var self__ = this;
var this__12101__auto____$1 = this;var pred__44528 = cljs.core.keyword_identical_QMARK_;var expr__44529 = k__12102__auto__;if(cljs.core.truth_(pred__44528.call(null,new cljs.core.Keyword(null,"spec","spec",347520401),expr__44529)))
{return (new freactive.dom.ElementSpec(G__44524,self__.__meta,self__.__extmap,null));
} else
{return (new freactive.dom.ElementSpec(self__.spec,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12102__auto__,G__44524),null));
}
});
freactive.dom.ElementSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12106__auto__){var self__ = this;
var this__12106__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.dom.ElementSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12093__auto__,G__44524){var self__ = this;
var this__12093__auto____$1 = this;return (new freactive.dom.ElementSpec(self__.spec,G__44524,self__.__extmap,self__.__hash));
});
freactive.dom.ElementSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12099__auto__,entry__12100__auto__){var self__ = this;
var this__12099__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12100__auto__))
{return cljs.core._assoc.call(null,this__12099__auto____$1,cljs.core._nth.call(null,entry__12100__auto__,(0)),cljs.core._nth.call(null,entry__12100__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12099__auto____$1,entry__12100__auto__);
}
});
freactive.dom.ElementSpec.cljs$lang$type = true;
freactive.dom.ElementSpec.cljs$lang$ctorPrSeq = (function (this__12128__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"freactive.dom/ElementSpec");
});
freactive.dom.ElementSpec.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__){return cljs.core._write.call(null,writer__12129__auto__,"freactive.dom/ElementSpec");
});
freactive.dom.__GT_ElementSpec = (function __GT_ElementSpec(spec){return (new freactive.dom.ElementSpec(spec));
});
freactive.dom.map__GT_ElementSpec = (function map__GT_ElementSpec(G__44526){return (new freactive.dom.ElementSpec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__44526),null,cljs.core.dissoc.call(null,G__44526,new cljs.core.Keyword(null,"spec","spec",347520401))));
});
freactive.dom.dom_node_QMARK_ = (function dom_node_QMARK_(x){return (x.nodeType > (0));
});
freactive.dom.get_element_state = (function get_element_state(x){return cljs.core.get.call(null,freactive.dom.element_state_lookup,x);
});
freactive.dom.get_virtual_dom = (function get_virtual_dom(x){if(cljs.core.truth_(x))
{if(freactive.dom.dom_node_QMARK_.call(null,x))
{var temp__4388__auto__ = freactive.dom.get_element_state.call(null,x);if(cljs.core.truth_(temp__4388__auto__))
{var state = temp__4388__auto__;return get_virtual_dom.call(null,state.element_spec);
} else
{return null;
}
} else
{if(typeof x === 'string')
{return x;
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return x;
} else
{return freactive.dom._get_virtual_dom.call(null,x);

}
}
}
} else
{return null;
}
});
freactive.dom.reset_element_spec_BANG_ = (function reset_element_spec_BANG_(dom_node,spec){return freactive.dom.get_element_state.call(null,dom_node).element_spec = spec;
});

/**
* @constructor
*/
freactive.dom.ElementState = (function (disposed,element_spec,childstates){
this.disposed = disposed;
this.element_spec = element_spec;
this.childstates = childstates;
})
freactive.dom.ElementState.cljs$lang$type = true;
freactive.dom.ElementState.cljs$lang$ctorStr = "freactive.dom/ElementState";
freactive.dom.ElementState.cljs$lang$ctorPrWriter = (function (this__12078__auto__,writer__12079__auto__,opts__12080__auto__){return cljs.core._write.call(null,writer__12079__auto__,"freactive.dom/ElementState");
});
freactive.dom.__GT_ElementState = (function __GT_ElementState(disposed,element_spec,childstates){return (new freactive.dom.ElementState(disposed,element_spec,childstates));
});
freactive.dom.init_element_state_BANG_ = (function init_element_state_BANG_(dom_node,element_spec){var state = (new freactive.dom.ElementState(false,element_spec,cljs.core.PersistentArrayMap.EMPTY));freactive.dom.element_state_lookup = cljs.core.assoc.call(null,freactive.dom.element_state_lookup,dom_node,state);
return state;
});
freactive.dom.register_with_parent_state = (function register_with_parent_state(parent_state,child,state){return parent_state.childstates = cljs.core.assoc.call(null,parent_state.childstates,child,state);
});
freactive.dom.unregister_from_parent_state = (function unregister_from_parent_state(parent_state,child){return parent_state.childstates = cljs.core.dissoc.call(null,parent_state.childstates,child);
});
freactive.dom.get_element_spec = (function get_element_spec(x){if(freactive.dom.dom_node_QMARK_.call(null,x))
{var temp__4388__auto__ = freactive.dom.get_element_state.call(null,x);if(cljs.core.truth_(temp__4388__auto__))
{var state = temp__4388__auto__;return state.element_spec;
} else
{return null;
}
} else
{return x;
}
});
freactive.dom.IHasDOMNode = (function (){var obj44533 = {};return obj44533;
})();
freactive.dom._get_dom_node = (function _get_dom_node(x){if((function (){var and__11486__auto__ = x;if(and__11486__auto__)
{return x.freactive$dom$IHasDOMNode$_get_dom_node$arity$1;
} else
{return and__11486__auto__;
}
})())
{return x.freactive$dom$IHasDOMNode$_get_dom_node$arity$1(x);
} else
{var x__12135__auto__ = (((x == null))?null:x);return (function (){var or__11498__auto__ = (freactive.dom._get_dom_node[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.dom._get_dom_node["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHasDOMNode.-get-dom-node",x);
}
}
})().call(null,x);
}
});
freactive.dom.get_dom_node = (function get_dom_node(x){if(freactive.dom.dom_node_QMARK_.call(null,x))
{return x;
} else
{return freactive.dom._get_dom_node.call(null,x);
}
});
freactive.dom.IRemove = (function (){var obj44535 = {};return obj44535;
})();
freactive.dom._remove_BANG_ = (function _remove_BANG_(x){if((function (){var and__11486__auto__ = x;if(and__11486__auto__)
{return x.freactive$dom$IRemove$_remove_BANG_$arity$1;
} else
{return and__11486__auto__;
}
})())
{return x.freactive$dom$IRemove$_remove_BANG_$arity$1(x);
} else
{var x__12135__auto__ = (((x == null))?null:x);return (function (){var or__11498__auto__ = (freactive.dom._remove_BANG_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.dom._remove_BANG_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRemove.-remove!",x);
}
}
})().call(null,x);
}
});
freactive.dom.dispose_node = (function() {
var dispose_node = null;
var dispose_node__1 = (function (dom_node){return dispose_node.call(null,dom_node,freactive.dom.get_element_state.call(null,dom_node));
});
var dispose_node__2 = (function (dom_node,state){if(cljs.core.truth_(state))
{state.disposed = true;
delete freactive.dom.element_state_lookup[dom_node];
var seq__44542 = cljs.core.seq.call(null,state.childstates);var chunk__44543 = null;var count__44544 = (0);var i__44545 = (0);while(true){
if((i__44545 < count__44544))
{var vec__44546 = cljs.core._nth.call(null,chunk__44543,i__44545);var child = cljs.core.nth.call(null,vec__44546,(0),null);var state__$1 = cljs.core.nth.call(null,vec__44546,(1),null);dispose_node.call(null,child,state__$1);
{
var G__44548 = seq__44542;
var G__44549 = chunk__44543;
var G__44550 = count__44544;
var G__44551 = (i__44545 + (1));
seq__44542 = G__44548;
chunk__44543 = G__44549;
count__44544 = G__44550;
i__44545 = G__44551;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__44542);if(temp__4388__auto__)
{var seq__44542__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44542__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__44542__$1);{
var G__44552 = cljs.core.chunk_rest.call(null,seq__44542__$1);
var G__44553 = c__12268__auto__;
var G__44554 = cljs.core.count.call(null,c__12268__auto__);
var G__44555 = (0);
seq__44542 = G__44552;
chunk__44543 = G__44553;
count__44544 = G__44554;
i__44545 = G__44555;
continue;
}
} else
{var vec__44547 = cljs.core.first.call(null,seq__44542__$1);var child = cljs.core.nth.call(null,vec__44547,(0),null);var state__$1 = cljs.core.nth.call(null,vec__44547,(1),null);dispose_node.call(null,child,state__$1);
{
var G__44556 = cljs.core.next.call(null,seq__44542__$1);
var G__44557 = null;
var G__44558 = (0);
var G__44559 = (0);
seq__44542 = G__44556;
chunk__44543 = G__44557;
count__44544 = G__44558;
i__44545 = G__44559;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
dispose_node = function(dom_node,state){
switch(arguments.length){
case 1:
return dispose_node__1.call(this,dom_node);
case 2:
return dispose_node__2.call(this,dom_node,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispose_node.cljs$core$IFn$_invoke$arity$1 = dispose_node__1;
dispose_node.cljs$core$IFn$_invoke$arity$2 = dispose_node__2;
return dispose_node;
})()
;
freactive.dom.remove_dom_node = (function remove_dom_node(dom_node){var state = (freactive.dom.element_state_lookup[dom_node]);freactive.dom.dispose_node.call(null,dom_node,state);
var temp__4388__auto__ = dom_node.parentNode;if(cljs.core.truth_(temp__4388__auto__))
{var parent = temp__4388__auto__;parent.removeChild(dom_node);
if(cljs.core.truth_(state))
{return delete state.parent_state[state];
} else
{return null;
}
} else
{return null;
}
});
freactive.dom.remove_BANG_ = (function remove_BANG_(x){if(freactive.dom.dom_node_QMARK_.call(null,x))
{return freactive.dom.remove_dom_node.call(null,x);
} else
{return freactive.dom._remove_BANG_.call(null,x);
}
});
freactive.dom.wrap_element_spec = (function wrap_element_spec(elem_spec){if(typeof elem_spec === 'string')
{return (new freactive.dom.ElementSpec(elem_spec));
} else
{return elem_spec;
}
});
freactive.dom.with_transitions = (function with_transitions(elem_spec,transitions){if((function (){var G__44561 = elem_spec;if(G__44561)
{var bit__12162__auto__ = (G__44561.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12162__auto__) || (G__44561.cljs$core$IDeref$))
{return true;
} else
{if((!G__44561.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44561);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44561);
}
})())
{return freactive.core.rx_STAR_.call(null,(function (){return with_transitions.call(null,cljs.core.deref.call(null,elem_spec),transitions);
}),false);
} else
{return cljs.core.vary_meta.call(null,freactive.dom.wrap_element_spec.call(null,elem_spec),cljs.core.merge,transitions);
}
});
freactive.dom.get_transition = (function get_transition(x,transition_name){var spec = freactive.dom.get_element_spec.call(null,x);if(typeof spec === 'string')
{return null;
} else
{return cljs.core.get.call(null,cljs.core.meta.call(null,spec),transition_name);
}
});
freactive.dom.chain_transition = (function chain_transition(elem_spec,transition_name,transition_fn,chain_fn){if((function (){var G__44563 = elem_spec;if(G__44563)
{var bit__12162__auto__ = (G__44563.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12162__auto__) || (G__44563.cljs$core$IDeref$))
{return true;
} else
{if((!G__44563.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44563);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44563);
}
})())
{return freactive.core.rx_STAR_.call(null,(function (){return chain_transition.call(null,cljs.core.deref.call(null,elem_spec),transition_name,transition_fn,chain_fn);
}),false);
} else
{var cur_transition_fn = freactive.dom.get_transition.call(null,elem_spec,transition_name);var transition_fn__$1 = (cljs.core.truth_(cur_transition_fn)?chain_fn.call(null,cur_transition_fn,transition_fn):transition_fn);return freactive.dom.with_transitions.call(null,elem_spec,new cljs.core.PersistentArrayMap.fromArray([transition_name,transition_fn__$1], true, false));
}
});
freactive.dom.prepend_transition = (function prepend_transition(elem_spec,transition_name,transition_fn){return freactive.dom.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){return (function (elem,on_complete){return new_tx.call(null,elem,(function (elem__$1,_){return cur_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.dom.append_transition = (function append_transition(elem_spec,transition_name,transition_fn){return freactive.dom.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){return (function (elem,on_complete){return cur_tx.call(null,elem,(function (elem__$1,_){return new_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.dom.request_animation_frame = (function request_animation_frame(f){return window.requestAnimationFrame(f);
});
if(typeof freactive.dom.render_queue !== 'undefined')
{} else
{freactive.dom.render_queue = [];
}
freactive.dom.enable_fps_instrumentation = false;
freactive.dom.enable_fps_instrumentation_BANG_ = (function() {
var enable_fps_instrumentation_BANG_ = null;
var enable_fps_instrumentation_BANG___0 = (function (){return enable_fps_instrumentation_BANG_.call(null,true);
});
var enable_fps_instrumentation_BANG___1 = (function (enable){return freactive.dom.enable_fps_instrumentation = enable;
});
enable_fps_instrumentation_BANG_ = function(enable){
switch(arguments.length){
case 0:
return enable_fps_instrumentation_BANG___0.call(this);
case 1:
return enable_fps_instrumentation_BANG___1.call(this,enable);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
enable_fps_instrumentation_BANG_.cljs$core$IFn$_invoke$arity$0 = enable_fps_instrumentation_BANG___0;
enable_fps_instrumentation_BANG_.cljs$core$IFn$_invoke$arity$1 = enable_fps_instrumentation_BANG___1;
return enable_fps_instrumentation_BANG_;
})()
;
freactive.dom.instrumentation_i = (-1);
freactive.dom.fps = freactive.core.atom.call(null,null);
freactive.dom.frame_time = freactive.core.atom.call(null,null);
if(typeof freactive.dom.render_loop !== 'undefined')
{} else
{freactive.dom.render_loop = freactive.dom.request_animation_frame.call(null,(function render(frame_ms){cljs.core.reset_BANG_.call(null,freactive.dom.frame_time,frame_ms);
if(cljs.core.truth_(freactive.dom.enable_fps_instrumentation))
{if(cljs.core._EQ_.call(null,freactive.dom.instrumentation_i,(4)))
{cljs.core.reset_BANG_.call(null,freactive.dom.fps,((1000) * ((5) / (frame_ms - freactive.dom.last_instrumentation_time))));
freactive.dom.instrumentation_i = (0);
} else
{freactive.dom.instrumentation_i = (freactive.dom.instrumentation_i + (1));
}
if(cljs.core._EQ_.call(null,(0),freactive.dom.instrumentation_i))
{freactive.dom.last_instrumentation_time = frame_ms;
} else
{}
} else
{}
var queue_44564 = freactive.dom.render_queue;var n_44565 = queue_44564.length;if((n_44565 > (0)))
{freactive.dom.render_queue = [];
var i_44566 = (0);while(true){
if((i_44566 < n_44565))
{(queue_44564[i_44566]).call(null);
{
var G__44567 = (i_44566 + (1));
i_44566 = G__44567;
continue;
}
} else
{}
break;
}
} else
{}
return freactive.dom.request_animation_frame.call(null,render);
}));
}
freactive.dom.queue_animation = (function queue_animation(f){return freactive.dom.render_queue.push(f);
});
freactive.dom.set_style_prop_BANG_ = (function set_style_prop_BANG_(elem,prop_name,prop_value){var prop_name__$1 = cljs.core.name.call(null,prop_name);return (elem.style[prop_name__$1] = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_value)));
});
freactive.dom.set_attr_BANG_ = (function set_attr_BANG_(elem,attr_name,attr_value){var attr_name__$1 = cljs.core.name.call(null,attr_name);return elem.setAttribute(attr_name__$1,attr_value);
});
freactive.dom.on_value_ref_invalidated_STAR_ = (function on_value_ref_invalidated_STAR_(set_fn,element,attr_name,ref,node_state){var temp__4388__auto___44574 = freactive.core.get_add_remove_watch_STAR_.call(null,ref);if(cljs.core.truth_(temp__4388__auto___44574))
{var vec__44571_44575 = temp__4388__auto___44574;var add_watch_STAR__44576 = cljs.core.nth.call(null,vec__44571_44575,(0),null);var remove_watch_STAR__44577 = cljs.core.nth.call(null,vec__44571_44575,(1),null);var f_44578 = ((function (vec__44571_44575,add_watch_STAR__44576,remove_watch_STAR__44577,temp__4388__auto___44574){
return (function() {
var on_value_ref_invalidated = null;
var on_value_ref_invalidated__2 = (function (key,ref__$1){remove_watch_STAR__44577.call(null,ref__$1,key);
return freactive.dom.queue_animation.call(null,((function (vec__44571_44575,add_watch_STAR__44576,remove_watch_STAR__44577,temp__4388__auto___44574){
return (function (_){if(cljs.core.truth_(node_state.disposed))
{return null;
} else
{add_watch_STAR__44576.call(null,ref__$1,key,on_value_ref_invalidated);
return set_fn.call(null,element,attr_name,(function (){var _STAR_invalidate_rx_STAR_44573 = freactive.core._STAR_invalidate_rx_STAR_;try{freactive.core._STAR_invalidate_rx_STAR_ = null;
return cljs.core.deref.call(null,ref__$1);
}finally {freactive.core._STAR_invalidate_rx_STAR_ = _STAR_invalidate_rx_STAR_44573;
}})());
}
});})(vec__44571_44575,add_watch_STAR__44576,remove_watch_STAR__44577,temp__4388__auto___44574))
);
});
var on_value_ref_invalidated__4 = (function (key,ref__$1,_,___$1){return on_value_ref_invalidated.call(null,key,ref__$1);
});
on_value_ref_invalidated = function(key,ref__$1,_,___$1){
switch(arguments.length){
case 2:
return on_value_ref_invalidated__2.call(this,key,ref__$1);
case 4:
return on_value_ref_invalidated__4.call(this,key,ref__$1,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on_value_ref_invalidated.cljs$core$IFn$_invoke$arity$2 = on_value_ref_invalidated__2;
on_value_ref_invalidated.cljs$core$IFn$_invoke$arity$4 = on_value_ref_invalidated__4;
return on_value_ref_invalidated;
})()
;})(vec__44571_44575,add_watch_STAR__44576,remove_watch_STAR__44577,temp__4388__auto___44574))
;add_watch_STAR__44576.call(null,ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,attr_name], null),f_44578);
} else
{}
return set_fn.call(null,element,attr_name,cljs.core.deref.call(null,ref));
});
freactive.dom.bind_style_prop_BANG_ = (function bind_style_prop_BANG_(element,attr_name,attr_value,node_state){if((function (){var G__44580 = attr_value;if(G__44580)
{var bit__12162__auto__ = (G__44580.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12162__auto__) || (G__44580.cljs$core$IDeref$))
{return true;
} else
{if((!G__44580.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44580);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44580);
}
})())
{return freactive.dom.on_value_ref_invalidated_STAR_.call(null,freactive.dom.set_style_prop_BANG_,element,attr_name,attr_value,node_state);
} else
{return freactive.dom.set_style_prop_BANG_.call(null,element,attr_name,attr_value);
}
});
freactive.dom.listen_BANG_ = (function listen_BANG_(element,evt_name,handler){return element.addEventListener(evt_name,handler);
});
freactive.dom.bind_attr_BANG_ = (function bind_attr_BANG_(element,attr_name,attr_value,node_state){var attr_name__$1 = cljs.core.name.call(null,attr_name);if(cljs.core._EQ_.call(null,"style",attr_name__$1))
{if(cljs.core.map_QMARK_.call(null,attr_value))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"attr-value","attr-value",-561203417,null)))))));
}
var seq__44588 = cljs.core.seq.call(null,attr_value);var chunk__44589 = null;var count__44590 = (0);var i__44591 = (0);while(true){
if((i__44591 < count__44590))
{var vec__44592 = cljs.core._nth.call(null,chunk__44589,i__44591);var p = cljs.core.nth.call(null,vec__44592,(0),null);var v = cljs.core.nth.call(null,vec__44592,(1),null);freactive.dom.bind_style_prop_BANG_.call(null,element,p,v,node_state);
{
var G__44595 = seq__44588;
var G__44596 = chunk__44589;
var G__44597 = count__44590;
var G__44598 = (i__44591 + (1));
seq__44588 = G__44595;
chunk__44589 = G__44596;
count__44590 = G__44597;
i__44591 = G__44598;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__44588);if(temp__4388__auto__)
{var seq__44588__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44588__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__44588__$1);{
var G__44599 = cljs.core.chunk_rest.call(null,seq__44588__$1);
var G__44600 = c__12268__auto__;
var G__44601 = cljs.core.count.call(null,c__12268__auto__);
var G__44602 = (0);
seq__44588 = G__44599;
chunk__44589 = G__44600;
count__44590 = G__44601;
i__44591 = G__44602;
continue;
}
} else
{var vec__44593 = cljs.core.first.call(null,seq__44588__$1);var p = cljs.core.nth.call(null,vec__44593,(0),null);var v = cljs.core.nth.call(null,vec__44593,(1),null);freactive.dom.bind_style_prop_BANG_.call(null,element,p,v,node_state);
{
var G__44603 = cljs.core.next.call(null,seq__44588__$1);
var G__44604 = null;
var G__44605 = (0);
var G__44606 = (0);
seq__44588 = G__44603;
chunk__44589 = G__44604;
count__44590 = G__44605;
i__44591 = G__44606;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["o","n","-"], null),cljs.core.take.call(null,(3),attr_name__$1)))
{return freactive.dom.listen_BANG_.call(null,element,attr_name__$1.substring((3)),attr_value);
} else
{if((function (){var G__44594 = attr_value;if(G__44594)
{var bit__12162__auto__ = (G__44594.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12162__auto__) || (G__44594.cljs$core$IDeref$))
{return true;
} else
{if((!G__44594.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44594);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44594);
}
})())
{return freactive.dom.on_value_ref_invalidated_STAR_.call(null,freactive.dom.set_attr_BANG_,element,attr_name__$1,attr_value,node_state);
} else
{return freactive.dom.set_attr_BANG_.call(null,element,attr_name__$1,attr_value);
}

}
}
});
/**
* Regular expression that parses a CSS-style id and class from an element name.
*/
freactive.dom.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
freactive.dom.create_dom_node = (function create_dom_node(kw){var tag_ns = cljs.core.namespace.call(null,kw);var vec__44609 = cljs.core.re_matches.call(null,freactive.dom.re_tag,cljs.core.name.call(null,kw));var _ = cljs.core.nth.call(null,vec__44609,(0),null);var tag = cljs.core.nth.call(null,vec__44609,(1),null);var id = cljs.core.nth.call(null,vec__44609,(2),null);var class$ = cljs.core.nth.call(null,vec__44609,(3),null);var node = (function (){var G__44610 = tag_ns;if(cljs.core._EQ_.call(null,null,G__44610))
{return document.createElement(tag);
} else
{if(cljs.core._EQ_.call(null,"svg",G__44610))
{return document.createElementNS("http://www.w3.org/2000/svg",tag);
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Don't know how to handle tag ns "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_ns)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));


}
}
})();if(cljs.core.truth_(id))
{node.id = id;
} else
{}
if(cljs.core.truth_(class$))
{node.className = class$;
} else
{}
return node;
});
freactive.dom.replace_child = (function replace_child(parent,new_elem_spec,cur_elem){var cur_dom_node = freactive.dom.get_dom_node.call(null,cur_elem);var new_virtual_dom = freactive.dom.get_virtual_dom.call(null,new_elem_spec);if((typeof new_virtual_dom === 'string') && (cljs.core._EQ_.call(null,cur_dom_node.nodeType,(3))))
{cur_dom_node.textContent = new_virtual_dom;
freactive.dom.reset_element_spec_BANG_.call(null,cur_dom_node,new_elem_spec);
return cur_elem;
} else
{var new_elem = freactive.dom.build_element.call(null,new_elem_spec);freactive.dom.get_dom_node.call(null,parent).replaceChild(freactive.dom.get_dom_node.call(null,new_elem),cur_dom_node);
freactive.dom.dispose_node.call(null,cur_dom_node);
return new_elem;
}
});
freactive.dom.append_child = (function append_child(parent,new_elem){var new_elem__$1 = freactive.dom.build_element.call(null,new_elem);freactive.dom.get_dom_node.call(null,parent).appendChild(new_elem__$1);
return new_elem__$1;
});
freactive.dom.replace_or_append_child = (function replace_or_append_child(parent,new_elem,cur_elem){var new_elem__$1 = (cljs.core.truth_(cur_elem)?freactive.dom.replace_child.call(null,parent,new_elem,cur_elem):freactive.dom.append_child.call(null,parent,new_elem));var temp__4388__auto___44611 = freactive.dom.get_element_state.call(null,parent);if(cljs.core.truth_(temp__4388__auto___44611))
{var parent_state_44612 = temp__4388__auto___44611;var state_44613 = freactive.dom.get_element_state.call(null,new_elem__$1);state_44613.parent_state = parent_state_44612;
freactive.dom.register_with_parent_state.call(null,parent_state_44612,new_elem__$1,state_44613);
} else
{}
return new_elem__$1;
});
freactive.dom.do_show_element = (function do_show_element(parent,new_elem,cur_elem){if(cljs.core.truth_(new_elem))
{var show = freactive.dom.get_transition.call(null,new_elem,new cljs.core.Keyword(null,"on-show","on-show",-1100796727));var new_elem__$1 = freactive.dom.replace_or_append_child.call(null,parent,new_elem,cur_elem);if(cljs.core.truth_(show))
{show.call(null,new_elem__$1,null);
} else
{}
return new_elem__$1;
} else
{return null;
}
});
freactive.dom.transition_element = (function transition_element(parent,new_elem,cur_elem){if(cljs.core.truth_(cur_elem))
{var temp__4386__auto__ = freactive.dom.get_transition.call(null,cur_elem,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));if(cljs.core.truth_(temp__4386__auto__))
{var hide = temp__4386__auto__;return hide.call(null,cur_elem,freactive.dom.do_show_element.call(null,parent,new_elem,cur_elem));
} else
{return freactive.dom.do_show_element.call(null,parent,new_elem,cur_elem);
}
} else
{return freactive.dom.do_show_element.call(null,parent,new_elem,cur_elem);
}
});
freactive.dom.clear_children_BANG_ = (function clear_children_BANG_(parent){var dom_node = freactive.dom.get_dom_node.call(null,parent);while(true){
var last_child = dom_node.lastChild;if(cljs.core.truth_(last_child))
{dom_node.removeChild(last_child);
{
continue;
}
} else
{return null;
}
break;
}
});
freactive.dom.exec_transition = (function exec_transition(node,transition_name,callback){var temp__4386__auto__ = freactive.dom.get_transition.call(null,node,transition_name);if(cljs.core.truth_(temp__4386__auto__))
{var transition = temp__4386__auto__;return transition.call(null,node,callback);
} else
{if(cljs.core.truth_(callback))
{return callback.call(null);
} else
{return null;
}
}
});
freactive.dom.hide_node = (function hide_node(node,callback){return freactive.dom.exec_transition.call(null,node,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),callback);
});
freactive.dom.show_node = (function show_node(node,callback){return freactive.dom.exec_transition.call(null,node,new cljs.core.Keyword(null,"on-show","on-show",-1100796727),callback);
});

/**
* @constructor
*/
freactive.dom.ReactiveElement = (function (parent,cur_element,dirty,updating,disposed,animate,invalidate){
this.parent = parent;
this.cur_element = cur_element;
this.dirty = dirty;
this.updating = updating;
this.disposed = disposed;
this.animate = animate;
this.invalidate = invalidate;
})
freactive.dom.ReactiveElement.cljs$lang$type = true;
freactive.dom.ReactiveElement.cljs$lang$ctorStr = "freactive.dom/ReactiveElement";
freactive.dom.ReactiveElement.cljs$lang$ctorPrWriter = (function (this__12075__auto__,writer__12076__auto__,opt__12077__auto__){return cljs.core._write.call(null,writer__12076__auto__,"freactive.dom/ReactiveElement");
});
freactive.dom.ReactiveElement.prototype.freactive$dom$IRemove$ = true;
freactive.dom.ReactiveElement.prototype.freactive$dom$IRemove$_remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;this$__$1.disposed = true;
if(cljs.core.truth_(self__.updating))
{} else
{freactive.dom.remove_BANG_.call(null,cljs.core.deref.call(null,self__.cur_element));
}
var temp__4388__auto__ = freactive.dom.get_element_state.call(null,self__.parent);if(cljs.core.truth_(temp__4388__auto__))
{var parent_state = temp__4388__auto__;return freactive.dom.unregister_from_parent_state.call(null,parent_state,this$__$1);
} else
{return null;
}
});
freactive.dom.__GT_ReactiveElement = (function __GT_ReactiveElement(parent,cur_element,dirty,updating,disposed,animate,invalidate){return (new freactive.dom.ReactiveElement(parent,cur_element,dirty,updating,disposed,animate,invalidate));
});
freactive.dom.append_deref_child = (function append_deref_child(parent,child_ref){var temp__4386__auto__ = freactive.core.get_add_remove_watch_STAR_.call(null,child_ref);if(cljs.core.truth_(temp__4386__auto__))
{var vec__44617 = temp__4386__auto__;var add_watch_STAR_ = cljs.core.nth.call(null,vec__44617,(0),null);var remove_watch_STAR_ = cljs.core.nth.call(null,vec__44617,(1),null);var state = (new freactive.dom.ReactiveElement(parent,null,false,false,false,null,null));var get_new_elem = ((function (state,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function (){state.dirty = false;
add_watch_STAR_.call(null,child_ref,state,state.invalidate);
var or__11498__auto__ = (function (){var _STAR_invalidate_rx_STAR_44619 = freactive.core._STAR_invalidate_rx_STAR_;try{freactive.core._STAR_invalidate_rx_STAR_ = null;
return cljs.core.deref.call(null,child_ref);
}finally {freactive.core._STAR_invalidate_rx_STAR_ = _STAR_invalidate_rx_STAR_44619;
}})();if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
});})(state,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
;var show_new_elem = ((function (state,get_new_elem,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function (new_elem,cur){var new_node = freactive.dom.replace_or_append_child.call(null,parent,new_elem,cur);state.cur_element = new_node;
state.updating = false;
if(cljs.core.truth_(state.dirty))
{freactive.dom.queue_animation.call(null,state.animate);
} else
{}
return freactive.dom.show_node.call(null,new_node,null);
});})(state,get_new_elem,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
;var animate = ((function (state,get_new_elem,show_new_elem,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function animate(x){if(cljs.core.truth_(state.disposed))
{return freactive.dom.remove_BANG_.call(null,state.cur_element);
} else
{var new_elem = get_new_elem.call(null);var cur = state.cur_element;if(cljs.core.not_EQ_.call(null,freactive.dom.get_virtual_dom.call(null,cur),freactive.dom.get_virtual_dom.call(null,new_elem)))
{var hide = freactive.dom.get_transition.call(null,cur,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));if(cljs.core.truth_(hide))
{return hide.call(null,cur,((function (hide,new_elem,cur,state,get_new_elem,show_new_elem,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function (){if(cljs.core.truth_(state.disposed))
{freactive.dom.remove_dom_node.call(null,cur);
return cur.updating = false;
} else
{var new_elem__$1 = (cljs.core.truth_(state.dirty)?get_new_elem.call(null):new_elem);return show_new_elem.call(null,new_elem__$1,cur);
}
});})(hide,new_elem,cur,state,get_new_elem,show_new_elem,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
);
} else
{return show_new_elem.call(null,new_elem,cur);
}
} else
{return null;
}
}
});})(state,get_new_elem,show_new_elem,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
;var invalidate = ((function (state,get_new_elem,show_new_elem,animate,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function() {
var on_child_ref_invalidated = null;
var on_child_ref_invalidated__2 = (function (cur_elem,child_ref__$1){remove_watch_STAR_.call(null,child_ref__$1,cur_elem);
if(cljs.core.truth_(state.disposed))
{return null;
} else
{state.dirty = true;
if(cljs.core.truth_(state.updating))
{return null;
} else
{state.updating = true;
return freactive.dom.queue_animation.call(null,animate);
}
}
});
var on_child_ref_invalidated__4 = (function (key,child_ref__$1,_,___$1){return on_child_ref_invalidated.call(null,key,child_ref__$1);
});
on_child_ref_invalidated = function(key,child_ref__$1,_,___$1){
switch(arguments.length){
case 2:
return on_child_ref_invalidated__2.call(this,key,child_ref__$1);
case 4:
return on_child_ref_invalidated__4.call(this,key,child_ref__$1,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on_child_ref_invalidated.cljs$core$IFn$_invoke$arity$2 = on_child_ref_invalidated__2;
on_child_ref_invalidated.cljs$core$IFn$_invoke$arity$4 = on_child_ref_invalidated__4;
return on_child_ref_invalidated;
})()
;})(state,get_new_elem,show_new_elem,animate,vec__44617,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
;state.animate = animate;
state.invalidate = invalidate;
show_new_elem.call(null,get_new_elem.call(null),null);
var temp__4388__auto___44620 = freactive.dom.get_element_state.call(null,parent);if(cljs.core.truth_(temp__4388__auto___44620))
{var parent_state_44621 = temp__4388__auto___44620;freactive.dom.register_with_parent_state.call(null,parent_state_44621,state,state);
} else
{}
return state;
} else
{return freactive.dom.transition_element.call(null,parent,cljs.core.deref.call(null,child_ref),null);
}
});
freactive.dom.append_child_BANG_ = (function append_child_BANG_(parent,child){if((function (){var G__44623 = child;if(G__44623)
{var bit__12162__auto__ = (G__44623.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12162__auto__) || (G__44623.cljs$core$IDeref$))
{return true;
} else
{if((!G__44623.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__44623);
}
})())
{return freactive.dom.append_deref_child.call(null,parent,child);
} else
{return freactive.dom.transition_element.call(null,parent,child,null);

}
});
freactive.dom.append_children_BANG_ = (function append_children_BANG_(elem,children){var seq__44628 = cljs.core.seq.call(null,children);var chunk__44629 = null;var count__44630 = (0);var i__44631 = (0);while(true){
if((i__44631 < count__44630))
{var ch = cljs.core._nth.call(null,chunk__44629,i__44631);if(cljs.core.sequential_QMARK_.call(null,ch))
{if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword))
{freactive.dom.append_child_BANG_.call(null,elem,ch);
} else
{append_children_BANG_.call(null,elem,ch);
}
} else
{freactive.dom.append_child_BANG_.call(null,elem,ch);
}
{
var G__44632 = seq__44628;
var G__44633 = chunk__44629;
var G__44634 = count__44630;
var G__44635 = (i__44631 + (1));
seq__44628 = G__44632;
chunk__44629 = G__44633;
count__44630 = G__44634;
i__44631 = G__44635;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__44628);if(temp__4388__auto__)
{var seq__44628__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44628__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__44628__$1);{
var G__44636 = cljs.core.chunk_rest.call(null,seq__44628__$1);
var G__44637 = c__12268__auto__;
var G__44638 = cljs.core.count.call(null,c__12268__auto__);
var G__44639 = (0);
seq__44628 = G__44636;
chunk__44629 = G__44637;
count__44630 = G__44638;
i__44631 = G__44639;
continue;
}
} else
{var ch = cljs.core.first.call(null,seq__44628__$1);if(cljs.core.sequential_QMARK_.call(null,ch))
{if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword))
{freactive.dom.append_child_BANG_.call(null,elem,ch);
} else
{append_children_BANG_.call(null,elem,ch);
}
} else
{freactive.dom.append_child_BANG_.call(null,elem,ch);
}
{
var G__44640 = cljs.core.next.call(null,seq__44628__$1);
var G__44641 = null;
var G__44642 = (0);
var G__44643 = (0);
seq__44628 = G__44640;
chunk__44629 = G__44641;
count__44630 = G__44642;
i__44631 = G__44643;
continue;
}
}
} else
{return null;
}
}
break;
}
});
freactive.dom.build_element = (function build_element(elem_spec){var virtual_dom = freactive.dom.get_virtual_dom.call(null,elem_spec);var node = ((typeof virtual_dom === 'string')?(function (){var node = document.createTextNode(virtual_dom);freactive.dom.init_element_state_BANG_.call(null,node,elem_spec);
return node;
})():(function (){var node = freactive.dom.create_dom_node.call(null,cljs.core.first.call(null,virtual_dom));var state = freactive.dom.init_element_state_BANG_.call(null,node,elem_spec);var attrs_QMARK_ = cljs.core.second.call(null,virtual_dom);var attrs = ((cljs.core.map_QMARK_.call(null,attrs_QMARK_))?attrs_QMARK_:null);var children = (cljs.core.truth_(attrs)?cljs.core.nnext.call(null,virtual_dom):cljs.core.next.call(null,virtual_dom));var seq__44650_44656 = cljs.core.seq.call(null,attrs);var chunk__44651_44657 = null;var count__44652_44658 = (0);var i__44653_44659 = (0);while(true){
if((i__44653_44659 < count__44652_44658))
{var vec__44654_44660 = cljs.core._nth.call(null,chunk__44651_44657,i__44653_44659);var k_44661 = cljs.core.nth.call(null,vec__44654_44660,(0),null);var v_44662 = cljs.core.nth.call(null,vec__44654_44660,(1),null);freactive.dom.bind_attr_BANG_.call(null,node,k_44661,v_44662,state);
{
var G__44663 = seq__44650_44656;
var G__44664 = chunk__44651_44657;
var G__44665 = count__44652_44658;
var G__44666 = (i__44653_44659 + (1));
seq__44650_44656 = G__44663;
chunk__44651_44657 = G__44664;
count__44652_44658 = G__44665;
i__44653_44659 = G__44666;
continue;
}
} else
{var temp__4388__auto___44667 = cljs.core.seq.call(null,seq__44650_44656);if(temp__4388__auto___44667)
{var seq__44650_44668__$1 = temp__4388__auto___44667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44650_44668__$1))
{var c__12268__auto___44669 = cljs.core.chunk_first.call(null,seq__44650_44668__$1);{
var G__44670 = cljs.core.chunk_rest.call(null,seq__44650_44668__$1);
var G__44671 = c__12268__auto___44669;
var G__44672 = cljs.core.count.call(null,c__12268__auto___44669);
var G__44673 = (0);
seq__44650_44656 = G__44670;
chunk__44651_44657 = G__44671;
count__44652_44658 = G__44672;
i__44653_44659 = G__44673;
continue;
}
} else
{var vec__44655_44674 = cljs.core.first.call(null,seq__44650_44668__$1);var k_44675 = cljs.core.nth.call(null,vec__44655_44674,(0),null);var v_44676 = cljs.core.nth.call(null,vec__44655_44674,(1),null);freactive.dom.bind_attr_BANG_.call(null,node,k_44675,v_44676,state);
{
var G__44677 = cljs.core.next.call(null,seq__44650_44668__$1);
var G__44678 = null;
var G__44679 = (0);
var G__44680 = (0);
seq__44650_44656 = G__44677;
chunk__44651_44657 = G__44678;
count__44652_44658 = G__44679;
i__44653_44659 = G__44680;
continue;
}
}
} else
{}
}
break;
}
if(children)
{freactive.dom.append_children_BANG_.call(null,node,children);
} else
{}
return node;
})());return node;
});
freactive.dom.mount_BANG_ = (function mount_BANG_(element,child){var temp__4388__auto___44681 = freactive.dom.get_dom_node.call(null,element).lastChild;if(cljs.core.truth_(temp__4388__auto___44681))
{var last_child_44682 = temp__4388__auto___44681;freactive.dom.remove_BANG_.call(null,last_child_44682);
} else
{}
return freactive.dom.append_child_BANG_.call(null,element,child);
});

//# sourceMappingURL=dom.js.map