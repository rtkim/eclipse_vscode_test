<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
	<title>Insert title here</title>
	<link href="/resources/css/common.css" rel="stylesheet" type="text/css">
	</head>

	<body>
		<h3>module �׽�Ʈ</h3>
		<p>
			<br />
		</p>
	<script type="module">
	//import {foo} from '/resources/js/module.js';
	//foo();	// module import

	// �Լ� ���
	//import {area, round} from '/resources/js/module.js';
	//console.log(area());	// 200
	//console.log(round());	// 60

	// �������� ���� �ޱ�
	//import {a1 as b1, a2 as b2} from '/resources/js/module.js';
	//console.log(b1);
	//console.log(b2);

	//import def, {a as b} from '/resources/js/module.js';
	//console.log(def, b);	// {} 100 : def : �⺻�� b �� a �� ����� 100�� �������� ���

	import * as module from '/resources/js/module.js';
	console.log(module);
	console.log(module.foo());
	console.log("!!");
	console.log(module.area());
</script>
</body>
</html>