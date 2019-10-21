var artarr = [
    {
        name: 'giraffe',
        price: '$450',
        image: 'neckfordays.jpg',
        bigimage: 'bigneckfordays.jpg',
        title: '"Neck for days"'
    },
    {
        name: 'dog',
        price: '$570',
        image: 'doge.jpg',
        bigimage: 'doge.jpg',
        title: '"Unconditional moisture"'
    },
    {
        name: 'cat',
        price: '$3.50',
        image: 'cat.jpg',
        bigimage: 'cat.jpg',
        title: '"Cat"'
    },
    {
        name: 'sheep',
        price: '$950',
        image: 'lanolin.jpg',
        bigimage: 'lanolin.jpg',
        title: '"Lanolin"'
    },
    {
        name: 'toucan',
        price: '$42',
        image: 'loop.jpg',
        bigimage: 'loop.jpg',
        title: '"Loops"'
    }
];

function createThumbs()
{
    for (var index in artarr)
    {
        // document.write(artarr[index].name + " " + artarr[index].image);
        var img = document.createElement("img");
        img.setAttribute("id", artarr[index].name);
        img.setAttribute("src", artarr[index].image);
        img.setAttribute("width", "80");
        img.setAttribute("height", "60");
        document.body.appendChild(img);
    }
}


$(document).ready(function()
{
    $('#bigimgdiv').append('<img id="biggiraffe" src="bigneckfordays.jpg" />');
    $("#biggiraffe").hide();
    $("#giraffe").hover(function()
    {
        $("#biggiraffe").fadeIn();
    }, function()
    {
        $("#biggiraffe").fadeOut();
    });

    $("#giraffe").click(function()
    {
        $('#description').show();
        $('#description').html(artarr[0].title + "<br>" + artarr[0].price);
    });

    $("#giraffe").mouseup(function(){
        $('#description').delay(5000).fadeOut();
    });

});

$(document).ready(function()
{
    $('#bigimgdiv').append('<img id="bigdog" src="bigdoge.jpg" />');
    $("#bigdog").hide();
    $("#dog").hover(function()
    {
        $("#bigdog").fadeIn();
    }, function()
    {
        $("#bigdog").fadeOut();
    });

    $("#dog").click(function()
    {
        $('#description').show();
        $('#description').html(artarr[1].title + "<br>" + artarr[1].price);
    });

    $("#dog").mouseup(function(){
        $('#description').delay(5000).fadeOut();
    });

});


$(document).ready(function()
{
    $('#bigimgdiv').append('<img id="bigcat" src="bigcat.jpg" />');
    $("#bigcat").hide();
    $("#cat").hover(function()
    {
        $("#bigcat").fadeIn();
    }, function()
    {
        $("#bigcat").fadeOut();
    });

    $("#cat").click(function()
    {
        $('#description').show();
        $('#description').html(artarr[2].title + "<br>" + artarr[2].price);
    });

    $("#cat").mouseup(function(){
        $('#description').delay(5000).fadeOut();
    });
});

$(document).ready(function()
{
    $('#bigimgdiv').append('<img id="bigsheep" src="biglanolin.jpg" />');
    $("#bigsheep").hide();
    $("#sheep").hover(function()
    {
        $("#bigsheep").fadeIn();
    }, function()
    {
        $("#bigsheep").fadeOut();
    });

    $("#sheep").click(function()
    {
        $('#description').show();
        $('#description').html(artarr[3].title + "<br>" + artarr[3].price);
    });

    $("#sheep").mouseup(function(){
        $('#description').delay(5000).fadeOut();
    });

});

$(document).ready(function()
{
    $('#bigimgdiv').append('<img id="bigtoucan" src="bigloop.jpg" />');
    $("#bigtoucan").hide();
    $("#toucan").hover(function()
    {
        $("#bigtoucan").fadeIn();
    }, function()
    {
        $("#bigtoucan").fadeOut();
    });

    $("#toucan").click(function()
    {
        $('#description').show();
        $('#description').html(artarr[4].title + "<br>" + artarr[4].price);
    });

    $("#toucan").mouseup(function(){
        $('#description').delay(5000).fadeOut();
    });
});