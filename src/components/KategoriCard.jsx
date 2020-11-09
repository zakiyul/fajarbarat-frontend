import {Link} from 'react-router-dom'

export default function KategoriCard({kategoriCard}){

  return(
    <div id="kategoriCard" className="container mt-5">
      <div className="row">
        {kategoriCard ? kategoriCard.map(kc => {
          return(
            <div className="col-md-3" key={kc.id}>
              <Link to={`c/${kc.id}`}>
                <div className="e-card">
                  <img src={kc.gambar} alt={kc.title} className="e-card-img"/>
                  <p className="e-card-title mt-3">
                    {kc.title}
                  </p>
                </div>
              </Link>
            </div>
          )
        }) : null}
      </div>
    </div>
  )
}