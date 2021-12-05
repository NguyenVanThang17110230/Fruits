package com.spring.socialising.controllers.admin.promotion;

import com.spring.socialising.entities.ProductEntity;
import com.spring.socialising.entities.PromotionEntity;
import com.spring.socialising.entities.response.ResponseData;
import com.spring.socialising.services.Promotion.PromotionService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/rest/admin/promotion")
public class PromotionController {
    @Autowired
    private PromotionService promotionService;

    @ApiOperation("Get promotion list")
    @GetMapping("/list")
    public ResponseEntity<ResponseData> findAll(){
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("Product list")
                .data(promotionService.findAll())
                .build(),OK);
    }

    @ApiOperation("Add new promotion")
    @PostMapping("/add")
    public  ResponseEntity<ResponseData> addPromotion(@RequestBody PromotionEntity promotionEntity){
        if(promotionEntity.getStart_date() == null || promotionEntity.getEnd_date() == null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Start date and end date is required")
                    .data(promotionEntity)
                    .build(),BAD_REQUEST);
        }
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("Created")
                .data(promotionService.addPromotion(promotionEntity))
                .build(),OK);
    }

    @ApiOperation("Update promotion")
    @PutMapping
    public ResponseEntity<ResponseData> updatePromotion(@RequestBody PromotionEntity promotionEntity){
        if(promotionEntity.getStart_date() == null || promotionEntity.getEnd_date() == null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Start date and end date is required")
                    .data(promotionEntity)
                    .build(),BAD_REQUEST);
        }
        PromotionEntity promotionFound = promotionService.findById(promotionEntity.getId());
        if(promotionFound == null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Incorrect id")
                    .data(promotionEntity)
                    .build(),BAD_REQUEST);
        }

        promotionFound.setName(promotionEntity.getName());
        promotionFound.setStart_date(promotionEntity.getStart_date());
        promotionFound.setEnd_date(promotionEntity.getEnd_date());

        promotionService.updatePromotion(promotionFound);

        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("Updated")
                .data(promotionFound)
                .build(),OK);
    }
}
