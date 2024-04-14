package com.retail.ecomm.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.retail.ecomm.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {


	boolean existsByEmail(String email);

}
