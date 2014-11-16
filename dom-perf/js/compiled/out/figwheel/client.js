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
var log__delegate = function (p__133155,args){var map__133157 = p__133155;var map__133157__$1 = ((cljs.core.seq_QMARK_.call(null,map__133157))?cljs.core.apply.call(null,cljs.core.hash_map,map__133157):map__133157);var debug = cljs.core.get.call(null,map__133157__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__133155,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__133155,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__133158){
var p__133155 = cljs.core.first(arglist__133158);
var args = cljs.core.rest(arglist__133158);
return log__delegate(p__133155,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__133159){var map__133161 = p__133159;var map__133161__$1 = ((cljs.core.seq_QMARK_.call(null,map__133161))?cljs.core.apply.call(null,cljs.core.hash_map,map__133161):map__133161);var websocket_url = cljs.core.get.call(null,map__133161__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__133162,callback){var map__133164 = p__133162;var map__133164__$1 = ((cljs.core.seq_QMARK_.call(null,map__133164))?cljs.core.apply.call(null,cljs.core.hash_map,map__133164):map__133164);var msg = map__133164__$1;var dependency_file = cljs.core.get.call(null,map__133164__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__133164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__133164__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11497__auto__ = dependency_file;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__133164,map__133164__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__133164,map__133164__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__133165,p__133166){var map__133169 = p__133165;var map__133169__$1 = ((cljs.core.seq_QMARK_.call(null,map__133169))?cljs.core.apply.call(null,cljs.core.hash_map,map__133169):map__133169);var opts = map__133169__$1;var url_rewriter = cljs.core.get.call(null,map__133169__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__133170 = p__133166;var map__133170__$1 = ((cljs.core.seq_QMARK_.call(null,map__133170))?cljs.core.apply.call(null,cljs.core.hash_map,map__133170):map__133170);var d = map__133170__$1;var file = cljs.core.get.call(null,map__133170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__133171,p__133172){var map__133214 = p__133171;var map__133214__$1 = ((cljs.core.seq_QMARK_.call(null,map__133214))?cljs.core.apply.call(null,cljs.core.hash_map,map__133214):map__133214);var opts = map__133214__$1;var on_jsload = cljs.core.get.call(null,map__133214__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__133214__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__133215 = p__133172;var map__133215__$1 = ((cljs.core.seq_QMARK_.call(null,map__133215))?cljs.core.apply.call(null,cljs.core.hash_map,map__133215):map__133215);var files = cljs.core.get.call(null,map__133215__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,map__133214,map__133214__$1,opts,on_jsload,before_jsload,map__133215,map__133215__$1,files){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,map__133214,map__133214__$1,opts,on_jsload,before_jsload,map__133215,map__133215__$1,files){
return (function (state_133238){var state_val_133239 = (state_133238[(1)]);if((state_val_133239 === (6)))
{var inst_133220 = (state_133238[(7)]);var inst_133229 = (state_133238[(2)]);var inst_133230 = cljs.core.PersistentVector.EMPTY_NODE;var inst_133231 = [inst_133220];var inst_133232 = (new cljs.core.PersistentVector(null,1,(5),inst_133230,inst_133231,null));var inst_133233 = cljs.core.apply.call(null,on_jsload,inst_133232);var state_133238__$1 = (function (){var statearr_133240 = state_133238;(statearr_133240[(8)] = inst_133229);
return statearr_133240;
})();var statearr_133241_133255 = state_133238__$1;(statearr_133241_133255[(2)] = inst_133233);
(statearr_133241_133255[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133239 === (5)))
{var inst_133236 = (state_133238[(2)]);var state_133238__$1 = state_133238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133238__$1,inst_133236);
} else
{if((state_val_133239 === (4)))
{var state_133238__$1 = state_133238;var statearr_133242_133256 = state_133238__$1;(statearr_133242_133256[(2)] = null);
(statearr_133242_133256[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133239 === (3)))
{var inst_133220 = (state_133238[(7)]);var inst_133223 = console.debug("Figwheel: loaded these files");var inst_133224 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_133220);var inst_133225 = cljs.core.prn_str.call(null,inst_133224);var inst_133226 = console.log(inst_133225);var inst_133227 = cljs.core.async.timeout.call(null,(10));var state_133238__$1 = (function (){var statearr_133243 = state_133238;(statearr_133243[(9)] = inst_133226);
(statearr_133243[(10)] = inst_133223);
return statearr_133243;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133238__$1,(6),inst_133227);
} else
{if((state_val_133239 === (2)))
{var inst_133220 = (state_133238[(7)]);var inst_133220__$1 = (state_133238[(2)]);var inst_133221 = cljs.core.not_empty.call(null,inst_133220__$1);var state_133238__$1 = (function (){var statearr_133244 = state_133238;(statearr_133244[(7)] = inst_133220__$1);
return statearr_133244;
})();if(cljs.core.truth_(inst_133221))
{var statearr_133245_133257 = state_133238__$1;(statearr_133245_133257[(1)] = (3));
} else
{var statearr_133246_133258 = state_133238__$1;(statearr_133246_133258[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_133239 === (1)))
{var inst_133216 = before_jsload.call(null,files);var inst_133217 = figwheel.client.add_request_urls.call(null,opts,files);var inst_133218 = figwheel.client.load_all_js_files.call(null,inst_133217);var state_133238__$1 = (function (){var statearr_133247 = state_133238;(statearr_133247[(11)] = inst_133216);
return statearr_133247;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133238__$1,(2),inst_133218);
} else
{return null;
}
}
}
}
}
}
});})(c__14620__auto__,map__133214,map__133214__$1,opts,on_jsload,before_jsload,map__133215,map__133215__$1,files))
;return ((function (switch__14564__auto__,c__14620__auto__,map__133214,map__133214__$1,opts,on_jsload,before_jsload,map__133215,map__133215__$1,files){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_133251 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_133251[(0)] = state_machine__14565__auto__);
(statearr_133251[(1)] = (1));
return statearr_133251;
});
var state_machine__14565__auto____1 = (function (state_133238){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_133238);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e133252){if((e133252 instanceof Object))
{var ex__14568__auto__ = e133252;var statearr_133253_133259 = state_133238;(statearr_133253_133259[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e133252;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133260 = state_133238;
state_133238 = G__133260;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_133238){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_133238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,map__133214,map__133214__$1,opts,on_jsload,before_jsload,map__133215,map__133215__$1,files))
})();var state__14622__auto__ = (function (){var statearr_133254 = f__14621__auto__.call(null);(statearr_133254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_133254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__,map__133214,map__133214__$1,opts,on_jsload,before_jsload,map__133215,map__133215__$1,files))
);
return c__14620__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__133261,link_href){var map__133263 = p__133261;var map__133263__$1 = ((cljs.core.seq_QMARK_.call(null,map__133263))?cljs.core.apply.call(null,cljs.core.hash_map,map__133263):map__133263);var request_url = cljs.core.get.call(null,map__133263__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__133263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_133284){var state_val_133285 = (state_133284[(1)]);if((state_val_133285 === (2)))
{var inst_133281 = (state_133284[(2)]);var inst_133282 = parent.removeChild(orig_link);var state_133284__$1 = (function (){var statearr_133286 = state_133284;(statearr_133286[(7)] = inst_133281);
return statearr_133286;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133284__$1,inst_133282);
} else
{if((state_val_133285 === (1)))
{var inst_133279 = cljs.core.async.timeout.call(null,(200));var state_133284__$1 = state_133284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133284__$1,(2),inst_133279);
} else
{return null;
}
}
});})(c__14620__auto__,parent))
;return ((function (switch__14564__auto__,c__14620__auto__,parent){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_133290 = [null,null,null,null,null,null,null,null];(statearr_133290[(0)] = state_machine__14565__auto__);
(statearr_133290[(1)] = (1));
return statearr_133290;
});
var state_machine__14565__auto____1 = (function (state_133284){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_133284);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e133291){if((e133291 instanceof Object))
{var ex__14568__auto__ = e133291;var statearr_133292_133294 = state_133284;(statearr_133292_133294[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e133291;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133295 = state_133284;
state_133284 = G__133295;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_133284){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_133284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,parent))
})();var state__14622__auto__ = (function (){var statearr_133293 = f__14621__auto__.call(null);(statearr_133293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_133293;
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
figwheel.client.reload_css_file = (function reload_css_file(p__133296){var map__133298 = p__133296;var map__133298__$1 = ((cljs.core.seq_QMARK_.call(null,map__133298))?cljs.core.apply.call(null,cljs.core.hash_map,map__133298):map__133298);var f_data = map__133298__$1;var request_url = cljs.core.get.call(null,map__133298__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__133298__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4386__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4386__auto__))
{var link = temp__4386__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__133299,files_msg){var map__133321 = p__133299;var map__133321__$1 = ((cljs.core.seq_QMARK_.call(null,map__133321))?cljs.core.apply.call(null,cljs.core.hash_map,map__133321):map__133321);var opts = map__133321__$1;var on_cssload = cljs.core.get.call(null,map__133321__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__133322_133342 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__133323_133343 = null;var count__133324_133344 = (0);var i__133325_133345 = (0);while(true){
if((i__133325_133345 < count__133324_133344))
{var f_133346 = cljs.core._nth.call(null,chunk__133323_133343,i__133325_133345);figwheel.client.reload_css_file.call(null,f_133346);
{
var G__133347 = seq__133322_133342;
var G__133348 = chunk__133323_133343;
var G__133349 = count__133324_133344;
var G__133350 = (i__133325_133345 + (1));
seq__133322_133342 = G__133347;
chunk__133323_133343 = G__133348;
count__133324_133344 = G__133349;
i__133325_133345 = G__133350;
continue;
}
} else
{var temp__4388__auto___133351 = cljs.core.seq.call(null,seq__133322_133342);if(temp__4388__auto___133351)
{var seq__133322_133352__$1 = temp__4388__auto___133351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__133322_133352__$1))
{var c__12267__auto___133353 = cljs.core.chunk_first.call(null,seq__133322_133352__$1);{
var G__133354 = cljs.core.chunk_rest.call(null,seq__133322_133352__$1);
var G__133355 = c__12267__auto___133353;
var G__133356 = cljs.core.count.call(null,c__12267__auto___133353);
var G__133357 = (0);
seq__133322_133342 = G__133354;
chunk__133323_133343 = G__133355;
count__133324_133344 = G__133356;
i__133325_133345 = G__133357;
continue;
}
} else
{var f_133358 = cljs.core.first.call(null,seq__133322_133352__$1);figwheel.client.reload_css_file.call(null,f_133358);
{
var G__133359 = cljs.core.next.call(null,seq__133322_133352__$1);
var G__133360 = null;
var G__133361 = (0);
var G__133362 = (0);
seq__133322_133342 = G__133359;
chunk__133323_133343 = G__133360;
count__133324_133344 = G__133361;
i__133325_133345 = G__133362;
continue;
}
}
} else
{}
}
break;
}
var c__14620__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14620__auto__,map__133321,map__133321__$1,opts,on_cssload){
return (function (){var f__14621__auto__ = (function (){var switch__14564__auto__ = ((function (c__14620__auto__,map__133321,map__133321__$1,opts,on_cssload){
return (function (state_133332){var state_val_133333 = (state_133332[(1)]);if((state_val_133333 === (2)))
{var inst_133328 = (state_133332[(2)]);var inst_133329 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_133330 = on_cssload.call(null,inst_133329);var state_133332__$1 = (function (){var statearr_133334 = state_133332;(statearr_133334[(7)] = inst_133328);
return statearr_133334;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133332__$1,inst_133330);
} else
{if((state_val_133333 === (1)))
{var inst_133326 = cljs.core.async.timeout.call(null,(100));var state_133332__$1 = state_133332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133332__$1,(2),inst_133326);
} else
{return null;
}
}
});})(c__14620__auto__,map__133321,map__133321__$1,opts,on_cssload))
;return ((function (switch__14564__auto__,c__14620__auto__,map__133321,map__133321__$1,opts,on_cssload){
return (function() {
var state_machine__14565__auto__ = null;
var state_machine__14565__auto____0 = (function (){var statearr_133338 = [null,null,null,null,null,null,null,null];(statearr_133338[(0)] = state_machine__14565__auto__);
(statearr_133338[(1)] = (1));
return statearr_133338;
});
var state_machine__14565__auto____1 = (function (state_133332){while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__.call(null,state_133332);if(cljs.core.keyword_identical_QMARK_.call(null,result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14567__auto__;
}
break;
}
}catch (e133339){if((e133339 instanceof Object))
{var ex__14568__auto__ = e133339;var statearr_133340_133363 = state_133332;(statearr_133340_133363[(5)] = ex__14568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133332);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e133339;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133364 = state_133332;
state_133332 = G__133364;
continue;
}
} else
{return ret_value__14566__auto__;
}
break;
}
});
state_machine__14565__auto__ = function(state_133332){
switch(arguments.length){
case 0:
return state_machine__14565__auto____0.call(this);
case 1:
return state_machine__14565__auto____1.call(this,state_133332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14565__auto____0;
state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14565__auto____1;
return state_machine__14565__auto__;
})()
;})(switch__14564__auto__,c__14620__auto__,map__133321,map__133321__$1,opts,on_cssload))
})();var state__14622__auto__ = (function (){var statearr_133341 = f__14621__auto__.call(null);(statearr_133341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14620__auto__);
return statearr_133341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14622__auto__);
});})(c__14620__auto__,map__133321,map__133321__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__133365){var map__133370 = p__133365;var map__133370__$1 = ((cljs.core.seq_QMARK_.call(null,map__133370))?cljs.core.apply.call(null,cljs.core.hash_map,map__133370):map__133370);var opts = map__133370__$1;var on_compile_fail = cljs.core.get.call(null,map__133370__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__133370__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__133370__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__133370__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__133371 = cljs.core._EQ_;var expr__133372 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__133371.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__133372)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__133371.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__133372)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__133371.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__133372)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__133370,map__133370__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj133377 = {"detail":url};return obj133377;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__133378){var map__133380 = p__133378;var map__133380__$1 = ((cljs.core.seq_QMARK_.call(null,map__133380))?cljs.core.apply.call(null,cljs.core.hash_map,map__133380):map__133380);var class$ = cljs.core.get.call(null,map__133380__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__133380__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__133381){var map__133387 = p__133381;var map__133387__$1 = ((cljs.core.seq_QMARK_.call(null,map__133387))?cljs.core.apply.call(null,cljs.core.hash_map,map__133387):map__133387);var ed = map__133387__$1;var exception_data = cljs.core.get.call(null,map__133387__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__133387__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__133388_133392 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__133389_133393 = null;var count__133390_133394 = (0);var i__133391_133395 = (0);while(true){
if((i__133391_133395 < count__133390_133394))
{var msg_133396 = cljs.core._nth.call(null,chunk__133389_133393,i__133391_133395);console.log(msg_133396);
{
var G__133397 = seq__133388_133392;
var G__133398 = chunk__133389_133393;
var G__133399 = count__133390_133394;
var G__133400 = (i__133391_133395 + (1));
seq__133388_133392 = G__133397;
chunk__133389_133393 = G__133398;
count__133390_133394 = G__133399;
i__133391_133395 = G__133400;
continue;
}
} else
{var temp__4388__auto___133401 = cljs.core.seq.call(null,seq__133388_133392);if(temp__4388__auto___133401)
{var seq__133388_133402__$1 = temp__4388__auto___133401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__133388_133402__$1))
{var c__12267__auto___133403 = cljs.core.chunk_first.call(null,seq__133388_133402__$1);{
var G__133404 = cljs.core.chunk_rest.call(null,seq__133388_133402__$1);
var G__133405 = c__12267__auto___133403;
var G__133406 = cljs.core.count.call(null,c__12267__auto___133403);
var G__133407 = (0);
seq__133388_133392 = G__133404;
chunk__133389_133393 = G__133405;
count__133390_133394 = G__133406;
i__133391_133395 = G__133407;
continue;
}
} else
{var msg_133408 = cljs.core.first.call(null,seq__133388_133402__$1);console.log(msg_133408);
{
var G__133409 = cljs.core.next.call(null,seq__133388_133402__$1);
var G__133410 = null;
var G__133411 = (0);
var G__133412 = (0);
seq__133388_133392 = G__133409;
chunk__133389_133393 = G__133410;
count__133390_133394 = G__133411;
i__133391_133395 = G__133412;
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
var watch_and_reload__delegate = function (p__133413){var map__133415 = p__133413;var map__133415__$1 = ((cljs.core.seq_QMARK_.call(null,map__133415))?cljs.core.apply.call(null,cljs.core.hash_map,map__133415):map__133415);var opts = map__133415__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__133413 = null;if (arguments.length > 0) {
  p__133413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__133413);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__133416){
var p__133413 = cljs.core.seq(arglist__133416);
return watch_and_reload__delegate(p__133413);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map