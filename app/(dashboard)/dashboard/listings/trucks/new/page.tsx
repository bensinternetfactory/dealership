"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";
import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { RadioSelect } from "@/components/ui/radio-select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";

const frameworks = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
];

export default function NewTruck() {
	const options = [
		{ value: "sleeper", label: "Sleeper Cab", description: "List a sleeper cab for sale" },
		{ value: "daycab", label: "Day Cab", description: "List a day cab for sale" },
	];
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<section className="">
			<form action="" className="flex flex-col gap-6 ">
				<RadioSelect options={options} label="What kind of truck are you selling?" name="trucktype" defaultValue="sleeper" />
				<div className="flex flex-col grid-cols-3 gap-6 lg:grid ">
					{/* COMBO BOX 1 */}
					<div className="flex flex-col gap-4 ">
						<label htmlFor="" className="text-base font-semibold leading-6 text-gray-900">
							Select truck make
						</label>
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button variant="outline" role="combobox" aria-expanded={open} className="flex justify-between">
									{value ? frameworks.find((framework) => framework.value === value)?.label : "Select make..."}
									<ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-[200px] p-0">
								<Command>
									<CommandInput placeholder="Search framework..." />
									<CommandEmpty>No framework found.</CommandEmpty>
									<CommandGroup>
										{frameworks.map((framework) => (
											<CommandItem
												key={framework.value}
												onSelect={(currentValue) => {
													setValue(currentValue === value ? "" : currentValue);
													setOpen(false);
												}}>
												<Check className={cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")} />
												{framework.label}
											</CommandItem>
										))}
									</CommandGroup>
								</Command>
							</PopoverContent>
						</Popover>
					</div>
					<div>Select box here</div>
					<div>select box here</div>
				</div>
			</form>
		</section>
	);
}
