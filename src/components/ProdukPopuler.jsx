import { Link } from 'react-router-dom'


export default function ProdukPopuler({produk}) {
  return (
    <div id="produkPopuler" className="container mt-3">
      <h4 className="mb-3">Produk Populer:</h4><hr/>
      <div className="row">
        {produk ? produk.slice(0, 6).map((produk) => {
          return (
            <div className="col-md-2 mb-4" key={produk.id}>
              <Link to={`/detail/${produk.id}`}>
              <div className="card border-0">
                <img
                  src={produk.gambar}
                  alt={produk.nama}
                  className="card-img-top h-100 border-0"
                />
                <div className="card-body border-darken-1">
                  <p className="card-title">{produk.nama.slice(0,19) + ".."}</p>
                  <span className="badge badge-pill badge-warning">
                    {produk.kategori.nama}
                  </span>

                </div>
              </div>
            </Link>
            </div>
          );
        }): null}
      </div>
    </div>
  );
}
