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
var log__delegate = function (p__95302,args){var map__95304 = p__95302;var map__95304__$1 = ((cljs.core.seq_QMARK_.call(null,map__95304))?cljs.core.apply.call(null,cljs.core.hash_map,map__95304):map__95304);var debug = cljs.core.get.call(null,map__95304__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__95302,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__95302,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__95305){
var p__95302 = cljs.core.first(arglist__95305);
var args = cljs.core.rest(arglist__95305);
return log__delegate(p__95302,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__95306){var map__95308 = p__95306;var map__95308__$1 = ((cljs.core.seq_QMARK_.call(null,map__95308))?cljs.core.apply.call(null,cljs.core.hash_map,map__95308):map__95308);var websocket_url = cljs.core.get.call(null,map__95308__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__95309,callback){var map__95311 = p__95309;var map__95311__$1 = ((cljs.core.seq_QMARK_.call(null,map__95311))?cljs.core.apply.call(null,cljs.core.hash_map,map__95311):map__95311);var msg = map__95311__$1;var dependency_file = cljs.core.get.call(null,map__95311__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__95311__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__95311__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11497__auto__ = dependency_file;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__95311,map__95311__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__95311,map__95311__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__95312,p__95313){var map__95316 = p__95312;var map__95316__$1 = ((cljs.core.seq_QMARK_.call(null,map__95316))?cljs.core.apply.call(null,cljs.core.hash_map,map__95316):map__95316);var opts = map__95316__$1;var url_rewriter = cljs.core.get.call(null,map__95316__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__95317 = p__95313;var map__95317__$1 = ((cljs.core.seq_QMARK_.call(null,map__95317))?cljs.core.apply.call(null,cljs.core.hash_map,map__95317):map__95317);var d = map__95317__$1;var file = cljs.core.get.call(null,map__95317__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__95318,p__95319){var map__95361 = p__95318;var map__95361__$1 = ((cljs.core.seq_QMARK_.call(null,map__95361))?cljs.core.apply.call(null,cljs.core.hash_map,map__95361):map__95361);var opts = map__95361__$1;var on_jsload = cljs.core.get.call(null,map__95361__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__95361__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__95362 = p__95319;var map__95362__$1 = ((cljs.core.seq_QMARK_.call(null,map__95362))?cljs.core.apply.call(null,cljs.core.hash_map,map__95362):map__95362);var files = cljs.core.get.call(null,map__95362__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,map__95361,map__95361__$1,opts,on_jsload,before_jsload,map__95362,map__95362__$1,files){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,map__95361,map__95361__$1,opts,on_jsload,before_jsload,map__95362,map__95362__$1,files){
return (function (state_95385){var state_val_95386 = (state_95385[(1)]);if((state_val_95386 === (6)))
{var inst_95367 = (state_95385[(7)]);var inst_95376 = (state_95385[(2)]);var inst_95377 = cljs.core.PersistentVector.EMPTY_NODE;var inst_95378 = [inst_95367];var inst_95379 = (new cljs.core.PersistentVector(null,1,(5),inst_95377,inst_95378,null));var inst_95380 = cljs.core.apply.call(null,on_jsload,inst_95379);var state_95385__$1 = (function (){var statearr_95387 = state_95385;(statearr_95387[(8)] = inst_95376);
return statearr_95387;
})();var statearr_95388_95402 = state_95385__$1;(statearr_95388_95402[(2)] = inst_95380);
(statearr_95388_95402[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95386 === (5)))
{var inst_95383 = (state_95385[(2)]);var state_95385__$1 = state_95385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95385__$1,inst_95383);
} else
{if((state_val_95386 === (4)))
{var state_95385__$1 = state_95385;var statearr_95389_95403 = state_95385__$1;(statearr_95389_95403[(2)] = null);
(statearr_95389_95403[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95386 === (3)))
{var inst_95367 = (state_95385[(7)]);var inst_95370 = console.debug("Figwheel: loaded these files");var inst_95371 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_95367);var inst_95372 = cljs.core.prn_str.call(null,inst_95371);var inst_95373 = console.log(inst_95372);var inst_95374 = cljs.core.async.timeout.call(null,(10));var state_95385__$1 = (function (){var statearr_95390 = state_95385;(statearr_95390[(9)] = inst_95370);
(statearr_95390[(10)] = inst_95373);
return statearr_95390;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95385__$1,(6),inst_95374);
} else
{if((state_val_95386 === (2)))
{var inst_95367 = (state_95385[(7)]);var inst_95367__$1 = (state_95385[(2)]);var inst_95368 = cljs.core.not_empty.call(null,inst_95367__$1);var state_95385__$1 = (function (){var statearr_95391 = state_95385;(statearr_95391[(7)] = inst_95367__$1);
return statearr_95391;
})();if(cljs.core.truth_(inst_95368))
{var statearr_95392_95404 = state_95385__$1;(statearr_95392_95404[(1)] = (3));
} else
{var statearr_95393_95405 = state_95385__$1;(statearr_95393_95405[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_95386 === (1)))
{var inst_95363 = before_jsload.call(null,files);var inst_95364 = figwheel.client.add_request_urls.call(null,opts,files);var inst_95365 = figwheel.client.load_all_js_files.call(null,inst_95364);var state_95385__$1 = (function (){var statearr_95394 = state_95385;(statearr_95394[(11)] = inst_95363);
return statearr_95394;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95385__$1,(2),inst_95365);
} else
{return null;
}
}
}
}
}
}
});})(c__14620__auto__,map__95361,map__95361__$1,opts,on_jsload,before_jsload,map__95362,map__95362__$1,files))
;return ((function (switch__14564__auto__,c__14620__auto__,map__95361,map__95361__$1,opts,on_jsload,before_jsload,map__95362,map__95362__$1,files){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_95398 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_95398[(0)] = state_machine__14565__auto__);
(statearr_95398[(1)] = (1));
return statearr_95398;
});
var state_machine__14565__auto____1 = (function (state_95385){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_95385);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e95399){if((e95399 instanceof Object))
{var ex__14568__auto__ = e95399;var statearr_95400_95406 = state_95385;(statearr_95400_95406[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95385);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e95399;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__95407 = state_95385;
state_95385 = G__95407;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_95385){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_95385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,map__95361,map__95361__$1,opts,on_jsload,before_jsload,map__95362,map__95362__$1,files))
})();var state__14622__auto__ = (function (){var statearr_95401 = f__14621__auto__.call(null);(statearr_95401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_95401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__,map__95361,map__95361__$1,opts,on_jsload,before_jsload,map__95362,map__95362__$1,files))
);
return c__14620__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__95408,link_href){var map__95410 = p__95408;var map__95410__$1 = ((cljs.core.seq_QMARK_.call(null,map__95410))?cljs.core.apply.call(null,cljs.core.hash_map,map__95410):map__95410);var request_url = cljs.core.get.call(null,map__95410__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__95410__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_95431){var state_val_95432 = (state_95431[(1)]);if((state_val_95432 === (2)))
{var inst_95428 = (state_95431[(2)]);var inst_95429 = parent.removeChild(orig_link);var state_95431__$1 = (function (){var statearr_95433 = state_95431;(statearr_95433[(7)] = inst_95428);
return statearr_95433;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95431__$1,inst_95429);
} else
{if((state_val_95432 === (1)))
{var inst_95426 = cljs.core.async.timeout.call(null,(200));var state_95431__$1 = state_95431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95431__$1,(2),inst_95426);
} else
{return null;
}
}
});})(c__14620__auto__,parent))
;return ((function (switch__14564__auto__,c__14620__auto__,parent){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_95437 = [null,null,null,null,null,null,null,null];(statearr_95437[(0)] = state_machine__14565__auto__);
(statearr_95437[(1)] = (1));
return statearr_95437;
});
var state_machine__14565__auto____1 = (function (state_95431){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_95431);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e95438){if((e95438 instanceof Object))
{var ex__14568__auto__ = e95438;var statearr_95439_95441 = state_95431;(statearr_95439_95441[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95431);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e95438;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__95442 = state_95431;
state_95431 = G__95442;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_95431){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_95431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,parent))
})();var state__14622__auto__ = (function (){var statearr_95440 = f__14621__auto__.call(null);(statearr_95440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_95440;
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
figwheel.client.reload_css_file = (function reload_css_file(p__95443){var map__95445 = p__95443;var map__95445__$1 = ((cljs.core.seq_QMARK_.call(null,map__95445))?cljs.core.apply.call(null,cljs.core.hash_map,map__95445):map__95445);var f_data = map__95445__$1;var request_url = cljs.core.get.call(null,map__95445__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__95445__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4386__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4386__auto__))
{var link = temp__4386__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__95446,files_msg){var map__95468 = p__95446;var map__95468__$1 = ((cljs.core.seq_QMARK_.call(null,map__95468))?cljs.core.apply.call(null,cljs.core.hash_map,map__95468):map__95468);var opts = map__95468__$1;var on_cssload = cljs.core.get.call(null,map__95468__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__95469_95489 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__95470_95490 = null;var count__95471_95491 = (0);var i__95472_95492 = (0);while(true){
if((i__95472_95492 < count__95471_95491))
{var f_95493 = cljs.core._nth.call(null,chunk__95470_95490,i__95472_95492);figwheel.client.reload_css_file.call(null,f_95493);
{
var G__95494 = seq__95469_95489;
var G__95495 = chunk__95470_95490;
var G__95496 = count__95471_95491;
var G__95497 = (i__95472_95492 + (1));
seq__95469_95489 = G__95494;
chunk__95470_95490 = G__95495;
count__95471_95491 = G__95496;
i__95472_95492 = G__95497;
continue;
}
} else
{var temp__4388__auto___95498 = cljs.core.seq.call(null,seq__95469_95489);if(temp__4388__auto___95498)
{var seq__95469_95499__$1 = temp__4388__auto___95498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__95469_95499__$1))
{var c__12267__auto___95500 = cljs.core.chunk_first.call(null,seq__95469_95499__$1);{
var G__95501 = cljs.core.chunk_rest.call(null,seq__95469_95499__$1);
var G__95502 = c__12267__auto___95500;
var G__95503 = cljs.core.count.call(null,c__12267__auto___95500);
var G__95504 = (0);
seq__95469_95489 = G__95501;
chunk__95470_95490 = G__95502;
count__95471_95491 = G__95503;
i__95472_95492 = G__95504;
continue;
}
} else
{var f_95505 = cljs.core.first.call(null,seq__95469_95499__$1);figwheel.client.reload_css_file.call(null,f_95505);
{
var G__95506 = cljs.core.next.call(null,seq__95469_95499__$1);
var G__95507 = null;
var G__95508 = (0);
var G__95509 = (0);
seq__95469_95489 = G__95506;
chunk__95470_95490 = G__95507;
count__95471_95491 = G__95508;
i__95472_95492 = G__95509;
continue;
}
}
} else
{}
}
break;
}
var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,map__95468,map__95468__$1,opts,on_cssload){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,map__95468,map__95468__$1,opts,on_cssload){
return (function (state_95479){var state_val_95480 = (state_95479[(1)]);if((state_val_95480 === (2)))
{var inst_95475 = (state_95479[(2)]);var inst_95476 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_95477 = on_cssload.call(null,inst_95476);var state_95479__$1 = (function (){var statearr_95481 = state_95479;(statearr_95481[(7)] = inst_95475);
return statearr_95481;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95479__$1,inst_95477);
} else
{if((state_val_95480 === (1)))
{var inst_95473 = cljs.core.async.timeout.call(null,(100));var state_95479__$1 = state_95479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95479__$1,(2),inst_95473);
} else
{return null;
}
}
});})(c__14620__auto__,map__95468,map__95468__$1,opts,on_cssload))
;return ((function (switch__14564__auto__,c__14620__auto__,map__95468,map__95468__$1,opts,on_cssload){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_95485 = [null,null,null,null,null,null,null,null];(statearr_95485[(0)] = state_machine__14565__auto__);
(statearr_95485[(1)] = (1));
return statearr_95485;
});
var state_machine__14565__auto____1 = (function (state_95479){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_95479);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e95486){if((e95486 instanceof Object))
{var ex__14568__auto__ = e95486;var statearr_95487_95510 = state_95479;(statearr_95487_95510[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e95486;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__95511 = state_95479;
state_95479 = G__95511;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_95479){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_95479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,map__95468,map__95468__$1,opts,on_cssload))
})();var state__14622__auto__ = (function (){var statearr_95488 = f__14621__auto__.call(null);(statearr_95488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_95488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__,map__95468,map__95468__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__95512){var map__95517 = p__95512;var map__95517__$1 = ((cljs.core.seq_QMARK_.call(null,map__95517))?cljs.core.apply.call(null,cljs.core.hash_map,map__95517):map__95517);var opts = map__95517__$1;var on_compile_fail = cljs.core.get.call(null,map__95517__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__95517__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__95517__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__95517__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__95518 = cljs.core._EQ_;var expr__95519 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__95518.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__95519)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__95518.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__95519)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__95518.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__95519)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__95517,map__95517__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj95524 = {"detail":url};return obj95524;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__95525){var map__95527 = p__95525;var map__95527__$1 = ((cljs.core.seq_QMARK_.call(null,map__95527))?cljs.core.apply.call(null,cljs.core.hash_map,map__95527):map__95527);var class$ = cljs.core.get.call(null,map__95527__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__95527__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__95528){var map__95534 = p__95528;var map__95534__$1 = ((cljs.core.seq_QMARK_.call(null,map__95534))?cljs.core.apply.call(null,cljs.core.hash_map,map__95534):map__95534);var ed = map__95534__$1;var exception_data = cljs.core.get.call(null,map__95534__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__95534__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__95535_95539 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__95536_95540 = null;var count__95537_95541 = (0);var i__95538_95542 = (0);while(true){
if((i__95538_95542 < count__95537_95541))
{var msg_95543 = cljs.core._nth.call(null,chunk__95536_95540,i__95538_95542);console.log(msg_95543);
{
var G__95544 = seq__95535_95539;
var G__95545 = chunk__95536_95540;
var G__95546 = count__95537_95541;
var G__95547 = (i__95538_95542 + (1));
seq__95535_95539 = G__95544;
chunk__95536_95540 = G__95545;
count__95537_95541 = G__95546;
i__95538_95542 = G__95547;
continue;
}
} else
{var temp__4388__auto___95548 = cljs.core.seq.call(null,seq__95535_95539);if(temp__4388__auto___95548)
{var seq__95535_95549__$1 = temp__4388__auto___95548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__95535_95549__$1))
{var c__12267__auto___95550 = cljs.core.chunk_first.call(null,seq__95535_95549__$1);{
var G__95551 = cljs.core.chunk_rest.call(null,seq__95535_95549__$1);
var G__95552 = c__12267__auto___95550;
var G__95553 = cljs.core.count.call(null,c__12267__auto___95550);
var G__95554 = (0);
seq__95535_95539 = G__95551;
chunk__95536_95540 = G__95552;
count__95537_95541 = G__95553;
i__95538_95542 = G__95554;
continue;
}
} else
{var msg_95555 = cljs.core.first.call(null,seq__95535_95549__$1);console.log(msg_95555);
{
var G__95556 = cljs.core.next.call(null,seq__95535_95549__$1);
var G__95557 = null;
var G__95558 = (0);
var G__95559 = (0);
seq__95535_95539 = G__95556;
chunk__95536_95540 = G__95557;
count__95537_95541 = G__95558;
i__95538_95542 = G__95559;
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
var watch_and_reload__delegate = function (p__95560){var map__95562 = p__95560;var map__95562__$1 = ((cljs.core.seq_QMARK_.call(null,map__95562))?cljs.core.apply.call(null,cljs.core.hash_map,map__95562):map__95562);var opts = map__95562__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__95560 = null;if (arguments.length > 0) {
  p__95560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__95560);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__95563){
var p__95560 = cljs.core.seq(arglist__95563);
return watch_and_reload__delegate(p__95560);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map