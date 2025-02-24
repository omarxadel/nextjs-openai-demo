// file: /components/TextAreaInput.js
export default function TextAreaInput({
  label,
  value,
  onChange,
  placeholder,
  rows = 15,
  cols = 50,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ marginBottom: "0.5rem" }}>{label}</label>
      <textarea
        style={{ fontFamily: "monospace", lineHeight: "1.2em" }}
        rows={rows}
        cols={cols}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
