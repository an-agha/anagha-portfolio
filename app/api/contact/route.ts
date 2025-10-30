import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...body,
      access_key: process.env.NEXT_PUBLIC_WEB3_KEY,
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
