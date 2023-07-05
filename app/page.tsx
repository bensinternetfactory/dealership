import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

const pages = [
	{
		name: "Overview",
		href: "#",
		current: false,
	},
	{
		name: "Trucks",
		href: "#",
		current: true,
	},
	{
		name: "Trailers",
		href: "#",
		current: true,
	},
];

export default function Home() {
	return (
		<main className="min-h-screen bg-gray-100 ">
			<div className="container p-6 outline outline-red-500">
				<div className="flex">
					<Menubar>
						<MenubarMenu>
							<MenubarTrigger>
								<Link href="/dashboard">Overview</Link>
							</MenubarTrigger>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Trucks</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>View All</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>New Listing</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Trailers</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>View All</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>New Listing</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</div>
			</div>
			<div>2</div>
			<div>3</div>
		</main>
	);
}
