package com.mg.learning.aws.cognitohelper;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.SimpleTimeZone;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.bouncycastle.crypto.agreement.srp.SRP6Client;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AnonymousAWSCredentials;
import com.amazonaws.services.cognitoidentity.AmazonCognitoIdentity;
import com.amazonaws.services.cognitoidentity.AmazonCognitoIdentityClient;
import com.amazonaws.services.cognitoidentity.model.GetIdRequest;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClient;
import com.amazonaws.services.cognitoidp.model.AuthFlowType;
import com.amazonaws.services.cognitoidp.model.AuthenticationResultType;
import com.amazonaws.services.cognitoidp.model.InitiateAuthRequest;
import com.amazonaws.services.cognitoidp.model.InitiateAuthResult;
import com.amazonaws.services.cognitoidp.model.RespondToAuthChallengeRequest;
import com.amazonaws.services.cognitoidp.model.RespondToAuthChallengeResult;

public class CognitoHelper {
	
	private AWSCognitoIdentityProviderClient awsCognitoIdentityProviderClient;
	private CustomSrp6Client srp6Client;
	private CognitoInputParams cognitoParams;
	
	public CognitoHelper(CognitoInputParams cognitoParams) {
		this.cognitoParams = cognitoParams;
		srp6Client = new CustomSrp6Client();
		awsCognitoIdentityProviderClient = 
			new AWSCognitoIdentityProviderClient(this.createAnonymousAWSCredentials());
	}
	
	public AWSCredentials getAWSCredentials() throws Exception {
		
		// login 
		AuthenticationResultType authenticationResult = this.login(this.cognitoParams);
		
		System.out.println("access token " + authenticationResult.getAccessToken());
		System.out.println("refresh token " + authenticationResult.getRefreshToken());
		System.out.println("id token " + authenticationResult.getIdToken());
		
		/*AnonymousAWSCredentials awsAnonymousCredentials = 
				new AnonymousAWSCredentials();
		AmazonCognitoIdentity awsCognitoIdentityClient = 
				new AmazonCognitoIdentityClient(this.createAnonymousAWSCredentials());
		
		GetIdRequest getIdRequest = new GetIdRequest();
		getIdRequest.setIdentityPoolId(this.cognitoParams.getIdentityPoolId());
		Map<String, String> logins = new HashMap<>();*/
		
		return null;
		
	}
	
	private AuthenticationResultType login(CognitoInputParams input) throws Exception {
		InitiateAuthRequest authRequest = createAuthRequest();
		InitiateAuthResult initiateAuthResult = 
				this.awsCognitoIdentityProviderClient.initiateAuth(authRequest);
		RespondToAuthChallengeRequest authChallengeRequest = this.respondToAuthRequest(initiateAuthResult);
		RespondToAuthChallengeResult  authChallengeResult = 
				this.awsCognitoIdentityProviderClient.respondToAuthChallenge(authChallengeRequest);
		return authChallengeResult.getAuthenticationResult();
	}

	private static AnonymousAWSCredentials createAnonymousAWSCredentials() {
		return new AnonymousAWSCredentials();
	}
	
	private InitiateAuthRequest createAuthRequest() throws Exception {
		String clientId = this.cognitoParams.getClientId();
		String clientSecret = this.cognitoParams.getClientSecret();
		String username = this.cognitoParams.getUserName();
								
		BigInteger clientCredentials = this.generateClientCredentials();
		String secretHash = generateSecretHash(clientId, clientSecret, username);
		
		InitiateAuthRequest authRequest = new InitiateAuthRequest();
		authRequest.addAuthParametersEntry("USERNAME", username);
		authRequest.addAuthParametersEntry("SRP_A", clientCredentials.toString(16));
		authRequest.addAuthParametersEntry("SECRET_HASH", secretHash);
		authRequest.setAuthFlow(AuthFlowType.USER_SRP_AUTH);
		
		return authRequest;
		
	}
	
	private BigInteger generateClientCredentials() {
		final String userPoolId = this.cognitoParams.getUserPooId();
		final String username = this.cognitoParams.getUserName();
		final String password = this.cognitoParams.getPassword();
		
		final String identity = userPoolId.split("_", 2)[1] + username;
		final byte[] identityBytes = identity.getBytes(StandardCharsets.UTF_8);
		final byte[] passwordBytes = password.getBytes(StandardCharsets.UTF_8);
		return srp6Client.generateClientCredentials(null, identityBytes, passwordBytes);
	}
	
	private static String generateSecretHash(String clientId, String clientSecret, String username) throws Exception {
		byte[] clientSecretBytes = clientSecret.getBytes(StandardCharsets.UTF_8);
		SecretKeySpec secretKeySpec = new SecretKeySpec(clientSecretBytes, "HmacSHA256");
		Mac mac = Mac.getInstance("HmacSHA256");
		mac.init(secretKeySpec);
		mac.update(username.getBytes(StandardCharsets.UTF_8));
		byte[] rawHmac = mac.doFinal(clientSecretBytes);
		return new String(Base64.getEncoder().encode(rawHmac), StandardCharsets.UTF_8);
	}
	
	
	public RespondToAuthChallengeRequest respondToAuthRequest(InitiateAuthResult initiateAuthResult) throws Exception {
        final String clientId = this.cognitoParams.getClientId();
        final String clientSecret = this.cognitoParams.getClientSecret();
        final String userPoolId = this.cognitoParams.getUserPooId();
        final String password = this.cognitoParams.getPassword();
                        	   
		RespondToAuthChallengeRequest respondToAuthChallengeRequest = new RespondToAuthChallengeRequest();
		Map<String, String> challenge = initiateAuthResult.getChallengeParameters();

		BigInteger B = new BigInteger(challenge.get("SRP_B"), 16);
		BigInteger salt = new BigInteger(challenge.get("SALT"), 16);

		String userName = challenge.get("USERNAME");

		final String poolId = userPoolId.split("_", 2)[1];

		srp6Client.calculateX(salt.toByteArray(), (poolId + userName).getBytes(StandardCharsets.UTF_8),
					   password.getBytes(StandardCharsets.UTF_8));

		srp6Client.calculateSecret(B);

		byte[] key = srp6Client.generateKey();

		Date timestamp = new Date();

		Mac mac = Mac.getInstance("HmacSHA256");
		SecretKeySpec keySpec = new SecretKeySpec(key, "HmacSHA256");
		mac.init(keySpec);
		mac.update(poolId.getBytes(StandardCharsets.UTF_8));
		mac.update(userName.getBytes(StandardCharsets.UTF_8));
		byte[] secretBlock = Base64.getDecoder().decode(challenge.get("SECRET_BLOCK"));
		mac.update(secretBlock);
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("EEE MMM d HH:mm:ss z yyyy", Locale.US);
		simpleDateFormat.setTimeZone(new SimpleTimeZone(SimpleTimeZone.UTC_TIME, "UTC"));
		String dateString = simpleDateFormat.format(timestamp);
		byte[] dateBytes = dateString.getBytes(StandardCharsets.UTF_8);
		byte[] hmac = mac.doFinal(dateBytes);

		String userNameInternal = challenge.get("USERNAME");

		final String secretHash = generateSecretHash(userNameInternal, clientId, clientSecret);

		SimpleDateFormat formatTimestamp = new SimpleDateFormat("EEE MMM d HH:mm:ss z yyyy", Locale.US);
		formatTimestamp.setTimeZone(new SimpleTimeZone(SimpleTimeZone.UTC_TIME, "UTC"));

		respondToAuthChallengeRequest.setChallengeName(initiateAuthResult.getChallengeName());
		respondToAuthChallengeRequest.setClientId(clientId);
		respondToAuthChallengeRequest.setSession(initiateAuthResult.getSession());

		respondToAuthChallengeRequest.addChallengeResponsesEntry("PASSWORD_CLAIM_SECRET_BLOCK",
					   challenge.get("SECRET_BLOCK"));
		respondToAuthChallengeRequest.addChallengeResponsesEntry("PASSWORD_CLAIM_SIGNATURE",
					   new String(Base64.getEncoder().encode(hmac), StandardCharsets.UTF_8));
		respondToAuthChallengeRequest.addChallengeResponsesEntry("TIMESTAMP", formatTimestamp.format(timestamp));
		respondToAuthChallengeRequest.addChallengeResponsesEntry("USERNAME", userName);
		respondToAuthChallengeRequest.addChallengeResponsesEntry("USER_ID_FOR_SRP", userName);
		respondToAuthChallengeRequest.addChallengeResponsesEntry("SECRET_HASH", secretHash);
		return respondToAuthChallengeRequest;
	}
}
