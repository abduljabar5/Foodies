import { useState, useEffect, React } from 'react';
import { useLocation } from "react-router-dom";
import Searchcards from '../components/Searchcards'
export default function Search () {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("term");
    const [search, setsearch] = useState('')
    useEffect(() => {
        setsearch(searchTerm);
    }, [searchTerm]);

  return (
    <>
  <div className="visit-country">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-heading">
          <h1 className='text-3xl m-10'>Search results for: {search}</h1>
           
          </div>
        </div>
      </div>
      <div className="row">
        <div className="">
          <div className="items">
            
              <Searchcards />
          </div>
        </div>
        {/* <div className="col-lg-4">
          <div className="side-bar-map">
            <div className="row">
              <div className="col-lg-12">
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                    width="100%"
                    height="550px"
                    frameBorder={0}
                    style={{ border: 0, borderRadius: 23 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  
</>

  )
}
