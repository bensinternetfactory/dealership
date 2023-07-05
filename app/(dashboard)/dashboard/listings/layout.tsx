"use client";

import { Button } from "@/components/ui/button";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { PlusCircle, Infinity } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	const titles: { [key: string]: string } = {
		"/dashboard/listings": "Listings",
		"/dashboard/listings/trucks": "Trucks",
		"/dashboard/listings/trucks/new": "New Truck Listing",
		"/dashboard/listings/trailers": "Trailers",
		"/dashboard/listings/trailers/new": "New Trailer Listing",
	};

	const subtitles: { [key: string]: string } = {
		"/dashboard/listings": "Manage and post equipment listings.",
		"/dashboard/listings/trucks": "Manage and post truck listings.",
		"/dashboard/listings/trucks/new": "Post a new truck listing.",
		"/dashboard/listings/trailers": "Manage and post trailer listings.",
		"/dashboard/listings/trailers/new": "Post a new trailer listing.",
	};

	const currentTitle = titles[pathname] || "Default Title";
	const currentSubtitle = subtitles[pathname] || "Default Subtitle";

	return (
		<div className="flex flex-col gap-6 ">
			<div className="space-y-0.5">
				<h1 className="text-2xl font-bold tracking-tight">{currentTitle}</h1>
				<p className="text-muted-foreground">{currentSubtitle}</p>
			</div>
			<div className="flex justify-between p-0">
				<Menubar>
					<MenubarMenu>
						<MenubarTrigger>
							<Link href="/dashboard/listings">Overview</Link>
						</MenubarTrigger>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>Trucks</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								<Link href="/dashboard/listings/trucks">View All</Link>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>
								<Link href="/dashboard/listings/trucks/new">New Listing</Link>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>Trailers</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								<Link href="/dashboard/listings/trailers">View All</Link>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>
								<Link href="/dashboard/listings/trailers/new">New Listing</Link>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>
				<Button asChild>
					<Link href="/dashboard/listings/new">
						<PlusCircle className="mr-2" size={20}></PlusCircle>
						New Listing
					</Link>
				</Button>
			</div>
			{children}
		</div>
	);
}
