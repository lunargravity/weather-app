export default function Toggle({ left, right, checked, onChange }) {
  return (
    <label className='toggle-switch'>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <span
        className='toggle-slider'
        data-content={left}
        data-alt-content={right}></span>
    </label>
  );
}
