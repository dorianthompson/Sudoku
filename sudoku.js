document.querySelectorAll('td').forEach(cell => {
    if (!cell.classList.contains('given-number')){
        cell.addEventListener('click', onStandardCellClick);
    }
});

function onStandardCellClick(){
    document.querySelector('.selected')?.classList?.remove('selected');
    this.classList.add('selected');
}

document.querySelectorAll('.number-control').forEach(control => {
    control.addEventListener('click', onNumberControlClick)
});

function onNumberControlClick()  {
    const isCandidate = document.getElementById('candidate-switch').checked;
    const selectedCell = document.querySelector('.selected');
    const candidatesNumsString = selectedCell.querySelector('.candidates');
    const candidatesArray = candidatesNumsString.textContent.split("");

    if (selectedCell == null){
        return;
    }

    if(isCandidate){
        const numIdx = candidatesArray.indexOf(this.textContent);
        if(numIdx == -1){
            candidatesArray.push(this.textContent)
        } else {
            candidatesArray.splice(numIdx,1);
        }

        candidatesArray.sort()
        candidatesNumsString.textContent = candidatesArray.join("")
    }else {
        selectedCell.querySelector('.value').textContent = this.textContent;
    }
}