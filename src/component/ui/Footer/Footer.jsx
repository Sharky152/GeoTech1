import style from "../Footer/Footer.module.css";

export const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <footer className={style.footer}>
        <nav className={style.Welcom}>
          <button
            className={style.welcom_button}
            onClick={() => scrollToSection("about")}
          >
            <h1>О нас</h1>
          </button>
          <button
            className={style.welcom_button}
            onClick={() => scrollToSection("portfolio")}
          >
            <h1>Проекты</h1>
          </button>
          <button
            className={style.welcom_button}
            onClick={() => scrollToSection("services")}
          >
            <h1>Услуги</h1>
          </button>
          <button className={style.welcom_button}>
            <h1>Номер: +x-xxx-xxxx-xx-xx</h1>
          </button>
          <button className={style.welcom_button}>
            <h1>Адрес:xxxxxx, город xxxxxx, ул.xxxxxx, дом xxx</h1>
          </button>
          <button className={style.welcom_button}>
            <h1>Пн-Пт – с 9:00 до 19:00; Сб,Вс – выходной</h1>
          </button>
        </nav>
      </footer>
    </>
  );
};
