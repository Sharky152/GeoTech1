import style from "../Header/Header.module.css";

export const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={style.header}>
        <nav className={style.logo}>
          <nav className={style.logo_icon}>🌿</nav>
          <h1 className={style.logo_text}>
            Geo<span>Tech</span>
          </h1>
        </nav>
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
          <button
            className={style.welcom_button}
            onClick={() => scrollToSection("contact")}
          >
            <h1>Контакты</h1>
          </button>{" "}
        </nav>
      </header>
    </>
  );
};
