import {useState, useEffect} from 'react'
import axios from 'axios'

export default function ProdukTerbaru(){
  const [produk, setProduk] = useState([])
  useEffect(()=> {
    axios.get(`http://localhost:8000/api/produk/`)
     .then(results => setProduk(results.data))
  })

  return(
    <div id="produkTerbaru">
      <div class="container mt-5">
        <h4 class="mb-3">Produk Terbaru :</h4> <hr/>
        <div className="row">
          {
            produk.filter(produk => produk.id <= 7).map(p => {
              return(
                <div className="col-md-2 mb-4">
                  <div className="card border-0">
                    <img src={p.gambar} alt={p.nama} className="card-img-top h-100 border-0"/>
                    <div className="card-body">
                      <p className="card-title">
                        {p.nama.slice(0,19) + ".."}
                      </p>
                      <span class="badge badge-pill badge-warning">
                        {p.kategori.nama}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}