"use client";

import Container from "@/components/common/layout/Container";

const Selector = ({ selected, handleChange }) => {
  const menus = ["커피", "맥주", "와인"];
  const selectedCss = "border-b-2 border-slate-700";

  return (
    <div className="border-b-1 border-slate-100">
      <Container className="flex font-bold">
        {menus.map((v, i) => (
          <div
            key={i}
            onClick={() => handleChange(v)}
            className={`${
              selected.name == v && selectedCss
            } flex-1 py-5 h-full text-center`}
          >
            {v}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Selector;
