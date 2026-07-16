import { getMessages, markMessageRead, deleteMessage } from "@/lib/actions/messages";

export default async function AdminMessagesPage() {
  const messages = await getMessages();

  return (
    <div className="admin-page">
      <h1>Messages</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="admin-messages">
          {messages.map((m) => (
            <div className={`admin-message ${m.read ? "" : "is-unread"}`} key={m.id}>
              <div className="admin-message-head">
                <div>
                  <strong>{m.name}</strong> — <span>{m.email}</span>
                </div>
                <span className="admin-message-date">
                  {m.createdAt.toLocaleString("en-GB")}
                </span>
              </div>
              <p>{m.message}</p>
              <div className="admin-table-actions">
                <form
                  action={async () => {
                    "use server";
                    await markMessageRead(m.id, !m.read);
                  }}
                >
                  <button type="submit" className="admin-btn">
                    {m.read ? "Mark unread" : "Mark read"}
                  </button>
                </form>
                <form
                  action={async () => {
                    "use server";
                    await deleteMessage(m.id);
                  }}
                >
                  <button type="submit" className="admin-btn-danger">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
