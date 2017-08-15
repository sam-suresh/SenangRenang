/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Back */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  Create Account */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#CreateAccount"); 
         return false;
    });
    
        /* button  Login */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  .uib_w_17 */
    $(document).on("click", ".uib_w_17", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_26"));  
         return false;
    });
    
        /* button  .uib_w_8 */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_31 */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_33", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_35", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_37", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_39", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_41", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Swimming Info */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_page */
         activate_page("#SwimmingInfo"); 
         return false;
    });
    
        /* button  Feedback Form */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_page */
         activate_page("#FeedbackForm"); 
         return false;
    });
    
        /* button  Location Map */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#LocationMap"); 
         return false;
    });
    
        /* button  Tutorial Videos */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         /*global activate_page */
         activate_page("#TutorialVideos"); 
         return false;
    });
    
        /* button  Charts */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         /*global activate_page */
         activate_page("#Charts"); 
         return false;
    });
    
        /* button  Others */
    $(document).on("click", ".uib_w_25", function(evt)
    {
         /*global activate_page */
         activate_page("#Others"); 
         return false;
    });
    
        /* button  About */
    
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
