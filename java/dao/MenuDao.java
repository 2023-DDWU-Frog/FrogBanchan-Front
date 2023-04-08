package com.frogbanchan.dao;

import java.nio.channels.DatagramChannel;
import java.util.List;
import java.util.zip.DataFormatException;

import org.springframework.dao.DataAccessException;
import com.frogbanchan.domain.Menu;
import com.frogbanchan.domain.Tag;

public interface MenuDao {
    //메뉴 조회
    Menu findMenu(int menu_id) throws DataAccessException;
    //[SELECT * FROM MENU WHERE MENU_ID = ?]

    //태그 리스트 조회
    List<Tag> findMenuTags(int menu_id) throws DataAccessException;
    //[SELECT *
    // FROM TAG JOIN CONTAINS ON TAG.TAG_ID = CONTAINS.TAG_ID
    // WHERE MENU_ID = ?]

    //메뉴 리스트 조회
    List<Menu> findMenuLists() throws DataAccessException;
    //[SELECT * FROM MENU]

    //태그로 메뉴 조회
    Menu findMenuByTag(int tag_id) throws DataAccessException;
    //[SELECT *
    // FROM MENU JOIN CONTAINS ON MENU.MENU_ID = CONTAINS.MENU_ID
    // WHERE TAG_ID = ?]
}
