package com.spring.socialising.controllers.admin.product;

import com.spring.socialising.entities.*;
import com.spring.socialising.entities.response.ResponseData;
import com.spring.socialising.securities.JwtUserDetails;
import com.spring.socialising.services.CategoryService.CategoryService;
import com.spring.socialising.services.ProductService.ProductService;
import com.spring.socialising.services.PurchaseInvoice.PurchaseInvoiceService;
import com.spring.socialising.services.SupplierService.SupplierService;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
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

    @ApiOperation("Add product into system")
    @PostMapping("/add")
    public ResponseEntity<ResponseData> addProduct(@RequestBody ProductEntity productEntity){
        productEntity.setPrice(new BigDecimal(0));
        productEntity.setAmount(0);
        productEntity.setPurchase_price(new BigDecimal(0));

        ProductEntity productCode = null;
        String code = null;
        do {
            code = UUID.randomUUID().toString().toLowerCase().replace("-","").substring(0, 6);
            productCode = productService.findProductByCode(code);
        } while (productCode != null);

        productEntity.setCode(code);
        productEntity = productService.addProduct(productEntity);

        if(StringUtils.isEmpty(productEntity.getId().toString())){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Data in not format")
                    .data(null)
                    .build(),BAD_REQUEST);
        }
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("Created")
                .data(productEntity)
                .build(),CREATED);
    }

    @ApiOperation("Purchase product")
    @PostMapping("/purchase-cargo")
    @Transactional
    public ResponseEntity<ResponseData> addPurchase(@RequestBody List<ProductEntity> productList){
        for(ProductEntity product: productList){
            ProductEntity productFound = productService.findProductById(product.getId());
            productFound.setAmount(productFound.getAmount()+product.getAmount());
            productFound.setPurchase_price(product.getPurchase_price());
            productFound.setPrice(product.getPrice());
            productService.updateProduct(productFound);
        }

        JwtUserDetails userDetails = (JwtUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        PurchaseInvoiceEntity purchaseInvoiceEntity = new PurchaseInvoiceEntity();
        purchaseInvoiceEntity.setId_account(Long.parseLong(userDetails.getId()));
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
