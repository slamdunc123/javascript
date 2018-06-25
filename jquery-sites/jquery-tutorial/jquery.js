$(function(){
   
    $('#heading').text('This is a black heading');

    $('.selector').click(function(e){
        let color = e.target.value;
        $('.panel').removeAttr('id','');
        $('.panel').attr('id',color);
        console.log(color);
        
        $('#heading').text('This is a ' + color + ' heading');
    });

    $('.heading2').click(function(e){
        let f = 'First';
        let s = 'Second';
        let t = 'Third';
        let h2_1 = 'h2-1';
        let h2_2 = 'h2-2';
        let h2_3 = 'h2-3';

        let num = e.target;
        let numText = num.innerHTML;
        let numId = num.id;
        console.log(numId);

       
        switch (numText){
            case f:
            num.innerHTML = s;
            num.id = h2_2;
            console.log('Yes ' + f);
            break;

            case s:
            num.innerHTML = t;
            num.id = h2_3;
            console.log('Yes ' + s);
            break;

            case t:
            num.innerHTML = f;
            num.id = h2_1;
            console.log('Yes ' + t);
            break;

        }
      
    });

    $('#btn-reset').click(function(){
        $('.heading2').removeAttr('id');
        $('.heading2').eq(0).attr('id', 'h2-1').text('First');
        $('.heading2').eq(1).attr('id', 'h2-2').text('Second');
        $('.heading2').eq(2).attr('id', 'h2-3').text('Third');
    });

});

 // if(text == f){
        //     console.log('Yes ' + f);
        // } else 
        // if (text == s){
        //     console.log('Yes ' + s);
        // } else 
        // if (text == t){
        //     console.log('Yes ' + t);
        // }