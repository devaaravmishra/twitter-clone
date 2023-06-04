import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push("/")}
			className="rounded-full h-14 w-14 p-4 flex justify-center items-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition"
		>
			<BsTwitter color="white" size={28} />
		</div>
	);
};

export default SidebarLogo;