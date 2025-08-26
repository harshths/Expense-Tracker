package com.expense.BackendExpT.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense.BackendExpT.models.LoginDetails;
import com.expense.BackendExpT.models.User;
import com.expense.BackendExpT.repositories.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    // Register user
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    // Get user
    public User getUser(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // get user by email...
    public User getUserByMail(String email){
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Login check
    public boolean loginUser(LoginDetails loginDetails) {
        User user = userRepository.findByEmail(loginDetails.getEmail())
                .orElse(null);

        if (user != null && user.getPassword().equals(loginDetails.getPassword())) {
            return true;
        }
        return false;
    }
}


