package com.example.frogbanchan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.frogbanchan.domain.PlaceMenu;
import com.example.frogbanchan.service.FrogbanchanFacade;

@Controller
@SessionAttributes("userSession")
public class ListPlaceMenuController {

    private FrogbanchanFacade frogbanchan;

    @Autowired
    public void setFrogbanchan(FrogbanchanFacade frogbanchan) {
        this.frogbanchan = frogbanchan;
    }

    @RequestMapping("/placemenu/list.do")
    public String handleRequest(ModelMap model)
            throws Exception {
        List<PlaceMenu> placeMenuList = new List<PlaceMenu>(this.frogbanchan.findMenuListByPlaceId());
        model.put("partyList", partyList);
        return "Party";
    }
}