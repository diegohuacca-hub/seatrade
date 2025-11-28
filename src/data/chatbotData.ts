export const chatbotData = [
  // ========= PUERTOS =========
  {
    keywords: [
      "profundidad puerto chancay",
      "capacidad puerto paita",
      "tarifas callao",
      "ubicación callao",
      "puerto callao",
      "puerto chancay",
      "dónde queda callao"
    ],
    answer: `⚓ Información portuaria:

- **Puerto del Callao:** Profundidad 16–18 m, principal puerto de Perú.
- **Puerto de Chancay:** Profundidad estimada 18–20 m, diseñado para Neo-Panamax.
- **Puerto de Paita:** Especializado en agroexportaciones.

💡 Puedes abrir el **mapa** para ver ubicaciones.`
  },

  // ========= CONTENEDORES =========
  {
    keywords: [
      "capacidad contenedor",
      "cbm",
      "temperatura reefer",
      "peso máximo contenedor",
      "embalaje",
      "contenedor recomendado",
      "reefer"
    ],
    answer: `📦 Especificaciones de contenedores:

- **Dry 20’** → ~33.2 m³
- **Dry 40’** → ~67.7 m³
- **Reefer** → Hasta -35°C según modelo

⚖ Peso máximo:
- 20’: ~30,480 kg
- 40’: ~32,500 kg`
  },

  // ========= FLETE =========
  {
    keywords: [
      "calcular flete",
      "costo envío",
      "cuánto cuesta enviar",
      "cotización flete",
      "baf",
      "tarifa"
    ],
    answer: `💰 El costo del flete depende del destino, tipo de contenedor y recargos (BAF, CAF, THC, documentación).

Para un cálculo exacto puedes usar la **calculadora**.`
  },

  // ========= EXPORTACIÓN & INCOTERMS =========
  {
    keywords: [
      "documentos exportar",
      "exportación desde peru",
      "incoterm",
      "cif",
      "fob",
      "exw",
      "aranceles",
      "acuerdos comerciales"
    ],
    answer: `📄 Documentación típica para exportar:

✔ Factura comercial  
✔ Packing List  
✔ Certificado fitosanitario/sanitario  
✔ Bill of Lading  
✔ Seguro según Incoterm  

📘 Incoterms:
- **EXW:** comprador asume casi todo
- **FOB:** hasta puerto origen
- **CIF:** incluye seguro y flete hasta destino`
  },

  // ========= TRÁFICO MARÍTIMO =========
  {
    keywords: [
      "posición buque",
      "msc taurus",
      "tránsito callao los angeles",
      "retrasos canal panama",
      "naviera con más presencia"
    ],
    answer: `📡 Tránsito Callao → Los Ángeles: **9–14 días**.

⚠ A veces hay restricciones por el Canal de Panamá.

🚢 Navieras con mayor presencia: **MSC, MAERSK, CMA CGM.**  
📍 Posiciones AIS en tiempo real en esta versión todavía no están integradas.`
  },

  // ========= PERECEDEROS =========
  {
    keywords: [
      "perecederos",
      "exportar fruta",
      "cadena frio",
      "temperatura alimentos",
      "reefer exportación"
    ],
    answer: `❄ Exportación de perecederos:

✔ Contenedor Reefer (temperatura controlada)  
✔ Atmósfera controlada + dataloggers  
✔ Documentos sanitarios  
✔ Seguro recomendado

Temperatura depende del producto (-1°C a +15°C).`
  },

  // ========= LCL / FCL =========
  {
    keywords: ["lcl", "less than container load", "carga consolidada"],
    answer: `📦 **LCL (Less than Container Load)** = compartes contenedor con otros exportadores.
Ideal para cargas < 10 m³.`
  },
  {
    keywords: ["fcl", "full container load", "contenedor completo"],
    answer: `🚢 **FCL (Full Container Load)** = usas un contenedor completo.
Menos manipulación, mejor tarifa por volumen.`
  },
  {
    keywords: ["diferencia lcl fcl", "lcl vs fcl", "comparación lcl fcl"],
    answer: `🔍 **LCL vs FCL**

| Factor | LCL | FCL |
|--------|------|------|
| Espacio | Compartido | Completo |
| Costo | Mejor para cargas pequeñas | Mejor a partir de 10–12 m³ |
| Riesgo | Mayor | Menor |
| Tiempo | Puede retrasarse | Rápido |`
  },

  // ========= IMPORTACIÓN =========
  {
    keywords: ["documentos importacion", "requisitos importar"],
    answer: `📄 Documentos para importar:

- Factura comercial  
- Packing List  
- Bill of Lading  
- Certificado de origen  
- Permisos (según producto)`
  },

  // ========= TIEMPO DE TRÁNSITO =========
  {
    keywords: ["transit time", "tiempo de tránsito"],
    answer: `⏳ Transit Time = tiempo total de viaje.

Ejemplo: Callao → Shanghái ≈ **28–33 días**.`
  },

  // ========= FALLBACK (MEJORADO) =========
  {
    keywords: ["*"],
    answer: `
🤔 No tengo esa información exacta aún.

🧭 Pero puedo ayudarte 👇  

<b>Para asistencia humana, presiona aquí:</b>

<button data-action="contact" class="chatbot-btn-contact">
📞 Contacto
</button>
`
  }
];
