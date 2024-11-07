package com.sist.web.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sist.web.entity.BookEntity;
import com.sist.web.entity.BookVO;


@Repository
public interface BookDAO extends JpaRepository<BookEntity, Integer>{
	@Query(value="SELECT bno, price, btag, bgenre, cover, btitle, writer, bdate, publisher, intro, isbn13 "
			+ "FROM book WHERE writer LIKE CONCAT('%','한강','%') ORDER BY bno ASC ",nativeQuery = true)
	public List<BookVO> HanKangList();
	
	@Query(value="SELECT bno, price, btag, bgenre, cover, btitle, writer, bdate, publisher, intro, isbn13 "
			+ "FROM book ORDER BY rand() "
			+ "LIMIT 0,8" ,nativeQuery = true)
	public List<BookVO> MainRandomList();
	
	@Query(value="SELECT bno, price, btag, bgenre, cover, btitle, writer, bdate, publisher, intro, isbn13 "
            + "FROM book "
            + "WHERE (:bgenre IS NULL OR bgenre LIKE CONCAT('%', :bgenre, '%')) "
            + "AND (:btitle IS NULL OR btitle LIKE CONCAT('%', :btitle, '%')) "
            + "ORDER BY bno ASC "
            + "LIMIT :start, 15", nativeQuery = true)
	public List<BookVO> bookAllList(@Param("start") int start, 
                                  @Param("bgenre") String bgenre,
                                  @Param("btitle") String btitle);
	
	@Query(value="SELECT COUNT(*) FROM book WHERE (:bgenre IS NULL OR bgenre LIKE CONCAT('%', :bgenre, '%')) "
	         + "AND (:btitle IS NULL OR btitle LIKE CONCAT('%', :btitle, '%'))", nativeQuery = true)
	public int count(@Param("bgenre") String bgenre, @Param("btitle") String btitle);
	
	@Query(value="SELECT bgenre, COUNT(bgenre) FROM book GROUP BY bgenre ", nativeQuery = true)
	public List<?> bgenreList();
	
	public BookEntity findBybno(int bno);

}
