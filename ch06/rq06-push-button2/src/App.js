import { useState } from "react";

function Icon({ type }) {
  return <img src={`images/${type}.png`} width="16" alt="" />;
}

function Button({ label, ButtonIcon }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button onClick={() => setPressed((p) => !p)}>
      <ButtonIcon pressed={pressed} />
      {label}
    </button>
  );
}

function LockIcon({ pressed }) {
  return pressed ? <Icon type="lock" /> : <Icon type="unlock" />;
}

function LockButton() {
  return <Button label="lock" ButtonIcon={LockIcon} />;
}

function App() {
  const pressed = true;
  return <LockButton />;
}

export default App;
