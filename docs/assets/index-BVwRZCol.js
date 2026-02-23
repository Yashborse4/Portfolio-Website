function qv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gm={exports:{}},ca={},Ym={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),ey=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),ny=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),iy=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),sy=Symbol.for("react.suspense"),ay=Symbol.for("react.memo"),ly=Symbol.for("react.lazy"),gf=Symbol.iterator;function uy(e){return e===null||typeof e!="object"?null:(e=gf&&e[gf]||e["@@iterator"],typeof e=="function"?e:null)}var Km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qm=Object.assign,Xm={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=Xm,this.updater=n||Km}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qm(){}qm.prototype=Ur.prototype;function wc(e,t,n){this.props=e,this.context=t,this.refs=Xm,this.updater=n||Km}var Sc=wc.prototype=new qm;Sc.constructor=wc;Qm(Sc,Ur.prototype);Sc.isPureReactComponent=!0;var vf=Array.isArray,Zm=Object.prototype.hasOwnProperty,bc={current:null},Jm={key:!0,ref:!0,__self:!0,__source:!0};function e0(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Zm.call(t,r)&&!Jm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ro,type:e,key:o,ref:s,props:i,_owner:bc.current}}function cy(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function kc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function dy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yf=/\/+/g;function Za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dy(""+e.key):t.toString(36)}function ts(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ro:case Jv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Za(s,0):r,vf(i)?(n="",e!=null&&(n=e.replace(yf,"$&/")+"/"),ts(i,t,n,"",function(u){return u})):i!=null&&(kc(i)&&(i=cy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(yf,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",vf(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Za(o,a);s+=ts(o,t,n,l,i)}else if(l=uy(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Za(o,a++),s+=ts(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Po(e,t,n){if(e==null)return e;var r=[],i=0;return ts(e,r,"","",function(o){return t.call(n,o,i++)}),r}function fy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},ns={transition:null},py={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:ns,ReactCurrentOwner:bc};function t0(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:Po,forEach:function(e,t,n){Po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Po(e,function(){t++}),t},toArray:function(e){return Po(e,function(t){return t})||[]},only:function(e){if(!kc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=Ur;N.Fragment=ey;N.Profiler=ny;N.PureComponent=wc;N.StrictMode=ty;N.Suspense=sy;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;N.act=t0;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=bc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Zm.call(t,l)&&!Jm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ro,type:e.type,key:i,ref:o,props:r,_owner:s}};N.createContext=function(e){return e={$$typeof:iy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ry,_context:e},e.Consumer=e};N.createElement=e0;N.createFactory=function(e){var t=e0.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:oy,render:e}};N.isValidElement=kc;N.lazy=function(e){return{$$typeof:ly,_payload:{_status:-1,_result:e},_init:fy}};N.memo=function(e,t){return{$$typeof:ay,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=ns.transition;ns.transition={};try{e()}finally{ns.transition=t}};N.unstable_act=t0;N.useCallback=function(e,t){return Re.current.useCallback(e,t)};N.useContext=function(e){return Re.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};N.useEffect=function(e,t){return Re.current.useEffect(e,t)};N.useId=function(){return Re.current.useId()};N.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return Re.current.useMemo(e,t)};N.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};N.useRef=function(e){return Re.current.useRef(e)};N.useState=function(e){return Re.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return Re.current.useTransition()};N.version="18.3.1";Ym.exports=N;var P=Ym.exports;const Z=Zv(P),hy=qv({__proto__:null,default:Z},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=P,gy=Symbol.for("react.element"),vy=Symbol.for("react.fragment"),yy=Object.prototype.hasOwnProperty,xy=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wy={key:!0,ref:!0,__self:!0,__source:!0};function n0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)yy.call(t,r)&&!wy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:gy,type:e,key:o,ref:s,props:i,_owner:xy.current}}ca.Fragment=vy;ca.jsx=n0;ca.jsxs=n0;Gm.exports=ca;var p=Gm.exports,Ql={},r0={exports:{}},qe={},i0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,L){var D=$.length;$.push(L);e:for(;0<D;){var H=D-1>>>1,U=$[H];if(0<i(U,L))$[H]=L,$[D]=U,D=H;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var L=$[0],D=$.pop();if(D!==L){$[0]=D;e:for(var H=0,U=$.length,Cn=U>>>1;H<Cn;){var ut=2*(H+1)-1,Gt=$[ut],He=ut+1,Mt=$[He];if(0>i(Gt,D))He<U&&0>i(Mt,Gt)?($[H]=Mt,$[He]=D,H=He):($[H]=Gt,$[ut]=D,H=ut);else if(He<U&&0>i(Mt,D))$[H]=Mt,$[He]=D,H=He;else break e}}return L}function i($,L){var D=$.sortIndex-L.sortIndex;return D!==0?D:$.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v($){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=$)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function w($){if(x=!1,v($),!y)if(n(l)!==null)y=!0,Jn(b);else{var L=n(u);L!==null&&te(w,L.startTime-$)}}function b($,L){y=!1,x&&(x=!1,m(E),E=-1),g=!0;var D=f;try{for(v(L),d=n(l);d!==null&&(!(d.expirationTime>L)||$&&!ee());){var H=d.callback;if(typeof H=="function"){d.callback=null,f=d.priorityLevel;var U=H(d.expirationTime<=L);L=e.unstable_now(),typeof U=="function"?d.callback=U:d===n(l)&&r(l),v(L)}else r(l);d=n(l)}if(d!==null)var Cn=!0;else{var ut=n(u);ut!==null&&te(w,ut.startTime-L),Cn=!1}return Cn}finally{d=null,f=D,g=!1}}var C=!1,T=null,E=-1,z=5,A=-1;function ee(){return!(e.unstable_now()-A<z)}function Be(){if(T!==null){var $=e.unstable_now();A=$;var L=!0;try{L=T(!0,$)}finally{L?lt():(C=!1,T=null)}}else C=!1}var lt;if(typeof h=="function")lt=function(){h(Be)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Zn=xt.port2;xt.port1.onmessage=Be,lt=function(){Zn.postMessage(null)}}else lt=function(){S(Be,0)};function Jn($){T=$,C||(C=!0,lt())}function te($,L){E=S(function(){$(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Jn(b))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var D=f;f=L;try{return $()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,L){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var D=f;f=$;try{return L()}finally{f=D}},e.unstable_scheduleCallback=function($,L,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,$){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=D+U,$={id:c++,callback:L,priorityLevel:$,startTime:D,expirationTime:U,sortIndex:-1},D>H?($.sortIndex=D,t(u,$),n(l)===null&&$===n(u)&&(x?(m(E),E=-1):x=!0,te(w,D-H))):($.sortIndex=U,t(l,$),y||g||(y=!0,Jn(b))),$},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function($){var L=f;return function(){var D=f;f=L;try{return $.apply(this,arguments)}finally{f=D}}}})(o0);i0.exports=o0;var Sy=i0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by=P,Qe=Sy;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,Ai={};function Kn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(Ai[e]=t,e=0;e<t.length;e++)s0.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xf={},wf={};function Cy(e){return Xl.call(wf,e)?!0:Xl.call(xf,e)?!1:ky.test(e)?wf[e]=!0:(xf[e]=!0,!1)}function Py(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ty(e,t,n,r){if(t===null||typeof t>"u"||Py(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cc=/[\-:]([a-z])/g;function Pc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cc,Pc);Pe[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cc,Pc);Pe[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cc,Pc);Pe[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tc(e,t,n,r){var i=Pe.hasOwnProperty(t)?Pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ty(t,n,i,r)&&(n=null),r||i===null?Cy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,To=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),Ec=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),$c=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),u0=Symbol.for("react.offscreen"),Sf=Symbol.iterator;function Jr(e){return e===null||typeof e!="object"?null:(e=Sf&&e[Sf]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Ja;function li(e){if(Ja===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ja=t&&t[1]||""}return`
`+Ja+e}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{el=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function Ey(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function eu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case nr:return"Portal";case ql:return"Profiler";case Ec:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l0:return(e.displayName||"Context")+".Consumer";case a0:return(e._context.displayName||"Context")+".Provider";case jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $c:return t=e.displayName||null,t!==null?t:eu(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return eu(e(t))}catch{}}return null}function jy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eu(t);case 8:return t===Ec?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function c0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $y(e){var t=c0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){e._valueTracker||(e._valueTracker=$y(e))}function d0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=c0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tu(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function f0(e,t){t=t.checked,t!=null&&Tc(e,"checked",t,!1)}function nu(e,t){f0(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ru(e,t.type,n):t.hasOwnProperty("defaultValue")&&ru(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ru(e,t,n){(t!=="number"||bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ui=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function iu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(ui(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function p0(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function h0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ou(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?h0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,m0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},My=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){My.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function g0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function v0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=g0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _y=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function su(e,t){if(t){if(_y[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function Mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uu=null,Sr=null,br=null;function Tf(e){if(e=so(e)){if(typeof uu!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ma(t),uu(e.stateNode,e.type,t))}}function y0(e){Sr?br?br.push(e):br=[e]:Sr=e}function x0(){if(Sr){var e=Sr,t=br;if(br=Sr=null,Tf(e),t)for(e=0;e<t.length;e++)Tf(t[e])}}function w0(e,t){return e(t)}function S0(){}var nl=!1;function b0(e,t,n){if(nl)return e(t,n);nl=!0;try{return w0(e,t,n)}finally{nl=!1,(Sr!==null||br!==null)&&(S0(),x0())}}function Ri(e,t){var n=e.stateNode;if(n===null)return null;var r=ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var cu=!1;if(Nt)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){cu=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{cu=!1}function Ay(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var vi=!1,ks=null,Cs=!1,du=null,Ly={onError:function(e){vi=!0,ks=e}};function Ry(e,t,n,r,i,o,s,a,l){vi=!1,ks=null,Ay.apply(Ly,arguments)}function zy(e,t,n,r,i,o,s,a,l){if(Ry.apply(this,arguments),vi){if(vi){var u=ks;vi=!1,ks=null}else throw Error(j(198));Cs||(Cs=!0,du=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function k0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ef(e){if(Qn(e)!==e)throw Error(j(188))}function Dy(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ef(i),e;if(o===r)return Ef(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function C0(e){return e=Dy(e),e!==null?P0(e):null}function P0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=P0(e);if(t!==null)return t;e=e.sibling}return null}var T0=Qe.unstable_scheduleCallback,jf=Qe.unstable_cancelCallback,Oy=Qe.unstable_shouldYield,Iy=Qe.unstable_requestPaint,pe=Qe.unstable_now,Ny=Qe.unstable_getCurrentPriorityLevel,_c=Qe.unstable_ImmediatePriority,E0=Qe.unstable_UserBlockingPriority,Ps=Qe.unstable_NormalPriority,Fy=Qe.unstable_LowPriority,j0=Qe.unstable_IdlePriority,da=null,Pt=null;function Vy(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(da,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Uy,By=Math.log,Hy=Math.LN2;function Uy(e){return e>>>=0,e===0?32:31-(By(e)/Hy|0)|0}var $o=64,Mo=4194304;function ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ci(a):(o&=s,o!==0&&(r=ci(o)))}else s=n&~i,s!==0?r=ci(s):o!==0&&(r=ci(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),i=1<<n,r|=e[n],t&=~i;return r}function Wy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-mt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Wy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function fu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $0(){var e=$o;return $o<<=1,!($o&4194240)&&($o=64),e}function rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function Yy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ac(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function M0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _0,Lc,A0,L0,R0,pu=!1,_o=[],an=null,ln=null,un=null,zi=new Map,Di=new Map,tn=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function ti(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=so(t),t!==null&&Lc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qy(e,t,n,r,i){switch(t){case"focusin":return an=ti(an,e,t,n,r,i),!0;case"dragenter":return ln=ti(ln,e,t,n,r,i),!0;case"mouseover":return un=ti(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zi.set(o,ti(zi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Di.set(o,ti(Di.get(o)||null,e,t,n,r,i)),!0}return!1}function z0(e){var t=An(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=k0(n),t!==null){e.blockedOn=t,R0(e.priority,function(){A0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lu=r,n.target.dispatchEvent(r),lu=null}else return t=so(n),t!==null&&Lc(t),e.blockedOn=n,!1;t.shift()}return!0}function Mf(e,t,n){rs(e)&&n.delete(t)}function Xy(){pu=!1,an!==null&&rs(an)&&(an=null),ln!==null&&rs(ln)&&(ln=null),un!==null&&rs(un)&&(un=null),zi.forEach(Mf),Di.forEach(Mf)}function ni(e,t){e.blockedOn===t&&(e.blockedOn=null,pu||(pu=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Xy)))}function Oi(e){function t(i){return ni(i,e)}if(0<_o.length){ni(_o[0],e);for(var n=1;n<_o.length;n++){var r=_o[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&ni(an,e),ln!==null&&ni(ln,e),un!==null&&ni(un,e),zi.forEach(t),Di.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)z0(n),n.blockedOn===null&&tn.shift()}var kr=Wt.ReactCurrentBatchConfig,Es=!0;function qy(e,t,n,r){var i=B,o=kr.transition;kr.transition=null;try{B=1,Rc(e,t,n,r)}finally{B=i,kr.transition=o}}function Zy(e,t,n,r){var i=B,o=kr.transition;kr.transition=null;try{B=4,Rc(e,t,n,r)}finally{B=i,kr.transition=o}}function Rc(e,t,n,r){if(Es){var i=hu(e,t,n,r);if(i===null)pl(e,t,r,js,n),$f(e,r);else if(Qy(i,e,t,n,r))r.stopPropagation();else if($f(e,r),t&4&&-1<Ky.indexOf(e)){for(;i!==null;){var o=so(i);if(o!==null&&_0(o),o=hu(e,t,n,r),o===null&&pl(e,t,r,js,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var js=null;function hu(e,t,n,r){if(js=null,e=Mc(r),e=An(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=k0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return js=e,null}function D0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ny()){case _c:return 1;case E0:return 4;case Ps:case Fy:return 16;case j0:return 536870912;default:return 16}default:return 16}}var rn=null,zc=null,is=null;function O0(){if(is)return is;var e,t=zc,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return is=i.slice(e,1<r?1-r:void 0)}function os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ao(){return!0}function _f(){return!1}function Ze(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ao:_f,this.isPropagationStopped=_f,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=Ze(Wr),oo=ae({},Wr,{view:0,detail:0}),Jy=Ze(oo),il,ol,ri,fa=ae({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(il=e.screenX-ri.screenX,ol=e.screenY-ri.screenY):ol=il=0,ri=e),il)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Af=Ze(fa),e4=ae({},fa,{dataTransfer:0}),t4=Ze(e4),n4=ae({},oo,{relatedTarget:0}),sl=Ze(n4),r4=ae({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),i4=Ze(r4),o4=ae({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s4=Ze(o4),a4=ae({},Wr,{data:0}),Lf=Ze(a4),l4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c4[e])?!!t[e]:!1}function Oc(){return d4}var f4=ae({},oo,{key:function(e){if(e.key){var t=l4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p4=Ze(f4),h4=ae({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rf=Ze(h4),m4=ae({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),g4=Ze(m4),v4=ae({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),y4=Ze(v4),x4=ae({},fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w4=Ze(x4),S4=[9,13,27,32],Ic=Nt&&"CompositionEvent"in window,yi=null;Nt&&"documentMode"in document&&(yi=document.documentMode);var b4=Nt&&"TextEvent"in window&&!yi,I0=Nt&&(!Ic||yi&&8<yi&&11>=yi),zf=" ",Df=!1;function N0(e,t){switch(e){case"keyup":return S4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function k4(e,t){switch(e){case"compositionend":return F0(t);case"keypress":return t.which!==32?null:(Df=!0,zf);case"textInput":return e=t.data,e===zf&&Df?null:e;default:return null}}function C4(e,t){if(ir)return e==="compositionend"||!Ic&&N0(e,t)?(e=O0(),is=zc=rn=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return I0&&t.locale!=="ko"?null:t.data;default:return null}}var P4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!P4[e.type]:t==="textarea"}function V0(e,t,n,r){y0(r),t=$s(t,"onChange"),0<t.length&&(n=new Dc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xi=null,Ii=null;function T4(e){Z0(e,0)}function pa(e){var t=ar(e);if(d0(t))return e}function E4(e,t){if(e==="change")return t}var B0=!1;if(Nt){var al;if(Nt){var ll="oninput"in document;if(!ll){var If=document.createElement("div");If.setAttribute("oninput","return;"),ll=typeof If.oninput=="function"}al=ll}else al=!1;B0=al&&(!document.documentMode||9<document.documentMode)}function Nf(){xi&&(xi.detachEvent("onpropertychange",H0),Ii=xi=null)}function H0(e){if(e.propertyName==="value"&&pa(Ii)){var t=[];V0(t,Ii,e,Mc(e)),b0(T4,t)}}function j4(e,t,n){e==="focusin"?(Nf(),xi=t,Ii=n,xi.attachEvent("onpropertychange",H0)):e==="focusout"&&Nf()}function $4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pa(Ii)}function M4(e,t){if(e==="click")return pa(t)}function _4(e,t){if(e==="input"||e==="change")return pa(t)}function A4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:A4;function Ni(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xl.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function Ff(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vf(e,t){var n=Ff(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ff(n)}}function U0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?U0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function W0(){for(var e=window,t=bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bs(e.document)}return t}function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function L4(e){var t=W0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&U0(n.ownerDocument.documentElement,n)){if(r!==null&&Nc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Vf(n,o);var s=Vf(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R4=Nt&&"documentMode"in document&&11>=document.documentMode,or=null,mu=null,wi=null,gu=!1;function Bf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||or==null||or!==bs(r)||(r=or,"selectionStart"in r&&Nc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&Ni(wi,r)||(wi=r,r=$s(mu,"onSelect"),0<r.length&&(t=new Dc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function Lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},ul={},G0={};Nt&&(G0=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function ha(e){if(ul[e])return ul[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in G0)return ul[e]=t[n];return e}var Y0=ha("animationend"),K0=ha("animationiteration"),Q0=ha("animationstart"),X0=ha("transitionend"),q0=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){q0.set(e,t),Kn(t,[e])}for(var cl=0;cl<Hf.length;cl++){var dl=Hf[cl],z4=dl.toLowerCase(),D4=dl[0].toUpperCase()+dl.slice(1);xn(z4,"on"+D4)}xn(Y0,"onAnimationEnd");xn(K0,"onAnimationIteration");xn(Q0,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(X0,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O4=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function Uf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zy(r,t,void 0,e),e.currentTarget=null}function Z0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Uf(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Uf(i,a,u),o=l}}}if(Cs)throw e=du,Cs=!1,du=null,e}function Y(e,t){var n=t[Su];n===void 0&&(n=t[Su]=new Set);var r=e+"__bubble";n.has(r)||(J0(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),J0(n,e,r,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Fi(e){if(!e[Ro]){e[Ro]=!0,s0.forEach(function(n){n!=="selectionchange"&&(O4.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,fl("selectionchange",!1,t))}}function J0(e,t,n,r){switch(D0(t)){case 1:var i=qy;break;case 4:i=Zy;break;default:i=Rc}n=i.bind(null,t,n,e),i=void 0,!cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=An(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}b0(function(){var u=o,c=Mc(n),d=[];e:{var f=q0.get(e);if(f!==void 0){var g=Dc,y=e;switch(e){case"keypress":if(os(n)===0)break e;case"keydown":case"keyup":g=p4;break;case"focusin":y="focus",g=sl;break;case"focusout":y="blur",g=sl;break;case"beforeblur":case"afterblur":g=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=t4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=g4;break;case Y0:case K0:case Q0:g=i4;break;case X0:g=y4;break;case"scroll":g=Jy;break;case"wheel":g=w4;break;case"copy":case"cut":case"paste":g=s4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Rf}var x=(t&4)!==0,S=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,v;h!==null;){v=h;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,m!==null&&(w=Ri(h,m),w!=null&&x.push(Vi(h,w,v)))),S)break;h=h.return}0<x.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==lu&&(y=n.relatedTarget||n.fromElement)&&(An(y)||y[Ft]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?An(y):null,y!==null&&(S=Qn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(x=Af,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Rf,w="onPointerLeave",m="onPointerEnter",h="pointer"),S=g==null?f:ar(g),v=y==null?f:ar(y),f=new x(w,h+"leave",g,n,c),f.target=S,f.relatedTarget=v,w=null,An(c)===u&&(x=new x(m,h+"enter",y,n,c),x.target=v,x.relatedTarget=S,w=x),S=w,g&&y)t:{for(x=g,m=y,h=0,v=x;v;v=er(v))h++;for(v=0,w=m;w;w=er(w))v++;for(;0<h-v;)x=er(x),h--;for(;0<v-h;)m=er(m),v--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=er(x),m=er(m)}x=null}else x=null;g!==null&&Wf(d,f,g,x,!1),y!==null&&S!==null&&Wf(d,S,y,x,!0)}}e:{if(f=u?ar(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var b=E4;else if(Of(f))if(B0)b=_4;else{b=$4;var C=j4}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=M4);if(b&&(b=b(e,u))){V0(d,b,n,c);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&ru(f,"number",f.value)}switch(C=u?ar(u):window,e){case"focusin":(Of(C)||C.contentEditable==="true")&&(or=C,mu=u,wi=null);break;case"focusout":wi=mu=or=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Bf(d,n,c);break;case"selectionchange":if(R4)break;case"keydown":case"keyup":Bf(d,n,c)}var T;if(Ic)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ir?N0(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(I0&&n.locale!=="ko"&&(ir||E!=="onCompositionStart"?E==="onCompositionEnd"&&ir&&(T=O0()):(rn=c,zc="value"in rn?rn.value:rn.textContent,ir=!0)),C=$s(u,E),0<C.length&&(E=new Lf(E,e,null,n,c),d.push({event:E,listeners:C}),T?E.data=T:(T=F0(n),T!==null&&(E.data=T)))),(T=b4?k4(e,n):C4(e,n))&&(u=$s(u,"onBeforeInput"),0<u.length&&(c=new Lf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}Z0(d,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $s(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ri(e,n),o!=null&&r.unshift(Vi(e,o,i)),o=Ri(e,t),o!=null&&r.push(Vi(e,o,i))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wf(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ri(n,o),l!=null&&s.unshift(Vi(n,l,a))):i||(l=Ri(n,o),l!=null&&s.push(Vi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var I4=/\r\n?/g,N4=/\u0000|\uFFFD/g;function Gf(e){return(typeof e=="string"?e:""+e).replace(I4,`
`).replace(N4,"")}function zo(e,t,n){if(t=Gf(t),Gf(e)!==t&&n)throw Error(j(425))}function Ms(){}var vu=null,yu=null;function xu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,F4=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,V4=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(e){return Yf.resolve(null).then(e).catch(B4)}:wu;function B4(e){setTimeout(function(){throw e})}function hl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oi(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Gr,Bi="__reactProps$"+Gr,Ft="__reactContainer$"+Gr,Su="__reactEvents$"+Gr,H4="__reactListeners$"+Gr,U4="__reactHandles$"+Gr;function An(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kf(e);e!==null;){if(n=e[Ct])return n;e=Kf(e)}return t}e=n,n=e.parentNode}return null}function so(e){return e=e[Ct]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ma(e){return e[Bi]||null}var bu=[],lr=-1;function wn(e){return{current:e}}function Q(e){0>lr||(e.current=bu[lr],bu[lr]=null,lr--)}function W(e,t){lr++,bu[lr]=e.current,e.current=t}var vn={},_e=wn(vn),Ie=wn(!1),Vn=vn;function jr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function _s(){Q(Ie),Q(_e)}function Qf(e,t,n){if(_e.current!==vn)throw Error(j(168));W(_e,t),W(Ie,n)}function e1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,jy(e)||"Unknown",i));return ae({},n,r)}function As(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Vn=_e.current,W(_e,e),W(Ie,Ie.current),!0}function Xf(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=e1(e,t,Vn),r.__reactInternalMemoizedMergedChildContext=e,Q(Ie),Q(_e),W(_e,e)):Q(Ie),W(Ie,n)}var Lt=null,ga=!1,ml=!1;function t1(e){Lt===null?Lt=[e]:Lt.push(e)}function W4(e){ga=!0,t1(e)}function Sn(){if(!ml&&Lt!==null){ml=!0;var e=0,t=B;try{var n=Lt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,ga=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(e+1)),T0(_c,Sn),i}finally{B=t,ml=!1}}return null}var ur=[],cr=0,Ls=null,Rs=0,tt=[],nt=0,Bn=null,Rt=1,zt="";function jn(e,t){ur[cr++]=Rs,ur[cr++]=Ls,Ls=e,Rs=t}function n1(e,t,n){tt[nt++]=Rt,tt[nt++]=zt,tt[nt++]=Bn,Bn=e;var r=Rt;e=zt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var o=32-mt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Rt=1<<32-mt(t)+i|n<<i|r,zt=o+e}else Rt=1<<o|n<<i|r,zt=e}function Fc(e){e.return!==null&&(jn(e,1),n1(e,1,0))}function Vc(e){for(;e===Ls;)Ls=ur[--cr],ur[cr]=null,Rs=ur[--cr],ur[cr]=null;for(;e===Bn;)Bn=tt[--nt],tt[nt]=null,zt=tt[--nt],tt[nt]=null,Rt=tt[--nt],tt[nt]=null}var Ye=null,Ge=null,q=!1,ht=null;function r1(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Ge=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Rt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Ge=null,!0):!1;default:return!1}}function ku(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cu(e){if(q){var t=Ge;if(t){var n=t;if(!qf(e,t)){if(ku(e))throw Error(j(418));t=cn(n.nextSibling);var r=Ye;t&&qf(e,t)?r1(r,n):(e.flags=e.flags&-4097|2,q=!1,Ye=e)}}else{if(ku(e))throw Error(j(418));e.flags=e.flags&-4097|2,q=!1,Ye=e}}}function Zf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function Do(e){if(e!==Ye)return!1;if(!q)return Zf(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xu(e.type,e.memoizedProps)),t&&(t=Ge)){if(ku(e))throw i1(),Error(j(418));for(;t;)r1(e,t),t=cn(t.nextSibling)}if(Zf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Ye?cn(e.stateNode.nextSibling):null;return!0}function i1(){for(var e=Ge;e;)e=cn(e.nextSibling)}function $r(){Ge=Ye=null,q=!1}function Bc(e){ht===null?ht=[e]:ht.push(e)}var G4=Wt.ReactCurrentBatchConfig;function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jf(e){var t=e._init;return t(e._payload)}function o1(e){function t(m,h){if(e){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=hn(m,h),m.index=0,m.sibling=null,m}function o(m,h,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,v,w){return h===null||h.tag!==6?(h=bl(v,m.mode,w),h.return=m,h):(h=i(h,v),h.return=m,h)}function l(m,h,v,w){var b=v.type;return b===rr?c(m,h,v.props.children,w,v.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jt&&Jf(b)===h.type)?(w=i(h,v.props),w.ref=ii(m,h,v),w.return=m,w):(w=fs(v.type,v.key,v.props,null,m.mode,w),w.ref=ii(m,h,v),w.return=m,w)}function u(m,h,v,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=kl(v,m.mode,w),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function c(m,h,v,w,b){return h===null||h.tag!==7?(h=In(v,m.mode,w,b),h.return=m,h):(h=i(h,v),h.return=m,h)}function d(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=bl(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case To:return v=fs(h.type,h.key,h.props,null,m.mode,v),v.ref=ii(m,null,h),v.return=m,v;case nr:return h=kl(h,m.mode,v),h.return=m,h;case Jt:var w=h._init;return d(m,w(h._payload),v)}if(ui(h)||Jr(h))return h=In(h,m.mode,v,null),h.return=m,h;Oo(m,h)}return null}function f(m,h,v,w){var b=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(m,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case To:return v.key===b?l(m,h,v,w):null;case nr:return v.key===b?u(m,h,v,w):null;case Jt:return b=v._init,f(m,h,b(v._payload),w)}if(ui(v)||Jr(v))return b!==null?null:c(m,h,v,w,null);Oo(m,v)}return null}function g(m,h,v,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(v)||null,a(h,m,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case To:return m=m.get(w.key===null?v:w.key)||null,l(h,m,w,b);case nr:return m=m.get(w.key===null?v:w.key)||null,u(h,m,w,b);case Jt:var C=w._init;return g(m,h,v,C(w._payload),b)}if(ui(w)||Jr(w))return m=m.get(v)||null,c(h,m,w,b,null);Oo(h,w)}return null}function y(m,h,v,w){for(var b=null,C=null,T=h,E=h=0,z=null;T!==null&&E<v.length;E++){T.index>E?(z=T,T=null):z=T.sibling;var A=f(m,T,v[E],w);if(A===null){T===null&&(T=z);break}e&&T&&A.alternate===null&&t(m,T),h=o(A,h,E),C===null?b=A:C.sibling=A,C=A,T=z}if(E===v.length)return n(m,T),q&&jn(m,E),b;if(T===null){for(;E<v.length;E++)T=d(m,v[E],w),T!==null&&(h=o(T,h,E),C===null?b=T:C.sibling=T,C=T);return q&&jn(m,E),b}for(T=r(m,T);E<v.length;E++)z=g(T,m,E,v[E],w),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?E:z.key),h=o(z,h,E),C===null?b=z:C.sibling=z,C=z);return e&&T.forEach(function(ee){return t(m,ee)}),q&&jn(m,E),b}function x(m,h,v,w){var b=Jr(v);if(typeof b!="function")throw Error(j(150));if(v=b.call(v),v==null)throw Error(j(151));for(var C=b=null,T=h,E=h=0,z=null,A=v.next();T!==null&&!A.done;E++,A=v.next()){T.index>E?(z=T,T=null):z=T.sibling;var ee=f(m,T,A.value,w);if(ee===null){T===null&&(T=z);break}e&&T&&ee.alternate===null&&t(m,T),h=o(ee,h,E),C===null?b=ee:C.sibling=ee,C=ee,T=z}if(A.done)return n(m,T),q&&jn(m,E),b;if(T===null){for(;!A.done;E++,A=v.next())A=d(m,A.value,w),A!==null&&(h=o(A,h,E),C===null?b=A:C.sibling=A,C=A);return q&&jn(m,E),b}for(T=r(m,T);!A.done;E++,A=v.next())A=g(T,m,E,A.value,w),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?E:A.key),h=o(A,h,E),C===null?b=A:C.sibling=A,C=A);return e&&T.forEach(function(Be){return t(m,Be)}),q&&jn(m,E),b}function S(m,h,v,w){if(typeof v=="object"&&v!==null&&v.type===rr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case To:e:{for(var b=v.key,C=h;C!==null;){if(C.key===b){if(b=v.type,b===rr){if(C.tag===7){n(m,C.sibling),h=i(C,v.props.children),h.return=m,m=h;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jt&&Jf(b)===C.type){n(m,C.sibling),h=i(C,v.props),h.ref=ii(m,C,v),h.return=m,m=h;break e}n(m,C);break}else t(m,C);C=C.sibling}v.type===rr?(h=In(v.props.children,m.mode,w,v.key),h.return=m,m=h):(w=fs(v.type,v.key,v.props,null,m.mode,w),w.ref=ii(m,h,v),w.return=m,m=w)}return s(m);case nr:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=kl(v,m.mode,w),h.return=m,m=h}return s(m);case Jt:return C=v._init,S(m,h,C(v._payload),w)}if(ui(v))return y(m,h,v,w);if(Jr(v))return x(m,h,v,w);Oo(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,v),h.return=m,m=h):(n(m,h),h=bl(v,m.mode,w),h.return=m,m=h),s(m)):n(m,h)}return S}var Mr=o1(!0),s1=o1(!1),zs=wn(null),Ds=null,dr=null,Hc=null;function Uc(){Hc=dr=Ds=null}function Wc(e){var t=zs.current;Q(zs),e._currentValue=t}function Pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cr(e,t){Ds=e,Hc=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Hc!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(Ds===null)throw Error(j(308));dr=e,Ds.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Ln=null;function Gc(e){Ln===null?Ln=[e]:Ln.push(e)}function a1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Gc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Gc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vt(e,n)}function ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ac(e,n)}}function ep(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Os(e,t,n,r){var i=e.updateQueue;en=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(f=t,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=ae({},d,f);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Un|=s,e.lanes=s,e.memoizedState=d}}function tp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ao={},Tt=wn(ao),Hi=wn(ao),Ui=wn(ao);function Rn(e){if(e===ao)throw Error(j(174));return e}function Kc(e,t){switch(W(Ui,t),W(Hi,e),W(Tt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ou(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ou(t,e)}Q(Tt),W(Tt,t)}function _r(){Q(Tt),Q(Hi),Q(Ui)}function u1(e){Rn(Ui.current);var t=Rn(Tt.current),n=ou(t,e.type);t!==n&&(W(Hi,e),W(Tt,n))}function Qc(e){Hi.current===e&&(Q(Tt),Q(Hi))}var ie=wn(0);function Is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function Xc(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var as=Wt.ReactCurrentDispatcher,vl=Wt.ReactCurrentBatchConfig,Hn=0,se=null,ge=null,ye=null,Ns=!1,Si=!1,Wi=0,Y4=0;function Te(){throw Error(j(321))}function qc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Zc(e,t,n,r,i,o){if(Hn=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,as.current=e===null||e.memoizedState===null?q4:Z4,e=n(r,i),Si){o=0;do{if(Si=!1,Wi=0,25<=o)throw Error(j(301));o+=1,ye=ge=null,t.updateQueue=null,as.current=J4,e=n(r,i)}while(Si)}if(as.current=Fs,t=ge!==null&&ge.next!==null,Hn=0,ye=ge=se=null,Ns=!1,t)throw Error(j(300));return e}function Jc(){var e=Wi!==0;return Wi=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?se.memoizedState=ye=e:ye=ye.next=e,ye}function st(){if(ge===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?se.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(j(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?se.memoizedState=ye=e:ye=ye.next=e}return ye}function Gi(e,t){return typeof t=="function"?t(e):t}function yl(e){var t=st(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Hn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,se.lanes|=c,Un|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,yt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,Un|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=st(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);yt(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function c1(){}function d1(e,t){var n=se,r=st(),i=t(),o=!yt(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,ed(h1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Yi(9,p1.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(j(349));Hn&30||f1(n,t,i)}return i}function f1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function p1(e,t,n,r){t.value=n,t.getSnapshot=r,m1(t)&&g1(e)}function h1(e,t,n){return n(function(){m1(t)&&g1(e)})}function m1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function g1(e){var t=Vt(e,1);t!==null&&gt(t,e,1,-1)}function np(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=X4.bind(null,se,e),[t.memoizedState,e]}function Yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function v1(){return st().memoizedState}function ls(e,t,n,r){var i=St();se.flags|=e,i.memoizedState=Yi(1|t,n,void 0,r===void 0?null:r)}function va(e,t,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(ge!==null){var s=ge.memoizedState;if(o=s.destroy,r!==null&&qc(r,s.deps)){i.memoizedState=Yi(t,n,o,r);return}}se.flags|=e,i.memoizedState=Yi(1|t,n,o,r)}function rp(e,t){return ls(8390656,8,e,t)}function ed(e,t){return va(2048,8,e,t)}function y1(e,t){return va(4,2,e,t)}function x1(e,t){return va(4,4,e,t)}function w1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function S1(e,t,n){return n=n!=null?n.concat([e]):null,va(4,4,w1.bind(null,t,e),n)}function td(){}function b1(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function k1(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function C1(e,t,n){return Hn&21?(yt(n,t)||(n=$0(),se.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function K4(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=vl.transition;vl.transition={};try{e(!1),t()}finally{B=n,vl.transition=r}}function P1(){return st().memoizedState}function Q4(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},T1(e))E1(t,n);else if(n=a1(e,t,n,r),n!==null){var i=Le();gt(n,e,r,i),j1(n,t,r)}}function X4(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(T1(e))E1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,yt(a,s)){var l=t.interleaved;l===null?(i.next=i,Gc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=a1(e,t,i,r),n!==null&&(i=Le(),gt(n,e,r,i),j1(n,t,r))}}function T1(e){var t=e.alternate;return e===se||t!==null&&t===se}function E1(e,t){Si=Ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function j1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ac(e,n)}}var Fs={readContext:ot,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},q4={readContext:ot,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:rp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ls(4194308,4,w1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return ls(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Q4.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:np,useDebugValue:td,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=np(!1),t=e[0];return e=K4.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=St();if(q){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Se===null)throw Error(j(349));Hn&30||f1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,rp(h1.bind(null,r,o,e),[e]),r.flags|=2048,Yi(9,p1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=St(),t=Se.identifierPrefix;if(q){var n=zt,r=Rt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Y4++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Z4={readContext:ot,useCallback:b1,useContext:ot,useEffect:ed,useImperativeHandle:S1,useInsertionEffect:y1,useLayoutEffect:x1,useMemo:k1,useReducer:yl,useRef:v1,useState:function(){return yl(Gi)},useDebugValue:td,useDeferredValue:function(e){var t=st();return C1(t,ge.memoizedState,e)},useTransition:function(){var e=yl(Gi)[0],t=st().memoizedState;return[e,t]},useMutableSource:c1,useSyncExternalStore:d1,useId:P1,unstable_isNewReconciler:!1},J4={readContext:ot,useCallback:b1,useContext:ot,useEffect:ed,useImperativeHandle:S1,useInsertionEffect:y1,useLayoutEffect:x1,useMemo:k1,useReducer:xl,useRef:v1,useState:function(){return xl(Gi)},useDebugValue:td,useDeferredValue:function(e){var t=st();return ge===null?t.memoizedState=e:C1(t,ge.memoizedState,e)},useTransition:function(){var e=xl(Gi)[0],t=st().memoizedState;return[e,t]},useMutableSource:c1,useSyncExternalStore:d1,useId:P1,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Tu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ya={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=pn(e),o=Dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(gt(t,e,i,r),ss(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=pn(e),o=Dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(gt(t,e,i,r),ss(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=pn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(gt(t,e,r,n),ss(t,e,r))}};function ip(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ni(n,r)||!Ni(i,o):!0}function $1(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(i=Ne(t)?Vn:_e.current,r=t.contextTypes,o=(r=r!=null)?jr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ya,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function op(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ya.enqueueReplaceState(t,t.state,null)}function Eu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Yc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ot(o):(o=Ne(t)?Vn:_e.current,i.context=jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Tu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ya.enqueueReplaceState(i,i.state,null),Os(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var n="",r=t;do n+=Ey(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ju(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e3=typeof WeakMap=="function"?WeakMap:Map;function M1(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bs||(Bs=!0,Iu=r),ju(e,t)},n}function _1(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ju(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ju(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function sp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e3;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=h3.bind(null,e,t,n),t.then(e,e))}function ap(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var t3=Wt.ReactCurrentOwner,Oe=!1;function Ae(e,t,n,r){t.child=e===null?s1(t,null,n,r):Mr(t,e.child,n,r)}function up(e,t,n,r,i){n=n.render;var o=t.ref;return Cr(t,i),r=Zc(e,t,n,r,o,i),n=Jc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(q&&n&&Fc(t),t.flags|=1,Ae(e,t,r,i),t.child)}function cp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ud(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,A1(e,t,o,r,i)):(e=fs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(s,r)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function A1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ni(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return $u(e,t,n,r,i)}function L1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(pr,We),We|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(pr,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(pr,We),We|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(pr,We),We|=r;return Ae(e,t,i,n),t.child}function R1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $u(e,t,n,r,i){var o=Ne(n)?Vn:_e.current;return o=jr(t,o),Cr(t,i),n=Zc(e,t,n,r,o,i),r=Jc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(q&&r&&Fc(t),t.flags|=1,Ae(e,t,n,i),t.child)}function dp(e,t,n,r,i){if(Ne(n)){var o=!0;As(t)}else o=!1;if(Cr(t,i),t.stateNode===null)us(e,t),$1(t,n,r),Eu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ne(n)?Vn:_e.current,u=jr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&op(t,s,r,u),en=!1;var f=t.memoizedState;s.state=f,Os(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ie.current||en?(typeof c=="function"&&(Tu(t,n,c,r),l=t.memoizedState),(a=en||ip(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,l1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ft(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=Ne(n)?Vn:_e.current,l=jr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&op(t,s,r,l),en=!1,f=t.memoizedState,s.state=f,Os(t,r,s,i);var y=t.memoizedState;a!==d||f!==y||Ie.current||en?(typeof g=="function"&&(Tu(t,n,g,r),y=t.memoizedState),(u=en||ip(t,n,u,r,f,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Mu(e,t,n,r,o,i)}function Mu(e,t,n,r,i,o){R1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Xf(t,n,!1),Bt(e,t,o);r=t.stateNode,t3.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Mr(t,e.child,null,o),t.child=Mr(t,null,a,o)):Ae(e,t,a,o),t.memoizedState=r.state,i&&Xf(t,n,!0),t.child}function z1(e){var t=e.stateNode;t.pendingContext?Qf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qf(e,t.context,!1),Kc(e,t.containerInfo)}function fp(e,t,n,r,i){return $r(),Bc(i),t.flags|=256,Ae(e,t,n,r),t.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function Au(e){return{baseLanes:e,cachePool:null,transitions:null}}function D1(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(ie,i&1),e===null)return Cu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Sa(s,r,0,null),e=In(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Au(n),t.memoizedState=_u,e):nd(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return n3(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=hn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=hn(a,o):(o=In(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Au(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=_u,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nd(e,t){return t=Sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Io(e,t,n,r){return r!==null&&Bc(r),Mr(t,e.child,null,n),e=nd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n3(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=wl(Error(j(422))),Io(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Sa({mode:"visible",children:r.children},i,0,null),o=In(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Mr(t,e.child,null,s),t.child.memoizedState=Au(s),t.memoizedState=_u,o);if(!(t.mode&1))return Io(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(j(419)),r=wl(o,r,void 0),Io(e,t,s,r)}if(a=(s&e.childLanes)!==0,Oe||a){if(r=Se,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Vt(e,i),gt(r,e,i,-1))}return ld(),r=wl(Error(j(421))),Io(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=m3.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ge=cn(i.nextSibling),Ye=t,q=!0,ht=null,e!==null&&(tt[nt++]=Rt,tt[nt++]=zt,tt[nt++]=Bn,Rt=e.id,zt=e.overflow,Bn=t),t=nd(t,r.children),t.flags|=4096,t)}function pp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pu(e.return,t,n)}function Sl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function O1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ae(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,n,t);else if(e.tag===19)pp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Is(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Is(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sl(t,!0,n,null,o);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function us(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r3(e,t,n){switch(t.tag){case 3:z1(t),$r();break;case 5:u1(t);break;case 1:Ne(t.type)&&As(t);break;case 4:Kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(zs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?D1(e,t,n):(W(ie,ie.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);W(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return O1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,L1(e,t,n)}return Bt(e,t,n)}var I1,Lu,N1,F1;I1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lu=function(){};N1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(Tt.current);var o=null;switch(n){case"input":i=tu(e,i),r=tu(e,r),o=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),o=[];break;case"textarea":i=iu(e,i),r=iu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ms)}su(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ai.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};F1=function(e,t,n,r){n!==r&&(t.flags|=4)};function oi(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i3(e,t,n){var r=t.pendingProps;switch(Vc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ne(t.type)&&_s(),Ee(t),null;case 3:return r=t.stateNode,_r(),Q(Ie),Q(_e),Xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Do(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Vu(ht),ht=null))),Lu(e,t),Ee(t),null;case 5:Qc(t);var i=Rn(Ui.current);if(n=t.type,e!==null&&t.stateNode!=null)N1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Ee(t),null}if(e=Rn(Tt.current),Do(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ct]=t,r[Bi]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<di.length;i++)Y(di[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":bf(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":Cf(r,o),Y("invalid",r)}su(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&zo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&zo(r.textContent,a,e),i=["children",""+a]):Ai.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Y("scroll",r)}switch(n){case"input":Eo(r),kf(r,o,!0);break;case"textarea":Eo(r),Pf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ms)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=h0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ct]=t,e[Bi]=r,I1(e,t,!1,!1),t.stateNode=e;e:{switch(s=au(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<di.length;i++)Y(di[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":bf(e,r),i=tu(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Cf(e,r),i=iu(e,r),Y("invalid",e);break;default:i=r}su(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?v0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&m0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Li(e,l):typeof l=="number"&&Li(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ai.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Y("scroll",e):l!=null&&Tc(e,o,l,s))}switch(n){case"input":Eo(e),kf(e,r,!1);break;case"textarea":Eo(e),Pf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wr(e,!!r.multiple,o,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ms)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)F1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Rn(Ui.current),Rn(Tt.current),Do(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(o=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Ee(t),null;case 13:if(Q(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ge!==null&&t.mode&1&&!(t.flags&128))i1(),$r(),t.flags|=98560,o=!1;else if(o=Do(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Ct]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else ht!==null&&(Vu(ht),ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ve===0&&(ve=3):ld())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return _r(),Lu(e,t),e===null&&Fi(t.stateNode.containerInfo),Ee(t),null;case 10:return Wc(t.type._context),Ee(t),null;case 17:return Ne(t.type)&&_s(),Ee(t),null;case 19:if(Q(ie),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)oi(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Is(e),s!==null){for(t.flags|=128,oi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>Lr&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Is(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return Ee(t),null}else 2*pe()-o.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,n=ie.current,W(ie,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return ad(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function o3(e,t){switch(Vc(t),t.tag){case 1:return Ne(t.type)&&_s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),Q(Ie),Q(_e),Xc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qc(t),null;case 13:if(Q(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(ie),null;case 4:return _r(),null;case 10:return Wc(t.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var No=!1,$e=!1,s3=typeof WeakSet=="function"?WeakSet:Set,_=null;function fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Ru(e,t,n){try{n()}catch(r){ce(e,t,r)}}var hp=!1;function a3(e,t){if(vu=Es,e=W0(),Nc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yu={focusedElem:e,selectionRange:n},Es=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:ft(t.type,x),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=hp,hp=!1,y}function bi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ru(t,n,o)}i=i.next}while(i!==r)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function V1(e){var t=e.alternate;t!==null&&(e.alternate=null,V1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Bi],delete t[Su],delete t[H4],delete t[U4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function B1(e){return e.tag===5||e.tag===3||e.tag===4}function mp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||B1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ms));else if(r!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}var be=null,pt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)H1(e,t,n),n=n.sibling}function H1(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(da,n)}catch{}switch(n.tag){case 5:$e||fr(n,t);case 6:var r=be,i=pt;be=null,Kt(e,t,n),be=r,pt=i,be!==null&&(pt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(pt?(e=be,n=n.stateNode,e.nodeType===8?hl(e.parentNode,n):e.nodeType===1&&hl(e,n),Oi(e)):hl(be,n.stateNode));break;case 4:r=be,i=pt,be=n.stateNode.containerInfo,pt=!0,Kt(e,t,n),be=r,pt=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ru(n,t,s),i=i.next}while(i!==r)}Kt(e,t,n);break;case 1:if(!$e&&(fr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,Kt(e,t,n),$e=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function gp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s3),t.forEach(function(r){var i=g3.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,pt=!1;break e;case 3:be=a.stateNode.containerInfo,pt=!0;break e;case 4:be=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(be===null)throw Error(j(160));H1(o,s,i),be=null,pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)U1(t,e),t=t.sibling}function U1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),wt(e),r&4){try{bi(3,e,e.return),xa(3,e)}catch(x){ce(e,e.return,x)}try{bi(5,e,e.return)}catch(x){ce(e,e.return,x)}}break;case 1:ct(t,e),wt(e),r&512&&n!==null&&fr(n,n.return);break;case 5:if(ct(t,e),wt(e),r&512&&n!==null&&fr(n,n.return),e.flags&32){var i=e.stateNode;try{Li(i,"")}catch(x){ce(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&f0(i,o),au(a,s);var u=au(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?v0(i,d):c==="dangerouslySetInnerHTML"?m0(i,d):c==="children"?Li(i,d):Tc(i,c,d,u)}switch(a){case"input":nu(i,o);break;case"textarea":p0(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?wr(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?wr(i,!!o.multiple,o.defaultValue,!0):wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bi]=o}catch(x){ce(e,e.return,x)}}break;case 6:if(ct(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ce(e,e.return,x)}}break;case 3:if(ct(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(x){ce(e,e.return,x)}break;case 4:ct(t,e),wt(e);break;case 13:ct(t,e),wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(od=pe())),r&4&&gp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?($e=(u=$e)||c,ct(t,e),$e=u):ct(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(_=e,c=e.child;c!==null;){for(d=_=c;_!==null;){switch(f=_,g=f.child,f.tag){case 0:case 11:case 14:case 15:bi(4,f,f.return);break;case 1:fr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ce(r,n,x)}}break;case 5:fr(f,f.return);break;case 22:if(f.memoizedState!==null){yp(d);continue}}g!==null?(g.return=f,_=g):yp(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=g0("display",s))}catch(x){ce(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ce(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ct(t,e),wt(e),r&4&&gp(e);break;case 21:break;default:ct(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(B1(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Li(i,""),r.flags&=-33);var o=mp(e);Ou(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=mp(e);Du(e,a,s);break;default:throw Error(j(161))}}catch(l){ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l3(e,t,n){_=e,W1(e)}function W1(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||No;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=No;var u=$e;if(No=s,($e=l)&&!u)for(_=i;_!==null;)s=_,l=s.child,s.tag===22&&s.memoizedState!==null?xp(i):l!==null?(l.return=s,_=l):xp(i);for(;o!==null;)_=o,W1(o),o=o.sibling;_=i,No=a,$e=u}vp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):vp(e)}}function vp(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&tp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Oi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}$e||t.flags&512&&zu(t)}catch(f){ce(t,t.return,f)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function yp(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function xp(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xa(4,t)}catch(l){ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ce(t,i,l)}}var o=t.return;try{zu(t)}catch(l){ce(t,o,l)}break;case 5:var s=t.return;try{zu(t)}catch(l){ce(t,s,l)}}}catch(l){ce(t,t.return,l)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var u3=Math.ceil,Vs=Wt.ReactCurrentDispatcher,rd=Wt.ReactCurrentOwner,it=Wt.ReactCurrentBatchConfig,F=0,Se=null,me=null,Ce=0,We=0,pr=wn(0),ve=0,Ki=null,Un=0,wa=0,id=0,ki=null,De=null,od=0,Lr=1/0,_t=null,Bs=!1,Iu=null,fn=null,Fo=!1,on=null,Hs=0,Ci=0,Nu=null,cs=-1,ds=0;function Le(){return F&6?pe():cs!==-1?cs:cs=pe()}function pn(e){return e.mode&1?F&2&&Ce!==0?Ce&-Ce:G4.transition!==null?(ds===0&&(ds=$0()),ds):(e=B,e!==0||(e=window.event,e=e===void 0?16:D0(e.type)),e):1}function gt(e,t,n,r){if(50<Ci)throw Ci=0,Nu=null,Error(j(185));io(e,n,r),(!(F&2)||e!==Se)&&(e===Se&&(!(F&2)&&(wa|=n),ve===4&&nn(e,Ce)),Fe(e,r),n===1&&F===0&&!(t.mode&1)&&(Lr=pe()+500,ga&&Sn()))}function Fe(e,t){var n=e.callbackNode;Gy(e,t);var r=Ts(e,e===Se?Ce:0);if(r===0)n!==null&&jf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jf(n),t===1)e.tag===0?W4(wp.bind(null,e)):t1(wp.bind(null,e)),V4(function(){!(F&6)&&Sn()}),n=null;else{switch(M0(r)){case 1:n=_c;break;case 4:n=E0;break;case 16:n=Ps;break;case 536870912:n=j0;break;default:n=Ps}n=J1(n,G1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function G1(e,t){if(cs=-1,ds=0,F&6)throw Error(j(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=Ts(e,e===Se?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Us(e,r);else{t=r;var i=F;F|=2;var o=K1();(Se!==e||Ce!==t)&&(_t=null,Lr=pe()+500,On(e,t));do try{f3();break}catch(a){Y1(e,a)}while(!0);Uc(),Vs.current=o,F=i,me!==null?t=0:(Se=null,Ce=0,t=ve)}if(t!==0){if(t===2&&(i=fu(e),i!==0&&(r=i,t=Fu(e,i))),t===1)throw n=Ki,On(e,0),nn(e,r),Fe(e,pe()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!c3(i)&&(t=Us(e,r),t===2&&(o=fu(e),o!==0&&(r=o,t=Fu(e,o))),t===1))throw n=Ki,On(e,0),nn(e,r),Fe(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:$n(e,De,_t);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=od+500-pe(),10<t)){if(Ts(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wu($n.bind(null,e,De,_t),t);break}$n(e,De,_t);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-mt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u3(r/1960))-r,10<r){e.timeoutHandle=wu($n.bind(null,e,De,_t),r);break}$n(e,De,_t);break;case 5:$n(e,De,_t);break;default:throw Error(j(329))}}}return Fe(e,pe()),e.callbackNode===n?G1.bind(null,e):null}function Fu(e,t){var n=ki;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=Us(e,t),e!==2&&(t=De,De=n,t!==null&&Vu(t)),e}function Vu(e){De===null?De=e:De.push.apply(De,e)}function c3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~id,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function wp(e){if(F&6)throw Error(j(327));Pr();var t=Ts(e,0);if(!(t&1))return Fe(e,pe()),null;var n=Us(e,t);if(e.tag!==0&&n===2){var r=fu(e);r!==0&&(t=r,n=Fu(e,r))}if(n===1)throw n=Ki,On(e,0),nn(e,t),Fe(e,pe()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,De,_t),Fe(e,pe()),null}function sd(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Lr=pe()+500,ga&&Sn())}}function Wn(e){on!==null&&on.tag===0&&!(F&6)&&Pr();var t=F;F|=1;var n=it.transition,r=B;try{if(it.transition=null,B=1,e)return e()}finally{B=r,it.transition=n,F=t,!(F&6)&&Sn()}}function ad(){We=pr.current,Q(pr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,F4(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Vc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_s();break;case 3:_r(),Q(Ie),Q(_e),Xc();break;case 5:Qc(r);break;case 4:_r();break;case 13:Q(ie);break;case 19:Q(ie);break;case 10:Wc(r.type._context);break;case 22:case 23:ad()}n=n.return}if(Se=e,me=e=hn(e.current,null),Ce=We=t,ve=0,Ki=null,id=wa=Un=0,De=ki=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ln=null}return e}function Y1(e,t){do{var n=me;try{if(Uc(),as.current=Fs,Ns){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ns=!1}if(Hn=0,ye=ge=se=null,Si=!1,Wi=0,rd.current=null,n===null||n.return===null){ve=1,Ki=t,me=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=ap(s);if(g!==null){g.flags&=-257,lp(g,s,a,o,t),g.mode&1&&sp(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){sp(o,u,t),ld();break e}l=Error(j(426))}}else if(q&&a.mode&1){var S=ap(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),lp(S,s,a,o,t),Bc(Ar(l,a));break e}}o=l=Ar(l,a),ve!==4&&(ve=2),ki===null?ki=[o]:ki.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=M1(o,l,t);ep(o,m);break e;case 1:a=l;var h=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fn===null||!fn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=_1(o,a,t);ep(o,w);break e}}o=o.return}while(o!==null)}X1(n)}catch(b){t=b,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function K1(){var e=Vs.current;return Vs.current=Fs,e===null?Fs:e}function ld(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(Un&268435455)&&!(wa&268435455)||nn(Se,Ce)}function Us(e,t){var n=F;F|=2;var r=K1();(Se!==e||Ce!==t)&&(_t=null,On(e,t));do try{d3();break}catch(i){Y1(e,i)}while(!0);if(Uc(),F=n,Vs.current=r,me!==null)throw Error(j(261));return Se=null,Ce=0,ve}function d3(){for(;me!==null;)Q1(me)}function f3(){for(;me!==null&&!Oy();)Q1(me)}function Q1(e){var t=Z1(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?X1(e):me=t,rd.current=null}function X1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o3(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(n=i3(n,t,We),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ve===0&&(ve=5)}function $n(e,t,n){var r=B,i=it.transition;try{it.transition=null,B=1,p3(e,t,n,r)}finally{it.transition=i,B=r}return null}function p3(e,t,n,r){do Pr();while(on!==null);if(F&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yy(e,o),e===Se&&(me=Se=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fo||(Fo=!0,J1(Ps,function(){return Pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=it.transition,it.transition=null;var s=B;B=1;var a=F;F|=4,rd.current=null,a3(e,n),U1(n,e),L4(yu),Es=!!vu,yu=vu=null,e.current=n,l3(n),Iy(),F=a,B=s,it.transition=o}else e.current=n;if(Fo&&(Fo=!1,on=e,Hs=i),o=e.pendingLanes,o===0&&(fn=null),Vy(n.stateNode),Fe(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bs)throw Bs=!1,e=Iu,Iu=null,e;return Hs&1&&e.tag!==0&&Pr(),o=e.pendingLanes,o&1?e===Nu?Ci++:(Ci=0,Nu=e):Ci=0,Sn(),null}function Pr(){if(on!==null){var e=M0(Hs),t=it.transition,n=B;try{if(it.transition=null,B=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Hs=0,F&6)throw Error(j(331));var i=F;for(F|=4,_=e.current;_!==null;){var o=_,s=o.child;if(_.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_=u;_!==null;){var c=_;switch(c.tag){case 0:case 11:case 15:bi(8,c,o)}var d=c.child;if(d!==null)d.return=c,_=d;else for(;_!==null;){c=_;var f=c.sibling,g=c.return;if(V1(c),c===u){_=null;break}if(f!==null){f.return=g,_=f;break}_=g}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}_=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,_=s;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,_=m;break e}_=o.return}}var h=e.current;for(_=h;_!==null;){s=_;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,_=v;else e:for(s=h;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xa(9,a)}}catch(b){ce(a,a.return,b)}if(a===s){_=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,_=w;break e}_=a.return}}if(F=i,Sn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(da,e)}catch{}r=!0}return r}finally{B=n,it.transition=t}}return!1}function Sp(e,t,n){t=Ar(n,t),t=M1(e,t,1),e=dn(e,t,1),t=Le(),e!==null&&(io(e,1,t),Fe(e,t))}function ce(e,t,n){if(e.tag===3)Sp(e,e,n);else for(;t!==null;){if(t.tag===3){Sp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=Ar(n,e),e=_1(t,e,1),t=dn(t,e,1),e=Le(),t!==null&&(io(t,1,e),Fe(t,e));break}}t=t.return}}function h3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Ce&n)===n&&(ve===4||ve===3&&(Ce&130023424)===Ce&&500>pe()-od?On(e,0):id|=n),Fe(e,t)}function q1(e,t){t===0&&(e.mode&1?(t=Mo,Mo<<=1,!(Mo&130023424)&&(Mo=4194304)):t=1);var n=Le();e=Vt(e,t),e!==null&&(io(e,t,n),Fe(e,n))}function m3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),q1(e,n)}function g3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),q1(e,n)}var Z1;Z1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,r3(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,q&&t.flags&1048576&&n1(t,Rs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;us(e,t),e=t.pendingProps;var i=jr(t,_e.current);Cr(t,n),i=Zc(null,t,r,e,i,n);var o=Jc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,As(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yc(t),i.updater=ya,t.stateNode=i,i._reactInternals=t,Eu(t,r,e,n),t=Mu(null,t,r,!0,o,n)):(t.tag=0,q&&o&&Fc(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(us(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=y3(r),e=ft(r,e),i){case 0:t=$u(null,t,r,e,n);break e;case 1:t=dp(null,t,r,e,n);break e;case 11:t=up(null,t,r,e,n);break e;case 14:t=cp(null,t,r,ft(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),$u(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),dp(e,t,r,i,n);case 3:e:{if(z1(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,l1(e,t),Os(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ar(Error(j(423)),t),t=fp(e,t,r,n,i);break e}else if(r!==i){i=Ar(Error(j(424)),t),t=fp(e,t,r,n,i);break e}else for(Ge=cn(t.stateNode.containerInfo.firstChild),Ye=t,q=!0,ht=null,n=s1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=Bt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return u1(t),e===null&&Cu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,xu(r,i)?s=null:o!==null&&xu(r,o)&&(t.flags|=32),R1(e,t),Ae(e,t,s,n),t.child;case 6:return e===null&&Cu(t),null;case 13:return D1(e,t,n);case 4:return Kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),up(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(zs,r._currentValue),r._currentValue=s,o!==null)if(yt(o.value,s)){if(o.children===i.children&&!Ie.current){t=Bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Pu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(j(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Pu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Cr(t,n),i=ot(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),cp(e,t,r,i,n);case 15:return A1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),us(e,t),t.tag=1,Ne(r)?(e=!0,As(t)):e=!1,Cr(t,n),$1(t,r,i),Eu(t,r,i,n),Mu(null,t,r,!0,e,n);case 19:return O1(e,t,n);case 22:return L1(e,t,n)}throw Error(j(156,t.tag))};function J1(e,t){return T0(e,t)}function v3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new v3(e,t,n,r)}function ud(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y3(e){if(typeof e=="function")return ud(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jc)return 11;if(e===$c)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ud(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case rr:return In(n.children,i,o,t);case Ec:s=8,i|=8;break;case ql:return e=rt(12,n,t,i|2),e.elementType=ql,e.lanes=o,e;case Zl:return e=rt(13,n,t,i),e.elementType=Zl,e.lanes=o,e;case Jl:return e=rt(19,n,t,i),e.elementType=Jl,e.lanes=o,e;case u0:return Sa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case a0:s=10;break e;case l0:s=9;break e;case jc:s=11;break e;case $c:s=14;break e;case Jt:s=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=rt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function In(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Sa(e,t,n,r){return e=rt(22,e,r,t),e.elementType=u0,e.lanes=n,e.stateNode={isHidden:!1},e}function bl(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function kl(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x3(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cd(e,t,n,r,i,o,s,a,l){return e=new x3(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(o),e}function w3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function eg(e){if(!e)return vn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ne(n))return e1(e,n,t)}return t}function tg(e,t,n,r,i,o,s,a,l){return e=cd(n,r,!0,e,i,o,s,a,l),e.context=eg(null),n=e.current,r=Le(),i=pn(n),o=Dt(r,i),o.callback=t??null,dn(n,o,i),e.current.lanes=i,io(e,i,r),Fe(e,r),e}function ba(e,t,n,r){var i=t.current,o=Le(),s=pn(i);return n=eg(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,s),e!==null&&(gt(e,i,s,o),ss(e,i,s)),s}function Ws(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dd(e,t){bp(e,t),(e=e.alternate)&&bp(e,t)}function S3(){return null}var ng=typeof reportError=="function"?reportError:function(e){console.error(e)};function fd(e){this._internalRoot=e}ka.prototype.render=fd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ba(e,t,null,null)};ka.prototype.unmount=fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){ba(null,e,null,null)}),t[Ft]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=L0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&z0(e)}};function pd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kp(){}function b3(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ws(s);o.call(u)}}var s=tg(t,r,e,0,null,!1,!1,"",kp);return e._reactRootContainer=s,e[Ft]=s.current,Fi(e.nodeType===8?e.parentNode:e),Wn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ws(l);a.call(u)}}var l=cd(e,0,!1,null,null,!1,!1,"",kp);return e._reactRootContainer=l,e[Ft]=l.current,Fi(e.nodeType===8?e.parentNode:e),Wn(function(){ba(t,l,n,r)}),l}function Pa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ws(s);a.call(l)}}ba(t,s,e,i)}else s=b3(n,t,e,i,r);return Ws(s)}_0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ci(t.pendingLanes);n!==0&&(Ac(t,n|1),Fe(t,pe()),!(F&6)&&(Lr=pe()+500,Sn()))}break;case 13:Wn(function(){var r=Vt(e,1);if(r!==null){var i=Le();gt(r,e,1,i)}}),dd(e,1)}};Lc=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=Le();gt(t,e,134217728,n)}dd(e,134217728)}};A0=function(e){if(e.tag===13){var t=pn(e),n=Vt(e,t);if(n!==null){var r=Le();gt(n,e,t,r)}dd(e,t)}};L0=function(){return B};R0=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};uu=function(e,t,n){switch(t){case"input":if(nu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ma(r);if(!i)throw Error(j(90));d0(r),nu(r,i)}}}break;case"textarea":p0(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};w0=sd;S0=Wn;var k3={usingClientEntryPoint:!1,Events:[so,ar,ma,y0,x0,sd]},si={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C3={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=C0(e),e===null?null:e.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||S3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{da=Vo.inject(C3),Pt=Vo}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k3;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(t))throw Error(j(200));return w3(e,t,null,n)};qe.createRoot=function(e,t){if(!pd(e))throw Error(j(299));var n=!1,r="",i=ng;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=cd(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,Fi(e.nodeType===8?e.parentNode:e),new fd(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=C0(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Wn(e)};qe.hydrate=function(e,t,n){if(!Ca(t))throw Error(j(200));return Pa(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!pd(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ng;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=tg(t,null,e,1,n??null,i,!1,o,s),e[Ft]=t.current,Fi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ka(t)};qe.render=function(e,t,n){if(!Ca(t))throw Error(j(200));return Pa(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Ca(e))throw Error(j(40));return e._reactRootContainer?(Wn(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};qe.unstable_batchedUpdates=sd;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ca(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Pa(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function rg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rg)}catch(e){console.error(e)}}rg(),r0.exports=qe;var ig=r0.exports,Cp=ig;Ql.createRoot=Cp.createRoot,Ql.hydrateRoot=Cp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gs.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const Pp="popstate";function P3(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Bu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sg(i)}return E3(t,n,null,e)}function Ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function og(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function T3(){return Math.random().toString(36).substr(2,8)}function Tp(e,t){return{usr:e.state,key:e.key,idx:t}}function Bu(e,t,n,r){return n===void 0&&(n=null),Gs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ta(t):t,{state:n,key:t&&t.key||r||T3()})}function sg(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ta(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function E3(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=sn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Gs({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=sn.Pop;let S=c(),m=S==null?null:S-u;u=S,l&&l({action:a,location:x.location,delta:m})}function f(S,m){a=sn.Push;let h=Bu(x.location,S,m);u=c()+1;let v=Tp(h,u),w=x.createHref(h);try{s.pushState(v,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(w)}o&&l&&l({action:a,location:x.location,delta:1})}function g(S,m){a=sn.Replace;let h=Bu(x.location,S,m);u=c();let v=Tp(h,u),w=x.createHref(h);s.replaceState(v,"",w),o&&l&&l({action:a,location:x.location,delta:0})}function y(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:sg(S);return h=h.replace(/ $/,"%20"),Ve(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let x={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pp,d),l=S,()=>{i.removeEventListener(Pp,d),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(S){return s.go(S)}};return x}var Ep;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ep||(Ep={}));function j3(e,t,n){return n===void 0&&(n="/"),$3(e,t,n)}function $3(e,t,n,r){let i=typeof t=="string"?Ta(t):t,o=ug(i.pathname||"/",n);if(o==null)return null;let s=ag(e);M3(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=B3(o);a=N3(s[l],u)}return a}function ag(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Tr([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Ve(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ag(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:O3(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of lg(o.path))i(o,s,l)}),t}function lg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=lg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function M3(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:I3(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _3=/^:[\w-]+$/,A3=3,L3=2,R3=1,z3=10,D3=-2,jp=e=>e==="*";function O3(e,t){let n=e.split("/"),r=n.length;return n.some(jp)&&(r+=D3),t&&(r+=L3),n.filter(i=>!jp(i)).reduce((i,o)=>i+(_3.test(o)?A3:o===""?R3:z3),r)}function I3(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function N3(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=F3({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:Tr([o,d.pathname]),pathnameBase:H3(Tr([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=Tr([o,d.pathnameBase]))}return s}function F3(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=V3(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:g}=c;if(f==="*"){let x=a[d]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[d];return g&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function V3(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),og(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function B3(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return og(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ug(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Tr=e=>e.join("/").replace(/\/\/+/g,"/"),H3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function U3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cg=["post","put","patch","delete"];new Set(cg);const W3=["get",...cg];new Set(W3);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ys(){return Ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ys.apply(this,arguments)}const G3=P.createContext(null),Y3=P.createContext(null),dg=P.createContext(null),Ea=P.createContext(null),ja=P.createContext({outlet:null,matches:[],isDataRoute:!1}),fg=P.createContext(null);function hd(){return P.useContext(Ea)!=null}function K3(){return hd()||Ve(!1),P.useContext(Ea).location}function Q3(e,t){return X3(e,t)}function X3(e,t,n,r){hd()||Ve(!1);let{navigator:i}=P.useContext(dg),{matches:o}=P.useContext(ja),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=K3(),c;if(t){var d;let S=typeof t=="string"?Ta(t):t;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||Ve(!1),c=S}else c=u;let f=c.pathname||"/",g=f;if(l!=="/"){let S=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=j3(e,{pathname:g}),x=t5(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Tr([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Tr([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?P.createElement(Ea.Provider,{value:{location:Ys({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:sn.Pop}},x):x}function q3(){let e=o5(),t=U3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,null)}const Z3=P.createElement(q3,null);class J3 extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(ja.Provider,{value:this.props.routeContext},P.createElement(fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e5(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(G3);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(ja.Provider,{value:t},r)}function t5(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Ve(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:g}=n,y=d.route.loader&&f[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let g,y=!1,x=null,S=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||Z3,l&&(u<0&&f===0?(s5("route-fallback"),y=!0,S=null):u===f&&(y=!0,S=d.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,f+1)),h=()=>{let v;return g?v=x:y?v=S:d.route.Component?v=P.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,P.createElement(e5,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?P.createElement(J3,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var pg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pg||{});function n5(e){let t=P.useContext(Y3);return t||Ve(!1),t}function r5(e){let t=P.useContext(ja);return t||Ve(!1),t}function i5(e){let t=r5(),n=t.matches[t.matches.length-1];return n.route.id||Ve(!1),n.route.id}function o5(){var e;let t=P.useContext(fg),n=n5(pg.UseRouteError),r=i5();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}const $p={};function s5(e,t,n){$p[e]||($p[e]=!0)}function a5(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hu(e){Ve(!1)}function l5(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sn.Pop,navigator:o,static:s=!1,future:a}=e;hd()&&Ve(!1);let l=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:o,static:s,future:Ys({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ta(r));let{pathname:c="/",search:d="",hash:f="",state:g=null,key:y="default"}=r,x=P.useMemo(()=>{let S=ug(c,l);return S==null?null:{location:{pathname:S,search:d,hash:f,state:g,key:y},navigationType:i}},[l,c,d,f,g,y,i]);return x==null?null:P.createElement(dg.Provider,{value:u},P.createElement(Ea.Provider,{children:n,value:x}))}function u5(e){let{children:t,location:n}=e;return Q3(Uu(t),n)}new Promise(()=>{});function Uu(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let o=[...t,i];if(r.type===P.Fragment){n.push.apply(n,Uu(r.props.children,o));return}r.type!==Hu&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Uu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const c5="6";try{window.__reactRouterVersion=c5}catch{}const d5="startTransition",Mp=hy[d5];function f5(e){let{basename:t,children:n,future:r,window:i}=e,o=P.useRef();o.current==null&&(o.current=P3({window:i,v5Compat:!0}));let s=o.current,[a,l]=P.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=P.useCallback(d=>{u&&Mp?Mp(()=>l(d)):l(d)},[l,u]);return P.useLayoutEffect(()=>s.listen(c),[s,c]),P.useEffect(()=>a5(r),[r]),P.createElement(l5,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var _p;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_p||(_p={}));var Ap;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ap||(Ap={}));var we=function(){return we=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},we.apply(this,arguments)};function Rr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var K="-ms-",Pi="-moz-",V="-webkit-",hg="comm",$a="rule",md="decl",p5="@import",mg="@keyframes",h5="@layer",gg=Math.abs,gd=String.fromCharCode,Wu=Object.assign;function m5(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function vg(e){return e.trim()}function At(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function ps(e,t,n){return e.indexOf(t,n)}function xe(e,t){return e.charCodeAt(t)|0}function zr(e,t,n){return e.slice(t,n)}function bt(e){return e.length}function yg(e){return e.length}function fi(e,t){return t.push(e),e}function g5(e,t){return e.map(t).join("")}function Lp(e,t){return e.filter(function(n){return!At(n,t)})}var Ma=1,Dr=1,xg=0,at=0,he=0,Yr="";function _a(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ma,column:Dr,length:s,return:"",siblings:a}}function qt(e,t){return Wu(_a("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tr(e){for(;e.root;)e=qt(e.root,{children:[e]});fi(e,e.siblings)}function v5(){return he}function y5(){return he=at>0?xe(Yr,--at):0,Dr--,he===10&&(Dr=1,Ma--),he}function vt(){return he=at<xg?xe(Yr,at++):0,Dr++,he===10&&(Dr=1,Ma++),he}function Nn(){return xe(Yr,at)}function hs(){return at}function Aa(e,t){return zr(Yr,e,t)}function Gu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function x5(e){return Ma=Dr=1,xg=bt(Yr=e),at=0,[]}function w5(e){return Yr="",e}function Cl(e){return vg(Aa(at-1,Yu(e===91?e+2:e===40?e+1:e)))}function S5(e){for(;(he=Nn())&&he<33;)vt();return Gu(e)>2||Gu(he)>3?"":" "}function b5(e,t){for(;--t&&vt()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return Aa(e,hs()+(t<6&&Nn()==32&&vt()==32))}function Yu(e){for(;vt();)switch(he){case e:return at;case 34:case 39:e!==34&&e!==39&&Yu(he);break;case 40:e===41&&Yu(e);break;case 92:vt();break}return at}function k5(e,t){for(;vt()&&e+he!==57;)if(e+he===84&&Nn()===47)break;return"/*"+Aa(t,at-1)+"*"+gd(e===47?e:vt())}function C5(e){for(;!Gu(Nn());)vt();return Aa(e,at)}function P5(e){return w5(ms("",null,null,null,[""],e=x5(e),0,[0],e))}function ms(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,d=s,f=0,g=0,y=0,x=1,S=1,m=1,h=0,v="",w=i,b=o,C=r,T=v;S;)switch(y=h,h=vt()){case 40:if(y!=108&&xe(T,d-1)==58){ps(T+=O(Cl(h),"&","&\f"),"&\f",gg(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:T+=Cl(h);break;case 9:case 10:case 13:case 32:T+=S5(y);break;case 92:T+=b5(hs()-1,7);continue;case 47:switch(Nn()){case 42:case 47:fi(T5(k5(vt(),hs()),t,n,l),l);break;default:T+="/"}break;case 123*x:a[u++]=bt(T)*m;case 125*x:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+c:m==-1&&(T=O(T,/\f/g,"")),g>0&&bt(T)-d&&fi(g>32?zp(T+";",r,n,d-1,l):zp(O(T," ","")+";",r,n,d-2,l),l);break;case 59:T+=";";default:if(fi(C=Rp(T,t,n,u,c,i,a,v,w=[],b=[],d,o),o),h===123)if(c===0)ms(T,t,C,C,w,o,d,a,b);else switch(f===99&&xe(T,3)===110?100:f){case 100:case 108:case 109:case 115:ms(e,C,C,r&&fi(Rp(e,C,C,0,0,i,a,v,i,w=[],d,b),b),i,b,d,a,r?w:b);break;default:ms(T,C,C,C,[""],b,0,a,b)}}u=c=g=0,x=m=1,v=T="",d=s;break;case 58:d=1+bt(T),g=y;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&y5()==125)continue}switch(T+=gd(h),h*x){case 38:m=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(bt(T)-1)*m,m=1;break;case 64:Nn()===45&&(T+=Cl(vt())),f=Nn(),c=d=bt(v=T+=C5(hs())),h++;break;case 45:y===45&&bt(T)==2&&(x=0)}}return o}function Rp(e,t,n,r,i,o,s,a,l,u,c,d){for(var f=i-1,g=i===0?o:[""],y=yg(g),x=0,S=0,m=0;x<r;++x)for(var h=0,v=zr(e,f+1,f=gg(S=s[x])),w=e;h<y;++h)(w=vg(S>0?g[h]+" "+v:O(v,/&\f/g,g[h])))&&(l[m++]=w);return _a(e,t,n,i===0?$a:a,l,u,c,d)}function T5(e,t,n,r){return _a(e,t,n,hg,gd(v5()),zr(e,2,-2),0,r)}function zp(e,t,n,r,i){return _a(e,t,n,md,zr(e,0,r),zr(e,r+1,-1),r,i)}function wg(e,t,n){switch(m5(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return Pi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+Pi+e+K+e+e;case 5936:switch(xe(e,t+11)){case 114:return V+e+K+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+K+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+K+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+K+e+e;case 6165:return V+e+K+"flex-"+e+e;case 5187:return V+e+O(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return V+e+K+"flex-item-"+O(e,/flex-|-self/g,"")+(At(e,/flex-|baseline/)?"":K+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return V+e+K+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+K+O(e,"shrink","negative")+e;case 5292:return V+e+K+O(e,"basis","preferred-size")+e;case 6060:return V+"box-"+O(e,"-grow","")+V+e+K+O(e,"grow","positive")+e;case 4554:return V+O(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!At(e,/flex-|baseline/))return K+"grid-column-align"+zr(e,t)+e;break;case 2592:case 3360:return K+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,At(r.props,/grid-\w+-end/)})?~ps(e+(n=n[t].value),"span",0)?e:K+O(e,"-start","")+e+K+"grid-row-span:"+(~ps(n,"span",0)?At(n,/\d+/):+At(n,/\d+/)-+At(e,/\d+/))+";":K+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return At(r.props,/grid-\w+-start/)})?e:K+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+Pi+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ps(e,"stretch",0)?wg(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return K+i+":"+o+u+(s?K+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(xe(e,t+6)===121)return O(e,":",":"+V)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(xe(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+K+"$2box$3")+e;case 100:return O(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function Ks(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function E5(e,t,n,r){switch(e.type){case h5:if(e.children.length)break;case p5:case md:return e.return=e.return||e.value;case hg:return"";case mg:return e.return=e.value+"{"+Ks(e.children,r)+"}";case $a:if(!bt(e.value=e.props.join(",")))return""}return bt(n=Ks(e.children,r))?e.return=e.value+"{"+n+"}":""}function j5(e){var t=yg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function $5(e){return function(t){t.root||(t=t.return)&&e(t)}}function M5(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case md:e.return=wg(e.value,e.length,n);return;case mg:return Ks([qt(e,{value:O(e.value,"@","@"+V)})],r);case $a:if(e.length)return g5(n=e.props,function(i){switch(At(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tr(qt(e,{props:[O(i,/:(read-\w+)/,":"+Pi+"$1")]})),tr(qt(e,{props:[i]})),Wu(e,{props:Lp(n,r)});break;case"::placeholder":tr(qt(e,{props:[O(i,/:(plac\w+)/,":"+V+"input-$1")]})),tr(qt(e,{props:[O(i,/:(plac\w+)/,":"+Pi+"$1")]})),tr(qt(e,{props:[O(i,/:(plac\w+)/,K+"input-$1")]})),tr(qt(e,{props:[i]})),Wu(e,{props:Lp(n,r)});break}return""})}}var _5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},Or=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",Sg="active",bg="data-styled-version",La="6.1.19",vd=`/*!sc*/
`,Qs=typeof window<"u"&&typeof document<"u",A5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),L5={},Ra=Object.freeze([]),Ir=Object.freeze({});function kg(e,t,n){return n===void 0&&(n=Ir),e.theme!==n.theme&&e.theme||t||n.theme}var Cg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),R5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,z5=/(^-|-$)/g;function Dp(e){return e.replace(R5,"-").replace(z5,"")}var D5=/(a)(d)/gi,Bo=52,Op=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ku(e){var t,n="";for(t=Math.abs(e);t>Bo;t=t/Bo|0)n=Op(t%Bo)+n;return(Op(t%Bo)+n).replace(D5,"$1-$2")}var Pl,Pg=5381,hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Tg=function(e){return hr(Pg,e)};function yd(e){return Ku(Tg(e)>>>0)}function O5(e){return e.displayName||e.name||"Component"}function Tl(e){return typeof e=="string"&&!0}var Eg=typeof Symbol=="function"&&Symbol.for,jg=Eg?Symbol.for("react.memo"):60115,I5=Eg?Symbol.for("react.forward_ref"):60112,N5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},F5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V5=((Pl={})[I5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pl[jg]=$g,Pl);function Ip(e){return("type"in(t=e)&&t.type.$$typeof)===jg?$g:"$$typeof"in e?V5[e.$$typeof]:N5;var t}var B5=Object.defineProperty,H5=Object.getOwnPropertyNames,Np=Object.getOwnPropertySymbols,U5=Object.getOwnPropertyDescriptor,W5=Object.getPrototypeOf,Fp=Object.prototype;function Mg(e,t,n){if(typeof t!="string"){if(Fp){var r=W5(t);r&&r!==Fp&&Mg(e,r,n)}var i=H5(t);Np&&(i=i.concat(Np(t)));for(var o=Ip(e),s=Ip(t),a=0;a<i.length;++a){var l=i[a];if(!(l in F5||n&&n[l]||s&&l in s||o&&l in o)){var u=U5(t,l);try{B5(e,l,u)}catch{}}}}return e}function Gn(e){return typeof e=="function"}function xd(e){return typeof e=="object"&&"styledComponentId"in e}function zn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Qi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qu(e,t,n){if(n===void 0&&(n=!1),!n&&!Qi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Qu(e[r],t[r]);else if(Qi(t))for(var r in t)e[r]=Qu(e[r],t[r]);return e}function wd(e,t){Object.defineProperty(e,"toString",{value:t})}function Yn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var G5=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Yn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(vd);return n},e}(),gs=new Map,qs=new Map,vs=1,Ho=function(e){if(gs.has(e))return gs.get(e);for(;qs.has(vs);)vs++;var t=vs++;return gs.set(e,t),qs.set(t,e),t},Y5=function(e,t){vs=t+1,gs.set(e,t),qs.set(t,e)},K5="style[".concat(Or,"][").concat(bg,'="').concat(La,'"]'),Q5=new RegExp("^".concat(Or,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),X5=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},q5=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(vd),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(Q5);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Y5(c,u),X5(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Vp=function(e){for(var t=document.querySelectorAll(K5),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Or)!==Sg&&(q5(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Z5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _g=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Or,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Or,Sg),r.setAttribute(bg,La);var s=Z5();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},J5=function(){function e(t){this.element=_g(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Yn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),e6=function(){function e(t){this.element=_g(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),t6=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Bp=Qs,n6={isServer:!Qs,useCSSOMInjection:!A5},Zs=function(){function e(t,n,r){t===void 0&&(t=Ir),n===void 0&&(n={});var i=this;this.options=we(we({},n6),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qs&&Bp&&(Bp=!1,Vp(this)),wd(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(m){return qs.get(m)}(d);if(f===void 0)return"continue";var g=o.names.get(f),y=s.getGroup(d);if(g===void 0||!g.size||y.length===0)return"continue";var x="".concat(Or,".g").concat(d,'[id="').concat(f,'"]'),S="";g!==void 0&&g.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),l+="".concat(y).concat(x,'{content:"').concat(S,'"}').concat(vd)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Ho(t)},e.prototype.rehydrate=function(){!this.server&&Qs&&Vp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(we(we({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new t6(i):r?new J5(i):new e6(i)}(this.options),new G5(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ho(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ho(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ho(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),r6=/&/g,i6=/^\s*\/\/.*$/gm;function Ag(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ag(n.children,t)),n})}function o6(e){var t,n,r,i=Ir,o=i.options,s=o===void 0?Ir:o,a=i.plugins,l=a===void 0?Ra:a,u=function(f,g,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===$a&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(r6,n).replace(r,u))}),s.prefix&&c.push(M5),c.push(E5);var d=function(f,g,y,x){g===void 0&&(g=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(i6,""),m=P5(y||g?"".concat(y," ").concat(g," { ").concat(S," }"):S);s.namespace&&(m=Ag(m,s.namespace));var h=[];return Ks(m,j5(c.concat($5(function(v){return h.push(v)})))),h};return d.hash=l.length?l.reduce(function(f,g){return g.name||Yn(15),hr(f,g.name)},Pg).toString():"",d}var s6=new Zs,Xu=o6(),Lg=Z.createContext({shouldForwardProp:void 0,styleSheet:s6,stylis:Xu});Lg.Consumer;Z.createContext(void 0);function qu(){return P.useContext(Lg)}var Rg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Xu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,wd(this,function(){throw Yn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Xu),this.name+t.hash},e}(),a6=function(e){return e>="A"&&e<="Z"};function Hp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;a6(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var zg=function(e){return e==null||e===!1||e===""},Dg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!zg(o)&&(Array.isArray(o)&&o.isCss||Gn(o)?r.push("".concat(Hp(i),":"),o,";"):Qi(o)?r.push.apply(r,Rr(Rr(["".concat(i," {")],Dg(o),!1),["}"],!1)):r.push("".concat(Hp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _5||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mn(e,t,n,r){if(zg(e))return[];if(xd(e))return[".".concat(e.styledComponentId)];if(Gn(e)){if(!Gn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return mn(i,t,n,r)}var o;return e instanceof Rg?n?(e.inject(n,r),[e.getName(r)]):[e]:Qi(e)?Dg(e):Array.isArray(e)?Array.prototype.concat.apply(Ra,e.map(function(s){return mn(s,t,n,r)})):[e.toString()]}function Og(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gn(n)&&!xd(n))return!1}return!0}var l6=Tg(La),u6=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Og(t),this.componentId=n,this.baseHash=hr(l6,n),this.baseStyle=r,Zs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zn(i,this.staticRulesId);else{var o=Xs(mn(this.rules,t,n,r)),s=Ku(hr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=zn(i,s),this.staticRulesId=s}else{for(var l=hr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Xs(mn(d,t,n,r));l=hr(l,f+c),u+=f}}if(u){var g=Ku(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=zn(i,g)}}return i},e}(),Xi=Z.createContext(void 0);Xi.Consumer;function c6(e){var t=Z.useContext(Xi),n=P.useMemo(function(){return function(r,i){if(!r)throw Yn(14);if(Gn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Yn(8);return i?we(we({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Z.createElement(Xi.Provider,{value:n},e.children):null}var El={};function d6(e,t,n){var r=xd(e),i=e,o=!Tl(e),s=t.attrs,a=s===void 0?Ra:s,l=t.componentId,u=l===void 0?function(w,b){var C=typeof w!="string"?"sc":Dp(w);El[C]=(El[C]||0)+1;var T="".concat(C,"-").concat(yd(La+C+El[C]));return b?"".concat(b,"-").concat(T):T}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(w){return Tl(w)?"styled.".concat(w):"Styled(".concat(O5(w),")")}(e):c,f=t.displayName&&t.componentId?"".concat(Dp(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(w,b){return x(w,b)&&S(w,b)}}else y=x}var m=new u6(n,f,r?i.componentStyle:void 0);function h(w,b){return function(C,T,E){var z=C.attrs,A=C.componentStyle,ee=C.defaultProps,Be=C.foldedComponentIds,lt=C.styledComponentId,xt=C.target,Zn=Z.useContext(Xi),Jn=qu(),te=C.shouldForwardProp||Jn.shouldForwardProp,$=kg(T,Zn,ee)||Ir,L=function(Gt,He,Mt){for(var Zr,Pn=we(we({},He),{className:void 0,theme:Mt}),qa=0;qa<Gt.length;qa+=1){var ko=Gn(Zr=Gt[qa])?Zr(Pn):Zr;for(var Yt in ko)Pn[Yt]=Yt==="className"?zn(Pn[Yt],ko[Yt]):Yt==="style"?we(we({},Pn[Yt]),ko[Yt]):ko[Yt]}return He.className&&(Pn.className=zn(Pn.className,He.className)),Pn}(z,T,$),D=L.as||xt,H={};for(var U in L)L[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&L.theme===$||(U==="forwardedAs"?H.as=L.forwardedAs:te&&!te(U,D)||(H[U]=L[U]));var Cn=function(Gt,He){var Mt=qu(),Zr=Gt.generateAndInjectStyles(He,Mt.styleSheet,Mt.stylis);return Zr}(A,L),ut=zn(Be,lt);return Cn&&(ut+=" "+Cn),L.className&&(ut+=" "+L.className),H[Tl(D)&&!Cg.has(D)?"class":"className"]=ut,E&&(H.ref=E),P.createElement(D,H)}(v,w,b)}h.displayName=d;var v=Z.forwardRef(h);return v.attrs=g,v.componentStyle=m,v.displayName=d,v.shouldForwardProp=y,v.foldedComponentIds=r?zn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=f,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(b){for(var C=[],T=1;T<arguments.length;T++)C[T-1]=arguments[T];for(var E=0,z=C;E<z.length;E++)Qu(b,z[E],!0);return b}({},i.defaultProps,w):w}}),wd(v,function(){return".".concat(v.styledComponentId)}),o&&Mg(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Up(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Wp=function(e){return Object.assign(e,{isCss:!0})};function J(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Gn(e)||Qi(e))return Wp(mn(Up(Ra,Rr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?mn(r):Wp(mn(Up(r,t)))}function Zu(e,t,n){if(n===void 0&&(n=Ir),!t)throw Yn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,J.apply(void 0,Rr([i],o,!1)))};return r.attrs=function(i){return Zu(e,t,we(we({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Zu(e,t,we(we({},n),i))},r}var Ig=function(e){return Zu(d6,e)},k=Ig;Cg.forEach(function(e){k[e]=Ig(e)});var f6=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Og(t),Zs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Xs(mn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Zs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function p6(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=J.apply(void 0,Rr([e],t,!1)),i="sc-global-".concat(yd(JSON.stringify(r))),o=new f6(r,i),s=function(l){var u=qu(),c=Z.useContext(Xi),d=Z.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Z.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,L5,c,f);else{var g=we(we({},u),{theme:kg(u,d,s.defaultProps)});o.renderStyles(l,g,c,f)}}return Z.memo(s)}function bn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Xs(J.apply(void 0,Rr([e],t,!1))),i=yd(r);return new Rg(i,r)}const h6={colors:{background:"#F2F4F7",backgroundSolid:"#F2F4F7",surface:"#FFFFFF",surfaceHover:"#FFFFFF",primary:"#8B5CF6",primaryGlass:"rgba(139, 92, 246, 0.15)",secondary:"#A78BFA",secondaryGlass:"rgba(167, 139, 250, 0.15)",text:"#2D3436",textSecondary:"#636E72",textMuted:"#B2BEC3",textOnGlass:"#2D3436",accent:"#A78BFA",accentGlass:"rgba(167, 139, 250, 0.15)",success:"#00B894",successGlass:"rgba(0, 184, 148, 0.15)",warning:"#FD79A8",warningGlass:"rgba(253, 121, 168, 0.15)",error:"#D63031",errorGlass:"rgba(214, 48, 49, 0.15)",glass:{backdrop:"rgba(255, 255, 255, 0.8)",backdropHover:"rgba(255, 255, 255, 0.95)",blur:"20px",border:"rgba(148, 163, 184, 0.2)",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"},border:"rgba(148, 163, 184, 0.2)",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"},fonts:{primary:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",secondary:"'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",mono:"'Fira Code', 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', 'Source Code Pro', monospace"},sizes:{maxWidth:"1200px",headerHeight:"70px",borderRadius:{sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"}}},m6={colors:{background:"#0F172A",backgroundSolid:"#0F172A",surface:"#1E293B",surfaceHover:"#334155",primary:"#8B5CF6",primaryGlass:"rgba(139, 92, 246, 0.15)",secondary:"#A78BFA",secondaryGlass:"rgba(167, 139, 250, 0.15)",text:"#F8FAFC",textSecondary:"#94A3B8",textMuted:"#64748B",textOnGlass:"#F8FAFC",accent:"#A78BFA",accentGlass:"rgba(167, 139, 250, 0.15)",success:"#10B981",successGlass:"rgba(16, 185, 129, 0.15)",warning:"#F59E0B",warningGlass:"rgba(245, 158, 11, 0.15)",error:"#EF4444",errorGlass:"rgba(239, 68, 68, 0.15)",glass:{backdrop:"rgba(17, 17, 17, 0.8)",backdropHover:"rgba(23, 23, 23, 0.9)",blur:"20px",border:"rgba(255, 255, 255, 0.1)",shadow:"0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.25)"},border:"rgba(255, 255, 255, 0.1)",shadow:"0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.25)"},fonts:{primary:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",secondary:"'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",mono:"'Fira Code', 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', 'Source Code Pro', monospace"},sizes:{maxWidth:"1200px",headerHeight:"70px",borderRadius:{sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"}}},g6={xs:"0px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"},Ng=P.createContext(),Fg=()=>{const e=P.useContext(Ng);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},v6=()=>{try{const e=localStorage.getItem("portfolio-theme");if(e)return JSON.parse(e)}catch(e){console.warn("Failed to parse stored theme:",e)}return{isDarkMode:window.matchMedia("(prefers-color-scheme: dark)").matches}},Uo=e=>{try{localStorage.setItem("portfolio-theme",JSON.stringify(e))}catch(t){console.warn("Failed to store theme:",t)}},y6=({children:e})=>{const[t,n]=P.useState(()=>v6().isDarkMode),[r,i]=P.useState(!1);P.useEffect(()=>{const c=window.matchMedia("(prefers-color-scheme: dark)"),d=f=>{localStorage.getItem("portfolio-theme-manual")||(n(f.matches),Uo({isDarkMode:f.matches}))};return c.addListener(d),()=>c.removeListener(d)},[]);const u={isDarkMode:t,isTransitioning:r,theme:t?"dark":"light",currentTheme:t?m6:h6,toggleTheme:()=>{i(!0),setTimeout(()=>{const c=!t;n(c),Uo({isDarkMode:c}),localStorage.setItem("portfolio-theme-manual","true"),i(!1)},150)},setTheme:c=>{const d=c==="dark";n(d),Uo({isDarkMode:d}),localStorage.setItem("portfolio-theme-manual","true")},resetToSystemTheme:()=>{const c=window.matchMedia("(prefers-color-scheme: dark)").matches;n(c),Uo({isDarkMode:c}),localStorage.removeItem("portfolio-theme-manual")},isManuallySet:()=>localStorage.getItem("portfolio-theme-manual")==="true",getSystemPreference:()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};return p.jsx(Ng.Provider,{value:u,children:e})},x6=p6`
  /* Google Fonts Import */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  /* CSS Custom Properties */
  :root {
    /* Colors */
    --color-background: ${({theme:e})=>e.colors.background};
    --color-background-solid: ${({theme:e})=>e.colors.backgroundSolid};
    --color-surface: ${({theme:e})=>e.colors.surface};
    --color-primary: ${({theme:e})=>e.colors.primary};
    --color-secondary: ${({theme:e})=>e.colors.secondary};
    --color-accent: ${({theme:e})=>e.colors.accent};
    --color-text: ${({theme:e})=>e.colors.text};
    --color-text-secondary: ${({theme:e})=>e.colors.textSecondary};
    --color-text-muted: ${({theme:e})=>e.colors.textMuted};
    --color-border: ${({theme:e})=>e.colors.border};
    --color-shadow: ${({theme:e})=>e.colors.shadow};
    
    /* Glassmorphism */
    --glass-backdrop: ${({theme:e})=>e.colors.glass.backdrop};
    --glass-blur: ${({theme:e})=>e.colors.glass.blur};
    --glass-border: ${({theme:e})=>e.colors.glass.border};
    --glass-shadow: ${({theme:e})=>e.colors.glass.shadow};
    
    /* Fonts */
    --font-primary: ${({theme:e})=>e.fonts.primary};
    --font-secondary: ${({theme:e})=>e.fonts.secondary};
    --font-mono: ${({theme:e})=>e.fonts.mono};
    
    /* Sizes */
    --max-width: ${({theme:e})=>e.sizes.maxWidth};
    --header-height: ${({theme:e})=>e.sizes.headerHeight};
    
    /* Border Radius */
    --radius-sm: ${({theme:e})=>e.sizes.borderRadius.sm};
    --radius-md: ${({theme:e})=>e.sizes.borderRadius.md};
    --radius-lg: ${({theme:e})=>e.sizes.borderRadius.lg};
    --radius-xl: ${({theme:e})=>e.sizes.borderRadius.xl};
    --radius-full: ${({theme:e})=>e.sizes.borderRadius.full};
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    --transition-spring: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  /* CSS Reset */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Root element */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-height) + 2rem);
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }
  
  /* Body */
  body {
    font-family: var(--font-primary);
    font-weight: 400;
    line-height: 1.6;
    color: var(--color-text);
    background: var(--color-background);
    background-attachment: fixed;
    transition: all var(--transition-normal);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }
  
  /* Focus management */
  :focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
  
  :focus:not(:focus-visible) {
    outline: none;
  }
  
  /* Links */
  a {
    color: inherit;
    text-decoration: none;
    transition: all var(--transition-fast);
  }
  
  a:hover {
    color: var(--color-accent);
  }
  
  /* Lists */
  ul,
  ol {
    list-style: none;
  }
  
  /* Media elements */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  /* Form elements */
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
    transition: all var(--transition-fast);
  }
  
  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  input,
  textarea {
    border: none;
    outline: none;
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--color-text);
    letter-spacing: -0.025em;
  }
  
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    letter-spacing: -0.05em;
  }
  
  h2 {
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 600;
  }
  
  h3 {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 600;
  }
  
  h4 {
    font-size: clamp(1.25rem, 2.5vw, 1.875rem);
    font-weight: 500;
  }
  
  h5 {
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    font-weight: 500;
  }
  
  h6 {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    font-weight: 500;
  }
  
  p {
    margin-bottom: 1rem;
    color: var(--color-text-secondary);
    max-width: 65ch;
  }
  
  /* Code elements */
  code,
  pre {
    font-family: var(--font-mono);
    font-size: 0.875em;
  }
  
  code {
    background: var(--glass-backdrop);
    padding: 0.125rem 0.25rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--glass-border);
  }
  
  pre {
    background: var(--glass-backdrop);
    padding: 1rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--glass-border);
    overflow-x: auto;
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
  }
  
  /* Selection */
  ::selection {
    background-color: var(--color-accent);
    color: white;
  }
  
  ::-moz-selection {
    background-color: var(--color-accent);
    color: white;
  }
  
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--glass-backdrop);
    border-radius: var(--radius-full);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-accent);
  }
  
  /* Utility classes for glassmorphism */
  .glass {
    background: var(--glass-backdrop);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
  }
  
  .glass-hover:hover {
    background: ${({theme:e})=>e.colors.glass.backdropHover};
    transform: translateY(-2px);
  }
  
  /* Animation utilities */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-slide-in-left {
    animation: slideInFromLeft 0.6s ease-out;
  }
  
  .animate-slide-in-right {
    animation: slideInFromRight 0.6s ease-out;
  }
`,Sd=P.createContext({});function lo(e){const t=P.useRef(null);return t.current===null&&(t.current=e()),t.current}const za=P.createContext(null),Da=P.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class w6 extends P.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function S6({children:e,isPresent:t}){const n=P.useId(),r=P.useRef(null),i=P.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=P.useContext(Da);return P.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:u}=i.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return o&&(c.nonce=o),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),p.jsx(w6,{isPresent:t,childRef:r,sizeRef:i,children:P.cloneElement(e,{ref:r})})}const b6=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=lo(k6),l=P.useId(),u=P.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},[a,r]),c=P.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:d=>(a.set(d,!1),()=>a.delete(d))}),o?[Math.random(),u]:[n,u]);return P.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),P.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=p.jsx(S6,{isPresent:n,children:e})),p.jsx(za.Provider,{value:c,children:e})};function k6(){return new Map}function Vg(e=!0){const t=P.useContext(za);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=P.useId();P.useEffect(()=>{e&&i(o)},[e]);const s=P.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Wo=e=>e.key||"";function Gp(e){const t=[];return P.Children.forEach(e,n=>{P.isValidElement(n)&&t.push(n)}),t}const bd=typeof window<"u",kd=bd?P.useLayoutEffect:P.useEffect,Bg=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1})=>{const[a,l]=Vg(s),u=P.useMemo(()=>Gp(e),[e]),c=s&&!a?[]:u.map(Wo),d=P.useRef(!0),f=P.useRef(u),g=lo(()=>new Map),[y,x]=P.useState(u),[S,m]=P.useState(u);kd(()=>{d.current=!1,f.current=u;for(let w=0;w<S.length;w++){const b=Wo(S[w]);c.includes(b)?g.delete(b):g.get(b)!==!0&&g.set(b,!1)}},[S,c.length,c.join("-")]);const h=[];if(u!==y){let w=[...u];for(let b=0;b<S.length;b++){const C=S[b],T=Wo(C);c.includes(T)||(w.splice(b,0,C),h.push(C))}o==="wait"&&h.length&&(w=h),m(Gp(w)),x(u);return}const{forceRender:v}=P.useContext(Sd);return p.jsx(p.Fragment,{children:S.map(w=>{const b=Wo(w),C=s&&!a?!1:u===S||c.includes(b),T=()=>{if(g.has(b))g.set(b,!0);else return;let E=!0;g.forEach(z=>{z||(E=!1)}),E&&(v==null||v(),m(f.current),s&&(l==null||l()),r&&r())};return p.jsx(b6,{isPresent:C,initial:!d.current||n?void 0:!1,custom:C?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:C?void 0:T,children:w},b)})})},Ke=e=>e;let Hg=Ke;function Cd(e){let t;return()=>(t===void 0&&(t=e()),t)}const Nr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ot=e=>e*1e3,It=e=>e/1e3,C6={useManualTiming:!1};function P6(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(l.schedule(u),e()),u(s)}const l={schedule:(u,c=!1,d=!1)=>{const g=d&&r?t:n;return c&&o.add(u),g.has(u)||g.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const Go=["read","resolveKeyframes","update","preRender","render","postRender"],T6=40;function Ug(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Go.reduce((m,h)=>(m[h]=P6(o),m),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=s,g=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,T6),1),i.timestamp=m,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},y=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Go.reduce((m,h)=>{const v=s[h];return m[h]=(w,b=!1,C=!1)=>(n||y(),v.schedule(w,b,C)),m},{}),cancel:m=>{for(let h=0;h<Go.length;h++)s[Go[h]].cancel(m)},state:i,steps:s}}const{schedule:G,cancel:Ht,state:ke,steps:jl}=Ug(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ke,!0),Wg=P.createContext({strict:!1}),Yp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Fr={};for(const e in Yp)Fr[e]={isEnabled:t=>Yp[e].some(n=>!!t[n])};function E6(e){for(const t in e)Fr[t]={...Fr[t],...e[t]}}const j6=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Js(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||j6.has(e)}let Gg=e=>!Js(e);function $6(e){e&&(Gg=t=>t.startsWith("on")?!Js(t):e(t))}try{$6(require("@emotion/is-prop-valid").default)}catch{}function M6(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Gg(i)||n===!0&&Js(i)||!t&&!Js(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function _6(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Oa=P.createContext({});function qi(e){return typeof e=="string"||Array.isArray(e)}function Ia(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Pd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Td=["initial",...Pd];function Na(e){return Ia(e.animate)||Td.some(t=>qi(e[t]))}function Yg(e){return!!(Na(e)||e.variants)}function A6(e,t){if(Na(e)){const{initial:n,animate:r}=e;return{initial:n===!1||qi(n)?n:void 0,animate:qi(r)?r:void 0}}return e.inherit!==!1?t:{}}function L6(e){const{initial:t,animate:n}=A6(e,P.useContext(Oa));return P.useMemo(()=>({initial:t,animate:n}),[Kp(t),Kp(n)])}function Kp(e){return Array.isArray(e)?e.join(" "):e}const R6=Symbol.for("motionComponentSymbol");function mr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function z6(e,t,n){return P.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):mr(n)&&(n.current=r))},[t])}const Ed=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),D6="framerAppearId",Kg="data-"+Ed(D6),{schedule:jd}=Ug(queueMicrotask,!1),Qg=P.createContext({});function O6(e,t,n,r,i){var o,s;const{visualElement:a}=P.useContext(Oa),l=P.useContext(Wg),u=P.useContext(za),c=P.useContext(Da).reducedMotion,d=P.useRef(null);r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const f=d.current,g=P.useContext(Qg);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&I6(d.current,n,i,g);const y=P.useRef(!1);P.useInsertionEffect(()=>{f&&y.current&&f.update(n,u)});const x=n[Kg],S=P.useRef(!!x&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,x))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,x)));return kd(()=>{f&&(y.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),jd.render(f.render),S.current&&f.animationState&&f.animationState.animateChanges())}),P.useEffect(()=>{f&&(!S.current&&f.animationState&&f.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,x)}),S.current=!1))}),f}function I6(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Xg(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&mr(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function Xg(e){if(e)return e.options.allowProjection!==!1?e.projection:Xg(e.parent)}function N6({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,s;e&&E6(e);function a(u,c){let d;const f={...P.useContext(Da),...u,layoutId:F6(u)},{isStatic:g}=f,y=L6(u),x=r(u,g);if(!g&&bd){V6();const S=B6(f);d=S.MeasureLayout,y.visualElement=O6(i,x,f,t,S.ProjectionNode)}return p.jsxs(Oa.Provider,{value:y,children:[d&&y.visualElement?p.jsx(d,{visualElement:y.visualElement,...f}):null,n(i,u,z6(x,y.visualElement,c),x,g,y.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(s=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&s!==void 0?s:""})`}`;const l=P.forwardRef(a);return l[R6]=i,l}function F6({layoutId:e}){const t=P.useContext(Sd).id;return t&&e!==void 0?t+"-"+e:e}function V6(e,t){P.useContext(Wg).strict}function B6(e){const{drag:t,layout:n}=Fr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const H6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function $d(e){return typeof e!="string"||e.includes("-")?!1:!!(H6.indexOf(e)>-1||/[A-Z]/u.test(e))}function Qp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Md(e,t,n,r){if(typeof t=="function"){const[i,o]=Qp(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Qp(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const Ju=e=>Array.isArray(e),U6=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),W6=e=>Ju(e)?e[e.length-1]||0:e,Me=e=>!!(e&&e.getVelocity);function ys(e){const t=Me(e)?e.get():e;return U6(t)?t.toValue():t}function G6({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const s={latestValues:Y6(r,i,o,e),renderState:t()};return n&&(s.onMount=a=>n({props:r,current:a,...s}),s.onUpdate=a=>n(a)),s}const qg=e=>(t,n)=>{const r=P.useContext(Oa),i=P.useContext(za),o=()=>G6(e,t,r,i);return n?o():lo(o)};function Y6(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=ys(o[f]);let{initial:s,animate:a}=e;const l=Na(e),u=Yg(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const d=c?a:s;if(d&&typeof d!="boolean"&&!Ia(d)){const f=Array.isArray(d)?d:[d];for(let g=0;g<f.length;g++){const y=Md(e,f[g]);if(y){const{transitionEnd:x,transition:S,...m}=y;for(const h in m){let v=m[h];if(Array.isArray(v)){const w=c?v.length-1:0;v=v[w]}v!==null&&(i[h]=v)}for(const h in x)i[h]=x[h]}}}return i}const Kr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xn=new Set(Kr),Zg=e=>t=>typeof t=="string"&&t.startsWith(e),Jg=Zg("--"),K6=Zg("var(--"),_d=e=>K6(e)?Q6.test(e.split("/*")[0].trim()):!1,Q6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,e2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ut=(e,t,n)=>n>t?t:n<e?e:n,Qr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Zi={...Qr,transform:e=>Ut(0,1,e)},Yo={...Qr,default:1},uo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Zt=uo("deg"),Et=uo("%"),R=uo("px"),X6=uo("vh"),q6=uo("vw"),Xp={...Et,parse:e=>Et.parse(e)/100,transform:e=>Et.transform(e*100)},Z6={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,radius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,backgroundPositionX:R,backgroundPositionY:R},J6={rotate:Zt,rotateX:Zt,rotateY:Zt,rotateZ:Zt,scale:Yo,scaleX:Yo,scaleY:Yo,scaleZ:Yo,skew:Zt,skewX:Zt,skewY:Zt,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:Zi,originX:Xp,originY:Xp,originZ:R},qp={...Qr,transform:Math.round},Ad={...Z6,...J6,zIndex:qp,size:R,fillOpacity:Zi,strokeOpacity:Zi,numOctaves:qp},ex={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},tx=Kr.length;function nx(e,t,n){let r="",i=!0;for(let o=0;o<tx;o++){const s=Kr[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=e2(a,Ad[s]);if(!l){i=!1;const c=ex[s]||s;r+=`${c}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Ld(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(Xn.has(l)){s=!0;continue}else if(Jg(l)){i[l]=u;continue}else{const c=e2(u,Ad[l]);l.startsWith("origin")?(a=!0,o[l]=c):r[l]=c}}if(t.transform||(s||n?r.transform=nx(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=o;r.transformOrigin=`${l} ${u} ${c}`}}const rx={offset:"stroke-dashoffset",array:"stroke-dasharray"},ix={offset:"strokeDashoffset",array:"strokeDasharray"};function ox(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?rx:ix;e[o.offset]=R.transform(-r);const s=R.transform(t),a=R.transform(n);e[o.array]=`${s} ${a}`}function Zp(e,t,n){return typeof e=="string"?e:R.transform(t+n*e)}function sx(e,t,n){const r=Zp(t,e.x,e.width),i=Zp(n,e.y,e.height);return`${r} ${i}`}function Rd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(Ld(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:g,dimensions:y}=e;f.transform&&(y&&(g.transform=f.transform),delete f.transform),y&&(i!==void 0||o!==void 0||g.transform)&&(g.transformOrigin=sx(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),s!==void 0&&ox(f,s,a,l,!1)}const zd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),t2=()=>({...zd(),attrs:{}}),Dd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function n2(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const r2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function i2(e,t,n,r){n2(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(r2.has(i)?i:Ed(i),t.attrs[i])}const ea={};function ax(e){Object.assign(ea,e)}function o2(e,{layout:t,layoutId:n}){return Xn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ea[e]||e==="opacity")}function Od(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(Me(i[s])||t.style&&Me(t.style[s])||o2(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function s2(e,t,n){const r=Od(e,t,n);for(const i in e)if(Me(e[i])||Me(t[i])){const o=Kr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function lx(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Jp=["x","y","width","height","cx","cy","r"],ux={useVisualState:qg({scrapeMotionValuesFromProps:s2,createRenderState:t2,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const a in i)if(Xn.has(a)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let a=0;a<Jp.length;a++){const l=Jp[a];e[l]!==t[l]&&(s=!0)}s&&G.read(()=>{lx(n,r),G.render(()=>{Rd(r,i,Dd(n.tagName),e.transformTemplate),i2(n,r)})})}})},cx={useVisualState:qg({scrapeMotionValuesFromProps:Od,createRenderState:zd})};function a2(e,t,n){for(const r in t)!Me(t[r])&&!o2(r,n)&&(e[r]=t[r])}function dx({transformTemplate:e},t){return P.useMemo(()=>{const n=zd();return Ld(n,t,e),Object.assign({},n.vars,n.style)},[t])}function fx(e,t){const n=e.style||{},r={};return a2(r,n,e),Object.assign(r,dx(e,t)),r}function px(e,t){const n={},r=fx(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function hx(e,t,n,r){const i=P.useMemo(()=>{const o=t2();return Rd(o,t,Dd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};a2(o,e.style,e),i.style={...o,...i.style}}return i}function mx(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=($d(n)?hx:px)(r,o,s,n),u=M6(r,typeof n=="string",e),c=n!==P.Fragment?{...u,...l,ref:i}:{},{children:d}=r,f=P.useMemo(()=>Me(d)?d.get():d,[d]);return P.createElement(n,{...c,children:f})}}function gx(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...$d(r)?ux:cx,preloadedFeatures:e,useRender:mx(i),createVisualElement:t,Component:r};return N6(s)}}function l2(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Fa(e,t,n){const r=e.getProps();return Md(r,t,n!==void 0?n:r.custom,e)}const vx=Cd(()=>window.ScrollTimeline!==void 0);class yx{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(vx()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class xx extends yx{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Id(e,t){return e?e[t]||e.default||e:void 0}const ec=2e4;function u2(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ec;)t+=n,r=e.next(t);return t>=ec?1/0:t}function Nd(e){return typeof e=="function"}function eh(e,t){e.timeline=t,e.onfinish=null}const Fd=e=>Array.isArray(e)&&typeof e[0]=="number",wx={linearEasing:void 0};function Sx(e,t){const n=Cd(e);return()=>{var r;return(r=wx[t])!==null&&r!==void 0?r:n()}}const ta=Sx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),c2=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(Nr(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function d2(e){return!!(typeof e=="function"&&ta()||!e||typeof e=="string"&&(e in tc||ta())||Fd(e)||Array.isArray(e)&&e.every(d2))}const pi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,tc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:pi([0,.65,.55,1]),circOut:pi([.55,0,1,.45]),backIn:pi([.31,.01,.66,-.59]),backOut:pi([.33,1.53,.69,.99])};function f2(e,t){if(e)return typeof e=="function"&&ta()?c2(e,t):Fd(e)?pi(e):Array.isArray(e)?e.map(n=>f2(n,t)||tc.easeOut):tc[e]}const dt={x:!1,y:!1};function p2(){return dt.x||dt.y}function h2(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const o=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function m2(e,t){const n=h2(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function th(e){return t=>{t.pointerType==="touch"||p2()||e(t)}}function bx(e,t,n={}){const[r,i,o]=m2(e,n),s=th(a=>{const{target:l}=a,u=t(a);if(typeof u!="function"||!l)return;const c=th(d=>{u(d),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,i)});return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const g2=(e,t)=>t?e===t?!0:g2(e,t.parentElement):!1,Vd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,kx=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Cx(e){return kx.has(e.tagName)||e.tabIndex!==-1}const hi=new WeakSet;function nh(e){return t=>{t.key==="Enter"&&e(t)}}function $l(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Px=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=nh(()=>{if(hi.has(n))return;$l(n,"down");const i=nh(()=>{$l(n,"up")}),o=()=>$l(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function rh(e){return Vd(e)&&!p2()}function Tx(e,t,n={}){const[r,i,o]=m2(e,n),s=a=>{const l=a.currentTarget;if(!rh(a)||hi.has(l))return;hi.add(l);const u=t(a),c=(g,y)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!rh(g)||!hi.has(l))&&(hi.delete(l),typeof u=="function"&&u(g,{success:y}))},d=g=>{c(g,n.useGlobalTarget||g2(l,g.target))},f=g=>{c(g,!1)};window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",f,i)};return r.forEach(a=>{!Cx(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),a.addEventListener("focus",u=>Px(u,i),i)}),o}function Ex(e){return e==="x"||e==="y"?dt[e]?null:(dt[e]=!0,()=>{dt[e]=!1}):dt.x||dt.y?null:(dt.x=dt.y=!0,()=>{dt.x=dt.y=!1})}const v2=new Set(["width","height","top","left","right","bottom",...Kr]);let xs;function jx(){xs=void 0}const jt={now:()=>(xs===void 0&&jt.set(ke.isProcessing||C6.useManualTiming?ke.timestamp:performance.now()),xs),set:e=>{xs=e,queueMicrotask(jx)}};function Bd(e,t){e.indexOf(t)===-1&&e.push(t)}function Hd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ud{constructor(){this.subscriptions=[]}add(t){return Bd(this.subscriptions,t),()=>Hd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function y2(e,t){return t?e*(1e3/t):0}const ih=30,$x=e=>!isNaN(parseFloat(e)),Ti={current:void 0};class Mx{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=jt.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=jt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=$x(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ud);const r=this.events[t].add(n);return t==="change"?()=>{r(),G.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ti.current&&Ti.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=jt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ih)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ih);return y2(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Vr(e,t){return new Mx(e,t)}function _x(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Vr(n))}function Ax(e,t){const n=Fa(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=W6(o[s]);_x(e,s,a)}}function Lx(e){return!!(Me(e)&&e.add)}function nc(e,t){const n=e.getValue("willChange");if(Lx(n))return n.add(t)}function x2(e){return e.props[Kg]}const w2=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Rx=1e-7,zx=12;function Dx(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=w2(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Rx&&++a<zx);return s}function co(e,t,n,r){if(e===t&&n===r)return Ke;const i=o=>Dx(o,0,1,e,n);return o=>o===0||o===1?o:w2(i(o),t,r)}const S2=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,b2=e=>t=>1-e(1-t),k2=co(.33,1.53,.69,.99),Wd=b2(k2),C2=S2(Wd),P2=e=>(e*=2)<1?.5*Wd(e):.5*(2-Math.pow(2,-10*(e-1))),Gd=e=>1-Math.sin(Math.acos(e)),T2=b2(Gd),E2=S2(Gd),j2=e=>/^0[^.\s]+$/u.test(e);function Ox(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||j2(e):!0}const Ei=e=>Math.round(e*1e5)/1e5,Yd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ix(e){return e==null}const Nx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kd=(e,t)=>n=>!!(typeof n=="string"&&Nx.test(n)&&n.startsWith(e)||t&&!Ix(n)&&Object.prototype.hasOwnProperty.call(n,t)),$2=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Yd);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},Fx=e=>Ut(0,255,e),Ml={...Qr,transform:e=>Math.round(Fx(e))},Dn={test:Kd("rgb","red"),parse:$2("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ml.transform(e)+", "+Ml.transform(t)+", "+Ml.transform(n)+", "+Ei(Zi.transform(r))+")"};function Vx(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const rc={test:Kd("#"),parse:Vx,transform:Dn.transform},gr={test:Kd("hsl","hue"),parse:$2("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Et.transform(Ei(t))+", "+Et.transform(Ei(n))+", "+Ei(Zi.transform(r))+")"},je={test:e=>Dn.test(e)||rc.test(e)||gr.test(e),parse:e=>Dn.test(e)?Dn.parse(e):gr.test(e)?gr.parse(e):rc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Dn.transform(e):gr.transform(e)},Bx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Hx(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Yd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Bx))===null||n===void 0?void 0:n.length)||0)>0}const M2="number",_2="color",Ux="var",Wx="var(",oh="${}",Gx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ji(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(Gx,l=>(je.test(l)?(r.color.push(o),i.push(_2),n.push(je.parse(l))):l.startsWith(Wx)?(r.var.push(o),i.push(Ux),n.push(l)):(r.number.push(o),i.push(M2),n.push(parseFloat(l))),++o,oh)).split(oh);return{values:n,split:a,indexes:r,types:i}}function A2(e){return Ji(e).values}function L2(e){const{split:t,types:n}=Ji(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===M2?o+=Ei(i[s]):a===_2?o+=je.transform(i[s]):o+=i[s]}return o}}const Yx=e=>typeof e=="number"?0:e;function Kx(e){const t=A2(e);return L2(e)(t.map(Yx))}const yn={test:Hx,parse:A2,createTransformer:L2,getAnimatableNone:Kx},Qx=new Set(["brightness","contrast","saturate","opacity"]);function Xx(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Yd)||[];if(!r)return e;const i=n.replace(r,"");let o=Qx.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const qx=/\b([a-z-]*)\(.*?\)/gu,ic={...yn,getAnimatableNone:e=>{const t=e.match(qx);return t?t.map(Xx).join(" "):e}},Zx={...Ad,color:je,backgroundColor:je,outlineColor:je,fill:je,stroke:je,borderColor:je,borderTopColor:je,borderRightColor:je,borderBottomColor:je,borderLeftColor:je,filter:ic,WebkitFilter:ic},Qd=e=>Zx[e];function R2(e,t){let n=Qd(e);return n!==ic&&(n=yn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Jx=new Set(["auto","none","0"]);function e8(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!Jx.has(o)&&Ji(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=R2(n,i)}const sh=e=>e===Qr||e===R,ah=(e,t)=>parseFloat(e.split(", ")[t]),lh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return ah(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?ah(o[1],e):0}},t8=new Set(["x","y","z"]),n8=Kr.filter(e=>!t8.has(e));function r8(e){const t=[];return n8.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Br={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:lh(4,13),y:lh(5,14)};Br.translateX=Br.x;Br.translateY=Br.y;const Fn=new Set;let oc=!1,sc=!1;function z2(){if(sc){const e=Array.from(Fn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=r8(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}sc=!1,oc=!1,Fn.forEach(e=>e.complete()),Fn.clear()}function D2(){Fn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(sc=!0)})}function i8(){D2(),z2()}class Xd{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Fn.add(this),oc||(oc=!0,G.read(D2),G.resolveKeyframes(z2))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Fn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Fn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const O2=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),o8=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function s8(e){const t=o8.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function I2(e,t,n=1){const[r,i]=s8(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return O2(s)?parseFloat(s):s}return _d(i)?I2(i,t,n+1):i}const N2=e=>t=>t.test(e),a8={test:e=>e==="auto",parse:e=>e},F2=[Qr,R,Et,Zt,q6,X6,a8],uh=e=>F2.find(N2(e));class V2 extends Xd{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),_d(u))){const c=I2(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!v2.has(r)||t.length!==2)return;const[i,o]=t,s=uh(i),a=uh(o);if(s!==a)if(sh(s)&&sh(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)Ox(t[i])&&r.push(i);r.length&&e8(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Br[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Br[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const ch=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(yn.test(e)||e==="0")&&!e.startsWith("url("));function l8(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function u8(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=ch(i,t),a=ch(o,t);return!s||!a?!1:l8(e)||(n==="spring"||Nd(n))&&r}const c8=e=>e!==null;function Va(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(c8),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const d8=40;class B2{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=jt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>d8?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&i8(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=jt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!u8(t,r,i,o))if(s)this.options.duration=0;else{l&&l(Va(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const oe=(e,t,n)=>e+(t-e)*n;function _l(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function f8({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=_l(l,a,e+1/3),o=_l(l,a,e),s=_l(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function na(e,t){return n=>n>0?t:e}const Al=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},p8=[rc,Dn,gr],h8=e=>p8.find(t=>t.test(e));function dh(e){const t=h8(e);if(!t)return!1;let n=t.parse(e);return t===gr&&(n=f8(n)),n}const fh=(e,t)=>{const n=dh(e),r=dh(t);if(!n||!r)return na(e,t);const i={...n};return o=>(i.red=Al(n.red,r.red,o),i.green=Al(n.green,r.green,o),i.blue=Al(n.blue,r.blue,o),i.alpha=oe(n.alpha,r.alpha,o),Dn.transform(i))},m8=(e,t)=>n=>t(e(n)),fo=(...e)=>e.reduce(m8),ac=new Set(["none","hidden"]);function g8(e,t){return ac.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function v8(e,t){return n=>oe(e,t,n)}function qd(e){return typeof e=="number"?v8:typeof e=="string"?_d(e)?na:je.test(e)?fh:w8:Array.isArray(e)?H2:typeof e=="object"?je.test(e)?fh:y8:na}function H2(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>qd(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function y8(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=qd(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function x8(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const w8=(e,t)=>{const n=yn.createTransformer(t),r=Ji(e),i=Ji(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?ac.has(e)&&!i.values.length||ac.has(t)&&!r.values.length?g8(e,t):fo(H2(x8(r,i),i.values),n):na(e,t)};function U2(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?oe(e,t,n):qd(e)(e,t)}const S8=5;function W2(e,t,n){const r=Math.max(t-S8,0);return y2(n-e(r),t-r)}const le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ll=.001;function b8({duration:e=le.duration,bounce:t=le.bounce,velocity:n=le.velocity,mass:r=le.mass}){let i,o,s=1-t;s=Ut(le.minDamping,le.maxDamping,s),e=Ut(le.minDuration,le.maxDuration,It(e)),s<1?(i=u=>{const c=u*s,d=c*e,f=c-n,g=lc(u,s),y=Math.exp(-d);return Ll-f/g*y},o=u=>{const d=u*s*e,f=d*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-d),x=lc(Math.pow(u,2),s);return(-i(u)+Ll>0?-1:1)*((f-g)*y)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Ll+c*d},o=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=C8(i,o,a);if(e=Ot(e),isNaN(l))return{stiffness:le.stiffness,damping:le.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const k8=12;function C8(e,t,n){let r=n;for(let i=1;i<k8;i++)r=r-e(r)/t(r);return r}function lc(e,t){return e*Math.sqrt(1-t*t)}const P8=["duration","bounce"],T8=["stiffness","damping","mass"];function ph(e,t){return t.some(n=>e[n]!==void 0)}function E8(e){let t={velocity:le.velocity,stiffness:le.stiffness,damping:le.damping,mass:le.mass,isResolvedFromDuration:!1,...e};if(!ph(e,T8)&&ph(e,P8))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Ut(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:le.mass,stiffness:i,damping:o}}else{const n=b8(e);t={...t,...n,mass:le.mass},t.isResolvedFromDuration=!0}return t}function G2(e=le.visualDuration,t=le.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:g}=E8({...n,velocity:-It(n.velocity||0)}),y=f||0,x=u/(2*Math.sqrt(l*c)),S=s-o,m=It(Math.sqrt(l/c)),h=Math.abs(S)<5;r||(r=h?le.restSpeed.granular:le.restSpeed.default),i||(i=h?le.restDelta.granular:le.restDelta.default);let v;if(x<1){const b=lc(m,x);v=C=>{const T=Math.exp(-x*m*C);return s-T*((y+x*m*S)/b*Math.sin(b*C)+S*Math.cos(b*C))}}else if(x===1)v=b=>s-Math.exp(-m*b)*(S+(y+m*S)*b);else{const b=m*Math.sqrt(x*x-1);v=C=>{const T=Math.exp(-x*m*C),E=Math.min(b*C,300);return s-T*((y+x*m*S)*Math.sinh(E)+b*S*Math.cosh(E))/b}}const w={calculatedDuration:g&&d||null,next:b=>{const C=v(b);if(g)a.done=b>=d;else{let T=0;x<1&&(T=b===0?Ot(y):W2(v,b,C));const E=Math.abs(T)<=r,z=Math.abs(s-C)<=i;a.done=E&&z}return a.value=a.done?s:C,a},toString:()=>{const b=Math.min(u2(w),ec),C=c2(T=>w.next(b*T).value,b,30);return b+"ms "+C}};return w}function hh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},g=E=>a!==void 0&&E<a||l!==void 0&&E>l,y=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let x=n*t;const S=d+x,m=s===void 0?S:s(S);m!==S&&(x=m-d);const h=E=>-x*Math.exp(-E/r),v=E=>m+h(E),w=E=>{const z=h(E),A=v(E);f.done=Math.abs(z)<=u,f.value=f.done?m:A};let b,C;const T=E=>{g(f.value)&&(b=E,C=G2({keyframes:[f.value,y(f.value)],velocity:W2(v,E,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return T(0),{calculatedDuration:null,next:E=>{let z=!1;return!C&&b===void 0&&(z=!0,w(E),T(E)),b!==void 0&&E>=b?C.next(E-b):(!z&&w(E),f)}}}const j8=co(.42,0,1,1),$8=co(0,0,.58,1),Y2=co(.42,0,.58,1),M8=e=>Array.isArray(e)&&typeof e[0]!="number",_8={linear:Ke,easeIn:j8,easeInOut:Y2,easeOut:$8,circIn:Gd,circInOut:E2,circOut:T2,backIn:Wd,backInOut:C2,backOut:k2,anticipate:P2},mh=e=>{if(Fd(e)){Hg(e.length===4);const[t,n,r,i]=e;return co(t,n,r,i)}else if(typeof e=="string")return _8[e];return e};function A8(e,t,n){const r=[],i=n||U2,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Ke:t;a=fo(l,a)}r.push(a)}return r}function K2(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Hg(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=A8(t,r,i),l=a.length,u=c=>{if(s&&c<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const f=Nr(e[d],e[d+1],c);return a[d](f)};return n?c=>u(Ut(e[0],e[o-1],c)):u}function L8(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Nr(0,t,r);e.push(oe(n,1,i))}}function R8(e){const t=[0];return L8(t,e.length-1),t}function z8(e,t){return e.map(n=>n*t)}function D8(e,t){return e.map(()=>t||Y2).splice(0,e.length-1)}function ra({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=M8(r)?r.map(mh):mh(r),o={done:!1,value:t[0]},s=z8(n&&n.length===t.length?n:R8(t),e),a=K2(s,t,{ease:Array.isArray(i)?i:D8(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const O8=e=>{const t=({timestamp:n})=>e(n);return{start:()=>G.update(t,!0),stop:()=>Ht(t),now:()=>ke.isProcessing?ke.timestamp:jt.now()}},I8={decay:hh,inertia:hh,tween:ra,keyframes:ra,spring:G2},N8=e=>e/100;class Zd extends B2{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||Xd,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=Nd(n)?n:I8[n]||ra;let l,u;a!==ra&&typeof t[0]!="number"&&(l=fo(N8,U2(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=u2(c));const{calculatedDuration:d}=c,f=d+i,g=f*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:g,repeatType:y,repeatDelay:x,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>c;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let v=this.currentTime,w=o;if(g){const E=Math.min(this.currentTime,c)/d;let z=Math.floor(E),A=E%1;!A&&E>=1&&(A=1),A===1&&z--,z=Math.min(z,g+1),!!(z%2)&&(y==="reverse"?(A=1-A,x&&(A-=x/d)):y==="mirror"&&(w=s)),v=Ut(0,1,A)*d}const b=h?{done:!1,value:l[0]}:w.next(v);a&&(b.value=a(b.value));let{done:C}=b;!h&&u!==null&&(C=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return T&&i!==void 0&&(b.value=Va(l,this.options,i)),S&&S(b.value),T&&this.finish(),b}get duration(){const{resolved:t}=this;return t?It(t.calculatedDuration):0}get time(){return It(this.currentTime)}set time(t){t=Ot(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=It(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=O8,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const F8=new Set(["opacity","clipPath","filter","transform"]);function V8(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=f2(a,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const B8=Cd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ia=10,H8=2e4;function U8(e){return Nd(e.type)||e.type==="spring"||!d2(e.ease)}function W8(e,t){const n=new Zd({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<H8;)r=n.sample(o),i.push(r.value),o+=ia;return{times:void 0,keyframes:i,duration:o-ia,ease:"linear"}}const Q2={anticipate:P2,backInOut:C2,circInOut:E2};function G8(e){return e in Q2}class gh extends B2{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new V2(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:s,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof o=="string"&&ta()&&G8(o)&&(o=Q2[o]),U8(this.options)){const{onComplete:d,onUpdate:f,motionValue:g,element:y,...x}=this.options,S=W8(t,x);t=S.keyframes,t.length===1&&(t[1]=t[0]),r=S.duration,i=S.times,o=S.ease,s="keyframes"}const c=V8(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:o});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(eh(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:d}=this.options;a.set(Va(t,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:i,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return It(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return It(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Ot(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ke;const{animation:r}=n;eh(r,t)}return Ke}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:f,...g}=this.options,y=new Zd({...g,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),x=Ot(this.time);u.setWithVelocity(y.sample(x-ia).value,y.sample(x).value,ia)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return B8()&&r&&F8.has(r)&&!l&&!u&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const Y8={type:"spring",stiffness:500,damping:25,restSpeed:10},K8=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Q8={type:"keyframes",duration:.8},X8={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},q8=(e,{keyframes:t})=>t.length>2?Q8:Xn.has(e)?e.startsWith("scale")?K8(t[1]):Y8:X8;function Z8({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Jd=(e,t,n,r={},i,o)=>s=>{const a=Id(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Ot(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};Z8(a)||(c={...c,...q8(e,c)}),c.duration&&(c.duration=Ot(c.duration)),c.repeatDelay&&(c.repeatDelay=Ot(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!o&&t.get()!==void 0){const f=Va(c.keyframes,a);if(f!==void 0)return G.update(()=>{c.onUpdate(f),c.onComplete()}),new xx([])}return!o&&gh.supports(c)?new gh(c):new Zd(c)};function J8({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function X2(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const f=e.getValue(d,(o=e.latestValues[d])!==null&&o!==void 0?o:null),g=l[d];if(g===void 0||c&&J8(c,d))continue;const y={delay:n,...Id(s||{},d)};let x=!1;if(window.MotionHandoffAnimation){const m=x2(e);if(m){const h=window.MotionHandoffAnimation(m,d,G);h!==null&&(y.startTime=h,x=!0)}}nc(e,d),f.start(Jd(d,f,g,e.shouldReduceMotion&&v2.has(d)?{type:!1}:y,e,x));const S=f.animation;S&&u.push(S)}return a&&Promise.all(u).then(()=>{G.update(()=>{a&&Ax(e,a)})}),u}function uc(e,t,n={}){var r;const i=Fa(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(X2(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=o;return e7(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function e7(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(t7).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(uc(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function t7(e,t){return e.sortNodePosition(t)}function n7(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>uc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=uc(e,t,n);else{const i=typeof t=="function"?Fa(e,t,n.custom):t;r=Promise.all(X2(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const r7=Td.length;function q2(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?q2(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<r7;n++){const r=Td[n],i=e.props[r];(qi(i)||i===!1)&&(t[r]=i)}return t}const i7=[...Pd].reverse(),o7=Pd.length;function s7(e){return t=>Promise.all(t.map(({animation:n,options:r})=>n7(e,n,r)))}function a7(e){let t=s7(e),n=vh(),r=!0;const i=l=>(u,c)=>{var d;const f=Fa(e,c,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:g,transitionEnd:y,...x}=f;u={...u,...x,...y}}return u};function o(l){t=l(e)}function s(l){const{props:u}=e,c=q2(e.parent)||{},d=[],f=new Set;let g={},y=1/0;for(let S=0;S<o7;S++){const m=i7[S],h=n[m],v=u[m]!==void 0?u[m]:c[m],w=qi(v),b=m===l?h.isActive:null;b===!1&&(y=S);let C=v===c[m]&&v!==u[m]&&w;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...g},!h.isActive&&b===null||!v&&!h.prevProp||Ia(v)||typeof v=="boolean")continue;const T=l7(h.prevProp,v);let E=T||m===l&&h.isActive&&!C&&w||S>y&&w,z=!1;const A=Array.isArray(v)?v:[v];let ee=A.reduce(i(m),{});b===!1&&(ee={});const{prevResolvedValues:Be={}}=h,lt={...Be,...ee},xt=te=>{E=!0,f.has(te)&&(z=!0,f.delete(te)),h.needsAnimating[te]=!0;const $=e.getValue(te);$&&($.liveStyle=!1)};for(const te in lt){const $=ee[te],L=Be[te];if(g.hasOwnProperty(te))continue;let D=!1;Ju($)&&Ju(L)?D=!l2($,L):D=$!==L,D?$!=null?xt(te):f.add(te):$!==void 0&&f.has(te)?xt(te):h.protectedKeys[te]=!0}h.prevProp=v,h.prevResolvedValues=ee,h.isActive&&(g={...g,...ee}),r&&e.blockInitialAnimation&&(E=!1),E&&(!(C&&T)||z)&&d.push(...A.map(te=>({animation:te,options:{type:m}})))}if(f.size){const S={};f.forEach(m=>{const h=e.getBaseTarget(m),v=e.getValue(m);v&&(v.liveStyle=!0),S[m]=h??null}),d.push({animation:S})}let x=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(f=>{var g;return(g=f.animationState)===null||g===void 0?void 0:g.setActive(l,u)}),n[l].isActive=u;const d=s(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=vh(),r=!0}}}function l7(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!l2(t,e):!1}function Tn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vh(){return{animate:Tn(!0),whileInView:Tn(),whileHover:Tn(),whileTap:Tn(),whileDrag:Tn(),whileFocus:Tn(),exit:Tn()}}class kn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class u7 extends kn{constructor(t){super(t),t.animationState||(t.animationState=a7(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ia(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let c7=0;class d7 extends kn{constructor(){super(...arguments),this.id=c7++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const f7={animation:{Feature:u7},exit:{Feature:d7}};function eo(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function po(e){return{point:{x:e.pageX,y:e.pageY}}}const p7=e=>t=>Vd(t)&&e(t,po(t));function ji(e,t,n,r){return eo(e,t,p7(n),r)}const yh=(e,t)=>Math.abs(e-t);function h7(e,t){const n=yh(e.x,t.x),r=yh(e.y,t.y);return Math.sqrt(n**2+r**2)}class Z2{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=zl(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=h7(d.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:y}=d,{timestamp:x}=ke;this.history.push({...y,timestamp:x});const{onStart:S,onMove:m}=this.handlers;f||(S&&S(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Rl(f,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=zl(d.type==="pointercancel"?this.lastMoveEventInfo:Rl(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,S),y&&y(d,S)},!Vd(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=po(t),a=Rl(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=ke;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,zl(a,this.history)),this.removeListeners=fo(ji(this.contextWindow,"pointermove",this.handlePointerMove),ji(this.contextWindow,"pointerup",this.handlePointerUp),ji(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ht(this.updatePoint)}}function Rl(e,t){return t?{point:t(e.point)}:e}function xh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function zl({point:e},t){return{point:e,delta:xh(e,J2(t)),offset:xh(e,m7(t)),velocity:g7(t,.1)}}function m7(e){return e[0]}function J2(e){return e[e.length-1]}function g7(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=J2(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ot(t)));)n--;if(!r)return{x:0,y:0};const o=It(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const ev=1e-4,v7=1-ev,y7=1+ev,tv=.01,x7=0-tv,w7=0+tv;function Xe(e){return e.max-e.min}function S7(e,t,n){return Math.abs(e-t)<=n}function wh(e,t,n,r=.5){e.origin=r,e.originPoint=oe(t.min,t.max,e.origin),e.scale=Xe(n)/Xe(t),e.translate=oe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=v7&&e.scale<=y7||isNaN(e.scale))&&(e.scale=1),(e.translate>=x7&&e.translate<=w7||isNaN(e.translate))&&(e.translate=0)}function $i(e,t,n,r){wh(e.x,t.x,n.x,r?r.originX:void 0),wh(e.y,t.y,n.y,r?r.originY:void 0)}function Sh(e,t,n){e.min=n.min+t.min,e.max=e.min+Xe(t)}function b7(e,t,n){Sh(e.x,t.x,n.x),Sh(e.y,t.y,n.y)}function bh(e,t,n){e.min=t.min-n.min,e.max=e.min+Xe(t)}function Mi(e,t,n){bh(e.x,t.x,n.x),bh(e.y,t.y,n.y)}function k7(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?oe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?oe(n,e,r.max):Math.min(e,n)),e}function kh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function C7(e,{top:t,left:n,bottom:r,right:i}){return{x:kh(e.x,n,i),y:kh(e.y,t,r)}}function Ch(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function P7(e,t){return{x:Ch(e.x,t.x),y:Ch(e.y,t.y)}}function T7(e,t){let n=.5;const r=Xe(e),i=Xe(t);return i>r?n=Nr(t.min,t.max-r,e.min):r>i&&(n=Nr(e.min,e.max-i,t.min)),Ut(0,1,n)}function E7(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const cc=.35;function j7(e=cc){return e===!1?e=0:e===!0&&(e=cc),{x:Ph(e,"left","right"),y:Ph(e,"top","bottom")}}function Ph(e,t,n){return{min:Th(e,t),max:Th(e,n)}}function Th(e,t){return typeof e=="number"?e:e[t]||0}const Eh=()=>({translate:0,scale:1,origin:0,originPoint:0}),vr=()=>({x:Eh(),y:Eh()}),jh=()=>({min:0,max:0}),fe=()=>({x:jh(),y:jh()});function et(e){return[e("x"),e("y")]}function nv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function $7({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function M7(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Dl(e){return e===void 0||e===1}function dc({scale:e,scaleX:t,scaleY:n}){return!Dl(e)||!Dl(t)||!Dl(n)}function Mn(e){return dc(e)||rv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function rv(e){return $h(e.x)||$h(e.y)}function $h(e){return e&&e!=="0%"}function oa(e,t,n){const r=e-n,i=t*r;return n+i}function Mh(e,t,n,r,i){return i!==void 0&&(e=oa(e,i,r)),oa(e,n,r)+t}function fc(e,t=0,n=1,r,i){e.min=Mh(e.min,t,n,r,i),e.max=Mh(e.max,t,n,r,i)}function iv(e,{x:t,y:n}){fc(e.x,t.translate,t.scale,t.originPoint),fc(e.y,n.translate,n.scale,n.originPoint)}const _h=.999999999999,Ah=1.0000000000001;function _7(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&xr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,iv(e,s)),r&&Mn(o.latestValues)&&xr(e,o.latestValues))}t.x<Ah&&t.x>_h&&(t.x=1),t.y<Ah&&t.y>_h&&(t.y=1)}function yr(e,t){e.min=e.min+t,e.max=e.max+t}function Lh(e,t,n,r,i=.5){const o=oe(e.min,e.max,i);fc(e,t,n,o,r)}function xr(e,t){Lh(e.x,t.x,t.scaleX,t.scale,t.originX),Lh(e.y,t.y,t.scaleY,t.scale,t.originY)}function ov(e,t){return nv(M7(e.getBoundingClientRect(),t))}function A7(e,t,n){const r=ov(e,n),{scroll:i}=t;return i&&(yr(r.x,i.offset.x),yr(r.y,i.offset.y)),r}const sv=({current:e})=>e?e.ownerDocument.defaultView:null,L7=new WeakMap;class R7{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=fe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(po(c).point)},o=(c,d)=>{const{drag:f,dragPropagation:g,onDragStart:y}=this.getProps();if(f&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ex(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),et(S=>{let m=this.getAxisMotionValue(S).get()||0;if(Et.test(m)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[S];v&&(m=Xe(v)*(parseFloat(m)/100))}}this.originPoint[S]=m}),y&&G.postRender(()=>y(c,d)),nc(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:y,onDrag:x}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:S}=d;if(g&&this.currentDirection===null){this.currentDirection=z7(S),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,S),this.updateAxis("y",d.point,S),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>et(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Z2(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:sv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&G.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ko(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=k7(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&mr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=C7(i.layoutBox,n):this.constraints=!1,this.elastic=j7(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&et(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=E7(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!mr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=A7(r,i.root,this.visualElement.getTransformPagePoint());let s=P7(i.layout.layoutBox,o);if(n){const a=n($7(s));this.hasMutatedConstraints=!!a,a&&(s=nv(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=et(c=>{if(!Ko(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const f=i?200:1e6,g=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return nc(this.visualElement,t),r.start(Jd(t,r,0,n,this.visualElement,!1))}stopAnimation(){et(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){et(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){et(n=>{const{drag:r}=this.getProps();if(!Ko(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-oe(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!mr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};et(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=T7({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),et(s=>{if(!Ko(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(oe(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;L7.set(this.visualElement,this);const t=this.visualElement.current,n=ji(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();mr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),G.read(r);const s=eo(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(et(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=cc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Ko(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function z7(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class D7 extends kn{constructor(t){super(t),this.removeGroupControls=Ke,this.removeListeners=Ke,this.controls=new R7(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ke}unmount(){this.removeGroupControls(),this.removeListeners()}}const Rh=e=>(t,n)=>{e&&G.postRender(()=>e(t,n))};class O7 extends kn{constructor(){super(...arguments),this.removePointerDownListener=Ke}onPointerDown(t){this.session=new Z2(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:sv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Rh(t),onStart:Rh(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&G.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=ji(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ws={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function zh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ai={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(R.test(e))e=parseFloat(e);else return e;const n=zh(e,t.target.x),r=zh(e,t.target.y);return`${n}% ${r}%`}},I7={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=yn.parse(e);if(i.length>5)return r;const o=yn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=oe(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class N7 extends P.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;ax(F7),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ws.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||G.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),jd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function av(e){const[t,n]=Vg(),r=P.useContext(Sd);return p.jsx(N7,{...e,layoutGroup:r,switchLayoutGroup:P.useContext(Qg),isPresent:t,safeToRemove:n})}const F7={borderRadius:{...ai,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ai,borderTopRightRadius:ai,borderBottomLeftRadius:ai,borderBottomRightRadius:ai,boxShadow:I7};function V7(e,t,n){const r=Me(e)?e:Vr(e);return r.start(Jd("",r,t,n)),r.animation}function B7(e){return e instanceof SVGElement&&e.tagName!=="svg"}const H7=(e,t)=>e.depth-t.depth;class U7{constructor(){this.children=[],this.isDirty=!1}add(t){Bd(this.children,t),this.isDirty=!0}remove(t){Hd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(H7),this.isDirty=!1,this.children.forEach(t)}}function W7(e,t){const n=jt.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Ht(r),e(o-t))};return G.read(r,!0),()=>Ht(r)}const lv=["TopLeft","TopRight","BottomLeft","BottomRight"],G7=lv.length,Dh=e=>typeof e=="string"?parseFloat(e):e,Oh=e=>typeof e=="number"||R.test(e);function Y7(e,t,n,r,i,o){i?(e.opacity=oe(0,n.opacity!==void 0?n.opacity:1,K7(r)),e.opacityExit=oe(t.opacity!==void 0?t.opacity:1,0,Q7(r))):o&&(e.opacity=oe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<G7;s++){const a=`border${lv[s]}Radius`;let l=Ih(t,a),u=Ih(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Oh(l)===Oh(u)?(e[a]=Math.max(oe(Dh(l),Dh(u),r),0),(Et.test(u)||Et.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=oe(t.rotate||0,n.rotate||0,r))}function Ih(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const K7=uv(0,.5,T2),Q7=uv(.5,.95,Ke);function uv(e,t,n){return r=>r<e?0:r>t?1:n(Nr(e,t,r))}function Nh(e,t){e.min=t.min,e.max=t.max}function Je(e,t){Nh(e.x,t.x),Nh(e.y,t.y)}function Fh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Vh(e,t,n,r,i){return e-=t,e=oa(e,1/n,r),i!==void 0&&(e=oa(e,1/i,r)),e}function X7(e,t=0,n=1,r=.5,i,o=e,s=e){if(Et.test(t)&&(t=parseFloat(t),t=oe(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=oe(o.min,o.max,r);e===o&&(a-=t),e.min=Vh(e.min,t,n,a,i),e.max=Vh(e.max,t,n,a,i)}function Bh(e,t,[n,r,i],o,s){X7(e,t[n],t[r],t[i],t.scale,o,s)}const q7=["x","scaleX","originX"],Z7=["y","scaleY","originY"];function Hh(e,t,n,r){Bh(e.x,t,q7,n?n.x:void 0,r?r.x:void 0),Bh(e.y,t,Z7,n?n.y:void 0,r?r.y:void 0)}function Uh(e){return e.translate===0&&e.scale===1}function cv(e){return Uh(e.x)&&Uh(e.y)}function Wh(e,t){return e.min===t.min&&e.max===t.max}function J7(e,t){return Wh(e.x,t.x)&&Wh(e.y,t.y)}function Gh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function dv(e,t){return Gh(e.x,t.x)&&Gh(e.y,t.y)}function Yh(e){return Xe(e.x)/Xe(e.y)}function Kh(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class ew{constructor(){this.members=[]}add(t){Bd(this.members,t),t.scheduleRender()}remove(t){if(Hd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function tw(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:g,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),g&&(r+=`skewX(${g}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const _n={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},mi=typeof window<"u"&&window.MotionDebug!==void 0,Ol=["","X","Y","Z"],nw={visibility:"hidden"},Qh=1e3;let rw=0;function Il(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function fv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=x2(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",G,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&fv(r)}function pv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=rw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,mi&&(_n.totalNodes=_n.resolvedTargetDeltas=_n.recalculatedProjection=0),this.nodes.forEach(sw),this.nodes.forEach(dw),this.nodes.forEach(fw),this.nodes.forEach(aw),mi&&window.MotionDebug.record(_n)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new U7)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Ud),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=B7(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=W7(f,250),ws.hasAnimatedSinceResize&&(ws.hasAnimatedSinceResize=!1,this.nodes.forEach(qh))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||vw,{onLayoutAnimationStart:S,onLayoutAnimationComplete:m}=c.getProps(),h=!this.targetLayout||!dv(this.targetLayout,y)||g,v=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,v);const w={...Id(x,"layout"),onPlay:S,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||qh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ht(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pw),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&fv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xh);return}this.isUpdating||this.nodes.forEach(uw),this.isUpdating=!1,this.nodes.forEach(cw),this.nodes.forEach(iw),this.nodes.forEach(ow),this.clearAllSnapshots();const a=jt.now();ke.delta=Ut(0,1e3/60,a-ke.timestamp),ke.timestamp=a,ke.isProcessing=!0,jl.update.process(ke),jl.preRender.process(ke),jl.render.process(ke),ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,jd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(lw),this.sharedNodes.forEach(hw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!cv(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Mn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),yw(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return fe();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(xw))){const{scroll:c}=this.root;c&&(yr(l.x,c.offset.x),yr(l.y,c.offset.y))}return l}removeElementScroll(s){var a;const l=fe();if(Je(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Je(l,s),yr(l.x,d.offset.x),yr(l.y,d.offset.y))}return l}applyTransform(s,a=!1){const l=fe();Je(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&xr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Mn(c.latestValues)&&xr(l,c.latestValues)}return Mn(this.latestValues)&&xr(l,this.latestValues),l}removeTransform(s){const a=fe();Je(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Mn(u.latestValues))continue;dc(u.latestValues)&&u.updateSnapshot();const c=fe(),d=u.measurePageBox();Je(c,d),Hh(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Mn(this.latestValues)&&Hh(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=ke.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),Mi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Je(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=fe(),this.targetWithTransforms=fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),b7(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Je(this.target,this.layout.layoutBox),iv(this.target,this.targetDelta)):Je(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),Mi(this.relativeTargetOrigin,this.target,g.target),Je(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}mi&&_n.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||dc(this.parent.latestValues)||rv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ke.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Je(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;_7(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=fe());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Fh(this.prevProjectionDelta.x,this.projectionDelta.x),Fh(this.prevProjectionDelta.y,this.projectionDelta.y)),$i(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==g||!Kh(this.projectionDelta.x,this.prevProjectionDelta.x)||!Kh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),mi&&_n.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vr(),this.projectionDelta=vr(),this.projectionDeltaWithTransform=vr()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=vr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=fe(),g=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=g!==y,S=this.getStack(),m=!S||S.members.length<=1,h=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(gw));this.animationProgress=0;let v;this.mixTargetDelta=w=>{const b=w/1e3;Zh(d.x,s.x,b),Zh(d.y,s.y,b),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Mi(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),mw(this.relativeTarget,this.relativeTargetOrigin,f,b),v&&J7(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=fe()),Je(v,this.relativeTarget)),x&&(this.animationValues=c,Y7(c,u,this.latestValues,b,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ht(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=G.update(()=>{ws.hasAnimatedSinceResize=!0,this.currentAnimation=V7(0,Qh,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&hv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||fe();const d=Xe(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=Xe(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}Je(a,l),xr(a,c),$i(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new ew),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Il("z",s,u,this.animationValues);for(let c=0;c<Ol.length;c++)Il(`rotate${Ol[c]}`,s,u,this.animationValues),Il(`skew${Ol[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return nw;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ys(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=ys(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Mn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=tw(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:g,y}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in ea){if(f[x]===void 0)continue;const{correct:S,applyTo:m}=ea[x],h=u.transform==="none"?f[x]:S(f[x],d);if(m){const v=m.length;for(let w=0;w<v;w++)u[m[w]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=d===this?ys(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Xh),this.root.sharedNodes.clear()}}}function iw(e){e.updateLayout()}function ow(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?et(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=Xe(f);f.min=r[d].min,f.max=f.min+g}):hv(o,n.layoutBox,r)&&et(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=Xe(r[d]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const a=vr();$i(a,r,n.layoutBox);const l=vr();s?$i(l,e.applyTransform(i,!0),n.measuredBox):$i(l,r,n.layoutBox);const u=!cv(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:g}=d;if(f&&g){const y=fe();Mi(y,n.layoutBox,f.layoutBox);const x=fe();Mi(x,r,g.layoutBox),dv(y,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function sw(e){mi&&_n.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function aw(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function lw(e){e.clearSnapshot()}function Xh(e){e.clearMeasurements()}function uw(e){e.isLayoutDirty=!1}function cw(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function qh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function dw(e){e.resolveTargetDelta()}function fw(e){e.calcProjection()}function pw(e){e.resetSkewAndRotation()}function hw(e){e.removeLeadSnapshot()}function Zh(e,t,n){e.translate=oe(t.translate,0,n),e.scale=oe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Jh(e,t,n,r){e.min=oe(t.min,n.min,r),e.max=oe(t.max,n.max,r)}function mw(e,t,n,r){Jh(e.x,t.x,n.x,r),Jh(e.y,t.y,n.y,r)}function gw(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const vw={duration:.45,ease:[.4,0,.1,1]},em=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),tm=em("applewebkit/")&&!em("chrome/")?Math.round:Ke;function nm(e){e.min=tm(e.min),e.max=tm(e.max)}function yw(e){nm(e.x),nm(e.y)}function hv(e,t,n){return e==="position"||e==="preserve-aspect"&&!S7(Yh(t),Yh(n),.2)}function xw(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const ww=pv({attachResizeListener:(e,t)=>eo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Nl={current:void 0},mv=pv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Nl.current){const e=new ww({});e.mount(window),e.setOptions({layoutScroll:!0}),Nl.current=e}return Nl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Sw={pan:{Feature:O7},drag:{Feature:D7,ProjectionNode:mv,MeasureLayout:av}};function rm(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&G.postRender(()=>o(t,po(t)))}class bw extends kn{mount(){const{current:t}=this.node;t&&(this.unmount=bx(t,n=>(rm(this.node,n,"Start"),r=>rm(this.node,r,"End"))))}unmount(){}}class kw extends kn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=fo(eo(this.node.current,"focus",()=>this.onFocus()),eo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function im(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&G.postRender(()=>o(t,po(t)))}class Cw extends kn{mount(){const{current:t}=this.node;t&&(this.unmount=Tx(t,n=>(im(this.node,n,"Start"),(r,{success:i})=>im(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const pc=new WeakMap,Fl=new WeakMap,Pw=e=>{const t=pc.get(e.target);t&&t(e)},Tw=e=>{e.forEach(Pw)};function Ew({root:e,...t}){const n=e||document;Fl.has(n)||Fl.set(n,{});const r=Fl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Tw,{root:e,...t})),r[i]}function jw(e,t,n){const r=Ew(t);return pc.set(e,n),r.observe(e),()=>{pc.delete(e),r.unobserve(e)}}const $w={some:0,all:1};class Mw extends kn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:$w[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return jw(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(_w(t,n))&&this.startObserver()}unmount(){}}function _w({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Aw={inView:{Feature:Mw},tap:{Feature:Cw},focus:{Feature:kw},hover:{Feature:bw}},Lw={layout:{ProjectionNode:mv,MeasureLayout:av}},hc={current:null},gv={current:!1};function Rw(){if(gv.current=!0,!!bd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>hc.current=e.matches;e.addListener(t),t()}else hc.current=!1}const zw=[...F2,je,yn],Dw=e=>zw.find(N2(e)),om=new WeakMap;function Ow(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Me(i))e.addValue(r,i);else if(Me(o))e.addValue(r,Vr(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Vr(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const sm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Iw{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=jt.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,G.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=s;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Na(n),this.isVariantNode=Yg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in f){const y=f[g];l[g]!==void 0&&Me(y)&&y.set(l[g],!1)}}mount(t){this.current=t,om.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),gv.current||Rw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:hc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){om.delete(this.current),this.projection&&this.projection.unmount(),Ht(this.notifyUpdate),Ht(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Xn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&G.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Fr){const n=Fr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<sm.length;r++){const i=sm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=Ow(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Vr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(O2(i)||j2(i))?i=parseFloat(i):!Dw(i)&&yn.test(n)&&(i=R2(t,n)),this.setBaseTarget(t,Me(i)?i.get():i)),Me(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=Md(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Me(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ud),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class vv extends Iw{constructor(){super(...arguments),this.KeyframeResolver=V2}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Me(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Nw(e){return window.getComputedStyle(e)}class Fw extends vv{constructor(){super(...arguments),this.type="html",this.renderInstance=n2}readValueFromInstance(t,n){if(Xn.has(n)){const r=Qd(n);return r&&r.default||0}else{const r=Nw(t),i=(Jg(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return ov(t,n)}build(t,n,r){Ld(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Od(t,n,r)}}class Vw extends vv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=fe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Xn.has(n)){const r=Qd(n);return r&&r.default||0}return n=r2.has(n)?n:Ed(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return s2(t,n,r)}build(t,n,r){Rd(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){i2(t,n,r,i)}mount(t){this.isSVGTag=Dd(t.tagName),super.mount(t)}}const Bw=(e,t)=>$d(e)?new Vw(t):new Fw(t,{allowProjection:e!==P.Fragment}),Hw=gx({...f7,...Aw,...Sw,...Lw},Bw),M=_6(Hw);function mc(e){const t=lo(()=>Vr(e)),{isStatic:n}=P.useContext(Da);if(n){const[,r]=P.useState(e);P.useEffect(()=>t.on("change",r),[])}return t}function yv(e,t){const n=mc(t()),r=()=>n.set(t());return r(),kd(()=>{const i=()=>G.preRender(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),Ht(r)}}),n}const Uw=e=>e&&typeof e=="object"&&e.mix,Ww=e=>Uw(e)?e.mix:void 0;function Gw(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=K2(i,o,{mixer:Ww(o[0]),...s});return t?a(r):a}function Yw(e){Ti.current=[],e();const t=yv(Ti.current,e);return Ti.current=void 0,t}function am(e,t,n,r){if(typeof e=="function")return Yw(e);const i=typeof t=="function"?t:Gw(t,n,r);return Array.isArray(e)?lm(e,i):lm([e],([o])=>i(o))}function lm(e,t){const n=lo(()=>[]);return yv(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}const Kw={some:0,all:1};function Qw(e,t,{root:n,margin:r,amount:i="some"}={}){const o=h2(e),s=new WeakMap,a=u=>{u.forEach(c=>{const d=s.get(c.target);if(c.isIntersecting!==!!d)if(c.isIntersecting){const f=t(c);typeof f=="function"?s.set(c.target,f):l.unobserve(c.target)}else typeof d=="function"&&(d(c),s.delete(c.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:r,threshold:typeof i=="number"?i:Kw[i]});return o.forEach(u=>l.observe(u)),()=>l.disconnect()}function ho(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[o,s]=P.useState(!1);return P.useEffect(()=>{if(!e.current||i&&o)return;const a=()=>(s(!0),i?void 0:()=>s(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return Qw(e.current,a,l)},[t,e,n,i,r]),o}var xv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},um=Z.createContext&&Z.createContext(xv),Xw=["attr","size","title"];function qw(e,t){if(e==null)return{};var n=Zw(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zw(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}function cm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function aa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cm(Object(n),!0).forEach(function(r){Jw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jw(e,t,n){return t=e9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function e9(e){var t=t9(e,"string");return typeof t=="symbol"?t:t+""}function t9(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wv(e){return e&&e.map((t,n)=>Z.createElement(t.tag,aa({key:n},t.attr),wv(t.child)))}function I(e){return t=>Z.createElement(n9,sa({attr:aa({},e.attr)},t),wv(e.child))}function n9(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=qw(e,Xw),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Z.createElement("svg",sa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:aa(aa({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Z.createElement("title",null,o),e.children)};return um!==void 0?Z.createElement(um.Consumer,null,n=>t(n)):t(xv)}function r9(e){return I({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"},child:[]}]})(e)}function Hr(e){return I({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function i9(e){return I({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(e)}function Ba(e){return I({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function o9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function ef(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function la(e){return I({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function s9(e){return I({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function a9(e){return I({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(e)}function l9(e){return I({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function u9(e){return I({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(e)}function c9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function Sv(e){return I({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function dm(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function tf(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function nf(e){return I({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function d9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function f9(e){return I({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function p9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function to(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function h9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(e)}function m9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"},child:[]}]})(e)}function fm(e){return I({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function g9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function rf(e){return I({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function v9(e){return I({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function y9(e){return I({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"},child:[]}]})(e)}function x9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function w9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function S9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function bv(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(e)}function kv(e){return I({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function b9(e){return I({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}var ue={},of={},mo={},go={},Cv="Expected a function",pm=NaN,k9="[object Symbol]",C9=/^\s+|\s+$/g,P9=/^[-+]0x[0-9a-f]+$/i,T9=/^0b[01]+$/i,E9=/^0o[0-7]+$/i,j9=parseInt,$9=typeof Co=="object"&&Co&&Co.Object===Object&&Co,M9=typeof self=="object"&&self&&self.Object===Object&&self,_9=$9||M9||Function("return this")(),A9=Object.prototype,L9=A9.toString,R9=Math.max,z9=Math.min,Vl=function(){return _9.Date.now()};function D9(e,t,n){var r,i,o,s,a,l,u=0,c=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(Cv);t=hm(t)||0,ua(n)&&(c=!!n.leading,d="maxWait"in n,o=d?R9(hm(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function g(C){var T=r,E=i;return r=i=void 0,u=C,s=e.apply(E,T),s}function y(C){return u=C,a=setTimeout(m,t),c?g(C):s}function x(C){var T=C-l,E=C-u,z=t-T;return d?z9(z,o-E):z}function S(C){var T=C-l,E=C-u;return l===void 0||T>=t||T<0||d&&E>=o}function m(){var C=Vl();if(S(C))return h(C);a=setTimeout(m,x(C))}function h(C){return a=void 0,f&&r?g(C):(r=i=void 0,s)}function v(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function w(){return a===void 0?s:h(Vl())}function b(){var C=Vl(),T=S(C);if(r=arguments,i=this,l=C,T){if(a===void 0)return y(l);if(d)return a=setTimeout(m,t),g(l)}return a===void 0&&(a=setTimeout(m,t)),s}return b.cancel=v,b.flush=w,b}function O9(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(Cv);return ua(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),D9(e,t,{leading:r,maxWait:t,trailing:i})}function ua(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function I9(e){return!!e&&typeof e=="object"}function N9(e){return typeof e=="symbol"||I9(e)&&L9.call(e)==k9}function hm(e){if(typeof e=="number")return e;if(N9(e))return pm;if(ua(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ua(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(C9,"");var n=T9.test(e);return n||E9.test(e)?j9(e.slice(2),n?2:8):P9.test(e)?pm:+e}var F9=O9,vo={};Object.defineProperty(vo,"__esModule",{value:!0});vo.addPassiveEventListener=function(t,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),Ss.has(n)||Ss.set(n,new Set);var o=Ss.get(n);if(!o.has(i)){var s=function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,l)}catch{}return a}();t.addEventListener(n,r,s?{passive:!0}:!1),o.add(i)}};vo.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),Ss.get(n).delete(r.name||n)};var Ss=new Map;Object.defineProperty(go,"__esModule",{value:!0});var V9=F9,B9=H9(V9),mm=vo;function H9(e){return e&&e.__esModule?e:{default:e}}var U9=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,B9.default)(t,n)},ne={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=U9(function(i){ne.scrollHandler(t)},n);return ne.scrollSpyContainers.push(t),(0,mm.addPassiveEventListener)(t,"scroll",r),function(){(0,mm.removePassiveEventListener)(t,"scroll",r),ne.scrollSpyContainers.splice(ne.scrollSpyContainers.indexOf(t),1)}}return function(){}},isMounted:function(t){return ne.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.scrollY!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.scrollX:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.scrollX!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.scrollY:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=ne.scrollSpyContainers[ne.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(ne.currentPositionX(t),ne.currentPositionY(t))})},addStateHandler:function(t){ne.spySetState.push(t)},addSpyHandler:function(t,n){var r=ne.scrollSpyContainers[ne.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t)},updateStates:function(){ne.spySetState.forEach(function(t){return t()})},unmount:function(t,n){ne.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),ne.spySetState&&ne.spySetState.length&&ne.spySetState.indexOf(t)>-1&&ne.spySetState.splice(ne.spySetState.indexOf(t),1),document.removeEventListener("scroll",ne.scrollHandler)},update:function(){return ne.scrollSpyContainers.forEach(function(t){return ne.scrollHandler(t)})}};go.default=ne;var Xr={},yo={};Object.defineProperty(yo,"__esModule",{value:!0});var W9=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,s=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",s):history.replaceState(history.state,"",s)},G9=function(){return window.location.hash.replace(/^#/,"")},Y9=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},K9=function(t){return getComputedStyle(t).position!=="static"},Bl=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},Q9=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(K9(t)){if(n.offsetParent!==t){var i=function(c){return c===t||c===document},o=Bl(n,i),s=o.offsetTop,a=o.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return s}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var l=function(c){return c===document};return Bl(n,l).offsetTop-Bl(t,l).offsetTop};yo.default={updateHash:W9,getHash:G9,filterElementInContainer:Y9,scrollOffset:Q9};var Ha={},sf={};Object.defineProperty(sf,"__esModule",{value:!0});sf.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var af={};Object.defineProperty(af,"__esModule",{value:!0});var X9=vo,q9=["mousedown","wheel","touchmove","keydown"];af.default={subscribe:function(t){return typeof document<"u"&&q9.forEach(function(n){return(0,X9.addPassiveEventListener)(document,n,t)})}};var xo={};Object.defineProperty(xo,"__esModule",{value:!0});var gc={registered:{},scrollEvent:{register:function(t,n){gc.registered[t]=n},remove:function(t){gc.registered[t]=null}}};xo.default=gc;Object.defineProperty(Ha,"__esModule",{value:!0});var Z9=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J9=yo;Ua(J9);var eS=sf,gm=Ua(eS),tS=af,nS=Ua(tS),rS=xo,kt=Ua(rS);function Ua(e){return e&&e.__esModule?e:{default:e}}var Pv=function(t){return gm.default[t.smooth]||gm.default.defaultEasing},iS=function(t){return typeof t=="function"?t:function(){return t}},oS=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},vc=function(){return oS()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),Tv=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Ev=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},jv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},sS=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},aS=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},lS=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){kt.default.registered.end&&kt.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);vc.call(window,o);return}kt.default.registered.end&&kt.default.registered.end(i.to,i.target,i.currentPosition)},lf=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},wo=function(t,n,r,i){n.data=n.data||Tv(),window.clearTimeout(n.data.delayTimeout);var o=function(){n.data.cancel=!0};if(nS.default.subscribe(o),lf(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Ev(n):jv(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){kt.default.registered.end&&kt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=iS(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var s=Pv(n),a=lS.bind(null,s,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){kt.default.registered.begin&&kt.default.registered.begin(n.data.to,n.data.target),vc.call(window,a)},n.delay);return}kt.default.registered.begin&&kt.default.registered.begin(n.data.to,n.data.target),vc.call(window,a)},Wa=function(t){return t=Z9({},t),t.data=t.data||Tv(),t.absolute=!0,t},uS=function(t){wo(0,Wa(t))},cS=function(t,n){wo(t,Wa(n))},dS=function(t){t=Wa(t),lf(t),wo(t.horizontal?sS(t):aS(t),t)},fS=function(t,n){n=Wa(n),lf(n);var r=n.horizontal?Ev(n):jv(n);wo(t+r,n)};Ha.default={animateTopScroll:wo,getAnimationType:Pv,scrollToTop:uS,scrollToBottom:dS,scrollTo:cS,scrollMore:fS};Object.defineProperty(Xr,"__esModule",{value:!0});var pS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hS=yo,mS=uf(hS),gS=Ha,vS=uf(gS),yS=xo,Qo=uf(yS);function uf(e){return e&&e.__esModule?e:{default:e}}var Xo={},vm=void 0;Xr.default={unmount:function(){Xo={}},register:function(t,n){Xo[t]=n},unregister:function(t){delete Xo[t]},get:function(t){return Xo[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return vm=t},getActiveLink:function(){return vm},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=pS({},n,{absolute:!1});var i=n.containerId,o=n.container,s=void 0;i?s=document.getElementById(i):o&&o.nodeType?s=o:s=document,n.absolute=!0;var a=n.horizontal,l=mS.default.scrollOffset(s,r,a)+(n.offset||0);if(!n.smooth){Qo.default.registered.begin&&Qo.default.registered.begin(t,r),s===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):s.scrollTop=l,Qo.default.registered.end&&Qo.default.registered.end(t,r);return}vS.default.animateTopScroll(l,n,t,r)}};var $v={exports:{}},xS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wS=xS,SS=wS;function Mv(){}function _v(){}_v.resetWarningCache=Mv;var bS=function(){function e(r,i,o,s,a,l){if(l!==SS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_v,resetWarningCache:Mv};return n.PropTypes=n,n};$v.exports=bS();var Ga=$v.exports,Ya={};Object.defineProperty(Ya,"__esModule",{value:!0});var kS=yo,Hl=CS(kS);function CS(e){return e&&e.__esModule?e:{default:e}}var PS={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return Hl.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Hl.default.getHash()!==t&&Hl.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Ya.default=PS;Object.defineProperty(mo,"__esModule",{value:!0});var qo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},TS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ES=P,ym=So(ES),jS=go,Zo=So(jS),$S=Xr,MS=So($S),_S=Ga,X=So(_S),AS=Ya,Qt=So(AS);function So(e){return e&&e.__esModule?e:{default:e}}function LS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function RS(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function zS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var xm={to:X.default.string.isRequired,containerId:X.default.string,container:X.default.object,activeClass:X.default.string,activeStyle:X.default.object,spy:X.default.bool,horizontal:X.default.bool,smooth:X.default.oneOfType([X.default.bool,X.default.string]),offset:X.default.number,delay:X.default.number,isDynamic:X.default.bool,onClick:X.default.func,duration:X.default.oneOfType([X.default.number,X.default.func]),absolute:X.default.bool,onSetActive:X.default.func,onSetInactive:X.default.func,ignoreCancelEvents:X.default.bool,hashSpy:X.default.bool,saveHashHistory:X.default.bool,spyThrottle:X.default.number};mo.default=function(e,t){var n=t||MS.default,r=function(o){zS(s,o);function s(a){LS(this,s);var l=RS(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,a));return i.call(l),l.state={active:!1},l.beforeUnmountCallbacks=[],l}return TS(s,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();if(!Zo.default.isMounted(l)){var u=Zo.default.mount(l,this.props.spyThrottle);this.beforeUnmountCallbacks.push(u)}this.props.hashSpy&&(Qt.default.isMounted()||Qt.default.mount(n),Qt.default.mapContainer(this.props.to,l)),Zo.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Zo.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(l){return l()})}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=qo({},this.props.style,this.props.activeStyle):u=qo({},this.props.style);var c=qo({},this.props);for(var d in xm)c.hasOwnProperty(d)&&delete c[d];return c.className=l,c.style=u,c.onClick=this.handleClick,ym.default.createElement(e,c)}}]),s}(ym.default.PureComponent),i=function(){var s=this;this.scrollTo=function(a,l){n.scrollTo(a,qo({},s.state,l))},this.handleClick=function(a){s.props.onClick&&s.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),s.scrollTo(s.props.to,s.props)},this.spyHandler=function(a,l){var u=s.getScrollSpyContainer();if(!(Qt.default.isMounted()&&!Qt.default.isInitialized())){var c=s.props.horizontal,d=s.props.to,f=null,g=void 0,y=void 0;if(c){var x=0,S=0,m=0;if(u.getBoundingClientRect){var h=u.getBoundingClientRect();m=h.left}if(!f||s.props.isDynamic){if(f=n.get(d),!f)return;var v=f.getBoundingClientRect();x=v.left-m+a,S=x+v.width}var w=a-s.props.offset;g=w>=Math.floor(x)&&w<Math.floor(S),y=w<Math.floor(x)||w>=Math.floor(S)}else{var b=0,C=0,T=0;if(u.getBoundingClientRect){var E=u.getBoundingClientRect();T=E.top}if(!f||s.props.isDynamic){if(f=n.get(d),!f)return;var z=f.getBoundingClientRect();b=z.top-T+l,C=b+z.height}var A=l-s.props.offset;g=A>=Math.floor(b)&&A<Math.floor(C),y=A<Math.floor(b)||A>=Math.floor(C)}var ee=n.getActiveLink();if(y){if(d===ee&&n.setActiveLink(void 0),s.props.hashSpy&&Qt.default.getHash()===d){var Be=s.props.saveHashHistory,lt=Be===void 0?!1:Be;Qt.default.changeHash("",lt)}s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive(d,f))}if(g&&(ee!==d||s.state.active===!1)){n.setActiveLink(d);var xt=s.props.saveHashHistory,Zn=xt===void 0?!1:xt;s.props.hashSpy&&Qt.default.changeHash(d,Zn),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(d,f))}}}};return r.propTypes=xm,r.defaultProps={offset:0},r};Object.defineProperty(of,"__esModule",{value:!0});var DS=P,wm=Av(DS),OS=mo,IS=Av(OS);function Av(e){return e&&e.__esModule?e:{default:e}}function NS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sm(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function FS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var VS=function(e){FS(t,e);function t(){var n,r,i,o;NS(this,t);for(var s=arguments.length,a=Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=(r=(i=Sm(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.render=function(){return wm.default.createElement("a",i.props,i.props.children)},r),Sm(i,o)}return t}(wm.default.Component);of.default=(0,IS.default)(VS);var cf={};Object.defineProperty(cf,"__esModule",{value:!0});var BS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),HS=P,bm=Lv(HS),US=mo,WS=Lv(US);function Lv(e){return e&&e.__esModule?e:{default:e}}function GS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function YS(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function KS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var QS=function(e){KS(t,e);function t(){return GS(this,t),YS(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return BS(t,[{key:"render",value:function(){return bm.default.createElement("button",this.props,this.props.children)}}]),t}(bm.default.Component);cf.default=(0,WS.default)(QS);var df={},Ka={};Object.defineProperty(Ka,"__esModule",{value:!0});var XS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ZS=P,km=Qa(ZS),JS=ig;Qa(JS);var eb=Xr,Cm=Qa(eb),tb=Ga,Pm=Qa(tb);function Qa(e){return e&&e.__esModule?e:{default:e}}function nb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rb(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ib(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Ka.default=function(e){var t=function(n){ib(r,n);function r(i){nb(this,r);var o=rb(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return qS(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Cm.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){Cm.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return km.default.createElement(e,XS({},this.props,{parentBindings:this.childBindings}))}}]),r}(km.default.Component);return t.propTypes={name:Pm.default.string,id:Pm.default.string},t};Object.defineProperty(df,"__esModule",{value:!0});var Tm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ob=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),sb=P,Em=ff(sb),ab=Ka,lb=ff(ab),ub=Ga,jm=ff(ub);function ff(e){return e&&e.__esModule?e:{default:e}}function cb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function db(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function fb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Rv=function(e){fb(t,e);function t(){return cb(this,t),db(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return ob(t,[{key:"render",value:function(){var r=this,i=Tm({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,Em.default.createElement("div",Tm({},i,{ref:function(s){r.props.parentBindings.domNode=s}}),this.props.children)}}]),t}(Em.default.Component);Rv.propTypes={name:jm.default.string,id:jm.default.string};df.default=(0,lb.default)(Rv);var Ul=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$m=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Mm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Am(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Jo=P,En=go,Wl=Xr,re=Ga,Xt=Ya,Lm={to:re.string.isRequired,containerId:re.string,container:re.object,activeClass:re.string,spy:re.bool,smooth:re.oneOfType([re.bool,re.string]),offset:re.number,delay:re.number,isDynamic:re.bool,onClick:re.func,duration:re.oneOfType([re.number,re.func]),absolute:re.bool,onSetActive:re.func,onSetInactive:re.func,ignoreCancelEvents:re.bool,hashSpy:re.bool,spyThrottle:re.number},pb={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Wl,i=function(s){Am(a,s);function a(l){Mm(this,a);var u=_m(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return o.call(u),u.state={active:!1},u}return $m(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();En.isMounted(u)||En.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Xt.isMounted()||Xt.mount(r),Xt.mapContainer(this.props.to,u)),this.props.spy&&En.addStateHandler(this.stateHandler),En.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){En.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=Ul({},this.props);for(var d in Lm)c.hasOwnProperty(d)&&delete c[d];return c.className=u,c.onClick=this.handleClick,Jo.createElement(t,c)}}]),a}(Jo.Component),o=function(){var a=this;this.scrollTo=function(l,u){r.scrollTo(l,Ul({},a.state,u))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var u=a.getScrollSpyContainer();if(!(Xt.isMounted()&&!Xt.isInitialized())){var c=a.props.to,d=null,f=0,g=0,y=0;if(u.getBoundingClientRect){var x=u.getBoundingClientRect();y=x.top}if(!d||a.props.isDynamic){if(d=r.get(c),!d)return;var S=d.getBoundingClientRect();f=S.top-y+l,g=f+S.height}var m=l-a.props.offset,h=m>=Math.floor(f)&&m<Math.floor(g),v=m<Math.floor(f)||m>=Math.floor(g),w=r.getActiveLink();if(v)return c===w&&r.setActiveLink(void 0),a.props.hashSpy&&Xt.getHash()===c&&Xt.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),En.updateStates();if(h&&w!==c)return r.setActiveLink(c),a.props.hashSpy&&Xt.changeHash(c),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(c)),En.updateStates()}}};return i.propTypes=Lm,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Am(i,r);function i(o){Mm(this,i);var s=_m(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return s.childBindings={domNode:null},s}return $m(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Wl.unregister(this.props.name)}},{key:"registerElems",value:function(s){Wl.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Jo.createElement(t,Ul({},this.props,{parentBindings:this.childBindings}))}}]),i}(Jo.Component);return n.propTypes={name:re.string,id:re.string},n}},hb=pb;Object.defineProperty(ue,"__esModule",{value:!0});ue.Helpers=ue.ScrollElement=ue.ScrollLink=ue.animateScroll=ue.scrollSpy=ue.Events=ue.scroller=ue.Element=ue.Button=qn=ue.Link=void 0;var mb=of,zv=$t(mb),gb=cf,Dv=$t(gb),vb=df,Ov=$t(vb),yb=Xr,Iv=$t(yb),xb=xo,Nv=$t(xb),wb=go,Fv=$t(wb),Sb=Ha,Vv=$t(Sb),bb=mo,Bv=$t(bb),kb=Ka,Hv=$t(kb),Cb=hb,Uv=$t(Cb);function $t(e){return e&&e.__esModule?e:{default:e}}var qn=ue.Link=zv.default;ue.Button=Dv.default;ue.Element=Ov.default;ue.scroller=Iv.default;ue.Events=Nv.default;ue.scrollSpy=Fv.default;ue.animateScroll=Vv.default;ue.ScrollLink=Bv.default;ue.ScrollElement=Hv.default;ue.Helpers=Uv.default;ue.default={Link:zv.default,Button:Dv.default,Element:Ov.default,scroller:Iv.default,Events:Nv.default,scrollSpy:Fv.default,animateScroll:Vv.default,ScrollLink:Bv.default,ScrollElement:Hv.default,Helpers:Uv.default};const Pb=bn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Tb=bn`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-2px);
  }
`,Eb=bn`
  0% {
    box-shadow: 0 0 0 0 ${e=>e.theme.colors.accent}40;
  }
  70% {
    box-shadow: 0 0 0 10px transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
`,jb=k.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wv=k.button`
  position: relative;
  width: 60px;
  height: 32px;
  border-radius: var(--radius-full);
  background: ${({theme:e})=>e.colors.glass.backdrop};
  backdrop-filter: blur(${({theme:e})=>e.colors.glass.blur});
  -webkit-backdrop-filter: blur(${({theme:e})=>e.colors.glass.blur});
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  box-shadow: ${({theme:e})=>e.colors.glass.shadow};
  cursor: pointer;
  transition: all var(--transition-normal);
  overflow: hidden;
  
  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.colors.glass.backdropHover};
    animation: ${Eb} 2s infinite;
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 2px;
  }
`,$b=k.div`
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border-radius: var(--radius-full);
  background: linear-gradient(90deg, 
    ${({theme:e,$isDarkMode:t})=>t?`${e.colors.primary}20, ${e.colors.accent}20`:`${e.colors.warning}20, ${e.colors.primary}20`});
  transition: all var(--transition-normal);
`,Mb=k.div`
  position: absolute;
  top: 50%;
  left: ${({$isDarkMode:e})=>e?"calc(100% - 26px)":"4px"};
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.text};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-spring);
  animation: ${({$isTransitioning:e})=>e?Tb:"none"} 0.6s ease;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({theme:e,$isDarkMode:t})=>t?e.colors.glass.backdrop:"transparent"};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: all var(--transition-normal);
  }
`,_b=k.div`
  position: relative;
  z-index: 1;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e,$isDarkMode:t})=>t?e.colors.backgroundSolid:e.colors.warning};
  font-size: 10px;
  transition: all var(--transition-normal);
  animation: ${({$isTransitioning:e})=>e?Pb:"none"} 0.6s ease;
  
  &::before {
    content: '${({$isDarkMode:e})=>e?"🌙":"☀️"}';
    position: absolute;
  }
`,Ab=k.span`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textOnGlass};
  background: ${({theme:e})=>e.colors.glass.backdrop};
  backdrop-filter: blur(${({theme:e})=>e.colors.glass.blur});
  -webkit-backdrop-filter: blur(${({theme:e})=>e.colors.glass.blur});
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  border-radius: var(--radius-sm);
  box-shadow: ${({theme:e})=>e.colors.glass.shadow};
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-fast);
  pointer-events: none;
  z-index: 1000;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid ${({theme:e})=>e.colors.glass.border};
  }
  
  ${Wv}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-2px);
  }
`,Lb=k.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Rm=({showLabel:e=!0,className:t})=>{const{isDarkMode:n,toggleTheme:r,isTransitioning:i}=Fg(),o=a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),r())},s=n?"Switch to light mode":"Switch to dark mode";return p.jsx(jb,{className:t,children:p.jsxs(Wv,{onClick:r,onKeyDown:o,"aria-label":s,title:s,role:"switch","aria-checked":n,children:[p.jsx(Lb,{children:s}),p.jsx($b,{$isDarkMode:n}),p.jsx(Mb,{$isDarkMode:n,$isTransitioning:i,children:p.jsx(_b,{$isDarkMode:n,$isTransitioning:i})}),e&&p.jsx(Ab,{children:n?"Dark Mode":"Light Mode"})]})})},Rb=k(M.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  backdrop-filter: blur(20px);
  background: ${({scrolled:e,theme:t})=>e?t.colors.glass.backdrop:"transparent"};
  border-bottom: ${({scrolled:e,theme:t})=>e?`1px solid ${t.colors.glass.border}`:"none"};
  transition: all 0.3s ease;
`,zb=k.div`
  max-width: ${({theme:e})=>e.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Db=k(M.div)`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`,Ob=k.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Ib=k(qn)`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.accent});
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.text};
    
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: ${({theme:e})=>e.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`,Nb=k.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`,zm=k(M.a)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    transform: translateY(-2px);
  }
`,Fb=k(M.button)`
  display: none;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`,Vb=k(M.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>e.colors.backgroundSolid};
  backdrop-filter: blur(20px);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`,Bb=k(qn)`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    transform: scale(1.1);
  }
`,Hb=k.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`,Ub=k(M.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text};
  font-size: 2rem;
  cursor: pointer;
`,Wb=()=>{const[e,t]=P.useState(!1),[n,r]=P.useState(!1);P.useEffect(()=>{const a=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const i=[{name:"Home",to:"hero"},{name:"About",to:"about"},{name:"Experience",to:"experience"},{name:"Projects",to:"projects"},{name:"Education",to:"education"},{name:"Contact",to:"contact"}],o=[{icon:Hr,href:"https://github.com/yashborse4",label:"GitHub"},{icon:Ba,href:"https://www.linkedin.com/in/yashborse/",label:"LinkedIn"},{icon:ef,href:"https://twitter.com/yashborse4u",label:"Twitter"},{icon:to,href:"mailto:yashborse432005@gmail.com",label:"Email"}],s=()=>{r(!1)};return p.jsxs(p.Fragment,{children:[p.jsx(Rb,{scrolled:e,initial:{y:-100},animate:{y:0},transition:{duration:.5},children:p.jsxs(zb,{children:[p.jsx(qn,{to:"hero",smooth:!0,duration:500,offset:0,children:p.jsx(Db,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Yash Borse"})}),p.jsx(Ob,{children:i.map((a,l)=>p.jsx(M.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:l*.1},children:p.jsx(Ib,{to:a.to,smooth:!0,duration:500,spy:!0,offset:-80,activeClass:"active",hashSpy:!0,ignoreCancelEvents:!1,children:a.name})},a.name))}),p.jsxs(Nb,{children:[o.map((a,l)=>p.jsx(zm,{href:a.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2,rotate:5},whileTap:{scale:.9},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:.5+l*.1},"aria-label":a.label,children:p.jsx(a.icon,{})},a.label)),p.jsx(M.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:.9},children:p.jsx(Rm,{})})]}),p.jsx(Fb,{onClick:()=>r(!0),whileTap:{scale:.9},children:p.jsx(l9,{})})]})}),p.jsx(Bg,{children:n&&p.jsxs(Vb,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[p.jsx(Ub,{onClick:s,whileTap:{scale:.9},children:p.jsx(kv,{})}),i.map((a,l)=>p.jsx(M.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:l*.1},children:p.jsx(Bb,{to:a.to,smooth:!0,duration:500,offset:-80,onClick:s,hashSpy:!0,ignoreCancelEvents:!1,children:a.name})},a.name)),p.jsx(Hb,{children:o.map((a,l)=>p.jsx(zm,{href:a.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2},whileTap:{scale:.9},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:.5+l*.1},"aria-label":a.label,children:p.jsx(a.icon,{})},a.label))}),p.jsx(M.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:.8},children:p.jsx(Rm,{showLabel:!0})})]})})]})},Gb=k.footer`
  background: ${({theme:e})=>e.colors.backgroundSolid};
  border-top: 1px solid ${({theme:e})=>e.colors.glass.border};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      ${({theme:e})=>e.colors.primary}10 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 50%,
      ${({theme:e})=>e.colors.accent}10 0%,
      transparent 50%
    );
    z-index: -1;
  }
`,Yb=k.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem 1.5rem;
  }
`,Kb=k.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`,yc=k(M.div)`
  .section-title {
    font-family: ${({theme:e})=>e.fonts.secondary};
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 1rem;
  }
  
  .section-content {
    color: ${({theme:e})=>e.colors.textSecondary};
    line-height: 1.6;
  }
`,Qb=k(yc)`
  .brand-name {
    font-family: ${({theme:e})=>e.fonts.secondary};
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }
  
  .brand-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
`,Xb=k.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,qb=k(M.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: ${({theme:e})=>e.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  border-radius: 10px;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`,Zb=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Jb=k(qn)`
  color: ${({theme:e})=>e.colors.textSecondary};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    transform: translateX(5px);
  }
`,ek=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme:e})=>e.colors.textSecondary};
    font-size: 0.9rem;
    
    .icon {
      color: ${({theme:e})=>e.colors.primary};
      flex-shrink: 0;
    }
    
    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({theme:e})=>e.colors.primary};
      }
    }
  }
`,tk=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid ${({theme:e})=>e.colors.glass.border};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`,nk=k.p`
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 0.875rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .heart {
    color: ${({theme:e})=>e.colors.error};
    animation: heartbeat 2s infinite;
  }
  
  @keyframes heartbeat {
    0%, 50%, 100% {
      transform: scale(1);
    }
    25%, 75% {
      transform: scale(1.1);
    }
  }
`,rk=k(M.button)`
  background: ${({theme:e})=>e.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  color: ${({theme:e})=>e.colors.primary};
  width: 45px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`,ik=()=>{const e=new Date().getFullYear(),t=[{icon:Hr,href:"https://github.com/yashborse",label:"GitHub"},{icon:Ba,href:"https://linkedin.com/in/yashborse",label:"LinkedIn"},{icon:ef,href:"https://twitter.com/yashborse",label:"Twitter"},{icon:to,href:"mailto:yashborse432005@gmail.com",label:"Email"}],n=[{name:"Home",to:"hero"},{name:"Experience",to:"experience"},{name:"Projects",to:"projects"},{name:"Education",to:"education"},{name:"Contact",to:"contact"}],r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,duration:.5}}},i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return p.jsx(Gb,{children:p.jsx(Yb,{children:p.jsxs(M.div,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[p.jsxs(Kb,{children:[p.jsxs(Qb,{variants:i,children:[p.jsx("h2",{className:"brand-name",children:"Yash Borse"}),p.jsx("p",{className:"brand-description section-content",children:"React Native developer with 1+ year experience at HAL, specializing in cross-platform mobile applications. Let's build something incredible together."}),p.jsx(Xb,{children:t.map((o,s)=>p.jsx(qb,{href:o.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},"aria-label":o.label,children:p.jsx(o.icon,{})},o.label))})]}),p.jsxs(yc,{variants:i,children:[p.jsx("h3",{className:"section-title",children:"Quick Links"}),p.jsx(Zb,{children:n.map(o=>p.jsx(Jb,{to:o.to,smooth:!0,duration:800,children:o.name},o.name))})]}),p.jsxs(yc,{variants:i,children:[p.jsx("h3",{className:"section-title",children:"Get In Touch"}),p.jsxs(ek,{children:[p.jsxs("div",{className:"contact-item",children:[p.jsx(to,{className:"icon"}),p.jsx("a",{href:"mailto:yashborse432005@gmail.com",children:"yashborse432005@gmail.com"})]}),p.jsxs("div",{className:"contact-item",children:[p.jsx("span",{children:"📞"}),p.jsx("a",{href:"tel:+919876543210",children:"+91 98765 43210"})]}),p.jsxs("div",{className:"contact-item",children:[p.jsx("span",{children:"📍"}),p.jsx("span",{children:"Maharashtra, India"})]})]})]})]}),p.jsxs(tk,{children:[p.jsxs(nk,{children:["© ",e," Yash Borse. Made with ",p.jsx(g9,{className:"heart"})," using React"]}),p.jsx(qn,{to:"hero",smooth:!0,duration:800,children:p.jsx(rk,{whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Back to top",children:p.jsx(s9,{})})})]})]})})})},ok=k.div`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.background};
  background-attachment: fixed;
`,sk=k.main`
  position: relative;
  z-index: 1;
`,ak=({children:e})=>p.jsxs(ok,{children:[p.jsx(Wb,{}),p.jsx(sk,{children:e}),p.jsx(ik,{})]});function xc(){return xc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xc.apply(this,arguments)}var lk={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},uk=new(function(){function e(){}var t=e.prototype;return t.load=function(n,r,i){if(n.el=typeof i=="string"?document.querySelector(i):i,n.options=xc({},lk,r),n.isInput=n.el.tagName.toLowerCase()==="input",n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map(function(u){return u.trim()}),n.stringsElement=typeof n.options.stringsElement=="string"?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(n.stringsElement.children),s=o.length;if(s)for(var a=0;a<s;a+=1)n.strings.push(o[a].innerHTML.trim())}for(var l in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[l]=l;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},t.getCurrentElContent=function(n){return n.attr?n.el.getAttribute(n.attr):n.isInput?n.el.value:n.contentType==="html"?n.el.innerHTML:n.el.textContent},t.appendCursorAnimationCss=function(n){var r="data-typed-js-cursor-css";if(n.showCursor&&!document.querySelector("["+r+"]")){var i=document.createElement("style");i.setAttribute(r,"true"),i.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(i)}},t.appendFadeOutAnimationCss=function(n){var r="data-typed-fadeout-js-css";if(n.fadeOut&&!document.querySelector("["+r+"]")){var i=document.createElement("style");i.setAttribute(r,"true"),i.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(i)}},e}()),Dm=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(n,r,i){if(i.contentType!=="html")return r;var o=n.substring(r).charAt(0);if(o==="<"||o==="&"){var s;for(s=o==="<"?">":";";n.substring(r+1).charAt(0)!==s&&!(1+ ++r>n.length););r++}return r},t.backSpaceHtmlChars=function(n,r,i){if(i.contentType!=="html")return r;var o=n.substring(r).charAt(0);if(o===">"||o===";"){var s;for(s=o===">"?"<":"&";n.substring(r-1).charAt(0)!==s&&!(--r<0););r--}return r},e}()),ck=function(){function e(n,r){uk.load(this,r,n),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(n){n===void 0&&(n=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,n&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var n=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){n.strPos===0?n.typewrite(n.strings[n.sequence[n.arrayPos]],n.strPos):n.backspace(n.strings[n.sequence[n.arrayPos]],n.strPos)},this.startDelay)},t.typewrite=function(n,r){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),s=1;this.pause.status!==!0?this.timeout=setTimeout(function(){r=Dm.typeHtmlChars(n,r,i);var a=0,l=n.substring(r);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var u=1;u+=(l=/\d+/.exec(l)[0]).length,a=parseInt(l),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),n=n.substring(0,r)+n.substring(r+u),i.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;n.substring(r+s).charAt(0)!=="`"&&(s++,!(r+s>n.length)););var c=n.substring(0,r),d=n.substring(c.length+1,r+s),f=n.substring(r+s+1);n=c+d+f,s--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),r>=n.length?i.doneTyping(n,r):i.keepTyping(n,r,s),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},a)},o):this.setPauseStatus(n,r,!0)},t.keepTyping=function(n,r,i){r===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=n.substring(0,r+=i);this.replaceText(o),this.typewrite(n,r)},t.doneTyping=function(n,r){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(n,r)},this.backDelay))},t.backspace=function(n,r){var i=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){r=Dm.backSpaceHtmlChars(n,r,i);var s=n.substring(0,r);if(i.replaceText(s),i.smartBackspace){var a=i.strings[i.arrayPos+1];i.stopNum=a&&s===a.substring(0,r)?r:0}r>i.stopNum?(r--,i.backspace(n,r)):r<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],r))},o)}else this.setPauseStatus(n,r,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(n,r,i){this.pause.typewrite=i,this.pause.curString=n,this.pause.curStrPos=r},t.toggleBlinking=function(n){this.cursor&&(this.pause.status||this.cursorBlinking!==n&&(this.cursorBlinking=n,n?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(n){return Math.round(Math.random()*n/2)+n},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var n=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){n.arrayPos++,n.replaceText(""),n.strings.length>n.arrayPos?n.typewrite(n.strings[n.sequence[n.arrayPos]],0):(n.typewrite(n.strings[0],0),n.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(n){this.attr?this.el.setAttribute(this.attr,n):this.isInput?this.el.value=n:this.contentType==="html"?this.el.innerHTML=n:this.el.textContent=n},t.bindFocusEvents=function(){var n=this;this.isInput&&(this.el.addEventListener("focus",function(r){n.stop()}),this.el.addEventListener("blur",function(r){n.el.value&&n.el.value.length!==0||n.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();const dk=P.memo(({style:e,className:t,typedRef:n,parseRef:r,stopped:i,children:o,startWhenVisible:s,...a})=>{const l=P.useRef(null),u=P.useMemo(()=>{var d;return[...Object.values(a).filter(f=>typeof f=="boolean"||typeof f=="number"||typeof f=="string"),(d=a.strings)==null?void 0:d.join(",")]},[a]);P.useEffect(()=>{const d=r&&r(l)||l.current,f=new ck(d,{...a});if((i||s)&&(f==null||f.stop()),s){const g=new IntersectionObserver(([y])=>{y.isIntersecting&&(f==null||f.start(),g.disconnect())});g.observe(d)}return n&&f&&n(f),()=>{f.destroy()}},u);const c=o?Z.cloneElement(o,{ref:l}):Z.createElement("span",{style:e,ref:l});return Z.createElement("span",{style:e,className:t,"data-testid":"react-typed"},c)}),pf={smooth:[.4,0,.2,1],bounce:[.68,-.55,.265,1.55]},bo={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},de={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:pf.smooth}}},Gv={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:pf.bounce,type:"spring",stiffness:200,damping:15}}},fk={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}},exit:{opacity:0,transition:{duration:.2}}},pk={hidden:{opacity:0,scale:.9,y:50},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",damping:25,stiffness:200}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2}}},hk={hidden:{opacity:0,scale:.8,rotateY:-30,rotateX:10},visible:{opacity:1,scale:1,rotateY:0,rotateX:0,transition:{duration:1,ease:pf.smooth}}},mk={hidden:{scale:0,rotate:-180},visible:{scale:1,rotate:0,transition:{type:"spring",stiffness:200,damping:15,delay:.2}}},gk=k.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
  overflow: hidden;
  background-color: ${({theme:e})=>e.colors.background};
  
  /* Decorative Background Elements */
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, ${({theme:e})=>e.colors.primary}10 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, ${({theme:e})=>e.colors.accent}10 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }
`,vk=k.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`,yk=k.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 968px) {
    align-items: center;
  }
`,xk=k(M.h2)`
  font-family: ${({theme:e})=>e.fonts.secondary}; // Use Serif/Display font if available in secondary
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  line-height: 1.1;
  margin-bottom: 1rem;
  
  span.highlight {
    color: ${({theme:e})=>e.colors.primary};
  }
  
  span.wave {
    display: inline-block;
    animation: wave 2.5s ease-in-out infinite;
    transform-origin: 70% 70%;
    font-size: 0.8em;
  }
  
  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60%, 100% { transform: rotate(0deg); }
  }
`,wk=k(M.h3)`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary}; // Almost black/dark grey
  margin-bottom: 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 968px) {
    justify-content: center;
  }
`,Sk=k(M.p)`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 2.5rem;
  max-width: 500px;
  
  @media (max-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`,bk=k(M.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    justify-content: center;
    flex-direction: row; // Keep row on mobile for better look
    gap: 1.5rem;
  }
`,kk=k(M.button)`
  padding: 1rem 2.5rem;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px; // Slightly rounded, not pill
  border: none;
  cursor: pointer;
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  box-shadow: 0 10px 20px ${({theme:e})=>e.colors.primaryGlass};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px ${({theme:e})=>e.colors.primaryGlass}; // Stronger shadow on hover
  }
  
  svg {
    font-size: 0.9rem;
  }
`,Ck=k(M.a)`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  border-bottom: 2px solid ${({theme:e})=>e.colors.primary}40;
  padding-bottom: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.accent};
    border-color: ${({theme:e})=>e.colors.accent};
  }
`,Pk=k(M.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .label {
    font-size: 0.9rem;
    font-weight: 600;
    margin-right: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
  }

  @media (max-width: 968px) {
    justify-content: center;
  }
`,Gl=k(M.a)`
  color: #333; // Default dark icon color
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,Tk=k(M.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  perspective: 1000px;
`,Ek=k(M.div)`
  width: 400px;
  height: 500px; // Portrait aspect ratio
  position: relative;
  z-index: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 20px 20px 60px rgba(0,0,0,0.05); // Soft shadow
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 380px;
  }
`,Om=k(M.div)`
  position: absolute;
  background: ${({theme:e})=>e.colors.surface}; // Use surface color for better opacity in dark mode
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 15px 35px ${({theme:e})=>e.colors.shadow};
  border: 1px solid ${({theme:e})=>e.colors.border}; // Add border for edge definition
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 5;
  min-width: 200px;
  
  &.expert-card {
    top: 10%;
    right: -10%;
    @media (max-width: 1200px) { right: -5%; }
    @media (max-width: 968px) { right: 5%; top: 5%; }
  }
  
  &.status-card {
    bottom: 10%;
    left: -10%;
    @media (max-width: 1200px) { left: -5%; }
    @media (max-width: 968px) { left: 5%; bottom: 5%; }
  }
  
  .icon-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary}20;
    color: ${({theme:e})=>e.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  
  .text-box {
    display: flex;
    flex-direction: column;
    
    span.label {
      font-size: 0.8rem;
      color: ${({theme:e})=>e.colors.textSecondary};
    }
    span.value {
      font-size: 0.95rem;
      font-weight: 700;
      color: ${({theme:e})=>e.colors.text};
    }
  }
`,Im=k(M.div)`
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  
  &.circle-1 {
    width: 80px;
    height: 80px;
    background: transparent;
    border: 5px solid ${({theme:e})=>e.colors.accent};
    top: -20px;
    left: 20px;
  }
  
  &.circle-2 {
    width: 40px;
    height: 40px;
    background: ${({theme:e})=>e.colors.primary};
    bottom: 50px;
    right: -20px;
  }
`,jk=()=>{const e=["User Interface Designer","Full Stack Developer","Java Specialist"],t=mc(0),n=mc(0),r=am(n,[-100,100],[5,-5]),i=am(t,[-100,100],[-5,5]),o=a=>{const l=a.currentTarget.getBoundingClientRect();t.set(a.clientX-l.left-l.width/2),n.set(a.clientY-l.top-l.height/2)},s=()=>{t.set(0),n.set(0)};return p.jsx(gk,{id:"hero",children:p.jsxs(vk,{children:[p.jsx(yk,{children:p.jsxs(M.div,{variants:bo,initial:"hidden",animate:"visible",children:[p.jsxs(xk,{variants:de,children:["Hi, ",p.jsx("br",{}),"I'm ",p.jsx("span",{className:"highlight",children:"Yash Borse"}),p.jsx("span",{className:"wave",style:{marginLeft:"10px"},children:"👋"})]}),p.jsx(wk,{variants:de,children:p.jsx(dk,{strings:e,typeSpeed:50,backSpeed:30,loop:!0})}),p.jsx(Sk,{variants:de,children:"I design and build premium web applications with a focus on clean aesthetics and robust performance. Based in India."}),p.jsxs(bk,{variants:de,children:[p.jsx(qn,{to:"projects",smooth:!0,duration:500,offset:-80,children:p.jsxs(kk,{whileHover:{scale:1.05},whileTap:{scale:.95},children:["Hire Me ",p.jsx(la,{})]})}),p.jsxs(Ck,{href:"/Portfolio-Website/Yash_Borse.pdf",download:!0,whileHover:{x:5},children:[p.jsx(p9,{})," Download CV"]})]}),p.jsxs(Pk,{variants:de,children:[p.jsx(Gl,{href:"https://github.com/yashborse4",target:"_blank","aria-label":"GitHub",children:p.jsx(Hr,{})}),p.jsx(Gl,{href:"https://www.linkedin.com/in/yashborse",target:"_blank","aria-label":"LinkedIn",children:p.jsx(Ba,{})}),p.jsx(Gl,{href:"mailto:yashborse432005@gmail.com","aria-label":"Email",children:p.jsx(to,{})}),p.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"5px",fontSize:"0.9rem",fontWeight:"600"},children:["Let's Chat ",p.jsx(d9,{style:{color:"#FF6B6B"}})]})]})]})}),p.jsxs(Tk,{initial:"hidden",animate:"visible",variants:hk,onMouseMove:o,onMouseLeave:s,style:{rotateX:r,rotateY:i},children:[p.jsx(Im,{className:"circle-1",animate:{y:[0,-10,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),p.jsx(Im,{className:"circle-2",animate:{scale:[1,1.2,1]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),p.jsx(Ek,{children:p.jsx("img",{src:"/assets/pic.png",alt:"Yash Borse"})}),p.jsxs(Om,{className:"expert-card",variants:de,custom:1,animate:{y:[0,-10,0]},transition:{duration:5,repeat:1/0,ease:"easeInOut",delay:.5},children:[p.jsx("div",{className:"icon-box",children:p.jsx(Hr,{})}),p.jsxs("div",{className:"text-box",children:[p.jsx("span",{className:"label",children:"Expert on"}),p.jsx("span",{className:"value",children:"Spring Boot & React"})]})]}),p.jsxs(Om,{className:"status-card",variants:de,custom:2,animate:{y:[0,10,0]},transition:{duration:6,repeat:1/0,ease:"easeInOut",delay:1},children:[p.jsx("div",{className:"icon-box",style:{background:"#E0F7FA",color:"#00BCD4"},children:p.jsx(la,{style:{transform:"rotate(-45deg)"}})}),p.jsxs("div",{className:"text-box",children:[p.jsx("span",{className:"label",children:"Projects"}),p.jsx("span",{className:"value",children:"10+ Completed"})]})]})]})]})})};function $k(e){return I({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"},child:[]}]})(e)}function Mk(e){return I({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z"},child:[]}]})(e)}function _k(e){return I({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z"},child:[]}]})(e)}function Ak(e){return I({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(e)}function Lk(e){return I({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z"},child:[]}]})(e)}function Rk(e){return I({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"},child:[]}]})(e)}function zk(e){return I({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}const _i=e=>`@media (min-width: ${g6[e]})`;J`
  display: flex;
  align-items: center;
  justify-content: center;
`;J`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;J`
  display: flex;
  flex-direction: column;
`;J`
  max-width: ${({theme:e})=>e.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1rem;

  ${_i("md")} {
    padding: 0 2rem;
  }
`;J`
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;J`
  background-color: transparent;
  color: ${({theme:e})=>e.colors.primary};
  border: 2px solid ${({theme:e})=>e.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    color: white;
  }
`;const qr=J`
  background: ${({theme:e})=>e.colors.glass.backdrop};
  backdrop-filter: blur(${({theme:e})=>e.colors.glass.blur});
  -webkit-backdrop-filter: blur(${({theme:e})=>e.colors.glass.blur});
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  box-shadow: ${({theme:e})=>e.colors.glass.shadow};
`,hf=J`
  ${qr}
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: all var(--transition-normal);
  
  &:hover {
    background: ${({theme:e})=>e.colors.glass.backdropHover};
    transform: translateY(-4px);
    box-shadow: ${({theme:e})=>e.colors.glass.shadow}, 0 8px 25px -8px ${({theme:e})=>e.colors.accent}20;
  }
`;J`
  ${qr}
  border-radius: var(--radius-md);
  padding: 1rem;
`;J`
  ${qr}
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textOnGlass};
  transition: all var(--transition-fast);
  cursor: pointer;
  
  &:hover {
    background: ${({theme:e})=>e.colors.glass.backdropHover};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
`;J`
  ${qr}
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-8px) rotateX(5deg) scale(1.02);
    box-shadow: 
      ${({theme:e})=>e.colors.glass.shadow},
      0 20px 40px -20px ${({theme:e})=>e.colors.primary}40,
      0 0 60px -30px ${({theme:e})=>e.colors.accent}30;
  }
`;J`
  ${qr}
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;J`
  ${qr}
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, 
      ${({theme:e})=>e.colors.primary}, 
      ${({theme:e})=>e.colors.accent});
    border-radius: 50%;
    z-index: -1;
    animation: rotate-border 4s linear infinite;
  }
  
  @keyframes rotate-border {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;const mf=J`
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.glass.backdrop} 0%,
    ${({theme:e})=>e.colors.primaryGlass} 50%,
    ${({theme:e})=>e.colors.glass.backdrop} 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  box-shadow: 
    ${({theme:e})=>e.colors.glass.shadow},
    inset 0 1px 1px ${({theme:e})=>e.colors.glass.border};
  border-radius: var(--radius-xl);
`;J`
  ${hf}
`;J`
  padding: 4rem 0;

  ${_i("md")} {
    padding: 6rem 0;
  }
`;J`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;J`
    font-size: 2rem;
    ${_i("md")} {
      font-size: 3rem;
    }
  `,J`
    font-size: 1.75rem;
    ${_i("md")} {
      font-size: 2.25rem;
    }
  `,J`
    font-size: 1.5rem;
    ${_i("md")} {
      font-size: 1.875rem;
    }
  `;J`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`;const Dk=({value:e,label:t,delay:n=0})=>{const[r,i]=P.useState(!1),o=P.useRef(null),s=ho(o,{once:!0,margin:"-50px"});return P.useEffect(()=>{if(s){const a=setTimeout(()=>i(!0),n);return()=>clearTimeout(a)}},[s,n]),p.jsxs(Jk,{ref:o,children:[p.jsxs(eC,{children:[p.jsx("span",{children:t}),p.jsxs("span",{children:[e,"%"]})]}),p.jsx(tC,{children:p.jsx(nC,{style:{width:r?`${e}%`:"0%"},$delay:n})})]})},Nm=[{Icon:i9,name:"Java",color:"#ED8B00"},{Icon:Rk,name:"Spring Boot",color:"#6DB33F"},{Icon:Ak,name:"PostgreSQL",color:"#4169E1"},{Icon:_k,name:"GraphQL",color:"#E535AB"},{Icon:o9,name:"React",color:"#61DAFB"},{Icon:zk,name:"TypeScript",color:"#3178C6"},{Icon:r9,name:"Docker",color:"#2496ED"},{Icon:Lk,name:"Redis",color:"#DC382D"}],Ok=()=>p.jsxs(Hk,{children:[p.jsxs(Uk,{children:[p.jsx(Wk,{children:"💻"}),p.jsx(Gk,{children:"Tech Stack"})]}),p.jsx(Vm,{className:"inner",children:Nm.slice(0,4).map((e,t)=>p.jsxs(Bm,{$index:t,$total:4,$radius:90,style:{"--color":e.color},children:[p.jsx(e.Icon,{}),p.jsx("span",{className:"tooltip",children:e.name})]},e.name))}),p.jsx(Vm,{className:"outer",children:Nm.slice(4,8).map((e,t)=>p.jsxs(Bm,{$index:t,$total:4,$radius:150,style:{"--color":e.color},children:[p.jsx(e.Icon,{}),p.jsx("span",{className:"tooltip",children:e.name})]},e.name))})]}),Fm=bn`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Yv=bn`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Kv=bn`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`,Ik=k.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, ${({theme:e})=>e.colors.primary}10 0%, transparent 70%);
    border-radius: 50%;
    animation: ${Fm} 8s ease-in-out infinite;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: -5%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, ${({theme:e})=>e.colors.accent}10 0%, transparent 70%);
    border-radius: 50%;
    animation: ${Fm} 6s ease-in-out infinite reverse;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
`,Nk=k(M.h2)`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.text}, ${({theme:e})=>e.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Fk=k(M.p)`
  text-align: center;
  font-size: 1.125rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Vk=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,Bk=k(M.div)`
  position: relative;
  z-index: 2;
  
  .paragraph {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({theme:e})=>e.colors.textSecondary};
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .highlight {
    color: ${({theme:e})=>e.colors.primary};
    font-weight: 600;
  }
`,Hk=k.div`
  width: 350px;
  height: 350px;
  position: relative;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    order: -1;
    width: 280px;
    height: 280px;
  }
`,Uk=k.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,Wk=k.span`
  font-size: 1.5rem;
`,Gk=k.span`
  font-size: 0.6rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Vm=k.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px dashed ${({theme:e})=>e.colors.glass.border};
  
  &.inner {
    width: 180px;
    height: 180px;
    transform: translate(-50%, -50%);
    animation: ${Yv} 30s linear infinite;
  }
  
  &.outer {
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
    animation: ${Kv} 40s linear infinite;
  }
  
  @media (max-width: 968px) {
    &.inner {
      width: 140px;
      height: 140px;
    }
    &.outer {
      width: 240px;
      height: 240px;
    }
  }
`,Bm=k.div`
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--color);
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${({$index:e,$total:t,$radius:n})=>{const r=e/t*360;return`
      top: 50%;
      left: 50%;
      transform: 
        translate(-50%, -50%) 
        rotate(${r}deg) 
        translateX(${n}px) 
        rotate(-${r}deg);
    `}}
  
  /* Counter-rotate to keep icons upright */
  svg {
    animation: ${Kv} 30s linear infinite;
  }
  
  .outer & svg {
    animation: ${Yv} 40s linear infinite;
  }
  
  .tooltip {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({theme:e})=>e.colors.backgroundSolid};
    color: ${({theme:e})=>e.colors.text};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.7rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 0 20px var(--color);
    
    .tooltip {
      opacity: 1;
    }
  }
  
  @media (max-width: 968px) {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }
`,Yk=k(M.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`,Kk=k(M.div)`
  ${hf}
  text-align: center;
  padding: 1.5rem 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.accent});
  }
  
  .number {
    font-family: ${({theme:e})=>e.fonts.secondary};
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.25rem;
  }
  
  .label {
    font-size: 0.8rem;
    color: ${({theme:e})=>e.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`,Qk=k.div`
  margin-top: 4rem;
`,Xk=k(M.h3)`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.colors.text};
`,qk=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Zk=k(M.div)`
  ${mf}
  padding: 1.5rem;
  
  .category-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    
    .icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}20, ${({theme:e})=>e.colors.accent}20);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: ${({theme:e})=>e.colors.primary};
    }
    
    .title {
      font-family: ${({theme:e})=>e.fonts.secondary};
      font-size: 1.1rem;
      font-weight: 600;
      color: ${({theme:e})=>e.colors.text};
    }
  }
`,Jk=k.div`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,eC=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,tC=k.div`
  height: 6px;
  background: ${({theme:e})=>e.colors.glass.border};
  border-radius: 3px;
  overflow: hidden;
`,nC=k.div`
  height: 100%;
  background: linear-gradient(90deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.accent});
  border-radius: 3px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${({$delay:e})=>e}ms;
`,rC=()=>{const e=P.useRef(null),t=ho(e,{once:!0,margin:"-100px"}),n=[{number:"84.5",suffix:"%",label:"Diploma Score"},{number:"2026",suffix:"",label:"Graduation"},{number:"10",suffix:"+",label:"Projects"},{number:"2",suffix:"+",label:"Certifications"}],r=[{icon:nf,title:"Frontend",skills:[{name:"React / React Native",value:85},{name:"TypeScript",value:80},{name:"HTML/CSS",value:90}]},{icon:bv,title:"Backend",skills:[{name:"Java Spring Boot",value:90},{name:"GraphQL / REST",value:85},{name:"Python",value:75}]},{icon:f9,title:"Database",skills:[{name:"PostgreSQL",value:85},{name:"Redis",value:75},{name:"OpenSearch",value:70}]},{icon:b9,title:"DevOps & Tools",skills:[{name:"Docker",value:80},{name:"Git / GitHub",value:90},{name:"AWS / GCP",value:70}]}];return p.jsx(Ik,{id:"about",ref:e,children:p.jsxs(M.div,{variants:bo,initial:"hidden",animate:t?"visible":"hidden",children:[p.jsx(Nk,{variants:de,children:"About Me"}),p.jsx(Fk,{variants:de,children:"Passionate about building scalable solutions that make an impact"}),p.jsxs(Vk,{children:[p.jsxs(Bk,{variants:de,children:[p.jsxs("p",{className:"paragraph",children:["Hi! I'm ",p.jsx("span",{className:"highlight",children:"Yash Borse"}),", a Full Stack Developer currently working at ",p.jsx("span",{className:"highlight",children:"Hindustan Aeronautics Limited (HAL)"}),". I specialize in building robust backend systems and cross-platform mobile applications."]}),p.jsxs("p",{className:"paragraph",children:["With a strong foundation in ",p.jsx("span",{className:"highlight",children:"Java Spring Boot"})," and",p.jsx("span",{className:"highlight",children:" PostgreSQL"}),", I design and implement scalable REST and GraphQL APIs. My work at HAL focuses on secure, high-performance applications for the aerospace and defense sector."]}),p.jsxs("p",{className:"paragraph",children:["I hold a Diploma in Computer Science with ",p.jsx("span",{className:"highlight",children:"84.5%"}),"and am pursuing my B.E. in Information Technology, expected to graduate in 2026. I'm also certified in ",p.jsx("span",{className:"highlight",children:"AWS"})," and ",p.jsx("span",{className:"highlight",children:"Google Cloud"}),"."]})]}),p.jsx(Ok,{})]}),p.jsx(Yk,{variants:de,children:n.map((i,o)=>p.jsxs(Kk,{variants:Gv,whileHover:{scale:1.05,y:-5},transition:{type:"spring",stiffness:300,damping:15},children:[p.jsxs(M.div,{className:"number",initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:.5+o*.1},children:[i.number,i.suffix]}),p.jsx("div",{className:"label",children:i.label})]},i.label))}),p.jsxs(Qk,{children:[p.jsx(Xk,{variants:de,children:"Skills & Expertise"}),p.jsx(qk,{children:r.map((i,o)=>p.jsxs(Zk,{variants:de,whileHover:{scale:1.02,y:-5},transition:{type:"spring",stiffness:300,damping:15},children:[p.jsxs("div",{className:"category-header",children:[p.jsx("div",{className:"icon",children:p.jsx(i.icon,{})}),p.jsx("h4",{className:"title",children:i.title})]}),i.skills.map((s,a)=>p.jsx(Dk,{label:s.name,value:s.value,delay:o*200+a*100},s.name))]},i.title))})]})]})})},iC=[{id:1,company:"Hindustan Aeronautics Limited (HAL)",position:"React Native Developer",duration:"2023 - Present",location:"Bangalore, India",description:"Developing cross-platform mobile applications for aerospace and defense sector using React Native, focusing on high-performance, secure, and scalable solutions.",technologies:["React Native","TypeScript","Redux Toolkit","Firebase","Native Modules","React Navigation","Expo"],achievements:["Built secure mobile applications for defense sector","Implemented offline-first architecture for critical apps","Optimized app performance achieving 60fps animations","Integrated native device features and sensors"]}],oC=bn`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
`,sC=k.section`
  padding: 100px 0;
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
`,aC=k(M.h2)`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.text}, ${({theme:e})=>e.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,lC=k(M.p)`
  text-align: center;
  font-size: 1.125rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,uC=k.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30px;
    width: 3px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({theme:e})=>e.colors.primary},
      ${({theme:e})=>e.colors.accent}
    );
    border-radius: 3px;
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,no=k(M.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;
  padding-left: 80px;
  
  @media (min-width: 768px) {
    padding-left: 0;
    
    &:nth-child(odd) {
      padding-right: calc(50% + 50px);
      
      .card {
        text-align: right;
      }
      
      .meta {
        justify-content: flex-end;
      }
    }
    
    &:nth-child(even) {
      padding-left: calc(50% + 50px);
    }
  }
`,cC=k(M.div)`
  position: absolute;
  left: 10px;
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.accent});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  z-index: 2;
  box-shadow: 0 0 20px ${({theme:e})=>e.colors.primary}50;
  
  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
  }`,dC=k(M.div)`
  ${mf}
  padding: 1.5rem;
  position: relative;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.accent});
    left: -20px;
    
    @media (min-width: 768px) {
      ${no}:nth-child(odd) & {
        left: auto;
        right: -20px;
      }
      
      ${no}:nth-child(even) & {
        left: -20px;
      }
    }
  }
  
  .company {
    font-family: ${({theme:e})=>e.fonts.secondary};
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .current-badge {
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.success}, ${({theme:e})=>e.colors.accent});
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: 0.65rem;
    font-weight: 600;
    animation: ${oC} 2s ease-in-out infinite;
  }
  
  .position {
    font-size: 1rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.primary};
    margin-bottom: 0.75rem;
  }
  
  .meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8rem;
      color: ${({theme:e})=>e.colors.textSecondary};
      
      .icon {
        color: ${({theme:e})=>e.colors.primary};
        font-size: 0.75rem;
      }
    }
  }
  
  .description {
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${({theme:e})=>e.colors.textSecondary};
    margin-bottom: 1.25rem;
  }
`,fC=k.div`
  margin-bottom: 1.25rem;
  
  .technologies-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .technologies-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    
    @media (min-width: 768px) {
      ${no}:nth-child(odd) & {
        justify-content: flex-end;
      }
    }
  }
`,pC=k(M.span)`
  background: ${({theme:e})=>e.colors.primaryGlass};
  color: ${({theme:e})=>e.colors.primary};
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid ${({theme:e})=>e.colors.primary}30;
`,hC=k.div`
  .achievements-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .achievement {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 0.85rem;
    color: ${({theme:e})=>e.colors.textSecondary};
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .icon {
      color: ${({theme:e})=>e.colors.success};
      margin-top: 0.15rem;
      flex-shrink: 0;
      font-size: 0.75rem;
    }
    
    @media (min-width: 768px) {
      ${no}:nth-child(odd) & {
        flex-direction: row-reverse;
        text-align: right;
      }
    }
  }
`,mC=()=>{const e=P.useRef(null),t=ho(e,{once:!0,margin:"-100px"});return p.jsx(sC,{id:"experience",ref:e,children:p.jsxs(M.div,{variants:bo,initial:"hidden",animate:t?"visible":"hidden",children:[p.jsx(aC,{variants:de,children:"Professional Experience"}),p.jsx(lC,{variants:de,children:"A journey through my professional growth and achievements"}),p.jsx(uC,{children:iC.map((n,r)=>p.jsxs(no,{variants:de,children:[p.jsx(cC,{variants:mk,whileHover:{scale:1.2,rotate:360},transition:{duration:.5},children:p.jsx(c9,{})}),p.jsxs(dC,{className:"card",whileHover:{scale:1.02,y:-5},transition:{type:"spring",stiffness:300,damping:15},children:[p.jsxs("h3",{className:"company",children:[n.company,n.duration.includes("Present")&&p.jsxs("span",{className:"current-badge",children:[p.jsx(S9,{style:{marginRight:"4px"}}),"Current"]})]}),p.jsx("h4",{className:"position",children:n.position}),p.jsxs("div",{className:"meta",children:[p.jsxs("div",{className:"meta-item",children:[p.jsx(Sv,{className:"icon"}),p.jsx("span",{children:n.duration})]}),p.jsxs("div",{className:"meta-item",children:[p.jsx(rf,{className:"icon"}),p.jsx("span",{children:n.location})]})]}),p.jsx("p",{className:"description",children:n.description}),p.jsxs(fC,{children:[p.jsx("div",{className:"technologies-label",children:"Technologies"}),p.jsx("div",{className:"technologies-list",children:n.technologies.map((i,o)=>p.jsx(pC,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.5+o*.05},children:i},o))})]}),p.jsxs(hC,{children:[p.jsx("div",{className:"achievements-label",children:"Key Achievements"}),n.achievements.map((i,o)=>p.jsxs(M.div,{className:"achievement",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.7+o*.1},children:[p.jsx(tf,{className:"icon"}),p.jsx("span",{children:i})]},o))]})]})]},n.id))})]})})},Hm=[{id:6,title:"Sell-the-old-Car Backend",description:"A robust backend marketplace for buying and selling used cars, featuring hybrid REST and GraphQL API architecture with enterprise-grade security and scalability.",image:"",technologies:["Java 17","Spring Boot 3.x","GraphQL","PostgreSQL","OpenSearch","Redis","Docker","JWT Authentication"],githubUrl:"https://github.com/yashborse/sell-the-old-car",liveUrl:"#",featured:!0,category:"Backend API",completedDate:"2024-02-01",features:["Hybrid REST + GraphQL API architecture","JWT-based secure authentication","Real-time chat messaging system","Dealer verification workflow","Backblaze B2 media storage integration","OpenSearch full-text search engine","Redis caching for performance","Docker containerization with Compose"]},{id:1,title:"AutoTradeX - Used Car Marketplace",description:"A comprehensive e-commerce platform for buying and selling used cars with advanced search, AI-based price prediction, and secure payment processing.",image:"",technologies:["React Native","Java ","Spring Boot","PostgreSQL","JWT Authentication","GraphQL API","Redux Toolkit"],githubUrl:"https://github.com/yashborse/autotradex",liveUrl:"https://autotradex-demo.vercel.app",featured:!0,category:"Web Application",completedDate:"2024-01-15",features:["Advanced car search with filters (price, year, mileage, etc.)","AI-powered price prediction based on market trends","Secure user authentication with JWT and Firebase","Real-time chat between buyers and sellers","Image upload and car photo gallery","Saved searches and favorite listings","Responsive design for all devices"]},{id:2,title:"Duplicate File Analyzer",description:"A tool for analyzing duplicate files on a computer using Python.",image:"",technologies:["React Native","SQLite","React Navigation","Charts","AsyncStorage"],githubUrl:"https://github.com/yashborse/expense-manager",liveUrl:"https://expo.dev/@yashborse/expense-manager",featured:!0,category:"Mobile App",completedDate:"2023-11-20",features:["Alerts and notifications of duplicate files","recommend before downloading","Secure local data storage","Support Distrbuted Storage "]},{id:3,title:"CampusGuard - Smart Surveillance System",description:"An intelligent campus security solution using computer vision for real-time monitoring, threat detection, and automated alerts.",image:"",technologies:["Python","OpenCV","YOLOv8 (Object Detection)","Flask","WebSocket","TensorFlow","PostgreSQL"],githubUrl:"https://github.com/yashborse/campusguard",liveUrl:"#",featured:!0,category:"AI/ML Application",completedDate:"2023-09-10",features:["Real-time object and person detection","Suspicious activity alerts","Face recognition for authorized personnel","Crowd density monitoring","Automated incident reporting","Multi-camera support","Web-based dashboard for monitoring"]},{id:4,title:"NetScan Pro - Network Analyzer",description:"A comprehensive network analysis tool for monitoring, scanning, and troubleshooting network infrastructure with real-time insights.",image:"",technologies:["Python","Scapy","NetworkX","Django","WebSockets","Docker","Redis"],githubUrl:"https://github.com/yashborse/netscan-pro",liveUrl:"#",featured:!1,category:"Network Utility",completedDate:"2023-07-25",features:["Network discovery and device fingerprinting","Port scanning and service detection","Network traffic analysis and monitoring","Bandwidth usage tracking","Security vulnerability scanning","Interactive network topology mapping","Custom scan scheduling and reporting"]},{id:5,title:"Finance Management using AI ",description:"A tool for managing finance using AI.",image:"",technologies:["Python","TypeScript","Firebase","React ","Lottie"],githubUrl:"https://github.com/yashborse/quiz-master",liveUrl:"https://expo.dev/@yashborse/quiz-master",featured:!1,category:"Mobile App",completedDate:"2023-05-15",features:["Multiple quiz categories","Real-time leaderboards","Smooth animations with Lottie","Social sharing capabilities","Offline quiz download"]}],gC=({project:e,isOpen:t,onClose:n})=>!t||!e?null:p.jsx(Bg,{children:p.jsx(WC,{variants:fk,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:p.jsxs(GC,{variants:pk,initial:"hidden",animate:"visible",exit:"exit",onClick:r=>r.stopPropagation(),children:[p.jsx(qC,{onClick:n,children:p.jsx(kv,{})}),p.jsxs(YC,{children:[p.jsx(KC,{children:e.title}),p.jsx(QC,{children:e.category})]}),p.jsxs(XC,{children:[p.jsx(ZC,{children:e.description}),p.jsx(Um,{children:"Technology Stack"}),p.jsx(JC,{children:e.technologies.map(r=>p.jsx(eP,{children:r},r))}),e.features&&p.jsxs(p.Fragment,{children:[p.jsx(Um,{children:"Key Features"}),p.jsx(tP,{children:e.features.map((r,i)=>p.jsxs(nP,{children:[p.jsx("span",{className:"bullet",children:"•"})," ",r]},i))})]}),p.jsxs(rP,{children:[e.githubUrl&&p.jsxs(Wm,{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[p.jsx(Hr,{})," Source Code"]}),e.liveUrl&&e.liveUrl!=="#"&&p.jsxs(Wm,{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",$primary:!0,children:[p.jsx(h9,{})," Live Demo"]})]})]})]})})}),Qv=({category:e})=>{const n={"Backend API":bv,"Web Application":nf,"Mobile App":v9,"AI/ML Application":u9,"Network Utility":y9}[e]||m9;return p.jsx(n,{})},vC=({project:e,onClick:t})=>p.jsxs(Xa,{layoutId:`project-${e.id}`,onClick:()=>t(e),whileHover:{y:-5},transition:{type:"spring",stiffness:300,damping:25},children:[p.jsxs(TC,{children:[p.jsx(EC,{children:"Flagship Project"}),p.jsx(jC,{children:e.title}),p.jsx($C,{children:e.description}),p.jsx(MC,{children:e.technologies.slice(0,4).map(n=>p.jsx(_C,{children:n},n))}),p.jsxs(AC,{children:["View Case Study ",p.jsx(la,{})]})]}),p.jsxs(LC,{children:[e.image?p.jsx(RC,{src:e.image,alt:e.title}):p.jsx(zC,{children:p.jsx(Qv,{category:e.category})}),p.jsxs(DC,{className:"badge-1",animate:{y:[0,-10,0]},transition:{duration:4,repeat:1/0},children:[p.jsx(nf,{})," Full Stack"]})]})]}),yC=({project:e,onClick:t})=>p.jsxs(Xv,{layoutId:`project-${e.id}`,onClick:()=>t(e),whileHover:{y:-8},transition:{type:"spring",stiffness:300,damping:25},children:[e.image?p.jsx(NC,{src:e.image,alt:e.title}):p.jsx(IC,{children:p.jsx(Qv,{category:e.category})}),p.jsxs(FC,{children:[p.jsx(VC,{children:e.category}),p.jsx(BC,{children:e.title}),p.jsx(HC,{children:e.description}),p.jsxs(UC,{children:["Read More ",p.jsx(la,{})]})]})]}),xC=()=>{const[e,t]=P.useState(null),n=Hm.find(i=>i.id===6),r=Hm.filter(i=>i.featured&&i.id!==6);return p.jsx(wC,{id:"projects",children:p.jsxs(SC,{children:[p.jsxs(bC,{variants:de,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[p.jsxs(kC,{children:[p.jsx("span",{className:"accent",children:"Selected"})," Works"]}),p.jsx(CC,{children:"A curated selection of projects demonstrating full-stack engineering excellence."})]}),p.jsxs(PC,{variants:bo,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[n&&p.jsx("div",{variants:de,children:p.jsx(vC,{project:n,onClick:t})}),p.jsx(OC,{variants:de,children:r.map(i=>p.jsx(yC,{project:i,onClick:t},i.id))})]}),p.jsx(gC,{project:e,isOpen:!!e,onClose:()=>t(null)})]})})},wC=k.section`
  padding: 6rem 0;
  background: ${({theme:e})=>e.colors.background};
  position: relative;
`,SC=k.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,bC=k(M.div)`
  margin-bottom: 4rem;
  text-align: center; // Center aligned for cleaner look
`,kC=k.h2`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 3rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 1rem;
  
  .accent {
    color: ${({theme:e})=>e.colors.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`,CC=k.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`,PC=k(M.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,Xa=k(M.div)`
  background: ${({theme:e})=>e.colors.surface};
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05); // Subtle shadow
  cursor: pointer;
  min-height: 400px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`,TC=k.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 968px) {
    padding: 2.5rem;
  }
`,EC=k.span`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`,jC=k.h3`
  font-size: 2.5rem;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 1rem;
  line-height: 1.1;
`,$C=k.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`,MC=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
`,_C=k.span`
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.textSecondary};
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({theme:e})=>e.colors.border};
`,AC=k.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
    font-weight: 600;
    transition: gap 0.2s;
    
    ${Xa}:hover & {
        gap: 0.8rem;
        color: ${({theme:e})=>e.colors.primary};
    }
`,LC=k.div`
    background: ${({theme:e})=>e.colors.background}; // Contrast background
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    @media (max-width: 968px) {
        height: 250px;
        order: -1;
    }
`,RC=k.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    ${Xa}:hover & {
        transform: scale(1.05);
    }
`,zC=k.div`
    font-size: 8rem;
    color: ${({theme:e})=>e.colors.primary}20; // Very subtle brand color
    transform: rotate(-5deg);
    transition: transform 0.5s ease;
    
    ${Xa}:hover & {
        transform: rotate(0deg) scale(1.05);
        color: ${({theme:e})=>e.colors.primary}30;
    }
`,DC=k(M.div)`
    position: absolute;
    background: ${({theme:e})=>e.colors.surface};
    padding: 0.8rem 1.2rem;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
    font-weight: 600;
    bottom: 20%;
    right: 15%;
    z-index: 2;
    
    svg { color: ${({theme:e})=>e.colors.primary}; }
`,OC=k(M.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Xv=k(M.div)`
  background: ${({theme:e})=>e.colors.surface};
  border-radius: 16px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.colors.border};
  transition: border-color 0.3s, transform 0.3s;
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary}40;
    transform: translateY(-5px);
  }
`,IC=k.div`
    width: 50px;
    height: 50px;
    background: ${({theme:e})=>e.colors.background};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:e})=>e.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`,NC=k.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1.5rem;
`,FC=k.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,VC=k.span`
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.textSecondary};
    margin-bottom: 0.5rem;
    font-weight: 600;
`,BC=k.h4`
    font-size: 1.5rem;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.8rem;
    font-weight: 700;
`,HC=k.p`
    color: ${({theme:e})=>e.colors.textSecondary};
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,UC=k.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: auto;
    transition: gap 0.2s;
    
    ${Xv}:hover & {
        gap: 0.8rem;
        color: ${({theme:e})=>e.colors.primary};
    }
`,WC=k(M.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,GC=k(M.div)`
  background: ${({theme:e})=>e.colors.surface};
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2);
`,YC=k.div`
  padding: 3rem 2.5rem 1.5rem 2.5rem;
  background: ${({theme:e})=>e.colors.background};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,KC=k.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 0.5rem;
`,QC=k.span`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
`,XC=k.div`
  padding: 2.5rem;
  overflow-y: auto;
`,qC=k.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  border: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: rotate(90deg);
    border-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.primary};
  }
`,ZC=k.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 2.5rem;
`,Um=k.h4`
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.text};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`,JC=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
`,eP=k.span`
  padding: 0.4rem 0.8rem;
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({theme:e})=>e.colors.border};
`,tP=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 3rem;
`,nP=k.div`
  display: flex;
  gap: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.5;
  
  .bullet {
    color: ${({theme:e})=>e.colors.primary};
  }
`,rP=k.div`
  display: flex;
  gap: 1rem;
`,Wm=k.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  
  ${({$primary:e,theme:t})=>e?`
    background: ${t.colors.primary};
    color: white;
    box-shadow: 0 4px 15px ${t.colors.primaryGlass};
    &:hover { opacity: 0.9; transform: translateY(-2px); }
  `:`
    background: ${t.colors.background};
    color: ${t.colors.text};
    border: 1px solid ${t.colors.border};
    &:hover { border-color: ${t.colors.text}; transform: translateY(-2px); }
  `}
`,Yl=[{id:1,institution:"JSPM's BSIOTR College of Engineering",degree:"Bachelor of Engineering in Computer Science",duration:"2023 - 2026",location:"Pune, India",percentage:"78.5%",description:"Comprehensive study of computer science and engineering fundamentals with specialization in mobile application development and cross-platform technologies.",relevantCoursework:["Data Structures and Algorithms","Mobile Application Development","Software Engineering","Database Management Systems","Operating Systems","Computer Networks","Object Oriented Programming","Web Technologies"],achievements:["Consistent academic performance with 78.5% aggregate","Active member of Mobile App Development Club","Participated in multiple hackathons and coding competitions","Built several React Native projects during coursework"],type:"degree"},{id:2,institution:"Shri S.N.J.B Polytechnic Chandwad",degree:"Diploma in Computer Engineering",duration:"2020 - 2023",location:"Nashik, India",percentage:"84.5%",description:"Foundation in computer engineering principles with focus on programming, web development, and mobile technologies.",relevantCoursework:["Programming in C/C++","Java Programming","Web Development","Database Systems","Computer Graphics","Software Testing","Mobile App Development","Data Communication"],achievements:["Graduated with First Class with Distinction (85.2%)","Top 5% of the batch","Led college technical fest mobile app development workshop","Built first mobile app during final year project"],type:"diploma"},{id:2,institution:"FreeCodeCamp",degree:"Full Stack Web Development Certification",duration:"2022",location:"Online",description:"Comprehensive certification program covering modern web development technologies and best practices.",relevantCoursework:["Responsive Web Design","JavaScript Algorithms and Data Structures","Frontend Development Libraries","Data Visualization","APIs and Microservices","Quality Assurance"],achievements:["Completed 1800+ hours of coursework","Built 30+ projects","Earned 6 certificates"],type:"certification"},{id:3,institution:"AWS",degree:"AWS Certified Solutions Architect - Associate",duration:"2024",location:"Online",description:"Professional certification demonstrating expertise in designing distributed systems on AWS.",relevantCoursework:["AWS Core Services","Security and Compliance","Technology Solutions","Cost Optimization","Performance Optimization"],achievements:["Passed on first attempt","Score: 892/1000"],type:"certification"},{id:4,institution:"Google",degree:"Google Cloud  Developer",duration:"2024",location:"Online",description:"Professional certification for designing, building, and deploying applications on Google Cloud Platform.",relevantCoursework:["Application Development","Cloud Storage and Databases","Security Implementation","Testing and Deployment","Application Performance Monitoring"],achievements:["Achieved certification with distinction","Completed hands-on labs and projects"],type:"certification"}],iP=({value:e,size:t=80,strokeWidth:n=6})=>{const r=(t-n)/2,i=r*2*Math.PI,o=i-parseFloat(e)/100*i;return p.jsxs(gP,{width:t,height:t,children:[p.jsx("circle",{className:"bg",cx:t/2,cy:t/2,r,strokeWidth:n}),p.jsx(M.circle,{className:"progress",cx:t/2,cy:t/2,r,strokeWidth:n,strokeDasharray:i,initial:{strokeDashoffset:i},whileInView:{strokeDashoffset:o},transition:{duration:1.5,ease:"easeOut"},viewport:{once:!0}}),p.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dy:"0.3em",className:"value",children:e})]})},oP=bn`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`,sP=k.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
`,aP=k(M.h2)`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.text}, ${({theme:e})=>e.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,lP=k(M.p)`
  text-align: center;
  font-size: 1.125rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,uP=k(M.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`,Kl=k(M.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  ${({$active:e,theme:t})=>e?`
    background: linear-gradient(135deg, ${t.colors.primary}, ${t.colors.accent});
    color: white;
    box-shadow: 0 5px 20px ${t.colors.primary}40;
  `:`
    background: ${t.colors.glass.backdrop};
    color: ${t.colors.textSecondary};
    border: 1px solid ${t.colors.glass.border};
    
    &:hover {
      background: ${t.colors.glass.backdropHover};
      color: ${t.colors.text};
    }
  `}
`,cP=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,dP=k(M.div)`
  ${mf}
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      ${({$type:e,theme:t})=>e==="degree"?t.colors.primary:e==="diploma"?t.colors.accent:t.colors.success},
      ${({theme:e})=>e.colors.accent}
    );
  }
`,fP=k.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`,pP=k.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, 
    ${({theme:e})=>e.colors.primary}20, 
    ${({theme:e})=>e.colors.accent}20
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({theme:e})=>e.colors.primary};
  flex-shrink: 0;
`,hP=k.div`
  flex: 1;
  
  .institution {
    font-family: ${({theme:e})=>e.fonts.secondary};
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.25rem;
    line-height: 1.3;
  }
  
  .degree {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  .meta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.75rem;
      color: ${({theme:e})=>e.colors.textSecondary};
      
      .icon {
        color: ${({theme:e})=>e.colors.primary};
        font-size: 0.7rem;
      }
    }
  }
`,mP=k.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`,gP=k.svg`
  transform: rotate(-90deg);
  
  .bg {
    fill: none;
    stroke: ${({theme:e})=>e.colors.glass.border};
  }
  
  .progress {
    fill: none;
    stroke: url(#gradient);
    stroke-linecap: round;
  }
  
  .value {
    fill: ${({theme:e})=>e.colors.text};
    font-family: ${({theme:e})=>e.fonts.secondary};
    font-size: 0.9rem;
    font-weight: 700;
    transform: rotate(90deg);
    transform-origin: center;
  }
  
  defs {
    linearGradient {
      stop:first-child {
        stop-color: ${({theme:e})=>e.colors.primary};
      }
      stop:last-child {
        stop-color: ${({theme:e})=>e.colors.accent};
      }
    }
  }
`,vP=k.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 1rem;
`,yP=k.div`
  .label {
    font-size: 0.7rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
  }
  
  .achievement {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
    color: ${({theme:e})=>e.colors.textSecondary};
    
    .icon {
      color: ${({theme:e})=>e.colors.success};
      margin-top: 0.15rem;
      flex-shrink: 0;
      font-size: 0.7rem;
    }
  }
`,xP=k(M.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  animation: ${oP} 3s ease-in-out infinite;
`,wP=()=>{const e=P.useRef(null),t=ho(e,{once:!0,margin:"-100px"}),[n,r]=Z.useState("all"),i=Yl.filter(l=>l.type==="degree"||l.type==="diploma"),o=Yl.filter(l=>l.type==="certification"),s=n==="all"?Yl:n==="degrees"?i:o,a=(l,u)=>l==="certification"?u.includes("AWS")?$k:u.includes("Google")?Mk:dm:fm;return p.jsxs(sP,{id:"education",ref:e,children:[p.jsx("svg",{width:"0",height:"0",children:p.jsx("defs",{children:p.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[p.jsx("stop",{offset:"0%",stopColor:"#3b82f6"}),p.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})})}),p.jsxs(M.div,{variants:bo,initial:"hidden",animate:t?"visible":"hidden",children:[p.jsx(aP,{variants:de,children:"Education & Certifications"}),p.jsx(lP,{variants:de,children:"My academic journey and professional credentials"}),p.jsxs(uP,{variants:de,children:[p.jsxs(Kl,{$active:n==="all",onClick:()=>r("all"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[p.jsx(a9,{})," All"]}),p.jsxs(Kl,{$active:n==="degrees",onClick:()=>r("degrees"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[p.jsx(fm,{})," Degrees"]}),p.jsxs(Kl,{$active:n==="certifications",onClick:()=>r("certifications"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[p.jsx(dm,{})," Certifications"]})]}),p.jsx(cP,{children:s.map((l,u)=>{const c=a(l.type,l.institution);return p.jsxs(dP,{$type:l.type,variants:Gv,whileHover:{scale:1.02,y:-5},transition:{type:"spring",stiffness:300,damping:15},children:[l.type==="certification"&&p.jsx(xP,{children:l.institution.includes("AWS")?"🏆":l.institution.includes("Google")?"☁️":"📜"}),p.jsxs(fP,{children:[p.jsx(pP,{children:p.jsx(c,{})}),p.jsxs(hP,{children:[p.jsx("h3",{className:"institution",children:l.institution}),p.jsx("h4",{className:"degree",children:l.degree}),p.jsxs("div",{className:"meta",children:[p.jsxs("div",{className:"meta-item",children:[p.jsx(Sv,{className:"icon"}),p.jsx("span",{children:l.duration})]}),l.location&&p.jsxs("div",{className:"meta-item",children:[p.jsx(rf,{className:"icon"}),p.jsx("span",{children:l.location})]})]})]})]}),l.percentage&&p.jsx(mP,{children:p.jsx(iP,{value:l.percentage.replace("%","")})}),l.description&&p.jsx(vP,{children:l.description}),l.achievements&&l.achievements.length>0&&p.jsxs(yP,{children:[p.jsx("div",{className:"label",children:"Achievements"}),l.achievements.slice(0,3).map((d,f)=>p.jsxs(M.div,{className:"achievement",initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},transition:{delay:.3+f*.1},viewport:{once:!0},children:[p.jsx(tf,{className:"icon"}),p.jsx("span",{children:d})]},f))]})]},l.id+"-"+u)})})]})]})},SP=k.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
`,bP=k(M.h2)`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.text}, ${({theme:e})=>e.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,kP=k(M.p)`
  text-align: center;
  font-size: 1.125rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,CP=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,PP=k(M.div)`
  .info-title {
    font-family: ${({theme:e})=>e.fonts.secondary};
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 1rem;
  }
  
  .info-description {
    color: ${({theme:e})=>e.colors.textSecondary};
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`,TP=k.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,EP=k(M.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({theme:e})=>e.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.glass.backdropHover};
    transform: translateX(5px);
  }
  
  .icon {
    font-size: 1.2rem;
    color: ${({theme:e})=>e.colors.primary};
    flex-shrink: 0;
  }
  
  .content {
    .label {
      font-size: 0.875rem;
      color: ${({theme:e})=>e.colors.textMuted};
      margin-bottom: 0.25rem;
    }
    
    .value {
      font-weight: 500;
      color: ${({theme:e})=>e.colors.text};
    }
  }
`,jP=k.div`
  .social-title {
    font-size: 1rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 1rem;
  }
  
  .social-list {
    display: flex;
    gap: 1rem;
  }
`,$P=k(M.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({theme:e})=>e.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({theme:e})=>e.colors.glass.border};
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`,MP=k(M.form)`
  ${hf}
  padding: 2rem;
`,_P=k.h3`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 1.5rem;
`,es=k.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.5rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.875rem 1rem;
    background: ${({theme:e})=>e.colors.glass.backdrop};
    border: 1px solid ${({theme:e})=>e.colors.glass.border};
    border-radius: 8px;
    color: ${({theme:e})=>e.colors.text};
    font-family: ${({theme:e})=>e.fonts.primary};
    font-size: 1rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    
    &::placeholder {
      color: ${({theme:e})=>e.colors.textMuted};
    }
    
    &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.colors.primary};
      background: ${({theme:e})=>e.colors.glass.backdropHover};
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`,AP=k(M.button)`
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.accent});
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px ${({theme:e})=>e.colors.primary}40;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,LP=k(M.div)`
  background: ${({theme:e})=>e.colors.successGlass};
  color: ${({theme:e})=>e.colors.success};
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.success}30;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`,RP=()=>{const[e,t]=P.useState({name:"",email:"",subject:"",message:""}),[n,r]=P.useState(!1),[i,o]=P.useState(!1),s=P.useRef(null),a=ho(s,{once:!0,margin:"-100px"}),l=[{icon:to,label:"Email",value:"yashborse432005@gmail.com",href:"mailto:yashborse432005@gmail.com"},{icon:w9,label:"Phone",value:"+91 940 391 9940",href:"tel:+919403919940"},{icon:rf,label:"Location",value:"Maharashtra, India",href:null}],u=[{icon:Hr,href:"https://github.com/yashborse4",label:"GitHub"},{icon:Ba,href:"https://linkedin.com/in/yashborse",label:"LinkedIn"},{icon:ef,href:"https://twitter.com/yashborse4",label:"Twitter"}],c=y=>{const{name:x,value:S}=y.target;t(m=>({...m,[x]:S}))},d=async y=>{y.preventDefault(),r(!0),setTimeout(()=>{r(!1),o(!0),t({name:"",email:"",subject:"",message:""}),setTimeout(()=>{o(!1)},5e3)},2e3)},f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,duration:.5}}},g={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return p.jsx(SP,{id:"contact",ref:s,children:p.jsxs(M.div,{variants:f,initial:"hidden",animate:a?"visible":"hidden",children:[p.jsx(bP,{variants:g,children:"Get In Touch"}),p.jsx(kP,{variants:g,children:"Let's discuss your next project or just say hello!"}),p.jsxs(CP,{children:[p.jsxs(PP,{variants:g,children:[p.jsx("h3",{className:"info-title",children:"Let's Connect"}),p.jsx("p",{className:"info-description",children:"I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}),p.jsx(TP,{children:l.map((y,x)=>{var S;return p.jsxs(EP,{variants:g,whileHover:{scale:1.02},as:y.href?"a":"div",href:y.href,target:(S=y.href)!=null&&S.startsWith("mailto:")?"_self":"_blank",rel:"noopener noreferrer",children:[p.jsx(y.icon,{className:"icon"}),p.jsxs("div",{className:"content",children:[p.jsx("div",{className:"label",children:y.label}),p.jsx("div",{className:"value",children:y.value})]})]},x)})}),p.jsxs(jP,{children:[p.jsx("div",{className:"social-title",children:"Follow Me"}),p.jsx("div",{className:"social-list",children:u.map((y,x)=>p.jsx($P,{href:y.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},"aria-label":y.label,children:p.jsx(y.icon,{})},y.label))})]})]}),p.jsxs(MP,{variants:g,onSubmit:d,whileHover:{scale:1.01},transition:{type:"spring",stiffness:300,damping:10},children:[p.jsx(_P,{children:"Send Message"}),p.jsxs(es,{children:[p.jsx("label",{htmlFor:"name",children:"Name *"}),p.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:c,placeholder:"Yash Borse",required:!0})]}),p.jsxs(es,{children:[p.jsx("label",{htmlFor:"email",children:"Email *"}),p.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:c,placeholder:"yashborse432005@gmail.com",required:!0})]}),p.jsxs(es,{children:[p.jsx("label",{htmlFor:"subject",children:"Subject *"}),p.jsx("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:c,placeholder:"What's this about?",required:!0})]}),p.jsxs(es,{children:[p.jsx("label",{htmlFor:"message",children:"Message *"}),p.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:c,placeholder:"Tell me about your project...",required:!0})]}),p.jsx(AP,{type:"submit",disabled:n,whileHover:{scale:1.02},whileTap:{scale:.98},children:n?p.jsxs(p.Fragment,{children:[p.jsx(M.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:"⚪"}),"Sending..."]}):p.jsxs(p.Fragment,{children:[p.jsx(x9,{}),"Send Message"]})}),i&&p.jsxs(LP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[p.jsx(tf,{}),"Message sent successfully! I'll get back to you soon."]})]})]})]})})},zP=()=>p.jsxs("div",{children:[p.jsx(jk,{}),p.jsx(rC,{}),p.jsx(mC,{}),p.jsx(xC,{}),p.jsx(wP,{}),p.jsx(RP,{})]}),DP=()=>p.jsxs("div",{children:[p.jsx("h1",{children:"404 - Page Not Found"}),p.jsx("p",{children:"The page you are looking for does not exist."})]}),OP=()=>p.jsx("div",{children:p.jsx(DP,{})});function IP(){const{currentTheme:e}=Fg();return p.jsxs(c6,{theme:e,children:[p.jsx(x6,{}),p.jsx(f5,{children:p.jsx(ak,{children:p.jsxs(u5,{children:[p.jsx(Hu,{path:"/",element:p.jsx(zP,{})}),p.jsx(Hu,{path:"*",element:p.jsx(OP,{})})]})})})]})}function NP(){return p.jsx(y6,{children:p.jsx(IP,{})})}const FP=Ql.createRoot(document.getElementById("root"));FP.render(p.jsx(Z.StrictMode,{children:p.jsx(NP,{})}));
