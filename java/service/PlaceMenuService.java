package com.example.frogbanchan.service;

import java.util.List;

import com.example.frogbanchan.domain.PlaceMenu;
import com.example.frogbanchan.domain.Menu;
import com.example.frogbanchan.domain.Place;

public interface PlaceMenuService {

    public void insertPlaceMenu(PlaceMenu placeMenu);

    public void updatePlaceMenu(PlaceMenu placeMenu);

    public void deletePlaceMenu(int place_menu_id);

    public List<PlaceMenu> findMenuListByPlaceId(String place_id);

    public List<Place> findPlaceListByMenu(int menu_id);

}