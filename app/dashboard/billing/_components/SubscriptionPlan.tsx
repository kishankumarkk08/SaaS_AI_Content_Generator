import React from 'react';
import { Button } from '../../../../components/ui/button'
import axios from 'axios'

interface PlanProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isActive?: boolean;
}

const SubscriptionPlan: React.FC<PlanProps> = ({ title, price, features, buttonText, isActive }) => {

  const createSubs = () => {

  }
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
      <Button
        className={`px-4 py-2 rounded-lg w-full hover:bg-gray-300 hover:text-gray-700 ${isActive ? ' text-gray-800 bg-gray-400' : 'border '}`}

      >
        {buttonText}
      </Button>
    </div>
  );
};

export default SubscriptionPlan;