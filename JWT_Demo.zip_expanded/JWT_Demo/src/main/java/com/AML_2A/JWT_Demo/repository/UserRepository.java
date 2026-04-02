package com.AML_2A.JWT_Demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AML_2A.JWT_Demo.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

}