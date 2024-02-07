const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

export const Cart = () => {
  tg.BackButton.show();

  return "Cart";
};
