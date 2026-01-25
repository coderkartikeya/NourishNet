package com.NourishNet.NourishNet.dto.user;
import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserRequestDto {
    private String name;

    @Email
    private String email;
    private String password;
    private String role;
    private Double latitude;
    private Double longitude;

}
