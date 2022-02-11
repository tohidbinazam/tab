const menu = document.querySelectorAll('.tohi_tab .tab_head ul a');
const tab_pan =document.querySelectorAll('.tohi_tab .tab_body .tab_pane')


menu.forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        menu.forEach(data => {
            data.classList.remove('active');
        })
        item.classList.add('active');

        const tab_dat = document.querySelector(item.getAttribute('href'));
        tab_pan.forEach(output => {
            output.classList.remove('active');
        })
        tab_dat.classList.add('active');
    })
})



// side tab

const side_tab = document.querySelectorAll('.left_tab ul a');
const tab_content = document.querySelectorAll('.tab_content');

side_tab.forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        tab_content.forEach(data => {
            data.classList.remove('active');
        })
        const content = document.querySelector(item.getAttribute('href'));
        content.classList.add('active');
    })
})

