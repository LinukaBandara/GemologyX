"use client";
import { useEffect, useState } from "react";

export function SiteLoader(){
 const [show,setShow]=useState(true);
 useEffect(()=>{const t=window.setTimeout(()=>setShow(false),900);return()=>window.clearTimeout(t)},[]);
 if(!show)return null;
 return <div className="site-loader" aria-hidden="true"><div className="loader-gem"><i/><b/><em/></div><span>GEMOLOGYX</span></div>;
}