package com.cl.dao;

import com.cl.entity.YonghuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.YonghuView;


/**
 * 用户
 * 
 * @author 
 * @email 
 * @date 2025-02-22 15:15:37
 */
public interface YonghuDao extends BaseMapper<YonghuEntity> {
	
	List<YonghuView> selectListView(@Param("ew") Wrapper<YonghuEntity> wrapper);

	List<YonghuView> selectListView(Pagination page,@Param("ew") Wrapper<YonghuEntity> wrapper);
	
	YonghuView selectView(@Param("ew") Wrapper<YonghuEntity> wrapper);


}
