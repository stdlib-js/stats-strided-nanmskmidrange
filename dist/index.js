"use strict";var b=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var P=b(function(N,p){
var w=require('@stdlib/math-base-assert-is-positive-zero/dist'),z=require('@stdlib/math-base-assert-is-negative-zero/dist'),A=require('@stdlib/math-base-assert-is-nan/dist');function B(e,n,u,g,t,x,l){var c,v,s,f,m,o,r,a,i,q;for(c=n.data,v=t.data,s=n.accessors[0],f=t.accessors[0],r=g,a=l,q=0;q<e&&(i=s(c,r),!(f(v,a)===0&&i===i));q++)r+=u,a+=x;if(q===e)return NaN;for(o=i,m=o,q+=1,q;q<e;q++)r+=u,a+=x,!f(v,a)&&(i=s(c,r),!A(i)&&(i<o||i===o&&z(i)?o=i:(i>m||i===m&&w(i))&&(m=i)));return(m+o)/2}p.exports=B
});var y=b(function(Q,d){
var C=require('@stdlib/math-base-assert-is-positive-zero/dist'),D=require('@stdlib/math-base-assert-is-negative-zero/dist'),E=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/array-base-arraylike2object/dist'),F=P();function G(e,n,u,g,t,x,l){var c,v,s,f,m,o,r,a;if(e<=0)return NaN;if(m=Z(n),o=Z(t),m.accessorProtocol||o.accessorProtocol)return F(e,m,u,g,o,x,l);for(s=g,f=l,a=0;a<e&&(r=n[s],!(t[f]===0&&r===r));a++)s+=u,f+=x;if(a===e)return NaN;for(v=r,c=v,a+=1,a;a<e;a++)s+=u,f+=x,!t[f]&&(r=n[s],!E(r)&&(r<v||r===v&&D(r)?v=r:(r>c||r===c&&C(r))&&(c=r)));return(c+v)/2}d.exports=G
});var R=b(function(S,O){
var j=require('@stdlib/strided-base-stride2offset/dist'),H=y();function I(e,n,u,g,t){return H(e,n,u,j(e,u),g,t,j(e,t))}O.exports=I
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),K=y();J(h,"ndarray",K);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
