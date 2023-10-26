document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');
    const heroSection = document.querySelector('.hero');
    
    const alturaHero = heroSection.clientHeight;

    //header
    window.addEventListener('scroll', function() {
        const position = window.scrollY;

        if (position < alturaHero - 100)
        {
            ocultarHeader();
        }
        else
        {
            exibirHeader();
        }
    })


    // factions
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener('click', function(btn) {
            const tabTarget = btn.target.dataset.tabButton;

            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            hideTabs();
            tab.classList.add('factions__list--is-active');

            hideBtn();
            btn.target.classList.add('factions__tabs__button--is-active');
        })
    }
    /*

    // FAQ accordion
    for (let i = 0; i < questions.length; i++)
    {
        questions[i].addEventListener('click', abreFecha);
    }
     */
})

function abreFecha(elemento) {
    const classe = 'faq__questions__item--is-open'

    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function ocultarHeader ()
{
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
function exibirHeader ()
{
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function hideBtn()
{
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.remove('factions__tabs__button--is-active')
    }

}
function hideTabs()
{
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++)
    {
        tabsContainer[i].classList.remove('factions__list--is-active')
    }
}