export interface ContainerDetails {
  continente: string;
  pais: string;
  puertoOrigen: string;
  codigo: string;
  destino: string;
  tarifas: {
    dry20: string | null;
    dry40: string | null;
    ref20: string | null;
    ref40: string | null;
  };
}


export const CONTAINER_DETAILS_PAITA: ContainerDetails[] = [
{
  continente:"EUROPA",
  pais:"Albania",
  puertoOrigen:"Puerto de Durrës",
  bandera:"🇦🇱",
  codigo:"AL",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35383182",
    dry40:"https://www.searates.com/logistics-explorer/?id=35383189",
    ref20:"https://www.searates.com/logistics-explorer/?id=35383179",
    ref40:"https://www.searates.com/logistics-explorer/?id=35383170"
  }
},
{
  continente:"EUROPA",
  pais:"Alemania",
  puertoOrigen:"Puerto de Hamburgo",
  bandera:"🇩🇪",
  codigo:"DE",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35383234",
    dry40:"https://www.searates.com/logistics-explorer/?id=35383226",
    ref20:"https://www.searates.com/logistics-explorer/?id=35383224",
    ref40:"https://www.searates.com/logistics-explorer/?id=35383222"
  }
},
{
  continente:"ÁFRICA",
  pais:"Angola",
  puertoOrigen:"Puerto de Luanda",
  bandera:"🇦🇴",
  codigo:"AO",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35250004",
    dry40:"https://www.searates.com/logistics-explorer/?id=35250002",
    ref20:"https://www.searates.com/logistics-explorer/?id=35250007",
    ref40:"https://www.searates.com/logistics-explorer/?id=35250027"
  }
},
{
  continente:"AMÉRICA",
  pais:"Antigua y Barbuda",
  puertoOrigen:"Puerto de Saint John's",
  bandera:"🇦🇬",
  codigo:"AG",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35276804",
    dry40:"https://www.searates.com/logistics-explorer/?id=35276801",
    ref20:"https://www.searates.com/logistics-explorer/?id=35276797",
    ref40:"https://www.searates.com/logistics-explorer/?id=35276795"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Arabia Saudita",
  puertoOrigen:"Puerto de Jeddah",
  bandera:"🇸🇦",
  codigo:"SA",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35277383",
    dry40:"https://www.searates.com/logistics-explorer/?id=35277384",
    ref20:"https://www.searates.com/logistics-explorer/?id=35277385",
    ref40:"https://www.searates.com/logistics-explorer/?id=35277386"
  }
},
{
  continente:"ÁFRICA",
  pais:"Argelia",
  puertoOrigen:"Puerto de Argel",
  bandera:"🇩🇿",
  codigo:"DZ",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35250043",
    dry40:"https://www.searates.com/logistics-explorer/?id=35250041",
    ref20:"https://www.searates.com/logistics-explorer/?id=35250040",
    ref40:"https://www.searates.com/logistics-explorer/?id=35250039"
  }
},
{
  continente:"AMÉRICA",
  pais:"Argentina",
  puertoOrigen:"Puerto de Buenos Aires",
  bandera:"🇦🇷",
  codigo:"AR",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35276812",
    dry40:"https://www.searates.com/logistics-explorer/?id=35276814",
    ref20:"https://www.searates.com/logistics-explorer/?id=35276816",
    ref40:"https://www.searates.com/logistics-explorer/?id=35276817"
  }
},
{
  continente:"OCEANÍA",
  pais:"Australia",
  puertoOrigen:"Puerto de Sídney",
  bandera:"🇦🇺",
  codigo:"AU",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35394099",
    dry40:"https://www.searates.com/logistics-explorer/?id=35394112",
    ref20:"https://www.searates.com/logistics-explorer/?id=35394067",
    ref40:"https://www.searates.com/logistics-explorer/?id=35393874"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Azerbaiyán",
  puertoOrigen:"Puerto de Bakú",
  bandera:"🇦🇿",
  codigo:"AZ",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35277398",
    dry40:"https://www.searates.com/logistics-explorer/?id=35277397",
    ref20:"https://www.searates.com/logistics-explorer/?id=35277396",
    ref40:"https://www.searates.com/logistics-explorer/?id=35277395"
  }
},
{
  continente:"AMÉRICA",
  pais:"Bahamas",
  puertoOrigen:"Puerto de Nassau",
  bandera:"🇧🇸",
  codigo:"BS",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35276836",
    dry40:"https://www.searates.com/logistics-explorer/?id=35276829",
    ref20:"https://www.searates.com/logistics-explorer/?id=35276828",
    ref40:"https://www.searates.com/logistics-explorer/?id=35276827"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Baréin",
  puertoOrigen:"Puerto de Mina Salman",
  bandera:"🇧🇭",
  codigo:"BH",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35277401",
    dry40:"https://www.searates.com/logistics-explorer/?id=35277402",
    ref20:"https://www.searates.com/logistics-explorer/?id=35277404",
    ref40:"https://www.searates.com/logistics-explorer/?id=35277405"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Bangladés",
  puertoOrigen:"Puerto de Chittagong",
  bandera:"🇧🇩",
  codigo:"BD",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35277417",
    dry40:"https://www.searates.com/logistics-explorer/?id=35277414",
    ref20:"https://www.searates.com/logistics-explorer/?id=35277413",
    ref40:"https://www.searates.com/logistics-explorer/?id=35277412"
  }
},
{
  continente:"AMÉRICA",
  pais:"Barbados",
  puertoOrigen:"Puerto de Bridgetown",
  bandera:"🇧🇧",
  codigo:"BB",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35276838",
    dry40:"https://www.searates.com/logistics-explorer/?id=35276841",
    ref20:"https://www.searates.com/logistics-explorer/?id=35276842",
    ref40:"https://www.searates.com/logistics-explorer/?id=35276845"
  }
},
{
  continente:"EUROPA",
  pais:"Bélgica",
  puertoOrigen:"Puerto de Amberes",
  bandera:"🇧🇪",
  codigo:"BE",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35383252",
    dry40:"https://www.searates.com/logistics-explorer/?id=35383258",
    ref20:"https://www.searates.com/logistics-explorer/?id=35383269",
    ref40:"https://www.searates.com/logistics-explorer/?id=35383271"
  }
},
{
  continente:"ÁFRICA",
  pais:"Benín",
  puertoOrigen:"Puerto de Cotonú",
  bandera:"🇧🇯",
  codigo:"BJ",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35276041",
    dry40:"https://www.searates.com/logistics-explorer/?id=35276034",
    ref20:"https://www.searates.com/logistics-explorer/?id=35276078",
    ref40:"https://www.searates.com/logistics-explorer/?id=35276087"
  }
},
{
  continente:"AMÉRICA",
  pais:"Brasil",
  puertoOrigen:"Puerto de Santos",
  bandera:"🇧🇷",
  codigo:"BR",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35276859",
    dry40:"https://www.searates.com/logistics-explorer/?id=35276853",
    ref20:"https://www.searates.com/logistics-explorer/?id=35276850",
    ref40:"https://www.searates.com/logistics-explorer/?id=35276847"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Brunéi",
  puertoOrigen:"Puerto de Muara",
  bandera:"🇧🇳",
  codigo:"BN",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35277429",
    dry40:"https://www.searates.com/logistics-explorer/?id=35277430",
    ref20:"https://www.searates.com/logistics-explorer/?id=35277431",
    ref40:"https://www.searates.com/logistics-explorer/?id=35277432"
  }
},
{
  continente:"EUROPA",
  pais:"Bulgaria",
  puertoOrigen:"Puerto de Varna",
  bandera:"🇧🇬",
  codigo:"BG",
  destino:"Paita",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35383284",
    dry40:"https://www.searates.com/logistics-explorer/?id=35383278",
    ref20:"https://www.searates.com/logistics-explorer/?id=35383277",
    ref40:"https://www.searates.com/logistics-explorer/?id=35383275"
  }
},
{
  continente:"EUROPA", pais:"Suecia", puertoOrigen:"Puerto de Estocolmo", codigo:"SE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393613", dry40:"https://www.searates.com/logistics-explorer/?id=35393631", ref20:"https://www.searates.com/logistics-explorer/?id=35393647", ref40:"https://www.searates.com/logistics-explorer/?id=35393658" }
},
{
  continente:"AMÉRICA", pais:"Surinam", puertoOrigen:"Puerto de Paramaribo", codigo:"SR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277308", dry40:"https://www.searates.com/logistics-explorer/?id=35277318", ref20:"https://www.searates.com/logistics-explorer/?id=35277328", ref40:"https://www.searates.com/logistics-explorer/?id=35277331" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Tailandia", puertoOrigen:"Puerto de Laem Chabang", codigo:"TH", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383095", dry40:"https://www.searates.com/logistics-explorer/?id=35383049", ref20:"https://www.searates.com/logistics-explorer/?id=35383102", ref40:"https://www.searates.com/logistics-explorer/?id=35383109" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Taiwán (China)", puertoOrigen:"Puerto de Kaohsiung", codigo:"TW", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383140", dry40:"https://www.searates.com/logistics-explorer/?id=35383143", ref20:"https://www.searates.com/logistics-explorer/?id=35383133", ref40:"https://www.searates.com/logistics-explorer/?id=35383132" }
},
{
  continente:"ÁFRICA", pais:"Tanzania", puertoOrigen:"Puerto de Dar es-Salam", codigo:"TZ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276713", dry40:"https://www.searates.com/logistics-explorer/?id=35276723", ref20:"https://www.searates.com/logistics-explorer/?id=35276724", ref40:"https://www.searates.com/logistics-explorer/?id=35276726" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Timor Oriental", puertoOrigen:"Puerto de Díli", codigo:"TL", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ÁFRICA", pais:"Togo", puertoOrigen:"Puerto de Lomé", codigo:"TG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276760", dry40:"https://www.searates.com/logistics-explorer/?id=35276751", ref20:"https://www.searates.com/logistics-explorer/?id=35276741", ref40:"https://www.searates.com/logistics-explorer/?id=35276732" }
},
{
  continente:"OCEANÍA", pais:"Tonga", puertoOrigen:"Puerto de Nuku'alofa", codigo:"TO", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394786", dry40:"https://www.searates.com/logistics-explorer/?id=35394774", ref20:"https://www.searates.com/logistics-explorer/?id=35394798", ref40:"https://www.searates.com/logistics-explorer/?id=35394807" }
},
{
  continente:"AMÉRICA", pais:"Trinidad y Tobago", puertoOrigen:"Puerto de Puerto España", codigo:"TT", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277338", dry40:"https://www.searates.com/logistics-explorer/?id=35277337", ref20:"https://www.searates.com/logistics-explorer/?id=35277334", ref40:"https://www.searates.com/logistics-explorer/?id=35277333" }
},
{
  continente:"ÁFRICA", pais:"Túnez", puertoOrigen:"Puerto de Túnez", codigo:"TN", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276775", dry40:"https://www.searates.com/logistics-explorer/?id=35276781", ref20:"https://www.searates.com/logistics-explorer/?id=35276785", ref40:"https://www.searates.com/logistics-explorer/?id=35276787" }
},
{
  continente:"EUROPA", pais:"Turquía", puertoOrigen:"Puerto de Estambul", codigo:"TR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393726", dry40:"https://www.searates.com/logistics-explorer/?id=35393738", ref20:"https://www.searates.com/logistics-explorer/?id=35393722", ref40:"https://www.searates.com/logistics-explorer/?id=35393694" }
},
{
  continente:"OCEANÍA", pais:"Tuvalu", puertoOrigen:"Puerto de Funafuti", codigo:"TV", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394933", dry40:"https://www.searates.com/logistics-explorer/?id=35394913", ref20:"https://www.searates.com/logistics-explorer/?id=35394887", ref40:"https://www.searates.com/logistics-explorer/?id=35394886" }
},
{
  continente:"EUROPA", pais:"Ucrania", puertoOrigen:"Puerto de Odesa", codigo:"UA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393834", dry40:"https://www.searates.com/logistics-explorer/?id=35393810", ref20:"https://www.searates.com/logistics-explorer/?id=35393857", ref40:"https://www.searates.com/logistics-explorer/?id=35393874" }
},
{
  continente:"AMÉRICA", pais:"Uruguay", puertoOrigen:"Puerto de Montevideo", codigo:"UY", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277364", dry40:"https://www.searates.com/logistics-explorer/?id=35277367", ref20:"https://www.searates.com/logistics-explorer/?id=35277369", ref40:"https://www.searates.com/logistics-explorer/?id=35277370" }
},
{
  continente:"OCEANÍA", pais:"Vanuatu", puertoOrigen:"Puerto de Port Vila", codigo:"VU", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394938", dry40:"https://www.searates.com/logistics-explorer/?id=35394944", ref20:"https://www.searates.com/logistics-explorer/?id=35394947", ref40:"https://www.searates.com/logistics-explorer/?id=35394949" }
},
{
  continente:"AMÉRICA", pais:"Venezuela", puertoOrigen:"Puerto de La Guaira", codigo:"VE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277375", dry40:"https://www.searates.com/logistics-explorer/?id=35277374", ref20:"https://www.searates.com/logistics-explorer/?id=35277373", ref40:"https://www.searates.com/logistics-explorer/?id=35277372" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Vietnam", puertoOrigen:"Puerto de Ho Chi Minh", codigo:"VN", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383163", dry40:"https://www.searates.com/logistics-explorer/?id=35383151", ref20:"https://www.searates.com/logistics-explorer/?id=35383166", ref40:"https://www.searates.com/logistics-explorer/?id=35383167" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Yemen", puertoOrigen:"Puerto de Adén", codigo:"YE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383182", dry40:"https://www.searates.com/logistics-explorer/?id=35383189", ref20:"https://www.searates.com/logistics-explorer/?id=35383179", ref40:"https://www.searates.com/logistics-explorer/?id=35383170" }
},
{
  continente:"EUROPA", pais:"Albania", puertoOrigen:"Puerto de Durrës", codigo:"AL", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383182", dry40:"https://www.searates.com/logistics-explorer/?id=35383189", ref20:"https://www.searates.com/logistics-explorer/?id=35383179", ref40:"https://www.searates.com/logistics-explorer/?id=35383170" }
},
{
  continente:"EUROPA", pais:"Alemania", puertoOrigen:"Puerto de Hamburgo", codigo:"DE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383234", dry40:"https://www.searates.com/logistics-explorer/?id=35383226", ref20:"https://www.searates.com/logistics-explorer/?id=35383224", ref40:"https://www.searates.com/logistics-explorer/?id=35383222" }
},
{
  continente:"ÁFRICA", pais:"Angola", puertoOrigen:"Puerto de Luanda", codigo:"AO", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250004", dry40:"https://www.searates.com/logistics-explorer/?id=35250002", ref20:"https://www.searates.com/logistics-explorer/?id=35250007", ref40:"https://www.searates.com/logistics-explorer/?id=35250027" }
},
{
  continente:"AMÉRICA", pais:"Antigua y Barbuda", puertoOrigen:"Puerto de Saint John's", codigo:"AG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276804", dry40:"https://www.searates.com/logistics-explorer/?id=35276801", ref20:"https://www.searates.com/logistics-explorer/?id=35276797", ref40:"https://www.searates.com/logistics-explorer/?id=35276795" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Arabia Saudita", puertoOrigen:"Puerto de Jeddah", codigo:"SA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277383", dry40:"https://www.searates.com/logistics-explorer/?id=35277384", ref20:"https://www.searates.com/logistics-explorer/?id=35277385", ref40:"https://www.searates.com/logistics-explorer/?id=35277386" }
},
{
  continente:"ÁFRICA", pais:"Argelia", puertoOrigen:"Puerto de Argel", codigo:"DZ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250043", dry40:"https://www.searates.com/logistics-explorer/?id=35250041", ref20:"https://www.searates.com/logistics-explorer/?id=35250040", ref40:"https://www.searates.com/logistics-explorer/?id=35250039" }
},
{
  continente:"AMÉRICA", pais:"Argentina", puertoOrigen:"Puerto de Buenos Aires", codigo:"AR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276812", dry40:"https://www.searates.com/logistics-explorer/?id=35276814", ref20:"https://www.searates.com/logistics-explorer/?id=35276816", ref40:"https://www.searates.com/logistics-explorer/?id=35276817" }
},
{
  continente:"OCEANÍA", pais:"Australia", puertoOrigen:"Puerto de Sídney", codigo:"AU", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394099", dry40:"https://www.searates.com/logistics-explorer/?id=35394112", ref20:"https://www.searates.com/logistics-explorer/?id=35394067", ref40:"https://www.searates.com/logistics-explorer/?id=35393874" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Azerbaiyán", puertoOrigen:"Puerto de Bakú", codigo:"AZ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277398", dry40:"https://www.searates.com/logistics-explorer/?id=35277397", ref20:"https://www.searates.com/logistics-explorer/?id=35277396", ref40:"https://www.searates.com/logistics-explorer/?id=35277395" }
},
{
  continente:"AMÉRICA", pais:"Bahamas", puertoOrigen:"Puerto de Nassau", codigo:"BS", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276836", dry40:"https://www.searates.com/logistics-explorer/?id=35276829", ref20:"https://www.searates.com/logistics-explorer/?id=35276828", ref40:"https://www.searates.com/logistics-explorer/?id=35276827" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Bahréin", puertoOrigen:"Puerto de Mina Salman", codigo:"BH", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277401", dry40:"https://www.searates.com/logistics-explorer/?id=35277402", ref20:"https://www.searates.com/logistics-explorer/?id=35277404", ref40:"https://www.searates.com/logistics-explorer/?id=35277405" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Bangladés", puertoOrigen:"Puerto de Chittagong", codigo:"BD", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277417", dry40:"https://www.searates.com/logistics-explorer/?id=35277414", ref20:"https://www.searates.com/logistics-explorer/?id=35277413", ref40:"https://www.searates.com/logistics-explorer/?id=35277412" }
},
{
  continente:"AMÉRICA", pais:"Barbados", puertoOrigen:"Puerto de Bridgetown", codigo:"BB", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276838", dry40:"https://www.searates.com/logistics-explorer/?id=35276841", ref20:"https://www.searates.com/logistics-explorer/?id=35276842", ref40:"https://www.searates.com/logistics-explorer/?id=35276845" }
},
{
  continente:"EUROPA", pais:"Bélgica", puertoOrigen:"Puerto de Amberes", codigo:"BE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383252", dry40:"https://www.searates.com/logistics-explorer/?id=35383258", ref20:"https://www.searates.com/logistics-explorer/?id=35383269", ref40:"https://www.searates.com/logistics-explorer/?id=35383271" }
},
{
  continente:"ÁFRICA", pais:"Benín", puertoOrigen:"Puerto de Cotonú", codigo:"BJ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276041", dry40:"https://www.searates.com/logistics-explorer/?id=35276034", ref20:"https://www.searates.com/logistics-explorer/?id=35276078", ref40:"https://www.searates.com/logistics-explorer/?id=35276087" }
},
{
  continente:"AMÉRICA", pais:"Brasil", puertoOrigen:"Puerto de Santos", codigo:"BR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276859", dry40:"https://www.searates.com/logistics-explorer/?id=35276853", ref20:"https://www.searates.com/logistics-explorer/?id=35276850", ref40:"https://www.searates.com/logistics-explorer/?id=35276847" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Brunéi", puertoOrigen:"Puerto de Muara", codigo:"BN", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277429", dry40:"https://www.searates.com/logistics-explorer/?id=35277430", ref20:"https://www.searates.com/logistics-explorer/?id=35277431", ref40:"https://www.searates.com/logistics-explorer/?id=35277432" }
},
{
  continente:"EUROPA", pais:"Bulgaria", puertoOrigen:"Puerto de Varna", codigo:"BG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383284", dry40:"https://www.searates.com/logistics-explorer/?id=35383278", ref20:"https://www.searates.com/logistics-explorer/?id=35383277", ref40:"https://www.searates.com/logistics-explorer/?id=35383275" }
},
{
  continente:"ÁFRICA", pais:"Cabo Verde", puertoOrigen:"Puerto Grande", codigo:"CV", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276108", dry40:"https://www.searates.com/logistics-explorer/?id=35276107", ref20:"https://www.searates.com/logistics-explorer/?id=35276105", ref40:"https://www.searates.com/logistics-explorer/?id=35276104" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Camboya", puertoOrigen:"Puerto de Sihanoukville", codigo:"KH", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277449", dry40:"https://www.searates.com/logistics-explorer/?id=35277447", ref20:"https://www.searates.com/logistics-explorer/?id=35277435", ref40:"https://www.searates.com/logistics-explorer/?id=35277433" }
},
{
  continente:"ÁFRICA", pais:"Camerún", puertoOrigen:"Puerto de Duala", codigo:"CM", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276146", dry40:"https://www.searates.com/logistics-explorer/?id=35276154", ref20:"https://www.searates.com/logistics-explorer/?id=35276155", ref40:"https://www.searates.com/logistics-explorer/?id=35276166" }
},
{
  continente:"AMÉRICA", pais:"Canadá", puertoOrigen:"Puerto de Vancouver", codigo:"CA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276862", dry40:"https://www.searates.com/logistics-explorer/?id=35276863", ref20:"https://www.searates.com/logistics-explorer/?id=35276865", ref40:"https://www.searates.com/logistics-explorer/?id=35276867" }
},
{
  continente:"AMÉRICA", pais:"Chile", puertoOrigen:"Puerto de Valparaíso", codigo:"CL", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276877", dry40:"https://www.searates.com/logistics-explorer/?id=35276875", ref20:"https://www.searates.com/logistics-explorer/?id=35276871", ref40:"https://www.searates.com/logistics-explorer/?id=35276869" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"China", puertoOrigen:"Puerto de Shanghái", codigo:"CH", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277451", dry40:"https://www.searates.com/logistics-explorer/?id=35277453", ref20:"https://www.searates.com/logistics-explorer/?id=35277455", ref40:"https://www.searates.com/logistics-explorer/?id=35277458" }
},
{
  continente:"EUROPA", pais:"Chipre", puertoOrigen:"Puerto de Limassol", codigo:"CY", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383288", dry40:"https://www.searates.com/logistics-explorer/?id=35383301", ref20:"https://www.searates.com/logistics-explorer/?id=35383305", ref40:"https://www.searates.com/logistics-explorer/?id=35383308" }
},
{
  continente:"AMÉRICA", pais:"Colombia", puertoOrigen:"Puerto de Buenaventura", codigo:"CO", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276882", dry40:"https://www.searates.com/logistics-explorer/?id=35276884", ref20:"https://www.searates.com/logistics-explorer/?id=35276885", ref40:"https://www.searates.com/logistics-explorer/?id=35276886" }
},
{
  continente:"ÁFRICA", pais:"Comoras", puertoOrigen:"Puerto de Moroni", codigo:"KM", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276180", dry40:"https://www.searates.com/logistics-explorer/?id=35276174", ref20:"https://www.searates.com/logistics-explorer/?id=35276171", ref40:"https://www.searates.com/logistics-explorer/?id=35276168" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Corea del Norte", puertoOrigen:"Puerto de Nampo", codigo:"KP", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Corea del Sur", puertoOrigen:"Puerto de Busan", codigo:"KR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35312708", dry40:"https://www.searates.com/logistics-explorer/?id=35312659", ref20:"https://www.searates.com/logistics-explorer/?id=35312809", ref40:"https://www.searates.com/logistics-explorer/?id=35312837" }
},
{
  continente:"ÁFRICA", pais:"Costa de Marfil", puertoOrigen:"Puerto de Abiyán", codigo:"CM", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276183", dry40:"https://www.searates.com/logistics-explorer/?id=35276184", ref20:"https://www.searates.com/logistics-explorer/?id=35276185", ref40:"https://www.searates.com/logistics-explorer/?id=35276186" }
},
{
  continente:"AMÉRICA", pais:"Costa Rica", puertoOrigen:"Puerto Limón-Moín", codigo:"CR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276904", dry40:"https://www.searates.com/logistics-explorer/?id=35276903", ref20:"https://www.searates.com/logistics-explorer/?id=35276900", ref40:"https://www.searates.com/logistics-explorer/?id=35276899" }
},
{
  continente:"EUROPA", pais:"Croacia", puertoOrigen:"Puerto de Rijeka", codigo:"HR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383445", dry40:"https://www.searates.com/logistics-explorer/?id=35383434", ref20:"https://www.searates.com/logistics-explorer/?id=35383334", ref40:"https://www.searates.com/logistics-explorer/?id=35383327" }
},
{
  continente:"AMÉRICA", pais:"Cuba", puertoOrigen:"Puerto de La Habana", codigo:"CU", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276912", dry40:"https://www.searates.com/logistics-explorer/?id=35276915", ref20:"https://www.searates.com/logistics-explorer/?id=35276917", ref40:"https://www.searates.com/logistics-explorer/?id=35276919" }
},
{
  continente:"ÁFRICA", pais:"Djibouti", puertoOrigen:"Puerto de Yibuti", codigo:"DJ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276209", dry40:"https://www.searates.com/logistics-explorer/?id=35276208", ref20:"https://www.searates.com/logistics-explorer/?id=35276199", ref40:"https://www.searates.com/logistics-explorer/?id=35276197" }
},
{
  continente:"AMÉRICA", pais:"Dominica", puertoOrigen:"Puerto de Roseau", codigo:"DM", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276924", dry40:"https://www.searates.com/logistics-explorer/?id=35276922", ref20:"https://www.searates.com/logistics-explorer/?id=35276921", ref40:"https://www.searates.com/logistics-explorer/?id=35276920" }
},
{
  continente:"AMÉRICA", pais:"Ecuador", puertoOrigen:"Puerto de Guayaquil", codigo:"EC", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276934", dry40:"https://www.searates.com/logistics-explorer/?id=35276947", ref20:"https://www.searates.com/logistics-explorer/?id=35276951", ref40:"https://www.searates.com/logistics-explorer/?id=35276957" }
},
{
  continente:"ÁFRICA", pais:"Egipto", puertoOrigen:"Puerto de Alejandría", codigo:"EG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276212", dry40:"https://www.searates.com/logistics-explorer/?id=35276214", ref20:"https://www.searates.com/logistics-explorer/?id=35276215", ref40:"https://www.searates.com/logistics-explorer/?id=35276216" }
},
{
  continente:"AMÉRICA", pais:"El Salvador", puertoOrigen:"Puerto de Acajutla", codigo:"SV", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276963", dry40:"https://www.searates.com/logistics-explorer/?id=35276961", ref20:"https://www.searates.com/logistics-explorer/?id=35276960", ref40:"https://www.searates.com/logistics-explorer/?id=35276959" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Emiratos Árabes Unidos", puertoOrigen:"Puerto de Jebel Ali", codigo:"AE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35313000", dry40:"https://www.searates.com/logistics-explorer/?id=35313043", ref20:"https://www.searates.com/logistics-explorer/?id=35313074", ref40:"https://www.searates.com/logistics-explorer/?id=35312916" }
},
{
  continente:"ÁFRICA", pais:"Eritrea", puertoOrigen:"Puerto de Massawa", codigo:"ER", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276223", dry40:"https://www.searates.com/logistics-explorer/?id=35276222", ref20:"https://www.searates.com/logistics-explorer/?id=35276219", ref40:"https://www.searates.com/logistics-explorer/?id=35276217" }
},
{
  continente:"EUROPA", pais:"Eslovenia", puertoOrigen:"Puerto de Koper", codigo:"SI", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383626", dry40:"https://www.searates.com/logistics-explorer/?id=35383674", ref20:"https://www.searates.com/logistics-explorer/?id=35383685", ref40:"https://www.searates.com/logistics-explorer/?id=35383694" }
},
{
  continente:"EUROPA", pais:"España", puertoOrigen:"Puerto de Valencia", codigo:"ES", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383760", dry40:"https://www.searates.com/logistics-explorer/?id=35383771", ref20:"https://www.searates.com/logistics-explorer/?id=35383731", ref40:"https://www.searates.com/logistics-explorer/?id=35383707" }
},
{
  continente:"AMÉRICA", pais:"Estados Unidos", puertoOrigen:"Puerto de Los Ángeles", codigo:"US", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276985", dry40:"https://www.searates.com/logistics-explorer/?id=35276986", ref20:"https://www.searates.com/logistics-explorer/?id=35277011", ref40:"https://www.searates.com/logistics-explorer/?id=35277012" }
},
{
  continente:"EUROPA", pais:"Estonia", puertoOrigen:"Puerto de Tallin", codigo:"EE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383842", dry40:"https://www.searates.com/logistics-explorer/?id=35383804", ref20:"https://www.searates.com/logistics-explorer/?id=35383892", ref40:"https://www.searates.com/logistics-explorer/?id=35383911" }
},
{
  continente:"OCEANÍA", pais:"Fiji", puertoOrigen:"Puerto de Suva", codigo:"FJ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394158", dry40:"https://www.searates.com/logistics-explorer/?id=35394143", ref20:"https://www.searates.com/logistics-explorer/?id=35394159", ref40:"https://www.searates.com/logistics-explorer/?id=35394163" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Filipinas", puertoOrigen:"Puerto de Manila", codigo:"PH", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35313231", dry40:"https://www.searates.com/logistics-explorer/?id=35313236", ref20:"https://www.searates.com/logistics-explorer/?id=35313186", ref40:"https://www.searates.com/logistics-explorer/?id=35313133" }
},
{
  continente:"EUROPA", pais:"Finlandia", puertoOrigen:"Puerto de Helsinki", codigo:"FI", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383990", dry40:"https://www.searates.com/logistics-explorer/?id=35383980", ref20:"https://www.searates.com/logistics-explorer/?id=35383964", ref40:"https://www.searates.com/logistics-explorer/?id=35383939" }
},
{
  continente:"EUROPA", pais:"Francia", puertoOrigen:"Puerto de Marsella", codigo:"FR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35384033", dry40:"https://www.searates.com/logistics-explorer/?id=35384049", ref20:"https://www.searates.com/logistics-explorer/?id=35384064", ref40:"https://www.searates.com/logistics-explorer/?id=35384079" }
},
{
  continente:"ÁFRICA", pais:"Gabón", puertoOrigen:"Puerto de Owendo", codigo:"GA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276224", dry40:"https://www.searates.com/logistics-explorer/?id=35276225", ref20:"https://www.searates.com/logistics-explorer/?id=35276226", ref40:"https://www.searates.com/logistics-explorer/?id=35276228" }
},
{
  continente:"ÁFRICA", pais:"Gambia", puertoOrigen:"Puerto de Banjul", codigo:"GM", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276253", dry40:"https://www.searates.com/logistics-explorer/?id=35276250", ref20:"https://www.searates.com/logistics-explorer/?id=35276249", ref40:"https://www.searates.com/logistics-explorer/?id=35276238" }
},
{
  continente:"EUROPA", pais:"Georgia", puertoOrigen:"Puerto de Poti", codigo:"GE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35384178", dry40:"https://www.searates.com/logistics-explorer/?id=35384200", ref20:"https://www.searates.com/logistics-explorer/?id=35384159", ref40:"https://www.searates.com/logistics-explorer/?id=35384124" }
},
{
  continente:"ÁFRICA", pais:"Ghana", puertoOrigen:"Puerto de Tema", codigo:"GH", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276255", dry40:"https://www.searates.com/logistics-explorer/?id=35276258", ref20:"https://www.searates.com/logistics-explorer/?id=35276261", ref40:"https://www.searates.com/logistics-explorer/?id=35276264" }
},
{
  continente:"AMÉRICA", pais:"Granada", puertoOrigen:"Puerto de Saint George's", codigo:"GD", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277039", dry40:"https://www.searates.com/logistics-explorer/?id=35277035", ref20:"https://www.searates.com/logistics-explorer/?id=35277033", ref40:"https://www.searates.com/logistics-explorer/?id=35277032" }
},
{
  continente:"EUROPA", pais:"Grecia", puertoOrigen:"Puerto de El Pireo", codigo:"GR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35384297", dry40:"https://www.searates.com/logistics-explorer/?id=35384260", ref20:"https://www.searates.com/logistics-explorer/?id=35384312", ref40:"https://www.searates.com/logistics-explorer/?id=35384331" }
},
{
  continente:"AMÉRICA", pais:"Guatemala", puertoOrigen:"Puerto Quetzal", codigo:"GT", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277072", dry40:"https://www.searates.com/logistics-explorer/?id=35277074", ref20:"https://www.searates.com/logistics-explorer/?id=35277075", ref40:"https://www.searates.com/logistics-explorer/?id=35277076" }
},
{
  continente:"ÁFRICA", pais:"Guinea", puertoOrigen:"Puerto de Conakri", codigo:"GN", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276409", dry40:"https://www.searates.com/logistics-explorer/?id=35276408", ref20:"https://www.searates.com/logistics-explorer/?id=35276407", ref40:"https://www.searates.com/logistics-explorer/?id=35276403" }
},
{
  continente:"ÁFRICA", pais:"Guinea-Bissau", puertoOrigen:"Puerto de Bissau", codigo:"GW", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276416", dry40:"https://www.searates.com/logistics-explorer/?id=35276425", ref20:"https://www.searates.com/logistics-explorer/?id=35276427", ref40:"https://www.searates.com/logistics-explorer/?id=35276431" }
},
{
  continente:"AMÉRICA", pais:"Guyana", puertoOrigen:"Puerto de Georgetown", codigo:"GY", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277122", dry40:"https://www.searates.com/logistics-explorer/?id=35277120", ref20:"https://www.searates.com/logistics-explorer/?id=35277091", ref40:"https://www.searates.com/logistics-explorer/?id=35277089" }
},
{
  continente:"AMÉRICA", pais:"Haití", puertoOrigen:"Puerto de Puerto Príncipe", codigo:"HT", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277124", dry40:"https://www.searates.com/logistics-explorer/?id=35277126", ref20:"https://www.searates.com/logistics-explorer/?id=35277127", ref40:"https://www.searates.com/logistics-explorer/?id=35277128" }
},
{
  continente:"AMÉRICA", pais:"Honduras", puertoOrigen:"Puerto de Puerto Cortés", codigo:"HN", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277143", dry40:"https://www.searates.com/logistics-explorer/?id=35277139", ref20:"https://www.searates.com/logistics-explorer/?id=35277137", ref40:"https://www.searates.com/logistics-explorer/?id=35277136" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Hong Kong", puertoOrigen:"Puerto de Hong Kong", codigo:"HK", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35313407", dry40:"https://www.searates.com/logistics-explorer/?id=35313343", ref20:"https://www.searates.com/logistics-explorer/?id=35313439", ref40:"https://www.searates.com/logistics-explorer/?id=35313472" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"India", puertoOrigen:"Puerto de Nhava Sheva", codigo:"IN", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35313585", dry40:"https://www.searates.com/logistics-explorer/?id=35313600", ref20:"https://www.searates.com/logistics-explorer/?id=35313561", ref40:"https://www.searates.com/logistics-explorer/?id=35313548" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Indonesia", puertoOrigen:"Puerto de Yakarta", codigo:"ID", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35313691", dry40:"https://www.searates.com/logistics-explorer/?id=35313629", ref20:"https://www.searates.com/logistics-explorer/?id=35313756", ref40:"https://www.searates.com/logistics-explorer/?id=35313817" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Irán", puertoOrigen:"Puerto de Bandar Abbas", codigo:"IR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35313992", dry40:"https://www.searates.com/logistics-explorer/?id=35314019", ref20:"https://www.searates.com/logistics-explorer/?id=35313979", ref40:"https://www.searates.com/logistics-explorer/?id=35313934" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Iraq", puertoOrigen:"Puerto de Umm Qasr", codigo:"IQ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35313992", dry40:"https://www.searates.com/logistics-explorer/?id=35314019", ref20:"https://www.searates.com/logistics-explorer/?id=35313979", ref40:"https://www.searates.com/logistics-explorer/?id=35313934" }
},
{
  continente:"EUROPA", pais:"Irlanda", puertoOrigen:"Puerto de Dublín", codigo:"IE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35385294", dry40:"https://www.searates.com/logistics-explorer/?id=35384626", ref20:"https://www.searates.com/logistics-explorer/?id=35384612", ref40:"https://www.searates.com/logistics-explorer/?id=35384564" }
},
{
  continente:"EUROPA", pais:"Islandia", puertoOrigen:"Puerto de Reykjavík", codigo:"IS", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35385442", dry40:"https://www.searates.com/logistics-explorer/?id=35385725", ref20:"https://www.searates.com/logistics-explorer/?id=35385797", ref40:"https://www.searates.com/logistics-explorer/?id=35385876" }
},
{
  continente:"OCEANÍA", pais:"Islas Salomón", puertoOrigen:"Puerto de Honiara", codigo:"SB", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394178", dry40:"https://www.searates.com/logistics-explorer/?id=35394203", ref20:"https://www.searates.com/logistics-explorer/?id=35394169", ref40:"https://www.searates.com/logistics-explorer/?id=35394164" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Israel", puertoOrigen:"Puerto de Ashdod", codigo:"IL", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35314329", dry40:"https://www.searates.com/logistics-explorer/?id=35314422", ref20:"https://www.searates.com/logistics-explorer/?id=35314269", ref40:"https://www.searates.com/logistics-explorer/?id=35314230" }
},
{
  continente:"EUROPA", pais:"Italia", puertoOrigen:"Puerto de Génova", codigo:"IT", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35391950", dry40:"https://www.searates.com/logistics-explorer/?id=35391997", ref20:"https://www.searates.com/logistics-explorer/?id=35391935", ref40:"https://www.searates.com/logistics-explorer/?id=35385876" }
},
{
  continente:"AMÉRICA", pais:"Jamaica", puertoOrigen:"Puerto de Kingston", codigo:"JM", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277146", dry40:"https://www.searates.com/logistics-explorer/?id=35277147", ref20:"https://www.searates.com/logistics-explorer/?id=35277148", ref40:"https://www.searates.com/logistics-explorer/?id=35277150" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Japón", puertoOrigen:"Puerto de Yokohama", codigo:"JP", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35314536", dry40:"https://www.searates.com/logistics-explorer/?id=35314508", ref20:"https://www.searates.com/logistics-explorer/?id=35314551", ref40:"https://www.searates.com/logistics-explorer/?id=35314634" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Jordania", puertoOrigen:"Puerto de Aqaba", codigo:"JO", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35314921", dry40:"https://www.searates.com/logistics-explorer/?id=35314993", ref20:"https://www.searates.com/logistics-explorer/?id=35314903", ref40:"https://www.searates.com/logistics-explorer/?id=35314860" }
},
{
  continente:"ÁFRICA", pais:"Kenia", puertoOrigen:"Puerto de Mombasa", codigo:"KE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276438", dry40:"https://www.searates.com/logistics-explorer/?id=35276437", ref20:"https://www.searates.com/logistics-explorer/?id=35276436", ref40:"https://www.searates.com/logistics-explorer/?id=35276435" }
},
{
  continente:"OCEANÍA", pais:"Kiribati", puertoOrigen:"Puerto de Betio", codigo:"KI", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394243", dry40:"https://www.searates.com/logistics-explorer/?id=35394238", ref20:"https://www.searates.com/logistics-explorer/?id=35394246", ref40:"https://www.searates.com/logistics-explorer/?id=35394247" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Kuwait", puertoOrigen:"Puerto de Shuwaikh", codigo:"KW", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35315211", dry40:"https://www.searates.com/logistics-explorer/?id=35315163", ref20:"https://www.searates.com/logistics-explorer/?id=35315253", ref40:"https://www.searates.com/logistics-explorer/?id=35315277" }
},
{
  continente:"EUROPA", pais:"Letonia", puertoOrigen:"Puerto de Riga", codigo:"LV", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35392017", dry40:"https://www.searates.com/logistics-explorer/?id=35391997", ref20:"https://www.searates.com/logistics-explorer/?id=35392043", ref40:"https://www.searates.com/logistics-explorer/?id=35392054" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Líbano", puertoOrigen:"Puerto de Beirut", codigo:"LB", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35315700", dry40:"https://www.searates.com/logistics-explorer/?id=35315588", ref20:"https://www.searates.com/logistics-explorer/?id=35315467", ref40:"https://www.searates.com/logistics-explorer/?id=35315422" }
},
{
  continente:"ÁFRICA", pais:"Liberia", puertoOrigen:"Puerto de Monrovia", codigo:"LR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276454", dry40:"https://www.searates.com/logistics-explorer/?id=35276455", ref20:"https://www.searates.com/logistics-explorer/?id=35276456", ref40:"https://www.searates.com/logistics-explorer/?id=35276459" }
},
{
  continente:"ÁFRICA", pais:"Libia", puertoOrigen:"Puerto de Trípoli", codigo:"LY", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276492", dry40:"https://www.searates.com/logistics-explorer/?id=35276482", ref20:"https://www.searates.com/logistics-explorer/?id=35276470", ref40:"https://www.searates.com/logistics-explorer/?id=35276462" }
},
{
  continente:"EUROPA", pais:"Lituania", puertoOrigen:"Puerto de Klaipėda", codigo:"LT", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35392201", dry40:"https://www.searates.com/logistics-explorer/?id=35392226", ref20:"https://www.searates.com/logistics-explorer/?id=35392156", ref40:"https://www.searates.com/logistics-explorer/?id=35392073" }
},
{
  continente:"ÁFRICA", pais:"Madagascar", puertoOrigen:"Puerto de Toamasina", codigo:"MG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276504", dry40:"https://www.searates.com/logistics-explorer/?id=35276506", ref20:"https://www.searates.com/logistics-explorer/?id=35276507", ref40:"https://www.searates.com/logistics-explorer/?id=35276509" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Malasia", puertoOrigen:"Puerto Klang", codigo:"MY", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35315777", dry40:"https://www.searates.com/logistics-explorer/?id=35315810", ref20:"https://www.searates.com/logistics-explorer/?id=35315987", ref40:"https://www.searates.com/logistics-explorer/?id=35316039" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Maldivas", puertoOrigen:"Puerto de Malé", codigo:"MV", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35382481", dry40:"https://www.searates.com/logistics-explorer/?id=35382484", ref20:"https://www.searates.com/logistics-explorer/?id=35382485", ref40:"https://www.searates.com/logistics-explorer/?id=35382486" }
},
{
  continente:"EUROPA", pais:"Malta", puertoOrigen:"Puerto de La Valeta", codigo:"MT", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35392365", dry40:"https://www.searates.com/logistics-explorer/?id=35392310", ref20:"https://www.searates.com/logistics-explorer/?id=35392414", ref40:"https://www.searates.com/logistics-explorer/?id=35392468" }
},
{
  continente:"ÁFRICA", pais:"Marruecos", puertoOrigen:"Puerto de Tánger Med", codigo:"MA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276518", dry40:"https://www.searates.com/logistics-explorer/?id=35276517", ref20:"https://www.searates.com/logistics-explorer/?id=35276514", ref40:"https://www.searates.com/logistics-explorer/?id=35276512" }
},
{
  continente:"OCEANÍA", pais:"Islas Marshall", puertoOrigen:"Puerto de Majuro", codigo:"MH", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394335", dry40:"https://www.searates.com/logistics-explorer/?id=35394351", ref20:"https://www.searates.com/logistics-explorer/?id=35394318", ref40:"https://www.searates.com/logistics-explorer/?id=35394316" }
},
{
  continente:"ÁFRICA", pais:"Mauricio", puertoOrigen:"Puerto de Port Louis", codigo:"MU", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276521", dry40:"https://www.searates.com/logistics-explorer/?id=35276522", ref20:"https://www.searates.com/logistics-explorer/?id=35276526", ref40:"https://www.searates.com/logistics-explorer/?id=35276528" }
},
{
  continente:"ÁFRICA", pais:"Mauritania", puertoOrigen:"Puerto de Nuakchot", codigo:"MR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276542", dry40:"https://www.searates.com/logistics-explorer/?id=35276532", ref20:"https://www.searates.com/logistics-explorer/?id=35276531", ref40:"https://www.searates.com/logistics-explorer/?id=35276530" }
},
{
  continente:"AMÉRICA", pais:"México", puertoOrigen:"Puerto de Manzanillo", codigo:"MX", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277170", dry40:"https://www.searates.com/logistics-explorer/?id=35277169", ref20:"https://www.searates.com/logistics-explorer/?id=35277168", ref40:"https://www.searates.com/logistics-explorer/?id=35277157" }
},
{
  continente:"OCEANÍA", pais:"Micronesia", puertoOrigen:"Puerto de Pohnpei", codigo:"FM", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394478", dry40:"https://www.searates.com/logistics-explorer/?id=35394467", ref20:"https://www.searates.com/logistics-explorer/?id=35394481", ref40:"https://www.searates.com/logistics-explorer/?id=35394512" }
},
{
  continente:"EUROPA", pais:"Montenegro", puertoOrigen:"Puerto de Bar", codigo:"ME", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35392656", dry40:"https://www.searates.com/logistics-explorer/?id=35392690", ref20:"https://www.searates.com/logistics-explorer/?id=35392649", ref40:"https://www.searates.com/logistics-explorer/?id=35392589" }
},
{
  continente:"ÁFRICA", pais:"Mozambique", puertoOrigen:"Puerto de Maputo", codigo:"MZ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276553", dry40:"https://www.searates.com/logistics-explorer/?id=35276554", ref20:"https://www.searates.com/logistics-explorer/?id=35276555", ref40:"https://www.searates.com/logistics-explorer/?id=35276556" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Myanmar", puertoOrigen:"Puerto de Rangún", codigo:"MM", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35382566", dry40:"https://www.searates.com/logistics-explorer/?id=35382562", ref20:"https://www.searates.com/logistics-explorer/?id=35382530", ref40:"https://www.searates.com/logistics-explorer/?id=35382512" }
},
{
  continente:"ÁFRICA", pais:"Namibia", puertoOrigen:"Puerto de Walvis Bay", codigo:"NA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276565", dry40:"https://www.searates.com/logistics-explorer/?id=35276564", ref20:"https://www.searates.com/logistics-explorer/?id=35276563", ref40:"https://www.searates.com/logistics-explorer/?id=35276561" }
},
{
  continente:"OCEANÍA", pais:"Nauru", puertoOrigen:"Puerto de Aiwo", codigo:"NR", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"AMÉRICA", pais:"Nicaragua", puertoOrigen:"Puerto de Corinto", codigo:"NI", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277171", dry40:"https://www.searates.com/logistics-explorer/?id=35277172", ref20:"https://www.searates.com/logistics-explorer/?id=35277174", ref40:"https://www.searates.com/logistics-explorer/?id=35277175" }
},
{
  continente:"ÁFRICA", pais:"Nigeria", puertoOrigen:"Puerto de Lagos", codigo:"NG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276580", dry40:"https://www.searates.com/logistics-explorer/?id=35276589", ref20:"https://www.searates.com/logistics-explorer/?id=35276609", ref40:"https://www.searates.com/logistics-explorer/?id=35276616" }
},
{
  continente:"EUROPA", pais:"Noruega", puertoOrigen:"Puerto de Oslo", codigo:"NO", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35392873", dry40:"https://www.searates.com/logistics-explorer/?id=35392835", ref20:"https://www.searates.com/logistics-explorer/?id=35392880", ref40:"https://www.searates.com/logistics-explorer/?id=35392886" }
},
{
  continente:"OCEANÍA", pais:"Nueva Zelanda", puertoOrigen:"Puerto de Auckland", codigo:"NZ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394619", dry40:"https://www.searates.com/logistics-explorer/?id=35394653", ref20:"https://www.searates.com/logistics-explorer/?id=35394583", ref40:"https://www.searates.com/logistics-explorer/?id=35394582" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Omán", puertoOrigen:"Puerto de Salalah", codigo:"OM", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35382615", dry40:"https://www.searates.com/logistics-explorer/?id=35382616", ref20:"https://www.searates.com/logistics-explorer/?id=35382623", ref40:"https://www.searates.com/logistics-explorer/?id=35382626" }
},
{
  continente:"EUROPA", pais:"Países Bajos", puertoOrigen:"Puerto de Róterdam", codigo:"NL", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35392973", dry40:"https://www.searates.com/logistics-explorer/?id=35392955", ref20:"https://www.searates.com/logistics-explorer/?id=35392931", ref40:"https://www.searates.com/logistics-explorer/?id=35392925" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Pakistán", puertoOrigen:"Puerto de Karachi", codigo:"PK", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35382780", dry40:"https://www.searates.com/logistics-explorer/?id=35382770", ref20:"https://www.searates.com/logistics-explorer/?id=35382722", ref40:"https://www.searates.com/logistics-explorer/?id=35382674" }
},
{
  continente:"OCEANÍA", pais:"Palaos", puertoOrigen:"Puerto de Koror", codigo:"PW", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"AMÉRICA", pais:"Panamá", puertoOrigen:"Puerto de Balboa", codigo:"PA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277192", dry40:"https://www.searates.com/logistics-explorer/?id=35277191", ref20:"https://www.searates.com/logistics-explorer/?id=35277187", ref40:"https://www.searates.com/logistics-explorer/?id=35277179" }
},
{
  continente:"OCEANÍA", pais:"Papúa Nueva Guinea", puertoOrigen:"Puerto de Lae", codigo:"PG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394702", dry40:"https://www.searates.com/logistics-explorer/?id=35394692", ref20:"https://www.searates.com/logistics-explorer/?id=35394703", ref40:"https://www.searates.com/logistics-explorer/?id=35394704" }
},
{
  continente:"EUROPA", pais:"Polonia", puertoOrigen:"Puerto de Gdansk", codigo:"PL", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393019", dry40:"https://www.searates.com/logistics-explorer/?id=35393048", ref20:"https://www.searates.com/logistics-explorer/?id=35393089", ref40:"https://www.searates.com/logistics-explorer/?id=35393102" }
},
{
  continente:"EUROPA", pais:"Portugal", puertoOrigen:"Puerto de Lisboa", codigo:"PT", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393257", dry40:"https://www.searates.com/logistics-explorer/?id=35393229", ref20:"https://www.searates.com/logistics-explorer/?id=35393186", ref40:"https://www.searates.com/logistics-explorer/?id=35393162" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Qatar", puertoOrigen:"Puerto de Doha", codigo:"QA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35382868", dry40:"https://www.searates.com/logistics-explorer/?id=35382872", ref20:"https://www.searates.com/logistics-explorer/?id=35382878", ref40:"https://www.searates.com/logistics-explorer/?id=35382879" }
},
{
  continente:"EUROPA", pais:"Reino Unido", puertoOrigen:"Puerto de Felixstowe", codigo:"GB", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393286", dry40:"https://www.searates.com/logistics-explorer/?id=35393318", ref20:"https://www.searates.com/logistics-explorer/?id=35393337", ref40:"https://www.searates.com/logistics-explorer/?id=35393361" }
},
{
  continente:"ÁFRICA", pais:"República del Congo", puertoOrigen:"Puerto de Pointe-Noire", codigo:"CG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276626", dry40:"https://www.searates.com/logistics-explorer/?id=35276625", ref20:"https://www.searates.com/logistics-explorer/?id=35276623", ref40:"https://www.searates.com/logistics-explorer/?id=35276622" }
},
{
  continente:"ÁFRICA", pais:"República Democrática del Congo", puertoOrigen:"Puerto de Matadi", codigo:"CD", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276627", dry40:"https://www.searates.com/logistics-explorer/?id=35276629", ref20:"https://www.searates.com/logistics-explorer/?id=35276633", ref40:"https://www.searates.com/logistics-explorer/?id=35276634" }
},
{
  continente:"AMÉRICA", pais:"República Dominicana", puertoOrigen:"Puerto de Santo Domingo", codigo:"DO", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277195", dry40:"https://www.searates.com/logistics-explorer/?id=35277197", ref20:"https://www.searates.com/logistics-explorer/?id=35277203", ref40:"https://www.searates.com/logistics-explorer/?id=35277211" }
},
{
  continente:"EUROPA", pais:"Rumanía", puertoOrigen:"Puerto de Constanza", codigo:"RO", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393506", dry40:"https://www.searates.com/logistics-explorer/?id=35393511", ref20:"https://www.searates.com/logistics-explorer/?id=35393499", ref40:"https://www.searates.com/logistics-explorer/?id=35393452" }
},
{
  continente:"EUROPA", pais:"Rusia", puertoOrigen:"Puerto de San Petersburgo", codigo:"RU", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ÁFRICA", pais:"Ruanda", puertoOrigen:"Puerto Seco de Kigali", codigo:"RW", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"AMÉRICA", pais:"San Cristóbal y Nieves", puertoOrigen:"Puerto de Basseterre", codigo:"KN", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277212", dry40:"https://www.searates.com/logistics-explorer/?id=35277214", ref20:"https://www.searates.com/logistics-explorer/?id=35277218", ref40:"https://www.searates.com/logistics-explorer/?id=35277222" }
},
{
  continente:"AMÉRICA", pais:"San Vicente y las Granadinas", puertoOrigen:"Puerto de Kingstown", codigo:"VC", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277241", dry40:"https://www.searates.com/logistics-explorer/?id=35277240", ref20:"https://www.searates.com/logistics-explorer/?id=35277238", ref40:"https://www.searates.com/logistics-explorer/?id=35277236" }
},
{
  continente:"AMÉRICA", pais:"Santa Lucía", puertoOrigen:"Puerto de Castries", codigo:"LC", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277243", dry40:"https://www.searates.com/logistics-explorer/?id=35277244", ref20:"https://www.searates.com/logistics-explorer/?id=35277245", ref40:"https://www.searates.com/logistics-explorer/?id=35277248" }
},
{
  continente:"EUROPA", pais:"Serbia", puertoOrigen:"Puerto de Belgrado", codigo:"RS", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ÁFRICA", pais:"Seychelles", puertoOrigen:"Puerto de Victoria", codigo:"SC", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276638", dry40:"https://www.searates.com/logistics-explorer/?id=35276639", ref20:"https://www.searates.com/logistics-explorer/?id=35276640", ref40:"https://www.searates.com/logistics-explorer/?id=35276641" }
},
{
  continente:"ÁFRICA", pais:"Sierra Leona", puertoOrigen:"Puerto de Freetown", codigo:"SL", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276652", dry40:"https://www.searates.com/logistics-explorer/?id=35276648", ref20:"https://www.searates.com/logistics-explorer/?id=35276644", ref40:"https://www.searates.com/logistics-explorer/?id=35276643" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Singapur", puertoOrigen:"Puerto de Singapur", codigo:"SG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35316117", dry40:"https://www.searates.com/logistics-explorer/?id=35316197", ref20:"https://www.searates.com/logistics-explorer/?id=35316246", ref40:"https://www.searates.com/logistics-explorer/?id=35316324" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Siria", puertoOrigen:"Puerto de Latakia", codigo:"SY", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ÁFRICA", pais:"Somalia", puertoOrigen:"Puerto de Mogadiscio", codigo:"SO", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ÁFRICA", pais:"Suazilandia", puertoOrigen:"Puerto Seco de Matsapha", codigo:"SZ", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ÁFRICA", pais:"Sudáfrica", puertoOrigen:"Puerto de Durban", codigo:"ZA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276668", dry40:"https://www.searates.com/logistics-explorer/?id=35276672", ref20:"https://www.searates.com/logistics-explorer/?id=35276674", ref40:"https://www.searates.com/logistics-explorer/?id=35276675" }
},
{
  continente:"ÁFRICA", pais:"Sudán", puertoOrigen:"Puerto de Port Sudan", codigo:"SD", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276693", dry40:"https://www.searates.com/logistics-explorer/?id=35276696", ref20:"https://www.searates.com/logistics-explorer/?id=35276698", ref40:"https://www.searates.com/logistics-explorer/?id=35276701" }
},
{
  continente:"EUROPA", pais:"Suecia", puertoOrigen:"Puerto de Gotemburgo", codigo:"SE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393645", dry40:"https://www.searates.com/logistics-explorer/?id=35393624", ref20:"https://www.searates.com/logistics-explorer/?id=35393688", ref40:"https://www.searates.com/logistics-explorer/?id=35393693" }
},
{
  continente:"EUROPA", pais:"Suiza", puertoOrigen:"Puerto de Basilea", codigo:"CH", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Tailandia", puertoOrigen:"Puerto de Laem Chabang", codigo:"TH", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35316462", dry40:"https://www.searates.com/logistics-explorer/?id=35316506", ref20:"https://www.searates.com/logistics-explorer/?id=35316551", ref40:"https://www.searates.com/logistics-explorer/?id=35316596" }
},
{
  continente:"ÁFRICA", pais:"Tanzania", puertoOrigen:"Puerto de Dar es Salaam", codigo:"TZ", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276724", dry40:"https://www.searates.com/logistics-explorer/?id=35276723", ref20:"https://www.searates.com/logistics-explorer/?id=35276720", ref40:"https://www.searates.com/logistics-explorer/?id=35276717" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Tayikistán", puertoOrigen:"Puerto Seco de Dushanbe", codigo:"TJ", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ÁFRICA", pais:"Togo", puertoOrigen:"Puerto de Lomé", codigo:"TG", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276736", dry40:"https://www.searates.com/logistics-explorer/?id=35276735", ref20:"https://www.searates.com/logistics-explorer/?id=35276733", ref40:"https://www.searates.com/logistics-explorer/?id=35276731" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Turkmenistán", puertoOrigen:"Puerto de Türkmenbaşy", codigo:"TM", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Turquía", puertoOrigen:"Puerto de Estambul", codigo:"TR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393762", dry40:"https://www.searates.com/logistics-explorer/?id=35393782", ref20:"https://www.searates.com/logistics-explorer/?id=35393795", ref40:"https://www.searates.com/logistics-explorer/?id=35393805" }
},
{
  continente:"AMÉRICA", pais:"Trinidad y Tobago", puertoOrigen:"Puerto de Puerto España", codigo:"TT", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277252", dry40:"https://www.searates.com/logistics-explorer/?id=35277253", ref20:"https://www.searates.com/logistics-explorer/?id=35277254", ref40:"https://www.searates.com/logistics-explorer/?id=35277255" }
},
{
  continente:"ÁFRICA", pais:"Túnez", puertoOrigen:"Puerto de Radès", codigo:"TN", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35276751", dry40:"https://www.searates.com/logistics-explorer/?id=35276752", ref20:"https://www.searates.com/logistics-explorer/?id=35276755", ref40:"https://www.searates.com/logistics-explorer/?id=35276758" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Turquía (Asia)", puertoOrigen:"Puerto de Mersin", codigo:"TR", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393832", dry40:"https://www.searates.com/logistics-explorer/?id=35393851", ref20:"https://www.searates.com/logistics-explorer/?id=35393874", ref40:"https://www.searates.com/logistics-explorer/?id=35393901" }
},
{
  continente:"OCEANÍA", pais:"Tuvalu", puertoOrigen:"Puerto de Funafuti", codigo:"TV", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394933", dry40:"https://www.searates.com/logistics-explorer/?id=35394913", ref20:"https://www.searates.com/logistics-explorer/?id=35394887", ref40:"https://www.searates.com/logistics-explorer/?id=35394886" }
},
{
  continente:"EUROPA", pais:"Ucrania", puertoOrigen:"Puerto de Odesa", codigo:"UA", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35393834", dry40:"https://www.searates.com/logistics-explorer/?id=35393810", ref20:"https://www.searates.com/logistics-explorer/?id=35393857", ref40:"https://www.searates.com/logistics-explorer/?id=35393874" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Uzbekistán", puertoOrigen:"Puerto Seco de Taskent", codigo:"UZ", destino:"Paita",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"AMÉRICA", pais:"Uruguay", puertoOrigen:"Puerto de Montevideo", codigo:"UY", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277364", dry40:"https://www.searates.com/logistics-explorer/?id=35277367", ref20:"https://www.searates.com/logistics-explorer/?id=35277369", ref40:"https://www.searates.com/logistics-explorer/?id=35277370" }
},
{
  continente:"OCEANÍA", pais:"Vanuatu", puertoOrigen:"Puerto de Port Vila", codigo:"VU", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35394938", dry40:"https://www.searates.com/logistics-explorer/?id=35394944", ref20:"https://www.searates.com/logistics-explorer/?id=35394947", ref40:"https://www.searates.com/logistics-explorer/?id=35394949" }
},
{
  continente:"AMÉRICA", pais:"Venezuela", puertoOrigen:"Puerto de La Guaira", codigo:"VE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35277375", dry40:"https://www.searates.com/logistics-explorer/?id=35277374", ref20:"https://www.searates.com/logistics-explorer/?id=35277373", ref40:"https://www.searates.com/logistics-explorer/?id=35277372" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Vietnam", puertoOrigen:"Puerto de Ho Chi Minh", codigo:"VN", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383163", dry40:"https://www.searates.com/logistics-explorer/?id=35383151", ref20:"https://www.searates.com/logistics-explorer/?id=35383166", ref40:"https://www.searates.com/logistics-explorer/?id=35383167" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Yemen", puertoOrigen:"Puerto de Adén", codigo:"YE", destino:"Paita",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383182", dry40:"https://www.searates.com/logistics-explorer/?id=35383189", ref20:"https://www.searates.com/logistics-explorer/?id=35383179", ref40:"https://www.searates.com/logistics-explorer/?id=35383170" }
}
];
