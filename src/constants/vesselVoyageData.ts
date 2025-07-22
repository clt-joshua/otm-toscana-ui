import { faker } from "@faker-js/faker";
import type {
	SimpleTableProps,
	VesselScheduleListTableProps,
} from "../pages/vesselVoyage/VesselVoyageTypes";

export const SIMPLE_TABLE_DATA: SimpleTableProps[] = [
	{
		item: "Item 01",
		value: "Data",
		description: "Data",
	},
	{
		item: "Item 02",
		value: "Data",
		description: "Data",
	},
	{
		item: "Item 03",
		value: "Data",
		description: "Data",
	},
	{
		item: "Item 04",
		value: "Data",
		description: "Data",
	},
];

export const VESSEL_SCHEDULE_LIST_TABLE_DATA: VesselScheduleListTableProps[] =
	Array.from({ length: 20 }, () => ({
		vessel: "CLVB",
		voyage: "OLSC-0001",
		oprVoyage: "TST01 / TST01",
		opr: faker.helpers.arrayElement(["MOL", "MSC", "HSD", "MSK"]),
		vesselName: "Snows Cargo",
		ata: faker.date.recent(),
		atb: faker.date.recent(),
		atd: faker.date.recent(),
		callingStatus: faker.helpers.arrayElement(["BERTHING", "PLANNED", "READY"]),
		berth: "BK1",
		alongside: "Starboard",
		head: 320,
		bittNumber: "B5-3-B5-19",
		diversion: "N",
		cancel: false,
		close: false,
		workQuantity: "0/0/0",
	}));
