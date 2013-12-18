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

This is the <b>Second Learning</b> portlet for Category Adding.
<script type="text/javascript">
var SECOND_LEARNING_PORTLET_SERVE_RESOURCE_URL = '<portlet:resourceURL />';
</script>

<div id="second-learning-portlet"  ng-controller="CategoryCtrl">
    <form ng-submit="addCategory()">
        <label>Name:</label>
         <input type="text" ng-model="categoryName" placeholder="Enter a name here" required>
         <input class="btn-primary" type="submit" value="add">
    </form>
    <hr>
    <h1>Typing {{categoryName}} as category name</h1>
</div>