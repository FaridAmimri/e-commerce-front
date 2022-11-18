/** @format */

import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <CategoryList />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
