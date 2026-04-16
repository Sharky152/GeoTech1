import { useState } from "react";
import style from "./App.module.css";
import { Header } from "./component/ui/Header/Header";
import Slider from "./component/ui/Slider/Silder";
import { Footer } from "./component/ui/Footer/Footer";

function App() {
  const demonstrationImages = [
    {
      url: "src/assets/Progect_2.jpg",
      alt: "Ландшафтный проект 1",
      caption: {
        title: "Технопарк «Зеленый код»",
        description: "Интеграция умных систем полива и мониторинга почвы",
      },
    },
    {
      url: "src/assets/Progect_1.jpg",
      alt: "Ландшафтный проект 2",
      caption: {
        title: "Бионический сад",
        description: "Геометрические формы с автоматическим климат-контролем",
      },
    },
    {
      url: "src/assets/Progect_3.jpg",
      alt: "Ландшафтный проект 3",
      caption: {
        title: "Аэропарк «Футуро»",
        description: "Вертикальное озеленение с системой рекуперации воды",
      },
    },
    {
      url: "src/assets/Progect_4.jpg",
      alt: "Ландшафтный проект 4",
      caption: {
        title: "Квантовый луг",
        description: "Светодинамическая подсветка и адаптивное освещение",
      },
    },
  ];
  const projectImages = [
    {
      url: "src/assets/system_ZERO1.jpg",
      alt: "«СИСТЕМА: ZERO»",
      caption: {
        title: "«СИСТЕМА: ZERO»",
        description: "Участок как гаджет",
      },
    },
    {
      url: "src/assets/system_ZERO2.jpg",
      alt: "Ландшафтный проект 2",
      caption: {
        title: "Проект стирает грань между природой и высокими технологиями",
      },
    },
    {
      url: "src/assets/system_ZERO3.jpg",
      alt: "Ландшафтный проект 3",
      caption: {
        title:
          "Геопластика, зеркальные поверхности, бетон и сталь подчинены строгой геометрии",
      },
    },
    {
      url: "src/assets/system_ZERO4.jpg",
      alt: "Ландшафтный проект 4",
      caption: {
        title: "Квантовый луг",
        description:
          "Интеллектуальное освещение меняет сценарии пространства в реальном времени",
      },
    },
  ];
  const projectImages_2 = [
    {
      url: "src/assets/Progect2_1.jpg",
      alt: "«NEO-СТРУКТУРА»",
      caption: {
        title: "«NEO-СТРУКТУРА»",
        description: "Ландшафт как продолжение архитектуры.",
      },
    },
    {
      url: "src/assets/Progect2_2.jpg",
      alt: "Ландшафтный проект 2",
      caption: {
        title:
          "Вместо клумб — модульные контейнеры из кортена и стеклофибробетона",
      },
    },
    {
      url: "src/assets/Progect2_3.jpg",
      alt: "Ландшафтный проект 3",
      caption: {
        title:
          "Вместо газона — газонные решётки с ультракоротким стриженым покрытием.",
      },
    },
    {
      url: "src/assets/Progect2_4.jpg",
      alt: "Ландшафтный проект 4",
      caption: {
        title:
          "Техника и природа синхронизированы: полив по датчикам, тёплые полы на террасе, встроенные динамики и зарядки для гаджетов в уличной мебели.",
      },
    },
  ];
  const projectImages_3 = [
    {
      url: "src/assets/Progect3_1.jpg",
      alt: "«TECHNOBIOME»",
      caption: {
        title: "«TECHNOBIOME»",
        description:
          "Technobiome — это ландшафт, работающий как операционная система",
      },
    },
    {
      url: "src/assets/Progect3_2.jpg",
      alt: "Ландшафтный проект 2",
      caption: {
        title:
          "Вместо клумб — модульные контейнеры из кортена и стеклофибробетона",
      },
    },
    {
      url: "src/assets/Progect2_3.jpg",
      alt: "Ландшафтный проект 3",
      caption: {
        title:
          "Пространство зонируется светом и перепадами уровней. Вместо газона — рулонный газон с роботизированной стрижкой или гравийные поля.",
      },
    },
    {
      url: "src/assets/Progect2_4.jpg",
      alt: "Ландшафтный проект 4",
      caption: {
        title:
          "Всё управляется со смартфона: полив, свет, аудиосистема, подогрев дорожек и даже изменение цвета подсветки под настроение.",
      },
    },
  ];
  const [formData, setFormData] = useState({
    name: ``,
    email: ``,
    phone: ``,
    message: ``,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Данные формы:", formData);
    // Здесь можно добавить отправку на сервер
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");

    // Очистка формы (опционально)
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Затем в форме добавьте атрибуты:
  <form className={style.contact_form} onSubmit={handleSubmit}>
    <div className={style.form_group}>
      <label htmlFor="name">Имя</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ваше имя"
        required
      />
    </div>
    {/* ... остальные поля ... */}
  </form>;

  return (
    <>
      <Header />
      <main>
        <div className={style.image_header}>
          <img src="src/assets/Project_heder.png"></img>
        </div>
        <div className={style.Welcom}>
          <div id="about" className={style.About_me}>
            <h1>GeoTech: Архитектура ландшафта будущего</h1>
            <h2>
              {" "}
              GeoTech — это не просто ландшафтная студия. Это инжиниринговая
              лаборатория, где природа становится частью высокотехнологичной
              экосистемы. Мы создаем не сады, а управляемые цифровые
              пространства, где геометрия, интеллектуальные системы и
              биотехнологии образуют единый функциональный организм.
            </h2>
          </div>
          <div className={style.description}>
            <h1>Философия: Разумный ландшафт</h1>
            <h2>
              Мы отказываемся от хаоса естественного роста в пользу
              прогнозируемой эстетики. Наша философия строится на трех китах:
            </h2>{" "}
            <h2>
              1. Геометрия: Четкие линии, модульные конструкции, сложные
              топографические расчеты и прецизионная планировка.
            </h2>
            <h2>
              {" "}
              2. Автоматизация: Полная интеграция систем «умный сад» — от
              климат-контроля почвы до автоматизированного ухода за
              насаждениями.
            </h2>
            <h2>
              {" "}
              3. Синтез: Гармоничное сращивание архитектуры здания с окружающей
              средой через единые технологические решения.
            </h2>
          </div>
        </div>

        <div id="portfolio" className={style.Heading_one}>
          <h1>Проекты</h1>
          <Slider
            images={demonstrationImages}
            autoPlayInterval={4000} // Интервал автопрокрутки 4 секунды
          />
        </div>

        <div className={style.Projects}>
          <div className={style.Heading}>
            <h1>«СИСТЕМА: ZERO»</h1>
          </div>
          <div className={style.Description_project}>
            <div className={style.Zero}>
              {" "}
              <h2>
                «Участок как гаджет: минимализм форм, максимальная
                функциональность. Проект “СИСТЕМА: ZERO” стирает грань между
                живой природой и высокими технологиями. Геопластика, зеркальные
                поверхности, бетон и сталь подчинены строгой геометрии.
                Интеллектуальное освещение меняет сценарии пространства в
                реальном времени, а растения выступают не фоном, а
                арт-объектами. Это ландшафт, который не требует ухода — только
                управления с пульта или смартфона.»
              </h2>
              <Slider
                images={projectImages}
                autoPlayInterval={4000} // Интервал автопрокрутки 4 секунды
              />
            </div>
          </div>
        </div>
        <div className={style.Projects}>
          <div className={style.Heading}>
            <h1>«NEO-СТРУКТУРА»</h1>
          </div>
          <div className={style.Description_project}>
            <div className={style.Zero}>
              {" "}
              <h2>
                «Ландшафт как продолжение архитектуры. Проект NEO-СТРУКТУРА
                переводит природу в цифровой формат: строгая геометрия,
                монохромная гамма (белый, серый, чёрный, цвет хрома), зеркальные
                поверхности и бетон. Вместо клумб — модульные контейнеры из
                кортена и стеклофибробетона, вместо газона — газонные решётки с
                ультракоротким стриженым покрытием. Интеллектуальное
                RGBW-освещение программирует настроение участка под любой
                сценарий. Растения — графичные формы (шары, колонны, зонтики),
                минимум цвета, максимум фактуры. Водный объект — «сухой фонтан»
                или зеркальный канал с подсветкой. Техника и природа
                синхронизированы: полив по датчикам, тёплые полы на террасе,
                встроенные динамики и зарядки для гаджетов в уличной мебели.»
              </h2>
            </div>

            <Slider
              images={projectImages_2}
              autoPlayInterval={4000} // Интервал автопрокрутки 4 секунды
            />
          </div>
        </div>
        <div className={style.Projects}>
          <div className={style.Heading}>
            <h1>«TECHNOBIOME»</h1>
          </div>
          <div className={style.Description_project}>
            <div className={style.Zero}>
              {" "}
              <h2>
                «Technobiome — это ландшафт, работающий как операционная
                система. Никаких клумб и хаотичных посадок. Только чёткая
                геометрия, монохромная гамма (бетон, сталь, стекло, чёрный
                сланец) и интеллектуальная инфраструктура. Пространство
                зонируется светом и перепадами уровней. Вместо газона — рулонный
                газон с роботизированной стрижкой или гравийные поля. Растения —
                строго архитектурные формы (шары, конусы, колонны) с подсветкой
                каждого экземпляра. Водный объект — тоннель из нержавейки или
                туманная инсталляция. Всё управляется со смартфона: полив, свет,
                аудиосистема, подогрев дорожек и даже изменение цвета подсветки
                под настроение. Technobiome не требует садовника — только
                инженера.»
              </h2>
            </div>

            <Slider
              images={projectImages_3}
              autoPlayInterval={4000} // Интервал автопрокрутки 4 секунды
            />
          </div>
        </div>
        <div id="services" className={style.Connection}>
          <div className={style.Connection_mail}>
            <div className={style.contact_form}>
              <div className={style.form_group}>
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Джексон"
                  required
                />
              </div>{" "}
              <div className={style.form_group}>
                <label htmlFor="email">почта</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="ivan@example.com"
                  required
                />
              </div>{" "}
              <div className={style.form_group}>
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Расскажите о вашем проекте..."
                  required
                />
              </div>
              <button type="submit" className={style.submit_button}>
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
