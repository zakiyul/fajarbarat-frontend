import Banner from '../components/Banner'
import Footer from '../components/Footer'
import KategoriCard from '../components/KategoriCard'
import Navbar from '../components/Navbar'
import ProdukPopuler from '../components/ProdukPopuler'
import ProdukTerbaru from '../components/ProdukTerbaru'

export default function Home(){
  return (
    <div>
      <Navbar/>
      <Banner/>
      <KategoriCard/>
      <ProdukPopuler/>
      <ProdukTerbaru/>
      <Footer/>
    </div>
  )
}