package com.spring.socialising.controllers.admin.supplier;

import com.spring.socialising.entities.CategoryEntity;
import com.spring.socialising.entities.SupplierEntity;
import com.spring.socialising.entities.response.ResponseData;
import com.spring.socialising.services.SupplierService.SupplierService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/rest/admin/supplier")
public class SupplierController {
    @Autowired
    private SupplierService supplierService;

    @ApiOperation("Get all supplier from system")
    @GetMapping("/list")
    public ResponseEntity<ResponseData> getAllSupplier(){
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("List supplier")
                .data(supplierService.findAll())
                .build(),OK);
    }

    @ApiOperation("Get supplier by id")
    @GetMapping("/by-id/{id}")
    public ResponseEntity<ResponseData> getSupplierById(@PathVariable Long id){
        SupplierEntity supplier = supplierService.findSupplierById(id);
        if(supplier==null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Id incorrect")
                    .data(null)
                    .build(),BAD_REQUEST);
        }
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("found")
                .data(supplier)
                .build(),OK);
    }

    @ApiOperation("Add supplier")
    @PostMapping("/add")
    public ResponseEntity<ResponseData> addSupplier(@RequestBody SupplierEntity supplierEntity){
        supplierService.addSupplier(supplierEntity);
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("created")
                .data(supplierEntity)
                .build(),CREATED);
    }

    @ApiOperation("Update supplier")
    @PutMapping("/update")
    public ResponseEntity<ResponseData> updateSupplier(@RequestBody SupplierEntity supplierEntity){
        supplierService.updateSupplier(supplierEntity);
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("updated")
                .data(supplierEntity)
                .build(),OK);
    }

}
