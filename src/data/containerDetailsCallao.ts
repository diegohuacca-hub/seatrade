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
  continente:"EUROPA", pais:"Albania", puertoOrigen:"Puerto de Durrës", codigo:"AL", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247364",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247366",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249023",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249021"
  }
},
{
  continente:"EUROPA", pais:"Alemania", puertoOrigen:"Puerto de Hamburgo", codigo:"DE", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247440",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247439",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249061",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249081"
  }
},
{
  continente:"ÁFRICA", pais:"Angola", puertoOrigen:"Puerto de Luanda", codigo:"AO", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249034",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249027",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249086",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249082"
  }
},
{
  continente:"AMÉRICA", pais:"Antigua y Barbuda", puertoOrigen:"Puerto de Saint John's", codigo:"AG", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871791",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871788",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249099",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249101"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Arabia Saudita", puertoOrigen:"Puerto de Jeddah", codigo:"SA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246404",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246401",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249115",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249113"
  }
},
{
  continente:"ÁFRICA", pais:"Argelia", puertoOrigen:"Puerto de Argelia", codigo:"DZ", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249054",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249058",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249131",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249132"
  }
},
{
  continente:"AMÉRICA", pais:"Argentina", puertoOrigen:"Puerto de Buenos Aires", codigo:"AR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871797",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871806",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249156",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249152"
  }
},
{
  continente:"OCEANÍA", pais:"Australia", puertoOrigen:"Puerto de Sídney", codigo:"AU", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248320",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248319",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249184",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249186"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Azerbaiyán", puertoOrigen:"Puerto de Bakú", codigo:"AZ", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246406",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246407",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249198",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249196"
  }
},
{
  continente:"AMÉRICA", pais:"Bahamas", puertoOrigen:"Puerto de Nassau", codigo:"BS", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871049",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871833",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249219",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249220"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Bahréin", puertoOrigen:"Puerto de Mina Salman", codigo:"BH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246483",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246464",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249227",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249226"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Bangladés", puertoOrigen:"Puerto de Chittagong", codigo:"BD", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246525",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246529",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249269",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249290"
  }
},
{
  continente:"AMÉRICA", pais:"Barbados", puertoOrigen:"Puerto de Bridgetown", codigo:"BB", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871089",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871880",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249309",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249291"
  }
},
{
  continente:"EUROPA", pais:"Bélgica", puertoOrigen:"Puerto de Amberes", codigo:"BE", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247447",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247456",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249323",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249325"
  }
},
{
  continente:"ÁFRICA", pais:"Benín", puertoOrigen:"Puerto de Cotonú", codigo:"BJ", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249089",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249088",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249329",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249327"
  }
},
{
  continente:"AMÉRICA", pais:"Brasil", puertoOrigen:"Puerto de Santos", codigo:"BR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871913",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871896",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249357",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249361"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Brunéi", puertoOrigen:"Puerto de Muara", codigo:"BN", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246543",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246541",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249387",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249369"
  }
},
{
  continente:"EUROPA", pais:"Bulgaria", puertoOrigen:"Puerto de Varna", codigo:"BG", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247488",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247482",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249426",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249427"
  }
},
{
  continente:"ÁFRICA", pais:"Cabo Verde", puertoOrigen:"Puerto Grande", codigo:"CV", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249094",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249097",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249429",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249428"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Camboya", puertoOrigen:"Puerto de Sihanoukville", codigo:"KH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246546",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246588",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249483",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249485"
  }
},
{
  continente:"ÁFRICA", pais:"Camerún", puertoOrigen:"Puerto de Duala", codigo:"CM", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249123",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249116",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249513",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249512"
  }
},
{
  continente:"AMÉRICA", pais:"Canadá", puertoOrigen:"Puerto de Vancouver", codigo:"CA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871930",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871934",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249528",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249531"
  }
},
{
  continente:"AMÉRICA", pais:"Chile", puertoOrigen:"Puerto de Valparaíso", codigo:"CL", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34871963",
    dry40:"https://www.searates.com/logistics-explorer/?id=34871950",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249540",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249535"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"China", puertoOrigen:"Puerto de Shanghái", codigo:"CH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246620",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246618",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249574",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249578"
  }
},
{
  continente:"EUROPA", pais:"Chipre", puertoOrigen:"Puerto de Limassol", codigo:"CY", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247499",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247513",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249600",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249599"
  }
},
{
  continente:"AMÉRICA", pais:"Colombia", puertoOrigen:"Puerto de Buenaventura", codigo:"CO", destino:"Callao", tarifas:{
    dry20:null,
    dry40:"https://www.searates.com/logistics-explorer/?id=35249668",
    ref20:null,
    ref40:"https://www.searates.com/logistics-explorer/?id=35249670"
  }
},
{
  continente:"ÁFRICA", pais:"Comoras", puertoOrigen:"Puerto de Moroni", codigo:"KM", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249127",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249129",
    ref20:"https://www.searates.com/logistics-explorer/?id=35249676",
    ref40:"https://www.searates.com/logistics-explorer/?id=35249675"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Corea del Norte", puertoOrigen:"Puerto de Nampo", codigo:"KP", destino:"Callao", tarifas:{
    dry20:"Restringido",
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=34871305",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871303"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Corea del Sur", puertoOrigen:"Puerto de Busan", codigo:"KR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246648",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246647",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871636",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871638"
  }
},
{
  continente:"ÁFRICA", pais:"Costa de Marfil", puertoOrigen:"Puerto de Abiyán", codigo:"CM", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249172",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249168",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871652",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871650"
  }
},
{
  continente:"AMÉRICA", pais:"Costa Rica", puertoOrigen:"Puerto Limón-Moín", codigo:"CR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872104",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872086",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871681",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871685"
  }
},
{
  continente:"EUROPA", pais:"Croacia", puertoOrigen:"Puerto de Rijeka", codigo:"HR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247548",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247543",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871703",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871701"
  }
},
{
  continente:"AMÉRICA", pais:"Cuba", puertoOrigen:"Puerto de La Habana", codigo:"CU", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872121",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872124",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871722",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871724"
  }
},
{
  continente:"ÁFRICA", pais:"Djibouti", puertoOrigen:"Puerto de Yibuti", codigo:"DJ", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249177",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249179",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871744",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871739"
  }
},
{
  continente:"AMÉRICA", pais:"Dominica", puertoOrigen:"Puerto de Roseau", codigo:"DM", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872148",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872147",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871766",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871767"
  }
},
{
  continente:"AMÉRICA", pais:"Ecuador", puertoOrigen:"Puerto de Guayaquil", codigo:"EC", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872151",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872167",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871780",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871779"
  }
},
{
  continente:"ÁFRICA", pais:"Egipto", puertoOrigen:"Puerto de Alejandría", codigo:"EG", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249201",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249199",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871814",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871817"
  }
},
{
  continente:"AMÉRICA", pais:"El Salvador", puertoOrigen:"Puerto de Acajutla", codigo:"ES", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872219",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872205",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871823",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871822"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Emiratos Árabes Unidos", puertoOrigen:"Puerto de Jebel Ali", codigo:"EAU", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246650",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246654",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871882",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871883"
  }
},
{
  continente:"ÁFRICA", pais:"Eritrea", puertoOrigen:"Puerto de Massawa", codigo:"ER", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249210",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249218",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871889",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871884"
  }
},
{
  continente:"EUROPA", pais:"Eslovenia", puertoOrigen:"Puerto de Koper", codigo:"SI", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247555",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247561",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871939",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871940"
  }
},
{
  continente:"EUROPA", pais:"España", puertoOrigen:"Puerto de Valencia", codigo:"ES", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247587",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247581",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871945",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871943"
  }
},
{
  continente:"AMÉRICA", pais:"Estados Unidos", puertoOrigen:"Puerto de Los Ángeles", codigo:"US", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872248",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872271",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872052",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872057"
  }
},
{
  continente:"EUROPA", pais:"Estonia", puertoOrigen:"Puerto de Tallin", codigo:"EE", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247602",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247606",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872076",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872074"
  }
},
{
  continente:"OCEANÍA", pais:"Fiji", puertoOrigen:"Puerto de Suva", codigo:"FJ", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248324",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248325",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872125",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872126"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Filipinas", puertoOrigen:"Puerto de Manila", codigo:"PH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246670",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246669",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872143",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872132"
  }
},
{
  continente:"EUROPA", pais:"Finlandia", puertoOrigen:"Puerto de Helsinki", codigo:"FI", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247620",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247614",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872179",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872180"
  }
},
{
  continente:"EUROPA", pais:"Francia", puertoOrigen:"Puerto de Marsella", codigo:"FR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247625",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247627",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872202",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872193"
  }
},
{
  continente:"ÁFRICA", pais:"Gabón", puertoOrigen:"Puerto de Owendo", codigo:"GA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249238",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249236",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872293",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872306"
  }
},
{
  continente:"ÁFRICA", pais:"Gambia", puertoOrigen:"Puerto de Banjul", codigo:"GM", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249263",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249264",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872315",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872313"
  }
},
{
  continente:"EUROPA", pais:"Georgia", puertoOrigen:"Puerto de Poti", codigo:"GE", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247657",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247650",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872365",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872366"
  }
},
{
  continente:"ÁFRICA", pais:"Ghana", puertoOrigen:"Puerto de Tema", codigo:"GH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249314",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249312",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872371",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872370"
  }
},
{
  continente:"AMÉRICA", pais:"Granada", puertoOrigen:"Puerto de Saint George's", codigo:"GD", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872332",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872317",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872437",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872440"
  }
},
{
  continente:"EUROPA", pais:"Grecia", puertoOrigen:"Puerto de El Pireo", codigo:"GR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247676",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247678",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872478",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872452"
  }
},
{
  continente:"AMÉRICA", pais:"Guatemala", puertoOrigen:"Puerto Quetzal", codigo:"GT", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872334",
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=34872548",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872588"
  }
},
{
  continente:"ÁFRICA", pais:"Guinea", puertoOrigen:"Puerto de Conakri", codigo:"GN", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249318",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249320",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872591",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872589"
  }
},
{
  continente:"ÁFRICA", pais:"Guinea-Bissau", puertoOrigen:"Puerto de Bissau", codigo:"GW", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249335",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249332",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872675",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872678"
  }
},
{
  continente:"AMÉRICA", pais:"Guyana", puertoOrigen:"Puerto de Georgetown", codigo:"GY", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872374",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872372",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872686",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872684"
  }
},
{
  continente:"AMÉRICA", pais:"Haití", puertoOrigen:"Puerto de Puerto Príncipe", codigo:"HT", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872374",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872431",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872969",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872976"
  }
},
{
  continente:"AMÉRICA", pais:"Honduras", puertoOrigen:"Puerto de Puerto Cortés", codigo:"HN", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872502",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872490",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246193",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246195"
  }
},
{
  continente:"EUROPA", pais:"Eslovenia", puertoOrigen:"Puerto de Koper", codigo:"SI", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247555",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247561",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871939",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871940"
  }
},
{
  continente:"EUROPA", pais:"España", puertoOrigen:"Puerto de Valencia", codigo:"ES", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247587",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247581",
    ref20:"https://www.searates.com/logistics-explorer/?id=34871945",
    ref40:"https://www.searates.com/logistics-explorer/?id=34871943"
  }
},
{
  continente:"AMÉRICA", pais:"Estados Unidos", puertoOrigen:"Puerto de Los Ángeles", codigo:"US", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872248",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872271",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872052",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872057"
  }
},
{
  continente:"EUROPA", pais:"Estonia", puertoOrigen:"Puerto de Tallin", codigo:"EE", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247602",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247606",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872076",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872074"
  }
},
{
  continente:"OCEANÍA", pais:"Fiji", puertoOrigen:"Puerto de Suva", codigo:"FJ", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248324",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248325",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872125",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872126"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Filipinas", puertoOrigen:"Puerto de Manila", codigo:"PH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35246670",
    dry40:"https://www.searates.com/logistics-explorer/?id=35246669",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872143",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872132"
  }
},
{
  continente:"EUROPA", pais:"Finlandia", puertoOrigen:"Puerto de Helsinki", codigo:"FI", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247620",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247614",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872179",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872180"
  }
},
{
  continente:"EUROPA", pais:"Francia", puertoOrigen:"Puerto de Marsella", codigo:"FR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247625",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247627",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872202",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872193"
  }
},
{
  continente:"ÁFRICA", pais:"Gabón", puertoOrigen:"Puerto de Owendo", codigo:"GA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249238",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249236",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872293",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872306"
  }
},
{
  continente:"ÁFRICA", pais:"Gambia", puertoOrigen:"Puerto de Banjul", codigo:"GM", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249263",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249264",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872315",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872313"
  }
},
{
  continente:"EUROPA", pais:"Georgia", puertoOrigen:"Puerto de Poti", codigo:"GE", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247657",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247650",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872365",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872366"
  }
},
{
  continente:"ÁFRICA", pais:"Ghana", puertoOrigen:"Puerto de Tema", codigo:"GH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249314",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249312",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872371",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872370"
  }
},
{
  continente:"AMÉRICA", pais:"Granada", puertoOrigen:"Puerto de Saint George's", codigo:"GD", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872332",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872317",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872437",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872440"
  }
},
{
  continente:"EUROPA", pais:"Grecia", puertoOrigen:"Puerto de El Pireo", codigo:"GR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247676",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247678",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872478",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872452"
  }
},
{
  continente:"AMÉRICA", pais:"Guatemala", puertoOrigen:"Puerto Quetzal", codigo:"GT", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872334",
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=34872548",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872588"
  }
},
{
  continente:"ÁFRICA", pais:"Guinea", puertoOrigen:"Puerto de Conakri", codigo:"GN", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249318",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249320",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872591",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872589"
  }
},
{
  continente:"ÁFRICA", pais:"Guinea-Bissau", puertoOrigen:"Puerto de Bissau", codigo:"GW", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249335",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249332",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872675",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872678"
  }
},
{
  continente:"AMÉRICA", pais:"Guyana", puertoOrigen:"Puerto de Georgetown", codigo:"GY", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872374",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872372",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872686",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872684"
  }
},
{
  continente:"AMÉRICA", pais:"Haití", puertoOrigen:"Puerto de Puerto Príncipe", codigo:"HT", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872374",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872431",
    ref20:"https://www.searates.com/logistics-explorer/?id=34872969",
    ref40:"https://www.searates.com/logistics-explorer/?id=34872976"
  }
},
{
  continente:"AMÉRICA", pais:"Honduras", puertoOrigen:"Puerto de Puerto Cortés", codigo:"HN", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872502",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872490",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246193",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246195"
  }
},
{
  continente:"ÁFRICA", pais:"Marruecos", puertoOrigen:"Puerto de Tánger Med", codigo:"MA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249436",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249454",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246813",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246811"
  }
},
{
  continente:"OCEANÍA", pais:"Islas Marshall", puertoOrigen:"Puerto de Majuro", codigo:"MH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248570",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248553",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246828",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246830"
  }
},
{
  continente:"ÁFRICA", pais:"Mauricio", puertoOrigen:"Puerto de Port Louis", codigo:"MU", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249518",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249515",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246854",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246853"
  }
},
{
  continente:"ÁFRICA", pais:"Mauritania", puertoOrigen:"Puerto de Nuakchot", codigo:"MR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249525",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249526",
    ref20:"https://www.searates.com/logistics-explorer/?id=35246912",
    ref40:"https://www.searates.com/logistics-explorer/?id=35246942"
  }
},
{
  continente:"AMÉRICA", pais:"México", puertoOrigen:"Puerto de Manzanillo", codigo:"MX", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872624",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872593",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247055",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247049"
  }
},
{
  continente:"OCEANÍA", pais:"Micronesia", puertoOrigen:"Puerto de Kolonia", codigo:"FM", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248673",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248675",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247065",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247068"
  }
},
{
  continente:"EUROPA", pais:"Montenegro", puertoOrigen:"Puerto de Bar", codigo:"ME", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247810",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247809",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247074",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247072"
  }
},
{
  continente:"ÁFRICA", pais:"Mozambique", puertoOrigen:"Puerto de Maputo", codigo:"MZ", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249546",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249541",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247088",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247089"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Myanmar", puertoOrigen:"Puerto de Yangon", codigo:"MM", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247057",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247056",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247129",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247096"
  }
},
{
  continente:"ÁFRICA", pais:"Namibia", puertoOrigen:"Puerto de Walvis Bay", codigo:"NA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249552",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249555",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247161",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247176"
  }
},
{
  continente:"OCEANÍA", pais:"Nauru", puertoOrigen:"Puerto de Aiwo", codigo:"NR", destino:"Callao", tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35247246",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247244"
  }
},
{
  continente:"AMÉRICA", pais:"Nicaragua", puertoOrigen:"Puerto de Corinto", codigo:"NI", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872656",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872666",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247268",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247275"
  }
},
{
  continente:"ÁFRICA", pais:"Nigeria", puertoOrigen:"Puerto de Lagos", codigo:"NG", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249645",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249628",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247292",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247290"
  }
},
{
  continente:"EUROPA", pais:"Noruega", puertoOrigen:"Puerto de Oslo", codigo:"NO", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247837",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247863",
    ref20:null,
    ref40:null
  }
},
{
  continente:"OCEANÍA", pais:"Nueva Zelanda", puertoOrigen:"Puerto de Auckland", codigo:"NZ", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248787",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248772",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247346",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247350"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Omán", puertoOrigen:"Puerto de Salalah", codigo:"OM", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247102",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247101",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247406",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247407"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Pakistán", puertoOrigen:"Puerto de Karachi", codigo:"PK", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247114",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247109",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247414",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247417"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Palestina", puertoOrigen:"Puerto de Gaza", codigo:"PS", destino:"Callao", tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
},
{
  continente:"AMÉRICA", pais:"Panamá", puertoOrigen:"Puerto de Balboa", codigo:"PA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872701",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872744",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247430",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247432"
  }
},
{
  continente:"OCEANÍA", pais:"Papúa Nueva Guinea", puertoOrigen:"Puerto de Lae", codigo:"PG", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248840",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248818",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247447",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247446"
  }
},
{
  continente:"AMÉRICA", pais:"Paraguay", puertoOrigen:"Puerto de Asunción", codigo:"PY", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872762",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872760",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247468",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247469"
  }
},
{
  continente:"AMÉRICA", pais:"Perú", puertoOrigen:"Callao", codigo:"PE", destino:"Callao", tarifas:{
    dry20:null, dry40:null, ref20:null, ref40:null
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Filipinas", puertoOrigen:"Puerto de Manila", codigo:"PH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247127",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247128",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247498",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247484"
  }
},
{
  continente:"EUROPA", pais:"Polonia", puertoOrigen:"Puerto de Gdynia", codigo:"PL", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247888",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247911",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247518",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247512"
  }
},
{
  continente:"EUROPA", pais:"Portugal", puertoOrigen:"Puerto de Lisboa", codigo:"PT", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247926",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247936",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247535",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247536"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Qatar", puertoOrigen:"Puerto de Doha", codigo:"QA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247141",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247144",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247556",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247553"
  }
},
{
  continente:"EUROPA", pais:"Reino Unido", puertoOrigen:"Puerto de Felixstowe", codigo:"GB", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247971",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247986",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247571",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247572"
  }
},
{
  continente:"AMÉRICA", pais:"República Dominicana", puertoOrigen:"Puerto Caucedo", codigo:"DO", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872804",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872805",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247587",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247589"
  }
},
{
  continente:"ÁFRICA", pais:"Ruanda", puertoOrigen:"Puerto de Dar es Salaam (Tanzania)", codigo:"RW", destino:"Callao", tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35247594",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247595"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Arabia Saudita", puertoOrigen:"Puerto de Jeddah", codigo:"SA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247163",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247164",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247606",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247604"
  }
},
{
  continente:"ÁFRICA", pais:"Senegal", puertoOrigen:"Puerto de Dakar", codigo:"SN", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249671",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249670",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247622",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247621"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Serbia", puertoOrigen:"Puerto de Novi Sad", codigo:"RS", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247994",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248011",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247638",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247640"
  }
},
{
  continente:"ÁFRICA", pais:"Seychelles", puertoOrigen:"Puerto de Victoria", codigo:"SC", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249691",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249689",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247657",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247654"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Singapur", puertoOrigen:"Puerto de Singapur", codigo:"SG", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247173",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247175",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247669",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247667"
  }
},
{
  continente:"ÁFRICA", pais:"Sudáfrica", puertoOrigen:"Puerto de Durban", codigo:"ZA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249751",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249755",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247681",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247680"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Corea del Sur", puertoOrigen:"Puerto de Busan", codigo:"KR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247205",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247198",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247701",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247704"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Sri Lanka", puertoOrigen:"Puerto de Colombo", codigo:"LK", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247216",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247214",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247712",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247721"
  }
},
{
  continente:"AMÉRICA", pais:"Surinam", puertoOrigen:"Puerto de Paramaribo", codigo:"SR", destino:"Callao", tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
},
{
  continente:"EUROPA", pais:"Suecia", puertoOrigen:"Puerto de Gotemburgo", codigo:"SE", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248041",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248035",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247731",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247728"
  }
},
{
  continente:"EUROPA", pais:"Suiza", puertoOrigen:"Puerto de Basilea", codigo:"CH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248066",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248051",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247743",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247741"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Siria", puertoOrigen:"Puerto de Latakia", codigo:"SY", destino:"Callao", tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Taiwán", puertoOrigen:"Puerto de Kaohsiung", codigo:"TW", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247229",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247226",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247759",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247761"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Tailandia", puertoOrigen:"Puerto de Laem Chabang", codigo:"TH", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247237",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247239",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247776",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247770"
  }
},
{
  continente:"ÁFRICA", pais:"Tanzania", puertoOrigen:"Puerto de Dar es Salaam", codigo:"TZ", destino:"Callao", tarifas:{
    dry20:null,
    dry40:null,
    ref20:"https://www.searates.com/logistics-explorer/?id=35247594",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247595"
  }
},
{
  continente:"AMÉRICA", pais:"Trinidad y Tobago", puertoOrigen:"Puerto de Port of Spain", codigo:"TT", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872856",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872852",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247791",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247794"
  }
},
{
  continente:"ÁFRICA", pais:"Túnez", puertoOrigen:"Puerto de Rades", codigo:"TN", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35249734",
    dry40:"https://www.searates.com/logistics-explorer/?id=35249728",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247813",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247816"
  }
},
{
  continente:"EUROPA", pais:"Turquía", puertoOrigen:"Puerto de Estambul", codigo:"TR", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248099",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248089",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247783",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247782"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Turkmenistán", puertoOrigen:"Puerto de Türkmenbaşy", codigo:"TM", destino:"Callao", tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
},
{
  continente:"EUROPA", pais:"Ucrania", puertoOrigen:"Puerto de Odessa", codigo:"UA", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35248144",
    dry40:"https://www.searates.com/logistics-explorer/?id=35248129",
    ref20:null,
    ref40:null
  }
},
{
  continente:"AMÉRICA", pais:"Uruguay", puertoOrigen:"Puerto de Montevideo", codigo:"UY", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=34872877",
    dry40:"https://www.searates.com/logistics-explorer/?id=34872867",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247880",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247878"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Uzbekistán", puertoOrigen:"Puerto vía Kazajistán", codigo:"UZ", destino:"Callao", tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Vietnam", puertoOrigen:"Puerto de Ho Chi Minh", codigo:"VN", destino:"Callao", tarifas:{
    dry20:"https://www.searates.com/logistics-explorer/?id=35247297",
    dry40:"https://www.searates.com/logistics-explorer/?id=35247298",
    ref20:"https://www.searates.com/logistics-explorer/?id=35247903",
    ref40:"https://www.searates.com/logistics-explorer/?id=35247906"
  }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Yemen", puertoOrigen:"Puerto de Áden", codigo:"YE", destino:"Callao", tarifas:{
    dry20:null,
    dry40:null,
    ref20:null,
    ref40:null
  }
}
]
