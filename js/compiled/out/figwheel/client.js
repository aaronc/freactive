// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__113684,args){var map__113686 = p__113684;var map__113686__$1 = ((cljs.core.seq_QMARK_.call(null,map__113686))?cljs.core.apply.call(null,cljs.core.hash_map,map__113686):map__113686);var debug = cljs.core.get.call(null,map__113686__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__113684,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__113684,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__113687){
var p__113684 = cljs.core.first(arglist__113687);
var args = cljs.core.rest(arglist__113687);
return log__delegate(p__113684,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__113688){var map__113690 = p__113688;var map__113690__$1 = ((cljs.core.seq_QMARK_.call(null,map__113690))?cljs.core.apply.call(null,cljs.core.hash_map,map__113690):map__113690);var websocket_url = cljs.core.get.call(null,map__113690__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__113691,callback){var map__113693 = p__113691;var map__113693__$1 = ((cljs.core.seq_QMARK_.call(null,map__113693))?cljs.core.apply.call(null,cljs.core.hash_map,map__113693):map__113693);var msg = map__113693__$1;var dependency_file = cljs.core.get.call(null,map__113693__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__113693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__113693__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11497__auto__ = dependency_file;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__113693,map__113693__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__113693,map__113693__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__113694,p__113695){var map__113698 = p__113694;var map__113698__$1 = ((cljs.core.seq_QMARK_.call(null,map__113698))?cljs.core.apply.call(null,cljs.core.hash_map,map__113698):map__113698);var opts = map__113698__$1;var url_rewriter = cljs.core.get.call(null,map__113698__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__113699 = p__113695;var map__113699__$1 = ((cljs.core.seq_QMARK_.call(null,map__113699))?cljs.core.apply.call(null,cljs.core.hash_map,map__113699):map__113699);var d = map__113699__$1;var file = cljs.core.get.call(null,map__113699__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__113700,p__113701){var map__113743 = p__113700;var map__113743__$1 = ((cljs.core.seq_QMARK_.call(null,map__113743))?cljs.core.apply.call(null,cljs.core.hash_map,map__113743):map__113743);var opts = map__113743__$1;var on_jsload = cljs.core.get.call(null,map__113743__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__113743__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__113744 = p__113701;var map__113744__$1 = ((cljs.core.seq_QMARK_.call(null,map__113744))?cljs.core.apply.call(null,cljs.core.hash_map,map__113744):map__113744);var files = cljs.core.get.call(null,map__113744__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,map__113743,map__113743__$1,opts,on_jsload,before_jsload,map__113744,map__113744__$1,files){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,map__113743,map__113743__$1,opts,on_jsload,before_jsload,map__113744,map__113744__$1,files){
return (function (state_113767){var state_val_113768 = (state_113767[(1)]);if((state_val_113768 === (6)))
{var inst_113749 = (state_113767[(7)]);var inst_113758 = (state_113767[(2)]);var inst_113759 = cljs.core.PersistentVector.EMPTY_NODE;var inst_113760 = [inst_113749];var inst_113761 = (new cljs.core.PersistentVector(null,1,(5),inst_113759,inst_113760,null));var inst_113762 = cljs.core.apply.call(null,on_jsload,inst_113761);var state_113767__$1 = (function (){var statearr_113769 = state_113767;(statearr_113769[(8)] = inst_113758);
return statearr_113769;
})();var statearr_113770_113784 = state_113767__$1;(statearr_113770_113784[(2)] = inst_113762);
(statearr_113770_113784[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_113768 === (5)))
{var inst_113765 = (state_113767[(2)]);var state_113767__$1 = state_113767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_113767__$1,inst_113765);
} else
{if((state_val_113768 === (4)))
{var state_113767__$1 = state_113767;var statearr_113771_113785 = state_113767__$1;(statearr_113771_113785[(2)] = null);
(statearr_113771_113785[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_113768 === (3)))
{var inst_113749 = (state_113767[(7)]);var inst_113752 = console.debug("Figwheel: loaded these files");var inst_113753 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_113749);var inst_113754 = cljs.core.prn_str.call(null,inst_113753);var inst_113755 = console.log(inst_113754);var inst_113756 = cljs.core.async.timeout.call(null,(10));var state_113767__$1 = (function (){var statearr_113772 = state_113767;(statearr_113772[(9)] = inst_113755);
(statearr_113772[(10)] = inst_113752);
return statearr_113772;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_113767__$1,(6),inst_113756);
} else
{if((state_val_113768 === (2)))
{var inst_113749 = (state_113767[(7)]);var inst_113749__$1 = (state_113767[(2)]);var inst_113750 = cljs.core.not_empty.call(null,inst_113749__$1);var state_113767__$1 = (function (){var statearr_113773 = state_113767;(statearr_113773[(7)] = inst_113749__$1);
return statearr_113773;
})();if(cljs.core.truth_(inst_113750))
{var statearr_113774_113786 = state_113767__$1;(statearr_113774_113786[(1)] = (3));
} else
{var statearr_113775_113787 = state_113767__$1;(statearr_113775_113787[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_113768 === (1)))
{var inst_113745 = before_jsload.call(null,files);var inst_113746 = figwheel.client.add_request_urls.call(null,opts,files);var inst_113747 = figwheel.client.load_all_js_files.call(null,inst_113746);var state_113767__$1 = (function (){var statearr_113776 = state_113767;(statearr_113776[(11)] = inst_113745);
return statearr_113776;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_113767__$1,(2),inst_113747);
} else
{return null;
}
}
}
}
}
}
});})(c__14620__auto__,map__113743,map__113743__$1,opts,on_jsload,before_jsload,map__113744,map__113744__$1,files))
;return ((function (switch__14564__auto__,c__14620__auto__,map__113743,map__113743__$1,opts,on_jsload,before_jsload,map__113744,map__113744__$1,files){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_113780 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_113780[(0)] = state_machine__14565__auto__);
(statearr_113780[(1)] = (1));
return statearr_113780;
});
var state_machine__14565__auto____1 = (function (state_113767){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_113767);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e113781){if((e113781 instanceof Object))
{var ex__14568__auto__ = e113781;var statearr_113782_113788 = state_113767;(statearr_113782_113788[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_113767);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e113781;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__113789 = state_113767;
state_113767 = G__113789;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_113767){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_113767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,map__113743,map__113743__$1,opts,on_jsload,before_jsload,map__113744,map__113744__$1,files))
})();var state__14622__auto__ = (function (){var statearr_113783 = f__14621__auto__.call(null);(statearr_113783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_113783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__,map__113743,map__113743__$1,opts,on_jsload,before_jsload,map__113744,map__113744__$1,files))
);
return c__14620__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__113790,link_href){var map__113792 = p__113790;var map__113792__$1 = ((cljs.core.seq_QMARK_.call(null,map__113792))?cljs.core.apply.call(null,cljs.core.hash_map,map__113792):map__113792);var request_url = cljs.core.get.call(null,map__113792__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__113792__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,parent){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,parent){
return (function (state_113813){var state_val_113814 = (state_113813[(1)]);if((state_val_113814 === (2)))
{var inst_113810 = (state_113813[(2)]);var inst_113811 = parent.removeChild(orig_link);var state_113813__$1 = (function (){var statearr_113815 = state_113813;(statearr_113815[(7)] = inst_113810);
return statearr_113815;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_113813__$1,inst_113811);
} else
{if((state_val_113814 === (1)))
{var inst_113808 = cljs.core.async.timeout.call(null,(200));var state_113813__$1 = state_113813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_113813__$1,(2),inst_113808);
} else
{return null;
}
}
});})(c__14620__auto__,parent))
;return ((function (switch__14564__auto__,c__14620__auto__,parent){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_113819 = [null,null,null,null,null,null,null,null];(statearr_113819[(0)] = state_machine__14565__auto__);
(statearr_113819[(1)] = (1));
return statearr_113819;
});
var state_machine__14565__auto____1 = (function (state_113813){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_113813);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e113820){if((e113820 instanceof Object))
{var ex__14568__auto__ = e113820;var statearr_113821_113823 = state_113813;(statearr_113821_113823[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_113813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e113820;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__113824 = state_113813;
state_113813 = G__113824;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_113813){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_113813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,parent))
})();var state__14622__auto__ = (function (){var statearr_113822 = f__14621__auto__.call(null);(statearr_113822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_113822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__,parent))
);
return c__14620__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__113825){var map__113827 = p__113825;var map__113827__$1 = ((cljs.core.seq_QMARK_.call(null,map__113827))?cljs.core.apply.call(null,cljs.core.hash_map,map__113827):map__113827);var f_data = map__113827__$1;var request_url = cljs.core.get.call(null,map__113827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__113827__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4386__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4386__auto__))
{var link = temp__4386__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__113828,files_msg){var map__113850 = p__113828;var map__113850__$1 = ((cljs.core.seq_QMARK_.call(null,map__113850))?cljs.core.apply.call(null,cljs.core.hash_map,map__113850):map__113850);var opts = map__113850__$1;var on_cssload = cljs.core.get.call(null,map__113850__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__113851_113871 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__113852_113872 = null;var count__113853_113873 = (0);var i__113854_113874 = (0);while(true){
if((i__113854_113874 < count__113853_113873))
{var f_113875 = cljs.core._nth.call(null,chunk__113852_113872,i__113854_113874);figwheel.client.reload_css_file.call(null,f_113875);
{
var G__113876 = seq__113851_113871;
var G__113877 = chunk__113852_113872;
var G__113878 = count__113853_113873;
var G__113879 = (i__113854_113874 + (1));
seq__113851_113871 = G__113876;
chunk__113852_113872 = G__113877;
count__113853_113873 = G__113878;
i__113854_113874 = G__113879;
continue;
}
} else
{var temp__4388__auto___113880 = cljs.core.seq.call(null,seq__113851_113871);if(temp__4388__auto___113880)
{var seq__113851_113881__$1 = temp__4388__auto___113880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__113851_113881__$1))
{var c__12267__auto___113882 = cljs.core.chunk_first.call(null,seq__113851_113881__$1);{
var G__113883 = cljs.core.chunk_rest.call(null,seq__113851_113881__$1);
var G__113884 = c__12267__auto___113882;
var G__113885 = cljs.core.count.call(null,c__12267__auto___113882);
var G__113886 = (0);
seq__113851_113871 = G__113883;
chunk__113852_113872 = G__113884;
count__113853_113873 = G__113885;
i__113854_113874 = G__113886;
continue;
}
} else
{var f_113887 = cljs.core.first.call(null,seq__113851_113881__$1);figwheel.client.reload_css_file.call(null,f_113887);
{
var G__113888 = cljs.core.next.call(null,seq__113851_113881__$1);
var G__113889 = null;
var G__113890 = (0);
var G__113891 = (0);
seq__113851_113871 = G__113888;
chunk__113852_113872 = G__113889;
count__113853_113873 = G__113890;
i__113854_113874 = G__113891;
continue;
}
}
} else
{}
}
break;
}
var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,map__113850,map__113850__$1,opts,on_cssload){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,map__113850,map__113850__$1,opts,on_cssload){
return (function (state_113861){var state_val_113862 = (state_113861[(1)]);if((state_val_113862 === (2)))
{var inst_113857 = (state_113861[(2)]);var inst_113858 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_113859 = on_cssload.call(null,inst_113858);var state_113861__$1 = (function (){var statearr_113863 = state_113861;(statearr_113863[(7)] = inst_113857);
return statearr_113863;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_113861__$1,inst_113859);
} else
{if((state_val_113862 === (1)))
{var inst_113855 = cljs.core.async.timeout.call(null,(100));var state_113861__$1 = state_113861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_113861__$1,(2),inst_113855);
} else
{return null;
}
}
});})(c__14620__auto__,map__113850,map__113850__$1,opts,on_cssload))
;return ((function (switch__14564__auto__,c__14620__auto__,map__113850,map__113850__$1,opts,on_cssload){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_113867 = [null,null,null,null,null,null,null,null];(statearr_113867[(0)] = state_machine__14565__auto__);
(statearr_113867[(1)] = (1));
return statearr_113867;
});
var state_machine__14565__auto____1 = (function (state_113861){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_113861);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e113868){if((e113868 instanceof Object))
{var ex__14568__auto__ = e113868;var statearr_113869_113892 = state_113861;(statearr_113869_113892[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_113861);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e113868;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__113893 = state_113861;
state_113861 = G__113893;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_113861){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_113861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,map__113850,map__113850__$1,opts,on_cssload))
})();var state__14622__auto__ = (function (){var statearr_113870 = f__14621__auto__.call(null);(statearr_113870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_113870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__,map__113850,map__113850__$1,opts,on_cssload))
);
return c__14620__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__113894){var map__113899 = p__113894;var map__113899__$1 = ((cljs.core.seq_QMARK_.call(null,map__113899))?cljs.core.apply.call(null,cljs.core.hash_map,map__113899):map__113899);var opts = map__113899__$1;var on_compile_fail = cljs.core.get.call(null,map__113899__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__113899__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__113899__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__113899__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__113900 = cljs.core._EQ_;var expr__113901 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__113900.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__113901)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__113900.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__113901)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__113900.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__113901)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__113899,map__113899__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj113906 = {"detail":url};return obj113906;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__113907){var map__113909 = p__113907;var map__113909__$1 = ((cljs.core.seq_QMARK_.call(null,map__113909))?cljs.core.apply.call(null,cljs.core.hash_map,map__113909):map__113909);var class$ = cljs.core.get.call(null,map__113909__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__113909__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__113910){var map__113916 = p__113910;var map__113916__$1 = ((cljs.core.seq_QMARK_.call(null,map__113916))?cljs.core.apply.call(null,cljs.core.hash_map,map__113916):map__113916);var ed = map__113916__$1;var exception_data = cljs.core.get.call(null,map__113916__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__113916__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__113917_113921 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__113918_113922 = null;var count__113919_113923 = (0);var i__113920_113924 = (0);while(true){
if((i__113920_113924 < count__113919_113923))
{var msg_113925 = cljs.core._nth.call(null,chunk__113918_113922,i__113920_113924);console.log(msg_113925);
{
var G__113926 = seq__113917_113921;
var G__113927 = chunk__113918_113922;
var G__113928 = count__113919_113923;
var G__113929 = (i__113920_113924 + (1));
seq__113917_113921 = G__113926;
chunk__113918_113922 = G__113927;
count__113919_113923 = G__113928;
i__113920_113924 = G__113929;
continue;
}
} else
{var temp__4388__auto___113930 = cljs.core.seq.call(null,seq__113917_113921);if(temp__4388__auto___113930)
{var seq__113917_113931__$1 = temp__4388__auto___113930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__113917_113931__$1))
{var c__12267__auto___113932 = cljs.core.chunk_first.call(null,seq__113917_113931__$1);{
var G__113933 = cljs.core.chunk_rest.call(null,seq__113917_113931__$1);
var G__113934 = c__12267__auto___113932;
var G__113935 = cljs.core.count.call(null,c__12267__auto___113932);
var G__113936 = (0);
seq__113917_113921 = G__113933;
chunk__113918_113922 = G__113934;
count__113919_113923 = G__113935;
i__113920_113924 = G__113936;
continue;
}
} else
{var msg_113937 = cljs.core.first.call(null,seq__113917_113931__$1);console.log(msg_113937);
{
var G__113938 = cljs.core.next.call(null,seq__113917_113931__$1);
var G__113939 = null;
var G__113940 = (0);
var G__113941 = (0);
seq__113917_113921 = G__113938;
chunk__113918_113922 = G__113939;
count__113919_113923 = G__113940;
i__113920_113924 = G__113941;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11497__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__113942){var map__113944 = p__113942;var map__113944__$1 = ((cljs.core.seq_QMARK_.call(null,map__113944))?cljs.core.apply.call(null,cljs.core.hash_map,map__113944):map__113944);var opts = map__113944__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__113942 = null;if (arguments.length > 0) {
  p__113942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__113942);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__113945){
var p__113942 = cljs.core.seq(arglist__113945);
return watch_and_reload__delegate(p__113942);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map