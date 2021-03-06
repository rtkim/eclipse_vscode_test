<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
	<title>TODO LIST!!! eclipse commit!!</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/resources/css/app.css" />
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="contents">
		<h1>TODO LIST</h1>
		<div class="insert-form row">
			<div class="col-lg-12">
				<div class="input-group">
					<input type="text" id="value" class="form-control" placeholder="할일을 입력해 주세요." autofocus>
					<span class="input-group-btn">
						<button id="btn" class="btn btn-primary" type="submit">저장</button>
					</span>
				</div><!-- /input-group -->
			</div><!-- /.col-lg-12 -->
		</div><!-- /.row -->
		<table class="table table-striped">
			<colgroup>
			    <col>
			    <col style="width:150px">
			    <col style="width:130px">
			</colgroup>
			<thead>
				<tr>
					<th>내용</th>
					<th>시간</th>
					<th>설정</th>
				</tr>
			</thead>
			<tbody id="list">
				<!-- insert todo list -->
			</tbody>
		</table>
	</div>
	<script type="module" src="/resources/app.js"></script>
</body>
</html>