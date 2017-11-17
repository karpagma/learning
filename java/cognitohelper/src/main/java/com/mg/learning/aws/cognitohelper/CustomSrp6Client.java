package com.mg.learning.aws.cognitohelper;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
 
import org.bouncycastle.crypto.CryptoException;
import org.bouncycastle.crypto.Digest;
import org.bouncycastle.crypto.agreement.srp.SRP6Client;
import org.bouncycastle.crypto.agreement.srp.SRP6Util;
import org.bouncycastle.crypto.digests.SHA256Digest;
import org.bouncycastle.crypto.generators.HKDFBytesGenerator;
import org.bouncycastle.crypto.params.HKDFParameters;
 
public class CustomSrp6Client extends SRP6Client {
   
	 private static final String HEX_N =
             "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD1"
                     + "29024E088A67CC74020BBEA63B139B22514A08798E3404DD"
                     + "EF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245"
                     + "E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7ED"
                     + "EE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3D"
                     + "C2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F"
                     + "83655D23DCA3AD961C62F356208552BB9ED529077096966D"
                     + "670C354E4ABC9804F1746C08CA18217C32905E462E36CE3B"
                     + "E39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9"
                     + "DE2BCBF6955817183995497CEA956AE515D2261898FA0510"
                     + "15728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64"
                     + "ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7"
                     + "ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6B"
                     + "F12FFA06D98A0864D87602733EC86A64521F2B18177B200C"
                     + "BBE117577A615D6C770988C0BAD946E208E24FA074E5AB31"
                     + "43DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF";
     private static final BigInteger N = new BigInteger(HEX_N, 16);
     private static final BigInteger g = BigInteger.valueOf(2);
     private BigInteger k;
 
     private static final int EPHEMERAL_KEY_LENGTH = 1024;
     private static final int DERIVED_KEY_SIZE = 16;
     private static final String DERIVED_KEY_INFO = "Caldera Derived Key";
     private SecureRandom random = null;
   
    public CustomSrp6Client() {
        try {
            this.k = calculateK();
            this.digest = new SHA256Digest();
            this.random = SecureRandom.getInstance( "SHA1PRNG" );
        } catch ( NoSuchAlgorithmException e ) {
               e.printStackTrace();
            throw new RuntimeException("Exception in initializing client", e);
        }
    }
    private BigInteger calculateK() throws NoSuchAlgorithmException {
        MessageDigest messageDigest = null;
        try {
            messageDigest = MessageDigest.getInstance( "SHA-256" );
        } catch ( NoSuchAlgorithmException e ) {
            throw e;
        }
        messageDigest.reset();
        messageDigest.update(N.toByteArray());
        byte[] digest = messageDigest.digest(g.toByteArray());
        this.k = new BigInteger(1, digest);
       
        return k;
    }
   
    @Override
    public BigInteger generateClientCredentials( byte[] salt, byte[] identity, byte[] password ) {
        this.a = new BigInteger(EPHEMERAL_KEY_LENGTH, this.random).mod(N);
        this.A = g.modPow(a, N);
        return A;
    }
   
    public BigInteger calculateX( byte[] salt, byte[] identity, byte[] password ) {
        this.x = SRP6Util.calculateX(digest, N, salt, identity, password);
        return x;
    }
   
 
    @Override
    public BigInteger calculateSecret( BigInteger serverB ) throws CryptoException {
        if ( this.x == null ) {
            throw new CryptoException( "Secret cannot be calculated before calculating x" );
        }
        this.B = SRP6Util.validatePublicValue(N, serverB);
        this.u = calculateU(digest, N, A, B);
        this.S = calculateS();
 
        return S;
    }
 
   
    private BigInteger calculateS() {
        BigInteger exp = u.multiply(x).add(a);
        BigInteger tmp = g.modPow(x, N).multiply(k).mod(N);
        return B.subtract(tmp).mod(N).modPow(exp, N);
    }
   
    public byte[] generateKey() {
        HKDFParameters hkdfParameters = new HKDFParameters( this.S.toByteArray(), this.u.toByteArray(), DERIVED_KEY_INFO.getBytes() );
        HKDFBytesGenerator hkdfGenerator = new HKDFBytesGenerator( digest );
        hkdfGenerator.init( hkdfParameters );
        byte key[] = new byte[DERIVED_KEY_SIZE];
        hkdfGenerator.generateBytes( key, 0, DERIVED_KEY_SIZE );
        return key;
    }
   
    private BigInteger calculateU(Digest digest, BigInteger N, BigInteger A, BigInteger B) {
        byte[] arrayA = A.toByteArray();
        byte[] arrayB = B.toByteArray();
       
        digest.reset();
        digest.update( arrayA, 0, arrayA.length );
        digest.update( arrayB, 0, arrayB.length );
       
        byte[] op = new byte[digest.getDigestSize()];
       
        digest.doFinal( op, 0 );
        BigInteger u = new BigInteger( 1, op );
        if (u.equals(BigInteger.ZERO)) {
            throw new RuntimeException("Hash of A and B cannot be zero");
        }
        return u;
    }
}