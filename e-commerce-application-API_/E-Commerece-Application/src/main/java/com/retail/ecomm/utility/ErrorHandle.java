package com.retail.ecomm.utility;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.retail.ecomm.exceptions.UserAlreadyExistByEmailException;

@RestControllerAdvice
public class ErrorHandle {

	@ExceptionHandler
	public ResponseEntity<ErrorStructure<String>> handleUserAlreadyExistByEmail(UserAlreadyExistByEmailException ex)
	{
		return new ResponseEntity<ErrorStructure<String>>(new ErrorStructure<String>()
				.setMessage("Already Exist")
				.setStatusCode(HttpStatus.BAD_REQUEST.value())
				.setData(ex.getMessage())
				,HttpStatus.BAD_REQUEST);

	}
	
}

