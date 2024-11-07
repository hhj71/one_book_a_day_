package com.sist.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity(name="bookmember")
@Data
public class BookMemberEntity {
	@Id
	  private int no;
	  private String id,name,pwd;
}
