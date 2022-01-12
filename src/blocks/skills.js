import CM1 from "../img/competency-1.svg"
import CM2 from "../img/competency-2.svg"
import CM3 from "../img/competency-3.svg"
import CM4 from "../img/competency-4.svg"
import CM5 from "../img/competency-5.svg"
import CM6 from "../img/competency-6.svg"
import CM7 from "../img/competency-7.svg"
import CM8 from "../img/competency-8.svg"

const Skills = () =>{
    return(
        <div>
        <section className="skills">
            <div className="wrapper">
                <h2 className="skills_heading">13 лет совершенствуем<br/>компетенции в Drupal<br/>поддержке!</h2>
                <p className="skills_subtitle">Разрабатываем и оптимизируем модули, расширяем<br/>функциональность
                    сайтов, обновляем дизайн</p>
                <ul className="skills_list list">
                    <li>
                        <img src={CM1} alt=""/>
                            <p>Добавление информации на сайт, создание новых разделов</p>
                    </li>
                    <li>
                        <img src={CM2} alt=""/>
                            <p>Разработка и оптимизация модулей сайта</p>
                    </li>
                    <li>
                        <img src={CM3} alt=""/>
                            <p>Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами</p>
                    </li>
                    <li>
                        <img src={CM4} alt=""/>
                            <p>Любые доработки функционала и дизайна</p>
                    </li>
                    <li>
                        <img src={CM5} alt=""/>
                            <p>Аудит и мониторинг безопасности Drupal сайтов</p>
                    </li>
                    <li>
                        <img src={CM6} alt=""/>
                            <p>Миграция, импорт контента и апгрейд Drupal</p>
                    </li>
                    <li>
                        <img src={CM7} alt=""/>
                            <p>Оптимизация и ускорение Drupal-сайтов</p>
                    </li>
                    <li>
                        <img src={CM8} alt=""/>
                            <p>Веб-маркетинг, консультации и работы по SEO</p>
                    </li>
                </ul>
            </div>
        </section>
        </div>
    );
}

export default Skills;