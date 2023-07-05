import { Truck, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Truck[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			stockNumber: "Tk0002",
			datePosted: "06/23/23",
			year: "2019",
			make: "Kenworth",
			model: "T800",
			price: 62995,
		},
		{
			id: "728ed53f",
			stockNumber: "Tk0004",
			datePosted: "06/24/23",
			year: "2021",
			make: "Peterbilt",
			model: "567",
			price: 82995,
		},
		{
			id: "728ed53f",
			stockNumber: "Tk0005",
			datePosted: "06/25/23",
			year: "2022",
			make: "International",
			model: "LT",
			price: 83995,
		},
		{
			id: "728ed53f",
			stockNumber: "Tk0003",
			datePosted: "06/23/23",
			year: "2020",
			make: "Kenworth",
			model: "T800",
			price: 75995,
		},
	];
}

export default async function Trucks() {
	const data = await getData();
	// TODO: IF NO TRUCKS THEN GIVE OPTION TO LIST NEW TRUCK
	return (
		<section>
			<DataTable columns={columns} data={data} />
		</section>
	);
}
