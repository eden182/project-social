import React, { useState, useRef } from 'react';
import LeftSide from '../../Pages/HomeFile/leftSide';
import '../Create/Create.css';

const Create = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const [image, setImage] = useState(""); // שמירת התמונה

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); // פתיחת דיאלוג בחירת קובץ
    }
  };

  const handleImageChange = (event) => {
    event.preventDefault(); // מנע את ההתנהגות ברירת המחדל של submit אם אתה לא רוצה רענון
    const file = event.target.files[0]; 
    console.log(file);
    setImage(file); // עדכון המידע של התמונה
  };

  const inputValue = (event) => {
    event.preventDefault(); 
    console.log("Image Info:", image);
    console.log("Description:", inputRef2.current.value);
    alert("Uploaded successfully");
  };


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
                style={{ height: "300px",}}
                onClick={handleImageClick}
                src={URL.createObjectURL(image)}
                alt=''
              />
            ) : (
              <img
                style={{  height: "300px", border: "1px solid" }}
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
            <h3>Upload Here</h3>
            <div className='ss'>
              <input className='input-create' ref={inputRef2} type='text' placeholder='Description' />
            </div>
            <button className='button-create' type='submit'>Upload</button> 
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