// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.experimental.items_view');
goog.require('cljs.core');
goog.require('freactive.experimental.observable_collection');
goog.require('freactive.core');
goog.require('freactive.experimental.observable_collection');
goog.require('freactive.experimental.dom');
goog.require('freactive.experimental.dom');
goog.require('freactive.core');
freactive.experimental.items_view.IItemsView = (function (){var obj111822 = {};return obj111822;
})();
freactive.experimental.items_view._sort_BANG_ = (function _sort_BANG_(view,compare_fn){if((function (){var and__11485__auto__ = view;if(and__11485__auto__)
{return view.freactive$experimental$items_view$IItemsView$_sort_BANG_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_sort_BANG_$arity$2(view,compare_fn);
} else
{var x__12134__auto__ = (((view == null))?null:view);return (function (){var or__11497__auto__ = (freactive.experimental.items_view._sort_BANG_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.items_view._sort_BANG_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-sort!",view);
}
}
})().call(null,view,compare_fn);
}
});
freactive.experimental.items_view._apply_filter_BANG_ = (function _apply_filter_BANG_(view,f){if((function (){var and__11485__auto__ = view;if(and__11485__auto__)
{return view.freactive$experimental$items_view$IItemsView$_apply_filter_BANG_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_apply_filter_BANG_$arity$2(view,f);
} else
{var x__12134__auto__ = (((view == null))?null:view);return (function (){var or__11497__auto__ = (freactive.experimental.items_view._apply_filter_BANG_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.items_view._apply_filter_BANG_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-apply-filter!",view);
}
}
})().call(null,view,f);
}
});
freactive.experimental.items_view._remove_filter_BANG_ = (function _remove_filter_BANG_(view,f){if((function (){var and__11485__auto__ = view;if(and__11485__auto__)
{return view.freactive$experimental$items_view$IItemsView$_remove_filter_BANG_$arity$2;
} else
{return and__11485__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_remove_filter_BANG_$arity$2(view,f);
} else
{var x__12134__auto__ = (((view == null))?null:view);return (function (){var or__11497__auto__ = (freactive.experimental.items_view._remove_filter_BANG_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.items_view._remove_filter_BANG_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-remove-filter!",view);
}
}
})().call(null,view,f);
}
});
freactive.experimental.items_view._reset_view = (function _reset_view(view){if((function (){var and__11485__auto__ = view;if(and__11485__auto__)
{return view.freactive$experimental$items_view$IItemsView$_reset_view$arity$1;
} else
{return and__11485__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_reset_view$arity$1(view);
} else
{var x__12134__auto__ = (((view == null))?null:view);return (function (){var or__11497__auto__ = (freactive.experimental.items_view._reset_view[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.items_view._reset_view["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-reset-view",view);
}
}
})().call(null,view);
}
});
freactive.experimental.items_view._set_view_range = (function _set_view_range(view,start,end){if((function (){var and__11485__auto__ = view;if(and__11485__auto__)
{return view.freactive$experimental$items_view$IItemsView$_set_view_range$arity$3;
} else
{return and__11485__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_set_view_range$arity$3(view,start,end);
} else
{var x__12134__auto__ = (((view == null))?null:view);return (function (){var or__11497__auto__ = (freactive.experimental.items_view._set_view_range[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.items_view._set_view_range["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-set-view-range",view);
}
}
})().call(null,view,start,end);
}
});

/**
* @constructor
* @param {*} element
* @param {*} coll
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
freactive.experimental.items_view.ItemsView = (function (element,coll,__meta,__extmap){
this.element = element;
this.coll = coll;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12093__auto__,k__12094__auto__){var self__ = this;
var this__12093__auto____$1 = this;return cljs.core._lookup.call(null,this__12093__auto____$1,k__12094__auto__,null);
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12095__auto__,k111824,else__12096__auto__){var self__ = this;
var this__12095__auto____$1 = this;var G__111826 = (((k111824 instanceof cljs.core.Keyword))?k111824.fqn:null);switch (G__111826) {
case "coll":
return self__.coll;

break;
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k111824,else__12096__auto__);

}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12107__auto__,writer__12108__auto__,opts__12109__auto__){var self__ = this;
var this__12107__auto____$1 = this;var pr_pair__12110__auto__ = ((function (this__12107__auto____$1){
return (function (keyval__12111__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12108__auto__,cljs.core.pr_writer,""," ","",opts__12109__auto__,keyval__12111__auto__);
});})(this__12107__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12108__auto__,pr_pair__12110__auto__,"#freactive.experimental.items-view.ItemsView{",", ","}",opts__12109__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coll","coll",1647737163),self__.coll],null))], null),self__.__extmap));
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12091__auto__){var self__ = this;
var this__12091__auto____$1 = this;return self__.__meta;
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12087__auto__){var self__ = this;
var this__12087__auto____$1 = this;return (new freactive.experimental.items_view.ItemsView(self__.element,self__.coll,self__.__meta,self__.__extmap,self__.__hash));
});
freactive.experimental.items_view.ItemsView.prototype.freactive$experimental$dom$IRemove$ = true;
freactive.experimental.items_view.ItemsView.prototype.freactive$experimental$dom$IRemove$_remove$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return freactive.experimental.dom._remove.call(null,self__.element);
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12097__auto__){var self__ = this;
var this__12097__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
freactive.experimental.items_view.ItemsView.prototype.freactive$experimental$dom$IHasElement$ = true;
freactive.experimental.items_view.ItemsView.prototype.freactive$experimental$dom$IHasElement$_get_element$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.element;
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12088__auto__){var self__ = this;
var this__12088__auto____$1 = this;var h__11908__auto__ = self__.__hash;if(!((h__11908__auto__ == null)))
{return h__11908__auto__;
} else
{var h__11908__auto____$1 = cljs.core.hash_imap.call(null,this__12088__auto____$1);self__.__hash = h__11908__auto____$1;
return h__11908__auto____$1;
}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12089__auto__,other__12090__auto__){var self__ = this;
var this__12089__auto____$1 = this;if(cljs.core.truth_((function (){var and__11485__auto__ = other__12090__auto__;if(cljs.core.truth_(and__11485__auto__))
{return ((this__12089__auto____$1.constructor === other__12090__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12089__auto____$1,other__12090__auto__));
} else
{return and__11485__auto__;
}
})()))
{return true;
} else
{return false;
}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12102__auto__,k__12103__auto__){var self__ = this;
var this__12102__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),null,new cljs.core.Keyword(null,"coll","coll",1647737163),null], null), null),k__12103__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12102__auto____$1),self__.__meta),k__12103__auto__);
} else
{return (new freactive.experimental.items_view.ItemsView(self__.element,self__.coll,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12103__auto__)),null));
}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12100__auto__,k__12101__auto__,G__111823){var self__ = this;
var this__12100__auto____$1 = this;var pred__111827 = cljs.core.keyword_identical_QMARK_;var expr__111828 = k__12101__auto__;if(cljs.core.truth_(pred__111827.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__111828)))
{return (new freactive.experimental.items_view.ItemsView(G__111823,self__.coll,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__111827.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),expr__111828)))
{return (new freactive.experimental.items_view.ItemsView(self__.element,G__111823,self__.__meta,self__.__extmap,null));
} else
{return (new freactive.experimental.items_view.ItemsView(self__.element,self__.coll,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12101__auto__,G__111823),null));
}
}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12105__auto__){var self__ = this;
var this__12105__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coll","coll",1647737163),self__.coll],null))], null),self__.__extmap));
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12092__auto__,G__111823){var self__ = this;
var this__12092__auto____$1 = this;return (new freactive.experimental.items_view.ItemsView(self__.element,self__.coll,G__111823,self__.__extmap,self__.__hash));
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12098__auto__,entry__12099__auto__){var self__ = this;
var this__12098__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12099__auto__))
{return cljs.core._assoc.call(null,this__12098__auto____$1,cljs.core._nth.call(null,entry__12099__auto__,(0)),cljs.core._nth.call(null,entry__12099__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12098__auto____$1,entry__12099__auto__);
}
});
freactive.experimental.items_view.ItemsView.cljs$lang$type = true;
freactive.experimental.items_view.ItemsView.cljs$lang$ctorPrSeq = (function (this__12127__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"freactive.experimental.items-view/ItemsView");
});
freactive.experimental.items_view.ItemsView.cljs$lang$ctorPrWriter = (function (this__12127__auto__,writer__12128__auto__){return cljs.core._write.call(null,writer__12128__auto__,"freactive.experimental.items-view/ItemsView");
});
freactive.experimental.items_view.__GT_ItemsView = (function __GT_ItemsView(element,coll){return (new freactive.experimental.items_view.ItemsView(element,coll));
});
freactive.experimental.items_view.map__GT_ItemsView = (function map__GT_ItemsView(G__111825){return (new freactive.experimental.items_view.ItemsView(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__111825),new cljs.core.Keyword(null,"coll","coll",1647737163).cljs$core$IFn$_invoke$arity$1(G__111825),null,cljs.core.dissoc.call(null,G__111825,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"coll","coll",1647737163))));
});

/**
* @constructor
*/
freactive.experimental.items_view.ItemContainer = (function (elem,state){
this.elem = elem;
this.state = state;
})
freactive.experimental.items_view.ItemContainer.cljs$lang$type = true;
freactive.experimental.items_view.ItemContainer.cljs$lang$ctorStr = "freactive.experimental.items-view/ItemContainer";
freactive.experimental.items_view.ItemContainer.cljs$lang$ctorPrWriter = (function (this__12077__auto__,writer__12078__auto__,opts__12079__auto__){return cljs.core._write.call(null,writer__12078__auto__,"freactive.experimental.items-view/ItemContainer");
});
freactive.experimental.items_view.__GT_ItemContainer = (function __GT_ItemContainer(elem,state){return (new freactive.experimental.items_view.ItemContainer(elem,state));
});
freactive.experimental.items_view.items_view = (function items_view(container,template_fn,items){var coll = (((items instanceof freactive.experimental.observable_collection.ObservableCollection))?items:freactive.experimental.observable_collection.observable_collection.call(null,items)
);var container__$1 = (((container instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [container], null):container
);var element = freactive.experimental.dom.build_element.call(null,container__$1);var elem_mappings = freactive.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var view = (new freactive.experimental.items_view.ItemsView(element,coll));var update_fn = ((function (coll,container__$1,element,elem_mappings,view){
return (function (view__$1,coll__$1,changes){var seq__111837 = cljs.core.seq.call(null,changes);var chunk__111838 = null;var count__111839 = (0);var i__111840 = (0);while(true){
if((i__111840 < count__111839))
{var vec__111841 = cljs.core._nth.call(null,chunk__111838,i__111840);var k = cljs.core.nth.call(null,vec__111841,(0),null);var v = cljs.core.nth.call(null,vec__111841,(1),null);var elem_container_111843 = cljs.core.get.call(null,cljs.core.deref.call(null,elem_mappings),k);if(cljs.core.truth_(elem_container_111843))
{if(cljs.core.truth_(v))
{cljs.core.reset_BANG_.call(null,elem_container_111843.state,v);
} else
{freactive.experimental.dom._remove.call(null,elem_container_111843.elem);
cljs.core.swap_BANG_.call(null,elem_mappings,cljs.core.dissoc,k);
}
} else
{if(cljs.core.truth_(v))
{var state_111844 = freactive.core.atom.call(null,v);var elem_111845 = freactive.experimental.dom.append_child_BANG_.call(null,view__$1.element,template_fn.call(null,state_111844));cljs.core.swap_BANG_.call(null,elem_mappings,cljs.core.assoc,k,(new freactive.experimental.items_view.ItemContainer(elem_111845,state_111844)));
} else
{}
}
{
var G__111846 = seq__111837;
var G__111847 = chunk__111838;
var G__111848 = count__111839;
var G__111849 = (i__111840 + (1));
seq__111837 = G__111846;
chunk__111838 = G__111847;
count__111839 = G__111848;
i__111840 = G__111849;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__111837);if(temp__4388__auto__)
{var seq__111837__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__111837__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__111837__$1);{
var G__111850 = cljs.core.chunk_rest.call(null,seq__111837__$1);
var G__111851 = c__12267__auto__;
var G__111852 = cljs.core.count.call(null,c__12267__auto__);
var G__111853 = (0);
seq__111837 = G__111850;
chunk__111838 = G__111851;
count__111839 = G__111852;
i__111840 = G__111853;
continue;
}
} else
{var vec__111842 = cljs.core.first.call(null,seq__111837__$1);var k = cljs.core.nth.call(null,vec__111842,(0),null);var v = cljs.core.nth.call(null,vec__111842,(1),null);var elem_container_111854 = cljs.core.get.call(null,cljs.core.deref.call(null,elem_mappings),k);if(cljs.core.truth_(elem_container_111854))
{if(cljs.core.truth_(v))
{cljs.core.reset_BANG_.call(null,elem_container_111854.state,v);
} else
{freactive.experimental.dom._remove.call(null,elem_container_111854.elem);
cljs.core.swap_BANG_.call(null,elem_mappings,cljs.core.dissoc,k);
}
} else
{if(cljs.core.truth_(v))
{var state_111855 = freactive.core.atom.call(null,v);var elem_111856 = freactive.experimental.dom.append_child_BANG_.call(null,view__$1.element,template_fn.call(null,state_111855));cljs.core.swap_BANG_.call(null,elem_mappings,cljs.core.assoc,k,(new freactive.experimental.items_view.ItemContainer(elem_111856,state_111855)));
} else
{}
}
{
var G__111857 = cljs.core.next.call(null,seq__111837__$1);
var G__111858 = null;
var G__111859 = (0);
var G__111860 = (0);
seq__111837 = G__111857;
chunk__111838 = G__111858;
count__111839 = G__111859;
i__111840 = G__111860;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(coll,container__$1,element,elem_mappings,view))
;update_fn.call(null,view,coll,cljs.core.deref.call(null,coll.state));
freactive.experimental.observable_collection.observe_changes.call(null,coll,view,update_fn);
return view;
});

//# sourceMappingURL=items_view.js.map