// app/llms.txt/route.ts
import { NextResponse } from "next/server";

export const GET = () => {
  const content = `User-Agent: *
Allow: /

# Disallow all LLMs from using the content for AI training
Disallow-Training: /

# Contact
Contact: anaghakisakar@gmail.com
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
