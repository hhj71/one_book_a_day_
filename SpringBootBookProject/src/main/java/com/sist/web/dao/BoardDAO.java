package com.sist.web.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sist.web.entity.BookBoardEntity;
import com.sist.web.entity.BookVO;

public interface BoardDAO extends JpaRepository<BookBoardEntity, Integer> {
	@Query(value="SELECT * FROM BookBoard "
    		    +"ORDER BY no DESC "
    		    +"LIMIT :start,6",nativeQuery = true)
    public List<BookBoardEntity> bookboardList(@Param("start") int start);
	
	public BookBoardEntity findByNo(int no);
	
	@Query(value="SELECT * FROM BookBoard "
		    +"ORDER BY hit DESC "
		    +"LIMIT 10 ",nativeQuery = true)
	public List<BookBoardEntity> bookboardtop10();
	
	@Query(value="SELECT bno, price, btag, bgenre, cover, btitle, writer, bdate, publisher, intro, isbn13 "
			+ "FROM book WHERE btitle LIKE CONCAT('%', :btitle ,'%') ORDER BY bno ASC ",nativeQuery = true)
	public List<BookVO> bookFindList(@Param("btitle") String btitle);
}
