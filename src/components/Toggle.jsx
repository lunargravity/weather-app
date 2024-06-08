export default function Toggle({ left, right }) {
  return (
    <label className='toggle-switch'>
      <input type='checkbox' />
      <span
        className='toggle-slider'
        data-content={left}
        data-alt-content={right}></span>
    </label>
  );
}
