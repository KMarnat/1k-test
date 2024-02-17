import { useState } from "react";
import packetData from "../../utils/PacketData";
import SinglePacket from "../SinglePacket/SinglePacket";

import Tabs from "./../Tabs/Tabs";

const Packets = () => {
  const packetTitles = ["Pakett 1", "Pakett 2", "Pakett 3"];
  const [isActive, setIsActive] = useState(packetTitles[0]);

  return (
    <section className="packets">
      <div className="packets__mobile">
        <Tabs isActive={isActive} setIsActive={setIsActive} packetTitles={packetTitles} />
      </div>
      <div className="packets__pc">
        {packetData.map((packet, i) => (
          <SinglePacket
            img={packet.img}
            title={packet.title}
            desc={packet.description}
            price={packet.price}
            status={isActive === packet.title ? "active" : "inactive"}
            packet={packet}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Packets;
