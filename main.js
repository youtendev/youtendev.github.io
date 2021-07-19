$(document).ready(() => {
  //   $("#open-discord").click(() => {
  //     openDiscord()
  //   })

  $("#close-btn").click(() => {
    closeModal()
  })

  openDiscord = () => {
    $(".scale-ver-top").css("animation-name", "scale-in-ver-top")
    $(".scale-ver-top").css("-webkit-animation-name", "scale-in-ver-top")
    $("#modal").css("display", "block")

    $("#modal-content").html(
      "<h1 class='modal-title fade-in'>ลิงค์เข้า Discord</h1><p class='modal-details'>" +
        "<a href='https://discord.gg/6NAcF39J' target='_blank'rel='noopener noreferrer' class='modal-link-btn fade-in'>Discord ปี5</a>" +
        "<a href='https://discord.gg/6NAcF39J' target='_blank'rel='noopener noreferrer' class='modal-link-btn fade-in'>Discord ปี3</a></p>"
    )
  }

  openWork = () => {
    $(".scale-ver-top").css("animation-name", "scale-in-ver-top")
    $(".scale-ver-top").css("-webkit-animation-name", "scale-in-ver-top")
    $("#modal").css("display", "block")

    $("#modal-content").html(
      "<h1 class='modal-title fade-in'>ผลลงานนักศึกษา</h1><p class='modal-details'>" +
        "<a href='#' target='_blank'rel='noopener noreferrer' class='modal-link-btn fade-in'>กลุ่มที่ 1</a>" +
        "<a href='#' target='_blank'rel='noopener noreferrer' class='modal-link-btn fade-in'>กลุ่มที่ 2</a>" +
        "<a href='#' target='_blank'rel='noopener noreferrer' class='modal-link-btn fade-in'>กลุ่มที่ 3</a></p>"
    )
  }
  closeModal = () => {
    $(".scale-ver-top").css("animation-name", "scale-out-ver-top")
    $(".scale-ver-top").css("-webkit-animation-name", "scale-out-ver-top")
    // $("#modal").css("display", "none")
  }
})
