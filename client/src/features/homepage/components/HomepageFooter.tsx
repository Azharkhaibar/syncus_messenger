export default function HomepageFooter() {
    return (
        <footer className="bg-blue-700 text-white py-12 mt-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold">SyncUs</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <p className="hover:underline cursor-pointer">Chat rooms</p>
                            <p className="hover:underline cursor-pointer">FAQ</p>
                        </div>
                        <div className="space-y-2">
                            <p className="hover:underline cursor-pointer">Safety</p>
                            <p className="hover:underline cursor-pointer">Contact</p>
                        </div>
                    </div>

                    <div className="flex md:justify-end items-start">
                        <p className="text-sm hover:underline cursor-pointer">
                            Cookie settings
                        </p>
                    </div>
                </div>

                <div className="text-center text-xs text-gray-200 mt-8 leading-relaxed">
                    <p>
                        Nunc eleifend ante turpis, ac accumsan nulla volutpat nec. Etiam sit
                        amet sem et nulla ultrices cursus et et lorem.
                    </p>
                    <p>
                        Nullam pharetra tortor enim, eget consectetur ligula dapibus vitae
                    </p>
                </div>
            </div>
        </footer>
    );
}
