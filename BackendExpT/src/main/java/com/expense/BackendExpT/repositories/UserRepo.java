package com.expense.BackendExpT.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expense.BackendExpT.models.User;

public interface UserRepo extends JpaRepository<User, Long>{
    Optional<User> findByEmail(String email);
}
