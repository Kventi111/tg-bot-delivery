import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button/Button";
import { useCartStore } from "../../../store/cart";

export const TotalPrice = () => {
  const navigate = useNavigate();
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <Button size="lg" onClick={() => navigate("/cart")}>
      Корзина {totalPrice} ₽
    </Button>
  );
};
