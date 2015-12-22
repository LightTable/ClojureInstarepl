if(!lt.util.load.provided_QMARK_('lt.plugins.clojure.instarepl')) {
goog.provide('lt.plugins.clojure.instarepl');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('crate.binding');
goog.require('lt.plugins.clojure');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('cljs.reader');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.watches');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.clojure.instarepl.__BEH__on_eval_sonar = (function __BEH__on_eval_sonar(obj,auto_QMARK_,pos_QMARK_){var ed = new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));var v = lt.plugins.watches.watched_range.call(null,obj,null,null,lt.plugins.clojure.clj_watch);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"local","local",1117049565),true,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,ed),new cljs.core.Keyword(null,"auto?","auto?",1107086306),false,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"start"))], null)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"local","local",1117049565),true,new cljs.core.Keyword(null,"code","code",1016963423),v,new cljs.core.Keyword(null,"auto?","auto?",1107086306),auto_QMARK_,new cljs.core.Keyword(null,"pos","pos",1014015430),(cljs.core.truth_(pos_QMARK_)?lt.objs.editor.__GT_cursor.call(null,ed):null)));var info__$2 = cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"print-length","print-length",3960797560),lt.object.raise_reduce.call(null,obj,new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null));lt.objs.notifos.working.call(null,"");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"origin","origin",4300251800),obj,new cljs.core.Keyword(null,"info","info",1017141280),info__$2,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.clojure.try_connect,new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.clj.sonar","editor.eval.clj.sonar",3250205047)], null)),new cljs.core.Keyword(null,"editor.eval.clj.sonar","editor.eval.clj.sonar",3250205047),info__$2,new cljs.core.Keyword(null,"only","only",1017320222),new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","on-eval-sonar","lt.plugins.clojure.instarepl/on-eval-sonar",4156400393),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__on_eval_sonar,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.clojure.instarepl.__BEH__on_eval_one = (function __BEH__on_eval_one(this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"eval","eval",1017029646),false,new cljs.core.Keyword(null,"pos","pos",1014015430));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","on-eval-one","lt.plugins.clojure.instarepl/on-eval-one",4133016684),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__on_eval_one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.clojure.instarepl.__BEH__eval_on_change = (function __BEH__eval_on_change(this$){var parent = cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(parent)))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"eval","eval",1017029646),true);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","eval-on-change","lt.plugins.clojure.instarepl/eval-on-change",4136318206),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__eval_on_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),300);
lt.plugins.clojure.instarepl.__BEH__sonar_result = (function __BEH__sonar_result(this$,res){lt.objs.notifos.done_working.call(null);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null));
lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),new cljs.core.Keyword(null,"ns","ns",1013907767),(function (){var or__4884__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "user";
}
})())], null));
return lt.plugins.clojure.instarepl.update_res.call(null,this$,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","sonar-result","lt.plugins.clojure.instarepl/sonar-result",4674352776),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__sonar_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.sonar.result","editor.eval.clj.sonar.result",4675879832),null], null), null));
lt.plugins.clojure.instarepl.__BEH__no_op = (function __BEH__no_op(this$){return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","no-op","lt.plugins.clojure.instarepl/no-op",1616664318),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__no_op,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.sonar.noop","editor.eval.clj.sonar.noop",633248029),null], null), null));
lt.plugins.clojure.instarepl.__BEH__clj_exception = (function __BEH__clj_exception(this$,ex){lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(ex)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","clj-exception","lt.plugins.clojure.instarepl/clj-exception",4476668972),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__clj_exception,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),null], null), null));
lt.plugins.clojure.instarepl.__BEH__destroy_on_close = (function __BEH__destroy_on_close(this$){return lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"close","close",1108660586));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","destroy-on-close","lt.plugins.clojure.instarepl/destroy-on-close",3503448974),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__destroy_on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.clojure.instarepl.__BEH__cleanup_on_destroy = (function __BEH__cleanup_on_destroy(this$){var seq__6515 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__6516 = null;var count__6517 = 0;var i__6518 = 0;while(true){
if((i__6518 < count__6517))
{var vec__6519 = cljs.core._nth.call(null,chunk__6516,i__6518);var _ = cljs.core.nth.call(null,vec__6519,0,null);var w = cljs.core.nth.call(null,vec__6519,1,null);lt.object.raise.call(null,w,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__6558 = seq__6515;
var G__6559 = chunk__6516;
var G__6560 = count__6517;
var G__6561 = (i__6518 + 1);
seq__6515 = G__6558;
chunk__6516 = G__6559;
count__6517 = G__6560;
i__6518 = G__6561;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6515);if(temp__4092__auto__)
{var seq__6515__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6515__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6515__$1);{
var G__6562 = cljs.core.chunk_rest.call(null,seq__6515__$1);
var G__6563 = c__5632__auto__;
var G__6564 = cljs.core.count.call(null,c__5632__auto__);
var G__6565 = 0;
seq__6515 = G__6562;
chunk__6516 = G__6563;
count__6517 = G__6564;
i__6518 = G__6565;
continue;
}
} else
{var vec__6520 = cljs.core.first.call(null,seq__6515__$1);var _ = cljs.core.nth.call(null,vec__6520,0,null);var w = cljs.core.nth.call(null,vec__6520,1,null);lt.object.raise.call(null,w,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__6566 = cljs.core.next.call(null,seq__6515__$1);
var G__6567 = null;
var G__6568 = 0;
var G__6569 = 0;
seq__6515 = G__6566;
chunk__6516 = G__6567;
count__6517 = G__6568;
i__6518 = G__6569;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","cleanup-on-destroy","lt.plugins.clojure.instarepl/cleanup-on-destroy",2258310006),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__cleanup_on_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.clojure.instarepl.__BEH__dirty_parent = (function __BEH__dirty_parent(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","dirty-parent","lt.plugins.clojure.instarepl/dirty-parent",1369918886),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__dirty_parent,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),null,new cljs.core.Keyword(null,"clean","clean",1108650427),null], null), null));
lt.plugins.clojure.instarepl.__BEH__close_parent = (function __BEH__close_parent(this$){return lt.object.destroy_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","close-parent","lt.plugins.clojure.instarepl/close-parent",954399920),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__close_parent,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.clojure.instarepl.__BEH__set_parent_title = (function __BEH__set_parent_title(this$){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.clj","editor.clj",3751346322)], null));
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","set-parent-title","lt.plugins.clojure.instarepl/set-parent-title",1782234505),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__set_parent_title,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-changed","path-changed",1619241086),null,new cljs.core.Keyword(null,"save-as","save-as",2886670836),null], null), null));
lt.plugins.clojure.instarepl.__BEH__on_show_refresh_eds = (function __BEH__on_show_refresh_eds(this$){lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"show","show",1017433711));
lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lt.objs.editor.focus.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","on-show-refresh-eds","lt.plugins.clojure.instarepl/on-show-refresh-eds",4726777769),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__on_show_refresh_eds,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));
lt.plugins.clojure.instarepl.__BEH__reroute_watches = (function __BEH__reroute_watches(this$,r){return lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"editor.eval.clj.watch","editor.eval.clj.watch",3253487875),r);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","reroute-watches","lt.plugins.clojure.instarepl/reroute-watches",4417161607),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__reroute_watches,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.watch","editor.eval.clj.watch",3253487875),null], null), null));
lt.plugins.clojure.instarepl.__BEH__on_focus_focus_ed = (function __BEH__on_focus_focus_ed(this$){return lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"focus!","focus!",4039653819));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","on-focus-focus-ed","lt.plugins.clojure.instarepl/on-focus-focus-ed",2511209304),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__on_focus_focus_ed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus!","focus!",4039653819),null], null), null));
lt.plugins.clojure.instarepl.__BEH__live_toggle = (function __BEH__live_toggle(this$){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"clear-inline-results","clear-inline-results",1542062004));
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),cljs.core.not.call(null,new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null));
return lt.objs.editor.focus.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","live-toggle","lt.plugins.clojure.instarepl/live-toggle",4427655414),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__live_toggle,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717),null], null), null));
lt.plugins.clojure.instarepl.default_content = ";; Anything you type in here will be executed\n;; immediately with the results shown on the\n;; right.\n";
lt.plugins.clojure.instarepl.clean_ex = (function clean_ex(x){return x.replace((new RegExp("^.*user/eval[\\s\\S]*","gmi")),"");
});
lt.plugins.clojure.instarepl.__GT_type_BAR_val = (function __GT_type_BAR_val(r,vs){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",1017410644).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"result","result",4374444943)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["result",cljs.core.last.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r))], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",1017410644).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"ex","ex",1013907493)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exception",lt.plugins.clojure.instarepl.clean_ex.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r)))], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["use",cljs.core.get.call(null,vs,new cljs.core.Keyword(null,"root","root",1017410644).cljs$core$IFn$_invoke$arity$1(r))], null);
} else
{return null;
}
}
}
});
lt.plugins.clojure.instarepl.inline = (function inline(this$,res,opts){return lt.object.create.call(null,new cljs.core.Keyword("lt.objs.eval","inline-result","lt.objs.eval/inline-result",1807255869),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ed","ed",1013907473),this$,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"inline","inline",4124874251))),new cljs.core.Keyword(null,"instarepl","instarepl",1043123260),true,new cljs.core.Keyword(null,"opts","opts",1017322386),opts,new cljs.core.Keyword(null,"trunc-length","trunc-length",2555961753),100,new cljs.core.Keyword(null,"result","result",4374444943),res,new cljs.core.Keyword(null,"loc","loc",1014011570),opts,new cljs.core.Keyword(null,"line","line",1017226086),lt.objs.editor.line_handle.call(null,this$,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(opts))], null));
});
lt.plugins.clojure.instarepl.update_res = (function update_res(this$,results){var main = new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var vs = cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"vals","vals",1017516260).cljs$core$IFn$_invoke$arity$1(results));var repls = cljs.core.distinct.call(null,new cljs.core.Keyword(null,"uses","uses",1017503550).cljs$core$IFn$_invoke$arity$1(results));var out = new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(results);var instarepl_atoms = cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"instarepl","instarepl",1043123260),cljs.core.deref),cljs.core.vals.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main))));var non_instarepl_widgets = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"instarepl","instarepl",1043123260),cljs.core.deref,cljs.core.second),new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main))));return lt.objs.editor.operation.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),((function (main,vs,repls,out,instarepl_atoms,non_instarepl_widgets){
return (function (){var seq__6533_6570 = cljs.core.seq.call(null,instarepl_atoms);var chunk__6534_6571 = null;var count__6535_6572 = 0;var i__6536_6573 = 0;while(true){
if((i__6536_6573 < count__6535_6572))
{var w_6574 = cljs.core._nth.call(null,chunk__6534_6571,i__6536_6573);lt.object.raise.call(null,w_6574,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__6575 = seq__6533_6570;
var G__6576 = chunk__6534_6571;
var G__6577 = count__6535_6572;
var G__6578 = (i__6536_6573 + 1);
seq__6533_6570 = G__6575;
chunk__6534_6571 = G__6576;
count__6535_6572 = G__6577;
i__6536_6573 = G__6578;
continue;
}
} else
{var temp__4092__auto___6579 = cljs.core.seq.call(null,seq__6533_6570);if(temp__4092__auto___6579)
{var seq__6533_6580__$1 = temp__4092__auto___6579;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6533_6580__$1))
{var c__5632__auto___6581 = cljs.core.chunk_first.call(null,seq__6533_6580__$1);{
var G__6582 = cljs.core.chunk_rest.call(null,seq__6533_6580__$1);
var G__6583 = c__5632__auto___6581;
var G__6584 = cljs.core.count.call(null,c__5632__auto___6581);
var G__6585 = 0;
seq__6533_6570 = G__6582;
chunk__6534_6571 = G__6583;
count__6535_6572 = G__6584;
i__6536_6573 = G__6585;
continue;
}
} else
{var w_6586 = cljs.core.first.call(null,seq__6533_6580__$1);lt.object.raise.call(null,w_6586,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__6587 = cljs.core.next.call(null,seq__6533_6580__$1);
var G__6588 = null;
var G__6589 = 0;
var G__6590 = 0;
seq__6533_6570 = G__6587;
chunk__6534_6571 = G__6588;
count__6535_6572 = G__6589;
i__6536_6573 = G__6590;
continue;
}
}
} else
{}
}
break;
}
return lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"widgets","widgets",2354242081),cljs.core.into.call(null,non_instarepl_widgets,cljs.core.doall.call(null,(function (){var iter__5601__auto__ = ((function (main,vs,repls,out,instarepl_atoms,non_instarepl_widgets){
return (function iter__6537(s__6538){return (new cljs.core.LazySeq(null,((function (main,vs,repls,out,instarepl_atoms,non_instarepl_widgets){
return (function (){var s__6538__$1 = s__6538;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6538__$1);if(temp__4092__auto__)
{var s__6538__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6538__$2))
{var c__5599__auto__ = cljs.core.chunk_first.call(null,s__6538__$2);var size__5600__auto__ = cljs.core.count.call(null,c__5599__auto__);var b__6540 = cljs.core.chunk_buffer.call(null,size__5600__auto__);if((function (){var i__6539 = 0;while(true){
if((i__6539 < size__5600__auto__))
{var r = cljs.core._nth.call(null,c__5599__auto__,i__6539);var vec__6543 = lt.plugins.clojure.instarepl.__GT_type_BAR_val.call(null,r,vs);var type = cljs.core.nth.call(null,vec__6543,0,null);var val = cljs.core.nth.call(null,vec__6543,1,null);var line = (cljs.core.first.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r)) - 1);var ch = cljs.core.second.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r));var widget = lt.plugins.clojure.instarepl.inline.call(null,main,val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"line","line",1017226086),line], null));cljs.core.chunk_append.call(null,b__6540,(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,line,ch], null),widget],null)));
{
var G__6591 = (i__6539 + 1);
i__6539 = G__6591;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6540),iter__6537.call(null,cljs.core.chunk_rest.call(null,s__6538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6540),null);
}
} else
{var r = cljs.core.first.call(null,s__6538__$2);var vec__6544 = lt.plugins.clojure.instarepl.__GT_type_BAR_val.call(null,r,vs);var type = cljs.core.nth.call(null,vec__6544,0,null);var val = cljs.core.nth.call(null,vec__6544,1,null);var line = (cljs.core.first.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r)) - 1);var ch = cljs.core.second.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r));var widget = lt.plugins.clojure.instarepl.inline.call(null,main,val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"line","line",1017226086),line], null));return cljs.core.cons.call(null,(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,line,ch], null),widget],null)),iter__6537.call(null,cljs.core.rest.call(null,s__6538__$2)));
}
} else
{return null;
}
break;
}
});})(main,vs,repls,out,instarepl_atoms,non_instarepl_widgets))
,null,null));
});})(main,vs,repls,out,instarepl_atoms,non_instarepl_widgets))
;return iter__5601__auto__.call(null,repls);
})()))], null));
});})(main,vs,repls,out,instarepl_atoms,non_instarepl_widgets))
);
});
lt.plugins.clojure.instarepl.__BEH__start_content = (function __BEH__start_content(this$,res,content){return content;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","start-content","lt.plugins.clojure.instarepl/start-content",4699205791),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.clojure.instarepl.__BEH__start_content,new cljs.core.Keyword(null,"desc","desc",1016984067),"Instarepl: Set start content",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"content"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-content+","start-content+",2652166991),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.clojure.instarepl.live_toggle = (function live_toggle(this$){var e__6307__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__6545_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__6545_SHARP_))?null:"off"))].join('');
}))], null),"live"], null));var seq__6552_6592 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6307__auto__){
return (function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
});})(e__6307__auto__))
], null)));var chunk__6553_6593 = null;var count__6554_6594 = 0;var i__6555_6595 = 0;while(true){
if((i__6555_6595 < count__6554_6594))
{var vec__6556_6596 = cljs.core._nth.call(null,chunk__6553_6593,i__6555_6595);var ev__6308__auto___6597 = cljs.core.nth.call(null,vec__6556_6596,0,null);var func__6309__auto___6598 = cljs.core.nth.call(null,vec__6556_6596,1,null);lt.util.dom.on.call(null,e__6307__auto__,ev__6308__auto___6597,func__6309__auto___6598);
{
var G__6599 = seq__6552_6592;
var G__6600 = chunk__6553_6593;
var G__6601 = count__6554_6594;
var G__6602 = (i__6555_6595 + 1);
seq__6552_6592 = G__6599;
chunk__6553_6593 = G__6600;
count__6554_6594 = G__6601;
i__6555_6595 = G__6602;
continue;
}
} else
{var temp__4092__auto___6603 = cljs.core.seq.call(null,seq__6552_6592);if(temp__4092__auto___6603)
{var seq__6552_6604__$1 = temp__4092__auto___6603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6552_6604__$1))
{var c__5632__auto___6605 = cljs.core.chunk_first.call(null,seq__6552_6604__$1);{
var G__6606 = cljs.core.chunk_rest.call(null,seq__6552_6604__$1);
var G__6607 = c__5632__auto___6605;
var G__6608 = cljs.core.count.call(null,c__5632__auto___6605);
var G__6609 = 0;
seq__6552_6592 = G__6606;
chunk__6553_6593 = G__6607;
count__6554_6594 = G__6608;
i__6555_6595 = G__6609;
continue;
}
} else
{var vec__6557_6610 = cljs.core.first.call(null,seq__6552_6604__$1);var ev__6308__auto___6611 = cljs.core.nth.call(null,vec__6557_6610,0,null);var func__6309__auto___6612 = cljs.core.nth.call(null,vec__6557_6610,1,null);lt.util.dom.on.call(null,e__6307__auto__,ev__6308__auto___6611,func__6309__auto___6612);
{
var G__6613 = cljs.core.next.call(null,seq__6552_6604__$1);
var G__6614 = null;
var G__6615 = 0;
var G__6616 = 0;
seq__6552_6592 = G__6613;
chunk__6553_6593 = G__6614;
count__6554_6594 = G__6615;
i__6555_6595 = G__6616;
continue;
}
}
} else
{}
}
break;
}
return e__6307__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","instarepl","lt.plugins.clojure.instarepl/instarepl",1692574563),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instarepl","instarepl",1043123260),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Instarepl",new cljs.core.Keyword(null,"live","live",1017226334),true,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){var main = lt.object.add_tags.call(null,lt.object.remove_tags.call(null,lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mime","mime",1017255846),"text/x-clojure",new cljs.core.Keyword(null,"content","content",1965434859),"",new cljs.core.Keyword(null,"ns","ns",1013907767),"user"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.clj","editor.clj",3751346322)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.clj.instarepl","editor.clj.instarepl",2477999342),new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null));lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",1111596255),this$], null));
lt.objs.editor.set_val.call(null,main,(function (){var or__4884__auto__ = lt.object.raise_reduce.call(null,main,new cljs.core.Keyword(null,"start-content+","start-content+",2652166991));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.plugins.clojure.instarepl.default_content;
}
})());
lt.objs.editor.clear_history.call(null,main);
lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),false,new cljs.core.Keyword(null,"editor.generation","editor.generation",4482163627),lt.objs.editor.__GT_generation.call(null,main)], null));
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",1017248043),main,new cljs.core.Keyword(null,"dirty","dirty",1109497668),false], null));
lt.objs.editor._PLUS_class.call(null,main,new cljs.core.Keyword(null,"main","main",1017248043));
lt.objs.editor.move_cursor.call(null,main,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),10000,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),lt.plugins.clojure.instarepl.live_toggle.call(null,this$),lt.object.__GT_content.call(null,main),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.error","p.error",3043794556),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146))], null)], null);
}));
lt.plugins.clojure.instarepl.add = (function add(){var instarepl = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","instarepl","lt.plugins.clojure.instarepl/instarepl",1692574563));lt.objs.tabs.add_BANG_.call(null,instarepl);
lt.objs.tabs.active_BANG_.call(null,instarepl);
return instarepl;
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"instarepl-current","instarepl-current",1922368232),new cljs.core.Keyword(null,"desc","desc",1016984067),"Instarepl: Make current editor an instarepl",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var cur = lt.objs.editor.pool.last_active.call(null);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cur));if(cljs.core.truth_(cur))
{if(cljs.core.not.call(null,lt.object.has_tag_QMARK_.call(null,cur,new cljs.core.Keyword(null,"editor.clj","editor.clj",3751346322))))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Instarepl only works for Clojure",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{var content = lt.objs.editor.__GT_val.call(null,cur);var dirty = new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cur));var inst = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.clojure.instarepl","instarepl","lt.plugins.clojure.instarepl/instarepl",1692574563));var ed = new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,inst));lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"widgets","widgets",2354242081),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dirty","dirty",1109497668),dirty], null));
lt.object.merge_BANG_.call(null,inst,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"dirty","dirty",1109497668),dirty], null));
lt.object.remove_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null));
lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null));
lt.objs.editor.set_val.call(null,ed,content);
lt.object.raise.call(null,cur,new cljs.core.Keyword(null,"close.force","close.force",4409585383));
lt.objs.tabs.add_BANG_.call(null,inst);
return lt.objs.tabs.active_BANG_.call(null,inst);
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"instarepl","instarepl",1043123260),new cljs.core.Keyword(null,"desc","desc",1016984067),"Instarepl: Open a clojure instarepl",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.clojure.instarepl.add.call(null);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"instarepl.toggle-live","instarepl.toggle-live",2218373139),new cljs.core.Keyword(null,"desc","desc",1016984067),"Instarepl: Toggle live mode",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
{return lt.object.raise.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
} else
{return null;
}
} else
{return null;
}
})], null));
}

//# sourceMappingURL=clojureinstarepl_compiled.js.map