import Modal from "./Modal/Modal";
import React, {useState} from "react";

const Tarifs = () =>{
    const [modalActive,setModalActive] = useState(false)
    return(
        <div>
        <section className="tariffs">
            <div className="wrapper">
                <h2>Тарифы</h2>
                <div className="container">
                    <div className="item side_item">
                        <div className="top">
                            <p className="tariff_name">Стартовый</p>
                        </div>
                        <ul className="tariff_terms">
                            <li>
                                <p>Предоплата от 2 часов</p>
                            </li>
                            <li>
                                <p>Консультации и работы по SEO</p>
                            </li>
                            <li>
                                <p>Услуги дизайнера</p>
                            </li>
                            <li>
                                <p>Стандартное время реакции</p>
                            </li>
                            <li>
                                <p>Неиспользованные оплаченные часы переносятся на следующий месяц</p>
                            </li>
                        </ul>
                        <button className="apply" onClick={() => setModalActive(true)}>Оставить заявку!</button>
                    </div>
                    <div className="item center_item">
                        <div className="top">
                            <p className="tariff_name">Бизнес</p>
                        </div>
                        <ul className="tariff_terms">
                            <li>
                                <p>Предоплата от 10 часов</p>
                            </li>
                            <li>
                                <p>Консультации и работы по SEO</p>
                            </li>
                            <li>
                                <p>Услуги дизайнера</p>
                            </li>
                            <li>
                                <p>Высокое время реакции – до 2 рабочих дней</p>
                            </li>
                            <li>
                                <p>Неиспользованные часы не переносятся</p>
                            </li>
                        </ul>
                        <button onClick={() => setModalActive(true)} className="apply">Оставить заявку!</button>
                    </div>
                    <div className="item side_item">
                        <div className="top">
                            <p className="tariff_name">VIP</p>
                        </div>
                        <ul className="tariff_terms">
                            <li>
                                <p>Предоплата от 100 часов</p>
                            </li>
                            <li>
                                <p>Консультации и работы по SEO</p>
                            </li>
                            <li>
                                <p>Услуги дизайнера</p>
                            </li>
                            <li>
                                <p>Максимальное время реакции – в день обращения</p>
                            </li>
                            <li>
                                <p>Неиспользованные часы не переносятся</p>
                            </li>
                        </ul>
                        <button onClick={() => setModalActive(true)} className="apply">Оставить заявку!</button>
                    </div>
                </div>
                <p className="individual_tariffs">
                    Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!
                </p>
                <div className="receive_tariff_center">
                    <a href="#" className="receive_tariff">
                        Получить индивидуальный тариф
                    </a>
                </div>
            </div>
        </section>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}

export default Tarifs;