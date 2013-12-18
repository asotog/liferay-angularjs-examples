package com.learning;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.util.PortalUtil;
import com.liferay.portlet.asset.model.AssetCategory;
import com.liferay.portlet.asset.service.AssetCategoryLocalServiceUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

public class ThirdLearningPortlet extends MVCPortlet {

    @Override
    public void serveResource(ResourceRequest resourceRequest,
            ResourceResponse resourceResponse) throws IOException,
            PortletException {
        HttpServletRequest httpReq = PortalUtil.getOriginalServletRequest(PortalUtil.getHttpServletRequest(resourceRequest)); 
        JSONObject jsonObject = JSONFactoryUtil.createJSONObject();
        JSONArray jsonCats = JSONFactoryUtil.createJSONArray();
        List<AssetCategory> categories = new ArrayList<AssetCategory>();
        
        int start = ParamUtil.getInteger(httpReq, "start");
        int end = ParamUtil.getInteger(httpReq, "end");

        jsonObject.put("success", true);
        jsonObject.put("start", start);
        jsonObject.put("end", end);
        
        try {
            categories = AssetCategoryLocalServiceUtil.getAssetCategories(
                    start, end);
            jsonObject.put("total",
                    AssetCategoryLocalServiceUtil.getAssetCategoriesCount());
        } catch (SystemException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        for (AssetCategory assetCategory : categories) {
            JSONObject cat = JSONFactoryUtil.createJSONObject();
            cat.put("name", assetCategory.getName());
            jsonCats.put(cat);
        }

        jsonObject.put("results", jsonCats);
        
        PrintWriter writer = resourceResponse.getWriter();
        writer.write(jsonObject.toString());
    }
    
    private static final Log _log = LogFactoryUtil.getLog(ThirdLearningPortlet.class);
}
