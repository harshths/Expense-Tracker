package com.expense.BackendExpT.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expense.BackendExpT.models.Expense;

public interface ExpRepo extends JpaRepository<Expense, Long>{
    List<Expense> findByUserId(Long userId);
}
