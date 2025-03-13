package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 库存信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2025-02-22 15:15:38
 */
@TableName("kucunxinxi")
public class KucunxinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public KucunxinxiEntity() {
		
	}
	
	public KucunxinxiEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId(type = IdType.AUTO)
	private Long id;
	/**
	 * 产品名称
	 */
					
	private String chanpinmingcheng;
	
	/**
	 * 产品编号
	 */
					
	private String chanpinbianhao;
	
	/**
	 * 产品数量
	 */
					
	private Integer chanpinshuliang;
	
	/**
	 * 进货单价
	 */
					
	private Double jinhuodanjia;
	
	/**
	 * 商家账号
	 */
					
	private String shangjiazhanghao;
	

	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：产品名称
	 */
	public void setChanpinmingcheng(String chanpinmingcheng) {
		this.chanpinmingcheng = chanpinmingcheng;
	}
	/**
	 * 获取：产品名称
	 */
	public String getChanpinmingcheng() {
		return chanpinmingcheng;
	}
	/**
	 * 设置：产品编号
	 */
	public void setChanpinbianhao(String chanpinbianhao) {
		this.chanpinbianhao = chanpinbianhao;
	}
	/**
	 * 获取：产品编号
	 */
	public String getChanpinbianhao() {
		return chanpinbianhao;
	}
	/**
	 * 设置：产品数量
	 */
	public void setChanpinshuliang(Integer chanpinshuliang) {
		this.chanpinshuliang = chanpinshuliang;
	}
	/**
	 * 获取：产品数量
	 */
	public Integer getChanpinshuliang() {
		return chanpinshuliang;
	}
	/**
	 * 设置：进货单价
	 */
	public void setJinhuodanjia(Double jinhuodanjia) {
		this.jinhuodanjia = jinhuodanjia;
	}
	/**
	 * 获取：进货单价
	 */
	public Double getJinhuodanjia() {
		return jinhuodanjia;
	}
	/**
	 * 设置：商家账号
	 */
	public void setShangjiazhanghao(String shangjiazhanghao) {
		this.shangjiazhanghao = shangjiazhanghao;
	}
	/**
	 * 获取：商家账号
	 */
	public String getShangjiazhanghao() {
		return shangjiazhanghao;
	}

}
