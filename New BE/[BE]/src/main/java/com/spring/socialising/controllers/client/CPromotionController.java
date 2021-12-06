package com.spring.socialising.controllers.client;

import com.spring.socialising.entities.PromotionEntity;
import com.spring.socialising.entities.response.ResponseData;
import com.spring.socialising.services.ProductService.ProductService;
import com.spring.socialising.services.Promotion.PromotionService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/rest")
public class CPromotionController {
    @Autowired
    private PromotionService promotionService;

    @ApiOperation("get promotion information")
    @GetMapping("/promotion/{code}")
    public ResponseEntity<ResponseData> findPromotion(@PathVariable String code){
        PromotionEntity promotionEntity = promotionService.findByCode(code);
        if(promotionEntity == null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("could not found promotion "+code)
                    .data(null)
                    .build(), OK);
        }
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("found "+code)
                .data(promotionEntity)
                .build(),OK);
    }
}
