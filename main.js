/*----------testimonial slider----------*/
function testimonialslider(){
    const CarouselOne = document.getElementById('CarouselOne');
    if(CarouselOne)
    {
        CarouselOne.addEventListener('slid.bs.carousel', function() {
            const activeItem =this.querySelector(".active");
            document.querySelector("js-testmonial-img").src=activeItem.getAtribute("data-js-testmonial-img");
            
          })
    }  
}


testimonialslider();

/* header-menu */
function headermenu(){
    const menu = document.querySelector("js.header-menu"),
    backdrop = document.querySelector("js-header-backdrop"),
    menuCollapseBreakpoint = 991;

    function togglemenu(){
        menu.classList.toggle(open);
        backdrop.classList.toggle("active");
        document.body.classList.toggle("overflow-hidden");
        
    }
    document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
        item.addEventListener("click",togglemenu);
    });
    //close the menu by clicking outside
    backdrop.addEventListener("click",togglemenu);

    function collapse(){
        menu.querySelector(".active .js-sub-menu").removeAttribute("style");
        menu.querySelector(".active").classList.remove("active");        
    }

    menu.addEventListener("click", (event) => {     

        const { target } = event;
        console.log(target);
        if(target.classList.contains("js-toggle-sub-menu")&&window.innerWidth <=menuCollapseBreakpoint){


            event.preventDefault();   

            
            if(target.parentElement.classList.contains("active")){
                collapse();
                return;
            }
            //expand new menu-item
             //collapse the other expanded menu-item if exists
            if(menu.querySelector(".active"))
            {
                collapse();
            }

            target.parentElement.classList.add("active");
            target.nextElementSibling.style.maxHeight =
            target.nextElementSibling.scrollHeight + "px";
        }

    });
    //when resizing the window

    
}
headermenu();