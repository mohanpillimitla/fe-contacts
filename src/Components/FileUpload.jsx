import {Button } from "@mui/material";
const FileUpload = ({handleFileUpload}) => {

  return (
    <div>
    <Button variant="contained" color="primary" fullWidth margin="20px">
      <input type="file" id="fileupload" onChange={(e)=>handleFileUpload(e.target.files[0])}/>
    </Button>
    </div>
  );
};

export default FileUpload;
