import React, { useState } from "react";

// Импортируем локальные изображения по их новым именам
import soulLand1Img from "./Фото/soulLand1.webp";
import soulLand2Img from "./Фото/soulLand2.jpg";
import btthImg from "./Фото/btth.jpg";
import throneOfSealImg from "./Фото/throneOfSeal.webp";
import mortalJourneyImg from "./Фото/mortalJourney.jpg";
const donghuaData = [
  {
    id: "soul-land-1",
    rank: "Топ-1",
    title: "Боевой Континент",
    sub: "Soul Land (Douluo Dalu)",
    status: "Завершён (263 сер.)",
    tags: "Сёнен / Фэнтези / Перерождение",
    rating: "9.5",
    img: soulLand1Img,
    desc: "Легендарная история Тан Саня, ученика внешней школы клана Тан, который перерождается в загадочном мире Боевого Континента. Здесь нет магии и боевых искусств в привычном понимании, но каждый человек обладает врожденным Духом, который можно культивировать. Пройдя через суровые испытания, Тан Сань основывает свою команду «Семь Монстров Шрек» и начинает восхождение к божественному престолу."
  },
  {
    id: "soul-land-2",
    rank: "Топ-1 (Сиквел)",
    title: "Боевой континент 2: Непревзойдённый клан Тан",
    sub: "Douluo Dalu II: Jueshi Tangmen",
    status: "Выходит новый сезон",
    tags: "Техномагия / Боевые искусства",
    rating: "9.6",
    img: soulLand2Img,
    desc: "Продолжение культовой вселенной спустя 10 000 лет. Прежний Клан Тан увядает, а мир захлестнул технологический прогресс духовных орудий. Главный герой Хо Юйхао, сирота со слабым телом, но уникальным Духом Духовных Глаз, поступает в академию Шрек, чтобы вернуть Клану Тан былое величие и изменить устоявшиеся законы континента."
  },
  {
    id: "battle-through-the-heavens",
    rank: "Топ-2",
    title: "Расколотая битвой синева небес",
    sub: "Battle Through the Heavens",
    status: "Выходят спецвыпуски",
    tags: "Сёнен / Экшен / Культивация",
    rating: "9.4",
    img: btthImg,
    desc: "История молодого гения Сяо Яня, который внезапно теряет все свои силы и становится посмешищем для клана, а его помолвка с невестой разрывается. Причиной угасания таланта оказывается дух великого мастера, запертый в фамильном кольце. Став учеником этого духа, Сяо Янь начинает тернистый путь тренировок, чтобы восстановить свою честь, усовершенствовать редкое пламя и достичь небывалых высот мастерства."
  },
  {
    id: "throne-of-seal",
    rank: "Топ-3",
    title: "Трон, отмеченный богом",
    sub: "Throne of Seal",
    status: "Выходит / Онгоинг",
    tags: "Темное фэнтези / Рыцари / Сянься",
    rating: "9.3",
    img: throneOfSealImg,
    desc: "В мире, где человечество оказалось на пороге полного уничтожения под натиском шести великих Владык Демонов, основываются шесть оборонительных Храмов. Чтобы спасти свою мать, юный и благородный Лон Хаочэнь вступает в Храм Рыцарей. Обладая невероятными врожденными способностями света, он преодолевает сложнейшие испытания ради признания Божественного Трона."
  },
  {
    id: "a-mortal-journey",
    rank: "Топ-3 (Разделяет место)",
    title: "Путешествие к бессмертию",
    sub: "Fan Ren Xiu Xian Chuan",
    status: "Выходит / Онгоинг",
    tags: "Реалистичное сянься / Приключения",
    rating: "9.5",
    img: mortalJourneyImg,
    desc: "Эталонный представитель жанра прагматичной культивации. Обычный деревенский парень Хань Ли, не имея знатного происхождения или выдающегося врожденного дара, волей случая становится учеником в затворнической секте. В мире, где за бессмертие платят предательством и жестокостью, Хань Ли выживает благодаря исключительной осторожности, хладноверию и стратегическому мышлению."
  }
];
export default function DonghuaPage() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="donghua-page-container">
      
      {/* Шапка страницы */}
      <section className="profile-card">
        <div className="profile-info">
          <h1>Моё увлечение</h1>
          <p className="bio">
            Я увлекаюсь китайскими 3D дунхуа, слежу за выпуском новых серий. Китайская анимация привлекает меня потрясающей динамикой боев, проработанными мирами культивации, красивой графикой и глубокой философией боевых искусств.
          </p>
        </div>
      </section>

      {/* Контентная сетка ленты топа */}
      <section className="info-section-block">
        <h2>Мой личный ТОП и любимые вселенные</h2>
        
        <div className="school-grid-layout" style={{ display: "flex", flexDirection: "column" }}>
          {donghuaData.map((anime) => {
            const isExpanded = expandedCards[anime.id];
            
            return (
              <div key={anime.id} className="legal-info-card donghua-card-wrapper">
                
                <span className="anime-badge">{anime.rank}</span>
                
                <div className="donghua-poster-block">
                  <img src={anime.img} alt={anime.title} className="donghua-poster-img" />
                  <div className="donghua-rating-badge">★ {anime.rating}</div>
                </div>

                <div className="donghua-text-content">
                  <h3 className="donghua-title">{anime.title}</h3>
                  <div className="donghua-sub-title">{anime.sub}</div>
                  
                  <div className="donghua-tags-container">
                    <span className="donghua-tag-status">{anime.status}</span>
                    <span className="donghua-tag-genre">{anime.tags}</span>
                  </div>

                  <p 
                    className="donghua-description-p" 
                    style={{ maxHeight: isExpanded ? "1000px" : "80px" }}
                  >
                    {anime.desc}
                    {!isExpanded && <span className="donghua-text-fade-overlay"></span>}
                  </p>

                  <button 
                    onClick={() => toggleExpand(anime.id)}
                    className="btn-primary donghua-btn-more"
                  >
                    {isExpanded ? "Свернуть" : "Подробнее"}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
