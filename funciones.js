function insertar(valor){
	document.querySelector('.pantalla').innerHTML+=valor;

}

function resultado(){
	p=document.querySelector('.pantalla'); 
	r=p.innerHTML;
	res=eval(r);
	p.innerHTML=res;

}

function borrar(){//borrar los valores de la pantalla
	document.querySelector('.pantalla').innerHTML="";
}

function borraruno(){
	//en p guardamos el objeto
	p=document.querySelector('.pantalla');
	//guardamos lo que contiene pantalla
	valores=p.innerHTML;
	//tamaño
	t=valores.length;

	borrar();

	for(i=0; i<t-1; i++){

		p.innerHTML+=valores[i];

	}

}

