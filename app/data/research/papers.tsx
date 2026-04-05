import papers from "@/app/data/json/research/papers.json";
import {buildPapersTable} from "@/app/lib/tableBuilders/research";

const sortedPapers = [...papers].sort((a, b) => b.year - a.year || b.month - a.month);
const dataPapers = buildPapersTable(sortedPapers);

export default dataPapers;
