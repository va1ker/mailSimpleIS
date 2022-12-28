let users = [
    {
        "login":"admin",
        "password":"12345",
        "role":"admin",
        "salary":"10000₽",
        "info":"+99999999",
        "date":"27.12.2000",
        "full_name":"Джон Смит Акадьевич"
    },
]

let filials = [
    {
        "name":"Филиал ”Зелинского”",
        "phone":"+7 911 650 93 75",
        "addres":"630005, Новосибирская область, г. Новосибирск, ул. Зелинского, д. 36",
        "date":"пн-пт: 10:00-19:00",
    },
    {
        "name":"Филиал ”Зелинского”",
        "phone":"+7 911 650 93 75",
        "addres":"630005, Новосибирская область, г. Новосибирск, ул. Зелинского, д. 36",
        "date":"пн-пт: 10:00-19:00",
    },
    {
        "name":"Филиал ”Зелинского”",
        "phone":"+7 911 650 93 75",
        "addres":"630005, Новосибирская область, г. Новосибирск, ул. Зелинского, д. 36",
        "date":"пн-пт: 10:00-19:00",
    },
]

let ships = [
    {
        "weight":"100KG",
        "dateOfSend":"10.10.2022",
        "dateOfArrive":"05.01.2022",
        "material":"cotton",
        "receiverFullname":"Elon Reeve Musk",
        "senderFullname":"John Smith",
        "address":"Tesla Str. 1, 15537 Grünheide (Mark), Германия"
    },
    {
        "weight":"100KG",
        "dateOfSend":"10.10.2022",
        "dateOfArrive":"05.01.2022",
        "material":"cotton",
        "receiverFullname":"Elon Reeve Musk",
        "senderFullname":"John Smith",
        "address":"Tesla Str. 1, 15537 Grünheide (Mark), Германия"
    },
    {
        "weight":"100KG",
        "dateOfSend":"10.10.2022",
        "dateOfArrive":"05.01.2022",
        "material":"cotton",
        "receiverFullname":"Elon Reeve Musk",
        "senderFullname":"John Smith",
        "address":"Tesla Str. 1, 15537 Grünheide (Mark), Германия"
    }
]

$(document).ready(function(){
    if(localStorage.getItem("role")){
        $("body").removeClass("login")
        $("body").addClass(localStorage.getItem("role"))
    }
})

$(".login-form").validate({
    submitHandler: function(form) {
        $(".login-form").validate()
        let username = $("#username").val()
        let password = $("#password").val()
        let role = ""
        for (let i = 0; i<3; i++){
            if (users[i]["login"] == username && users[i]["password"] == password){
                role = users[i]["role"]
                localStorage.setItem("role", role)
            }
        }
        if (!role){
            alert("Данные не верны")
        }
        else{
            $("body").removeClass("login")
            $("body").addClass(role)
        }
    
      }
})

$(".postcred-form").validate({
    submitHandler: function(form) {
        console.log("postcred-form")
      }
})

$(".autocred-form").validate({
    submitHandler: function(form) {
        console.log("autocred-form")
      }
})

function exitButton(){
    $("body").removeClass()
    $("body").addClass("login")
    $(".login-form").trigger("reset")
    localStorage.clear()
}

function createAdminTable(){
    for (i = 0; i < ships.length; i++){
        let weight = ships[i]["weight"]
        let dateOfSend = ships[i]["dateOfSend"]
        let dateOfArrive = ships[i]["dateOfArrive"]
        let material = ships[i]["material"]
        let receiverFullname = ships[i]["receiverFullname"]
        let senderFullname = ships[i]["senderFullname"]
        let address = ships[i]["address"]
        let htmlblock = `
        <div class="col col-md-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://www.rspectr.com/files/news/28dec83c42fc94349bdc45154095bf07.jpg" class="img-fluid rounded-start" alt="...">
            <div class="card-body">
              <h5 class="card-title">Посылка от ${senderFullname}</h5>
              <p class="card-text">Дата отправки: ${dateOfSend} <br> Дата получения: ${dateOfArrive}<br> Материал: ${material}<br>Вес: ${weight}<br>Получатель: ${receiverFullname}<br> ${address}</p>
              <p class="card-text"><small class="text-muted">Последнее обновление 3 минуты назад</small></p>
            </div>
        </div>
      </div>
        `
        let name = filials[i]["name"]
        let phone = filials[i]["phone"]
        let addres = filials[i]["addres"]
        let date2 = filials[i]["date"]
        let htmlblock2 = `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${name}</td>
            <td>${phone}</td>
            <td>${addres}</td>
            <td>${date2}</td>
        </tr>
        `
        $(".table-stuff-wrapper").append(htmlblock)
        $("#admin-table-filials").append(htmlblock2)
    }
}
createAdminTable()

$("#cred-select").on("change", function(){
    let selected = $(this).find(":selected").val()
    let $autoCredForm = $(".autocred-form")
    let $postCredForm = $(".postcred-form")
    $autoCredForm.trigger("reset")
    $postCredForm.trigger("reset")
    switch(selected){
        case "3":
        case "1": 
            $postCredForm.show()
            $autoCredForm.hide()
            break;
        case "2": 
            $postCredForm.hide()
            $autoCredForm.show()
            break;
        default:
            $autoCredForm.hide()
            $postCredForm.hide()
    }
})