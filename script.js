// dark moods and light moods

let button = document.getElementById('btn');

function DarkAndLight(e){
    if(e.target.checked == true){

        document.body.style.backgroundColor = 'black'
        let panels = document .getElementById('panel-body');
        panels.style.backgroundColor = "#282828"

        let profile = document.getElementById('right');
        profile.style.backgroundColor = "#282828"

        let email = document.getElementById('gmail')
        email.style.color = '#EDF7F6'

        let text = document.getElementById('text')
        text.style.color = 'white'

        let text2 = document.getElementById('text2')
        text2.style.color = 'white'

        let text3 = document.getElementById('text3')
        text3.style.color = 'white'

        let text4 = document.getElementById('text4')
        text4.style.color = 'white'

        let text5 = document.getElementById('text5')
        text5.style.color = 'white'

        let product2 = document.getElementById('product2')
        product2.style.backgroundColor = "#282828"

        let product3 = document.getElementById('product3')
        product3.style.backgroundColor = "#282828"

        let text6 = document.getElementById('text6')
        text6.style.color = 'white'

        let amar = document.getElementById('amar')
        amar.style.backgroundColor = "#282828"

        let text7 = document.getElementById('text7')
        text7.style.color = 'white'

        let footer =document.getElementById('foot')
        footer.style.backgroundColor = '#282828'

        let span = document.getElementById('t-foot')
        span.style.color = 'white'

        let span1 = document.getElementById('t-foot1')
        span1.style.color = 'white'

        let span2 = document.getElementById('t-foot2')
        span2.style.color = 'white'
        
        let span3 = document.getElementById('t-foot3')
        span3.style.color = 'white'
    }else{
        document.body.style.backgroundColor = 'aliceblue'

        let panels = document .getElementById('panel-body');
        panels.style.backgroundColor = "white"

        let profile = document.getElementById('right');
        profile.style.backgroundColor = "white"

        let email = document.getElementById('gmail')
        email.style.color = 'black'

        let text = document.getElementById('text')
        text.style.color = 'black'

        let text2 = document.getElementById('text2')
        text2.style.color = 'black'

        let text3 = document.getElementById('text3')
        text3.style.color = 'black'

        let text4 = document.getElementById('text4')
        text4.style.color = 'black'

        let text5 = document.getElementById('text5')
        text5.style.color = 'black'

        let product2 = document.getElementById('product2')
        product2.style.backgroundColor = "white"

        let product3 = document.getElementById('product3')
        product3.style.backgroundColor = "white"

        let text6 = document.getElementById('text6')
        text6.style.color = 'black'

        let amar = document.getElementById('amar')
        amar.style.backgroundColor = "white"

        let text7 = document.getElementById('text7')
        text7.style.color = 'black'
    }
}

button.addEventListener('input',DarkAndLight)