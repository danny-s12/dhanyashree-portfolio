import React, { useState } from "react";
import { NavLink, Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Braces,
  Check, Code2, Database, ExternalLink, Github, GraduationCap, Linkedin,
  Mail, Menu, MessageCircle, Monitor, Sparkles, X
} from "lucide-react";
import { certifications, education, experience, profile, projects, skills } from "./data.js";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => setOpen(false), [location.pathname]);
  const nav = [
    ["/", "Home"], ["/about", "About"], ["/projects", "Projects"],
    ["/experience", "Experience"], ["/skills", "Skills"], ["/contact", "Contact"]
  ];
  return <header className="site-header">
    <div className="nav-shell">
      <Link className="brand" to="/" aria-label="Dhanyashree home">
        <span className="brand-mark">D<span>.</span></span>
        <span className="brand-name">dhanyashree<span>.dev</span></span>
      </Link>
      <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(v => !v)}>
        {open ? <X size={21}/> : <Menu size={21}/>}
      </button>
      <nav id="primary-navigation" className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
        {nav.map(([to, label]) => <NavLink key={to} to={to} end={to === "/"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{label}</NavLink>)}
        <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14}/></a>
      </nav>
    </div>
  </header>;
}

function Footer() {
  return <footer className="footer wrap">
    <div><span className="footer-brand">DHANYASHREE<span>.</span></span><p>Building with curiosity. Improving with every iteration.</p></div>
    <div className="footer-links">
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
      <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18}/></a>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed & built with React</span></div>
  </footer>;
}

function PageLayout({ eyebrow, title, intro, children }) {
  return <main className="page wrap">
    <div className="page-heading">
      <span className="eyebrow"><span className="eyebrow-dot"/> {eyebrow}</span>
      <h1>{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </div>
    {children}
  </main>;
}

function SectionTitle({ eyebrow, title, link, to = "/projects" }) {
  return <div className="section-title">
    <div><span className="eyebrow"><span className="eyebrow-dot"/> {eyebrow}</span><h2>{title}</h2></div>
    {link && <Link className="text-link" to={to}>{link}<ArrowUpRight size={16}/></Link>}
  </div>;
}

function ProjectVisual({ project }) {
  return <div className={`project-visual visual-${project.visual}`}>
    <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
    {project.visual === "study" && <div className="mock-window">
      <div className="mock-window-top"><i/><i/><i/><span>studyspace / resources</span></div>
      <div className="mock-content"><div className="mock-sidebar"><b/><b/><b/><b/></div><div className="mock-main"><span className="mock-kicker">YOUR LIBRARY</span><b className="mock-line long"/><b className="mock-line medium"/><div className="mock-files"><i/><i/><i/></div></div></div>
    </div>}
    {project.visual === "emotion" && <div className="emotion-orb"><Sparkles size={31}/><span>emotion-aware AI</span><div className="emotion-pill">calm · supportive</div></div>}
    {project.visual === "java" && <div className="code-window"><div className="code-top"><i/><i/><i/><span>Application.java</span></div><pre><span>public class</span> Application {"{"}{"\n"}  <em>public static void</em> main() {"{"}{"\n"}    System.out.println(</pre><b className="code-highlight">"Hello, full stack!"</b><pre>    );{"\n"}  {"}"}{"\n"}{"}"}</pre></div>}
    <span className="visual-index">{project.number}</span>
  </div>;
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <Link to={`/projects/${project.slug}`} className="project-image-link" aria-label={`View ${project.title}`}>
      <ProjectVisual project={project}/><span className="project-open"><ArrowUpRight size={19}/></span>
    </Link>
    <div className="project-card-body">
      <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
      <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
      <p>{project.summary}</p>
      <div className="tag-row">{project.technologies.slice(0, 4).map(t => <span className="tag" key={t}>{t}</span>)}</div>
      <Link className="project-details-link" to={`/projects/${project.slug}`}>View case study <ArrowRight size={15}/></Link>
    </div>
  </article>;
}

function Home() {
  const featured = projects.filter(p => !p.planned);
  return <>
    <main className="wrap home">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot"/> DEVELOPER PORTFOLIO · 2026</span>
          <h1>Turning ideas into <span className="gradient-text">useful software.</span></h1>
          <p className="hero-lede">I'm <strong>Dhanyashree Shyam Kulal</strong> — a Computer Science and Design Engineering graduate focused on Java, full-stack development, and thoughtful user experiences.</p>
          <p className="hero-secondary">I enjoy connecting clean interfaces with practical logic, reliable data, and the occasional AI-powered idea.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">Explore projects <ArrowUpRight size={17}/></Link>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowDown size={16}/></a>
          </div>
          <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={12}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={12}/></a><span className="social-divider"/><span className="location-dot"/> {profile.location}</div>
        </div>
        <div className="hero-art" aria-label="Decorative code illustration">
          <div className="art-glow"/>
          <div className="art-card art-card-back"><span className="art-label">BUILD / LEARN / REPEAT</span><div className="art-grid"/></div>
          <div className="art-card art-card-main">
            <div className="art-top"><span><i/><i/><i/></span><span>developer.tsx</span><Braces size={16}/></div>
            <div className="art-code">
              <p><span className="line-no">01</span><span className="code-purple">const</span> developer = {"{"}</p>
              <p><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">'Dhanyashree'</span>,</p>
              <p><span className="line-no">03</span>&nbsp;&nbsp;focus: [</p>
              <p><span className="line-no">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Java'</span>,</p>
              <p><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Full Stack'</span>,</p>
              <p><span className="line-no">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Applied AI'</span></p>
              <p><span className="line-no">07</span>&nbsp;&nbsp;],</p>
              <p><span className="line-no">08</span>&nbsp;&nbsp;mindset: <span className="code-blue">'always learning'</span></p>
              <p><span className="line-no">09</span>{"}"};</p>
            </div>
            <div className="art-status"><span className="status-pulse"/> Available for entry-level opportunities <span>↗</span></div>
          </div>
          <div className="floating-chip chip-java"><Code2 size={15}/> Java</div>
          <div className="floating-chip chip-db"><Database size={15}/> SQL</div>
          <div className="floating-chip chip-ai"><Sparkles size={15}/> AI / NLP</div>
        </div>
        <div className="hero-scroll"><span/> SCROLL TO EXPLORE <ArrowDown size={13}/></div>
      </section>

      <section className="intro-strip">
        <div><span className="strip-label">01 / WHAT I DO</span><h2>Curious by nature.<br/><span className="muted">Practical by design.</span></h2></div>
        <p>From database-backed applications to emotion-aware conversational systems, I like understanding how each piece fits together — from the interface a person uses to the logic that makes it work.</p>
        <Link className="round-link" to="/about" aria-label="Read about me"><ArrowUpRight size={22}/></Link>
      </section>

      <section className="section-block">
        <SectionTitle eyebrow="SELECTED WORK" title="Projects with a purpose." link="All projects" />
        <div className="project-grid">{featured.map(p => <ProjectCard key={p.slug} project={p}/>)}</div>
      </section>

      <section className="tech-band">
        <div><span className="eyebrow"><span className="eyebrow-dot"/> CURRENT TOOLKIT</span><h2>Building a strong foundation.</h2><p>Core programming, web fundamentals, and databases — with AI as a complementary strength.</p></div>
        <div className="tech-list">{["Java","SQL / MySQL","HTML & CSS","React.js","JavaScript","Python / NLP"].map((t,i)=><span key={t}><b>0{i+1}</b>{t}</span>)}</div>
      </section>

      <section className="cta-panel">
        <div className="cta-icon"><MessageCircle size={22}/></div><div><span className="eyebrow">HAVE AN OPPORTUNITY?</span><h2>Let's build something meaningful.</h2><p>I'm interested in entry-level software development opportunities and projects that help me keep learning.</p></div><Link className="button button-primary" to="/contact">Get in touch <ArrowUpRight size={17}/></Link>
      </section>
    </main>
    <Footer/>
  </>;
}

function About() {
  return <><PageLayout eyebrow="A LITTLE ABOUT ME" title={<>The person behind<br/><span className="gradient-text">the code.</span></>} intro={profile.summary}>
    <div className="about-layout">
      <section className="about-story panel">
        <span className="panel-number">01 — MY APPROACH</span><h2>Understand the problem.<br/>Build with intention.</h2>
        <p>My engineering background combines computer science with design thinking. That means I care about both how an application works and how clearly people can use it.</p>
        <p>I'm developing my skills across Java, frontend technologies, SQL, and backend development. My academic work in emotion-aware NLP has also given me experience evaluating a machine-learning model and connecting it to a conversational interface.</p>
        <p>This portfolio is a living record of what I can build today, what I am learning, and how I improve through practical projects.</p>
      </section>
      <aside className="about-aside">
        <div className="panel fact-panel"><span className="panel-number">02 — QUICK FACTS</span><div className="fact"><GraduationCap/><div><span>Education</span><strong>B.E. Computer Science & Design Engineering</strong></div></div><div className="fact"><Code2/><div><span>Primary focus</span><strong>Java & Full Stack Development</strong></div></div><div className="fact"><Sparkles/><div><span>Extra dimension</span><strong>Applied AI / NLP</strong></div></div><div className="fact"><Monitor/><div><span>Design mindset</span><strong>Usable, responsive interfaces</strong></div></div></div>
        <div className="quote-panel"><span>“</span><p>Learn the fundamentals. Build real things. Explain the decisions.</p><small>MY DEVELOPMENT PRINCIPLE</small></div>
      </aside>
    </div>
    <section className="section-block"><SectionTitle eyebrow="EDUCATION" title="Where I learned the fundamentals."/><div className="timeline">{education.map((e,i)=><article className="timeline-item" key={e.title}><div className="timeline-marker">{String(i+1).padStart(2,"0")}</div><div className="timeline-content"><div className="timeline-top"><span>{e.period}</span><span>{e.location}</span></div><h3>{e.title}</h3><p>{e.institution}</p><strong>{e.detail}</strong></div></article>)}</div></section>
  </PageLayout><Footer/></>;
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Java / Full Stack", "Web Development", "AI / Machine Learning"];
  const filtered = projects.filter(p => filter === "All" || p.category === filter);
  return <><PageLayout eyebrow="SELECTED WORK" title={<>Projects that turn<br/><span className="gradient-text">ideas into practice.</span></>} intro="A mix of academic work and practical development. Each case study explains the problem, the approach, and what was implemented — with planned work clearly labelled.">
    <div className="filter-row" aria-label="Filter projects">{categories.map(c=><button key={c} className={filter===c ? "filter active" : "filter"} onClick={()=>setFilter(c)}>{c}<span>{c==="All" ? projects.length : projects.filter(p=>p.category===c).length}</span></button>)}</div>
    <div className="project-grid projects-page-grid">{filtered.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>
    <div className="note-box"><Sparkles size={18}/><p><strong>Building in public:</strong> The Java full-stack project is a planned next step, not a completed project. Its page is a checklist for the implementation that will be documented when it's real.</p></div>
  </PageLayout><Footer/></>;
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <PageLayout eyebrow="PROJECT NOT FOUND" title="That project isn't here yet."><Link className="button button-primary" to="/projects"><ArrowLeft size={16}/> Back to projects</Link></PageLayout>;
  return <><main className="wrap page detail-page">
    <Link className="back-link" to="/projects"><ArrowLeft size={16}/> All projects</Link>
    <div className="detail-heading"><span className="eyebrow"><span className="eyebrow-dot"/>{project.category}</span><h1>{project.title}</h1><p>{project.description}</p><div className="tag-row">{project.technologies.map(t=><span className="tag" key={t}>{t}</span>)}</div></div>
    <ProjectVisual project={project}/>
    {project.planned && <div className="note-box"><Sparkles size={18}/><p><strong>Planned work:</strong> This project has not been implemented yet. Keep this status visible until a working version, repository, and test evidence exist.</p></div>}
    <div className="detail-columns"><section className="panel"><span className="panel-number">WHAT IT COVERS</span><h2>Key contributions</h2><ul className="check-list">{project.highlights.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul></section>
    <section className="panel"><span className="panel-number">PROJECT SNAPSHOT</span><h2>At a glance</h2>{project.metric && <div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>}<div className="snapshot-row"><span>Status</span><strong>{project.status}</strong></div><div className="snapshot-row"><span>Project type</span><strong>{project.category}</strong></div><div className="snapshot-row"><span>Code / demo</span><strong>Link to be added</strong></div></section></div>
    <section className="next-project"><div><span className="eyebrow">KEEP EXPLORING</span><h2>More work, more learning.</h2></div><Link className="button button-secondary" to="/projects">Browse all projects <ArrowRight size={16}/></Link></section>
  </main><Footer/></>;
}

function Experience() {
  return <><PageLayout eyebrow="EXPERIENCE & CREDENTIALS" title={<>Learning through<br/><span className="gradient-text">hands-on work.</span></>} intro="Training, internships, education, and selected credentials that support my software development journey.">
    <section className="section-block first-section"><SectionTitle eyebrow="EXPERIENCE" title="Where I've contributed."/></section>
    <div className="experience-list">{experience.map((e,i)=><article className="experience-card" key={e.company}><div className="experience-index">0{i+1}</div><div className="experience-main"><div className="experience-top"><span className="eyebrow">{e.duration}</span><span className="experience-type">Internship / training entry</span></div><h2>{e.role}</h2><h3>{e.company}</h3><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></div><ArrowUpRight className="experience-arrow" size={20}/></article>)}</div>
    <section className="section-block"><SectionTitle eyebrow="EDUCATION" title="Academic foundation."/><div className="education-grid">{education.map(e=><article className="education-card" key={e.title}><GraduationCap size={22}/><span>{e.period}</span><h3>{e.title}</h3><p>{e.institution}</p><strong>{e.detail}</strong></article>)}</div></section>
    <section className="section-block"><SectionTitle eyebrow="CERTIFICATIONS & ACHIEVEMENTS" title="Continuous learning."/><div className="cert-grid">{certifications.map((c,i)=><div className="cert-item" key={c}><span>0{i+1}</span><Check size={17}/><strong>{c}</strong></div>)}</div><div className="note-box"><GraduationCap size={18}/><p>Research achievement: published a paper in IJARSCT on advancements in Computer Vision and Graphics Systems. Add the paper title and publication link when ready.</p></div></section>
  </PageLayout><Footer/></>;
}

function Skills() {
  return <><PageLayout eyebrow="TOOLS & TECHNOLOGIES" title={<>A toolkit built<br/><span className="gradient-text">one skill at a time.</span></>} intro="A practical snapshot of technologies used in projects and training. Proficiency labels are intentionally omitted until each skill can be calibrated against real examples.">
    <div className="skills-grid">{skills.map((group,i)=><article className="skill-card" key={group.title}><div className="skill-card-top"><span>0{i+1}</span>{i===0?<Code2/>:i===3?<Database/>:<Braces/>}</div><h2>{group.title}</h2><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
    <div className="skills-note panel"><Sparkles size={20}/><div><h3>How I think about skills</h3><p>A technology belongs on this page when I can explain the fundamentals, describe where I used it, and discuss a problem I solved with it. Project pages provide the evidence behind this list.</p></div></div>
  </PageLayout><Footer/></>;
}

function Contact() {
  return <><PageLayout eyebrow="CONTACT" title={<>Have something in mind?<br/><span className="gradient-text">Let's connect.</span></>} intro="I'm interested in entry-level software development opportunities, collaborative projects, and conversations about building useful products.">
    <div className="contact-layout">
      <section className="contact-copy panel"><span className="panel-number">GET IN TOUCH</span><h2>Open to the right opportunity.</h2><p>Email is the best way to reach me. You can also explore my code and professional background through the links here.</p><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={19}/><span>{profile.email}</span><ArrowUpRight size={16}/></a><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/><span><b>GitHub</b><small>Projects & code</small></span><ExternalLink size={15}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/><span><b>LinkedIn</b><small>Professional profile</small></span><ExternalLink size={15}/></a></div></section>
      <aside className="contact-side"><div className="contact-orb"><MessageCircle size={31}/></div><span className="eyebrow">A GOOD CONVERSATION STARTS HERE</span><h2>Tell me what you're building.</h2><p>Whether it's an entry-level role or a project worth exploring, I'd be glad to hear from you.</p><a className="button button-primary" href={`mailto:${profile.email}?subject=Opportunity%20for%20Dhanyashree`}>Send an email <ArrowUpRight size={17}/></a></aside>
    </div>
  </PageLayout><Footer/></>;
}

function App() {
  const location = useLocation();
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [location.pathname]);
  return <div className="app-shell"><div className="ambient ambient-one"/><div className="ambient ambient-two"/><Header/><Routes>
    <Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/experience" element={<Experience/>}/><Route path="/skills" element={<Skills/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<PageLayout eyebrow="NOT FOUND" title="This page is still off the map."><Link className="button button-primary" to="/">Back home <ArrowRight size={16}/></Link></PageLayout>}/>
  </Routes></div>;
}

export default App;
