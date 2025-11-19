import React from 'react'
import pic from "../assets/images/banner2.jpg"
// import "../assets/css/style.css"
var headingStyle = {
  textAlign:"center",
  padding:"10px",
  backgroundColor:"green",
  color:"white"
}
var paragraphStyle = {
  textAlign:"justify",
  padding:"10px",
  backgroundColor:"blue",
  color:"white"
}
export default function StyleImageExample() {
  return (
    <>
        <div className="main">
            <div className="center">
                <h2 style={{textAlign:"center",backgroundColor:"navy",color:"white",padding:"10px"}}>CSS and Image Example in Functional Component</h2>
                <div className="items">
                    <img src={require("../assets/images/banner1.jpg")} alt="" />
                    <img src={pic} alt="" />
                    <img src="/images/banner3.jpg" alt="" />
                </div>
                <h3 style={headingStyle}>Lorem ipsum dolor sit amet</h3>
                <p style={paragraphStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore commodi praesentium ducimus. Unde in illo nulla quas, a perferendis laboriosam.</p>
            </div>
        </div>
    </>
  )
}
