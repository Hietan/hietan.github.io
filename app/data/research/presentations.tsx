import presentations from "@/app/data/json/research/presentations.json";

const sortedPresentations = [...presentations].sort((a, b) => b.year - a.year || b.month - a.month);

export default sortedPresentations;
