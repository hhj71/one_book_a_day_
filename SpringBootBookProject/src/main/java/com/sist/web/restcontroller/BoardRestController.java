package com.sist.web.restcontroller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sist.web.dao.BoardDAO;
import com.sist.web.entity.BookBoardEntity;
import com.sist.web.entity.BookEntity;
import com.sist.web.entity.BookVO;

@RestController
@CrossOrigin(origins="*")
public class BoardRestController {
	@Autowired
	   private BoardDAO bDao;
		
	@GetMapping("/board/list/{page}")
	   public ResponseEntity<Map> board_list(@PathVariable("page") int page)
	   {
		   System.out.println("1");
		   Map map=new HashMap();
		   try
		   {
			   int rowSize=6;
			   int start=(page-1)*rowSize;
			   int totalpage=(int)(Math.ceil(bDao.count()/6.0));
			   
			   final int BLOCK = 6;
		        int startPage = ((page - 1) / BLOCK * BLOCK) + 1;
		        int endPage = startPage + BLOCK - 1;

		        if (endPage > totalpage) {
		            endPage = totalpage;
		        }
			   List<BookBoardEntity> list=bDao.bookboardList(start);
			   for(BookBoardEntity rb:list)
			   {
				   String day=rb.getRegdate();
				   day=day.substring(0,day.indexOf(" "));
				   rb.setRegdate(day);
			   }
			   List<BookBoardEntity> tList= bDao.bookboardtop10();
			   
			   map.put("list", list);
			   map.put("tList", tList);
			   map.put("curpage", page);
			   map.put("totalpage", totalpage);
			   map.put("startPage", startPage);
		       map.put("endPage", endPage);
			   map.put("today", new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
			   
		   }catch(Exception ex)
		   {
			   return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		   }
		   return new ResponseEntity<>(map,HttpStatus.OK);
	   }
	   //-----------------------
	   @PostMapping("/board/insert")
	   public ResponseEntity<Map> board_insert(@RequestBody BookBoardEntity vo)
	   {
		   Map map=new HashMap();
		   try
		   {
			   BookBoardEntity _vo=bDao.save(vo);
			   map.put("vo", _vo);
			   map.put("msg", "yes");
			   
		   }catch(Exception ex)
		   {
			   return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		   }
		   return new ResponseEntity<>(map,HttpStatus.CREATED);
	   }
	  @GetMapping("/board/booksearch")
	  public ResponseEntity<List<BookVO>> boardBookSearch(@RequestParam("btitle") String btitle) 
	  {
		  List<BookVO> bList = bDao.bookFindList(btitle);
	        return ResponseEntity.ok(bList);
	  }
	   @GetMapping("/board/detail/{no}")
	   public ResponseEntity<BookBoardEntity> board_detail(@PathVariable("no") int no)
	   {
		   try
		   {
			   BookBoardEntity vo=bDao.findByNo(no);
			   vo.setHit(vo.getHit()+1);
			   bDao.save(vo); 
			   vo=bDao.findByNo(no);
			   return new ResponseEntity<>(vo, HttpStatus.OK);
		   }catch(Exception ex)
		   {
			   return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		   }
	   }
}