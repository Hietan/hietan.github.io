import {generateLlmsText} from "@/app/lib/machineReadableResearch";

export const dynamic = "force-static";

export function GET() {
  return new Response(generateLlmsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
