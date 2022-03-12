var xmlHttp=new XMLHttpRequest();
function process()
{
	if(xmlHttp.readyState==0||xml.readyState==4){
		var brand= document.getElementById("userInput").value;
		xmlHttp.open("GET","store.php?brand=" + brand,true);
		xmlHttp.onreadystatechange=handleServerResponse;
		xmlHttp.send(null);
		
	}else{
		setTimeout('process()',1000);
	}
}

function handleServerResponse(){
	if(xmlHttp.readyState==4){
		if(xmlHttp.status==200) {
			xmlResponse=xmlHttp.responseXML;
			xmlDocumentElement = xmlResponse.documentElement;
			message = xmlDocumentElement.firstChild.data;
			document.getElementById("output").innerHTML='<span style="color:blue">' + message + '</span>';
			setTimeout('process()',1000);
		}
	}
}