import { NextRequest, NextResponse } from 'next/server';
import { getHackathonById, mockHackathons } from '@/lib/mockData';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const hackathon = getHackathonById(params.id);

  if (!hackathon) {
    return NextResponse.json({
      success: false,
      message: 'Hackathon not found'
    }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    data: hackathon
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const hackathon = getHackathonById(params.id);

    if (!hackathon) {
      return NextResponse.json({
        success: false,
        message: 'Hackathon not found'
      }, { status: 404 });
    }

    const body = await request.json();
    
    const updatedHackathon = {
      ...hackathon,
      ...body,
      id: params.id
    };

    return NextResponse.json({
      success: true,
      data: updatedHackathon,
      message: 'Hackathon updated successfully'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Invalid request body'
    }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const hackathon = getHackathonById(params.id);

  if (!hackathon) {
    return NextResponse.json({
      success: false,
      message: 'Hackathon not found'
    }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    message: 'Hackathon deleted successfully'
  });
}
