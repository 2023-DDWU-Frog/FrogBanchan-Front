package com.example.frogbanchan.service;

import java.util.List;

import com.example.frogbanchan.domain.History;

public interface HistoryService {

    public History findHistory(String username, Timestamp recorded_date);

    public List<History> findHistoryListsByUsername(String username);

    public void insertHistory(String username, String place_id);

    public void updateHistory(String username, History history);

    public void deleteHistory(String username, Timestamp recorded_date);

}