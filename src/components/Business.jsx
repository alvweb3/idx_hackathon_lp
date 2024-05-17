import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  {
  const handleLaunchIndexClick = () => {
    window.location.href = "https://idx-hackathon-application-ts.vercel.app/";
  };

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Craft Your <span className="text-gradient">Portfolio</span>, <br className="sm:block hidden" /> Seamlessly
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
        With our intuitive token creation tool, you can personalize your investment,
        balance your risk, and tap into the potential of decentralized finance. Our
        platform puts a vast ecosystem of tokens at your fingertips, making it simple
        to create a balanced and diversified index.
        </p>

        <Button buttonText="Launch Your Index" onClick={handleLaunchIndexClick} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
