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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
						<Select>
							<SelectTrigger className="flex">
								<SelectValue placeholder="Select make..." />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
								<SelectItem value="system">System</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="flex flex-col gap-4 ">
						<label htmlFor="" className="text-base font-semibold leading-6 text-gray-900">
							Select truck model
						</label>
						<Select>
							<SelectTrigger className="flex">
								<SelectValue placeholder="Select model..." />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
								<SelectItem value="system">System</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div>select box here</div>
				</div>
			</form>
		</section>
	);
}
