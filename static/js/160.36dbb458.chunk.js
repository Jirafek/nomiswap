"use strict";(self.webpackChunknomiswap_frontend=self.webpackChunknomiswap_frontend||[]).push([[160],{33160:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var i=e(70885),o=e(42982),r=e(47313),l=e(62105),u=e(56952),a=e(40989),d=e(70244),c=e(7354),s=e(85400),m=e(57254),p=e(24039),x=e(50786),h=e(56396),f=e(81730),y=e(88681),g=e(90762),v=e(25785),j=(0,d.ZP)(u.eWz).withConfig({displayName:"Body",componentId:"sc-10uahmw-0"})(["background-color:",";border-radius:12px;margin-top:20px;margin-bottom:20px;min-height:",";display:flex;flex-direction:column;"],(function(n){return n.theme.colors.backgroundAlt2}),(function(n){return n.minHeight})),k=e(46417),w=function(n){var t=n.account,e=n.isLoading,i=n.items,o=void 0===i?[]:i,r=(0,s.$G)().t;return t?e?(0,k.jsx)(j,{minHeight:"236px",children:(0,k.jsx)(u.xvT,{my:"auto",color:"placeholder",textAlign:"center",children:(0,k.jsx)(v.Z,{children:r("Loading")})})}):(null===o||void 0===o?void 0:o.length)>0?(0,k.jsx)("div",{className:"flex flex-col gap-20 my-24",children:o.map((function(n){return(0,k.jsx)(g.Z,{pair:n},n.liquidityToken.address)}))}):(0,k.jsx)(j,{minHeight:"236px",children:(0,k.jsx)(u.xvT,{color:"placeholder",my:"auto",textAlign:"center",children:r("No liquidity found")})}):(0,k.jsx)(j,{minHeight:"236px",children:(0,k.jsx)(u.xvT,{color:"placeholder",my:"auto",textAlign:"center",children:r("Connect to a wallet to view your liquidity.")})})},b=(0,d.ZP)(a.rU).withConfig({displayName:"Pool__StyledLink",componentId:"sc-17lo5e7-0"})(["",""],{"--tw-text-opacity":"1",color:"rgb(0 160 255 / var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgb(39 175 255 / var(--tw-text-opacity))"}});function q(){var n=(0,m.Z)(),t=n.account,e=n.chainId,d=(0,s.$G)().t,g=(0,x.B3)(),v=(0,r.useMemo)((function(){var n;return null!==(n=c.Xe[e])&&void 0!==n?n:[]}),[e]),j=(0,r.useMemo)((function(){return g.map((function(n){return{liquidityToken:(0,x.z$)(n),tokens:n}}))}),[g]),q=(0,r.useMemo)((function(){return v.map((function(n){return{liquidityToken:(0,x.z$)(n,l.Gi.V2),tokens:n}}))}),[v]),Z=(0,r.useMemo)((function(){return[].concat((0,o.Z)(j),(0,o.Z)(q)).map((function(n){return n.liquidityToken}))}),[j,q]),T=(0,p.v2)(t,Z),L=(0,i.Z)(T,2),N=L[0],z=L[1],C=(0,r.useMemo)((function(){return j.filter((function(n){var t,e=n.liquidityToken;return null===(t=N[e.address])||void 0===t?void 0:t.greaterThan("0")}))}),[j,N]),I=(0,r.useMemo)((function(){return q.filter((function(n){var t,e=n.liquidityToken;return null===(t=N[e.address])||void 0===t?void 0:t.greaterThan("0")}))}),[q,N]),M=(0,h.z$)(C.map((function(n){return n.tokens}))),P=(0,h.z$)(I.map((function(n){return n.tokens})),l.Gi.V2),$=[].concat((0,o.Z)(M),(0,o.Z)(P)).map((function(n){return(0,i.Z)(n,2)[1]})).filter((function(n){return Boolean(n)})),A=z||(null===$||void 0===$?void 0:$.length)<C.length+I.length;return(0,k.jsxs)(y.Z,{children:[(0,k.jsx)(f.dC,{title:d("Become a Liquidity Provider"),subtitle:d("Earn high rewards from trading fees"),alignItems:"center",mb:"24px"}),(0,k.jsxs)(f.j1,{children:[(0,k.jsx)(w,{pt:"16px",account:!!t,isLoading:A,items:$}),t&&!A&&(0,k.jsx)("div",{className:"bg-dark-gray-400 text-14 text-center rounded-12 px-16 py-32 mb-16",children:(0,k.jsxs)("div",{className:"space-y-8",children:[(0,k.jsx)("p",{children:d("Don\u2019t see a pool you joined?")}),(0,k.jsx)("p",{className:"text-white text-opacity-50",children:d("If you staked your LP tokens in a farm, unstake them to see your liquidity position or try to find a pool manually")}),(0,k.jsx)("p",{children:(0,k.jsx)(b,{id:"import-pool-link",to:"/liquidity/find",children:d("Find pool manually")})})]})}),(0,k.jsx)(u.zxk,{scale:"lg",id:"join-pool-button",as:a.rU,to:"/liquidity/add",width:"100%",startIcon:(0,k.jsx)(u.dtP,{color:"white"}),children:d("Add Liquidity")})]})]})}}}]);