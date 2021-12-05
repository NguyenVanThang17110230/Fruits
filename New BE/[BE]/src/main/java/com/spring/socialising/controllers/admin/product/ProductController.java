package com.spring.socialising.controllers.admin.product;

import com.spring.socialising.entities.*;
import com.spring.socialising.entities.response.ResponseData;
import com.spring.socialising.services.CategoryService.CategoryService;
import com.spring.socialising.services.ProductService.ProductService;
import com.spring.socialising.services.PurchaseInvoice.PurchaseInvoiceService;
import com.spring.socialising.services.SupplierService.SupplierService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/rest/admin/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private SupplierService supplierService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private PurchaseInvoiceService purchaseInvoiceService;

    @ApiOperation("Get all product by system")
    @GetMapping("/list")
    public ResponseEntity<ResponseData> getAllProduct(){
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("List product")
                .data(productService.findAll())
                .build(),OK);
    }

    @ApiOperation("Get product by id")
    @GetMapping("/by-id/{id}")
    public ResponseEntity<ResponseData> getProductById(@PathVariable Long id){
        ProductEntity productEntity = productService.findProductById(id);
        if(productEntity == null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Id incorrect")
                    .data(null)
                    .build(),BAD_REQUEST);
        }
        else{
            return new ResponseEntity<>(ResponseData.builder()
                    .success(true)
                    .message("Get product by id")
                    .data(productEntity)
                    .build(),OK);
        }
    }

    @ApiOperation("Add product")
    @PostMapping("/add-for-supplier/{id}")
    @Transactional
    public ResponseEntity<ResponseData> addProduct(@PathVariable Long id, @RequestBody List<ProductEntity> productList){
        SupplierEntity supplier = supplierService.findSupplierById(id);
        if(supplier == null ){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Id supplier is incorrect")
                    .data(null)
                    .build(),BAD_REQUEST);
        }

        //Validate product category
        for (ProductEntity product: productList) {
            CategoryEntity category = categoryService.findCategoryById(product.getId_category());
            if(category == null ){
                return new ResponseEntity<>(ResponseData.builder()
                        .success(false)
                        .message("Id category is incorrect")
                        .data(null)
                        .build(),BAD_REQUEST);
            }
        }

        //Add product into system
        ProductEntity productCode = null;
        String code = null;
        for (ProductEntity product: productList) {
                productCode = null;
                code = null;
                do {
                    code = UUID.randomUUID().toString().toLowerCase().replace("-","").substring(0, 6);
                    productCode = productService.findProductByCode(code);
                } while (productCode != null);

                product.setCode(code);
                productService.addProduct(product);
                System.out.println(product.getId());
            }

        PurchaseInvoiceEntity purchaseInvoiceEntity = new PurchaseInvoiceEntity();
        purchaseInvoiceEntity.setId_account(supplier.getId());
        purchaseInvoiceEntity.setCode(UUID.randomUUID().toString().toLowerCase().replace("-","").substring(0, 8));
        purchaseInvoiceEntity.setTotal_price(new BigDecimal(0));
        purchaseInvoiceEntity.setCreated_time(LocalDateTime.now());
        purchaseInvoiceService.addPurchaseWithSupplier(purchaseInvoiceEntity);

        float total = 0;
        for (ProductEntity product: productList) {
            PurchaseInvoiceDetailsEntity purchaseInvoiceDetailsEntity = new PurchaseInvoiceDetailsEntity();
            purchaseInvoiceDetailsEntity.setId_purchase(purchaseInvoiceEntity.getId());
            purchaseInvoiceDetailsEntity.setId_product(product.getId());
            purchaseInvoiceDetailsEntity.setAmount(product.getAmount());
            purchaseInvoiceDetailsEntity.setPrice(product.getPrice());
            purchaseInvoiceService.addPurchaseDetail(purchaseInvoiceDetailsEntity);
            total += product.getAmount() * product.getPurchase_price().floatValue();
        }

        purchaseInvoiceEntity.setTotal_price(new BigDecimal(total));
        purchaseInvoiceService.updatePurchase(purchaseInvoiceEntity);

        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("Purchase succesflly")
                .data(purchaseInvoiceEntity.getId())
                .build(),OK);
    }

    @ApiOperation("Update product")
    @PutMapping("/update")
    public  ResponseEntity<ResponseData> updateProduct(@RequestBody ProductEntity product){
        if(product.getId() == null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("product id is required")
                    .data(null)
                    .build(),OK);
        }

        ProductEntity productEntity = productService.findProductById(product.getId());
        productEntity.setAmount(product.getAmount());
        productEntity.setPrice(product.getPrice());
        productEntity.setName(product.getName());
        productEntity.setId_category(product.getId_category());
        productEntity.setImage(product.getImage());
        productEntity.setShort_description(product.getShort_description());
        productEntity.setLong_description(product.getLong_description());
        productService.updateProduct(productEntity);

        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("updated")
                .data(productEntity)
                .build(),OK);
    }
}
