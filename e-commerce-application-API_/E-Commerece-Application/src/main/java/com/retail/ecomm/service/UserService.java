package com.retail.ecomm.service;

import org.springframework.http.ResponseEntity;

import com.retail.ecomm.requestdto.UserRequest;
import com.retail.ecomm.responsedto.UserResponse;
import com.retail.ecomm.utility.ResponseStructure;

public interface UserService {

	ResponseEntity<ResponseStructure<UserResponse>> registerUser(UserRequest userRequest);
}
