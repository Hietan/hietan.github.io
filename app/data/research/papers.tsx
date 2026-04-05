import papers from "@/app/data/json/research/papers.json";

const sortedPapers = [...papers].sort((a, b) => b.year - a.year || b.month - a.month);

export default sortedPapers;
