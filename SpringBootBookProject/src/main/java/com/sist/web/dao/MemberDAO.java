package com.sist.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sist.web.entity.BookMemberEntity;

public interface MemberDAO extends JpaRepository<BookMemberEntity, Integer> {
	@Query(value="SELECT COUNT(*) FROM BookMember "
		    +"WHERE id=:id",nativeQuery = true)
public int idCount(@Param("id") String id);

public BookMemberEntity findById(String id);
}
