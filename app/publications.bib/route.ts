import {generatePublicationsBibTeX} from "@/app/lib/machineReadableResearch";

export const dynamic = "force-static";

export function GET() {
  return new Response(generatePublicationsBibTeX(), {
    headers: {
      "Content-Type": "application/x-bibtex; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
