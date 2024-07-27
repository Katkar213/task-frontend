import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FileManagement = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [code, setCode] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:4001/api/upload', formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setCode(response.data.code);
      toast.success(response.data.message);
      fetchFiles(); // Refresh the list of files after a successful upload
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file');
    }
  };

  const fetchFiles = async () => {
    try {
        const response = await axios.get('http://localhost:4001/api/files', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        // Make sure files is always an array
        if (Array.isArray(response.data)) {
            setFiles(response.data);
        } else {
            console.error('Unexpected response format:', response.data);
            toast.error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error fetching files:', error);
        toast.error('Error fetching files');
    }
};

  const handleDeleteFile = async (fileId) => {
    try {
      await axios.delete(`http://localhost:4001/api/files/${fileId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      toast.success('File deleted successfully');
      fetchFiles(); // Refresh the list of files after a successful deletion
    } catch (error) {
      console.error('Error deleting file:', error);
      toast.error('Error deleting file');
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {code && <p>File uploaded with code: {code}</p>}
      <h2>Uploaded Files</h2>
      {/* <ul>
        {file.length>0 && files.map(file => (
          <li key={file._id}>
            {file.filename}
            <button onClick={() => handleDeleteFile(file._id)}>Delete</button>
          </li>
        ))}
      </ul> */}
      <ToastContainer />
    </div>
  );
};

export default FileManagement;
