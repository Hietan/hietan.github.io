import presentations from "@/app/data/json/research/presentations.json";
import {buildPresentationsTable} from "@/app/lib/tableBuilders/research";

const dataPresentations = buildPresentationsTable(presentations);

export default dataPresentations;
