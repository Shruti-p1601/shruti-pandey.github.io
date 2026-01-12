import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Research.css"

const researchPapers = [
  {
    title:
      "A Hybrid Innovative Deep Learning Algorithm for the Classification of Brain Tumor",
    conference:
      "7th International Symposium on Devices, Circuits and Systems (ISDCS 2025)",
    description:
      "Hybrid deep learning-based approach for accurate brain tumor classification.",
    certificate: "/Author certificate.pdf",
  },
  {
    title:
      "Effectiveness, Safety, and the Developing Use of AI and Deep Learning in Patient Stratification and Adverse Event Prediction for Checkpoint Inhibitors in Cancer Immunotherapy",
    conference:
      "ICESISSF-2025, Sanaka Educational Trust’s Group of Institutions, Durgapur",
    description:
      "AI and deep learning techniques for predicting patient response and adverse events.",
      gallery: ["/sanaka.jpg", "/sanaka3.jpg"],
    certificate: "/CERTIFICATE OF PRESENTATION.pdf",
  },
  {
    title: "Dragon Fruit Quality Grading Using Deep Learning Approaches",
    conference: "Deep Learning Research Project",
    description:
      "Automated quality grading of dragon fruit using deep learning-based image classification.",
    gallery: ["/jadavpur.jpeg", "/jadavpur2.jpeg", "/jadavpur3.jpg"],
    certificate: "/jadavpur442.jpeg",
  },
]

export default function Research() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="research-section">
      <motion.h2
        className="research-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Research Papers
      </motion.h2>

      <div className="research-grid">
        {researchPapers.map((paper, index) => (
          <motion.div
            className="research-card"
            key={index}
            whileHover={{ y: -10 }}
          >
            <h3>{paper.title}</h3>
            <p className="conference">{paper.conference}</p>
            <p className="description">{paper.description}</p>

            {/* Gallery */}
            {paper.gallery && (
              <div className="research-gallery">
                <h4>Gallery</h4>
                <div className="gallery-images">
                  {paper.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="presentation"
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Certificate */}
            {paper.certificate && (
              <div className="research-certificate">
                <a href={paper.certificate} target="_blank" rel="noreferrer">
                  📜 View Certificate
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              className="modal-image"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
