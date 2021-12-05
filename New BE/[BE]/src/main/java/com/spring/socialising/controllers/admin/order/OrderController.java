package com.spring.socialising.controllers.admin.order;

import com.spring.socialising.entities.response.ResponseData;
import com.spring.socialising.services.OrderService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/rest/admin/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @ApiOperation("get all order")
    @GetMapping("/list")
    public ResponseEntity<ResponseData> findAll(){
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("List order")
                .data(orderService.findAll())
                .build(),OK);
    }


}
