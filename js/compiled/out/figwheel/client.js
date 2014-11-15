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
var log__delegate = function (p__17998,args){var map__18000 = p__17998;var map__18000__$1 = ((cljs.core.seq_QMARK_.call(null,map__18000))?cljs.core.apply.call(null,cljs.core.hash_map,map__18000):map__18000);var debug = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__17998,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__17998,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__18001){
var p__17998 = cljs.core.first(arglist__18001);
var args = cljs.core.rest(arglist__18001);
return log__delegate(p__17998,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__18002){var map__18004 = p__18002;var map__18004__$1 = ((cljs.core.seq_QMARK_.call(null,map__18004))?cljs.core.apply.call(null,cljs.core.hash_map,map__18004):map__18004);var websocket_url = cljs.core.get.call(null,map__18004__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__18005,callback){var map__18007 = p__18005;var map__18007__$1 = ((cljs.core.seq_QMARK_.call(null,map__18007))?cljs.core.apply.call(null,cljs.core.hash_map,map__18007):map__18007);var msg = map__18007__$1;var dependency_file = cljs.core.get.call(null,map__18007__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__18007__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__18007__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11495__auto__ = dependency_file;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__18007,map__18007__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__18007,map__18007__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__18008,p__18009){var map__18012 = p__18008;var map__18012__$1 = ((cljs.core.seq_QMARK_.call(null,map__18012))?cljs.core.apply.call(null,cljs.core.hash_map,map__18012):map__18012);var opts = map__18012__$1;var url_rewriter = cljs.core.get.call(null,map__18012__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__18013 = p__18009;var map__18013__$1 = ((cljs.core.seq_QMARK_.call(null,map__18013))?cljs.core.apply.call(null,cljs.core.hash_map,map__18013):map__18013);var d = map__18013__$1;var file = cljs.core.get.call(null,map__18013__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__18014,p__18015){var map__18057 = p__18014;var map__18057__$1 = ((cljs.core.seq_QMARK_.call(null,map__18057))?cljs.core.apply.call(null,cljs.core.hash_map,map__18057):map__18057);var opts = map__18057__$1;var on_jsload = cljs.core.get.call(null,map__18057__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__18057__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__18058 = p__18015;var map__18058__$1 = ((cljs.core.seq_QMARK_.call(null,map__18058))?cljs.core.apply.call(null,cljs.core.hash_map,map__18058):map__18058);var files = cljs.core.get.call(null,map__18058__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__14664__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto__,map__18057,map__18057__$1,opts,on_jsload,before_jsload,map__18058,map__18058__$1,files){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto__,map__18057,map__18057__$1,opts,on_jsload,before_jsload,map__18058,map__18058__$1,files){
return (function (state_18081){var state_val_18082 = (state_18081[(1)]);if((state_val_18082 === (6)))
{var inst_18063 = (state_18081[(7)]);var inst_18072 = (state_18081[(2)]);var inst_18073 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18074 = [inst_18063];var inst_18075 = (new cljs.core.PersistentVector(null,1,(5),inst_18073,inst_18074,null));var inst_18076 = cljs.core.apply.call(null,on_jsload,inst_18075);var state_18081__$1 = (function (){var statearr_18083 = state_18081;(statearr_18083[(8)] = inst_18072);
return statearr_18083;
})();var statearr_18084_18098 = state_18081__$1;(statearr_18084_18098[(2)] = inst_18076);
(statearr_18084_18098[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18082 === (5)))
{var inst_18079 = (state_18081[(2)]);var state_18081__$1 = state_18081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18081__$1,inst_18079);
} else
{if((state_val_18082 === (4)))
{var state_18081__$1 = state_18081;var statearr_18085_18099 = state_18081__$1;(statearr_18085_18099[(2)] = null);
(statearr_18085_18099[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18082 === (3)))
{var inst_18063 = (state_18081[(7)]);var inst_18066 = console.debug("Figwheel: loaded these files");var inst_18067 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18063);var inst_18068 = cljs.core.prn_str.call(null,inst_18067);var inst_18069 = console.log(inst_18068);var inst_18070 = cljs.core.async.timeout.call(null,(10));var state_18081__$1 = (function (){var statearr_18086 = state_18081;(statearr_18086[(9)] = inst_18066);
(statearr_18086[(10)] = inst_18069);
return statearr_18086;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18081__$1,(6),inst_18070);
} else
{if((state_val_18082 === (2)))
{var inst_18063 = (state_18081[(7)]);var inst_18063__$1 = (state_18081[(2)]);var inst_18064 = cljs.core.not_empty.call(null,inst_18063__$1);var state_18081__$1 = (function (){var statearr_18087 = state_18081;(statearr_18087[(7)] = inst_18063__$1);
return statearr_18087;
})();if(cljs.core.truth_(inst_18064))
{var statearr_18088_18100 = state_18081__$1;(statearr_18088_18100[(1)] = (3));
} else
{var statearr_18089_18101 = state_18081__$1;(statearr_18089_18101[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18082 === (1)))
{var inst_18059 = before_jsload.call(null,files);var inst_18060 = figwheel.client.add_request_urls.call(null,opts,files);var inst_18061 = figwheel.client.load_all_js_files.call(null,inst_18060);var state_18081__$1 = (function (){var statearr_18090 = state_18081;(statearr_18090[(11)] = inst_18059);
return statearr_18090;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18081__$1,(2),inst_18061);
} else
{return null;
}
}
}
}
}
}
});})(c__14664__auto__,map__18057,map__18057__$1,opts,on_jsload,before_jsload,map__18058,map__18058__$1,files))
;return ((function (switch__14608__auto__,c__14664__auto__,map__18057,map__18057__$1,opts,on_jsload,before_jsload,map__18058,map__18058__$1,files){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18094 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18094[(0)] = state_machine__14609__auto__);
(statearr_18094[(1)] = (1));
return statearr_18094;
});
var state_machine__14609__auto____1 = (function (state_18081){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18081);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18095){if((e18095 instanceof Object))
{var ex__14612__auto__ = e18095;var statearr_18096_18102 = state_18081;(statearr_18096_18102[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18095;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18103 = state_18081;
state_18081 = G__18103;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18081){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto__,map__18057,map__18057__$1,opts,on_jsload,before_jsload,map__18058,map__18058__$1,files))
})();var state__14666__auto__ = (function (){var statearr_18097 = f__14665__auto__.call(null);(statearr_18097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto__);
return statearr_18097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto__,map__18057,map__18057__$1,opts,on_jsload,before_jsload,map__18058,map__18058__$1,files))
);
return c__14664__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__18104,link_href){var map__18106 = p__18104;var map__18106__$1 = ((cljs.core.seq_QMARK_.call(null,map__18106))?cljs.core.apply.call(null,cljs.core.hash_map,map__18106):map__18106);var request_url = cljs.core.get.call(null,map__18106__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__18106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__14664__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto__,parent){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto__,parent){
return (function (state_18127){var state_val_18128 = (state_18127[(1)]);if((state_val_18128 === (2)))
{var inst_18124 = (state_18127[(2)]);var inst_18125 = parent.removeChild(orig_link);var state_18127__$1 = (function (){var statearr_18129 = state_18127;(statearr_18129[(7)] = inst_18124);
return statearr_18129;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18127__$1,inst_18125);
} else
{if((state_val_18128 === (1)))
{var inst_18122 = cljs.core.async.timeout.call(null,(200));var state_18127__$1 = state_18127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18127__$1,(2),inst_18122);
} else
{return null;
}
}
});})(c__14664__auto__,parent))
;return ((function (switch__14608__auto__,c__14664__auto__,parent){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18133 = [null,null,null,null,null,null,null,null];(statearr_18133[(0)] = state_machine__14609__auto__);
(statearr_18133[(1)] = (1));
return statearr_18133;
});
var state_machine__14609__auto____1 = (function (state_18127){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18127);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18134){if((e18134 instanceof Object))
{var ex__14612__auto__ = e18134;var statearr_18135_18137 = state_18127;(statearr_18135_18137[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18127);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18134;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18138 = state_18127;
state_18127 = G__18138;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18127){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto__,parent))
})();var state__14666__auto__ = (function (){var statearr_18136 = f__14665__auto__.call(null);(statearr_18136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto__);
return statearr_18136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto__,parent))
);
return c__14664__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__18139){var map__18141 = p__18139;var map__18141__$1 = ((cljs.core.seq_QMARK_.call(null,map__18141))?cljs.core.apply.call(null,cljs.core.hash_map,map__18141):map__18141);var f_data = map__18141__$1;var request_url = cljs.core.get.call(null,map__18141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__18141__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4386__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4386__auto__))
{var link = temp__4386__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__18142,files_msg){var map__18164 = p__18142;var map__18164__$1 = ((cljs.core.seq_QMARK_.call(null,map__18164))?cljs.core.apply.call(null,cljs.core.hash_map,map__18164):map__18164);var opts = map__18164__$1;var on_cssload = cljs.core.get.call(null,map__18164__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__18165_18185 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__18166_18186 = null;var count__18167_18187 = (0);var i__18168_18188 = (0);while(true){
if((i__18168_18188 < count__18167_18187))
{var f_18189 = cljs.core._nth.call(null,chunk__18166_18186,i__18168_18188);figwheel.client.reload_css_file.call(null,f_18189);
{
var G__18190 = seq__18165_18185;
var G__18191 = chunk__18166_18186;
var G__18192 = count__18167_18187;
var G__18193 = (i__18168_18188 + (1));
seq__18165_18185 = G__18190;
chunk__18166_18186 = G__18191;
count__18167_18187 = G__18192;
i__18168_18188 = G__18193;
continue;
}
} else
{var temp__4388__auto___18194 = cljs.core.seq.call(null,seq__18165_18185);if(temp__4388__auto___18194)
{var seq__18165_18195__$1 = temp__4388__auto___18194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18165_18195__$1))
{var c__12265__auto___18196 = cljs.core.chunk_first.call(null,seq__18165_18195__$1);{
var G__18197 = cljs.core.chunk_rest.call(null,seq__18165_18195__$1);
var G__18198 = c__12265__auto___18196;
var G__18199 = cljs.core.count.call(null,c__12265__auto___18196);
var G__18200 = (0);
seq__18165_18185 = G__18197;
chunk__18166_18186 = G__18198;
count__18167_18187 = G__18199;
i__18168_18188 = G__18200;
continue;
}
} else
{var f_18201 = cljs.core.first.call(null,seq__18165_18195__$1);figwheel.client.reload_css_file.call(null,f_18201);
{
var G__18202 = cljs.core.next.call(null,seq__18165_18195__$1);
var G__18203 = null;
var G__18204 = (0);
var G__18205 = (0);
seq__18165_18185 = G__18202;
chunk__18166_18186 = G__18203;
count__18167_18187 = G__18204;
i__18168_18188 = G__18205;
continue;
}
}
} else
{}
}
break;
}
var c__14664__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__14664__auto__,map__18164,map__18164__$1,opts,on_cssload){
return (function (){var f__14665__auto__ = (function (){var switch__14608__auto__ = ((function (c__14664__auto__,map__18164,map__18164__$1,opts,on_cssload){
return (function (state_18175){var state_val_18176 = (state_18175[(1)]);if((state_val_18176 === (2)))
{var inst_18171 = (state_18175[(2)]);var inst_18172 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_18173 = on_cssload.call(null,inst_18172);var state_18175__$1 = (function (){var statearr_18177 = state_18175;(statearr_18177[(7)] = inst_18171);
return statearr_18177;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18175__$1,inst_18173);
} else
{if((state_val_18176 === (1)))
{var inst_18169 = cljs.core.async.timeout.call(null,(100));var state_18175__$1 = state_18175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18175__$1,(2),inst_18169);
} else
{return null;
}
}
});})(c__14664__auto__,map__18164,map__18164__$1,opts,on_cssload))
;return ((function (switch__14608__auto__,c__14664__auto__,map__18164,map__18164__$1,opts,on_cssload){
return (function() {
var state_machine__14609__auto__ = null;
var state_machine__14609__auto____0 = (function (){var statearr_18181 = [null,null,null,null,null,null,null,null];(statearr_18181[(0)] = state_machine__14609__auto__);
(statearr_18181[(1)] = (1));
return statearr_18181;
});
var state_machine__14609__auto____1 = (function (state_18175){while(true){
var ret_value__14610__auto__ = (function (){try{while(true){
var result__14611__auto__ = switch__14608__auto__.call(null,state_18175);if(cljs.core.keyword_identical_QMARK_.call(null,result__14611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__14611__auto__;
}
break;
}
}catch (e18182){if((e18182 instanceof Object))
{var ex__14612__auto__ = e18182;var statearr_18183_18206 = state_18175;(statearr_18183_18206[(5)] = ex__14612__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18182;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18207 = state_18175;
state_18175 = G__18207;
continue;
}
} else
{return ret_value__14610__auto__;
}
break;
}
});
state_machine__14609__auto__ = function(state_18175){
switch(arguments.length){
case 0:
return state_machine__14609__auto____0.call(this);
case 1:
return state_machine__14609__auto____1.call(this,state_18175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14609__auto____0;
state_machine__14609__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14609__auto____1;
return state_machine__14609__auto__;
})()
;})(switch__14608__auto__,c__14664__auto__,map__18164,map__18164__$1,opts,on_cssload))
})();var state__14666__auto__ = (function (){var statearr_18184 = f__14665__auto__.call(null);(statearr_18184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14664__auto__);
return statearr_18184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14666__auto__);
});})(c__14664__auto__,map__18164,map__18164__$1,opts,on_cssload))
);
return c__14664__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__18208){var map__18213 = p__18208;var map__18213__$1 = ((cljs.core.seq_QMARK_.call(null,map__18213))?cljs.core.apply.call(null,cljs.core.hash_map,map__18213):map__18213);var opts = map__18213__$1;var on_compile_fail = cljs.core.get.call(null,map__18213__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__18213__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__18213__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__18213__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__18214 = cljs.core._EQ_;var expr__18215 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__18214.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__18215)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__18214.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__18215)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__18214.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__18215)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__18213,map__18213__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj18220 = {"detail":url};return obj18220;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__18221){var map__18223 = p__18221;var map__18223__$1 = ((cljs.core.seq_QMARK_.call(null,map__18223))?cljs.core.apply.call(null,cljs.core.hash_map,map__18223):map__18223);var class$ = cljs.core.get.call(null,map__18223__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__18223__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__18224){var map__18230 = p__18224;var map__18230__$1 = ((cljs.core.seq_QMARK_.call(null,map__18230))?cljs.core.apply.call(null,cljs.core.hash_map,map__18230):map__18230);var ed = map__18230__$1;var exception_data = cljs.core.get.call(null,map__18230__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__18230__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__18231_18235 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__18232_18236 = null;var count__18233_18237 = (0);var i__18234_18238 = (0);while(true){
if((i__18234_18238 < count__18233_18237))
{var msg_18239 = cljs.core._nth.call(null,chunk__18232_18236,i__18234_18238);console.log(msg_18239);
{
var G__18240 = seq__18231_18235;
var G__18241 = chunk__18232_18236;
var G__18242 = count__18233_18237;
var G__18243 = (i__18234_18238 + (1));
seq__18231_18235 = G__18240;
chunk__18232_18236 = G__18241;
count__18233_18237 = G__18242;
i__18234_18238 = G__18243;
continue;
}
} else
{var temp__4388__auto___18244 = cljs.core.seq.call(null,seq__18231_18235);if(temp__4388__auto___18244)
{var seq__18231_18245__$1 = temp__4388__auto___18244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18231_18245__$1))
{var c__12265__auto___18246 = cljs.core.chunk_first.call(null,seq__18231_18245__$1);{
var G__18247 = cljs.core.chunk_rest.call(null,seq__18231_18245__$1);
var G__18248 = c__12265__auto___18246;
var G__18249 = cljs.core.count.call(null,c__12265__auto___18246);
var G__18250 = (0);
seq__18231_18235 = G__18247;
chunk__18232_18236 = G__18248;
count__18233_18237 = G__18249;
i__18234_18238 = G__18250;
continue;
}
} else
{var msg_18251 = cljs.core.first.call(null,seq__18231_18245__$1);console.log(msg_18251);
{
var G__18252 = cljs.core.next.call(null,seq__18231_18245__$1);
var G__18253 = null;
var G__18254 = (0);
var G__18255 = (0);
seq__18231_18235 = G__18252;
chunk__18232_18236 = G__18253;
count__18233_18237 = G__18254;
i__18234_18238 = G__18255;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11495__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
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
var watch_and_reload__delegate = function (p__18256){var map__18258 = p__18256;var map__18258__$1 = ((cljs.core.seq_QMARK_.call(null,map__18258))?cljs.core.apply.call(null,cljs.core.hash_map,map__18258):map__18258);var opts = map__18258__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__18256 = null;if (arguments.length > 0) {
  p__18256 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__18256);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__18259){
var p__18256 = cljs.core.seq(arglist__18259);
return watch_and_reload__delegate(p__18256);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map