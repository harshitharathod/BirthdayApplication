package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@SpringBootApplication
@EnableScheduling

public class BirthdayMailProjectApplication {
	
	private static JavaMailSender javaMailSender;
	@Autowired
	public BirthdayMailProjectApplication(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	public static void main(String[] args) {

		SpringApplication.run(BirthdayMailProjectApplication.class, args);
	}

	@Scheduled(cron = "0 0 14 * * ?")
	public static void publish() {
		String email;
		String username;

		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			String URL = "jdbc:sqlserver://localhost:1433;databaseName=UsersDB;user=harshitha;password=hr@123";
			Connection con = DriverManager.getConnection(URL);
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(
					"SELECT email,username FROM users WHERE DATEPART(d, date_of_birth) = DATEPART(d, GETDATE()) AND DATEPART(m, date_of_birth) = DATEPART(m, GETDATE())");
			while (rs.next()) {
				email=rs.getString(1);
				username=rs.getString(2);
				System.out.println(email);
				System.out.println(username);
				sendMail(username,email);
				
			}
		} catch (Exception e) {
			System.out.println(e);
		}

	}


	private static void sendMail(String username, String email) {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(email);
		mail.setSubject("Birthday Greetings");
		mail.setText("Happy Birthday"+" "+ username);

		javaMailSender.send(mail);
		System.out.println("Mail sent successfully");
		
	   } 
	}
	
	

