export const HeaderSection = () =>{
    return (
        <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg">
            <div className="container">
                <div className="flex justify-between items-center h-24">
                    {/* LOGO */}
                    <div>
                    <img src="/assets/images/blockainLogo.png" alt="Logo" className="w-24" />   
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="bg-stone-700/50 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide relative">
                            <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-stone-700"></div>
                            <span>Get Started</span>
                        </button>
                         {/* Hamburger MENU */}
                        <div className="size-10 relative">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
                            </div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
                            </div>              
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}