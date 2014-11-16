// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.cljs_perf');
goog.require('cljs.core');
freactive.cljs_perf.bench = (function bench(f){var start__12393__auto__ = (new Date()).getTime();var ret__12394__auto__ = (function (){var n__12368__auto__ = (100000);var i = (0);while(true){
if((i < n__12368__auto__))
{f.call(null);
{
var G__36192 = (i + (1));
i = G__36192;
continue;
}
} else
{return null;
}
break;
}
})();cljs.core.prn.call(null,("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()).getTime() - start__12393__auto__))+" msecs"));
return ret__12394__auto__;
});
freactive.cljs_perf.ITest1 = (function (){var obj36194 = {};return obj36194;
})();
freactive.cljs_perf._do_something = (function _do_something(this$){if((function (){var and__11486__auto__ = this$;if(and__11486__auto__)
{return this$.freactive$cljs_perf$ITest1$_do_something$arity$1;
} else
{return and__11486__auto__;
}
})())
{return this$.freactive$cljs_perf$ITest1$_do_something$arity$1(this$);
} else
{var x__12135__auto__ = (((this$ == null))?null:this$);return (function (){var or__11498__auto__ = (freactive.cljs_perf._do_something[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.cljs_perf._do_something["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITest1.-do-something",this$);
}
}
})().call(null,this$);
}
});
(freactive.cljs_perf.ITest1["string"] = true);
(freactive.cljs_perf._do_something["string"] = (function (this$){return null;
}));
Object.prototype.freactive$cljs_perf$ITest1$ = true;
Object.prototype.freactive$cljs_perf$ITest1$_do_something$arity$1 = (function (_){var ___$1 = this;return null;
});
freactive.cljs_perf.test1 = (function (){var method_table__12378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__12379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__12380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__12381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__12382__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("test1",cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12382__auto__,method_table__12378__auto__,prefer_table__12379__auto__,method_cache__12380__auto__,cached_hierarchy__12381__auto__));
})();
freactive.cljs_perf.test1_string = (function test1_string(x){return null;
});
freactive.cljs_perf.do_test1 = (function do_test1(x){if(typeof x === 'string')
{return freactive.cljs_perf.test1_string.call(null,x);
} else
{return freactive.cljs_perf.test1.call(null,x);
}
});
freactive.cljs_perf.bench.call(null,(function (){var G__36195 = "abc";if(G__36195)
{var bit__12162__auto__ = null;if(cljs.core.truth_((function (){var or__11498__auto__ = bit__12162__auto__;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return G__36195.freactive$cljs_perf$ITest1$;
}
})()))
{return true;
} else
{if((!G__36195.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.cljs_perf.ITest1,G__36195);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.cljs_perf.ITest1,G__36195);
}
}));
freactive.cljs_perf.bench.call(null,(function (){return freactive.cljs_perf._do_something.call(null,"abc");
}));
freactive.cljs_perf.bench.call(null,(function (){return freactive.cljs_perf.do_test1.call(null,"abc");
}));
freactive.cljs_perf.js0 = {};
freactive.cljs_perf.js1 = [];
freactive.cljs_perf.clj0 = cljs.core.PersistentArrayMap.EMPTY;
freactive.cljs_perf.bench.call(null,(function (){return freactive.cljs_perf.js0.x = (0);
}));
freactive.cljs_perf.bench.call(null,(function (){return (freactive.cljs_perf.js1[(0)] = (0));
}));
freactive.cljs_perf.bench.call(null,(function (){return cljs.core.assoc.call(null,freactive.cljs_perf.clj0,new cljs.core.Keyword(null,"x","x",2099068185),(0));
}));
freactive.cljs_perf.element_spec_lookup = {};
freactive.cljs_perf.IElementSpec = (function (){var obj36197 = {};return obj36197;
})();
freactive.cljs_perf._get_virtual_dom = (function _get_virtual_dom(x){if((function (){var and__11486__auto__ = x;if(and__11486__auto__)
{return x.freactive$cljs_perf$IElementSpec$_get_virtual_dom$arity$1;
} else
{return and__11486__auto__;
}
})())
{return x.freactive$cljs_perf$IElementSpec$_get_virtual_dom$arity$1(x);
} else
{var x__12135__auto__ = (((x == null))?null:x);return (function (){var or__11498__auto__ = (freactive.cljs_perf._get_virtual_dom[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.cljs_perf._get_virtual_dom["_"]);if(or__11498__auto____$1)
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
freactive.cljs_perf.ElementSpec = (function (spec,__meta,__extmap){
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
freactive.cljs_perf.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12094__auto__,k__12095__auto__){var self__ = this;
var this__12094__auto____$1 = this;return cljs.core._lookup.call(null,this__12094__auto____$1,k__12095__auto__,null);
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12096__auto__,k36199,else__12097__auto__){var self__ = this;
var this__12096__auto____$1 = this;var G__36201 = (((k36199 instanceof cljs.core.Keyword))?k36199.fqn:null);switch (G__36201) {
case "spec":
return self__.spec;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36199,else__12097__auto__);

}
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12108__auto__,writer__12109__auto__,opts__12110__auto__){var self__ = this;
var this__12108__auto____$1 = this;var pr_pair__12111__auto__ = ((function (this__12108__auto____$1){
return (function (keyval__12112__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12109__auto__,cljs.core.pr_writer,""," ","",opts__12110__auto__,keyval__12112__auto__);
});})(this__12108__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12109__auto__,pr_pair__12111__auto__,"#freactive.cljs-perf.ElementSpec{",", ","}",opts__12110__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.cljs_perf.ElementSpec.prototype.freactive$cljs_perf$IElementSpec$ = true;
freactive.cljs_perf.ElementSpec.prototype.freactive$cljs_perf$IElementSpec$_get_virtual_dom$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return self__.spec;
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12092__auto__){var self__ = this;
var this__12092__auto____$1 = this;return self__.__meta;
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12088__auto__){var self__ = this;
var this__12088__auto____$1 = this;return (new freactive.cljs_perf.ElementSpec(self__.spec,self__.__meta,self__.__extmap,self__.__hash));
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12098__auto__){var self__ = this;
var this__12098__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12089__auto__){var self__ = this;
var this__12089__auto____$1 = this;var h__11909__auto__ = self__.__hash;if(!((h__11909__auto__ == null)))
{return h__11909__auto__;
} else
{var h__11909__auto____$1 = cljs.core.hash_imap.call(null,this__12089__auto____$1);self__.__hash = h__11909__auto____$1;
return h__11909__auto____$1;
}
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12090__auto__,other__12091__auto__){var self__ = this;
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
freactive.cljs_perf.ElementSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12103__auto__,k__12104__auto__){var self__ = this;
var this__12103__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),null], null), null),k__12104__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12103__auto____$1),self__.__meta),k__12104__auto__);
} else
{return (new freactive.cljs_perf.ElementSpec(self__.spec,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12104__auto__)),null));
}
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12101__auto__,k__12102__auto__,G__36198){var self__ = this;
var this__12101__auto____$1 = this;var pred__36202 = cljs.core.keyword_identical_QMARK_;var expr__36203 = k__12102__auto__;if(cljs.core.truth_(pred__36202.call(null,new cljs.core.Keyword(null,"spec","spec",347520401),expr__36203)))
{return (new freactive.cljs_perf.ElementSpec(G__36198,self__.__meta,self__.__extmap,null));
} else
{return (new freactive.cljs_perf.ElementSpec(self__.spec,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12102__auto__,G__36198),null));
}
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12106__auto__){var self__ = this;
var this__12106__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12093__auto__,G__36198){var self__ = this;
var this__12093__auto____$1 = this;return (new freactive.cljs_perf.ElementSpec(self__.spec,G__36198,self__.__extmap,self__.__hash));
});
freactive.cljs_perf.ElementSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12099__auto__,entry__12100__auto__){var self__ = this;
var this__12099__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12100__auto__))
{return cljs.core._assoc.call(null,this__12099__auto____$1,cljs.core._nth.call(null,entry__12100__auto__,(0)),cljs.core._nth.call(null,entry__12100__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12099__auto____$1,entry__12100__auto__);
}
});
freactive.cljs_perf.ElementSpec.cljs$lang$type = true;
freactive.cljs_perf.ElementSpec.cljs$lang$ctorPrSeq = (function (this__12128__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"freactive.cljs-perf/ElementSpec");
});
freactive.cljs_perf.ElementSpec.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__){return cljs.core._write.call(null,writer__12129__auto__,"freactive.cljs-perf/ElementSpec");
});
freactive.cljs_perf.__GT_ElementSpec = (function __GT_ElementSpec(spec){return (new freactive.cljs_perf.ElementSpec(spec));
});
freactive.cljs_perf.map__GT_ElementSpec = (function map__GT_ElementSpec(G__36200){return (new freactive.cljs_perf.ElementSpec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__36200),null,cljs.core.dissoc.call(null,G__36200,new cljs.core.Keyword(null,"spec","spec",347520401))));
});
(freactive.cljs_perf.IElementSpec["string"] = true);
(freactive.cljs_perf._get_virtual_dom["string"] = (function (x){return x;
}));
cljs.core.PersistentVector.prototype.freactive$cljs_perf$IElementSpec$ = true;
cljs.core.PersistentVector.prototype.freactive$cljs_perf$IElementSpec$_get_virtual_dom$arity$1 = (function (x){var x__$1 = this;return x__$1;
});
freactive.cljs_perf.dom_node_QMARK_ = (function dom_node_QMARK_(x){return (x.nodeType > (0));
});
freactive.cljs_perf.get_virtual_dom = (function get_virtual_dom(x){if(freactive.cljs_perf.dom_node_QMARK_.call(null,x))
{return get_virtual_dom.call(null,(freactive.cljs_perf.element_spec_lookup[x]));
} else
{if(typeof x === 'string')
{return x;
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return x;
} else
{return freactive.cljs_perf._get_virtual_dom.call(null,x);

}
}
}
});
freactive.cljs_perf.get_element_spec = (function get_element_spec(x){if(freactive.cljs_perf.dom_node_QMARK_.call(null,x))
{return (freactive.cljs_perf.element_spec_lookup[x]);
} else
{return x;
}
});
freactive.cljs_perf.get_transition = (function get_transition(x,transition_name){var spec = freactive.cljs_perf.get_element_spec.call(null,x);if(typeof spec === 'string')
{return null;
} else
{return cljs.core.get.call(null,cljs.core.meta.call(null,spec),transition_name);
}
});
freactive.cljs_perf.es0 = (new freactive.cljs_perf.ElementSpec("abc"));
freactive.cljs_perf.bench.call(null,(function (){return freactive.cljs_perf.get_virtual_dom.call(null,"abc");
}));
freactive.cljs_perf.bench.call(null,(function (){return freactive.cljs_perf._get_virtual_dom.call(null,cljs.core.PersistentVector.EMPTY);
}));
freactive.cljs_perf.bench.call(null,(function (){return freactive.cljs_perf.get_virtual_dom.call(null,cljs.core.PersistentVector.EMPTY);
}));
freactive.cljs_perf.bench.call(null,(function (){return freactive.cljs_perf.get_virtual_dom.call(null,freactive.cljs_perf.es0);
}));
freactive.cljs_perf.bench.call(null,(function (){return freactive.cljs_perf.get_transition.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"on-show","on-show",-1100796727));
}));
freactive.cljs_perf.bench.call(null,(function (){return freactive.cljs_perf.get_transition.call(null,"abc",new cljs.core.Keyword(null,"on-show","on-show",-1100796727));
}));
freactive.cljs_perf.IHasDOMNode = (function (){var obj36207 = {};return obj36207;
})();
freactive.cljs_perf._get_dom_node = (function _get_dom_node(x){if((function (){var and__11486__auto__ = x;if(and__11486__auto__)
{return x.freactive$cljs_perf$IHasDOMNode$_get_dom_node$arity$1;
} else
{return and__11486__auto__;
}
})())
{return x.freactive$cljs_perf$IHasDOMNode$_get_dom_node$arity$1(x);
} else
{var x__12135__auto__ = (((x == null))?null:x);return (function (){var or__11498__auto__ = (freactive.cljs_perf._get_dom_node[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.cljs_perf._get_dom_node["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHasDOMNode.-get-dom-node",x);
}
}
})().call(null,x);
}
});
freactive.cljs_perf.get_dom_node = (function get_dom_node(x){if(freactive.cljs_perf.dom_node_QMARK_.call(null,x))
{return x;
} else
{return freactive.cljs_perf._get_dom_node.call(null,x);
}
});
freactive.cljs_perf.IRemove = (function (){var obj36209 = {};return obj36209;
})();
freactive.cljs_perf._remove_BANG_ = (function _remove_BANG_(x){if((function (){var and__11486__auto__ = x;if(and__11486__auto__)
{return x.freactive$cljs_perf$IRemove$_remove_BANG_$arity$1;
} else
{return and__11486__auto__;
}
})())
{return x.freactive$cljs_perf$IRemove$_remove_BANG_$arity$1(x);
} else
{var x__12135__auto__ = (((x == null))?null:x);return (function (){var or__11498__auto__ = (freactive.cljs_perf._remove_BANG_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.cljs_perf._remove_BANG_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRemove.-remove!",x);
}
}
})().call(null,x);
}
});
freactive.cljs_perf.remove_dom_node = (function remove_dom_node(x){return null;
});
freactive.cljs_perf.remove_BANG_ = (function remove_BANG_(x){if(freactive.cljs_perf.dom_node_QMARK_.call(null,x))
{return freactive.cljs_perf.remove_dom_node.call(null,x);
} else
{return freactive.cljs_perf._remove_BANG_.call(null,x);
}
});
cljs.core.List.EMPTY;

//# sourceMappingURL=cljs_perf.js.map