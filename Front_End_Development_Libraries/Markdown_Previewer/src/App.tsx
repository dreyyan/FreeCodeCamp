import { marked } from "marked"; // Markdown renderer
import { useState, useEffect } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
  (async () => {
    const parsed = await marked.parse(text);
    setHtml(parsed);
  })();
}, [text]);
  
  return (
    <div className="flex justify-center items-center w-[100%] min-h-screen h-auto bg-[var(--primary)] gap-[4%]">
      {/* Editor */}
      <div className="border bg-[var(--secondary)] min-h-[400px] w-[36%] border-3 rounded-xl flex flex-col">
      {/* Header */}
      <div className="flex justify-center items-center h-[20%] border-b-3 border-[var(--tertiary)]">
        <h2 className="vt323-regular text-2xl font-bold text-white">Markdown Editor</h2>
      </div>

      {/* Text Area */}
      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-[var(--secondary)] w-full flex-1 outline-none p-[4%] text-[var(--text)] rounded-xl resize-none"
      />
    </div>
      {/* Preview */}
      <div className="border bg-[var(--secondary)] min-h-[400px] flex flex-col overflow-auto w-[36%] border-3 rounded-xl my-[4%]">
        <div className="flex justify-center items-center h-[14%] border-b-3 border-[var(--tertiary)]">
          <h2 className="vt323-regular text-2xl font-bold text-white">Markdown Preview</h2>
        </div>

        <div className="flex justify-center items-center h-[86%]">
        <div
        id="preview"
        className="w-full flex-1 h-[100%] text-[color:var(--text)] p-[4%]"
        dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        </div>
      </div>
    </div>
  );
};

export default App;