package com.cl.dao;

import com.cl.entity.ShangpinleixingEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShangpinleixingView;


/**
 * 商品类型
 * 
 * @author 
 * @email 
 * @date 2025-02-22 15:15:37
 */
public interface ShangpinleixingDao extends BaseMapper<ShangpinleixingEntity> {
	
	List<ShangpinleixingView> selectListView(@Param("ew") Wrapper<ShangpinleixingEntity> wrapper);

	List<ShangpinleixingView> selectListView(Pagination page,@Param("ew") Wrapper<ShangpinleixingEntity> wrapper);
	
	ShangpinleixingView selectView(@Param("ew") Wrapper<ShangpinleixingEntity> wrapper);


}
