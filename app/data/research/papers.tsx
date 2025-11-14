import papers from "@/app/data/json/research/papers.json";
import {buildPapersTable} from "@/app/lib/tableBuilders/research";

const dataPapers = buildPapersTable(papers);

export default dataPapers;
