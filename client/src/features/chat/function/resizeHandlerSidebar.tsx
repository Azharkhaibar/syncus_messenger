import { useRef, useEffect } from "react";

interface ResizeHandleProps {
    onResize: (newWidth: number) => void;
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({ onResize }) => {
    const isResizing = useRef(false);

    const startResize = () => {
        isResizing.current = true;
    };

    const stopResize = () => {
        isResizing.current = false;
    };

    const handleResize = (e: MouseEvent) => {
        if (isResizing.current) {
            const newWidth = e.clientX;
            if (newWidth > 200 && newWidth < 500) {
                onResize(newWidth);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleResize);
        window.addEventListener("mouseup", stopResize);
        return () => {
            window.removeEventListener("mousemove", handleResize);
            window.removeEventListener("mouseup", stopResize);
        };
    }, []);

    return (
        <div
            onMouseDown={startResize}
            className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-300"
        />
    );
};

export default ResizeHandle;
