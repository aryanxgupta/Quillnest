import { systemPrompt } from "@/lib/constats";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export async function POST(req: Request) {
    const { prompt }: {prompt: string} = await req.json()
    console.log(prompt)
    const result = streamText({
        model: google('gemini-2.0-flash-001'), 
        system: systemPrompt, 
        prompt
    })

    return result.toDataStreamResponse()
    
}