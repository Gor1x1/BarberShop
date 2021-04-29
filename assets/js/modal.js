var link = document.querySelector(".login-link");
    popup = document.querySelector(".modal-login");
    close = popup.querySelector(".modal-close");
    form = popup.querySelector("form");
    login = popup.querySelector("[name=login]");
    password = popup.querySelector("[name=password]");
    isStorageSupport = true;
    storage = "";
    try {
        storage = localStorage.getItem("login");
    } catch (err) {
        isStorageSupport = false;
    }
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        if (storage) {
            login.value = storage;
            password.focus();
        } else{
            login.focus();
        }
    });
    close.addEventListener("click", function (evt){
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error")
    });
    form.addEventListener("submit", function (evt){
        if (!login.value || !password.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("login", login.value);
            }
        }
    });    
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if(popup.classList.contains("modal-show")){
                popup.classList.remove("modal-show");
            }       
        }
    });

