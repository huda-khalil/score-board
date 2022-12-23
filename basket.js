let oneH = 0
let twoH = 0
let threeH = 0
let oneG = 0
let twoG = 0
let threeG = 0

function plus1h() {
    
    oneH += 1
    document.getElementById("home-btn").innerText = oneH + twoH + threeH
    
}

function plus2h() {
    twoH += 2
    document.getElementById("home-btn").innerText = twoH + oneH + threeH
    
}

function plus3h() {
    threeH += 3
    document.getElementById("home-btn").innerText = threeH + twoH + oneH
}

function resetH() {
    document.getElementById("home-btn").innerText = 0
    oneH = 0
    twoH = 0
    threeH = 0
}



function plus1g() {
    oneG += 1
    document.getElementById("guest-btn").innerText = oneG + twoG + threeG
    
}

function plus2g() {
    twoG += 2
    document.getElementById("guest-btn").innerText = twoG + oneG + threeG
    
}

function plus3g() {
    threeG += 3
    document.getElementById("guest-btn").innerText = threeG + twoG + oneG
}


function resetG() {
     document.getElementById("guest-btn").innerText = 0
     oneG = 0
     twoG = 0
     threeG = 0
}

function newG() {
    document.getElementById("home-btn").innerText = 0
    oneH = 0
    twoH = 0
    threeH = 0
    document.getElementById("guest-btn").innerText = 0
    oneG = 0
    twoG = 0
    threeG = 0

}