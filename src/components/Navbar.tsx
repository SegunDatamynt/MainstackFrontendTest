import {Fragment, useState, useEffect} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import axios from "axios"
import MainstackLogo from "../assets/mainstack-logo.png"
import HomeIcon from "../assets/home.png"
import Analytics from "../assets/insert_chart.png"
import Revenue from "../assets/payments.png"
import CRM from "../assets/group.png"
import APPS from "../assets/widgets.png"
import userIcon from "../assets/Frame39.png"
import MessageIcon from "../assets/messageIcon.png"
import BellIcons from "../assets/bellIconM.png"
import AVI from "../assets/avi.png"
import Settings from "../assets/setting.png"
import PurchaseHistory from "../assets/purchaseHistory.png"
import ReferEarn from "../assets/referEarn.png"
import Integrations from "../assets/system-integration.png"
import SwitchAccount from "../assets/swithcAccount.png"
import Logout from "../assets/logout.png"

const navigation = [
    { name: 'Home', href: '#', current: false, src: HomeIcon, alt: "Company Icons" },
    { name: 'Analytics', href: '#', current: false ,src: Analytics, alt: "Company Icons"},
    { name: 'Revenue', href: '#', current: true, src: Revenue, alt: "Company Icons" },
    { name: 'CRM', href: '#', current: false , src: CRM, alt: "Company Icons"},
    { name: 'APPS', href: '#', current: false, src: APPS, alt: "Company Icons" },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {

    interface UserInfo {
        first_name: string;
        last_name: string;
        email: string;
    }

    const BaseUrlUSer = "https://fe-task-api.mainstack.io/user"
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

    useEffect (()=>{
        async function fetchUserInfo(){
            try {
                const response = await axios.get(BaseUrlUSer);
                setUserInfo(response.data);
                console.log(response.data);

            } catch (error) {
                console.error("error fetching user details:", (error as Error).message);
            }
        }
        fetchUserInfo()
    },[]);

    return (
        <div className={"p-2"}>
        <Disclosure as="nav" className="lg:rounded-full shadow-lg shadow-black-500/50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                        <div className="relative  h-16 items-center justify-between grid grid-cols-5">

                            <div className="col-span-1">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src={MainstackLogo}
                                    alt="Your Company"
                                />
                            </div>

                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            </div>

                            <div className="flex flex-1 col-span-3 items-center justify-center sm:items-stretch sm:justify-start">

                                <div className="hidden sm:ml-6 sm:block ">
                                    <div className="flex space-x-2 gap-4">

                                        {navigation.map((item) => (
                                            <>
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-300 hover:text-white',
                                                    'rounded-full  text-sm font-family:Degular font-[16px] flex  gap-1 p-2'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >

                                                <img alt="icons" src={item.src} className="h-[13.67px] w-[12.38px] mt-1 "/>

                                                {item.name}

                                            </a>

                                            </>

                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute col-span-1 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <img
                                        className="h-[30px] w-[30px] rounded-full"
                                        src={BellIcons}
                                        alt=""
                                    />
                                </button>
                                <button
                                    type="button"
                                    className="relative p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <img
                                        className="h-[30px] w-[30px] rounded-full"
                                        src={MessageIcon}
                                        alt=""
                                    />
                                </button>

                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex  founded-full   text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-[40px] w-[81px] rounded-full"
                                                src={userIcon}
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>

                                                {({ active }) => (
                                                    <>
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', '  px-4 py-2 text-sm  text-gray-700 gap-2 flex')}
                                                    >
                                                        <img
                                                            className="h-[30px] w-[30px] rounded-full bg-black "
                                                            src={AVI}
                                                            alt=""
                                                        />
                                                        <div className="">
                                                            {userInfo ? (
                                                                <>
                                                                    <span>{userInfo.first_name} {userInfo.last_name}</span> <br/>
                                                                    <span className={"text-[10px] font-semibold"}>{userInfo.email}</span>
                                                                </>
                                                            ) : (
                                                                <span>User information not available</span>
                                                            )}

                                                        </div>

                                                    </a>

                                                    </>
                                                )}

                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', ' gap-2 block px-4 py-2 text-sm text-gray-700 flex')}
                                                    >
                                                        <img
                                                            className="h-[15.83px] w-[15.83px] rounded-full "
                                                            src={Settings}
                                                            alt=""
                                                        />
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', ' gap-2 block px-4 py-2 text-sm text-gray-700 flex')}
                                                >
                                                        <img
                                                            className="h-[15.83px] w-[15.83px] rounded-full "
                                                            src={PurchaseHistory}
                                                            alt=""
                                                        />
                                                    Purchase History
                                                </a>
                                            )}
                                        </Menu.Item>
                                            <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', ' gap-2 block px-4 py-2 text-sm text-gray-700 flex')}
                                                >
                                                    <img
                                                        className="h-[15.83px] w-[15.83px] rounded-full "
                                                        src={ReferEarn}
                                                        alt=""
                                                    />
                                                    Refer and Earn
                                                </a>
                                            )}
                                        </Menu.Item>
                                            <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', ' gap-2 block px-4 py-2 text-sm text-gray-700 flex')}
                                                >
                                                    <img
                                                        className="h-[15.83px] w-[15.83px] rounded-full "
                                                        src={Integrations}
                                                        alt=""
                                                    />
                                                    Integrations
                                                </a>
                                            )}
                                        </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', ' gap-2 block px-4 py-2 text-sm text-gray-700 flex')}
                                                    >
                                                        <img
                                                            className="h-[15.83px] w-[15.83px] rounded-full "
                                                            src={SwitchAccount}
                                                            alt=""
                                                        />
                                                        Switch Accounts
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', ' gap-2 block px-4 py-2 text-sm text-gray-700 flex')}
                                                    >
                                                        <img
                                                            className="h-[15.83px] w-[15.83px] rounded-full "
                                                            src={Logout}
                                                            alt=""
                                                        />
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>

                                    </Transition>
                                </Menu>


                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        </div>
            )
}
