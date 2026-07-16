type Faq = { question: string; answer: string; order: number };

export default function FaqForm({
  action,
  faq,
}: {
  action: (formData: FormData) => void;
  faq?: Faq;
}) {
  return (
    <form action={action} className="admin-form">
      <label>
        Question
        <input name="question" defaultValue={faq?.question} required />
      </label>
      <label>
        Answer
        <textarea name="answer" defaultValue={faq?.answer} required />
      </label>
      <label>
        Order
        <input type="number" name="order" defaultValue={faq?.order ?? 0} />
      </label>
      <button type="submit" className="admin-btn">
        Save
      </button>
    </form>
  );
}
