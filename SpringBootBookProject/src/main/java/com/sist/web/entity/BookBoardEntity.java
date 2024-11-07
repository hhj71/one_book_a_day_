package com.sist.web.entity;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import lombok.Data;

@Entity(name="bookboard")
@Data
public class BookBoardEntity {
	@Id
    private int no;
	private String name;
    private String subject;
    private String content;
    private int bno;
    private String tag;
    private String id;
    private String btitle;
    private String bcover;
    private String bwriter;
    
    @Column(insertable = true , updatable = false)
    private String regdate;
    
    private int hit;
    
    @PrePersist
    public void regdate() {
    	this.regdate=LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")); 
    }
}
