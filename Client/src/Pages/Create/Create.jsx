import React, { useState } from 'react';
import { useRef } from 'react';
import LeftSide from '../../Pages/HomeFile/leftSide';
import '../Create/Create.css'


const Create = () => {

  const inputRef = useRef(null)
  const [image, setImage] = useState("")

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  }

  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide />
      </div>

      <div className="middleSide">
        <div className='middleSideCreate'>
          {image ? <img style={{ width: "200px", height:"200px" }}  onClick={handleImageClick} src={URL.createObjectURL(image)} alt='' /> : <img style={{ width: "200px", height:"200px" }}  onClick={handleImageClick} src="/GoogleDocs.png" alt='' />}
          <input
            type='file'
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}></input>
          <div className='ss'>
            <input type='text' placeholder='Description'></input>
          </div>
          <button>Upload</button>
        </div>

      </div>




    </div>
  );
};

export default Create;

















// function Create () {
//   const inputRef = useRef(null);


//   const handleImageClick =
//     inputRef.current.click();
//   return (
//     <>
//     <div onClick={handleImageClick}>
//       <img style={{width:"400px",height:"300px"}} src='./GoogleDocs.png' alt='' />
//       <input type='file' ref={inputRef} style={{display:"none"}}/>
//     </div>
//     </>
//   );
// }

// export default Create