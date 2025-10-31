import { NextResponse } from 'next/server';
import { web3formsKey } from './constants';

export async function POST(req: Request) {
  const  body = await req.json();

  const Finalbody = {...body, access_key: process.env.NEXT_PUBLIC_WEB3_KEY || web3formsKey};

  console.log("Received contact form submission:", body);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(Finalbody),
  });
  
  if(response?.ok) {
      const data = await response.json();
      return NextResponse.json(data);
  } else {
      const data = await response.json();
     return NextResponse.json(data, { status: 500 });
  }
}
