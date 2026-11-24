import React from 'react';
export function FileCard({children,lang}:{children:React.ReactNode;lang?:string}){return <main className="page" lang={lang}>{children}</main>}
export function Header({title}:{title:string}){return <header><h1>{title}</h1></header>}
export function Group({label,heading,children}:{label:string;heading:string;children:React.ReactNode}){return <section className="group"><div className="group-head"><p>{label}</p><h2>{heading}</h2></div>{children}</section>}
export function Closing({children}:{children:React.ReactNode}){return <footer className="closing">{children}</footer>}
export function TextLink({children,href}:{children:React.ReactNode;href:string}){return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>}
