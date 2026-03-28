import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BooksSection from './components/BooksSection'
import PenSection from './components/PenSection'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <BooksSection />
      <PenSection />
    </div>
  )
}
