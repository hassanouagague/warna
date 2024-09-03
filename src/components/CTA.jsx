import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Contactez-nous</h2>
      <p className={`${styles.paragraph} max-w-[870px] mt-5`}>
        Des questions ou besoin d'assistance ? Nous sommes là pour vous aider ! 
        N'hésitez pas à nous contacter à tout moment et nous vous répondrons dans les plus brefs délais. 
        Que ce soit pour des renseignements sur nos produits,
        nos services, ou toute autre demande, 
        notre équipe est prête à vous apporter le soutien nécessaire.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;