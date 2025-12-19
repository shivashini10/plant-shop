import { useState } from "react";
import Signin from "../pages/Signin";
import Homeimg from '../assets/img/homeimg5.jpg';
import Amla from '../assets/img/amla.jpg';
import Ashwagandha from '../assets/img/ashwagandha.jpg';
import Betelleaf from '../assets/img/betelleaf.jpg';
import Blackpepper from '../assets/img/blackpepper.jpg';
import Mexicanmint from '../assets/img/mexicanmint.jpg';
import Mint from '../assets/img/mint.jpg';
import Neem from '../assets/img/neem.jpg';
import Thulasi from '../assets/img/thulasi.jpg';
import Turmeric from '../assets/img/turmeric.jpg';

interface Plant {
  id: number;
  name: string;
  img: string;
  short: string;
  more: string;
}

function PlantCard() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [showSignin, setShowSignin] = useState(false);

  const plants: Plant[] = [
    {
      id: 1,
      name: "Neem",
      img: Neem,
      short: "Neem is a medicinal plant widely used in Ayurveda. It has antibacterial, antifungal, and antiviral properties, purifies blood, boosts immunity, and supports healthy skin.",
      more: "Neem also improves oral health, aids digestion, and is widely used in herbal remedies, cosmetics, and natural pest control, making it an essential plant for wellness.It helps maintain healthy hair and nails naturally."
    },
    {
      id: 2,
      name: "Thulasi",
      img: Thulasi,
      short: "Thulasi (Holy Basil) is a sacred medicinal plant. It boosts immunity, reduces stress, improves respiratory health, supports digestion, and is valued for antioxidant and antibacterial properties.",
      more: "Thulasi helps relieve cough and cold, enhances overall wellness, and is widely used in Ayurveda, herbal remedies, and daily home treatments for healing and vitality."
    },
    {
      id: 3,
      name: "Amla",
      img: Amla,
      short: "Amla, also called Indian Gooseberry, is a nutritious medicinal fruit rich in vitamin C and antioxidants. It boosts immunity, strengthens hair and skin, and improves digestion.",
      more: "Amla supports liver health, regulates blood sugar, enhances overall wellness, and is widely used in Ayurveda for longevity, health maintenance, and natural medicinal remedies."
    },
    {
      id: 4,
      name: "Turmeric",
      img: Turmeric,
      short: "Turmeric is a medicinal spice widely used in Ayurveda. Its curcumin content provides anti-inflammatory, antioxidant, and immunity-boosting benefits while aiding digestion and skin health.",
      more: "It promotes wound healing, prevents infections, improves overall wellness, supports joint health, and is commonly used in natural remedies and traditional medicine."
    },
    {
      id: 5,
      name: "Mint",
      img: Mint,
      short: "Mint is a refreshing medicinal herb known for cooling and digestive properties. It relieves indigestion, bloating, nausea, and promotes fresh breath and stress relief.",
      more: "Mint improves respiratory health, aids digestion, and is widely used in herbal teas, foods, natural remedies, and medicinal applications for overall wellness and vitality."
    },
    {
      id: 6,
      name: "Black Pepper",
      img: Blackpepper,
      short: "Black pepper is a common medicinal spice containing piperine. It improves digestion, enhances nutrient absorption, boosts immunity, and supports respiratory health while reducing inflammation naturally.",
      more: "It relieves cough and cold, enhances overall wellness, and is widely used in Ayurveda, traditional medicine, and daily cooking for health and vitality benefits.It also supports healthy metabolism and circulation."
    },
    {
      id: 7,
      name: "Betel Leaf",
      img: Betelleaf,
      short: "Betel leaf is a traditional medicinal plant with antibacterial and antioxidant properties. It aids digestion, improves oral health, and helps relieve cough and cold naturally.",
      more: "It reduces inflammation, supports overall wellness, and is commonly used in Ayurveda, herbal remedies, and cultural practices for medicinal and health-promoting purposes."
    },
    {
      id: 8,
      name: "Ashwagandha",
      img: Ashwagandha,
      short: "Ashwagandha is a powerful medicinal herb in Ayurveda, known as Indian ginseng. It reduces stress, boosts immunity, improves sleep, and enhances energy and stamina.",
      more: "Ashwagandha supports cognitive function, reduces inflammation, promotes overall wellness, and is widely used as an adaptogen in traditional medicine for strength, focus, and vitality."
    },
    {
      id: 9,
      name: "Mexican Mint",
      img: Mexicanmint,
      short: "Mexican Mint, also called Karpuravalli, is a medicinal plant. Its leaves help treat cough, cold, and respiratory problems, and have antibacterial and antioxidant properties.",
      more: "It is widely used in Ayurveda for respiratory health, improves immunity, reduces inflammation, supports digestion, and is valued for its natural healing and medicinal benefits."
    }
  ];

  const toggleRead = (id: number) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className="position-relative text-center">
        {showSignin && <Signin onClose={() => setShowSignin(false)}/>}
        <img src={Homeimg} alt="Plant Shop" className="img-fluid" width="100%" style={{ objectFit: "cover" }}/>
       
        <button className="btn btn-success position-absolute" style={{ top: "37%", right: "18%" }} onClick={() => setShowSignin(true)} >
          <b>Sign In</b>
        </button>
      </div>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {plants.map((plant) => (
              <div className="col" key={plant.id}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <img src={plant.img} alt={plant.name} className='card' width="385px" />
                    <h3 className='text-center pt-2'>{plant.name}</h3>
                    <p className="card-text">{plant.short}</p>
                    {expanded[plant.id] && <p className="card-text">{plant.more}</p>}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-success"
                          onClick={() => toggleRead(plant.id)}
                        >
                          {expanded[plant.id] ? "Read Less" : "Read More"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlantCard;
