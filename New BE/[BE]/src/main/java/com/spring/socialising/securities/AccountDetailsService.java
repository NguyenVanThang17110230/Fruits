package com.spring.socialising.securities;

import com.spring.socialising.entities.Account;
import com.spring.socialising.entities.CustomerEntity;
import com.spring.socialising.entities.EmployeeEntity;
import com.spring.socialising.repositories.AccountRepository.AccountRepository;
import com.spring.socialising.repositories.CustomerRepository.CustomerRepository;
import com.spring.socialising.repositories.EmployeeRepository.EmployeeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Slf4j
@Service
public class AccountDetailsService implements UserDetailsService {

    private final AccountRepository accountRepository;

    private final EmployeeRepository employeeRepository;

    private final CustomerRepository customerRepository;

    public AccountDetailsService(AccountRepository accountRepository, EmployeeRepository employeeRepository, CustomerRepository customerRepository) {
        this.accountRepository = accountRepository;
        this.employeeRepository = employeeRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    public JwtUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account accountFound = accountRepository.findAccountByUsername(username);

        if(accountFound == null){
            throw new UsernameNotFoundException("User not found");
       }
        String fullName ="";
        CustomerEntity customerEntity = customerRepository.findCustomerEntityByIdAccount(accountFound.getId());

        if(customerEntity != null){
            fullName = customerEntity.getLast_name()+" "+customerEntity.getFirst_name();
        }
        else
        {
            EmployeeEntity employeeEntity = employeeRepository.findEmployeeEntitiesByIdAccount(accountFound.getId());
            fullName = employeeEntity.getLast_name() +" "+employeeEntity.getFirst_name();
        }

        return new JwtUserDetails(
                fullName,
                accountFound.getUsername(),
                accountFound.getPassword(),
                Collections.singleton(new SimpleGrantedAuthority(accountFound.getRole())),
                accountFound.is_active()
        );
    }
}
