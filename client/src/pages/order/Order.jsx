import FoodList from "../../components/order/FoodList";
import Price from "../../components/order/Price";

export default function Order() {
    return (
        <div className="order">
            <FoodList />
            <Price />
            <div className="order-btn"><button>Sipariş Oluştur</button></div>
        </div>
    )
}
