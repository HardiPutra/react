import React from "react";

function Belajarsatu() {
  const [angka, setAngka] = React.useState(0);
  const [isDone, setIsDone] = React.useState(false);

  const handleTambah = () => {
    if (angka >= 10) {
      setIsDone(true);
    } else {
      setAngka(angka + 1);
    }
  };

  const handleKurang = () => {
    if (angka <= 0) {
      setIsDone(true);
    } else {
      setAngka(angka - 1);
    }
  };

  const handleReset = () => {
    setAngka(0);
    setIsDone(false);
  };

  return (
    <>
      <div>
        <button onClick={handleKurang} disabled={isDone}>
          -
        </button>{" "}
        {isDone ? "done!" : angka}{" "}
        <button onClick={handleTambah} disabled={isDone}>
          +
        </button>
      </div>
      <div>
        <button onClick={handleReset} disabled={angka == 0}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Belajarsatu;
