import Link from "next/link";
import "app/globals.css";

export const metadata = {
	title: "Dashboard",
	description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="">
				<header className="py-4 mb-6 border-b border-grey-200">
					<div className="container flex justify-between p-0">
						<div className="flex space-x-6 ">
							<Link href="/dashboard">Dashboard</Link>
							<Link href="/dashboard/listings">Listings</Link>
							<Link href="/dashboard/credit-package">Credit Package</Link>
						</div>
						<div>
							<Link href="#">Log out</Link>
						</div>
					</div>
				</header>
				<main className="container p-0 ">{children}</main>
			</body>
		</html>
	);
}
