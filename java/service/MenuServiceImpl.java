package com.example.frogbanchan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.frogbanchan.dao.MenuDao;
import com.example.frogbanchan.domain.Menu;

@Service("menuServiceImpl")
public class MenuServiceImpl implements MenuService {
    @Autowired
    private MenuDao menuDao;

    public Menu findMenu(int menu_id) {
        return menuDao.findMenu(menu_id);
    }

    public List<Menu> findMenuList() {
        return menuDao.findMenuList();
    }

    public List<Menu> findMenuListByTagList(List<String> likeTagList, List<String> dislikeTagList) {
        return menuDao.findMenuListByTagList(likeTagList, dislikeTagList);
    }

    public List<String> findMenuTags(int menu_id) {
        return menuDao.findMenuTags(menu_id);
    }

    public List<String> findAllTag() {
        return menuDao.findAllTag();
    }
}