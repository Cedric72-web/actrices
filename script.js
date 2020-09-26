$(function(){

    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,

    init = function(){
        bindEvents();
        if(validIndex(openedIndex)){
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
        }
    },
    bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){
            var newIndex = $(this).parent().index();
            checkAndAnimatedItem(newIndex);

        });
        $(".button").hover(function(){
            $(this).addClass("hovered");
        },
        function(){
            $(this).removeClass("hovered");

        }
        );
        $(".button").click(function(){
            var newIndex = $(this).index();
            checkAndAnimatedItem(newIndex);
        });
    },
    validIndex = function(indexToCheck){
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    }
    animateItem = function($item, toOpen, speed){
        var $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width: "420px"}:{width: "140px"},
        colorImageParam = toOpen ? {left: "0px"}:{left: "140px"};
        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam,speed);
    },
    checkAndAnimatedItem = function(indexToCheckAndAnimated){
        if(openedIndex === indexToCheckAndAnimated){
            animateItem($mainMenuItems.eq(indexToCheckAndAnimated), false, 250);
            openedIndex = -1
        }
        else{
            if(validIndex(indexToCheckAndAnimated)){
                animateItem($mainMenuItems.eq(openedIndex), false, 250);
                openedIndex = indexToCheckAndAnimated;
                animateItem($mainMenuItems.eq(indexToCheckAndAnimated), true, 250);
            }
        }
    };

    init();

});