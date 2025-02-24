// file: /components/CodeReview.js
export default function CodeReview({ content }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Code Review</h2>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "1rem",
          backgroundColor: "#fff",
        }}
      >
        {/* 
            The data structure depends on what your API returns. 
            For this example, we assume "content" is just a string of review text.
          */}
        <p>{content}</p>
      </div>
    </div>
  );
}
