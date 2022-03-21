const tabs = document.getElementsByClassName('schedule-tab');
for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        for(let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('selected-tab');
            document.getElementById(tabs[j].getAttribute('data-content')).classList.remove('schedule-content-selected');
        }
        this.classList.add('selected-tab');
        document.getElementById(this.getAttribute('data-content')).classList.add('schedule-content-selected');
    });
}


const tab = document.getElementsByClassName("schedule-tab-faq");
for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function () {
    for (let j = 0; j < tab.length; j++) {
      tab[j].classList.remove("selected-tab");
      document.getElementById(tab[j].getAttribute("data-content")).classList.remove("schedule-content-selected");
    }
    this.classList.add("selected-tab");
    document.getElementById(this.getAttribute("data-content")).classList.add("schedule-content-selected");
  });
}
