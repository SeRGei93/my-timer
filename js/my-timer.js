const timer = function(node){
    const wrapper = document.querySelector(node),
        deadline = wrapper.getAttribute('data-end'),
        days = wrapper.querySelector('#days'),
        hours = wrapper.querySelector('#hours'),
        minutes = wrapper.querySelector('#minutes'),
        seconds = wrapper.querySelector('#seconds'),
        getTimeRemaining = function(){
            const total = Date.parse(deadline) - new Date();
            return {
                'total': total,
                'days': Math.floor(total / (1000 * 60 * 60 * 24)),
                'hours': Math.floor((total / (1000 * 60 * 60) % 24)),
                'minutes': Math.floor((total / 1000 / 60) % 60),
                'seconds': Math.floor((total / 1000) % 60)
            };
        },
        addZero = function(num){
            if(num >= 0 && num < 10){
                return `0${num}`;
            }else{
                return num;
            }
        },
        updateClock = function(){
            const t = getTimeRemaining(deadline),
                timeInerval = setInterval(updateClock, 1000);

            days.innerHTML = addZero(t.days);
            if(hours){
                hours.innerHTML = addZero(t.hours);
            }
            if(minutes){
                minutes.innerHTML = addZero(t.minutes);
            }
            if(seconds){
                seconds.innerHTML = addZero(t.seconds);
            }
            if(t.total <= 0){
                clearInterval(timeInerval);
            }
        },
        setClock = function(){
            updateClock();
        };

        setClock();
};



