package com.retail.ecomm.serviceimpl;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.retail.ecomm.entity.Customer;
import com.retail.ecomm.entity.Seller;
import com.retail.ecomm.entity.User;
import com.retail.ecomm.enums.Role;
import com.retail.ecomm.exceptions.UserAlreadyExistByEmailException;
import com.retail.ecomm.repository.CustomerRepo;
import com.retail.ecomm.repository.SellerRepo;
import com.retail.ecomm.repository.UserRepository;
import com.retail.ecomm.requestdto.UserRequest;
import com.retail.ecomm.responsedto.UserResponse;
import com.retail.ecomm.service.UserService;
import com.retail.ecomm.utility.ResponseStructure;


@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;
	
	private ResponseStructure<UserResponse> responseStructure;
	
	private SellerRepo sellerRepo;
	
	private CustomerRepo customerRepo;
	
	
	
	
	
	
	public UserServiceImpl(CustomerRepo customerRepo,SellerRepo sellerRepo,UserRepository userRepository, ResponseStructure<UserResponse> responseStructure) {
		this.userRepository = userRepository;
		this.responseStructure = responseStructure;
		this.sellerRepo=sellerRepo;
		this.customerRepo=customerRepo;
		
	}

	

	@Override
	public ResponseEntity<ResponseStructure<UserResponse>> registerUser(UserRequest userRequest) {
		// TODO Auto-generated method stub
		
		
		if(!userRepository.existsByEmail(userRequest.getEmail())) {
			User save = null;
			if(userRequest.getRoleType()==Role.SELLER)
			{	
				save=sellerRepo.save(mapToSeller(new Seller(), userRequest));
			}
			else if(userRequest.getRoleType().equals(Role.CUSTOMER))
			{
				save=customerRepo.save(mapToCustomer(new Customer(), userRequest));
				System.out.println("Customer");
			}
			return ResponseEntity.ok(responseStructure
					.setMessage("User Add Succes")
					.setStatusCode(HttpStatus.OK.value())
					.setData(mapToUserResponse(save, new UserResponse()))
					);
					
			
		}
		
		
		throw new UserAlreadyExistByEmailException("User Email Already exist");
		
		
		
		
	}
	
	private Seller mapToSeller(Seller seller, UserRequest userRequest)
	{
		seller.setDisplayName(userRequest.getUserName());
		seller.setEmail(userRequest.getEmail());
		seller.setUserName(convertUsername(new String(), userRequest.getEmail()));
		seller.setRoleType(userRequest.getRoleType());
		seller.setPassword(userRequest.getPassword());
		
		
		
		return seller;
	}
	
	private Customer mapToCustomer(Customer seller, UserRequest userRequest)
	{
		seller.setDisplayName(userRequest.getUserName());
		seller.setEmail(userRequest.getEmail());
		seller.setDisplayName(convertUsername(new String(), userRequest.getEmail()));
		seller.setRoleType(userRequest.getRoleType());
		seller.setPassword(userRequest.getPassword());
		
		
		
		return seller;
	}
	

	private String convertUsername(String username,String user)
	{
	
		username=user.substring(0,user.indexOf('@'));
		return username;
	}

	private UserResponse mapToUserResponse(User user, UserResponse userRes)
	{
		userRes.setEmail(user.getEmail());
		userRes.setUserId(user.getUserId());
		userRes.setUserName(user.getDisplayName());
		userRes.setRoleType(user.getRoleType());
		return userRes;
	}
}
