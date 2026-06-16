"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Sparkles, Clock, Send, Bot, User } from "lucide-react";
import { AI_QUERY_RESPONSES, type AiQueryResponse } from "@/data/mockGovernanceData";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  category?: string;
  timestamp: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  Districts: "🏛️",
  Projects: "📋",
  Funds: "💰",
  Officers: "👤",
  Audits: "🔍",
  Alerts: "🚨",
};

function findResponse(q: string): { response: string; category: string } {
  const query = q.trim().toLowerCase();
  const match = AI_QUERY_RESPONSES.find(
    (r) =>
      r.query.toLowerCase().includes(query) ||
      query.split(" ").some((word) => r.query.toLowerCase().includes(word)) ||
      r.category.toLowerCase().includes(query)
  );
  if (match) {
    return { response: match.response, category: match.category };
  }
  return {
    response: "I don't have data on that yet. Try asking about districts, projects, funds, officers, audits, or alerts.",
    category: "General",
  };
}

export default function AiPanel() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasStarted) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      inputRef.current?.focus();
    }
  }, [hasStarted]);

  const addExchange = (userQuery: string) => {
    const trimmed = userQuery.trim();
    if (!trimmed) return;

    const { response, category } = findResponse(trimmed);
    const now = new Date().toLocaleString();

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}-user`,
      role: "user",
      content: trimmed,
      timestamp: now,
    };

    const assistantMsg: ChatMessage = {
      id: `msg-${Date.now()}-assistant`,
      role: "assistant",
      content: response,
      category,
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setQuery("");
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addExchange(query);
  };

  const handlePastQueryClick = (r: AiQueryResponse) => {
    const now = new Date().toLocaleString();
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}-user`,
      role: "user",
      content: r.query,
      timestamp: now,
    };
    const assistantMsg: ChatMessage = {
      id: `msg-${Date.now()}-assistant`,
      role: "assistant",
      content: r.response,
      category: r.category,
      timestamp: now,
    };
    setMessages([userMsg, assistantMsg]);
    setQuery("");
    setHasStarted(true);
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {!hasStarted ? (
        /* ── Landing Mode ── */
        <div className="space-y-8">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask anything about your state..."
                className="w-full bg-white border border-slate-300 rounded-xl pl-12 pr-14 py-4 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-gov-gold-500 focus:border-gov-gold-500 transition-all text-slate-800 placeholder-slate-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="submit"
                  className="p-2.5 bg-gov-navy-950 hover:bg-gov-navy-900 text-gov-gold-500 rounded-lg transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 ml-1">
              Try: &quot;Which districts are underperforming?&quot; &middot; &quot;Show me critical projects&quot; &middot; &quot;Fund utilization status&quot;
            </p>
          </form>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <Clock className="h-3.5 w-3.5" />
              <span>Past Queries</span>
            </div>

            {AI_QUERY_RESPONSES.map((r) => (
              <button
                key={r.id}
                onClick={() => handlePastQueryClick(r)}
                className="w-full text-left bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-base leading-none shrink-0">
                    {CATEGORY_ICONS[r.category] ?? <Sparkles className="h-4 w-4 text-gov-gold-500" />}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-sm font-bold text-slate-800 leading-snug">{r.query}</p>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{r.response}</p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                      <span className="font-semibold uppercase tracking-wider text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {r.category}
                      </span>
                      <span className="font-mono">{r.timestamp}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* ── Chat Mode ── */
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 overflow-y-auto space-y-4 pb-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start gap-3 max-w-[75%] ${
                    m.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`shrink-0 mt-1 h-8 w-8 rounded-full flex items-center justify-center text-xs ${
                      m.role === "user"
                        ? "bg-gov-navy-950 text-gov-gold-500"
                        : "bg-gov-gold-100 text-gov-gold-700"
                    }`}
                  >
                    {m.role === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gov-navy-950 text-white rounded-tr-md"
                        : "bg-white border border-slate-200 shadow-xs rounded-tl-md"
                    }`}
                  >
                    <p className={m.role === "user" ? "text-white" : "text-slate-700"}>
                      {m.content}
                    </p>
                    {m.role === "assistant" && m.category && (
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                        <span className="font-bold uppercase tracking-wider text-[9px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          {m.category}
                        </span>
                        <span className="font-mono">{m.timestamp}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="relative shrink-0 pt-2">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a follow-up question..."
                className="w-full bg-white border border-slate-300 rounded-xl pl-5 pr-14 py-3.5 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-gov-gold-500 focus:border-gov-gold-500 transition-all text-slate-800 placeholder-slate-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="submit"
                  className="p-2.5 bg-gov-navy-950 hover:bg-gov-navy-900 text-gov-gold-500 rounded-lg transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
