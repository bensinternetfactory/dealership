"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Info, MoreHorizontal, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Truck = {
	id: string;
	price: number;
	stockNumber: string;
	year: string;
	make: string;
	model: string;
	datePosted: string;
};

export const columns: ColumnDef<Truck>[] = [
	{
		accessorKey: "stockNumber",
		header: "Stock #",
	},
	{
		accessorKey: "datePosted",
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Posted
					<ArrowUpDown className="w-4 h-4 ml-2" />
				</Button>
			);
		},
	},
	{
		accessorKey: "year",
		header: "Year",
	},
	{
		accessorKey: "make",
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Make
					<ArrowUpDown className="w-4 h-4 ml-2" />
				</Button>
			);
		},
	},
	{
		accessorKey: "model",
		header: "Model",
	},
	{
		accessorKey: "price",
		header: ({ column }) => {
			return (
				<div className="text-right">
					<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
						Price
						<ArrowUpDown className="w-4 h-4 ml-2" />
					</Button>
				</div>
			);
		},
		cell: ({ row }) => {
			const price = parseFloat(row.getValue("price"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(price);

			return <div className="font-medium text-right">{formatted}</div>;
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="w-8 h-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="w-4 h-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>Edit truck</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<AlertDialog>
								{/* FIX CSS ON THIS DELETE BUTTON */}
								<AlertDialogTrigger
									className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      ">
									{" "}
									Delete truck
								</AlertDialogTrigger>

								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
										<AlertDialogDescription>
											This action cannot be undone. This will permanently delete your account and remove your data from our servers.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>Cancel</AlertDialogCancel>
										<AlertDialogAction>Continue</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View truck data</DropdownMenuItem>
						<DropdownMenuItem>View truck listing</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
