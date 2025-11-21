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

export const CONTAINER_DETAILS_CALLAO: ContainerDetails[] = [
{
  continente:"EUROPA",
  pais:"Albania",
  puertoOrigen:"Puerto de Durrës",
  bandera:"🇦🇱",
  codigo:"AL",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247364",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247366",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249023",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249021"
  }
},
{
  continente:"EUROPA",
  pais:"Alemania",
  puertoOrigen:"Puerto de Hamburgo",
  bandera:"🇩🇪",
  codigo:"DE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247440",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247439",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249061",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249081"
  }
},
{
  continente:"ÁFRICA",
  pais:"Angola",
  puertoOrigen:"Puerto de Luanda",
  bandera:"🇦🇴",
  codigo:"AO",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249034",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249027",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249086",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249082"
  }
},
{
  continente:"AMÉRICA",
  pais:"Antigua y Barbuda",
  puertoOrigen:"Puerto de Saint John's",
  bandera:"🇦🇬",
  codigo:"AG",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871791",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871788",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249099",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249101"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Arabia Saudita",
  puertoOrigen:"Puerto de Jeddah",
  bandera:"🇸🇦",
  codigo:"SA",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246404",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246401",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249115",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249113"
  }
},
{
  continente:"ÁFRICA",
  pais:"Argelia",
  puertoOrigen:"Puerto de Argelia",
  bandera:"🇩🇿",
  codigo:"DZ",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249054",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249058",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249131",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249132"
  }
},
{
  continente:"AMÉRICA",
  pais:"Argentina",
  puertoOrigen:"Puerto de Buenos Aires",
  bandera:"🇦🇷",
  codigo:"AR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871797",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871806",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249156",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249152"
  }
},
{
  continente:"OCEANÍA",
  pais:"Australia",
  puertoOrigen:"Puerto de Sídney",
  bandera:"🇦🇺",
  codigo:"AU",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248320",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248319",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249184",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249186"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Azerbaiyán",
  puertoOrigen:"Puerto de Bakú",
  bandera:"🇦🇿",
  codigo:"AZ",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246406",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246407",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249198",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249196"
  }
},
{
  continente:"AMÉRICA",
  pais:"Bahamas",
  puertoOrigen:"Puerto de Nassau",
  bandera:"🇧🇸",
  codigo:"BS",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871049",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871833",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249219",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249220"
  }
},
{
  continente:"AMÉRICA",
  pais:"Barbados",
  puertoOrigen:"Puerto de Bridgetown",
  bandera:"🇧🇧",
  codigo:"BB",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871089",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871880",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249309",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249291"
  }
},
{
  continente:"EUROPA",
  pais:"Bélgica",
  puertoOrigen:"Puerto de Amberes",
  bandera:"🇧🇪",
  codigo:"BE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247447",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247456",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249323",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249325"
  }
},
{
  continente:"ÁFRICA",
  pais:"Benín",
  puertoOrigen:"Puerto de Cotonú",
  bandera:"🇧🇯",
  codigo:"BJ",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249089",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249088",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249329",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249327"
  }
},
{
  continente:"EUROPA",
  pais:"Bulgaria",
  puertoOrigen:"Puerto de Varna",
  bandera:"🇧🇬",
  codigo:"BG",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247488",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247482",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249426",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249427"
  }
},
{
  continente:"ÁFRICA",
  pais:"Cabo Verde",
  puertoOrigen:"Puerto Grande",
  bandera:"🇨🇻",
  codigo:"CV",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249094",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249097",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249429",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249428"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Camboya",
  puertoOrigen:"Puerto de Sihanoukville",
  bandera:"🇰🇭",
  codigo:"KH",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246546",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246588",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249483",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249485"
  }
},
{
  continente:"ÁFRICA",
  pais:"Camerún",
  puertoOrigen:"Puerto de Duala",
  bandera:"🇨🇲",
  codigo:"CM",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249123",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249116",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249513",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249512"
  }
},
{
  continente:"AMÉRICA",
  pais:"Canadá",
  puertoOrigen:"Puerto de Vancouver",
  bandera:"🇨🇦",
  codigo:"CA",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871930",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871934",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249528",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249531"
  }
},
{
  continente:"AMÉRICA",
  pais:"Chile",
  puertoOrigen:"Puerto de Valparaíso",
  bandera:"🇨🇱",
  codigo:"CL",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871963",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871950",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249540",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249535"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"China",
  puertoOrigen:"Puerto de Shanghái",
  bandera:"🇨🇳",
  codigo:"CH",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246620",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246618",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249574",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249578"
  }
},
{
  continente:"EUROPA",
  pais:"Chipre",
  puertoOrigen:"Puerto de Limassol",
  bandera:"🇨🇾",
  codigo:"CY",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247499",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247513",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249600",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249599"
  }
},
{
  continente:"AMÉRICA",
  pais:"Colombia",
  puertoOrigen:"Puerto de Buenaventura",
  bandera:"🇨🇴",
  codigo:"CO",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35249668",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249670"
  }
},
{
  continente:"ÁFRICA",
  pais:"Comoras",
  puertoOrigen:"Puerto de Moroni",
  bandera:"🇰🇲",
  codigo:"KM",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249127",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249129",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249676",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249675"
  }
},
{
  continente:"AMÉRICA",
  pais:"Brasil",
  puertoOrigen:"Puerto de Santos",
  codigo:"BR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871913",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871896",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249357",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249361"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Corea del Norte",
  puertoOrigen:"Puerto de Nampo",
  bandera:"🇰🇵",
  codigo:"KP",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=34871305",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871303"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Corea del Sur",
  puertoOrigen:"Puerto de Busan",
  bandera:"🇰🇷",
  codigo:"KR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246648",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246647",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871636",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871638"
  }
},
{
  continente:"ÁFRICA",
  pais:"Costa de Marfil",
  puertoOrigen:"Puerto de Abiyán",
  bandera:"🇨🇮",
  codigo:"CI",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249172",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249168",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871652",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871650"
  }
},
{
  continente:"AMÉRICA",
  pais:"Costa Rica",
  puertoOrigen:"Puerto Limón-Moín",
  bandera:"🇨🇷",
  codigo:"CR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872104",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872086",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871681",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871685"
  }
},
{
  continente:"EUROPA",
  pais:"Croacia",
  puertoOrigen:"Puerto de Rijeka",
  bandera:"🇭🇷",
  codigo:"HR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247548",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247543",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871703",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871701"
  }
},
{
  continente:"AMÉRICA",
  pais:"Cuba",
  puertoOrigen:"Puerto de La Habana",
  bandera:"🇨🇺",
  codigo:"CU",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872121",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872124",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871722",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871724"
  }
},
{
  continente:"ÁFRICA",
  pais:"Djibouti",
  puertoOrigen:"Puerto de Yibuti",
  bandera:"🇩🇯",
  codigo:"DJ",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249177",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249179",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871744",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871739"
  }
},
{
  continente:"AMÉRICA",
  pais:"Dominica",
  puertoOrigen:"Puerto de Roseau",
  bandera:"🇩🇲",
  codigo:"DM",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872148",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872147",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871766",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871767"
  }
},
{
  continente:"AMÉRICA",
  pais:"Ecuador",
  puertoOrigen:"Puerto de Guayaquil",
  bandera:"🇪🇨",
  codigo:"EC",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872151",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872167",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871780",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871779"
  }
},
{
  continente:"ÁFRICA",
  pais:"Egipto",
  puertoOrigen:"Puerto de Alejandría",
  bandera:"🇪🇬",
  codigo:"EG",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249201",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249199",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871814",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871817"
  }
},
{
  continente:"AMÉRICA",
  pais:"El Salvador",
  puertoOrigen:"Puerto de Acajutla",
  bandera:"🇸🇻",
  codigo:"SV",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872219",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872205",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871823",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871822"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Emiratos Árabes Unidos",
  puertoOrigen:"Puerto de Jebel Ali",
  bandera:"🇦🇪",
  codigo:"AE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246650",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246654",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871882",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871883"
  }
},
{
  continente:"ÁFRICA",
  pais:"Eritrea",
  puertoOrigen:"Puerto de Massawa",
  bandera:"🇪🇷",
  codigo:"ER",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249210",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249218",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871889",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871884"
  }
},
{
  continente:"EUROPA",
  pais:"Eslovenia",
  puertoOrigen:"Puerto de Koper",
  bandera:"🇸🇮",
  codigo:"SI",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247555",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247561",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871939",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871940"
  }
},
{
  continente:"EUROPA",
  pais:"España",
  puertoOrigen:"Puerto de Valencia",
  bandera:"🇪🇸",
  codigo:"ES",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247587",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247581",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871945",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871943"
  }
},
{
  continente:"AMÉRICA",
  pais:"Estados Unidos",
  puertoOrigen:"Puerto de Los Ángeles",
  bandera:"🇺🇸",
  codigo:"US",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872248",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872271",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872052",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872057"
  }
},
{
  continente:"EUROPA",
  pais:"Estonia",
  puertoOrigen:"Puerto de Tallin",
  bandera:"🇪🇪",
  codigo:"EE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247602",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247606",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872076",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872074"
  }
},
{
  continente:"OCEANÍA",
  pais:"Fiji",
  puertoOrigen:"Puerto de Suva",
  bandera:"🇫🇯",
  codigo:"FJ",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248324",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248325",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872125",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872126"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Filipinas",
  puertoOrigen:"Puerto de Manila",
  bandera:"🇵🇭",
  codigo:"PH",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246670",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246669",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872143",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872132"
  }
},
{
  continente:"EUROPA",
  pais:"Finlandia",
  puertoOrigen:"Puerto de Helsinki",
  bandera:"🇫🇮",
  codigo:"FI",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247620",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247614",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872179",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872180"
  }
},
{
  continente:"EUROPA",
  pais:"Francia",
  puertoOrigen:"Puerto de Marsella",
  bandera:"🇫🇷",
  codigo:"FR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247625",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247627",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872202",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872193"
  }
},
{
  continente:"ÁFRICA",
  pais:"Gabón",
  puertoOrigen:"Puerto de Owendo",
  bandera:"🇬🇦",
  codigo:"GA",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249238",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249236",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872293",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872306"
  }
},
{
  continente:"ÁFRICA",
  pais:"Gambia",
  puertoOrigen:"Puerto de Banjul",
  bandera:"🇬🇲",
  codigo:"GM",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249263",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249264",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872315",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872313"
  }
},
{
  continente:"EUROPA",
  pais:"Georgia",
  puertoOrigen:"Puerto de Poti",
  bandera:"🇬🇪",
  codigo:"GE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247657",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247650",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872365",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872366"
  }
},
{
  continente:"ÁFRICA",
  pais:"Ghana",
  puertoOrigen:"Puerto de Tema",
  bandera:"🇬🇭",
  codigo:"GH",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249314",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249312",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872371",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872370"
  }
},
{
  continente:"AMÉRICA",
  pais:"Granada",
  puertoOrigen:"Puerto de Saint George's",
  bandera:"🇬🇩",
  codigo:"GD",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872332",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872317",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872437",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872440"
  }
},
{
  continente:"EUROPA",
  pais:"Grecia",
  puertoOrigen:"Puerto del Pireo",
  bandera:"🇬🇷",
  codigo:"GR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247676",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247678",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872478",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872452"
  }
},
{
  continente:"AMÉRICA",
  pais:"Guatemala",
  puertoOrigen:"Puerto Quetzal",
  bandera:"🇬🇹",
  codigo:"GT",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872334",
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=34872548",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872588"
  }
},
{
  continente:"ÁFRICA",
  pais:"Guinea",
  puertoOrigen:"Puerto de Conakri",
  bandera:"🇬🇳",
  codigo:"GN",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249318",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249320",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872591",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872589"
  }
},
{
  continente:"ÁFRICA",
  pais:"Guinea-Bissau",
  puertoOrigen:"Puerto de Bissau",
  bandera:"🇬🇼",
  codigo:"GW",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249335",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249332",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872675",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872678"
  }
},
{
  continente:"AMÉRICA",
  pais:"Guyana",
  puertoOrigen:"Puerto de Georgetown",
  bandera:"🇬🇾",
  codigo:"GY",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872374",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872372",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872686",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872684"
  }
},
{
  continente:"AMÉRICA",
  pais:"Haití",
  puertoOrigen:"Puerto de Puerto Príncipe",
  bandera:"🇭🇹",
  codigo:"HT",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872374",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872431",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872969",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872976"
  }
},
{
  continente:"AMÉRICA",
  pais:"Honduras",
  puertoOrigen:"Puerto de Puerto Cortés",
  bandera:"🇭🇳",
  codigo:"HN",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872502",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872490",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246193",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246195"
  }
},
{
  continente:"EUROPA",
  pais:"Hungría",
  puertoOrigen:"Puerto de Budapest",
  bandera:"🇭🇺",
  codigo:"HU",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247684",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247686",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873166",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873168"
  }
},
{
  continente:"EUROPA",
  pais:"Irlanda",
  puertoOrigen:"Puerto de Dublín",
  bandera:"🇮🇪",
  codigo:"IE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247741",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247736",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873230",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873232"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"India",
  puertoOrigen:"Puerto de Nhava Sheva",
  bandera:"🇮🇳",
  codigo:"IN",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246695",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246692",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873233",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873236"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Indonesia",
  puertoOrigen:"Puerto de Yakarta",
  bandera:"🇮🇩",
  codigo:"ID",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246714",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246712",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873266",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873271"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Irak",
  puertoOrigen:"Puerto de Umm Qasr",
  bandera:"🇮🇶",
  codigo:"IQ",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247747",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247750",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873340",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873337"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Irán",
  puertoOrigen:"Puerto de Bandar Abbas",
  bandera:"🇮🇷",
  codigo:"IR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247754",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247756",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873345",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873346"
  }
},
{
  continente:"EUROPA",
  pais:"Islandia",
  puertoOrigen:"Puerto de Reikiavik",
  bandera:"🇮🇸",
  codigo:"IS",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247761",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247763",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873392",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873393"
  }
},
{
  continente:"EUROPA",
  pais:"Italia",
  puertoOrigen:"Puerto de Génova",
  bandera:"🇮🇹",
  codigo:"IT",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247782",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247783",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873445",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873443"
  }
},
{
  continente:"AMÉRICA",
  pais:"Jamaica",
  puertoOrigen:"Puerto de Kingston",
  bandera:"🇯🇲",
  codigo:"JM",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872426",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872424",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873470",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873468"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Japón",
  puertoOrigen:"Puerto de Yokohama",
  bandera:"🇯🇵",
  codigo:"JP",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246746",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246740",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873552",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873548"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Jordania",
  puertoOrigen:"Puerto de Aqaba",
  bandera:"🇯🇴",
  codigo:"JO",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247799",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247800",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873639",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873637"
  }
},
{
  continente:"ÁFRICA",
  pais:"Kenia",
  puertoOrigen:"Puerto de Mombasa",
  bandera:"🇰🇪",
  codigo:"KE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249278",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249280",
    ref20:"https://www.searates.com/logistics-explorer/?id=34873685",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873690"
  }
},
{
  continente:"EUROPA",
  pais:"Kosovo",
  puertoOrigen:"Puerto de Durres",
  bandera:"🇽🇰",
  codigo:"XK",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Kazajistán",
  puertoOrigen:"Puerto de Aktau",
  bandera:"🇰🇿",
  codigo:"KZ",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=34873725",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873722"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Kirguistán",
  puertoOrigen:"Puerto de Karakol",
  bandera:"🇰🇬",
  codigo:"KG",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=34873673",
    ref40:"https://www.searates.com/logistics-explorer/?id=34873674"
  }
},
{
  continente:"OCEANÍA",
  pais:"Kiribati",
  puertoOrigen:"Puerto de Betio",
  bandera:"🇰🇮",
  codigo:"KI",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35249726",
    ref40:null
  }
},
{
  continente:"AMÉRICA",
  pais:"México",
  puertoOrigen:"Puerto de Manzanillo",
  bandera:"🇲🇽",
  codigo:"MX",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871987",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871978",
    ref20:"https://www.searates.com/logistics-explorer/?id=34874367",
    ref40:"https://www.searates.com/logistics-explorer/?id=34874369"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Kuwait",
  puertoOrigen:"Puerto Shuwaikh",
  bandera:"🇰🇼",
  codigo:"KW",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35249348",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249346"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Laos",
  puertoOrigen:"Puerto de Vientiane",
  bandera:"🇱🇦",
  codigo:"LA",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=34874425",
    ref40:"https://www.searates.com/logistics-explorer/?id=34874420"
  }
},
{
  continente:"EUROPA",
  pais:"Letonia",
  puertoOrigen:"Puerto de Riga",
  bandera:"🇱🇻",
  codigo:"LV",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247841",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247847",
    ref20:"https://www.searates.com/logistics-explorer/?id=34874431",
    ref40:"https://www.searates.com/logistics-explorer/?id=34874433"
  }
},
{
  continente:"ÁFRICA",
  pais:"Lesoto",
  puertoOrigen:"Puerto de Maseru",
  bandera:"🇱🇸",
  codigo:"LS",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
},
{
  continente:"ÁFRICA",
  pais:"Liberia",
  puertoOrigen:"Puerto de Monrovia",
  bandera:"🇱🇷",
  codigo:"LR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249298",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249295",
    ref20:"https://www.searates.com/logistics-explorer/?id=34874483",
    ref40:"https://www.searates.com/logistics-explorer/?id=34874480"
  }
},
{
  continente:"ÁFRICA",
  pais:"Libia",
  puertoOrigen:"Puerto de Trípoli",
  bandera:"🇱🇾",
  codigo:"LY",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249305",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249310",
    ref20:"https://www.searates.com/logistics-explorer/?id=34874518",
    ref40:"https://www.searates.com/logistics-explorer/?id=34874522"
  }
},
{
  continente:"EUROPA",
  pais:"Liechtenstein",
  puertoOrigen:"Puerto Basel (vía Suiza)",
  bandera:"🇱🇮",
  codigo:"LI",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
},
{
  continente:"EUROPA",
  pais:"Lituania",
  puertoOrigen:"Puerto de Klaipeda",
  bandera:"🇱🇹",
  codigo:"LT",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247866",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247872",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248949",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248950"
  }
},
{
  continente:"ÁFRICA",
  pais:"Madagascar",
  puertoOrigen:"Puerto de Toamasina",
  bandera:"🇲🇬",
  codigo:"MG",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249546",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249541",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246854",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246853"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Malasia",
  puertoOrigen:"Puerto Klang",
  bandera:"🇲🇾",
  codigo:"MY",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246858",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246856",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246769",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246771"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Maldivas",
  puertoOrigen:"Puerto de Malé",
  bandera:"🇲🇻",
  codigo:"MV",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246865",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246891",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246781",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246773"
  }
},
{
  continente:"EUROPA",
  pais:"Malta",
  puertoOrigen:"Puerto de La Valeta",
  bandera:"🇲🇹",
  codigo:"MT",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247796",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247798",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246804",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246806"
  }
},
{
  continente:"ÁFRICA",
  pais:"Marruecos",
  puertoOrigen:"Puerto Tanger Med",
  bandera:"🇲🇦",
  codigo:"MA",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249436",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249454",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246813",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246811"
  }
},
{
  continente:"OCEANÍA",
  pais:"Islas Marshall",
  puertoOrigen:"Puerto de Majuro",
  bandera:"🇲🇭",
  codigo:"MH",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248570",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248553",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246828",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246830"
  }
},
{
  continente:"ÁFRICA",
  pais:"Mauricio",
  puertoOrigen:"Puerto de Port Louis",
  bandera:"🇲🇺",
  codigo:"MU",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249518",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249515",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246854",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246853"
  }
},
{
  continente:"ÁFRICA",
  pais:"Mauritania",
  puertoOrigen:"Puerto de Nuakchot",
  bandera:"🇲🇷",
  codigo:"MR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249525",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249526",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246912",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246942"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Mongolia",
  puertoOrigen:"Puerto en tránsito (China)",
  bandera:"🇲🇳",
  codigo:"MN",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
},
{
  continente:"OCEANÍA",
  pais:"Micronesia",
  puertoOrigen:"Puerto de Kolonia",
  bandera:"🇫🇲",
  codigo:"FM",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248673",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248675",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247065",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247068"
  }
},
{
  continente:"ÁFRICA",
  pais:"Mozambique",
  puertoOrigen:"Puerto de Maputo",
  bandera:"🇲🇿",
  codigo:"MZ",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249546",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249541",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247088",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247089"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Myanmar",
  puertoOrigen:"Puerto de Yangon",
  bandera:"🇲🇲",
  codigo:"MM",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247057",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247056",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247129",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247096"
  }
},
{
  continente:"ÁFRICA",
  pais:"Namibia",
  puertoOrigen:"Puerto de Walvis Bay",
  bandera:"🇳🇦",
  codigo:"NA",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249552",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249555",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247161",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247176"
  }
},
{
  continente:"OCEANÍA",
  pais:"Nauru",
  puertoOrigen:"Puerto de Aiwo",
  bandera:"🇳🇷",
  codigo:"NR",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35247246",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247244"
  }
},
{
  continente:"AMÉRICA",
  pais:"Nicaragua",
  puertoOrigen:"Puerto de Corinto",
  bandera:"🇳🇮",
  codigo:"NI",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872656",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872666",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247268",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247275"
  }
},
{
  continente:"ÁFRICA",
  pais:"Níger",
  puertoOrigen:"Puerto en tránsito (Benín)",
  bandera:"🇳🇪",
  codigo:"NE",
  destino:"Callao",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ÁFRICA",
  pais:"Nigeria",
  puertoOrigen:"Puerto de Lagos",
  bandera:"🇳🇬",
  codigo:"NG",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249645",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249628",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247292",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247290"
  }
},
{
  continente:"EUROPA",
  pais:"Noruega",
  puertoOrigen:"Puerto de Oslo",
  bandera:"🇳🇴",
  codigo:"NO",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247837",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247863",
    ref20:null,
    ref40:null
  }
},
{
  continente:"OCEANÍA",
  pais:"Nueva Zelanda",
  puertoOrigen:"Puerto de Auckland",
  bandera:"🇳🇿",
  codigo:"NZ",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248787",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248772",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247346",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247350"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Omán",
  puertoOrigen:"Puerto de Salalah",
  bandera:"🇴🇲",
  codigo:"OM",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247062",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247064",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247354",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247353"
  }
},
{
  continente:"EUROPA",
  pais:"Países Bajos",
  puertoOrigen:"Puerto de Rotterdam",
  bandera:"🇳🇱",
  codigo:"NL",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247905",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247900",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247376",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247410"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Pakistán",
  puertoOrigen:"Puerto de Karachi",
  bandera:"🇵🇰",
  codigo:"PK",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247080",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247076",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247414",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247412"
  }
},
{
  continente:"OCEANÍA",
  pais:"Palaos",
  puertoOrigen:"Puerto de Koror",
  bandera:"🇵🇼",
  codigo:"PW",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35247462",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247469"
  }
},
{
  continente:"AMÉRICA",
  pais:"Panamá",
  puertoOrigen:"Puerto de Balboa",
  bandera:"🇵🇦",
  codigo:"PA",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35247481",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247479"
  }
},
{
  continente:"OCEANÍA",
  pais:"Papúa Nueva Guinea",
  puertoOrigen:"Puerto de Lae",
  bandera:"🇵🇬",
  codigo:"PG",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248835",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248842",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247520",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247526"
  }
},
{
  continente:"EUROPA",
  pais:"Polonia",
  puertoOrigen:"Puerto de Gdansk",
  bandera:"🇵🇱",
  codigo:"PL",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247938",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247946",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247537",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247532"
  }
},
{
  continente:"EUROPA",
  pais:"Portugal",
  puertoOrigen:"Puerto de Lisboa",
  bandera:"🇵🇹",
  codigo:"PT",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248006",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247999",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247567",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247574"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Qatar",
  puertoOrigen:"Puerto de Doha",
  bandera:"🇶🇦",
  codigo:"QA",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247083",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247085",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247580",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247579"
  }
},
{
  continente:"EUROPA",
  pais:"Reino Unido",
  puertoOrigen:"Puerto de Felixstowe",
  bandera:"🇬🇧",
  codigo:"GB",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248043",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248058",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247607",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247608"
  }
},
{
  continente:"ÁFRICA",
  pais:"República del Congo",
  puertoOrigen:"Puerto Pointe-Noire",
  bandera:"🇨🇬",
  codigo:"CG",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249659",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249661",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247612",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247611"
  }
},
{
  continente:"ÁFRICA",
  pais:"República Democrática del Congo",
  puertoOrigen:"Puerto de Matadi",
  bandera:"🇨🇩",
  codigo:"CD",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249681",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249686",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247632",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247634"
  }
},
{
  continente:"AMÉRICA",
  pais:"República Dominicana",
  puertoOrigen:"Puerto de Santo Domingo",
  bandera:"🇩🇴",
  codigo:"DO",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872937",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872963",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247649",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247642"
  }
},
{
  continente:"EUROPA",
  pais:"Rumanía",
  puertoOrigen:"Puerto de Constanza",
  bandera:"🇷🇴",
  codigo:"RO",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248128",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248120",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247680",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247683"
  }
},
{
  continente:"EUROPA",
  pais:"Rusia",
  puertoOrigen:"Puerto de San Petersburgo",
  bandera:"🇷🇺",
  codigo:"RU",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35247692",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247686"
  }
},
{
  continente:"OCEANÍA",
  pais:"Samoa",
  puertoOrigen:"Puerto de Apia",
  bandera:"🇼🇸",
  codigo:"WS",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248881",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248880",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247734",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247741"
  }
},
{
  continente:"AMÉRICA",
  pais:"San Cristóbal y Nieves",
  puertoOrigen:"Puerto Basseterre",
  bandera:"🇰🇳",
  codigo:"KN",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246189",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246192",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247744",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247743"
  }
},
{
  continente:"AMÉRICA",
  pais:"San Vicente y las Granadinas",
  puertoOrigen:"Puerto de Kingstown",
  bandera:"🇻🇨",
  codigo:"VC",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246235",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246237",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247772",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247773"
  }
},
{
  continente:"AMÉRICA",
  pais:"Santa Lucía",
  puertoOrigen:"Puerto Castries",
  bandera:"🇱🇨",
  codigo:"LC",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246242",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246241",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247780",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247779"
  }
},
{
  continente:"ÁFRICA",
  pais:"Senegal",
  puertoOrigen:"Puerto Dakar",
  bandera:"🇸🇳",
  codigo:"SN",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34870579",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871357",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247799",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247800"
  }
},
{
  continente:"ÁFRICA",
  pais:"Seychelles",
  puertoOrigen:"Puerto Victoria",
  bandera:"🇸🇨",
  codigo:"SC",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34870579",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871634",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247802",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247801"
  }
},
{
  continente:"ÁFRICA",
  pais:"Sierra Leona",
  puertoOrigen:"Puerto Freetown",
  bandera:"🇸🇱",
  codigo:"SL",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871655",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871653",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247869",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247884"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Singapur",
  puertoOrigen:"Puerto de Singapur",
  bandera:"🇸🇬",
  codigo:"SG",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247149",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247143",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247898",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247897"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Siria",
  puertoOrigen:"Puerto Latakia",
  bandera:"🇸🇾",
  codigo:"SY",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247105",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247155",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247954",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247961"
  }
},
{
  continente:"ÁFRICA",
  pais:"Somalia",
  puertoOrigen:"Puerto de Mogadiscio",
  bandera:"🇸🇴",
  codigo:"SO",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871677",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871680",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247993",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247990"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Sri Lanka",
  puertoOrigen:"Puerto de Colombo",
  bandera:"🇱🇰",
  codigo:"LK",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247253",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247251",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248074",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248075"
  }
},
{
  continente:"ÁFRICA",
  pais:"Sudáfrica",
  puertoOrigen:"Puerto de Durban",
  bandera:"🇿🇦",
  codigo:"ZA",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871710",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871707",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248106",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248094"
  }
},
{
  continente:"EUROPA",
  pais:"Suecia",
  puertoOrigen:"Puerto de Estocolmo",
  bandera:"🇸🇪",
  codigo:"SE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248154",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248151",
    ref20:null,
    ref40:null
  }
},
{
  continente:"AMÉRICA",
  pais:"Surinam",
  puertoOrigen:"Puerto de Paramaribo",
  bandera:"🇸🇷",
  codigo:"SR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246274",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246275",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248156",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248157"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Tailandia",
  puertoOrigen:"Puerto de Laem Chabang",
  bandera:"🇹🇭",
  codigo:"TH",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247257",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247262",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248168",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248167"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Taiwán (China)",
  puertoOrigen:"Puerto de Kaohsiung",
  bandera:"🇹🇼",
  codigo:"TW",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35248230",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248232"
  }
},
{
  continente:"ÁFRICA",
  pais:"Tanzania",
  puertoOrigen:"Puerto de Dar es-Salam",
  bandera:"🇹🇿",
  codigo:"TZ",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871710",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871720",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248313",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248268"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Timor Oriental",
  puertoOrigen:"Puerto de Díli",
  bandera:"🇹🇱",
  codigo:"TL",
  destino:"Callao",
  tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35248326",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248328"
  }
},
{
  continente:"ÁFRICA",
  pais:"Togo",
  puertoOrigen:"Puerto de Lomé",
  bandera:"🇹🇬",
  codigo:"TG",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871753",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871747",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248356",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248343"
  }
},
{
  continente:"OCEANÍA",
  pais:"Tonga",
  puertoOrigen:"Puerto de Nukualofa",
  bandera:"🇹🇴",
  codigo:"TO",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248908",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248910",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248507",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248508"
  }
},
{
  continente:"AMÉRICA",
  pais:"Trinidad y Tobago",
  puertoOrigen:"Puerto de Puerto España",
  bandera:"🇹🇹",
  codigo:"TT",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246299",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246297",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248551",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248532"
  }
},
{
  continente:"ÁFRICA",
  pais:"Túnez",
  puertoOrigen:"Puerto de Túnez",
  bandera:"🇹🇳",
  codigo:"TN",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871763",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871765",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248679",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248686"
  }
},
{
  continente:"EUROPA",
  pais:"Turquía",
  puertoOrigen:"Puerto de Estambul",
  bandera:"🇹🇷",
  codigo:"TR",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248176",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248174",
    ref20:null,
    ref40:null
  }
},
{
  continente:"OCEANÍA",
  pais:"Tuvalu",
  puertoOrigen:"Puerto de Funafuti",
  bandera:"🇹🇻",
  codigo:"TV",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248965",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248952",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248758",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248756"
  }
},
{
  continente:"EUROPA",
  pais:"Ucrania",
  puertoOrigen:"Puerto de Odesa",
  bandera:"🇺🇦",
  codigo:"UA",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248222",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248229",
    ref20:null,
    ref40:null
  }
},
{
  continente:"AMÉRICA",
  pais:"Uruguay",
  puertoOrigen:"Puerto de Montevideo",
  bandera:"🇺🇾",
  codigo:"UY",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246361",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246384",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248843",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248845"
  }
},
{
  continente:"OCEANÍA",
  pais:"Vanuatu",
  puertoOrigen:"Puerto de Port Vila",
  bandera:"🇻🇺",
  codigo:"VU",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248967",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248970",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248864",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248849"
  }
},
{
  continente:"AMÉRICA",
  pais:"Venezuela",
  puertoOrigen:"Puerto de La Guaira",
  bandera:"🇻🇪",
  codigo:"VE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246393",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246391",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248918",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248920"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Vietnam",
  puertoOrigen:"Puerto de Ho Chi Minh",
  bandera:"🇻🇳",
  codigo:"VN",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247345",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247346",
    ref20:"https://www.searates.com/logistics-explorer/?id=35248946",
    ref40:"https://www.searates.com/logistics-explorer/?id=35248945"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO",
  pais:"Yemen",
  puertoOrigen:"Puerto de Adén",
  bandera:"🇾🇪",
  codigo:"YE",
  destino:"Callao",
  tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247364",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247366",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249023",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249021"
  }
}
]
