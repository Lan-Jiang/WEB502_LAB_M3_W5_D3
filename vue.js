var vm1 = new Vue({
    el: "#vue",
    data: {
      header1: {
            header: "Selections"
          },
     catalogdata1: {
        addtocart: "Add to Cart",
        link1: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg",
        catalogname1: "Pasta",
        catalogdesc1: "Healthy Pasta",
        link2: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg",
        catalogname2: "Red Crab",
        catalogdesc2: "Fresh from Alaska",
        link3: "https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg",
        catalogname3: "Breakfast Special",
        catalogdesc3: "Good for the soul",
        link4: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg",
        catalogname4: "Sea Shell Mix",
        catalogdesc4: "For the shell lovers",         
      },
      catalogdata2: {
        addtocart: "Add to Cart",
        link5: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg",
        catalogname5: "Ultimate Kebab",
        catalogdesc5: "The best from Middle East",
        link6: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg",
        catalogname6: "Chicken Steak",
        catalogdesc6: "Grilled to perfection",
        link7: "https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg",
        catalogname7: "Filet Mignon",
        catalogdesc7: "Juicy steak served with patatoes au gratin",
        link8: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg",
        catalogname8: "Bistro Brunch",
        catalogdesc8: "A touch of Australia",         
      },
      catalogdata3: {
        addtocart: "Add to Cart",
        link9: "https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg",
        catalogname9: "California Crepe",
        catalogdesc9: "Stuffed with grilled shrimp",
        link10: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg",
        catalogname10: "Top Burger",
        catalogdesc10: "The tallest hamburger from Peru",
        link11: "https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG",
        catalogname11: "Chicken Garlic Pizza",
        catalogdesc11: "Our specialty pizza",
        link12: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg",
        catalogname12: "Wok away healthy",
        catalogdesc12: "Healthy blend of noodels and vegies",         
      },
      styleObj: {
        backgroundColor: "green"
      }
    },
    computed: {
        //
    },
    components: {
      cardheader: {
            props: ["cardHeader"],
            template: `<div class="card-header">
            <h3>{{cardHeader.header}}</h3>
            </div>`
      },
      catalog1: {
        props: ["catalogInfo1"],
        template: `
        <div class="row"> <!-- row 1 start -->
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">                       
                <a class="card-img">
                    <img class="card-img-top" src={{catalogInfo1.link1}}>
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo1.catalogname1}}</h4>
                    <p class="text-dark">{{catalogInfo1.catalogdesc1}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo1.addtocart}}</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">
                <a class="card-img">
                    <img class="card-img-top" src={{catalogInfo1.link2}}>
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo1.catalogname2}}</h4>
                    <p class="text-dark">{{catalogInfo1.catalogdesc2}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo1.addtocart}}</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">
                <a class="card-img">
                    <!-- <div class="card-img-inner"> -->
                        <img class="card-img-top" src={{catalogInfo1.link3}}>
                    <!-- </div> -->
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo1.catalogname3}}</h4>
                    <p class="text-dark">{{catalogInfo1.catalogdesc3}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo1.addtocart}}</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">
                <a class="card-img">
                        <img class="card-img-top" src={{catalogInfo1.link4}}>
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo1.catalogname4}}</h4>
                    <p class="text-dark">{{catalogInfo1.catalogdesc4}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo1.addtocart}}</a>
                </div>
            </div>
        </div>
    </div> <!-- row 1 end -->`
      },
    catalog2: {
        props: ["catalogInfo2"],
        template: `
        <div class="row"> <!-- row 2 start -->
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">                       
                <a class="card-img">
                    <img class="card-img-top" src={{catalogInfo2.link5}}>
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo2.catalogname5}}</h4>
                    <p class="text-dark">{{catalogInfo2.catalogdesc5}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo2.addtocart}}</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">
                <a class="card-img">
                    <img class="card-img-top" src={{catalogInfo2.link6}}>
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo2.catalogname6}}</h4>
                    <p class="text-dark">{{catalogInfo2.catalogdesc6}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo2.addtocart}}</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">
                <a class="card-img">
                    <!-- <div class="card-img-inner"> -->
                        <img class="card-img-top" src={{catalogInfo2.link7}}>
                    <!-- </div> -->
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo2.catalogname7}}</h4>
                    <p class="text-dark">{{catalogInfo2.catalogdesc7}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo2.addtocart}}</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">
                <a class="card-img">
                        <img class="card-img-top" src={{catalogInfo2.link8}}>
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo2.catalogname8}}</h4>
                    <p class="text-dark">{{catalogInfo2.catalogdesc8}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo2.addtocart}}</a>
                </div>
            </div>
        </div>
    </div> <!-- row 2 end -->`
      },
      catalog3: {
        props: ["catalogInfo3"],
        template: `
        <div class="row"> <!-- row 3 start -->
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">                       
                <a class="card-img">
                    <img class="card-img-top" src={{catalogInfo3.link9}}>
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo3.catalogname9}}</h4>
                    <p class="text-dark">{{catalogInfo3.catalogdesc9}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo3.addtocart}}</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">
                <a class="card-img">
                    <img class="card-img-top" src={{catalogInfo3.link10}}>
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo3.catalogname10}}</h4>
                    <p class="text-dark">{{catalogInfo3.catalogdesc10}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo3.addtocart}}</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">
                <a class="card-img">
                    <!-- <div class="card-img-inner"> -->
                        <img class="card-img-top" src={{catalogInfo3.link11}}>
                    <!-- </div> -->
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo3.catalogname11}}</h4>
                    <p class="text-dark">{{catalogInfo3.catalogdesc11}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo3.addtocart}}</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="card mb-30">
                <a class="card-img">
                        <img class="card-img-top" src={{catalogInfo3.link12}}>
                </a>
                <div class="card-body text-center">
                    <h4 class="card-title">{{catalogInfo3.catalogname12}}</h4>
                    <p class="text-dark">{{catalogInfo3.catalogdesc12}}</p>
                    <a class="btn btn-outline-dark btn-sm" href="#" data-abc="true">{{catalogInfo3.addtocart}}</a>
                </div>
            </div>
        </div>
    </div> <!-- row 3 end -->`
      },  
    
    },
    methods: {
        // rollover: function() {
        // this.styleObj.backgroundColor = "red"
        // },
        // rollout: function() {
        // this.styleObj.backgroundColor = "green"
        // }
    }
  });