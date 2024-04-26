import medbotlogo from "../../assets/medbotlogo.png";
import "./resultdisplay.css";

export default function ResultDisplay() {
  return (
    <section className="result-display">
      <img src={medbotlogo} alt="medchecks logo" />
      <p className="result-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit
        saepe officia voluptas, amet eaque ad? Aliquam error praesentium natus
        nobis recusandae laboriosam quas! Commodi cum ipsa nostrum laboriosam
        quidem! Voluptatibus eligendi aliquid eos at! Velit perspiciatis nostrum
        eligendi facere et in debitis tempore quos? Placeat mollitia cumque
        excepturi, sint commodi expedita perferendis sit nisi minus, nemo nobis
        vitae officia. Cupiditate, voluptates assumenda quis, magni
      </p>
    </section>
  );
}
