import React from "react";

const Card = () => {
    return (

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/df9c7f81709869.Y3JvcCw3NzcsNjA4LDEwMCwxNTk.jpg" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
    );
}
 export default Card;