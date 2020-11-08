//Recebendo input
var emp = document.getElementById("emp")
var pro = document.getElementById("prof")
var dte = document.getElementById("data_e")
var dts = document.getElementById("data_s")
var nome = document.getElementById("nome")
var nacl = document.getElementById("nacional")
var educ = document.getElementById("educ")
var celu = document.getElementById("cel")
var emai = document.getElementById("email")
var idade = document.getElementById("txtano")
var cargo = document.getElementById("cargo")
var curso = document.getElementById("curso")
var status = document.getElementById("status")
// lugar que recebera input
var rnome = document.getElementById("rnome")
var ridade = document.getElementById("ridade")
var rnacl = document.getElementById("rnacional")
var rstatus = document.getElementById("rstatus")
var reduc = document.getElementById("reduc")
var rcargo = document.getElementById("rcargo")
var rcurso = document.getElementById("rcurso")
var tela = document.getElementById("tela")
var telxp = document.getElementById("tela_xp")
var expe = document.getElementById("expe")
var pem = document.getElementById("em")
var pwt =document.getElementById("wt")

function registrar()
{
    tela.innerHTML+= `<p> ${curso.value} </p>`
    rcurso.innerHTML+=`<p> ${curso.value} </p>`
}
function registrar_xp(){
    telxp.innerHTML+=`<div class="xp"> <p> Trabalhei na empresa ${emp.value}</p> <p> No cargo de ${pro.value}</p> <p> Do dia ${dte.value} até o dia ${dts.value}</p> </div>`
    expe.innerHTML+=`<div class="xp"> <p> Trabalhei na empresa ${emp.value}</p> <p> No cargo de ${pro.value}</p> <p> Do dia ${dte.value} até o dia ${dts.value}</p> </div>`
    pem.innerHTML=`${emai.value}`
    pwt.innerHTML=`${celu.value}`
}
function limpar()
{
    tela.innerHTML=""
    rcurso.innerHTML=""
}
function limpar_xp(){
    telxp.innerHTML=""
    expe.innerHTML=""
}
function clicar()
{
    var clicar= document.getElementById("clicar").style.display="block";
    rnome.innerHTML=`Nome: <strong>${nome.value}</strong>`
    ridade.innerHTML=`Idade: <strong>${idade.value}</strong>`
    rnacl.innerHTML=`Nacionalidade: <strong>${nacl.value}</strong>`
    reduc.innerHTML=`<p> ${educ.value} </p>`
    rcargo.innerHTML=`<p>  Pretendo com esté currículo oculpar a vaga de ${cargo.value} em sua empresa </p>`

}
