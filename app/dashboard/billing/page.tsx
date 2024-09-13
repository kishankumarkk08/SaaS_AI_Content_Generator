import React from 'react';
import SubscriptionPlan from './_components/SubscriptionPlan';

const SubscriptionPage: React.FC = () => {
  const freePlanFeatures = [
    '10,000 Words/Month',
    '50+ Content Templates',
    'Unlimited Download & Copy',
    '1 Month of History',
  ];

  const monthlyPlanFeatures = [
    '1,00,000 Words/Month',
    '50+ Template Access',
    'Unlimited Download & Copy',
    '1 Year of History',
  ];

  return (
    <div className='min-h-screen overflow-hidden bg-gray-100'>
      <div className='flex justify-center mt-16 md:mt-44 mb-8 text-3xl font-semibold'>Upgrade to a Monthly Plan</div>
      <div className="flex sm:flex-col lg:flex justify-center items-center ">
        <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8">
          <SubscriptionPlan
            title="Free"
            price="Rs0 /month"
            features={freePlanFeatures}
            buttonText="Currently Active Plan"
            isActive={true}
          />
          <SubscriptionPlan
            title="Monthly"
            price="Rs199 /month"
            features={monthlyPlanFeatures}
            buttonText="Get Started"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;