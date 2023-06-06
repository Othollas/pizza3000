import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import App from "./App";
import Order from "./components/Order"
import Paid from './components/Paid'
import CurrentOrder from "./components/CurrentOrder";
import { useSelector } from "react-redux";

const Root = () => {



    const orderid = useSelector(state => state.data.orderid)
    const orderids = orderid.map(order => order.id);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="*" element={<NotFound />} />
                {orderids.map(orderid => (
                    <Route key={orderid} exact path={`/order/${orderid}`} element={<Order />} />
                ))}
                <Route exact path="/currentOrder" element={<CurrentOrder />} />
                <Route exact path="/paid" element={<Paid />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root;