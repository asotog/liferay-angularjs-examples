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

This is the <b>Learning</b> portlet for  Categories Listing.
<script type="text/javascript">
var LEARNING_PORTLET_SERVE_RESOURCE_URL = '<portlet:resourceURL />';
</script>

<div id="learning-portlet" ng-controller="CategoryCtrl">
    <h5>Categories</h5>
    <ul>
        <li ng-repeat="cat in categories">
            {{cat.name}}
        </li>
    </ul>
</div>
