import React from "react";
import "./down.css"
import $ from "jquery";
import swal from "sweetalert";

$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        const href = $(this).attr("action");
        let but = $('#send_request');
        but.attr('disabled', 'disabled');
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status === "success"){
                    swal({title:"We received your submission",text: "thank you!",icon:"success",button:"Aww yiss!"});
                    $("#form_")[0].reset();
                }else{
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "failed",
                        button: "Try again",
                    });
                }
            }
        });
    });
});

const Down = () =>{
    return(
          <div>
              <section className="down">
                  <div className="footer">
                      <div id="left-footer">
                          <div id="left-help">
                              <div id="help">
                                  <div id="title">
                                      Оставить заявку на
                                      <br/>
                                      поддержку сайта
                                      <br/>
                                  </div>
                                  <div id="text">
                                      Срочно нужна поддержка сайта? Ваша команда не успевает
                                      справиться самостоятельно или предыдущий подрядчик не
                                      справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер
                                      с вами свяжется!
                                  </div>
                              </div>
                              <ul id="list">
                                  <li className="phone">
                                      <a href="tel:88002222673">8 800 222-26-73</a>
                                  </li>
                                  <li className="email">
                                      <a href="mailto:info@drupal-coder.ru">info@drupal-coder.ru</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div id="right-footer">
                          <div id="right-help">
                              <form className="ajaxForm" action="https://formcarry.com/s/EIpTc4fb1au" acceptCharset="UTF-8" id="form_">
                                  <label>
                                      <input id="name" type="text" placeholder="Ваше имя" required="required" name="name"/>
                                  </label>
                                  <br/>
                                  <label>
                                      <input id = "phone" type="text" placeholder="Tелефон" required="required" name="phone"/>
                                  </label>
                                  <br/>
                                  <label>
                                      <input id = "email" type="email" placeholder="Email" required="required" name="email"/>
                                  </label>
                                  <br/>
                                  <label>
                                      <textarea id = "mess" placeholder="Ваш комментарий" name="mess"/>
                                  </label>
                                  <input type="checkbox"/>
                                  <label><a>  Отправляя заявку, я даю согласие на обработку
                                      своих<br/> <a href="https://drupal-coder.ru/privacy-policy" id="link_personal_data">персональных данных</a> </a></label>
                                  <button id="send_request" type="submit">
                                      оставить заявку
                                  </button>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div id="line_footer"/>
                  <div id="under_footer">
                      ООО «Инитлаб», Краснодар, Россия.<br/>
                      Drupal является зарегистрированной торговой маркой Dries Buytaert.
                  </div>
              </section>
          </div>
    );
}
export default Down;