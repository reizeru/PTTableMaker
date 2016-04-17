function koshin(){
  var data = [];
  var table = document.getElementById("javascript_sample_table_1");
  var cell;
  //table.rows[0].cells[0],firstChild.value
  //テーブル構成部(始点)
  var htmlsource = "<table style=\"border-collapse: collapse;border:2px double #000000;background-color:#FFFFFF;color:#000000;text-align:left;\">";
  //ヘッダ部分
  htmlsource += "<thead><tr>";

  for (var i=0;i<=7;i++){
    htmlsource += "<th style=\"border:2px double #000000;background-color:#FFDEA4;color:#000000;text-align:center;\">" +
                  table.rows[0].cells[i].innerHTML +
                  "</th>";
  }
  htmlsource += "</tr></thead>";
  //ボディ部分
  htmlsource += "<tbody>";
  for (i=1; i<=6; i++) {
    htmlsource += "<tr>";
    cell = table.rows[i].getElementsByTagName("input");
    for (var j=0; j<=7; j++) {
      htmlsource += "<td style=\"border:2px double #000000;text-align:left;\">" +
                    cell[j].value +
                    "</td>";
    }
    htmlsource += "</tr>";
  }
  htmlsource += "</tbody>";
  //テーブル構成部(終点)
  htmlsource += "</table>";
  //テキストエリアに入れる
  //window.clipboardData.setData("Text", htmlsource);
  document.getElementById("txtArea_javascript_sample_table_1").value = htmlsource;
  document.getElementById("txtArea_javascript_sample_table_1").focus();	//テキストエリアをフォーカスする
  document.getElementById("txtArea_javascript_sample_table_1").select();	//テキストエリアを全選択する
  //  window.confirm(htmlsource);
}
