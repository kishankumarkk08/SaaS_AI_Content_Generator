"use client"
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import React, { useState, useContext } from 'react';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubsContext } from '@/app/(context)/UserSubsContext'

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { userSubscription, setUserSubscription } = useContext(UserSubsContext);
  const { user } = useUser();

  const createSubs = () => {
    setLoading(true);
    axios.post('/api/subscriptions', {}).then(res => {
      console.log(res.data);
      onPayment(res.data.id);
    }, (error) => {
      setLoading(false);
    });
  };

  const onPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "AI Content Generator",
      description: "Premium Monthly Subscription",
      handler: async (res: any) => {
        console.log(res);
        if (res) {
          saveSubscription(res?.razorpay_payment_id);
        }
        setLoading(false);
      }
    };
    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const saveSubscription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      joinDate: moment().format('DD/MM/YYYY')
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Free Plan Card */}
        <div className={`w-80 p-8 bg-white rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 ${!userSubscription ? 'border-4 border-indigo-600' : ''}`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Free Plan</h2>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-indigo-600">₹0</span>
            <span className="text-gray-500 text-lg">/month</span>
          </div>
          <ul className="text-gray-700 mb-8 space-y-3">
            <li className="flex items-center">
              <span className="text-indigo-500 font-bold mr-2">✓</span> 10,000 Words/Month
            </li>
            <li className="flex items-center">
              <span className="text-indigo-500 font-bold mr-2">✓</span> 50+ Content Templates
            </li>
            <li className="flex items-center">
              <span className="text-indigo-500 font-bold mr-2">✓</span> Unlimited Download & Copy
            </li>
            <li className="flex items-center">
              <span className="text-indigo-500 font-bold mr-2">✓</span> 1 Month of History
            </li>
            <li className="flex items-center">
              <span className="text-red-500 font-bold mr-2">✕</span> Priority Support
            </li>
          </ul>
          <button className="w-full py-3 text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300 transition">
            {userSubscription ? 'Why free? When you have prime' : 'Currently Active plan'}
          </button>
        </div>

        {/* Paid Plan Card */}
        <div className={`w-80 p-8 bg-white rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 ${userSubscription ? 'border-4 border-indigo-600' : ''}`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium Plan</h2>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-indigo-600">₹199</span>
            <span className="text-gray-500 text-lg">/month</span>
          </div>
          <ul className="text-gray-700 mb-8 space-y-3">
            <li className="flex items-center">
              <span className="text-indigo-500 font-bold mr-2">✓</span> Unlimited Words/Month
            </li>
            <li className="flex items-center">
              <span className="text-indigo-500 font-bold mr-2">✓</span> 100+ Content Templates
            </li>
            <li className="flex items-center">
              <span className="text-indigo-500 font-bold mr-2">✓</span> Unlimited Download & Copy
            </li>
            <li className="flex items-center">
              <span className="text-indigo-500 font-bold mr-2">✓</span> 12 Months of History
            </li>
            <li className="flex items-center">
              <span className="text-indigo-500 font-bold mr-2">✓</span> Priority Support
            </li>
          </ul>
          <button disabled={loading} className="w-full flex justify-center items-center py-3 gap-2 text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300 transition" onClick={() => createSubs()}>
            {loading && <Loader2Icon className='animate-spin' />}
            {userSubscription ? 'Currently Active Plan' : 'Choose Plan'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;