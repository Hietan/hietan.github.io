import publications from "@/app/data/json/research/publications.json";

const sortedPublications = [...publications].sort((a, b) => b.date.localeCompare(a.date));

export default sortedPublications;
