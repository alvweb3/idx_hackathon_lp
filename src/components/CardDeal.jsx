import { card, rtdata } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Track Your Indexes <br className="sm:block hidden" /> In <span className="text-gradient">Real Time</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Keep a pulse on your investment's progress with our live index tracking. Watch as your portfolio evolves moment-to-moment,
      giving you the transparency and immediate data you need to make informed decisions in the dynamic world of crypto.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={rtdata} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;