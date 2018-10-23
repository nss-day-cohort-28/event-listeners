countClicks = () => {
  btn_count++
  document.querySelector("#btnCount").innerHTML = `This btn has been clicked ${btn_count} times, but never on the View Stuff page`
}
