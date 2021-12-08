package com.spring.socialising.controllers.admin.order;

import com.spring.socialising.entities.SellInvoiceEntity;
import com.spring.socialising.entities.response.ResponseData;
import com.spring.socialising.services.OrderService.OrderService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @ApiOperation("Get detail Invoice By Id")
    @GetMapping("/details/{id}")
    public ResponseEntity<ResponseData> findDetailById(@PathVariable Long id){
        SellInvoiceEntity sellInvoiceEntity = orderService.findById(id);
        if(sellInvoiceEntity == null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Id incorrect")
                    .data(null)
                    .build(),BAD_REQUEST);
        }

        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("List detail by id :"+id)
                .data(orderService.findAllDetailById(id))
                .build(),OK);
    }

    @ApiOperation("Change status finished")
    @GetMapping("/status-finish/{id}")
    public ResponseEntity<ResponseData> fnishOrder(@PathVariable Long id){
        SellInvoiceEntity sellInvoiceEntity = orderService.findById(id);
        if(sellInvoiceEntity == null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Id incorrect")
                    .data(null)
                    .build(),BAD_REQUEST);
        }
        if(sellInvoiceEntity.getStatus()==1){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Order have already finished")
                    .data(null)
                    .build(),BAD_REQUEST);
        }
        sellInvoiceEntity.setStatus(1);
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("Finished")
                .data(orderService.updateSellInvoice(sellInvoiceEntity))
                .build(),OK);
    }

}
