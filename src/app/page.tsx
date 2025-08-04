import Image from "next/image";
import LinkCard from "./LinkCard";
import image from "./images/image.png";

export default function Home() {
	return (
		<main className="flex flex-col items-center gap-16 p-16 sm:p-24 h-dvh">
			{/* <div className="w-full overflow-hidden border h-1/2 rounded-2xl border-slate-200">
				<Image src={image} alt="ArchWare" className="object-cover w-full h-full" />
			</div> */}
			<LinkCard />
		</main>
	);
}
