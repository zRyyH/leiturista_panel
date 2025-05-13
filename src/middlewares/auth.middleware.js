import { NextResponse } from 'next/server';

export function authMiddleware(req) {
    const token = req.cookies.get('access_token')?.value;

    const { pathname } = req.nextUrl;

    if (pathname.startsWith('/login') || pathname.startsWith('/dashboard')) {
        if (token) {
            if (pathname.startsWith('/login')) {
                return NextResponse.redirect(new URL('/dashboard', req.url));
            }
            return NextResponse.next();
        } else {
            if (pathname.startsWith('/dashboard')) {
                return NextResponse.redirect(new URL('/login', req.url));
            }
            return NextResponse.next();
        }
    }

    return NextResponse.next();
}
