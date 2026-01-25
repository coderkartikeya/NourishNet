package com.NourishNet.NourishNet.dto.user;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserResponseDto {
    private Long id;
    private String name;
    private String email;
    private String role;
    private Double latitude;
    private Double longitude;

}
