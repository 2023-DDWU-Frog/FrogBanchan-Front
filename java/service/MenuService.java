package com.example.frogbanchan.service;

import java.util.List;

import com.example.frogbanchan.domain.Menu;

public interface MenuService {

    public Menu findMenu(int menu_id);

    public List<Menu> findMenuList();

    public List<Menu> findMenuListByTagList(List<String> likeTagList, List<String> dislikeTagList);

    public List<String> findMenuTags(int menu_id);

    public List<String> findAllTag();

}