import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css";

const page = async () => {
  // await new Promise(executor:resolve => setTimeout(resolve,timeout:2000))
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fd102643f1msh8d6399cf8bb1268p167f93jsn5e8f34a7e2a9",
      "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies </h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
