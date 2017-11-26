webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ruteando_ruteando_module__ = __webpack_require__("../../../../../src/app/ruteando/ruteando.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_listados_listados_component__ = __webpack_require__("../../../../../src/app/componentes/listados/listados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_cabecera_cabecera_component__ = __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_complete_la_frase_complete_la_frase_component__ = __webpack_require__("../../../../../src/app/componentes/complete-la-frase/complete-la-frase.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_7__componentes_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__componentes_principal_principal_component__["a" /* PrincipalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
            __WEBPACK_IMPORTED_MODULE_10__componentes_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__componentes_listados_listados_component__["a" /* ListadosComponent */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_18__componentes_registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_19__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__componentes_cabecera_cabecera_component__["a" /* CabeceraComponent */],
            __WEBPACK_IMPORTED_MODULE_21__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
            __WEBPACK_IMPORTED_MODULE_22__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_complete_la_frase_complete_la_frase_component__["a" /* CompleteLaFraseComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__ruteando_ruteando_module__["a" /* RuteandoModule */]
            // NgbModule.forRoot(MiRuteo),
            // importo el ruteo
            // RouterModule.forRoot(MiRuteo)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__servicios_juego_service_service__["a" /* JuegoServiceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Juego adivina el Numero
 * la amquina genera un numero secreto ramdom entre 0 y 100.
 * El jugador debe adivinar el numero.
 * la maquina le informa si el numero ingresado es mayor o menor al numero secreto.
 */
var JuegoAdivina = (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAgilidad = (function (_super) {
    __extends(JuegoAgilidad, _super);
    function JuegoAgilidad(nombre, gano, jugador) {
        var _this = _super.call(this, "Agilidad aritmética", gano, jugador) || this;
        _this.arrayOperadores = ["+", "-", "*", "/"];
        return _this;
    }
    JuegoAgilidad.prototype.generar = function () {
        var indiceNumero;
        indiceNumero = Math.floor((Math.random() * 10) + 0);
        this.numeroUno = indiceNumero;
        indiceNumero = Math.floor((Math.random() * 10) + 0);
        this.numeroDos = indiceNumero;
        var indiceOper;
        indiceOper = Math.floor((Math.random() * 4) + 0);
        this.operador = this.arrayOperadores[indiceOper];
        switch (this.operador) {
            case "+":
                this.resultadoBien = this.numeroUno + this.numeroDos;
                break;
            case "-":
                this.resultadoBien = this.numeroUno - this.numeroDos;
                break;
            case "*":
                this.resultadoBien = this.numeroUno * this.numeroDos;
                break;
            case "/":
                if (this.numeroDos == 0) {
                    indiceNumero = Math.floor((Math.random() * 10) + 0);
                    this.numeroDos = indiceNumero;
                    this.resultadoBien = this.numeroUno / this.numeroDos;
                }
                else {
                    this.resultadoBien = this.numeroUno / this.numeroDos;
                }
                break;
        }
    };
    JuegoAgilidad.prototype.verificar = function () {
        if (this.resultadoBien == this.numeroIngresado) {
            this.gano = true;
        }
        else {
            this.gano = false;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAgilidad.prototype.retornarAyuda = function () {
        /* if (this.numeroIngresado < this.numeroSecreto) {
           return "Falta";
         }
         return "Te pasate";
         */
        return "algo";
    };
    return JuegoAgilidad;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-anagrama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAnagrama; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAnagrama = (function (_super) {
    __extends(JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador) {
        var _this = _super.call(this, "Anagrama", gano, jugador) || this;
        _this.palabraOrdenada = "";
        _this.palabraDesordenada = "";
        _this.palabraIngresada = "";
        _this.esperando = 0;
        //aca hacer el array con palabras
        _this.palabras = [
            {
                desordenada: "racngi",
                ordenada: "racing"
            },
            {
                desordenada: "rierv",
                ordenada: "river"
            },
            {
                desordenada: "cabo",
                ordenada: "boca"
            },
            {
                desordenada: "inpendediente",
                ordenada: "independiente"
            },
            {
                desordenada: "lorenzosan",
                ordenada: "san lorenzo"
            }
        ];
        return _this;
    }
    JuegoAnagrama.prototype.generarPalabra = function () {
        /*  this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
         console.info('numero Secreto:' + this.numeroSecreto);
          this.gano = false;
          */
        var indice;
        indice = Math.floor((Math.random() * 5) + 0);
        console.log(this.palabras[indice]["ordenada"]);
        this.palabraDesordenada = this.palabras[indice]["desordenada"];
        this.palabraOrdenada = this.palabras[indice]["ordenada"];
        this.esperando = 1;
    };
    JuegoAnagrama.prototype.verificar = function () {
        if (this.palabraIngresada == this.palabraOrdenada) {
            this.gano = true;
            this.palabraOrdenada = "";
            this.palabraDesordenada = "";
            this.palabraIngresada = "";
            this.esperando = 0;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAnagrama.prototype.retornarAyuda = function () {
        /* if (this.numeroIngresado < this.numeroSecreto) {
           return "Falta";
         }
         return "Te pasate";
         */
        return "algo";
    };
    return JuegoAnagrama;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-anagrama.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-frase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoFrase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoFrase = (function (_super) {
    __extends(JuegoFrase, _super);
    function JuegoFrase(nombre, gano, jugador) {
        var _this = _super.call(this, "Complete la frase", gano, jugador) || this;
        _this.fraseUno = false;
        _this.fraseDos = false;
        _this.fraseTres = false;
        _this.fraseCuatro = false;
        _this.fraseCinco = false;
        _this.palabraIngresada = "";
        return _this;
    }
    JuegoFrase.prototype.generarr = function () {
        this.indiceFase = Math.floor((Math.random() * 5) + 0);
        console.log(this.indiceFase);
        switch (this.indiceFase) {
            case 0:
                this.fraseUno = true;
                break;
            case 1:
                this.fraseDos = true;
                break;
            case 2:
                this.fraseTres = true;
                break;
            case 3:
                this.fraseCuatro = true;
                break;
            case 4:
                this.fraseCinco = true;
                break;
        }
    };
    JuegoFrase.prototype.verificar = function () {
        switch (this.indiceFase) {
            case 0:
                if (this.palabraIngresada.toLowerCase() == "deseo") {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
            case 1:
                if (this.palabraIngresada.toLowerCase() == "nivel") {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
            case 2:
                if (this.palabraIngresada.toLowerCase() == "amigos") {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
            case 3:
                if (this.palabraIngresada.toLowerCase() == "diego") {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
            case 4:
                if (this.palabraIngresada.toLowerCase() == "viviendo") {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoFrase.prototype.retornarAyuda = function () {
        /* if (this.numeroIngresado < this.numeroSecreto) {
           return "Falta";
         }
         return "Te pasate";
         */
        return "algo";
    };
    return JuegoFrase;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-frase.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-piedra-papel-tijera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoPiedraPapelTijera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoPiedraPapelTijera = (function (_super) {
    __extends(JuegoPiedraPapelTijera, _super);
    function JuegoPiedraPapelTijera(nombre, gano, jugador) {
        var _this = _super.call(this, "Piedra, papel o tijera", gano, jugador) || this;
        _this.esperando = 0;
        return _this;
    }
    JuegoPiedraPapelTijera.prototype.Generar = function () {
        var indice = Math.floor((Math.random() * 3) + 0);
        switch (indice) {
            case 0:
                this.opcionMaquina = "piedra";
                break;
            case 1:
                this.opcionMaquina = "papel";
                break;
            case 2:
                this.opcionMaquina = "tijera";
                break;
        }
        this.esperando = 1;
        console.log(this.opcionMaquina);
    };
    JuegoPiedraPapelTijera.prototype.verificar = function () {
        switch (this.opcionMaquina) {
            case "piedra":
                if (this.opcionUsuario == "papel") {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
            case "papel":
                if (this.opcionUsuario == "tijera") {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
            case "tijera":
                if (this.opcionUsuario == "piedra") {
                    this.gano = true;
                }
                else {
                    this.gano = false;
                }
                break;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoPiedraPapelTijera;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-piedra-papel-tijera.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = localStorage.getItem("jugadorConectado");
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.fondo\r\n{\r\n    font-family: 'Kalam', cursive;\r\n}\r\nform {\r\n    border: 50px solid lightpink;\r\n    padding: 10px;\r\n    background:ligh;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    \r\n    cursor: pointer;\r\n    width: 100%;\r\n    border-color:white;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<div class=\"fondo\">\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{nuevoJuego.nombre}}!\r\n  </h1>\r\n </div>\r\n<h2></h2>\r\n<form name=\"juego\">\r\n\r\n   <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\r\n \r\n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n \r\n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n \r\n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n\r\n\r\n</form>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<div id=\"snackbar\">{{Mensajes}}</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaElNumeroComponent = (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.resultados = new Array();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
        if (localStorage.getItem("resultados") != null) {
            this.resultados = JSON.parse(localStorage.getItem("resultados"));
        }
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
            this.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */](this.nuevoJuego.nombre, this.nuevoJuego.gano, this.nuevoJuego.jugador));
            console.log(this.resultados);
            localStorage.setItem("resultados", JSON.stringify(this.resultados));
        }
        else {
            this.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */](this.nuevoJuego.nombre, this.nuevoJuego.gano, this.nuevoJuego.jugador));
            console.log(this.resultados);
            localStorage.setItem("resultados", JSON.stringify(this.resultados));
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    return AdivinaElNumeroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaElNumeroComponent);

var _a;
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \r\n<h1> listado </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdivinaMasListadoComponent = (function () {
    function AdivinaMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    };
    return AdivinaMasListadoComponent;
}());
AdivinaMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaMasListadoComponent);

//# sourceMappingURL=adivina-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondo\r\n{\r\n    font-family: 'Kalam', cursive;\r\n    background-color:lightblue;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    background-size: cover;\r\n    margin:0;\r\n    padding:1px;\r\n}\r\n\r\n\r\n.botonPiedra{\r\n\r\n    width: 326px;\r\n    height: 380px;\r\n    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\r\n    font-size: 40px;\r\n   \r\n    color: black;\r\n    \r\n    background: url(" + __webpack_require__("../../../../../src/assets/imagenes/piedraa.jpg") + ") no-repeat; \r\n    background-size: 326px 380px;\r\n\r\n    border-color:red;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n    margin-left: 2cm;\r\n}\r\n\r\n.botonPapel{\r\n    \r\n        width: 326px;\r\n        height: 380px;\r\n        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\r\n        font-size: 40px;\r\n       \r\n        color: black;\r\n        \r\n        background: url(" + __webpack_require__("../../../../../src/assets/imagenes/papel.jpg") + ") no-repeat; \r\n        background-size: 326px 380px;\r\n    \r\n        border-color:red;\r\n        border-width: 2px;\r\n        border-style: solid;\r\n\r\n        margin-left: 2cm;\r\n    }\r\n\r\n    .botonTijera\r\n    {\r\n        width: 326px;\r\n        height: 380px;\r\n        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\r\n        font-size: 40px;\r\n       \r\n        color: black;\r\n        \r\n        background: url(" + __webpack_require__("../../../../../src/assets/imagenes/tijera.jpg") + ") no-repeat; \r\n        background-size: 326px 380px;\r\n    \r\n        border-color:red;\r\n        border-width: 2px;\r\n        border-style: solid;\r\n\r\n        margin-left: 2cm;\r\n    }\r\n\r\n    p{\r\n        color: #E6E65F;\r\n     \r\n    }\r\n\r\nform {\r\n    border: 30px solid lightpink;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    \r\n    cursor: pointer;\r\n    width: 100%;\r\n    border-color:white;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n\r\n    border-radius: 200px 200px 200px 200px;\r\n    -moz-border-radius: 200px 200px 200px 200px;\r\n    -webkit-border-radius: 200px 200px 200px 200px;\r\n    border: 0px solid #000000;\r\n\r\n    border-width: 4px;\r\n    border-style: solid;\r\n\r\n\r\n\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n   \r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 22px;\r\n}\r\n#snackbar.Ganador {\r\n  \r\n\r\n    background-color: #059F2F;\r\n    border-color:#013401;\r\n   \r\n}\r\n#snackbar.Perdedor {\r\n    border-radius: 200px 200px 200px 200px;\r\n    -moz-border-radius: 200px 200px 200px 200px;\r\n    -webkit-border-radius: 200px 200px 200px 200px;\r\n    border: 0px solid #000000;\r\n\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<!-- index.html -->\r\n\r\n<div class=\"fondo\">\r\n<form name=\"juego\">\r\n<ul>\r\n   <li>\r\n   Primer número: <input [(ngModel)]=\"nuevoJuego.numeroUno\"  name=\"numeroUno\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n  \r\n  </li>\r\n  <li>\r\n   Operador: <input [(ngModel)]=\"nuevoJuego.operador\"  name=\"operador\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n    \r\n  </li>\r\n  <li>\r\n   Segundo número: <input [(ngModel)]=\"nuevoJuego.numeroDos\"  name=\"numeroDos\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n    \r\n  </li>\r\n  <li>\r\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese resultado\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n     \r\n   </li>\r\n  \r\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\r\n \r\n  \r\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\r\n  \r\n  \r\n</ul>\r\n\r\n</form>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div id=\"snackbar\">{{Mensajes}}</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgilidadAritmeticaComponent = (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.resultados = new Array();
        this.ocultarVerificar = true;
        this.Tiempo = 8;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        console.info("Inicio agilidad");
        if (localStorage.getItem("resultados") != null) {
            this.resultados = JSON.parse(localStorage.getItem("resultados"));
        }
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.Tiempo = 8;
        this.ocultarVerificar = false;
        this.nuevoJuego.generar();
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 8;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
        if (this.nuevoJuego.verificar()) {
            this.MostarMensaje("Sos un Genio!!!", true);
            this.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */](this.nuevoJuego.nombre, this.nuevoJuego.gano, this.nuevoJuego.jugador));
            console.log(this.resultados);
            localStorage.setItem("resultados", JSON.stringify(this.resultados));
        }
        else {
            this.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */](this.nuevoJuego.nombre, this.nuevoJuego.gano, this.nuevoJuego.jugador));
            console.log(this.resultados);
            localStorage.setItem("resultados", JSON.stringify(this.resultados));
            this.MostarMensaje("Perdiste!!! El resultado era: " + this.nuevoJuego.resultadoBien, false);
        }
        //this.Tiempo = 8;
        this.nuevoJuego.numeroDos = 0;
        this.nuevoJuego.numeroUno = 0;
        this.nuevoJuego.numeroIngresado = 0;
        this.nuevoJuego.operador = "";
    };
    AgilidadAritmeticaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = true;
        }, 3000);
        console.info("objeto", x);
    };
    return AgilidadAritmeticaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadAritmeticaComponent);

var _a;
//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \r\n<h1> Listado de Resultados </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgilidadMasListadoComponent = (function () {
    function AgilidadMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    return AgilidadMasListadoComponent;
}());
AgilidadMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadMasListadoComponent);

//# sourceMappingURL=agilidad-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pepe\r\n{\r\n    border-color:white;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n.fondo\r\n{\r\n    height:100%;\r\n    background-color:lightblue;\r\n   \r\n    font-family: 'Kalam', cursive;\r\n}\r\n\r\nform {\r\n    border: 10px solid lightpink;\r\n    padding: 10px;\r\n    background:  grey;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n   \r\n    cursor: pointer;\r\n    width: 100%;\r\n    border-color:white;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n   height: 1.5cm;\r\n    top: 200px;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<div class=\"fondo\">\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{nuevoJuego.nombre}}!\r\n  </h1>\r\n </div>\r\n<h2></h2>\r\n<form name=\"juego\">\r\n\r\n <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n\r\n\r\n   <label>Palabra desordenada: </label> \r\n    <h1>{{nuevoJuego.palabraDesordenada}}  </h1>\r\n    <label>Ingrese palabra de manera correcta:  </label> <br> <input [(ngModel)]=\"nuevoJuego.palabraIngresada\" placeholder=\"ingrese palabra\" name=\"palabraOrdenadaa\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n \r\n    \r\n\r\n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.esperando!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n \r\n    <h2><button *ngIf=\"nuevoJuego.palabraDesordenada!=null \" (click)=\"generarPalabra()\"  class=\"btn btn-info btn-lg\">Dame una palabra desordenada</button></h2>\r\n    \r\n   \r\n    <h2><p *ngIf=\"nuevoJuego.esperando!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese una palabra</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino la palabra</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n\r\n\r\n</form>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<div id=\"snackbar\">{{Mensajes}}</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__ = __webpack_require__("../../../../../src/app/clases/juego-anagrama.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnagramaComponent = (function () {
    function AnagramaComponent() {
        this.resultados = new Array();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
        this.ocultarVerificar = true;
        if (localStorage.getItem("resultados") != null) {
            this.resultados = JSON.parse(localStorage.getItem("resultados"));
        }
    }
    AnagramaComponent.prototype.generarPalabra = function () {
        this.nuevoJuego.generarPalabra();
        this.contador = 0;
        this.ocultarVerificar = false;
        this.nuevoJuego.gano = false;
    };
    AnagramaComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        //console.info("numero Secreto:",this.nuevoJuego.gano);  
        if (this.nuevoJuego.verificar()) {
            // this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__["a" /* JuegoAnagrama */](this.nuevoJuego.nombre, this.nuevoJuego.gano, this.nuevoJuego.jugador));
            console.log(this.resultados);
            localStorage.setItem("resultados", JSON.stringify(this.resultados));
        }
        else {
            this.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__["a" /* JuegoAnagrama */](this.nuevoJuego.nombre, this.nuevoJuego.gano, this.nuevoJuego.jugador));
            console.log(this.resultados);
            localStorage.setItem("resultados", JSON.stringify(this.resultados));
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    //mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AnagramaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    return AnagramaComponent;
}());
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AnagramaComponent);

//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel\r\n{\r\n    height: 200px;\r\n    background-image: url(\"/assets/imagenes/cabeceraMauro.jpg\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n    font-family: 'Kalam', cursive;\r\n}\r\n\r\n\r\n.hero-text {\r\ntext-align: center;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\ncolor: white;\r\n}\r\n\r\n.hero-text a {\r\nborder: none;\r\noutline: 0;\r\ndisplay: inline-block;\r\npadding: 10px 25px;\r\ncolor: black;\r\nbackground-color: #ddd;\r\ntext-align: center;\r\ncursor: pointer;\r\n}\r\n\r\n.hero-text a:hover {\r\nbackground-color: #555;\r\ncolor: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"hero-text\">\r\n      <h1 style=\"font-size:50px\">Sala de Juegos</h1>\r\n      <p>Mauro Suppan</p>\r\n      <a href=\"https://github.com/MauroSuppan\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n      <a  routerLink=\"/QuienSoy\" >Quien Soy? <i class=\"fa fa-user\"></i></a>\r\n  </div>\r\n  <ul class=\"nav navbar-nav navbar-right\">\r\n         \r\n          <li><a  routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Salir</a></li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    return CabeceraComponent;
}());
CabeceraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cabecera',
        template: __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CabeceraComponent);

//# sourceMappingURL=cabecera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/complete-la-frase/complete-la-frase.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondo\r\n{\r\n    height:100%;\r\n    background-color:lightblue;\r\n   \r\n    font-family: 'Kalam', cursive;\r\n}\r\n\r\nform {\r\n    border: 10px solid lightpink;\r\n    padding: 10px;\r\n    background:  grey;\r\n    margin-top:2cm;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 15%;\r\n    margin: 0;\r\n    padding: 5px 10px;\r\n    background: 0;\r\n    border: 0;\r\n    border-bottom: 1px solid lightgreen;\r\n    outline: 0;\r\n    font-style: italic;\r\n    font-size: 30px;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 5px;\r\n    color: lightpink;\r\n    outline: 0;\r\n}\r\n\r\nbutton {\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n   \r\n    cursor: pointer;\r\n    width: 100%;\r\n    border-color:white;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    border-radius: 200px 200px 200px 200px;\r\n    -moz-border-radius: 200px 200px 200px 200px;\r\n    -webkit-border-radius: 200px 200px 200px 200px;\r\n    border: 0px solid #000000;\r\n\r\n    border-width: 4px;\r\n    border-style: solid;\r\n\r\n\r\n\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n   \r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 22px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n   height: 1.5cm;\r\n    top: 400px;\r\n    border-color:#013401;\r\n    font-size: 25px;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n    height: 1.5cm;\r\n    top: 400px;\r\n    font-size: 25px;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/complete-la-frase/complete-la-frase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n  <form name=\"juego\" >\n  <ul>\n \n      <div *ngIf=nuevoJuego.fraseUno>\n<h1>\"Hay un <input type=\"text\"  [(ngModel)]='nuevoJuego.palabraIngresada' [ngModelOptions]=\"{standalone: true}\">que pido siempre que pasa un tren\"</h1>\n      </div>\n\n <div *ngIf=nuevoJuego.fraseDos>\n  <h1>\"Ella multimillonaria y de mas alto   <input type=\"text\"  [(ngModel)]='nuevoJuego.palabraIngresada' [ngModelOptions]=\"{standalone: true}\">termino la secundaria con un promedio de 10\"</h1>\n     </div>\n               \n <div *ngIf=nuevoJuego.fraseTres>\n<h1>\"Todo sigue igual de bien, siguen los<input type=\"text\"  [(ngModel)]='nuevoJuego.palabraIngresada' [ngModelOptions]=\"{standalone: true}\"> que quiero tener, no me puedo quejar\"</h1>\n      </div>\n\n      <div *ngIf=nuevoJuego.fraseCuatro>\n    <h1>\"Es verdad que el <input type=\"text\"  [(ngModel)]='nuevoJuego.palabraIngresada' [ngModelOptions]=\"{standalone: true}\"> es lo mas grande que hay, es nuestra religión, nuestra identidad\"  </h1>\n        </div>\n\n        <div *ngIf=nuevoJuego.fraseCinco>\n            <h1>\"Y si acaso no brillara el sol, y quedara yo atrapado aquí, no veria la razón de seguir <input type=\"text\"  [(ngModel)]='nuevoJuego.palabraIngresada' [ngModelOptions]=\"{standalone: true}\"> sin tu amor\"</h1>\n                </div>        \n\n                \n    \n      <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\n   \n    \n      <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\" style=\"height: 150px; font-size: 60px;\">Dame una frase de canción</button></h2>\n    \n    \n  </ul>\n  \n  </form>\n  \n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br> <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  \n  <div id=\"snackbar\">{{Mensajes}}</div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/complete-la-frase/complete-la-frase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteLaFraseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_frase__ = __webpack_require__("../../../../../src/app/clases/juego-frase.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompleteLaFraseComponent = (function () {
    function CompleteLaFraseComponent() {
        this.resultados = new Array();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_frase__["a" /* JuegoFrase */]();
        if (localStorage.getItem("resultados") != null) {
            this.resultados = JSON.parse(localStorage.getItem("resultados"));
        }
    }
    CompleteLaFraseComponent.prototype.ngOnInit = function () {
    };
    CompleteLaFraseComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.Tiempo = 10;
        this.ocultarVerificar = false;
        this.nuevoJuego.generarr();
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 10;
            }
        }, 900);
    };
    CompleteLaFraseComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
        if (this.nuevoJuego.verificar()) {
            this.MostarMensaje("Sos un Genio!!!", true);
            this.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_frase__["a" /* JuegoFrase */](this.nuevoJuego.nombre, this.nuevoJuego.gano, this.nuevoJuego.jugador));
            console.log(this.resultados);
            localStorage.setItem("resultados", JSON.stringify(this.resultados));
            this.nuevoJuego.fraseUno = false;
            this.nuevoJuego.fraseDos = false;
            this.nuevoJuego.fraseTres = false;
            this.nuevoJuego.fraseCuatro = false;
            this.nuevoJuego.fraseCinco = false;
            this.nuevoJuego.palabraIngresada = "";
        }
        else {
            this.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_frase__["a" /* JuegoFrase */](this.nuevoJuego.nombre, this.nuevoJuego.gano, this.nuevoJuego.jugador));
            console.log(this.resultados);
            localStorage.setItem("resultados", JSON.stringify(this.resultados));
            this.MostarMensaje("Perdiste!! inténtalo de nuevo ", false);
            this.nuevoJuego.fraseUno = false;
            this.nuevoJuego.fraseDos = false;
            this.nuevoJuego.fraseTres = false;
            this.nuevoJuego.fraseCuatro = false;
            this.nuevoJuego.fraseCinco = false;
            this.nuevoJuego.palabraIngresada = "";
        }
    };
    CompleteLaFraseComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = true;
        }, 3000);
        console.info("objeto", x);
    };
    return CompleteLaFraseComponent;
}());
CompleteLaFraseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-complete-la-frase',
        template: __webpack_require__("../../../../../src/app/componentes/complete-la-frase/complete-la-frase.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/complete-la-frase/complete-la-frase.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CompleteLaFraseComponent);

//# sourceMappingURL=complete-la-frase.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"hero-text\">\r\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\r\n        <p>Octavio villegas</p>\r\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n          </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/componentes/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondo\r\n{\r\n    background-color:lightblue;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    background-size: cover;\r\n    margin:0;\r\n    padding:1px;\r\n\r\n    font-family: 'Kalam', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"fondo\">\r\n<app-menu></app-menu>\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n   Sala de Juegos\r\n  </h1>\r\n </div>\r\n <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    return JuegosComponent;
}());
JuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-juegos',
        template: __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JuegosComponent);

//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\r\n\r\n<p> {{juego.nombre}} </p>\r\n<p> {{juego.jugador}} </p>\r\n\r\n</div-->\r\n\r\n<table class=\"table table-condensed\">\r\n    <thead>\r\n      <tr>\r\n        <th>Juego</th>\r\n        <th>Jugador</th>\r\n        <th>Resultado</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <ng-container *ngFor=\"let juego of listado\">\r\n      <tr *ngIf=\"juego.gano\" class=\"success\">\r\n        \r\n        <td>{{juego.nombre}} </td>\r\n        <td>{{juego.jugador}} </td> \r\n        <td *ngIf=\"juego.gano\">Gano </td>   \r\n        <td *ngIf=\"!juego.gano\">Perdio</td>     \r\n      </tr>\r\n\r\n       <tr *ngIf=\"!juego.gano\" class=\"danger\">\r\n            <td>{{juego.nombre}} </td>\r\n            <td>{{juego.jugador}} </td> \r\n            <td *ngIf=\"juego.gano\">Gano </td>   \r\n            <td *ngIf=\"!juego.gano\">Perdio</td>     \r\n            \r\n      </tr>\r\n    </ng-container>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    return ListadoDeResultadosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadoDeResultadosComponent);

//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style all font awesome icons */\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* Add a hover effect if you want */\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n/* Set a specific color for each brand */\r\n\r\n/* Facebook */\r\n.fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n/* Twitter */\r\n.fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n}\r\n\r\n.seleccion\r\n{\r\n    color:blue;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \r\n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \r\n\r\n<!-- Centered Pills -->\r\n<ul class=\"nav nav-pills nav-justified\">\r\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\r\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\r\n  </ul>\r\n  \r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n\r\n<button class=\"btn btn-success\"(click)=\"Ganadores()\">Ver solo ganadores</button>\r\n<br>\r\n<button class=\"btn btn-danger\" (click)=\"Perdedores()\">Ver solo perdedores</button>\r\n<br>\r\n<button class=\"btn btn-info\" (click)=\"VerTodos()\">Ver Todos los resultados</button>\r\n<br>\r\n<br>\r\n\r\n<div class=\"seleccion\">\r\n    <select [(ngModel)]=\"juego\">\r\n      <option value=\"Complete la frase\">Complete la frase</option>\r\n      <option value=\"Agilidad aritmética\">Agilidad aritmética</option>\r\n      <option value=\"Piedra, papel o tijera\">Piedra, papel o tijera</option>\r\n      <option value=\"Adivina el número\">Adivina el número</option>\r\n      <option value=\"Anagrama\">Anagrama</option>\r\n    </select>\r\n    </div>\r\n    <button class=\"btn btn-info\"(click)=\"MostrarPorJuego(juego)\">Seleccione un juego y presione</button>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
        //listado apra compartir tomado del local storage
        this.listadoParaCompartir = JSON.parse(localStorage.getItem("resultados"));
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    ListadoComponent.prototype.VerTodos = function () {
        this.listadoParaCompartir = JSON.parse(localStorage.getItem("resultados"));
    };
    ListadoComponent.prototype.Ganadores = function () {
        this.listadoParaCompartir = JSON.parse(localStorage.getItem("resultados"));
        this.listadoParaCompartir = this.listadoParaCompartir.filter(function (data) {
            //data tiene las propiedades de  listadoParaCompartir
            return data.gano == true;
        });
    };
    ListadoComponent.prototype.Perdedores = function () {
        this.listadoParaCompartir = JSON.parse(localStorage.getItem("resultados"));
        this.listadoParaCompartir = this.listadoParaCompartir.filter(function (data) {
            return data.gano == false;
        });
    };
    ListadoComponent.prototype.MostrarPorJuego = function (juego) {
        this.listadoParaCompartir = JSON.parse(localStorage.getItem("resultados"));
        this.listadoParaCompartir = this.listadoParaCompartir.filter(function (data) {
            return data.nombre == juego;
        });
        this.juego = "";
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listados works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadosComponent = (function () {
    function ListadosComponent() {
    }
    ListadosComponent.prototype.ngOnInit = function () {
    };
    return ListadosComponent;
}());
ListadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listados',
        template: __webpack_require__("../../../../../src/app/componentes/listados/listados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listados/listados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadosComponent);

//# sourceMappingURL=listados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondo\r\n{\r\n    background-color:blue;\r\n}\r\nform {\r\n    border: 10px solid black;\r\n    padding: 10px;\r\n    background:lightblue;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border-color:white;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    cursor: pointer;\r\n    width: 100%;\r\n   \r\n   \r\n   \r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n    color: black;\r\n    border-color:black;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: yellow;\r\n    color: black;\r\n    border-color:black;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div style=\"margin: 20% auto; width: 30%;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      Usuario\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <input type=\"text\"  [(ngModel)]=\"usuario\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 5px\">\r\n    <div class=\"col-lg-6\">\r\n      Clave\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <input type=\"password\" [(ngModel)]=\"clave\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"text-align: center; margin-top: 10px\">\r\n    <div class=\"col-lg-12\">\r\n      <button (click)=\"Entrar()\" class=\"btn btn-info btn-lg\" >Entrar</button>\r\n    </div>\r\n  </div>\r\n</div-->\r\n<div class=\"fondo\">\r\n<div class=\"container\" >\r\n  <div class=\"jumbotron\" style=\"padding:50px;\">\r\n    <form action=\"return true;\">\r\n      <div class=\"imgcontainer\">\r\n        <img src=\"../assets/imagenes/loginn.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <label><b>Usuario</b></label>\r\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\r\n\r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\r\n            \r\n        <button *ngIf=\"logeando\" style=\"background-image:url('assets/imagenes/estre.jpg');  font-weight: 600; font-size: 30px;  color: red;  border-color:red;\" (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\r\n       \r\n        <div *ngIf=\"!logeando\" class=\"progress\">\r\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\r\n              {{progresoMensaje}} - {{progreso}}%\r\n            </div>\r\n        </div>\r\n       \r\n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\r\n      </div>\r\n\r\n      <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n        <button type=\"button\" class=\"cancelbtn\">Cancelar</button>\r\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button>\r\n       <!-- <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>-->\r\n      </div>\r\n     \r\n    </form>\r\n    <button  (click)='loguearseComoAdm()' class=\"btn btn-primary btn-md\">Entrar como \"Administrador\"</button>\r\n    <button  (click)='loguearseComoJ1()' class=\"btn btn-primary btn-md\">Entrar como \"J1\"</button>\r\n    <button  (click)='loguearseComoJ2()' class=\"btn btn-primary btn-md\">Entrar como \"J2\"</button>\r\n  </div>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
        localStorage.setItem("usuarioAdmin", "admin");
        localStorage.setItem("claveAdmin", "11");
        localStorage.setItem("usuarioJ1", "j1");
        localStorage.setItem("claveJ1", "44");
        localStorage.setItem("usuarioJ2", "j2");
        localStorage.setItem("claveJ2", "55");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Entrar = function () {
        /*if (this.usuario === 'admin' && this.clave === 'admin') {
          this.router.navigate(['/Principal']);
          */
        if (this.usuario == localStorage.getItem("usuarioAdmin") && this.clave == localStorage.getItem("claveAdmin") ||
            this.usuario == localStorage.getItem("usuarioJ1") && this.clave == localStorage.getItem("claveJ1") ||
            this.usuario == localStorage.getItem("usuarioJ2") && this.clave == localStorage.getItem("claveJ2") ||
            localStorage.getItem("usuarioNuevo") != "null" && this.usuario == localStorage.getItem("usuarioNuevo") && this.clave == localStorage.getItem("claveNuevo")) {
            localStorage.setItem("jugadorConectado", this.usuario);
            this.router.navigate(['/Principal']);
        }
        else {
            alert("Error de usuario y contraseña. Reingrese");
            this.clave = '';
            this.usuario = '';
            this.logeando = true;
            this.progreso = 0;
            this.ProgresoDeAncho = "0%";
        }
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    LoginComponent.prototype.loguearseComoAdm = function () {
        this.usuario = "admin";
        this.clave = "11";
    };
    LoginComponent.prototype.loguearseComoJ1 = function () {
        this.usuario = "j1";
        this.clave = "44";
    };
    LoginComponent.prototype.loguearseComoJ2 = function () {
        this.usuario = "j2";
        this.clave = "55";
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondo\r\n{\r\n    background-color: #590303;\r\n    font-family: 'Kalam', cursive;\r\n}\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    border-radius: 5px; /* 5px rounded corners */\r\n    max-width: 200px;\r\n   height: 100%;\r\n    margin: 10px;\r\n    padding-bottom: 10px;\r\n    float: left;\r\n  background-color: lightcoral;\r\n    text-align: center;\r\n}\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\nimg {\r\n    border-radius: 5px 5px 0 0;\r\n    width: 200px;\r\n    height: 200px;\r\n}/* Add some padding inside the card container */\r\n.container {\r\n    padding: 2px 16px;\r\n}\r\n\r\n\r\n.button{\r\n\r\n   /*  background:('../assets/imagenes/lasestrellas1.jpg');*/\r\n\r\n  \r\n   \r\n    margin-left: 1px;\r\n    display: inline-block;\r\n    width: 90%;\r\n    padding: 5px 15px;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: #fff;\r\n    /*background-color: #4CAF50;*/\r\n    border-color:white;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n    border-radius: 15px;\r\n    box-shadow: 0 9px red;\r\n\r\n    \r\n    outline: 0;\r\n \r\n    padding: 8px;\r\n    color: white;\r\n   /* background-color: #000;*/\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n  \r\n  .button:hover {background-color: #3e8e41}\r\n  \r\n  .button:active {\r\n    background-color: #3e8e41;\r\n    box-shadow: 0 5px #666;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n  }\r\n\r\n  h1\r\n  {\r\n      color:#590303;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\r\n<div class=\"container\" >\r\n    <div class=\"card\">\r\n        <h1>Velocidad y agilidad aritmética </h1>\r\n      <img class=\"img-thumbnail\"   src=\"../assets/imagenes/cerebro1.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n      \r\n      <p class=\"title\">Juego de agilidad mental</p>\r\n      \r\n  \r\n   \r\n      <p>           <button class=\"button\" style=\"background-image:url('assets/imagenes/lasestrellas.jpg')\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\r\n    \r\n    </div>\r\n  \r\n    <div class=\"card\">\r\n        <h1>Piedra Papel o Tijera</h1>\r\n      <img class=\"img-thumbnail\" src=\"../assets/imagenes/piedra.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n     \r\n      <p class=\"title\">Juega contra la máquina</p>\r\n     \r\n      \r\n  \r\n      <p>           <button class=\"button\"  (click)=\"Juego('PPT')\" style=\"background-image:url('assets/imagenes/lasestrellas.jpg')\">Jugar</button></p>\r\n    </div>\r\n    <div class=\"card\">\r\n        <h1>Adivina el número secreto</h1>\r\n      <img  class=\"img-thumbnail\"  src=\"../assets/imagenes/adivina1.png\" alt=\"Avatar\" style=\"width:100%\">\r\n      \r\n      <p class=\"title\">Juega de estrategia</p>\r\n      \r\n      <p>           <button class=\"button\" style=\"background-image:url('assets/imagenes/lasestrellas.jpg')\"  (click)=\"Juego('Adivina')\" >Jugar</button></p>\r\n    </div>\r\n    <div class=\"card\">\r\n        <h1>Anagrama</h1>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n      <img  class=\"img-thumbnail\"  src=\"../assets/imagenes/ANAGRAMA.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n      \r\n      <p class=\"title\">Arma la palabra</p>\r\n      \r\n  \r\n    \r\n      \r\n     \r\n      \r\n      \r\n      <p>           <button class=\"button\" style=\"background-image:url('assets/imagenes/lasestrellas.jpg')\" (click)=\"Juego('Anagrama')\">Jugar</button></p>\r\n    </div>\r\n    <div class=\"card\">\r\n        <h1>Completa la frase</h1>\r\n        <br>\r\n        <br>\r\n     \r\n        <img  class=\"img-thumbnail\"  src=\"../assets/imagenes/cancion.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n      \r\n        <p class=\"title\">Juego de canciones</p>\r\n        \r\n       \r\n      \r\n        <p>           <button class=\"button\" style=\"background-image:url('assets/imagenes/lasestrellas.jpg')\" (click)=\"Juego('frase')\">Jugar</button></p>\r\n      </div>\r\n\r\n  </div>\r\n  <br>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'PPT':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'frase':
                this.router.navigate(['/Juegos/CompleteLaFrase']);
                break;
        }
    };
    return MenuCardComponent;
}());
MenuCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-card',
        template: __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuCardComponent);

var _a, _b;
//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div>\r\n    <button routerLink=\"/Principal\">Principal</button>\r\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\r\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\r\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\r\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \r\n    <button routerLink=\"/error\">Error</button>\r\n  \r\n</div-->\r\n\r\n<!--nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\r\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\r\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n        </ul>\r\n    </div>\r\n  </nav-->\r\n  <div class=\"fondo\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n                                  \r\n          </button>\r\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\r\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n                <li><a  (click)=\"Juego('Anagrama')\">Anagrama</a></li>\r\n                <li><a  (click)=\"Juego('PPT')\">Piedra, Papel o Tijera</a></li>\r\n                <li><a  (click)=\"Juego('frase')\">Completa la frase</a></li>\r\n              </ul>\r\n              <ul class=\"nav navbar-nav navbar-right\">\r\n                  \r\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n                </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n      </div>\r\n   "

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'PPT':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'frase':
                this.router.navigate(['/Juegos/CompleteLaFrase']);
                break;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondo\r\n{\r\n    font-family: 'Kalam', cursive;\r\n    background-color:lightblue;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    background-size: cover;\r\n    margin:0;\r\n    padding:1px;\r\n}\r\n\r\n\r\n.botonPiedra{\r\n\r\n    width: 326px;\r\n    height: 380px;\r\n    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\r\n    font-size: 40px;\r\n   \r\n    color: black;\r\n    \r\n    background: url(" + __webpack_require__("../../../../../src/assets/imagenes/piedraa.jpg") + ") no-repeat; \r\n    background-size: 326px 380px;\r\n\r\n    border-color:red;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n    margin-left: 2cm;\r\n}\r\n\r\n.botonPapel{\r\n    \r\n        width: 326px;\r\n        height: 380px;\r\n        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\r\n        font-size: 40px;\r\n       \r\n        color: black;\r\n        \r\n        background: url(" + __webpack_require__("../../../../../src/assets/imagenes/papel.jpg") + ") no-repeat; \r\n        background-size: 326px 380px;\r\n    \r\n        border-color:red;\r\n        border-width: 2px;\r\n        border-style: solid;\r\n\r\n        margin-left: 2cm;\r\n    }\r\n\r\n    .botonTijera\r\n    {\r\n        width: 326px;\r\n        height: 380px;\r\n        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\r\n        font-size: 40px;\r\n       \r\n        color: black;\r\n        \r\n        background: url(" + __webpack_require__("../../../../../src/assets/imagenes/tijera.jpg") + ") no-repeat; \r\n        background-size: 326px 380px;\r\n    \r\n        border-color:red;\r\n        border-width: 2px;\r\n        border-style: solid;\r\n\r\n        margin-left: 2cm;\r\n    }\r\n\r\n    p{\r\n        color: #E6E65F;\r\n        margin-left: 14cm;\r\n    }\r\n\r\nform {\r\n    border: 10px solid lightpink;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n  \r\n    cursor: pointer;\r\n    width: 100%;\r\n    border-color:white;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n\r\n    border-radius: 200px 200px 200px 200px;\r\n    -moz-border-radius: 200px 200px 200px 200px;\r\n    -webkit-border-radius: 200px 200px 200px 200px;\r\n    border: 0px solid #000000;\r\n\r\n    border-width: 4px;\r\n    border-style: solid;\r\n\r\n\r\n\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n   \r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 22px;\r\n}\r\n#snackbar.Ganador {\r\n  \r\n\r\n    background-color: #059F2F;\r\n    border-color:#013401;\r\n   \r\n}\r\n#snackbar.Perdedor {\r\n    border-radius: 200px 200px 200px 200px;\r\n    -moz-border-radius: 200px 200px 200px 200px;\r\n    -webkit-border-radius: 200px 200px 200px 200px;\r\n    border: 0px solid #000000;\r\n\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<div class=\"fondo\">\n<div style=\"text-align:center\">\n  <h1>\n    {{nuevoJuego.nombre}}!\n  </h1>\n </div>\n<h2></h2>\n<form name=\"juego\" >\n\n <h2><button *ngIf=\"nuevo==0 \" (click)=\"GenerarNuevo()\"  class=\"btn btn-info btn-lg\" style=\"height: 150px; font-size: 60px\" >Jugar</button></h2>\n\n <h2><p *ngIf=\"verificarr==1\" ><i class=\"fa fa-refresh fa-spin fa-3x fa-fw\"></i>Verificando</p></h2>\n \n    <button *ngIf=\"nuevo==1\" (click)=\"Verificar('piedra')\" class=\"botonPiedra\"></button>\n    <button *ngIf=\"nuevo==1\" (click)=\"Verificar('papel')\" class=\"botonPapel\"></button>\n    <button *ngIf=\"nuevo==1\" (click)=\"Verificar('tijera')\"class=\"botonTijera\"></button>\n\n\n\n</form>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n\n\n<br>\n<div id=\"snackbar\">{{Mensajes}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__ = __webpack_require__("../../../../../src/app/clases/juego-piedra-papel-tijera.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PiedraPapelTijeraComponent = (function () {
    function PiedraPapelTijeraComponent() {
        this.resultados = new Array();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */]();
        this.verificarr = 0;
        this.nuevo = 0;
        if (localStorage.getItem("resultados") != null) {
            this.resultados = JSON.parse(localStorage.getItem("resultados"));
        }
    }
    PiedraPapelTijeraComponent.prototype.GenerarNuevo = function () {
        this.nuevoJuego.Generar();
        this.ocultarVerificar = false;
        this.nuevoJuego.gano = false;
        this.nuevo = 1;
        this.verificarr = 0;
    };
    PiedraPapelTijeraComponent.prototype.ngOnInit = function () {
    };
    PiedraPapelTijeraComponent.prototype.Verificar = function (opcionUsuario) {
        this.nuevoJuego.opcionUsuario = opcionUsuario;
        //this.contador++;
        this.verificarr = 1;
        var aux = this;
        setTimeout(function () {
            aux.verificarr = 0;
            if (aux.nuevoJuego.verificar()) {
                // this.enviarJuego.emit(this.nuevoJuego);
                aux.MostarMensaje("Ganaste!!!", true);
                aux.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */](aux.nuevoJuego.nombre, aux.nuevoJuego.gano, aux.nuevoJuego.jugador));
                // console.log(this.resultados);
                localStorage.setItem("resultados", JSON.stringify(aux.resultados));
            }
            else {
                aux.resultados.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */](aux.nuevoJuego.nombre, aux.nuevoJuego.gano, aux.nuevoJuego.jugador));
                //console.log(this.resultados);
                localStorage.setItem("resultados", JSON.stringify(aux.resultados));
                aux.MostarMensaje("Perdiste! La maquina eligio: " + aux.nuevoJuego.opcionMaquina, false);
            }
            aux.nuevo = 0;
        }, 1500);
    };
    PiedraPapelTijeraComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    return PiedraPapelTijeraComponent;
}());
PiedraPapelTijeraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-piedra-papel-tijera',
        template: __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PiedraPapelTijeraComponent);

//# sourceMappingURL=piedra-papel-tijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeMenu{\r\nwidth: 80px;\r\nheight: 70px;\r\n}\r\n\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: #100000;\r\n    }\r\n\r\n   .fondo\r\n   {\r\n    font-family: 'Kalam', cursive;\r\n    background-color:lightblue;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    background-size: cover;\r\n    margin:0;\r\n    padding:1px;\r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"fondo\">\r\n<app-cabecera>  </app-cabecera>\r\n\r\n\r\n\r\n \r\n<div class=\"container\" >\r\n  <br>\r\n  <br>\r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item-danger\">\r\n           \r\n                <div class=\"media-body\">\r\n                    <div class=\"hero-text\">\r\n                        <h4 >Menú Principal</h4>\r\n                    </div>\r\n                 </div>\r\n               \r\n             \r\n          </li>\r\n        <li class=\"list-group-item list-group-item-success\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n              <div class=\"media-left\">\r\n                    <img src=\"../assets/imagenes/dado.png\" class=\"media-object imagenDeMenu\" >\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Juegos</h4>\r\n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-info\">\r\n            <a routerLink=\"/Listado\">\r\n              <div class=\"media\">\r\n                  <div class=\"media-left\">\r\n                      <img src=\"../assets/imagenes/listado.png\" class=\"media-object imagenDeMenu\" >\r\n                    </div>\r\n                <div class=\"media-body\">\r\n                  <h4 class=\"media-heading\">Listados de resultados</h4>\r\n                  <p>Los listados de los resultados con ordenamiento y busqueda</p>\r\n                </div>\r\n                \r\n              </div> \r\n            </a>\r\n          </li>\r\n        <li class=\"list-group-item list-group-item-warning\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                    <img src=\"../assets/imagenes/confi.jpg\" class=\"media-object imagenDeMenu\" >\r\n                  </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\r\n                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n       \r\n        \r\n      </ul>\r\n      <br>\r\n      <br>\r\n      <br>\r\n</div>\r\n<br>\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-principal',
        template: __webpack_require__("../../../../../src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/principal/principal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrincipalComponent);

//# sourceMappingURL=principal.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mayuscula\r\n{\r\n    font-size: 25px;\r\n}\r\n\r\n.fondo\r\n{\r\n    font-family: 'Kalam', cursive;\r\n}\r\n\r\n.imagenDeQuienSoy{\r\n    width: 100%;\r\n   \r\n    }\r\n    .miJuego\r\n    {\r\n        color: white;\r\n    }\r\nbody {\r\n    font: 20px ;\r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n    \r\n\r\n}\r\np {font-size: 16px;}\r\n.margin {margin-bottom: 45px;}\r\n.bg-1 { \r\n    background-color:lightblue; /* Green */\r\n    color: black;\r\n}\r\n.bg-2 { \r\n    background-color: blue; /* Dark Blue */\r\n    color: #ffffff;\r\n}\r\n.bg-3 { \r\n    background-color: #ffffff; /* White */\r\n    color: #555555;\r\n}\r\n.bg-4 { \r\n    background-color: #2f2f2f; /* Black Gray */\r\n    color: #fff;\r\n}\r\n.container-fluid {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n}\r\n.navbar-nav  li a:hover {\r\n    color: #1abc9c !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\"  >\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"/TP_LAV4_2017/Principal\">Sala De Juegos</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#quien\">Quien</a></li>\r\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#que\">Ques es</a></li>\r\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#donde\">Donde</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  \r\n  <!-- First Container -->\r\n  <div id =\"quien\"class=\"container-fluid bg-1 text-center\">\r\n    <h3 class=\"margin\">Quién Soy?</h3>\r\n    <img src=\"/assets/imagenes/mauro.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\r\n    <h3>Soy Mauro Suppan</h3>\r\n  </div>\r\n  \r\n  <!-- Second Container -->\r\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\r\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\r\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\r\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\r\n      <br>  \r\n      <br>  \r\n     <div class=\"mayuscula\"> Juegos: </div><br>  \r\n      #Anagrama: se muestra una palabra desordenada y se debe ingresar la correcta.<br>  \r\n      #Piedra papel tijera: se debe elegir una de las opciones.<br>  \r\n      #Agilidad Aritmética: se presenta una cuenta aritmética y el jugador un tiempo para contestar.<br>  \r\n      #Adivina el número: se debe adivinar el número secreto.<br>  \r\n    <p class=\"miJuego\">#El juego creado por mi lo llame \"Completa La Frase\". Se debe ingresar la palabra faltante para completar correctamente la frase y de esta manera ganar la partida. </p>\r\n  </div>\r\n  \r\n  <!-- Third Container (Grid) -->\r\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \r\n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\r\n        <img src=\"/assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\r\n        <img src=\"/assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\r\n        <img src=\"/assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <!-- Footer -->\r\n  <footer class=\"container-fluid bg-4 text-center\">\r\n    <p>Modificado por <a href=\"https://github.com/MauroSuppan\">Mauro Suppan</a></p> \r\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quien-soy',
        template: __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienSoyComponent);

//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n.cancelbtn,.signupbtn {float:left;width:50%}\r\n\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 98%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button (x) */\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"jumbotron\">\r\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\r\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\r\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\r\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\r\n   \r\n  </div>\r\n  <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\r\n  <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button>\r\n  <button  class=\"cancelbtn\"  routerLink=\"/\" style=\"width:auto;\">No acepto</button>\r\n  <div id=\"id01\" class=\"modal\">\r\n    <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\r\n    <form class=\"modal-content animate\" >\r\n      <div class=\"container\">\r\n        <label><b>Email</b></label>\r\n        <input type=\"text\" placeholder=\"Ingresa usuario\" [(ngModel)]=\"usuario\" name=\"email\" required>\r\n  \r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca la clave\" [(ngModel)]=\"clave\" name=\"psw\" required>\r\n  \r\n        <label><b>Repita la clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\r\n        <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\r\n        <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\r\n  \r\n        <div class=\"clearfix\">\r\n          <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\r\n          <button type=\"button\" (click)=\"Registrar()\" class=\"signupbtn\">Registrarme</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  \r\n  <script>\r\n  // Get the modal\r\n  var modal = document.getElementById('id01');\r\n  \r\n  // When the user clicks anywhere outside of the modal, close it\r\n  window.onclick = function(event) {\r\n      if (event.target == modal) {\r\n          modal.style.display = \"none\";\r\n      }\r\n  }\r\n  </script>\r\n  \r\n  </body>"

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistroComponent = (function () {
    function RegistroComponent(router) {
        this.router = router;
    }
    RegistroComponent.prototype.Registrar = function () {
        localStorage.setItem("usuarioNuevo", this.usuario);
        localStorage.setItem("claveNuevo", this.clave);
        alert("se registro bien!!!");
        this.router.navigate(['/Login']);
    };
    RegistroComponent.prototype.ngOnInit = function () {
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registro',
        template: __webpack_require__("../../../../../src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/registro/registro.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], RegistroComponent);

var _a;
//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "../../../../../src/app/ruteando/ruteando.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteandoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_complete_la_frase_complete_la_frase_component__ = __webpack_require__("../../../../../src/app/componentes/complete-la-frase/complete-la-frase.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal
















// declaro donde quiero que se dirija
var MiRuteo = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'QuienSoy', component: __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'Registro', component: __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__["a" /* RegistroComponent */] },
    { path: 'Principal', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Listado', component: __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__["a" /* ListadoComponent */] },
    { path: 'Juegos',
        component: __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */] },
            { path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
            { path: 'AdivinaMasListado', component: __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */] },
            { path: 'AgilidadaMasListado', component: __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */] },
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] },
            { path: 'Anagrama', component: __WEBPACK_IMPORTED_MODULE_14__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */] },
            { path: 'PiedraPapelTijera', component: __WEBPACK_IMPORTED_MODULE_15__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */] },
            { path: 'CompleteLaFrase', component: __WEBPACK_IMPORTED_MODULE_16__componentes_complete_la_frase_complete_la_frase_component__["a" /* CompleteLaFraseComponent */] }
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] }
];
var RuteandoModule = (function () {
    function RuteandoModule() {
    }
    return RuteandoModule;
}());
RuteandoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(MiRuteo)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], RuteandoModule);

//# sourceMappingURL=ruteando.module.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JuegoServiceService = (function () {
    function JuegoServiceService() {
    }
    JuegoServiceService.prototype.listar = function () {
        var miArray = new Array();
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 1", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Pepe", true));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 3", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 4", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 5", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("PepePromesa", true));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 3", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 4", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 5", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    return JuegoServiceService;
}());
JuegoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], JuegoServiceService);

//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "../../../../../src/assets/imagenes/papel.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "papel.2a9ee76fc005fe5c0c69.jpg";

/***/ }),

/***/ "../../../../../src/assets/imagenes/piedraa.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "piedraa.496f00eaf68af74cbd19.jpg";

/***/ }),

/***/ "../../../../../src/assets/imagenes/tijera.jpg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map