import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {Ng2IzitoastService} from "ng2-izitoast";
import { CarritoService } from 'src/services/carrito.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styleUrls: ['./formulario-pago.component.css']
})
export class FormularioPagoComponent implements OnInit {

  

  formularioPago = new FormGroup({
    nombre: new FormControl(''),
    apellidoPaterno: new FormControl(''),
    apellidoMaterno: new FormControl(''),
    numeroTarjeta: new FormControl(''),
    mesExpira: new FormControl(''),
    añoExpira: new FormControl(''),
    codigoSeguridad: new FormControl(''),
    tipoTarjeta: new FormControl(''),
  });

  formularioEnvio = new FormGroup({
    pais: new FormControl(''),
    calle: new FormControl(''),
    numeroCalle:new FormControl(''),
    numeroBlock:new FormControl(''),
    ciudad: new FormControl(''),
    region: new FormControl(''),
    codigoPostal: new FormControl(''),
  });

  datosFacturacion = true;
  direccionFacturacion = false;
  comunas = [];
  carritoResumen:any;
  alertNombre!:string;
  alertApellidoPaterno!:string;
  alertApellidoMaterno!:string;
  alertTipoTarjeta!:string;
  alertNumeroTarjeta!:string;
  alertCodigoSeguridad!:string;
  alertMesExpira!:string;
  alertAnoExpira!:string;

  alertCalle!:string;
  alertNumeroCalle!:string;
  alertPais!:string;
  alertRegion!:string;
  alertCiudad!:string;
  alertCodigoPostal!:string;
  confirmacionDatos = null;

  constructor(public iziToast: Ng2IzitoastService, private carritoService:CarritoService,private router:Router){ 
  }

  ngOnInit(): void {
  }

  selectRegion(newObj){
    let region = this.regionesCiudadesChile.filter(region => region.region == newObj);
    this.comunas = region[0].comunas;
  }
  

  confirmarDatosFacturacion(){
    this.datosFacturacion = false;
    this.direccionFacturacion = true;
  }
  confirmarDireccionFacturacion(){
    // validar Datos
    this.confirmacionDatos = true;
    if(this.formularioPago.value.nombre == ""){
      this.confirmacionDatos = false;
      this.alertNombre = "Debe ingresar un nombre";
    }
    if(this.formularioPago.value.apellidoPaterno == ""){
      this.confirmacionDatos = false;
      this.alertApellidoPaterno = "Debe ingresar un apellido paterno";
    }
    if(this.formularioPago.value.nombre == ""){
      this.confirmacionDatos = false;
      this.alertApellidoMaterno = "Debe ingresar un apellido materno";
    }
    if(this.formularioPago.value.tipoTarjeta == ""){
      this.confirmacionDatos = false;
      this.alertTipoTarjeta = "Debe ingresar un tipo de tarjeta";
    }
    if(this.formularioPago.value.numeroTarjeta == ""){
      this.confirmacionDatos = false;
      this.alertNumeroTarjeta = "Debe ingresar un numero de tarjeta";
    }
    if(this.formularioPago.value.codigoSeguridad == ""){
      this.confirmacionDatos = false;
      this.alertCodigoSeguridad = "Ingrese codigo seguridad";
    }
    if(this.formularioPago.value.mesExpira == ""){
      this.confirmacionDatos = false;
      this.alertMesExpira = "Ingrese mes";
    }
    if(this.formularioPago.value.añoExpira == ""){
      this.confirmacionDatos = false;
      this.alertAnoExpira = "Ingrese año";
    }
    if(this.formularioEnvio.value.calle == ""){
      this.confirmacionDatos = false;
      this.alertCalle = "Debe ingresar una calle";
    }
    if(this.formularioEnvio.value.numeroCalle == ""){
      this.confirmacionDatos = false;
      this.alertNumeroCalle = "Debe ingresar un numero de calle";
    }
    if(this.formularioEnvio.value.pais == ""){
      this.confirmacionDatos = false;
      this.alertPais = "Debe ingresar un pais";
    }
    if(this.formularioEnvio.value.ciudad == ""){
      this.confirmacionDatos = false;
      this.alertCiudad = "Seleccione una ciudad";
    }
    if(this.formularioEnvio.value.region == ""){
      this.confirmacionDatos = false;
      this.alertRegion = "Seleccione una región";
    }
    if(this.formularioEnvio.value.codigoPostal == ""){
      this.confirmacionDatos = false;
      this.alertCodigoPostal = "Ingrese un codigo postal";
    }
    
    if(this.confirmacionDatos){
      this.carritoService.vaciarCarrito();
      this.success();
    }


  }

  success() {
    swal.fire(
      'Pago Exitoso',
      'Su pago se ha registrado correctamente',
      'success'
    ).then((result) => {
      this.router.navigate(["tienda"]);
    })
  }



  regionesCiudadesChile =  [
      {
        region: "Arica y Parinacota",
        comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
      },
      {
          region: "Tarapacá",
          comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
      },
      {
          region: "Antofagasta",
          comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
      },
      {
          region: "Atacama",
          comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
      },
      {
          region: "Coquimbo",
          comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
      },
      {
          region: "Valparaíso",
          comunas: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
      },
      {
          region: "Región del Libertador Gral. Bernardo O’Higgins",
          comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
      },
      {
          region: "Región del Maule",
          comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
      },
      {
          region: "Región de Ñuble",
          comunas: ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
      },
      {
          region: "Región del Biobío",
          comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
      },
      {
          region: "Región de la Araucanía",
          comunas: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
      },
      {
          region: "Región de Los Ríos",
          comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
      },
      {
          region: "Región de Los Lagos",
          comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
      },
      {
          region: "Región Aisén del Gral. Carlos Ibáñez del Campo",
          comunas: ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
      },
      {
          region: "Región de Magallanes y de la Antártica Chilena",
          comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
      },
      {
        region: "Región Metropolitana de Santiago",
        comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
  }]
    

}
