"use strict";var b=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var P=b(function(T,y){
var A=require('@stdlib/math-base-assert-is-positive-zero/dist'),B=require('@stdlib/math-base-assert-is-negative-zero/dist'),C=require('@stdlib/math-base-assert-is-nan/dist');function D(e,n,u,x,t,g,l){var s,v,c,f,m,o,r,a,i,q;for(s=n.data,v=t.data,c=n.accessors[0],f=t.accessors[0],r=x,a=l,q=0;q<e&&(i=c(s,r),!(f(v,a)===0&&i===i));q++)r+=u,a+=g;if(q===e)return NaN;for(o=i,m=o,q+=1,q;q<e;q++)r+=u,a+=g,!f(v,a)&&(i=c(s,r),!C(i)&&(i<o||i===o&&B(i)?o=i:(i>m||i===m&&A(i))&&(m=i)));return(m+o)/2}y.exports=D
});var p=b(function(U,d){
var E=require('@stdlib/math-base-assert-is-positive-zero/dist'),F=require('@stdlib/math-base-assert-is-negative-zero/dist'),G=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/array-base-arraylike2object/dist'),H=P();function I(e,n,u,x,t,g,l){var s,v,c,f,m,o,r,a;if(e<=0)return NaN;if(m=Z(n),o=Z(t),m.accessorProtocol||o.accessorProtocol)return H(e,m,u,x,o,g,l);for(c=x,f=l,a=0;a<e&&(r=n[c],!(t[f]===0&&r===r));a++)c+=u,f+=g;if(a===e)return NaN;for(v=r,s=v,a+=1,a;a<e;a++)c+=u,f+=g,!t[f]&&(r=n[c],!G(r)&&(r<v||r===v&&F(r)?v=r:(r>s||r===s&&E(r))&&(s=r)));return(s+v)/2}d.exports=I
});var R=b(function(V,O){
var j=require('@stdlib/strided-base-stride2offset/dist'),J=p();function K(e,n,u,x,t){return J(e,n,u,j(e,u),x,t,j(e,t))}O.exports=K
});var z=b(function(W,w){
var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),N=p();L(h,"ndarray",N);w.exports=h
});var Q=z();module.exports=Q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
