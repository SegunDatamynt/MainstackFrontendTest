// @ts-ignore
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
            gridDashType:"dot",
            gridThickness: -1
        },
        axisY: {
            lineThickness: 0,
            visible:false,
            title:"",
            valueFormatString: " ",
            gridDashType:"dot",
            gridThickness: -1
        },
        style:{
            color: "text-red-800"
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "DD MMM YYYY",
            markerType: "none",
            lineColor: "red",
            type: "spline",
            dataPoints: Array.isArray(userTransactions) ? (
                userTransactions
                    .filter(transaction => transaction.date && transaction.date.trim() !== "")
                    .map(transaction => ({
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

            <div >
                <CanvasJSChart className="" options = {options}
                />
            </div>
        </>
    )
};

export default FinancialGraph;
