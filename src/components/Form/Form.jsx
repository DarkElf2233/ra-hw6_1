import "./form.css";

export const Form = ({ handleFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const availableTitles = ['London', 'Tokyo', 'Moscow', 'New York']
    const title = e.target[0].value
    const timeZone = Number(e.target[1].value.split('UTC')[1])
    e.target[0].value = ''
    e.target[1].value = ''

    if (!availableTitles.includes(title)) return

    if (isNaN(timeZone)) return

    if (timeZone > 14 || timeZone < -12) return

    handleFormData({ title: title, timeZone: timeZone })
  };

  return (
    <form className="form" autoComplete="false" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Название</label>
        <input type="text" id="title" name="title" required />
      </div>

      <div className="form-group">
        <label htmlFor="time-zone">Временная зона</label>
        <input type="text" id="time-zone" name="time-zone" required />
      </div>
      <button className="btn" type="submit">
        Добавить
      </button>
    </form>
  );
};
