package com.sist.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

/*
 * BNO int 
BTAG text 
BGENRE text 
COVER text 
BTITLE text 
WRITER text 
PRICE int 
BDATE text 
PUBLISHER text 
INTRO text 
ISBN13 double
 */
@Entity(name="book")
@Data
public class BookEntity {
	@Id
	private int bno;
	private int price;
	private String btag, bgenre, cover, btitle, writer, bdate, publisher, intro;
	private double isbn13;
}
