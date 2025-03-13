package com.cl.entity.view;

import com.cl.entity.KucunxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 库存信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2025-02-22 15:15:38
 */
@TableName("kucunxinxi")
public class KucunxinxiView  extends KucunxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public KucunxinxiView(){
	}
 
 	public KucunxinxiView(KucunxinxiEntity kucunxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, kucunxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}



}
