// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {nameRegex} from "@/lib/name";

type GreetingRequest = {
  name: string
}

type Greeting = {
  greeting: string
}

type Error = {
  message: string
}

export function greet(request: GreetingRequest) {
  const prob = Math.random();
  if (prob <= 0.1) {
    return `How's it going, ${request.name}?`;
  } else if (prob <= 0.9) {
    return `Hello ${request.name}!`;
  } else {
    return `Hey ${request.name}!`;
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Greeting | Error>
) {
  try {
    const request = JSON.parse(req.body);
    if (!request.name || !request.name.match(nameRegex)) {
      res.status(400).json({message: `Invalid name: ${request.name}`});
    }
    res.status(200).json({greeting: greet(request)});
  } catch (err) {
    res.status(400).json({message: "Invalid JSON"});
  }
}
