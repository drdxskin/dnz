
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import { AppSection } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.LANDING);

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.LANDING:
        return <LandingPage onRegister={() => setCurrentSection(AppSection.REGISTER)} />;
      case AppSection.REGISTER:
        return <RegistrationForm onBack={() => setCurrentSection(AppSection.LANDING)} />;
      case AppSection.ADMIN:
        return <AdminDashboard onBack={() => setCurrentSection(AppSection.LANDING)} />;
      default:
        return <LandingPage onRegister={() => setCurrentSection(AppSection.REGISTER)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        currentSection={currentSection} 
        onNavigate={setCurrentSection} 
      />
      <main className="pt-16">
        {renderSection()}
      </main>
      
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">44th Annual Conference - IMA DNZ</h3>
            <p className="text-sm">Strengthening Primary Care for a Healthier Delhi</p>
            <p className="text-sm mt-2">March 15th, 2026 | Tivoli Grand Resort Hotel</p>
          </div>
          <div className="md:text-right">
            <h3 className="text-white font-bold mb-4">Conference Secretariat</h3>
            <p className="text-sm">IMA-DNZ Office: 408-410, Rajinder Jain Tower</p>
            <p className="text-sm">18, Wazirpur Ind. Area, Delhi-110052</p>
            <p className="text-sm">Contact: 9289195036</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          &copy; 2026 Indian Medical Association - Delhi North Zone. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
