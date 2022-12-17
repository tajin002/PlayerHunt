document.getElementById('player-cost-btn').addEventListener('click' , function(){
    const perPLayerCostField = getElementByInput('player-cost');
    const perPLayerCost = perPLayerCostField * players.length
    setElementValueById('cost-text', perPLayerCost)
});

document.getElementById('total-cost').addEventListener('click' , function(){
    const managerCost = getElementByInput('manager-cost');
    const coachCost = getElementByInput('coach-cost');
    const totalCost = managerCost + coachCost;
    const previousPerPLayerCost = geElementByText('cost-text');
    const totalAmount = totalCost + previousPerPLayerCost;
    
    setElementValueById('total-amount' , totalAmount)
})

