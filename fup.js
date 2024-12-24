
var i = 0

var data = new Date
var arrayDt = data.toLocaleString().split('')
document.getElementById('data').value = arrayDt[6]+arrayDt[7]+arrayDt[8]+arrayDt[9]+"-"+arrayDt[3]+arrayDt[4]+"-"+arrayDt[0]+arrayDt[1]
document.getElementById('dataAtualizacao').value = arrayDt[6]+arrayDt[7]+arrayDt[8]+arrayDt[9]+"-"+arrayDt[3]+arrayDt[4]+"-"+arrayDt[0]+arrayDt[1]
console.log(document.getElementById('data').value,data,data.toDateString())


document.getElementById('adicionar').addEventListener("click",function(e){
    e.preventDefault()
    var chamados = document.querySelector('#chamados').value
    var horario = document.querySelector('#horario').value
    var tabela = document.getElementById("tabela")
    var hora = new Date
    var horarioAtual = ["","",""], prxHr, prxMt
    var arrayHr = horario.split('')
    var atualizacao = document.getElementById('atualizacao')
    var dataAt = new Date(document.getElementById('data').value)
    var trDataAt
    
    var dia = dataAt.getDate() + 1
    if (dia < 10) {
        dia = "0" + dia
    } 

    var mes = dataAt.getMonth() +1
    if (mes < 10) {
        mes = "0" + mes
    }
    var ano = dataAt.getFullYear() 


    if (dia == "32" && mes == "01") {
        dia = "01"
        mes = "02"
    }else if (dia == "30" && mes == "02") {
        dia = "01"
        mes = "03"
    }else if (dia == "32" && mes == "03") {
        dia = "01"
        mes = "04"
    }else if (dia == "31" && mes == "04") {
        dia = "01"
        mes = "05"
    }else if (dia == "32" && mes == "05") {
        dia = "01"
        mes = "06"
    }else if (dia == "31" && mes == "06") {
        dia = "01"
        mes = "07"
    }else if (dia == "32" && mes == "07") {
        dia = "01"
        mes = "08"
    }else if (dia == "32" && mes == "08") {
        dia = "01"
        mes = "09"
    }else if (dia == "31" && mes == "09") {
        dia = "01"
        mes = "10"
    }else if (dia == "32" && mes == "10") {
        dia = "01"
        mes = "11"
    }else if (dia == "31" && mes == "11") {
        dia = "01"
        mes = "12"
    }else if (dia == "32" && mes == "12") {
        dia = "01"
        mes = "01"
        ano = dataAt.getFullYear() +1
    }
    
    if (dataAt.toLocaleString() == data.toLocaleString()) {
        trDataAt = arrayDt[0]+arrayDt[1]+"/"+arrayDt[3]+arrayDt[4]+"/"+arrayDt[6]+arrayDt[7]+arrayDt[8]+arrayDt[9]
        console.log(dataAt)
    }else{
        trDataAt = dia + "/" + mes + "/" + ano
    }
    

    prxHr = arrayHr[0]+arrayHr[1]
    prxMt = arrayHr[3]+arrayHr[4]
    horarioAtual[1] = prxHr - hora.getHours()
    horarioAtual[2] = prxMt - hora.getMinutes()

    if (horarioAtual[1] < 10 && horarioAtual[1] >= 0) {
        horarioAtual[1] = "0" + horarioAtual[1]
    }else if(horarioAtual[1] < 0 && horarioAtual[1] > -10){
        horarioAtual[1] = "-0" + horarioAtual[1].toString().replaceAll("-","")
    }

    if (horarioAtual[2] < 10 && horarioAtual[2] >= 0) {
        horarioAtual[2] = "0" + horarioAtual[2]
    }else if(horarioAtual[2] < 0 && horarioAtual[2] > -10){
        horarioAtual[2] = "0" + horarioAtual[2].toString().replaceAll("-","")
        if (horarioAtual[1] >= 0) {
            horarioAtual[1] = "-" + horarioAtual[1]
        }
    }

    horarioAtual[0] = horarioAtual[1] + ":" + horarioAtual[2]
    if (chamados == "" || horarioAtual[0] == "" || horarioAtual[0] == "NaN:NaN"){
        alert('Preencha todos os campos!!')
    }else{
        console.log(horarioAtual[1],i)
        i = i+1
        tabela.insertAdjacentHTML('beforeend','<tbody><tr><td>'+i+'</td><td>'+chamados+'</td><td>'+trDataAt+" "+horario+'</td><td>'+horarioAtual[0]+'</td></tr></tbody>')
        atualizacao.innerHTML += "<option value='"+i+"'>"+i+"</option>"
    }

    acrescentarChamado()
})

document.getElementById('btnAtualizar').addEventListener("click",function(e){
    e.preventDefault()
    var atualizacao = document.getElementById('atualizacao').value
    var horarioAtualizacao = document.getElementById('horarioAtualizacao').value
    var a = parseInt(atualizacao) + 1
    var b = document.querySelector('#tabela tbody:nth-child('+a+') td:nth-child(2)')
    var p = document.querySelector('#tabela tbody:nth-child('+a+') td:nth-child(3)')
    var t = document.querySelector('#tabela tbody:nth-child('+a+') td:nth-child(4)')
    var hora = new Date
    var horarioAtual = ["","",""], prxHr, prxMt
    var arrayHr = horarioAtualizacao.split('')
    //var atualizacao = document.getElementById('atualizacao')
    var dataAt = new Date(document.getElementById('dataAtualizacao').value)
    var trDataAt

    console.log(dataAt)
    // prxHr = arrayHr[0]+arrayHr[1]
    // prxMt = arrayHr[3]+arrayHr[4]
    // horarioAtual[1] = prxHr - hora.getHours()
    // horarioAtual[2] = prxMt - hora.getMinutes()

    // if (horarioAtual[1] < 10 || horarioAtual[1] > -10) {
    //     horarioAtual[1] = "0" + horarioAtual[1]
    // }else if(horarioAtual[1] < 0 && horarioAtual[1] > -10){
    //     horarioAtual[1] = "-0" + horarioAtual[1].toString().replaceAll("-","")
    // }

    // if (horarioAtual[2] < 10 || horarioAtual[2] > -10) {
    //     horarioAtual[2] = "0" + horarioAtual[2]
    // }else if(horarioAtual[2] < 0 && horarioAtual[2] > -10){
    //     horarioAtual[2] = "0" + horarioAtual[2].toString().replaceAll("-","")
    //     if (horarioAtual[1] >= 0) {
    //         horarioAtual[1] = "-" + horarioAtual[1]
    //     }
    // }
    // horarioAtual[0] = horarioAtual[1] + ":" + horarioAtual[2]
    // t.innerHTML = horarioAtual[0]

    var dia = dataAt.getDate() + 1
    if (dia < 10) {
        dia = "0" + dia
    } 

    var mes = dataAt.getMonth() +1
    if (mes < 10) {
        mes = "0" + mes
    }
    var ano = dataAt.getFullYear() 


    if (dia == "32" && mes == "01") {
        dia = "01"
        mes = "02"
    }else if (dia == "30" && mes == "02") {
        dia = "01"
        mes = "03"
    }else if (dia == "32" && mes == "03") {
        dia = "01"
        mes = "04"
    }else if (dia == "31" && mes == "04") {
        dia = "01"
        mes = "05"
    }else if (dia == "32" && mes == "05") {
        dia = "01"
        mes = "06"
    }else if (dia == "31" && mes == "06") {
        dia = "01"
        mes = "07"
    }else if (dia == "32" && mes == "07") {
        dia = "01"
        mes = "08"
    }else if (dia == "32" && mes == "08") {
        dia = "01"
        mes = "09"
    }else if (dia == "31" && mes == "09") {
        dia = "01"
        mes = "10"
    }else if (dia == "32" && mes == "10") {
        dia = "01"
        mes = "11"
    }else if (dia == "31" && mes == "11") {
        dia = "01"
        mes = "12"
    }else if (dia == "32" && mes == "12") {
        dia = "01"
        mes = "01"
        ano = dataAt.getFullYear() +1
    }

    if (dataAt.toLocaleString() == data.toLocaleString()) {
        trDataAt = arrayDt[0]+arrayDt[1]+"/"+arrayDt[3]+arrayDt[4]+"/"+arrayDt[6]+arrayDt[7]+arrayDt[8]+arrayDt[9]
        console.log(dataAt)
    }else{
        trDataAt = dia + "/" + mes + "/" + ano
    }

    p.innerHTML = trDataAt + " " + horarioAtualizacao
})

document.getElementById('btnExcluir').addEventListener("click",function(e){
    e.preventDefault()
    var atualizacao = document.getElementById('atualizacao').value
    var b = document.getElementById('atualizacao')
    var a = parseInt(atualizacao) + 1
    var p = document.querySelector('#tabela tbody:nth-child('+a+')')
    p.remove()
    i = i - 1
    var r = 1
    console.log(b.length,i)
    for (var j=0; j < b.length; j++){
        console.log(document.querySelector('#tabela tbody:nth-child('+r+') td:nth-child(1)'))
        var t = document.querySelector('#tabela tbody:nth-child('+r+') td:nth-child(1)')
        if (t != null) {
            t.innerHTML = j
        }
        r = r + 1
    }
})

function preencher(){
        var atualizacao = document.getElementById('atualizacao').value
        var a = parseInt(atualizacao) + 1
        var chamados = document.querySelector('#tabela tbody:nth-child('+a+') td:nth-child(2)')
        console.log(chamados.textContent)
        var chamadosAtualizacao = document.getElementById('chamadosAtualizacao')
        chamadosAtualizacao.value = chamados.textContent

        var proximaAtualizacao = document.querySelector('#tabela tbody:nth-child('+a+') td:nth-child(3)')
        var prxAt = proximaAtualizacao.textContent.split('')
        var horarioAtualizacao = document.getElementById('horarioAtualizacao')
        horarioAtualizacao.value = prxAt[11]+prxAt[12]+prxAt[13]+prxAt[14]+prxAt[15]
}

function acrescentarChamado(){
    var atualizacao = document.getElementById('atualizacao').value
    var chamadosAtualizacao = document.getElementById('chamadosAtualizacao')
    var chamado = document.querySelector('#tabela tbody:nth-child(2) td:nth-child(2)')
    var proximaAtualizacao = document.querySelector('#tabela tbody:nth-child(2) td:nth-child(3)')
    var prxAt = proximaAtualizacao.textContent.split('')
    var horarioAtualizacao = document.getElementById('horarioAtualizacao')
    if (atualizacao == 1) {
        chamadosAtualizacao.value = chamado.textContent
        horarioAtualizacao.value = prxAt[11]+prxAt[12]+prxAt[13]+prxAt[14]+prxAt[15]
    }
}

setInterval(function(){
    var td = document.querySelectorAll('#tabela tbody tr')
    
    for (var j=0; j < td.length-1; j++){
        console.log(j)
        var at = [""],at1 = [""], fd = [""], k = j + 2, arrayAt, horaLocal, arrayHL, tabelaAtualizacao = [""], arrayDL, d, m, y
        at[j] = document.querySelector('#tabela tbody:nth-child('+k+') td:nth-child(3)').textContent
        arrayAt = at[j].split('')
        horaLocal = new Date
        arrayDL = horaLocal.toLocaleDateString().split('')
        arrayHL = horaLocal.toLocaleTimeString().split('')
        
        //Horas
        tabelaAtualizacao[3] = arrayAt[11]+""+arrayAt[12] //horas definido pelo analista
        tabelaAtualizacao[4] = arrayAt[14]+""+arrayAt[15] //minutos definido pelo analista
        tabelaAtualizacao[5] = arrayHL[0]+""+arrayHL[1] // hora local
        tabelaAtualizacao[6] = arrayHL[3]+""+arrayHL[4] // minuto local
        tabelaAtualizacao[1] = parseInt(tabelaAtualizacao[3])-parseInt(tabelaAtualizacao[5])
        tabelaAtualizacao[2] = parseInt(tabelaAtualizacao[4])-parseInt(tabelaAtualizacao[6])
        
        //Data
        tabelaAtualizacao[13] = arrayAt[0]+""+arrayAt[1] //dia usuario
        tabelaAtualizacao[14] = arrayAt[3]+""+arrayAt[4] //mes usuario
        tabelaAtualizacao[15] = arrayAt[6]+""+arrayAt[7]+""+arrayAt[8]+""+arrayAt[9] //ano
        tabelaAtualizacao[16] = arrayDL[0]+""+arrayDL[1] //dia local
        tabelaAtualizacao[17] = arrayDL[3]+""+arrayDL[4] //mes local
        tabelaAtualizacao[18] = arrayDL[6]+""+arrayDL[7]+""+arrayDL[8]+""+arrayDL[9] //ano local

        if (tabelaAtualizacao[1] == 0 && tabelaAtualizacao[2] < 0) {
            tabelaAtualizacao[1] = "-0"+tabelaAtualizacao[1]
        }else if(tabelaAtualizacao[1] >= 1 && tabelaAtualizacao[2] < 0){
            console.log(tabelaAtualizacao[1,tabelaAtualizacao[2]])
            tabelaAtualizacao[1] = tabelaAtualizacao[1] - 1
            tabelaAtualizacao[2] = tabelaAtualizacao[2] + 60
            if (tabelaAtualizacao[1] == 0) {
                tabelaAtualizacao[1] = "00"
            }
        }else if(tabelaAtualizacao[1] <= -1 && tabelaAtualizacao[2] > 0){
            tabelaAtualizacao[1] = tabelaAtualizacao[1] + 1
            tabelaAtualizacao[2] = tabelaAtualizacao[2] - 60
            tabelaAtualizacao[1] = "-"+tabelaAtualizacao[1]
        }else if(tabelaAtualizacao[1] == 0 && tabelaAtualizacao[2] > 0){
            tabelaAtualizacao[1] = "00"
        }else if (tabelaAtualizacao[1] >= 0 && tabelaAtualizacao[1] < 10) {
            if (tabelaAtualizacao[1] == "-0" && tabelaAtualizacao[2] == "00") {
                tabelaAtualizacao[1] = "00"
            }else if (tabelaAtualizacao == "-0") {
                tabelaAtualizacao = "-00"
            }else{
                tabelaAtualizacao[1] = "0" + tabelaAtualizacao[1]
            }
        }else if(tabelaAtualizacao[1] < 0 && tabelaAtualizacao[1] > -10){
            tabelaAtualizacao[1] = tabelaAtualizacao[1].toString().replaceAll('-','')
            tabelaAtualizacao[1] = tabelaAtualizacao[1].replaceAll('0','')
            if (tabelaAtualizacao[1] == "-0" && tabelaAtualizacao[2] == "00") {
                tabelaAtualizacao[1] = "00"
            }else if (tabelaAtualizacao == "-0") {
                tabelaAtualizacao = "-00"
            }else{
                tabelaAtualizacao[1] = "-0" + tabelaAtualizacao[1]
            }

        }
        console.log(tabelaAtualizacao[2])
        if (tabelaAtualizacao[2] >= 0 && tabelaAtualizacao[2] < 10) {
            tabelaAtualizacao[2] = "0" + tabelaAtualizacao[2]
        }else if(tabelaAtualizacao[2] <= -1){
            tabelaAtualizacao[2] = tabelaAtualizacao[2].toString().replaceAll('-','')
            while (tabelaAtualizacao[2].length < 2){
                tabelaAtualizacao[2] = "0" + tabelaAtualizacao[2]
            }
        }
        

        if(tabelaAtualizacao[13] == tabelaAtualizacao[16]){
            tabelaAtualizacao[0] = tabelaAtualizacao[1]+":"+tabelaAtualizacao[2]
        }else if(tabelaAtualizacao[13] < tabelaAtualizacao[16]){
            d = tabelaAtualizacao[16] - tabelaAtualizacao[13]
            tabelaAtualizacao[0] = "-" + d + "d " + tabelaAtualizacao[1].replace("-","")+":"+tabelaAtualizacao[2]
        }else if (tabelaAtualizacao[13] > tabelaAtualizacao[16]){
            d = tabelaAtualizacao[13] - tabelaAtualizacao[16]
            tabelaAtualizacao[0] = d + "d " + tabelaAtualizacao[1].replace("-","")+":"+tabelaAtualizacao[2]
        } 
        at1[j] = document.querySelector('#tabela tbody:nth-child('+k+') td:nth-child(4)').innerHTML = tabelaAtualizacao[0]

        fd[j] = document.querySelector('#tabela tbody:nth-child('+k+') td:nth-child(4)').textContent
    
        if (fd[j] > "00:15" && fd[j] <= "00:25") {
            fd[j] = document.querySelector('#tabela tbody:nth-child('+k+') td:nth-child(4)').style.backgroundColor = "green"
        }else if (fd[j] > "00:07" && fd[j] <= "00:15"){
            fd[j] = document.querySelector('#tabela tbody:nth-child('+k+') td:nth-child(4)').style.backgroundColor = "yellow"
        }else if (fd[j] <= "00:07" || fd[j].includes("-")){
            fd[j] = document.querySelector('#tabela tbody:nth-child('+k+') td:nth-child(4)').style.backgroundColor = "red"
        }else if(tabelaAtualizacao[13] < tabelaAtualizacao[16]){
            // fd[j] = document.querySelector('#tabela tbody:nth-child('+k+') td:nth-child(4)').style.backgroundColor = "red"
        }else {
            fd[j] = document.querySelector('#tabela tbody:nth-child('+k+') td:nth-child(4)').style.backgroundColor = "white"
        }
    }
},100000)

document.getElementById('btnExportar').addEventListener("click",function(e){
    e.preventDefault()
    var trId = document.querySelectorAll('#tabela tbody tr').length
    var file, json1, id = [""], ch = [""], pa = [""], sf = [""], aID = "",aCH = "", aPA = "", aSF = ""
    trId = trId - 1
    for (var l=0; l < trId ;l++){
        console.log(l)
        var u = l + 2

        id[l] = document.querySelector('#tabela tbody:nth-child('+u+') td:nth-child(1)').textContent
        if (l < trId - 1) {
            aID = aID + '"'+id[l]+'",\n'
        } else {
            aID = aID + '"'+id[l]+'"'
        }
        console.log(aID)
        ch[l] = document.querySelector('#tabela tbody:nth-child('+u+') td:nth-child(2)').textContent
        if (l < trId - 1) {
            aCH = aCH + '"'+ch[l]+'",\n'
        } else {
            aCH = aCH + '"'+ch[l]+'"'
        }
        
        pa[l] = document.querySelector('#tabela tbody:nth-child('+u+') td:nth-child(3)').textContent
        if (l < trId - 1) {
            aPA = aPA + '"'+pa[l]+'",\n'
        } else {
            aPA = aPA + '"'+pa[l]+'"'
        }
        
        sf[l] = document.querySelector('#tabela tbody:nth-child('+u+') td:nth-child(4)').textContent
        if (l < trId - 1) {
            aSF = aSF + '"'+sf[l]+'",\n'
        } else {
            aSF = aSF + '"'+sf[l]+'"'
        }
    } 
    json1 = '{\n"Id":\n[\n'+aID+'\n],\n"Chamado":\n[\n'+aCH+'\n],\n"Próxima atualização":\n[\n'+aPA+'\n],\n"SLA / FUP":\n[\n'+aSF+'\n]\n}'
    file = new File([json1],"teste.json",{type: "text/plain;charset=utf-8"})
    console.log(json1)
    saveAs(file) 


})

// var corsAttr = new EnableCorsAttribute("*", "*", "*")
// config.EnableCors(corsAttr)

function moveFile(){
    var object = new ActiveXObject("Scripting.FileSystemObject");
    var file = object.GetFile("C:/Users/gabriel.galvao/Downloads/teste (4).json");
    file.Move("C:/Users/gabriel.galvao/");
    document.write("File is moved successfully");
}
