import { useState } from "react";
import { Button } from "../../components/button/Button";
import { Footer } from "../../components/layout/Footer";
import { ContentInner } from "../../components/layout/ContentInner";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((p) => (p += 1))}>+</Button>
      <Button onClick={() => setCount((p) => (p -= 1))}>-</Button>
      <div>{count}</div>
    </>
  );
}

export const TestPage = () => {
  return (
    <>
      <ContentInner>
        <Counter />
      </ContentInner>
      <Footer>
        <Button onClick={() => {}}>...</Button>
      </Footer>
    </>
  );
};
