import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { createdBy } = await request.json();
    const response = await prisma.aIOutput.findMany({
      where: {
        createdBy: createdBy || "",
      },
      select: {
        slug: true,
        aiResponse: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });
    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error('Error fetching history:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}