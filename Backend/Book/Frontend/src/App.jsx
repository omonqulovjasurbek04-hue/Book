import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BooksSection from './components/BooksSection'
import PenSection from './components/PenSection'
import FeaturesGrid from './components/FeaturesGrid'
import StepsSection from './components/StepsSection'
import ReviewSection from './components/ReviewSection'
import OrderForm from './components/OrderForm'
import DiagonalStripe from './components/DiagonalStripe'

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        
        {/* Yuguruvchi satr - animated */}
        <div className="bg-gradient-to-r from-[#6B4095] via-[#7B5BAB] to-[#6B4095] py-3 overflow-hidden whitespace-nowrap text-white font-bold uppercase tracking-widest animate-pulse">
           Angelfaces to'plamini 10% chegirma bilan sotib oling! • Angelfaces to'plamini 10% chegirma bilan sotib oling!
        </div>

        <BooksSection />
        <DiagonalStripe bgGradient="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />
        
        <PenSection />
        <DiagonalStripe bgGradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500" />
        
        <FeaturesGrid />
        <DiagonalStripe bgGradient="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500" />
        
        <StepsSection />
        <DiagonalStripe bgGradient="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500" />
        
        <OrderForm />
        <ReviewSection />
      </main>
      
      <footer className="bg-gray-50 py-10 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black text-purple-700">ANGELFACES</div>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-purple-600">Bosh sahifa</a>
            <a href="#books" className="hover:text-purple-600">To'plamlar</a>
            <a href="#reviews" className="hover:text-purple-600">Natijalar</a>
            <a href="#contact" className="hover:text-purple-600">Aloqa</a>
          </div>
          <p className="text-xs text-gray-400">© 2026 Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
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