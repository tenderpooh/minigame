import React, { useState } from "react";
import { Button } from "reactstrap";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <Button
      style={{ width: "80%", marginBottom: "10px" }}
      color="info"
      onClick={() => setCount(count + 2)}
    >
      {count}
    </Button>
  );
};

export default Counter;
