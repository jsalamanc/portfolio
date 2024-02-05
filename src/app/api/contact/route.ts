import { NextResponse } from 'next/server';

export async function POST(req: Request, res: any) {
  const data = await req.json();
  try {
    const response = await fetch(
      'https://jb9f4yrow0.execute-api.us-east-2.amazonaws.com/production/sendmail',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
