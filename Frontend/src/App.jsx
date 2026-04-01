import { LanguageProvider } from './context/LanguageContext'
import { useState, createContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BooksSection from './components/BooksSection'
import PenSection from './components/PenSection'
import FeaturesGrid from './components/FeaturesGrid'
import StepsSection from './components/StepsSection'
import ReviewSection from './components/ReviewSection'
import OrderForm from './components/OrderForm'
import DualMarquee from './components/DualMarquee'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'

export const ModalContext = createContext()

function AppContent() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-0 flex flex-col items-center">
      <div className="w-full">
        <Navbar />
        <main className="pt-16 w-full">
          <Hero />
          
          {/* Kitoblar Qismi (8ta tilda) */}
          <BooksSection />
          
          {/* Ruchka Qismi */}
          <PenSection />
          
          {/* Robot Ustoz (Maktab uchun va h.k) */}
          <FeaturesGrid />
          
          {/* Figma Dizayni: Yashil/Binafsha aylanma chiziqlar */}
          <DualMarquee />
          
          {/* Oq fon blok: Qator va Forma */}
          <div className="w-full bg-white pb-10">
            <StepsSection />
            <OrderForm />
          </div>
          
          {/* Natijalar (Sharhlar) */}
          <ReviewSection />
        </main>
        
        <Footer />
        <OrderModal />
      </div>
    </div>
  )
}

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <LanguageProvider>
      <ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
        <AppContent />
      </ModalContext.Provider>
    </LanguageProvider>
  )
}
