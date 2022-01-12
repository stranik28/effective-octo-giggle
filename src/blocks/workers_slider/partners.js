import "./partners.css"
import Workers_slider from "./workers_slider";
import Workers_slider2 from "./workers_slider2";
const Partners = () =>{
    return(
        <div className="partners">
            <h2>
                С нами работают
            </h2>
            <div>
            <p>Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты.
                <br/>Мы делаем всё, чтобы наше сотрудничество было долгим.</p>
            </div>
            <br/>
            <Workers_slider/>
            <Workers_slider2/>
        </div>
    );
}
export default Partners;