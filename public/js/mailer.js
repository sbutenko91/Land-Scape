$("#contact-form").submit(() => {
    var name = $("#name").val();
    var email = $("#email").val();
    var phoneNumber = $("#phoneNumber").val();
    var message = $("#message").val();
    var mail = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        message: message
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:8088/mail',
        contentType: "application/json",
        data: JSON.stringify(mail),
        success: function () {
            $("input, textarea").val("");
            $("form").attr("novalidate",true);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error, status = " + textStatus + ", " +
                "error thrown: " + errorThrown
            );
        },
        dataType: 'text'
    });
});

$("#contact-form").submit(function (e) {
    e.preventDefault();
});