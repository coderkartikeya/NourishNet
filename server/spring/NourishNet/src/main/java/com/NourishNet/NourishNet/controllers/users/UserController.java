package com.NourishNet.NourishNet.controllers.users;

import com.NourishNet.NourishNet.dto.common.ApiResponse;
import com.NourishNet.NourishNet.dto.user.UserRequestDto;
import com.NourishNet.NourishNet.dto.user.UserResponseDto;
import com.NourishNet.NourishNet.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {


    private final UserService userService;

    public UserController(UserService userService){
        this.userService=userService;
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<UserResponseDto>> registerUser(@RequestBody UserRequestDto userRequestDto) {
        UserResponseDto createdUser = userService.registerUser(userRequestDto);
        return ResponseEntity.ok(ApiResponse.success(createdUser, "User registered successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponseDto>> getUserById(@PathVariable Long id) {
        UserResponseDto user = userService.getUserProfileById(id);
        return ResponseEntity.ok(ApiResponse.success(user, "User profile retrieved successfully"));
    }

    @PutMapping("/{id}/location")
    public ResponseEntity<ApiResponse<UserResponseDto>> updateUserLocation(
            @PathVariable Long id,
            @RequestParam Double lat,
            @RequestParam Double lng) {
        UserResponseDto updatedUser = userService.updateUserLocation(id, lat, lng);
        return ResponseEntity.ok(ApiResponse.success(updatedUser, "User location updated successfully"));
    }
}
