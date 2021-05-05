function solucao(produtos) {
	//seu codigo aqui
    var percentual = (totalTop * totalVendas/100);
    var totalVendas = (produtos.reduce((acc, n) => acc + n.preco))
                                              
    if (produtos.preco >= 10000) {
        let totalTop = (produtos.reduce((acc, n) => acc + n.preco)) 
        console.log(totalTop, percentual)        
        
}
}
