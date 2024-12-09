import React from 'react';
import LeftSide from '../HomeFile/leftSide'; // LeftSide
import './Profile.css'
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsSharpIcon from '@mui/icons-material/CollectionsSharp';
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';

const Profile = () => {
  return (
    <div className="App">
      {/* LeftSide מוצג תמיד */}
      <div className="leftSideHome">
        <LeftSide />
      </div>

      {/* MiddleSide - כאן יציג את התוכן של הדף */}
      <div className="middleSide">
        <div className='middleProfile'>
          <div className="middleProfileTop">
            <div className="middleProfileTopContainer">
              <div className="middleProfileTopLeft">
                <div className="profilePhoto"></div>
              </div>
              <div className="middleProfileTopRight">
                <div className="middleProfileTopRightButtons">
                  <p className='pTopRight'>user</p>
                  <button className='topRightButtons'>Edit profile</button>
                  <button className='topRightButtons'>View Archive</button>
                  <button className='topRightButtons'>Ad tools</button>
                  <SettingsIcon />
                </div>
                <div className="middleProfileTopRightFollowers">
                  <p className='pTopRightFollowers'><span style={{fontWeight:"600"}}>257</span> posts</p>
                  <p className='pTopRightFollowers'><span style={{fontWeight:"600"}}>992</span> followers</p>
                  <p className='pTopRightFollowers'><span style={{fontWeight:"600"}}>63</span> following</p>
                </div>
                <div className="middleProfileTopRightTitle">The Name</div>
                <div className="middleProfileTopRightDetails">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus.
                </div>

              </div>
            </div>
            <div className="highlights">
              <div className="highlightsContainer">
                <div className="highlightBorder">
                  <div className="highlight">img</div>
                </div>
              
                <div className="highlightsNames">
                  <span>name</span>
                </div>
              </div>

              <div className="highlightsContainer">
                <div className="highlightBorder">
                  <div className="highlight">img</div>
                </div>
              
                <div className="highlightsNames">
                  <span>name</span>
                </div>
              </div>

              <div className="highlightsContainer">
                <div className="highlightBorder">
                  <div className="highlight">img</div>
                </div>
              
                <div className="highlightsNames">
                  <span>name</span>
                </div>
              </div>

              <div className="highlightsContainer">
                <div className="highlightBorder">
                  <div className="highlight">img</div>
                </div>
              
                <div className="highlightsNames">
                  <span>name</span>
                </div>
              </div>

              <div className="highlightsContainer">
                <div className="highlightBorder">
                  <div className="highlight">img</div>
                </div>
              
                <div className="highlightsNames">
                  <span>name</span>
                </div>
              </div>
            </div>
            
          </div>
          <div className="middleProfileBottom">
            <div className="middleProfileBottomButtons">
              <div className="middleProfileBottomButtonsContainer">
                <div className="theButtonsContainer">
                  <div className='theButtons'><CollectionsSharpIcon/> <span className='spanIcons'> POST</span></div>
                  <div className='theButtons'><BookmarkBorderSharpIcon/> <span className='spanIcons'> SAVED</span></div>
                  <div className='theButtons'><PersonOutlineSharpIcon/> <span className='spanIcons'> TAGGED</span></div>
                </div>
              </div>
            </div>
            <div className="middleProfileBottomPosts">
              <div className="PostContainer">
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
                <div className="Post">image</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Profile;
