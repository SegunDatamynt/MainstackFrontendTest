import { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import {
    HiArrowSmRight,
     HiFolder,
    HiCreditCard,
     HiTable,
 } from 'react-icons/hi';

function SideBar() {
    const [hoveredItem, setHoveredItem] = useState(null);

    // @ts-ignore
    // @ts-ignore
    return (
        <div className="my-16 rounded-3xl border-2 mx-10 p-6 shadow-2xl">
            <Sidebar aria-label="">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        {['Link in Bio', 'Store', 'Media Kit', 'Invoicing'].map((itemName) => (
                            <Sidebar.Item
                                key={itemName}
                                href="#"
                                icon={getIconForItem(itemName)}
                                onMouseEnter={() => {
                                    // @ts-ignore
                                    setHoveredItem(itemName);
                                }}
                                onMouseLeave={() => setHoveredItem(null)}
                                className="
                                <style>
                                    {`
                              .hover-text {
                                position: absolute;
                                top: 0;
                                left: 100%;
                                margin-left: 8px;
                                padding: 4px;
                                background-color: #333;
                                color: #fff;
                                border-radius: 4px;
                                white-space: nowrap;

                              }
                            `}
                                </style>"
                            >
                                {hoveredItem === itemName && <div className="hover-text bg-black text-white p-2">{itemName}</div>}
                            </Sidebar.Item>
                        ))}
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

        </div>
    );
}

 function getIconForItem(itemName: string) {
    switch (itemName) {
        case 'Link in Bio':
            return HiFolder;
        case 'Store':
            return HiCreditCard;
        case 'Media Kit':
            return HiArrowSmRight;
        case 'Invoicing':
            return HiTable;
        default:
            return null;
    }
}

export default SideBar;
