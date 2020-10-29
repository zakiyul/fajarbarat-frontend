import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function KategoriCard(){
  const [kategoriCard, setKategoriCard] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/kategoriCard/`)
     .then(results => setKategoriCard(results.data))
  })

  return(
    <div id="kategoriCard" className="container mt-5">
      <div className="row">
        {kategoriCard.map(kc => {
          return(
            <div className="col-md-3">
              <Link to={`kategori/${kc.id}`}>
                <div className="e-card">
                  <img src={kc.gambar} alt={kc.title} className="e-card-img"/>
                  <p className="e-card-title mt-3">
                    {kc.title}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}