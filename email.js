(function () {
  emailjs.init("user_QiGRgIFKKiT92rjerwQ0V");
})();

const fromName = document.getElementById("fromName").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;

function sendMail(params) {
  var tempParams = {
    fromName: fromName,
    name: fromName,
    email: email,
    subject: subject,
    message: message,
  };

  emailjs
    .send("service_5z39b0j", "template_u7wpjzj", tempParams)
    .then(function (res) {
      console.log("success", res.status);
    });

  document.querySelector("form").onsubmit = (e) => {
    e.target.submit();
    e.target.reset();
    return false;
  };

    Swal({
      toast: true,
      icon: 'success',
      title: 'Mail sent successfully',
      animation: false,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })


  // document.querySelector(".second").addEventListener("click", function () {
  //   Swal.fire({
  //     toast: true,
  //     icon: "success",
  //     title: "Mail sent successfully",
  //     animation: false,
  //     position: "bottom",
  //     showConfirmButton: false,
  //     timer: "3000",
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.addEventListener("mouseenter", Swal.stopTimer);
  //       toast.addEventListener("mouseleave", Swal.resumeTimer);
  //     },
  //   });
  // });
}
