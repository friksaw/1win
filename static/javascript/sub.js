document.querySelectorAll('.offer-link').forEach(item => {
        item.addEventListener('click', e => {
                e.preventDefault();
                window.open(item.dataset.href, item.getAttribute('target'));
            }
        )
    }
);
window.loadMoreButton = function() {
    console.log(document.querySelectorAll('[data-offer-set]'));
    document.querySelectorAll('[data-offer-set]').forEach(item => {
            item.addEventListener('click', e => {
                    e.preventDefault();
                    item.getAttribute('target');
                    let formData = new FormData();
                    formData.append('offerSet', item.getAttribute('data-offer-set'));
                    formData.append('page', item.getAttribute('data-page'));
                    formData.append('limit', item.getAttribute('data-limit'));
                    formData.append('template', item.getAttribute('data-template'));
                    let container = document.querySelector(item.getAttribute('data-container'));
                    fetch('/api/offerSet.php', {
                        method: 'POST',
                        body: formData
                    }).then(resp => resp.text()).then(resp => {
                            container.innerHTML += resp;
                            item.setAttribute('data-page', parseInt(item.getAttribute('data-page')) + 1)
                        }
                    );
                }
            )
        }
    );
}
window.loadMoreButton();
const click = () => {
    window.open('/go/auth', '_self');
}
window.popup_show = click;
window.VKConnect = click;
window.MailruConnect = click;
window.OdklConnect = click;
window.FbConnect = click;
window.YandexConnect = click;
window.GmailConnect = click;
window.save_trackers = click;
$('.js-open-game').click(click);
$('.js-show-auth-mobile').click(click);
$('.js-play-game').click(click);
$('.js-show-livechat').click(click)
