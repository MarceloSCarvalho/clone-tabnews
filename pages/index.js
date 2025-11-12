// pages/index.js
function Home() {
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  };

  const textStyle = {
    fontSize: "1.5rem",
    maxWidth: "800px",
    lineHeight: "1.5",
  };

  return (
    <div style={pageStyle}>
      <h1 style={textStyle}>
        Nossas ações de hoje moldam o futuro — mas, se pudéssemos voltar ao passado,
        será que teríamos coragem de mudar o que nos trouxe até aqui? 😎
      </h1>
    </div>
  );
}

export default Home;
