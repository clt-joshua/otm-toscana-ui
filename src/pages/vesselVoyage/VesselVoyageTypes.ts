export interface SimpleTableProps {
	item: string;
	value: string;
	description: string;
}

export interface VesselScheduleListTableProps {
	vessel: string;
	voyage: string;
	oprVoyage: string;
	opr: string;
	vesselName: string;
	ata: Date;
	atb: Date;
	atd: Date;
	callingStatus: string;
	berth: string;
	alongside: string;
	head: number;
	bittNumber: string;
	diversion: string;
	cancel: boolean;
	close: boolean;
	workQuantity: string;
}
