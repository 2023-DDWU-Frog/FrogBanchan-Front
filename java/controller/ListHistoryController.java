package com.example.frogbanchan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.frogbanchan.service.FrogbanchanFacade;

@Controller
@SessionAttributes("userSession")
public class ListHistoryController {

    private FrogbanchanFacade frogbanchan;

    @Autowired
    public void setFrogbanchan(FrogbanchanFacade frogbanchan) {
        this.frogbanchan = frogbanchan;
    }

    @RequestMapping("/history/list.do")
    public ModelAndView handleRequest(
            @ModelAttribute("userSession") UserSession userSession
    ) throws Exception {
        String username = userSession.getAccount().getUsername();
        return new ModelAndView("history", "historyList",
                frogbanchan.findhistoryListsByUsername(username));
    }

}
