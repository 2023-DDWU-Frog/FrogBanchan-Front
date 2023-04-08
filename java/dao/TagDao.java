package com.frogbanchan.dao;

import java.nio.channels.DatagramChannel;
import java.util.List;
import java.util.zip.DataFormatException;

import org.springframework.dao.DataAccessException;
import com.frogbanchan.domain.Tag;

public interface TagDao {
    //태그 조회
    Tag findTag(int tag_id) throws DataAccessException;
    //[SELECT * FROM TAG WHERE TAG_ID = ?]

    //태그 리스트 조회
    List<Tag> findTagLists() throws DataAccessException;
    //[SELECT * FROM TAG]

}
