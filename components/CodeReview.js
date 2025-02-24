import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CodeReview({ content }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Code Review</h2>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "1rem",
          backgroundColor: "#fff",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.5",
        }}
      >
        {/* ReactMarkdown renders the content properly */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
