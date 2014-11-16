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
var log__delegate = function (p__37959,args){var map__37961 = p__37959;var map__37961__$1 = ((cljs.core.seq_QMARK_.call(null,map__37961))?cljs.core.apply.call(null,cljs.core.hash_map,map__37961):map__37961);var debug = cljs.core.get.call(null,map__37961__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__37959,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__37959,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__37962){
var p__37959 = cljs.core.first(arglist__37962);
var args = cljs.core.rest(arglist__37962);
return log__delegate(p__37959,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__37963){var map__37965 = p__37963;var map__37965__$1 = ((cljs.core.seq_QMARK_.call(null,map__37965))?cljs.core.apply.call(null,cljs.core.hash_map,map__37965):map__37965);var websocket_url = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__37966,callback){var map__37968 = p__37966;var map__37968__$1 = ((cljs.core.seq_QMARK_.call(null,map__37968))?cljs.core.apply.call(null,cljs.core.hash_map,map__37968):map__37968);var msg = map__37968__$1;var dependency_file = cljs.core.get.call(null,map__37968__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__37968__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__37968__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11498__auto__ = dependency_file;if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__37968,map__37968__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__37968,map__37968__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__37969,p__37970){var map__37973 = p__37969;var map__37973__$1 = ((cljs.core.seq_QMARK_.call(null,map__37973))?cljs.core.apply.call(null,cljs.core.hash_map,map__37973):map__37973);var opts = map__37973__$1;var url_rewriter = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__37974 = p__37970;var map__37974__$1 = ((cljs.core.seq_QMARK_.call(null,map__37974))?cljs.core.apply.call(null,cljs.core.hash_map,map__37974):map__37974);var d = map__37974__$1;var file = cljs.core.get.call(null,map__37974__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__37975,p__37976){var map__38018 = p__37975;var map__38018__$1 = ((cljs.core.seq_QMARK_.call(null,map__38018))?cljs.core.apply.call(null,cljs.core.hash_map,map__38018):map__38018);var opts = map__38018__$1;var on_jsload = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__38019 = p__37976;var map__38019__$1 = ((cljs.core.seq_QMARK_.call(null,map__38019))?cljs.core.apply.call(null,cljs.core.hash_map,map__38019):map__38019);var files = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15156__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto__,map__38018,map__38018__$1,opts,on_jsload,before_jsload,map__38019,map__38019__$1,files){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto__,map__38018,map__38018__$1,opts,on_jsload,before_jsload,map__38019,map__38019__$1,files){
return (function (state_38042){var state_val_38043 = (state_38042[(1)]);if((state_val_38043 === (6)))
{var inst_38024 = (state_38042[(7)]);var inst_38033 = (state_38042[(2)]);var inst_38034 = cljs.core.PersistentVector.EMPTY_NODE;var inst_38035 = [inst_38024];var inst_38036 = (new cljs.core.PersistentVector(null,1,(5),inst_38034,inst_38035,null));var inst_38037 = cljs.core.apply.call(null,on_jsload,inst_38036);var state_38042__$1 = (function (){var statearr_38044 = state_38042;(statearr_38044[(8)] = inst_38033);
return statearr_38044;
})();var statearr_38045_38059 = state_38042__$1;(statearr_38045_38059[(2)] = inst_38037);
(statearr_38045_38059[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38043 === (5)))
{var inst_38040 = (state_38042[(2)]);var state_38042__$1 = state_38042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38042__$1,inst_38040);
} else
{if((state_val_38043 === (4)))
{var state_38042__$1 = state_38042;var statearr_38046_38060 = state_38042__$1;(statearr_38046_38060[(2)] = null);
(statearr_38046_38060[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38043 === (3)))
{var inst_38024 = (state_38042[(7)]);var inst_38027 = console.debug("Figwheel: loaded these files");var inst_38028 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38024);var inst_38029 = cljs.core.prn_str.call(null,inst_38028);var inst_38030 = console.log(inst_38029);var inst_38031 = cljs.core.async.timeout.call(null,(10));var state_38042__$1 = (function (){var statearr_38047 = state_38042;(statearr_38047[(9)] = inst_38027);
(statearr_38047[(10)] = inst_38030);
return statearr_38047;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38042__$1,(6),inst_38031);
} else
{if((state_val_38043 === (2)))
{var inst_38024 = (state_38042[(7)]);var inst_38024__$1 = (state_38042[(2)]);var inst_38025 = cljs.core.not_empty.call(null,inst_38024__$1);var state_38042__$1 = (function (){var statearr_38048 = state_38042;(statearr_38048[(7)] = inst_38024__$1);
return statearr_38048;
})();if(cljs.core.truth_(inst_38025))
{var statearr_38049_38061 = state_38042__$1;(statearr_38049_38061[(1)] = (3));
} else
{var statearr_38050_38062 = state_38042__$1;(statearr_38050_38062[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38043 === (1)))
{var inst_38020 = before_jsload.call(null,files);var inst_38021 = figwheel.client.add_request_urls.call(null,opts,files);var inst_38022 = figwheel.client.load_all_js_files.call(null,inst_38021);var state_38042__$1 = (function (){var statearr_38051 = state_38042;(statearr_38051[(11)] = inst_38020);
return statearr_38051;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38042__$1,(2),inst_38022);
} else
{return null;
}
}
}
}
}
}
});})(c__15156__auto__,map__38018,map__38018__$1,opts,on_jsload,before_jsload,map__38019,map__38019__$1,files))
;return ((function (switch__15100__auto__,c__15156__auto__,map__38018,map__38018__$1,opts,on_jsload,before_jsload,map__38019,map__38019__$1,files){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38055 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38055[(0)] = state_machine__15101__auto__);
(statearr_38055[(1)] = (1));
return statearr_38055;
});
var state_machine__15101__auto____1 = (function (state_38042){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38042);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38056){if((e38056 instanceof Object))
{var ex__15104__auto__ = e38056;var statearr_38057_38063 = state_38042;(statearr_38057_38063[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38056;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38064 = state_38042;
state_38042 = G__38064;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38042){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto__,map__38018,map__38018__$1,opts,on_jsload,before_jsload,map__38019,map__38019__$1,files))
})();var state__15158__auto__ = (function (){var statearr_38058 = f__15157__auto__.call(null);(statearr_38058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto__);
return statearr_38058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto__,map__38018,map__38018__$1,opts,on_jsload,before_jsload,map__38019,map__38019__$1,files))
);
return c__15156__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__38065,link_href){var map__38067 = p__38065;var map__38067__$1 = ((cljs.core.seq_QMARK_.call(null,map__38067))?cljs.core.apply.call(null,cljs.core.hash_map,map__38067):map__38067);var request_url = cljs.core.get.call(null,map__38067__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__15156__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto__,parent){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto__,parent){
return (function (state_38088){var state_val_38089 = (state_38088[(1)]);if((state_val_38089 === (2)))
{var inst_38085 = (state_38088[(2)]);var inst_38086 = parent.removeChild(orig_link);var state_38088__$1 = (function (){var statearr_38090 = state_38088;(statearr_38090[(7)] = inst_38085);
return statearr_38090;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38088__$1,inst_38086);
} else
{if((state_val_38089 === (1)))
{var inst_38083 = cljs.core.async.timeout.call(null,(200));var state_38088__$1 = state_38088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38088__$1,(2),inst_38083);
} else
{return null;
}
}
});})(c__15156__auto__,parent))
;return ((function (switch__15100__auto__,c__15156__auto__,parent){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38094 = [null,null,null,null,null,null,null,null];(statearr_38094[(0)] = state_machine__15101__auto__);
(statearr_38094[(1)] = (1));
return statearr_38094;
});
var state_machine__15101__auto____1 = (function (state_38088){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38088);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38095){if((e38095 instanceof Object))
{var ex__15104__auto__ = e38095;var statearr_38096_38098 = state_38088;(statearr_38096_38098[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38095;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38099 = state_38088;
state_38088 = G__38099;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38088){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto__,parent))
})();var state__15158__auto__ = (function (){var statearr_38097 = f__15157__auto__.call(null);(statearr_38097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto__);
return statearr_38097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto__,parent))
);
return c__15156__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__38100){var map__38102 = p__38100;var map__38102__$1 = ((cljs.core.seq_QMARK_.call(null,map__38102))?cljs.core.apply.call(null,cljs.core.hash_map,map__38102):map__38102);var f_data = map__38102__$1;var request_url = cljs.core.get.call(null,map__38102__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38102__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4386__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4386__auto__))
{var link = temp__4386__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__38103,files_msg){var map__38125 = p__38103;var map__38125__$1 = ((cljs.core.seq_QMARK_.call(null,map__38125))?cljs.core.apply.call(null,cljs.core.hash_map,map__38125):map__38125);var opts = map__38125__$1;var on_cssload = cljs.core.get.call(null,map__38125__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__38126_38146 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__38127_38147 = null;var count__38128_38148 = (0);var i__38129_38149 = (0);while(true){
if((i__38129_38149 < count__38128_38148))
{var f_38150 = cljs.core._nth.call(null,chunk__38127_38147,i__38129_38149);figwheel.client.reload_css_file.call(null,f_38150);
{
var G__38151 = seq__38126_38146;
var G__38152 = chunk__38127_38147;
var G__38153 = count__38128_38148;
var G__38154 = (i__38129_38149 + (1));
seq__38126_38146 = G__38151;
chunk__38127_38147 = G__38152;
count__38128_38148 = G__38153;
i__38129_38149 = G__38154;
continue;
}
} else
{var temp__4388__auto___38155 = cljs.core.seq.call(null,seq__38126_38146);if(temp__4388__auto___38155)
{var seq__38126_38156__$1 = temp__4388__auto___38155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38126_38156__$1))
{var c__12268__auto___38157 = cljs.core.chunk_first.call(null,seq__38126_38156__$1);{
var G__38158 = cljs.core.chunk_rest.call(null,seq__38126_38156__$1);
var G__38159 = c__12268__auto___38157;
var G__38160 = cljs.core.count.call(null,c__12268__auto___38157);
var G__38161 = (0);
seq__38126_38146 = G__38158;
chunk__38127_38147 = G__38159;
count__38128_38148 = G__38160;
i__38129_38149 = G__38161;
continue;
}
} else
{var f_38162 = cljs.core.first.call(null,seq__38126_38156__$1);figwheel.client.reload_css_file.call(null,f_38162);
{
var G__38163 = cljs.core.next.call(null,seq__38126_38156__$1);
var G__38164 = null;
var G__38165 = (0);
var G__38166 = (0);
seq__38126_38146 = G__38163;
chunk__38127_38147 = G__38164;
count__38128_38148 = G__38165;
i__38129_38149 = G__38166;
continue;
}
}
} else
{}
}
break;
}
var c__15156__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15156__auto__,map__38125,map__38125__$1,opts,on_cssload){
return (function (){var f__15157__auto__ = (function (){var switch__15100__auto__ = ((function (c__15156__auto__,map__38125,map__38125__$1,opts,on_cssload){
return (function (state_38136){var state_val_38137 = (state_38136[(1)]);if((state_val_38137 === (2)))
{var inst_38132 = (state_38136[(2)]);var inst_38133 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_38134 = on_cssload.call(null,inst_38133);var state_38136__$1 = (function (){var statearr_38138 = state_38136;(statearr_38138[(7)] = inst_38132);
return statearr_38138;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38136__$1,inst_38134);
} else
{if((state_val_38137 === (1)))
{var inst_38130 = cljs.core.async.timeout.call(null,(100));var state_38136__$1 = state_38136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38136__$1,(2),inst_38130);
} else
{return null;
}
}
});})(c__15156__auto__,map__38125,map__38125__$1,opts,on_cssload))
;return ((function (switch__15100__auto__,c__15156__auto__,map__38125,map__38125__$1,opts,on_cssload){
return (function() {
var state_machine__15101__auto__ = null;
var state_machine__15101__auto____0 = (function (){var statearr_38142 = [null,null,null,null,null,null,null,null];(statearr_38142[(0)] = state_machine__15101__auto__);
(statearr_38142[(1)] = (1));
return statearr_38142;
});
var state_machine__15101__auto____1 = (function (state_38136){while(true){
var ret_value__15102__auto__ = (function (){try{while(true){
var result__15103__auto__ = switch__15100__auto__.call(null,state_38136);if(cljs.core.keyword_identical_QMARK_.call(null,result__15103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15103__auto__;
}
break;
}
}catch (e38143){if((e38143 instanceof Object))
{var ex__15104__auto__ = e38143;var statearr_38144_38167 = state_38136;(statearr_38144_38167[(5)] = ex__15104__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38143;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38168 = state_38136;
state_38136 = G__38168;
continue;
}
} else
{return ret_value__15102__auto__;
}
break;
}
});
state_machine__15101__auto__ = function(state_38136){
switch(arguments.length){
case 0:
return state_machine__15101__auto____0.call(this);
case 1:
return state_machine__15101__auto____1.call(this,state_38136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15101__auto____0;
state_machine__15101__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15101__auto____1;
return state_machine__15101__auto__;
})()
;})(switch__15100__auto__,c__15156__auto__,map__38125,map__38125__$1,opts,on_cssload))
})();var state__15158__auto__ = (function (){var statearr_38145 = f__15157__auto__.call(null);(statearr_38145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15156__auto__);
return statearr_38145;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15158__auto__);
});})(c__15156__auto__,map__38125,map__38125__$1,opts,on_cssload))
);
return c__15156__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__38169){var map__38174 = p__38169;var map__38174__$1 = ((cljs.core.seq_QMARK_.call(null,map__38174))?cljs.core.apply.call(null,cljs.core.hash_map,map__38174):map__38174);var opts = map__38174__$1;var on_compile_fail = cljs.core.get.call(null,map__38174__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__38174__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__38174__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__38174__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__38175 = cljs.core._EQ_;var expr__38176 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__38175.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__38176)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38175.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__38176)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38175.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38176)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__38174,map__38174__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj38181 = {"detail":url};return obj38181;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__38182){var map__38184 = p__38182;var map__38184__$1 = ((cljs.core.seq_QMARK_.call(null,map__38184))?cljs.core.apply.call(null,cljs.core.hash_map,map__38184):map__38184);var class$ = cljs.core.get.call(null,map__38184__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__38184__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__38185){var map__38191 = p__38185;var map__38191__$1 = ((cljs.core.seq_QMARK_.call(null,map__38191))?cljs.core.apply.call(null,cljs.core.hash_map,map__38191):map__38191);var ed = map__38191__$1;var exception_data = cljs.core.get.call(null,map__38191__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__38191__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__38192_38196 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__38193_38197 = null;var count__38194_38198 = (0);var i__38195_38199 = (0);while(true){
if((i__38195_38199 < count__38194_38198))
{var msg_38200 = cljs.core._nth.call(null,chunk__38193_38197,i__38195_38199);console.log(msg_38200);
{
var G__38201 = seq__38192_38196;
var G__38202 = chunk__38193_38197;
var G__38203 = count__38194_38198;
var G__38204 = (i__38195_38199 + (1));
seq__38192_38196 = G__38201;
chunk__38193_38197 = G__38202;
count__38194_38198 = G__38203;
i__38195_38199 = G__38204;
continue;
}
} else
{var temp__4388__auto___38205 = cljs.core.seq.call(null,seq__38192_38196);if(temp__4388__auto___38205)
{var seq__38192_38206__$1 = temp__4388__auto___38205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38192_38206__$1))
{var c__12268__auto___38207 = cljs.core.chunk_first.call(null,seq__38192_38206__$1);{
var G__38208 = cljs.core.chunk_rest.call(null,seq__38192_38206__$1);
var G__38209 = c__12268__auto___38207;
var G__38210 = cljs.core.count.call(null,c__12268__auto___38207);
var G__38211 = (0);
seq__38192_38196 = G__38208;
chunk__38193_38197 = G__38209;
count__38194_38198 = G__38210;
i__38195_38199 = G__38211;
continue;
}
} else
{var msg_38212 = cljs.core.first.call(null,seq__38192_38206__$1);console.log(msg_38212);
{
var G__38213 = cljs.core.next.call(null,seq__38192_38206__$1);
var G__38214 = null;
var G__38215 = (0);
var G__38216 = (0);
seq__38192_38196 = G__38213;
chunk__38193_38197 = G__38214;
count__38194_38198 = G__38215;
i__38195_38199 = G__38216;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11498__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11498__auto__))
{return or__11498__auto__;
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
var watch_and_reload__delegate = function (p__38217){var map__38219 = p__38217;var map__38219__$1 = ((cljs.core.seq_QMARK_.call(null,map__38219))?cljs.core.apply.call(null,cljs.core.hash_map,map__38219):map__38219);var opts = map__38219__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__38217 = null;if (arguments.length > 0) {
  p__38217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__38217);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__38220){
var p__38217 = cljs.core.seq(arglist__38220);
return watch_and_reload__delegate(p__38217);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map