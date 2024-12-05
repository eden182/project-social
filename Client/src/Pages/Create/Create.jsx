import React, { useState, useRef } from 'react';
import LeftSide from '../../Pages/HomeFile/leftSide';
import '../Create/Create.css'

const Create = () => {

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const [image, setImage] = useState(""); // שמירת התמונה

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); // פתיחת דיאלוג בחירת קובץ
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    console.log(file);
    setImage(file); // עדכון המידע של התמונה
  }

  const inputValue = () => {
    // הצגת המידע על התמונה וה-input
    console.log("Image Info:", image);
    console.log("Description:", inputRef2.current.value);
  }

  function buttonClicked () {
    alert("Uploaded successfully")
  }


  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide />
      </div>

      <div className="middleSide">
        <div className='middleSideCreate'>
        <form onSubmit={inputValue}> 
            {image ? (
              <img
                style={{ width: "500px", height: "600px" }}
                onClick={handleImageClick}
                src={URL.createObjectURL(image)}
                alt=''
              />
            ) : (
              <img
                style={{ width: "600px", height: "600px" }}
                onClick={handleImageClick}
                src="/GoogleDocs.png"
                alt=''
              />
            )}
            <input
              type='file'
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <div className='ss'>
              <input ref={inputRef2} type='text' placeholder='Description' />
            </div>
            <button onClick={buttonClicked}>Upload</button> 
          </form>
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