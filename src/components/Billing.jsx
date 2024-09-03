import { apple, bill, google,n1,n2,n3 } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Votre parcours digital avec Warna.  <br className="sm:block hidden" />
      </h2>
      <div className="flex flex-wrap mt-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src={n1} alt="icon" className="w-10 h-10" />
          <div>
            <h3 className="text-lg font-semibold">Free Consultations</h3>
            <p className="text-sm">Blandit ad a justo pulvinar nascetur inceptos primis vitae faucibus sagittis turpis.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src={n2} alt="icon" className="w-10 h-10" />
          <div>
            <h3 className="text-lg font-semibold">Solutions Innovantes</h3>
            <p className="text-sm">Des solutions modernes pour vos besoins IT.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src={n3} alt="icon" className="w-10 h-10" />
          <div>
            <h3 className="text-lg font-semibold">Lauching Prototype</h3>
            <p className="text-sm">Blandit ad a justo pulvinar nascetur inceptos primis vitae faucibus sagittis turpis.</p>
          </div>
        </div>
      </div>
      

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
);

export default Billing;