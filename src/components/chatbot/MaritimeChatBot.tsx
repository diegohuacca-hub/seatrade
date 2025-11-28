import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";
import { chatbotData } from "@/data/chatbotData";

const intentRoutes: any = {
  calculator: ["calcular", "tarifa", "flete", "precio", "costos"],
  map: ["mapa", "ruta", "puerto", "distancia"],
  containers: ["contenedor", "reefer", "dry", "40", "20"],
  resources: ["documentos", "exportación", "leyes", "arancel"],
  contact: ["hablar", "asistencia", "humano", "contacto"],
};

export const MaritimeChatBot = () => {

  const [open, setOpen] = useState(true);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Hola, soy <b>Nautilus</b>, tu asistente marítimo.<br>¿Qué deseas saber?" }
  ]);

  const [input, setInput] = useState("");
  const chatRef = useRef<any>(null);
  const dragPos = useRef({ x: 0, y: 0 });

  // ---------- DRAG SYSTEM ----------
  const startDrag = (e: any) => {
    if (!chatRef.current) return;

    const startX = e.clientX - dragPos.current.x;
    const startY = e.clientY - dragPos.current.y;

    const move = (ev: any) => {
      dragPos.current = { x: ev.clientX - startX, y: ev.clientY - startY };
      chatRef.current.style.transform = `translate(${dragPos.current.x}px, ${dragPos.current.y}px)`;
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", move);
    });
  };

  // ---------- SEARCH KNOWLEDGE ----------
  const searchKnowledge = (msg: string) => {
    const low = msg.toLowerCase();
    for (const item of chatbotData) {
      if (item.keywords.some((k: string) => low.includes(k))) return item.answer;
    }
    return null;
  };

  const detectRoute = (msg: string) => {
    msg = msg.toLowerCase();
    for (const key in intentRoutes) {
      if (intentRoutes[key].some((w: string) => msg.includes(w))) return key;
    }
    return null;
  };

  // ---------- SEND MESSAGE ----------
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev.slice(-29), { role: "user", text: input }]);
    setTyping(true);

    const reply = searchKnowledge(input);
    const route = detectRoute(input);

    setTimeout(() => {
      setTyping(false);

      if (reply) {
        setMessages(prev => [...prev.slice(-29), { role: "bot", text: reply }]);
      } else {
        setMessages(prev => [
          ...prev.slice(-29),
          {
            role: "bot",
            text: `No tengo esa respuesta aún, pero estoy aprendiendo.<br><br>
                  Para tener mayor informacion presiona aqui:<br>
            <button data-action="contact" class="chatbot-btn-contact">📞 Contactar</button>`
          }
        ]);
      }

      if (route) {
        window.dispatchEvent(new CustomEvent("assistant:navigate", { detail: { view: route } }));
      }

    }, 600);

    setInput("");
  };


  // --------- LISTENER FOR BUTTON ---------
  useEffect(() => {
    const handler = (e: any) => {
      if (e.target?.dataset?.action === "contact") {
        window.dispatchEvent(
          new CustomEvent("assistant:navigate", { detail: { view: "contacto" } })
        );
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);


  return (
    <>
      {!open && (
        <button 
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          <MessageCircle size={22} />
        </button>
      )}

      {open && (
        <div
          ref={chatRef}
          className="fixed bottom-6 right-6 bg-white border shadow-xl rounded-xl flex flex-col overflow-hidden"
          onMouseDown={startDrag}
          style={{
            width: window.innerWidth < 450 ? "70vw" : "260px",
            height: window.innerWidth < 450 ? "55vh" : "50vh",
            transform: `translate(${dragPos.current.x}px, ${dragPos.current.y}px)`
          }}
        >
          {/* HEADER */}
          <div className="bg-blue-600 text-white p-2 flex justify-between items-center">
            <span className="font-bold">⚓ Nautilus</span>
            <button className="hover:text-red-500 text-lg" onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* MESSAGES */}
          <div id="chat-scroll" className="flex-1 overflow-y-auto p-3 bg-gray-100 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`p-2 rounded-lg text-sm max-w-[80%] break-words ${
                m.role === "bot" ? "bg-blue-200" : "bg-green-200 ml-auto"
              }`}>
                <span dangerouslySetInnerHTML={{ __html: m.text }} />
              </div>
            ))}
            {typing && <div className="text-gray-500 text-xs">Nautilus está escribiendo...</div>}
          </div>

          {/* INPUT */}
          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded-full px-2 text-sm"
              placeholder="Escribe aquí..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className={`p-2 rounded-full ${
                input.trim() ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500"
              }`}
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
