import LAPT from "../img/laptop.png"
const Drupal_experts = () =>{
    return(
        <section className="drupal_expertise">
            <div className="bg"/>
            <div className="right_container">
                <h2>Экспертиза в Drupal,<br/>опыт 14 лет!</h2>
                <ul>
                    <li>
                        <p>Только системный подход – контроль версий, резервирование и тестирование!</p>
                    </li>
                    <li>
                        <p>Только Drupal сайты, не берем на поддержку сайты на других CMS!</p>
                    </li>
                </ul>
            </div>
            <div className="laptop">
                <img src={LAPT} alt=""/>
            </div>
        </section>
    );
}
export default Drupal_experts;