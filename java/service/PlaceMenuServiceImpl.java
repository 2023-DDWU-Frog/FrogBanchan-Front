package com.example.frogbanchan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.frogbanchan.dao.PlaceMenuDao;
import com.example.frogbanchan.domain.PlaceMenu;
import com.example.frogbanchan.domain.Menu;
import com.example.frogbanchan.domain.Place;

@Service("placeMenuServiceImpl")
public class PlaceMenuServiceImpl implements PlaceMenuService {
    @Autowired
    private PlaceMenuDao placeMenuDao;


    public List<PlaceMenu> findMenuListByPlaceId(String place_id) {
        return placeMenuDao.findMenuListByPlaceId(place_id);
    }

    public List<Place> findPlaceListByMenu(int menu_id) {
        return placeMenuDao.findPlaceListByMenu(menu_id);
    }
}