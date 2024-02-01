import React, { useState } from 'react'
import orderCon from './Ordercontext';

export default function Orderstate(props) {
    const host = "https://ecommercemern-ivory.vercel.app"

    // Get  all list:
    const initialorders = []//for the intial lsit fetch
    const [orders, setOrders] = useState(initialorders);
    const getOrders = async () => {
        const response = await fetch(`${host}/api/order/allorders`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });

        var json = await response.json();
        // console.log(json)
        setOrders(json)



    }



    // Add a list:
    const addOrder = async (title, thumbnail, rate, price) => {
        let image = await thumbnail;
        let rating = await rate;
        const response = await fetch(`${host}/api/order/addorder`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                "title": title, "image": image,
                "rating": rating, "price": price
            })
        });

        const json = await response.json();
        if (json.success) {
            setOrders(orders.concat(json.order));
            alert("-----Added to the cart----")
        }
        else {
            alert("----Already in the cart----")
        }





    }

    // Del a list:
    const delOrder = async (id) => {
        const response = await fetch(`${host}/api/order/deleteorder/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const neworders = orders.filter((order) => { return order._id !== id })
        setOrders(neworders)

    }

    // Edit a list:
    const updateQuantity = async (title, quantity, id) => {
        // console.log("Puj gea ethe te")
        //API CALL:
        const response = await fetch(`${host}/api/order/updatequantity/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ quantity, title })
        });

        const json = response.json();

    }
    return (
        <>

            <orderCon.Provider value={{ orders, updateQuantity, getOrders, addOrder, delOrder }}>
                {props.children}
            </orderCon.Provider>

        </>
    )
}
