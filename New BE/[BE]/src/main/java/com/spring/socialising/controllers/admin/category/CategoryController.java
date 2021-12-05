package com.spring.socialising.controllers.admin.category;

import com.spring.socialising.entities.CategoryEntity;
import com.spring.socialising.entities.response.ResponseData;
import com.spring.socialising.services.CategoryService.CategoryService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/rest/admin/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @ApiOperation("Get all catagory from system")
    @GetMapping("/list")
    public ResponseEntity<ResponseData> getAllCategory(){
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("List category")
                .data(categoryService.findAll())
                .build(),BAD_REQUEST);
    }

    @ApiOperation("Get category by id")
    @GetMapping("/by-id/{id}")
    public ResponseEntity<ResponseData> getCategoryById(@PathVariable Long id){
        CategoryEntity categoryEntity = categoryService.findCategoryById(id);
        if(categoryEntity==null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Id incorrect")
                    .data(null)
                    .build(),BAD_REQUEST);
        }
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("found")
                .data(categoryEntity)
                .build(),OK);
    }

    @ApiOperation("Add category")
    @PostMapping("/add")
    public ResponseEntity<ResponseData> addCategory(@RequestBody CategoryEntity category){
        categoryService.addCategory(category);
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("created")
                .data(category)
                .build(),CREATED);
    }

    @ApiOperation("Update category")
    @PutMapping("/update")
    public ResponseEntity<ResponseData> updateCategory(@RequestBody CategoryEntity category){
        CategoryEntity categoryEntity = categoryService.findCategoryById(category.getId());
        if(categoryEntity == null){
            return new ResponseEntity<>(ResponseData.builder()
                    .success(false)
                    .message("Id incorrect")
                    .data(null)
                    .build(),BAD_REQUEST);
        }
        categoryEntity.setName(category.getName());
        categoryService.updateCategory(categoryEntity);
        return new ResponseEntity<>(ResponseData.builder()
                .success(true)
                .message("updated")
                .data(categoryEntity)
                .build(),OK);
    }
}
