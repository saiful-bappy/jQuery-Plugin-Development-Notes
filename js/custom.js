jQuery(document).ready(function () {
  // Declare parallax on layers
  jQuery(".parallax-layer").parallax({
    mouseport: jQuery("#port"),
  });

  // Set up each parallax instance seperately, because they
  // each have the their own mouseport.
  jQuery(".stalk").each(function () {
    jQuery("img", this)
      .parallax(
        { mouseport: jQuery(this) }, // Options
        { xparallax: "6px", yparallax: "6px" }, // Layer 1
        { xparallax: "12px", yparallax: "12px" }, // Layer 2
        { xparallax: "30px", yparallax: "30px" }, // Layer 3
        { xparallax: "54px", yparallax: "54px" }, // Layer 4
        { xparallax: "84px", yparallax: "84px" }, // Layer 5
        { xparallax: "120px", yparallax: "120px" } // Layer 6
      )
      .click(function () {
        //console.log('remove');
        jQuery(this).remove();
      });
  });
  new WOW().init();
});
