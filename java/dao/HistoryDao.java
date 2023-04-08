package com.frogbanchan.dao;

import java.nio.channels.DatagramChannel;
import java.util.List;
import java.util.zip.DataFormatException;

import org.springframework.dao.DataAccessException;
import com.frogbanchan.domain.History;

public interface HistoryDao {
    //히스토리 조회
    History findHistory(String username, Timestamp recorded_date) throws DataAccessException;
    //[SELECT * FROM HISTORY WHERE USERNAME = ? AND RECORDED_DATE = ?]

    //히스토리 리스트 조회
    List<History> findHistoryListsByUsername(String username) throws DataAccessException;
    //[SELECT * FROM HISTORY WHERE USERNAME = ?]

    //히스토리 생성
    void insertHistory(History history) throws DataAccessException;
    //[INSERT INTO HISTORY (USERNAME, RECORDED_DATE, MENU_ID, PLACE_ID, SCORE) VALUES]

    //히스토리 수정
    void updateHistory(History history) throws DataAccessException;
    //[UPDATE HISTORY SET MENU_ID = ?, SCORE = ? WHERE USERNAME = ? AND RECORDED_DATE = ?] 팀 이름, 주소 변경

}
