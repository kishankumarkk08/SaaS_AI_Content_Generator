import React from 'react';
import Templates from '@/app/(templates)/Templates';
import TemplateSection, { TEMPLATE } from './TemplateSection';
import Image from 'next/image';
import Link from 'next/link';

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-in-out">
        {/* Icon (kept as it was before) */}
        <div className="flex items-center justify-center mb-4">
          <Image src={item.icon} alt="icon" width={50} height={50} className="object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">{item.name}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 text-center line-clamp-3 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </Link>
  );
};

export default TemplateCard;