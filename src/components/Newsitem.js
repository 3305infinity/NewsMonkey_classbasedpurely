import React, { Component } from "react";
import PropTypes from "prop-types";
export class Newsitem extends Component {
  static propTypes = {};
  render() {
    let { title, desc, imageurl, newsurl, author, time, source } = this.props;
    return (
      <>
         <div style={{ display: "flex",flexDirection:'column', padding: "30px" }}>
         <div className="card my-3 mx-3 " style={{ width: "290px", height: "500px" }} >
          <div style={{display:'flex',justifyContent:"flex-end",right:'0',position:'absolute'}}>
          <span class=" badge rounded-pill bg-danger" style={{left:'90%'}}>{source}</span>
          </div>
         <img
              src={imageurl}
              className="card-img-top"                                                            
              style={{ width: "290px", height: "180px" }}/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{desc}...</p>
              <p className="">
                By {author} last updated {new Date(time).toGMTString()}
              </p>
              <a href={newsurl}
                target="_blank"
                className="btn text-light bg-dark"
              >
                Read More{" "}
              </a>
            </div>
          </div>          
        </div>
      </>
    );
  }
}
export default Newsitem;
