import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import "./RichTextFile.css";
import { TextField } from "@mui/material";
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
        <TextField label="A" size="small" color="" focused sx={{ m: 2   }} />
        <TextField label="B" size="small" color="" focused sx={{ m: 2   }} />
        <TextField label="C" size="small" color="" focused sx={{ m: 2   }} />
        <TextField label="D" size="small" color="" focused sx={{ m: 2   }} />
        <TextField label="Correct Answer" size="small" color="" focused sx={{ m: 2   }} />

        </div>
      </div>
      <h1>{HTMLReactParser(content)}</h1>
    </>
  );
}
export default RichTextFile;
