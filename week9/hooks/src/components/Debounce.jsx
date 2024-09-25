import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const Debounce = () => {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      You typed {debouncedValue}
    </div>
  );
};
