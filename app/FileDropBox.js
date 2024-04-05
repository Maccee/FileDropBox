import { useState, useCallback } from "react";

const FileDropBox = ({ onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files) {
        const filesArray = Array.from(e.dataTransfer.files);
        onFileSelect(filesArray);
      }
    },
    [onFileSelect]
  );

  const handleChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      onFileSelect(filesArray);
    }
  };
  const handleClick = (e) => {
    if (e.target.tagName !== "LABEL") {
      document.getElementById("fileInput").click();
    }
  };

  return (
    <div
      className={`drop-box ${dragActive ? "active" : ""}`}
      onClick={handleClick}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="fileInput"
        hidden
        onChange={handleChange}
        multiple
      />
      <label htmlFor="fileInput" className="drop-box__prompt">
        Drag and drop a file here, or click to select a file
      </label>
    </div>
  );
};

export default FileDropBox;
