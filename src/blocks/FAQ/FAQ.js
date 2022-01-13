import "./FAQ.css"
import $ from "jquery"
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
        $(items[i]).parent().css({'border' : 'none'});
    }

    if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
        $(this).parent().css({'border' : '3px solid #F14D34'});
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
const FAQ = () =>{

    return(
        <div>
            <section className="FAQ">
                <div className="container">
                    <h2 >FAQ</h2>
                    <div className="accordion">
                        <div className="accordion-item">
                            <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">Кто непосредственно занимается поддержкой?</span><span
    className="icon" aria-hidden="true" onClick={"toggleAccordion()"}/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Как организована работа поддержки?</span><span
    className="icon" aria-hidden="true" onClick="toggleAccordion()"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Что происходит, когда отработаны все предоплаченные часы за месяц?</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">Что происходит, когда НЕ отработаны все предоплаченные часы за месяц?</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">Как происходит оценка и согласование планируемого времени на выполнение заявок?</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-6" aria-expanded="false"><span className="accordion-title">Сколько программистов выделяется на проект?</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-7" aria-expanded="false"><span className="accordion-title">Как подать заявку на внесение изменений на сайте?</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-8" aria-expanded="false"><span className="accordion-title">Как подать заявку на добавление пользователя, изменение настроек веб-сервера и других задач по администрированию?</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-9" aria-expanded="false"><span className="accordion-title">В течение какого времени начинается работа по заявке??</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-10" aria-expanded="false"><span className="accordion-title">В какое время работает поддержка?</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-11" aria-expanded="false"><span className="accordion-title">Подходят ли услуги поддержки, если необходимо произвести обновление ядра Drupal или модулей?</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-12" aria-expanded="false"><span className="accordion-title">Можно ли пообщаться со специалистом голосом или в мессенджере?</span><span
    className="icon" aria-hidden="true"/></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                    ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;