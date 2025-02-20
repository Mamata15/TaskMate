package com.taskmanagement.config;

import java.security.Key;
import java.util.Base64;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.taskmanagement.Entity.Users;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class jwtToken {

	@Value("${jwt.secret}")
	private String secretKey;

	private Key getSigningKey() {
		byte[] keyBytes = Base64.getDecoder().decode(secretKey); // Decode Base64
		return Keys.hmacShaKeyFor(keyBytes);
	}

	public String generateJWT(Users user) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("userId", user.getId());
		claims.put("email", user.getEmail());

		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.DAY_OF_YEAR, 15);
		Date expirationDate = calendar.getTime();

		return Jwts.builder().setClaims(claims).setSubject(user.getEmail()).setIssuedAt(new Date())
				.setExpiration(expirationDate).signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();
	}
}
