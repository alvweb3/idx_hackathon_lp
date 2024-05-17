import styles from "../style";
import Button from "./Button";

const CTA = () => {
  const handleCreateIndexClick = () => {
    window.location.href = "https://idx-hackathon-application-ts.vercel.app/";
  };

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Create your index now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Begin Your Journey with Our Streamlined Indexing Tools and Craft a Diversified Portfolio Tailored to Your Financial Goals Today.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button buttonText="Create Index" additionalClasses="py-3" onClick={handleCreateIndexClick} />
      </div>
    </section>
  );
};

export default CTA;