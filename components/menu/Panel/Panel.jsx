"use client";
import Container from "@/components/common/layout/Container";
import Selector from "./Selector";
import Link from "next/link";
import Beer from "./Beer";
import { useState } from "react";
import Wine from "./Wine";
import Coffee from "./Coffee";
import Banner from "../Banner";
import { motion } from "framer-motion";
import { animation } from "@/styles/motion";

const Panel = ({ coffees, beers, wines }) => {
  const [selected, setSelected] = useState({
    name: "커피",
    data: coffees,
    title: "맛있는 커피 맛집",
    image: "/menu-coffee-1.jpg",
  });
  const handleChange = (v) =>
    setSelected((prev) => {
      if (v == "커피")
        return {
          name: "커피",
          data: coffees,
          title: "맛있는 커피 맛집",
          image: "/menu-coffee-1.jpg",
        };
      else if (v == "맥주")
        return {
          name: "맥주",
          data: beers,
          title: "힘들 땐 한잔 하는 맥주",
          image: "/menu-beer-1.jpg",
        };
      else
        return {
          name: "와인",
          data: wines,
          title: "아름다운 한잔의 와인",
          image: "/menu-wine-1.jpg",
        };
    });

  return (
    <>
      <Banner {...selected} />
      <Selector selected={selected} handleChange={handleChange} />
      <Container className="grid grid-cols-4 gap-10 py-10 px-8 md:px-0">
        {selected.data.map((v, i) => {
          if (selected.name == "커피") {
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={animation.fadeInSlideUp}
              >
                <Link key={i} href={`/menu/coffee/${v.id}`}>
                  <Coffee {...v} />
                </Link>
              </motion.div>
            );
          } else if (selected.name == "맥주") {
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={animation.fadeInSlideUp}
              >
                <Link key={i} href={`/menu/beer/${v.id}`}>
                  <Beer {...v} />
                </Link>
              </motion.div>
            );
          } else {
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={animation.fadeInSlideUp}
              >
                <Link key={i} href={`/menu/wine/${v.id}`}>
                  <Wine {...v} />
                </Link>
              </motion.div>
            );
          }
        })}
      </Container>
    </>
  );
};

export default Panel;
