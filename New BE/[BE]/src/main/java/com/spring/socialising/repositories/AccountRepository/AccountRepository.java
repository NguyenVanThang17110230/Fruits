package com.spring.socialising.repositories.AccountRepository;

import com.spring.socialising.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
  Account findAccountByUsername(String username);
}
