import { saveAs } from 'file-saver';
const DownloadButton = props => {
    const downloadFile = async () => {
      let url = "cv/jabakobriashvili.pdf";
      let fileName = "cv";
      const res = await fetch(url);
      const blob = await res.blob();
      saveAs(blob, fileName);
      
    }
    return (
              <p onClick={downloadFile} style={{cursor:'pointer',color:'#F7FD04'}}> Download CV</p>
    )
  }
  export default DownloadButton;

  //  "https://yoursite.com/src/assets/files/exampleDoc.pdf"

  /*
src\CV\jabakobriashvili2.pdf
import ExampleDoc from '......src/assets/files/exampleDoc.pdf'

<a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
   <Button className={classes.navLink}>My Example Doc</Button>
</a>


  */