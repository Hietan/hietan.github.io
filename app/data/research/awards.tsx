import awards from "@/app/data/json/research/awards.json";
import {buildAwardsTable} from "@/app/lib/tableBuilders/research";

const dataAwards = buildAwardsTable(awards);

export default dataAwards;
