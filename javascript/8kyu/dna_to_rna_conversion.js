//DNA to RNA conversion
//https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
    let rna = "";
    for(i = 0; i < dna.length; i++){dna[i] === 'T' ? rna += 'U' : rna += dna[i]};
    return rna;
}