interface SidebarItemProps {
    name: string;
    age: number;
    country: string;
    gender: string;
    flag: string;
    time: string;
}

const SidebarItem = ({ name, age, country, gender, time }: SidebarItemProps) => {
    return (
        <div className="flex items-center justify-between px-3 py-2 border-b hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center space-x-2">
                <img
                    src="/avatar.png"
                    alt={name}
                    className="w-8 h-8 rounded-full"
                />
                <div>
                    <p className="text-sm font-medium">
                        {name} <span className="text-xs">{gender}</span>
                    </p>
                    <p className="text-xs text-gray-500">{age}Yrs, {country}</p>
                </div>
            </div>
            <span className="text-xs text-gray-400">{time}</span>
        </div>
    );
};

export default SidebarItem;
