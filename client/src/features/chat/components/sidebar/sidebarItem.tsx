import ReactCountryFlag from "react-country-flag";

interface SidebarItemProps {
    name: string;
    age: number;
    country: string;
    gender: React.ElementType;
    flag: string;
    compact?: boolean;
    time: string;
}

const SidebarItem = ({
    name,
    age,
    country,
    gender: GenderIcon,
    flag,
    time,
}: SidebarItemProps) => {
    return (
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 hover:bg-gray-50 hover:scale-[1.01] transition-all duration-200 cursor-pointer">
            {/* Left side */}
            <div className="flex items-center space-x-2">
                <img
                    src="/avatar.png"
                    alt={name}
                    className="w-8 h-8 rounded-full object-cover shadow-sm"
                />
                <div className="leading-tight">
                    <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-gray-800 flex items-center">
                            {name}
                            <GenderIcon size={14} className="ml-1 text-gray-500" />
                        </span>
                        <ReactCountryFlag
                            countryCode={flag}
                            svg
                            style={{
                                width: "0.9em",
                                height: "0.9em",
                                borderRadius: "2px",
                            }}
                            title={flag}
                        />
                    </div>
                    <span className="text-xs text-gray-500">
                        {age} · {country}
                    </span>
                </div>
            </div>

            {/* Right side */}
            <span className="text-[11px] text-gray-400">{time}</span>
        </div>
    );
};

export default SidebarItem;
