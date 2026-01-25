package com.NourishNet.NourishNet.controllers.donations;

import com.NourishNet.NourishNet.dto.common.ApiResponse;
import com.NourishNet.NourishNet.dto.donation.DonationRequestDto;
import com.NourishNet.NourishNet.dto.donation.DonationResponseDto;
import com.NourishNet.NourishNet.services.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/donations")
public class DonationController {

    @Autowired
    private DonationService donationService;

    @PostMapping
    public ResponseEntity<ApiResponse<DonationResponseDto>> createDonation(@RequestBody DonationRequestDto donationRequestDto) {
        DonationResponseDto createdDonation = donationService.createDonation(donationRequestDto);
        return ResponseEntity.ok(ApiResponse.success(createdDonation, "Donation created successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<DonationResponseDto>> getDonationById(@PathVariable Long id) {
        DonationResponseDto donation = donationService.getDonationById(id);
        return ResponseEntity.ok(ApiResponse.success(donation, "Donation retrieved successfully"));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<DonationResponseDto>>> getAllDonations() {
        List<DonationResponseDto> donations = donationService.getAllDonations();
        return ResponseEntity.ok(ApiResponse.success(donations, "All donations retrieved successfully"));
    }
}
