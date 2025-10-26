import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center px-8 py-16 md:py-24">
      
            {/* --- Text Content --- */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Hi, I'm Likhith
                </h1>
                <p className="text-lg md:text-xl mt-4 text-gray-700">
                    A software engineer building modern, responsive,
                    and fast web applications.
                </p>
        
                {/* Buttons */}
                <div className="flex justify-center md:justify-start gap-4 mt-8">
                    <Link
                        href="/#projects"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                    >
                        My Projects
                    </Link>
                    <Link
                        href="/#contact"
                        className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* --- Image --- */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
                <Image
                    src="/images/profile.jpg" // This path points to 'public/images/profile.jpg'
                    alt="A photo of Likhith"
                    width={400} // The actual width of the image file
                    height={400} // The actual height of the image file
                    className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover"
                />
            </div>
        </section>
    );
}