package com.example.frogbanchan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.frogbanchan.dao.HistoryDao;
import com.example.frogbanchan.domain.History;

@Service("historyServiceImpl")
public class HistoryServiceImpl implements HistoryService {
    @Autowired
    private HistoryDao historyDao;

    public History findHistory(String username, Timestamp recorded_date) {
        return historyDao.findHistory(String username, Timestamp recorded_date);
    }

    public List<History> findHistoryListsByUsername(String username) {
        return historyDao.findHistoryListsByUsername(String username);
    }

}