package com.NourishNet.NourishNet.services.impl;

import com.NourishNet.NourishNet.dto.user.UserRequestDto;
import com.NourishNet.NourishNet.dto.user.UserResponseDto;
import com.NourishNet.NourishNet.entity.User;
import com.NourishNet.NourishNet.repository.UserRepository;
import com.NourishNet.NourishNet.services.UserService;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;

    public  UserServiceImpl(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    private final GeometryFactory geometryFactory = new GeometryFactory();

    @Override
    public UserResponseDto registerUser(UserRequestDto userRequestDto) {
        User user = new User();
        user.setName(userRequestDto.getName());
        user.setEmail(userRequestDto.getEmail());
        user.setPassword(userRequestDto.getPassword());
        user.setRole(userRequestDto.getRole());
        
        if (userRequestDto.getLatitude() != null && userRequestDto.getLongitude() != null) {
            Point point = geometryFactory.createPoint(new Coordinate(userRequestDto.getLongitude(), userRequestDto.getLatitude()));
            user.setLocation(point);
        }

        User savedUser = userRepository.save(user);
        return mapToDto(savedUser);
    }

    @Override
    public UserResponseDto findByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return null; //
        }
        return mapToDto(user);
    }

    @Override
    public UserResponseDto updateUserLocation(Long userId, Double lat, Double lng) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Point point = geometryFactory.createPoint(new Coordinate(lng, lat));
        user.setLocation(point);
        User savedUser = userRepository.save(user);
        return mapToDto(savedUser);
    }

    @Override
    public UserResponseDto getUserProfileById(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return mapToDto(user);
    }

    private UserResponseDto mapToDto(User user) {
        UserResponseDto dto = new UserResponseDto();
        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        dto.setRole(user.getRole());
        if (user.getLocation() != null) {
            dto.setLatitude(user.getLocation().getY());
            dto.setLongitude(user.getLocation().getX());
        }
        return dto;
    }
}
