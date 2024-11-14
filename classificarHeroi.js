const niveis = [
    {minXP: 0, nivel: 'Ferro' },
    {minXP: 1001, nivel: 'Bronze' },
    {minXP: 2001, nivel: 'Prata' },
    {minXP: 5001, nivel: 'Ouro' },
    {minXP: 7001, nivel: 'Platina' },
    {minXP: 8001, nivel: 'Ascendente' },
    {minXP: 9001, nivel: 'Imortal' },
    {minXP: 10001, nivel: 'Radiante' }
];

function classificarHeroi(nome, XP) {
    let nivel = 'Não Classificado';
    for (const nivelObj of niveis){
        if (XP >= nivelObj.minXP) {
            nivel = nivelObj.nivel;
            break;
            
        }
    }
    return nivel;
    console.log(`O herói ${nome} está no nível ${nivel}`);
    
}

