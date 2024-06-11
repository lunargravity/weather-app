export default function Toggle({ left, right, temp, onChange }) {
  return (
    <label className='toggle-switch'>
      <input type='checkbox' checked={temp} onChange={onChange} />
      <span
        className='toggle-slider'
        data-content={left}
        data-alt-content={right}></span>
    </label>
  );
}
