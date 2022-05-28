let newtext;
let pre_rotation;
$("#border_top_left_radius").val(0);
$("#border_top_right_radius").val(0);
$("#border_bottom_right_radius").val(0);
$("#border_bottom_left_radius").val(0);
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function getRotationDegrees(obj) {
    let matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");
    let angle;
    if (matrix !== 'none') {
        let values = matrix.split('(')[1].split(')')[0].split(',');
        let a = values[0];
        let b = values[1];
        let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else {
        angle = 0;
    }
    return (angle < 0) ? angle + 360 : angle;
}

$("#border_top_left_radius").bind('input', function(){
    let border_top_left_radius = $(this).val();
    $( ".box" ).css( "border-top-left-radius", `${border_top_left_radius}%`);
    $(".box-container" ).css("border-top-left-radius", `${border_top_left_radius}%`);

    let tl = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_left_radius").val(parseInt(tl));
    $("#tl-lab").text(`Top Left: ${parseInt(tl)}%`);

    newtext = $(".box" ).css("border-radius");
    $("#css-output" ).text(`border-radius: ${newtext};`);
});

$("#border_top_right_radius").bind('input', function(){
    let border_top_right_radius = $(this).val();
    $( ".box" ).css( "border-top-right-radius", `${border_top_right_radius}%`);
    $(".box-container" ).css("border-top-right-radius", `${border_top_right_radius}%`);

    let tr = $(".box" ).css( "border-top-right-radius");
    $("#border_top_right_radius").val(parseInt(tr));
    $("#tr-lab").text(`Top Right: ${parseInt(tr)}%`);
    newtext = $(".box" ).css("border-radius");
    $("#css-output" ).text(`border-radius: ${newtext};`);
});

$("#border_bottom_right_radius").bind('input', function(){
    let border_bottom_right_radius = $(this).val();
    $( ".box" ).css( "border-bottom-right-radius", `${border_bottom_right_radius}%`);
    $(".box-container" ).css("border-bottom-right-radius", `${border_bottom_right_radius}%`);

    let br = $( ".box" ).css( "border-bottom-right-radius");
    $("#border_bottom_right_radius").val(parseInt(br));
    $("#br-lab").text(`Bottom Right: ${parseInt(br)}%`);

    newtext = $(".box" ).css("border-radius");
    $("#css-output" ).text(`border-radius: ${newtext};`);
});

$("#border_bottom_left_radius").bind('input', function(){
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

$("#rotation-slider").bind('input', function(){
    let rotation_degree = $(this).val();
    $(".box-container" ).css("transform", `rotate(${rotation_degree}deg)`);
    $("#rotation-degree").val(`${rotation_degree}`);
});

$("#rotation-degree").bind('input', function(){
    let rotation_degree = $(this).val();
    if (rotation_degree < 0 || rotation_degree > 360) {
        $('.warning').css("display", "block");
    }
    $(".box-container" ).css("transform", `rotate(${rotation_degree}deg)`);
    $("#rotation-slider").val(`${rotation_degree}`);
});

$("#drop").click(function(){
    pre_rotation = 45;
    $("#rotation-slider").val(pre_rotation);
    $(".box-container" ).css("transform", `rotate(${pre_rotation}deg)`);
    $("#rotation-degree").val(`${pre_rotation}`);

    $(".box" ).css( "border-top-left-radius", `${0}%`);
    let tl = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_left_radius").val(0);
    $("#tl-lab").text(`Top Left: ${0}%`);

    $(".box" ).css( "border-top-right-radius", `${100}%`);
    let tr = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_right_radius").val(100);
    $("#tr-lab").text(`Top Right: ${100}%`);

    $(".box" ).css( "border-bottom-left-radius", `${100}%`);
    let bl = $( ".box" ).css( "border-top-left-radius");
    $("#border_bottom_left_radius").val(100);
    $("#bl-lab").text(`Bottom Left: ${100}%`);

    $(".box" ).css( "border-bottom-right-radius", `${100}%`);
    let br = $( ".box" ).css( "border-top-left-radius");
    $("#border_bottom_right_radius").val(100);
    $("#br-lab").text(`Bottom Right: ${100}%`);

    newtext = $(".box" ).css("border-radius");
    $(".box-container" ).css("border-radius", `${newtext}`);
    $("#css-output" ).text(`border-radius: ${newtext};`);
});



$("#balloon").click(function(){
    pre_rotation = 225;
    $("#rotation-slider").val(pre_rotation);
    $(".box-container" ).css("transform", `rotate(${pre_rotation}deg)`);
    $("#rotation-degree").val(`${pre_rotation}`);

    $(".box" ).css( "border-top-left-radius", `${0}%`);
    let tl = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_left_radius").val(0);
    $("#tl-lab").text(`Top Left: ${0}%`);

    $(".box" ).css( "border-top-right-radius", `${100}%`);
    let tr = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_right_radius").val(100);
    $("#tr-lab").text(`Top Right: ${100}%`);

    $(".box" ).css( "border-bottom-left-radius", `${100}%`);
    let bl = $( ".box" ).css( "border-top-left-radius");
    $("#border_bottom_left_radius").val(100);
    $("#bl-lab").text(`Bottom Left: ${100}%`);

    $(".box" ).css( "border-bottom-right-radius", `${100}%`);
    let br = $( ".box" ).css( "border-top-left-radius");
    $("#border_bottom_right_radius").val(100);
    $("#br-lab").text(`Bottom Right: ${100}%`);

    newtext = $(".box" ).css("border-radius");
    $(".box-container" ).css("border-radius", `${newtext}`);
    $("#css-output" ).text(`border-radius: ${newtext};`);
});


$("#eye").click(function(){
    pre_rotation = 225;
    $("#rotation-slider").val(pre_rotation);
    $(".box-container" ).css("transform", `rotate(${pre_rotation}deg)`);
    $("#rotation-degree").val(`${pre_rotation}`);

    $(".box" ).css( "border-top-left-radius", `${100}%`);
    let tl = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_left_radius").val(100);
    $("#tl-lab").text(`Top Left: ${100}%`);

    $(".box" ).css( "border-top-right-radius", `${0}%`);
    let tr = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_right_radius").val(0);
    $("#tr-lab").text(`Top Right: ${0}%`);

    $(".box" ).css( "border-bottom-left-radius", `${0}%`);
    let bl = $( ".box" ).css( "border-top-left-radius");
    $("#border_bottom_left_radius").val(0);
    $("#bl-lab").text(`Bottom Left: ${0}%`);

    $(".box" ).css( "border-bottom-right-radius", `${80}%`);
    let br = $( ".box" ).css( "border-top-left-radius");
    $("#border_bottom_right_radius").val(80);
    $("#br-lab").text(`Bottom Right: ${80}%`);

    newtext = $(".box" ).css("border-radius");
    $(".box-container" ).css("border-radius", `${newtext}`);
    $("#css-output" ).text(`border-radius: ${newtext};`);
});



$("#circle").click(function(){

    $(".box" ).css( "border-top-left-radius", `${100}%`);
    let tl = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_left_radius").val(100);
    $("#tl-lab").text(`Top Left: ${100}%`);

    $(".box" ).css( "border-top-right-radius", `${100}%`);
    let tr = $( ".box" ).css( "border-top-left-radius");
    $("#border_top_right_radius").val(100);
    $("#tr-lab").text(`Top Right: ${100}%`);

    $(".box" ).css( "border-bottom-left-radius", `${100}%`);
    let bl = $( ".box" ).css( "border-top-left-radius");
    $("#border_bottom_left_radius").val(100);
    $("#bl-lab").text(`Bottom Left: ${100}%`);

    $(".box" ).css( "border-bottom-right-radius", `${100}%`);
    let br = $( ".box" ).css( "border-top-left-radius");
    $("#border_bottom_right_radius").val(100);
    $("#br-lab").text(`Bottom Right: ${100}%`);

    newtext = $(".box" ).css("border-radius");
    $(".box-container" ).css("border-radius", `${newtext}`);
    $("#css-output" ).text(`border-radius: ${newtext};`);
});


$("#bg-toggle").click(function () {
    $(".box").toggleClass( "img-bg" );
});


