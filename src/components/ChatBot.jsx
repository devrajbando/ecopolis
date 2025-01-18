import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXQ1fCzfWAlu3QCUYc161lpVm0EpY9_x4",
  authDomain: "mychatapp-76ac5.firebaseapp.com",
  projectId: "mychatapp-76ac5",
  storageBucket: "mychatapp-76ac5.firebasestorage.app",
  messagingSenderId: "179708938136",
  appId: "1:179708938136:web:4eb58def43500699a08ded",
  measurementId: "G-NS1P4HL7Z4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Chat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Fetch messages when component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      const messagesRef = collection(db, "messages");
      const q = query(messagesRef, orderBy("timestamp", "asc"));
      const querySnapshot = await getDocs(q);
      const fetchedMessages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSend = async () => {
    if (message.trim()) {
      try {
        // Add to Firestore
        const docRef = await addDoc(collection(db, "messages"), {
          text: message,
          timestamp: serverTimestamp(),
        });

        // Update local state
        setMessages([
          ...messages,
          {
            id: docRef.id,
            text: message,
            timestamp: new Date(),
          },
        ]);

        // Clear input
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/12 bg-green-300 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b flex justify-end">
          <button className="text-gray-500 hover:text-gray-700">
            <X size={24} onClick={toggleSidebar} />
          </button>
        </div>

        {/* Messages Container */}
        <div
          className="overflow-y-auto p-4"
          style={{ height: "calc(100% - 230px)" }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-lg p-3 mb-2 shadow-sm max-w-[80%] ml-auto"
            >
              <p className="text-gray-800">{msg.text}</p>
              <span className="text-xs text-gray-500">
                {msg.timestamp?.toDate?.()
                  ? msg.timestamp.toDate().toLocaleTimeString()
                  : new Date().toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>

        {/* Textarea Container */}
        <div className="p-4 bg-yellow-300 absolute bottom-0 w-full">
          <textarea
            className="w-full h-32 p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <button
            onClick={handleSend}
            className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;