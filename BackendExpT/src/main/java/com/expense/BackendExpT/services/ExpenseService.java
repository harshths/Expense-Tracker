package com.expense.BackendExpT.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense.BackendExpT.models.Expense;
import com.expense.BackendExpT.models.User;
import com.expense.BackendExpT.repositories.ExpRepo;
import com.expense.BackendExpT.repositories.UserRepo;

@Service
public class ExpenseService {

    @Autowired
    private ExpRepo expenseRepository;

    @Autowired
    private UserRepo userRepository;

    // Add expense for a specific user
    public Expense addExpense(Long userId, Expense expense) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        expense.setUser(user); // link expense with user
        return expenseRepository.save(expense);
    }

    // Get all expenses of a user
    public List<Expense> getExpensesByUser(Long userId) {
        return expenseRepository.findByUserId(userId);
    }

    // delete expense...
    public String deleteExpenses(Long expId) {
        if(getExpenseById(expId)){
            expenseRepository.deleteById(expId);
            return "Expense has deleted...";
        }else{
            return "Expense Not found of this id...";
        }
    }

    public boolean getExpenseById(Long expId) {
        return expenseRepository.findById(expId).isPresent();
    }

}
