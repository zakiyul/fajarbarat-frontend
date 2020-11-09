import { Link } from "react-router-dom"

export default function ProdukTerbaru({produk}){
  return(
    <div id="produkTerbaru">
      <div className="container mt-5">
        <h4 className="mb-3">Produk Terbaru :</h4> <hr/>
        <div className="row">
          {
            produk ?
            produk.filter(produk => produk.id >= 7).map(p => {
              return(
                <div className="col-md-2 mb-4" key={p.id}>
                  <Link to={`/detail/${p.id}`}>
                  <div className="card border-0">
                    <img src={p.gambar} alt={p.nama} className="card-img-top h-100 border-0"/>
                    <div className="card-body">
                      <p className="card-title">
                        {p.nama.slice(0,19) + ".."}
                      </p>
                      <span className="badge badge-pill badge-warning">
                        {p.kategori.nama}
                      </span>
                    </div>
                  </div>
                  </Link>
                </div>
              )
            }) : <p>tidak ada bro..</p>
          }
        </div>
      </div>
    </div>
  )
}