export default function HomePage() {
  return (
    <main style={{ minHeight:"100vh", background:"#0E0C09", display:"flex", alignItems:"center", justifyContent:"center", color:"#F2EBDC", fontFamily:"sans-serif", textAlign:"center" }}>
      <div>
        <h1 style={{ fontSize:"2.5rem", marginBottom:"1rem", background:"linear-gradient(90deg,#B8892A,#F2D980,#B8892A)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Web4All.in</h1>
        <p style={{ color:"rgba(242,235,220,0.5)", marginBottom:"2rem" }}>Your website. Ready in a day.</p>
        <a href="/plans" style={{ padding:"12px 32px", borderRadius:"10px", background:"linear-gradient(90deg,#B8892A,#F2D980,#B8892A)", color:"#0E0C09", fontWeight:"700", textDecoration:"none" }}>View Plans →</a>
      </div>
    </main>
  );
}