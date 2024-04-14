package com.retail.ecomm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.retail.ecomm.entity.Seller;

public interface SellerRepo  extends JpaRepository<Seller, Integer>{

}
