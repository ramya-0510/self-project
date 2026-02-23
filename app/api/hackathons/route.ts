import { NextRequest, NextResponse } from 'next/server';
import { mockHackathons } from '@/lib/mockData';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const difficulty = searchParams.get('difficulty');
  const search = searchParams.get('search');

  let filteredHackathons = mockHackathons;

  if (status) {
    filteredHackathons = filteredHackathons.filter(h => h.status === status);
  }

  if (difficulty) {
    filteredHackathons = filteredHackathons.filter(h => h.difficulty === difficulty);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredHackathons = filteredHackathons.filter(h => 
      h.title.toLowerCase().includes(searchLower) ||
      h.description.toLowerCase().includes(searchLower) ||
      h.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  return NextResponse.json({
    success: true,
    data: filteredHackathons,
    total: filteredHackathons.length
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newHackathon = {
      id: Date.now().toString(),
      ...body,
      participants: 0,
      status: 'upcoming' as const
    };

    return NextResponse.json({
      success: true,
      data: newHackathon,
      message: 'Hackathon created successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Invalid request body'
    }, { status: 400 });
  }
}
