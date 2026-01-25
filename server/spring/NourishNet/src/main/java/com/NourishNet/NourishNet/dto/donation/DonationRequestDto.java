package com.NourishNet.NourishNet.dto.donation;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class DonationRequestDto {
    private String foodItem;
    private Integer quantity;
    private Double latitude;
    private Double longitude;

}
