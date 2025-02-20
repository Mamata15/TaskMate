package com.taskmanagement.config;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Base64;

@Component
public class Jwtutilconfig {
    
    @Value("${jwt.secret}")
    private String secretKey;

    private Key getSigningKey() {
        byte[] keyBytes = Base64.getDecoder().decode(secretKey); // Decode the Base64-encoded secret key
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey()) // Use the correct key format
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public int extractUserId(String token) {
        try {
            return extractAllClaims(token).get("userId", Integer.class);
        } catch (ExpiredJwtException e) {
            throw new JwtException(e.getMessage());
        }
    }

    public String extractEmail(String token) {
        return extractAllClaims(token).get("email", String.class);
    }

    public String getUserFromToken(String token) {
        if (token == null || !token.startsWith("Bearer ")) {
            return null;
        }
        token = token.substring(7); // Extract the actual token
        return extractEmail(token);
    }
}
