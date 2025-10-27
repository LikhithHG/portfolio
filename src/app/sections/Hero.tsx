import Image from 'next/image';
import SocialLinks from '../components/SocialLinks';

export default function Hero() {
    return (
        // This section is now full-screen on desktop (md:h-screen)
        // and auto-height on mobile
        <section className="relative w-full h-auto md:h-screen flex items-center">
        
            {/* 1. This is the Background Image */}
            {/* It is HIDDEN on mobile (hidden) and VISIBLE on desktop (md:block) */}
            <Image
                src="/images/hero-background.jpg" 
                alt="Background"
                fill
                className="object-cover -z-10 hidden md:block" // Hides on mobile
                priority // Helps load this large image faster
            />

            {/* 2. This is the Content Wrapper */}
            {/* We use 'justify-center' to vertically center the text on desktop */}
            <div className="container mx-auto flex flex-col-reverse md:flex-col justify-center px-8 py-16 md:py-0">
            
                {/* --- Text Content --- */}
                {/* On desktop, we limit the width to 60% to match your example */}
                <div className="w-full md:w-3/5 text-center md:text-left">
            
                    {/* Text colors now change for desktop */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 md:text-white">
                        Hi, I'm Likhith 
                    </h1>
                    <p className="text-lg md:text-xl mt-4 text-gray-700 md:text-gray-200">
                        Software Developer driven by curiosity, innovation, and problem-solving
                    </p>
            
                    <SocialLinks />
                </div>

                {/* --- Profile Picture (Mobile Only) --- */}
                {/* 3. This div is now HIDDEN on desktop (md:hidden) */}
                <div className="w-full md:hidden mt-12 flex justify-center">
                    <Image
                        src="/images/profile.jpg" // Your circular profile pic
                        alt="A photo of Likhith"
                        width={256} // 256px
                        height={256} // 256px
                        className="rounded-full w-64 h-64 object-cover border-4 border-gray-200 shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}