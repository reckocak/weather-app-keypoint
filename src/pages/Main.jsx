import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(false)
  const [location, setLocation] = useState ('london')
  const navigate = useNavigate()
  const [isCityFound, setIsCityFound] = useState(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5367e2ce8b28efe3b520e745cd510df2&units=metric`;
  

  const searchLocation = () => {
    if(location!==''){
      console.log(url);
      axios.get(url).then((res)=>{
        setData(res.data)
        setIsCityFound(false);
      })
      .catch(()=>{setIsCityFound(true)})
      setLocation('')
    }
  }
  const searchEnter = (e) => {
    console.log(e);
    if (e.keyCode === 13){
      searchLocation()
    }
  }
  useEffect(()=>{
    searchLocation()
  },[])

  const logOut = ()=>{
    localStorage.clear()
    navigate('/')
  }


  return (
    <div className="container">
      <header className="d-flex flex-column justify-content-center align-items-center mt-4">
        <h1 className="mb-5">Weather-App</h1>
        <div
          className="d-flex justify-content-center align-items-center"
          
        >
          <input
            autoFocus
            className="form-control me-2"
            type="text"
            placeholder="Search a new city!"
            aria-label="Search"
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={searchEnter}
          />

          <button className="btn btn-outline-secondary" onClick={searchLocation}>
            Search
          </button>
        </div>
      </header>
      {!isCityFound ? (
        <main className="d-flex justify-content-center align-items-center mt-5">
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ width: "200px" }}
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                className="card-img-top weather-icon m-auto"
                alt="weather icon"
              />
              <div className="card-body text-dark">
                <h3 className="card-title">{data.name}</h3>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <dl className="row" style={{ marginBottom: "10px" }}>
                    <dd className="col-6">Date:</dd>
                    <dt className="col-6">{new Date().toLocaleDateString()}</dt>
                  </dl>
                </li>
                <li className="list-group-item">
                  <dl className="row" style={{ marginBottom: "10px" }}>
                    <dd className="col-6">Temperature:</dd>
                    <dt className="col-6">{data.main.temp.toFixed(0)} °C</dt>
                  </dl>
                </li>
                <li className="list-group-item">
                  <dl className="row" style={{ marginBottom: "10px" }}>
                    <dd className="col-6">Describtion:</dd>
                    <dt className="col-6">{data.weather[0].main}</dt>
                  </dl>
                </li>
                <li className="list-group-item">
                  <dl className="row" style={{ marginBottom: "10px" }}>
                    <dd className="col-6">Humidity:</dd>
                    <dt className="col-6">{data.main.humidity}%</dt>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </main>
      ) : (
        <h1>City can't find!</h1>
      )}

      <div className="d-flex justify-content-center align-items-center mt-5">
        <button className="btn btn-warning" onClick={logOut}>Logout</button>
      </div>
    </div>
  );
}

export default Home