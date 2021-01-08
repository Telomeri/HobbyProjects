
const getRandomCountry = (countries,seed) => {
    //LCG aka Lehmer/Park-Miller RNG or MCG
    //allows seeding based on URL 
    const LCG=(s)=>(2**31-1&(s=Math.imul(48271,s)))/2**31

    //250 is the amount of countries
    var keys = Object.keys(countries)
    return countries[keys[Math.floor(LCG(seed) * (250))]]
  }
  
export default {getRandomCountry}