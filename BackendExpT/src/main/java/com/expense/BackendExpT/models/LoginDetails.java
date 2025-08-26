package com.expense.BackendExpT.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDetails {

    private String email;
    private String password;

    // future ke liye role-based auth bhi add karenge
}


