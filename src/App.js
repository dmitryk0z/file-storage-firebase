import React, { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, listAll, uploadBytes, getDownloadURL } from "firebase/storage";


function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const listFiles = async () => {
    try {
      const listRef = ref(storage, '');
      const res = await listAll(listRef);
      const files = [];

      for (const itemRef of res.items) {
        const url = await getDownloadURL(itemRef);
        files.push({ key: itemRef.name, url });
      }

      setUploadedFiles(files);
    } catch (error) {
      console.error("Error listing files:", error);
    }
  };

  useEffect(() => {
    listFiles();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const storageRef = ref(storage, selectedFile.name);

      uploadBytes(storageRef, selectedFile)
        .then(() => {
          alert("File uploaded successfully!");
          setSelectedFile(null);
          listFiles(); // Refresh the file list
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };

  return (
    <div>
      <h1>File Uploader</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
      {uploadedFiles.length > 0 && (
        <div>
          <h2>Uploaded Files:</h2>
          <div className="file-cards">
            {uploadedFiles.map((file) => (
              <div key={file.key} className="file-card">
                <img src={file.url} alt={file.key} className="file-image" />
                <p className="file-name">{file.key}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
