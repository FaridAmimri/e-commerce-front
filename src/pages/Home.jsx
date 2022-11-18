/** @format */

import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import CategorieList from '../components/CategorieList'
import ProductList from '../components/ProductList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <CategorieList />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
