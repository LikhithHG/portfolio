"use client"; // Important: This component needs browser interaction

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiMonitor, FiCheck } from 'react-icons/fi';

export const ThemeSwitcher = () => {

    // The Problem: Server vs. Client Mismatch
    // Server Render: Your Next.js page is first rendered on the server. The server has no way of knowing your personal theme preference (light, dark, or system). It just renders a default version of the ThemeSwitcher button. Let's say it renders the Moon icon 🌙 by default.
    // Client Render (Hydration): The server sends this HTML (with the 🌙) to your browser. The browser then loads the JavaScript. The useTheme() hook runs in the browser, checks your computer's settings, and discovers your theme is actually "dark". It says, "I should be rendering the Sun icon ☀️!"
    // The Mismatch: React compares the HTML from the server (🌙) with what it wants to render on the client (☀️). They don't match. This is a "hydration mismatch," and Next.js will show a warning in your console.
    
    //The Solution: The mounted State
    // The const [mounted, setMounted] = useState(false); line, combined with useEffect and an if check, solves this by forcing a two-step render in the browser.
    // Here is the full pattern:

    // Step 1: const [mounted, setMounted] = useState(false);

    // A new state variable mounted is created with an initial value of false.

    // Step 2: useEffect(() => setMounted(true), []);

    // This useEffect hook runs only on the client after the component has "mounted" (finished its first render).

    // Its only job is to immediately set the mounted state to true.

    // Step 3: if (!mounted) return null;

    // This is the safety check.

    // On the server: mounted is false, so the component returns null (renders nothing).

    // On the first client render: mounted is still false (because the useEffect hasn't run yet), so the component also returns null.

    // Result: The server sent null, and the client's first render was null. They match perfectly! No hydration error.

    // Step 4: The Second Client Render

    // Immediately after that first null render, the useEffect from Step 2 runs, setting mounted to true.

    // This triggers a re-render.

    // This time, !mounted is false, so the if check is skipped.

    // The component proceeds to render the correct button based on the now-known theme from useTheme().

    // In short: mounted is a piece of state used to intentionally render nothing on the first pass, guaranteeing a match with the server and preventing a hydration error.
    const [mounted, setMounted] = useState(false);

    //theme: Is what the user selected (e.g., 'light', 'dark', or 'system').
    //resolvedTheme: Is what the browser is actually displaying. If the user selected 'system' and their OS is in dark mode, resolvedTheme will be 'dark'.
    const { theme, setTheme, resolvedTheme } = useTheme();

    // Popover state + ref for outside click
    //open: This new state variable simply tracks if the dropdown menu is open (true) or closed (false).
    const [open, setOpen] = useState(false);

    // This creates an empty "box" that we will later attach to the component's main <div>. This lets us ask, "Did the user click inside this box?"
    //ref is a useRef hook attached to the main <div> of your ThemeSwitcher component. 
    // ref.current gives you direct access to that <div> element in the browser's DOM.
    const ref = useRef<HTMLDivElement | null>(null);


    //This is Part 1 of the hydration fix. useEffect only runs on the client.

    //The empty array [] means "run this only once, after the component mounts."

    //When the component mounts in the browser, it immediately sets mounted to true.
    useEffect(() => setMounted(true), []);
    
    //This useEffect is purely for managing the popover's behavior. It's not related to the theme itself.
    useEffect(() => {

        // This effect runs when the component mounts and unmounts.
        function onDocClick(e: MouseEvent) {
            //This condition checks if ref.current is null or undefined. 
            // This can happen if the component has unmounted (disappeared from the screen) but the event listener is just about to be cleaned up.
            //This immediately stops the function (onDocClick) from running any further.
            if (!ref.current) 
                return;
            // onDocClick: Checks if you clicked somewhere on the page (document). 
            // If the element you clicked is not inside the component (!ref.current.contains(...)), it closes the menu.
            if (!ref.current.contains(e.target as Node)) 
                setOpen(false);
        }

        // onKey: Closes the menu if you press the "Escape" key.
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') 
                setOpen(false);
        }

        // It adds event listeners only when the menu is open.
        if (open) {
            document.addEventListener('mousedown', onDocClick);
            document.addEventListener('keydown', onKey);
        }

        // return () => ...: This is a cleanup function. It removes the event listeners when the menu closes so they don't keep running.
        return () => {
            document.removeEventListener('mousedown', onDocClick);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    //In the first render (both server and initial client), mounted is false, so the component returns null and renders nothing.
    if (!mounted) 
        return null;

    // Effective applied theme when system is selected
    // If your selected theme is 'light' or 'dark', effective is just 'light' or 'dark'.
    // If your selected theme is 'system', effective becomes the resolvedTheme (e.g., 'dark' if your OS is dark).
    const effective = theme === 'system' ? resolvedTheme : theme;

    const baseBtn = 'p-2 rounded-md border transition-colors flex items-center justify-center';
    const darkBtn = 'bg-white border-white text-yellow-500';
    const lightBtn = 'bg-[var(--foreground)] border-[var(--border)] text-white';

    return (
        // Now, ref.current points to this div
        <div className="relative" ref={ref}>
            <button
                // e.stopPropagation();: This is very important. It stops the click event from "bubbling up" to the document. If you didn't have this, clicking the button would also trigger your onDocClick listener, which would immediately close the menu you just opened.
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen((v) => !v);
                }}
                className={`${baseBtn} ${effective === 'dark' ? darkBtn : lightBtn} hover:opacity-90`}
                aria-haspopup="menu"
                aria-expanded={open}
                type="button"
            >
                {/* Show applied theme icon (sun/moon) so user sees the actual look when system is selected */}
                {effective === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-[var(--background)] border border-[var(--border)] rounded-md shadow-lg z-50">
                    <div className="py-1">
                        <button
                            className={`w-full text-left px-3 py-2 hover:bg-[var(--selected-background)] flex items-center justify-between gap-2 ${theme === 'system' ? 'font-semibold' : 'font-normal'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTheme('system');
                                setOpen(false);
                            }}
                        >
                            <span className="flex items-center gap-2">
                                <FiMonitor className="h-4 w-4" /> 
                                System
                            </span>
                            {theme === 'system' && <FiCheck className="h-4 w-4" />}
                        </button>

                        <button
                            className={`w-full text-left px-3 py-2 hover:bg-[var(--selected-background)] flex items-center justify-between gap-2 ${theme === 'light' ? 'font-semibold' : 'font-normal'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTheme('light');
                                setOpen(false);
                            }}
                        >
                            <span className="flex items-center gap-2">
                                <FiMoon className="h-4 w-4" /> 
                                Light
                            </span>
                            {theme === 'light' && <FiCheck className="h-4 w-4" />}
                        </button>

                        <button
                            className={`w-full text-left px-3 py-2 hover:bg-[var(--selected-background)] flex items-center justify-between gap-2 ${theme === 'dark' ? 'font-semibold' : 'font-normal'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTheme('dark');
                                setOpen(false);
                            }}
                        >
                            <span className="flex items-center gap-2">
                                <FiSun className="h-4 w-4" /> 
                                Dark
                            </span>
                            {theme === 'dark' && <FiCheck className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};