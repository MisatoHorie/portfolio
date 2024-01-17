(function () {
    var today = new Date();
    document.querySelectorAll('[data-birth]').forEach(function (element) {
    var birth = element.getAttribute('data-birth');
    if (birth.match(/^\d{4}(-|\/)\d{2}(-|\/)\d{2}$/)) {
    var birthDate = new Date(birth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
    }
    age = Math.max(age, 0);
    element.innerHTML = age;
    }
    });
    })();