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
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600">Saylani Food Programs</h3>
            <p>
              Saylani Welfare Trust provides food for the less fortunate and organizes regular food drives to help the underprivileged.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600">Saylani Medical Services</h3>
            <p>
              They offer medical assistance through free clinics and donations for those in need of healthcare services.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600">Saylani Education Programs</h3>
            <p>
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
            <p className="mt-6 max-w-3xl mx-auto text-lg">
              Saylani's IT sector focuses on empowering individuals by providing them with essential digital skills. From software development to digital marketing, Saylani offers training, workshops, and career opportunities in the technology sector. The achievements include partnerships with global tech companies, training over 5,000 individuals, and helping many secure jobs in IT-related fields.
            </p>
          </div>
          <div>
            <img
              src="data:image/jpeg;base64,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" // Example image URL from Google (replace with your own)
              alt="Saylani IT Sector"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Brief Description */}
      <section className="py-12 px-8">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-2xl text-blue-600">Saylani Welfare Trust</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Saylani Welfare Trust is a non-profit organization dedicated to helping those in need. They provide food, medical assistance, education, and more to uplift the underprivileged communities. Their work is driven by a passion for service and a deep commitment to improving lives.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="text-center">
          <h3 className="text-3xl">Saylani Welfare Trust</h3>
          <p className="mt-2 text-xl">A Non-Profit Organization Making a Difference</p>

          <p className="mt-4">
            <strong>Email:</strong>
            <a href="mailto:saylani.contact@gmail.com" className="text-white underline"> saylani.contact@gmail.com</a>
          </p>
          <p>
            <strong>Location:</strong> Karachi, Pakistan
          </p>

          <p className="mt-6 text-sm">
            Follow us on our social media channels for updates and events.
          </p>
          <div className="mt-4 space-x-6">
            <a href="https://facebook.com" className="text-white">
              <FacebookOutlined className="text-2xl" />
            </a>
            <a href="https://twitter.com" className="text-white">
              <TwitterOutlined className="text-2xl" />
            </a>
            <a href="https://instagram.com" className="text-white">
              <InstagramOutlined className="text-2xl" />
            </a>
          </div>

          <p className="mt-8 text-xs">&copy; 2025 Saylani Welfare Trust. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
