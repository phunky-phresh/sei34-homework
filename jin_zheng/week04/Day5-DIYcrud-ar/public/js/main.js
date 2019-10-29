console.log("Hello World");


const createNewPlantForm = () => {
    $('.plant_form').attr('action','/plant/new')
    $('.plant_form h2').text("Create a New Plant")
    $('.plant_form button').text("Create")
    $('.plant_hidden_form').show()
}

const createNewPestForm = () => {
    $('.pest_form').attr('action','/pest/new')
    $('.pest_form h2').text("Create a New Pest")
    $('.pest_form button').text("Create")
    $('.pest_hidden_form').show()
}

const showPlantFunc = () =>{
    $(".plant_hidden_show").toggleClass('show', showPlant == true);
}

const showPestFunc = () =>{
    $(".pest_hidden_show").toggleClass('show', showPest == true);
}

const selectText = (str, arr) => {
    let html = ''
    for (let el of arr) {
        el === str ? html += `<option selected>${el}<option>`: html += `<option>${el}<option>`
        }
    return html;
}

const editPlantForm = (node) => {
    info = $(node).attr("value").split("|")
    $('.plant_form').attr('action',`/plant/${$(node).attr("id").slice(5)}`)
    $('.plant_form h2').text("Edit Plant")
    $('input[name="plant_name"]').val(info[0])
    $('input[name="plant_category"]').val(info[1])
    $('select[name="difficulty"]').html(selectText(info[2], ['Easy', 'Medium', 'Hard']))
    $('select[name="water_demand"]').html(selectText(info[3], ['Low', 'Medium', 'High']))
    $('select[name="sunlight_demand"]').html(selectText(info[4], ['Low', 'Medium', 'High']))
    $('select[name="humidity_demand"]').html(selectText(info[5], ['Low', 'Medium', 'High']))
    $('select[name="rareness"]').html(selectText(info[6], ['Common', 'Rare', 'Extreme']))
    $('input[name="leaves_image"]').val(info[7])
    $('input[name="plant_image"]').val(info[8])
    $('.plant_form button').text("Edit")
    $('.plant_edit_back').attr('href', `/plant/show/${$(node).attr("id").slice(5)}`)
    $('.plant_hidden_form').show()
}

const editPestForm = (node) => {
    info = $(node).attr("value").split("|")
    console.log(info);
    $('.pest_form').attr('action',`/pest/${$(node).attr("id").slice(4)}`)
    $('.pest_form h2').text("Edit Pest")
    $('input[name="pest_name"]').val(info[0])
    $('input[name="pest_control"]').val(info[1])
    $('input[name="pest_image"]').val(info[2])
    $('.pest_form button').text("Edit")
    $('.pest_edit_back').attr('href', `/pest/show/${$(node).attr("id").slice(4)}`)
    $('.pest_hidden_form').show()
}

const drawOneLine = ($div1, $div2) => {
    let x1 = $div1.offset().left + ($div1.width());
    let y1 = $div1.offset().top + ($div1.height()/2);
    let x2 = $div2.offset().left;
    let y2 = $div2.offset().top + ($div2.height()/2);
    $('.lines').prepend($(`<svg><line stroke="black" stroke-width="5px" opacity="0.5" x1=${x1} x2=${x2} y1 =${y1} y2=${y2} /></svg>`))
}

const drawAllLine = function () {
    $('.lines').html("");
    $(".part_pest").each((index, element) => {
        try{
        drawOneLine($(`#plant${$(element).attr('value')}`), $(element))
        }
        catch ( TypeError) {
        console.log("TypeError");
}
    })
}

let showPlant
let showPest

$(document).ready(function(){
showPlant = JSON.parse(localStorage.getItem("showPlant"))
showPest = JSON.parse(localStorage.getItem("showPest"))


$(".plant_hidden_show").toggleClass('show', showPlant == true)
$(".pest_hidden_show").toggleClass('show', showPest == true)

$(".create_plant").click(createNewPlantForm)
$(".create_pest").click(createNewPestForm)

$(".part_plant").click(() => {showPlantFunc(); showPlant = true; localStorage.setItem("showPlant", JSON.stringify(showPlant))})
$("button.plant_hide_show").click(()=> {showPlant = false; localStorage.setItem("showPlant", JSON.stringify(showPlant));  $(".plant_hidden_show").toggleClass('show', showPlant == true);})
$(".show_plant_pest").click(() => {
showPlant = false; showPlantFunc(); localStorage.setItem("showPlant", JSON.stringify(showPlant));
showPest = true; showPestFunc(); localStorage.setItem("showPest", JSON.stringify(showPest))})


$(".part_pest").click(() => {showPestFunc(); showPest = true; localStorage.setItem("showPest", JSON.stringify(showPest))})
$("button.pest_hide_show").click(()=> {showPest = false; localStorage.setItem("showPest", JSON.stringify(showPest));  $(".pest_hidden_show").toggleClass('show', showPest == true);})
$(".show_pest_plant").click(() => {
showPlant = true; showPlantFunc();localStorage.setItem("showPlant", JSON.stringify(showPlant));
showPest = false; showPestFunc(); localStorage.setItem("showPest", JSON.stringify(showPest))})

$(".edit_plant").click((event) => editPlantForm(event.target))
$(".edit_pest").click((event) => editPestForm(event.target))

$(".delete_button_plant").click(() => { showPlant = false;  $(".plant_hidden_show").toggleClass('show', showPlant == true);localStorage.setItem("showPlant", JSON.stringify(showPlant));})
$(".delete_button_pest").click(() => { showPest = false; $(".pest_hidden_show").toggleClass('show', showPest == true);localStorage.setItem("showPlant", JSON.stringify(showPlant));})

drawAllLine()
$(window).resize(function() {
  drawAllLine()} )

})
