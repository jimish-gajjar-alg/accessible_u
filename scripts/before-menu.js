/*
 * JavaScript for Accessible University Demo Site
 * http://uw.edu/accesscomputing/AU
 *
 * before-menu.js = Custom inaccessible Dropdown Menu
 */

// $(document).ready(function() {

//   var timeout = 3000;
//   var timer = 0;
//   var subMenu = null;

//   $("#menu > li")
//     .on('mouseenter',function(){
//       // close previously open submenu
//       closeSubMenu();
//       // get and show new submenu
//       subMenu = $(this).children('ul');
//       subMenu.show();
//       clearTimeout(timer);
//     })
//     .parent().mouseout(function(){
//       clearTimeout(timer);
//       timer = setTimeout(function(){
//         closeSubMenu();
//       },timeout);
//     });

//   // close subMenu when click-out
//   document.onclick = closeSubMenu;

//   function closeSubMenu() {
//     if (subMenu) {
//       subMenu.hide();
//       subMenu = null;
//     }
//   }
// });
$(document).ready(function () {
    $('.dropdown-toggle').on('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            $(this).dropdown('toggle');
        }
    });

    $('.dropdown-menu').on('keydown', 'a', function (event) {
        var $items = $(this).closest('.dropdown-menu').find('.dropdown-item');
        var index = $items.index(this);

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (index < $items.length - 1) {
                $items.eq(index + 1).focus();
            }
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (index > 0) {
                $items.eq(index - 1).focus();
            }
        }

        if (event.key === 'Escape') {
            $(this).closest('.dropdown-menu').prev().dropdown('toggle').focus();
        }
    });
});
