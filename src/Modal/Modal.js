import React, {useState} from "react";
import "./form.css"
import "./Modal.css"
import $ from 'jquery'
import swal from 'sweetalert';

let c;
$(document).ready(function () {
    c = true;
});
$('input').on('input invalid', function() {
    this.setCustomValidity('')
    if (this.validity.valueMissing) {
        this.setCustomValidity("Кажется вы что-то забыли заполнить")
    }
});

$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        const href = $(this).attr("action");
        let but = $('#send_request');
        but.attr('disabled', 'disabled');
        c = false;
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status === "success"){
                    swal({title:"We received your submission",text: "thank you!",icon:"success",button:"Aww yiss!"});
                    c =true;
                    $("#form_in_pop_up")[0].reset();
                }else{
                    c = true;
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "failed",
                        button: "Try again",
                    });
                }
            }
        });
        c =true;
        but.removeAttr('disabled');
    });
});

function close(){
    let el = document.getElementsByClassName("modal")[0];
    let op = 1;
    requestAnimationFrame(function anim (){
        el.style.opacity = op;
        op-=0.1;
        if(op > 0) {
            requestAnimationFrame(anim);
        }
    });
    $('#pop-up').removeClass('active');
    $(window).off('popstate');
    window.history.back();
    window.history.back();
    console.log("close");
}
const Modal = ({active,setActive}) => {
    function cl(){
        setActive(false);
        close();
    }
    let el = document.getElementsByClassName("modal")[0];
    let op = 0;
    if(active === true) {
        requestAnimationFrame(function anim() {
            el.style.opacity = op;
            op += 0.05;
            if (op < 1.05) {
                requestAnimationFrame(anim);
            }
        });
        if(window.history.state !== 'popup-open') {
            console.log("open");
            window.history.pushState(null, null, "#contact_form");
            console.log("creat_yu");
            $(window).on('popstate', cl);
        }
    }
    return(
        <div className={active? "modal active" : "modal"} onClick={() => {if((c===true) && active){
            console.log("need_to_close");
            cl();
        }}}>
            <div className={active? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()} id="content">
                    <div id="right-help">
                        <form className="ajaxForm" action="https://formcarry.com/s/EIpTc4fb1au" acceptCharset="UTF-8" id="form_in_pop_up">
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
                            <input type="checkbox" id="checker" value="yes" name="checker" className="custom_check" required="required" />
                            <label htmlFor="checker"><a>Отправляя заявку, я даю согласие на обработку
                                своих<br/> <a href="https://drupal-coder.ru/privacy-policy" id="link_personal_data">персональных данных</a> </a></label>
                            <button id="send_request" type="submit">
                                оставить заявку
                            </button>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Modal;