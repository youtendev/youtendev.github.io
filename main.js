$(document).ready(() => {
  //   $("#open-discord").click(() => {
  //     openDiscord()
  //   })

  $("#close-btn").click(() => {
    closeModal()
  })
  $("#close-btn").hover(() => {
    $("#close-btn").addClass("rotate-in")
    $("#close-btn").removeClass("rotate-out")
  })
  $("#close-btn").mouseleave(() => {
    $("#close-btn").addClass("rotate-out")
    $("#close-btn").removeClass("rotate-in")
  })

  openDiscord = () => {
    $("#modal").css("display", "block")
    $("#modal-content").html(
      "<h1 class='modal-title'>ลิงค์เข้า Discord</h1><p class='modal-details'>" +
        "<a href='https://discord.gg/6NAcF39J' target='_blank'rel='noopener noreferrer' class='modal-link-btn'>Discord</a></p>"
    )
  }
  const closeModal = () => {
    $("#modal").css("display", "none")
  }
})
