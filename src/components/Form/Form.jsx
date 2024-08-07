import "./form.css";

export const Form = ({ handleFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const timeZone = e.target[1].value;
    handleFormData({ title: title, timeZone: timeZone });
  };

  return (
    <form className="form" autoComplete="false" onSubmit={handleSubmit}>
      <div className="form-group1">
        <label htmlFor="title">Название</label>
        <input type="text" id="title" name="title" required />
      </div>

      <div className="form-group2">
        <label htmlFor="time-zone">Временная зона</label>
        <input type="text" id="time-zone" name="time-zone" required />
      </div>
      <button className="btn" type="submit">
        Добавить
      </button>
    </form>
  );
};
