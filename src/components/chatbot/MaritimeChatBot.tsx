import { useState, useEffect } from "react";
import { Send, MessageCircle, Trash } from "lucide-react";
import { chatbotData } from "@/data/chatbotData";

const STORAGE_KEY = "nautilus_chat_history";

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

  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored
      ? JSON.parse(stored)
      : [
          {
            id: Date.now(),
            role: "bot",
            text: "👋 Hola, soy <b>Nautilus</b>, tu asistente marítimo.<br>¿Qué deseas saber?"
          }
        ];
  });

  const [input, setInput] = useState("");
  const [selectedMsg, setSelectedMsg] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

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

  const deleteMessage = (id: number) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
    setSelectedMsg(null);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev.slice(-29),
      { id: Date.now(), role: "user", text: input }
    ]);

    setTyping(true);

    const reply = searchKnowledge(input);
    const route = detectRoute(input);

    setTimeout(() => {
      setTyping(false);

      setMessages(prev => [
        ...prev.slice(-29),
        {
          id: Date.now(),
          role: "bot",
          text:
            reply ||
            `No tengo esa respuesta aún.<br><br>
            Para tener mayor información presiona aquí:<br>
            <button data-action="contact" class="chatbot-btn-contact">📞 Contactar</button>`
        }
      ]);

      if (route) {
        window.dispatchEvent(
          new CustomEvent("assistant:navigate", { detail: { view: route } })
        );
      }
    }, 600);

    setInput("");
  };

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
          className="fixed bottom-6 right-6 bg-white border shadow-xl rounded-xl flex flex-col overflow-hidden"
          style={{
            width: window.innerWidth < 450 ? "75vw" : "260px",
            height: window.innerWidth < 450 ? "60vh" : "50vh"
          }}
        >
          {/* HEADER */}
          <div className="bg-blue-600 text-white p-2 flex justify-between items-center">
            <span className="font-bold">⚓ Nautilus</span>
            <button
              className="hover:text-red-500 text-lg"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* CHAT */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-100 space-y-2">
            {messages.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelectedMsg(m.id)}
                className={`relative p-2 rounded-lg text-sm max-w-[80%] break-words cursor-pointer ${
                  m.role === "bot" ? "bg-blue-200" : "bg-green-200 ml-auto"
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: m.text }} />
                {selectedMsg === m.id && (
                  <button
                    className="absolute -top-2 -right-2 bg-red-600 text-white text-xs p-1 rounded-full shadow-md hover:bg-red-700"
                    onClick={() => deleteMessage(m.id)}
                  >
                    🗑
                  </button>
                )}
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
