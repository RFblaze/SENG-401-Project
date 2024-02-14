import Link from "next/link";
import { Button } from "./ui/button";

export default async function NavBar() {
    return (
        <div className="h-[60px] w-full bg-white flex justify-between items-center px-4 text-primary fixed border-b border-gray-200">
            <div>
                <h1 className="text-2xl font-bold">UTutor</h1>
            </div>
            <div>
                <Link href={"/"}>
                    <Button className="text-black" variant={"outline"}>Log In</Button>
                </Link>
            </div>
        </div>
    )
   
}