import works from "@/app/data/json/research/works.json";
import {buildWorksTable} from "@/app/lib/tableBuilders/research";

const dataWorks = buildWorksTable(works);

export default dataWorks;
