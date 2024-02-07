const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

export const Detail = () => {
  tg.BackButton.show();

  return "Detail";
};
