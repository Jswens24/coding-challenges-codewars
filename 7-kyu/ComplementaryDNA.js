// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


const DNAStrand = (dna) => {
    const complementDna = [];

    dna.split('').map(letter => {
        if (letter === 'A') {
            complementDna.push('T')
        } else if (letter === 'T') {
            complementDna.push('A')
        } else if (letter === 'G') {
            complementDna.push('C')
        } else if (letter === 'C') {
            complementDna.push('G')
        }
    })

    return complementDna.join('')

}

console.log(DNAStrand('AAAA'))
console.log(DNAStrand('ATTGC'))
console.log(DNAStrand('GTAT'))