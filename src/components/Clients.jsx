import React from "react";
import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.flexCenter} flex-1 min-w-[120px] sm:min-w-[192px] cursor-pointer`}
        >
          <img
            src={client.logo}
            alt={client.id}
            className="w-[100px] sm:w-[192px] object-contain filter brightness-75 grayscale-100 hover:brightness-200 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
