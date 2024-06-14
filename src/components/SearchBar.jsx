export default function SearchBar() {
  return (
    <form>
      <label className='expand-search'>
        <input type='text' placeholder='City...' name='search' />
        <i className='material-icons'>search</i>
      </label>
    </form>
  );
}
