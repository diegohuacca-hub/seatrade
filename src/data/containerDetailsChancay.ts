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

export const CONTAINER_DETAILS_CHANCAY: ContainerDetails[] = [
{
  continente:"EUROPA", pais:"Albania", puertoOrigen:"Puerto de Durrës", codigo:"AL", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247768", dry40:"https://www.searates.com/logistics-explorer/?id=35247767", ref20:"https://www.searates.com/logistics-explorer/?id=35247774", ref40:"https://www.searates.com/logistics-explorer/?id=35247778" }
},
{
  continente:"EUROPA", pais:"Alemania", puertoOrigen:"Puerto de Hamburgo", codigo:"DE", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247794", dry40:"https://www.searates.com/logistics-explorer/?id=35247797", ref20:"https://www.searates.com/logistics-explorer/?id=35247792", ref40:"https://www.searates.com/logistics-explorer/?id=35247789" }
},
{
  continente:"ÁFRICA", pais:"Angola", puertoOrigen:"Puerto de Luanda", codigo:"AO", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249912", dry40:"https://www.searates.com/logistics-explorer/?id=35249903", ref20:"https://www.searates.com/logistics-explorer/?id=34870744", ref40:"https://www.searates.com/logistics-explorer/?id=35249912" }
},
{
  continente:"AMÉRICA", pais:"Antigua y Barbuda", puertoOrigen:"Puerto de Saint John's", codigo:"AG", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872185", dry40:"https://www.searates.com/logistics-explorer/?id=34872187", ref20:"https://www.searates.com/logistics-explorer/?id=34872182", ref40:"https://www.searates.com/logistics-explorer/?id=34872181" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Arabia Saudita", puertoOrigen:"Puerto de Jeddah", codigo:"SA", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246630", dry40:"https://www.searates.com/logistics-explorer/?id=35246631", ref20:"https://www.searates.com/logistics-explorer/?id=35246629", ref40:"https://www.searates.com/logistics-explorer/?id=35246628" }
},
{
  continente:"ÁFRICA", pais:"Argelia", puertoOrigen:"Puerto de Argel", codigo:"DZ", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249926", dry40:"https://www.searates.com/logistics-explorer/?id=35249929", ref20:"https://www.searates.com/logistics-explorer/?id=34870803", ref40:"https://www.searates.com/logistics-explorer/?id=35249925" }
},
{
  continente:"AMÉRICA", pais:"Argentina", puertoOrigen:"Puerto de Buenos Aires", codigo:"AR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872261", dry40:"https://www.searates.com/logistics-explorer/?id=34872240", ref20:"https://www.searates.com/logistics-explorer/?id=34872294", ref40:"https://www.searates.com/logistics-explorer/?id=34872295" }
},
{
  continente:"OCEANÍA", pais:"Australia", puertoOrigen:"Puerto de Sídney", codigo:"AU", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249311", dry40:"https://www.searates.com/logistics-explorer/?id=35249313", ref20:"https://www.searates.com/logistics-explorer/?id=35249308", ref40:"https://www.searates.com/logistics-explorer/?id=35249237" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Azerbaiyán", puertoOrigen:"Puerto de Bakú", codigo:"AZ", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246635", dry40:"https://www.searates.com/logistics-explorer/?id=35246634", ref20:"https://www.searates.com/logistics-explorer/?id=35246637", ref40:"https://www.searates.com/logistics-explorer/?id=35246645" }
},
{
  continente:"AMÉRICA", pais:"Bahamas", puertoOrigen:"Puerto de Nassau", codigo:"BS", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872304", dry40:"https://www.searates.com/logistics-explorer/?id=34872308", ref20:"https://www.searates.com/logistics-explorer/?id=34872303", ref40:"https://www.searates.com/logistics-explorer/?id=34872302" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Bahréin", puertoOrigen:"Puerto de Mina Salman", codigo:"BH", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246672", dry40:"https://www.searates.com/logistics-explorer/?id=35246681", ref20:"https://www.searates.com/logistics-explorer/?id=35246655", ref40:"https://www.searates.com/logistics-explorer/?id=35246651" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Bangladés", puertoOrigen:"Puerto de Chittagong", codigo:"BD", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246686", dry40:"https://www.searates.com/logistics-explorer/?id=35246683", ref20:"https://www.searates.com/logistics-explorer/?id=35246689", ref40:"https://www.searates.com/logistics-explorer/?id=35246691" }
},
{
  continente:"AMÉRICA", pais:"Barbados", puertoOrigen:"Puerto de Bridgetown", codigo:"BB", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872312", dry40:"https://www.searates.com/logistics-explorer/?id=34872311", ref20:"https://www.searates.com/logistics-explorer/?id=34872314", ref40:"https://www.searates.com/logistics-explorer/?id=34872316" }
},
{
  continente:"EUROPA", pais:"Bélgica", puertoOrigen:"Puerto de Amberes", codigo:"BE", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247831", dry40:"https://www.searates.com/logistics-explorer/?id=35247804", ref20:"https://www.searates.com/logistics-explorer/?id=35247843", ref40:"https://www.searates.com/logistics-explorer/?id=35247850" }
},
{
  continente:"ÁFRICA", pais:"Benín", puertoOrigen:"Puerto de Cotonú", codigo:"BJ", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249937", dry40:"https://www.searates.com/logistics-explorer/?id=35249933", ref20:"https://www.searates.com/logistics-explorer/?id=34870831", ref40:"https://www.searates.com/logistics-explorer/?id=35249937" }
},
{
  continente:"AMÉRICA", pais:"Brasil", puertoOrigen:"Puerto de Santos", codigo:"BR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872396", dry40:"https://www.searates.com/logistics-explorer/?id=34872409", ref20:"https://www.searates.com/logistics-explorer/?id=34872387", ref40:"https://www.searates.com/logistics-explorer/?id=34872376" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Brunéi", puertoOrigen:"Puerto de Muara", codigo:"BN", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246712", dry40:"https://www.searates.com/logistics-explorer/?id=35246714", ref20:"https://www.searates.com/logistics-explorer/?id=35246710", ref40:"https://www.searates.com/logistics-explorer/?id=35246701" }
},
{
  continente:"EUROPA", pais:"Bulgaria", puertoOrigen:"Puerto de Varna", codigo:"BG", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247860", dry40:"https://www.searates.com/logistics-explorer/?id=35247861", ref20:"https://www.searates.com/logistics-explorer/?id=35247859", ref40:"https://www.searates.com/logistics-explorer/?id=35247858" }
},
{
  continente:"ÁFRICA", pais:"Cabo Verde", puertoOrigen:"Puerto Grande", codigo:"CV", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249968", dry40:"https://www.searates.com/logistics-explorer/?id=35249976", ref20:"https://www.searates.com/logistics-explorer/?id=34871012", ref40:"https://www.searates.com/logistics-explorer/?id=35249965" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Camboya", puertoOrigen:"Puerto de Sihanoukville", codigo:"KH", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246720", dry40:"https://www.searates.com/logistics-explorer/?id=35246718", ref20:"https://www.searates.com/logistics-explorer/?id=35246726", ref40:"https://www.searates.com/logistics-explorer/?id=35246733" }
},
{
  continente:"ÁFRICA", pais:"Camerún", puertoOrigen:"Puerto de Duala", codigo:"CM", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249994", dry40:"https://www.searates.com/logistics-explorer/?id=35249997", ref20:"https://www.searates.com/logistics-explorer/?id=34871041", ref40:"https://www.searates.com/logistics-explorer/?id=35249999" }
},
{
  continente:"AMÉRICA", pais:"Canadá", puertoOrigen:"Puerto de Vancouver", codigo:"CA", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872420", dry40:"https://www.searates.com/logistics-explorer/?id=34872419", ref20:"https://www.searates.com/logistics-explorer/?id=34872421", ref40:"https://www.searates.com/logistics-explorer/?id=34872436" }
},
{
  continente:"AMÉRICA", pais:"Chile", puertoOrigen:"Puerto de Valparaíso", codigo:"CL", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872467", dry40:"https://www.searates.com/logistics-explorer/?id=34872481", ref20:"https://www.searates.com/logistics-explorer/?id=34872453", ref40:"https://www.searates.com/logistics-explorer/?id=34872451" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"China", puertoOrigen:"Puerto de Shanghái", codigo:"CH", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246744", dry40:"https://www.searates.com/logistics-explorer/?id=35246750", ref20:"https://www.searates.com/logistics-explorer/?id=35246740", ref40:"https://www.searates.com/logistics-explorer/?id=35246738" }
},
{
  continente:"EUROPA", pais:"Chipre", puertoOrigen:"Puerto de Limassol", codigo:"CY", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247879", dry40:"https://www.searates.com/logistics-explorer/?id=35247871", ref20:"https://www.searates.com/logistics-explorer/?id=35247886", ref40:"https://www.searates.com/logistics-explorer/?id=35247892" }
},
{
  continente:"AMÉRICA", pais:"Colombia", puertoOrigen:"Puerto de Buenaventura", codigo:"CO", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872556", dry40:"https://www.searates.com/logistics-explorer/?id=34872549", ref20:"https://www.searates.com/logistics-explorer/?id=34872574", ref40:"https://www.searates.com/logistics-explorer/?id=34872583" }
},
{
  continente:"ÁFRICA", pais:"Comoras", puertoOrigen:"Puerto de Moroni", codigo:"KM", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250045", dry40:"https://www.searates.com/logistics-explorer/?id=35250046", ref20:"https://www.searates.com/logistics-explorer/?id=34871038", ref40:"https://www.searates.com/logistics-explorer/?id=35250003" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Corea del Norte", puertoOrigen:"Puerto de Nampo", codigo:"KP", destino:"Chancay",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Corea del Sur", puertoOrigen:"Puerto de Busan", codigo:"KR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249767", dry40:"https://www.searates.com/logistics-explorer/?id=35249769", ref20:"https://www.searates.com/logistics-explorer/?id=35249765", ref40:"https://www.searates.com/logistics-explorer/?id=35249764" }
},
{
  continente:"ÁFRICA", pais:"Costa de Marfil", puertoOrigen:"Puerto de Abiyán", codigo:"CM", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35312197", dry40:"https://www.searates.com/logistics-explorer/?id=35312191", ref20:"https://www.searates.com/logistics-explorer/?id=35312361", ref40:"https://www.searates.com/logistics-explorer/?id=35312188" }
},
{
  continente:"AMÉRICA", pais:"Costa Rica", puertoOrigen:"Puerto Limón-Moín", codigo:"CR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872618", dry40:"https://www.searates.com/logistics-explorer/?id=34872650", ref20:"https://www.searates.com/logistics-explorer/?id=34872592", ref40:"https://www.searates.com/logistics-explorer/?id=34872590" }
},
{
  continente:"EUROPA", pais:"Croacia", puertoOrigen:"Puerto de Rijeka", codigo:"HR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247933", dry40:"https://www.searates.com/logistics-explorer/?id=35247940", ref20:"https://www.searates.com/logistics-explorer/?id=35247925", ref40:"https://www.searates.com/logistics-explorer/?id=35247918" }
},
{
  continente:"AMÉRICA", pais:"Cuba", puertoOrigen:"Puerto de La Habana", codigo:"CU", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872674", dry40:"https://www.searates.com/logistics-explorer/?id=34872673", ref20:"https://www.searates.com/logistics-explorer/?id=34872676", ref40:"https://www.searates.com/logistics-explorer/?id=34872677" }
},
{
  continente:"ÁFRICA", pais:"Djibouti", puertoOrigen:"Puerto de Yibuti", codigo:"DJ", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35312179", dry40:"https://www.searates.com/logistics-explorer/?id=35312181", ref20:"https://www.searates.com/logistics-explorer/?id=34871342", ref40:"https://www.searates.com/logistics-explorer/?id=35312184" }
},
{
  continente:"AMÉRICA", pais:"Dominica", puertoOrigen:"Puerto de Roseau", codigo:"DM", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872731", dry40:"https://www.searates.com/logistics-explorer/?id=34872730", ref20:"https://www.searates.com/logistics-explorer/?id=34872729", ref40:"https://www.searates.com/logistics-explorer/?id=34872698" }
},
{
  continente:"AMÉRICA", pais:"Ecuador", puertoOrigen:"Puerto de Guayaquil", codigo:"EC", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872733", dry40:"https://www.searates.com/logistics-explorer/?id=34872746", ref20:"https://www.searates.com/logistics-explorer/?id=34872760", ref40:"https://www.searates.com/logistics-explorer/?id=34872761" }
},
{
  continente:"ÁFRICA", pais:"Egipto", puertoOrigen:"Puerto de Alejandría", codigo:"EG", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35312197", dry40:"https://www.searates.com/logistics-explorer/?id=35312191", ref20:"https://www.searates.com/logistics-explorer/?id=34871347", ref40:"https://www.searates.com/logistics-explorer/?id=35312188" }
},
{
  continente:"AMÉRICA", pais:"El Salvador", puertoOrigen:"Puerto de Acajutla", codigo:"SV", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872811", dry40:"https://www.searates.com/logistics-explorer/?id=34872826", ref20:"https://www.searates.com/logistics-explorer/?id=34872808", ref40:"https://www.searates.com/logistics-explorer/?id=34872807" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Emiratos Árabes Unidos", puertoOrigen:"Puerto de Jebel Ali", codigo:"EAU", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246809", dry40:"https://www.searates.com/logistics-explorer/?id=35246810", ref20:"https://www.searates.com/logistics-explorer/?id=35246805", ref40:"https://www.searates.com/logistics-explorer/?id=35246802" }
},
{
  continente:"ÁFRICA", pais:"Eritrea", puertoOrigen:"Puerto de Massawa", codigo:"ER", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871427", dry40:"https://www.searates.com/logistics-explorer/?id=34871437", ref20:"https://www.searates.com/logistics-explorer/?id=34871417", ref40:"https://www.searates.com/logistics-explorer/?id=34871425" }
},
{
  continente:"EUROPA", pais:"Eslovenia", puertoOrigen:"Puerto de Koper", codigo:"SI", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247956", dry40:"https://www.searates.com/logistics-explorer/?id=35247949", ref20:"https://www.searates.com/logistics-explorer/?id=35247963", ref40:"https://www.searates.com/logistics-explorer/?id=35247974" }
},
{
  continente:"EUROPA", pais:"España", puertoOrigen:"Puerto de Valencia", codigo:"ES", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247982", dry40:"https://www.searates.com/logistics-explorer/?id=35247984", ref20:"https://www.searates.com/logistics-explorer/?id=35247980", ref40:"https://www.searates.com/logistics-explorer/?id=35247979" }
},
{
  continente:"AMÉRICA", pais:"Estados Unidos", puertoOrigen:"Puerto de Los Ángeles", codigo:"US", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872946", dry40:"https://www.searates.com/logistics-explorer/?id=34872924", ref20:"https://www.searates.com/logistics-explorer/?id=34872968", ref40:"https://www.searates.com/logistics-explorer/?id=34872975" }
},
{
  continente:"EUROPA", pais:"Estonia", puertoOrigen:"Puerto de Tallin", codigo:"EE", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247992", dry40:"https://www.searates.com/logistics-explorer/?id=35247989", ref20:"https://www.searates.com/logistics-explorer/?id=35247995", ref40:"https://www.searates.com/logistics-explorer/?id=35248004" }
},
{
  continente:"OCEANÍA", pais:"Fiji", puertoOrigen:"Puerto de Suva", codigo:"FJ", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249321", dry40:"https://www.searates.com/logistics-explorer/?id=35249319", ref20:"https://www.searates.com/logistics-explorer/?id=35249324", ref40:"https://www.searates.com/logistics-explorer/?id=35249326" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Filipinas", puertoOrigen:"Puerto de Manila", codigo:"PH", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246817", dry40:"https://www.searates.com/logistics-explorer/?id=35246815", ref20:"https://www.searates.com/logistics-explorer/?id=35246819", ref40:"https://www.searates.com/logistics-explorer/?id=35246821" }
},
{
  continente:"EUROPA", pais:"Finlandia", puertoOrigen:"Puerto de Helsinki", codigo:"FI", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248073", dry40:"https://www.searates.com/logistics-explorer/?id=35248050", ref20:"https://www.searates.com/logistics-explorer/?id=35248034", ref40:"https://www.searates.com/logistics-explorer/?id=35248014" }
},
{
  continente:"EUROPA", pais:"Francia", puertoOrigen:"Puerto de Marsella", codigo:"FR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248105", dry40:"https://www.searates.com/logistics-explorer/?id=35248119", ref20:"https://www.searates.com/logistics-explorer/?id=35248121", ref40:"https://www.searates.com/logistics-explorer/?id=35248122" }
},
{
  continente:"ÁFRICA", pais:"Gabón", puertoOrigen:"Puerto de Owendo Libreville", codigo:"GA", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871440", dry40:"https://www.searates.com/logistics-explorer/?id=34871438", ref20:"https://www.searates.com/logistics-explorer/?id=34871441", ref40:"https://www.searates.com/logistics-explorer/?id=34871442" }
},
{
  continente:"ÁFRICA", pais:"Gambia", puertoOrigen:"Puerto de Banjul", codigo:"GM", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871461", dry40:"https://www.searates.com/logistics-explorer/?id=34871457", ref20:"https://www.searates.com/logistics-explorer/?id=34871456", ref40:"https://www.searates.com/logistics-explorer/?id=34871444" }
},
{
  continente:"EUROPA", pais:"Georgia", puertoOrigen:"Puerto de Poti", codigo:"GE", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248147", dry40:"https://www.searates.com/logistics-explorer/?id=35248143", ref20:"https://www.searates.com/logistics-explorer/?id=35248142", ref40:"https://www.searates.com/logistics-explorer/?id=35248133" }
},
{
  continente:"ÁFRICA", pais:"Ghana", puertoOrigen:"Puerto de Tema", codigo:"GH", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871469", dry40:"https://www.searates.com/logistics-explorer/?id=34871513", ref20:"https://www.searates.com/logistics-explorer/?id=34871514", ref40:"https://www.searates.com/logistics-explorer/?id=34871515" }
},
{
  continente:"AMÉRICA", pais:"Granada", puertoOrigen:"Puerto de Saint George's", codigo:"GD", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249834", dry40:"https://www.searates.com/logistics-explorer/?id=35249835", ref20:"https://www.searates.com/logistics-explorer/?id=35249833", ref40:"https://www.searates.com/logistics-explorer/?id=35249831" }
},
{
  continente:"EUROPA", pais:"Grecia", puertoOrigen:"Puerto de El Pireo", codigo:"GR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248158", dry40:"https://www.searates.com/logistics-explorer/?id=35248159", ref20:"https://www.searates.com/logistics-explorer/?id=35248160", ref40:"https://www.searates.com/logistics-explorer/?id=35248161" }
},
{
  continente:"AMÉRICA", pais:"Guatemala", puertoOrigen:"Puerto Quetzal", codigo:"GT", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249816", dry40:"https://www.searates.com/logistics-explorer/?id=35249786", ref20:"https://www.searates.com/logistics-explorer/?id=35249822", ref40:"https://www.searates.com/logistics-explorer/?id=35249823" }
},
{
  continente:"ÁFRICA", pais:"Guinea", puertoOrigen:"Puerto de Conakri", codigo:"GN", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871521", dry40:"https://www.searates.com/logistics-explorer/?id=34871523", ref20:"https://www.searates.com/logistics-explorer/?id=34871518", ref40:"https://www.searates.com/logistics-explorer/?id=34871517" }
},
{
  continente:"ÁFRICA", pais:"Guinea-Bissau", puertoOrigen:"Puerto de Bissau", codigo:"GW", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871525", dry40:"https://www.searates.com/logistics-explorer/?id=34871524", ref20:"https://www.searates.com/logistics-explorer/?id=34871526", ref40:"https://www.searates.com/logistics-explorer/?id=34871528" }
},
{
  continente:"AMÉRICA", pais:"Guyana", puertoOrigen:"Puerto de Georgetown", codigo:"GY", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34873002", dry40:"https://www.searates.com/logistics-explorer/?id=34873004", ref20:"https://www.searates.com/logistics-explorer/?id=34873001", ref40:"https://www.searates.com/logistics-explorer/?id=34872999" }
},
{
  continente:"AMÉRICA", pais:"Haití", puertoOrigen:"Puerto de Puerto Príncipe", codigo:"HT", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246159", dry40:"https://www.searates.com/logistics-explorer/?id=35246179", ref20:"https://www.searates.com/logistics-explorer/?id=35246188", ref40:"https://www.searates.com/logistics-explorer/?id=35246190" }
},
{
  continente:"AMÉRICA", pais:"Honduras", puertoOrigen:"Puerto Cortés", codigo:"HN", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246211", dry40:"https://www.searates.com/logistics-explorer/?id=35246223", ref20:"https://www.searates.com/logistics-explorer/?id=35246201", ref40:"https://www.searates.com/logistics-explorer/?id=35246194" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Hong Kong", puertoOrigen:"Puerto de Hong Kong", codigo:"HK", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246835", dry40:"https://www.searates.com/logistics-explorer/?id=35246839", ref20:"https://www.searates.com/logistics-explorer/?id=35246829", ref40:"https://www.searates.com/logistics-explorer/?id=35246827" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"India", puertoOrigen:"Puerto de Nhava Sheva", codigo:"IN", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246893", dry40:"https://www.searates.com/logistics-explorer/?id=35246877", ref20:"https://www.searates.com/logistics-explorer/?id=35246925", ref40:"https://www.searates.com/logistics-explorer/?id=35246944" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Indonesia", puertoOrigen:"Puerto de Yakarta", codigo:"ID", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247052", dry40:"https://www.searates.com/logistics-explorer/?id=35247048", ref20:"https://www.searates.com/logistics-explorer/?id=35247045", ref40:"https://www.searates.com/logistics-explorer/?id=35246944" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Irán", puertoOrigen:"Puerto de Bandar Abbas", codigo:"IR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247058", dry40:"https://www.searates.com/logistics-explorer/?id=35247059", ref20:"https://www.searates.com/logistics-explorer/?id=35247060", ref40:"https://www.searates.com/logistics-explorer/?id=35247063" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Iraq", puertoOrigen:"Puerto de Umm Qasr", codigo:"IQ", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247073", dry40:"https://www.searates.com/logistics-explorer/?id=35247075", ref20:"https://www.searates.com/logistics-explorer/?id=35247071", ref40:"https://www.searates.com/logistics-explorer/?id=35247069" }
},
{
  continente:"EUROPA", pais:"Irlanda", puertoOrigen:"Puerto de Dublín", codigo:"IE", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248209", dry40:"https://www.searates.com/logistics-explorer/?id=35248190", ref20:"https://www.searates.com/logistics-explorer/?id=35248177", ref40:"https://www.searates.com/logistics-explorer/?id=35248175" }
},
{
  continente:"EUROPA", pais:"Islandia", puertoOrigen:"Puerto de Reykjavík", codigo:"IS", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248234", dry40:"https://www.searates.com/logistics-explorer/?id=35248402", ref20:"https://www.searates.com/logistics-explorer/?id=35248403", ref40:"https://www.searates.com/logistics-explorer/?id=35248404" }
},
{
  continente:"OCEANÍA", pais:"Islas Salomón", puertoOrigen:"Puerto de Honiara", codigo:"SB", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249336", dry40:"https://www.searates.com/logistics-explorer/?id=35249337", ref20:"https://www.searates.com/logistics-explorer/?id=35249333", ref40:"https://www.searates.com/logistics-explorer/?id=35249331" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Israel", puertoOrigen:"Puerto de Ashdod", codigo:"IL", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247097", dry40:"https://www.searates.com/logistics-explorer/?id=35247095", ref20:"https://www.searates.com/logistics-explorer/?id=35247100", ref40:"https://www.searates.com/logistics-explorer/?id=35247101" }
},
{
  continente:"EUROPA", pais:"Italia", puertoOrigen:"Puerto de Génova", codigo:"IT", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248475", dry40:"https://www.searates.com/logistics-explorer/?id=35248502", ref20:"https://www.searates.com/logistics-explorer/?id=35248449", ref40:"https://www.searates.com/logistics-explorer/?id=35248439" }
},
{
  continente:"AMÉRICA", pais:"Jamaica", puertoOrigen:"Puerto de Kingston", codigo:"JM", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246236", dry40:"https://www.searates.com/logistics-explorer/?id=35246234", ref20:"https://www.searates.com/logistics-explorer/?id=35246239", ref40:"https://www.searates.com/logistics-explorer/?id=35246240" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Japón", puertoOrigen:"Puerto de Yokohama", codigo:"JP", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247131", dry40:"https://www.searates.com/logistics-explorer/?id=35247137", ref20:"https://www.searates.com/logistics-explorer/?id=35247124", ref40:"https://www.searates.com/logistics-explorer/?id=35247118" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Jordania", puertoOrigen:"Puerto de Aqaba", codigo:"JO", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247151", dry40:"https://www.searates.com/logistics-explorer/?id=35247150", ref20:"https://www.searates.com/logistics-explorer/?id=35247166", ref40:"https://www.searates.com/logistics-explorer/?id=35247172" }
},
{
  continente:"ÁFRICA", pais:"Kenia", puertoOrigen:"Puerto de Mombasa", codigo:"KE", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871564", dry40:"https://www.searates.com/logistics-explorer/?id=34871566", ref20:"https://www.searates.com/logistics-explorer/?id=34871561", ref40:"https://www.searates.com/logistics-explorer/?id=34871560" }
},
{
  continente:"OCEANÍA", pais:"Kiribati", puertoOrigen:"Puerto de Tarawa Island", codigo:"KI", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249362", dry40:"https://www.searates.com/logistics-explorer/?id=35249358", ref20:"https://www.searates.com/logistics-explorer/?id=35249363", ref40:"https://www.searates.com/logistics-explorer/?id=35249367" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Kuwait", puertoOrigen:"Puerto de Shuwaikh", codigo:"KW", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247242", dry40:"https://www.searates.com/logistics-explorer/?id=35247243", ref20:"https://www.searates.com/logistics-explorer/?id=35247182", ref40:"https://www.searates.com/logistics-explorer/?id=35247181" }
},
{
  continente:"EUROPA", pais:"Letonia", puertoOrigen:"Puerto de Riga", codigo:"LV", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248530", dry40:"https://www.searates.com/logistics-explorer/?id=35248520", ref20:"https://www.searates.com/logistics-explorer/?id=35248550", ref40:"https://www.searates.com/logistics-explorer/?id=35248552" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Líbano", puertoOrigen:"Puerto de Beirut", codigo:"LB", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247250", dry40:"https://www.searates.com/logistics-explorer/?id=35247245", ref20:"https://www.searates.com/logistics-explorer/?id=35247254", ref40:"https://www.searates.com/logistics-explorer/?id=35247255" }
},
{
  continente:"ÁFRICA", pais:"Liberia", puertoOrigen:"Puerto de Monrovia", codigo:"LR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871579", dry40:"https://www.searates.com/logistics-explorer/?id=34871578", ref20:"https://www.searates.com/logistics-explorer/?id=34871580", ref40:"https://www.searates.com/logistics-explorer/?id=34871615" }
},
{
  continente:"ÁFRICA", pais:"Libia", puertoOrigen:"Puerto de Trípoli", codigo:"LY", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871623", dry40:"https://www.searates.com/logistics-explorer/?id=34871631", ref20:"https://www.searates.com/logistics-explorer/?id=34871622", ref40:"https://www.searates.com/logistics-explorer/?id=34871619" }
},
{
  continente:"EUROPA", pais:"Lituania", puertoOrigen:"Puerto de Klaipėda", codigo:"LT", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248609", dry40:"https://www.searates.com/logistics-explorer/?id=35248607", ref20:"https://www.searates.com/logistics-explorer/?id=35248606", ref40:"https://www.searates.com/logistics-explorer/?id=35248590" }
},
{
  continente:"ÁFRICA", pais:"Madagascar", puertoOrigen:"Puerto de Toamasina", codigo:"MG", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871635", dry40:"https://www.searates.com/logistics-explorer/?id=34871632", ref20:"https://www.searates.com/logistics-explorer/?id=34871640", ref40:"https://www.searates.com/logistics-explorer/?id=34871641" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Malasia", puertoOrigen:"Puerto Klang", codigo:"MY", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247291", dry40:"https://www.searates.com/logistics-explorer/?id=35247293", ref20:"https://www.searates.com/logistics-explorer/?id=35247273", ref40:"https://www.searates.com/logistics-explorer/?id=35247267" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Maldivas", puertoOrigen:"Puerto de Malé", codigo:"MV", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247301", dry40:"https://www.searates.com/logistics-explorer/?id=35247299", ref20:"https://www.searates.com/logistics-explorer/?id=35247304", ref40:"https://www.searates.com/logistics-explorer/?id=35247305" }
},
{
  continente:"EUROPA", pais:"Malta", puertoOrigen:"Puerto de La Valeta", codigo:"MT", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248609", dry40:"https://www.searates.com/logistics-explorer/?id=35248618", ref20:"https://www.searates.com/logistics-explorer/?id=35248635", ref40:"https://www.searates.com/logistics-explorer/?id=35248655" }
},
{
  continente:"ÁFRICA", pais:"Marruecos", puertoOrigen:"Puerto de Tánger Med", codigo:"MA", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871654", dry40:"https://www.searates.com/logistics-explorer/?id=34871656", ref20:"https://www.searates.com/logistics-explorer/?id=34871651", ref40:"https://www.searates.com/logistics-explorer/?id=34871648" }
},
{
  continente:"OCEANÍA", pais:"Marshall Islands", puertoOrigen:"Puerto de Majuro", codigo:"MH", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249394", dry40:"https://www.searates.com/logistics-explorer/?id=35249402", ref20:"https://www.searates.com/logistics-explorer/?id=35249391", ref40:"https://www.searates.com/logistics-explorer/?id=35249388" }
},
{
  continente:"ÁFRICA", pais:"Mauricio", puertoOrigen:"Puerto de Port Louis", codigo:"MU", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871678", dry40:"https://www.searates.com/logistics-explorer/?id=34871670", ref20:"https://www.searates.com/logistics-explorer/?id=34871682", ref40:"https://www.searates.com/logistics-explorer/?id=34871684" }
},
{
  continente:"ÁFRICA", pais:"Mauritania", puertoOrigen:"Puerto de Nuakchot", codigo:"MR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871706", dry40:"https://www.searates.com/logistics-explorer/?id=34871709", ref20:"https://www.searates.com/logistics-explorer/?id=34871704", ref40:"https://www.searates.com/logistics-explorer/?id=34871702" }
},
{
  continente:"AMÉRICA", pais:"México", puertoOrigen:"Puerto de Manzanillo", codigo:"MX", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246257", dry40:"https://www.searates.com/logistics-explorer/?id=35246270", ref20:"https://www.searates.com/logistics-explorer/?id=35246247", ref40:"https://www.searates.com/logistics-explorer/?id=35246246" }
},
{
  continente:"OCEANÍA", pais:"Micronesia", puertoOrigen:"Puerto de Kolonia", codigo:"FM", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249435", dry40:"https://www.searates.com/logistics-explorer/?id=35249432", ref20:"https://www.searates.com/logistics-explorer/?id=35249455", ref40:"https://www.searates.com/logistics-explorer/?id=35249455" }
},
{
  continente:"EUROPA", pais:"Montenegro", puertoOrigen:"Puerto de Bar", codigo:"ME", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248704", dry40:"https://www.searates.com/logistics-explorer/?id=35248705", ref20:"https://www.searates.com/logistics-explorer/?id=35248685", ref40:"https://www.searates.com/logistics-explorer/?id=35248677" }
},
{
  continente:"ÁFRICA", pais:"Mozambique", puertoOrigen:"Puerto de Maputo", codigo:"MZ", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871721", dry40:"https://www.searates.com/logistics-explorer/?id=34871719", ref20:"https://www.searates.com/logistics-explorer/?id=34871723", ref40:"https://www.searates.com/logistics-explorer/?id=34871725" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Myanmar", puertoOrigen:"Puerto de Yangon", codigo:"MM", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247318", dry40:"https://www.searates.com/logistics-explorer/?id=35247320", ref20:"https://www.searates.com/logistics-explorer/?id=35247317", ref40:"https://www.searates.com/logistics-explorer/?id=35247305" }
},
{
  continente:"ÁFRICA", pais:"Namibia", puertoOrigen:"Puerto de Walvis Bay", codigo:"NA", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871742", dry40:"https://www.searates.com/logistics-explorer/?id=34871746", ref20:"https://www.searates.com/logistics-explorer/?id=34871740", ref40:"https://www.searates.com/logistics-explorer/?id=34871738" }
},
{
  continente:"OCEANÍA", pais:"Nauru", puertoOrigen:"Puerto de Aiwo", codigo:"NR", destino:"Chancay",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"AMÉRICA", pais:"Nicaragua", puertoOrigen:"Puerto de Corinto", codigo:"NI", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246291", dry40:"https://www.searates.com/logistics-explorer/?id=35246282", ref20:"https://www.searates.com/logistics-explorer/?id=35246296", ref40:"https://www.searates.com/logistics-explorer/?id=35246298" }
},
{
  continente:"ÁFRICA", pais:"Nigeria", puertoOrigen:"Puerto de Lagos", codigo:"NG", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871760", dry40:"https://www.searates.com/logistics-explorer/?id=34871759", ref20:"https://www.searates.com/logistics-explorer/?id=34871761", ref40:"https://www.searates.com/logistics-explorer/?id=34871762" }
},
{
  continente:"EUROPA", pais:"Noruega", puertoOrigen:"Puerto de Oslo", codigo:"NO", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248719", dry40:"https://www.searates.com/logistics-explorer/?id=35248712", ref20:"https://www.searates.com/logistics-explorer/?id=35248740", ref40:"https://www.searates.com/logistics-explorer/?id=35248741" }
},
{
  continente:"OCEANÍA", pais:"Nueva Zelanda", puertoOrigen:"Puerto de Auckland", codigo:"NZ", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249520", dry40:"https://www.searates.com/logistics-explorer/?id=35249522", ref20:"https://www.searates.com/logistics-explorer/?id=35249517", ref40:"https://www.searates.com/logistics-explorer/?id=35249514" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Omán", puertoOrigen:"Puerto de Salalah", codigo:"OM", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247325", dry40:"https://www.searates.com/logistics-explorer/?id=35247324", ref20:"https://www.searates.com/logistics-explorer/?id=35247329", ref40:"https://www.searates.com/logistics-explorer/?id=35247330" }
},
{
  continente:"EUROPA", pais:"Países Bajos", puertoOrigen:"Puerto de Róterdam", codigo:"NL", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248796", dry40:"https://www.searates.com/logistics-explorer/?id=35248815", ref20:"https://www.searates.com/logistics-explorer/?id=35248773", ref40:"https://www.searates.com/logistics-explorer/?id=35248757" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Pakistán", puertoOrigen:"Puerto de Karachi", codigo:"PK", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247347", dry40:"https://www.searates.com/logistics-explorer/?id=35247348", ref20:"https://www.searates.com/logistics-explorer/?id=35247343", ref40:"https://www.searates.com/logistics-explorer/?id=35247334" }
},
{
  continente:"OCEANÍA", pais:"Palau", puertoOrigen:"Puerto de Koror", codigo:"PW", destino:"Chancay",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"AMÉRICA", pais:"Panamá", puertoOrigen:"Puerto de Balboa", codigo:"PA", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246336", dry40:"https://www.searates.com/logistics-explorer/?id=35246320", ref20:"https://www.searates.com/logistics-explorer/?id=35246304", ref40:"https://www.searates.com/logistics-explorer/?id=35246302" }
},
{
  continente:"OCEANÍA", pais:"Papúa Nueva Guinea", puertoOrigen:"Puerto de Lae", codigo:"PG", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249532", dry40:"https://www.searates.com/logistics-explorer/?id=35249530", ref20:"https://www.searates.com/logistics-explorer/?id=35249534", ref40:"https://www.searates.com/logistics-explorer/?id=35249538" }
},
{
  continente:"EUROPA", pais:"Polonia", puertoOrigen:"Puerto de Gdansk", codigo:"PL", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248909", dry40:"https://www.searates.com/logistics-explorer/?id=35248907", ref20:"https://www.searates.com/logistics-explorer/?id=35248911", ref40:"https://www.searates.com/logistics-explorer/?id=35248919" }
},
{
  continente:"EUROPA", pais:"Portugal", puertoOrigen:"Puerto de Lisboa", codigo:"PT", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35248982", dry40:"https://www.searates.com/logistics-explorer/?id=35248996", ref20:"https://www.searates.com/logistics-explorer/?id=35248951", ref40:"https://www.searates.com/logistics-explorer/?id=35248947" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Qatar", puertoOrigen:"Puerto de Doha", codigo:"QA", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247360", dry40:"https://www.searates.com/logistics-explorer/?id=35247352", ref20:"https://www.searates.com/logistics-explorer/?id=35247365", ref40:"https://www.searates.com/logistics-explorer/?id=35247367" }
},
{
  continente:"EUROPA", pais:"Reino Unido", puertoOrigen:"Puerto de Felixstowe", codigo:"UK", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249076", dry40:"https://www.searates.com/logistics-explorer/?id=35249037", ref20:"https://www.searates.com/logistics-explorer/?id=35249084", ref40:"https://www.searates.com/logistics-explorer/?id=35249092" }
},
{
  continente:"ÁFRICA", pais:"República del Congo", puertoOrigen:"Puerto de Pointe-Noire", codigo:"CG", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871776", dry40:"https://www.searates.com/logistics-explorer/?id=34871778", ref20:"https://www.searates.com/logistics-explorer/?id=34871775", ref40:"https://www.searates.com/logistics-explorer/?id=34871768" }
},
{
  continente:"ÁFRICA", pais:"República Democrática del Congo", puertoOrigen:"Puerto de Matadi", codigo:"CD", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871790", dry40:"https://www.searates.com/logistics-explorer/?id=34871789", ref20:"https://www.searates.com/logistics-explorer/?id=34871793", ref40:"https://www.searates.com/logistics-explorer/?id=34871802" }
},
{
  continente:"AMÉRICA", pais:"República Dominicana", puertoOrigen:"Puerto de Santo Domingo", codigo:"DO", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246355", dry40:"https://www.searates.com/logistics-explorer/?id=35246377", ref20:"https://www.searates.com/logistics-explorer/?id=35246389", ref40:"https://www.searates.com/logistics-explorer/?id=35246390" }
},
{
  continente:"EUROPA", pais:"Rumanía", puertoOrigen:"Puerto de Constanza", codigo:"RO", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249117", dry40:"https://www.searates.com/logistics-explorer/?id=35249125", ref20:"https://www.searates.com/logistics-explorer/?id=35249114", ref40:"https://www.searates.com/logistics-explorer/?id=35249104" }
},
{
  continente:"EUROPA", pais:"Rusia", puertoOrigen:"Puerto de San Petersburgo", codigo:"RU", destino:"Chancay",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"OCEANÍA", pais:"Samoa", puertoOrigen:"Puerto de Apia", codigo:"WS", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249551", dry40:"https://www.searates.com/logistics-explorer/?id=35249553", ref20:"https://www.searates.com/logistics-explorer/?id=35249548", ref40:"https://www.searates.com/logistics-explorer/?id=35249544" }
},
{
  continente:"AMÉRICA", pais:"San Cristóbal y Nieves", puertoOrigen:"Puerto de Basseterre", codigo:"KN", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246402", dry40:"https://www.searates.com/logistics-explorer/?id=35246403", ref20:"https://www.searates.com/logistics-explorer/?id=35246399", ref40:"https://www.searates.com/logistics-explorer/?id=35246396" }
},
{
  continente:"AMÉRICA", pais:"San Vicente y las Granadinas", puertoOrigen:"Puerto de Kingstown", codigo:"VC", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246521", dry40:"https://www.searates.com/logistics-explorer/?id=35246514", ref20:"https://www.searates.com/logistics-explorer/?id=35246522", ref40:"https://www.searates.com/logistics-explorer/?id=35246523" }
},
{
  continente:"AMÉRICA", pais:"Santa Lucía", puertoOrigen:"Puerto de Castries", codigo:"LC", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246540", dry40:"https://www.searates.com/logistics-explorer/?id=35246542", ref20:"https://www.searates.com/logistics-explorer/?id=35246538", ref40:"https://www.searates.com/logistics-explorer/?id=35246534" }
},
{
  continente:"ÁFRICA", pais:"Senegal", puertoOrigen:"Puerto de Dakar", codigo:"SN", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871818", dry40:"https://www.searates.com/logistics-explorer/?id=34871820", ref20:"https://www.searates.com/logistics-explorer/?id=34871815", ref40:"https://www.searates.com/logistics-explorer/?id=34871812" }
},
{
  continente:"ÁFRICA", pais:"Seychelles", puertoOrigen:"Puerto de Victoria", codigo:"SC", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871835", dry40:"https://www.searates.com/logistics-explorer/?id=34871834", ref20:"https://www.searates.com/logistics-explorer/?id=34871837", ref40:"https://www.searates.com/logistics-explorer/?id=34871878" }
},
{
  continente:"ÁFRICA", pais:"Sierra Leona", puertoOrigen:"Puerto de Freetown", codigo:"SL", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871933", dry40:"https://www.searates.com/logistics-explorer/?id=34871938", ref20:"https://www.searates.com/logistics-explorer/?id=34871932", ref40:"https://www.searates.com/logistics-explorer/?id=34871927" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Singapur", puertoOrigen:"Puerto de Singapur", codigo:"SG", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247438", dry40:"https://www.searates.com/logistics-explorer/?id=35247441", ref20:"https://www.searates.com/logistics-explorer/?id=35247413", ref40:"https://www.searates.com/logistics-explorer/?id=35247411" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Siria", puertoOrigen:"Puerto de Latakia", codigo:"SY", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247474", dry40:"https://www.searates.com/logistics-explorer/?id=35247464", ref20:"https://www.searates.com/logistics-explorer/?id=35247492", ref40:"https://www.searates.com/logistics-explorer/?id=35247505" }
},
{
  continente:"ÁFRICA", pais:"Somalia", puertoOrigen:"Puerto de Mogadiscio", codigo:"SO", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34871946", dry40:"https://www.searates.com/logistics-explorer/?id=34871944", ref20:"https://www.searates.com/logistics-explorer/?id=34871973", ref40:"https://www.searates.com/logistics-explorer/?id=34871977" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Sri Lanka", puertoOrigen:"Puerto de Colombo", codigo:"LK", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247621", dry40:"https://www.searates.com/logistics-explorer/?id=35247622", ref20:"https://www.searates.com/logistics-explorer/?id=35247613", ref40:"https://www.searates.com/logistics-explorer/?id=35247610" }
},
{
  continente:"ÁFRICA", pais:"Sudáfrica", puertoOrigen:"Puerto de Durban", codigo:"ZA", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872045", dry40:"https://www.searates.com/logistics-explorer/?id=34872046", ref20:"https://www.searates.com/logistics-explorer/?id=34872001", ref40:"https://www.searates.com/logistics-explorer/?id=34871995" }
},
{
  continente:"EUROPA", pais:"Suecia", puertoOrigen:"Puerto de Estocolmo", codigo:"SE", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249159", dry40:"https://www.searates.com/logistics-explorer/?id=35249151", ref20:"https://www.searates.com/logistics-explorer/?id=35249162", ref40:"https://www.searates.com/logistics-explorer/?id=35249173" }
},
{
  continente:"AMÉRICA", pais:"Surinam", puertoOrigen:"Puerto de Paramaribo", codigo:"SR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246549", dry40:"https://www.searates.com/logistics-explorer/?id=35246547", ref20:"https://www.searates.com/logistics-explorer/?id=35246551", ref40:"https://www.searates.com/logistics-explorer/?id=35246552" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Tailandia", puertoOrigen:"Puerto de Laem Chabang", codigo:"TH", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247644", dry40:"https://www.searates.com/logistics-explorer/?id=35247637", ref20:"https://www.searates.com/logistics-explorer/?id=35247652", ref40:"https://www.searates.com/logistics-explorer/?id=35247659" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Taiwán", puertoOrigen:"Puerto de Kaohsiung", codigo:"TW", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247685", dry40:"https://www.searates.com/logistics-explorer/?id=35247682", ref20:"https://www.searates.com/logistics-explorer/?id=35247679", ref40:"https://www.searates.com/logistics-explorer/?id=35247677" }
},
{
  continente:"ÁFRICA", pais:"Tanzania", puertoOrigen:"Puerto de Dar es-Salam", codigo:"TZ", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872065", dry40:"https://www.searates.com/logistics-explorer/?id=34872062", ref20:"https://www.searates.com/logistics-explorer/?id=34872075", ref40:"https://www.searates.com/logistics-explorer/?id=34872077" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Timor Oriental", puertoOrigen:"Puerto de Díli", codigo:"TL", destino:"Chancay",
  tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null }
},
{
  continente:"ÁFRICA", pais:"Togo", puertoOrigen:"Puerto de Lomé", codigo:"TG", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872120", dry40:"https://www.searates.com/logistics-explorer/?id=34872123", ref20:"https://www.searates.com/logistics-explorer/?id=34872119", ref40:"https://www.searates.com/logistics-explorer/?id=34872102" }
},
{
  continente:"OCEANÍA", pais:"Tonga", puertoOrigen:"Puerto de Nuku'alofa", codigo:"TO", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249607", dry40:"https://www.searates.com/logistics-explorer/?id=35249576", ref20:"https://www.searates.com/logistics-explorer/?id=35249629", ref40:"https://www.searates.com/logistics-explorer/?id=35249650" }
},
{
  continente:"AMÉRICA", pais:"Trinidad y Tobago", puertoOrigen:"Puerto España", codigo:"TT", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246560", dry40:"https://www.searates.com/logistics-explorer/?id=35246561", ref20:"https://www.searates.com/logistics-explorer/?id=35246558", ref40:"https://www.searates.com/logistics-explorer/?id=35246556" }
},
{
  continente:"ÁFRICA", pais:"Túnez", puertoOrigen:"Puerto de Túnez", codigo:"TN", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872128", dry40:"https://www.searates.com/logistics-explorer/?id=34872127", ref20:"https://www.searates.com/logistics-explorer/?id=34872130", ref40:"https://www.searates.com/logistics-explorer/?id=34872131" }
},
{
  continente:"EUROPA", pais:"Turquía", puertoOrigen:"Puerto de Estambul", codigo:"TR", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249188", dry40:"https://www.searates.com/logistics-explorer/?id=35249191", ref20:"https://www.searates.com/logistics-explorer/?id=35249185", ref40:"https://www.searates.com/logistics-explorer/?id=35249180" }
},
{
  continente:"OCEANÍA", pais:"Tuvalu", puertoOrigen:"Puerto de Funafuti", codigo:"TV", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249689", dry40:"https://www.searates.com/logistics-explorer/?id=35249692", ref20:"https://www.searates.com/logistics-explorer/?id=35249685", ref40:"https://www.searates.com/logistics-explorer/?id=35249678" }
},
{
  continente:"EUROPA", pais:"Ucrania", puertoOrigen:"Puerto de Odesa", codigo:"UA", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249207", dry40:"https://www.searates.com/logistics-explorer/?id=35249200", ref20:"https://www.searates.com/logistics-explorer/?id=35249209", ref40:"https://www.searates.com/logistics-explorer/?id=35249217" }
},
{
  continente:"AMÉRICA", pais:"Uruguay", puertoOrigen:"Puerto de Montevideo", codigo:"UY", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246580", dry40:"https://www.searates.com/logistics-explorer/?id=35246570", ref20:"https://www.searates.com/logistics-explorer/?id=35246586", ref40:"https://www.searates.com/logistics-explorer/?id=35246589" }
},
{
  continente:"OCEANÍA", pais:"Vanuatu", puertoOrigen:"Puerto de Port Vila", codigo:"VU", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249727", dry40:"https://www.searates.com/logistics-explorer/?id=35249695", ref20:"https://www.searates.com/logistics-explorer/?id=35249730", ref40:"https://www.searates.com/logistics-explorer/?id=35249733" }
},
{
  continente:"AMÉRICA", pais:"Venezuela", puertoOrigen:"Puerto de La Guaira", codigo:"VE", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35246601", dry40:"https://www.searates.com/logistics-explorer/?id=35246608", ref20:"https://www.searates.com/logistics-explorer/?id=35246611", ref40:"https://www.searates.com/logistics-explorer/?id=35246614" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Vietnam", puertoOrigen:"Puerto de Ho Chi Minh", codigo:"VN", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247685", dry40:"https://www.searates.com/logistics-explorer/?id=35247711", ref20:"https://www.searates.com/logistics-explorer/?id=35247712", ref40:"https://www.searates.com/logistics-explorer/?id=35247731" }
},
{
  continente:"ASIA Y ORIENTE MEDIO", pais:"Yemen", puertoOrigen:"Puerto de Adén", codigo:"YE", destino:"Chancay",
  tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35247760", dry40:"https://www.searates.com/logistics-explorer/?id=35247766", ref20:"https://www.searates.com/logistics-explorer/?id=35247745", ref40:"https://www.searates.com/logistics-explorer/?id=35247742" }
}
]

