// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ThumbsUp, ThumbsDown } from "lucide-react";
// import "./blog.css";

// export default function Blog() {
//   const defaultPosts = [
//     {
//       id: 1,
//       title: "The Future of Web Development: Trends I’m Excited About",
//       text: "The future of web development excites me because of the rapid evolution of technologies like AI-driven development tools, Progressive Web Apps, and Jamstack architecture. I’m particularly fascinated by enhanced user experiences, micro-interactions, and accessibility-focused design.",
//     },
//     {
//       id: 2,
//       title: "Why Learning Full-Stack Development Changed My Perspective on Coding",
//       text: "Learning full-stack development transformed my view of coding. Understanding both front-end and back-end processes showed me how components work together to create seamless applications.",
//     },
//     {
//       id: 3,
//       title: "Beyond Code: How Creativity Shapes a Web Developer",
//       text: "Beyond writing code, creativity is the heart of web development. Designing intuitive interfaces, smooth animations, and engaging user experiences requires imagination.",
//     },
//   ];

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
//     const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");

//     const withVotes = defaultPosts.map((p) => ({
//       ...p,
//       agree: savedVotes[p.id]?.agree || 0,
//       disagree: savedVotes[p.id]?.disagree || 0,
//       userVote: votedByUser[p.id] || null,
//     }));

//     setPosts(withVotes);
//   }, []);

//   // ✅ FIXED vote logic (switchable)
//   function vote(id, type) {
//     const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || {});

//     const next = posts.map((p) => {
//       if (p.id !== id) return p;

//       let agree = p.agree;
//       let disagree = p.disagree;

//       // remove previous vote
//       if (p.userVote === "agree") agree--;
//       if (p.userVote === "disagree") disagree--;

//       // add new vote
//       if (type === "agree") agree++;
//       if (type === "disagree") disagree++;

//       return { ...p, agree, disagree, userVote: type };
//     });

//     setPosts(next);

//     const votes = Object.fromEntries(
//       next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
//     );

//     localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
//     localStorage.setItem(
//       "kd_blog_voted",
//       JSON.stringify({ ...votedByUser, [id]: type })
//     );
//   }

//   return (
//     <motion.section
//       className="blog-section"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.h2
//         className="blog-title"
//         initial={{ y: -15, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         📝 My Blog
//       </motion.h2>

//       <p className="blog-sub">
//         Personal thoughts, experiences, and reflections — feel free to react!
//       </p>

//       <div className="blog-grid">
//         {posts.map((p, idx) => (
//           <motion.div
//             key={p.id}
//             className="blog-post"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: idx * 0.15 }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <h3 className="post-title">{p.title}</h3>
//             <p className="post-text">{p.text}</p>

//             <div className="vote-container">
//               <motion.button
//                 onClick={() => vote(p.id, "agree")}
//                 whileTap={{ scale: 0.85 }}
//                 whileHover={{ scale: 1.15 }}
//                 className={`vote-btn-circle agree ${
//                   p.userVote === "agree" ? "active" : ""
//                 }`}
//               >
//                 <ThumbsUp size={20} />
//                 <span className="vote-count">{p.agree}</span>
//               </motion.button>

//               <motion.button
//                 onClick={() => vote(p.id, "disagree")}
//                 whileTap={{ scale: 0.85 }}
//                 whileHover={{ scale: 1.15 }}
//                 className={`vote-btn-circle disagree ${
//                   p.userVote === "disagree" ? "active" : ""
//                 }`}
//               >
//                 <ThumbsDown size={20} />
//                 <span className="vote-count">{p.disagree}</span>
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends I’m Excited About",
      text: "The future of web development excites me because it is becoming more intelligent, efficient, and user-focused. AI-powered development tools are simplifying complex tasks, while Progressive Web Apps are bridging the gap between web and mobile experiences. Jamstack architecture improves performance and security, and modern frameworks encourage accessibility, responsiveness, and smooth micro-interactions that enhance overall user engagement.",
    },
    {
      id: 2,
      title: "Why Learning Full-Stack Development Changed My Perspective on Coding",
      text: "Learning full-stack development completely changed how I approach coding problems. Instead of focusing only on the user interface or backend logic, I now understand how data flows across the entire system. This holistic view improved my debugging skills, design decisions, and performance optimization. It also helped me build scalable applications while appreciating collaboration between frontend and backend components.",
    },
    {
      id: 3,
      title: "Beyond Code: How Creativity Shapes a Web Developer",
      text: "Web development goes far beyond writing functional code; creativity plays a crucial role in shaping meaningful digital experiences. Thoughtful design choices, animations, and layouts can guide users naturally through an application. Creativity allows developers to balance aesthetics with usability, transforming technical solutions into engaging products that communicate ideas clearly and leave a lasting impression on users.",
    },
  ];

  const [posts, setPosts] = useState([]);

  // ✅ SAFE localStorage read
  useEffect(() => {
    const savedVotes = JSON.parse(
      localStorage.getItem("kd_blog_votes") || "{}"
    );
    const votedByUser = JSON.parse(
      localStorage.getItem("kd_blog_voted") || "{}"
    );

    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));

    setPosts(withVotes);
  }, []);

  // ✅ PRODUCTION-SAFE vote logic (toggle + no double count)
  function vote(id, type) {
    const votedByUser = JSON.parse(
      localStorage.getItem("kd_blog_voted") || "{}"
    );

    const next = posts.map((p) => {
      if (p.id !== id) return p;

      let agree = p.agree;
      let disagree = p.disagree;

      // toggle off if same button clicked
      if (p.userVote === type) {
        if (type === "agree") agree--;
        if (type === "disagree") disagree--;
        return { ...p, agree, disagree, userVote: null };
      }

      // remove previous vote
      if (p.userVote === "agree") agree--;
      if (p.userVote === "disagree") disagree--;

      // add new vote
      if (type === "agree") agree++;
      if (type === "disagree") disagree++;

      return { ...p, agree, disagree, userVote: type };
    });

    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );

    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "kd_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ pointerEvents: "auto" }} // 🔥 critical
    >
      <h2 className="blog-title">📝 My Blog</h2>
      <p className="blog-sub">
        Personal thoughts, experiences, and reflections — feel free to react!
      </p>

      <div className="blog-grid">
        {posts.map((p) => (
          <motion.div
            key={p.id}
            className="blog-post"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="post-title">{p.title}</h3>
            <p className="post-text">{p.text}</p>

            <div className="vote-container">
              <motion.button
                style={{ pointerEvents: "auto" }}
                onClick={() => vote(p.id, "agree")}
                className={`vote-btn-circle agree ${
                  p.userVote === "agree" ? "agree-active" : ""
                }`}
              >
                <ThumbsUp size={20} />
                <span>{p.agree}</span>
              </motion.button>

              <motion.button
                style={{ pointerEvents: "auto" }}
                onClick={() => vote(p.id, "disagree")}
                className={`vote-btn-circle disagree ${
                  p.userVote === "disagree" ? "disagree-active" : ""
                }`}
              >
                <ThumbsDown size={20} />
                <span>{p.disagree}</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
