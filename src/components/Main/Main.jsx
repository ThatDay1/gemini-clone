import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              repellat.
            </p>
            <img src={assets.compass_icon} alt="compass icon" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              repellat.
            </p>
            <img src={assets.bulb_icon} alt="bulb icon" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              repellat.
            </p>
            <img src={assets.message_icon} alt="message icon" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              repellat.
            </p>
            <img src={assets.code_icon} alt="code icon" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="gallery icon" />
              <img src={assets.mic_icon} alt="mic icon" />
              <img src={assets.send_icon} alt="send icon" />
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quis impedit expedita numquam non repellat, illum suscipit mollitia
            voluptatem fuga, odio ex placeat animi amet libero ratione voluptate
            minus consectetur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
