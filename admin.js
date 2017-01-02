<style type="text/css">
    #ads-back {
        /* Fallback for web browsers that don't support RGBa */
        background-color: rgb(255, 255, 255);
        /* RGBa with 0.6 opacity */
        background-color: rgba(255, 255, 255, 0.9);
        /* For IE 5.5 - 7*/
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
        /* For IE 8*/
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
        z-index: 999;
        position: fixed;
        width: 100%;
        height: 100%;
        margin:0;
        text-align: center;
        color: #5F9EA0;
        padding-top: 100px;
        font-size: 14px;
background: rgba(147, 149, 152, 0.95);
display:none;
    }
    #ads-okvir {
        background-color: blue;
        border: 2px solid;
        border-radius: 20px;
        color: #6d6e71;
        margin: 0 auto;
        padding: 10px 0;
        width: 350px;
background: rgba(255,119,0,1);
background: -moz-linear-gradient(left, rgba(255,119,0,1) 0%, rgba(255,0,149,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,119,0,1)), color-stop(100%, rgba(255,0,149,1)));
background: -webkit-linear-gradient(left, rgba(255,119,0,1) 0%, rgba(255,0,149,1) 100%);
background: -o-linear-gradient(left, rgba(255,119,0,1) 0%, rgba(255,0,149,1) 100%);
background: -ms-linear-gradient(left, rgba(255,119,0,1) 0%, rgba(255,0,149,1) 100%);
background: linear-gradient(to right, rgba(255,119,0,1) 0%, rgba(255,0,149,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7700', endColorstr='#ff0095', GradientType=1 );
    }
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
<div id="ads-back"><div id="ads-okvir">
<center><img src="http://i.imgur.com/iOn4CdV.png" alt=""></center>
<script type="text/javascript">
    google_ad_client = "ca-pub-5140347183249215";
    google_ad_slot = "5793402881";
    google_ad_width = 336;
    google_ad_height = 280;
</script>
<!-- 4 -->
<script type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
		</div>
</div></div> 
<script type="text/javascript">
    var sec = 60;
    var timer = setInterval(function () {
        $("#wait").html('Ili sacekaj '+ eval(sec=sec -1) +' sekundi');
    }, 1000);
    setTimeout(function () {
        gasi();
        clearInterval(timer);
    }, 86400000000);
    window.onscroll = function () {
	if (jQuery.cookie('prikazi') == null)
	{
		document.getElementById('ads-back').style.display = 'block';
	}
    };
    $(window).on('blur',function(e) {
        if($(this).data('mouseIn') != 'yes')return;
        $('iframe').filter(function(){
            return $(this).data('mouseIn') == 'yes';
        }).trigger('iframeclick');
    });
    $(window).mouseenter(function(){
        $(this).data('mouseIn', 'yes');
    }).mouseleave(function(){
        $(this).data('mouseIn', 'yes');
    });
    $('iframe').mouseenter(function(){
        $(this).data('mouseIn', 'yes');
        $(window).data('mouseIn', 'yes');
    }).mouseleave(function(){
        $(this).data('mouseIn', null);
    });
    $('iframe').on('iframeclick', function(){
        console.log('Clicked inside iframe');
        $.cookie('prikazi', '1', { expires: 1, path: '/' });
        location.reload();
    });
    $(window).on('click', function(){
        console.log('Clicked inside window');
    }).blur(function(){
        console.log('window blur');
    });
    function gasi()
    {
        $.cookie('prikazi', '1', { expires: 1, path: '/' });
        location.reload();
    }
	if (jQuery.cookie('prikazi') == null)
	{
		document.getElementById('ads-back').style.display = 'block';
	}
</script>