let newtext;
$("#border_top_left_radius").val(0);
$("#border_top_right_radius").val(0);
$("#border_bottom_right_radius").val(0);
$("#border_bottom_left_radius").val(0);
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

$("#border_top_left_radius").change(function(){
    let border_top_left_radius = $(this).val();
    $( ".box" ).css( "border-top-left-radius", `${border_top_left_radius}%`);
    $(".box-container" ).css("border-top-left-radius", `${border_top_left_radius}%`);

    let tl = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_left_radius").val(parseInt(tl));
    $("#tl-lab").text(`Top Left: ${parseInt(tl)}%`);

    newtext = $(".box" ).css("border-radius");
    $("#css-output" ).text(`border-radius: ${newtext};`);
});

$("#border_top_right_radius").change(function(){
    let border_top_right_radius = $(this).val();
    $( ".box" ).css( "border-top-right-radius", `${border_top_right_radius}%`);
    $(".box-container" ).css("border-top-right-radius", `${border_top_right_radius}%`);

    let tr = $(".box" ).css( "border-top-right-radius");
    $("#border_top_right_radius").val(parseInt(tr));
    $("#tr-lab").text(`Top Right: ${parseInt(tr)}%`);
    newtext = $(".box" ).css("border-radius");
    $("#css-output" ).text(`border-radius: ${newtext};`);
});

$("#border_bottom_right_radius").change(function(){
    let border_bottom_right_radius = $(this).val();
    $( ".box" ).css( "border-bottom-right-radius", `${border_bottom_right_radius}%`);
    $(".box-container" ).css("border-bottom-right-radius", `${border_bottom_right_radius}%`);

    let br = $( ".box" ).css( "border-bottom-right-radius");
    $("#border_bottom_right_radius").val(parseInt(br));
    $("#br-lab").text(`Bottom Right: ${parseInt(br)}%`);

    newtext = $(".box" ).css("border-radius");
    $("#css-output" ).text(`border-radius: ${newtext};`);
});

$("#border_bottom_left_radius").change(function(){
    let border_bottom_left_radius = $(this).val();
    $( ".box" ).css( "border-bottom-left-radius", `${border_bottom_left_radius}%`);
    $(".box-container" ).css("border-bottom-left-radius", `${border_bottom_left_radius}%`);

    let bl = $(".box" ).css( "border-bottom-left-radius");
    $("#border_bottom_left_radius").val(parseInt(bl));
    $("#bl-lab").text(`Bottom Left: ${parseInt(bl)}%`);

    newtext = $(".box" ).css("border-radius");
    $("#css-output" ).text(`border-radius: ${newtext};`);
});

$("#radius-generator").click(function(){

    $(".box" ).css( "border-bottom-left-radius", `${randomIntFromInterval(0, 100)}%`);
    let bl = $(".box" ).css( "border-bottom-left-radius");
    $("#border_bottom_left_radius").val(parseInt(bl));
    $("#bl-lab").text(`Bottom Left: ${parseInt(bl)}%`);

    $( ".box" ).css( "border-bottom-right-radius", `${randomIntFromInterval(0, 100)}%`);
    let br = $( ".box" ).css( "border-bottom-right-radius");
    $("#border_bottom_right_radius").val(parseInt(br));
    $("#br-lab").text(`Bottom Right: ${parseInt(br)}%`);

    $(".box" ).css( "border-top-right-radius", `${randomIntFromInterval(0, 100)}%`);
    let tr = $(".box" ).css( "border-top-right-radius");
    $("#border_top_right_radius").val(parseInt(tr));
    $("#tr-lab").text(`Top Right: ${parseInt(tr)}%`);

    $( ".box" ).css( "border-top-left-radius", `${randomIntFromInterval(0, 100)}%`);
    let tl = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_left_radius").val(parseInt(tl));
    $("#tl-lab").text(`Top Left: ${parseInt(tl)}%`);

    newtext = $(".box" ).css("border-radius");
    $(".box-container" ).css("border-radius", `${newtext}`);
    $("#css-output" ).text(`border-radius: ${newtext};`);
});

$("#bg-toggle").click(function () {
    $(".box").toggleClass( "img-bg" );
});
