const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--bg-subtle)",
        // borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "6px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 900, fontSize: "13px" }}>
              SB
            </span>
          </div>
        </div>
        <p style={{ fontSize: "0.75rem", color: "var(--fg-muted)", margin: 0 }}>
          {new Date().getFullYear()} · Built with React + Parcel + Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
