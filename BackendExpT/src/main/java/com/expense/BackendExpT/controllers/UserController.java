package com.expense.BackendExpT.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense.BackendExpT.models.LoginDetails;
import com.expense.BackendExpT.models.User;
import com.expense.BackendExpT.services.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    // Registration
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }

    // Login
    @PostMapping("/login")
    public String login(@RequestBody LoginDetails loginDetails) {
        boolean success = userService.loginUser(loginDetails);

        if (success) {
            return "Login";
        } else {
            return "Wrong Email or Password...";
        }
    }
    
    // get user by email...
    @GetMapping("mail/{email}")
    public User getUserByMail(@PathVariable String email) {
        return userService.getUserByMail(email);
    }

    // Get user (just for testing)
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }
}

