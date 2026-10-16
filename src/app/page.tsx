import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Photo from "@/components/Photo";
import { purposes } from "@/content/site";
const stories = [
  {slot:"hero-sculpture", eyebrow:"The material"},
  {slot:"hero-1", eyebrow:"The hands"},
  {slot:"hero-drying", eyebrow:"The studio"},
];
export default function Home() {
  return (
    <>
      <HeroSlider slides={stories.map((s,k)=>({...s,photo:<Photo slot={s.slot} alt="" eager={k===0} sizes="100vw" />}))} />
      <div className="craft-strip wrap"><span>Made by hand</span><span>Tree-free fibres</span><span>Rooted in Kanha</span><span>Openly shared craft</span></div>
      <section className="section"><div className="wrap editorial-intro">
        <div data-reveal><span className="label">The Aditi way</span><h2 className="title-lg">A different beginning.<br />A distinctive sheet.</h2></div>
        <div data-reveal><p className="lead">Cotton rags. Fallen leaves. Fibres with another story to tell.</p><p>At Aditi Paperie, we turn overlooked materials into paper with a character all its own. Made slowly, sheet by sheet, at Kanha Shanti Vanam.</p><Link className="link" href="/paper">Meet the material ↗</Link></div>
      </div></section>
      <section className="section collection-section"><div className="wrap">
        <div className="section-heading" data-reveal><div><span className="label">Paper, with possibilities</span><h2 className="title-lg">For words, spaces<br />and meaningful occasions.</h2></div><Link className="link" href="/shop">View the collection ↗</Link></div>
        <div className="row-3 purpose-grid">{purposes.map((p,k)=><Link href={p.href} className="purpose" key={p.slot} data-reveal><Photo slot={p.slot} alt={p.text} sizes="(max-width: 900px) 100vw, 33vw" /><div className="purpose-heading"><h3>{p.title}</h3><span aria-hidden="true">↗</span></div><p>{p.text}</p><span className="collection-number">0{k+1}</span></Link>)}</div>
      </div></section>
      <section className="section tint"><div className="wrap split process-feature">
        <Photo slot="process-detail" alt="Hands lifting a wooden mould with a freshly formed sheet of cotton paper" sizes="(max-width: 900px) 100vw, 55vw" />
        <div className="split-text" data-reveal><span className="label">Fibre. Water. A pair of hands.</span><h2 className="title-lg">A little irregular.<br />Entirely its own.</h2><p>Look closer. The soft edge, the visible fibres, the slight change in texture. These are the traces of a sheet formed by hand.</p><p>We work with textile rags and plant fibres, exploring what each material can become.</p><Link href="/paper" className="link">How our paper takes shape ↗</Link></div>
      </div></section>
      <section className="banner makers-banner">
        <Photo slot="women-banner" alt="Three women artisans examining handmade sheets together" />
        <div className="wrap" data-reveal><span className="label">Craft is only the beginning</span><h2>When a craft grows,<br />people grow with it.</h2><p>Aditi Paperie began with a belief in shared opportunity: creative work, a livelihood, and a space for women and local artists to make their mark.</p><Link href="/about#women" className="btn light">The people behind the purpose</Link></div>
      </section>
      <section className="section"><div className="wrap split rev learning-feature">
        <Photo slot="workshops-hero" alt="An instructor sharing the papermaking process with adult learners" sizes="(max-width: 900px) 100vw, 55vw" />
        <div className="split-text" data-reveal><span className="label">Come curious. Leave inspired.</span><h2 className="title-lg">The best way to know<br />paper is to make it.</h2><p>Meet the material, discover the process, and explore making your first sheet. Our vision is a studio where the craft is shared openly.</p><Link href="/workshops" className="btn">Explore workshops</Link><Link href="/workshops#academy" className="text-link">Discover the academy vision ↗</Link></div>
      </div></section>
      <section className="section tint business-section"><div className="wrap business-inner">
        <div data-reveal><span className="label">For brands, spaces & celebrations</span><h2 className="title-lg">Your idea.<br />Our paper.</h2></div><div data-reveal><p className="lead">A thoughtful gift. A wedding invitation. An object that makes a room feel different.</p><p>Explore custom paper, stationery and collaborations with artists for hospitality and business gifting.</p><Link href="/contact?about=Custom%20business%20project" className="btn line">Tell us about your project</Link></div>
      </div></section>
      <section className="section quote"><div className="wrap" data-reveal><span className="label">Aditi, founder</span><blockquote>“The only vision I have is, whoever gets associated with me, should grow.”</blockquote><Link href="/about" className="link">Read our story ↗</Link></div></section>
    </>
  );
}
