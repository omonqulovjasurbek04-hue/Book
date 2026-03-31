import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BooksSection from './components/BooksSection'
import PenSection from './components/PenSection'
import FeaturesGrid from './components/FeaturesGrid'
import StepsSection from './components/StepsSection'
import ReviewSection from './components/ReviewSection'
import OrderForm from './components/OrderForm'
import DualMarquee from './components/DualMarquee'
import Footer from './components/Footer' // Biz Footerini alohida yozamiz

function AppContent() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-0">
      <Navbar />
      <main className="pt-16">
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
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}