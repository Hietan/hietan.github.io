import works from "@/app/data/json/research/works.json";

const sortedWorks = [...works].sort((a, b) => b.date.localeCompare(a.date));

export default sortedWorks;
