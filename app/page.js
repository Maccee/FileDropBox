"use client";
import { useState } from "react";
import FileDropBox from "./FileDropBox.js";

export default function Home() {
  const [transferredFiles, setTransferredFiles] = useState([]);

  const handleFileSelect = (files) => {
    setTransferredFiles(files);
  };

  return (
    <div>
      <h1>Upload Files</h1>
      <FileDropBox onFileSelect={handleFileSelect} />

      {transferredFiles.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {transferredFiles.map((file, index) => (
              <li key={index}>
                {file.name} - {file.size} bytes - {file.type} type
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
