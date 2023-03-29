<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>

*{padding:0;margin:25px;color:black}

span {
  width: 180px;
  height: 40px;
  background-color: lightgreen;
  color: white; 
  display: inline-block;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  position: relative;
  top: 30px;
  font-size: 25px;
}

hr {
  display: inline-block;
  border: solid black 1px;
  width: 100%;
  margin: 0px;
}

span + hr {
  width: 80%;
  position: relative;
  top: 30px;
}

/*������ css*/
.team {
  overflow: hidden;
  margin: 50px;
}

li {
  margin: 0px 30px;
  float: left;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid black 1px;
  text-align: center;
  line-height: 100px;
  position: relative;
  display: inline-block;
  list-style:none
}

.team > li:hover {
  background-color: red;
  color: white;
  border: white;
  transition-duration: 1s;
}

li > p {
	line-height: 1px;
}

#team_name {
	width: 130px;
  	height: 50px;
  	background-color: lightgreen;
 	color: white; 
 	border-radius: 0%;
 	border: white;
 	position: relative;
 	top: 30px;
 	line-height: 50px;
 	font-weight: bold;
 	font-size: 25px;
}

#addPerson {
	border: dashed 1px;
}

/*��ġ���� css*/
.place {
	margin: 50px 200px;
}

.place > li {
	border-radius: 0%;
  	border: solid black 1px;
  	width: 300px;
  	height: 50px;
  	margin-bottom: 30px;
  	border-radius: 20%;
  	line-height: 40px;
}

/*��ġ ���� �˾� css*/
#place_change {
	text-decoration-line: none;
}

</style>
</head>
<body>
	<div class="team_info">
    <span>�� ����</span>
    <hr/>
		<ul class="team">
			<li id="team_name">���̸�</li>
			<li>����1</li>
			<li>����2</li>
			<li>����3</li>
			<li>����4</li>
			<li id="addPerson">+</li>
		</ul>
    <hr/>
	</div>
	<div class="team_place">
    <span>�� ��ġ ����</span>
    <hr/>
		<ul class="place">
			<li id="place_now" style="margin-right: 100px">������ġ : ���ϱ� ���</li>
			<li id="place_change" style="margin-left: 100px"><a href="#pop_info_place" class="btn_open">����</a></li>
		</ul>
    <hr/>
	</div>
	
	<!-- �˾�1 -->
	<div id="pop_info_place" class="pop_wrap" style="display:none;">
	  <div class="pop_inner">
	    <p class="dsc">�˾� �ȳ����� �Դϴ�.</p>
	    <button type="button" class="btn_close">�ݱ�</button>
	  </div>
	</div>
	
	<!-- �˾�2 -->
	<div id="pop_info_place" class="pop_wrap" style="display:none;">
	  <div class="pop_inner">
	    <p class="dsc">�˾� �ȳ����� �Դϴ�222.</p>
	    <button type="button" class="btn_close">�ݱ�</button>
	  </div>
	</div>
	
	<script>
		var target_open = document.querySelectorAll('.btn_open'); // Ŭ���� ��ư��Ҹ�? ���� ó��
		var target_close = document.querySelectorAll('.btn_close');
		var targetID; 
		  // �˾� ����
		 for(var i = 0; i < target_open.length; i++){
		   target_open[i].addEventListener('click', function(){
		     targetID = this.getAttribute('href');;
		     document.querySelector(targetID).style.display = 'block';
		   });
		  }	
		  
		  // �˾� �ݱ�
		  for(var j = 0; j < target_close.length; j++){
			  target_close[j].addEventListener('click', function(){
		      this.parentNode.parentNode.style.display = 'none';
		    });
		  }
	</script>
</body>
</html>