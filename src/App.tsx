/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Navbar, 
  Hero, 
  SocialProof, 
  Services, 
  Results, 
  WhyChooseMe, 
  Process, 
  Testimonials, 
  UpworkCTA, 
  Contact, 
  Footer 
} from "./components/AhmadTalhaBrand.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary selection:bg-brand-accent-teal selection:text-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Results />
        <WhyChooseMe />
        <Process />
        <Testimonials />
        <UpworkCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

