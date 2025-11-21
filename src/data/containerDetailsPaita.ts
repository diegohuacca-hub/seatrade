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
  { continente:"EUROPA", pais:"Albania", puertoOrigen:"Puerto de Durrës", codigo:"AL", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383182", dry40:"https://www.searates.com/logistics-explorer/?id=35383189", ref20:"https://www.searates.com/logistics-explorer/?id=35383179", ref40:"https://www.searates.com/logistics-explorer/?id=35383170" } },

  { continente:"EUROPA", pais:"Alemania", puertoOrigen:"Puerto de Hamburgo", codigo:"DE", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383234", dry40:"https://www.searates.com/logistics-explorer/?id=35383226", ref20:"https://www.searates.com/logistics-explorer/?id=35383224", ref40:"https://www.searates.com/logistics-explorer/?id=35383222" } },

  { continente:"EUROPA", pais:"Andorra", puertoOrigen:"SIN PUERTO MARÍTIMO", codigo:"AD", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"EUROPA", pais:"Austria", puertoOrigen:"Puerto de Viena (Fluvial)", codigo:"AT", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"EUROPA", pais:"Bélgica", puertoOrigen:"Puerto de Amberes", codigo:"BE", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383252", dry40:"https://www.searates.com/logistics-explorer/?id=35383258", ref20:"https://www.searates.com/logistics-explorer/?id=35383269", ref40:"https://www.searates.com/logistics-explorer/?id=35383271" } },

  { continente:"EUROPA", pais:"Bulgaria", puertoOrigen:"Puerto de Varna", codigo:"BG", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383284", dry40:"https://www.searates.com/logistics-explorer/?id=35383278", ref20:"https://www.searates.com/logistics-explorer/?id=35383277", ref40:"https://www.searates.com/logistics-explorer/?id=35383275" } },

  { continente:"EUROPA", pais:"Chipre", puertoOrigen:"Puerto de Limassol", codigo:"CY", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383288", dry40:"https://www.searates.com/logistics-explorer/?id=35383301", ref20:"https://www.searates.com/logistics-explorer/?id=35383305", ref40:"https://www.searates.com/logistics-explorer/?id=35383308" } },

  { continente:"EUROPA", pais:"Croacia", puertoOrigen:"Puerto de Rijeka", codigo:"HR", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383445", dry40:"https://www.searates.com/logistics-explorer/?id=35383434", ref20:"https://www.searates.com/logistics-explorer/?id=35383334", ref40:"https://www.searates.com/logistics-explorer/?id=35383327" } },

  { continente:"EUROPA", pais:"Dinamarca", puertoOrigen:"Puerto de Copenhague", codigo:"DK", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"EUROPA", pais:"Eslovaquia", puertoOrigen:"Puerto Fluvial Bratislava", codigo:"SK", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"EUROPA", pais:"Eslovenia", puertoOrigen:"Puerto de Koper", codigo:"SI", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383626", dry40:"https://www.searates.com/logistics-explorer/?id=35383674", ref20:"https://www.searates.com/logistics-explorer/?id=35383685", ref40:"https://www.searates.com/logistics-explorer/?id=35383694" } },

  { continente:"EUROPA", pais:"España", puertoOrigen:"Puerto de Valencia", codigo:"ES", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383760", dry40:"https://www.searates.com/logistics-explorer/?id=35383771", ref20:"https://www.searates.com/logistics-explorer/?id=35383731", ref40:"https://www.searates.com/logistics-explorer/?id=35383707" } },

  { continente:"EUROPA", pais:"Estonia", puertoOrigen:"Puerto de Tallin", codigo:"EE", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383842", dry40:"https://www.searates.com/logistics-explorer/?id=35383804", ref20:"https://www.searates.com/logistics-explorer/?id=35383892", ref40:"https://www.searates.com/logistics-explorer/?id=35383911" } },

  { continente:"EUROPA", pais:"Finlandia", puertoOrigen:"Puerto de Helsinki", codigo:"FI", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35383990", dry40:"https://www.searates.com/logistics-explorer/?id=35383980", ref20:"https://www.searates.com/logistics-explorer/?id=35383964", ref40:"https://www.searates.com/logistics-explorer/?id=35383939" } },

  { continente:"EUROPA", pais:"Francia", puertoOrigen:"Puerto de Marsella", codigo:"FR", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35384033", dry40:"https://www.searates.com/logistics-explorer/?id=35384049", ref20:"https://www.searates.com/logistics-explorer/?id=35384064", ref40:"https://www.searates.com/logistics-explorer/?id=35384079" } },

      { continente:"AMÉRICA", pais:"Antigua y Barbuda", puertoOrigen:"Puerto de Saint John's", codigo:"AG", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872185", dry40:"https://www.searates.com/logistics-explorer/?id=34872187", ref20:"https://www.searates.com/logistics-explorer/?id=34872182", ref40:"https://www.searates.com/logistics-explorer/?id=34872181" } },

  { continente:"AMÉRICA", pais:"Argentina", puertoOrigen:"Puerto de Buenos Aires", codigo:"AR", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872261", dry40:"https://www.searates.com/logistics-explorer/?id=34872240", ref20:"https://www.searates.com/logistics-explorer/?id=34872294", ref40:"https://www.searates.com/logistics-explorer/?id=34872295" } },

  { continente:"AMÉRICA", pais:"Bahamas", puertoOrigen:"Puerto de Nassau", codigo:"BS", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872304", dry40:"https://www.searates.com/logistics-explorer/?id=34872308", ref20:"https://www.searates.com/logistics-explorer/?id=34872303", ref40:"https://www.searates.com/logistics-explorer/?id=34872302" } },

  { continente:"AMÉRICA", pais:"Barbados", puertoOrigen:"Puerto de Bridgetown", codigo:"BB", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872312", dry40:"https://www.searates.com/logistics-explorer/?id=34872311", ref20:"https://www.searates.com/logistics-explorer/?id=34872314", ref40:"https://www.searates.com/logistics-explorer/?id=34872316" } },

  { continente:"AMÉRICA", pais:"Belice", puertoOrigen:"Puerto de Belice City", codigo:"BZ", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"AMÉRICA", pais:"Bolivia (vía Arica)", puertoOrigen:"Puerto de Arica - Chile", codigo:"BO", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"AMÉRICA", pais:"Brasil", puertoOrigen:"Puerto de Santos", codigo:"BR", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872396", dry40:"https://www.searates.com/logistics-explorer/?id=34872409", ref20:"https://www.searates.com/logistics-explorer/?id=34872387", ref40:"https://www.searates.com/logistics-explorer/?id=34872376" } },

  { continente:"AMÉRICA", pais:"Canadá", puertoOrigen:"Puerto de Vancouver", codigo:"CA", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872420", dry40:"https://www.searates.com/logistics-explorer/?id=34872419", ref20:"https://www.searates.com/logistics-explorer/?id=34872421", ref40:"https://www.searates.com/logistics-explorer/?id=34872436" } },

  { continente:"AMÉRICA", pais:"Chile", puertoOrigen:"Puerto de Valparaíso", codigo:"CL", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872467", dry40:"https://www.searates.com/logistics-explorer/?id=34872481", ref20:"https://www.searates.com/logistics-explorer/?id=34872453", ref40:"https://www.searates.com/logistics-explorer/?id=34872451" } },

  { continente:"AMÉRICA", pais:"Colombia", puertoOrigen:"Puerto de Buenaventura", codigo:"CO", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872556", dry40:"https://www.searates.com/logistics-explorer/?id=34872549", ref20:"https://www.searates.com/logistics-explorer/?id=34872574", ref40:"https://www.searates.com/logistics-explorer/?id=34872583" } },

  { continente:"AMÉRICA", pais:"Costa Rica", puertoOrigen:"Puerto Limón-Moín", codigo:"CR", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872618", dry40:"https://www.searates.com/logistics-explorer/?id=34872650", ref20:"https://www.searates.com/logistics-explorer/?id=34872592", ref40:"https://www.searates.com/logistics-explorer/?id=34872590" } },

  { continente:"AMÉRICA", pais:"Cuba", puertoOrigen:"Puerto de La Habana", codigo:"CU", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872674", dry40:"https://www.searates.com/logistics-explorer/?id=34872673", ref20:"https://www.searates.com/logistics-explorer/?id=34872676", ref40:"https://www.searates.com/logistics-explorer/?id=34872677" } },

  { continente:"AMÉRICA", pais:"Dominica", puertoOrigen:"Puerto de Roseau", codigo:"DM", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872731", dry40:"https://www.searates.com/logistics-explorer/?id=34872730", ref20:"https://www.searates.com/logistics-explorer/?id=34872729", ref40:"https://www.searates.com/logistics-explorer/?id=34872698" } },

  { continente:"AMÉRICA", pais:"Ecuador", puertoOrigen:"Puerto de Guayaquil", codigo:"EC", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872733", dry40:"https://www.searates.com/logistics-explorer/?id=34872746", ref20:"https://www.searates.com/logistics-explorer/?id=34872760", ref40:"https://www.searates.com/logistics-explorer/?id=34872761" } },

  { continente:"AMÉRICA", pais:"El Salvador", puertoOrigen:"Puerto de Acajutla", codigo:"SV", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872811", dry40:"https://www.searates.com/logistics-explorer/?id=34872826", ref20:"https://www.searates.com/logistics-explorer/?id=34872808", ref40:"https://www.searates.com/logistics-explorer/?id=34872807" } },

  { continente:"AMÉRICA", pais:"Estados Unidos", puertoOrigen:"Puerto de Los Ángeles", codigo:"US", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=34872946", dry40:"https://www.searates.com/logistics-explorer/?id=34872924", ref20:"https://www.searates.com/logistics-explorer/?id=34872968", ref40:"https://www.searates.com/logistics-explorer/?id=34872975" } },

  { continente:"AMÉRICA", pais:"Granada", puertoOrigen:"Puerto de Saint George's", codigo:"GD", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249834", dry40:"https://www.searates.com/logistics-explorer/?id=35249835", ref20:"https://www.searates.com/logistics-explorer/?id=35249833", ref40:"https://www.searates.com/logistics-explorer/?id=35249831" } },

  { continente:"AMÉRICA", pais:"Guatemala", puertoOrigen:"Puerto Quetzal", codigo:"GT", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249816", dry40:"https://www.searates.com/logistics-explorer/?id=35249786", ref20:"https://www.searates.com/logistics-explorer/?id=35249822", ref40:"https://www.searates.com/logistics-explorer/?id=35249823" } },

      { continente:"ÁFRICA", pais:"Angola", puertoOrigen:"Puerto de Luanda", codigo:"AO", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249912", dry40:"https://www.searates.com/logistics-explorer/?id=35249903", ref20:"https://www.searates.com/logistics-explorer/?id=34870744", ref40:"https://www.searates.com/logistics-explorer/?id=35249912" } },

  { continente:"ÁFRICA", pais:"Argelia", puertoOrigen:"Puerto de Argel", codigo:"DZ", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249926", dry40:"https://www.searates.com/logistics-explorer/?id=35249929", ref20:"https://www.searates.com/logistics-explorer/?id=34870803", ref40:"https://www.searates.com/logistics-explorer/?id=35249925" } },

  { continente:"ÁFRICA", pais:"Benín", puertoOrigen:"Puerto de Cotonú", codigo:"BJ", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249937", dry40:"https://www.searates.com/logistics-explorer/?id=35249933", ref20:"https://www.searates.com/logistics-explorer/?id=34870831", ref40:"https://www.searates.com/logistics-explorer/?id=35249937" } },

  { continente:"ÁFRICA", pais:"Botsuana (Vía Durban)", puertoOrigen:"Puerto de Durban - Sudáfrica", codigo:"BW", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Burkina Faso (vía Tema)", puertoOrigen:"Puerto de Tema - Ghana", codigo:"BF", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Cabo Verde", puertoOrigen:"Puerto Grande", codigo:"CV", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249968", dry40:"https://www.searates.com/logistics-explorer/?id=35249976", ref20:"https://www.searates.com/logistics-explorer/?id=34871012", ref40:"https://www.searates.com/logistics-explorer/?id=35249965" } },

  { continente:"ÁFRICA", pais:"Camerún", puertoOrigen:"Puerto de Duala", codigo:"CM", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35249994", dry40:"https://www.searates.com/logistics-explorer/?id=35249997", ref20:"https://www.searates.com/logistics-explorer/?id=34871041", ref40:"https://www.searates.com/logistics-explorer/?id=35249999" } },

  { continente:"ÁFRICA", pais:"Chad (vía Camerún)", puertoOrigen:"Puerto de Duala - Camerún", codigo:"TD", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Comoras", puertoOrigen:"Puerto de Moroni", codigo:"KM", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250045", dry40:"https://www.searates.com/logistics-explorer/?id=35250046", ref20:"https://www.searates.com/logistics-explorer/?id=34871038", ref40:"https://www.searates.com/logistics-explorer/?id=35250003" } },

  { continente:"ÁFRICA", pais:"Congo", puertoOrigen:"Puerto de Pointe-Noire", codigo:"CG", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Costa de Marfil", puertoOrigen:"Puerto de Abiyán", codigo:"CI", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250059", dry40:"https://www.searates.com/logistics-explorer/?id=35250066", ref20:"https://www.searates.com/logistics-explorer/?id=34871051", ref40:"https://www.searates.com/logistics-explorer/?id=35250068" } },

  { continente:"ÁFRICA", pais:"Egipto", puertoOrigen:"Puerto de Alejandría", codigo:"EG", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250111", dry40:"https://www.searates.com/logistics-explorer/?id=35250105", ref20:"https://www.searates.com/logistics-explorer/?id=34871141", ref40:"https://www.searates.com/logistics-explorer/?id=35250099" } },

  { continente:"ÁFRICA", pais:"Etiopía (vía Yibuti)", puertoOrigen:"Puerto de Djibouti", codigo:"ET", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250187", dry40:"https://www.searates.com/logistics-explorer/?id=35250193", ref20:"https://www.searates.com/logistics-explorer/?id=34871161", ref40:"https://www.searates.com/logistics-explorer/?id=35250177" } },

  { continente:"ÁFRICA", pais:"Gabón", puertoOrigen:"Puerto de Libreville", codigo:"GA", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Gambia", puertoOrigen:"Puerto de Banjul", codigo:"GM", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Ghana", puertoOrigen:"Puerto de Tema", codigo:"GH", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250234", dry40:"https://www.searates.com/logistics-explorer/?id=35250242", ref20:"https://www.searates.com/logistics-explorer/?id=34871166", ref40:"https://www.searates.com/logistics-explorer/?id=35250230" } },

  { continente:"ÁFRICA", pais:"Guinea", puertoOrigen:"Puerto de Conakry", codigo:"GN", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250276", dry40:"https://www.searates.com/logistics-explorer/?id=35250274", ref20:"https://www.searates.com/logistics-explorer/?id=34871174", ref40:"https://www.searates.com/logistics-explorer/?id=35250269" } },

  { continente:"ÁFRICA", pais:"Kenia", puertoOrigen:"Puerto de Mombasa", codigo:"KE", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250303", dry40:"https://www.searates.com/logistics-explorer/?id=35250297", ref20:"https://www.searates.com/logistics-explorer/?id=34871188", ref40:"https://www.searates.com/logistics-explorer/?id=35250301" } },

  { continente:"ÁFRICA", pais:"Liberia", puertoOrigen:"Puerto de Monrovia", codigo:"LR", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Libia", puertoOrigen:"Puerto de Trípoli", codigo:"LY", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Marruecos", puertoOrigen:"Puerto de Tánger-Med", codigo:"MA", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250363", dry40:"https://www.searates.com/logistics-explorer/?id=35250352", ref20:"https://www.searates.com/logistics-explorer/?id=34871224", ref40:"https://www.searates.com/logistics-explorer/?id=35250350" } },

  { continente:"ÁFRICA", pais:"Mauricio", puertoOrigen:"Puerto Louis", codigo:"MU", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Mozambique", puertoOrigen:"Puerto de Maputo", codigo:"MZ", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250413", dry40:"https://www.searates.com/logistics-explorer/?id=35250404", ref20:"https://www.searates.com/logistics-explorer/?id=34871249", ref40:"https://www.searates.com/logistics-explorer/?id=35250407" } },

  { continente:"ÁFRICA", pais:"Namibia", puertoOrigen:"Puerto de Walvis Bay", codigo:"NA", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Nigeria", puertoOrigen:"Puerto de Lagos", codigo:"NG", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250439", dry40:"https://www.searates.com/logistics-explorer/?id=35250434", ref20:"https://www.searates.com/logistics-explorer/?id=34871276", ref40:"https://www.searates.com/logistics-explorer/?id=35250433" } },

  { continente:"ÁFRICA", pais:"Ruanda (vía Dar es Salaam)", puertoOrigen:"Puerto de Dar es Salaam - Tanzania", codigo:"RW", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Senegal", puertoOrigen:"Puerto de Dakar", codigo:"SN", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250455", dry40:"https://www.searates.com/logistics-explorer/?id=35250450", ref20:"https://www.searates.com/logistics-explorer/?id=34871301", ref40:"https://www.searates.com/logistics-explorer/?id=35250448" } },

  { continente:"ÁFRICA", pais:"Sudáfrica", puertoOrigen:"Puerto de Durban", codigo:"ZA", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250519", dry40:"https://www.searates.com/logistics-explorer/?id=35250504", ref20:"https://www.searates.com/logistics-explorer/?id=34871332", ref40:"https://www.searates.com/logistics-explorer/?id=35250502" } },

  { continente:"ÁFRICA", pais:"Tanzania", puertoOrigen:"Puerto de Dar es Salaam", codigo:"TZ", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250566", dry40:"https://www.searates.com/logistics-explorer/?id=35250555", ref20:"https://www.searates.com/logistics-explorer/?id=34871363", ref40:"https://www.searates.com/logistics-explorer/?id=35250550" } },

  { continente:"ÁFRICA", pais:"Túnez", puertoOrigen:"Puerto de Túnez-La Goulette", codigo:"TN", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ÁFRICA", pais:"Uganda (vía Kenia)", puertoOrigen:"Puerto Nairobi - vía corredor portuario", codigo:"UG", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

      { continente:"ASIA", pais:"Arabia Saudita", puertoOrigen:"Puerto de Jeddah", codigo:"SA", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250618", dry40:"https://www.searates.com/logistics-explorer/?id=35250609", ref20:"https://www.searates.com/logistics-explorer/?id=34871437", ref40:"https://www.searates.com/logistics-explorer/?id=35250607" } },

  { continente:"ASIA", pais:"Armenia (vía Georgia)", puertoOrigen:"Puerto de Batumi – Georgia", codigo:"AM", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Azerbaiyán (vía Georgia)", puertoOrigen:"Puerto de Poti – Georgia", codigo:"AZ", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Bangladés", puertoOrigen:"Puerto de Chittagong", codigo:"BD", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250678", dry40:"https://www.searates.com/logistics-explorer/?id=35250667", ref20:"https://www.searates.com/logistics-explorer/?id=34871467", ref40:"https://www.searates.com/logistics-explorer/?id=35250663" } },

  { continente:"ASIA", pais:"Camboya", puertoOrigen:"Puerto de Sihanoukville", codigo:"KH", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"China", puertoOrigen:"Puerto de Shanghái", codigo:"CN", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250737", dry40:"https://www.searates.com/logistics-explorer/?id=35250721", ref20:"https://www.searates.com/logistics-explorer/?id=34871532", ref40:"https://www.searates.com/logistics-explorer/?id=35250718" } },

  { continente:"ASIA", pais:"Corea del Norte", puertoOrigen:"Puerto de Nampo", codigo:"KP", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Corea del Sur", puertoOrigen:"Puerto de Busan", codigo:"KR", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250797", dry40:"https://www.searates.com/logistics-explorer/?id=35250792", ref20:"https://www.searates.com/logistics-explorer/?id=34871609", ref40:"https://www.searates.com/logistics-explorer/?id=35250786" } },

  { continente:"ASIA", pais:"Emiratos Árabes Unidos", puertoOrigen:"Puerto de Dubái (Jebel Ali)", codigo:"AE", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Filipinas", puertoOrigen:"Puerto de Manila", codigo:"PH", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250833", dry40:"https://www.searates.com/logistics-explorer/?id=35250842", ref20:"https://www.searates.com/logistics-explorer/?id=34871655", ref40:"https://www.searates.com/logistics-explorer/?id=35250829" } },

  { continente:"ASIA", pais:"Georgia", puertoOrigen:"Puerto de Batumi", codigo:"GE", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"India", puertoOrigen:"Puerto de Jawaharlal Nehru", codigo:"IN", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250916", dry40:"https://www.searates.com/logistics-explorer/?id=35250907", ref20:"https://www.searates.com/logistics-explorer/?id=34871721", ref40:"https://www.searates.com/logistics-explorer/?id=35250899" } },

  { continente:"ASIA", pais:"Indonesia", puertoOrigen:"Puerto de Yakarta", codigo:"ID", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35250963", dry40:"https://www.searates.com/logistics-explorer/?id=35250959", ref20:"https://www.searates.com/logistics-explorer/?id=34871788", ref40:"https://www.searates.com/logistics-explorer/?id=35250955" } },

  { continente:"ASIA", pais:"Irán", puertoOrigen:"Puerto de Bandar Abbas", codigo:"IR", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Irak", puertoOrigen:"Puerto de Umm Qasr", codigo:"IQ", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Israel", puertoOrigen:"Puerto de Haifa", codigo:"IL", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Japón", puertoOrigen:"Puerto de Yokohama", codigo:"JP", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35251010", dry40:"https://www.searates.com/logistics-explorer/?id=35250994", ref20:"https://www.searates.com/logistics-explorer/?id=34871850", ref40:"https://www.searates.com/logistics-explorer/?id=35250982" } },

  { continente:"ASIA", pais:"Jordania", puertoOrigen:"Puerto de Aqaba", codigo:"JO", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Kazajistán (vía China)", puertoOrigen:"Ruta ferroviaria – Kazajistán/China", codigo:"KZ", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Kirguistán (vía China)", puertoOrigen:"Ruta terrestre vía China", codigo:"KG", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Kuwait", puertoOrigen:"Puerto de Shuwaikh", codigo:"KW", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Líbano", puertoOrigen:"Puerto de Beirut", codigo:"LB", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Malasia", puertoOrigen:"Puerto Klang", codigo:"MY", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35251052", dry40:"https://www.searates.com/logistics-explorer/?id=35251045", ref20:"https://www.searates.com/logistics-explorer/?id=34871903", ref40:"https://www.searates.com/logistics-explorer/?id=35251043" } },

  { continente:"ASIA", pais:"Omán", puertoOrigen:"Puerto de Salalah", codigo:"OM", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Pakistán", puertoOrigen:"Puerto de Karachi", codigo:"PK", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Qatar", puertoOrigen:"Puerto Hamad", codigo:"QA", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Singapur", puertoOrigen:"Puerto de Singapur", codigo:"SG", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Tailandia", puertoOrigen:"Puerto de Laem Chabang", codigo:"TH", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Tayikistán (vía Uzbekistán)", puertoOrigen:"Corredor ferroviario Asia central", codigo:"TJ", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Turquía", puertoOrigen:"Puerto de Estambul", codigo:"TR", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35251126", dry40:"https://www.searates.com/logistics-explorer/?id=35251108", ref20:"https://www.searates.com/logistics-explorer/?id=34872041", ref40:"https://www.searates.com/logistics-explorer/?id=35251107" } },

  { continente:"ASIA", pais:"Turkmenistán (vía Irán)", puertoOrigen:"Bandar Abbas – Irán", codigo:"TM", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Uzbekistán (vía Kazajistán)", puertoOrigen:"Corredor Asia Central ferroviario", codigo:"UZ", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"ASIA", pais:"Vietnam", puertoOrigen:"Puerto de Ho Chi Minh", codigo:"VN", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35251200", dry40:"https://www.searates.com/logistics-explorer/?id=35251181", ref20:"https://www.searates.com/logistics-explorer/?id=34872120", ref40:"https://www.searates.com/logistics-explorer/?id=35251177" } },

      { continente:"OCEANÍA", pais:"Australia", puertoOrigen:"Puerto de Melbourne", codigo:"AU", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35251261", dry40:"https://www.searates.com/logistics-explorer/?id=35251247", ref20:"https://www.searates.com/logistics-explorer/?id=34872218", ref40:"https://www.searates.com/logistics-explorer/?id=35251240" } },

  { continente:"OCEANÍA", pais:"Fiyi", puertoOrigen:"Puerto de Suva", codigo:"FJ", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Kiribati", puertoOrigen:"Puerto de Betio", codigo:"KI", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Islas Marshall", puertoOrigen:"Puerto de Majuro", codigo:"MH", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Micronesia", puertoOrigen:"Puerto de Pohnpei", codigo:"FM", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Nauru", puertoOrigen:"Puerto de Aiwo Bay", codigo:"NR", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Nueva Zelanda", puertoOrigen:"Puerto de Auckland", codigo:"NZ", destino:"Paita",
    tarifas:{ dry20:"https://www.searates.com/logistics-explorer/?id=35251312", dry40:"https://www.searates.com/logistics-explorer/?id=35251307", ref20:"https://www.searates.com/logistics-explorer/?id=34872250", ref40:"https://www.searates.com/logistics-explorer/?id=35251304" } },

  { continente:"OCEANÍA", pais:"Palaos", puertoOrigen:"Puerto de Malakal", codigo:"PW", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Papúa Nueva Guinea", puertoOrigen:"Puerto de Port Moresby", codigo:"PG", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Samoa", puertoOrigen:"Puerto de Apia", codigo:"WS", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Islas Salomón", puertoOrigen:"Puerto de Honiara", codigo:"SB", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Tonga", puertoOrigen:"Puerto de Nukualofa", codigo:"TO", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Tuvalu", puertoOrigen:"Puerto de Funafuti", codigo:"TV", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } },

  { continente:"OCEANÍA", pais:"Vanuatu", puertoOrigen:"Puerto de Port Vila", codigo:"VU", destino:"Paita",
    tarifas:{ dry20:null, dry40:null, ref20:null, ref40:null } }
];
