// app/api/saveContent/route.ts

import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';
import moment from 'moment';

export async function POST(request: Request) {
  try {
    const { formData, slug, aiResponse, createdBy } = await request.json();

    const result = await prisma.aIOutput.create({
      data: {
        formData: JSON.stringify(formData) || '',
        slug: slug || '',
        aiResponse: aiResponse || '',
        createdBy: createdBy || '',
        createdAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}