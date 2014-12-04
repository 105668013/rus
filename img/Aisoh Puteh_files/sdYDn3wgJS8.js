/*!CK:2748869115!*//*1416274293,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["zziRa"]); }

__d("BusinessConf",[],function(a,b,c,d,e,f){e.exports={DOMAIN:"business",BIZ_ID_PARAM_NAME:"business_id",LABEL_ID_PARAM_NAME:"label_id",ACCOUNT_ID_PARAM_NAME:"act",ACCOUNT_ID_PARAM_NAME_LONG:"account_id",ACCOUNT_IDS_PARAM_NAME_LONG:"account_ids",PAGE_ID_PARAM_NAME:"id",PAGE_ADMIN_SELECTED_KEY:"sk",PRODUCT_CATALOG_ID_PARAM_NAME:"catalog_id",PRODUCT_FEED_ID_PARAM_NAME:"feed_id",LEGACY_ADS_MANAGER_PREFIX:"\/ads\/manage\/",CAMPAIGN_MANAGER_PREFIX:"\/ads\/manager\/",SHOW_SPLASH_PARAM_NAME:"splash",WHITELISTED_URI_CLASS:"bizOK",OPT_OUT_KEY:"do_not_redirect_to_biz_site",OPT_OUT_EXPIRE:86400,HIGHLANDER_OPT_OUT_KEY:"use_biz_page_in_highlander"};},null);
__d("BusinessAssetGrouping.brands",["emptyFunction","getObjectValues"],function(a,b,c,d,e,f,g,h){'use strict';var i="personal-business",j={NULL_BIZ_ID:i,groupAssets:function(r,s,t,u,v,w,x,y){v=v||o;w=w||g.thatReturnsTrue;var z=k(r,s,t),aa=z.businessesByID;aa[i]={id:i,name:x||"You"};var ba=l(z.assetsByBizID,aa,u),ca=p(h(ba),n);if(y&&ca[0].bizID===i)ca.shift();var da=[];for(var ea=0;ea<ca.length;ea++){var fa=ca[ea],ga=false;fa.assets=p(fa.assets,v);fa.assets=q(fa.assets,w,fa.bizID);if(fa.assets.length!==0){da=da.concat(fa.assets);ga=true;}fa.projects=p(h(fa.projectsByID),m);delete fa.projectsByID;for(var ha=0;ha<fa.projects.length;ha++){fa.projects[ha].assets=p(fa.projects[ha].assets,v);fa.projects[ha].assets=q(fa.projects[ha].assets,w,fa.bizID);if(fa.projects[ha].assets.length!==0){da=da.concat(fa.projects[ha].assets);ga=true;}}if(!ga)ca[ea]=null;}ca=ca.filter(function(ia){return ia;});return {businessesByID:aa,groupedAssets:ca,assets:da};}};function k(r,s,t){var u={},v={};for(var w=0;w<r.length;w++){var x=r[w],y=t(x);if(!y||y.length===0){u[i]?u[i].push(x):u[i]=[x];continue;}for(var z=0;z<y.length;z++){var aa=y[z],ba;if(aa.business){ba=aa.business.id;v[ba]=aa.business;}else ba=i;if(u[ba]){u[ba].push(x);}else u[ba]=[x];}}return {assetsByBizID:u,businessesByID:v};}function l(r,s,t){var u={},v;for(var w in r){v=r[w];u[w]=u[w]||{bizID:w,name:s[w].name,projectsByID:{},assets:[]};for(var x=0;x<v.length;x++){var y=v[x],z=t(y),aa=false;if(w!==i&&z&&z.length>0)for(var ba=0;ba<z.length;ba++){var ca=z[ba];if(ca.business&&ca.business.id!==w)continue;var da=u[w].projectsByID;da[ca.id]=da[ca.id]||{projectID:ca.id,name:s[w].name+" - "+ca.name,assets:[]};da[ca.id].assets.push(y);aa=true;}if(!aa)u[w].assets.push(y);}}return u;}function m(r){return (r.name||"").toUpperCase();}function n(r){if(r.bizID===i)return String.fromCharCode(0);return r.name;}function o(r){return r.name?r.name:r.id;}function p(r,s){return r.sort(function(t,u){var v=s(t),w=s(u);if(v>w){return 1;}else if(v<w){return -1;}else return 0;});}function q(r,s,t){return r.filter(function(u){return s(u,t);});}e.exports=j;},null);
__d("BizSiteIdentifier.brands",["BusinessConf","BusinessAssetGrouping.brands","URI"],function(a,b,c,d,e,f,g,h,i){var j=h.NULL_BIZ_ID,k={isBizSite:function(){return i.getRequestURI(false).getSubdomain()===g.DOMAIN;},getBusinessID:function(){return i.getRequestURI(false).getQueryData()[g.BIZ_ID_PARAM_NAME];},createBusinessURL:function(l,m){if(m===j)return i(l).setSubdomain('www');var n=i(l).setSubdomain(g.DOMAIN);if(k.isBizSite())n.setDomain(i.getRequestURI().getDomain());var o=m||k.getBusinessID();n.addQueryData(g.BIZ_ID_PARAM_NAME,o);return n;}};e.exports=k;},null);
__d("QuicklingAugmenter",["URI"],function(a,b,c,d,e,f,g){var h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=g(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};e.exports=i;},null);
__d("Quickling",["AjaxPipeRequest","Arbiter","CSSClassTransition","DocumentTitle","DOM","ErrorUtils","HTML","OnloadHooks","PageTransitions","QuicklingAugmenter","QuicklingConfig","Run","URI","UserAgent_DEPRECATED","PHPQuerySerializer","goOrReplace","isEmpty"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x=q.version,y=q.sessionLength,z=new RegExp(q.inactivePageRegex),aa=0,ba,ca='',da=[];function ea(){da.forEach(clearTimeout);da.length=0;}function fa(){if(da.length===0)r.onLeave(ea);}var ga={isActive:function(){return true;},isPageActive:function(pa){if(pa=='#')return false;pa=new s(pa);if(pa.getDomain()&&pa.getDomain()!=s().getDomain())return false;if(pa.getPath()=='/l.php'){var qa=pa.getQueryData().u;if(qa){qa=s(unescape(qa)).getDomain();if(qa&&qa!=s().getDomain())return false;}}var ra=pa.getPath(),sa=pa.getQueryData();if(!w(sa))ra+='?'+u.serialize(sa);return !z.test(ra);},getLoadCount:function(){return aa;}};function ha(pa){pa=pa||'Facebook';j.set(pa);if(t.ie()){ca=pa;if(!ba)ba=window.setInterval(function(){var qa=ca,ra=j.get();if(qa!=ra)j.set(qa);},5000,false);}}function ia(pa){var qa=document.getElementsByTagName('link');for(var ra=0;ra<qa.length;++ra){if(qa[ra].rel!='alternate')continue;k.remove(qa[ra]);}if(pa.length){var sa=k.find(document,'head');sa&&k.appendContent(sa,m(pa[0]));}}for(var ja in g)if(g.hasOwnProperty(ja))la[ja]=g[ja];var ka=g===null?null:g.prototype;la.prototype=Object.create(ka);la.prototype.constructor=la;la.__superConstructor__=g;function la(pa){"use strict";var qa={version:x};g.call(this,pa,{quickling:qa});}la.prototype._preBootloadFirstResponse=function(pa){"use strict";return true;};la.prototype._fireDomContentCallback=function(){"use strict";this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');o.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);ka._fireDomContentCallback.call(this);};la.prototype._fireOnloadCallback=function(){"use strict";if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}ka._fireOnloadCallback.call(this);};la.prototype.isPageActive=function(pa){"use strict";return ga.isPageActive(pa);};la.prototype._versionCheck=function(pa){"use strict";if(pa.version==x)return true;var qa=['quickling','ajaxpipe','ajaxpipe_token'];v(window.location,s(pa.uri).removeQueryData(qa),true);return false;};la.prototype._processFirstResponse=function(pa){"use strict";var qa=pa.getPayload();ha(qa.title);ia(qa.syndication||[]);window.scrollTo(0,0);i.go(document.body,qa.body_class||'',o.getMostRecentURI(),pa.getRequest().getURI());h.inform('quickling/response');};la.prototype.getSanitizedParameters=function(){"use strict";return ['quickling'];};function ma(){aa++;return aa>=y;}function na(pa){g.setCurrentRequest(null);if(ma())return false;pa=p.augmentURI(pa);if(!ga.isPageActive(pa))return false;window.ExitTime=Date.now();r.__removeHook('onafterloadhooks');r.__removeHook('onloadhooks');n.runHooks('onleavehooks');h.inform('onload/exit',true);new la(pa).setCanvasId('content').send();return true;}function oa(pa){var qa=window[pa];function ra(sa,ta,ua){if(typeof sa!=='function')sa=eval.bind(null,sa);var va=qa(l.guard(sa,pa+' (with Quickling)'),ta);if(ta>0&&ua!==false){fa();da.push(va);}return va;}window[pa]=ra;}r.onAfterLoad(function pa(){oa('setInterval');oa('setTimeout');o.registerHandler(na,1);});e.exports=a.Quickling=ga;},null);
__d("TimelineProfilePicConfig",["fbt"],function(a,b,c,d,e,f,g){var h={loading:'timeline/profile_pic/loading',success:'timeline/profile_pic/success',leavingMessage:"\u0e23\u0e30\u0e1a\u0e1a\u0e22\u0e31\u0e07\u0e04\u0e07\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e23\u0e39\u0e1b\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e39\u0e48 \u0e04\u0e38\u0e13\u0e41\u0e19\u0e48\u0e43\u0e08\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e40\u0e1e\u0e08\u0e19\u0e35\u0e49?"};e.exports=h;},null);
__d("TypeaheadRegulateMemorializedUsers",["TokenizeUtil","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._typeahead=j;}i.prototype._filter=function(j,k){"use strict";if(j.type!=='user'||!j.memorialized)return true;var l=g.parse(j.text).tokens;if(l.length===1&&g.isExactMatch(k,j.text))return true;var m=this._typeahead.getData().getTextToIndex(j),n=g.parse(k).tokens;return (n.length>1&&g.isQueryMatch(k,m));};i.prototype.enable=function(){"use strict";this._filterRegistry=this._typeahead.getData().addFilter(this._filter.bind(this));};i.prototype.disable=function(){"use strict";this._filterRegistry.remove();this._filterRegistry=null;};h(i.prototype,{_filterRegistry:null});e.exports=i;},null);
__d("legacy:RegulateMemorializedUsersTypeaheadBehavior",["TypeaheadRegulateMemorializedUsers"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.regulateMemorializedUsers=function(h){h.enableBehavior(g);};},3);
__d("XUIBadge",["CSS","DOM","cx","invariant"],function(a,b,c,d,e,f,g,h,i,j){function k(m){return parseInt(m,10)===m;}function l(m){"use strict";this.target=m.target;this.count=m.count;this.maxcount=m.maxcount;}l.prototype.getCount=function(){"use strict";return this.count;};l.prototype.setCount=function(m){"use strict";j(k(m));j(m>=0);this.count=m;g.conditionClass(this.target,'hidden_elem',this.count===0);if(m>this.maxcount){h.setContent(this.target,this.maxcount+'+');g.addClass(this.target,"_5ugi");}else{h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}};l.prototype.setLegacyContent=function(m){"use strict";if(typeof m==='string'){g.conditionClass(this.target,'hidden_elem',m==0);h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}else this.setCount(m);};l.prototype.increment=function(){"use strict";this.setCount(this.getCount()+1);};e.exports=l;},null);