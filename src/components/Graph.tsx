// @ts-nocheck
import  { useEffect, useState } from "react";
import axios from "axios";
// @ts-ignore
 import CanvasJSReact from "@canvasjs/react-charts";

const FinancialGraph = () => {

    const [userTransactions, setUserTransactions] = useState("")
    const baseURLTransactions = "https://fe-task-api.mainstack.io/transactions"

    const CanvasJSChart = CanvasJSReact.CanvasJSChart;


    useEffect(() => {
        async function fetchUserTransactions() {
            try {
                const response = await axios.get(baseURLTransactions);
                setUserTransactions(response.data);
                console.log(response.data);

                 response.data.forEach((transaction: { metadata: any; }) => {
                     const { metadata } = transaction;
                    if (metadata) {
                        if (metadata?.name) {
                            // console.log(metadata.name);
                            // console.log(transaction)
                        } else {
                            // console.log("Name is undefined");
                        }

                        if (metadata?.product_name) {
                            // console.log(metadata?.product_name);
                        } else {
                            // console.log("Product Name is undefined");
                        }
                    } else {
                        // console.log("Metadata is undefined");
                    }
                });
            } catch (error: any) {
                // console.error("Error fetching wallet information:", error.message);
            }
        }

        fetchUserTransactions();
    }, []);

    const options = {
        animationEnabled: true,
        axisX: {
            valueFormatString: " MMM DD, YYYY",


        },
        axisY: {
            lineThickness: 0,
            visible:false,
            title:"",
            valueFormatString: " ",



        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "DD MMM YYYY",
            type: "spline",
            dataPoints: Array.isArray(userTransactions) ? (
                userTransactions.map(transaction => ({
                    x: new Date(transaction.date),
                    y: transaction.amount
                }))
            ) : (
                []
            )
        }]
    };

    return (
        <>

            <div>
                <CanvasJSChart options = {options}
                />
            </div>
        </>
    )
};

export default FinancialGraph;
