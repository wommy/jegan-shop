module.exports = {
	flat: x => x.flatMap( ea => ea.category ),
	unique: x => x.filter( (x,i,a) => a.indexOf(x) == i )
}
