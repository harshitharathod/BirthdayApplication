package com.example.demo.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {
 @Autowired
 private UserRepository userRepository;
 
 @GetMapping("/getusers")
 public  List<User> getAllUsers(){
	 return userRepository.findAll();
 }
 
 @GetMapping("/getuser/{id}")
 public Object getUser(@PathVariable Long id) {
		return userRepository.findById(id);
}
 
 @PostMapping("/postuser")
 public User createUser(@RequestBody User user) {
	 return userRepository.save(user);
 }
 
 @PutMapping("/putuser")
 public User updateUser(@RequestBody User user) {
	 return userRepository.save(user);
 }
 
 @DeleteMapping("/deleteuser/{id}")
 public void deleteUser(@PathVariable Long id) {
	  userRepository.deleteById(id);
 }
 }
