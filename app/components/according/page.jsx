
"use client"

import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Accordion = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const dropdowns = [
        { id: 1, title: "Availability", content: "This is the content of dropdown 1." },
        { id: 2, title: "Price", content: "This is the content of dropdown 2." },
        { id: 3, title: "Metal Color", content: "This is the content of dropdown 3." },
        { id: 4, title: "Metal Color", content: "This is the content of dropdown 3." },
    ];

    return (
        <div className="w-full space-y-4">
            {dropdowns.map((dropdown) => (
                <div key={dropdown.id} className="border-t-2 border-slate-950">
                    <button
                        onClick={() => toggleDropdown(dropdown.id)}
                        className="flex justify-between items-center w-full p-3 text-slate-950 rounded-lg transition hover:shadow-lg"
                    >
                        <span className="text-goldMid">{dropdown.title}</span>
                        {openDropdown === dropdown.id ? (
                            <BiChevronUp size={20} />
                        ) : (
                            <BiChevronDown size={20} />
                        )}
                    </button>
                    {openDropdown === dropdown.id && (
                        <div className="mt-2 p-3 bg-goldDark rounded-lg shadow-md">
                            <p className="text-slate-950">{dropdown.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;