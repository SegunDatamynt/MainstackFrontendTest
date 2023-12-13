
import DownloadMore from "../assets/download.png"
import Callrecieved from "../assets/call_received.png"
import {useEffect, useState} from "react";
import axios from "axios";
import Dropdown from "./Dropdown.tsx";

export default function TransactionDetails(){

    const [userTransactions, setUserTransactions] = useState("")
    const baseURLTransactions ="https://fe-task-api.mainstack.io/transactions "

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    useEffect(() => {
        async function fetchUserTransactions() {
            try {
                const response = await axios.get(baseURLTransactions);
                setUserTransactions(response.data);
                console.log(response.data);

                 response.data.forEach((transaction:any) => {
                     const { metadata } = transaction;
                    if (metadata) {
                        if (metadata.name) {
                            // console.log(metadata.name);
                        } else {
                            // console.log("Name is undefined");
                        }

                        if (metadata.product_name) {
                            // console.log(metadata.product_name);
                        } else {
                            // console.log("Product Name is undefined");
                        }
                    } else {
                        // console.log("Metadata is undefined");
                    }
                });
            } catch (error) {
                // console.error("Error fetching wallet information:", error.message);
            }
        }

        fetchUserTransactions();
    }, []);

    return (
        <>
        <div className="grid grid-cols-3 py-12">

            <div className="col-span-2">
                <span className="p-8 text-[24px] font-semibold">{userTransactions.length} Transactions</span>
                <p className=" px-8 text-[14px] text-gray-400">
                    Your transactions for the last 7 days
                </p>
                <div className="p-6">
                </div>

            </div>

            <div className="">
                <div className="flex gap-2 ml-3" >
                    <div >
                        <button
                            onClick={toggleDropdown}
                            type="button"
                         >

                            <span className=" text-[16px]">{<Dropdown/>}</span>


                        </button>

                    </div>
                    <div>
                        <button
                            type="button"
                            className="bg-[#EFF1F6] text-black text-[16px] p-2 font-Degular rounded-full flex"
                        >
                            <span className="mx-2 text-[16px]">Export list</span>
                            <img
                                className="h-[11.96px] w-[11.67px] mt-1 mx-2"
                                src={DownloadMore}
                                alt=""
                            />

                        </button>
                    </div>

                </div>

            </div>


        </div>

            <hr className="h-10 w-auto mx-[3em]"/>
            <div className="grid grid-cols-4">

                <div className="col-span-3">

                {Array.isArray(userTransactions) ? (
                    userTransactions.map((transaction, index) => (
                        <div key={index} className="flex gap-4 py-2 px-8 col-span-3">
                            {transaction.metadata && (
                                <div className="bg-[#E3FCF2] rounded-full p-4">
                                    <circle width="48px" height="48px">
                                        <img
                                            className="h-[20px] w-[20px]"
                                            src={Callrecieved}
                                            alt=""
                                        />
                                    </circle>
                                </div>
                            )}
                            <div className="">
                                {transaction.metadata && (
                                    <span className="">
                                      {transaction.metadata.product_name || "No Product Description"}
                                    </span>
                                                    )}
                                <br />
                                {transaction.metadata && transaction.metadata.name && (
                                    <span className="text-gray-400">{transaction.metadata.name} </span>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No transactions or invalid response format</p>
                )}
                </div>

                <div>
                    {Array.isArray(userTransactions) ? (
                        userTransactions.map((transaction, index) => (
                            <div key={index} className="my-4">
                                {transaction.metadata && transaction.metadata.name && (
                                    <div>
            <span className="text-16px font-semibold">
              {`USD ${transaction.amount || "No Amount"}`}
            </span>
                                    </div>
                                )}
                                {transaction.metadata && transaction.metadata.name && (
                                    <span className="text-[14px] text-gray-400">
            {transaction.date || "No Date"}
          </span>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No transactions or invalid response format</p>
                    )}
                </div>


            </div>
        </>

    )
}




