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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-6 ">
			<div className="space-y-0.5">
				<h1 className="text-2xl font-bold tracking-tight">Listings</h1>
				<p className="text-muted-foreground">Manage and post equipment listings.</p>
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
