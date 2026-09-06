import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useChat } from "../hooks/useChat.js";

const starterChats = [
  { id: 1, title: "The future of quiet technology", time: "Now" },
  { id: 2, title: "Best cities for a creative sabbatical", time: "Yesterday" },
  { id: 3, title: "How do solar panels work?", time: "Yesterday" },
  { id: 4, title: "A simple guide to stoicism", time: "Jun 18" },
  { id: 5, title: "Recipes for a rainy Sunday", time: "Jun 16" },
];

const starterMessages = [
  {
    id: 1,
    role: "user",
    content: "Hey",
  },
  {
    id: 2,
    role: "ai",
    content: "Hello, How can I assist you today ?",
  },
  {
    id: 3,
    role: "user",
    content: "What does quiet technology look like in everyday life?",
  },
  {
    id: 4,
    role: "ai",
    content:
      "Quiet technology is designed to support your attention rather than compete for it. It stays available when you need it, fades into the background when you do not, and makes its value felt through small, considered moments.\n\nThink of a lamp that adjusts to the room without an app, or a calendar that protects your focus instead of filling every gap. The best version of technology gives you more presence, not more notifications.",
  },
];

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const chat = useChat();
  const [activeChat, setActiveChat] = useState(starterChats[0].id);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(starterMessages);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chats = useSelector((state) => state.chat.chats);
  const currentChatId = useSelector((state) => state.chat.currentChatId);

  const activeTitle = useMemo(
    () =>
      starterChats.find((item) => item.id === activeChat)?.title ??
      "New conversation",
    [activeChat],
  );

  useEffect(() => {
    chat.initializeSocketConnection();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;
    chat.handleSendMessage({ message: trimmedMessage, chatId: currentChatId });
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now(), role: "user", content: trimmedMessage },
    ]);
    setMessage("");
  };

  const handleNewChat = () => {
    setActiveChat(null);
    setMessages([]);
    setMessage("");
    setIsSidebarOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#030303] text-[#ffffff] selection:bg-[#5eff00] selection:text-[#020202]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] overflow-hidden border-x border-[#25272a] bg-[#101113]">
        <aside
          className={`fixed inset-y-0 left-0 z-20 flex w-71 -translate-x-full flex-col border-r border-[#2a2c2f] bg-[#101113] p-5 transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : ""}`}
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleNewChat}
              className="group flex items-center gap-2.5 text-left"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d5f36b] text-lg font-black text-[#151710] transition-transform group-hover:rotate-6">
                p
              </span>
              <span className="font-display text-xl tracking-[-0.04em]">
                perplexity
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              className="text-[#747875] hover:text-[#f3f0e8] lg:hidden"
              aria-label="Close sidebar"
            >
              ×
            </button>
          </div>
          <button
            type="button"
            onClick={handleNewChat}
            className="mt-10 flex items-center justify-between border-b border-[#2a2c2f] pb-4 text-sm text-[#b6b9b1] transition-colors hover:text-[#d5f36b]"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl leading-none">+</span> New thread
            </span>
            <span className="text-xs text-[#626660]">⌘ K</span>
          </button>
          <div className="mt-7 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-[#626660]">
            <span>Recent threads</span>
            <button
              type="button"
              aria-label="Search conversations"
              className="text-sm normal-case tracking-normal hover:text-[#d5f36b]"
            >
              ⌕
            </button>
          </div>
          <nav className="mt-3 space-y-1">
            {starterChats.map((chatItem) => (
              <button
                type="button"
                key={chatItem.id}
                onClick={() => {
                  setActiveChat(chatItem.id);
                  setMessages(chatItem.id === 1 ? starterMessages : []);
                  setIsSidebarOpen(false);
                }}
                className={`group w-full border-l-2 px-3 py-3 text-left transition-colors ${activeChat === chatItem.id ? "border-[#d5f36b] bg-[#191b1b] text-[#f3f0e8]" : "border-transparent text-[#8e928b] hover:bg-[#17191a] hover:text-[#e2e2d9]"}`}
              >
                <span className="block truncate text-sm leading-5">
                  {chatItem.title}
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-[#5e625d]">
                  {chatItem.time}
                </span>
              </button>
            ))}
          </nav>
          <div className="mt-auto border-t border-[#2a2c2f] pt-4">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-[#191b1b]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#30342d] text-sm text-[#d5f36b]">
                {user?.name?.[0]?.toUpperCase() ?? "A"}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm">
                  {user?.name ?? "Alex Morgan"}
                </span>
                <span className="block text-xs text-[#626660]">
                  Free account
                </span>
              </span>
              <span className="ml-auto text-[#626660]">•••</span>
            </button>
          </div>
        </aside>
        {isSidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar overlay"
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-10 bg-black/60 lg:hidden"
          />
        )}
        <section className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="flex h-18 items-center justify-between border-b border-[#25272a] px-5 sm:px-8">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="text-[#a7aaa2] hover:text-[#d5f36b] lg:hidden"
              aria-label="Open sidebar"
            >
              ☰
            </button>
            <div className="hidden items-center gap-2 text-xs text-[#626660] sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d5f36b]" />{" "}
              Research mode
            </div>
            <div className="ml-auto flex items-center gap-5 text-xs text-[#777b74]">
              <button type="button" className="hover:text-[#d5f36b]">
                Share
              </button>
              <button
                type="button"
                aria-label="More options"
                className="text-base tracking-widest hover:text-[#d5f36b]"
              >
                •••
              </button>
            </div>
          </header>
          <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 pb-6 pt-10 sm:px-10 sm:pt-16">
            <div className="mb-10 flex items-start justify-between gap-4">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7d8279]">
                  Conversation {activeChat ? `0${activeChat}` : "new"}
                </p>
                <h1 className="font-display max-w-xl text-3xl leading-tight tracking-[-0.04em] text-[#f3f0e8] sm:text-4xl">
                  {activeTitle}
                </h1>
              </div>
              <button
                type="button"
                onClick={handleNewChat}
                className="hidden rounded-full border border-[#30332f] px-3 py-1.5 text-xs text-[#92978c] hover:border-[#d5f36b] hover:text-[#d5f36b] sm:block"
              >
                New thread
              </button>
            </div>
            <div className="space-y-8 pb-12">
              {messages.length === 0 ? (
                <div className="flex min-h-75 items-center justify-center border-y border-dashed border-[#292c2b] text-center">
                  <div>
                    <span className="mb-4 block text-3xl text-[#d5f36b]">
                      ✦
                    </span>
                    <p className="font-display text-2xl tracking-[-0.03em]">
                      What would you like to explore?
                    </p>
                    <p className="mt-2 text-sm text-[#777b74]">
                      Ask a question to start a new thread.
                    </p>
                  </div>
                </div>
              ) : (
                chats[currentChatId]?.messages.map((chatMessage) => (
                  <article
                    key={chatMessage.id}
                    className={
                      chatMessage.role === "user"
                        ? "ml-auto max-w-[90%] sm:max-w-[76%]"
                        : "max-w-2xl"
                    }
                  >
                    <div
                      className={`mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${chatMessage.role === "user" ? "justify-end text-[#858981]" : "text-[#d5f36b]"}`}
                    >
                      <span>
                        {chatMessage.role === "user" ? "You" : "Perplexity"}
                      </span>
                      {chatMessage.role === "assistant" && (
                        <span className="text-[#596052]">
                          · sourced response
                        </span>
                      )}
                    </div>
                    <div
                      className={`whitespace-pre-line text-[15px] leading-7 ${chatMessage.role === "user" ? "rounded-2xl rounded-tr-sm bg-[#1c1e1d] px-5 py-3 text-[#eeeae0]" : "text-[#c2c5bc]"}`}
                    >
                      {chatMessage.content}
                    </div>
                  </article>
                ))
              )}
            </div>
            <form
              onSubmit={handleSubmit}
              className="sticky bottom-0 mt-auto border-t border-[#2a2c2f] bg-[#101113] pt-5"
            >
              <div className="flex fixed bottom-0 w-100 items-end gap-3 rounded-xl border border-[#363936] bg-[#171918] p-3 transition-colors focus-within:border-[#858e61]">
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      handleSubmit(event);
                    }
                  }}
                  rows="1"
                  placeholder="Ask anything..."
                  aria-label="Message"
                  className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm leading-6 text-[#f3f0e8] outline-none placeholder:text-[#666b64]"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d5f36b] text-lg font-bold text-[#151710] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={!message.trim()}
                >
                  ↑
                </button>
              </div>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.14em] text-[#555a54]">
                Perplexity can make mistakes. Check important info.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
