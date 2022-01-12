import vid from "../img/video.mp4"
import $ from "jquery"
$(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
        if($('section.navigation').css('position') === 'fixed') {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        }
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
        $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
        $('nav>ul').css({'position' : 'absolute'});
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });
}); // end DOM ready
const Header = () =>{
    return(
        <div>
            <header>
                <video autoPlay="autoplay" muted preload="auto" loop playsInline id="header_bg_video">
                    <source src={vid} type="video/mp4"/>
                </video>
                <div className="wrapper">
                    <section className="navigation">
                        <div className="nav-container">
                            <div className="brand">
                                <a className="logo" href="#!"></a>
                            </div>
                            <nav>
                                <div className="nav-mobile"><a id="nav-toggle" href="#!"><span/></a></div>
                                <ul className="nav-list">
                                    <li>
                                        <a href="#!">Администрирование</a>
                                        <ul className="nav-dropdown">
                                            <li>
                                                <a href="#!">Миграция</a>
                                            </li>
                                            <li>
                                                <a href="#!">Бэкапы</a>
                                            </li>
                                            <li>
                                                <a href="#!">Аудит безопасности</a>
                                            </li>
                                            <li>
                                                <a href="#!">Оптимизация скорости</a>
                                            </li>
                                            <li>
                                                <a href="#!">Переезд на HTTPS</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#!">Продвижение</a>
                                    </li>
                                    <li>
                                        <a href="#!">Реклама</a>
                                    </li>
                                    <li>
                                        <a href="#!">О нас</a>
                                        <ul className="nav-dropdown">
                                            <li>
                                                <a href="#!">Команда</a>
                                            </li>
                                            <li>
                                                <a href="#!">DRUPALGIVE</a>
                                            </li>
                                            <li>
                                                <a href="#!">Блог</a>
                                            </li>
                                            <li>
                                                <a href="#!">Курсы DRUPAL</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#!">Проекты</a>
                                    </li>
                                    <li>
                                        <a href="#!">Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                    <div className="header_main">
                        <div className="heading">
                            <h1>Поддержка<br/>сайтов на Drupal</h1>
                            <p>
                                Сопровождение и поддержка сайтов<br/>на CMS Drupal любых версий и запущенности
                            </p>
                            <button className="tariffs">Тарифы</button>
                        </div>
                        <ul className="benefits_list">
                            <li>
                                <p>#1</p>
                                <p>
                                    Drupal-разработчик<br/>в России по версии<br/>Рейтинга Рунета
                                </p>
                            </li>
                            <li>
                                <p>3+</p>
                                <p>
                                    средний опыт<br/>специалистов более<br/>3 лет
                                </p>
                            </li>
                            <li>
                                <p>14</p>
                                <p>
                                    лет опыта в сфере<br/>Drupal
                                </p>
                            </li>
                            <li>
                                <p>200+</p>
                                <p>
                                    модулей и тем<br/>в формате DrupalGive
                                </p>
                            </li>
                            <li>
                                <p>35 000</p>
                                <p>
                                    часов поддержки<br/>сайтов на Drupal
                                </p>
                            </li>
                            <li>
                                <p>200+</p>
                                <p>
                                    Проектов<br/>на поддержке
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Header;