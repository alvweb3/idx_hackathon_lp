import { routing2, routing3 } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={routing3} alt="routing" className="w-[100%] h-[80%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Indexing Simplified: <br className="sm:block hidden" /> Provide <span className="text-gradient">One Token</span>, <br className="sm:block hidden" /> And We'll Do The <span className="text-gradient">Magic</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Forget the hassle of collecting various tokens to build your index. With our app, all you need is USDC. We'll handle the rest,
      converting your single currency into a diverse portfolio of assets. Our process eliminates the complexity, letting you sit back
      as we automatically construct your custom index. It’s crypto investing made straightforward.
      </p>
    </div>
  </section>
);

export default Billing;