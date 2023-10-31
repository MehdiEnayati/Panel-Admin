document.addEventListener('DOMContentLoaded', function () {

    function removeAllSidebarToggleClass() {
        document.getElementById('sidebar-toggle-hide').classList.remove('d-md-inline');
        document.getElementById('sidebar-toggle-hide').classList.remove('d-none');
        document.getElementById('sidebar-toggle-show').classList.remove('d-inline');
        document.getElementById('sidebar-toggle-show').classList.remove('d-md-none');
    }

    document.getElementById('sidebar-toggle-hide').addEventListener('click', function () {
        document.getElementById('sidebar').style.display = 'none';
        document.getElementById('main-body').style.width = '100%';
        setTimeout(function () {
            removeAllSidebarToggleClass();
            document.getElementById('sidebar-toggle-hide').classList.add('d-none');
            document.getElementById('sidebar-toggle-show').classList.remove('d-none');
        }, 300);
    });

    document.getElementById('sidebar-toggle-show').addEventListener('click', function () {
        document.getElementById('sidebar').style.display = 'block';
        setTimeout(function () {
            removeAllSidebarToggleClass();
            document.getElementById('sidebar-toggle-hide').classList.remove('d-none');
            document.getElementById('sidebar-toggle-show').classList.add('d-none');
        }, 300);
    });

    document.getElementById('menu-toggle').addEventListener('click', function () {
        let BodyHeader = document.getElementById("body-header")
        BodyHeader.style.display = BodyHeader.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('search-toggle').addEventListener('click', function () {
        document.getElementById('search-toggle').classList.remove('d-md-inline');
        document.getElementById('search-area').classList.add('d-md-inline');
        document.getElementById('search-input').style.width = '12rem';
    });

    document.getElementById('search-area-hide').addEventListener('click', function () {
        document.getElementById('search-input').style.width = '0';
        setTimeout(function () {
            document.getElementById('search-toggle').classList.add('d-md-inline');
            document.getElementById('search-area').classList.remove('d-md-inline');
        }, 300);
    });

    document.getElementById('header-notifictation-toggle').addEventListener('click', function () {
        let headerNotification = document.getElementById('header-notifictation');
        headerNotification.style.display = headerNotification.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('header-comment-toggle').addEventListener('click', function () {
        let headerComment = document.getElementById('header-comment');
        headerComment.style.display = headerComment.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('header-profile-toggle').addEventListener('click', function () {
        let headerProfile = document.getElementById('header-profile');
        headerProfile.style.display = headerProfile.style.display === 'block' ? 'none' : 'block';
    });

    let sidebarGroupLinks = document.querySelectorAll('.sidebar-group-link');
    sidebarGroupLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            sidebarGroupLinks.forEach(function (item) {
                item.classList.remove('sidebar-group-link-active');
                let angle = item.querySelector('.sidebar-dropdown-toggle .angle');
                angle.classList.remove('fa-angle-down');
                angle.classList.add('fa-angle-left');
            });
            link.classList.add('sidebar-group-link-active');
            let angle = link.querySelector('.sidebar-dropdown-toggle .angle');
            angle.classList.remove('fa-angle-left');
            angle.classList.add('fa-angle-down');
        });
    });
});

document.getElementById('full-screen').addEventListener('click', function () {
    toggleFullScreen();
});

function toggleFullScreen() {
    if (
        (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)
        || (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
        let element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }

        document.getElementById('screen-compress').classList.remove('d-none');
        document.getElementById('screen-expand').classList.add('d-none');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }

        document.getElementById('screen-compress').classList.add('d-none');
        document.getElementById('screen-expand').classList.remove('d-none');
    }
}