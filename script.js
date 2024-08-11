document.querySelector('#btn').addEventListener("click", function(){
    console.log("hi");
    document.querySelector('.insert').innerHTML = '<custom-template templateID = "input-component"></custom-template>'
});