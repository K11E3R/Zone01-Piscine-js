function dogYears(plannet,age) {
    let yearage = age/31557600;
    if (plannet==='earth'){
        yearage *=7
        return parseFloat(yearage.toFixed(2))}
    if (plannet==='mercury'){
        yearage /= 0.2408467
        yearage *=7 
        return parseFloat(yearage.toFixed(2))}
    if (plannet==='venus'){
        yearage /=0.61519726
        yearage *=7
        return parseFloat(yearage.toFixed(2))}
    if (plannet==='mars'){
        yearage /=1.8808158
        yearage *=7
        return parseFloat(yearage.toFixed(2))}
    if (plannet==='jupiter'){
        yearage /=11.862615
        yearage *=7
        return parseFloat(yearage.toFixed(2))}
if (plannet==='saturn'){
    yearage /=29.447498
        yearage *=7
        return parseFloat(yearage.toFixed(2))}
        if (plannet==='uranus'){
            yearage /=84.016846
            yearage *=7
        return parseFloat(yearage.toFixed(2))}
            if (plannet==='neptune'){
                yearage /=164.79132
                yearage *=7
        return parseFloat(yearage.toFixed(2))}
    }