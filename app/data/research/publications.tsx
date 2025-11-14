import publications from "@/app/data/json/research/publications.json";
import {buildPublicationsTable} from "@/app/lib/tableBuilders/research";

const dataPublications = buildPublicationsTable(publications);

export default dataPublications;
