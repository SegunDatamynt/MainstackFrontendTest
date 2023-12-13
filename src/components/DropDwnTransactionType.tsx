import { Fragment , useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes:any) {string:
    return classes.filter(Boolean).join(' ')
}

export default function DropDwnTransactionType() {
    const [storeTransactionsChecked, setStoreTransactionsChecked] = useState(false);
    const [getTippedChecked, setGetTippedChecked] = useState(false);
    const [withdrawalsChecked, setWithdrawalsChecked] = useState(false);
    const [chargebacksChecked, setChargebacksChecked] = useState(false);
    const [cashbacksChecked, setCashbacksChecked] = useState(false);
    const [referEarnChecked, setReferEarnChecked] = useState(false);

    return (
        <Menu as="div" className="relative w-[100%]  text-left">
            <div>
                <Menu.Button className="inline-flex bg-[#EFF1F6] w-full justify-center gap-x-1.5 rounded-md   px-3 py-2 text-[14px] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Store Transactions, Get Tipped, Withdrawals, Chargebacks
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                <Menu.Items className=" relative right-0 z-10 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className=" ">
                        <Menu.Item>

                            {({ active }) => (
                                <div className="flex p-4">
                                    <input type="checkbox" className="default:ring-2 ... " checked={storeTransactionsChecked}
                                           onChange={() => setStoreTransactionsChecked(!storeTransactionsChecked)} />
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 text-sm'
                                    )}
                                >
                                    Store Transactions
                                </a>
                                </div>

                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div className="flex p-4">
                                    <input type="checkbox" className="default:ring-2 ..."  checked={getTippedChecked}
                                           onChange={() => setGetTippedChecked(!getTippedChecked)}/>
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 text-sm'
                                        )}
                                    >
                                        Get Tipped
                                    </a>
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div className="flex p-4">
                                    <input type="checkbox" className="default:ring-2 ..." checked={withdrawalsChecked}
                                           onChange={() => setWithdrawalsChecked(!withdrawalsChecked)} />
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 text-sm'
                                        )}
                                    >
                                        Withdrawals
                                    </a>
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div className="flex p-4">
                                    <input type="checkbox" className="default:ring-2 ..." checked={chargebacksChecked}
                                           onChange={() => setChargebacksChecked(!chargebacksChecked)}/>
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 text-sm'
                                        )}
                                    >
                                        Chargebacks
                                    </a>
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div className="flex p-4">
                                    <input type="checkbox" className="default:ring-2 ..."  checked={cashbacksChecked}
                                           onChange={() => setCashbacksChecked(!cashbacksChecked)}/>
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 text-sm'
                                        )}
                                    >
                                        Cashbacks
                                    </a>
                                </div>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <div className="flex p-4">
                                        <input type="checkbox" className="default:ring-2 ..." checked={referEarnChecked}
                                               onChange={() => setReferEarnChecked(!referEarnChecked)} />
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4  text-sm'
                                            )}
                                        >
                                            Refer & Earn
                                        </a>
                                    </div>

                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
