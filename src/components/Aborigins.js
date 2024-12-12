import React from 'react';
import './Aborigins.css';

const aborigins = [
  {
    name: 'Толстяк',
    description: 'Толстяк (англ. Cowman) — это тип жутких мутантов, который был добавлен в обновление v0.20 The Forest. В отличие от других жутких мутантов, этот не состоит из нескольких соединенных тел и имеет вполне разборчивые черты лица. Он высокий, толстый и имеет очень маленькие руки.',
    image: '/images/Cowman.webp', // Путь к изображению аборигена
  },
  {
    name: 'Рукастый',
    description: 'Рукастый (англ. Armsy) — это тип жутких мутантов, получивший своё прозвище из-за большого количества рук. Данный мутант был добавлен в обновление v0.01 игры The Forest.',
    image: '/images/Armsy.webp',
  },
  {
    name: 'Вирджиния',
    description: 'Её можно встретить в глубинах пещер, встречается на поверхности после 8-12 прожитых дней. Этот мутант стал таким после слияния трех женских особей воедино. У неё шесть ног вокруг тела, отростки, напоминающие руки и голова с малыми чертами лица человека.',
    image: '/images/Virginia.webp',
  },
  {
    name: 'Червь',
    description: 'Червь (англ. Worm) — тип жутких мутантов, получивший название из-за своей червеобразной формы. Был добавлен в версии v1.10 The Forest.',
    image: '/images/Worm.webp',
  },
  {
    name: 'Младенец-мутант',
    description: 'Младенец-мутант (англ. Mutant Baby) — это один из представителей вида жутких мутантов, который был добавлен в обновлении v0.10 для игры The Forest.',
    image: '/images/Baby_Mutant.webp',
  },
  {
    name: 'Меган Кросс',
    description: 'Финальный Босс (англ. End Boss) - также известный как Мутант Меган, Монстр или Босс Мутант, является последним боссом, который был добавлен в обновлении v0.51 The Forest.',
    image: '/images/MeganKross.webp',
  },
];

function Aborigins() {
  return (
    <section className="aborigin-section">
      <div className="aborigin-title">
        <h2>Виды аборигенов</h2>
      </div>
      {aborigins.map((aborigin, index) => (
        <div key={index} className="aborigin-card">
          <div className="aborigin-text">
            <h3>{aborigin.name}</h3>
            <p>{aborigin.description}</p>
          </div>
          <img src={aborigin.image} alt={aborigin.name} />
        </div>
      ))}
    </section>
  );
}

export default Aborigins;
