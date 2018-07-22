export default iterable => iterable.map(elem => (elem.map ? [...elem] : elem))
