import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CERTS = {
  tech: [
    {
      title: "Ardent Industrial Internship",
      org: "Ardent",
      date: "2024",
      img: "dist/certificates/Ardent Industrial Internship.pdf",
      link: "dist/certificates/Ardent Industrial Internship.pdf",
    },
    {
      title: "Oracle Certification",
      org: "Oracle",
      date: "2025",
      img: "dist/certificates/eCertificate Oracle.pdf",
      link: "dist/certificates/eCertificate Oracle.pdf",
    },
    {
      title: "TATA Forage Program",
      org: "TATA",
      date: "2025",
      img: "dist/certificates/TATA FORAGE.pdf",
      link: "dist/certificates/TATA FORAGE.pdf",
    },
  ],
  other: [],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div
        className="card"
        style={{ background: "#111", borderRadius: 12, padding: 24 }}
      >
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>
          Certificates 🏅
        </h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                background: "#007bff",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              Certificates
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence>
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0,123,255,0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />

                <strong>{c.title}</strong>
                <div style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    background: "#007bff",
                    color: "#fff",
                    padding: "6px 14px",
                    borderRadius: 6,
                    textDecoration: "none",
                  }}
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
