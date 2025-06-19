import Container from "@/components/Container";
import Image from "next/image";
import GithubImage from '@/public/github.png';
import timeFormatter from "@/utils/time-helper";
import Link from "next/link";
import {PersonData} from "@/data/person-data";

export default function Footer() {

    // md:mt-30 mt-20 pb-16
    return (
        <footer className="flex justify-center bg-gray-200/60 py-2 md:py-4 w-full h-20">
            <Container className="flex w-full pt-4 flex-col md:flex-row justify-between text-sm mx-4 md:px-[5%]">
                <div className="w-full px-4 flex justify-center">

                    <div className="flex flex-col gap-2 mx-auto">
                        <div className="flex gap-2  text-sm text-gray-500">
                            <span>&copy; {timeFormatter(new Date(), 'yyyy')} 网站已开源</span>

                            <Link href={PersonData.Github} className="my-auto cursor-pointer">
                                <Image className="w-4 h-4 my-auto" src={GithubImage} alt="github icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
