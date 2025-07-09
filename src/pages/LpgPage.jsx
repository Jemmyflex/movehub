import { Link } from 'react-router-dom';
import {
  FaGasPump,
  FaTruck,
  FaClock,
  FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const lpgSteps = [
  { step: 1, title: 'Place Order', description: 'Choose your cylinder size and place your order online.' },
  { step: 2, title: 'Confirmation', description: 'Receive a confirmation call or message from our team.' },
  { step: 3, title: 'Delivery', description: 'We deliver the filled LPG cylinder to your doorstep.' },
  { step: 4, title: 'Payment', description: 'Make payment after delivery through your preferred method.' },
];

function LpgPage() {
  return (
    <>
      {/* About LPG with Image */}
      <section className="py-12 px-4 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#035F6A]">About LPG</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Liquefied Petroleum Gas (LPG) is a clean, efficient, and eco-friendly energy source used across a variety of sectors—from homes and restaurants to industries and vehicles. It is best known for its domestic use as cooking gas.
            </p>
            <p className="text-sm mb-4 leading-relaxed">
              LPG is made up mainly of propane (C₃H₈) and butane (C₄H₁₀), which are stored either separately or as a blend under pressure. This pressurization turns the gas into liquid form for safe and compact storage and transportation.
            </p>
            <p className="text-sm leading-relaxed">
              One of LPG’s greatest advantages is its low environmental impact. Among all oil-derived fuels, LPG produces the lowest levels of carbon dioxide and harmful emissions when burned, making it an excellent choice for a cleaner and healthier environment.
            </p>
          </div>
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg min-h-[220px] flex items-center justify-center bg-gray-100">
            <img
              src="/src/assets/images/LPG2.jpg"
              alt="LPG Delivery"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* LPG Delivery Info Card - Separate Section */}
      <section className="py-12 px-4 bg-[#e6f4f1]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FaGasPump className="text-3xl text-green-600" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">LPG Door Delivery</h2>
              <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium mt-1">
                Same Day Delivery
              </span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md">
            <p className="text-gray-700 text-sm mb-4">
              Already filled LPG cylinders delivered to your doorstep. Choose from our wide range of cylinder sizes to match your needs.
            </p>
            <div className="mb-4">
              <h3 className="text-base font-semibold mb-2 text-gray-800">Available Cylinder Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { size: '3kg', type: 'Fibre & Steel' },
                  { size: '6kg', type: 'Fibre & Steel' },
                  { size: '12kg', type: 'Fibre & Steel' },
                  { size: '50kg', type: 'Steel Only' },
                ].map((cylinder) => (
                  <div key={cylinder.size} className="bg-white border border-green-100 px-3 py-2 rounded-lg flex flex-col items-center min-w-[70px]">
                    <span className="font-bold text-green-700 text-sm">{cylinder.size}</span>
                    <span className="text-[11px] text-gray-500">{cylinder.type}</span>
                  </div>
                ))}
              </div>
            </div>
            <ul className="space-y-2 text-xs text-gray-600 mb-3">
              <li className="flex items-center gap-2">
                <FaTruck className="text-green-500" />
                Doorstep delivery—no travel or queues.
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-green-500" />
                Time-saving & hassle-free—no heavy lifting.
              </li>
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-green-500" />
                Reliable, fast service by trained personnel.
              </li>
              <li className="flex items-center gap-2">
                <MdSupportAgent className="text-green-500" />
                Customer education for safe LPG use.
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Exclusive Newgas distributor in our zones.
              </li>
            </ul>
            <Link
              to="/order-lpg"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 text-xs mt-2"
            >
              Order Now
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How LPG Works */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#035F6A] text-center">How LPG Delivery Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {lpgSteps.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">{item.step}</div>
                <h3 className="font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LpgPage;
