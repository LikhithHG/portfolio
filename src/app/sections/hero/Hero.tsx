import Image from 'next/image';
import SocialLinks from '../../components/SocialLinks';
import AnimatedGreeting from './AnimatedGreetings';

export default function Hero() {
    const greetingText = "Hello";
    return (
        // This section is now full-screen on desktop (md:h-screen)
        // and auto-height on mobile
        <section 
            id = 'home'
            className="relative w-full h-auto md:h-screen flex items-center"
        >
        
            {/* 1. This is the Background Image */}
            {/* It is HIDDEN on mobile (hidden) and VISIBLE on desktop (md:block) */}
            <Image
                src="/images/hero-background.jpg" 
                alt="Background"
                fill
                className="object-cover object-right -z-10 hidden md:block" // Hides on mobile
                priority // Helps load this large image faster
            />

            {/* Gradient Overlay (Desktop Only) <-- ADD THIS DIV */}
            {/* single div will create the semi-transparent black gradient overlay on desktop screens, fading from left to right, placed just behind your text content but above the background image. */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent -z-10 hidden md:block"></div>

            {/* 2. This is the Content Wrapper */}
            {/* We use 'justify-center' to vertically center the text on desktop */}
            <div className="container mx-auto flex flex-col-reverse md:flex-col justify-center px-8 py-16 md:py-0">
            
                {/* --- Text Content --- */}
                {/* On desktop, we limit the width to 60% to match your example */}
                <div className="w-full md:w-2/3 text-center md:text-left">

                    {/* Greeting */}
                    <AnimatedGreeting />
                    {/* <div className="mb-2 h-8"> {/* Maintain height for spacing */}
                        {/* Apply script font and greeting color */}
                        {/* <div className="flex items-center justify-center md:justify-start gap-2 text-xl md:text-2xl font-script text-[var(--color-greeting)]">
                            {/* <GreetingIcon /> */}
                            {/* <span>{greetingText}</span>
                        </div>
                    </div> */}
            
                    {/* Name */}
                    {/* Apply Serif font and foreground color */}
                    <h1 className="text-3xl md:text-5xl font-semibold font-serif text-[var(--foreground)]">
                        {/* Apply Sans font to "I'm" */}
                        <span className="text-xl md:text-3xl text-gray-600 dark:text-[var(--foreground)] md:text-gray-200">
                            I'm{' '}
                        </span>
                        {/* Apply script font and highlight color to first name */}
                        <span className=" bg-gradient-to-br bg-clip-text text-transparent from-[#FFD700] to-[#20B2AA] md:tracking-wider">
                            Likhith Murthy
                        </span> 
                    </h1>
                    {/* Subtitle */}
                    {/* Apply Serif font and muted foreground color */}
                    <p className="text-lg md:text-2xl mt-4 font-serif md:font-semibold text-[var(--foreground-muted)] md:text-gray-300 opacity-90 md:opacity-95">
                        Software Developer driven by curiosity, innovation, and problem-solving
                    </p>
            
                    <SocialLinks />
                </div>

                {/* --- Profile Picture (Mobile Only) --- */}
                {/* 3. This div is now HIDDEN on desktop (md:hidden) */}
                <div className="w-full md:hidden mb-12 flex justify-center">
                    <Image
                        src="/images/profile.jpg" // Your circular profile pic
                        alt="A photo of Likhith"
                        width={256} // 256px
                        height={256} // 256px
                        className="rounded-full w-64 h-64 object-cover border-4 border-white dark:border-[var(--border)] shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}