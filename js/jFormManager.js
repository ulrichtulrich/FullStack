

$("#submitFormBtn").click((e)=>{
    e.preventDefault();
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbynN2_CyZyGzMsMqCTYRkqPB4vVQo8jW13dpshIKDKJN70I9O5U10JJd8T1wcp0loQh6w/exec',
        type: 'get',
        dataType: 'json',
        data: $('form#contactForm').serialize(),
        success: function(data) {
                  console.log('data')
                  console.log(data)

                  alert('I have successfully receive your message and i will contact you as soon as possible!')

        }
    });
})