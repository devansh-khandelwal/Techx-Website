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

const scheduleContent = document.getElementsByClassName('schedule-timeline__checkpoint-bullet');
for(let i = 0; i < scheduleContent.length; i++) {
    scheduleContent[i].addEventListener('click', function() {
        for(let j = 0; j < scheduleContent.length; j++) {
            scheduleContent[j].classList.remove('schedule-timeline__checkpoint-bullet--selected');
            document.getElementById(scheduleContent[j].getAttribute('data-target')).classList.remove('schedule-timeline__selected-content');
        }
        this.classList.add('schedule-timeline__checkpoint-bullet--selected');
        document.getElementById(this.getAttribute('data-target')).classList.add('schedule-timeline__selected-content');
    });
}