package com.retail.ecomm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.retail.ecomm.entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {

}
