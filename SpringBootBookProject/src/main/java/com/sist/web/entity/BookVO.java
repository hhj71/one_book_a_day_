package com.sist.web.entity;
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
public interface BookVO {
	public int getBno();
	public String getBtag();
	public String getBgenre();
	public String getCover();
	public String getBTitle();
	public String getWriter();
	public int getPrice();
	public String getBdate();
	public String getPublisher();
	public String getIntro();
	public double getIsbn13();
}
