import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import "./RichTextFile.css";
function RichTextFile() {
  const editor = useRef(null);
  const editorA = useRef(null);
  const editorB = useRef(null);
  const editorC = useRef(null);
  const editorD = useRef(null);
  const [content, setContent] = useState("");
  const [contentA, setContentA] = useState("");
  const [contentB, setContentB] = useState("");
  const [contentC, setContentC] = useState("");
  const [contentD, setContentD] = useState("");
  return (
    <>
   
      <div className="word">
        <div className="word-main-exam">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
        <div className="word-exam">
          <div className="word-answer-title">
            <div  className="flex">
              <div className="word-answer">
                A
                <JoditEditor
                  ref={editorA}
                  value={contentA}
                  onChange={(newContentA) => setContentA(newContentA)}
                  className="answer"
                />
              </div>
              <div className="word-answer">
                B
                <JoditEditor
                  ref={editorB}
                  value={contentB}
                  onChange={(newContentB) => setContentB(newContentB)}
                />
              </div>
            </div>
            <div className="flex">
              <div className="word-answer">
                C
                <JoditEditor
                  ref={editorC}
                  value={contentC}
                  onChange={(newContentC) => setContentC(newContentC)}
                />
              </div>
              <div className="word-answer">
                D
                <JoditEditor
                  ref={editorD}
                  value={contentD}
                  onChange={(newContent) => setContentD(newContent)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>{HTMLReactParser(content)}</h1>
    </>
  );
}
export default RichTextFile;
