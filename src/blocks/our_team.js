import IMG1 from "../img/IMG_2474_1.jpg"
import IMG2 from "../img/IMG_2539_0.jpg"
import IMG3 from "../img/IMG_2522_0.jpg"
import IMG4 from "../img/IMG_9971_16.jpg"
import IMG5 from "../img/IMG_2472_0.jpg"
import IMG6 from "../img/image6.png"

const Our_team = () =>{
    return(
      <div>
          <section className="our_team">
              <div className="wrapper">
                  <h2>Команда</h2>
                  <div className="container">
                      <div className="item">
                          <img src={IMG1} alt=""/>
                              <h4>Лёша</h4>
                              <p>руководитель поддержки, планирование задач</p>
                      </div>
                      <div className="item">
                          <img src={IMG2} alt=""/>
                              <h4>Роман</h4>
                              <p>инфраструктура веб-проектов</p>
                      </div>
                      <div className="item">
                          <img src={IMG3} alt=""/>
                              <h4>Ирина</h4>
                              <p>менеджер по работе с клинетами, организация оказания услуг</p>
                      </div>
                      <div className="item">
                          <img src={IMG4} alt=""/>
                              <h4>Даша</h4>
                              <p>SEO, веб-маркетинг</p>
                      </div>
                      <div className="item">
                          <img src={IMG5} alt=""/>
                              <h4>Сергей</h4>
                              <p>технический директор, 14 лет опыт работы с Drupal</p>
                      </div>
                      <div className="item">
                          <img src={IMG6} alt=""/>
                              <h4>Вадим</h4>
                              <p>UX/UI дизайн</p>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    );
}
export default Our_team;