package com.NourishNet.NourishNet.services;

import com.NourishNet.NourishNet.dto.user.UserRequestDto;
import com.NourishNet.NourishNet.dto.user.UserResponseDto;

public interface UserService {

    UserResponseDto registerUser(UserRequestDto userRequestDto);

    UserResponseDto findByEmail(String email);

    UserResponseDto updateUserLocation(Long userId, Double lat, Double lng);

    UserResponseDto getUserProfileById(Long userId);

    /*
    Optional : Get user success rate
     */
}
