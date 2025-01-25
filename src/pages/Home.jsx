import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Header Section */}
      <header className="text-center py-28 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <h1 className="text-6xl font-extrabold tracking-wide">Beneficiary Management System</h1>
      </header>

      {/* Information Cards */}
      <section className="py-12 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600">Saylani Food Programs</h3>
            <p className="text-gray-700 mt-2">
              Saylani Welfare Trust provides food for the less fortunate and organizes regular food drives to help the underprivileged.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600">Saylani Medical Services</h3>
            <p className="text-gray-700 mt-2">
              They offer medical assistance through free clinics and donations for those in need of healthcare services.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600">Saylani Education Programs</h3>
            <p className="text-gray-700 mt-2">
              Saylani believes in educating the underprivileged children and providing scholarships for higher education.
            </p>
          </div>
        </div>
      </section>

      {/* Saylani IT Sector and Achievements */}
      <section className="py-12 px-6 bg-blue-50">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl text-blue-800 font-semibold">Saylani IT Sector & Achievements</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
              Saylani's IT sector focuses on empowering individuals by providing them with essential digital skills. From software development to digital marketing, Saylani offers training, workshops, and career opportunities in the technology sector. The achievements include partnerships with global tech companies, training over 5,000 individuals, and helping many secure jobs in IT-related fields.
            </p>
          </div>
          <div>
            <img
              src="https://d2liqplnt17rh6.cloudfront.net/coverImages/bc033aaf-0f16-4983-a0e9-c94e9b07a3ca-311.jpeg"
              alt="Saylani IT Sector"
              className="shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-xl hover:text-blue-500">
              <FacebookOutlined />
            </a>
            <a href="#" className="text-xl hover:text-blue-500">
              <TwitterOutlined />
            </a>
            <a href="#" className="text-xl hover:text-blue-500">
              <InstagramOutlined />
            </a>
          </div>
          <p className="text-sm text-gray-400">&copy; 2025 Saylani Welfare Trust. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
