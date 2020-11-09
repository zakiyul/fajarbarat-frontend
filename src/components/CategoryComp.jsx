import React from "react";
import { Link } from 'react-router-dom'


function CategoryComp({ produk }) {
  return (
    <div id="categoryComp" className="container">
      <div className="row">
        {produk
          ? produk.map((p) => (
              <div className="col-md-4 my-3" key={p.id}>
                <div className="card">
                  <img src={p.gambar} className="card-img-top p-4 rounded" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{p.nama.slice(0,19) + '...'}</h5>
                    <p className="card-text">
                      {p.kategori.nama}
                    </p>
                    <Link to={`/detail/${p.id}`} className="btn btn-primary">
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default CategoryComp;
