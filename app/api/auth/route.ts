import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, action } = body;

    if (!email || !password) {
      return NextResponse.json({
        success: false,
        message: 'Email and password are required'
      }, { status: 400 });
    }

    if (action === 'login') {
      if (email === 'admin@eduevent.com' && password === 'admin123') {
        return NextResponse.json({
          success: true,
          data: {
            user: {
              id: '1',
              email: 'admin@eduevent.com',
              name: 'Admin User',
              role: 'admin'
            },
            token: 'mock-jwt-token'
          },
          message: 'Login successful'
        });
      } else if (email === 'student@eduevent.com' && password === 'student123') {
        return NextResponse.json({
          success: true,
          data: {
            user: {
              id: '2',
              email: 'student@eduevent.com',
              name: 'Student User',
              role: 'student'
            },
            token: 'mock-jwt-token'
          },
          message: 'Login successful'
        });
      } else {
        return NextResponse.json({
          success: false,
          message: 'Invalid credentials'
        }, { status: 401 });
      }
    }

    if (action === 'register') {
      return NextResponse.json({
        success: true,
        data: {
          user: {
            id: Date.now().toString(),
            email,
            name: body.name || email,
            role: 'student'
          },
          token: 'mock-jwt-token'
        },
        message: 'Registration successful'
      }, { status: 201 });
    }

    return NextResponse.json({
      success: false,
      message: 'Invalid action'
    }, { status: 400 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Invalid request body'
    }, { status: 400 });
  }
}
