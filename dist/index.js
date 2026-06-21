"use strict";var b=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var P=b(function(N,p){
var w=require('@stdlib/math-base-assert-is-positive-zero/dist'),z=require('@stdlib/math-base-assert-is-negative-zero/dist'),A=require('@stdlib/math-base-assert-is-nan/dist');function B(e,a,v,g,t,x,l){var c,o,s,f,m,u,r,i,n,q;for(c=a.data,o=t.data,s=a.accessors[0],f=t.accessors[0],r=g,i=l,q=0;q<e&&(n=s(c,r),!(f(o,i)===0&&n===n));q++)r+=v,i+=x;if(q===e)return NaN;for(u=n,m=u,q+=1,q;q<e;q++)r+=v,i+=x,!f(o,i)&&(n=s(c,r),!A(n)&&(n<u||n===u&&z(n)?u=n:(n>m||n===m&&w(n))&&(m=n)));return(m+u)/2}p.exports=B
});var y=b(function(Q,d){
var C=require('@stdlib/math-base-assert-is-positive-zero/dist'),D=require('@stdlib/math-base-assert-is-negative-zero/dist'),E=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/array-base-arraylike2object/dist'),F=P();function G(e,a,v,g,t,x,l){var c,o,s,f,m,u,r,i;if(e<=0)return NaN;if(m=Z(a),u=Z(t),m.accessorProtocol||u.accessorProtocol)return F(e,m,v,g,u,x,l);for(s=g,f=l,i=0;i<e&&(r=a[s],!(t[f]===0&&r===r));i++)s+=v,f+=x;if(i===e)return NaN;for(o=r,c=o,i+=1,i;i<e;i++)s+=v,f+=x,!t[f]&&(r=a[s],!E(r)&&(r<o||r===o&&D(r)?o=r:(r>c||r===c&&C(r))&&(c=r)));return(c+o)/2}d.exports=G
});var R=b(function(S,O){
var j=require('@stdlib/strided-base-stride2offset/dist'),H=y();function I(e,a,v,g,t){return H(e,a,v,j(e,v),g,t,j(e,t))}O.exports=I
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),K=y();J(h,"ndarray",K);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
