"use client";

import { Button } from "@/components/ui/button";
import { RadioSelect } from "@/components/ui/radio-select";
import { useRouter } from "next/navigation";
import { MoveRight } from "lucide-react";
import React from "react";

export default function NewListings() {
	const options = [
		{ value: "truck", label: "Truck", description: "List a new truck for sale" },
		{ value: "trailer", label: "Trailer", description: "List a new trailer for sale" },
	];

	const router = useRouter();
	const [selectedValue, setSelectedValue] = React.useState(options[0].value);

	const navigateToNewListing = () => {
		router.push(`/dashboard/listings/${selectedValue}s/new`);
	};

	return (
		<section className="flex flex-col gap-6 outline outline-cyan-900">
			<div className="flex flex-col gap-6 ">
				<RadioSelect
					options={options}
					label="What kind of equipment are you selling?"
					name="equipmenttype"
					defaultValue="truck"
					onValueChange={setSelectedValue}
				/>
			</div>
			<div className="flex justify-end">
				<Button className="" onClick={navigateToNewListing}>
					Continue
					<MoveRight className="pl-2" />
				</Button>
			</div>
		</section>
	);
}
