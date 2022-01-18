import React from "react";
import Button from "@material-ui/core/Button";

function DownloadPDF() {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `resume-rafaelturse.pdf`;
    link.href = "/public/doc/resume/resume-rafael-turse.pdf";
    link.click();
  };

  return (
    <React.Fragment>
      <Button onClick={onDownload} variant="contained" color="primary">
        Download
      </Button>
    </React.Fragment>
  )
}

export default DownloadPDF
