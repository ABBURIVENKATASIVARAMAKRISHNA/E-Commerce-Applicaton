package com.retail.ecomm.requestdto;

import com.retail.ecomm.enums.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class UserRequest {
	
	@NotNull
	private String userName;
	
	@NotNull
	@Email(regexp = "[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,}", message = "invalid email ")
	private String email;
	@NotNull
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&+=]).{8,}$",message = "Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character")
	private String password;

	@NotNull
	private Role roleType;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRoleType() {
		return roleType;
	}

	public void setRoleType(Role roleType) {
		this.roleType = roleType;
	}
	
	
	
}
