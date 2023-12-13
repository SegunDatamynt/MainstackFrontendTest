import  { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import IconButton from "../assets/iconbutton.png"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DropDwnTransactionType from "./DropDwnTransactionType.tsx"
import DropDownTransactionStatus from "./TransactionStatus.tsx";



function DropdownMenu (){
    const [menuOpen, setMenuOpen] = useState(false);

    const handleButtonClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCloseButtonClick = () => {
        setMenuOpen(false);
    };
    // @ts-ignore
    return <div  >

        <Menu as="div" className="relative inline-block text-left" >
            <div>
                <Menu.Button
                    onClick={handleButtonClick}
                    className="inline-flex w-full justify-center gap-x-2 rounded-full   px-3.5 py-2.5 bg-[#EFF1F6] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Filter
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                show={menuOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >

                <Menu.Items  style={{
                        position: "fixed",
                        top: "0",
                        right: "0",
                        backgroundColor: "#FFF",
                        border: "1px solid #CCC",
                        zIndex: 1000,
                        transition: "transform 0.6s ease-in-out",
                        transform: "translateY(5)",
                    }} className="absolute  right-0 z-10 mt-2 w-auto h-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div  className="py-1" >
                        <div className="justify-between flex p-4">
                        <p className="text-[24px] font-semibold">Filter</p>
                            <button onClick={handleCloseButtonClick}>
                                <img alt="Close Button" width="24px" height="24px" src={IconButton} />
                            </button>

                        </div>
                        <div>
                            <div className="grid grid-cols-4 mx-4 gap-2">
                                <div className="col-span-1 rounded-full border-2 text-center text-[14px] p-2"> Today</div>
                                <div className="col-span-1 rounded-full border-2 text-center text-[14px] p-2 "> Last 7 days</div>
                                <div className="col-span-1 rounded-full border-2 text-center text-[14px] p-2"> This month</div>
                                <div className="col-span-1 rounded-full border-2 text-center text-[13px] p-2"> Last 3 months</div>
                            </div>

                        </div>
                        <div className="p-2">
                            <p className="text-[16px] mx-2 p-2 font-semibold">Date Range</p>
                            <div className="grid grid-cols-2 p-2 gap-2">

                                <div className="col-span-1">
                                    <div className="col-span-1">
                                        <DatePicker
                                            className="rounded-md border-2 border-black bg-[#EFF1F6] p-2"
                                            value="December 13, 2023"
                                            onChange={() => {}}
                                        />
                                    </div>

                                </div>
                                <div className="col-span-1">
                                    <DatePicker
                                        className="rounded-md border-2 border-black bg-[#EFF1F6] p-2"
                                        value="December 13, 2023"
                                        onChange={() => {}}
                                    />

                                </div>

                            </div>

                        </div>
                        <div className="mx-4">
                            <p className="my-2 font-semibold">Transaction Type</p>
                            <div>
                                <DropDwnTransactionType/>
                            </div>
                        </div>
                        <div className="mx-4">
                            <p className="my-2 font-semibold">Transaction Status</p>
                            <div>
                                <DropDownTransactionStatus/>
                            </div>
                        </div>

                    </div>
                    <div className="mt-[8em] mx-4 flex justify-between ">
                        <button
                            type="button"
                            className="bg-[#EFF1F6] text-black my-4 text-[16px] p-2 font-Degular rounded-full flex"
                        >
                            <span className="mx-10 text-[16px]">Clear</span>

                        </button>
                        <button
                            type="button"
                            className="bg-[#EFF1F6] text-black my-4 text-[16px] p-2 font-Degular rounded-full flex"
                        >
                            <span className="mx-10 text-[16px]">Apply</span>
                        </button>

                    </div>

                </Menu.Items>

            </Transition>

        </Menu>
    </div>
}

export default DropdownMenu;