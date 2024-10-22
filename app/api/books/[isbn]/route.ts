// app/api/books/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleBooksAPIResponse } from "../../../../types/global";

export async function GET(
    request: NextRequest,
    { params }: { params: { isbn: string } }
) {
    const isbn = params.isbn;
    
    if (!isbn) {
        return NextResponse.json({ error: 'Missing ISBN' }, { status: 400 });
    }

    const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${API_KEY}`;

    try {
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`Google API returned status: ${res.status}`);
        }
        
        const data: GoogleBooksAPIResponse = await res.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching from Google Books API:', error);
        return NextResponse.json(
            { error: 'Failed to fetch data from Google Books API' }, 
            { status: 500 }
        );
    }
}
