
import Info from "../assets/info.png"
import FinancialGraph from "../components/Graph.tsx"
import {useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "./Sidebar.tsx";

export default function Section1() {

    interface UserWallet {
        balance: string;
        ledger_balance: string;
        total_payout: string;
        total_revenue: string;
        pending_payout: string;
    }

    const baseURLWallet = "https://fe-task-api.mainstack.io/wallet";
    const [userWallet, setUserWallet] = useState<UserWallet | undefined>(undefined);


    useEffect(() => {
        async function fetchUserWallet(){
            try {
                const response = await axios.get(baseURLWallet);
                setUserWallet(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("error fetching wallet information:", (error as Error).message);
            }
        }
        fetchUserWallet();
    }, []);
    return (
        <div className="grid grid-cols-7 py-12">
            <div className="col-span-1 mx-6 p-4">
                <Sidebar/>
            </div>

            <div className="col-span-4">
                <span className="p-8 text-[14px] text-gray-400 ">Available Balance</span>
                <div className="flex p-2 gap-6">

                <div>
                    <div>
                        <p className="p-4 text-[30px] font-semibold">
                            USD {userWallet?.balance}
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        className="bg-black text-white text-[16px] p-4 font-Degular rounded-full"
                    >

                         <span className="mx-6 text-[16px]">Withdraw</span>

                    </button>
                </div>
                </div>
                <div className="p-6">
                    <FinancialGraph/>
                </div>

            </div>

            <div className=" col-span-2 ">
                <div className="grid-cols-2 flex gap-6">
                    <div className="col-span-1">
                        <div>
                          <span className="text-center text-[14px] text-gray-400">  Ledger Balance </span>
                        <p className="p-4 text-[28px] font-semibold">
                              USD {userWallet?.ledger_balance}
                             </p>

                    </div>
                        <div>
                            <span className="text-center text-[14px] text-gray-400">  Total Payout </span>
                            <p className="p-4 text-[28px] font-semibold">
                                USD {userWallet?.total_payout}
                            </p>

                        </div>
                        <div>
                            <span className="text-center text-[14px] text-gray-400"> Total Revenue </span>
                            <p className="p-4 text-[28px] font-semibold">
                                USD {userWallet?.total_revenue}
                            </p>

                        </div>
                        <div>
                            <span className="text-center text-[14px] text-gray-400">  Pending Payout</span>
                            <p className="p-4 text-[28px] font-semibold">
                                USD {userWallet?.pending_payout}
                            </p>

                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mx-6 my-2">
                        <img
                                 className="h-[15.83px] w-[15.83px] rounded-full"
                                   src={Info}
                                  alt=""
                              />
                        </div>
                        <div className="mx-6 my-[5em]">
                            <img
                                className="h-[15.83px] w-[15.83px] rounded-full"
                                src={Info}
                                alt=""
                            />
                        </div>
                        <div className="mx-6 my-[5em]">
                            <img
                                className="h-[15.83px] w-[15.83px] rounded-full"
                                src={Info}
                                alt=""
                            />
                        </div>
                        <div className="mx-6 my-[5em]">
                            <img
                                className="h-[15.83px] w-[15.83px] rounded-full"
                                src={Info}
                                alt=""
                            />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}
