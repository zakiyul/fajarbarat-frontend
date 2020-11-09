import Banner from '../components/Banner'
import Footer from '../components/Footer'
import KategoriCard from '../components/KategoriCard'
import Navbar from '../components/Navbar'
import ProdukPopuler from '../components/ProdukPopuler'
import ProdukTerbaru from '../components/ProdukTerbaru'
import React from 'react'

import {connect, useSelector} from 'react-redux'
import {getBanners,getKategoriCard,getProduct} from '../actions'

function Home(props){

  const {dispatch} = props

  React.useEffect(() => {
    dispatch(getBanners())
    dispatch(getKategoriCard())
    dispatch(getProduct())
  },[])

  const banners = useSelector(state => state.banner)
  const kategoriCard = useSelector(state => state.kategoriCard)
  const produk = useSelector(state => state.produk)

  return (
    <div>
      <Navbar/>
      <Banner banners={banners}/>
      <KategoriCard kategoriCard={kategoriCard}/>
      <ProdukPopuler produk={produk}/>
      <ProdukTerbaru produk={produk}/>
      <Footer/>
    </div>
  )
}

export default connect()(Home)