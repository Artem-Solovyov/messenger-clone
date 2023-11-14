import Sidebar from "../components/Sidebar/Sidebar";
import useConversations from "../actions/getConversations";
import ConversationList from "./components/ConversationList";
import getUsers from "../actions/getUsers";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
  const conversations = await useConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
