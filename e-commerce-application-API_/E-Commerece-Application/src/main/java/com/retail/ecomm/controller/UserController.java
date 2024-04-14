package com.retail.ecomm.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.retail.ecomm.requestdto.UserRequest;
import com.retail.ecomm.responsedto.UserResponse;
import com.retail.ecomm.service.UserService;
import com.retail.ecomm.utility.ResponseStructure;

@RestController
public class UserController {

	private UserService userSerive;
	
	
	
	public UserController(UserService userSerive) {
		this.userSerive = userSerive;
	}


	@PostMapping("/users/user")
	public ResponseEntity<ResponseStructure<UserResponse>> register(@RequestBody UserRequest userRequset)
	{
		return userSerive.registerUser(userRequset);
	}
	
}
