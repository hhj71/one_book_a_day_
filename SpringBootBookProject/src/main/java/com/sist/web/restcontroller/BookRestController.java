package com.sist.web.restcontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sist.web.dao.BookDAO;
import com.sist.web.entity.BookEntity;
import com.sist.web.entity.BookVO;
import com.sist.web.entity.NewsVO;
import com.sist.web.manager.NewsSearchManager;


@RestController
@CrossOrigin(origins = "*")
public class BookRestController {
	@Autowired
	   private BookDAO bDao;
	@Autowired
	   private NewsSearchManager mgr;
	@GetMapping("book/main_list")
    public ResponseEntity<Map> HanKangData(){
		Map<String, Object> map=new HashMap<>();
		try {
		   List<BookVO> hList=bDao.HanKangList();
		   List<BookVO> rList=bDao.MainRandomList();
		   String fd="책";
		   List<NewsVO> nList=mgr.newsFind(fd);
		   
		   map.put("nList", nList);
           map.put("hList", hList);
           map.put("rList", rList);
           
		   return new ResponseEntity<>(map, HttpStatus.OK);
		}catch(Exception ex)
		{
			return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	   }
	@GetMapping("book/AllList/{page}")
	public ResponseEntity<Map> book_all_list(@PathVariable("page") int page,
	                                          @RequestParam(value = "bgenre", required = false) String bgenre,
	                                          @RequestParam(value = "btitle", required = false) String btitle) 
	{
	    Map<String, Object> map = new HashMap<>();
	    try {
	        int rowSize = 15;
	        int start = (rowSize * page) - rowSize;
	        
	        List<BookVO> aList = bDao.bookAllList(start, bgenre, btitle);
	        int count = bDao.count(bgenre, btitle);
	        int totalpage = (int) (Math.ceil(count / (double) rowSize));

	        final int BLOCK = 10;
	        int startPage = ((page - 1) / BLOCK * BLOCK) + 1;
	        int endPage = startPage + BLOCK - 1;

	        if (endPage > totalpage) {
	            endPage = totalpage;
	        }
	        List<?> bgList = bDao.bgenreList();
	        map.put("bgList", bgList);
	        map.put("aList", aList);
	        map.put("curpage", page);
	        map.put("totalpage", totalpage);
	        map.put("startPage", startPage);
	        map.put("endPage", endPage);
	        map.put("count", count);
	    } catch (Exception ex) {
	        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	    return new ResponseEntity<>(map, HttpStatus.OK);
	}
	 @GetMapping("book/detail/{bno}")
	   public ResponseEntity<BookEntity> bookDetailData(@PathVariable("bno")int bno){
	      try {
	         BookEntity e=bDao.findBybno(bno);
	         return new ResponseEntity<>(e, HttpStatus.OK);
	      } catch (Exception e) {
	         return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	      }
	   }
}
