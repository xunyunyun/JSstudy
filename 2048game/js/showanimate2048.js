function showNumberWithAnimation(i,j,number){
	var numberCell = $('#number-cell-'+i+'-'+j);
	numberCell.css('background-color',getNumberBackgroundColor(number));
	numberCell.css('color',getNumberColor(number));
	numberCell.text(number);
	//mobile
	if(documentWidth<500){
		$('.number-cell').css('line-height',cellSideLength+'px');
		$('.number-cell').css('border-radius',0.05*cellSideLength);
		$('.number-cell').css('font-size',cellSideLength*0.6+'px');
	
		numberCell.animate({
			width: cellSideLength+'px',
			height: cellSideLength+'px',
			top:getPosTopMobile(i,j),
			left:getPosLeftMobile(i,j)
		},50);
	}else{
		numberCell.animate({
			width: '100px' ,
			height: '100px',
			top:getPosTop(i,j),
			left:getPosLeft(i,j)
		},50);
	}


}

function showMoveAnimation(fromx,fromy,tox,toy){
	var numberCell = $('#number-cell-'+fromx+'-'+fromy);
	if(documentWidth<500){
		numberCell.animate({
			top:getPosTopMobile( tox, toy),
			left:getPosLeftMobile( tox, toy)
		},200);
	}else{
		numberCell.animate({
			top:getPosTop( tox, toy),
			left:getPosLeft( tox, toy)
		},200);
	}
}


function updateScore( score ){
	$('#score').text(score);
}