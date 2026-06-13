import {publicationJson} from "@/app/lib/machineReadableResearch";

export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      schemaVersion: "1.0",
      generatedFrom: "app/data/json/research/papers.json",
      publications: publicationJson,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
