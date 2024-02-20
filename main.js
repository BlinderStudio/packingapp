// change 2.007

// Función para obtener la fecha y la hora actual
// Función para mostrar la fecha y la hora actual
function mostrarFechaHora() {
    // Obtener la fecha y la hora actual
    var fechaHora = new Date();
    
    // Formatear la fecha y la hora
    var fecha = fechaHora.toLocaleDateString(); // Formato de fecha local
    var hora = fechaHora.toLocaleTimeString(); // Formato de hora local
    
    // Obtener el elemento donde se muestra la fecha y la hora
    var fechaHoraElemento = document.getElementById('fecha-hora');
    
    // Si el elemento aún no existe, crearlo
    if (!fechaHoraElemento) {
        fechaHoraElemento = document.createElement('div');
        fechaHoraElemento.id = 'fecha-hora';
        fechaHoraElemento.style.position = 'fixed';
        fechaHoraElemento.style.bottom = '10px';
        fechaHoraElemento.style.right = '10px';
        fechaHoraElemento.style.color = 'white'; // Cambia el color del texto si es necesario
        fechaHoraElemento.style.backgroundColor = 'black'; // Cambia el color de fondo si es necesario
        fechaHoraElemento.style.padding = '5px'; // Añade espacio alrededor del texto si es necesario
        document.body.appendChild(fechaHoraElemento);
    }
    
    // Actualizar el texto con la fecha y la hora
    fechaHoraElemento.textContent = "Fecha: " + fecha + " - Hora: " + hora;
}

// Llamar a la función para mostrar la fecha y la hora al cargar la página
mostrarFechaHora();

// Actualizar la fecha y la hora cada hora
setInterval(mostrarFechaHora, 1000); // 3600000 milisegundos = 1 hora


function updateIMG() {
    var URLAmazon = "http://images.amazon.com/images/P/";
	
	var orderDetailsDiv = document.getElementById("taskForm:OrderDetails");

if (orderDetailsDiv) {
    orderDetailsDiv.style.display = "none";
}


var packingMaterialElement = document.getElementById("taskForm:pnl_packing_material");

if (packingMaterialElement) {
    packingMaterialElement.style.display = "none";
}

var skuDataTable = document.getElementById("taskForm:sku_dataTable_data");

// Verifica si la tabla existe
if (skuDataTable) {
  // Obtiene todas las filas de la tabla
  var rows = skuDataTable.getElementsByTagName("tr");

  // Itera a través de las filas
  for (var i = 0; i < rows.length; i++) {
    // Obtiene todas las celdas de la fila actual
    var cells = rows[i].getElementsByTagName("td");

    // Verifica si la fila tiene al menos 7 celdas (séptima columna)
    if (cells.length >= 7) {
      // Obtén el valor de la cuarta columna (índice 3)
      var valorColumna4 = cells[4].textContent;

      // Aplica un estilo CSS para quitar la negrita
      valorColumna4 = "<span style='font-weight: normal;'>" + valorColumna4 + "</span>";

      // Verifica si cells[1] ya ha sido modificado
      if (!cells[1].classList.contains("modified")) {
        // Mantén el contenido original de cells[1] y agrega valorColumna4 con un salto de línea
        cells[1].innerHTML += "<br>" + valorColumna4;

        // Marca cells[1] como modificado para evitar duplicaciones
        cells[1].classList.add("modified");
      }

      cells[5].style.display = "none"; // Sexta columna
      cells[7].style.display = "none"; // Octava columna
    }
  }
}

var skuDataTable = document.getElementById("taskForm:sku_dataTable_data");

// Verifica si la tabla existe
if (skuDataTable) {
  // Obtén la referencia a la clase "ui-datatable-scrollable-body"
  var scrollableBody = document.querySelector(".ui-datatable-scrollable-body");

  // Verifica si se encontró el elemento
  if (scrollableBody) {
    // Asigna un max-height de 280px
    scrollableBody.style.maxHeight = "280px";
  }

  // Resto del código para procesar las filas y celdas...
}


// Selecciona el elemento con la clase "ui-datatable-scrollable-theadclone"
var theadClone = document.querySelector(".ui-datatable-scrollable-theadclone");

// Verifica si el elemento existe
if (theadClone) {
  // Aplica "display: none" para ocultar el elemento
  theadClone.style.display = "none";
}


var splHeader = document.getElementById("taskForm:spl_header");
var splContent = document.getElementById("taskForm:spl_content");

// Verifica si ambos elementos existen
if (splHeader && splContent) {
  // Agrega un controlador de eventos clic a "taskForm:spl_header"
  splHeader.addEventListener("click", function() {
    if (isVisible) {
      splContent.style.display = "none"; // Oculta el elemento
    } else {
      splContent.style.display = "block"; // Muestra el elemento
    }
    isVisible = !isVisible; // Cambia el estado de visibilidad
  });
}

// Selecciona todos los elementos con la clase "ui-datatable-scrollable-theadclone"
var elements = document.querySelectorAll(".ui-datatable-scrollable-theadclone");

// Itera a través de los elementos y aplica "display: none" a cada uno
for (var i = 0; i < elements.length; i++) {
  elements[i].style.display = "none";
}

// Selecciona el elemento por su id "taskForm:sku_dataTable_head"
var element = document.getElementById("taskForm:sku_dataTable_head");

// Verifica si el elemento existe
if (element) {
  // Aplica "display: none" al elemento
  element.style.display = "none";
}

// Selecciona el elemento por su id "taskForm:pickedSku_dataTable_head"
var element2 = document.getElementById("taskForm:pickedSku_dataTable_head");

// Verifica si el elemento existe
if (element2) {
  // Aplica "display: none" al elemento
  element2.style.display = "none";
}


 
    var skuTable = document.getElementById("taskForm:sku_dataTable");
    if (skuTable) { // Comprueba si la tabla existe
        var skuRows = skuTable.getElementsByTagName("tr");

        for (var i = 0; i < skuRows.length; i++) {
            var skuNumberElement = skuRows[i].querySelector("span[id$='sku_number']");
            if (skuNumberElement) {
                var skuNumberDisplay = skuNumberElement.innerText;
                var URLSku = "<img src='" + URLAmazon + skuNumberDisplay + "' height='50px' width='auto' style='overflow:hidden;'>";
                var URLSkuBig = "<img src='" + URLAmazon + skuNumberDisplay + "' height='50px' width='auto' style='overflow:hidden;'>";

                // Comprueba si la celda y el número de SKU son válidos antes de actualizar
                var lineIdCell = skuRows[i].cells[0];
                if (lineIdCell && skuNumberDisplay.length == 10) {
                    lineIdCell.innerHTML = URLSku;
                }

                
            }
        }
    }
	
	


	
	
	
var skuDataTableHead = document.getElementById("taskForm:sku_dataTable_head");

// Verifica si el elemento existe antes de intentar ocultarlo
if (skuDataTableHead) {
  // Oculta el elemento estableciendo su estilo "display" a "none"
  skuDataTableHead.style.display = "display";
}	

var dataTableHead = document.getElementById("dataTable_head");

// Verifica si el encabezado de la tabla existe
if (dataTableHead) {
  // Obtiene todas las filas del encabezado de la tabla
  var headerRows = dataTableHead.getElementsByTagName("tr");

  // Itera a través de las filas del encabezado (asumiendo que la última fila contiene las columnas)
  for (var i = 0; i < headerRows.length; i++) {
    var headerRow = headerRows[i];

    // Obtiene todas las celdas de la última fila del encabezado
    var headerCells = headerRow.getElementsByTagName("th");

    // Verifica si hay al menos dos celdas en la fila
    if (headerCells.length >= 2) {
      // Elimina las dos últimas celdas (columnas)
      headerRow.removeChild(headerCells[headerCells.length - 1]);
      headerRow.removeChild(headerCells[headerCells.length - 2]);
    }
  }
}
	
	
	var colMd5Element = document.querySelector(".col-md-5");

if (colMd5Element) {
    colMd5Element.style.width = "375px";
}


// Obtener el elemento por su ID
var frmLoginElement = document.getElementById("aaf_login:frm_login");

// Verificar si se encontró el elemento
if (frmLoginElement) {
    // Establecer el padding en 0 para el elemento
    frmLoginElement.style.padding = "50px";
}



// Obtener el elemento por su ID
var element = document.getElementById("aaf_login:frm_login:j_id_1o");

// Verificar si se encontró el elemento
if (element) {
    // Ocultar el elemento
    element.style.display = "none";
}


var appNameSpan = document.querySelector(".app-name");

if (appNameSpan) {
    appNameSpan.style.color = "#ffffff";
}

var barcodeInput = document.getElementById("taskForm:barcode");

function applyBackgroundColor() {
    barcodeInput.style.backgroundColor = "lightgreen";
}

function removeBackgroundColor() {
    barcodeInput.style.backgroundColor = "";
}

if (barcodeInput) {
    barcodeInput.addEventListener("focus", applyBackgroundColor);
    barcodeInput.addEventListener("blur", removeBackgroundColor);

    // Aplicar el color de fondo si el elemento ya está enfocado al cargar la página
    if (document.activeElement === barcodeInput) {
        applyBackgroundColor();
    }
}

var preprintCartonLabelInput = document.getElementById("taskForm:preprintCartonLabel");

function applyBackgroundColorToPreprint() {
    preprintCartonLabelInput.style.backgroundColor = "lightgreen";
}

function removeBackgroundColorFromPreprint() {
    preprintCartonLabelInput.style.backgroundColor = "";
}

if (preprintCartonLabelInput) {
    preprintCartonLabelInput.addEventListener("focus", applyBackgroundColorToPreprint);
    preprintCartonLabelInput.addEventListener("blur", removeBackgroundColorFromPreprint);

    // Aplicar el color de fondo si el elemento ya está enfocado al cargar la página
    if (document.activeElement === preprintCartonLabelInput) {
        applyBackgroundColorToPreprint();
    }
}





var layoutFooter = document.querySelector(".layout-footer");

if (layoutFooter) {
    layoutFooter.style.display = "none";
}

var feedbackButton = document.querySelector("#frm_topbar\\:topbar-profile-menu-button-feedback");

if (feedbackButton) {
    feedbackButton.style.display = "none";
}

var layoutContent = document.querySelector(".layout-content");

if (layoutContent) {
    layoutContent.style.backgroundColor = "white";
}

var layoutMain = document.querySelector(".layout-main");

if (layoutMain) {
    layoutMain.style.overflow = "hidden";
}

var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log("Ancho de la ventana: " + windowWidth + "px");

var colMd12ScanTaskElement = document.querySelector(".col-md-12.scan-task");

if (colMd12ScanTaskElement) {
    colMd12ScanTaskElement.style.width = "375px";
}

var colMd6ScanTaskElement = document.querySelector(".col-md-6");

if (colMd6ScanTaskElement) {
    colMd6ScanTaskElement.style.width = "calc(100% - 375px)";
}

	var element = document.querySelector(".ui-datatable-scrollable-body");

// Verifica si el elemento existe
if (element) {
  // Establece el atributo max-height a 280px
  element.style.maxHeight = "280px";
}


    // Trabajar con la segunda tabla si existe
    var dataTable = document.getElementById('taskForm:pickedSku_dataTable_data');
    if (dataTable) { // Comprueba si la tabla de datos existe
        var skuRows = dataTable.getElementsByTagName('tr');

        for (var i = 0; i < skuRows.length; i++) {
            var skuId = "taskForm:pickedSku_dataTable:" + i + ":sku_number";
            var skuNumberElement = document.getElementById(skuId);

            if (skuNumberElement) {
                var skupicked = skuNumberElement.innerText;
                var URLpicked = "<img src='" + URLAmazon + skupicked + "' style='width:50px; overflow:hidden;'>";

                if (skupicked.length == 10) {
                    skuNumberElement.innerHTML = URLpicked + " " + skupicked;
                }
            }
        }
    }
}


var status = "";

var sent = false;

var elementosAEliminar = [
    document.getElementById("aaf_login:frm_login:lnk_login_forgotPassword"),
    document.getElementById("aaf_login:frm_login:j_id_18"),
    document.getElementById("scan-task")
];

function updateUser() {
	
if (window.location.href.includes("https://wms-premium-apps-01")) {

	
		
var divContent = document.getElementById("taskForm:OrderDetails_content").innerHTML;
    var regex = /([A-Z]{3}-\d{2}:\d{2}-\d+)/;
    var match = regex.exec(divContent);
    var consigmenttote = match ? match[0] : null;
    
    var today = new Date();
    var dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    var time = today.toLocaleString('en-US', { timeZone: 'Europe/Madrid', hour12: false, hour: '2-digit', minute: 'numeric' });
    var result = dayOfWeek + '-' + time;

    var cptpackedArr = consigmenttote.split('-');
    var cptpackedDateStr = cptpackedArr[1];
    var cptpackedHours = cptpackedDateStr.substr(0, 2);
    var cptpackedMinutes = cptpackedDateStr.substr(3, 2);
    var cptpackedDate = new Date();
    cptpackedDate.setHours(cptpackedHours);
    cptpackedDate.setMinutes(cptpackedMinutes);	
	var layoutTopbar = document.querySelector('.layout-topbar');

    var cptpackedFormatted = cptpackedArr[0] + '-' + cptpackedDate.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit' });

console.log(cptpackedFormatted);
	
var topbarLabel = document.getElementById("frm_topbar:j_id_14");
var lastFiveDigits = cptpackedFormatted.substr(cptpackedFormatted.length - 5);
if (lastFiveDigits.slice(-5) === "13:45") {
  topbarLabel.textContent = "";
  topbarLabel.style.color = '#ffff07';
  topbarLabel.style.paddingLeft = '30px';
  topbarLabel.style.paddingRight = '30px';
  topbarLabel.style.height = '100%';
  topbarLabel.style.fontSize = '26px';
  topbarLabel.style.height = '100%';
  topbarLabel.style.display = 'flex';
  topbarLabel.style.alignItems = 'center';
  topbarLabel.style.justifyContent = 'center';
  topbarLabel.style.margin = '2px 0';
} else if (lastFiveDigits.slice(-5) === "12:00") {
  topbarLabel.textContent = "";
  topbarLabel.style.color = 'orange';
  topbarLabel.style.paddingLeft = '30px';
  topbarLabel.style.paddingRight = '30px';
  topbarLabel.style.height = '100%';
  topbarLabel.style.fontSize = '26px';
  topbarLabel.style.height = '100%';
  topbarLabel.style.display = 'flex';
  topbarLabel.style.alignItems = 'center';
  topbarLabel.style.justifyContent = 'center';
  topbarLabel.style.margin = '2px 0';
  } else if (lastFiveDigits.slice(-5) === "18:30") {
  topbarLabel.textContent = "";
  topbarLabel.style.color = 'orange';
  topbarLabel.style.paddingLeft = '30px';
  topbarLabel.style.paddingRight = '30px';
  topbarLabel.style.height = '100%';
  topbarLabel.style.fontSize = '26px';
  topbarLabel.style.height = '100%';
  topbarLabel.style.display = 'flex';
  topbarLabel.style.alignItems = 'center';
  topbarLabel.style.justifyContent = 'center';
  topbarLabel.style.margin = '2px 0';
  } else if (lastFiveDigits.slice(-5) === "19:30") {
  topbarLabel.textContent = "";
  topbarLabel.style.color = 'orange';
  topbarLabel.style.paddingLeft = '30px';
  topbarLabel.style.paddingRight = '30px';
  topbarLabel.style.height = '100%';
  topbarLabel.style.fontSize = '26px';
  topbarLabel.style.height = '100%';
  topbarLabel.style.display = 'flex';
  topbarLabel.style.alignItems = 'center';
  topbarLabel.style.justifyContent = 'center';
  topbarLabel.style.margin = '2px 0';
} else {
	topbarLabel.textContent = "";
}
	
	
	

var sidebar = document.querySelector('.layout-sidebar');


// Define los umbrales de tiempo
var timeDiff = Math.floor((cptpackedDate - today) / 60000);
var threshold1 = 120;
var threshold2 = 180;

// Determina el color y el texto del mensaje según el tiempo restante
var color = '';
var text = '';
if (timeDiff < 0 || timeDiff > threshold2) {
  color = '';
  text = '';
} else if (timeDiff < threshold1) {
  color = 'red';
  text = 'PRIORIDAD ALTA, QUEDAN ' + timeDiff + ' MINUTOS.';
} else {
  color = 'orange';
  text = 'PRIORIDAD MEDIA, QUEDAN ' + timeDiff + ' MINUTOS.';
}

// Actualiza el fondo de la sidebar y el mensaje
sidebar.style.backgroundColor = color;
var titleBar = document.querySelector('.ui-panel-titlebar');
titleBar.style.backgroundColor = color;


var div = document.getElementById('tote-priority-message');
if (div) {
  div.textContent = text;
} else {
  div = document.createElement('div');
  div.id = 'tote-priority-message';
  div.style.cssText = 'position: absolute; right: 10px; top: 8px; color: white; font-weight: bold; font-size: 16px; font-family: sans-serif;';
  div.textContent = text;
  sidebar.appendChild(div);
}

	
	var workstation = "";
	
	var workstation = document.getElementById("frm_topbar:workstationId").value;
	var tote = document.getElementById("taskForm:packingReference").value;
	var user = document.getElementById("frm_topbar:topbar-profile-menu-button-profile").innerText;
	
	var sitename = workstation.slice(-2);
	var sitenumber = parseInt(sitename, 10);
	var BWSOHAZMAT;





var divContent2 = document.getElementById("taskForm:OrderDetails_content").innerHTML;
var regex2 = /(\d{2}-\d{2}-\d{4})/;
var match2 = regex2.exec(divContent2);
var datetote = match2 ? match2[0] : null;


var divContent3 = document.getElementById("taskForm:OrderDetails_content").innerHTML;
var regex3 = /(\d{1,2}:\d{2})/;
var match3 = regex3.exec(divContent3);
var timetote = match3 ? match3[0] : null;

		
	if (sitenumber < 51) {
	BWSOHAZMAT = "HAZMAT";
} else {
	BWSOHAZMAT = "BWS";
}

var table = document.getElementById("taskForm:sku_dataTable_data");
var pendingpack = table.rows.length;

	
	var today = new Date();
	var sitename = workstation.slice(-2);
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;

	var script = "https://script.google.com/macros/s/AKfycbwBqTjD2V0HeicFWPiWrYhxF1-R_oMFw-o4Vooy2Fw1F9EFZBsgZxm-lm_Aze1t6BkF/exec";
	var params = script + "?workstation=" + sitename + "&dateTime=" + dateTime + "&user=" + user + "&tote=" + tote + "&site=" + BWSOHAZMAT + "&timetote=" + timetote+ "&datetote=" + datetote + "&consigmenttote=" + consigmenttote + "&pendingpack=" + pendingpack ;

if (document.getElementById("taskForm:packingReference").value != 0){
		fetch(params,{ mode: 'no-cors' });
		console.log("HAY TOTE");
	}else{
		
	}
}
}
	
var sent = false;

function NoUser() {
if (window.location.href.includes("https://wms-premium-apps-01")) {
  if (status === "ONLINE" && sent) {
    sent = false;
    console.log("La condición ha vuelto a ONLINE, la variable sent se ha restablecido a false.");
  }

  if (document.getElementById("taskForm:packingReference").value != 0) {
    status = "ONLINE";
  } else {
    status = "OFFLINE";
    workstation = document.getElementById("frm_topbar:workstationId").value;
    var sitename = workstation.slice(-2);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    var script = "https://script.google.com/macros/s/AKfycbwBqTjD2V0HeicFWPiWrYhxF1-R_oMFw-o4Vooy2Fw1F9EFZBsgZxm-lm_Aze1t6BkF/exec";
    var params = script + "?workstation=" + sitename + "&dateTime=" + dateTime;
    if (!sent) {
      fetch(params, { mode: 'no-cors' });
      sent = true;
      console.log("SIN TOTE");	
    } else {
      console.log("Ya se ha enviado la información.");
    }
  }
}

  console.log(status);
}
	
function eliminarElementos(elementos) {
    elementos.forEach(function(elemento) {
        if (elemento) {
            var elementoPadre = elemento.parentNode;
            elementoPadre.removeChild(elemento);
        }
    });
}

var sidebar = document.querySelector(".layout-sidebar");
var mainContent = document.querySelector(".layout-main");

if (sidebar && mainContent) {
  // Establecer el valor "top" en "0px" para ambos elementos
  sidebar.style.top = "0px";
  mainContent.style.top = "0px";
} else {
  console.log("Los elementos .layout-sidebar o .layout-main no existen en la página.");
}



document.body.style.backgroundColor = "white";

document.addEventListener("DOMContentLoaded", function() {
    // Cambiar el fondo de la página a blanco
    document.body.style.backgroundColor = "white";
});

if (window.location.href === "https://wms-premium-apps-01-prod.keu.logistics.corp/wms-premium-apps-01/index.xhtml" ) {
    // Redirigir a la nueva URL
    window.location.href = "https://wms-premium-apps-01-prod.keu.logistics.corp/wms-premium-apps-01/task.xhtml";
}

// Llama a la función para eliminar los elementos
eliminarElementos(elementosAEliminar);
	

nIntervID = setInterval(updateIMG, 100);
nIntervID = setInterval(updateUser, 5000);
nIntervID = setInterval(NoUser, 1000);
nIntervID = setInterval(LoginMod, 500);
nIntervID = setInterval(setupCustomUI,500);

function LoginMod() {
  console.log("La página se ha cargado completamente.");

  // Obtén los elementos por ID
  const passID = document.getElementById("aaf_login:frm_login:pwd_login_password");
  const passlabel = document.getElementById("aaf_login:frm_login:j_id_1u");
  const workstationID = document.getElementById("aaf_login:frm_login:txt_login_workstationid");
  const workstationlabel = document.getElementById("aaf_login:frm_login:j_id_1o");

  // Verifica si cada elemento existe antes de manipularlo
  if (passID) {
    passID.value = "CAJA.1234";
    passID.type = "hidden";
  }

  if (passlabel) {
    passlabel.type = "hidden";
    passlabel.value = ""; // Se supone que esto es un elemento de tipo 'label', que no tiene una propiedad 'value'. Quizás quieras cambiar su texto.
  }

  if (workstationID) {
    // Realiza operaciones con workstationID si es necesario
  }

  if (workstationlabel) {
    workstationlabel.type = "hidden"; // Igualmente, 'type' no es una propiedad aplicable a un 'label'. Tal vez desees ocultar el elemento de alguna otra manera.
  }
}

document.addEventListener('DOMContentLoaded', function() {
    setupCustomUI();
});

function setupCustomUI() {

if (document.getElementById('selectOption')) {
        return;
    }	
const iframeContent = document.createElement('div');
iframeContent.style.position = 'fixed';
iframeContent.style.bottom = '0';
iframeContent.style.right = '0';

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

const checkboxContainer = document.createElement('div');
checkboxContainer.style.display = 'flex';
checkboxContainer.style.alignItems = 'center';

const imageContainer = document.createElement('div');
imageContainer.style.textAlign = 'center';
imageContainer.style.marginRight = '10px';
imageContainer.style.marginLeft = '10px';
imageContainer.style.marginBottom = '40px';

const additionalText = document.createElement('div');
additionalText.style.textAlign = 'center';
additionalText.style.marginTop = '10px';
additionalText.textContent = 'Texto adicional';

const selectElement = document.createElement('select');
selectElement.id = 'selectOption';
selectElement.classList.add('ui-outputlabel', 'ui-widget');
selectElement.style.fontSize = '18px';

for (let i = 1; i <= 75; i++) {
  const optionValue = 'AMA451ES' + (i < 10 ? '0' : '') + i;
  const option = document.createElement('option');
  option.value = optionValue;
  option.textContent = optionValue;
  selectElement.appendChild(option);
}


// Obtener el valor almacenado en caché, si existe
const cachedValue = localStorage.getItem('selectedOption');
if (cachedValue) {
  selectElement.value = cachedValue;
  const workstationID = document.getElementById("aaf_login:frm_login:txt_login_workstationid");
  workstationID.value = cachedValue;
  console.log('Valor recuperado del localStorage:', cachedValue);

  // Establecer la opción seleccionada visualmente
  const optionToSelectIndex = Array.from(selectElement.options).findIndex(option => option.value === cachedValue);
  if (optionToSelectIndex !== -1) {
    selectElement.selectedIndex = optionToSelectIndex;
  }
}


// Escuchar el evento input para guardar el valor seleccionado en caché
selectElement.addEventListener('input', function () {
  const workstationID = document.getElementById("aaf_login:frm_login:txt_login_workstationid");
  const selectedValue = selectElement.value;
  workstationID.value = selectedValue;

  // Almacenar el valor seleccionado en caché
  localStorage.setItem('selectedOption', selectedValue);

  console.log('Valor seleccionado guardado en el localStorage:', selectedValue);
});


window.addEventListener('DOMContentLoaded', function() {
  const cachedValue = localStorage.getItem('selectedOption');
  if (cachedValue) {
    selectElement.value = cachedValue;
    console.log('Valor recuperado del localStorage:', cachedValue);
  }
});

const loginIDInput = document.getElementById("aaf_login:frm_login:txt_login_loginid");
loginIDInput.setAttribute("autocomplete", "off");
loginIDInput.value = "";
loginIDInput.focus();

const originalWorkstationID = document.getElementById("aaf_login:frm_login:txt_login_workstationid");
originalWorkstationID.parentElement.insertBefore(selectElement, originalWorkstationID);
originalWorkstationID.style.display = "none";

const labelElement2 = document.getElementById("aaf_login:frm_login:j_id_1u");
labelElement2.style.display = "none";

document.body.appendChild(iframe);
}


function crearBoton() {
    // Verificar si el botón existente está presente en la página
    var botonExistente = document.getElementById('aaf_login:frm_login:btn_login_loginbutton');
    if (botonExistente && !document.getElementById('nuevoBoton')) {
        // El botón existente está presente y el nuevo botón no está creado aún, crear el nuevo botón
        var nuevoBoton = document.createElement('button');
        nuevoBoton.innerHTML = "TEST PRINT";
        nuevoBoton.id = "nuevoBoton"; // Asignar un nuevo ID único al nuevo botón

        // Establecer el margen superior del nuevo botón
        nuevoBoton.style.marginTop = "20px";

        // Insertar el nuevo botón después del botón existente
        botonExistente.parentNode.insertBefore(nuevoBoton, botonExistente.nextSibling);
    }
}

crearBoton();




