import IMG7 from "../img/cases_img7.png"
import IMG6 from "../img/cases_img6.png"
import IMG5 from "../img/cases_img5.png"
import IMG4 from "../img/cases_img4.png"
import IMG3 from "../img/cases_img3.png"
import IMG2 from "../img/cases_img2.png"
import IMG1 from "../img/cases_img1.png"
const Recent_cases = () =>{
    return(
        <section className="recentCases">
            <div className="wrapper">
                <h2>Последние кейсы</h2>
                <div className="container">
                    <div className="item item1">
                        <img src={IMG1} alt=""/>
                            <h3>Настройка выгрузки YML для Яндекс.Маркета</h3>
                            <p className="subhead">22.04.2019</p>
                            <p>Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.</p>
                    </div>
                    <div className="item item2">
                        <h3>Настройка выгрузки YML для Яндекс.Маркета</h3>
                        <img src={IMG2} alt=""/>
                    </div>
                    <div className="item item3">
                        <h3>Настройка выгрузки YML для Яндекс.Маркета</h3>
                        <p className="subhead">22.04.2019</p>
                        <img src={IMG3} alt=""/>
                    </div>
                    <div className="item item4">
                        <h3>Настройка выгрузки YML для Яндекс.Маркета</h3>
                        <p className="subhead">22.04.2019</p>
                        <img src={IMG4} alt=""/>
                    </div>
                    <div className="item item5">
                        <img src={IMG5} alt=""/>
                            <h3>Настройка выгрузки YML для Яндекс.Маркета</h3>
                            <p className="subhead">22.04.2019</p>
                            <p>Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.</p>
                    </div>
                    <div className="item item6">
                        <h3>Настройка выгрузки YML для Яндекс.Маркета</h3>
                        <img src={IMG6} alt=""/>
                    </div>
                    <div className="item item7">
                        <h3>Настройка выгрузки YML для Яндекс.Маркета</h3>
                        <p className="subhead">22.04.2019</p>
                        <img src={IMG7} alt=""/>
                    </div>
                </div>
                <button className="show_more">Показать ещё</button>
            </div>
        </section>
    );
}
export default Recent_cases;