package com.NourishNet.NourishNet.services;

import com.NourishNet.NourishNet.dto.donation.DonationRequestDto;
import com.NourishNet.NourishNet.dto.donation.DonationResponseDto;

import java.util.List;

public interface DonationService {

    DonationResponseDto createDonation(DonationRequestDto donationRequestDto);

    DonationResponseDto getDonationById(Long id);

    List<DonationResponseDto> getAllDonations();
}
