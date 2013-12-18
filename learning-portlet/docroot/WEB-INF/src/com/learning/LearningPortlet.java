package com.learning;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.servlet.http.HttpServletResponse;

import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.util.PortalUtil;
import com.liferay.portlet.asset.model.AssetCategory;
import com.liferay.portlet.asset.service.AssetCategoryLocalServiceUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

public class LearningPortlet extends MVCPortlet {

    @Override
    public void serveResource(ResourceRequest resourceRequest,
            ResourceResponse resourceResponse) throws IOException,
            PortletException {
        
        JSONObject jsonObject = JSONFactoryUtil.createJSONObject();
        JSONArray jsonCats = JSONFactoryUtil.createJSONArray();
        jsonObject.put("success", true);
        
        
        List<AssetCategory> categories = new ArrayList<AssetCategory>();
        
        try {
            categories = AssetCategoryLocalServiceUtil.getCategories();
            jsonObject.put("total", AssetCategoryLocalServiceUtil.getAssetCategoriesCount());
             
        } catch (SystemException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }
        
        for (AssetCategory assetCategory : categories) {
            JSONObject cat = JSONFactoryUtil.createJSONObject();
            cat.put("name", assetCategory.getName());
            jsonCats.put(cat);
        }
        
        jsonObject.put("results", jsonCats);
        
        HttpServletResponse servletResponse = PortalUtil
                        .getHttpServletResponse(resourceResponse);
        PrintWriter pw;
        try {
            pw = servletResponse.getWriter();
            pw.write(jsonObject.toString());
            pw.close();
        } catch (IOException e) {
        }
    }
    
}
