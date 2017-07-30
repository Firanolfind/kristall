<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="<%=PUBLIC_PATH(CONFIG.paths.build.images.favicon.file)%>" rel="shortcut icon">
	<link href="<%=PUBLIC_PATH(CONFIG.paths.build.styles[DEV ? 'file' : 'file_min'])%>" rel="stylesheet">
	<title><%=CONFIG.project.title%></title>
</head>
<body 
	data-title="<%=CONFIG.project.title%>" 
	data-name="<%=CONFIG.project.name%>" 
	data-version="<%=CONFIG.project.version%>" 
	data-env="<%=NODE_ENV%>">
		<div id="<%=CONFIG.app.id%>"></div>
		<script src="<%=PUBLIC_PATH(CONFIG.paths.build.client[DEV ? 'file' : 'file_min'])%>"></script>
</body>
</html>