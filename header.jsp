<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<style>
.header {
	font-weight: bold;
	font-size: 15px;
	margin: 20px;
}

.header a,
.login_sign a {
	text-decoration: none;
  color: black;
}

.header hr {
	border: none;
	margin-top: 10px;
	margin-bottom: 0px;
	border-top: 1px solid #E3E7EB;
}

.logo {
  font-size: 20px;
  color: #fff;
	width: 83px;
	padding: 5px;
	background-color: #00FF4D;
	border-radius: 30px;
}

#user_name {
  text-decoration: underline;
}

.login_sign {
	margin-top: 5px;
	float: right;
	margin-bottom: 5px;
}
</style>
</head>

<body>
	<div class="header">
		<a href="<c:url value='/'/>"><span class="logo">개구리반찬</span></a>
		
		<div class="login_sign">
			 <span id="user_name">aaa님</span>
			 <a href="<c:url value='/user/logout'/>" id="logout">
       		 <span>로그아웃</span></a>
		</div>
    
		<hr>
	</div>	
</body>
</html>