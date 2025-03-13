package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.KucunxinxiEntity;
import com.cl.entity.view.KucunxinxiView;

import com.cl.service.KucunxinxiService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.MapUtils;
import com.cl.utils.CommonUtil;

/**
 * 库存信息
 * 后端接口
 * @author 
 * @email 
 * @date 2025-02-22 15:15:38
 */
@RestController
@RequestMapping("/kucunxinxi")
public class KucunxinxiController {
    @Autowired
    private KucunxinxiService kucunxinxiService;







    /**
     * 后台列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,KucunxinxiEntity kucunxinxi,
                                                                                            HttpServletRequest request){
                    String tableName = request.getSession().getAttribute("tableName").toString();
                                                                                                                                                            if(tableName.equals("shangjia")) {
                    kucunxinxi.setShangjiazhanghao((String)request.getSession().getAttribute("username"));
                                    }
                                                                EntityWrapper<KucunxinxiEntity> ew = new EntityWrapper<KucunxinxiEntity>();
                                                                                                                                        
        
        
        PageUtils page = kucunxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, kucunxinxi), params), params));
        return R.ok().put("data", page);
    }
    
    
    
    
    
    
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,KucunxinxiEntity kucunxinxi, 
		HttpServletRequest request){
        EntityWrapper<KucunxinxiEntity> ew = new EntityWrapper<KucunxinxiEntity>();

		PageUtils page = kucunxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, kucunxinxi), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( KucunxinxiEntity kucunxinxi){
       	EntityWrapper<KucunxinxiEntity> ew = new EntityWrapper<KucunxinxiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( kucunxinxi, "kucunxinxi")); 
        return R.ok().put("data", kucunxinxiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(KucunxinxiEntity kucunxinxi){
        EntityWrapper< KucunxinxiEntity> ew = new EntityWrapper< KucunxinxiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( kucunxinxi, "kucunxinxi")); 
		KucunxinxiView kucunxinxiView =  kucunxinxiService.selectView(ew);
		return R.ok("查询库存信息成功").put("data", kucunxinxiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        KucunxinxiEntity kucunxinxi = kucunxinxiService.selectById(id);
		kucunxinxi = kucunxinxiService.selectView(new EntityWrapper<KucunxinxiEntity>().eq("id", id));
        return R.ok().put("data", kucunxinxi);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        KucunxinxiEntity kucunxinxi = kucunxinxiService.selectById(id);
		kucunxinxi = kucunxinxiService.selectView(new EntityWrapper<KucunxinxiEntity>().eq("id", id));
        return R.ok().put("data", kucunxinxi);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody KucunxinxiEntity kucunxinxi, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(kucunxinxi);
        kucunxinxiService.insert(kucunxinxi);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody KucunxinxiEntity kucunxinxi, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(kucunxinxi);
        kucunxinxiService.insert(kucunxinxi);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody KucunxinxiEntity kucunxinxi, HttpServletRequest request){
        //ValidatorUtils.validateEntity(kucunxinxi);
        kucunxinxiService.updateById(kucunxinxi);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        kucunxinxiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<KucunxinxiEntity> wrapper = new EntityWrapper<KucunxinxiEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(MPUtil.camelToSnake(columnName), map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(MPUtil.camelToSnake(columnName), map.get("remindend"));
		}

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("shangjia")) {
			wrapper.eq("shangjiazhanghao", (String)request.getSession().getAttribute("username"));
		}

		int count = kucunxinxiService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	









}
