import {generateResearchMarkdown} from "@/app/lib/machineReadableResearch";

export const dynamic = "force-static";

export function GET() {
  return new Response(generateResearchMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
