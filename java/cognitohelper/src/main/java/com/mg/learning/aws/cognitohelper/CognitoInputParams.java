package com.mg.learning.aws.cognitohelper;

public class CognitoInputParams {
	private String region;
	private String userPooId;
	private String clientId;
	private String clientSecret;
	private String userName;
	private String password;
	private String identityPoolId;
	
	public String getUserPooId() {
		return userPooId;
	}
	public void setUserPooId(String userPooId) {
		this.userPooId = userPooId;
	}
	public String getClientId() {
		return clientId;
	}
	public void setClientId(String clientId) {
		this.clientId = clientId;
	}
	public String getClientSecret() {
		return clientSecret;
	}
	public void setClientSecret(String clientSecret) {
		this.clientSecret = clientSecret;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getIdentityPoolId() {
		return identityPoolId;
	}
	public void setIdentityPoolId(String identityPoolId) {
		this.identityPoolId = identityPoolId;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getIssuer() {
		return "cognito-idp." + this.getRegion() + ".amazonaws.com/" + this.getUserPooId();
	}
}
