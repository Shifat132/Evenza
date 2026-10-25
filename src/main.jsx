import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Pages/Home'
import AboutUs from './components/AboutUs'
import CoreFeature from './components/CoreFeature'
import OurSpeakers from './components/OurSpeakers'
import EventSchedule from './components/EventSchedule'
import PricingPlan from './components/PricingPlan'
import Video from './components/Video'
import FAQs from './components/FAQs'
import TestiMonial from './components/TestiMonial'
import LatestBlog from './components/LatestBlog'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <AboutUs/>
    <CoreFeature/>
    <OurSpeakers/>
    <EventSchedule/>
    <PricingPlan/>
    <Video/>
    <FAQs/>
    <TestiMonial/>
    <LatestBlog/>
    <Footer/>
  </StrictMode>
)
