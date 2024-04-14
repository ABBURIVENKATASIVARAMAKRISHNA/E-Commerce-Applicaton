package com.retail.ecomm.responsedto;

import com.retail.ecomm.enums.Role;



public class UserResponse {

	private int userId;
	
	private String userName;
	
	private String email;
	
	private Role roleType;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

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

	public Role getRoleType() {
		return roleType;
	}

	public void setRoleType(Role roleType) {
		this.roleType = roleType;
	}
	
	
}
