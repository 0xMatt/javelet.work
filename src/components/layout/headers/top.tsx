import * as React from "react";
import {ThemeSelector} from "@/components/elements/theme-selector";
import TopMenu from "@/components/layout/top/menu";
import {NavigationSheet} from "@/components/layout/top/sheet";
import {Profile} from "@/components/layout/top/profile";

export default function HeaderTop({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex flex-col min-h-svh w-full bg-white dark:bg-zinc-950 relative border">
                <header
                    className="sticky  top-0 flex h-16 shrink-0 items-center gap-2 border-b border-b-white z-[100]">
                    <div
                        className="h-full flex items-center justify-between w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="md:hidden">
                            <NavigationSheet/>
                        </div>
                        <div className="flex items-center gap-4">
                            <TopMenu className="hidden md:block"/>
                        </div>
                        <div className="flex items-center gap-3">
                            <Profile/>
                            <ThemeSelector variant='toggle'/>
                        </div>
                    </div>
                </header>
                <main
                    className="bg-white dark:bg-zinc-950">
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        {children}
                    </div>
                </main>
            </div>
        </>

    )
}