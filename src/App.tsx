import React, { useState, useRef, useEffect } from 'react';
import { FileCard, Header, Group, Closing, TextLink } from './components';
import { copy } from './content';
import { Skills, Languages } from './Skills';
import rentivo from './photos/rentivo.png';
import rentivoDark from './photos/rentivo-dark.png';
import ayano from './photos/ayano.png';
import taj from './photos/taj-rayan.png';
import restaurant from './photos/restaurant-rayan.png';
import portrait from './photos/portrait.jpg';
import cvEN from './cv/Ayoub_Hilali_CV_EN.pdf';
import cvFR from './cv/Ayoub_Hilali_CV_FR.pdf';
import suitPortrait from './photos/portrait-suit.jpg';
import heroPortrait from './photos/hero-suit.png';
import orangeLogo from './photos/orange.png';
import carlyLogo from './photos/carly.png';
const images=[rentivo,ayano,taj,restaurant];
const links=['','https://ayanocar.com/','https://tajrayancar.com/','https://restaurant-rayan.vercel.app/'];
const tech=[['React','Next.js','TypeScript','Tailwind CSS','Redux'],['Laravel','PHP 8','Node.js','Express','REST APIs'],['MySQL','PostgreSQL','Docker','Git','CI/CD','Plesk']];
export function App(){
 const [lang,setLang]=useState<'en'|'fr'>('en'); const [active,setActive]=useState<number|null>(null); const [dark,setDark]=useState(false); const dialog=useRef<HTMLDialogElement>(null); const c=copy[lang];
 useEffect(()=>{document.documentElement.lang=lang;},[lang]);
 useEffect(()=>{if(!('IntersectionObserver' in window))return; const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('v2-visible');observer.unobserve(entry.target)}}),{threshold:0.08});document.querySelectorAll('.pf-section,.pf-project').forEach(e=>{observer.observe(e)});return()=>observer.disconnect();},[]);
 function openProject(i:number){setActive(i);setDark(false);dialog.current?.showModal();}
 function closeProject(){dialog.current?.close();setActive(null);}
 return <FileCard lang={lang}>
 <div className="pf-site v4-site" id="top" onClick={e=>{const a=(e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement|null;if(a){const el=document.querySelector(a.getAttribute('href')!);if(el){e.preventDefault();el.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}}}}>
 <nav className="pf-nav" aria-label={lang==='en'?'Main navigation':'Navigation principale'}><a className="pf-wordmark" href="#top">ayoub<span>.</span></a><div className="pf-navlinks">{(lang==='en'?['Work','Skills','About','Languages']:['Projets','Compétences','À propos','Langues']).map((n,i)=><a key={n} href={['#work','#skills','#about','#languages'][i]}>{n}</a>)}</div><div className="pf-languages" aria-label={lang==='en'?'Language':'Langue'}>{(['en','fr'] as const).map(l=><button type="button" key={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div></nav>
 <section className="pf-hero">
 <div className="pf-herohead"><span className="pf-eyebrow">{c.role}</span><span className="pf-location">{c.location}</span></div>
 <div className="v4-heroart"><div className="v4-title"><Header title={lang==='en'?'Built with purpose.':'Du code qui compte.'}/></div><div className="v4-portrait"><div aria-hidden="true"/><img src={heroPortrait} alt="Ayoub Hilali"/></div>
 <div className="v4-heroleft"><span className="pf-eyebrow">AYOUB HILALI</span><p>{lang==='en'?'From the first interaction to the last API call. Thoughtful software, made for real work.':'De la première interaction au dernier appel API. Des logiciels soignés, pensés pour le quotidien.'}</p><a className="pf-primary" href="#work">{c.explore} <span>↗</span></a></div>
 <div className="v4-heroright"><h2>{lang==='en'?<>Clear design.<br/>Solid engineering.</>:<>Un design clair.<br/>Du code solide.</>}</h2><a className="v3-cvlink" href={lang==='en'?cvEN:cvFR} download={lang==='en'?'Ayoub_Hilali_CV_EN.pdf':'Ayoub_Hilali_CV_FR.pdf'} target="_blank" rel="noopener noreferrer">{lang==='en'?'Download CV':'Télécharger le CV'} ↓</a><a className="v4-herophone" href="tel:+212620951882">0620 951 882</a></div></div></section>
 <section className="v3-companies" aria-label={lang==='en'?'Companies and collaborations':'Entreprises et collaborations'}><p>{lang==='en'?'Software contributions for':'Contributions logicielles pour'}</p><div><article><img src={orangeLogo} alt="Orange"/><span><strong>Orange Maroc</strong><small>{lang==='en'?"via Olf'active, Orange Maroc partner":"via Olf'active, partenaire Orange Maroc"}</small></span></article><article><img src={carlyLogo} alt="Carly"/><span><strong>Carly</strong><small>{lang==='en'?'Website & platform':'Site web et plateforme'}</small></span></article></div></section>
 <section id="work" className="pf-section">
 <Group label={lang==='en'?'01 / Selected work':'01 / Projets sélectionnés'} heading={c.workTitle}>
 <p className="pf-sectionintro">{c.workIntro}</p>
 <div className="pf-projects">{c.projects.map((p,i)=><article className={'pf-project '+(i===0?'pf-featured':'')} key={p.name}>
 <button className={'pf-projectimage pf-image'+i} type="button" onClick={()=>openProject(i)} aria-label={`${c.details}: ${p.name}`}><img src={images[i]} alt={`${p.name}: ${c.screenshot}`} loading="lazy"/><span className="pf-imagearrow">↗</span>{i===0&&<span className="pf-flag">{c.flagship}</span>}</button>
 <div className="pf-projectbody"><div className="pf-projectmeta"><span>0{i+1} / {p.tag}</span>{i>0&&<span className="pf-live"><i/>{c.live}</span>}</div><div className="pf-projecttitle"><h3>{p.name}</h3><span>{p.type}</span></div><p>{p.summary}</p>{i===0&&<p className="v3-projectnote">{c.rentivoNote}</p>}<div className="pf-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><button type="button" onClick={()=>openProject(i)} className="pf-details">{c.details} <span>↗</span></button></div>
 </article>)}</div>
 </Group>
 </section>
 <section id="skills" className="pf-section v2-skillssection"><Group label={lang==='en'?'02 / Skills & technologies':'02 / Compétences et technologies'} heading={lang==='en'?'The stack behind the ideas.':'Les outils derrière les idées.'}><p className="pf-sectionintro">{lang==='en'?'Explore my toolkit. Select an area to see the technologies I work with.':'Explorez mes compétences. Choisissez un domaine pour découvrir mes outils.'}</p><Skills lang={lang}/></Group></section>
 <section id="about" className="pf-section pf-about"><Group label={c.aboutLabel} heading={c.aboutTitle}><div className="pf-aboutgrid"><div className="pf-aboutportrait"><img src={suitPortrait} alt="Ayoub Hilali"/><span>AYOUB HILALI<br/>{c.location.toUpperCase()}</span></div><div><p className="pf-aboutlead">{c.about}</p><p>{c.aboutMore}</p></div></div></Group></section>
 <section id="languages" className="pf-section v2-languagessection"><Group label={lang==='en'?'04 / Languages':'04 / Langues'} heading={lang==='en'?'Three languages. More connections.':'Trois langues. Plus de liens.'}><Languages lang={lang}/></Group></section>
 <section id="experience" className="pf-section"><Group label={c.journey} heading={c.journeyTitle}><div className="pf-timeline">{c.experience.map((e,i)=><details key={e.company} open={i===0}><summary><span className="pf-date">{e.date}</span><span className="pf-position"><strong>{e.company}</strong><span>{e.role}</span></span><span className="pf-plus">+</span></summary><div className="pf-expbody"><span>{e.context}</span><p>{e.body}</p></div></details>)}</div><div className="pf-education"><h3>{c.education}</h3><div>{[c.study,c.bachelor,c.deust].map((s,i)=><div key={s}><span>{['2024 - 2026','2020 - 2022','2017 - 2020'][i]}</span><strong>{s}</strong><small>{i===0?'ENSET Mohammedia':lang==='en'?'Faculty of Sciences and Technology, Settat':'Faculté des Sciences et Techniques, Settat'}</small></div>)}</div></div></Group></section>
 <section id="contact" className="pf-section pf-contact"><div className="v4-contactperson"><img src={portrait} alt=""/><span>Ayoub Hilali<small>{c.role}</small></span></div><span className="pf-eyebrow">{c.contactLabel}</span><h2>{c.contactTitle}<span>↗</span></h2><p>{c.contactText}</p><a className="pf-email" href="mailto:hiayoub26@gmail.com">hiayoub26@gmail.com ↗</a><div className="v3-contactextras"><a href="tel:+212620951882">0620 951 882 ↗</a><a href={lang==='en'?cvEN:cvFR} download={lang==='en'?'Ayoub_Hilali_CV_EN.pdf':'Ayoub_Hilali_CV_FR.pdf'} target="_blank" rel="noopener noreferrer">{lang==='en'?'Download CV (English)':'Télécharger le CV (français)'} ↓</a></div><div className="pf-social"><TextLink href="https://github.com/AyoubdDev">GitHub ↗</TextLink><TextLink href="https://www.linkedin.com/in/ayoub-hilali-0b8b94209">LinkedIn ↗</TextLink><a href="#top">{c.back} ↑</a></div></section>
 <Closing>© 2026 Ayoub Hilali · {c.location}</Closing>
 <dialog ref={dialog} className="pf-dialog" onCancel={()=>setActive(null)}><button className="pf-close" type="button" onClick={closeProject} aria-label={c.close}>×</button>{active!==null&&<><span className="pf-eyebrow">0{active+1} / {c.projects[active].type}</span><h2>{c.projects[active].name}</h2>{active===0&&<div className="pf-viewtoggle"><button type="button" aria-pressed={!dark} onClick={()=>setDark(false)}>{c.light}</button><button type="button" aria-pressed={dark} onClick={()=>setDark(true)}>{c.dark}</button></div>}<img src={active===0&&dark?rentivoDark:images[active]} alt={`${c.projects[active].name}: ${c.screenshot}`}/><p className="pf-caveat">{active===0?c.rentivoNote:c.siteNote}</p><h3>{c.scope}</h3><p>{c.projects[active].summary}</p><ul>{c.projects[active].features.map(f=><li key={f}>{f}</li>)}</ul>{active>0&&<TextLink href={links[active]}>{c.visit} ↗</TextLink>}</>}</dialog>
 </div></FileCard>;
}
