type Service = { title: string; items: string[]; order: number };

export default function ServiceForm({
  action,
  service,
}: {
  action: (formData: FormData) => void;
  service?: Service;
}) {
  return (
    <form action={action} className="admin-form">
      <label>
        Title
        <input name="title" defaultValue={service?.title} required />
      </label>
      <label>
        Items (one per line)
        <textarea name="items" defaultValue={service?.items?.join("\n")} rows={5} />
      </label>
      <label>
        Order
        <input type="number" name="order" defaultValue={service?.order ?? 0} />
      </label>
      <button type="submit" className="admin-btn">
        Save
      </button>
    </form>
  );
}
