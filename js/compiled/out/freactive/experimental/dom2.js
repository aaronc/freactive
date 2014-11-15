// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.experimental.dom2');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('freactive.core');
goog.require('freactive.core');
if(typeof freactive.experimental.dom2.element_state_lookup !== 'undefined')
{} else
{freactive.experimental.dom2.element_state_lookup = cljs.core.PersistentArrayMap.EMPTY;
}
freactive.experimental.dom2.IElementSpec = (function (){var obj27955 = {};return obj27955;
})();
freactive.experimental.dom2._get_virtual_dom = (function _get_virtual_dom(x){if((function (){var and__11483__auto__ = x;if(and__11483__auto__)
{return x.freactive$experimental$dom2$IElementSpec$_get_virtual_dom$arity$1;
} else
{return and__11483__auto__;
}
})())
{return x.freactive$experimental$dom2$IElementSpec$_get_virtual_dom$arity$1(x);
} else
{var x__12132__auto__ = (((x == null))?null:x);return (function (){var or__11495__auto__ = (freactive.experimental.dom2._get_virtual_dom[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (freactive.experimental.dom2._get_virtual_dom["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
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
freactive.experimental.dom2.ElementSpec = (function (spec,__meta,__extmap){
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
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12091__auto__,k__12092__auto__){var self__ = this;
var this__12091__auto____$1 = this;return cljs.core._lookup.call(null,this__12091__auto____$1,k__12092__auto__,null);
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12093__auto__,k27957,else__12094__auto__){var self__ = this;
var this__12093__auto____$1 = this;var G__27959 = (((k27957 instanceof cljs.core.Keyword))?k27957.fqn:null);switch (G__27959) {
case "spec":
return self__.spec;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27957,else__12094__auto__);

}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12105__auto__,writer__12106__auto__,opts__12107__auto__){var self__ = this;
var this__12105__auto____$1 = this;var pr_pair__12108__auto__ = ((function (this__12105__auto____$1){
return (function (keyval__12109__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12106__auto__,cljs.core.pr_writer,""," ","",opts__12107__auto__,keyval__12109__auto__);
});})(this__12105__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12106__auto__,pr_pair__12108__auto__,"#freactive.experimental.dom2.ElementSpec{",", ","}",opts__12107__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.experimental.dom2.ElementSpec.prototype.freactive$experimental$dom2$IElementSpec$ = true;
freactive.experimental.dom2.ElementSpec.prototype.freactive$experimental$dom2$IElementSpec$_get_virtual_dom$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return self__.spec;
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12089__auto__){var self__ = this;
var this__12089__auto____$1 = this;return self__.__meta;
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12085__auto__){var self__ = this;
var this__12085__auto____$1 = this;return (new freactive.experimental.dom2.ElementSpec(self__.spec,self__.__meta,self__.__extmap,self__.__hash));
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12095__auto__){var self__ = this;
var this__12095__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12086__auto__){var self__ = this;
var this__12086__auto____$1 = this;var h__11906__auto__ = self__.__hash;if(!((h__11906__auto__ == null)))
{return h__11906__auto__;
} else
{var h__11906__auto____$1 = cljs.core.hash_imap.call(null,this__12086__auto____$1);self__.__hash = h__11906__auto____$1;
return h__11906__auto____$1;
}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12087__auto__,other__12088__auto__){var self__ = this;
var this__12087__auto____$1 = this;if(cljs.core.truth_((function (){var and__11483__auto__ = other__12088__auto__;if(cljs.core.truth_(and__11483__auto__))
{return ((this__12087__auto____$1.constructor === other__12088__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12087__auto____$1,other__12088__auto__));
} else
{return and__11483__auto__;
}
})()))
{return true;
} else
{return false;
}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12100__auto__,k__12101__auto__){var self__ = this;
var this__12100__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),null], null), null),k__12101__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12100__auto____$1),self__.__meta),k__12101__auto__);
} else
{return (new freactive.experimental.dom2.ElementSpec(self__.spec,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12101__auto__)),null));
}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12098__auto__,k__12099__auto__,G__27956){var self__ = this;
var this__12098__auto____$1 = this;var pred__27960 = cljs.core.keyword_identical_QMARK_;var expr__27961 = k__12099__auto__;if(cljs.core.truth_(pred__27960.call(null,new cljs.core.Keyword(null,"spec","spec",347520401),expr__27961)))
{return (new freactive.experimental.dom2.ElementSpec(G__27956,self__.__meta,self__.__extmap,null));
} else
{return (new freactive.experimental.dom2.ElementSpec(self__.spec,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12099__auto__,G__27956),null));
}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12103__auto__){var self__ = this;
var this__12103__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12090__auto__,G__27956){var self__ = this;
var this__12090__auto____$1 = this;return (new freactive.experimental.dom2.ElementSpec(self__.spec,G__27956,self__.__extmap,self__.__hash));
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12096__auto__,entry__12097__auto__){var self__ = this;
var this__12096__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12097__auto__))
{return cljs.core._assoc.call(null,this__12096__auto____$1,cljs.core._nth.call(null,entry__12097__auto__,(0)),cljs.core._nth.call(null,entry__12097__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12096__auto____$1,entry__12097__auto__);
}
});
freactive.experimental.dom2.ElementSpec.cljs$lang$type = true;
freactive.experimental.dom2.ElementSpec.cljs$lang$ctorPrSeq = (function (this__12125__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"freactive.experimental.dom2/ElementSpec");
});
freactive.experimental.dom2.ElementSpec.cljs$lang$ctorPrWriter = (function (this__12125__auto__,writer__12126__auto__){return cljs.core._write.call(null,writer__12126__auto__,"freactive.experimental.dom2/ElementSpec");
});
freactive.experimental.dom2.__GT_ElementSpec = (function __GT_ElementSpec(spec){return (new freactive.experimental.dom2.ElementSpec(spec));
});
freactive.experimental.dom2.map__GT_ElementSpec = (function map__GT_ElementSpec(G__27958){return (new freactive.experimental.dom2.ElementSpec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__27958),null,cljs.core.dissoc.call(null,G__27958,new cljs.core.Keyword(null,"spec","spec",347520401))));
});
freactive.experimental.dom2.dom_node_QMARK_ = (function dom_node_QMARK_(x){return (x.nodeType > (0));
});
freactive.experimental.dom2.get_element_state = (function get_element_state(x){return cljs.core.get.call(null,freactive.experimental.dom2.element_state_lookup,x);
});
freactive.experimental.dom2.get_virtual_dom = (function get_virtual_dom(x){if(cljs.core.truth_(x))
{if(freactive.experimental.dom2.dom_node_QMARK_.call(null,x))
{var temp__4388__auto__ = freactive.experimental.dom2.get_element_state.call(null,x);if(cljs.core.truth_(temp__4388__auto__))
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
{return freactive.experimental.dom2._get_virtual_dom.call(null,x);

}
}
}
} else
{return null;
}
});
freactive.experimental.dom2.reset_element_spec_BANG_ = (function reset_element_spec_BANG_(dom_node,spec){return freactive.experimental.dom2.get_element_state.call(null,dom_node).element_spec = spec;
});
freactive.experimental.dom2.init_element_state_BANG_ = (function init_element_state_BANG_(dom_node,element_spec){var state = {"childstates": cljs.core.PersistentArrayMap.EMPTY, "element-spec": element_spec, "disposed": false};freactive.experimental.dom2.element_state_lookup = cljs.core.assoc.call(null,freactive.experimental.dom2.element_state_lookup,dom_node,state);
return state;
});
freactive.experimental.dom2.register_with_parent_state = (function register_with_parent_state(parent_state,child,state){return parent_state.childstates = cljs.core.assoc.call(null,parent_state.childstates,child,state);
});
freactive.experimental.dom2.unregister_from_parent_state = (function unregister_from_parent_state(parent_state,child){return parent_state.childstates = cljs.core.dissoc.call(null,parent_state.childstates,child);
});
freactive.experimental.dom2.get_element_spec = (function get_element_spec(x){if(freactive.experimental.dom2.dom_node_QMARK_.call(null,x))
{var temp__4388__auto__ = (freactive.experimental.dom2.element_state_lookup[x]);if(cljs.core.truth_(temp__4388__auto__))
{var state = temp__4388__auto__;return state.element_spec;
} else
{return null;
}
} else
{return x;
}
});
freactive.experimental.dom2.IHasDOMNode = (function (){var obj27965 = {};return obj27965;
})();
freactive.experimental.dom2._get_dom_node = (function _get_dom_node(x){if((function (){var and__11483__auto__ = x;if(and__11483__auto__)
{return x.freactive$experimental$dom2$IHasDOMNode$_get_dom_node$arity$1;
} else
{return and__11483__auto__;
}
})())
{return x.freactive$experimental$dom2$IHasDOMNode$_get_dom_node$arity$1(x);
} else
{var x__12132__auto__ = (((x == null))?null:x);return (function (){var or__11495__auto__ = (freactive.experimental.dom2._get_dom_node[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (freactive.experimental.dom2._get_dom_node["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHasDOMNode.-get-dom-node",x);
}
}
})().call(null,x);
}
});
freactive.experimental.dom2.get_dom_node = (function get_dom_node(x){if(freactive.experimental.dom2.dom_node_QMARK_.call(null,x))
{return x;
} else
{return freactive.experimental.dom2._get_dom_node.call(null,x);
}
});
freactive.experimental.dom2.IRemove = (function (){var obj27967 = {};return obj27967;
})();
freactive.experimental.dom2._remove_BANG_ = (function _remove_BANG_(x){if((function (){var and__11483__auto__ = x;if(and__11483__auto__)
{return x.freactive$experimental$dom2$IRemove$_remove_BANG_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return x.freactive$experimental$dom2$IRemove$_remove_BANG_$arity$1(x);
} else
{var x__12132__auto__ = (((x == null))?null:x);return (function (){var or__11495__auto__ = (freactive.experimental.dom2._remove_BANG_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (freactive.experimental.dom2._remove_BANG_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRemove.-remove!",x);
}
}
})().call(null,x);
}
});
freactive.experimental.dom2.dispose_node = (function() {
var dispose_node = null;
var dispose_node__1 = (function (dom_node){return dispose_node.call(null,dom_node,freactive.experimental.dom2.get_element_state.call(null,dom_node));
});
var dispose_node__2 = (function (dom_node,state){if(cljs.core.truth_(state))
{state.disposed = true;
delete freactive.experimental.dom2.element_state_lookup[dom_node];
var seq__27974 = cljs.core.seq.call(null,state.childstates);var chunk__27975 = null;var count__27976 = (0);var i__27977 = (0);while(true){
if((i__27977 < count__27976))
{var vec__27978 = cljs.core._nth.call(null,chunk__27975,i__27977);var child = cljs.core.nth.call(null,vec__27978,(0),null);var state__$1 = cljs.core.nth.call(null,vec__27978,(1),null);dispose_node.call(null,child,state__$1);
{
var G__27980 = seq__27974;
var G__27981 = chunk__27975;
var G__27982 = count__27976;
var G__27983 = (i__27977 + (1));
seq__27974 = G__27980;
chunk__27975 = G__27981;
count__27976 = G__27982;
i__27977 = G__27983;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__27974);if(temp__4388__auto__)
{var seq__27974__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27974__$1))
{var c__12265__auto__ = cljs.core.chunk_first.call(null,seq__27974__$1);{
var G__27984 = cljs.core.chunk_rest.call(null,seq__27974__$1);
var G__27985 = c__12265__auto__;
var G__27986 = cljs.core.count.call(null,c__12265__auto__);
var G__27987 = (0);
seq__27974 = G__27984;
chunk__27975 = G__27985;
count__27976 = G__27986;
i__27977 = G__27987;
continue;
}
} else
{var vec__27979 = cljs.core.first.call(null,seq__27974__$1);var child = cljs.core.nth.call(null,vec__27979,(0),null);var state__$1 = cljs.core.nth.call(null,vec__27979,(1),null);dispose_node.call(null,child,state__$1);
{
var G__27988 = cljs.core.next.call(null,seq__27974__$1);
var G__27989 = null;
var G__27990 = (0);
var G__27991 = (0);
seq__27974 = G__27988;
chunk__27975 = G__27989;
count__27976 = G__27990;
i__27977 = G__27991;
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
freactive.experimental.dom2.remove_dom_node = (function remove_dom_node(dom_node){var state = (freactive.experimental.dom2.element_state_lookup[dom_node]);freactive.experimental.dom2.dispose_node.call(null,dom_node,state);
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
freactive.experimental.dom2.remove_BANG_ = (function remove_BANG_(x){if(freactive.experimental.dom2.dom_node_QMARK_.call(null,x))
{return freactive.experimental.dom2.remove_dom_node.call(null,x);
} else
{return freactive.experimental.dom2._remove_BANG_.call(null,x);
}
});
freactive.experimental.dom2.wrap_element_spec = (function wrap_element_spec(elem_spec){if(typeof elem_spec === 'string')
{return (new freactive.experimental.dom2.ElementSpec(elem_spec));
} else
{return elem_spec;
}
});
freactive.experimental.dom2.with_transitions = (function with_transitions(elem_spec,transitions){if((function (){var G__27993 = elem_spec;if(G__27993)
{var bit__12159__auto__ = (G__27993.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12159__auto__) || (G__27993.cljs$core$IDeref$))
{return true;
} else
{if((!G__27993.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__27993);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__27993);
}
})())
{return freactive.core.rx_STAR_.call(null,(function (){return with_transitions.call(null,cljs.core.deref.call(null,elem_spec),transitions);
}),false);
} else
{return cljs.core.vary_meta.call(null,freactive.experimental.dom2.wrap_element_spec.call(null,elem_spec),cljs.core.merge,transitions);
}
});
freactive.experimental.dom2.get_transition = (function get_transition(x,transition_name){var spec = freactive.experimental.dom2.get_element_spec.call(null,x);if(typeof spec === 'string')
{return null;
} else
{return cljs.core.get.call(null,cljs.core.meta.call(null,spec),transition_name);
}
});
freactive.experimental.dom2.chain_transition = (function chain_transition(elem_spec,transition_name,transition_fn,chain_fn){if((function (){var G__27995 = elem_spec;if(G__27995)
{var bit__12159__auto__ = (G__27995.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12159__auto__) || (G__27995.cljs$core$IDeref$))
{return true;
} else
{if((!G__27995.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__27995);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__27995);
}
})())
{return freactive.core.rx_STAR_.call(null,(function (){return chain_transition.call(null,cljs.core.deref.call(null,elem_spec),transition_name,transition_fn,chain_fn);
}),false);
} else
{var cur_transition_fn = freactive.experimental.dom2.get_transition.call(null,elem_spec,transition_name);var transition_fn__$1 = (cljs.core.truth_(cur_transition_fn)?chain_fn.call(null,cur_transition_fn,transition_fn):transition_fn);return freactive.experimental.dom2.with_transitions.call(null,elem_spec,new cljs.core.PersistentArrayMap.fromArray([transition_name,transition_fn__$1], true, false));
}
});
freactive.experimental.dom2.prepend_transition = (function prepend_transition(elem_spec,transition_name,transition_fn){return freactive.experimental.dom2.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){return (function (elem,on_complete){return new_tx.call(null,elem,(function (elem__$1,_){return cur_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.experimental.dom2.append_transition = (function append_transition(elem_spec,transition_name,transition_fn){return freactive.experimental.dom2.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){return (function (elem,on_complete){return cur_tx.call(null,elem,(function (elem__$1,_){return new_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.experimental.dom2.request_animation_frame = (function request_animation_frame(f){return window.requestAnimationFrame(f);
});
freactive.experimental.dom2.set_style_prop_BANG_ = (function set_style_prop_BANG_(elem,prop_name,prop_value){var prop_name__$1 = cljs.core.name.call(null,prop_name);return (elem.style[prop_name__$1] = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_value)));
});
freactive.experimental.dom2.set_attr_BANG_ = (function set_attr_BANG_(elem,attr_name,attr_value){var attr_name__$1 = cljs.core.name.call(null,attr_name);return elem.setAttribute(attr_name__$1,attr_value);
});
freactive.experimental.dom2.on_value_ref_invalidated_STAR_ = (function on_value_ref_invalidated_STAR_(set_fn,element,attr_name,ref,node_state){var temp__4388__auto___27998 = freactive.core.get_add_remove_watch_STAR_.call(null,ref);if(cljs.core.truth_(temp__4388__auto___27998))
{var vec__27997_27999 = temp__4388__auto___27998;var add_watch_STAR__28000 = cljs.core.nth.call(null,vec__27997_27999,(0),null);var remove_watch_STAR__28001 = cljs.core.nth.call(null,vec__27997_27999,(1),null);var f_28002 = ((function (vec__27997_27999,add_watch_STAR__28000,remove_watch_STAR__28001,temp__4388__auto___27998){
return (function() {
var on_value_ref_invalidated = null;
var on_value_ref_invalidated__2 = (function (key,ref__$1){remove_watch_STAR__28001.call(null,ref__$1,key);
return freactive.experimental.dom2.request_animation_frame.call(null,((function (vec__27997_27999,add_watch_STAR__28000,remove_watch_STAR__28001,temp__4388__auto___27998){
return (function (_){if(cljs.core.truth_(node_state.disposed))
{return null;
} else
{add_watch_STAR__28000.call(null,ref__$1,key,on_value_ref_invalidated);
return set_fn.call(null,element,attr_name,cljs.core.deref.call(null,ref__$1));
}
});})(vec__27997_27999,add_watch_STAR__28000,remove_watch_STAR__28001,temp__4388__auto___27998))
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
;})(vec__27997_27999,add_watch_STAR__28000,remove_watch_STAR__28001,temp__4388__auto___27998))
;add_watch_STAR__28000.call(null,ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,attr_name], null),f_28002);
} else
{}
return set_fn.call(null,element,attr_name,cljs.core.deref.call(null,ref));
});
freactive.experimental.dom2.bind_style_prop_BANG_ = (function bind_style_prop_BANG_(element,attr_name,attr_value,node_state){if((function (){var G__28004 = attr_value;if(G__28004)
{var bit__12159__auto__ = (G__28004.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12159__auto__) || (G__28004.cljs$core$IDeref$))
{return true;
} else
{if((!G__28004.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__28004);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__28004);
}
})())
{return freactive.experimental.dom2.on_value_ref_invalidated_STAR_.call(null,freactive.experimental.dom2.set_style_prop_BANG_,element,attr_name,attr_value,node_state);
} else
{return freactive.experimental.dom2.set_style_prop_BANG_.call(null,element,attr_name,attr_value);
}
});
freactive.experimental.dom2.listen_BANG_ = (function listen_BANG_(element,evt_name,handler){return element.addEventListener(evt_name,handler);
});
freactive.experimental.dom2.bind_attr_BANG_ = (function bind_attr_BANG_(element,attr_name,attr_value,node_state){var attr_name__$1 = cljs.core.name.call(null,attr_name);if(cljs.core._EQ_.call(null,"style",attr_name__$1))
{if(cljs.core.map_QMARK_.call(null,attr_value))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"attr-value","attr-value",-561203417,null)))))));
}
var seq__28012 = cljs.core.seq.call(null,attr_value);var chunk__28013 = null;var count__28014 = (0);var i__28015 = (0);while(true){
if((i__28015 < count__28014))
{var vec__28016 = cljs.core._nth.call(null,chunk__28013,i__28015);var p = cljs.core.nth.call(null,vec__28016,(0),null);var v = cljs.core.nth.call(null,vec__28016,(1),null);freactive.experimental.dom2.bind_style_prop_BANG_.call(null,element,p,v,node_state);
{
var G__28019 = seq__28012;
var G__28020 = chunk__28013;
var G__28021 = count__28014;
var G__28022 = (i__28015 + (1));
seq__28012 = G__28019;
chunk__28013 = G__28020;
count__28014 = G__28021;
i__28015 = G__28022;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__28012);if(temp__4388__auto__)
{var seq__28012__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28012__$1))
{var c__12265__auto__ = cljs.core.chunk_first.call(null,seq__28012__$1);{
var G__28023 = cljs.core.chunk_rest.call(null,seq__28012__$1);
var G__28024 = c__12265__auto__;
var G__28025 = cljs.core.count.call(null,c__12265__auto__);
var G__28026 = (0);
seq__28012 = G__28023;
chunk__28013 = G__28024;
count__28014 = G__28025;
i__28015 = G__28026;
continue;
}
} else
{var vec__28017 = cljs.core.first.call(null,seq__28012__$1);var p = cljs.core.nth.call(null,vec__28017,(0),null);var v = cljs.core.nth.call(null,vec__28017,(1),null);freactive.experimental.dom2.bind_style_prop_BANG_.call(null,element,p,v,node_state);
{
var G__28027 = cljs.core.next.call(null,seq__28012__$1);
var G__28028 = null;
var G__28029 = (0);
var G__28030 = (0);
seq__28012 = G__28027;
chunk__28013 = G__28028;
count__28014 = G__28029;
i__28015 = G__28030;
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
{return freactive.experimental.dom2.listen_BANG_.call(null,element,attr_name__$1.substring((3)),attr_value);
} else
{if((function (){var G__28018 = attr_value;if(G__28018)
{var bit__12159__auto__ = (G__28018.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12159__auto__) || (G__28018.cljs$core$IDeref$))
{return true;
} else
{if((!G__28018.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__28018);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__28018);
}
})())
{return freactive.experimental.dom2.on_value_ref_invalidated_STAR_.call(null,freactive.experimental.dom2.set_attr_BANG_,element,attr_name__$1,attr_value,node_state);
} else
{return freactive.experimental.dom2.set_attr_BANG_.call(null,element,attr_name__$1,attr_value);
}

}
}
});
/**
* Regular expression that parses a CSS-style id and class from an element name.
*/
freactive.experimental.dom2.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
freactive.experimental.dom2.create_dom_node = (function create_dom_node(kw){var tag_ns = cljs.core.namespace.call(null,kw);var vec__28033 = cljs.core.re_matches.call(null,freactive.experimental.dom2.re_tag,cljs.core.name.call(null,kw));var _ = cljs.core.nth.call(null,vec__28033,(0),null);var tag = cljs.core.nth.call(null,vec__28033,(1),null);var id = cljs.core.nth.call(null,vec__28033,(2),null);var class$ = cljs.core.nth.call(null,vec__28033,(3),null);var node = (function (){var G__28034 = tag_ns;if(cljs.core._EQ_.call(null,null,G__28034))
{return document.createElement(tag);
} else
{if(cljs.core._EQ_.call(null,"svg",G__28034))
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
freactive.experimental.dom2.replace_child = (function replace_child(parent,new_elem_spec,cur_elem){var cur_dom_node = freactive.experimental.dom2.get_dom_node.call(null,cur_elem);var new_virtual_dom = freactive.experimental.dom2.get_virtual_dom.call(null,new_elem_spec);if((typeof new_virtual_dom === 'string') && (cljs.core._EQ_.call(null,cur_dom_node.nodeType,(3))))
{cur_dom_node.textContent = new_virtual_dom;
freactive.experimental.dom2.reset_element_spec_BANG_.call(null,cur_dom_node,new_elem_spec);
return cur_elem;
} else
{var new_elem = freactive.experimental.dom2.build_element.call(null,new_elem_spec);freactive.experimental.dom2.get_dom_node.call(null,parent).replaceChild(freactive.experimental.dom2.get_dom_node.call(null,new_elem),cur_dom_node);
freactive.experimental.dom2.dispose_node.call(null,cur_dom_node);
return new_elem;
}
});
freactive.experimental.dom2.append_child = (function append_child(parent,new_elem){var new_elem__$1 = freactive.experimental.dom2.build_element.call(null,new_elem);freactive.experimental.dom2.get_dom_node.call(null,parent).appendChild(new_elem__$1);
return new_elem__$1;
});
freactive.experimental.dom2.replace_or_append_child = (function replace_or_append_child(parent,new_elem,cur_elem){var new_elem__$1 = (cljs.core.truth_(cur_elem)?freactive.experimental.dom2.replace_child.call(null,parent,new_elem,cur_elem):freactive.experimental.dom2.append_child.call(null,parent,new_elem));var temp__4388__auto___28035 = freactive.experimental.dom2.get_element_state.call(null,parent);if(cljs.core.truth_(temp__4388__auto___28035))
{var parent_state_28036 = temp__4388__auto___28035;var state_28037 = freactive.experimental.dom2.get_element_state.call(null,new_elem__$1);state_28037.parent_state = parent_state_28036;
freactive.experimental.dom2.register_with_parent_state.call(null,parent_state_28036,new_elem__$1,state_28037);
} else
{}
return new_elem__$1;
});
freactive.experimental.dom2.do_show_element = (function do_show_element(parent,new_elem,cur_elem){if(cljs.core.truth_(new_elem))
{var show = freactive.experimental.dom2.get_transition.call(null,new_elem,new cljs.core.Keyword(null,"on-show","on-show",-1100796727));var new_elem__$1 = freactive.experimental.dom2.replace_or_append_child.call(null,parent,new_elem,cur_elem);if(cljs.core.truth_(show))
{show.call(null,new_elem__$1,null);
} else
{}
return new_elem__$1;
} else
{return null;
}
});
freactive.experimental.dom2.transition_element = (function transition_element(parent,new_elem,cur_elem){if(cljs.core.truth_(cur_elem))
{var temp__4386__auto__ = freactive.experimental.dom2.get_transition.call(null,cur_elem,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));if(cljs.core.truth_(temp__4386__auto__))
{var hide = temp__4386__auto__;return hide.call(null,cur_elem,freactive.experimental.dom2.do_show_element.call(null,parent,new_elem,cur_elem));
} else
{return freactive.experimental.dom2.do_show_element.call(null,parent,new_elem,cur_elem);
}
} else
{return freactive.experimental.dom2.do_show_element.call(null,parent,new_elem,cur_elem);
}
});
freactive.experimental.dom2.clear_children_BANG_ = (function clear_children_BANG_(parent){var dom_node = freactive.experimental.dom2.get_dom_node.call(null,parent);while(true){
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

/**
* @constructor
*/
freactive.experimental.dom2.ReactiveElement = (function (parent,cur_element,dirty,updating,disposed,invalidate){
this.parent = parent;
this.cur_element = cur_element;
this.dirty = dirty;
this.updating = updating;
this.disposed = disposed;
this.invalidate = invalidate;
})
freactive.experimental.dom2.ReactiveElement.cljs$lang$type = true;
freactive.experimental.dom2.ReactiveElement.cljs$lang$ctorStr = "freactive.experimental.dom2/ReactiveElement";
freactive.experimental.dom2.ReactiveElement.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"freactive.experimental.dom2/ReactiveElement");
});
freactive.experimental.dom2.ReactiveElement.prototype.freactive$experimental$dom2$IRemove$ = true;
freactive.experimental.dom2.ReactiveElement.prototype.freactive$experimental$dom2$IRemove$_remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;this$__$1.disposed = true;
if(cljs.core.truth_(self__.updating))
{} else
{freactive.experimental.dom2.remove_BANG_.call(null,cljs.core.deref.call(null,self__.cur_element));
}
var temp__4388__auto__ = freactive.experimental.dom2.get_element_state.call(null,self__.parent);if(cljs.core.truth_(temp__4388__auto__))
{var parent_state = temp__4388__auto__;return freactive.experimental.dom2.unregister_from_parent_state.call(null,parent_state,this$__$1);
} else
{return null;
}
});
freactive.experimental.dom2.__GT_ReactiveElement = (function __GT_ReactiveElement(parent,cur_element,dirty,updating,disposed,invalidate){return (new freactive.experimental.dom2.ReactiveElement(parent,cur_element,dirty,updating,disposed,invalidate));
});
freactive.experimental.dom2.append_deref_child = (function append_deref_child(parent,child_ref){var temp__4386__auto__ = freactive.core.get_add_remove_watch_STAR_.call(null,child_ref);if(cljs.core.truth_(temp__4386__auto__))
{var vec__28039 = temp__4386__auto__;var add_watch_STAR_ = cljs.core.nth.call(null,vec__28039,(0),null);var remove_watch_STAR_ = cljs.core.nth.call(null,vec__28039,(1),null);var state = (new freactive.experimental.dom2.ReactiveElement(parent,null,false,false,false,null));var animate = ((function (state,vec__28039,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function animate(x){if(cljs.core.truth_(state.disposed))
{return freactive.experimental.dom2.remove_BANG_.call(null,state.cur_element);
} else
{state.dirty = false;
add_watch_STAR_.call(null,child_ref,state,state.invalidate);
var new_elem = cljs.core.deref.call(null,child_ref);var cur = state.cur_element;if((cljs.core.not.call(null,cur)) || (cljs.core.not_EQ_.call(null,freactive.experimental.dom2.get_virtual_dom.call(null,cur),freactive.experimental.dom2.get_virtual_dom.call(null,new_elem))))
{return state.cur_element = freactive.experimental.dom2.transition_element.call(null,parent,freactive.experimental.dom2.append_transition.call(null,new_elem,new cljs.core.Keyword(null,"on-show","on-show",-1100796727),((function (new_elem,cur,state,vec__28039,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function (elem,_){state.updating = false;
if(cljs.core.truth_(state.disposed))
{return freactive.experimental.dom2.remove_BANG_.call(null,elem);
} else
{if(cljs.core.truth_(state.dirty))
{return freactive.experimental.dom2.request_animation_frame.call(null,animate);
} else
{return null;
}
}
});})(new_elem,cur,state,vec__28039,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
),cur);
} else
{return null;
}
}
});})(state,vec__28039,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
;var invalidate = ((function (state,animate,vec__28039,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
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
return freactive.experimental.dom2.request_animation_frame.call(null,animate);
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
;})(state,animate,vec__28039,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
;state.invalidate = invalidate;
state.cur_element = freactive.experimental.dom2.transition_element.call(null,parent,(function (){var or__11495__auto__ = cljs.core.deref.call(null,child_ref);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
})(),null);
var temp__4388__auto___28040 = freactive.experimental.dom2.get_element_state.call(null,parent);if(cljs.core.truth_(temp__4388__auto___28040))
{var parent_state_28041 = temp__4388__auto___28040;freactive.experimental.dom2.register_with_parent_state.call(null,parent_state_28041,state,state);
} else
{}
add_watch_STAR_.call(null,child_ref,state,invalidate);
return state;
} else
{return freactive.experimental.dom2.transition_element.call(null,parent,cljs.core.deref.call(null,child_ref),null);
}
});
freactive.experimental.dom2.append_child_BANG_ = (function append_child_BANG_(parent,child){if((function (){var G__28043 = child;if(G__28043)
{var bit__12159__auto__ = (G__28043.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12159__auto__) || (G__28043.cljs$core$IDeref$))
{return true;
} else
{if((!G__28043.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__28043);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__28043);
}
})())
{return freactive.experimental.dom2.append_deref_child.call(null,parent,child);
} else
{return freactive.experimental.dom2.transition_element.call(null,parent,child,null);

}
});
freactive.experimental.dom2.append_children_BANG_ = (function append_children_BANG_(elem,children){var seq__28048 = cljs.core.seq.call(null,children);var chunk__28049 = null;var count__28050 = (0);var i__28051 = (0);while(true){
if((i__28051 < count__28050))
{var ch = cljs.core._nth.call(null,chunk__28049,i__28051);if(cljs.core.sequential_QMARK_.call(null,ch))
{if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword))
{freactive.experimental.dom2.append_child_BANG_.call(null,elem,ch);
} else
{append_children_BANG_.call(null,elem,ch);
}
} else
{freactive.experimental.dom2.append_child_BANG_.call(null,elem,ch);
}
{
var G__28052 = seq__28048;
var G__28053 = chunk__28049;
var G__28054 = count__28050;
var G__28055 = (i__28051 + (1));
seq__28048 = G__28052;
chunk__28049 = G__28053;
count__28050 = G__28054;
i__28051 = G__28055;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__28048);if(temp__4388__auto__)
{var seq__28048__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28048__$1))
{var c__12265__auto__ = cljs.core.chunk_first.call(null,seq__28048__$1);{
var G__28056 = cljs.core.chunk_rest.call(null,seq__28048__$1);
var G__28057 = c__12265__auto__;
var G__28058 = cljs.core.count.call(null,c__12265__auto__);
var G__28059 = (0);
seq__28048 = G__28056;
chunk__28049 = G__28057;
count__28050 = G__28058;
i__28051 = G__28059;
continue;
}
} else
{var ch = cljs.core.first.call(null,seq__28048__$1);if(cljs.core.sequential_QMARK_.call(null,ch))
{if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword))
{freactive.experimental.dom2.append_child_BANG_.call(null,elem,ch);
} else
{append_children_BANG_.call(null,elem,ch);
}
} else
{freactive.experimental.dom2.append_child_BANG_.call(null,elem,ch);
}
{
var G__28060 = cljs.core.next.call(null,seq__28048__$1);
var G__28061 = null;
var G__28062 = (0);
var G__28063 = (0);
seq__28048 = G__28060;
chunk__28049 = G__28061;
count__28050 = G__28062;
i__28051 = G__28063;
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
freactive.experimental.dom2.build_element = (function build_element(elem_spec){var virtual_dom = freactive.experimental.dom2.get_virtual_dom.call(null,elem_spec);var node = ((typeof virtual_dom === 'string')?(function (){var node = document.createTextNode(virtual_dom);freactive.experimental.dom2.init_element_state_BANG_.call(null,node,elem_spec);
return node;
})():(function (){var node = freactive.experimental.dom2.create_dom_node.call(null,cljs.core.first.call(null,virtual_dom));var state = freactive.experimental.dom2.init_element_state_BANG_.call(null,node,elem_spec);var attrs_QMARK_ = cljs.core.second.call(null,virtual_dom);var attrs = ((cljs.core.map_QMARK_.call(null,attrs_QMARK_))?attrs_QMARK_:null);var children = (cljs.core.truth_(attrs)?cljs.core.nnext.call(null,virtual_dom):cljs.core.next.call(null,virtual_dom));var seq__28070_28076 = cljs.core.seq.call(null,attrs);var chunk__28071_28077 = null;var count__28072_28078 = (0);var i__28073_28079 = (0);while(true){
if((i__28073_28079 < count__28072_28078))
{var vec__28074_28080 = cljs.core._nth.call(null,chunk__28071_28077,i__28073_28079);var k_28081 = cljs.core.nth.call(null,vec__28074_28080,(0),null);var v_28082 = cljs.core.nth.call(null,vec__28074_28080,(1),null);freactive.experimental.dom2.bind_attr_BANG_.call(null,node,k_28081,v_28082,state);
{
var G__28083 = seq__28070_28076;
var G__28084 = chunk__28071_28077;
var G__28085 = count__28072_28078;
var G__28086 = (i__28073_28079 + (1));
seq__28070_28076 = G__28083;
chunk__28071_28077 = G__28084;
count__28072_28078 = G__28085;
i__28073_28079 = G__28086;
continue;
}
} else
{var temp__4388__auto___28087 = cljs.core.seq.call(null,seq__28070_28076);if(temp__4388__auto___28087)
{var seq__28070_28088__$1 = temp__4388__auto___28087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28070_28088__$1))
{var c__12265__auto___28089 = cljs.core.chunk_first.call(null,seq__28070_28088__$1);{
var G__28090 = cljs.core.chunk_rest.call(null,seq__28070_28088__$1);
var G__28091 = c__12265__auto___28089;
var G__28092 = cljs.core.count.call(null,c__12265__auto___28089);
var G__28093 = (0);
seq__28070_28076 = G__28090;
chunk__28071_28077 = G__28091;
count__28072_28078 = G__28092;
i__28073_28079 = G__28093;
continue;
}
} else
{var vec__28075_28094 = cljs.core.first.call(null,seq__28070_28088__$1);var k_28095 = cljs.core.nth.call(null,vec__28075_28094,(0),null);var v_28096 = cljs.core.nth.call(null,vec__28075_28094,(1),null);freactive.experimental.dom2.bind_attr_BANG_.call(null,node,k_28095,v_28096,state);
{
var G__28097 = cljs.core.next.call(null,seq__28070_28088__$1);
var G__28098 = null;
var G__28099 = (0);
var G__28100 = (0);
seq__28070_28076 = G__28097;
chunk__28071_28077 = G__28098;
count__28072_28078 = G__28099;
i__28073_28079 = G__28100;
continue;
}
}
} else
{}
}
break;
}
if(children)
{freactive.experimental.dom2.append_children_BANG_.call(null,node,children);
} else
{}
return node;
})());return node;
});
freactive.experimental.dom2.mount_BANG_ = (function mount_BANG_(element,child){var temp__4388__auto___28101 = freactive.experimental.dom2.get_dom_node.call(null,element).lastChild;if(cljs.core.truth_(temp__4388__auto___28101))
{var last_child_28102 = temp__4388__auto___28101;freactive.experimental.dom2.remove_BANG_.call(null,last_child_28102);
} else
{}
return freactive.experimental.dom2.append_child_BANG_.call(null,element,child);
});

//# sourceMappingURL=dom2.js.map