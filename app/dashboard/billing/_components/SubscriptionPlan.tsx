import React from 'react';

interface PlanProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isActive?: boolean;
}

const SubscriptionPlan: React.FC<PlanProps> = ({ title, price, features, buttonText, isActive }) => {
  return (
    <div className={`max-w-sm p-6 border rounded-lg shadow-md ${isActive ? 'border-blue-600' : 'border-gray-300'}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-3xl mb-4">{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            ✓ {feature}
          </li>
        ))}
      </ul>
      <button
        className={`px-4 py-2 rounded-lg w-full ${isActive ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SubscriptionPlan;