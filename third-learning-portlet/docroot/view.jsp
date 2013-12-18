<%
/**
 * Copyright (c) 2000-2013 Liferay, Inc. All rights reserved.
 *
 * The contents of this file are subject to the terms of the Liferay Enterprise
 * Subscription License ("License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License by
 * contacting Liferay, Inc. See the License for the specific language governing
 * permissions and limitations under the License, including but not limited to
 * distribution rights of the Software.
 *
 *
 *
 */
%>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />
<pre>var LEARNING_PORTLET_SERVE_RESOURCE_URL = '<portlet:resourceURL />';</pre>
This is the <b>Third Learning</b> portlet.
<script type="text/javascript">
var THIRD_LEARNING_PORTLET_SERVE_RESOURCE_URL = '<portlet:resourceURL />';
</script>
<div id="third-learning-portlet">
    <h2>Routes configuration</h2>
    <a href="#/">Base Path: Passes ALL</a>
    <br/>
    <a href="#/results/start/0/end/4/">Other Path: Passes PAGINATED</a>
    <div ng-view></div>
    
    <h3>Route changes listener controller</h3>
    <div ng-controller="RouteListenerCtrl">
        {{data}}
    </div>
</div>