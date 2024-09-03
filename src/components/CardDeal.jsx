import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Warna <br className="sm:block hidden" /> Votre Partenaire dans la Révolution Numérique
      </h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5 text-justify`}>
      Nous sommes une agence spécialisée dans la vente de matériel informatique,
       les solutions IT sur mesure, et le développement web.
        Que vous soyez une entreprise cherchant à moderniser son infrastructure, 
        à sécuriser ses données, ou à développer une présence digitale efficace, 
        nous offrons des solutions complètes adaptées à vos besoins. 
        Forts de notre expertise en matériel de pointe et de notre savoir-faire en développement web,
         nous accompagnons nos clients dans leur transformation numérique avec un service personnalisé et de qualité.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;