import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = () => {

    const [color, setColor] = useState("black"); // סטייט לצבע האייקון
    const [colorY, setColorY] = useState("black");
    const [isCommenting, setIsCommenting] = useState(false);
    // פונקציה להחלפת צבע האייקון של הלב
    function changeColor() {
        setColor(color === "black" ? "red" : "black"); // החלפה בין צבעים
    }

    function changeColor2() {
        setColorY(colorY === "black" ? "yellow" : "black"); // החלפה בין צבעים
    }


    


    return (
        <>
       <div className="post">
                    <div className="postInfo">
                        <img className="postInfoImg" src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="sda" />
                        <div className="postInfoUserName">Tigger</div>
                        <div className="timingInfo">. 36 min</div>
                    </div>
                    <div className="postsImg">
                        <img className="postImage" src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"></img>
                    </div>
                    <div className="iconsBlock">
                        <div className="leftIcon" >
                            <FavoriteBorderIcon
                            onClick={changeColor}
                            style={{ fontSize: "25px", color: color, cursor:"pointer"}} />
                            <ModeCommentOutlinedIcon
                            onClick={() => setIsCommenting(!isCommenting)} 
                            sx={{fontSize:"25px", cursor:"pointer"}} />
                            <SendOutlinedIcon sx={{fontSize:"25px"}} />
                        </div>
                        <div>
                            <BookmarkBorderIcon
                            onClick={changeColor2}
                            style={{ fontSize: "25px", color: colorY, cursor:"pointer"}} />
                        </div>
                    </div>
                    <div className="likeSection">
                        <div className="imagesLike">
                            <img className="likeImg" src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" />
                            <img className="likeImg2" src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" />
                        </div>
                        <div className="noOfLikes">112,456 Likes</div>
                    </div>
                    <div className="postAbout">
                        <div className="postAboutName">Tiger Tiger</div>
                        <div className="infoComment">Happy Birthday lala Tigers</div>
                    </div>
                    <div className="numOfComments">View All 467 Comments</div>
                    <input 
                        type="text" 
                        className="addComment" 
                        placeholder="Add Comment..."
                        style={{
                            borderStyle: isCommenting ? "solid" : "none", // הוספת border כשנלחץ
                            borderColor: "black",
                            borderRadius: "25px" // אפשר להוסיף צבע כדי להדגיש את הגבול
                        }}>

                    </input>
                    
                </div>


                

                </>
    )
}


export default Post